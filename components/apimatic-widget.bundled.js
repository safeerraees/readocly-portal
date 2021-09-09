/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new Map;class e{constructor(t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let s=i.get(this.cssText);return t&&void 0===s&&(i.set(this.cssText,s=new CSSStyleSheet),s.replaceSync(this.cssText)),s}toString(){return this.cssText}}const o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new e("string"==typeof t?t:t+"",s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n,l;const r={toAttribute(t,s){switch(s){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},a=(t,s)=>s!==t&&(s==s||t==t),h={attribute:!0,type:String,converter:r,reflect:!1,hasChanged:a};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var s;null!==(s=this.l)&&void 0!==s||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((s,i)=>{const e=this._$Eh(i,s);void 0!==e&&(this._$Eu.set(e,i),t.push(e))})),t}static createProperty(t,s=h){if(s.state&&(s.attribute=!1),this.finalize(),this.elementProperties.set(t,s),!s.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,i,s);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){return{get(){return this[s]},set(e){const o=this[t];this[s]=e,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of s)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(o(t))}else void 0!==t&&s.push(o(t));return s}static _$Eh(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var s,i;(null!==(s=this._$Em)&&void 0!==s?s:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var s;null===(s=this._$Em)||void 0===s||s.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,s)=>{this.hasOwnProperty(s)&&(this._$Et.set(s,this[s]),delete this[s])}))}createRenderRoot(){var s;const i=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{t?s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style");i.textContent=t.cssText,s.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var s;return null===(s=t.hostConnected)||void 0===s?void 0:s.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var s;return null===(s=t.hostDisconnected)||void 0===s?void 0:s.call(t)}))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$Eg(t,s,i=h){var e,o;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const l=(null!==(o=null===(e=i.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:r.toAttribute)(s,i.type);this._$Ei=t,null==l?this.removeAttribute(n):this.setAttribute(n,l),this._$Ei=null}}_$AK(t,s){var i,e,o;const n=this.constructor,l=n._$Eu.get(t);if(void 0!==l&&this._$Ei!==l){const t=n.getPropertyOptions(l),a=t.converter,h=null!==(o=null!==(e=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==e?e:"function"==typeof a?a:null)&&void 0!==o?o:r.fromAttribute;this._$Ei=l,this[l]=h(s,t.type),this._$Ei=null}}requestUpdate(t,s,i){let e=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],s)?(this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):e=!1),!this.isUpdatePending&&e&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,s)=>this[s]=t)),this._$Et=void 0);let s=!1;const i=this._$AL;try{s=this.shouldUpdate(i),s?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var s;return null===(s=t.hostUpdate)||void 0===s?void 0:s.call(t)})),this.update(i)):this._$ET()}catch(t){throw s=!1,this._$ET(),t}s&&this._$AE(i)}willUpdate(t){}_$AE(t){var s;null===(s=this._$Em)||void 0===s||s.forEach((t=>{var s;return null===(s=t.hostUpdated)||void 0===s?void 0:s.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,s)=>this._$Eg(s,this[s],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var d,v;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null===(n=globalThis.reactiveElementPlatformSupport)||void 0===n||n.call(globalThis,{ReactiveElement:c}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.0.0-rc.4");const u=globalThis.trustedTypes,f=u?u.createPolicy("lit-html",{createHTML:t=>t}):void 0,p=`lit$${(Math.random()+"").slice(9)}$`,g="?"+p,w=`<${g}>`,m=document,y=(t="")=>m.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,x=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,T=/"/g,A=/^(?:script|style|textarea)$/i,C=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),k=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),L=new WeakMap,U=m.createTreeWalker(m,129,null,!1),j=(t,s)=>{const i=t.length-1,e=[];let o,n=2===s?"<svg>":"",l=S;for(let s=0;s<i;s++){const i=t[s];let r,a,h=-1,c=0;for(;c<i.length&&(l.lastIndex=c,a=l.exec(i),null!==a);)c=l.lastIndex,l===S?"!--"===a[1]?l=Z:void 0!==a[1]?l=x:void 0!==a[2]?(A.test(a[2])&&(o=RegExp("</"+a[2],"g")),l=_):void 0!==a[3]&&(l=_):l===_?">"===a[0]?(l=null!=o?o:S,h=-1):void 0===a[1]?h=-2:(h=l.lastIndex-a[2].length,r=a[1],l=void 0===a[3]?_:'"'===a[3]?T:M):l===T||l===M?l=_:l===Z||l===x?l=S:(l=_,o=void 0);const d=l===_&&t[s+1].startsWith("/>")?" ":"";n+=l===S?i+w:h>=0?(e.push(r),i.slice(0,h)+"$lit$"+i.slice(h)+p+d):i+p+(-2===h?(e.push(void 0),s):d)}const r=n+(t[i]||"<?>")+(2===s?"</svg>":"");return[void 0!==f?f.createHTML(r):r,e]};class H{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let o=0,n=0;const l=t.length-1,r=this.parts,[a,h]=j(t,s);if(this.el=H.createElement(a,i),U.currentNode=this.el.content,2===s){const t=this.el.content,s=t.firstChild;s.remove(),t.append(...s.childNodes)}for(;null!==(e=U.nextNode())&&r.length<l;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const s of e.getAttributeNames())if(s.endsWith("$lit$")||s.startsWith(p)){const i=h[n++];if(t.push(s),void 0!==i){const t=e.getAttribute(i.toLowerCase()+"$lit$").split(p),s=/([.?@])?(.*)/.exec(i);r.push({type:1,index:o,name:s[2],strings:t,ctor:"."===s[1]?R:"?"===s[1]?V:"@"===s[1]?q:O})}else r.push({type:6,index:o})}for(const s of t)e.removeAttribute(s)}if(A.test(e.tagName)){const t=e.textContent.split(p),s=t.length-1;if(s>0){e.textContent=u?u.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],y()),U.nextNode(),r.push({type:2,index:++o});e.append(t[s],y())}}}else if(8===e.nodeType)if(e.data===g)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(p,t+1));)r.push({type:7,index:o}),t+=p.length-1}o++}}static createElement(t,s){const i=m.createElement("template");return i.innerHTML=t,i}}function E(t,s,i=t,e){var o,n,l,r;if(s===k)return s;let a=void 0!==e?null===(o=i._$Cl)||void 0===o?void 0:o[e]:i._$Cu;const h=b(s)?void 0:s._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,e)),void 0!==e?(null!==(l=(r=i)._$Cl)&&void 0!==l?l:r._$Cl=[])[e]=a:i._$Cu=a),void 0!==a&&(s=E(t,a._$AS(t,s.values),a,e)),s}class P{constructor(t,s){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var s;const{el:{content:i},parts:e}=this._$AD,o=(null!==(s=null==t?void 0:t.creationScope)&&void 0!==s?s:m).importNode(i,!0);U.currentNode=o;let n=U.nextNode(),l=0,r=0,a=e[0];for(;void 0!==a;){if(l===a.index){let s;2===a.type?s=new N(n,n.nextSibling,this,t):1===a.type?s=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(s=new D(n,this,t)),this.v.push(s),a=e[++r]}l!==(null==a?void 0:a.index)&&(n=U.nextNode(),l++)}return o}m(t){let s=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class N{constructor(t,s,i,e){var o;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,s;return null!==(s=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==s?s:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=E(this,t,s),b(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==k&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var s;return $(t)||"function"==typeof(null===(s=t)||void 0===s?void 0:s[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,s=this._$AB){return this._$AA.parentNode.insertBefore(t,s)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==B&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(m.createTextNode(t)),this._$AH=t}T(t){var s;const{values:i,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=H.createElement(e.h,this.options)),e);if((null===(s=this._$AH)||void 0===s?void 0:s._$AD)===o)this._$AH.m(i);else{const t=new P(o,this),s=t.p(this.options);t.m(i),this.S(s),this._$AH=t}}_$AC(t){let s=L.get(t.strings);return void 0===s&&L.set(t.strings,s=new H(t)),s}M(t){$(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const o of t)e===s.length?s.push(i=new N(this.A(y()),this.A(y()),this,this.options)):i=s[e],i._$AI(o),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,s);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var s;void 0===this._$AM&&(this._$Cg=t,null===(s=this._$AP)||void 0===s||s.call(this,t))}}class O{constructor(t,s,i,e,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,s=this,i,e){const o=this.strings;let n=!1;if(void 0===o)t=E(this,t,s,0),n=!b(t)||t!==this._$AH&&t!==k,n&&(this._$AH=t);else{const e=t;let l,r;for(t=o[0],l=0;l<o.length-1;l++)r=E(this,e[i+l],s,l),r===k&&(r=this._$AH[l]),n||(n=!b(r)||r!==this._$AH[l]),r===B?t=B:t!==B&&(t+=(null!=r?r:"")+o[l+1]),this._$AH[l]=r}n&&!e&&this.k(t)}k(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends O{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===B?void 0:t}}class V extends O{constructor(){super(...arguments),this.type=4}k(t){t&&t!==B?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class q extends O{constructor(t,s,i,e,o){super(t,s,i,e,o),this.type=5}_$AI(t,s=this){var i;if((t=null!==(i=E(this,t,s,0))&&void 0!==i?i:B)===k)return;const e=this._$AH,o=t===B&&e!==B||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==B&&(e===B||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(s=this.options)||void 0===s?void 0:s.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class D{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,z,I;null===(d=globalThis.litHtmlPlatformSupport)||void 0===d||d.call(globalThis,H,N),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.0.0-rc.5");class J extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,s;const i=super.createRenderRoot();return null!==(t=(s=this.renderOptions).renderBefore)&&void 0!==t||(s.renderBefore=i.firstChild),i}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,s,i)=>{var e,o;const n=null!==(e=null==i?void 0:i.renderBefore)&&void 0!==e?e:s;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(s.insertBefore(y(),t),t,void 0,null!=i?i:{})}return l._$AI(t),l})(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return k}}J.finalized=!0,J._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:J}),null===(z=globalThis.litElementPlatformSupport)||void 0===z||z.call(globalThis,{LitElement:J}),(null!==(I=globalThis.litElementVersions)&&void 0!==I?I:globalThis.litElementVersions=[]).push("3.0.0-rc.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K=(t,s)=>"method"===s.kind&&s.descriptor&&!("value"in s.descriptor)?{...s,finisher(i){i.createProperty(s.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:s.key,initializer(){"function"==typeof s.initializer&&(this[s.key]=s.initializer.call(this))},finisher(i){i.createProperty(s.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(t){return(s,i)=>void 0!==i?((t,s,i)=>{s.constructor.createProperty(i,t)})(t,s,i):K(t,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const W=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F=(t=>(...s)=>({_$litDirective$:t,values:s}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}{constructor(t){var s;if(super(t),t.type!==W||"class"!==t.name||(null===(s=t.strings)||void 0===s?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(t,[s]){var i,e;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(i=this.et)||void 0===i?void 0:i.has(t))&&this.st.add(t);return this.render(s)}const o=t.element.classList;this.st.forEach((t=>{t in s||(o.remove(t),this.st.delete(t))}));for(const t in s){const i=!!s[t];i===this.st.has(t)||(null===(e=this.et)||void 0===e?void 0:e.has(t))||(i?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return k}});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X=function(t,s,i,e){for(var o,n=arguments.length,l=n<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(s,i,l):o(s,i))||l);return n>3&&l&&Object.defineProperty(s,i,l),l};let Y=class extends J{constructor(){super(...arguments),this.apiKey="aNevcjuZmnpNoxByvnLpxOQfIyDDZQy0UswqjiWxeD3d6VdOelI6t7whM02BEZGG",this.java=!1,this.dotNet=!1,this.php=!1,this.ts=!1,this.ruby=!1,this.python=!1,this.saveData=function(){const t=document.createElement("a");return document.body.appendChild(t),function(s,i){const e=window.URL.createObjectURL(s);t.href=e,t.download=i,t.click(),window.URL.revokeObjectURL(e)}}()}render(){return C`
      ${this.dotNet?C`<div
          id="cs_net_standard_lib"
          @click=${this._onClick}
          class=${F({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25.2"
            >
              <defs>
                <style>
                  .aDotNet {
                    fill: #00a4ef;
                  }
                </style>
              </defs>
              <path
                class="aDotNet"
                d="M0,2.293l6.6-.9,0,6.364L.006,7.8Zm6.595,6.2.005,6.37L.005,13.955V8.449Zm.8-7.215L16.142,0V7.677l-8.748.069Zm8.75,7.275,0,7.643L7.394,14.96,7.382,8.537Z"
              />
            </svg>
          </div>`:""}
      ${this.java?C`<div
          id="java_eclipse_jre_lib"
          @click=${this._onClick}
          class=${F({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 22 25"
            >
              <defs>
                <style>
                  .aJava {
                    fill: #e4463f;
                  }
                </style>
              </defs>
              <path
                class="aJava"
                d="M15.96,15.706a.262.262,0,0,0,.06-.076c3.01-1.493,1.618-2.927.647-2.734a2.368,2.368,0,0,0-.344.089.542.542,0,0,1,.257-.19C18.5,12.15,19.979,14.7,15.96,15.706Zm-1.754-4.539c.9,1.213-1.063,2.181-1.063,2.181a1.092,1.092,0,0,0,.2-1.616c-2.623-2.885,2.869-4.194,2.869-4.2C12.716,9.474,13.362,10.035,14.206,11.167ZM12.625,8.448c-2.6,1.964-.594,3.083,0,4.363-1.52-1.31-2.636-2.463-1.888-3.536,1.1-1.575,4.142-2.339,3.47-4.868C14.206,4.408,15.872,6,12.625,8.448Zm-1.835,4.391s-2.915.662-1.032.9a22.9,22.9,0,0,0,3.857-.04c1.207-.1,2.418-.3,2.418-.3a5.272,5.272,0,0,0-.733.375c-2.961.743-8.68.4-7.034-.363A5.739,5.739,0,0,1,10.789,12.839Zm.142,3.87a9.6,9.6,0,0,0,3.321-.134,5.969,5.969,0,0,0,.884.411c-3.141,1.285-7.108-.075-4.642-.733C10.495,16.253,9.882,16.593,10.931,16.708Zm-.457-1.542a13.574,13.574,0,0,0,4.286-.2,1.914,1.914,0,0,0,.66.384c-3.8,1.06-8.026.084-5.309-.778C10.111,14.576,9.424,15.062,10.474,15.166ZM9.255,17.451a2.3,2.3,0,0,0-.554.059c-.337.07-1.411.4-.838.637,1.592.661,7.324.5,9.137-.021.953-.276.5-.633.5-.633,1.661.716-3.609,2.153-10.011,1.162C5.141,18.291,8.618,17.023,9.255,17.451Zm6.873,1.709c2.186-.392,2.388-.887,2.388-.887-.105,1.305-4.542,1.58-7.43,1.4a5.049,5.049,0,0,1-2.268-.409A24.846,24.846,0,0,0,16.128,19.161Z"
                transform="translate(-6.684 -4.408)"
              />
            </svg>
          </div>`:""}
      ${this.php?C`<div
          id="php_generic_lib_v2"
          @click=${this._onClick}
          class=${F({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 16"
            >
              <defs>
                <style>
                  .aPHP {
                    fill: #8f9ed7;
                  }
                </style>
              </defs>
              <path
                class="aPHP"
                d="M12.679,9.989c-4.582,0-8.3,1.861-8.3,4.157S8.1,18.3,12.679,18.3s8.3-1.861,8.3-4.157S17.261,9.989,12.679,9.989ZM10.52,14.955a1.636,1.636,0,0,1-.66.337,3.306,3.306,0,0,1-.925.062H8.086L7.851,16.7H6.859l.885-4.565H9.65a1.6,1.6,0,0,1,1.255.461,1.4,1.4,0,0,1,.237,1.253,1.974,1.974,0,0,1-.623,1.109Zm2.894.4.391-1.936a.57.57,0,0,0-.049-.477.686.686,0,0,0-.494-.138h-.786l-.507,2.551h-.984l.885-4.43h.984l-.236,1.208H13.5a1.715,1.715,0,0,1,1.142.3.847.847,0,0,1,.188.876l-.411,2.046Zm5.467-1.5a1.946,1.946,0,0,1-.623,1.1,1.629,1.629,0,0,1-.66.337,3.308,3.308,0,0,1-.925.062h-.85L15.589,16.7H14.6l.885-4.565h1.907a1.6,1.6,0,0,1,1.255.461A1.419,1.419,0,0,1,18.881,13.853ZM17.013,12.8h-.679l-.37,1.879h.6a1.487,1.487,0,0,0,.893-.188,1.136,1.136,0,0,0,.4-.727.866.866,0,0,0-.09-.733,1.012,1.012,0,0,0-.754-.231Zm-7.738,0H8.6l-.37,1.879h.6a1.487,1.487,0,0,0,.893-.188,1.132,1.132,0,0,0,.4-.727.866.866,0,0,0-.09-.733,1.012,1.012,0,0,0-.753-.231Z"
                transform="translate(-4.382 -9.989)"
              />
            </svg>
          </div>`:""}
      ${this.python?C`<div
          id="python_generic_lib"
          @click=${this._onClick}
          class=${F({icon:!0})}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 25 25"
          >
            <defs>
              <style>
                .aPython {
                  fill: #3b8fc6;
                }
              </style>
            </defs>
            <path
              class="aPython"
              d="M12.644,14.291H16.42A1.9,1.9,0,0,0,18.3,12.368V8.809a2.092,2.092,0,0,0-1.885-1.943,11.977,11.977,0,0,0-1.967-.153,10.747,10.747,0,0,0-1.788.153c-1.6.279-1.871.864-1.871,1.943v1.385h3.755v.512H9.335a2.355,2.355,0,0,0-2.362,1.9,6.842,6.842,0,0,0,0,3.78c.269,1.107.91,1.877,2.009,1.877H10.27V16.589a2.379,2.379,0,0,1,2.374-2.3Zm-.237-5.007a.712.712,0,1,1,.709-.71A.71.71,0,0,1,12.406,9.284ZM22.091,12.6c-.272-1.081-.79-1.9-1.891-1.9H18.817v1.661a2.387,2.387,0,0,1-2.4,2.307H12.644a1.943,1.943,0,0,0-1.855,1.962V20.2c0,1.013.874,1.609,1.873,1.9a6.341,6.341,0,0,0,3.762,0c.952-.272,1.876-.821,1.876-1.9V18.771H14.543v-.512H20.2c1.1,0,1.509-.739,1.891-1.877a6.29,6.29,0,0,0,0-3.78Zm-5.433,7.119a.712.712,0,1,1-.709.71.71.71,0,0,1,.709-.71Z"
              transform="translate(-6.707 -6.714)"
            />
          </svg>
        </div>`:""}
      ${this.ruby?C`<div
          id="ruby_generic_lib"
          @click=${this._onClick}
          class=${F({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25"
            >
              <defs>
                <style>
                  .aRuby {
                    fill: #f6213a;
                  }
                </style>
              </defs>
              <path
                class="aRuby"
                d="M10.664,20.19l9.8,1.32-3.315-5.444L10.664,20.19ZM21.393,10l-.868,1.287q-1.49,2.211-2.978,4.422c-.055.082-.127.147-.049.273q1.439,2.343,2.864,4.694a6.289,6.289,0,0,0,.5.731q.29-5.7.578-11.4L21.393,10ZM8.305,14.868a.237.237,0,0,0,.209.041c.92-.447,1.845-.882,2.745-1.364a4.315,4.315,0,0,0,.772-.668q1.255-1.135,2.508-2.274a.6.6,0,0,0,.142-.151c.3-.578.595-1.16.9-1.758-.363-.135-.709-.267-1.058-.387a.257.257,0,0,0-.173.044c-.808.445-1.633.867-2.416,1.353a7.994,7.994,0,0,0-1.057.913c-.559.5-1.118,1.008-1.669,1.52a2.812,2.812,0,0,0-.393.455c-.376.541-.742,1.089-1.124,1.654.214.218.408.426.615.62Zm3.361-.74-1.382,5.76,6.494-4.128-5.112-1.632Zm9.165-4.111-5.52.91,1.873,4.494,3.647-5.4Zm-9.088,3.721,5.01,1.6L14.9,10.89l-3.157,2.847ZM8.375,15.979c-.595,1.4-1.169,2.757-1.753,4.135l3.34-.1ZM10,19.058l.041-.009c.4-1.645.808-3.278,1.217-4.987L8.58,15.436c.457,1.171.944,2.407,1.421,3.623ZM20.158,9.75q-.8-.209-1.6-.417c-.767-.2-1.535-.4-2.3-.6-.1-.025-.165-.041-.221.072-.271.548-.55,1.091-.826,1.636a.4.4,0,0,0-.013.081l4.96-.741V9.75ZM17.064,8.5,21.41,9.691l-.718-2.019-3.622.793Zm-6.695,12a12.827,12.827,0,0,0-1.636,0c-.449.008-.9.025-1.346.038a.18.18,0,0,0-.139.06l11.124,1.015.007-.049-3.566-.48c-1.481-.2-2.96-.419-4.445-.588ZM6.694,18.852q.717-1.641,1.433-3.281a.2.2,0,0,0-.049-.272c-.2-.189-.387-.392-.606-.617L6.6,18.943l.032.015A.7.7,0,0,0,6.694,18.852ZM16.112,8.215c.805-.2,1.623-.365,2.436-.544.052-.011.1-.028.156-.043L18.7,7.589,15.2,8.052a1.32,1.32,0,0,0,.908.163Z"
                transform="translate(-6.597 -7.589)"
              />
            </svg>
          </div>`:""}
      ${this.ts?C`<div
          id="ts_generic_lib"
          @click=${this._onClick}
          class=${F({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 25 25"
            >
              <defs>
                <style>
                  .aTS
                  }
                  .cTS {
                    clip-path: url(#c);
                  }
                  .dTS {
                    fill: url(#d);
                  }
                  .eTS {
                    clip-path: url(#e);
                  }
                  .fTS {
                    fill: url(#f);
                  }
                  .gTS {
                    fill: #fff;
                  }
                </style>
                <clipPath id="a">
                  <path
                    d="M200.967,226.026l-6.236,3.6a.752.752,0,0,0-.377.652v7.2a.752.752,0,0,0,.377.652l6.237,3.6a.755.755,0,0,0,.753,0l6.236-3.6a.754.754,0,0,0,.376-.652v-7.2a.752.752,0,0,0-.377-.652l-6.235-3.6a.758.758,0,0,0-.755,0"
                    transform="translate(-194.354 -225.925)"
                  />
                </clipPath>
                <linearGradient
                  id="b"
                  x1="-0.847"
                  y1="-1.034"
                  x2="-0.838"
                  y2="-1.034"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0.3" stop-color="#3e863d" />
                  <stop offset="0.5" stop-color="#55934f" />
                  <stop offset="0.8" stop-color="#5aad45" />
                </linearGradient>
                <clipPath id="c">
                  <path
                    d="M195.4,238.062a.755.755,0,0,0,.222.195l5.35,3.09.891.512a.756.756,0,0,0,.434.1.772.772,0,0,0,.148-.027l6.577-12.043a.747.747,0,0,0-.175-.139l-4.083-2.358-2.158-1.242a.793.793,0,0,0-.2-.078Zm0,0"
                    transform="translate(-195.398 -226.069)"
                  />
                </clipPath>
                <linearGradient
                  id="d"
                  x1="-0.742"
                  y1="-0.932"
                  x2="-0.737"
                  y2="-0.932"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0.57" stop-color="#3e863d" />
                  <stop offset="0.72" stop-color="#619857" />
                  <stop offset="1" stop-color="#76ac64" />
                </linearGradient>
                <clipPath id="e">
                  <path
                    d="M203.541,225.937a.759.759,0,0,0-.3.1l-6.219,3.589,6.706,12.214a.747.747,0,0,0,.268-.092l6.236-3.6a.756.756,0,0,0,.364-.515l-6.836-11.678a.783.783,0,0,0-.153-.015l-.062,0"
                    transform="translate(-197.021 -225.934)"
                  />
                </clipPath>
                <linearGradient
                  id="f"
                  x1="-2.148"
                  y1="-2.103"
                  x2="-2.138"
                  y2="-2.103"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0.16" stop-color="#6bbf47" />
                  <stop offset="0.38" stop-color="#79b461" />
                  <stop offset="0.47" stop-color="#75ac64" />
                  <stop offset="0.7" stop-color="#659e5a" />
                  <stop offset="0.9" stop-color="#3e863d" />
                </linearGradient>
              </defs>
              <g transform="translate(-2.011 -1.044)">
                <g transform="translate(-5.147 -4.067)">
                  <g class="aTS" transform="translate(7.158 5.111)">
                    <path
                      class="bTS"
                      d="M178.361,197.217,160.788,188.6l-9.01,18.381L169.35,215.6Zm0,0"
                      transform="translate(-158.08 -194.128)"
                    />
                  </g>
                  <g class="cTS" transform="translate(7.313 5.132)">
                    <path
                      class="d"
                      d="M144.07,194.225l12.408,16.794,16.41-12.124L160.479,182.1Zm0,0"
                      transform="translate(-151.668 -188.609)"
                    />
                  </g>
                  <g class="eTS" transform="translate(7.553 5.112)">
                    <path
                      class="fTS"
                      d="M197.02,225.934v15.9h13.571v-15.9Zm0,0"
                      transform="translate(-197.02 -225.934)"
                    />
                  </g>
                </g>
                <g transform="translate(-3.939 -7.63)">
                  <path
                    class="gTS"
                    d="M175.308,173.254a.875.875,0,0,1-.436-.117l-1.388-.822c-.207-.116-.106-.157-.038-.181a2.8,2.8,0,0,0,.628-.286.105.105,0,0,1,.1.007l1.066.633a.141.141,0,0,0,.129,0l4.158-2.4a.131.131,0,0,0,.063-.112v-4.8a.134.134,0,0,0-.064-.115l-4.156-2.4a.128.128,0,0,0-.128,0l-4.156,2.4a.133.133,0,0,0-.066.113v4.8a.128.128,0,0,0,.065.111l1.139.658c.618.309,1-.055,1-.422v-4.736a.119.119,0,0,1,.121-.12h.527a.119.119,0,0,1,.12.12v4.738a1.153,1.153,0,0,1-1.231,1.3,1.782,1.782,0,0,1-.959-.26l-1.091-.629a.879.879,0,0,1-.436-.759v-4.8a.874.874,0,0,1,.436-.758l4.162-2.4a.912.912,0,0,1,.874,0l4.157,2.4a.877.877,0,0,1,.436.758v4.8a.88.88,0,0,1-.436.758l-4.157,2.4a.873.873,0,0,1-.438.117"
                    transform="translate(-163.115 -150.95)"
                  />
                  <path
                    class="gTS"
                    d="M212.043,188.99c-1.819,0-2.2-.835-2.2-1.536a.12.12,0,0,1,.12-.12h.537a.12.12,0,0,1,.119.1c.081.547.323.823,1.423.823.876,0,1.249-.2,1.249-.663,0-.267-.106-.466-1.468-.6-1.139-.112-1.842-.363-1.842-1.274,0-.839.708-1.339,1.893-1.339,1.331,0,1.991.462,2.074,1.455a.121.121,0,0,1-.032.093.124.124,0,0,1-.089.038h-.54a.119.119,0,0,1-.117-.094c-.13-.576-.444-.76-1.3-.76-.957,0-1.068.333-1.068.583,0,.3.131.391,1.422.562s1.885.409,1.885,1.307-.756,1.425-2.073,1.425m5.065-5.089h.139a.121.121,0,0,0,.136-.127c0-.123-.084-.123-.131-.123H217.1Zm-.17-.393h.309c.106,0,.314,0,.314.237a.207.207,0,0,1-.17.221c.124.008.132.09.149.2a.876.876,0,0,0,.047.237h-.19c-.005-.042-.034-.271-.034-.283-.012-.051-.03-.076-.094-.076h-.157v.36h-.174Zm-.372.448a.672.672,0,1,0,.669-.67.673.673,0,0,0-.669.67m1.474,0a.8.8,0,1,1-.8-.8.8.8,0,0,1,.8.8"
                    transform="translate(-198.566 -169.992)"
                  />
                </g>
              </g>
            </svg>
          </div>`:""}
    `}async _onClick(t){try{const s=t.currentTarget.id;if(console.log(s),console.log(t.currentTarget),!s)return;const i=`https://www.apimatic.io/api/api-entities/${this.apiKey}/portal-artifacts/sdks/generated-file?template=${s}`,e=await fetch(i),o=e.headers.get("content-disposition"),n=null===o?s:o.split("=")[1];this.saveData(await e.blob(),n)}catch(t){console.log("error",t)}}};Y.styles=((t,...i)=>{const o=1===t.length?t[0]:i.reduce(((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1]),t[0]);return new e(o,s)})`
    .icon {
      cursor: pointer;
      display: inline-block !important;
    }
  `,X([Q({type:String})],Y.prototype,"apiKey",void 0),X([Q({type:Boolean})],Y.prototype,"java",void 0),X([Q({type:Boolean})],Y.prototype,"dotNet",void 0),X([Q({type:Boolean})],Y.prototype,"php",void 0),X([Q({type:Boolean})],Y.prototype,"ts",void 0),X([Q({type:Boolean})],Y.prototype,"ruby",void 0),X([Q({type:Boolean})],Y.prototype,"python",void 0),Y=X([(t=>s=>"function"==typeof s?((t,s)=>(window.customElements.define(t,s),s))(t,s):((t,s)=>{const{kind:i,elements:e}=s;return{kind:i,elements:e,finisher(s){window.customElements.define(t,s)}}})(t,s))("apimatic-widget")],Y);export{Y as APIMaticWidget};
