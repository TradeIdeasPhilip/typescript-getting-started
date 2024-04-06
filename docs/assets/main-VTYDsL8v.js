(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var E={},k={};Object.defineProperty(k,"__esModule",{value:!0});k.permutations=k.polarToRectangular=k.makeBoundedLinear=_t=k.makeLinear=k.sum=k.countMap=k.initializedArray=k.count=k.zip=k.FIGURE_SPACE=k.NON_BREAKING_SPACE=k.dateIsValid=k.MIN_DATE=k.MAX_DATE=k.makePromise=k.filterMap=k.pick=k.pickAny=k.csvStringToArray=k.parseTimeT=k.parseIntX=k.parseFloatX=k.getAttribute=k.followPath=k.parseXml=k.testXml=xt=k.sleep=St=k.assertClass=void 0;function jt(o,t,n="Assertion Failed."){const e=s=>{throw new Error(`${n}  Expected type:  ${t.name}.  Found type:  ${s}.`)};if(o===null)e("null");else if(typeof o!="object")e(typeof o);else if(!(o instanceof t))e(o.constructor.name);else return o;throw new Error("wtf")}var St=k.assertClass=jt;function qt(o){return new Promise(t=>setTimeout(t,o))}var xt=k.sleep=qt;function Et(o){const n=new DOMParser().parseFromString(o,"application/xml");for(const e of Array.from(n.querySelectorAll("parsererror")))if(e instanceof HTMLElement)return{error:e};return{parsed:n}}k.testXml=Et;function Xt(o){if(o!==void 0)return Et(o)?.parsed?.documentElement}k.parseXml=Xt;function Tt(o,...t){for(const n of t){if(o===void 0)return;if(typeof n=="number")o=o.children[n];else{const e=o.getElementsByTagName(n);if(e.length!=1)return;o=e[0]}}return o}k.followPath=Tt;function Vt(o,t,...n){if(t=Tt(t,...n),t!==void 0&&t.hasAttribute(o))return t.getAttribute(o)??void 0}k.getAttribute=Vt;function At(o){if(o==null)return;const t=parseFloat(o);if(isFinite(t))return t}k.parseFloatX=At;function Lt(o){const t=At(o);if(t!==void 0)return t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER||t!=Math.floor(t)?void 0:t}k.parseIntX=Lt;function Zt(o){if(typeof o=="string"&&(o=Lt(o)),o!=null&&!(o<=0))return new Date(o*1e3)}k.parseTimeT=Zt;const Qt=o=>{const t=/(,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^,\r\n]*))/gi,n=[[]];let e;for(;e=t.exec(o);)e[1].length&&e[1]!==","&&n.push([]),n[n.length-1].push(e[2]!==void 0?e[2].replace(/""/g,'"'):e[3]);return n};k.csvStringToArray=Qt;function Ut(o){const t=o.values().next();if(!t.done)return t.value}k.pickAny=Ut;function Kt(o){return o[Math.random()*o.length|0]}k.pick=Kt;function Jt(o,t){const n=[];return o.forEach((e,s)=>{const r=t(e,s);r!==void 0&&n.push(r)}),n}k.filterMap=Jt;function Yt(){let o,t;return{promise:new Promise((e,s)=>{o=e,t=s}),resolve:o,reject:t}}k.makePromise=Yt;k.MAX_DATE=new Date(864e13);k.MIN_DATE=new Date(-864e13);function te(o){return isFinite(o.getTime())}k.dateIsValid=te;k.NON_BREAKING_SPACE=" ";k.FIGURE_SPACE=" ";function*ee(...o){const t=o.map(n=>n[Symbol.iterator]());for(;;){const n=t.map(e=>e.next());if(n.some(({done:e})=>e))break;yield n.map(({value:e})=>e)}}k.zip=ee;function*ne(o=0,t=1/0,n=1){for(let e=o;e<t;e+=n)yield e}k.count=ne;function Ot(o,t){const n=[];for(let e=0;e<o;e++)n.push(t(e));return n}k.initializedArray=Ot;k.countMap=Ot;function se(o){return o.reduce((t,n)=>t+n,0)}k.sum=se;function oe(o,t,n,e){const s=(e-t)/(n-o);return function(r){return(r-o)*s+t}}var _t=k.makeLinear=oe;function re(o,t,n,e){n<o&&([o,t,n,e]=[n,e,o,t]);const s=(e-t)/(n-o);return function(r){return r<=o?t:r>=n?e:(r-o)*s+t}}k.makeBoundedLinear=re;function ae(o,t){return{x:Math.sin(t)*o,y:Math.cos(t)*o}}k.polarToRectangular=ae;function*It(o,t=[]){if(o.length==0)yield t;else for(let n=0;n<o.length;n++){const e=o[n],s=[...t,e],r=[...o.slice(0,n),...o.slice(n+1)];yield*It(r,s)}}k.permutations=It;Object.defineProperty(E,"__esModule",{value:!0});E.download=E.createElementFromHTML=E.getHashInfo=E.getAudioBalanceControl=E.getBlobFromCanvas=E.loadDateTimeLocal=lt=E.getById=void 0;const Ct=k;function ie(o,t){const n=document.getElementById(o);if(!n)throw new Error("Could not find element with id "+o+".  Expected type:  "+t.name);if(n instanceof t)return n;throw new Error("Element with id "+o+" has type "+n.constructor.name+".  Expected type:  "+t.name)}var lt=E.getById=ie;function he(o,t,n="milliseconds"){let e;switch(n){case"minutes":{e=t.getSeconds()*1e3+t.getMilliseconds();break}case"seconds":{e=t.getMilliseconds();break}case"milliseconds":{e=0;break}default:throw new Error("wtf")}o.valueAsNumber=+t-t.getTimezoneOffset()*6e4-e}E.loadDateTimeLocal=he;function ce(o){const{reject:t,resolve:n,promise:e}=(0,Ct.makePromise)();return o.toBlob(s=>{s?n(s):t(new Error("blob is null!"))}),e}E.getBlobFromCanvas=ce;function le(o){const t=new AudioContext,n=t.createMediaElementSource(o),e=new StereoPannerNode(t,{pan:0});return n.connect(e).connect(t.destination),s=>{e.pan.value=s}}E.getAudioBalanceControl=le;function ue(){const o=new Map;return/^#?(.*)$/.exec(location.hash.replace("+","%20"))[1].split("&").forEach(e=>{const s=e.split("=",2);if(s.length==2){const r=decodeURIComponent(s[0]),i=decodeURIComponent(s[1]);o.set(r,i)}}),o}E.getHashInfo=ue;function fe(o,t){var n=document.createElement("div");return n.innerHTML=o.trim(),(0,Ct.assertClass)(n.firstChild,t,"createElementFromHTML:")}E.createElementFromHTML=fe;function pe(o,t){var n=document.createElement("a");if(n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",o),document.createEvent){var e=document.createEvent("MouseEvents");e.initEvent("click",!0,!0),n.dispatchEvent(e)}else n.click()}E.download=pe;const de=["🌎","🌏","🌍"],ge=" TypeScript • Getting Started in 2024";(async()=>{for(;;)for(const o of de){await xt(901);const t=o+ge;document.title=t}})();function et(o,t,n){if(o&&o.length){const[e,s]=t,r=Math.PI/180*n,i=Math.cos(r),a=Math.sin(r);for(const h of o){const[l,c]=h;h[0]=(l-e)*i-(c-s)*a+e,h[1]=(l-e)*a+(c-s)*i+s}}}function me(o,t){return o[0]===t[0]&&o[1]===t[1]}function Me(o,t,n,e=1){const s=n,r=Math.max(t,.1),i=o[0]&&o[0][0]&&typeof o[0][0]=="number"?[o]:o,a=[0,0];if(s)for(const l of i)et(l,a,s);const h=function(l,c,d){const f=[];for(const m of l){const w=[...m];me(w[0],w[w.length-1])||w.push([w[0][0],w[0][1]]),w.length>2&&f.push(w)}const u=[];c=Math.max(c,.1);const p=[];for(const m of f)for(let w=0;w<m.length-1;w++){const S=m[w],P=m[w+1];if(S[1]!==P[1]){const v=Math.min(S[1],P[1]);p.push({ymin:v,ymax:Math.max(S[1],P[1]),x:v===S[1]?S[0]:P[0],islope:(P[0]-S[0])/(P[1]-S[1])})}}if(p.sort((m,w)=>m.ymin<w.ymin?-1:m.ymin>w.ymin?1:m.x<w.x?-1:m.x>w.x?1:m.ymax===w.ymax?0:(m.ymax-w.ymax)/Math.abs(m.ymax-w.ymax)),!p.length)return u;let g=[],M=p[0].ymin,y=0;for(;g.length||p.length;){if(p.length){let m=-1;for(let w=0;w<p.length&&!(p[w].ymin>M);w++)m=w;p.splice(0,m+1).forEach(w=>{g.push({s:M,edge:w})})}if(g=g.filter(m=>!(m.edge.ymax<=M)),g.sort((m,w)=>m.edge.x===w.edge.x?0:(m.edge.x-w.edge.x)/Math.abs(m.edge.x-w.edge.x)),(d!==1||y%c==0)&&g.length>1)for(let m=0;m<g.length;m+=2){const w=m+1;if(w>=g.length)break;const S=g[m].edge,P=g[w].edge;u.push([[Math.round(S.x),M],[Math.round(P.x),M]])}M+=d,g.forEach(m=>{m.edge.x=m.edge.x+d*m.edge.islope}),y++}return u}(i,r,e);if(s){for(const l of i)et(l,a,-s);(function(l,c,d){const f=[];l.forEach(u=>f.push(...u)),et(f,c,d)})(h,a,-s)}return h}function B(o,t){var n;const e=t.hachureAngle+90;let s=t.hachureGap;s<0&&(s=4*t.strokeWidth),s=Math.round(Math.max(s,.1));let r=1;return t.roughness>=1&&(((n=t.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(r=s),Me(o,s,e,r||1)}class ut{constructor(t){this.helper=t}fillPolygons(t,n){return this._fillPolygons(t,n)}_fillPolygons(t,n){const e=B(t,n);return{type:"fillSketch",ops:this.renderLines(e,n)}}renderLines(t,n){const e=[];for(const s of t)e.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],n));return e}}function tt(o){const t=o[0],n=o[1];return Math.sqrt(Math.pow(t[0]-n[0],2)+Math.pow(t[1]-n[1],2))}class ke extends ut{fillPolygons(t,n){let e=n.hachureGap;e<0&&(e=4*n.strokeWidth),e=Math.max(e,.1);const s=B(t,Object.assign({},n,{hachureGap:e})),r=Math.PI/180*n.hachureAngle,i=[],a=.5*e*Math.cos(r),h=.5*e*Math.sin(r);for(const[l,c]of s)tt([l,c])&&i.push([[l[0]-a,l[1]+h],[...c]],[[l[0]+a,l[1]-h],[...c]]);return{type:"fillSketch",ops:this.renderLines(i,n)}}}class ye extends ut{fillPolygons(t,n){const e=this._fillPolygons(t,n),s=Object.assign({},n,{hachureAngle:n.hachureAngle+90}),r=this._fillPolygons(t,s);return e.ops=e.ops.concat(r.ops),e}}class be{constructor(t){this.helper=t}fillPolygons(t,n){const e=B(t,n=Object.assign({},n,{hachureAngle:0}));return this.dotsOnLines(e,n)}dotsOnLines(t,n){const e=[];let s=n.hachureGap;s<0&&(s=4*n.strokeWidth),s=Math.max(s,.1);let r=n.fillWeight;r<0&&(r=n.strokeWidth/2);const i=s/4;for(const a of t){const h=tt(a),l=h/s,c=Math.ceil(l)-1,d=h-c*s,f=(a[0][0]+a[1][0])/2-s/4,u=Math.min(a[0][1],a[1][1]);for(let p=0;p<c;p++){const g=u+d+p*s,M=f-i+2*Math.random()*i,y=g-i+2*Math.random()*i,m=this.helper.ellipse(M,y,r,r,n);e.push(...m.ops)}}return{type:"fillSketch",ops:e}}}class we{constructor(t){this.helper=t}fillPolygons(t,n){const e=B(t,n);return{type:"fillSketch",ops:this.dashedLine(e,n)}}dashedLine(t,n){const e=n.dashOffset<0?n.hachureGap<0?4*n.strokeWidth:n.hachureGap:n.dashOffset,s=n.dashGap<0?n.hachureGap<0?4*n.strokeWidth:n.hachureGap:n.dashGap,r=[];return t.forEach(i=>{const a=tt(i),h=Math.floor(a/(e+s)),l=(a+s-h*(e+s))/2;let c=i[0],d=i[1];c[0]>d[0]&&(c=i[1],d=i[0]);const f=Math.atan((d[1]-c[1])/(d[0]-c[0]));for(let u=0;u<h;u++){const p=u*(e+s),g=p+e,M=[c[0]+p*Math.cos(f)+l*Math.cos(f),c[1]+p*Math.sin(f)+l*Math.sin(f)],y=[c[0]+g*Math.cos(f)+l*Math.cos(f),c[1]+g*Math.sin(f)+l*Math.sin(f)];r.push(...this.helper.doubleLineOps(M[0],M[1],y[0],y[1],n))}}),r}}class ve{constructor(t){this.helper=t}fillPolygons(t,n){const e=n.hachureGap<0?4*n.strokeWidth:n.hachureGap,s=n.zigzagOffset<0?e:n.zigzagOffset,r=B(t,n=Object.assign({},n,{hachureGap:e+s}));return{type:"fillSketch",ops:this.zigzagLines(r,s,n)}}zigzagLines(t,n,e){const s=[];return t.forEach(r=>{const i=tt(r),a=Math.round(i/(2*n));let h=r[0],l=r[1];h[0]>l[0]&&(h=r[1],l=r[0]);const c=Math.atan((l[1]-h[1])/(l[0]-h[0]));for(let d=0;d<a;d++){const f=2*d*n,u=2*(d+1)*n,p=Math.sqrt(2*Math.pow(n,2)),g=[h[0]+f*Math.cos(c),h[1]+f*Math.sin(c)],M=[h[0]+u*Math.cos(c),h[1]+u*Math.sin(c)],y=[g[0]+p*Math.cos(c+Math.PI/4),g[1]+p*Math.sin(c+Math.PI/4)];s.push(...this.helper.doubleLineOps(g[0],g[1],y[0],y[1],e),...this.helper.doubleLineOps(y[0],y[1],M[0],M[1],e))}}),s}}const T={};class Pe{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const Se=0,nt=1,gt=2,j={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function st(o,t){return o.type===t}function ft(o){const t=[],n=function(i){const a=new Array;for(;i!=="";)if(i.match(/^([ \t\r\n,]+)/))i=i.substr(RegExp.$1.length);else if(i.match(/^([aAcChHlLmMqQsStTvVzZ])/))a[a.length]={type:Se,text:RegExp.$1},i=i.substr(RegExp.$1.length);else{if(!i.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];a[a.length]={type:nt,text:`${parseFloat(RegExp.$1)}`},i=i.substr(RegExp.$1.length)}return a[a.length]={type:gt,text:""},a}(o);let e="BOD",s=0,r=n[s];for(;!st(r,gt);){let i=0;const a=[];if(e==="BOD"){if(r.text!=="M"&&r.text!=="m")return ft("M0,0"+o);s++,i=j[r.text],e=r.text}else st(r,nt)?i=j[e]:(s++,i=j[r.text],e=r.text);if(!(s+i<n.length))throw new Error("Path data ended short");for(let h=s;h<s+i;h++){const l=n[h];if(!st(l,nt))throw new Error("Param not a number: "+e+","+l.text);a[a.length]=+l.text}if(typeof j[e]!="number")throw new Error("Bad segment: "+e);{const h={key:e,data:a};t.push(h),s+=i,r=n[s],e==="M"&&(e="L"),e==="m"&&(e="l")}}return t}function Dt(o){let t=0,n=0,e=0,s=0;const r=[];for(const{key:i,data:a}of o)switch(i){case"M":r.push({key:"M",data:[...a]}),[t,n]=a,[e,s]=a;break;case"m":t+=a[0],n+=a[1],r.push({key:"M",data:[t,n]}),e=t,s=n;break;case"L":r.push({key:"L",data:[...a]}),[t,n]=a;break;case"l":t+=a[0],n+=a[1],r.push({key:"L",data:[t,n]});break;case"C":r.push({key:"C",data:[...a]}),t=a[4],n=a[5];break;case"c":{const h=a.map((l,c)=>c%2?l+n:l+t);r.push({key:"C",data:h}),t=h[4],n=h[5];break}case"Q":r.push({key:"Q",data:[...a]}),t=a[2],n=a[3];break;case"q":{const h=a.map((l,c)=>c%2?l+n:l+t);r.push({key:"Q",data:h}),t=h[2],n=h[3];break}case"A":r.push({key:"A",data:[...a]}),t=a[5],n=a[6];break;case"a":t+=a[5],n+=a[6],r.push({key:"A",data:[a[0],a[1],a[2],a[3],a[4],t,n]});break;case"H":r.push({key:"H",data:[...a]}),t=a[0];break;case"h":t+=a[0],r.push({key:"H",data:[t]});break;case"V":r.push({key:"V",data:[...a]}),n=a[0];break;case"v":n+=a[0],r.push({key:"V",data:[n]});break;case"S":r.push({key:"S",data:[...a]}),t=a[2],n=a[3];break;case"s":{const h=a.map((l,c)=>c%2?l+n:l+t);r.push({key:"S",data:h}),t=h[2],n=h[3];break}case"T":r.push({key:"T",data:[...a]}),t=a[0],n=a[1];break;case"t":t+=a[0],n+=a[1],r.push({key:"T",data:[t,n]});break;case"Z":case"z":r.push({key:"Z",data:[]}),t=e,n=s}return r}function zt(o){const t=[];let n="",e=0,s=0,r=0,i=0,a=0,h=0;for(const{key:l,data:c}of o){switch(l){case"M":t.push({key:"M",data:[...c]}),[e,s]=c,[r,i]=c;break;case"C":t.push({key:"C",data:[...c]}),e=c[4],s=c[5],a=c[2],h=c[3];break;case"L":t.push({key:"L",data:[...c]}),[e,s]=c;break;case"H":e=c[0],t.push({key:"L",data:[e,s]});break;case"V":s=c[0],t.push({key:"L",data:[e,s]});break;case"S":{let d=0,f=0;n==="C"||n==="S"?(d=e+(e-a),f=s+(s-h)):(d=e,f=s),t.push({key:"C",data:[d,f,...c]}),a=c[0],h=c[1],e=c[2],s=c[3];break}case"T":{const[d,f]=c;let u=0,p=0;n==="Q"||n==="T"?(u=e+(e-a),p=s+(s-h)):(u=e,p=s);const g=e+2*(u-e)/3,M=s+2*(p-s)/3,y=d+2*(u-d)/3,m=f+2*(p-f)/3;t.push({key:"C",data:[g,M,y,m,d,f]}),a=u,h=p,e=d,s=f;break}case"Q":{const[d,f,u,p]=c,g=e+2*(d-e)/3,M=s+2*(f-s)/3,y=u+2*(d-u)/3,m=p+2*(f-p)/3;t.push({key:"C",data:[g,M,y,m,u,p]}),a=d,h=f,e=u,s=p;break}case"A":{const d=Math.abs(c[0]),f=Math.abs(c[1]),u=c[2],p=c[3],g=c[4],M=c[5],y=c[6];d===0||f===0?(t.push({key:"C",data:[e,s,M,y,M,y]}),e=M,s=y):(e!==M||s!==y)&&(Rt(e,s,M,y,d,f,u,p,g).forEach(function(m){t.push({key:"C",data:m})}),e=M,s=y);break}case"Z":t.push({key:"Z",data:[]}),e=r,s=i}n=l}return t}function G(o,t,n){return[o*Math.cos(n)-t*Math.sin(n),o*Math.sin(n)+t*Math.cos(n)]}function Rt(o,t,n,e,s,r,i,a,h,l){const c=(d=i,Math.PI*d/180);var d;let f=[],u=0,p=0,g=0,M=0;if(l)[u,p,g,M]=l;else{[o,t]=G(o,t,-c),[n,e]=G(n,e,-c);const O=(o-n)/2,x=(t-e)/2;let C=O*O/(s*s)+x*x/(r*r);C>1&&(C=Math.sqrt(C),s*=C,r*=C);const F=s*s,N=r*r,Bt=F*N-F*x*x-N*O*O,Ht=F*x*x+N*O*O,dt=(a===h?-1:1)*Math.sqrt(Math.abs(Bt/Ht));g=dt*s*x/r+(o+n)/2,M=dt*-r*O/s+(t+e)/2,u=Math.asin(parseFloat(((t-M)/r).toFixed(9))),p=Math.asin(parseFloat(((e-M)/r).toFixed(9))),o<g&&(u=Math.PI-u),n<g&&(p=Math.PI-p),u<0&&(u=2*Math.PI+u),p<0&&(p=2*Math.PI+p),h&&u>p&&(u-=2*Math.PI),!h&&p>u&&(p-=2*Math.PI)}let y=p-u;if(Math.abs(y)>120*Math.PI/180){const O=p,x=n,C=e;p=h&&p>u?u+120*Math.PI/180*1:u+120*Math.PI/180*-1,f=Rt(n=g+s*Math.cos(p),e=M+r*Math.sin(p),x,C,s,r,i,0,h,[p,O,g,M])}y=p-u;const m=Math.cos(u),w=Math.sin(u),S=Math.cos(p),P=Math.sin(p),v=Math.tan(y/4),L=4/3*s*v,I=4/3*r*v,H=[o,t],_=[o+L*w,t-I*m],z=[n+L*P,e-I*S],pt=[n,e];if(_[0]=2*H[0]-_[0],_[1]=2*H[1]-_[1],l)return[_,z,pt].concat(f);{f=[_,z,pt].concat(f);const O=[];for(let x=0;x<f.length;x+=3){const C=G(f[x][0],f[x][1],c),F=G(f[x+1][0],f[x+1][1],c),N=G(f[x+2][0],f[x+2][1],c);O.push([C[0],C[1],F[0],F[1],N[0],N[1]])}return O}}const xe={randOffset:function(o,t){return b(o,t)},randOffsetWithRange:function(o,t,n){return U(o,t,n)},ellipse:function(o,t,n,e,s){const r=Nt(n,e,s);return it(o,t,s,r).opset},doubleLineOps:function(o,t,n,e,s){return D(o,t,n,e,s,!0)}};function Ft(o,t,n,e,s){return{type:"path",ops:D(o,t,n,e,s)}}function Z(o,t,n){const e=(o||[]).length;if(e>2){const s=[];for(let r=0;r<e-1;r++)s.push(...D(o[r][0],o[r][1],o[r+1][0],o[r+1][1],n));return t&&s.push(...D(o[e-1][0],o[e-1][1],o[0][0],o[0][1],n)),{type:"path",ops:s}}return e===2?Ft(o[0][0],o[0][1],o[1][0],o[1][1],n):{type:"path",ops:[]}}function Ee(o,t,n,e,s){return function(r,i){return Z(r,!0,i)}([[o,t],[o+n,t],[o+n,t+e],[o,t+e]],s)}function mt(o,t){if(o.length){const n=typeof o[0][0]=="number"?[o]:o,e=q(n[0],1*(1+.2*t.roughness),t),s=t.disableMultiStroke?[]:q(n[0],1.5*(1+.22*t.roughness),yt(t));for(let r=1;r<n.length;r++){const i=n[r];if(i.length){const a=q(i,1*(1+.2*t.roughness),t),h=t.disableMultiStroke?[]:q(i,1.5*(1+.22*t.roughness),yt(t));for(const l of a)l.op!=="move"&&e.push(l);for(const l of h)l.op!=="move"&&s.push(l)}}return{type:"path",ops:e.concat(s)}}return{type:"path",ops:[]}}function Nt(o,t,n){const e=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(o/2,2)+Math.pow(t/2,2))/2)),s=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*e)),r=2*Math.PI/s;let i=Math.abs(o/2),a=Math.abs(t/2);const h=1-n.curveFitting;return i+=b(i*h,n),a+=b(a*h,n),{increment:r,rx:i,ry:a}}function it(o,t,n,e){const[s,r]=bt(e.increment,o,t,e.rx,e.ry,1,e.increment*U(.1,U(.4,1,n),n),n);let i=K(s,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[a]=bt(e.increment,o,t,e.rx,e.ry,1.5,0,n),h=K(a,null,n);i=i.concat(h)}return{estimatedPoints:r,opset:{type:"path",ops:i}}}function Mt(o,t,n,e,s,r,i,a,h){const l=o,c=t;let d=Math.abs(n/2),f=Math.abs(e/2);d+=b(.01*d,h),f+=b(.01*f,h);let u=s,p=r;for(;u<0;)u+=2*Math.PI,p+=2*Math.PI;p-u>2*Math.PI&&(u=0,p=2*Math.PI);const g=2*Math.PI/h.curveStepCount,M=Math.min(g/2,(p-u)/2),y=wt(M,l,c,d,f,u,p,1,h);if(!h.disableMultiStroke){const m=wt(M,l,c,d,f,u,p,1.5,h);y.push(...m)}return i&&(a?y.push(...D(l,c,l+d*Math.cos(u),c+f*Math.sin(u),h),...D(l,c,l+d*Math.cos(p),c+f*Math.sin(p),h)):y.push({op:"lineTo",data:[l,c]},{op:"lineTo",data:[l+d*Math.cos(u),c+f*Math.sin(u)]})),{type:"path",ops:y}}function kt(o,t){const n=zt(Dt(ft(o))),e=[];let s=[0,0],r=[0,0];for(const{key:i,data:a}of n)switch(i){case"M":r=[a[0],a[1]],s=[a[0],a[1]];break;case"L":e.push(...D(r[0],r[1],a[0],a[1],t)),r=[a[0],a[1]];break;case"C":{const[h,l,c,d,f,u]=a;e.push(...Te(h,l,c,d,f,u,r,t)),r=[f,u];break}case"Z":e.push(...D(r[0],r[1],s[0],s[1],t)),r=[s[0],s[1]]}return{type:"path",ops:e}}function ot(o,t){const n=[];for(const e of o)if(e.length){const s=t.maxRandomnessOffset||0,r=e.length;if(r>2){n.push({op:"move",data:[e[0][0]+b(s,t),e[0][1]+b(s,t)]});for(let i=1;i<r;i++)n.push({op:"lineTo",data:[e[i][0]+b(s,t),e[i][1]+b(s,t)]})}}return{type:"fillPath",ops:n}}function $(o,t){return function(n,e){let s=n.fillStyle||"hachure";if(!T[s])switch(s){case"zigzag":T[s]||(T[s]=new ke(e));break;case"cross-hatch":T[s]||(T[s]=new ye(e));break;case"dots":T[s]||(T[s]=new be(e));break;case"dashed":T[s]||(T[s]=new we(e));break;case"zigzag-line":T[s]||(T[s]=new ve(e));break;default:s="hachure",T[s]||(T[s]=new ut(e))}return T[s]}(t,xe).fillPolygons(o,t)}function yt(o){const t=Object.assign({},o);return t.randomizer=void 0,o.seed&&(t.seed=o.seed+1),t}function $t(o){return o.randomizer||(o.randomizer=new Pe(o.seed||0)),o.randomizer.next()}function U(o,t,n,e=1){return n.roughness*e*($t(n)*(t-o)+o)}function b(o,t,n=1){return U(-o,o,t,n)}function D(o,t,n,e,s,r=!1){const i=r?s.disableMultiStrokeFill:s.disableMultiStroke,a=ht(o,t,n,e,s,!0,!1);if(i)return a;const h=ht(o,t,n,e,s,!0,!0);return a.concat(h)}function ht(o,t,n,e,s,r,i){const a=Math.pow(o-n,2)+Math.pow(t-e,2),h=Math.sqrt(a);let l=1;l=h<200?1:h>500?.4:-.0016668*h+1.233334;let c=s.maxRandomnessOffset||0;c*c*100>a&&(c=h/10);const d=c/2,f=.2+.2*$t(s);let u=s.bowing*s.maxRandomnessOffset*(e-t)/200,p=s.bowing*s.maxRandomnessOffset*(o-n)/200;u=b(u,s,l),p=b(p,s,l);const g=[],M=()=>b(d,s,l),y=()=>b(c,s,l),m=s.preserveVertices;return r&&(i?g.push({op:"move",data:[o+(m?0:M()),t+(m?0:M())]}):g.push({op:"move",data:[o+(m?0:b(c,s,l)),t+(m?0:b(c,s,l))]})),i?g.push({op:"bcurveTo",data:[u+o+(n-o)*f+M(),p+t+(e-t)*f+M(),u+o+2*(n-o)*f+M(),p+t+2*(e-t)*f+M(),n+(m?0:M()),e+(m?0:M())]}):g.push({op:"bcurveTo",data:[u+o+(n-o)*f+y(),p+t+(e-t)*f+y(),u+o+2*(n-o)*f+y(),p+t+2*(e-t)*f+y(),n+(m?0:y()),e+(m?0:y())]}),g}function q(o,t,n){if(!o.length)return[];const e=[];e.push([o[0][0]+b(t,n),o[0][1]+b(t,n)]),e.push([o[0][0]+b(t,n),o[0][1]+b(t,n)]);for(let s=1;s<o.length;s++)e.push([o[s][0]+b(t,n),o[s][1]+b(t,n)]),s===o.length-1&&e.push([o[s][0]+b(t,n),o[s][1]+b(t,n)]);return K(e,null,n)}function K(o,t,n){const e=o.length,s=[];if(e>3){const r=[],i=1-n.curveTightness;s.push({op:"move",data:[o[1][0],o[1][1]]});for(let a=1;a+2<e;a++){const h=o[a];r[0]=[h[0],h[1]],r[1]=[h[0]+(i*o[a+1][0]-i*o[a-1][0])/6,h[1]+(i*o[a+1][1]-i*o[a-1][1])/6],r[2]=[o[a+1][0]+(i*o[a][0]-i*o[a+2][0])/6,o[a+1][1]+(i*o[a][1]-i*o[a+2][1])/6],r[3]=[o[a+1][0],o[a+1][1]],s.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(t&&t.length===2){const a=n.maxRandomnessOffset;s.push({op:"lineTo",data:[t[0]+b(a,n),t[1]+b(a,n)]})}}else e===3?(s.push({op:"move",data:[o[1][0],o[1][1]]}),s.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[2][0],o[2][1]]})):e===2&&s.push(...ht(o[0][0],o[0][1],o[1][0],o[1][1],n,!0,!0));return s}function bt(o,t,n,e,s,r,i,a){const h=[],l=[];if(a.roughness===0){o/=4,l.push([t+e*Math.cos(-o),n+s*Math.sin(-o)]);for(let c=0;c<=2*Math.PI;c+=o){const d=[t+e*Math.cos(c),n+s*Math.sin(c)];h.push(d),l.push(d)}l.push([t+e*Math.cos(0),n+s*Math.sin(0)]),l.push([t+e*Math.cos(o),n+s*Math.sin(o)])}else{const c=b(.5,a)-Math.PI/2;l.push([b(r,a)+t+.9*e*Math.cos(c-o),b(r,a)+n+.9*s*Math.sin(c-o)]);const d=2*Math.PI+c-.01;for(let f=c;f<d;f+=o){const u=[b(r,a)+t+e*Math.cos(f),b(r,a)+n+s*Math.sin(f)];h.push(u),l.push(u)}l.push([b(r,a)+t+e*Math.cos(c+2*Math.PI+.5*i),b(r,a)+n+s*Math.sin(c+2*Math.PI+.5*i)]),l.push([b(r,a)+t+.98*e*Math.cos(c+i),b(r,a)+n+.98*s*Math.sin(c+i)]),l.push([b(r,a)+t+.9*e*Math.cos(c+.5*i),b(r,a)+n+.9*s*Math.sin(c+.5*i)])}return[l,h]}function wt(o,t,n,e,s,r,i,a,h){const l=r+b(.1,h),c=[];c.push([b(a,h)+t+.9*e*Math.cos(l-o),b(a,h)+n+.9*s*Math.sin(l-o)]);for(let d=l;d<=i;d+=o)c.push([b(a,h)+t+e*Math.cos(d),b(a,h)+n+s*Math.sin(d)]);return c.push([t+e*Math.cos(i),n+s*Math.sin(i)]),c.push([t+e*Math.cos(i),n+s*Math.sin(i)]),K(c,null,h)}function Te(o,t,n,e,s,r,i,a){const h=[],l=[a.maxRandomnessOffset||1,(a.maxRandomnessOffset||1)+.3];let c=[0,0];const d=a.disableMultiStroke?1:2,f=a.preserveVertices;for(let u=0;u<d;u++)u===0?h.push({op:"move",data:[i[0],i[1]]}):h.push({op:"move",data:[i[0]+(f?0:b(l[0],a)),i[1]+(f?0:b(l[0],a))]}),c=f?[s,r]:[s+b(l[u],a),r+b(l[u],a)],h.push({op:"bcurveTo",data:[o+b(l[u],a),t+b(l[u],a),n+b(l[u],a),e+b(l[u],a),c[0],c[1]]});return h}function W(o){return[...o]}function vt(o,t=0){const n=o.length;if(n<3)throw new Error("A curve must have at least three points.");const e=[];if(n===3)e.push(W(o[0]),W(o[1]),W(o[2]),W(o[2]));else{const s=[];s.push(o[0],o[0]);for(let a=1;a<o.length;a++)s.push(o[a]),a===o.length-1&&s.push(o[a]);const r=[],i=1-t;e.push(W(s[0]));for(let a=1;a+2<s.length;a++){const h=s[a];r[0]=[h[0],h[1]],r[1]=[h[0]+(i*s[a+1][0]-i*s[a-1][0])/6,h[1]+(i*s[a+1][1]-i*s[a-1][1])/6],r[2]=[s[a+1][0]+(i*s[a][0]-i*s[a+2][0])/6,s[a+1][1]+(i*s[a][1]-i*s[a+2][1])/6],r[3]=[s[a+1][0],s[a+1][1]],e.push(r[1],r[2],r[3])}}return e}function Q(o,t){return Math.pow(o[0]-t[0],2)+Math.pow(o[1]-t[1],2)}function Ae(o,t,n){const e=Q(t,n);if(e===0)return Q(o,t);let s=((o[0]-t[0])*(n[0]-t[0])+(o[1]-t[1])*(n[1]-t[1]))/e;return s=Math.max(0,Math.min(1,s)),Q(o,R(t,n,s))}function R(o,t,n){return[o[0]+(t[0]-o[0])*n,o[1]+(t[1]-o[1])*n]}function ct(o,t,n,e){const s=e||[];if(function(a,h){const l=a[h+0],c=a[h+1],d=a[h+2],f=a[h+3];let u=3*c[0]-2*l[0]-f[0];u*=u;let p=3*c[1]-2*l[1]-f[1];p*=p;let g=3*d[0]-2*f[0]-l[0];g*=g;let M=3*d[1]-2*f[1]-l[1];return M*=M,u<g&&(u=g),p<M&&(p=M),u+p}(o,t)<n){const a=o[t+0];s.length?(r=s[s.length-1],i=a,Math.sqrt(Q(r,i))>1&&s.push(a)):s.push(a),s.push(o[t+3])}else{const h=o[t+0],l=o[t+1],c=o[t+2],d=o[t+3],f=R(h,l,.5),u=R(l,c,.5),p=R(c,d,.5),g=R(f,u,.5),M=R(u,p,.5),y=R(g,M,.5);ct([h,f,g,y],0,n,s),ct([y,M,p,d],0,n,s)}var r,i;return s}function Le(o,t){return J(o,0,o.length,t)}function J(o,t,n,e,s){const r=s||[],i=o[t],a=o[n-1];let h=0,l=1;for(let c=t+1;c<n-1;++c){const d=Ae(o[c],i,a);d>h&&(h=d,l=c)}return Math.sqrt(h)>e?(J(o,t,l+1,e,r),J(o,l,n,e,r)):(r.length||r.push(i),r.push(a)),r}function rt(o,t=.15,n){const e=[],s=(o.length-1)/3;for(let r=0;r<s;r++)ct(o,3*r,t,e);return n&&n>0?J(e,0,e.length,n):e}const A="none";class Y{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,n,e){return{shape:t,sets:n||[],options:e||this.defaultOptions}}line(t,n,e,s,r){const i=this._o(r);return this._d("line",[Ft(t,n,e,s,i)],i)}rectangle(t,n,e,s,r){const i=this._o(r),a=[],h=Ee(t,n,e,s,i);if(i.fill){const l=[[t,n],[t+e,n],[t+e,n+s],[t,n+s]];i.fillStyle==="solid"?a.push(ot([l],i)):a.push($([l],i))}return i.stroke!==A&&a.push(h),this._d("rectangle",a,i)}ellipse(t,n,e,s,r){const i=this._o(r),a=[],h=Nt(e,s,i),l=it(t,n,i,h);if(i.fill)if(i.fillStyle==="solid"){const c=it(t,n,i,h).opset;c.type="fillPath",a.push(c)}else a.push($([l.estimatedPoints],i));return i.stroke!==A&&a.push(l.opset),this._d("ellipse",a,i)}circle(t,n,e,s){const r=this.ellipse(t,n,e,e,s);return r.shape="circle",r}linearPath(t,n){const e=this._o(n);return this._d("linearPath",[Z(t,!1,e)],e)}arc(t,n,e,s,r,i,a=!1,h){const l=this._o(h),c=[],d=Mt(t,n,e,s,r,i,a,!0,l);if(a&&l.fill)if(l.fillStyle==="solid"){const f=Object.assign({},l);f.disableMultiStroke=!0;const u=Mt(t,n,e,s,r,i,!0,!1,f);u.type="fillPath",c.push(u)}else c.push(function(f,u,p,g,M,y,m){const w=f,S=u;let P=Math.abs(p/2),v=Math.abs(g/2);P+=b(.01*P,m),v+=b(.01*v,m);let L=M,I=y;for(;L<0;)L+=2*Math.PI,I+=2*Math.PI;I-L>2*Math.PI&&(L=0,I=2*Math.PI);const H=(I-L)/m.curveStepCount,_=[];for(let z=L;z<=I;z+=H)_.push([w+P*Math.cos(z),S+v*Math.sin(z)]);return _.push([w+P*Math.cos(I),S+v*Math.sin(I)]),_.push([w,S]),$([_],m)}(t,n,e,s,r,i,l));return l.stroke!==A&&c.push(d),this._d("arc",c,l)}curve(t,n){const e=this._o(n),s=[],r=mt(t,e);if(e.fill&&e.fill!==A)if(e.fillStyle==="solid"){const i=mt(t,Object.assign(Object.assign({},e),{disableMultiStroke:!0,roughness:e.roughness?e.roughness+e.fillShapeRoughnessGain:0}));s.push({type:"fillPath",ops:this._mergedShape(i.ops)})}else{const i=[],a=t;if(a.length){const h=typeof a[0][0]=="number"?[a]:a;for(const l of h)l.length<3?i.push(...l):l.length===3?i.push(...rt(vt([l[0],l[0],l[1],l[2]]),10,(1+e.roughness)/2)):i.push(...rt(vt(l),10,(1+e.roughness)/2))}i.length&&s.push($([i],e))}return e.stroke!==A&&s.push(r),this._d("curve",s,e)}polygon(t,n){const e=this._o(n),s=[],r=Z(t,!0,e);return e.fill&&(e.fillStyle==="solid"?s.push(ot([t],e)):s.push($([t],e))),e.stroke!==A&&s.push(r),this._d("polygon",s,e)}path(t,n){const e=this._o(n),s=[];if(!t)return this._d("path",s,e);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const r=e.fill&&e.fill!=="transparent"&&e.fill!==A,i=e.stroke!==A,a=!!(e.simplification&&e.simplification<1),h=function(c,d,f){const u=zt(Dt(ft(c))),p=[];let g=[],M=[0,0],y=[];const m=()=>{y.length>=4&&g.push(...rt(y,d)),y=[]},w=()=>{m(),g.length&&(p.push(g),g=[])};for(const{key:P,data:v}of u)switch(P){case"M":w(),M=[v[0],v[1]],g.push(M);break;case"L":m(),g.push([v[0],v[1]]);break;case"C":if(!y.length){const L=g.length?g[g.length-1]:M;y.push([L[0],L[1]])}y.push([v[0],v[1]]),y.push([v[2],v[3]]),y.push([v[4],v[5]]);break;case"Z":m(),g.push([M[0],M[1]])}if(w(),!f)return p;const S=[];for(const P of p){const v=Le(P,f);v.length&&S.push(v)}return S}(t,1,a?4-4*(e.simplification||1):(1+e.roughness)/2),l=kt(t,e);if(r)if(e.fillStyle==="solid")if(h.length===1){const c=kt(t,Object.assign(Object.assign({},e),{disableMultiStroke:!0,roughness:e.roughness?e.roughness+e.fillShapeRoughnessGain:0}));s.push({type:"fillPath",ops:this._mergedShape(c.ops)})}else s.push(ot(h,e));else s.push($(h,e));return i&&(a?h.forEach(c=>{s.push(Z(c,!1,e))}):s.push(l)),this._d("path",s,e)}opsToPath(t,n){let e="";for(const s of t.ops){const r=typeof n=="number"&&n>=0?s.data.map(i=>+i.toFixed(n)):s.data;switch(s.op){case"move":e+=`M${r[0]} ${r[1]} `;break;case"bcurveTo":e+=`C${r[0]} ${r[1]}, ${r[2]} ${r[3]}, ${r[4]} ${r[5]} `;break;case"lineTo":e+=`L${r[0]} ${r[1]} `}}return e.trim()}toPaths(t){const n=t.sets||[],e=t.options||this.defaultOptions,s=[];for(const r of n){let i=null;switch(r.type){case"path":i={d:this.opsToPath(r),stroke:e.stroke,strokeWidth:e.strokeWidth,fill:A};break;case"fillPath":i={d:this.opsToPath(r),stroke:A,strokeWidth:0,fill:e.fill||A};break;case"fillSketch":i=this.fillSketch(r,e)}i&&s.push(i)}return s}fillSketch(t,n){let e=n.fillWeight;return e<0&&(e=n.strokeWidth/2),{d:this.opsToPath(t),stroke:n.fill||A,strokeWidth:e,fill:A}}_mergedShape(t){return t.filter((n,e)=>e===0||n.op!=="move")}}class Oe{constructor(t,n){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new Y(n)}draw(t){const n=t.sets||[],e=t.options||this.getDefaultOptions(),s=this.ctx,r=t.options.fixedDecimalPlaceDigits;for(const i of n)switch(i.type){case"path":s.save(),s.strokeStyle=e.stroke==="none"?"transparent":e.stroke,s.lineWidth=e.strokeWidth,e.strokeLineDash&&s.setLineDash(e.strokeLineDash),e.strokeLineDashOffset&&(s.lineDashOffset=e.strokeLineDashOffset),this._drawToContext(s,i,r),s.restore();break;case"fillPath":{s.save(),s.fillStyle=e.fill||"";const a=t.shape==="curve"||t.shape==="polygon"||t.shape==="path"?"evenodd":"nonzero";this._drawToContext(s,i,r,a),s.restore();break}case"fillSketch":this.fillSketch(s,i,e)}}fillSketch(t,n,e){let s=e.fillWeight;s<0&&(s=e.strokeWidth/2),t.save(),e.fillLineDash&&t.setLineDash(e.fillLineDash),e.fillLineDashOffset&&(t.lineDashOffset=e.fillLineDashOffset),t.strokeStyle=e.fill||"",t.lineWidth=s,this._drawToContext(t,n,e.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,n,e,s="nonzero"){t.beginPath();for(const r of n.ops){const i=typeof e=="number"&&e>=0?r.data.map(a=>+a.toFixed(e)):r.data;switch(r.op){case"move":t.moveTo(i[0],i[1]);break;case"bcurveTo":t.bezierCurveTo(i[0],i[1],i[2],i[3],i[4],i[5]);break;case"lineTo":t.lineTo(i[0],i[1])}}n.type==="fillPath"?t.fill(s):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,n,e,s,r){const i=this.gen.line(t,n,e,s,r);return this.draw(i),i}rectangle(t,n,e,s,r){const i=this.gen.rectangle(t,n,e,s,r);return this.draw(i),i}ellipse(t,n,e,s,r){const i=this.gen.ellipse(t,n,e,s,r);return this.draw(i),i}circle(t,n,e,s){const r=this.gen.circle(t,n,e,s);return this.draw(r),r}linearPath(t,n){const e=this.gen.linearPath(t,n);return this.draw(e),e}polygon(t,n){const e=this.gen.polygon(t,n);return this.draw(e),e}arc(t,n,e,s,r,i,a=!1,h){const l=this.gen.arc(t,n,e,s,r,i,a,h);return this.draw(l),l}curve(t,n){const e=this.gen.curve(t,n);return this.draw(e),e}path(t,n){const e=this.gen.path(t,n);return this.draw(e),e}}const X="http://www.w3.org/2000/svg";class _e{constructor(t,n){this.svg=t,this.gen=new Y(n)}draw(t){const n=t.sets||[],e=t.options||this.getDefaultOptions(),s=this.svg.ownerDocument||window.document,r=s.createElementNS(X,"g"),i=t.options.fixedDecimalPlaceDigits;for(const a of n){let h=null;switch(a.type){case"path":h=s.createElementNS(X,"path"),h.setAttribute("d",this.opsToPath(a,i)),h.setAttribute("stroke",e.stroke),h.setAttribute("stroke-width",e.strokeWidth+""),h.setAttribute("fill","none"),e.strokeLineDash&&h.setAttribute("stroke-dasharray",e.strokeLineDash.join(" ").trim()),e.strokeLineDashOffset&&h.setAttribute("stroke-dashoffset",`${e.strokeLineDashOffset}`);break;case"fillPath":h=s.createElementNS(X,"path"),h.setAttribute("d",this.opsToPath(a,i)),h.setAttribute("stroke","none"),h.setAttribute("stroke-width","0"),h.setAttribute("fill",e.fill||""),t.shape!=="curve"&&t.shape!=="polygon"||h.setAttribute("fill-rule","evenodd");break;case"fillSketch":h=this.fillSketch(s,a,e)}h&&r.appendChild(h)}return r}fillSketch(t,n,e){let s=e.fillWeight;s<0&&(s=e.strokeWidth/2);const r=t.createElementNS(X,"path");return r.setAttribute("d",this.opsToPath(n,e.fixedDecimalPlaceDigits)),r.setAttribute("stroke",e.fill||""),r.setAttribute("stroke-width",s+""),r.setAttribute("fill","none"),e.fillLineDash&&r.setAttribute("stroke-dasharray",e.fillLineDash.join(" ").trim()),e.fillLineDashOffset&&r.setAttribute("stroke-dashoffset",`${e.fillLineDashOffset}`),r}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,n){return this.gen.opsToPath(t,n)}line(t,n,e,s,r){const i=this.gen.line(t,n,e,s,r);return this.draw(i)}rectangle(t,n,e,s,r){const i=this.gen.rectangle(t,n,e,s,r);return this.draw(i)}ellipse(t,n,e,s,r){const i=this.gen.ellipse(t,n,e,s,r);return this.draw(i)}circle(t,n,e,s){const r=this.gen.circle(t,n,e,s);return this.draw(r)}linearPath(t,n){const e=this.gen.linearPath(t,n);return this.draw(e)}polygon(t,n){const e=this.gen.polygon(t,n);return this.draw(e)}arc(t,n,e,s,r,i,a=!1,h){const l=this.gen.arc(t,n,e,s,r,i,a,h);return this.draw(l)}curve(t,n){const e=this.gen.curve(t,n);return this.draw(e)}path(t,n){const e=this.gen.path(t,n);return this.draw(e)}}var Ie={canvas:(o,t)=>new Oe(o,t),svg:(o,t)=>new _e(o,t),generator:o=>new Y(o),newSeed:()=>Y.newSeed()};const Ce=Ie.svg(document.querySelector("svg")),De=lt("background",SVGElement),Gt=30,Wt=.75,ze=_t(0,1-Wt,Gt-1,0);let Pt=0;for(let o=0;o<Gt;o++){const t=Math.random()*3,n=1+Math.random()*3+t,e=2+Math.random()+t,s=2.5+Math.random()*1.5,r=o%2?"blue":"whitesmoke",i=.1+Math.random()*.2,a=Ce.circle(n,e,s,{stroke:r,strokeWidth:i,disableMultiStroke:!0});De.appendChild(a),a.querySelectorAll("path").forEach(u=>{u.pathLength.baseVal=1});const h=Math.random()*Wt+ze(o),l=1+Math.random()*.5,c=h+l,d=`0 ${l} ${h} 0`;a.style.strokeDasharray=d,a.style.display="none";const f=3e3+4e3*Math.random();setTimeout(()=>{a.style.display="",a.animate([{offset:0,easing:"linear",strokeDashoffset:0},{offset:1,easing:"linear",strokeDashoffset:-c}],{duration:f,iterations:1/0})},Pt),Pt+=f/c*h}let V="?",at="?";document.querySelectorAll("h1,h2,h3").forEach(o=>{const t=St(o,HTMLHeadingElement);function n(r){return r.replaceAll("#","").replaceAll("&","and").replaceAll(" ","_")}let e;switch(t.tagName){case"H1":{V=n(t.innerText),e=V;break}case"H2":{at=n(t.innerText),e=`${at}__${V}`;break}case"H3":{e=`${n(t.innerText)}__${at}__${V}`;break}default:throw new Error("wtf")}const s=document.createElement("a");s.id=e,t.insertBefore(s,t.firstChild),t.addEventListener("click",()=>{window.location.hash=e})});const Re=lt("testResult",HTMLDivElement);Re.innerText="😎 😀 😇 💯";
