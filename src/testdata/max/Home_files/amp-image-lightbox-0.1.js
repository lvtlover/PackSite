(self.AMP=self.AMP||[]).push({n:"amp-image-lightbox",v:"1905021827420",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;n=ca.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=m;
function p(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.qb=b.prototype}function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
self.log=self.log||{user:null,dev:null,userForEmbed:null};var r=self.log;function t(){if(r.dev)return r.dev;throw Error("failed to call initLogConstructor");}function u(a,b,c){if(!r.user)throw Error("failed to call initLogConstructor");return r.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var v;function fa(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function ha(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function ia(a){return a.closest?a.closest("figure"):ha(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"figure"):!1})};var w,ja="Webkit webkit Moz moz ms O o".split(" ");function ka(a,b,c){var d;var e=a.style;if(!fa(b,"--")){w||(w=Object.create(null));var f=w[b];if(!f){f=b;if(void 0===e[b]){var h=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var k=0;k<ja.length;k++){var l=ja[k]+h;if(void 0!==e[l]){h=l;break b}}h=""}void 0!==e[h]&&(f=h)}w[b]=f}b=f}b&&(a.style[b]=d?c+d:c)}function x(a,b){for(var c in b)ka(a,c,b[c])}
function la(a){var b=!0;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function y(a,b,c,d){var e=new ma(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function ma(a,b,c,d){var e=1,f=1;this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.x3=e;this.y3=f}g=ma.prototype;g.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
g.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=this.getPointX(c);var k=(this.getPointX(c+b)-f)/b;if(Math.abs(f-a)<b)return c;if(Math.abs(k)<b)break;else f<a?d=c:e=c,c-=(f-a)/k}for(h=0;Math.abs(f-a)>b&&8>h;h++)f<a?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=this.getPointX(c);return c};
g.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.lerp=function(a,b,c){return a+c*(b-a)};
var na=y(.25,.1,.25,1),oa=y(.42,0,1,1),pa=y(0,0,.58,1),qa=y(.42,0,.58,1),ra={linear:function(a){return a},ease:na,"ease-in":oa,"ease-out":pa,"ease-in-out":qa};function sa(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return y(b[0],b[1],b[2],b[3])}return null}return ra[a]}return a};function ta(a){var b=void 0===b?" ":b;return function(c,d){for(var e=[],f=0;f<a.length;f++){var h=(0,a[f])(c,d);"string"==typeof h&&e.push(h)}return e.join(b)}}function z(a,b){return function(c,d){for(var e in b){var f=e;"display"===f&&t().error("STYLE","`display` style detected. You must use toggle instead.");ka(a,f,b[e](c,d))}}}function A(a,b){return function(c){return a+(b-a)*c}}
function ua(a,b){return function(c){var d=a(c);"number"==typeof d&&(d+="px");if(!b)return"translate("+d+")";c=b(c);"number"==typeof c&&(c+="px");return"translate("+d+","+c+")"}}function va(a){return function(b){return"scale("+a(b)+")"}};function B(a,b){a=a.__AMP_TOP||a;return wa(a,b)}function xa(a){var b=ya(a);b=ya(b);b=b.isSingleDoc()?b.win:b;return wa(b,"history")}function ya(a){return a.nodeType?B((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function wa(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function za(){}function C(a){var b;this.W=a;this.Z=b||B(self,"vsync");this.Ra=null;this.G=[]}function Aa(a,b,c){var d=Ba;return(new C(a)).setCurve(d).add(0,b,1).start(c)}C.prototype.setCurve=function(a){a&&(this.Ra=sa(a));return this};C.prototype.add=function(a,b,c,d){this.G.push({delay:a,func:b,duration:c,curve:sa(d)});return this};C.prototype.start=function(a){var b=new D(this.Z,this.W,this.G,this.Ra,a);return b};
function D(a,b,c,d,e){this.Z=a;this.W=b;this.G=[];for(b=0;b<c.length;b++){var f=c[b];this.G.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.fb=e;this.ta=Date.now();this.Y=!0;this.Wa={};e=new ea;this.ja=e.promise;this.La=e.resolve;this.Ka=e.reject;this.Ya=this.Z.createAnimTask(this.W,{mutate:this.ob.bind(this)});this.Z.canAnimate(this.W)?this.Ya(this.Wa):(t().warn("Animation","cannot animate"),E(this,!1,0))}
D.prototype.then=function(a,b){return a||b?this.ja.then(a,b):this.ja};D.prototype.thenAlways=function(a){a=a||za;return this.then(a,a)};D.prototype.halt=function(a){E(this,!1,a||0)};function E(a,b,c){if(a.Y){a.Y=!1;if(0!=c){1<a.G.length&&a.G.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.G.length;c++)a.G[c].func(1,!0);else for(var d=a.G.length-1;0<=d;d--)a.G[d].func(0,!1)}catch(e){t().error("Animation","completion failed: "+e,e),b=!1}}b?a.La():a.Ka()}}
D.prototype.ob=function(){if(this.Y){for(var a=Date.now(),b=Math.min((a-this.ta)/this.fb,1),c=0;c<this.G.length;c++){var d=this.G[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.G.length;c++)if(d=this.G[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var f=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=f)try{f=d.curve(e)}catch(h){t().error("Animation","step curve failed: "+h,h);E(this,!1,0);break a}}else f=e=1;1==e&&(d.completed=!0);try{d.func(f,d.completed)}catch(h){t().error("Animation",
"step mutate failed: "+h,h),E(this,!1,0)}}1==b?E(this,!0,0):this.Z.canAnimate(this.W)?this.Ya(this.Wa):(t().warn("Animation","cancel animation"),E(this,!1,0))}};function F(){this.L=null}g=F.prototype;g.add=function(a){var b=this;this.L||(this.L=[]);this.L.push(a);return function(){b.remove(a)}};g.remove=function(a){this.L&&(a=this.L.indexOf(a),-1<a&&this.L.splice(a,1))};g.removeAll=function(){this.L&&(this.L.length=0)};g.fire=function(a){if(this.L)for(var b=this.L,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.L?this.L.length:0};function G(a,b){var c,d=this;this.Za=B(a,"timer");this.gb=b;this.eb=c||0;this.ka=-1;this.Ia=0;this.Y=!1;this.bb=function(){return d.ra()}}G.prototype.isPending=function(){return-1!=this.ka};G.prototype.schedule=function(a){a=a||this.eb;this.Y&&10>a&&(a=10);var b=Date.now()+a;return!this.isPending()||-10>b-this.Ia?(this.cancel(),this.Ia=b,this.ka=this.Za.delay(this.bb,a),!0):!1};G.prototype.ra=function(){this.ka=-1;this.Ia=0;this.Y=!0;this.gb();this.Y=!1};
G.prototype.cancel=function(){this.isPending()&&(this.Za.cancel(this.ka),this.ka=-1)};function Ca(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1};function Da(a,b,c){var d=Date.now();this.type=a;this.data=b;this.time=d;this.event=c}
function Ea(a,b){this.T=a;this.w=[];this.da=[];this.O=[];this.A=[];this.o=null;this.mb=b;this.wa=!1;this.ra=new G(a.ownerDocument.defaultView,this.Sa.bind(this));this.Va=new F;this.ia=Object.create(null);this.Qa=this.lb.bind(this);this.Oa=this.jb.bind(this);this.Pa=this.kb.bind(this);this.Na=this.ib.bind(this);this.T.addEventListener("touchstart",this.Qa);this.T.addEventListener("touchend",this.Oa);this.T.addEventListener("touchmove",this.Pa);this.T.addEventListener("touchcancel",this.Na);this.Ja=
!1}function Fa(a){var b=void 0===b?!1:b;var c=a.__AMP_Gestures;c||(c=new Ea(a,b),a.__AMP_Gestures=c);return c}g=Ea.prototype;g.cleanup=function(){this.T.removeEventListener("touchstart",this.Qa);this.T.removeEventListener("touchend",this.Oa);this.T.removeEventListener("touchmove",this.Pa);this.T.removeEventListener("touchcancel",this.Na);delete this.T.__AMP_Gestures;this.ra.cancel()};g.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.ia[d];e||(this.w.push(c),e=new F,this.ia[d]=e);return e.add(b)};
g.removeGesture=function(a){var b=(new a(this)).getType();if(a=this.ia[b]){a.removeAll();a=Ca(this.w,function(a){return a.getType()==b});if(0>a)return!1;this.w.splice(a,1);this.O.splice(a,1);this.A.splice(a,1);this.da.splice(a,1);delete this.ia[b];return!0}return!1};g.onPointerDown=function(a){return this.Va.add(a)};
g.lb=function(a){var b=Date.now();this.wa=!1;this.Va.fire(a);for(var c=0;c<this.w.length;c++)if(!this.O[c]&&(this.A[c]&&this.A[c]<b&&H(this,c),this.w[c].onTouchStart(a))){var d=c;this.da[d]=!0;this.A[d]=0}I(this,a)};g.kb=function(a){for(var b=Date.now(),c=0;c<this.w.length;c++)this.da[c]&&(this.A[c]&&this.A[c]<b?H(this,c):this.w[c].onTouchMove(a)||H(this,c));I(this,a)};
g.jb=function(a){for(var b=Date.now(),c=0;c<this.w.length;c++)if(this.da[c])if(this.A[c]&&this.A[c]<b)H(this,c);else{this.w[c].onTouchEnd(a);var d=!this.A[c],e=this.A[c]<b,f=this.o==this.w[c];f||!d&&!e||H(this,c)}I(this,a)};g.ib=function(a){for(var b=0;b<this.w.length;b++){var c=b;this.O[c]=0;H(this,c)}I(this,a)};
function I(a,b){var c=!!a.o||a.wa;a.wa=!1;if(!c)for(var d=Date.now(),e=0;e<a.w.length;e++)if(a.O[e]||a.A[e]&&a.A[e]>=d){c=!0;break}c&&(b.stopPropagation(),a.mb||b.preventDefault());a.Ja&&(a.Ja=!1,a.Sa())}
g.Sa=function(){for(var a=Date.now(),b=-1,c=0;c<this.w.length;c++)if(!this.O[c])this.A[c]&&this.A[c]<a&&H(this,c);else if(-1==b||this.O[c]>this.O[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.w.length;c++)!this.O[c]&&this.da[c]&&(d=Math.max(d,this.A[c]-a));if(2>d){a=b;c=this.w[a];for(var e=0;e<this.w.length;e++)if(e!=a){var f=e;this.O[f]=0;H(this,f)}this.O[a]=0;this.A[a]=0;this.o=c;c.acceptStart()}else this.ra.schedule(d)}};function H(a,b){a.da[b]=!1;a.A[b]=0;a.O[b]||a.w[b].acceptCancel()}
function J(a,b){this.pb=a;this.pa=b}g=J.prototype;g.getType=function(){return this.pb};g.signalReady=function(a){var b=this.pa;if(b.o)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.w.length;d++)b.w[d]==this&&(b.O[d]=c+a,b.A[d]=0);b.Ja=!0}};g.signalPending=function(a){var b=this.pa;if(b.o)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.w.length;d++)b.w[d]==this&&(b.A[d]=c+a)};g.signalEnd=function(){var a=this.pa;a.o==this&&(a.o=null,a.wa=!0)};
g.signalEmit=function(a,b){var c=this.pa.ia[this.getType()];c&&c.fire(new Da(this.getType(),a,b))};g.acceptStart=function(){};g.acceptCancel=function(){};g.onTouchStart=function(){return!1};g.onTouchMove=function(){return!1};g.onTouchEnd=function(){};function Ga(){}var Ha=Math.round(-16.67/Math.log(.95));function K(a,b,c){1>b&&(b=1);var d=a/b,e=.5+Math.min(b/33.34,.5);return d*e+c*(1-e)}function Ia(a,b,c,d,e,f){return(new Ja(a,b,c,d,e,f)).start()}function Ja(a,b,c,d,e,f){this.Z=B(self,"vsync");this.W=a;this.xa=f;this.c=b;this.h=c;this.Ba=d;this.Ca=e;this.K=this.J=0;a=new ea;this.ja=a.promise;this.La=a.resolve;this.Ka=a.reject;this.fa=!1}g=Ja.prototype;
g.start=function(){this.fa=!0;if(.02>=Math.abs(this.Ba)&&.02>=Math.abs(this.Ca))this.xa(this.c,this.h),this.ya(!0);else{this.J=this.Ba;this.K=this.Ca;var a=this.nb.bind(this),b=this.ya.bind(this,!0);this.Z.runAnimMutateSeries(this.W,a,5E3).then(b,b)}return this};g.halt=function(){this.fa&&this.ya(!1)};g.then=function(a,b){return a||b?this.ja.then(a,b):this.ja};g.thenAlways=function(a){a=a||Ga;return this.then(a,a)};
g.nb=function(a,b){if(!this.fa)return!1;this.c+=b*this.J;this.h+=b*this.K;if(!this.xa(this.c,this.h))return!1;var c=Math.exp(-a/Ha);this.J=this.Ba*c;this.K=this.Ca*c;return.02<Math.abs(this.J)||.02<Math.abs(this.K)};g.ya=function(a){this.fa&&(this.fa=!1,this.xa(this.c,this.h),a?this.La():this.Ka())};function L(a){J.call(this,"tap",a);this.h=this.c=this.j=this.m=0;this.Xa=null}p(L,J);L.prototype.onTouchStart=function(a){var b=a.touches;this.Xa=a.target;return b&&1==b.length?(this.m=b[0].clientX,this.j=b[0].clientY,!0):!1};L.prototype.onTouchMove=function(a){return(a=a.changedTouches||a.touches)&&1==a.length&&(this.c=a[0].clientX,this.h=a[0].clientY,a=8<=Math.abs(this.h-this.j),8<=Math.abs(this.c-this.m)||a)?!1:!0};L.prototype.onTouchEnd=function(){this.signalReady(0)};
L.prototype.acceptStart=function(){this.signalEmit({clientX:this.c,clientY:this.h,target:this.Xa},null);this.signalEnd()};function M(a){J.call(this,"doubletap",a);this.P=this.h=this.c=this.j=this.m=0;this.Ta=null}p(M,J);g=M.prototype;g.onTouchStart=function(a){return 1<this.P?!1:(a=a.touches)&&1==a.length?(this.m=a[0].clientX,this.j=a[0].clientY,this.c=a[0].clientX,this.h=a[0].clientY,!0):!1};
g.onTouchMove=function(a){return(a=a.touches)&&1==a.length?(this.c=a[0].clientX,this.h=a[0].clientY,a=8<=Math.abs(this.h-this.j),8<=Math.abs(this.c-this.m)||a?(this.acceptCancel(),!1):!0):!1};g.onTouchEnd=function(a){this.P++;2>this.P?this.signalPending(200):(this.Ta=a,this.signalReady(0))};g.acceptStart=function(){this.P=0;this.signalEmit({clientX:this.c,clientY:this.h},this.Ta);this.signalEnd()};g.acceptCancel=function(){this.P=0};
function N(a,b,c,d){J.call(this,a,b);this.Ua=c;this.$a=d;this.o=!1;this.K=this.J=this.V=this.R=this.ta=this.aa=this.$=this.h=this.c=this.j=this.m=0}p(N,J);g=N.prototype;g.onTouchStart=function(a){a=a.touches;return this.o&&a&&1<a.length?!0:a&&1==a.length?(this.ta=Date.now(),this.m=a[0].clientX,this.j=a[0].clientY,!0):!1};
g.onTouchMove=function(a){var b=a.touches;if(b&&1<=b.length){var c=b[0];b=c.clientX;c=c.clientY;this.c=b;this.h=c;if(this.o)this.X(!1,!1,a);else if(a=Math.abs(b-this.m),b=Math.abs(c-this.j),this.Ua&&this.$a)(8<=a||8<=b)&&this.signalReady(-10);else if(this.Ua)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.$a)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1;return!0}return!1};g.onTouchEnd=function(a){var b=a.touches;b&&0==b.length&&this.za(a)};
g.acceptStart=function(){this.o=!0;this.$=this.m;this.aa=this.j;this.V=this.ta;this.m=this.c;this.j=this.h;this.X(!0,!1,null)};g.acceptCancel=function(){this.o=!1};
g.X=function(a,b,c){this.R=Date.now();var d=this.R-this.V;if(!b&&4<d||b&&16<d){var e=K(this.c-this.$,d,this.J),f=K(this.h-this.aa,d,this.K);if(!b||32<d||0!=e||0!=f)this.J=1E-4<Math.abs(e)?e:0,this.K=1E-4<Math.abs(f)?f:0;this.$=this.c;this.aa=this.h;this.V=this.R}this.signalEmit({first:a,last:b,time:this.R,deltaX:this.c-this.m,deltaY:this.h-this.j,startX:this.m,startY:this.j,lastX:this.c,lastY:this.h,velocityX:this.J,velocityY:this.K},c)};g.za=function(a){this.o&&(this.o=!1,this.X(!1,!0,a),this.signalEnd())};
function O(a){N.call(this,"swipe-xy",a,!0,!0)}p(O,N);function P(a){J.call(this,"tapzoom",a);this.o=!1;this.K=this.J=this.V=this.R=this.aa=this.$=this.P=this.h=this.c=this.j=this.m=0}p(P,J);g=P.prototype;g.onTouchStart=function(a){return this.o?!1:(a=a.touches)&&1==a.length?(this.m=a[0].clientX,this.j=a[0].clientY,!0):!1};
g.onTouchMove=function(a){var b=a.touches;if(b&&1==b.length){this.c=b[0].clientX;this.h=b[0].clientY;if(this.o)this.X(!1,!1,a);else if(a=8<=Math.abs(this.h-this.j),8<=Math.abs(this.c-this.m)||a){if(0==this.P)return this.acceptCancel(),!1;this.signalReady(0)}return!0}return!1};g.onTouchEnd=function(a){this.o?this.za(a):(this.P++,1==this.P?this.signalPending(400):this.acceptCancel())};g.acceptStart=function(){this.P=0;this.o=!0;this.X(!0,!1,null)};g.acceptCancel=function(){this.P=0;this.o=!1};
g.X=function(a,b,c){this.R=Date.now();a?this.J=this.K=0:2<this.R-this.V&&(this.J=K(this.c-this.$,this.R-this.V,this.J),this.K=K(this.h-this.aa,this.R-this.V,this.K));this.$=this.c;this.aa=this.h;this.V=this.R;this.signalEmit({first:a,last:b,centerClientX:this.m,centerClientY:this.j,deltaX:this.c-this.m,deltaY:this.h-this.j,velocityX:this.J,velocityY:this.K},c)};g.za=function(a){this.o&&(this.o=!1,this.X(!1,!0,a),this.signalEnd())};function Q(a){return!!(a.complete||"complete"==a.readyState||a.document&&"complete"==a.document.readyState)};function R(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function Ka(a){return R(Number(a.left),Number(a.top),Number(a.width),Number(a.height))};var La=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function Ma(a){var b=a.getAttribute("srcset");if(b){a=[];for(var c;c=La.exec(b);){var d=c[1],e=void 0,f=void 0;if(c[2]){var h=c[3].toLowerCase();if("w"==h)e=parseInt(c[2],10);else if("x"==h)f=parseFloat(c[2]);else continue}else f=1;a.push({url:d,width:e,dpr:f})}return new S(a)}var k=u(a.getAttribute("src"),'Either non-empty "srcset" or "src" attribute must be specified: %s',a);return new S([{url:k,width:void 0,dpr:1}])}
function S(a){u(0<a.length,"Srcset must have at least one source");this.ma=a;for(var b=!1,c=!1,d=0;d<a.length;d++){var e=a[d];b=b||!!e.width;c=c||!!e.dpr}u(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?Na:Oa);this.ab=b}
S.prototype.select=function(a,b){if(this.ab){b*=a;a=this.ma;for(var c=0,d=Infinity,e=Infinity,f=0;f<a.length;f++){var h=a[f].width,k=Math.abs(h-b);if(k<=1.1*d||1.2<b/e)c=f,d=k,e=h;else break}b=c}else{a=this.ma;c=0;d=Infinity;for(e=0;e<a.length;e++)if(f=Math.abs(a[e].dpr-b),f<=d)c=e,d=f;else break;b=c}return this.ma[b].url};S.prototype.getUrls=function(){return this.ma.map(function(a){return a.url})};
S.prototype.stringify=function(a){for(var b=[],c=this.ma,d=0;d<c.length;d++){var e=c[d],f=e.url;a&&(f=a(f));f=this.ab?f+(" "+e.width+"w"):f+(" "+e.dpr+"x");b.push(f)}return b.join(", ")};function Na(a,b){u(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function Oa(a,b){u(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};var Pa={"amp-img":!0,"amp-anim":!0},Qa=["aria-label","aria-describedby","aria-labelledby"],Ra=y(.4,0,.2,1),T=y(.4,0,.2,1),Ba=y(.4,0,.2,1.4);
function Sa(a,b,c){this.oa=a;this.win=b;this.hb=c;this.va=a.element.ownerDocument.createElement("div");this.va.classList.add("i-amphtml-image-lightbox-viewer");this.C=a.element.ownerDocument.createElement("img");this.C.classList.add("i-amphtml-image-lightbox-viewer-image");this.va.appendChild(this.C);this.sa=null;this.ba=this.ca=0;this.B=R(0,0,0,0);this.M=R(0,0,0,0);this.Fa=this.qa=this.na=this.l=1;this.ha=2;this.Ea=this.Da=this.Ha=this.Ga=this.D=this.F=this.j=this.m=0;this.U=null;Ta(this)}g=Sa.prototype;
g.getElement=function(){return this.va};g.getImage=function(){return this.C};g.getViewerBox=function(){return this.B};g.getImageBox=function(){return this.M};g.getImageBoxWithOffset=function(){if(0==this.F&&0==this.D)var a=this.M;else{a=this.M;var b=this.F,c=this.D;a=0==b&&0==c||0==a.width&&0==a.height?a:R(a.left+b,a.top+c,a.width,a.height)}return a};
g.reset=function(){var a=this;this.C.setAttribute("src","");Qa.forEach(function(b){a.C.removeAttribute(b)});this.C.removeAttribute("aria-describedby");this.sa=null;this.M=R(0,0,0,0);this.ba=this.ca=0;this.na=this.l=this.qa=1;this.ha=2;this.Ea=this.Da=this.Ha=this.Ga=this.D=this.F=this.j=this.m=0;this.U&&this.U.halt();this.U=null};function Ua(a,b,c){c?(a.ca=c.naturalWidth||b.offsetWidth,a.ba=c.naturalHeight||b.offsetHeight):(a.ca=b.offsetWidth,a.ba=b.offsetHeight)}
g.init=function(a,b){var c=this;Ua(this,a,b);this.sa=Ma(a);a.getImpl().then(function(a){a.propagateAttributes(Qa,c.C)});b&&Q(b)&&b.src&&this.C.setAttribute("src",b.src)};
g.measure=function(){this.B=Ka(this.va.getBoundingClientRect());var a=this.ca/this.ba,b=Math.min(this.B.width/a,this.B.height),c=Math.min(this.B.height*a,this.B.width);16>=Math.abs(c-this.ca)&&16>=Math.abs(b-this.ba)&&(c=this.ca,b=this.ba);this.M=R(Math.round((this.B.width-c)/2),Math.round((this.B.height-b)/2),Math.round(c),Math.round(b));x(this.C,{top:this.M.top+"px",left:this.M.left+"px",width:this.M.width+"px",height:this.M.height+"px"});var d=this.B.width/this.B.height,e=Math.max(d/a,a/d);this.ha=
Math.max(2,e);this.na=this.l=1;this.j=this.D=this.m=this.F=0;Va(this,this.l);U(this);return Wa(this)};function Wa(a){if(!a.sa)return Promise.resolve();a.qa=Math.max(a.qa,a.l);var b=a.sa.select(a.M.width*a.qa,a.oa.getDpr());return b==a.C.getAttribute("src")?Promise.resolve():B(a.win,"timer").promise(1).then(function(){a.C.setAttribute("src",b);return a.hb(a.C)})}
function Ta(a){var b=Fa(a.C);b.onGesture(L,function(){a.oa.toggleViewMode()});b.onGesture(O,function(b){var c=b.data.deltaY,e=V(a,a.m+b.data.deltaX,!0);c=W(a,a.j+c,!0);X(a,a.l,e,c,!1);b.data.last&&Xa(a,b.data.velocityX,b.data.velocityY)});b.onPointerDown(function(){a.U&&a.U.halt()});b.onGesture(M,function(b){var c=1==a.l?a.ha:a.Fa;Ya(a,c,a.B.width/2-b.data.clientX,a.B.height/2-b.data.clientY,!0).then(function(){return Za(a,0,0,0,0,0,0)})});b.onGesture(P,function(b){$a(a,b.data.centerClientX,b.data.centerClientY,
b.data.deltaX,b.data.deltaY);b.data.last&&Za(a,b.data.centerClientX,b.data.centerClientY,b.data.deltaX,b.data.deltaY,b.data.velocityY,b.data.velocityY)})}function Y(a,b,c,d){return Math.max(b-d,Math.min(c+d,a))}function V(a,b,c){return Y(b,a.Ga,a.Da,c&&1<a.l?.25*a.B.width:0)}function W(a,b,c){return Y(b,a.Ha,a.Ea,c?.25*a.B.height:0)}
function Va(a,b){var c=0,d=0,e=a.B.height-a.M.height*b;0<=e?d=c=0:(d=e/2,c=-d);var f=0,h=0;b=a.B.width-a.M.width*b;0<=b?h=f=0:(h=b/2,f=-h);a.Ga=h;a.Ha=d;a.Da=f;a.Ea=c}function U(a){var b=a.C;var c=a.F;var d=a.D;"number"==typeof c&&(c+="px");void 0===d?c="translate("+c+")":("number"==typeof d&&(d+="px"),c="translate("+c+", "+d+")");x(b,{transform:c+" "+("scale("+a.l+")")});1!=a.l&&a.oa.toggleViewMode(!0)}
function Xa(a,b,c){var d=a.D-a.j;1==a.l&&10<Math.abs(d)?a.oa.close():(a.U=Ia(a.C,a.F,a.D,b,c,function(b,c){b=V(a,b,!0);c=W(a,c,!0);if(1>Math.abs(b-a.F)&&1>Math.abs(c-a.D))return!1;X(a,a.l,b,c,!1);return!0}),a.U.thenAlways(function(){a.U=null;return ab(a)}))}function $a(a,b,c,d,e){var f=Math.sqrt(d*d+e*e),h=Math.abs(e)>Math.abs(d)?Math.sign(e):Math.sign(-d);if(0!=h){var k=a.na*(1+h*f/100),l=a.B.width/2-b,q=a.B.height/2-c;d=Math.min(l,f/100*l);e=Math.min(q,f/100*q);Ya(a,k,d,e,!1)}}
function Ya(a,b,c,d,e){b=Y(b,a.Fa,a.ha,.25);if(b!=a.l)return Va(a,b),c=V(a,a.m+c*b,!1),d=W(a,a.j+d*b,!1),X(a,b,c,d,e)}function Za(a,b,c,d,e,f,h){d=0==f&&0==h?Promise.resolve():Ia(a.C,d,e,f,h,function(d,e){$a(a,b,c,d,e);return!0}).thenAlways();var k=a.l>a.na;return d.then(function(){return ab(a)}).then(function(){k&&Wa(a)})}
function X(a,b,c,d,e){var f=b-a.l,h=c-a.F,k=d-a.D;h=Math.sqrt(h*h+k*k);var l=0;if(e){var q=250;l=Math.min(q,Math.max(q*h*.01,q*Math.abs(f)))}if(16<l&&e){var cb=A(a.l,b),db=A(a.F,c),eb=A(a.D,d);e=Aa(a.C,function(b){a.l=cb(b);a.F=db(b);a.D=eb(b);U(a)},l).thenAlways(function(){a.l=b;a.F=c;a.D=d;U(a)})}else a.l=b,a.F=c,a.D=d,U(a),e=e?Promise.resolve():void 0;return e}
function ab(a){var b=Y(a.l,a.Fa,a.ha,0);b!=a.l&&Va(a,b);var c=V(a,a.F/a.l*b,!1),d=W(a,a.D/a.l*b,!1);return X(a,b,c,d,!0).then(function(){a.na=a.l;a.m=a.F;a.j=a.D})}function Z(a){var b=AMP.BaseElement.call(this,a)||this;b.Aa=-1;b.ea=!1;b.ga=!1;b.la=null;b.H=null;b.ua=null;b.I=null;b.N=null;b.S=null;b.Ma=b.cb.bind(b);b.registerDefaultAction(function(a){return bb(b,a)},"open");return b}p(Z,AMP.BaseElement);
function fb(a){if(!a.I){a.I=a.element.ownerDocument.createElement("div");a.I.classList.add("i-amphtml-image-lightbox-container");a.element.appendChild(a.I);a.N=new Sa(a,a.win,a.loadPromise.bind(a));a.I.appendChild(a.N.getElement());a.S=a.element.ownerDocument.createElement("div");a.S.setAttribute("id",a.element.getAttribute("id")+"-caption");a.S.classList.add("amp-image-lightbox-caption");a.S.classList.add("i-amphtml-image-lightbox-caption");a.I.appendChild(a.S);var b=a.element.ownerDocument.createElement("button"),
c=a.element.getAttribute("data-close-button-aria-label")||"Close the lightbox";b.textContent=c;b.classList.add("i-amphtml-screen-reader");b.tabIndex=-1;b.addEventListener("click",function(){a.close()});a.element.appendChild(b);var d=Fa(a.element);a.element.addEventListener("click",function(b){a.ga||a.N.getImage().contains(b.target)||a.close()});d.onGesture(L,function(){a.ga||a.close()});d.onGesture(O,function(){})}}
function bb(a,b){a.ea||(fb(a),b=b.caller,u(b&&Pa[b.tagName.toLowerCase()],"Unsupported element: %s",b.tagName),a.ea=!0,gb(a),hb(a,b),a.win.document.documentElement.addEventListener("keydown",a.Ma),a.getViewport().enterLightboxMode(),ib(a),a.ua=a.getViewport().onChanged(function(){a.ea&&(fa(B(a.win,"platform").getIosVersionString(),"10.3")?B(a.win,"timer").delay(function(){a.N.measure()},500):a.N.measure())}),xa(a.getAmpDoc()).push(a.close.bind(a)).then(function(b){a.Aa=b}))}
Z.prototype.cb=function(a){"Escape"==a.key&&(a.preventDefault(),this.close())};Z.prototype.close=function(){if(this.ea&&(this.ga=this.ea=!1,jb(this),this.ua&&(this.ua(),this.ua=null),this.getViewport().leaveLightboxMode(),-1!=this.Aa&&xa(this.getAmpDoc()).pop(this.Aa),this.win.document.documentElement.removeEventListener("keydown",this.Ma),this.la))try{this.la.focus()}catch(a){}};Z.prototype.toggleViewMode=function(a){void 0!==a?this.I.classList.toggle("i-amphtml-image-lightbox-view-mode",a):this.I.classList.toggle("i-amphtml-image-lightbox-view-mode")};
function hb(a,b){a.la=b;/^[\w-]+$/.test("img");if(void 0!==v)var c=v;else{try{var d=b.ownerDocument,e=d.createElement("div"),f=d.createElement("div");e.appendChild(f);c=e.querySelector(":scope div")===f}catch(q){c=!1}c=v=c}c?c=b.querySelector("> img".replace(/^|,/g,"$&:scope ")):(b.classList.add("i-amphtml-scoped"),c="> img".replace(/^|,/g,"$&.i-amphtml-scoped "),c=b.querySelectorAll(c),b.classList.remove("i-amphtml-scoped"),c=void 0===c[0]?null:c[0]);a.H=c;a.N.init(a.la,a.H);var h=null,k=ia(b);k&&
(/^[\w-]+$/.test("figcaption"),h=k.querySelector("figcaption"));if(!h){var l=b.getAttribute("aria-describedby");h=a.element.ownerDocument.getElementById(l)}if(h){b=a.S;c=b.ownerDocument.createDocumentFragment();for(d=h.firstChild;d;d=d.nextSibling)c.appendChild(d.cloneNode(!0));b.appendChild(c);a.N.getImage().setAttribute("aria-describedby",a.S.getAttribute("id"))}a.S.classList.toggle("i-amphtml-empty",!h)}
function gb(a){a.N.reset();for(var b=a.S;b.firstChild;)b.removeChild(b.firstChild);a.la=null;a.H=null;a.toggleViewMode(!1)}
function ib(a){a.ga=!0;la(a.element);x(a.element,{opacity:0});a.N.measure();var b=new C(a.element);b.add(0,z(a.element,{opacity:A(0,1)}),.6,Ra);var c=null;if(a.H&&Q(a.H)&&a.H.src){c=a.element.ownerDocument.createElement("div");c.classList.add("i-amphtml-image-lightbox-trans");a.getAmpDoc().getBody().appendChild(c);var d=Ka(a.H.getBoundingClientRect()),e=a.N.getImageBox(),f=a.H.cloneNode(!0);f.className="";x(f,{position:"absolute",top:d.top+"px",left:d.left+"px",width:d.width+"px",height:d.height+
"px",transformOrigin:"top left",willChange:"transform"});c.appendChild(f);a.H.classList.add("i-amphtml-ghost");var h=e.top-d.top,k=0!=d.width?e.width/d.width:1,l=Math.max(.2,Math.min(.8,Math.abs(h)/250*.8));b.add(0,z(f,{transform:ta([ua(A(0,e.left-d.left),A(0,h)),va(A(1,k))])}),l,Ra);x(a.I,{opacity:0});b.add(.8,z(a.I,{opacity:A(0,1)}),.1,Ra);b.add(.9,z(c,{opacity:A(1,.01)}),.1,T)}b.start(500).thenAlways(function(){a.ga=!1;x(a.element,{opacity:""});x(a.I,{opacity:""});c&&a.getAmpDoc().getBody().removeChild(c)})}
function jb(a){var b=a.N.getImage(),c=a.N.getImageBoxWithOffset(),d=new C(a.element),e=500;d.add(0,z(a.element,{opacity:A(1,0)}),.9,T);var f=null;if(Q(b)&&b.src&&a.H){f=a.element.ownerDocument.createElement("div");f.classList.add("i-amphtml-image-lightbox-trans");a.getAmpDoc().getBody().appendChild(f);var h=Ka(a.H.getBoundingClientRect()),k=b.cloneNode(!0);x(k,{position:"absolute",top:c.top+"px",left:c.left+"px",width:c.width+"px",height:c.height+"px",transform:"",transformOrigin:"top left",willChange:"transform"});
f.appendChild(k);d.add(0,z(a.I,{opacity:A(1,0)}),.1,T);b=h.top-c.top;var l=0!=c.width?h.width/c.width:1,q=z(k,{transform:ta([ua(A(0,h.left-c.left),A(0,b)),va(A(1,l))])});c=Math.max(.2,Math.min(.8,Math.abs(b)/250*.8));d.add(Math.min(.8-c,.2),function(b,c){q(b);c&&a.H.classList.remove("i-amphtml-ghost")},c,T);d.add(.8,z(f,{opacity:A(1,.01)}),.2,T);e=Math.max(Math.min(Math.abs(b)/250*e,e),300)}d.start(e).thenAlways(function(){a.H&&a.H.classList.remove("i-amphtml-ghost");a.collapse();x(a.element,{opacity:""});
x(a.I,{opacity:""});f&&a.getAmpDoc().getBody().removeChild(f);gb(a)})}(function(a){a.registerElement("amp-image-lightbox",Z,"amp-image-lightbox{position:fixed!important;top:0!important;left:0!important;bottom:0!important;right:0!important;margin:0!important;padding:0!important;overflow:hidden!important;-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important;-ms-touch-action:none!important;touch-action:none!important;z-index:1000;background:rgba(0,0,0,0.95);color:#f2f2f2}.i-amphtml-image-lightbox-container{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.i-amphtml-image-lightbox-trans{pointer-events:none!important;position:fixed;z-index:1001;top:0;left:0;bottom:0;right:0}.i-amphtml-image-lightbox-caption{position:absolute!important;z-index:2;bottom:0!important;left:0!important;right:0!important}.i-amphtml-image-lightbox-caption.i-amphtml-empty,.i-amphtml-image-lightbox-view-mode .i-amphtml-image-lightbox-caption{visibility:hidden}.amp-image-lightbox-caption{background:rgba(0,0,0,0.5);max-height:25%;padding:8px}.i-amphtml-image-lightbox-viewer{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.i-amphtml-image-lightbox-viewer-image{position:absolute;z-index:1;display:block;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}\n/*# sourceURL=/extensions/amp-image-lightbox/0.1/amp-image-lightbox.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-image-lightbox-0.1.js.map
