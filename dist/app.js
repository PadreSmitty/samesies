var kh="https://playbrainsmith.com/",Ch=/(github\.io|\.web\.app|\.firebaseapp\.com)$/.test(location.hostname),Dh=["name","toured","muted"],Zo=n=>"samesies."+n;(function(){let e=location.hash.match(/^#carry=(.+)$/);if(e){try{let t=JSON.parse(decodeURIComponent(e[1]));for(let r of Dh)t[r]!=null&&(r==="name"&&localStorage.getItem(Zo("name"))||localStorage.setItem(Zo(r),r==="muted"?String(t[r]):JSON.stringify(t[r])))}catch{}history.replaceState(null,"",location.pathname+location.search)}})();async function Nh(){try{let n=await fetch(kh+"live.json",{cache:"no-store"});return n.ok&&(await n.json()).live===!0}catch{return!1}}function xh(n){let e={};try{for(let r of Dh){let i=localStorage.getItem(Zo(r));i!==null&&(e[r]=r==="muted"?i:JSON.parse(i))}}catch{}let t=new URL(kh);return n&&t.searchParams.set("g",n),t.hash="carry="+encodeURIComponent(JSON.stringify(e)),t.href}var Vh=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},sg=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,_=(s&3)<<4|c>>4,b=(c&15)<<2|d>>6,P=d&63;l||(P=64,a||(b=64)),r.push(t[p],t[_],t[b],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let _=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||_==null)throw new ta;let b=s<<2|c>>4;if(r.push(b),d!==64){let P=c<<4&240|d>>2;if(r.push(P),_!==64){let x=d<<6&192|_;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},ta=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},og=function(n){let e=Vh(n);return Lh.encodeByteArray(e,!0)},Rr=function(n){return og(n).replace(/\./g,"")},ra=function(n){try{return Lh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var cg=()=>ag().__FIREBASE_DEFAULTS__,ug=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&ra(n[1]);return e&&JSON.parse(e)},$i=()=>{try{return cg()||ug()||lg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ia=n=>{var e,t;return(t=(e=$i())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Mh=n=>{let e=ia(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},sa=()=>{var n;return(n=$i())===null||n===void 0?void 0:n.config},oa=n=>{var e;return(e=$i())===null||e===void 0?void 0:e[`_${n}`]};var Ui=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Fh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Rr(JSON.stringify(t)),Rr(JSON.stringify(a)),""].join(".")}function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function hg(){var n;let e=(n=$i())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $h(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bh(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jh(){let n=ye();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gh(){return!hg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aa(){try{return typeof indexedDB=="object"}catch{return!1}}function zh(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var dg="FirebaseError",Me=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=dg,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ft.prototype.create)}},ft=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?fg(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Me(i,c,r)}};function fg(n,e){return n.replace(pg,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var pg=/\{\$([^}]+)}/g;function Wh(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(Oh(s)&&Oh(a)){if(!Qt(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Oh(n){return n!==null&&typeof n=="object"}function In(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function En(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Tn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Kh(n,e){let t=new na(n,e);return t.subscribe.bind(t)}var na=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");mg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ea),i.error===void 0&&(i.error=ea),i.complete===void 0&&(i.complete=ea);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function mg(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ea(){}var YI=4*60*60*1e3;function le(n){return n&&n._delegate?n._delegate:n}var je=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Yt="[DEFAULT]";var ca=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new Ui;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yg(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function gg(n){return n===Yt?void 0:n}function yg(n){return n.instantiationMode==="EAGER"}var Bi=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ca(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var _g=[],z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));var vg={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},wg=z.INFO,Ig={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Eg=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=Ig[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},kt=class{constructor(e){this.name=e,this._logLevel=wg,this._logHandler=Eg,this._userLogHandler=null,_g.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}};var Tg=(n,e)=>e.some(t=>n instanceof t),Hh,Qh;function bg(){return Hh||(Hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ag(){return Qh||(Qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Yh=new WeakMap,la=new WeakMap,Jh=new WeakMap,ua=new WeakMap,da=new WeakMap;function Sg(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Xe(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Yh.set(t,n)}).catch(()=>{}),da.set(e,n),e}function Rg(n){if(la.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});la.set(n,e)}var ha={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return la.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xh(n){ha=n(ha)}function Pg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(qi(this),e,...t);return Jh.set(r,e.sort?e.sort():[e]),Xe(r)}:Ag().includes(n)?function(...e){return n.apply(qi(this),e),Xe(Yh.get(this))}:function(...e){return Xe(n.apply(qi(this),e))}}function kg(n){return typeof n=="function"?Pg(n):(n instanceof IDBTransaction&&Rg(n),Tg(n,bg())?new Proxy(n,ha):n)}function Xe(n){if(n instanceof IDBRequest)return Sg(n);if(ua.has(n))return ua.get(n);let e=kg(n);return e!==n&&(ua.set(n,e),da.set(e,n)),e}var qi=n=>da.get(n);function ed(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),c=Xe(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Xe(a.result),l.oldVersion,l.newVersion,Xe(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}var Cg=["get","getKey","getAll","getAllKeys","count"],Dg=["put","add","delete","clear"],fa=new Map;function Zh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Dg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Cg.includes(t)))return;let s=async function(a,...c){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return fa.set(e,s),s}Xh(n=>({...n,get:(e,t,r)=>Zh(e,t)||n.get(e,t,r),has:(e,t)=>!!Zh(e,t)||n.has(e,t)}));var ma=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ng(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Ng(n){let e=n.getComponent();return e?.type==="VERSION"}var ga="@firebase/app",td="0.10.16";var pt=new kt("@firebase/app"),xg="@firebase/app-compat",Og="@firebase/analytics-compat",Vg="@firebase/analytics",Lg="@firebase/app-check-compat",Mg="@firebase/app-check",Fg="@firebase/auth",Ug="@firebase/auth-compat",$g="@firebase/database",Bg="@firebase/data-connect",qg="@firebase/database-compat",jg="@firebase/functions",Gg="@firebase/functions-compat",zg="@firebase/installations",Wg="@firebase/installations-compat",Kg="@firebase/messaging",Hg="@firebase/messaging-compat",Qg="@firebase/performance",Yg="@firebase/performance-compat",Jg="@firebase/remote-config",Xg="@firebase/remote-config-compat",Zg="@firebase/storage",ey="@firebase/storage-compat",ty="@firebase/firestore",ny="@firebase/vertexai",ry="@firebase/firestore-compat",iy="firebase",sy="11.0.2";var ya="[DEFAULT]",oy={[ga]:"fire-core",[xg]:"fire-core-compat",[Vg]:"fire-analytics",[Og]:"fire-analytics-compat",[Mg]:"fire-app-check",[Lg]:"fire-app-check-compat",[Fg]:"fire-auth",[Ug]:"fire-auth-compat",[$g]:"fire-rtdb",[Bg]:"fire-data-connect",[qg]:"fire-rtdb-compat",[jg]:"fire-fn",[Gg]:"fire-fn-compat",[zg]:"fire-iid",[Wg]:"fire-iid-compat",[Kg]:"fire-fcm",[Hg]:"fire-fcm-compat",[Qg]:"fire-perf",[Yg]:"fire-perf-compat",[Jg]:"fire-rc",[Xg]:"fire-rc-compat",[Zg]:"fire-gcs",[ey]:"fire-gcs-compat",[ty]:"fire-fst",[ry]:"fire-fst-compat",[ny]:"fire-vertex","fire-js":"fire-js",[iy]:"fire-js-all"};var ji=new Map,ay=new Map,_a=new Map;function nd(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Dt(n){let e=n.name;if(_a.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;_a.set(e,n);for(let t of ji.values())nd(t,n);for(let t of ay.values())nd(t,n);return!0}function kr(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ze(n){return n.settings!==void 0}var cy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new ft("app","Firebase",cy);var va=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}};var Nt=sy;function Ea(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:ya,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ct.create("bad-app-name",{appName:String(i)});if(t||(t=sa()),!t)throw Ct.create("no-options");let s=ji.get(i);if(s){if(Qt(t,s.options)&&Qt(r,s.config))return s;throw Ct.create("duplicate-app",{appName:i})}let a=new Bi(i);for(let l of _a.values())a.addComponent(l);let c=new va(t,r,a);return ji.set(i,c),c}function Gi(n=ya){let e=ji.get(n);if(!e&&n===ya&&sa())return Ea();if(!e)throw Ct.create("no-app",{appName:n});return e}function Qe(n,e,t){var r;let i=(r=oy[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(c.join(" "));return}Dt(new je(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var uy="firebase-heartbeat-database",ly=1,Pr="firebase-heartbeat-store",pa=null;function od(){return pa||(pa=ed(uy,ly,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ct.create("idb-open",{originalErrorMessage:n.message})})),pa}async function hy(n){try{let t=(await od()).transaction(Pr),r=await t.objectStore(Pr).get(ad(n));return await t.done,r}catch(e){if(e instanceof Me)pt.warn(e.message);else{let t=Ct.create("idb-get",{originalErrorMessage:e?.message});pt.warn(t.message)}}}async function rd(n,e){try{let r=(await od()).transaction(Pr,"readwrite");await r.objectStore(Pr).put(e,ad(n)),await r.done}catch(t){if(t instanceof Me)pt.warn(t.message);else{let r=Ct.create("idb-set",{originalErrorMessage:t?.message});pt.warn(r.message)}}}function ad(n){return`${n.name}!${n.options.appId}`}var dy=1024,fy=30*24*60*60*1e3,wa=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Ia(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=id();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let c=new Date(a.date).valueOf();return Date.now()-c<=fy}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=id(),{heartbeatsToSend:r,unsentEntries:i}=py(this._heartbeatsCache.heartbeats),s=Rr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return pt.warn(t),""}}};function id(){return new Date().toISOString().substring(0,10)}function py(n,e=dy){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),sd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),sd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Ia=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aa()?zh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await hy(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return rd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return rd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function sd(n){return Rr(JSON.stringify({version:2,heartbeats:n})).length}function my(n){Dt(new je("platform-logger",e=>new ma(e),"PRIVATE")),Dt(new je("heartbeat",e=>new wa(e),"PRIVATE")),Qe(ga,td,n),Qe(ga,td,"esm2017"),Qe("fire-js","")}my("");var gy="firebase",yy="11.0.2";Qe(gy,yy,"app");function zi(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Sd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Rd=Sd,Pd=new ft("auth","Firebase",Sd());var Xi=new kt("@firebase/auth");function _y(n,...e){Xi.logLevel<=z.WARN&&Xi.warn(`Auth (${Nt}): ${n}`,...e)}function Ki(n,...e){Xi.logLevel<=z.ERROR&&Xi.error(`Auth (${Nt}): ${n}`,...e)}function Ye(n,...e){throw Ga(n,...e)}function tt(n,...e){return Ga(n,...e)}function kd(n,e,t){let r=Object.assign(Object.assign({},Rd()),{[e]:t});return new ft("auth","Firebase",r).create(e,{appName:n.name})}function Ot(n){return kd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ga(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Pd.create(n,...e)}function M(n,e,...t){if(!n)throw Ga(e,...t)}function et(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Ki(e),new Error(e)}function gt(n,e){n||et(e)}function Sa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function vy(){return cd()==="http:"||cd()==="https:"}function cd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function wy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vy()||Bh()||"connection"in navigator)?navigator.onLine:!0}function Iy(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Jt=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile=Uh()||qh()}get(){return wy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function za(n,e){gt(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Zi=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var Ey={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Ty=new Jt(3e4,6e4);function pe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Se(n,e,t,r,i={}){return Cd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let c=In(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return $h()||(d.referrerPolicy="no-referrer"),Zi.fetch()(Dd(n,n.config.apiHost,t,c),d)})}async function Cd(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},Ey),e);try{let i=new Ra(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw Dr(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let c=s.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Dr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Dr(n,"user-disabled",a);let p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw kd(n,p,d);Ye(n,p)}}catch(i){if(i instanceof Me)throw i;Ye(n,"network-request-failed",{message:String(i)})}}async function Vt(n,e,t,r,i={}){let s=await Se(n,e,t,r,i);return"mfaPendingCredential"in s&&Ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Dd(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?za(n.config,i):`${n.config.apiScheme}://${i}`}function by(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Ra=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),Ty.get())})}};function Dr(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=tt(n,e,r);return i.customData._tokenResponse=t,i}function ud(n){return n!==void 0&&n.enterprise!==void 0}var es=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return by(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function Nd(n,e){return Se(n,"GET","/v2/recaptchaConfig",pe(n,e))}async function Ay(n,e){return Se(n,"POST","/v1/accounts:delete",e)}async function xd(n,e){return Se(n,"POST","/v1/accounts:lookup",e)}function Nr(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Od(n,e=!1){let t=le(n),r=await t.getIdToken(e),i=Wa(r);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:Nr(Ta(i.auth_time)),issuedAtTime:Nr(Ta(i.iat)),expirationTime:Nr(Ta(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ta(n){return Number(n)*1e3}function Wa(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ki("JWT malformed, contained fewer than 3 sections"),null;try{let i=ra(t);return i?JSON.parse(i):(Ki("Failed to decode base64 JWT payload"),null)}catch(i){return Ki("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ld(n){let e=Wa(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Lr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Me&&Sy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Sy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Pa=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Mr=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ts(n){var e;let t=n.auth,r=await n.getIdToken(),i=await Lr(n,xd(t,{idToken:r}));M(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ld(s.providerUserInfo):[],c=Ry(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!c?.length,p=l?d:!1,_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Mr(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,_)}async function Vd(n){let e=le(n);await ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ry(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ld(n){return n.map(e=>{var{providerId:t}=e,r=zi(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Py(n,e){let t=await Cd(n,{},async()=>{let r=In({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Dd(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Zi.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ky(n,e){return Se(n,"POST","/v2/accounts:revokeToken",pe(n,e))}var xr=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");let t=ld(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await Py(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return et("not implemented")}};function xt(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var An=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=zi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Od(this,e)}reload(){return Vd(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ts(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(Ot(this.auth));let e=await this.getIdToken();return await Lr(this,Ay(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,l,d,p;let _=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(i=t.email)!==null&&i!==void 0?i:void 0,P=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,x=(a=t.photoURL)!==null&&a!==void 0?a:void 0,L=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,G=(d=t.createdAt)!==null&&d!==void 0?d:void 0,K=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:H,emailVerified:re,isAnonymous:De,providerData:te,stsTokenManager:I}=t;M(H&&I,e,"internal-error");let m=xr.fromJSON(this.name,I);M(typeof H=="string",e,"internal-error"),xt(_,e.name),xt(b,e.name),M(typeof re=="boolean",e,"internal-error"),M(typeof De=="boolean",e,"internal-error"),xt(P,e.name),xt(x,e.name),xt(L,e.name),xt(N,e.name),xt(G,e.name),xt(K,e.name);let y=new n({uid:H,auth:e,email:b,emailVerified:re,displayName:_,isAnonymous:De,photoURL:x,phoneNumber:P,tenantId:L,stsTokenManager:m,createdAt:G,lastLoginAt:K});return te&&Array.isArray(te)&&(y.providerData=te.map(w=>Object.assign({},w))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,t,r=!1){let i=new xr;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ts(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];M(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Ld(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new xr;c.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var hd=new Map;function mt(n){gt(n instanceof Function,"Expected a class definition");let e=hd.get(n);return e?(gt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hd.set(n,e),e)}var ns=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};ns.type="NONE";var ka=ns;function Hi(n,e,t){return`firebase:${n}:${e}:${t}`}var rs=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Hi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(mt(ka),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||mt(ka),a=Hi(r,e.config.apiKey,e.name),c=null;for(let d of t)try{let p=await d._get(a);if(p){let _=An._fromJSON(e,p);d!==s&&(c=_),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function dd(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Md(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qd(e))return"Blackberry";if(jd(e))return"Webos";if(Fd(e))return"Safari";if((e.includes("chrome/")||Ud(e))&&!e.includes("edge/"))return"Chrome";if(Bd(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Md(n=ye()){return/firefox\//i.test(n)}function Fd(n=ye()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ud(n=ye()){return/crios\//i.test(n)}function $d(n=ye()){return/iemobile/i.test(n)}function Bd(n=ye()){return/android/i.test(n)}function qd(n=ye()){return/blackberry/i.test(n)}function jd(n=ye()){return/webos/i.test(n)}function Ka(n=ye()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Cy(n=ye()){var e;return Ka(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dy(){return jh()&&document.documentMode===10}function Gd(n=ye()){return Ka(n)||Bd(n)||jd(n)||qd(n)||/windows phone/i.test(n)||$d(n)}function zd(n,e=[]){let t;switch(n){case"Browser":t=dd(ye());break;case"Worker":t=`${dd(ye())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nt}/${r}`}var Ca=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,c)=>{try{let l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Ny(n,e={}){return Se(n,"GET","/v2/passwordPolicy",pe(n,e))}var xy=6,Da=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:xy,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Na=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new is(this),this.idTokenSubscription=new is(this),this.beforeStateQueue=new Ca(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await xd(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ze(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ts(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Iy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(Ot(this));let t=e?le(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(Ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(Ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Ny(this),t=new Da(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ft("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ky(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&mt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&_y(`Error while retrieving App Check token: ${t.error}`),t?.token}};function rn(n){return le(n)}var is=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kh(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Es={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Oy(n){Es=n}function Wd(n){return Es.loadJS(n)}function Vy(){return Es.recaptchaEnterpriseScript}function Ly(){return Es.gapiScript}function Kd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var xa=class{constructor(){this.enterprise=new Oa}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Oa=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var My="recaptcha-enterprise",Or="NO_RECAPTCHA",ss=class{constructor(e){this.type=My,this.auth=rn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{Nd(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let d=new es(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){let l=window.grecaptcha;ud(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(Or)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xa().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&ud(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Vy();l.length!==0&&(l+=c),Wd(l).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}};async function Cr(n,e,t,r=!1,i=!1){let s=new ss(n),a;if(i)a=Or;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Vr(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await Cr(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await Cr(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let c=await Cr(n,e,t);return r(n,c).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let p=await Cr(n,e,t,!1,!0);return r(n,p)}return Promise.reject(l)})}else{let c=await Cr(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")}async function Fy(n){let e=rn(n),t=await Nd(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new es(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new ss(e).verify()}function Hd(n,e){let t=kr(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(Qt(s,e??{}))return i;Ye(i,"already-initialized")}return t.initialize({options:e})}function Uy(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(mt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Qd(n,e,t){let r=rn(n);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=Yd(e),{host:a,port:c}=$y(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||By()}function Yd(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $y(n){let e=Yd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:fd(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:fd(a)}}}function fd(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function By(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Xt=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,t){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}};async function qy(n,e){return Se(n,"POST","/v1/accounts:signUp",e)}async function jy(n,e){return Vt(n,"POST","/v1/accounts:signInWithPassword",pe(n,e))}async function Gy(n,e){return Vt(n,"POST","/v1/accounts:signInWithEmailLink",pe(n,e))}async function zy(n,e){return Vt(n,"POST","/v1/accounts:signInWithEmailLink",pe(n,e))}var Fr=class n extends Xt{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vr(e,t,"signInWithPassword",jy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Gy(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vr(e,r,"signUpPassword",qy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return zy(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function bn(n,e){return Vt(n,"POST","/v1/accounts:signInWithIdp",pe(n,e))}var Wy="http://localhost",Zt=class n extends Xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=zi(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return bn(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,bn(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,bn(e,t)}buildRequest(){let e={requestUri:Wy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=In(t)}return e}};async function pd(n,e){return Se(n,"POST","/v1/accounts:sendVerificationCode",pe(n,e))}async function Ky(n,e){return Vt(n,"POST","/v1/accounts:signInWithPhoneNumber",pe(n,e))}async function Hy(n,e){let t=await Vt(n,"POST","/v1/accounts:signInWithPhoneNumber",pe(n,e));if(t.temporaryProof)throw Dr(n,"account-exists-with-different-credential",t);return t}var Qy={USER_NOT_FOUND:"user-not-found"};async function Yy(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Vt(n,"POST","/v1/accounts:signInWithPhoneNumber",pe(n,t),Qy)}var Ur=class n extends Xt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ky(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Hy(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Yy(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Jy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xy(n){let e=En(Tn(n)).link,t=e?En(Tn(e)).deep_link_id:null,r=En(Tn(n)).deep_link_id;return(r?En(Tn(r)).link:null)||r||t||e||n}var os=class n{constructor(e){var t,r,i,s,a,c;let l=En(Tn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,_=Jy((i=l.mode)!==null&&i!==void 0?i:null);M(d&&p&&_,"argument-error"),this.apiKey=d,this.operation=_,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=Xy(e);try{return new n(t)}catch{return null}}};var Sn=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Fr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=os.parseLink(t);return M(r,"argument-error"),Fr._fromEmailAndCode(e,r.code,r.tenantId)}};Sn.PROVIDER_ID="password";Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var as=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var en=class extends as{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var $r=class n extends en{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};$r.FACEBOOK_SIGN_IN_METHOD="facebook.com";$r.PROVIDER_ID="facebook.com";var Br=class n extends en{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";var qr=class n extends en{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";var jr=class n extends en{constructor(){super("twitter.com")}static credential(e,t){return Zt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};jr.TWITTER_SIGN_IN_METHOD="twitter.com";jr.PROVIDER_ID="twitter.com";async function Zy(n,e){return Vt(n,"POST","/v1/accounts:signUp",pe(n,e))}var tn=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await An._fromIdTokenResponse(e,r,i),a=md(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=md(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function md(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function Ha(n){var e;if(Ze(n.app))return Promise.reject(Ot(n));let t=rn(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new tn({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await Zy(t,{returnSecureToken:!0}),i=await tn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var Va=class n extends Me{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Jd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Va._fromErrorAndOperation(n,s,e,r):s})}async function e_(n,e,t=!1){let r=await Lr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return tn._forOperation(n,"link",r)}async function t_(n,e,t=!1){let{auth:r}=n;if(Ze(r.app))return Promise.reject(Ot(r));let i="reauthenticate";try{let s=await Lr(n,Jd(r,i,e,n),t);M(s.idToken,r,"internal-error");let a=Wa(s.idToken);M(a,r,"internal-error");let{sub:c}=a;return M(n.uid===c,r,"user-mismatch"),tn._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}async function n_(n,e,t=!1){if(Ze(n.app))return Promise.reject(Ot(n));let r="signIn",i=await Jd(n,r,e),s=await tn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function Xd(n,e,t,r){return le(n).onIdTokenChanged(e,t,r)}function Zd(n,e,t){return le(n).beforeAuthStateChanged(e,t)}function Qa(n,e,t,r){return le(n).onAuthStateChanged(e,t,r)}function gd(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:start",pe(n,e))}function r_(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:finalize",pe(n,e))}function i_(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:start",pe(n,e))}function s_(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:finalize",pe(n,e))}var cs="__sak";var us=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cs,"1"),this.storage.removeItem(cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var o_=1e3,a_=10,ls=class extends us{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Dy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,a_):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},o_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};ls.type="LOCAL";var ef=ls;var hs=class extends us{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};hs.type="SESSION";var Ya=hs;function c_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var ds=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(a).map(async d=>d(t.origin,s)),l=await c_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};ds.receivers=[];function Ja(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var La=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{let d=Ja("",20);i.port1.start();let p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(_){let b=_;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(b.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function nt(){return window}function u_(n){nt().location.href=n}function tf(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function l_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h_(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function d_(){return tf()?self:null}var nf="firebaseLocalStorageDb",f_=1,fs="firebaseLocalStorage",rf="fbase_key",nn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Ts(n,e){return n.transaction([fs],e?"readwrite":"readonly").objectStore(fs)}function p_(){let n=indexedDB.deleteDatabase(nf);return new nn(n).toPromise()}function Ma(){let n=indexedDB.open(nf,f_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(fs,{keyPath:rf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(fs)?e(r):(r.close(),await p_(),e(await Ma()))})})}async function yd(n,e,t){let r=Ts(n,!0).put({[rf]:e,value:t});return new nn(r).toPromise()}async function m_(n,e){let t=Ts(n,!1).get(e),r=await new nn(t).toPromise();return r===void 0?null:r.value}function _d(n,e){let t=Ts(n,!0).delete(e);return new nn(t).toPromise()}var g_=800,y_=3,ps=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ma(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>y_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ds._getInstance(d_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await l_(),!this.activeServiceWorker)return;this.sender=new La(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Ma();return await yd(e,cs,"1"),await _d(e,cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>m_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_d(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=Ts(i,!1).getAll();return new nn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),g_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};ps.type="LOCAL";var sf=ps;function vd(n,e){return Se(n,"POST","/v2/accounts/mfaSignIn:start",pe(n,e))}function __(n,e){return Se(n,"POST","/v2/accounts/mfaSignIn:finalize",pe(n,e))}function v_(n,e){return Se(n,"POST","/v2/accounts/mfaSignIn:finalize",pe(n,e))}var bE=Kd("rcb"),AE=new Jt(3e4,6e4);var Qi="recaptcha";async function w_(n,e,t){var r;if(!n._getRecaptchaConfig())try{await Fy(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){M(s.type==="enroll",n,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Vr(n,a,"mfaSmsEnrollment",async(p,_)=>{if(_.phoneEnrollmentInfo.captchaResponse===Or){M(t?.type===Qi,p,"argument-error");let b=await ba(p,_,t);return gd(p,b)}return gd(p,_)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneSessionInfo.sessionInfo}else{M(s.type==="signin",n,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;M(a,n,"missing-multi-factor-info");let c={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Vr(n,c,"mfaSmsSignIn",async(_,b)=>{if(b.phoneSignInInfo.captchaResponse===Or){M(t?.type===Qi,_,"argument-error");let P=await ba(_,b,t);return vd(_,P)}return vd(_,b)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Vr(n,s,"sendVerificationCode",async(d,p)=>{if(p.captchaResponse===Or){M(t?.type===Qi,d,"argument-error");let _=await ba(d,p,t);return pd(d,_)}return pd(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function ba(n,e,t){M(t.type===Qi,n,"argument-error");let r=await t.verify();M(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:c,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var Gr=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=rn(e)}verifyPhoneNumber(e,t){return w_(this.auth,e,le(t))}static credential(e,t){return Ur._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?Ur._fromTokenResponse(t,r):null}};Gr.PROVIDER_ID="phone";Gr.PHONE_SIGN_IN_METHOD="phone";function I_(n,e){return e?mt(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var zr=class extends Xt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function E_(n){return n_(n.auth,new zr(n),n.bypassAuthState)}function T_(n){let{auth:e,user:t}=n;return M(t,e,"internal-error"),t_(t,new zr(n),n.bypassAuthState)}async function b_(n){let{auth:e,user:t}=n;return M(t,e,"internal-error"),e_(t,new zr(n),n.bypassAuthState)}var ms=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E_;case"linkViaPopup":case"linkViaRedirect":return b_;case"reauthViaPopup":case"reauthViaRedirect":return T_;default:Ye(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var A_=new Jt(2e3,1e4);var Fa=class n extends ms{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");let e=Ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A_.get())};e()}};Fa.currentPopupAction=null;var S_="pendingRedirect",Yi=new Map,Ua=class extends ms{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Yi.get(this.auth._key());if(!e){try{let r=await R_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Yi.set(this.auth._key(),e)}return this.bypassAuthState||Yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function R_(n,e){let t=C_(e),r=k_(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function P_(n,e){Yi.set(n._key(),e)}function k_(n){return mt(n._redirectPersistence)}function C_(n){return Hi(S_,n.config.apiKey,n.name)}async function D_(n,e,t=!1){if(Ze(n.app))return Promise.reject(Ot(n));let r=rn(n),i=I_(r,e),a=await new Ua(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var N_=10*60*1e3,$a=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!x_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!of(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N_&&this.cachedEventUids.clear(),this.cachedEventUids.has(wd(e))}saveEventToCache(e){this.cachedEventUids.add(wd(e)),this.lastProcessedEventTime=Date.now()}};function wd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function of({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function x_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return of(n);default:return!1}}async function O_(n,e={}){return Se(n,"GET","/v1/projects",e)}var V_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L_=/^https?/;async function M_(n){if(n.config.emulator)return;let{authorizedDomains:e}=await O_(n);for(let t of e)try{if(F_(t))return}catch{}Ye(n,"unauthorized-domain")}function F_(n){let e=Sa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!L_.test(t))return!1;if(V_.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var U_=new Jt(3e4,6e4);function Id(){let n=nt().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $_(n){return new Promise((e,t)=>{var r,i,s;function a(){Id(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Id(),t(tt(n,"network-request-failed"))},timeout:U_.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)a();else{let c=Kd("iframefcb");return nt()[c]=()=>{gapi.load?a():t(tt(n,"network-request-failed"))},Wd(`${Ly()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ji=null,e})}var Ji=null;function B_(n){return Ji=Ji||$_(n),Ji}var q_=new Jt(5e3,15e3),j_="__/auth/iframe",G_="emulator/auth/iframe",z_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K_(n){let e=n.config;M(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?za(e,G_):`https://${n.config.authDomain}/${j_}`,r={apiKey:e.apiKey,appName:n.name,v:Nt},i=W_.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${In(r).slice(1)}`}async function H_(n){let e=await B_(n),t=nt().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:K_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:z_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=tt(n,"network-request-failed"),c=nt().setTimeout(()=>{s(a)},q_.get());function l(){nt().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}var Q_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y_=500,J_=600,X_="_blank",Z_="http://localhost",gs=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function ev(n,e,t,r=Y_,i=J_){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",l=Object.assign(Object.assign({},Q_),{width:r.toString(),height:i.toString(),top:s,left:a}),d=ye().toLowerCase();t&&(c=Ud(d)?X_:t),Md(d)&&(e=e||Z_,l.scrollbars="yes");let p=Object.entries(l).reduce((b,[P,x])=>`${b}${P}=${x},`,"");if(Cy(d)&&c!=="_self")return tv(e||"",c),new gs(null);let _=window.open(e||"",c,p);M(_,n,"popup-blocked");try{_.focus()}catch{}return new gs(_)}function tv(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var nv="__/auth/handler",rv="emulator/auth/handler",iv=encodeURIComponent("fac");async function Ed(n,e,t,r,i,s){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Nt,eventId:i};if(e instanceof as){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Wh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,_]of Object.entries(s||{}))a[p]=_}if(e instanceof en){let p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let c=a;for(let p of Object.keys(c))c[p]===void 0&&delete c[p];let l=await n._getAppCheckToken(),d=l?`#${iv}=${encodeURIComponent(l)}`:"";return`${sv(n)}?${In(c).slice(1)}${d}`}function sv({config:n}){return n.emulator?za(n,rv):`https://${n.authDomain}/${nv}`}var Aa="webStorageSupport",Ba=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ya,this._completeRedirectFn=D_,this._overrideRedirectResult=P_}async _openPopup(e,t,r,i){var s;gt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await Ed(e,t,r,Sa(),i);return ev(e,a,Ja())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await Ed(e,t,r,Sa(),i);return u_(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(gt(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await H_(e),r=new $a(e);return t.register("authEvent",i=>(M(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Aa,{type:Aa},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[Aa];a!==void 0&&t(!!a),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=M_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gd()||Fd()||Ka()}},af=Ba,ys=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return et("unexpected MultiFactorSessionType")}}},qa=class n extends ys{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return r_(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return __(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},_s=class{constructor(){}static assertion(e){return qa._fromCredential(e)}};_s.FACTOR_ID="phone";var vs=class{static assertionForEnrollment(e,t){return ws._fromSecret(e,t)}static assertionForSignIn(e,t){return ws._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;M(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await i_(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Is._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};vs.FACTOR_ID="totp";var ws=class n extends ys{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return M(typeof this.secret<"u",e,"argument-error"),s_(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){M(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return v_(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Is=class n{constructor(e,t,r,i,s,a,c){this.sessionInfo=a,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(Wi(e)||Wi(t))&&(i=!0),i&&(Wi(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Wi(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Wi(n){return typeof n>"u"||n?.length===0}var Td="@firebase/auth",bd="1.8.1";var ja=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function ov(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function av(n){Dt(new je("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zd(n)},d=new Na(r,i,s,l);return Uy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Dt(new je("auth-internal",e=>{let t=rn(e.getProvider("auth").getImmediate());return(r=>new ja(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Td,bd,ov(n)),Qe(Td,bd,"esm2017")}var cv=5*60,uv=oa("authIdTokenMaxAge")||cv,Ad=null,lv=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>uv)return;let i=t?.token;Ad!==i&&(Ad=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Xa(n=Gi()){let e=kr(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Hd(n,{popupRedirectResolver:af,persistence:[sf,ef,Ya]}),r=oa("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=lv(s.toString());Zd(t,a,()=>a(t.currentUser)),Xd(t,c=>a(c))}}let i=ia("auth");return i&&Qd(t,`http://${i}`),t}function hv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Oy({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=tt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",hv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});av("Browser");var cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},uf={};var Lt,Za;(function(){var n;function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(w,E,S){for(var g=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)g[lt-2]=arguments[lt];return m.prototype[E].apply(w,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,m,y){y||(y=0);var w=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)w[E]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(E=0;16>E;++E)w[E]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],E=I.g[2];var S=I.g[3],g=m+(S^y&(E^S))+w[0]+3614090360&4294967295;m=y+(g<<7&4294967295|g>>>25),g=S+(E^m&(y^E))+w[1]+3905402710&4294967295,S=m+(g<<12&4294967295|g>>>20),g=E+(y^S&(m^y))+w[2]+606105819&4294967295,E=S+(g<<17&4294967295|g>>>15),g=y+(m^E&(S^m))+w[3]+3250441966&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(S^y&(E^S))+w[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=S+(E^m&(y^E))+w[5]+1200080426&4294967295,S=m+(g<<12&4294967295|g>>>20),g=E+(y^S&(m^y))+w[6]+2821735955&4294967295,E=S+(g<<17&4294967295|g>>>15),g=y+(m^E&(S^m))+w[7]+4249261313&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(S^y&(E^S))+w[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=S+(E^m&(y^E))+w[9]+2336552879&4294967295,S=m+(g<<12&4294967295|g>>>20),g=E+(y^S&(m^y))+w[10]+4294925233&4294967295,E=S+(g<<17&4294967295|g>>>15),g=y+(m^E&(S^m))+w[11]+2304563134&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(S^y&(E^S))+w[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=S+(E^m&(y^E))+w[13]+4254626195&4294967295,S=m+(g<<12&4294967295|g>>>20),g=E+(y^S&(m^y))+w[14]+2792965006&4294967295,E=S+(g<<17&4294967295|g>>>15),g=y+(m^E&(S^m))+w[15]+1236535329&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(E^S&(y^E))+w[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=S+(y^E&(m^y))+w[6]+3225465664&4294967295,S=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(S^m))+w[11]+643717713&4294967295,E=S+(g<<14&4294967295|g>>>18),g=y+(S^m&(E^S))+w[0]+3921069994&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(E^S&(y^E))+w[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=S+(y^E&(m^y))+w[10]+38016083&4294967295,S=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(S^m))+w[15]+3634488961&4294967295,E=S+(g<<14&4294967295|g>>>18),g=y+(S^m&(E^S))+w[4]+3889429448&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(E^S&(y^E))+w[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=S+(y^E&(m^y))+w[14]+3275163606&4294967295,S=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(S^m))+w[3]+4107603335&4294967295,E=S+(g<<14&4294967295|g>>>18),g=y+(S^m&(E^S))+w[8]+1163531501&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(E^S&(y^E))+w[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=S+(y^E&(m^y))+w[2]+4243563512&4294967295,S=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(S^m))+w[7]+1735328473&4294967295,E=S+(g<<14&4294967295|g>>>18),g=y+(S^m&(E^S))+w[12]+2368359562&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(y^E^S)+w[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=S+(m^y^E)+w[8]+2272392833&4294967295,S=m+(g<<11&4294967295|g>>>21),g=E+(S^m^y)+w[11]+1839030562&4294967295,E=S+(g<<16&4294967295|g>>>16),g=y+(E^S^m)+w[14]+4259657740&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(y^E^S)+w[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=S+(m^y^E)+w[4]+1272893353&4294967295,S=m+(g<<11&4294967295|g>>>21),g=E+(S^m^y)+w[7]+4139469664&4294967295,E=S+(g<<16&4294967295|g>>>16),g=y+(E^S^m)+w[10]+3200236656&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(y^E^S)+w[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=S+(m^y^E)+w[0]+3936430074&4294967295,S=m+(g<<11&4294967295|g>>>21),g=E+(S^m^y)+w[3]+3572445317&4294967295,E=S+(g<<16&4294967295|g>>>16),g=y+(E^S^m)+w[6]+76029189&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(y^E^S)+w[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=S+(m^y^E)+w[12]+3873151461&4294967295,S=m+(g<<11&4294967295|g>>>21),g=E+(S^m^y)+w[15]+530742520&4294967295,E=S+(g<<16&4294967295|g>>>16),g=y+(E^S^m)+w[2]+3299628645&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(E^(y|~S))+w[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=S+(y^(m|~E))+w[7]+1126891415&4294967295,S=m+(g<<10&4294967295|g>>>22),g=E+(m^(S|~y))+w[14]+2878612391&4294967295,E=S+(g<<15&4294967295|g>>>17),g=y+(S^(E|~m))+w[5]+4237533241&4294967295,y=E+(g<<21&4294967295|g>>>11),g=m+(E^(y|~S))+w[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=S+(y^(m|~E))+w[3]+2399980690&4294967295,S=m+(g<<10&4294967295|g>>>22),g=E+(m^(S|~y))+w[10]+4293915773&4294967295,E=S+(g<<15&4294967295|g>>>17),g=y+(S^(E|~m))+w[1]+2240044497&4294967295,y=E+(g<<21&4294967295|g>>>11),g=m+(E^(y|~S))+w[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=S+(y^(m|~E))+w[15]+4264355552&4294967295,S=m+(g<<10&4294967295|g>>>22),g=E+(m^(S|~y))+w[6]+2734768916&4294967295,E=S+(g<<15&4294967295|g>>>17),g=y+(S^(E|~m))+w[13]+1309151649&4294967295,y=E+(g<<21&4294967295|g>>>11),g=m+(E^(y|~S))+w[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=S+(y^(m|~E))+w[11]+3174756917&4294967295,S=m+(g<<10&4294967295|g>>>22),g=E+(m^(S|~y))+w[2]+718787259&4294967295,E=S+(g<<15&4294967295|g>>>17),g=y+(S^(E|~m))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,w=this.B,E=this.h,S=0;S<m;){if(E==0)for(;S<=y;)i(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(w[E++]=I.charCodeAt(S++),E==this.blockSize){i(this,w),E=0;break}}else for(;S<m;)if(w[E++]=I[S++],E==this.blockSize){i(this,w),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var w=0;32>w;w+=8)I[y++]=this.g[m]>>>w&255;return I};function s(I,m){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],w=!0,E=I.length-1;0<=E;E--){var S=I[E]|0;w&&S==m||(y[E]=S,w=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?s(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return N(d(-I));for(var m=[],y=1,w=0;I>=y;w++)m[w]=I/y|0,y*=4294967296;return new a(m,0)}function p(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return N(p(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),w=_,E=0;E<I.length;E+=8){var S=Math.min(8,I.length-E),g=parseInt(I.substring(E,E+S),m);8>S?(S=d(Math.pow(m,S)),w=w.j(S).add(d(g))):(w=w.j(y),w=w.add(d(g)))}return w}var _=l(0),b=l(1),P=l(16777216);n=a.prototype,n.m=function(){if(L(this))return-N(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var w=this.i(y);I+=(0<=w?w:4294967296+w)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(L(this))return"-"+N(this).toString(I);for(var m=d(Math.pow(I,6)),y=this,w="";;){var E=re(y,m).g;y=G(y,E.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=E,x(y))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function L(I){return I.h==-1}n.l=function(I){return I=G(this,I),L(I)?-1:x(I)?0:1};function N(I){for(var m=I.g.length,y=[],w=0;w<m;w++)y[w]=~I.g[w];return new a(y,~I.h).add(b)}n.abs=function(){return L(this)?N(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],w=0,E=0;E<=m;E++){var S=w+(this.i(E)&65535)+(I.i(E)&65535),g=(S>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);w=g>>>16,S&=65535,g&=65535,y[E]=g<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(I,m){return I.add(N(m))}n.j=function(I){if(x(this)||x(I))return _;if(L(this))return L(I)?N(this).j(N(I)):N(N(this).j(I));if(L(I))return N(this.j(N(I)));if(0>this.l(P)&&0>I.l(P))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var E=0;E<I.g.length;E++){var S=this.i(w)>>>16,g=this.i(w)&65535,lt=I.i(E)>>>16,cr=I.i(E)&65535;y[2*w+2*E]+=g*cr,K(y,2*w+2*E),y[2*w+2*E+1]+=S*cr,K(y,2*w+2*E+1),y[2*w+2*E+1]+=g*lt,K(y,2*w+2*E+1),y[2*w+2*E+2]+=S*lt,K(y,2*w+2*E+2)}for(w=0;w<m;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=m;w<2*m;w++)y[w]=0;return new a(y,0)};function K(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function H(I,m){this.g=I,this.h=m}function re(I,m){if(x(m))throw Error("division by zero");if(x(I))return new H(_,_);if(L(I))return m=re(N(I),m),new H(N(m.g),N(m.h));if(L(m))return m=re(I,N(m)),new H(N(m.g),m.h);if(30<I.g.length){if(L(I)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var y=b,w=m;0>=w.l(I);)y=De(y),w=De(w);var E=te(y,1),S=te(w,1);for(w=te(w,2),y=te(y,2);!x(w);){var g=S.add(w);0>=g.l(I)&&(E=E.add(y),S=g),w=te(w,1),y=te(y,1)}return m=G(I,E.j(m)),new H(E,m)}for(E=_;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=d(y),g=S.j(m);L(g)||0<g.l(I);)y-=w,S=d(y),g=S.j(m);x(S)&&(S=b),E=E.add(S),I=G(I,g)}return new H(E,I)}n.A=function(I){return re(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)&I.i(w);return new a(y,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)|I.i(w);return new a(y,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)^I.i(w);return new a(y,this.h^I.h)};function De(I){for(var m=I.g.length+1,y=[],w=0;w<m;w++)y[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(y,I.h)}function te(I,m){var y=m>>5;m%=32;for(var w=I.g.length-y,E=[],S=0;S<w;S++)E[S]=0<m?I.i(S+y)>>>m|I.i(S+y+1)<<32-m:I.i(S+y);return new a(E,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Za=uf.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Lt=uf.Integer=a}).apply(typeof cf<"u"?cf:typeof self<"u"?self:typeof window<"u"?window:{});var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yt={};var ec,dv,Rn,tc,Wr,As,nc,rc,ic;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof bs=="object"&&bs];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var T=o[f];if(!(T in h))break e;h=h[T]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,f=!1,T={next:function(){if(!f&&h<o.length){var R=h++;return{value:u(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,h){return o.call.apply(o.bind,arguments)}function _(o,u,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),o.apply(u,T)}}return function(){return o.apply(u,arguments)}}function b(o,u,h){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,b.apply(null,arguments)}function P(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function x(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,T,R){for(var D=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)D[ne-2]=arguments[ne];return u.prototype[T].apply(f,D)}}function L(o){let u=o.length;if(0<u){let h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function N(o,u){for(let h=1;h<arguments.length;h++){let f=arguments[h];if(l(f)){let T=o.length||0,R=f.length||0;o.length=T+R;for(let D=0;D<R;D++)o[T+D]=f[D]}else o.push(f)}}class G{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function re(o){return re[" "](o),o}re[" "]=function(){};var De=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function te(o,u,h){for(let f in o)u.call(h,o[f],f,o)}function I(o,u){for(let h in o)u.call(void 0,o[h],h,o)}function m(o){let u={};for(let h in o)u[h]=o[h];return u}let y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,u){let h,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(h in f)o[h]=f[h];for(let R=0;R<y.length;R++)h=y[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function E(o){var u=1;o=o.split(":");let h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function S(o){c.setTimeout(()=>{throw o},0)}function g(){var o=Po;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class lt{constructor(){this.h=this.g=null}add(u,h){let f=cr.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var cr=new G(()=>new Am,o=>o.reset());class Am{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ur,lr=!1,Po=new lt,Pl=()=>{let o=c.Promise.resolve(void 0);ur=()=>{o.then(Sm)}};var Sm=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){S(h)}var u=cr;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}lr=!1};function At(){this.s=this.s,this.C=this.C}At.prototype.s=!1,At.prototype.ma=function(){this.s||(this.s=!0,this.N())},At.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Rm=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function hr(o,u){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(De){e:{try{re(u.nodeName);var T=!0;break e}catch{}T=!1}T||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Pm[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&hr.aa.h.call(this)}}x(hr,Ee);var Pm={2:"touch",3:"pen",4:"mouse"};hr.prototype.h=function(){hr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var dr="closure_listenable_"+(1e6*Math.random()|0),km=0;function Cm(o,u,h,f,T){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=T,this.key=++km,this.da=this.fa=!1}function Ei(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ti(o){this.src=o,this.g={},this.h=0}Ti.prototype.add=function(o,u,h,f,T){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var D=Co(o,u,f,T);return-1<D?(u=o[D],h||(u.fa=!1)):(u=new Cm(u,this.src,R,!!f,T),u.fa=h,o.push(u)),u};function ko(o,u){var h=u.type;if(h in o.g){var f=o.g[h],T=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=T)&&Array.prototype.splice.call(f,T,1),R&&(Ei(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Co(o,u,h,f){for(var T=0;T<o.length;++T){var R=o[T];if(!R.da&&R.listener==u&&R.capture==!!h&&R.ha==f)return T}return-1}var Do="closure_lm_"+(1e6*Math.random()|0),No={};function kl(o,u,h,f,T){if(f&&f.once)return Dl(o,u,h,f,T);if(Array.isArray(u)){for(var R=0;R<u.length;R++)kl(o,u[R],h,f,T);return null}return h=Lo(h),o&&o[dr]?o.K(u,h,d(f)?!!f.capture:!!f,T):Cl(o,u,h,!1,f,T)}function Cl(o,u,h,f,T,R){if(!u)throw Error("Invalid event type");var D=d(T)?!!T.capture:!!T,ne=Oo(o);if(ne||(o[Do]=ne=new Ti(o)),h=ne.add(u,h,f,D,R),h.proxy)return h;if(f=Dm(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Rm||(T=D),T===void 0&&(T=!1),o.addEventListener(u.toString(),f,T);else if(o.attachEvent)o.attachEvent(xl(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Dm(){function o(h){return u.call(o.src,o.listener,h)}let u=Nm;return o}function Dl(o,u,h,f,T){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Dl(o,u[R],h,f,T);return null}return h=Lo(h),o&&o[dr]?o.L(u,h,d(f)?!!f.capture:!!f,T):Cl(o,u,h,!0,f,T)}function Nl(o,u,h,f,T){if(Array.isArray(u))for(var R=0;R<u.length;R++)Nl(o,u[R],h,f,T);else f=d(f)?!!f.capture:!!f,h=Lo(h),o&&o[dr]?(o=o.i,u=String(u).toString(),u in o.g&&(R=o.g[u],h=Co(R,h,f,T),-1<h&&(Ei(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[u],o.h--)))):o&&(o=Oo(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Co(u,h,f,T)),(h=-1<o?u[o]:null)&&xo(h))}function xo(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[dr])ko(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(xl(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=Oo(u))?(ko(h,o),h.h==0&&(h.src=null,u[Do]=null)):Ei(o)}}}function xl(o){return o in No?No[o]:No[o]="on"+o}function Nm(o,u){if(o.da)o=!0;else{u=new hr(u,this);var h=o.listener,f=o.ha||o.src;o.fa&&xo(o),o=h.call(f,u)}return o}function Oo(o){return o=o[Do],o instanceof Ti?o:null}var Vo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lo(o){return typeof o=="function"?o:(o[Vo]||(o[Vo]=function(u){return o.handleEvent(u)}),o[Vo])}function Te(){At.call(this),this.i=new Ti(this),this.M=this,this.F=null}x(Te,At),Te.prototype[dr]=!0,Te.prototype.removeEventListener=function(o,u,h,f){Nl(this,o,u,h,f)};function Ne(o,u){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new Ee(u,o);else if(u instanceof Ee)u.target=u.target||o;else{var T=u;u=new Ee(f,o),w(u,T)}if(T=!0,h)for(var R=h.length-1;0<=R;R--){var D=u.g=h[R];T=bi(D,f,!0,u)&&T}if(D=u.g=o,T=bi(D,f,!0,u)&&T,T=bi(D,f,!1,u)&&T,h)for(R=0;R<h.length;R++)D=u.g=h[R],T=bi(D,f,!1,u)&&T}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],f=0;f<h.length;f++)Ei(h[f]);delete o.g[u],o.h--}}this.F=null},Te.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},Te.prototype.L=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function bi(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var T=!0,R=0;R<u.length;++R){var D=u[R];if(D&&!D.da&&D.capture==h){var ne=D.listener,we=D.ha||D.src;D.fa&&ko(o.i,D),T=ne.call(we,f)!==!1&&T}}return T&&!f.defaultPrevented}function Ol(o,u,h){if(typeof o=="function")h&&(o=b(o,h));else if(o&&typeof o.handleEvent=="function")o=b(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Vl(o){o.g=Ol(()=>{o.g=null,o.i&&(o.i=!1,Vl(o))},o.l);let u=o.h;o.h=null,o.m.apply(null,u)}class xm extends At{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Vl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fr(o){At.call(this),this.h=o,this.g={}}x(fr,At);var Ll=[];function Ml(o){te(o.g,function(u,h){this.g.hasOwnProperty(h)&&xo(u)},o),o.g={}}fr.prototype.N=function(){fr.aa.N.call(this),Ml(this)},fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mo=c.JSON.stringify,Om=c.JSON.parse,Vm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Fo(){}Fo.prototype.h=null;function Fl(o){return o.h||(o.h=o.i())}function Ul(){}var pr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Uo(){Ee.call(this,"d")}x(Uo,Ee);function $o(){Ee.call(this,"c")}x($o,Ee);var zt={},$l=null;function Ai(){return $l=$l||new Te}zt.La="serverreachability";function Bl(o){Ee.call(this,zt.La,o)}x(Bl,Ee);function mr(o){let u=Ai();Ne(u,new Bl(u))}zt.STAT_EVENT="statevent";function ql(o,u){Ee.call(this,zt.STAT_EVENT,o),this.stat=u}x(ql,Ee);function xe(o){let u=Ai();Ne(u,new ql(u,o))}zt.Ma="timingevent";function jl(o,u){Ee.call(this,zt.Ma,o),this.size=u}x(jl,Ee);function gr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function yr(){this.g=!0}yr.prototype.xa=function(){this.g=!1};function Lm(o,u,h,f,T,R){o.info(function(){if(o.g)if(R)for(var D="",ne=R.split("&"),we=0;we<ne.length;we++){var X=ne[we].split("=");if(1<X.length){var be=X[0];X=X[1];var Ae=be.split("_");D=2<=Ae.length&&Ae[1]=="type"?D+(be+"="+X+"&"):D+(be+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+u+`
`+h+`
`+D})}function Mm(o,u,h,f,T,R,D){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+u+`
`+h+`
`+R+" "+D})}function yn(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Um(o,h)+(f?" "+f:"")})}function Fm(o,u){o.info(function(){return"TIMEOUT: "+u})}yr.prototype.info=function(){};function Um(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<T.length;D++)T[D]=""}}}}return Mo(h)}catch{return u}}var Si={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bo;function Ri(){}x(Ri,Fo),Ri.prototype.g=function(){return new XMLHttpRequest},Ri.prototype.i=function(){return{}},Bo=new Ri;function St(o,u,h,f){this.j=o,this.i=u,this.l=h,this.R=f||1,this.U=new fr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zl}function zl(){this.i=null,this.g="",this.h=!1}var Wl={},qo={};function jo(o,u,h){o.L=1,o.v=Di(ht(u)),o.m=h,o.P=!0,Kl(o,null)}function Kl(o,u){o.F=Date.now(),Pi(o),o.A=ht(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),ah(h.i,"t",f),o.C=0,h=o.j.J,o.h=new zl,o.g=Ah(o.j,h?u:null,!o.m),0<o.O&&(o.M=new xm(b(o.Y,o,o.g),o.O)),u=o.U,h=o.g,f=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ll[0]=T.toString()),T=Ll);for(var R=0;R<T.length;R++){var D=kl(h,T[R],f||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),mr(),Lm(o.i,o.u,o.A,o.l,o.R,o.m)}St.prototype.ca=function(o){o=o.target;let u=this.M;u&&dt(o)==3?u.j():this.Y(o)},St.prototype.Y=function(o){try{if(o==this.g)e:{let Ae=dt(this.g);var u=this.g.Ba();let wn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||ph(this.g)))){this.J||Ae!=4||u==7||(u==8||0>=wn?mr(3):mr(2)),Go(this);var h=this.g.Z();this.X=h;t:if(Hl(this)){var f=ph(this.g);o="";var T=f.length,R=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),_r(this);var D="";break t}this.h.i=new c.TextDecoder}for(u=0;u<T;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(R&&u==T-1)});f.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,Mm(this.i,this.u,this.A,this.l,this.R,Ae,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,we=this.g;if((ne=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(ne)){var X=ne;break t}}X=null}if(h=X)yn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zo(this,h);else{this.o=!1,this.s=3,xe(12),Wt(this),_r(this);break e}}if(this.P){h=!0;let He;for(;!this.J&&this.C<D.length;)if(He=$m(this,D),He==qo){Ae==4&&(this.s=4,xe(14),h=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==Wl){this.s=4,xe(15),yn(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else yn(this.i,this.l,He,null),zo(this,He);if(Hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||D.length!=0||this.h.h||(this.s=1,xe(16),h=!1),this.o=this.o&&h,!h)yn(this.i,this.l,D,"[Invalid Chunked Response]"),Wt(this),_r(this);else if(0<D.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Jo(be),be.M=!0,xe(11))}}else yn(this.i,this.l,D,null),zo(this,D);Ae==4&&Wt(this),this.o&&!this.J&&(Ae==4?Ih(this.j,this):(this.o=!1,Pi(this)))}else rg(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),Wt(this),_r(this)}}}catch{}finally{}};function Hl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function $m(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?qo:(h=Number(u.substring(h,f)),isNaN(h)?Wl:(f+=1,f+h>u.length?qo:(u=u.slice(f,f+h),o.C=f+h,u)))}St.prototype.cancel=function(){this.J=!0,Wt(this)};function Pi(o){o.S=Date.now()+o.I,Ql(o,o.I)}function Ql(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=gr(b(o.ba,o),u)}function Go(o){o.B&&(c.clearTimeout(o.B),o.B=null)}St.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(Fm(this.i,this.A),this.L!=2&&(mr(),xe(17)),Wt(this),this.s=2,_r(this)):Ql(this,this.S-o)};function _r(o){o.j.G==0||o.J||Ih(o.j,o)}function Wt(o){Go(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ml(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function zo(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Wo(h.h,o))){if(!o.K&&Wo(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Li(h),Oi(h);else break e;Yo(h),xe(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=gr(b(h.Za,h),6e3));if(1>=Xl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ht(h,11)}else if((o.K||h.g==o)&&Li(h),!K(u))for(T=h.Da.g.parse(u),u=0;u<T.length;u++){let X=T[u];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];let be=X[3];be!=null&&(h.la=be,h.j.info("VER="+h.la));let Ae=X[4];Ae!=null&&(h.Aa=Ae,h.j.info("SVER="+h.Aa));let wn=X[5];wn!=null&&typeof wn=="number"&&0<wn&&(f=1.5*wn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;let He=o.g;if(He){let Fi=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var R=f.h;R.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ko(R,R.h),R.h=null))}if(f.D){let Xo=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;Xo&&(f.ya=Xo,ie(f.I,f.D,Xo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var D=o;if(f.qa=bh(f,f.J?f.ia:null,f.W),D.K){Zl(f.h,D);var ne=D,we=f.L;we&&(ne.I=we),ne.B&&(Go(ne),Pi(ne)),f.g=D}else vh(f);0<h.i.length&&Vi(h)}else X[0]!="stop"&&X[0]!="close"||Ht(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Ht(h,7):Qo(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}mr(4)}catch{}}var Bm=class{constructor(o,u){this.g=o,this.map=u}};function Yl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Xl(o){return o.h?1:o.g?o.g.size:0}function Wo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ko(o,u){o.g?o.g.add(u):o.h=u}function Zl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Yl.prototype.cancel=function(){if(this.i=eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function eh(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(let h of o.g.values())u=u.concat(h.D);return u}return L(o.i)}function qm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,f=0;f<h;f++)u.push(o[f]);return u}u=[],h=0;for(f in o)u[h++]=o[f];return u}function jm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(let f in o)u[h++]=f;return u}}}function th(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=jm(o),f=qm(o),T=f.length,R=0;R<T;R++)u.call(void 0,f[R],h&&h[R],o)}var nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gm(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),T=null;if(0<=f){var R=o[h].substring(0,f);T=o[h].substring(f+1)}else R=o[h];u(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Kt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Kt){this.h=o.h,ki(this,o.j),this.o=o.o,this.g=o.g,Ci(this,o.s),this.l=o.l;var u=o.i,h=new Ir;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),rh(this,h),this.m=o.m}else o&&(u=String(o).match(nh))?(this.h=!1,ki(this,u[1]||"",!0),this.o=vr(u[2]||""),this.g=vr(u[3]||"",!0),Ci(this,u[4]),this.l=vr(u[5]||"",!0),rh(this,u[6]||"",!0),this.m=vr(u[7]||"")):(this.h=!1,this.i=new Ir(null,this.h))}Kt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(wr(u,ih,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(wr(u,ih,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(wr(h,h.charAt(0)=="/"?Km:Wm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",wr(h,Qm)),o.join("")};function ht(o){return new Kt(o)}function ki(o,u,h){o.j=h?vr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ci(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function rh(o,u,h){u instanceof Ir?(o.i=u,Ym(o.i,o.h)):(h||(u=wr(u,Hm)),o.i=new Ir(u,o.h))}function ie(o,u,h){o.i.set(u,h)}function Di(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function vr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function wr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,zm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function zm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ih=/[#\/\?@]/g,Wm=/[#\?:]/g,Km=/[#\?]/g,Hm=/[#\?@]/g,Qm=/#/g;function Ir(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Rt(o){o.g||(o.g=new Map,o.h=0,o.i&&Gm(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Ir.prototype,n.add=function(o,u){Rt(this),this.i=null,o=_n(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function sh(o,u){Rt(o),u=_n(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function oh(o,u){return Rt(o),u=_n(o,u),o.g.has(u)}n.forEach=function(o,u){Rt(this),this.g.forEach(function(h,f){h.forEach(function(T){o.call(u,T,f,this)},this)},this)},n.na=function(){Rt(this);let o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){let T=o[f];for(let R=0;R<T.length;R++)h.push(u[f])}return h},n.V=function(o){Rt(this);let u=[];if(typeof o=="string")oh(this,o)&&(u=u.concat(this.g.get(_n(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return Rt(this),this.i=null,o=_n(this,o),oh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function ah(o,u,h){sh(o,u),0<h.length&&(o.i=null,o.g.set(_n(o,u),L(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];let R=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var T=R;D[f]!==""&&(T+="="+encodeURIComponent(String(D[f]))),o.push(T)}}return this.i=o.join("&")};function _n(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ym(o,u){u&&!o.j&&(Rt(o),o.i=null,o.g.forEach(function(h,f){var T=f.toLowerCase();f!=T&&(sh(this,f),ah(this,T,h))},o)),o.j=u}function Jm(o,u){let h=new yr;if(c.Image){let f=new Image;f.onload=P(Pt,h,"TestLoadImage: loaded",!0,u,f),f.onerror=P(Pt,h,"TestLoadImage: error",!1,u,f),f.onabort=P(Pt,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=P(Pt,h,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function Xm(o,u){let h=new yr,f=new AbortController,T=setTimeout(()=>{f.abort(),Pt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(T),R.ok?Pt(h,"TestPingServer: ok",!0,u):Pt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),Pt(h,"TestPingServer: error",!1,u)})}function Pt(o,u,h,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(h)}catch{}}function Zm(){this.g=new Vm}function eg(o,u,h){let f=h||"";try{th(o,function(T,R){let D=T;d(T)&&(D=Mo(T)),u.push(f+R+"="+encodeURIComponent(D))})}catch(T){throw u.push(f+"type="+encodeURIComponent("_badmap")),T}}function Er(o){this.l=o.Ub||null,this.j=o.eb||!1}x(Er,Fo),Er.prototype.g=function(){return new Ni(this.l,this.j)},Er.prototype.i=function(o){return function(){return o}}({});function Ni(o,u){Te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ni,Te),n=Ni.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,br(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ch(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ch(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Tr(this):br(this),this.readyState==3&&ch(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Tr(this))},n.Qa=function(o){this.g&&(this.response=o,Tr(this))},n.ga=function(){this.g&&Tr(this)};function Tr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,br(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function br(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function uh(o){let u="";return te(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function Ho(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=uh(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ie(o,u,h))}function ae(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(ae,Te);var tg=/^https?$/i,ng=["POST","PUT"];n=ae.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bo.g(),this.v=this.o?Fl(this.o):Fl(Bo),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){lh(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)h.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),T=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ng,u,void 0))||f||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[R,D]of h)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fh(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){lh(this,R)}};function lh(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,hh(o),xi(o)}function hh(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),xi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xi(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?dh(this):this.bb())},n.bb=function(){dh(this)};function dh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||dt(o)!=4||o.Z()!=2)){if(o.u&&dt(o)==4)Ol(o.Ea,0,o);else if(Ne(o,"readystatechange"),dt(o)==4){o.h=!1;try{let D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=D===0){var T=String(o.D).match(nh)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),f=!tg.test(T?T.toLowerCase():"")}h=f}if(h)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var R=2<dt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",hh(o)}}finally{xi(o)}}}}function xi(o,u){if(o.g){fh(o);let h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ne(o,"ready");try{h.onreadystatechange=f}catch{}}}function fh(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function dt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Om(u)}};function ph(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function rg(o){let u={};o=(o.g&&2<=dt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(K(o[f]))continue;var h=E(o[f]);let T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let R=u[T]||[];u[T]=R,R.push(h)}I(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function mh(o){this.Aa=0,this.i=[],this.j=new yr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ar("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ar("baseRetryDelayMs",5e3,o),this.cb=Ar("retryDelaySeedMs",1e4,o),this.Wa=Ar("forwardChannelMaxRetries",2,o),this.wa=Ar("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Yl(o&&o.concurrentRequestLimit),this.Da=new Zm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=mh.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,f){xe(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=bh(this,null,this.W),Vi(this)};function Qo(o){if(gh(o),o.G==3){var u=o.U++,h=ht(o.I);if(ie(h,"SID",o.K),ie(h,"RID",u),ie(h,"TYPE","terminate"),Sr(o,h),u=new St(o,o.j,u),u.L=2,u.v=Di(ht(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Ah(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Pi(u)}Th(o)}function Oi(o){o.g&&(Jo(o),o.g.cancel(),o.g=null)}function gh(o){Oi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Li(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Vi(o){if(!Jl(o.h)&&!o.s){o.s=!0;var u=o.Ga;ur||Pl(),lr||(ur(),lr=!0),Po.add(u,o),o.B=0}}function ig(o,u){return Xl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=gr(b(o.Ga,o,u),Eh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let T=new St(this,this.j,o),R=this.o;if(this.S&&(R?(R=m(R),w(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=_h(this,T,u),h=ht(this.I),ie(h,"RID",o),ie(h,"CVER",22),this.D&&ie(h,"X-HTTP-Session-Id",this.D),Sr(this,h),R&&(this.O?u="headers="+encodeURIComponent(String(uh(R)))+"&"+u:this.m&&Ho(h,this.m,R)),Ko(this.h,T),this.Ua&&ie(h,"TYPE","init"),this.P?(ie(h,"$req",u),ie(h,"SID","null"),T.T=!0,jo(T,h,null)):jo(T,h,u),this.G=2}}else this.G==3&&(o?yh(this,o):this.i.length==0||Jl(this.h)||yh(this))};function yh(o,u){var h;u?h=u.l:h=o.U++;let f=ht(o.I);ie(f,"SID",o.K),ie(f,"RID",h),ie(f,"AID",o.T),Sr(o,f),o.m&&o.o&&Ho(f,o.m,o.o),h=new St(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=_h(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ko(o.h,h),jo(h,f,u)}function Sr(o,u){o.H&&te(o.H,function(h,f){ie(u,f,h)}),o.l&&th({},function(h,f){ie(u,f,h)})}function _h(o,u,h){h=Math.min(o.i.length,h);var f=o.l?b(o.l.Na,o.l,o):null;e:{var T=o.i;let R=-1;for(;;){let D=["count="+h];R==-1?0<h?(R=T[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let ne=!0;for(let we=0;we<h;we++){let X=T[we].g,be=T[we].map;if(X-=R,0>X)R=Math.max(0,T[we].g-100),ne=!1;else try{eg(be,D,"req"+X+"_")}catch{f&&f(be)}}if(ne){f=D.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,f}function vh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ur||Pl(),lr||(ur(),lr=!0),Po.add(u,o),o.v=0}}function Yo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=gr(b(o.Fa,o),Eh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,wh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=gr(b(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),Oi(this),wh(this))};function Jo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function wh(o){o.g=new St(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ht(o.qa);ie(u,"RID","rpc"),ie(u,"SID",o.K),ie(u,"AID",o.T),ie(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(u,"TO",o.ja),ie(u,"TYPE","xmlhttp"),Sr(o,u),o.m&&o.o&&Ho(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Di(ht(u)),h.m=null,h.P=!0,Kl(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Oi(this),Yo(this),xe(19))};function Li(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Ih(o,u){var h=null;if(o.g==u){Li(o),Jo(o),o.g=null;var f=2}else if(Wo(o.h,u))h=u.D,Zl(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var T=o.B;f=Ai(),Ne(f,new jl(f,h)),Vi(o)}else vh(o);else if(T=u.s,T==3||T==0&&0<u.X||!(f==1&&ig(o,u)||f==2&&Yo(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),T){case 1:Ht(o,5);break;case 4:Ht(o,10);break;case 3:Ht(o,6);break;default:Ht(o,2)}}}function Eh(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Ht(o,u){if(o.j.info("Error code "+u),u==2){var h=b(o.fb,o),f=o.Xa;let T=!f;f=new Kt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ki(f,"https"),Di(f),T?Jm(f.toString(),h):Xm(f.toString(),h)}else xe(2);o.G=0,o.l&&o.l.sa(u),Th(o),gh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Th(o){if(o.G=0,o.ka=[],o.l){let u=eh(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function bh(o,u,h){var f=h instanceof Kt?ht(h):new Kt(h);if(f.g!="")u&&(f.g=u+"."+f.g),Ci(f,f.s);else{var T=c.location;f=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;var R=new Kt(null);f&&ki(R,f),u&&(R.g=u),T&&Ci(R,T),h&&(R.l=h),f=R}return h=o.D,u=o.ya,h&&u&&ie(f,h,u),ie(f,"VER",o.la),Sr(o,f),f}function Ah(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ae(new Er({eb:h})):new ae(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sh(){}n=Sh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Mi(){}Mi.prototype.g=function(o,u){return new Le(o,u)};function Le(o,u){Te.call(this),this.g=new mh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!K(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new vn(this)}x(Le,Te),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){Qo(this.g)},Le.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Mo(o),o=h);u.i.push(new Bm(u.Ya++,o)),u.G==3&&Vi(u)},Le.prototype.N=function(){this.g.l=null,delete this.j,Qo(this.g),delete this.g,Le.aa.N.call(this)};function Rh(o){Uo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(let h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}x(Rh,Uo);function Ph(){$o.call(this),this.status=1}x(Ph,$o);function vn(o){this.g=o}x(vn,Sh),vn.prototype.ua=function(){Ne(this.g,"a")},vn.prototype.ta=function(o){Ne(this.g,new Rh(o))},vn.prototype.sa=function(o){Ne(this.g,new Ph)},vn.prototype.ra=function(){Ne(this.g,"b")},Mi.prototype.createWebChannel=Mi.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,ic=yt.createWebChannelTransport=function(){return new Mi},rc=yt.getStatEventTarget=function(){return Ai()},nc=yt.Event=zt,As=yt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Si.NO_ERROR=0,Si.TIMEOUT=8,Si.HTTP_ERROR=6,Wr=yt.ErrorCode=Si,Gl.COMPLETE="complete",tc=yt.EventType=Gl,Ul.EventType=pr,pr.OPEN="a",pr.CLOSE="b",pr.ERROR="c",pr.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Rn=yt.WebChannel=Ul,dv=yt.FetchXmlHttpFactory=Er,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,ec=yt.XhrIo=ae}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});var lf="@firebase/firestore";var _e=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");var Zn="11.0.2";var an=new kt("@firebase/firestore");function Pn(){return an.logLevel}function O(n,...e){if(an.logLevel<=z.DEBUG){let t=e.map(qu);an.debug(`Firestore (${Zn}): ${n}`,...t)}}function _t(n,...e){if(an.logLevel<=z.ERROR){let t=e.map(qu);an.error(`Firestore (${Zn}): ${n}`,...t)}}function Vn(n,...e){if(an.logLevel<=z.WARN){let t=e.map(qu);an.warn(`Firestore (${Zn}): ${n}`,...t)}}function qu(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function F(n="Unexpected state"){let e=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: `+n;throw _t(e),new Error(e)}function J(n,e){n||F()}function q(n,e){return n}var k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},V=class extends Me{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var We=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Ns=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},cc=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}},uc=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},lc=class{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new We;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new We,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?c(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new We)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new Ns(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new _e(e)}},hc=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}},dc=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new hc(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}},fc=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},pc=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){J(this.o===void 0);let r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new fc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function fv(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var xs=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=fv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function Q(n,e){return n<e?-1:n>e?1:0}function Ln(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var Ie=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var B=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new Ie(0,0))}static max(){return new n(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Os=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(),r===void 0?r=e.length-t:r>e.length-t&&F(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},oe=class n extends Os{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new V(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},pv=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Ue=class n extends Os{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return pv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new V(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new V(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var U=class n{constructor(e){this.path=e}static fromPath(e){return new n(oe.fromString(e))}static fromName(e){return new n(oe.fromString(e).popFirst(5))}static empty(){return new n(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new oe(e.slice()))}};var mc=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};mc.UNKNOWN_ID=-1;function mv(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new Ie(t+1,0):new Ie(t,r));return new cn(i,U.empty(),e)}function gv(n){return new cn(n.readTime,n.key,-1)}var cn=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(B.min(),U.empty(),-1)}static max(){return new n(B.max(),U.empty(),-1)}};function yv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}var _v="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",gc=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function er(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==_v)throw n;O("LocalStore","Unexpectedly lost primary lease")}var C=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),c=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(p=>{a[d]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function vv(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function tr(n){return n.name==="IndexedDbTransactionError"}var Mn=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};Mn.oe=-1;function yi(n){return n==null}function ei(n){return n===0&&1/n==-1/0}function wv(n){return typeof n=="number"&&Number.isInteger(n)&&!ei(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Iv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hf(e)),e=Ev(n.get(t),e);return hf(e)}function Ev(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function hf(n){return n+""}var Tv=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],KT=[...Tv,"documentOverlays"],bv=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Av=bv,Sv=[...Av,"indexConfiguration","indexState","indexEntries"];var HT=[...Sv,"globals"];function df(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bt(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jf(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var ce=class n{constructor(e,t){this.comparator=e,this.root=t||rt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nn(this.root,e,this.comparator,!0)}},Nn=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},rt=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();let e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}};rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,r,i,s){return this}insert(e,t,r){return new rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ve=class n{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vs(this.data.getIterator())}getIteratorFrom(e){return new Vs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Vs=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var ze=class n{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new n([])}unionWith(e){let t=new ve(Ue.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var Ls=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var ke=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ls("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};ke.EMPTY_BYTE_STRING=new ke("");var Rv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(n){if(J(!!n),typeof n=="string"){let e=0,t=Rv.exec(n);if(J(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:se(n.seconds),nanos:se(n.nanos)}}function se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wt(n){return typeof n=="string"?ke.fromBase64String(n):ke.fromUint8Array(n)}function ju(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function lo(n){let e=n.mapValue.fields.__previous_value__;return ju(e)?lo(e):e}function ti(n){let e=vt(n.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}var yc=class{constructor(e,t,r,i,s,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}},Ms=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Ss={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ut(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ju(n)?4:zf(n)?9007199254740991:Gf(n)?10:11:F()}function st(n,e){if(n===e)return!0;let t=Ut(n);if(t!==Ut(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ti(n).isEqual(ti(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=vt(i.timestampValue),c=vt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return wt(i.bytesValue).isEqual(wt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return se(i.geoPointValue.latitude)===se(s.geoPointValue.latitude)&&se(i.geoPointValue.longitude)===se(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return se(i.integerValue)===se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=se(i.doubleValue),c=se(s.doubleValue);return a===c?ei(a)===ei(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Ln(n.arrayValue.values||[],e.arrayValue.values||[],st);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(df(a)!==df(c))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!st(a[l],c[l])))return!1;return!0}(n,e);default:return F()}}function ni(n,e){return(n.values||[]).find(t=>st(t,e))!==void 0}function Fn(n,e){if(n===e)return 0;let t=Ut(n),r=Ut(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(s,a){let c=se(s.integerValue||s.doubleValue),l=se(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return ff(n.timestampValue,e.timestampValue);case 4:return ff(ti(n),ti(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return function(s,a){let c=wt(s),l=wt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let c=s.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){let p=Q(c[d],l[d]);if(p!==0)return p}return Q(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let c=Q(se(s.latitude),se(a.latitude));return c!==0?c:Q(se(s.longitude),se(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return pf(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,l,d,p;let _=s.fields||{},b=a.fields||{},P=(c=_.value)===null||c===void 0?void 0:c.arrayValue,x=(l=b.value)===null||l===void 0?void 0:l.arrayValue,L=Q(((d=P?.values)===null||d===void 0?void 0:d.length)||0,((p=x?.values)===null||p===void 0?void 0:p.length)||0);return L!==0?L:pf(P,x)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ss.mapValue&&a===Ss.mapValue)return 0;if(s===Ss.mapValue)return 1;if(a===Ss.mapValue)return-1;let c=s.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let _=0;_<l.length&&_<p.length;++_){let b=Q(l[_],p[_]);if(b!==0)return b;let P=Fn(c[l[_]],d[p[_]]);if(P!==0)return P}return Q(l.length,p.length)}(n.mapValue,e.mapValue);default:throw F()}}function ff(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);let t=vt(n),r=vt(e),i=Q(t.seconds,r.seconds);return i!==0?i:Q(t.nanos,r.nanos)}function pf(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=Fn(t[i],r[i]);if(s)return s}return Q(t.length,r.length)}function Un(n){return _c(n)}function _c(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=vt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return wt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=_c(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${_c(t.fields[a])}`;return i+"}"}(n.mapValue):F()}function ks(n){switch(Ut(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=lo(n);return e?16+ks(e):16;case 5:return 2*n.stringValue.length;case 6:return wt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ks(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Bt(r.fields,(s,a)=>{i+=s.length+ks(a)}),i}(n.mapValue);default:throw F()}}function vc(n){return!!n&&"integerValue"in n}function Gu(n){return!!n&&"arrayValue"in n}function mf(n){return!!n&&"nullValue"in n}function gf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cs(n){return!!n&&"mapValue"in n}function Gf(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Qr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Bt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Qr(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var Ve=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qr(t)}setAll(e){let t=Ue.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Qr(a):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());Cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return st(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Cs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Bt(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(Qr(this.value))}};function Wf(n){let e=[];return Bt(n.fields,(t,r)=>{let i=new Ue([t]);if(Cs(r)){let s=Wf(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new ze(e)}var qe=class n{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new n(e,0,B.min(),B.min(),B.min(),Ve.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,B.min(),B.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,B.min(),B.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var $n=class{constructor(e,t){this.position=e,this.inclusive=t}};function yf(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=Fn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _f(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!st(n.position[t],e.position[t]))return!1;return!0}var Bn=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function Pv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Fs=class{},me=class n extends Fs{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ic(e,t,r):t==="array-contains"?new bc(e,r):t==="in"?new Ac(e,r):t==="not-in"?new Sc(e,r):t==="array-contains-any"?new Rc(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ec(e,r):new Tc(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Fn(t,this.value)):t!==null&&Ut(this.value)===Ut(t)&&this.matchesComparison(Fn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},ot=class n extends Fs{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return Kf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function Kf(n){return n.op==="and"}function Hf(n){return kv(n)&&Kf(n)}function kv(n){for(let e of n.filters)if(e instanceof ot)return!1;return!0}function wc(n){if(n instanceof me)return n.field.canonicalString()+n.op.toString()+Un(n.value);if(Hf(n))return n.filters.map(e=>wc(e)).join(",");{let e=n.filters.map(t=>wc(t)).join(",");return`${n.op}(${e})`}}function Qf(n,e){return n instanceof me?function(r,i){return i instanceof me&&r.op===i.op&&r.field.isEqual(i.field)&&st(r.value,i.value)}(n,e):n instanceof ot?function(r,i){return i instanceof ot&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Qf(a,i.filters[c]),!0):!1}(n,e):void F()}function Yf(n){return n instanceof me?function(t){return`${t.field.canonicalString()} ${t.op} ${Un(t.value)}`}(n):n instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(Yf).join(" ,")+"}"}(n):"Filter"}var Ic=class extends me{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){let t=U.comparator(e.key,this.key);return this.matchesComparison(t)}},Ec=class extends me{constructor(e,t){super(e,"in",t),this.keys=Jf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Tc=class extends me{constructor(e,t){super(e,"not-in",t),this.keys=Jf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Jf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}var bc=class extends me{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Gu(t)&&ni(t.arrayValue,this.value)}},Ac=class extends me{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&ni(this.value.arrayValue,t)}},Sc=class extends me{constructor(e,t){super(e,"not-in",t)}matches(e){if(ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!ni(this.value.arrayValue,t)}},Rc=class extends me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Gu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ni(this.value.arrayValue,r))}};var Pc=class{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}};function vf(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Pc(n,e,t,r,i,s,a)}function zu(n){let e=q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>wc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Un(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Un(r)).join(",")),e.ue=t}return e.ue}function Wu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Pv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Qf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_f(n.startAt,e.startAt)&&_f(n.endAt,e.endAt)}function kc(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var qn=class{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function Cv(n,e,t,r,i,s,a,c){return new qn(n,e,t,r,i,s,a,c)}function ho(n){return new qn(n)}function wf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dv(n){return n.collectionGroup!==null}function Yr(n){let e=q(n);if(e.ce===null){e.ce=[];let t=new Set;for(let s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ve(Ue.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Bn(s,r))}),t.has(Ue.keyField().canonicalString())||e.ce.push(new Bn(Ue.keyField(),r))}return e.ce}function it(n){let e=q(n);return e.le||(e.le=Nv(e,Yr(n))),e.le}function Nv(n,e){if(n.limitType==="F")return vf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Bn(i.field,s)});let t=n.endAt?new $n(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $n(n.startAt.position,n.startAt.inclusive):null;return vf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cc(n,e,t){return new qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fo(n,e){return Wu(it(n),it(e))&&n.limitType===e.limitType}function Xf(n){return`${zu(it(n))}|lt:${n.limitType}`}function kn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Yf(i)).join(", ")}]`),yi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Un(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Un(i)).join(",")),`Target(${r})`}(it(n))}; limitType=${n.limitType})`}function po(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):U.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of Yr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){let d=yf(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,Yr(r),i)||r.endAt&&!function(a,c,l){let d=yf(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,Yr(r),i))}(n,e)}function xv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Zf(n){return(e,t)=>{let r=!1;for(let i of Yr(n)){let s=Ov(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ov(n,e,t){let r=n.field.isKeyField()?U.comparator(e.key,t.key):function(s,a,c){let l=a.data.field(s),d=c.data.field(s);return l!==null&&d!==null?Fn(l,d):F()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}var It=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return jf(this.inner)}size(){return this.innerSize}};var Vv=new ce(U.comparator);function Et(){return Vv}var ep=new ce(U.comparator);function Hr(...n){let e=ep;for(let t of n)e=e.insert(t.key,t);return e}function tp(n){let e=ep;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function sn(){return Jr()}function np(){return Jr()}function Jr(){return new It(n=>n.toString(),(n,e)=>n.isEqual(e))}var Lv=new ce(U.comparator),Mv=new ve(U.comparator);function W(...n){let e=Mv;for(let t of n)e=e.add(t);return e}var Fv=new ve(Q);function Uv(){return Fv}function Ku(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ei(e)?"-0":e}}function rp(n){return{integerValue:""+n}}function $v(n,e){return wv(e)?rp(e):Ku(n,e)}var jn=class{constructor(){this._=void 0}};function Bv(n,e,t){return n instanceof un?function(i,s){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ju(s)&&(s=lo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof ln?sp(n,e):n instanceof hn?op(n,e):function(i,s){let a=ip(i,s),c=If(a)+If(i.Pe);return vc(a)&&vc(i.Pe)?rp(c):Ku(i.serializer,c)}(n,e)}function qv(n,e,t){return n instanceof ln?sp(n,e):n instanceof hn?op(n,e):t}function ip(n,e){return n instanceof Gn?function(r){return vc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var un=class extends jn{},ln=class extends jn{constructor(e){super(),this.elements=e}};function sp(n,e){let t=ap(e);for(let r of n.elements)t.some(i=>st(i,r))||t.push(r);return{arrayValue:{values:t}}}var hn=class extends jn{constructor(e){super(),this.elements=e}};function op(n,e){let t=ap(e);for(let r of n.elements)t=t.filter(i=>!st(i,r));return{arrayValue:{values:t}}}var Gn=class extends jn{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function If(n){return se(n.integerValue||n.doubleValue)}function ap(n){return Gu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Dc=class{constructor(e,t){this.field=e,this.transform=t}};function jv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ln&&i instanceof ln||r instanceof hn&&i instanceof hn?Ln(r.elements,i.elements,st):r instanceof Gn&&i instanceof Gn?st(r.Pe,i.Pe):r instanceof un&&i instanceof un}(n.transform,e.transform)}var Nc=class{constructor(e,t){this.version=e,this.transformResults=t}},Fe=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Ds(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var zn=class{};function cp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ri(n.key,Fe.none()):new dn(n.key,n.data,Fe.none());{let t=n.data,r=Ve.empty(),i=new ve(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new at(n.key,r,new ze(i.toArray()),Fe.none())}}function Gv(n,e,t){n instanceof dn?function(i,s,a){let c=i.value.clone(),l=Tf(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof at?function(i,s,a){if(!Ds(i.precondition,s))return void s.convertToUnknownDocument(a.version);let c=Tf(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(up(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Xr(n,e,t,r){return n instanceof dn?function(s,a,c,l){if(!Ds(s.precondition,a))return c;let d=s.value.clone(),p=bf(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof at?function(s,a,c,l){if(!Ds(s.precondition,a))return c;let d=bf(s.fieldTransforms,l,a),p=a.data;return p.setAll(up(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(s,a,c){return Ds(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function zv(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=ip(r.transform,i||null);s!=null&&(t===null&&(t=Ve.empty()),t.set(r.field,s))}return t||null}function Ef(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ln(r,i,(s,a)=>jv(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var dn=class extends zn{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},at=class extends zn{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function up(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Tf(n,e,t){let r=new Map;J(n.length===t.length);for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,qv(a,c,t[i]))}return r}function bf(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,Bv(s,a,e))}return r}var ri=class extends zn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Us=class extends zn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var xc=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&Gv(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Xr(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Xr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=np();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;let l=cp(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,(t,r)=>Ef(t,r))&&Ln(this.baseMutations,e.baseMutations,(t,r)=>Ef(t,r))}},Oc=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){J(e.mutations.length===r.length);let i=function(){return Lv}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var Vc=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Lc=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var he,Y;function lp(n){switch(n){default:return F();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function hp(n){if(n===void 0)return _t("GRPC error has no .code"),k.UNKNOWN;switch(n){case he.OK:return k.OK;case he.CANCELLED:return k.CANCELLED;case he.UNKNOWN:return k.UNKNOWN;case he.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case he.INTERNAL:return k.INTERNAL;case he.UNAVAILABLE:return k.UNAVAILABLE;case he.UNAUTHENTICATED:return k.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case he.NOT_FOUND:return k.NOT_FOUND;case he.ALREADY_EXISTS:return k.ALREADY_EXISTS;case he.PERMISSION_DENIED:return k.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case he.ABORTED:return k.ABORTED;case he.OUT_OF_RANGE:return k.OUT_OF_RANGE;case he.UNIMPLEMENTED:return k.UNIMPLEMENTED;case he.DATA_LOSS:return k.DATA_LOSS;default:return F()}}(Y=he||(he={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";var Af=null;function Wv(){return new TextEncoder}var Kv=new Lt([4294967295,4294967295],0);function Sf(n){let e=Wv().encode(n),t=new Za;return t.update(e),new Uint8Array(t.digest())}function Rf(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Lt([t,r],0),new Lt([i,s],0)]}var Mc=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new on(`Invalid padding: ${t}`);if(r<0)throw new on(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new on(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new on(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Lt.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(Lt.fromNumber(r)));return i.compare(Kv)===1&&(i=new Lt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;let t=Sf(e),[r,i]=Rf(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;let t=Sf(e),[r,i]=Rf(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},on=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var $s=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,ii.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(B.min(),i,new ce(Q),Et(),W())}},ii=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,W(),W(),W())}};var xn=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},Bs=class{constructor(e,t){this.targetId=e,this.me=t}},qs=class{constructor(e,t,r=ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},js=class{constructor(){this.fe=0,this.ge=Pf(),this.pe=ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),t=W(),r=W();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:F()}}),new ii(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Pf()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Fc=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=Et(),this.qe=Rs(),this.Qe=Rs(),this.Ke=new ce(Q)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){let t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){let s=i.target;if(kc(s))if(r===0){let a=new U(s.path);this.We(t,a,qe.newNoDocument(a,B.min()))}else J(r===1);else{let a=this.Ze(t);if(a!==r){let c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}Af?.tt(function(p,_,b,P,x){var L,N,G,K,H,re;let De={localCacheCount:p,existenceFilterCount:_.count,databaseId:b.database,projectId:b.projectId},te=_.unchangedNames;return te&&(De.bloomFilter={applied:x===0,hashCount:(L=te?.hashCount)!==null&&L!==void 0?L:0,bitmapLength:(K=(G=(N=te?.bits)===null||N===void 0?void 0:N.bitmap)===null||G===void 0?void 0:G.length)!==null&&K!==void 0?K:0,padding:(re=(H=te?.bits)===null||H===void 0?void 0:H.padding)!==null&&re!==void 0?re:0,mightContain:I=>{var m;return(m=P?.mightContain(I))!==null&&m!==void 0&&m}}),De}(a,e.me,this.Le.nt(),c,l))}}}}Xe(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,c;try{a=wt(r).toUint8Array()}catch(l){if(l instanceof Ls)return Vn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Mc(a,i,s)}catch(l){return Vn(l instanceof on?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.We(t,s,null),i++)}),i}it(e){let t=new Map;this.Be.forEach((s,a)=>{let c=this.Ye(a);if(c){if(s.current&&kc(c.target)){let l=new U(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,qe.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=W();this.Qe.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{let d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));let i=new $s(e,t,this.Ke,this.ke,r);return this.ke=Et(),this.qe=Rs(),this.Qe=Rs(),this.Ke=new ce(Q),i}Ue(e,t){if(!this.je(e))return;let r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new js,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ve(Q),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ve(Q),this.qe=this.qe.insert(e,t)),t}je(e){let t=this.Ye(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new js),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function Rs(){return new ce(U.comparator)}function Pf(){return new ce(U.comparator)}var Hv={asc:"ASCENDING",desc:"DESCENDING"},Qv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yv={and:"AND",or:"OR"},Uc=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function $c(n,e){return n.useProto3Json||yi(e)?e:{value:e}}function Gs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Jv(n,e){return Gs(n,e.toTimestamp())}function $e(n){return J(!!n),B.fromTimestamp(function(t){let r=vt(t);return new Ie(r.seconds,r.nanos)}(n))}function Hu(n,e){return Bc(n,e).canonicalString()}function Bc(n,e){let t=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function fp(n){let e=oe.fromString(n);return J(vp(e)),e}function zs(n,e){return Hu(n.databaseId,e.path)}function Zr(n,e){let t=fp(e);if(t.get(1)!==n.databaseId.projectId)throw new V(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(mp(t))}function pp(n,e){return Hu(n.databaseId,e)}function Xv(n){let e=fp(n);return e.length===4?oe.emptyPath():mp(e)}function qc(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mp(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kf(n,e,t){return{name:zs(n,e),fields:t.value.mapValue.fields}}function Zv(n,e){return"found"in e?function(r,i){J(!!i.found),i.found.name,i.found.updateTime;let s=Zr(r,i.found.name),a=$e(i.found.updateTime),c=i.found.createTime?$e(i.found.createTime):B.min(),l=new Ve({mapValue:{fields:i.found.fields}});return qe.newFoundDocument(s,a,c,l)}(n,e):"missing"in e?function(r,i){J(!!i.missing),J(!!i.readTime);let s=Zr(r,i.missing),a=$e(i.readTime);return qe.newNoDocument(s,a)}(n,e):F()}function ew(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(J(p===void 0||typeof p=="string"),ke.fromBase64String(p||"")):(J(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ke.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){let p=d.code===void 0?k.UNKNOWN:hp(d.code);return new V(p,d.message||"")}(a);t=new qs(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Zr(n,r.document.name),s=$e(r.document.updateTime),a=r.document.createTime?$e(r.document.createTime):B.min(),c=new Ve({mapValue:{fields:r.document.fields}}),l=qe.newFoundDocument(i,s,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new xn(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Zr(n,r.document),s=r.readTime?$e(r.readTime):B.min(),a=qe.newNoDocument(i,s),c=r.removedTargetIds||[];t=new xn([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Zr(n,r.document),s=r.removedTargetIds||[];t=new xn([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new Lc(i,s),c=r.targetId;t=new Bs(c,a)}}return t}function gp(n,e){let t;if(e instanceof dn)t={update:kf(n,e.key,e.value)};else if(e instanceof ri)t={delete:zs(n,e.key)};else if(e instanceof at)t={update:kf(n,e.key,e.data),updateMask:uw(e.fieldMask)};else{if(!(e instanceof Us))return F();t={verify:zs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let c=a.transform;if(c instanceof un)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ln)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof hn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Gn)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw F()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Jv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(n,e.precondition)),t}function tw(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?$e(i.updateTime):$e(s);return a.isEqual(B.min())&&(a=$e(s)),new Nc(a,i.transformResults||[])}(t,e))):[]}function nw(n,e){return{documents:[pp(n,e.path)]}}function rw(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=pp(n,i);let s=function(d){if(d.length!==0)return _p(ot.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(p=>function(b){return{field:Cn(b.field),direction:ow(b.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let c=$c(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:i}}function iw(n){let e=Xv(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){J(r===1);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(_){let b=yp(_);return b instanceof ot&&Hf(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(b=>function(x){return new Bn(Dn(x.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(b))}(t.orderBy));let c=null;t.limit&&(c=function(_){let b;return b=typeof _=="object"?_.value:_,yi(b)?null:b}(t.limit));let l=null;t.startAt&&(l=function(_){let b=!!_.before,P=_.values||[];return new $n(P,b)}(t.startAt));let d=null;return t.endAt&&(d=function(_){let b=!_.before,P=_.values||[];return new $n(P,b)}(t.endAt)),Cv(e,i,a,s,c,"F",l,d)}function sw(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=Dn(t.unaryFilter.field);return me.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=Dn(t.unaryFilter.field);return me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=Dn(t.unaryFilter.field);return me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=Dn(t.unaryFilter.field);return me.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return me.create(Dn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(r=>yp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function ow(n){return Hv[n]}function aw(n){return Qv[n]}function cw(n){return Yv[n]}function Cn(n){return{fieldPath:n.canonicalString()}}function Dn(n){return Ue.fromServerFormat(n.fieldPath)}function _p(n){return n instanceof me?function(t){if(t.op==="=="){if(gf(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NAN"}};if(mf(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gf(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NOT_NAN"}};if(mf(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(t.field),op:aw(t.op),value:t.value}}}(n):n instanceof ot?function(t){let r=t.getFilters().map(i=>_p(i));return r.length===1?r[0]:{compositeFilter:{op:cw(t.op),filters:r}}}(n):F()}function uw(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function vp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var si=class n{constructor(e,t,r,i,s=B.min(),a=B.min(),c=ke.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var jc=class{constructor(e){this.ht=e}};function lw(n){let e=iw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Cc(e,e.limit,"L"):e}var Ws=class{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(se(e.integerValue));else if("doubleValue"in e){let r=se(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),ei(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),typeof r=="string"&&(r=vt(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(wt(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?zf(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):Gf(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):F()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let r=e.fields||{};this.Rt(t,55);for(let i of Object.keys(r))this.gt(i,t),this.dt(r[i],t)}bt(e,t){var r,i;let s=e.fields||{};this.Rt(t,53);let a="value",c=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Rt(t,15),t.Vt(se(c)),this.gt(a,t),this.dt(s[a],t)}vt(e,t){let r=e.values||[];this.Rt(t,50);for(let i of r)this.dt(i,t)}St(e,t){this.Rt(t,37),U.fromName(e).path.forEach(r=>{this.Rt(t,60),this.Ct(r,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}};Ws.Ft=new Ws;var Gc=class{constructor(){this.ln=new zc}addToCollectionParentIndex(e,t){return this.ln.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(cn.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(cn.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}},zc=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ve(oe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ve(oe.comparator)).toArray()}};var YT=new Uint8Array(0);var Cf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ge=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};Ge.DEFAULT_COLLECTION_PERCENTILE=10,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ge.DEFAULT=new Ge(41943040,Ge.DEFAULT_COLLECTION_PERCENTILE,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ge.DISABLED=new Ge(-1,0,0);var oi=class n{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new n(0)}static Qn(){return new n(-1)}};function Df([n,e],[t,r]){let i=Q(n,t);return i===0?Q(e,r):i}var Wc=class{constructor(e){this.Gn=e,this.buffer=new ve(Df),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();Df(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Kc=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){O("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){tr(t)?O("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await er(t)}await this.Yn(3e5)})}},Hc=class{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Mn.oe);let r=new Wc(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Cf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cf):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,c,l,d,p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i))).next(_=>(r=_,c=Date.now(),this.removeTargets(e,r,t))).next(_=>(s=_,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(d=Date.now(),Pn()<=z.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${_} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:_})))}};function hw(n,e){return new Hc(n,e)}var Qc=class{constructor(){this.changes=new It(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Yc=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Jc=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Xr(r.mutation,i,ze.empty(),Ie.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){let i=sn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Hr();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=sn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=Et(),a=Jr(),c=function(){return Jr()}();return t.forEach((l,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof at)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Xr(p.mutation,d,p.mutation.getFieldMask(),Ie.now())):a.set(d.key,ze.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var _;return c.set(d,new Yc(p,(_=a.get(d))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){let r=Jr(),i=new ce((a,c)=>a-c),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let c of a)c.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let p=r.get(l)||ze.empty();p=c.applyToLocalView(d,p),r.set(l,p);let _=(i.get(c.batchId)||W()).add(l);i=i.insert(c.batchId,_)})}).next(()=>{let a=[],c=i.getReverseIterator();for(;c.hasNext();){let l=c.getNext(),d=l.key,p=l.value,_=np();p.forEach(b=>{if(!s.has(b)){let P=cp(t.get(b),r.get(b));P!==null&&_.set(b,P),s=s.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):C.resolve(sn()),c=-1,l=s;return a.next(d=>C.forEach(d,(p,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),s.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(b=>{l=l.insert(p,b)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,W())).next(p=>({batchId:c,changes:tp(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let i=Hr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=Hr();return this.indexManager.getCollectionParents(e,s).next(c=>C.forEach(c,l=>{let d=function(_,b){return new qn(b,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((_,b)=>{a=a.insert(_,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,qe.newInvalidDocument(p)))});let c=Hr();return a.forEach((l,d)=>{let p=s.get(l);p!==void 0&&Xr(p.mutation,d,ze.empty(),Ie.now()),po(t,d)&&(c=c.insert(l,d))}),c})}};var Xc=class{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return C.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:$e(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:lw(i.bundledQuery),readTime:$e(i.readTime)}}(t)),C.resolve()}};var Zc=class{constructor(){this.overlays=new ce(U.comparator),this.Er=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){let r=sn();return C.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),C.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){let i=sn(),s=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){let l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ce((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=sn(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let c=sn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return C.resolve(c)}Tt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Vc(t,r));let s=this.Er.get(t);s===void 0&&(s=W(),this.Er.set(t,s)),this.Er.set(t,s.add(r.key))}};var eu=class{constructor(){this.sessionToken=ke.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}};var ai=class{constructor(){this.dr=new ve(de.Ar),this.Rr=new ve(de.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){let r=new de(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new de(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){let t=new U(new oe([])),r=new de(t,e),i=new de(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new U(new oe([])),r=new de(t,e),i=new de(t,e+1),s=W();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new de(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},de=class{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return U.comparator(e.key,t.key)||Q(e.br,t.br)}static Vr(e,t){return Q(e.br,t.br)||U.comparator(e.key,t.key)}};var tu=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ve(de.Ar)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new xc(s,t,r,i);this.mutationQueue.push(a);for(let c of i)this.vr=this.vr.add(new de(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Fr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new de(t,0),i=new de(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{let c=this.Cr(a.br);s.push(c)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ve(Q);return t.forEach(i=>{let s=new de(i,0),a=new de(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],c=>{r=r.add(c.br)})}),C.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;U.isDocumentKey(s)||(s=s.child(""));let a=new de(new U(s),0),c=new ve(Q);return this.vr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.br)),!0)},a),C.resolve(this.Mr(c))}Mr(e){let t=[];return e.forEach(r=>{let i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){J(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return C.forEach(t.mutations,i=>{let s=new de(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){let r=new de(t,0),i=this.vr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var nu=class{constructor(e){this.Nr=e,this.docs=function(){return new ce(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():qe.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Et(),a=t.path,c=new U(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){let{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||yv(gv(p),r)<=0||(i.has(p.key)||po(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,t,r,i){F()}Lr(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ru(this)}getSize(e){return C.resolve(this.size)}},ru=class extends Qc{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}};var iu=class{constructor(e){this.persistence=e,this.Br=new It(t=>zu(t),Wu),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.kr=0,this.qr=new ai,this.targetCount=0,this.Qr=oi.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),C.resolve()}Un(e){this.Br.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new oi(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Un(t),C.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){let r=this.Br.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),C.resolve()}getMatchingKeysForTargetId(e,t){let r=this.qr.Sr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.qr.containsKey(t))}};var Ks=class{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Mn(0),this.Ur=!1,this.Ur=!0,this.Wr=new eu,this.referenceDelegate=e(this),this.Gr=new iu(this),this.indexManager=new Gc,this.remoteDocumentCache=function(i){return new nu(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new jc(t),this.jr=new Xc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new tu(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);let i=new su(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return C.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}},su=class extends gc{constructor(e){super(),this.currentSequenceNumber=e}},ou=class n{constructor(e){this.persistence=e,this.Zr=new ai,this.Xr=null}static ei(e){return new n(e)}get ti(){if(this.Xr)return this.Xr;throw F()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),C.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ti,r=>{let i=U.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return C.or([()=>C.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}},Hs=class n{constructor(e,t){this.persistence=e,this.ri=new It(r=>Iv(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=hw(this,t)}static ei(e,t){return new n(e,t)}Hr(){}Jr(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return C.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?C.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(r++,s.removeEntry(a,B.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),C.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ks(e.data.value)),t}ir(e,t,r){return C.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.ri.get(t);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var au=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=W(),i=W();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var cu=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var uu=class{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Gh()?8:vv(ye())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new cu;return this.ts(e,t,a).next(c=>{if(s.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(Pn()<=z.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),C.resolve()):(Pn()<=z.DEBUG&&O("QueryEngine","Query:",kn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Pn()<=z.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,it(t))):C.resolve())}Xi(e,t){if(wf(t))return C.resolve(null);let r=it(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Cc(t,null,"F"),r=it(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=W(...s);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.rs(t,c);return this.ss(t,d,a,l.readTime)?this.Xi(e,Cc(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,r,i){return wf(t)||i.isEqual(B.min())?C.resolve(null):this.Zi.getDocuments(e,r).next(s=>{let a=this.rs(t,s);return this.ss(t,a,r,i)?C.resolve(null):(Pn()<=z.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kn(t)),this.os(e,a,t,mv(i,-1)).next(c=>c))})}rs(e,t){let r=new ve(Zf(e));return t.forEach((i,s)=>{po(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return Pn()<=z.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",kn(t)),this.Zi.getDocumentsMatchingQuery(e,t,cn.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var lu=class{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new ce(Q),this.cs=new It(s=>zu(s),Wu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jc(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}};function dw(n,e,t,r){return new lu(n,e,t,r)}async function wp(n,e){let t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],c=[],l=W();for(let d of i){a.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}for(let d of s){c.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:c}))})})}function fw(n,e){let t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){let _=d.batch,b=_.keys(),P=C.resolve();return b.forEach(x=>{P=P.next(()=>p.getEntry(l,x)).next(L=>{let N=d.docVersions.get(x);J(N!==null),L.version.compareTo(N)<0&&(_.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),p.addEntry(L)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(l,_))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=W();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Ip(n){let e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function pw(n,e){let t=q(n),r=e.snapshotVersion,i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;let c=[];e.targetChanges.forEach((p,_)=>{let b=i.get(_);if(!b)return;c.push(t.Gr.removeMatchingKeys(s,p.removedDocuments,_).next(()=>t.Gr.addMatchingKeys(s,p.addedDocuments,_)));let P=b.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(_)!==null?P=P.withResumeToken(ke.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(_,P),function(L,N,G){return L.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(b,P,p)&&c.push(t.Gr.updateTargetData(s,P))});let l=Et(),d=W();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(mw(s,a,e.documentUpdates).next(p=>{l=p.Is,d=p.Es})),!r.isEqual(B.min())){let p=t.Gr.getLastRemoteSnapshotVersion(s).next(_=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return C.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.us=i,s))}function mw(n,e,t){let r=W(),i=W();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Et();return t.forEach((c,l)=>{let d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):O("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Is:a,Es:i}})}function gw(n,e){let t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yw(n,e){let t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new si(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function hu(n,e,t){let r=q(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!tr(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Nf(n,e,t){let r=q(n),i=B.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){let _=q(l),b=_.cs.get(p);return b!==void 0?C.resolve(_.us.get(b)):_.Gr.getTargetData(d,p)}(r,a,it(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?s:W())).next(c=>(_w(r,xv(e),c),{documents:c,ds:s})))}function _w(n,e,t){let r=n.ls.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}var Qs=class{constructor(){this.activeTargetIds=Uv()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var du=class{constructor(){this._o=new Qs,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Qs,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var fu=class{uo(e){}shutdown(){}};var Ys=class{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.To)e(0)}Po(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Ps=null;function sc(){return Ps===null?Ps=function(){return 268435456+Math.round(2147483648*Math.random())}():Ps++,"0x"+Ps.toString(16)}var vw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var pu=class{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}};var Re="WebChannelConnection",mu=class extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){let c=sc(),l=this.No(t,r.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);let d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,s,a),this.Bo(t,l,d,i).then(p=>(O("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw Vn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",l,"request:",i),p})}ko(t,r,i,s,a,c){return this.Oo(t,r,i,s,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){let i=vw[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){let s=sc();return new Promise((a,c)=>{let l=new ec;l.setWithCredentials(!0),l.listenOnce(tc.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wr.NO_ERROR:let p=l.getResponseJson();O(Re,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case Wr.TIMEOUT:O(Re,`RPC '${e}' ${s} timed out`),c(new V(k.DEADLINE_EXCEEDED,"Request time out"));break;case Wr.HTTP_ERROR:let _=l.getStatus();if(O(Re,`RPC '${e}' ${s} failed with status:`,_,"response text:",l.getResponseText()),_>0){let b=l.getResponseJson();Array.isArray(b)&&(b=b[0]);let P=b?.error;if(P&&P.status&&P.message){let x=function(N){let G=N.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(G)>=0?G:k.UNKNOWN}(P.status);c(new V(x,P.message))}else c(new V(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new V(k.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O(Re,`RPC '${e}' ${s} completed.`)}});let d=JSON.stringify(i);O(Re,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}qo(e,t,r){let i=sc(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ic(),c=rc(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let p=s.join("");O(Re,`Creating RPC '${e}' stream ${i}: ${p}`,l);let _=a.createWebChannel(p,l),b=!1,P=!1,x=new pu({Eo:N=>{P?O(Re,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(b||(O(Re,`Opening RPC '${e}' stream ${i} transport.`),_.open(),b=!0),O(Re,`RPC '${e}' stream ${i} sending:`,N),_.send(N))},Ao:()=>_.close()}),L=(N,G,K)=>{N.listen(G,H=>{try{K(H)}catch(re){setTimeout(()=>{throw re},0)}})};return L(_,Rn.EventType.OPEN,()=>{P||(O(Re,`RPC '${e}' stream ${i} transport opened.`),x.So())}),L(_,Rn.EventType.CLOSE,()=>{P||(P=!0,O(Re,`RPC '${e}' stream ${i} transport closed`),x.Do())}),L(_,Rn.EventType.ERROR,N=>{P||(P=!0,Vn(Re,`RPC '${e}' stream ${i} transport errored:`,N),x.Do(new V(k.UNAVAILABLE,"The operation could not be completed")))}),L(_,Rn.EventType.MESSAGE,N=>{var G;if(!P){let K=N.data[0];J(!!K);let H=K,re=H?.error||((G=H[0])===null||G===void 0?void 0:G.error);if(re){O(Re,`RPC '${e}' stream ${i} received error:`,re);let De=re.status,te=function(y){let w=he[y];if(w!==void 0)return hp(w)}(De),I=re.message;te===void 0&&(te=k.INTERNAL,I="Unknown error status: "+De+" with message "+re.message),P=!0,x.Do(new V(te,I)),_.close()}else O(Re,`RPC '${e}' stream ${i} received:`,K),x.vo(K)}}),L(c,nc.STAT_EVENT,N=>{N.stat===As.PROXY?O(Re,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===As.NOPROXY&&O(Re,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.bo()},0),x}};function oc(){return typeof document<"u"?document:null}function mo(n){return new Uc(n,!0)}var ci=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}};var Js=class{constructor(e,t,r,i,s,a,c,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ci(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(_t(t.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{let i=new V(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){let r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},gu=class extends Js{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=ew(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?$e(a.readTime):B.min()}(e);return this.listener.R_(t,r)}V_(e){let t={};t.database=qc(this.serializer),t.addTarget=function(s,a){let c,l=a.target;if(c=kc(l)?{documents:nw(s,l)}:{query:rw(s,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=dp(s,a.resumeToken);let d=$c(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=Gs(s,a.snapshotVersion.toTimestamp());let d=$c(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);let r=sw(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){let t={};t.database=qc(this.serializer),t.removeTarget=e,this.c_(t)}},yu=class extends Js{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();let t=tw(e.writeResults,e.commitTime),r=$e(e.commitTime);return this.listener.y_(r,t)}w_(){let e={};e.database=qc(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>gp(this.serializer,r))};this.c_(t)}};var _u=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new V(k.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Bc(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(k.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Bc(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(k.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}},vu=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(_t(t),this.C_=!1):O("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}};var wu=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{pn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){let d=q(l);d.k_.add(4),await _i(d),d.K_.set("Unknown"),d.k_.delete(4),await go(d)}(this))})}),this.K_=new vu(r,i)}};async function go(n){if(pn(n))for(let e of n.q_)await e(!0)}async function _i(n){for(let e of n.q_)await e(!1)}function Ep(n,e){let t=q(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Xu(t)?Ju(t):nr(t).s_()&&Yu(t,e))}function Qu(n,e){let t=q(n),r=nr(t);t.B_.delete(e),r.s_()&&Tp(t,e),t.B_.size===0&&(r.s_()?r.a_():pn(t)&&t.K_.set("Unknown"))}function Yu(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}nr(n).V_(e)}function Tp(n,e){n.U_.xe(e),nr(n).m_(e)}function Ju(n){n.U_=new Fc({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),nr(n).start(),n.K_.F_()}function Xu(n){return pn(n)&&!nr(n).i_()&&n.B_.size>0}function pn(n){return q(n).k_.size===0}function bp(n){n.U_=void 0}async function ww(n){n.K_.set("Online")}async function Iw(n){n.B_.forEach((e,t)=>{Yu(n,e)})}async function Ew(n,e){bp(n),Xu(n)?(n.K_.O_(e),Ju(n)):n.K_.set("Unknown")}async function Tw(n,e,t){if(n.K_.set("Online"),e instanceof qs&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let c of s.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(n,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xs(n,r)}else if(e instanceof xn?n.U_.$e(e):e instanceof Bs?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(B.min()))try{let r=await Ip(n.localStore);t.compareTo(r)>=0&&await function(s,a){let c=s.U_.it(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let p=s.B_.get(d);p&&s.B_.set(d,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{let p=s.B_.get(l);if(!p)return;s.B_.set(l,p.withResumeToken(ke.EMPTY_BYTE_STRING,p.snapshotVersion)),Tp(s,l);let _=new si(p.target,l,d,p.sequenceNumber);Yu(s,_)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Xs(n,r)}}async function Xs(n,e,t){if(!tr(e))throw e;n.k_.add(1),await _i(n),n.K_.set("Offline"),t||(t=()=>Ip(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await go(n)})}function Ap(n,e){return e().catch(t=>Xs(n,t,e))}async function yo(n){let e=q(n),t=$t(e),r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;bw(e);)try{let i=await gw(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,Aw(e,i)}catch(i){await Xs(e,i)}Sp(e)&&Rp(e)}function bw(n){return pn(n)&&n.L_.length<10}function Aw(n,e){n.L_.push(e);let t=$t(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Sp(n){return pn(n)&&!$t(n).i_()&&n.L_.length>0}function Rp(n){$t(n).start()}async function Sw(n){$t(n).w_()}async function Rw(n){let e=$t(n);for(let t of n.L_)e.g_(t.mutations)}async function Pw(n,e,t){let r=n.L_.shift(),i=Oc.from(r,e,t);await Ap(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await yo(n)}async function kw(n,e){e&&$t(n).f_&&await async function(r,i){if(function(a){return lp(a)&&a!==k.ABORTED}(i.code)){let s=r.L_.shift();$t(r).__(),await Ap(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await yo(r)}}(n,e),Sp(n)&&Rp(n)}async function xf(n,e){let t=q(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");let r=pn(t);t.k_.add(3),await _i(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await go(t)}async function Cw(n,e){let t=q(n);e?(t.k_.delete(2),await go(t)):e||(t.k_.add(2),await _i(t),t.K_.set("Unknown"))}function nr(n){return n.W_||(n.W_=function(t,r,i){let s=q(t);return s.b_(),new gu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:ww.bind(null,n),mo:Iw.bind(null,n),po:Ew.bind(null,n),R_:Tw.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Xu(n)?Ju(n):n.K_.set("Unknown")):(await n.W_.stop(),bp(n))})),n.W_}function $t(n){return n.G_||(n.G_=function(t,r,i){let s=q(t);return s.b_(),new yu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Sw.bind(null,n),po:kw.bind(null,n),p_:Rw.bind(null,n),y_:Pw.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await yo(n)):(await n.G_.stop(),n.L_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}var Iu=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new We,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,c=new n(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Zu(n,e){if(_t("AsyncQueue",`${e}: ${n}`),tr(n))return new V(k.UNAVAILABLE,`${e}: ${n}`);throw n}var Zs=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=Hr(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var eo=class{constructor(){this.z_=new ce(U.comparator)}track(e){let t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):F():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}},Wn=class n{constructor(e,t,r,i,s,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new n(e,t,Zs.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var Eu=class{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}},Tu=class{constructor(){this.queries=Of(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){let i=q(t),s=i.queries;i.queries=Of(),s.forEach((a,c)=>{for(let l of c.J_)l.onError(r)})})(this,new V(k.ABORTED,"Firestore shutting down"))}};function Of(){return new It(n=>Xf(n),fo)}async function el(n,e){let t=q(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new Eu,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let c=Zu(a,`Initialization of query '${kn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&nl(t)}async function tl(n,e){let t=q(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Dw(n,e){let t=q(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let c of a.J_)c.ta(i)&&(r=!0);a.H_=i}}r&&nl(t)}function Nw(n,e,t){let r=q(n),i=r.queries.get(e);if(i)for(let s of i.J_)s.onError(t);r.queries.delete(e)}function nl(n){n.X_.forEach(e=>{e.next()})}var bu,Vf;(Vf=bu||(bu={})).na="default",Vf.Cache="cache";var ui=class{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;let r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==bu.Cache}};var to=class{constructor(e){this.key=e}},no=class{constructor(e){this.key=e}},Au=class{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=W(),this.mutatedKeys=W(),this.Va=Zf(e),this.ma=new Zs(this.Va)}get fa(){return this.da}ga(e,t){let r=t?t.pa:new eo,i=t?t.ma:this.ma,s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,_)=>{let b=i.get(p),P=po(this.query,_)?_:null,x=!!b&&this.mutatedKeys.has(b.key),L=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations),N=!1;b&&P?b.data.isEqual(P.data)?x!==L&&(r.track({type:3,doc:P}),N=!0):this.ya(b,P)||(r.track({type:2,doc:P}),N=!0,(l&&this.Va(P,l)>0||d&&this.Va(P,d)<0)&&(c=!0)):!b&&P?(r.track({type:0,doc:P}),N=!0):b&&!P&&(r.track({type:1,doc:b}),N=!0,(l||d)&&(c=!0)),N&&(P?(a=a.add(P),s=L?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{ma:a,pa:r,ss:c,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let a=e.pa.j_();a.sort((p,_)=>function(P,x){let L=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return L(P)-L(x)}(p.type,_.type)||this.Va(p.doc,_.doc)),this.wa(r),i=i!=null&&i;let c=t&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new Wn(this.query,e.ma,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new eo,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=W(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});let t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new no(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new to(r))}),t}va(e){this.da=e.ds,this.Ra=W();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Wn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}},Su=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Ru=class{constructor(e){this.key=e,this.Fa=!1}},Pu=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new It(c=>Xf(c),fo),this.Oa=new Map,this.Na=new Set,this.La=new ce(U.comparator),this.Ba=new Map,this.ka=new ai,this.qa={},this.Qa=new Map,this.Ka=oi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}};async function xw(n,e,t=!0){let r=xp(n),i,s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await Pp(r,e,t,!0),i}async function Ow(n,e){let t=xp(n);await Pp(t,e,!0,!1)}async function Pp(n,e,t,r){let i=await yw(n.localStore,it(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await Vw(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ep(n.remoteStore,i),c}async function Vw(n,e,t,r,i){n.Ua=(_,b,P)=>async function(L,N,G,K){let H=N.view.ga(G);H.ss&&(H=await Nf(L.localStore,N.query,!1).then(({documents:I})=>N.view.ga(I,H)));let re=K&&K.targetChanges.get(N.targetId),De=K&&K.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges(H,L.isPrimaryClient,re,De);return Mf(L,N.targetId,te.ba),te.snapshot}(n,_,b,P);let s=await Nf(n.localStore,e,!0),a=new Au(e,s.ds),c=a.ga(s.documents),l=ii.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,l);Mf(n,t,d.ba);let p=new Su(e,t,a);return n.xa.set(e,p),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function Lw(n,e,t){let r=q(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!fo(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await hu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Qu(r.remoteStore,i.targetId),ku(r,i.targetId)}).catch(er)):(ku(r,i.targetId),await hu(r.localStore,i.targetId,!0))}async function Mw(n,e){let t=q(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Qu(t.remoteStore,r.targetId))}async function Fw(n,e,t){let r=zw(n);try{let i=await function(a,c){let l=q(a),d=Ie.now(),p=c.reduce((P,x)=>P.add(x.key),W()),_,b;return l.persistence.runTransaction("Locally write mutations","readwrite",P=>{let x=Et(),L=W();return l.hs.getEntries(P,p).next(N=>{x=N,x.forEach((G,K)=>{K.isValidDocument()||(L=L.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(P,x)).next(N=>{_=N;let G=[];for(let K of c){let H=zv(K,_.get(K.key).overlayedDocument);H!=null&&G.push(new at(K.key,H,Wf(H.value.mapValue),Fe.exists(!0)))}return l.mutationQueue.addMutationBatch(P,d,G,c)}).next(N=>{b=N;let G=N.applyToLocalDocumentSet(_,L);return l.documentOverlayCache.saveOverlays(P,N.batchId,G)})}).then(()=>({batchId:b.batchId,changes:tp(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let d=a.qa[a.currentUser.toKey()];d||(d=new ce(Q)),d=d.insert(c,l),a.qa[a.currentUser.toKey()]=d}(r,i.batchId,t),await vi(r,i.changes),await yo(r.remoteStore)}catch(i){let s=Zu(i,"Failed to persist write");t.reject(s)}}async function kp(n,e){let t=q(n);try{let r=await pw(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Ba.get(s);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?J(a.Fa):i.removedDocuments.size>0&&(J(a.Fa),a.Fa=!1))}),await vi(t,r,e)}catch(r){await er(r)}}function Lf(n,e,t){let r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.xa.forEach((s,a)=>{let c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){let l=q(a);l.onlineState=c;let d=!1;l.queries.forEach((p,_)=>{for(let b of _.J_)b.ea(c)&&(d=!0)}),d&&nl(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Uw(n,e,t){let r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Ba.get(e),s=i&&i.key;if(s){let a=new ce(U.comparator);a=a.insert(s,qe.newNoDocument(s,B.min()));let c=W().add(s),l=new $s(B.min(),new Map,new ce(Q),a,c);await kp(r,l),r.La=r.La.remove(s),r.Ba.delete(e),rl(r)}else await hu(r.localStore,e,!1).then(()=>ku(r,e,t)).catch(er)}async function $w(n,e){let t=q(n),r=e.batch.batchId;try{let i=await fw(t.localStore,e);Dp(t,r,null),Cp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await vi(t,i)}catch(i){await er(i)}}async function Bw(n,e,t){let r=q(n);try{let i=await function(a,c){let l=q(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(_=>(J(_!==null),p=_.keys(),l.mutationQueue.removeMutationBatch(d,_))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Dp(r,e,t),Cp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await vi(r,i)}catch(i){await er(i)}}function Cp(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Dp(n,e,t){let r=q(n),i=r.qa[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function ku(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Np(n,r)})}function Np(n,e){n.Na.delete(e.path.canonicalString());let t=n.La.get(e);t!==null&&(Qu(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),rl(n))}function Mf(n,e,t){for(let r of t)r instanceof to?(n.ka.addReference(r.key,e),qw(n,r)):r instanceof no?(O("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Np(n,r.key)):F()}function qw(n,e){let t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(O("SyncEngine","New document in limbo: "+t),n.Na.add(r),rl(n))}function rl(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){let e=n.Na.values().next().value;n.Na.delete(e);let t=new U(oe.fromString(e)),r=n.Ka.next();n.Ba.set(r,new Ru(t)),n.La=n.La.insert(t,r),Ep(n.remoteStore,new si(it(ho(t.path)),r,"TargetPurposeLimboResolution",Mn.oe))}}async function vi(n,e,t){let r=q(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){let _=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,_?"current":"not-current")}if(d){i.push(d);let _=au.zi(l.targetId,d);s.push(_)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(l,d){let p=q(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>C.forEach(d,b=>C.forEach(b.Wi,P=>p.persistence.referenceDelegate.addReference(_,b.targetId,P)).next(()=>C.forEach(b.Gi,P=>p.persistence.referenceDelegate.removeReference(_,b.targetId,P)))))}catch(_){if(!tr(_))throw _;O("LocalStore","Failed to update sequence numbers: "+_)}for(let _ of d){let b=_.targetId;if(!_.fromCache){let P=p.us.get(b),x=P.snapshotVersion,L=P.withLastLimboFreeSnapshotVersion(x);p.us=p.us.insert(b,L)}}}(r.localStore,s))}async function jw(n,e){let t=q(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());let r=await wp(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(c=>{c.forEach(l=>{l.reject(new V(k.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vi(t,r.Ts)}}function Gw(n,e){let t=q(n),r=t.Ba.get(e);if(r&&r.Fa)return W().add(r.key);{let i=W(),s=t.Oa.get(e);if(!s)return i;for(let a of s){let c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function xp(n){let e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=kp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uw.bind(null,e),e.Ma.R_=Dw.bind(null,e.eventManager),e.Ma.Wa=Nw.bind(null,e.eventManager),e}function zw(n){let e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$w.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bw.bind(null,e),e}var Kn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mo(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return dw(this.persistence,new uu,e.initialUser,this.serializer)}ja(e){return new Ks(ou.ei,this.serializer)}za(e){return new du}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Kn.provider={build:()=>new Kn};var Cu=class extends Kn{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){J(this.persistence.referenceDelegate instanceof Hs);let r=this.persistence.referenceDelegate.garbageCollector;return new Kc(r,e.asyncQueue,t)}ja(e){let t=this.cacheSizeBytes!==void 0?Ge.withCacheSize(this.cacheSizeBytes):Ge.DEFAULT;return new Ks(r=>Hs.ei(r,t),this.serializer)}};var li=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jw.bind(null,this.syncEngine),await Cw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tu}()}createDatastore(e){let t=mo(e.databaseInfo.databaseId),r=function(s){return new mu(s)}(e.databaseInfo);return function(s,a,c,l){return new _u(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new wu(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Lf(this.syncEngine,t,0),function(){return Ys.p()?new Ys:new fu}())}createSyncEngine(e,t){return function(i,s,a,c,l,d,p){let _=new Pu(i,s,a,c,l,d);return p&&(_.$a=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=q(i);O("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await _i(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};li.provider={build:()=>new li};var hi=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var Du=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(i,s){let a=q(i),c={documents:s.map(_=>zs(a.serializer,_))},l=await a.ko("BatchGetDocuments",a.serializer.databaseId,oe.emptyPath(),c,s.length),d=new Map;l.forEach(_=>{let b=Zv(a.serializer,_);d.set(b.key.toString(),b)});let p=[];return s.forEach(_=>{let b=d.get(_.toString());J(!!b),p.push(b)}),p}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ri(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{let i=U.fromPath(r);this.mutations.push(new Us(i,this.precondition(i)))}),await async function(r,i){let s=q(r),a={writes:i.map(c=>gp(s.serializer,c))};await s.Oo("Commit",s.serializer.databaseId,oe.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F();t=B.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new V(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?Fe.exists(!1):Fe.updateTime(t):Fe.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new V(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Fe.updateTime(t)}return Fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};var Nu=class{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.uu=r.maxAttempts,this.r_=new ci(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{let e=new Du(this.datastore),t=this.hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Pu(i)}))}).catch(r=>{this.Pu(r)})})}hu(e){try{let t=this.updateFunction(e);return!yi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){let t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!lp(t)}return!1}};var xu=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=_e.UNAUTHENTICATED,this.clientId=xs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new We;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Zu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function ac(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ff(n,e){n.asyncQueue.verifyOperationInProgress();let t=await Ww(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>xf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>xf(e.remoteStore,i)),n._onlineComponents=e}async function Ww(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await ac(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Vn("Error using user provided cache. Falling back to memory cache: "+t),await ac(n,new Kn)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await ac(n,new Cu(void 0));return n._offlineComponents}async function il(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Ff(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Ff(n,new li))),n._onlineComponents}function Kw(n){return il(n).then(e=>e.syncEngine)}function Hw(n){return il(n).then(e=>e.datastore)}async function ro(n){let e=await il(n),t=e.eventManager;return t.onListen=xw.bind(null,e.syncEngine),t.onUnlisten=Lw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ow.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Mw.bind(null,e.syncEngine),t}function Qw(n,e,t={}){let r=new We;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){let p=new hi({next:b=>{p.eu(),a.enqueueAndForget(()=>tl(s,_));let P=b.docs.has(c);!P&&b.fromCache?d.reject(new V(k.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&b.fromCache&&l&&l.source==="server"?d.reject(new V(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(b)},error:b=>d.reject(b)}),_=new ui(ho(c.path),p,{includeMetadataChanges:!0,ua:!0});return el(s,_)}(await ro(n),n.asyncQueue,e,t,r)),r.promise}function Yw(n,e,t={}){let r=new We;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){let p=new hi({next:b=>{p.eu(),a.enqueueAndForget(()=>tl(s,_)),b.fromCache&&l.source==="server"?d.reject(new V(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(b)},error:b=>d.reject(b)}),_=new ui(c,p,{includeMetadataChanges:!0,ua:!0});return el(s,_)}(await ro(n),n.asyncQueue,e,t,r)),r.promise}function Op(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Uf=new Map;function Vp(n,e,t){if(!t)throw new V(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Jw(n,e,t,r){if(e===!0&&r===!0)throw new V(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $f(n){if(!U.isDocumentKey(n))throw new V(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bf(n){if(U.isDocumentKey(n))throw new V(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function Be(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=sl(n);throw new V(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var io=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Op((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Hn=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new io({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new io(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cc;switch(r.type){case"firstParty":return new dc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Uf.get(t);r&&(O("ComponentProvider","Removing Datastore"),Uf.delete(t),r.terminate())}(this),Promise.resolve()}};function Xw(n,e,t,r={}){var i;let s=(n=Be(n,Hn))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=_e.MOCK_USER;else{c=Fh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new V(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _e(d)}n._authCredentials=new uc(new Ns(c,l))}}var di=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Pe=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},Ft=class n extends di{constructor(e,t,r){super(e,t,ho(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new U(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Lp(n,e,...t){if(n=le(n),Vp("collection","path",e),n instanceof Hn){let r=oe.fromString(e,...t);return Bf(r),new Ft(n,null,r)}{if(!(n instanceof Pe||n instanceof Ft))throw new V(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(oe.fromString(e,...t));return Bf(r),new Ft(n.firestore,null,r)}}function ol(n,e,...t){if(n=le(n),arguments.length===1&&(e=xs.newId()),Vp("doc","path",e),n instanceof Hn){let r=oe.fromString(e,...t);return $f(r),new Pe(n,null,new U(r))}{if(!(n instanceof Pe||n instanceof Ft))throw new V(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(oe.fromString(e,...t));return $f(r),new Pe(n.firestore,n instanceof Ft?n.converter:null,new U(r))}}var so=class{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ci(this,"async_queue_retry"),this.fu=()=>{let r=oc();r&&O("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;let t=oc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;let t=oc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});let t=new We;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!tr(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;let i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw _t("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let i=Iu.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&F()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.du.indexOf(e);this.du.splice(t,1)}};function qf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var ct=class extends Hn{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new so,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new so(e),this._firestoreClient=void 0,await e}}};function Mp(n,e){let t=typeof n=="object"?n:Gi(),r=typeof n=="string"?n:e||"(default)",i=kr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=Mh("firestore");s&&Xw(i,...s)}return i}function wi(n){if(n._terminated)throw new V(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Zw(n),n._firestoreClient}function Zw(n){var e,t,r;let i=n._freezeSettings(),s=function(c,l,d,p){return new yc(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Op(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new xu(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}var Qn=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(ke.fromBase64String(e))}catch(t){throw new V(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var fn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Yn=class{constructor(e){this._methodName=e}};var fi=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}};var pi=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}};var eI=/^__.*__$/,Ou=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new at(e,this.data,this.fieldMask,t,this.fieldTransforms):new dn(e,this.data,t,this.fieldTransforms)}},oo=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new at(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function Fp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}var Vu=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ao(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Fp(this.Mu)&&eI.test(e))throw this.qu('Document fields cannot begin and end with "__"')}},Lu=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||mo(e)}$u(e,t,r,i=!1){return new Vu({Mu:e,methodName:t,Ku:r,path:Ue.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function al(n){let e=n._freezeSettings(),t=mo(n._databaseId);return new Lu(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Up(n,e,t,r,i,s={}){let a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);cl("Data must be an object, but it was:",a,r);let c=qp(r,a),l,d;if(s.merge)l=new ze(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let p=[];for(let _ of s.mergeFields){let b=Fu(e,_,t);if(!a.contains(b))throw new V(k.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Gp(p,b)||p.push(b)}l=new ze(p),d=a.fieldTransforms.filter(_=>l.covers(_.field))}else l=null,d=a.fieldTransforms;return new Ou(new Ve(c),l,d)}var mi=class n extends Yn{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};var Mu=class n extends Yn{_toFieldTransform(e){return new Dc(e.path,new un)}isEqual(e){return e instanceof n}};function $p(n,e,t,r){let i=n.$u(1,e,t);cl("Data must be an object, but it was:",i,r);let s=[],a=Ve.empty();Bt(r,(l,d)=>{let p=ul(e,l,t);d=le(d);let _=i.Bu(p);if(d instanceof mi)s.push(p);else{let b=_o(d,_);b!=null&&(s.push(p),a.set(p,b))}});let c=new ze(s);return new oo(a,c,i.fieldTransforms)}function Bp(n,e,t,r,i,s){let a=n.$u(1,e,t),c=[Fu(e,r,t)],l=[i];if(s.length%2!=0)throw new V(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<s.length;b+=2)c.push(Fu(e,s[b])),l.push(s[b+1]);let d=[],p=Ve.empty();for(let b=c.length-1;b>=0;--b)if(!Gp(d,c[b])){let P=c[b],x=l[b];x=le(x);let L=a.Bu(P);if(x instanceof mi)d.push(P);else{let N=_o(x,L);N!=null&&(d.push(P),p.set(P,N))}}let _=new ze(d);return new oo(p,_,a.fieldTransforms)}function _o(n,e){if(jp(n=le(n)))return cl("Unsupported field value:",e,n),qp(n,e);if(n instanceof Yn)return function(r,i){if(!Fp(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let c of r){let l=_o(c,i.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $v(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=Ie.fromDate(r);return{timestampValue:Gs(i.serializer,s)}}if(r instanceof Ie){let s=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gs(i.serializer,s)}}if(r instanceof fi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qn)return{bytesValue:dp(i.serializer,r._byteString)};if(r instanceof Pe){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof pi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return Ku(c.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${sl(r)}`)}(n,e)}function qp(n,e){let t={};return jf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(n,(r,i)=>{let s=_o(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function jp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ie||n instanceof fi||n instanceof Qn||n instanceof Pe||n instanceof Yn||n instanceof pi)}function cl(n,e,t){if(!jp(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=sl(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Fu(n,e,t){if((e=le(e))instanceof fn)return e._internalPath;if(typeof e=="string")return ul(n,e);throw ao("Field path arguments must be of type string or ",n,!1,void 0,t)}var tI=new RegExp("[~\\*/\\[\\]]");function ul(n,e,t){if(e.search(tI)>=0)throw ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fn(...e.split("."))._internalPath}catch{throw ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ao(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new V(k.INVALID_ARGUMENT,c+n+l)}function Gp(n,e){return n.some(t=>t.isEqual(e))}var Jn=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Uu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(zp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Uu=class extends Jn{data(){return super.data()}};function zp(n,e){return typeof e=="string"?ul(n,e):e instanceof fn?e._internalPath:e._delegate._internalPath}function Wp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var co=class{convertValue(e,t="none"){switch(Ut(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Bt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>se(a.doubleValue));return new pi(s)}convertGeoPoint(e){return new fi(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=lo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ti(e));default:return null}}convertTimestamp(e){let t=vt(e);return new Ie(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=oe.fromString(e);J(vp(r));let i=new Ms(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(t)||_t(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function Kp(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var $u=class extends co{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,t)}};var Mt=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},gi=class extends Jn{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new On(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(zp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},On=class extends gi{data(e={}){return super.data(e)}},uo=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Mt(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new On(this._firestore,this._userDataWriter,r.key,r,new Mt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{let l=new On(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Mt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let l=new On(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Mt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:nI(c.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function nI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}function qt(n){n=Be(n,Pe);let e=Be(n.firestore,ct);return Qw(wi(e),n._key).then(t=>Jp(e,n,t))}var Xn=class extends co{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,t)}};function Hp(n){n=Be(n,di);let e=Be(n.firestore,ct),t=wi(e),r=new Xn(e);return Wp(n._query),Yw(t,n._query).then(i=>new uo(e,r,n,i))}function vo(n,e,t){n=Be(n,Pe);let r=Be(n.firestore,ct),i=Kp(n.converter,e,t);return Yp(r,[Up(al(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Fe.none())])}function rr(n,e,t,...r){n=Be(n,Pe);let i=Be(n.firestore,ct),s=al(i),a;return a=typeof(e=le(e))=="string"||e instanceof fn?Bp(s,"updateDoc",n._key,e,t,r):$p(s,"updateDoc",n._key,e),Yp(i,[a.toMutation(n._key,Fe.exists(!0))])}function Qp(n,...e){var t,r,i;n=le(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||qf(e[a])||(s=e[a],a++);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(qf(e[a])){let _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(i=_.complete)===null||i===void 0?void 0:i.bind(_)}let l,d,p;if(n instanceof Pe)d=Be(n.firestore,ct),p=ho(n._key.path),l={next:_=>{e[a]&&e[a](Jp(d,n,_))},error:e[a+1],complete:e[a+2]};else{let _=Be(n,di);d=Be(_.firestore,ct),p=_._query;let b=new Xn(d);l={next:P=>{e[a]&&e[a](new uo(d,b,_,P))},error:e[a+1],complete:e[a+2]},Wp(n._query)}return function(b,P,x,L){let N=new hi(L),G=new ui(P,N,x);return b.asyncQueue.enqueueAndForget(async()=>el(await ro(b),G)),()=>{N.eu(),b.asyncQueue.enqueueAndForget(async()=>tl(await ro(b),G))}}(wi(d),p,c,l)}function Yp(n,e){return function(r,i){let s=new We;return r.asyncQueue.enqueueAndForget(async()=>Fw(await Kw(r),i,s)),s.promise}(wi(n),e)}function Jp(n,e,t){let r=t.docs.get(e._key),i=new Xn(n);return new gi(n,i,e._key,r,new Mt(t.hasPendingWrites,t.fromCache),e.converter)}var rI={maxAttempts:5};function Kr(n,e){if((n=le(n)).firestore!==e)throw new V(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}var Bu=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=al(t)}get(t){let r=Kr(t,this._firestore),i=new $u(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return F();let a=s[0];if(a.isFoundDocument())return new Jn(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new Jn(this._firestore,i,r._key,null,r.converter);throw F()})}set(t,r,i){let s=Kr(t,this._firestore),a=Kp(s.converter,r,i),c=Up(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,i);return this._transaction.set(s._key,c),this}update(t,r,i,...s){let a=Kr(t,this._firestore),c;return c=typeof(r=le(r))=="string"||r instanceof fn?Bp(this._dataReader,"Transaction.update",a._key,r,i,s):$p(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,c),this}delete(t){let r=Kr(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=Kr(e,this._firestore),r=new Xn(this._firestore);return super.get(e).then(i=>new gi(this._firestore,r,t._key,i._document,new Mt(!1,!1),t.converter))}};function jt(n,e,t){n=Be(n,ct);let r=Object.assign(Object.assign({},rI),t);return function(s){if(s.maxAttempts<1)throw new V(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,a,c){let l=new We;return s.asyncQueue.enqueueAndForget(async()=>{let d=await Hw(s);new Nu(s.asyncQueue,d,c,a,l).cu()}),l.promise}(wi(n),i=>e(new Bu(n,i)),r)}function Xp(){return new mi("deleteField")}function wo(){return new Mu("serverTimestamp")}(function(e,t=!0){(function(i){Zn=i})(Nt),Dt(new je("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),c=new ct(new lc(r.getProvider("auth-internal")),new pc(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Qe(lf,"4.7.5",e),Qe(lf,"4.7.5","esm2017")})();var Zp="ABCDEFGHJKLMNPQRSTUVWXYZ";function ll(){let n="";for(let e=0;e<4;e++)n+=Zp[Math.floor(Math.random()*Zp.length)];return n}function iI(n){return n.length<=3?n:n.endsWith("ies")&&n.length>4?n.slice(0,-3)+"y":/(ss|x|z|ch|sh)es$/.test(n)?n.slice(0,-2):n.endsWith("s")&&!n.endsWith("ss")&&!n.endsWith("us")&&!n.endsWith("is")?n.slice(0,-1):n}var sI=/[aeiouy]/;function oI(n){let e=n.match(/^(.+?)(ing|ed)$/);if(!e)return n;let t=e[1];return t.length<3||!sI.test(t)||t.endsWith("e")?n:/([b-df-hj-np-rtv-z])\1$/.test(t)&&!/(ll|ss|zz)$/.test(t)?t.slice(0,-1):(t.length===3&&/[^aeiou][aeiou][^aeiouwxy]$/.test(t)&&(t+="e"),t)}function Oe(n){return String(n).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/[^a-z0-9 ]+/g," ").split(/\s+/).filter(Boolean).filter((e,t,r)=>!(t===0&&r.length>1&&(e==="the"||e==="a"||e==="an"))).map(iI).map(oI).join(" ")}function ir(n){return String(n).trim().replace(/\s+/g," ").slice(0,40)}function hl(n,e){return(e||[]).includes(Oe(n))}function em(n){return n.length>=2&&n.every(e=>e.norm===n[0].norm)}function aI(n,e){let t=Array.from({length:e.length+1},(r,i)=>i);for(let r=1;r<=n.length;r++){let i=t[0];t[0]=r;for(let s=1;s<=e.length;s++){let a=t[s];t[s]=Math.min(t[s]+1,t[s-1]+1,i+(n[r-1]===e[s-1]?0:1)),i=a}}return t[e.length]}function cI(n,e){let t=Oe(n),r=Oe(e);if(t===r)return!0;let i=Math.min(t.length,r.length),s=aI(t,r);if(i>=5&&s<=1||i>=9&&s<=2)return!0;let a=t.split(" "),c=r.split(" ");return a.every(l=>c.includes(l))||c.every(l=>a.includes(l))}function dl(n){let e={};n.forEach(r=>{let i=Oe(r);e[i]=(e[i]||0)+1});let t=Object.keys(e).sort((r,i)=>e[i]-e[r])[0];return n.find(r=>Oe(r)===t)}function fl(n){if(n.length<2)return!1;let e=dl(n);return n.every(t=>cI(t,e))&&!n.every(t=>Oe(t)===Oe(e))}var tm=`
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
`).map(n=>n.trim()).filter(Boolean);var pl=`
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
`).map(n=>n.split("|").map(e=>e.trim())).filter(([n,e])=>n&&e).map(([n,e])=>({word:n,def:e}));var nm={apiKey:"AIzaSyAEbf9VBdvXdHUSlH0rZgHL7SmvXyAn_nM",authDomain:"thesamesiesgame.firebaseapp.com",projectId:"thesamesiesgame",storageBucket:"thesamesiesgame.firebasestorage.app",messagingSenderId:"120235814862",appId:"1:120235814862:web:4f5762bc1a08d2f228059f"};var Io=(n,e,t)=>`${n} ${n===1?e:t}`,uI=n=>n.length<=2?n.join(" and "):n.slice(0,-1).join(", ")+" and "+n[n.length-1],A={appName:"Brainsmith",listNames:uI,rounds:n=>Io(n,"round","rounds"),errors:{generic:"Something went wrong. Check your connection and try again.",nameFirst:"Type your name first.",codeFormat:"Game codes are 4 letters.",noGame:"No game with that code.",started:"That game already started.",full:n=>`That game is full (${n} players max).`,wordFirst:"Type a word first.",used:n=>`"${n}" has already been used. Pick another!`,connect:"Could not connect to Brainsmith. Check your connection and refresh."},toasts:{waitMinute:"Give them a minute!",nudged:n=>`Nudged ${n} \u{1F44B}`,nudgedYou:n=>`${n} nudged you! Your word, please \u{1F440}`,rematch:n=>`${n} started a rematch. You're in!`,copiedShare:"Copied! Paste it in your group text.",removed:n=>`${n} was removed.`,askedClose:n=>`${n} asked: close enough?`,nameFirst:"Type a name first",nameSaved:"Name saved",inviteCopied:"Invite link copied"},someone:"Someone",aFriend:"A friend",theHost:"the host",thisPlayer:"this player",you:" (you)",host:"Host",loading:"Loading\u2026",findingGame:"Finding your game\u2026",goToStart:"Go to start",a11y:{back:"Step out to the start screen",howTo:"How to play",soundOn:"Turn sound on",soundOff:"Turn sound off",usedWords:n=>`Used words, ${n} so far`,settings:"Settings",close:"Close",closeHowTo:"Close How to Play",gameCode:"Game code",forgetGame:n=>`Remove game ${n} from this list`,removePlayer:n=>`Remove ${n} from the game`,react:(n,e)=>`React ${n}${e?`, ${e} so far`:""}`,slide:(n,e,t)=>`${n} of ${e}: ${t}`},share:{head:(n,e)=>`\u{1F9E0} Brainsmith: we forged "${n}" in ${Io(e,"round","rounds")}!`,headVote:(n,e)=>`\u{1F9E0} Brainsmith: close enough on "${n}" in ${Io(e,"round","rounds")}!`,playWithUs:"Play with us:",invite:n=>`Play Brainsmith with me! Code ${n}`},games:{title:"Your games",button:n=>`Your games (${n})`,needYou:n=>`${n} need you`,none:"No games yet.",loading:"Loading\u2026",with:n=>`With ${n}`,justYou:"Just you so far",removed:"You were removed",notIn:"Not in this game",startIt:"Ready when you are: start it!",waitingStart:"Waiting to start",forged:n=>`Forged: ${n}`,closeEnough:n=>`Close enough: ${n}`,yourTurn:n=>`Your turn \xB7 round ${n}`,waitingOn:n=>`Waiting on ${n}`,revealing:"Revealing\u2026",ended:"Game ended",gone:"No longer around"},home:{howTo:"How to Play",tagline:"Two words in. Meet in the middle.",yourName:"Your name",namePlaceholder:"What should we call you?",start:"Start a new game",dailyEyebrow:"WEIRD DAILY WORDS",dailyTitle:"Scared? You scared.",dailySub:"Start with a redonkulous word",or:"or",codePlaceholder:"Game code",join:"Join",fine:"2 to 5 players \xB7 no sign-up \xB7 no ads",maker:"a Padre Smitty creation"},join:{invited:(n,e)=>`${n} invited you to game <strong>${e}</strong>`,started:"This game already started. Ask them to start a new one and send you the code.",full:"This game is full.",button:"Join the game"},missing:n=>`No game with code ${n}.`,removedFrom:n=>`You were taken out of game ${n} so the others could keep playing.`,confirmRemove:n=>`Remove ${n} from the game? Everyone else can keep playing.`,header:{game:n=>`GAME \xB7 ${n}`},lobby:{title:"Getting ready",dailyBadge:"Weird Daily Words game",inviteWith:"Invite with this code",shareLink:"Share invite link",players:(n,e)=>`PLAYERS \xB7 ${n} OF ${e}`,startNow:"Everyone\u2019s here, start!",needMore:"Waiting for at least one more",waitingFor:n=>`Waiting for ${n} to start\u2026`},round:{title:n=>`Round ${n}`,connect:"Connect these",askClose:"Close enough? Ask to count it",roundOne:"Round one",prompt:"Pick any word in the known universe.",promptTip:"Nouns are easiest. Adjectives make it harder.",lockedIn:"You locked in",waitingOn:n=>`Waiting on ${n}\u2026`,revealing:"Revealing\u2026",yourWord:"Your word",wordPlaceholder:"Type it here",lock:"Lock it in",starter:"Stuck? Give me a word",secret:"Nobody sees your word until everyone\u2019s in.",players:"PLAYERS",playerLocked:"Locked in",thinking:"Thinking\u2026",nudge:"Nudge"},reveal:{title:n=>`Round ${n} is in!`,said:(n,e,t)=>`${n} ${e?"both":"all"} said <em>${t}</em>!`,soClose:"So close! Keep going.",notYetTwo:"Not yet! Next round, connect these two.",notYetAll:"Not yet! Next round, connect all of these.",closeHot:"Those look the same. Close enough?",close:"Close enough?",next:n=>`On to round ${n}`},dealt:{title:"Weird words!",got:n=>`${n} got`,msg:"Everyone got a different word. Next round, find one word that connects them all.",next:"Let\u2019s connect them"},vote:{title:"Close enough?",playOn:n=>`${n} said not quite, so play on.`,youAsked:"You asked",asked:n=>`${n} asked`,explain:(n,e)=>`${n} to count round ${e} as a match. Everyone has to agree.`,waitingOn:n=>`Waiting on ${n}\u2026`,counting:"Counting\u2026",yes:"Yes, count it",no:"No"},won:{forged:"Forged!",closeEnough:"Close enough!",everyone:"Everyone said",agreed:"You all agreed on",howYouGot:"HOW YOU GOT THERE",share:"Share how we did it",joinNext:"Join the next game",again:"Play again, same crew",newCrew:"New game, new people",home:"Back to start"},used:{title:"Used words",explain:"These are off the table. If you try one, we\u2019ll quietly ask for another.",round:n=>`ROUND ${n}`,none:"Nothing yet. Round one is wide open."},settings:{title:"Settings",yourName:"Your name",save:"Save",nameNote:"Used for new games you start or join.",sound:"Sound",soundSub:"Drumroll, flips and the Forged! fanfare",pastGames:"Past games",pastCount:n=>`${Io(n,"game","games")} on this phone`,noneYet:"None yet",howTo:"How to Play",howToSub:"Swipe through the rules again",privacy:"Privacy Policy",terms:"Terms of Use",restore:"Restore Purchase",restoreSoon:"Coming with Brainsmith Plus",contact:"Questions? hello@padresmitty.com",footer:"Brainsmith \xB7 a Padre Smitty creation"},tour:{title:"How to Play",count:(n,e)=>`${n} OF ${e}`,skip:"Skip",next:"Next",done:"Let\u2019s play",names:["Mom","Jake","You"],goalTitle:"Every brain, one word",goalBody:"Brainsmith is a team game. You all win together when every player types the very same word.",secretTitle:"Pick a word in secret",secretBody:"Any word you like. Nobody sees it until everyone\u2019s locked in, so take your time. Stuck on round 1? Tap <strong>Give me a word</strong>.",flipTitle:"They all flip at once",flipBody:"Drumroll, then every word is revealed together. The fun is seeing how far apart you started.",flipWords:["Ocean","Pizza","Robot"],middleTitle:"Meet in the middle",middleBody:"Next round, everyone looks for one word that connects the words you just saw. It doesn\u2019t have to be perfect, just your best guess at what the others will say.",middleGuess:"Anchovy?",forgeTitle:"Forge it!",forgeBody:"Keep connecting, round after round, until all of you land on the same word. Then it\u2019s <strong>Forged!</strong>",forgeWord:"Anchovy",matchTitle:"What counts as a match",matchRules:[["ok","Capitals don\u2019t matter.","Tennessee = tennessee"],["ok","Plurals count.","Game = games"],["ok","Endings count.","Run = running, bake = baked"],["ok","Two-word answers are fine.","Ice cream, New York"],["no","Extra words make it different.","Cliff \u2260 Cliff Swaim. If everyone agrees it\u2019s the same, vote <b>Close enough?</b>"],["no","No repeats.","A word already played this game is off limits."]],toolsTitle:"Handy buttons",tools:[["\u{1F44B}","Nudge","a player who\u2019s taking a while."],["\u{1F91D}","Close enough?","starts a vote when words almost match. Everyone has to say yes."],["list","Used words","shows every word played so far."],["\u{1F602}","React","to anyone\u2019s word after the reveal."]]},move:{home:"Brainsmith has a new home: <b>playbrainsmith.com</b>. Finish your games here and we\u2019ll take you there.",won:"Next game? Play it at <b>playbrainsmith.com</b>, our new home."}};var ge=null,Eo=!1;try{Eo=localStorage.getItem("samesies.muted")==="1"}catch{}var mn=()=>Eo;function im(n){Eo=n;try{localStorage.setItem("samesies.muted",n?"1":"0")}catch{}}function sm(){try{ge||(ge=new(window.AudioContext||window.webkitAudioContext)),ge.state==="suspended"&&ge.resume()}catch{}}function ml(){return!Eo&&ge&&ge.state==="running"}function lI(){let n=ge.createBuffer(1,ge.sampleRate*.08,ge.sampleRate),e=n.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=(Math.random()*2-1)*(1-t/e.length);return n}function rm(n,e){let t=ge.createBufferSource();t.buffer=lI();let r=ge.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.8;let i=ge.createGain();i.gain.value=e,t.connect(r).connect(i).connect(ge.destination),t.start(n)}function sr(n,e,t,r=.18,i="triangle"){let s=ge.createOscillator();s.type=i,s.frequency.value=n;let a=ge.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(r,e+.02),a.gain.exponentialRampToValueAtTime(1e-4,e+t),s.connect(a).connect(ge.destination),s.start(e),s.stop(e+t+.05)}function om(n=1.4){if(!ml())return;let e=ge.currentTime;for(let t=0;t<n;t+=.045)rm(e+t,.08+.35*(t/n));rm(e+n,.7),sr(523,e+n,.5,.15),sr(784,e+n,.6,.12)}function am(){if(!ml())return;let n=ge.currentTime;sr(440,n,.25),sr(554,n+.12,.35)}function cm(){if(!ml())return;let n=ge.currentTime;[523,659,784,1047].forEach((e,t)=>sr(e,n+t*.11,t===3?.9:.3,.2)),sr(1319,n+.44,.9,.08,"sine")}function um(n=["#FF6A4D","#FFFFFF","#FFB020","#8A8CFF","#1FB895"]){if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let e=document.createElement("div");e.className="confetti",e.setAttribute("aria-hidden","true");for(let t=0;t<90;t++){let r=document.createElement("i");r.style.left=Math.random()*100+"%",r.style.background=n[t%n.length],r.style.animationDelay=Math.random()*.6+"s",r.style.animationDuration=2.2+Math.random()*1.6+"s",r.style.setProperty("--drift",Math.random()*160-80+"px"),r.style.setProperty("--spin",Math.random()*1080-540+"deg"),t%3===0&&(r.style.borderRadius="50%"),e.appendChild(r)}document.body.appendChild(e),setTimeout(()=>e.remove(),4800)}var gm=Ea(nm),ym=Xa(gm),ut=Mp(gm),fe=document.getElementById("app"),ue={get(n,e=null){try{let t=localStorage.getItem("samesies."+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("samesies."+n,JSON.stringify(e))}catch{}}},v={uid:null,authError:null,name:ue.get("name",""),tour:ue.get("toured",!1)?null:0,code:new URLSearchParams(location.search).get("g")?.toUpperCase()||null,game:null,gameMissing:!1,mySub:null,showUsed:!1,showGames:!1,showSettings:!1,moving:!1,summaries:{},busy:!1,error:"",toast:""},gn=null,gl=!1,lm=null,El=new Set,yl={},hm=["#4B4DDB","#FF6A4D","#1FB895","#FFB020","#E84D9A"],or=(n,e)=>hm[Math.max(0,n.order.indexOf(e))%hm.length],hI=["\u{1F602}","\u{1F92F}","\u{1F525}","\u2764\uFE0F"],$=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ee=n=>ol(ut,"games",n),Tl=(n,e,t)=>ol(ut,"games",n,"rounds",String(e),"subs",t),dI=n=>`${location.origin}${location.pathname}?g=${n}`;function _m(n){let e=n?`${location.pathname}?g=${n}`:location.pathname;history.replaceState(null,"",e)}function fI(n){let e=ue.get("games",[]).filter(t=>t.code!==n);e.unshift({code:n,at:Date.now()}),ue.set("games",e.slice(0,6))}function Ke(n){v.toast=n,j(),clearTimeout(Ke.t),Ke.t=setTimeout(()=>{v.toast="",j()},3200)}function Ce(n){console.error(n),v.busy=!1,v.error=typeof n=="string"?n:A.errors.generic,j()}var pI={logo:[409,640],spark:[358,360],bolt:[195,360],hammer:[313,360],bolts:[383,360],burst:[343,360],swing:[342,360]},Je=(n,e,t="")=>{let[r,i]=pI[n];return`<img class="art ${t}" src="art/${n}.webp" width="${Math.round(r*e/i)}" height="${e}" alt="" aria-hidden="true" decoding="async">`},vm='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M9.5 9.3a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2.3-2.5 3.8"/><path d="M12 17.2h.01"/></svg>',wm='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',Sl='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>',mI='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',To=`<button class="icon-btn back" data-act="home" aria-label="${A.a11y.back}">${mI}</button>`,gI=n=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/>${n?'<path d="M17 9l5 6M22 9l-5 6"/>':'<path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/>'}</svg>`,yI='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',_l='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',Ii='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';function Im(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}var dm=(()=>{let n=20261012,e=()=>(n=(n*1664525+1013904223)%4294967296,n/4294967296),t=pl.map((r,i)=>i);for(let r=t.length-1;r>0;r--){let i=Math.floor(e()*(r+1));[t[r],t[i]]=[t[i],t[r]]}return t})();function _I(n=Im()){let e=Math.round(Date.UTC(...n.split("-").map((t,r)=>r===1?t-1:+t))/864e5);return Array.from({length:5},(t,r)=>pl[dm[(e*5+r)%dm.length]])}async function Rl(n={}){let e=ir(v.name);if(!e)return Ce(A.errors.nameFirst);v.busy=!0,v.error="",j();try{let t;for(let r=0;r<8&&(t=ll(),!!(await qt(ee(t))).exists());r++);await vo(ee(t),{code:t,hostUid:v.uid,status:"lobby",createdAt:wo(),players:{[v.uid]:{name:e,joinedAt:Date.now()}},order:[v.uid],round:1,revealed:0,submitted:{},history:[],used:[],winWord:null,nudges:{},...n.daily?{daily:{date:Im(),words:_I()}}:{}}),v.busy=!1,ar(t)}catch(t){Ce(t)}}async function fm(n,e){let t=ir(e||v.name),r=String(n||"").trim().toUpperCase();if(!t)return Ce(A.errors.nameFirst);if(!/^[A-Z]{4}$/.test(r))return Ce(A.errors.codeFormat);v.busy=!0,v.error="",j();try{await jt(ut,async i=>{let s=await i.get(ee(r));if(!s.exists())throw A.errors.noGame;let a=s.data();if(!a.players[v.uid]){if(a.status!=="lobby")throw A.errors.started;if(a.order.length>=5)throw A.errors.full(5);i.update(ee(r),{[`players.${v.uid}`]:{name:t,joinedAt:Date.now()},order:[...a.order,v.uid]})}}),v.busy=!1,ar(r)}catch(i){Ce(i)}}async function vI(){let n=v.game;if(!(n.order.length<2))try{if(n.daily){let e=n.order.map((t,r)=>({uid:t,name:n.players[t].name,word:n.daily.words[r].word,def:n.daily.words[r].def}));await rr(ee(n.code),{status:"playing",round:2,revealed:1,submitted:{},history:[{round:1,dealt:!0,words:e}],used:[...new Set(e.map(t=>Oe(t.word)))]})}else await rr(ee(n.code),{status:"playing",round:1})}catch(e){Ce(e)}}async function wI(n){let e=v.game,t=ir(n);if(!t)return Ce(A.errors.wordFirst);if(hl(t,e.used))return Ce(A.errors.used(t));let r=e.round;v.busy=!0,v.error="",j();try{try{await vo(Tl(e.code,r,v.uid),{word:t,norm:Oe(t),at:wo()})}catch(i){if(!(await qt(Tl(e.code,r,v.uid))).exists())throw i}v.mySub={round:r,word:t},await jt(ut,async i=>{let a=(await i.get(ee(e.code))).data();if(a.status!=="playing"||a.round!==r)return;let c={...a.submitted,[v.uid]:!0},l=a.order.every(d=>c[d]);i.update(ee(e.code),{submitted:c,...l?{revealed:r}:{}})}),v.busy=!1,j()}catch(i){Ce(i)}}async function II(n){if(!gl){gl=!0;try{let e=n.round,t=await Hp(Lp(ut,"games",n.code,"rounds",String(e),"subs")),r={};if(t.forEach(s=>{r[s.id]=s.data()}),!n.order.every(s=>r[s]))return;let i=n.order.map(s=>({uid:s,name:n.players[s].name,word:r[s].word,norm:r[s].norm}));await jt(ut,async s=>{let c=(await s.get(ee(n.code))).data();if(c.status!=="playing"||c.round!==e||c.revealed!==e)return;let l=[...c.history,{round:e,words:i.map(({uid:d,name:p,word:_})=>({uid:d,name:p,word:_}))}];if(em(i))s.update(ee(n.code),{history:l,status:"won",winWord:i[0].word});else{let d=[...new Set([...c.used,...i.map(p=>p.norm)])];s.update(ee(n.code),{history:l,used:d,round:e+1,submitted:{}})}})}catch(e){console.error("resolve failed",e)}finally{gl=!1}}}async function EI(n){let e=v.game;if(yl[n]&&Date.now()-yl[n]<6e4)return Ke(A.toasts.waitMinute);yl[n]=Date.now();try{await rr(ee(e.code),{[`nudges.${n}`]:{at:Date.now(),from:e.players[v.uid].name}}),Ke(A.toasts.nudged(e.players[n].name))}catch(t){Ce(t)}}async function TI(){let n=v.game,e=n.history[n.history.length-1];if(e)try{await jt(ut,async t=>{let r=(await t.get(ee(n.code))).data(),i=r.history[r.history.length-1];r.status!=="playing"||!i||i.round!==e.round||r.vote?.round===e.round||t.update(ee(n.code),{vote:{round:e.round,by:v.uid,yes:{[v.uid]:!0},no:{},result:null}})})}catch(t){Ce(t)}}async function pm(n){let e=v.game;try{await jt(ut,async t=>{let r=(await t.get(ee(e.code))).data(),i=r.vote,s=r.history[r.history.length-1];if(r.status!=="playing"||!i||i.result||!s||i.round!==s.round)return;let a={...i.yes},c={...i.no};n?a[v.uid]=!0:c[v.uid]=!0,n?r.order.every(l=>a[l])?t.update(ee(e.code),{vote:{...i,yes:a,no:c,result:"yes"},status:"won",wonBy:"vote",winWord:dl(s.words.map(l=>l.word)),history:r.history}):t.update(ee(e.code),{vote:{...i,yes:a,no:c}}):t.update(ee(e.code),{vote:{...i,yes:a,no:c,result:"no"}})})}catch(t){Ce(t)}}async function bI(){let n=v.game;v.busy=!0,j();try{let e;for(let t=0;t<8&&(e=ll(),!!(await qt(ee(e))).exists());t++);await vo(ee(e),{code:e,hostUid:v.uid,status:"lobby",createdAt:wo(),players:{[v.uid]:{name:n.players[v.uid].name,joinedAt:Date.now()}},order:[v.uid],round:1,revealed:0,submitted:{},history:[],used:[],winWord:null,nudges:{}}),El.add(e),await rr(ee(n.code),{next:e}),v.busy=!1,ar(e)}catch(e){Ce(e)}}async function AI(n){let e=n.next;try{let t=await qt(ee(e)),r=t.exists()?t.data():null;if(!r)return j();if(!r.players[v.uid]){if(r.status!=="lobby"||r.order.length>=5)return j();await jt(ut,async i=>{let s=(await i.get(ee(e))).data();s.players[v.uid]||s.status!=="lobby"||s.order.length>=5||i.update(ee(e),{[`players.${v.uid}`]:{name:n.players[v.uid].name,joinedAt:Date.now()},order:[...s.order,v.uid]})}),Ke(A.toasts.rematch(r.players[r.hostUid]?.name||A.someone))}ar(e)}catch{j()}}function SI(n){let e=n.history.map((r,i)=>{let s={};r.words.forEach(l=>{let d=Oe(l.word);s[d]=(s[d]||0)+1});let a=i===n.history.length-1;return`${r.words.map(l=>a?"\u{1F7E3}":s[Oe(l.word)]>1?"\u{1F7E0}":"\u26AA").join("")} ${r.words.map(l=>l.word).join(" \xB7 ")}`});return`${(n.wonBy==="vote"?A.share.headVote:A.share.head)(n.winWord,n.history.length)}

${e.join(`
`)}

${A.share.playWithUs}`}async function RI(){let n=v.game,e=location.origin+location.pathname,t=SI(n);try{navigator.share?await navigator.share({title:A.appName,text:t,url:e}):(await navigator.clipboard.writeText(`${t} ${e}`),Ke(A.toasts.copiedShare))}catch{}}async function PI(){let n=v.game;ir(v.name)||(v.name=n.players[v.uid]?.name||""),Em(),Rl()}function kI(n){let e=n.order.filter(s=>s!==v.uid).map(s=>n.players[s]?.name).filter(Boolean),t=A.games,r=e.length?t.with(Ao(e)):t.justYou;if(!n.players[v.uid])return{with_:r,status:n.removed?.includes(v.uid)?t.removed:t.notIn,tone:"muted"};if(n.status==="lobby")return{with_:r,status:n.hostUid===v.uid?t.startIt:t.waitingStart,tone:n.hostUid===v.uid?"hot":"muted"};if(n.status==="won")return{with_:r,status:(n.wonBy==="vote"?t.closeEnough:t.forged)(n.winWord),tone:"done"};if(!n.submitted?.[v.uid])return{with_:r,status:t.yourTurn(n.round),tone:"hot"};let i=n.order.filter(s=>!n.submitted?.[s]).map(s=>n.players[s].name);return{with_:r,status:i.length?t.waitingOn(Ao(i)):t.revealing,tone:"muted"}}async function bo(){let n=ue.get("games",[]);await Promise.all(n.map(async({code:e})=>{try{let t=await qt(ee(e));v.summaries[e]=t.exists()?kI(t.data()):{with_:A.games.ended,status:A.games.gone,tone:"muted",gone:!0}}catch{}})),j()}function CI(n){ue.set("games",ue.get("games",[]).filter(e=>e.code!==n)),delete v.summaries[n],j()}async function DI(n){let e=v.game,t=e.players[n]?.name||A.thisPlayer;if(confirm(A.confirmRemove(t)))try{await jt(ut,async r=>{let i=(await r.get(ee(e.code))).data();if(!i.players[n]||i.order.length<=2)return;let s={...i.players};delete s[n];let a=i.order.filter(d=>d!==n),c={...i.submitted};delete c[n];let l=i.status==="playing"&&a.every(d=>c[d]);r.update(ee(e.code),{players:s,order:a,submitted:c,removed:[...i.removed||[],n],...i.hostUid===n?{hostUid:a[0]}:{},...l?{revealed:i.round}:{}})}),Ke(A.toasts.removed(t))}catch(r){Ce(r)}}async function NI(n,e,t){let r=v.game,i=`${n}_${e}`,s=r.reactions?.[i]?.[v.uid];try{await rr(ee(r.code),{[`reactions.${i}.${v.uid}`]:s===t?Xp():t})}catch(a){Ce(a)}}function xI(n,e,t){let r=n.reactions?.[`${e}_${t}`]||{},i={};return Object.values(r).forEach(s=>{i[s]=(i[s]||0)+1}),`<div class="reacts">${hI.map(s=>`<button class="react${r[v.uid]===s?" mine":""}" data-act="react" data-round="${e}" data-uid="${$(t)}" data-emoji="${s}" aria-label="${A.a11y.react(s,i[s])}">${s}${i[s]?`<span>${i[s]}</span>`:""}</button>`).join("")}</div>`}function OI(n,e,t){let r=n.reactions?.[`${e}_${t}`]||{},i={};Object.values(r).forEach(a=>{i[a]=(i[a]||0)+1});let s=Object.entries(i).map(([a,c])=>`${a}${c>1?c:""}`);return s.length?`<span class="chip-reacts">${s.join(" ")}</span>`:""}function ar(n){gn&&gn(),v.code=n,v.game=null,v.gameMissing=!1,v.mySub=null,v.error="",v.showUsed=!1,_m(n),j(),gn=Qp(ee(n),async e=>{if(!e.exists()){v.gameMissing=!0,v.game=null,j();return}let t=e.data();v.game=t,t.players[v.uid]&&fI(n);let r=t.nudges?.[v.uid];if(r&&r.at>ue.get("nudgeSeen",0)&&(ue.set("nudgeSeen",r.at),Date.now()-r.at<10*6e4)){Ke(A.toasts.nudgedYou(r.from));try{navigator.vibrate?.(200)}catch{}}if(t.status==="won"&&t.next&&t.players[v.uid]&&!El.has(t.next)){El.add(t.next),AI(t);return}if(t.players[v.uid]&&!ue.get("toured",!1)&&(v.tour=null,ue.set("toured",!0)),t.vote&&!t.vote.result&&t.vote.by!==v.uid){let i=`${n}.${t.vote.round}`;if(lm!==i){lm=i,Ke(A.toasts.askedClose(t.players[t.vote.by]?.name||A.someone));try{navigator.vibrate?.(200)}catch{}}}if(t.status==="playing"&&t.submitted?.[v.uid]&&v.mySub?.round!==t.round)try{let i=await qt(Tl(n,t.round,v.uid));i.exists()&&(v.mySub={round:t.round,word:i.data().word})}catch{}t.status==="playing"&&t.revealed===t.round&&II(t),j()},e=>Ce(e))}function Em(){gn&&gn(),gn=null,v.code=null,v.game=null,v.gameMissing=!1,v.error="",_m(null),j(),bo()}function Ro(n,e){let t=n.used.length;return`
  <header class="bar">
    ${To}
    <div class="bar-title">
      <span class="eyebrow">${A.header.game($(n.code))}</span>
      <h1 class="h-round">${$(e)}</h1>
    </div>
    <button class="icon-btn quiet" data-act="tour" aria-label="${A.a11y.howTo}">${vm}</button>
    <button class="icon-btn quiet" data-act="mute" aria-label="${mn()?A.a11y.soundOn:A.a11y.soundOff}" aria-pressed="${mn()}">${gI(mn())}</button>
    ${n.status!=="lobby"?`<button class="icon-btn" data-act="used" aria-label="${A.a11y.usedWords(t)}">${wm}</button>`:""}
  </header>`}function mm(n=A.loading){return`<main class="screen center"><div class="pulse">${Je("logo",150)}</div><p class="muted">${$(n)}</p></main>`}function VI(){let n=ue.get("games",[]);return`
  <main class="screen">
    <div class="home-top"><button class="help-pill" data-act="tour">${vm}${A.home.howTo}</button><button class="icon-btn quiet settings-btn" data-act="settings" aria-label="${A.a11y.settings}">${yI}</button></div>
    <div class="hero">
      ${Je("logo",210,"hero-logo")}
      <h1 class="wordmark">Brain<b>smith</b></h1>
      <p class="tagline">${A.home.tagline}</p>
    </div>
    ${v.moving?`<p class="notice move-note">${A.move.home}</p>`:""}
    <div class="grow"></div>
    <form class="stack" data-form="create">
      <label for="name" class="label">${A.home.yourName}</label>
      <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${$(v.name)}" placeholder="${A.home.namePlaceholder}">
      <button class="btn primary" ${v.busy?"disabled":""}>${A.home.start}</button>
    </form>
    <button class="daily-card" data-act="daily" ${v.busy?"disabled":""}>
      <span class="daily-top"><span class="eyebrow">${A.home.dailyEyebrow}</span><span class="muted small">${$(new Date().toLocaleDateString(void 0,{month:"short",day:"numeric"}))}</span></span>
      <span class="daily-title">${A.home.dailyTitle}</span>${Je("bolts",64,"daily-art")}
      <span class="muted small">${A.home.dailySub}</span>
    </button>
    <div class="or"><span></span>${A.home.or}<span></span></div>
    <form class="row" data-form="join">
      <label for="code" class="sr-only">${A.a11y.gameCode}</label>
      <input id="code" name="code" class="input code" maxlength="4" autocapitalize="characters" autocomplete="off" placeholder="${A.home.codePlaceholder}">
      <button class="btn outline" ${v.busy?"disabled":""}>${A.home.join}</button>
    </form>
    ${v.error?`<p class="error" role="alert">${$(v.error)}</p>`:""}
    ${n.length?(()=>{let e=n.filter(t=>v.summaries[t.code]?.tone==="hot").length;return`<button class="btn soft games-btn" data-act="games">${A.games.button(n.length)}${e?`<span class="turn-pill">${A.games.needYou(e)}</span>`:""}</button>`})():""}
    <p class="fine">${A.home.fine}</p>
    <p class="fine maker">${A.home.maker}</p>
  </main>`}function LI(n){let e=n.order.length>=5,t=n.status!=="lobby";return`
  <main class="screen">
    <header class="bar">${To}</header>
    <div class="hero tight">
      ${Je("logo",170,"hero-logo")}
      <h1 class="wordmark small">Brain<b>smith</b></h1>
      <p class="tagline">${A.join.invited($(n.players[n.hostUid]?.name||A.aFriend),$(n.code))}</p>
    </div>
    <div class="grow"></div>
    ${t?`<p class="notice">${A.join.started}</p>
      <button class="btn outline" data-act="home">${A.goToStart}</button>`:e?`<p class="notice">${A.join.full}</p><button class="btn outline" data-act="home">${A.goToStart}</button>`:`<form class="stack" data-form="joinlink">
        <label for="name" class="label">${A.home.yourName}</label>
        <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${$(v.name)}" placeholder="${A.home.namePlaceholder}">
        <button class="btn primary" ${v.busy?"disabled":""}>${A.join.button}</button>
      </form>`}
    ${v.error?`<p class="error" role="alert">${$(v.error)}</p>`:""}
  </main>`}function MI(n){let e=n.hostUid===v.uid,t=n.order.length>=2;return`
  <main class="screen">
    ${Ro(n,A.lobby.title)}
    <section class="card center-text">
      ${n.daily?`<span class="badge">${A.lobby.dailyBadge}</span>`:""}
      <span class="muted">${A.lobby.inviteWith}</span>
      <div class="big-code">${$(n.code)}</div>
      <button class="btn soft" data-act="share">${A.lobby.shareLink}</button>
    </section>
    <section class="stack">
      <span class="eyebrow">${A.lobby.players(n.order.length,5)}</span>
      ${n.order.map(r=>`
        <div class="player">
          <div class="dot done" style="background:${or(n,r)}">${Sl}</div>
          <span class="pname">${$(n.players[r].name)}${r===v.uid?A.you:""}</span>
          ${r===n.hostUid?`<span class="muted small">${A.host}</span>`:""}
        </div>`).join("")}
    </section>
    <div class="grow"></div>
    ${e?`<button class="btn primary" data-act="start" ${t?"":"disabled"}>${t?A.lobby.startNow:A.lobby.needMore}</button>`:`<p class="fine">${A.lobby.waitingFor($(n.players[n.hostUid]?.name||A.theHost))}</p>`}
  </main>`}function FI(n){let e=n.history[n.history.length-1],t=!!n.submitted?.[v.uid],r=n.order.filter(i=>!n.submitted?.[i]);return`
  <main class="screen">
    ${Ro(n,A.round.title(n.round))}
    ${e&&n.vote?.round===e.round&&!n.vote.result?Tm(n):""}
    <section class="card center-text">
      ${e?`
        <span class="muted">${A.round.connect}</span>
        <div class="word-chips">${e.words.map(i=>`<span class="word-chip" style="--pc:${or(n,i.uid)}">${$(i.word)}${OI(n,e.round,i.uid)}</span>`).join("")}</div>
        ${e.dealt?`<div class="defs">${e.words.map(i=>`<span><strong>${$(i.word)}:</strong> ${$(i.def)}</span>`).join("")}</div>`:""}
        ${n.vote?.round===e.round||e.dealt?"":`<button class="linkish close-link" data-act="vote">${A.round.askClose}</button>`}`:`
        <span class="muted">${A.round.roundOne}</span>
        <p class="prompt">${A.round.prompt}</p>
        <span class="muted small">${A.round.promptTip}</span>`}
    </section>
    ${t?`
      <section class="locked">
        <span class="muted">${A.round.lockedIn}</span>
        <div class="locked-word">${$(v.mySub?.round===n.round?v.mySub.word:"\u2713")}</div>
        <span class="muted small">${r.length?A.round.waitingOn(r.map(i=>$(n.players[i].name)).join(", ")):A.round.revealing}</span>
      </section>`:`
      <form class="stack" data-form="word">
        <label for="word" class="label">${A.round.yourWord}</label>
        <input id="word" name="word" class="input big" maxlength="40" autocomplete="off" autocorrect="on" spellcheck="true" autocapitalize="sentences" placeholder="${A.round.wordPlaceholder}">
        <button class="btn primary" ${v.busy?"disabled":""}>${A.round.lock}</button>
        ${e?"":`<button type="button" class="btn soft" data-act="starter">${A.round.starter}</button>`}
        <span class="fine">${A.round.secret}</span>
      </form>`}
    ${v.error?`<p class="error" role="alert">${$(v.error)}</p>`:""}
    <div class="grow"></div>
    <section class="stack tight">
      <span class="eyebrow">${A.round.players}</span>
      ${n.order.map(i=>{let s=!!n.submitted?.[i],a=i===v.uid,c=!a&&!s&&n.order.length>2&&(n.hostUid===v.uid||i===n.hostUid);return`
        <div class="player">
          ${s?`<div class="dot done" style="background:${or(n,i)}">${Sl}</div>`:`<div class="dot" style="border-color:${or(n,i)}"></div>`}
          <span class="pname">${$(n.players[i].name)}${a?A.you:""}</span>
          ${s?`<span class="muted small">${A.round.playerLocked}</span>`:a?`<span class="muted small">${A.round.thinking}</span>`:`<button class="btn nudge" data-act="nudge" data-uid="${$(i)}">${A.round.nudge}</button>${c?`<button class="icon-btn soft remove" data-act="remove" data-uid="${$(i)}" aria-label="${A.a11y.removePlayer($(n.players[i].name))}">${Ii}</button>`:""}`}
        </div>`}).join("")}
    </section>
  </main>`}function UI(n){let e={};return n.forEach(t=>{var r;(e[r=Oe(t.word)]||(e[r]=[])).push(t)}),Object.values(e).filter(t=>t.length>1).sort((t,r)=>r.length-t.length)}var Ao=A.listNames;function $I(n,e){let t=UI(e.words),r=new Set(t.flat().map(a=>a.uid)),i=t.length?t.map(a=>A.reveal.said(Ao(a.map(c=>$(c.name))),a.length===2,$(a[0].word))).join("<br>"):"";if(e.dealt)return BI(n,e);let s=t.length?A.reveal.soClose:e.words.length===2?A.reveal.notYetTwo:A.reveal.notYetAll;return`
  <main class="screen reveal-screen">
    ${Ro(n,A.reveal.title(e.round))}
    <section class="stack reveal">
      ${e.words.map(a=>`
        <div class="reveal-card${r.has(a.uid)?" matched":""}" style="--pc:${or(n,a.uid)}">
          <span class="rname">${$(a.name)}</span>
          <span class="rword">${$(a.word)}</span>
          ${xI(n,e.round,a.uid)}
        </div>`).join("")}
    </section>
    <div class="after-reveal stack">
    ${i?`<div class="so-close"><span class="so-close-names">${i}</span><span class="muted">${s}</span></div>`:`<div class="row msg">${Je("spark",44)}<span class="muted">${$(s)}</span></div>`}
    ${n.vote?.round===e.round?Tm(n):`<button class="btn ${fl(e.words.map(a=>a.word))?"close-hot":"soft"}" data-act="vote">${fl(e.words.map(a=>a.word))?A.reveal.closeHot:A.reveal.close}</button>`}
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${e.round}">${A.reveal.next(e.round+1)}</button>
  </main>`}function BI(n,e){return`
  <main class="screen reveal-screen">
    ${Ro(n,A.dealt.title)}
    <section class="stack reveal">
      ${e.words.map(t=>`
        <div class="reveal-card" style="--pc:${or(n,t.uid)}">
          <span class="rname">${A.dealt.got($(t.name))}</span>
          <span class="rword">${$(t.word)}</span>
          <span class="rdef">${$(t.def)}</span>
        </div>`).join("")}
    </section>
    <div class="after-reveal stack">
      <div class="row msg">${Je("spark",44)}<span class="muted">${A.dealt.msg}</span></div>
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${e.round}">${A.dealt.next}</button>
  </main>`}function Tm(n){let e=n.vote,t=$(n.players[e.by]?.name||A.someone);if(e.result==="no"){let s=$(n.players[Object.keys(e.no)[0]]?.name||A.someone);return`<section class="vote done"><span class="muted">${A.vote.playOn(s)}</span></section>`}let r=e.yes[v.uid]||e.no[v.uid],i=n.order.filter(s=>!e.yes[s]&&!e.no[s]).map(s=>$(n.players[s].name));return`
  <section class="vote" aria-live="polite">
    <span class="vote-title">${A.vote.title}</span>
    <span class="muted">${A.vote.explain(e.by===v.uid?A.vote.youAsked:A.vote.asked(t),e.round)}</span>
    ${r?`<span class="muted small">${i.length?A.vote.waitingOn(i.join(", ")):A.vote.counting}</span>`:`<div class="row"><button class="btn primary grow" data-act="yes">${A.vote.yes}</button><button class="btn outline" data-act="no">${A.vote.no}</button></div>`}
  </section>`}function qI(n){let e=n.order.map(r=>n.players[r].name),t=Ao(e);return`
  <main class="screen win">
    <div class="win-top">
      <div class="pop win-art">${Je("swing",150)}</div>
      <h1 class="win-title">${n.wonBy==="vote"?A.won.closeEnough:A.won.forged}</h1>
      <span class="win-sub">${n.wonBy==="vote"?A.won.agreed:A.won.everyone}</span>
      <div class="win-word">${$(n.winWord)}</div>
      <span class="win-sub">${$(t)} \xB7 ${A.rounds(n.history.length)}</span>
    </div>
    <div class="grow"></div>
    <section class="chain">
      <span class="eyebrow light">${A.won.howYouGot}</span>
      ${n.history.map((r,i)=>`<span class="${i===n.history.length-1?"strong":""}">${r.words.map(s=>$(s.word)).join(" \xB7 ")}</span>`).join("")}
    </section>
    ${v.moving?`<p class="notice move-note">${A.move.won}</p>`:""}
    <button class="btn coral" data-act="sharegame">${A.won.share}</button>
    ${n.next?`<button class="btn white" data-act="open" data-code="${$(n.next)}">${A.won.joinNext}</button>`:`<button class="btn white" data-act="again" ${v.busy?"disabled":""}>${A.won.again}</button>`}
    <div class="row">
      <button class="btn ghost-light grow" data-act="newcrew" ${v.busy?"disabled":""}>${A.won.newCrew}</button>
      <button class="btn ghost-light grow" data-act="home">${A.won.home}</button>
    </div>
  </main>`}var Tt=(n,e,t="")=>`<span class="mini ${t}"><b>${n}</b><i>${e}</i></span>`,Z=A.tour,[vl,wl,Il]=Z.names,bt=[{title:Z.goalTitle,body:Z.goalBody,art:()=>`<div class="tour-art">${Je("logo",190)}</div>`},{title:Z.secretTitle,body:Z.secretBody,art:()=>`<div class="scene">${Tt("?",vl,"back")}${Tt("?",wl,"back d1")}${Tt("?",Il,"back d2")}</div>`},{title:Z.flipTitle,body:Z.flipBody,art:()=>`<div class="scene flip">${Tt(Z.flipWords[0],vl)}${Tt(Z.flipWords[1],wl,"d1")}${Tt(Z.flipWords[2],Il,"d2")}</div>`},{title:Z.middleTitle,body:Z.middleBody,art:()=>`<div class="scene bridge"><span class="bridge-row"><span class="pill-word">${Z.flipWords[0]}</span><span class="plus">+</span><span class="pill-word">${Z.flipWords[1]}</span></span><span class="arrow">\u2193</span><span class="pill-word hot">${Z.middleGuess}</span></div>`},{title:Z.forgeTitle,body:Z.forgeBody,art:()=>`<div class="scene forged">${Je("swing",80,"forge-hammer")}${Tt(Z.forgeWord,vl,"win")}${Tt(Z.forgeWord,wl,"win d1")}${Tt(Z.forgeWord,Il,"win d2")}</div>`},{title:Z.matchTitle,body:"",art:()=>`<ul class="rules">${Z.matchRules.map(([n,e,t])=>`
      <li class="${n}"><span class="mark">${n==="ok"?Sl:"\u2715"}</span><span><b>${e}</b> ${t}</span></li>`).join("")}
    </ul>`},{title:Z.toolsTitle,body:"",art:()=>`<ul class="rules tools">${Z.tools.map(([n,e,t])=>`
      <li><span class="mark">${n==="list"?wm:n}</span><span><b>${e}</b> ${t}</span></li>`).join("")}
    </ul>`}];function jI(){let n=v.tour,e=bt.length-1;return`
  <div class="sheet-backdrop tour" data-act="tour-skip">
    <div class="sheet howto" role="dialog" aria-modal="true" aria-labelledby="tour-title" data-stop>
      <div class="howto-head">
        <span id="tour-title" class="h-sheet">${Z.title}</span>
        <button class="icon-btn quiet" data-act="tour-skip" aria-label="${A.a11y.closeHowTo}">\u2715</button>
      </div>
      <div class="howto-track" tabindex="0" aria-roledescription="carousel">
        ${bt.map((t,r)=>`
        <section class="howto-card${r===n?" on":""}" aria-roledescription="slide" aria-label="${A.a11y.slide(r+1,bt.length,t.title)}">
          ${t.art()}
          <span class="eyebrow">${Z.count(r+1,bt.length)}</span>
          <h2 class="howto-title">${t.title}</h2>
          ${t.body?`<p class="muted tour-body">${t.body}</p>`:""}
        </section>`).join("")}
      </div>
      <div class="dots" aria-hidden="true">${bt.map((t,r)=>`<span class="${r===n?"on":""}"></span>`).join("")}</div>
      <div class="row howto-nav">
        <button class="btn ghost" data-act="tour-skip" ${n===e?"hidden":""}>${Z.skip}</button>
        <button class="btn primary grow" data-act="tour-next">${n===e?Z.done:Z.next}</button>
      </div>
    </div>
  </div>`}function bl(){let n=fe.querySelector(".howto-track");if(!n)return;n.scrollLeft=v.tour*n.clientWidth;let e=()=>{let t=Math.round(n.scrollLeft/n.clientWidth);if(t===v.tour||t<0||t>=bt.length)return;v.tour=t;let r=t===bt.length-1;fe.querySelectorAll(".tour .dots span").forEach((s,a)=>s.classList.toggle("on",a===t)),fe.querySelectorAll(".howto-card").forEach((s,a)=>s.classList.toggle("on",a===t));let i=fe.querySelector("[data-act=tour-next]");i.textContent=r?Z.done:Z.next,fe.querySelector(".howto-nav .btn.ghost").hidden=r};n.addEventListener("scroll",()=>{clearTimeout(bl.t),bl.t=setTimeout(e,60)},{passive:!0})}function Al(n){let e=fe.querySelector(".howto-track");if(!e){v.tour=n,j();return}e.scrollTo({left:n*e.clientWidth,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}function GI(){let n=ue.get("games",[]);return`
  <div class="sheet-backdrop" data-act="closegames">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="games-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="games-title" class="h-sheet">${A.games.title}</h2>
        <button class="icon-btn soft" data-act="closegames" aria-label="${A.a11y.close}">${Ii}</button>
      </div>
      ${n.length?n.map(({code:e})=>{let t=v.summaries[e];return`
        <div class="game-row">
          <button class="game-open" data-act="${t?.gone?"forget":"open"}" data-code="${$(e)}">
            <span class="game-with">${$(t?t.with_:A.games.loading)}</span>
            <span class="game-status ${t?.tone||""}">${$(t?t.status:e)}</span>
          </button>
          <button class="icon-btn soft" data-act="forget" data-code="${$(e)}" aria-label="${A.a11y.forgetGame($(e))}">${Ii}</button>
        </div>`}).join(""):`<p class="muted">${A.games.none}</p>`}
    </div>
  </div>`}function zI(){let n=ue.get("games",[]),e=A.settings,t=(r,i,s="",a="")=>`
        <button class="set-row" data-act="${r}" ${a}>
          <span class="set-text"><span class="set-label">${i}</span>${s?`<span class="set-sub">${s}</span>`:""}</span>${_l}
        </button>`;return`
  <div class="sheet-backdrop" data-act="closesettings">
    <div class="sheet settings" role="dialog" aria-modal="true" aria-labelledby="settings-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="settings-title" class="h-sheet">${e.title}</h2>
        <button class="icon-btn soft" data-act="closesettings" aria-label="${A.a11y.close}">${Ii}</button>
      </div>

      <form class="set-group" data-form="setname">
        <label for="set-name" class="label">${e.yourName}</label>
        <div class="row">
          <input id="set-name" name="setname" class="input grow" autocomplete="nickname" maxlength="40" value="${$(v.name)}" placeholder="${A.home.namePlaceholder}">
          <button class="btn outline">${e.save}</button>
        </div>
        <span class="set-sub">${e.nameNote}</span>
      </form>

      <div class="set-group">
        <button class="set-row" data-act="mute" role="switch" aria-checked="${!mn()}">
          <span class="set-text"><span class="set-label">${e.sound}</span><span class="set-sub">${e.soundSub}</span></span>
          <span class="switch ${mn()?"":"on"}" aria-hidden="true"><i></i></span>
        </button>
        ${t("settings-games",e.pastGames,n.length?e.pastCount(n.length):e.noneYet)}
        ${t("settings-tour",e.howTo,e.howToSub)}
      </div>

      <div class="set-group">
        <a class="set-row" href="privacy.html"><span class="set-text"><span class="set-label">${e.privacy}</span></span>${_l}</a>
        <a class="set-row" href="terms.html"><span class="set-text"><span class="set-label">${e.terms}</span></span>${_l}</a>
        <div class="set-row disabled" aria-disabled="true"><span class="set-text"><span class="set-label">${e.restore}</span><span class="set-sub">${e.restoreSoon}</span></span></div>
      </div>

      <p class="fine maker">${e.contact}<br>${e.footer}</p>
    </div>
  </div>`}function WI(n){return`
  <div class="sheet-backdrop" data-act="closeused">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="used-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="used-title" class="h-sheet">${A.used.title}</h2>
        <button class="icon-btn soft" data-act="closeused" aria-label="${A.a11y.close}">${Ii}</button>
      </div>
      <p class="muted">${A.used.explain}</p>
      ${n.history.length?n.history.map(e=>`
        <div class="stack tight">
          <span class="eyebrow">${A.used.round(e.round)}</span>
          <div class="chips">${e.words.filter((t,r,i)=>i.findIndex(s=>Oe(s.word)===Oe(t.word))===r).map(t=>`<span class="chip static">${$(t.word)}</span>`).join("")}</div>
        </div>`).join(""):`<p class="muted">${A.used.none}</p>`}
    </div>
  </div>`}function KI(){if(v.authError)return`<main class="screen center"><p class="error">${$(v.authError)}</p></main>`;if(!v.uid)return mm();if(!v.code)return VI();if(v.gameMissing)return`<main class="screen center"><header class="bar top-left">${To}</header>${Je("logo",150)}<p class="notice">${A.missing($(v.code))}</p><button class="btn outline" data-act="home">${A.goToStart}</button></main>`;let n=v.game;if(!n)return mm(A.findingGame);if(!n.players[v.uid]&&n.removed?.includes(v.uid))return`<main class="screen center"><header class="bar top-left">${To}</header>${Je("hammer",120)}<p class="notice">${A.removedFrom($(n.code))}</p><button class="btn outline" data-act="home">${A.goToStart}</button></main>`;if(!n.players[v.uid])return LI(n);if(n.status==="lobby")return MI(n);if(n.status==="won")return qI(n);let e=n.history[n.history.length-1],t=ue.get(`seen.${n.code}`,0);return e&&e.round>t?$I(n,e):FI(n)}function j(){let n=document.activeElement,e={};fe.querySelectorAll("input").forEach(p=>{e[p.id]=p.value});let t=n&&n.tagName==="INPUT"?n.id:null,r=t?n.selectionStart:null,i=v.game,s=!!fe.querySelector(".sheet-backdrop:not(.tour)"),a=!!fe.querySelector(".tour"),c=fe.querySelector(".toast")?.textContent;fe.innerHTML=KI()+(v.showUsed&&i?WI(i):"")+(v.showGames&&!v.code?GI():"")+(v.showSettings&&!v.code?zI():"")+(v.tour!==null?jI():"")+(v.toast?`<div class="toast" role="status">${$(v.toast)}</div>`:"");let l=fe.querySelector("main"),d=l?l.className+"|"+(l.querySelector("h1")?.textContent||""):"";if(d===j.lastKey?l.classList.add("no-anim"):l&&HI(l,i),j.lastKey=d,s&&fe.querySelector(".sheet-backdrop")?.classList.add("no-anim"),a&&fe.querySelector(".tour")?.classList.add("no-anim"),bl(),c&&c===v.toast&&fe.querySelector(".toast")?.classList.add("no-anim"),fe.querySelectorAll("input").forEach(p=>{e[p.id]!==void 0&&p.id!=="name"&&(p.value=e[p.id]),p.id==="name"&&e.name!==void 0&&(p.value=e.name)}),t){let p=document.getElementById(t);if(p){p.focus();try{p.setSelectionRange(r,r)}catch{}}}}function HI(n,e){if(n.classList.contains("reveal-screen"))om(1.4),n.querySelector(".matched")&&setTimeout(am,1700);else if(n.classList.contains("win")){um(),cm();try{navigator.vibrate?.([80,60,160])}catch{}}}fe.addEventListener("input",n=>{if(n.target.id==="name"&&(v.name=n.target.value,ue.set("name",v.name)),n.target.id==="code"&&(n.target.value=n.target.value.toUpperCase().replace(/[^A-Z]/g,"")),v.error){v.error="";let e=fe.querySelector(".error");e&&e.remove()}});fe.addEventListener("submit",n=>{n.preventDefault();let e=n.target.dataset.form,t=new FormData(n.target);if(e==="create"&&Rl(),e==="join"&&fm(t.get("code")),e==="joinlink"&&fm(v.code),e==="word"&&wI(t.get("word")),e==="setname"){let r=ir(t.get("setname")||"");if(!r){Ke(A.toasts.nameFirst);return}v.name=r,ue.set("name",r);let i=document.getElementById("name");i&&(i.value=r),Ke(A.toasts.nameSaved),j()}});fe.addEventListener("click",async n=>{let e=n.target.closest("[data-act]");if(!e||e.dataset.act==="closeused"&&n.target.closest("[data-stop]")&&!n.target.closest("button"))return;let t=e.dataset.act;if(t==="home"&&(Em(),v.moving&&bm()),t==="open"&&(v.showGames=!1,ar(e.dataset.code)),t==="start"&&vI(),t==="nudge"&&EI(e.dataset.uid),t==="again"&&bI(),t==="vote"&&TI(),t==="sharegame"&&RI(),t==="games"&&(v.showGames=!0,j(),bo()),t==="settings"&&(v.showSettings=!0,j()),t==="closesettings"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(v.showSettings=!1,j()),t==="settings-games"&&(v.showSettings=!1,v.showGames=!0,j(),bo()),t==="settings-tour"&&(v.showSettings=!1,v.tour=0,j()),t==="closegames"&&!(n.target.closest("[data-stop]")&&!n.target.closest("button"))&&(v.showGames=!1,j()),t==="forget"&&CI(e.dataset.code),t==="remove"&&DI(e.dataset.uid),t==="react"&&NI(Number(e.dataset.round),e.dataset.uid,e.dataset.emoji),t==="daily"&&Rl({daily:!0}),t==="newcrew"&&PI(),t==="mute"&&(im(!mn()),j()),t==="starter"){let r=v.game?.used||[],i=tm.filter(a=>!hl(a,r)),s=document.getElementById("word");s&&i.length&&(s.value=i[Math.floor(Math.random()*i.length)],s.focus())}if(t==="tour"&&(v.tour=0,j()),t==="tour-next"&&(v.tour<bt.length-1?Al(v.tour+1):(v.tour=null,ue.set("toured",!0),j())),t==="tour-skip"&&!(n.target.closest("[data-stop]")&&!n.target.closest("button"))&&(v.tour=null,ue.set("toured",!0),j()),t==="yes"&&pm(!0),t==="no"&&pm(!1),t==="used"&&(v.showUsed=!0,j()),t==="closeused"&&(v.showUsed=!1,j()),t==="seen"&&(ue.set(`seen.${v.game.code}`,Number(e.dataset.round)),j()),t==="share"){let r=dI(v.game.code),i=A.share.invite(v.game.code);try{navigator.share?await navigator.share({title:A.appName,text:i,url:r}):(await navigator.clipboard.writeText(r),Ke(A.toasts.inviteCopied))}catch{}}});document.addEventListener("pointerdown",sm,{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&v.showUsed&&(v.showUsed=!1,j()),n.key==="Escape"&&v.showGames&&(v.showGames=!1,j()),n.key==="Escape"&&v.showSettings&&(v.showSettings=!1,j()),v.tour!==null&&n.key==="ArrowRight"&&v.tour<bt.length-1&&Al(v.tour+1),v.tour!==null&&n.key==="ArrowLeft"&&v.tour>0&&Al(v.tour-1),n.key==="Escape"&&v.tour!==null&&(v.tour=null,ue.set("toured",!0),j())});async function bm(){if(!Ch||!v.uid||!await Nh())return;v.moving=!0;let n=[];for(let{code:t}of ue.get("games",[]))try{let r=(await qt(ee(t))).data();r?.players?.[v.uid]&&r.status!=="won"&&n.push(t)}catch{}if(v.code?n.includes(v.code):n.length>0){j();return}location.replace(xh(v.code))}j();Qa(ym,n=>{n&&(v.uid=n.uid,v.code&&!gn?ar(v.code):(j(),bo()),bm())});Ha(ym).catch(n=>{console.error(n),v.authError=A.errors.connect,j()});"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
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
