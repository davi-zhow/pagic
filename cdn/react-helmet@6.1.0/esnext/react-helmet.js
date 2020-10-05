/* esm.sh - esbuild bundle(react-helmet@6.1.0) esnext production */
import react from "/react@16.13.1/esnext/react.js";var __peerModules = {"react": react};var require = name => {if (name in __peerModules) {return __peerModules[name];}throw new Error("[esm.sh] Could not resolve \"" + name + "\"");};if (typeof global === 'undefined') var global = window;var k=Object.defineProperty,ge=Object.prototype.hasOwnProperty,C=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports),ve=t=>k(t,"__esModule",{value:!0}),Ee=(t,e)=>{if(ve(t),typeof e=="object"||typeof e=="function")for(let r in e)!ge.call(t,r)&&r!=="default"&&k(t,r,{get:()=>e[r],enumerable:!0});return t},L=t=>t&&t.__esModule?t:Ee(k({},"default",{value:t,enumerable:!0}),t);var $=C((st,Y)=>{"use strict";var Ae="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Y.exports=Ae});var z=C((ct,G)=>{"use strict";var be=$();function W(){}function V(){}V.resetWarningCache=W;G.exports=function(){function t(n,o,i,u,a,s){if(s===be)return;var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}t.isRequired=t;function e(){return t}var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:V,resetWarningCache:W};return r.PropTypes=r,r}});var Q=C((ft,X)=>{if(!1)var ut,lt;else X.exports=z()()});var ee=C((pt,J)=>{"use strict";function Se(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Z=require("react"),we=Se(Z);function K(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ce(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var Oe=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function Pe(t,e,r){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof r!="undefined"&&typeof r!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function n(o){return o.displayName||o.name||"Component"}return function(i){if(typeof i!="function")throw new Error("Expected WrappedComponent to be a React component.");var u=[],a;function s(){a=t(u.map(function(l){return l.props})),c.canUseDOM?e(a):r&&(a=r(a))}var c=function(l){Ce(p,l);function p(){return l.apply(this,arguments)||this}p.peek=function(){return a},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var g=a;return a=void 0,u=[],g};var d=p.prototype;return d.UNSAFE_componentWillMount=function(){u.push(this),s()},d.componentDidUpdate=function(){s()},d.componentWillUnmount=function(){var g=u.indexOf(this);u.splice(g,1),s()},d.render=function(){return we.createElement(i,this.props)},p}(Z.PureComponent);return K(c,"displayName","SideEffect("+n(i)+")"),K(c,"canUseDOM",Oe),c}}J.exports=Pe});var re=C((dt,te)=>{var Re=typeof Element!="undefined",_e=typeof Map=="function",Ie=typeof Set=="function",je=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function M(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var r,n,o;if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(!M(t[n],e[n]))return!1;return!0}var i;if(_e&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(n=i.next()).done;)if(!e.has(n.value[0]))return!1;for(i=t.entries();!(n=i.next()).done;)if(!M(n.value[1],e.get(n.value[0])))return!1;return!0}if(Ie&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(n=i.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(je&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(o=Object.keys(t),r=o.length,r!==Object.keys(e).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[n]))return!1;if(Re&&t instanceof Element)return!1;for(n=r;n--!==0;){if((o[n]==="_owner"||o[n]==="__v"||o[n]==="__o")&&t.$$typeof)continue;if(!M(t[o[n]],e[o[n]]))return!1}return!0}return t!==t&&e!==e}te.exports=function(e,r){try{return M(e,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}});var ie=C((mt,ne)=>{"use strict";var oe=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;function Me(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function xe(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map(function(i){return e[i]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),!(Object.keys(Object.assign({},o)).join("")!=="abcdefghijklmnopqrst")}catch(i){return!1}}ne.exports=xe()?Object.assign:function(t,e){for(var r,n=Me(t),o,i=1;i<arguments.length;i++){r=Object(arguments[i]);for(var u in r)Ne.call(r,u)&&(n[u]=r[u]);if(oe){o=oe(r);for(var a=0;a<o.length;a++)Le.call(r,o[a])&&(n[o[a]]=r[o[a]])}}return n}});const h=L(Q()),ae=L(ee()),se=L(re()),ce=L(ie());import _ from"/react@16.13.1/esnext/react.js";var w={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},f={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},yt=Object.keys(f).map(function(t){return f[t]}),T={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},He=Object.keys(x).reduce(function(t,e){return t[x[e]]=e,t},{}),ke=[f.NOSCRIPT,f.SCRIPT,f.STYLE],v="data-react-helmet",De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fe=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},qe=function(){function t(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Be=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},ue=function(t,e){var r={};for(var n in t){if(e.indexOf(n)>=0)continue;if(!Object.prototype.hasOwnProperty.call(t,n))continue;r[n]=t[n]}return r},Ue=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},D=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ye=function(e){var r=O(e,f.TITLE),n=O(e,I.TITLE_TEMPLATE);if(n&&r)return n.replace(/%s/g,function(){return Array.isArray(r)?r.join(""):r});var o=O(e,I.DEFAULT_TITLE);return r||o||void 0},$e=function(e){return O(e,I.ON_CHANGE_CLIENT_STATE)||function(){}},F=function(e,r){return r.filter(function(n){return typeof n[e]!="undefined"}).map(function(n){return n[e]}).reduce(function(n,o){return y({},n,o)},{})},Ge=function(e,r){return r.filter(function(n){return typeof n[f.BASE]!="undefined"}).map(function(n){return n[f.BASE]}).reverse().reduce(function(n,o){if(!n.length)for(var i=Object.keys(o),u=0;u<i.length;u++){var a=i[u],s=a.toLowerCase();if(e.indexOf(s)!==-1&&o[s])return n.concat(o)}return n},[])},j=function(e,r,n){var o={};return n.filter(function(i){return Array.isArray(i[e])?!0:(typeof i[e]!="undefined"&&We("Helmet: "+e+' should be of type "Array". Instead found type "'+De(i[e])+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,u){var a={};u.filter(function(d){for(var m=void 0,g=Object.keys(d),E=0;E<g.length;E++){var A=g[E],b=A.toLowerCase();r.indexOf(b)!==-1&&!(m===T.REL&&d[m].toLowerCase()==="canonical")&&!(b===T.REL&&d[b].toLowerCase()==="stylesheet")&&(m=b),r.indexOf(A)!==-1&&(A===T.INNER_HTML||A===T.CSS_TEXT||A===T.ITEM_PROP)&&(m=A)}if(!m||!d[m])return!1;var R=d[m].toLowerCase();return o[m]||(o[m]={}),a[m]||(a[m]={}),o[m][R]?!1:(a[m][R]=!0,!0)}).reverse().forEach(function(d){return i.push(d)});for(var s=Object.keys(a),c=0;c<s.length;c++){var l=s[c],p=ce.default({},o[l],a[l]);o[l]=p}return i},[]).reverse()},O=function(e,r){for(var n=e.length-1;n>=0;n--){var o=e[n];if(o.hasOwnProperty(r))return o[r]}return null},Ve=function(e){return{baseTag:Ge([T.HREF,T.TARGET],e),bodyAttributes:F(w.BODY,e),defer:O(e,I.DEFER),encode:O(e,I.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:F(w.HTML,e),linkTags:j(f.LINK,[T.REL,T.HREF],e),metaTags:j(f.META,[T.NAME,T.CHARSET,T.HTTPEQUIV,T.PROPERTY,T.ITEM_PROP],e),noscriptTags:j(f.NOSCRIPT,[T.INNER_HTML],e),onChangeClientState:$e(e),scriptTags:j(f.SCRIPT,[T.SRC,T.INNER_HTML],e),styleTags:j(f.STYLE,[T.CSS_TEXT],e),title:Ye(e),titleAttributes:F(w.TITLE,e)}},q=function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){q(e)},0)}}(),le=function(e){return clearTimeout(e)},ze=typeof window!="undefined"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||q:global.requestAnimationFrame||q,Xe=typeof window!="undefined"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||le:global.cancelAnimationFrame||le,We=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},N=null,Qe=function(e){N&&Xe(N),e.defer?N=ze(function(){fe(e,function(){N=null})}):(fe(e),N=null)},fe=function(e,r){var n=e.baseTag,o=e.bodyAttributes,i=e.htmlAttributes,u=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,p=e.styleTags,d=e.title,m=e.titleAttributes;B(f.BODY,o),B(f.HTML,i),Je(d,m);var g={baseTag:P(f.BASE,n),linkTags:P(f.LINK,u),metaTags:P(f.META,a),noscriptTags:P(f.NOSCRIPT,s),scriptTags:P(f.SCRIPT,l),styleTags:P(f.STYLE,p)},E={},A={};Object.keys(g).forEach(function(b){var R=g[b],U=R.newTags,ye=R.oldTags;U.length&&(E[b]=U),ye.length&&(A[b]=g[b].oldTags)}),r&&r(),c(e,E,A)},pe=function(e){return Array.isArray(e)?e.join(""):e},Je=function(e,r){typeof e!="undefined"&&document.title!==e&&(document.title=pe(e)),B(f.TITLE,r)},B=function(e,r){var n=document.getElementsByTagName(e)[0];if(!n)return;for(var o=n.getAttribute(v),i=o?o.split(","):[],u=[].concat(i),a=Object.keys(r),s=0;s<a.length;s++){var c=a[s],l=r[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),i.indexOf(c)===-1&&i.push(c);var p=u.indexOf(c);p!==-1&&u.splice(p,1)}for(var d=u.length-1;d>=0;d--)n.removeAttribute(u[d]);i.length===u.length?n.removeAttribute(v):n.getAttribute(v)!==a.join(",")&&n.setAttribute(v,a.join(","))},P=function(e,r){var n=document.head||document.querySelector(f.HEAD),o=n.querySelectorAll(e+"["+v+"]"),i=Array.prototype.slice.call(o),u=[],a=void 0;return r&&r.length&&r.forEach(function(s){var c=document.createElement(e);for(var l in s)if(s.hasOwnProperty(l))if(l===T.INNER_HTML)c.innerHTML=s.innerHTML;else if(l===T.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=s.cssText:c.appendChild(document.createTextNode(s.cssText));else{var p=typeof s[l]=="undefined"?"":s[l];c.setAttribute(l,p)}c.setAttribute(v,"true"),i.some(function(d,m){return a=m,c.isEqualNode(d)})?i.splice(a,1):u.push(c)}),i.forEach(function(s){return s.parentNode.removeChild(s)}),u.forEach(function(s){return n.appendChild(s)}),{oldTags:i,newTags:u}},de=function(e){return Object.keys(e).reduce(function(r,n){var o=typeof e[n]!="undefined"?n+'="'+e[n]+'"':""+n;return r?r+" "+o:o},"")},Ze=function(e,r,n,o){var i=de(n),u=pe(r);return i?"<"+e+" "+v+'="true" '+i+">"+D(u,o)+"</"+e+">":"<"+e+" "+v+'="true">'+D(u,o)+"</"+e+">"},Ke=function(e,r,n){return r.reduce(function(o,i){var u=Object.keys(i).filter(function(c){return!(c===T.INNER_HTML||c===T.CSS_TEXT)}).reduce(function(c,l){var p=typeof i[l]=="undefined"?l:l+'="'+D(i[l],n)+'"';return c?c+" "+p:p},""),a=i.innerHTML||i.cssText||"",s=ke.indexOf(e)===-1;return o+"<"+e+" "+v+'="true" '+u+(s?"/>":">"+a+"</"+e+">")},"")},me=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,o){return n[x[o]||o]=e[o],n},r)},et=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,o){return n[He[o]||o]=e[o],n},r)},tt=function(e,r,n){var o,i=(o={key:r},o[v]=!0,o),u=me(n,i);return[_.createElement(f.TITLE,u,r)]},rt=function(e,r){return r.map(function(n,o){var i,u=(i={key:o},i[v]=!0,i);return Object.keys(n).forEach(function(a){var s=x[a]||a;if(s===T.INNER_HTML||s===T.CSS_TEXT){var c=n.innerHTML||n.cssText;u.dangerouslySetInnerHTML={__html:c}}else u[s]=n[a]}),_.createElement(e,u)})},S=function(e,r,n){switch(e){case f.TITLE:return{toComponent:function(){return tt(e,r.title,r.titleAttributes,n)},toString:function(){return Ze(e,r.title,r.titleAttributes,n)}};case w.BODY:case w.HTML:return{toComponent:function(){return me(r)},toString:function(){return de(r)}};default:return{toComponent:function(){return rt(e,r)},toString:function(){return Ke(e,r,n)}}}},he=function(e){var r=e.baseTag,n=e.bodyAttributes,o=e.encode,i=e.htmlAttributes,u=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,p=e.title,d=p===void 0?"":p,m=e.titleAttributes;return{base:S(f.BASE,r,o),bodyAttributes:S(w.BODY,n,o),htmlAttributes:S(w.HTML,i,o),link:S(f.LINK,u,o),meta:S(f.META,a,o),noscript:S(f.NOSCRIPT,s,o),script:S(f.SCRIPT,c,o),style:S(f.STYLE,l,o),title:S(f.TITLE,{title:d,titleAttributes:m},o)}},nt=function(e){var r,n;return n=r=function(o){Be(i,o);function i(){return Fe(this,i),Ue(this,o.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(a){return!se.default(this.props,a)},i.prototype.mapNestedChildrenToProps=function(a,s){if(!s)return null;switch(a.type){case f.SCRIPT:case f.NOSCRIPT:return{innerHTML:s};case f.STYLE:return{cssText:s}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(a){var s,c=a.child,l=a.arrayTypeChildren,p=a.newChildProps,d=a.nestedChildren;return y({},l,(s={},s[c.type]=[].concat(l[c.type]||[],[y({},p,this.mapNestedChildrenToProps(c,d))]),s))},i.prototype.mapObjectTypeChildren=function(a){var s,c,l=a.child,p=a.newProps,d=a.newChildProps,m=a.nestedChildren;switch(l.type){case f.TITLE:return y({},p,(s={},s[l.type]=m,s.titleAttributes=y({},d),s));case f.BODY:return y({},p,{bodyAttributes:y({},d)});case f.HTML:return y({},p,{htmlAttributes:y({},d)})}return y({},p,(c={},c[l.type]=y({},d),c))},i.prototype.mapArrayTypeChildrenToProps=function(a,s){var c=y({},s);return Object.keys(a).forEach(function(l){var p;c=y({},c,(p={},p[l]=a[l],p))}),c},i.prototype.warnOnInvalidChildren=function(a,s){return!0},i.prototype.mapChildrenToProps=function(a,s){var c=this,l={};return _.Children.forEach(a,function(p){if(!p||!p.props)return;var d=p.props,m=d.children,g=ue(d,["children"]),E=et(g);c.warnOnInvalidChildren(p,m);switch(p.type){case f.LINK:case f.META:case f.NOSCRIPT:case f.SCRIPT:case f.STYLE:l=c.flattenArrayTypeChildren({child:p,arrayTypeChildren:l,newChildProps:E,nestedChildren:m});break;default:s=c.mapObjectTypeChildren({child:p,newProps:s,newChildProps:E,nestedChildren:m});break}}),s=this.mapArrayTypeChildrenToProps(l,s),s},i.prototype.render=function(){var a=this.props,s=a.children,c=ue(a,["children"]),l=y({},c);return s&&(l=this.mapChildrenToProps(s,l)),_.createElement(e,l)},qe(i,null,[{key:"canUseDOM",set:function(a){e.canUseDOM=a}}]),i}(_.Component),r.propTypes={base:h.default.object,bodyAttributes:h.default.object,children:h.default.oneOfType([h.default.arrayOf(h.default.node),h.default.node]),defaultTitle:h.default.string,defer:h.default.bool,encodeSpecialCharacters:h.default.bool,htmlAttributes:h.default.object,link:h.default.arrayOf(h.default.object),meta:h.default.arrayOf(h.default.object),noscript:h.default.arrayOf(h.default.object),onChangeClientState:h.default.func,script:h.default.arrayOf(h.default.object),style:h.default.arrayOf(h.default.object),title:h.default.string,titleAttributes:h.default.object,titleTemplate:h.default.string},r.defaultProps={defer:!0,encodeSpecialCharacters:!0},r.peek=e.peek,r.rewind=function(){var o=e.rewind();return o||(o=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},n},ot=function(){return null},it=ae.default(Ve,Qe,he)(ot),H=nt(it);H.renderStatic=H.rewind;var Te=H;export{H as Helmet,Te as default};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/