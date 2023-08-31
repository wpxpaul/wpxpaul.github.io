const ne="modulepreload",_e=function(e){return"/"+e},W={},re=function(t,n,o){if(!n||n.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=_e(r),r in W)return;W[r]=!0;const i=r.endsWith(".css"),f=i?'[rel="stylesheet"]':"";if(!!o)for(let _=l.length-1;_>=0;_--){const d=l[_];if(d.href===r&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${f}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":ne,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((_,d)=>{a.addEventListener("load",_),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var D,h,z,C,I,T={},G=[],oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t){for(var n in t)e[n]=t[n];return e}function q(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n){var o,l,r,i={};for(r in t)r=="key"?o=t[r]:r=="ref"?l=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?D.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)i[r]===void 0&&(i[r]=e.defaultProps[r]);return N(e,i,o,l,null)}function N(e,t,n,o,l){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++z};return l==null&&h.vnode!=null&&h.vnode(r),r}function M(e){return e.children}function L(e,t){this.props=e,this.context=t}function w(e,t){if(t==null)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?w(e):null}function J(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return J(e)}}function $(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!A.__r++||I!==h.debounceRendering)&&((I=h.debounceRendering)||setTimeout)(A)}function A(){for(var e;A.__r=C.length;)e=C.sort(function(t,n){return t.__v.__b-n.__v.__b}),C=[],e.some(function(t){var n,o,l,r,i,f;t.__d&&(i=(r=(n=t).__v).__e,(f=n.__P)&&(o=[],(l=k({},r)).__v=r.__v+1,H(f,r,l,n.__n,f.ownerSVGElement!==void 0,r.__h!=null?[i]:null,o,i??w(r),r.__h),Y(o,r),r.__e!=i&&J(r)))})}function K(e,t,n,o,l,r,i,f,p,a){var _,d,c,s,u,S,v,y=o&&o.__k||G,g=y.length;for(n.__k=[],_=0;_<t.length;_++)if((s=n.__k[_]=(s=t[_])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?N(null,s,null,null,s):Array.isArray(s)?N(M,{children:s},null,null,null):s.__b>0?N(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(c=y[_])===null||c&&s.key==c.key&&s.type===c.type)y[_]=void 0;else for(d=0;d<g;d++){if((c=y[d])&&s.key==c.key&&s.type===c.type){y[d]=void 0;break}c=null}H(e,s,c=c||T,l,r,i,f,p,a),u=s.__e,(d=s.ref)&&c.ref!=d&&(v||(v=[]),c.ref&&v.push(c.ref,null,s),v.push(d,s.__c||u,s)),u!=null?(S==null&&(S=u),typeof s.type=="function"&&s.__k===c.__k?s.__d=p=Q(s,p,e):p=X(e,s,c,y,u,p),typeof n.type=="function"&&(n.__d=p)):p&&c.__e==p&&p.parentNode!=e&&(p=w(c))}for(n.__e=S,_=g;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=w(o,_+1)),ee(y[_],y[_]));if(v)for(_=0;_<v.length;_++)Z(v[_],v[++_],v[++_])}function Q(e,t,n){for(var o,l=e.__k,r=0;l&&r<l.length;r++)(o=l[r])&&(o.__=e,t=typeof o.type=="function"?Q(o,t,n):X(n,o,o,l,o.__e,t));return t}function X(e,t,n,o,l,r){var i,f,p;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||l!=r||l.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(l),i=null;else{for(f=r,p=0;(f=f.nextSibling)&&p<o.length;p+=2)if(f==l)break e;e.insertBefore(l,r),i=r}return i!==void 0?i:l.nextSibling}function le(e,t,n,o,l){var r;for(r in n)r==="children"||r==="key"||r in t||U(e,r,null,n[r],o);for(r in t)l&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||U(e,r,t[r],n[r],o)}function B(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||oe.test(t)?n:n+"px"}function U(e,t,n,o,l){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||B(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||B(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?j:F,r):e.removeEventListener(t,r?j:F,r);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function F(e){this.l[e.type+!1](h.event?h.event(e):e)}function j(e){this.l[e.type+!0](h.event?h.event(e):e)}function H(e,t,n,o,l,r,i,f,p){var a,_,d,c,s,u,S,v,y,g,x,O,E,m=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,f=t.__e=n.__e,t.__h=null,r=[f]),(a=h.__b)&&a(t);try{e:if(typeof m=="function"){if(v=t.props,y=(a=m.contextType)&&o[a.__c],g=a?y?y.props.value:a.__:o,n.__c?S=(_=t.__c=n.__c).__=_.__E:("prototype"in m&&m.prototype.render?t.__c=_=new m(v,g):(t.__c=_=new L(v,g),_.constructor=m,_.render=ie),y&&y.sub(_),_.props=v,_.state||(_.state={}),_.context=g,_.__n=o,d=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),m.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=k({},_.__s)),k(_.__s,m.getDerivedStateFromProps(v,_.__s))),c=_.props,s=_.state,d)m.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,g),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,g)===!1||t.__v===n.__v){_.props=v,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(P){P&&(P.__=t)}),_.__h.length&&i.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,g),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,s,u)})}if(_.context=g,_.props=v,_.__v=t,_.__P=e,x=h.__r,O=0,"prototype"in m&&m.prototype.render)_.state=_.__s,_.__d=!1,x&&x(t),a=_.render(_.props,_.state,_.context);else do _.__d=!1,x&&x(t),a=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++O<25);_.state=_.__s,_.getChildContext!=null&&(o=k(k({},o),_.getChildContext())),d||_.getSnapshotBeforeUpdate==null||(u=_.getSnapshotBeforeUpdate(c,s)),E=a!=null&&a.type===M&&a.key==null?a.props.children:a,K(e,Array.isArray(E)?E:[E],t,n,o,l,r,i,f,p),_.base=t.__e,t.__h=null,_.__h.length&&i.push(_),S&&(_.__E=_.__=null),_.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=se(n.__e,t,n,o,l,r,i,p);(a=h.diffed)&&a(t)}catch(P){t.__v=null,(p||r!=null)&&(t.__e=f,t.__h=!!p,r[r.indexOf(f)]=null),h.__e(P,t,n)}}function Y(e,t){h.__c&&h.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){h.__e(o,n.__v)}})}function se(e,t,n,o,l,r,i,f){var p,a,_,d=n.props,c=t.props,s=t.type,u=0;if(s==="svg"&&(l=!0),r!=null){for(;u<r.length;u++)if((p=r[u])&&"setAttribute"in p==!!s&&(s?p.localName===s:p.nodeType===3)){e=p,r[u]=null;break}}if(e==null){if(s===null)return document.createTextNode(c);e=l?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,c.is&&c),r=null,f=!1}if(s===null)d===c||f&&e.data===c||(e.data=c);else{if(r=r&&D.call(e.childNodes),a=(d=n.props||T).dangerouslySetInnerHTML,_=c.dangerouslySetInnerHTML,!f){if(r!=null)for(d={},u=0;u<e.attributes.length;u++)d[e.attributes[u].name]=e.attributes[u].value;(_||a)&&(_&&(a&&_.__html==a.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(le(e,c,d,l,f),_)t.__k=[];else if(u=t.props.children,K(e,Array.isArray(u)?u:[u],t,n,o,l&&s!=="foreignObject",r,i,r?r[0]:n.__k&&w(n,0),f),r!=null)for(u=r.length;u--;)r[u]!=null&&q(r[u]);f||("value"in c&&(u=c.value)!==void 0&&(u!==e.value||s==="progress"&&!u||s==="option"&&u!==d.value)&&U(e,"value",u,d.value,!1),"checked"in c&&(u=c.checked)!==void 0&&u!==e.checked&&U(e,"checked",u,d.checked,!1))}return e}function Z(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){h.__e(o,n)}}function ee(e,t,n){var o,l;if(h.unmount&&h.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Z(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){h.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&ee(o[l],t,typeof e.type!="function");n||e.__e==null||q(e.__e),e.__e=e.__d=void 0}function ie(e,t,n){return this.constructor(e,n)}function ae(e,t,n){var o,l,r;h.__&&h.__(e,t),l=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],H(t,e=(!o&&n||t).__k=b(M,null,[e]),l||T,T,t.ownerSVGElement!==void 0,!o&&n?[n]:l?null:t.firstChild?D.call(t.childNodes):null,r,!o&&n?n:l?l.__e:t.firstChild,o),Y(r,e)}D=G.slice,h={__e:function(e,t,n,o){for(var l,r,i;t=t.__;)if((l=t.__c)&&!l.__)try{if((r=l.constructor)&&r.getDerivedStateFromError!=null&&(l.setState(r.getDerivedStateFromError(e)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,o||{}),i=l.__d),i)return l.__E=l}catch(f){e=f}throw e}},z=0,L.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},n),this.props)),e&&k(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),$(this))},L.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),$(this))},L.prototype.render=M,C=[],A.__r=0;const te=({value:e,name:t})=>e?b("astro-slot",{name:t,dangerouslySetInnerHTML:{__html:e}}):null;te.shouldComponentUpdate=()=>!1;var V=te;const R=new Map;var ce=e=>async(t,n,{default:o,...l})=>{if(!e.hasAttribute("ssr"))return;for(const[f,p]of Object.entries(l))n[f]=b(V,{value:p,name:f});if(e.dataset.preactSignals){const{signal:f}=await re(()=>import("./signals.module.f64946ba.js"),[]);let p=JSON.parse(e.dataset.preactSignals);for(const[a,_]of Object.entries(p)){if(!R.has(_)){const d=f(n[a]);R.set(_,d)}n[a]=R.get(_)}}function i({children:f}){let p=Object.fromEntries(Array.from(e.attributes).map(a=>[a.name,a.value]));return b(e.localName,p,f)}ae(b(i,null,b(t,n,o!=null?b(V,{value:o}):o)),e.parentNode,e)};export{ce as c,L as d,h as l};