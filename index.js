// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,i=r.__defineGetter__,o=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,l,s,y;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),s="get"in f,y="set"in f,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,n,f.get),y&&o&&o.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t,n,r){f(t,n,{configurable:!1,enumerable:!1,get:r})}function s(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,v=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",N=p()?function(t){var n,r,e,i,o;if(null==t)return b.call(t);r=t[h],o=h,n=null!=(i=t)&&v.call(i,o);try{t[h]=void 0}catch(n){return b.call(t)}return e=b.call(t),n?t[h]=r:delete t[h],e}:function(t){return b.call(t)},m=Number,w=m.prototype.toString,d=p();function g(t){return"object"==typeof t&&(t instanceof m||(d?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===N(t)))}function A(t){return s(t)||g(t)}function _(t){return t!=t}c(A,"isPrimitive",s),c(A,"isObject",g);var U,j="function"==typeof Uint32Array,E="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var t,n,r;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(j&&r instanceof Uint32Array||"[object Uint32Array]"===N(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?I:function(){throw new Error("not implemented")};var T,O=U,S="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,V="function"==typeof Float64Array?Float64Array:void 0;T=function(){var t,n,r;if("function"!=typeof M)return!1;try{n=new M([1,3.14,-3.14,NaN]),r=n,t=(S&&r instanceof Float64Array||"[object Float64Array]"===N(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?V:function(){throw new Error("not implemented")};var F,H=T,G="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;F=function(){var t,n,r;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=n,t=(G&&r instanceof Uint8Array||"[object Uint8Array]"===N(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?x:function(){throw new Error("not implemented")};var k,L=F,R="function"==typeof Uint16Array,W="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var t,n,r;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,65536,65537]),r=n,t=(R&&r instanceof Uint16Array||"[object Uint16Array]"===N(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?q:function(){throw new Error("not implemented")};var C,Y={uint16:k,uint8:L};(C=new Y.uint16(1))[0]=4660;var z=52===new Y.uint8(C.buffer)[0],B=!0===z?1:0,D=new H(1),J=new O(D.buffer);function K(t){return D[0]=t,J[B]}var Q=!0===z?1:0,X=new H(1),Z=new O(X.buffer);function $(t,n){return X[0]=t,Z[Q]=n>>>0,X[0]}var tt=1023,nt=m.NEGATIVE_INFINITY,rt=.6931471803691238,et=1.9082149292705877e-10,it=1048575;function ot(t){var n,r,e,i,o,u,a,f,c,l,s,y;return 0===t?nt:_(t)||t<0?NaN:(o=0,(r=K(t))<1048576&&(o-=54,r=K(t*=0x40000000000000)),r>=2146435072?t+t:(o+=(r>>20)-tt|0,o+=(f=614244+(r&=it)&1048576|0)>>20|0,a=(t=$(t,r|1072693248^f))-1,(it&2+r)<3?0===a?0===o?0:o*rt+o*et:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*rt-(u-o*et-a)):(f=r-398458|0,c=440401-r|0,i=(s=(y=(l=a/(2+a))*l)*y)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(s),e=y*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(s),u=e+i,(f|=c)>0?(n=.5*a*a,0===o?a-(n-l*(n+u)):o*rt-(n-(l*(n+u)+o*et)-a)):0===o?a-l*(a-u):o*rt-(l*(a-u)-o*et-a))))}var ut=Math.sqrt,at=ut(1/12),ft=Math.floor;function ct(t){return ft(t)===t}function lt(t){return ct(t/2)}function st(t){return lt(t>0?t-1:t+1)}var yt,pt,bt=Number.POSITIVE_INFINITY;function vt(t){return t===bt||t===nt}function ht(t){return Math.abs(t)}!0===z?(yt=1,pt=0):(yt=0,pt=1);var Nt={HIGH:yt,LOW:pt},mt=new H(1),wt=new O(mt.buffer),dt=Nt.HIGH,gt=Nt.LOW;function At(t,n,r,e){return mt[0]=t,n[e]=wt[dt],n[e+r]=wt[gt],n}function _t(t){return At(t,[0,0],1,0)}c(_t,"assign",At);var Ut=!0===z?0:1,jt=new H(1),Et=new O(jt.buffer);function It(t,n){return jt[0]=t,Et[Ut]=n>>>0,jt[0]}function Tt(t){return 0|t}var Ot,St,Mt=2147483647;!0===z?(Ot=1,St=0):(Ot=0,St=1);var Vt={HIGH:Ot,LOW:St},Ft=new H(1),Ht=new O(Ft.buffer),Gt=Vt.HIGH,Pt=Vt.LOW;function xt(t,n){return Ht[Gt]=t,Ht[Pt]=n,Ft[0]}var kt=[0,0];function Lt(t,n){var r,e;return _t.assign(t,kt,1,0),r=kt[0],r&=Mt,e=K(n),xt(r|=e&=2147483648,kt[1])}var Rt=1048576,Wt=[1,1.5],qt=[0,.5849624872207642],Ct=[0,1.350039202129749e-8];function Yt(t,n,r,e){return _(t)||vt(t)?(n[e]=t,n[e+r]=0,n):0!==t&&ht(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}c((function(t){return Yt(t,[0,0],1,0)}),"assign",Yt);var zt=[0,0],Bt=[0,0];function Dt(t,n){var r,e;return 0===n||0===t||_(t)||vt(t)?t:(Yt(t,zt,1,0),n+=zt[1],n+=function(t){var n=K(t);return(n=(2146435072&n)>>>20)-tt|0}(t=zt[0]),n<-1074?Lt(0,t):n>1023?t<0?nt:bt:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,_t.assign(t,Bt,1,0),r=Bt[0],r&=2148532223,e*xt(r|=n+tt<<20,Bt[1])))}var Jt=1048575,Kt=1048576,Qt=1083179008,Xt=1e300,Zt=1e-300,$t=[0,0],tn=[0,0];function nn(t,n){var r,e,i,o,u,a,f,c,l,s,y,p,b,v;if(_(t)||_(n))return NaN;if(_t.assign(n,$t,1,0),u=$t[0],0===$t[1]){if(0===n)return 1;if(1===n)return t;if(-1===n)return 1/t;if(.5===n)return ut(t);if(-.5===n)return 1/ut(t);if(2===n)return t*t;if(3===n)return t*t*t;if(4===n)return(t*=t)*t;if(vt(n))return function(t,n){return-1===t?(t-t)/(t-t):1===t?1:ht(t)<1==(n===bt)?0:bt}(t,n)}if(_t.assign(t,$t,1,0),o=$t[0],0===$t[1]){if(0===o)return function(t,n){return n===nt?bt:n===bt?0:n>0?st(n)?t:0:st(n)?Lt(bt,t):bt}(t,n);if(1===t)return 1;if(-1===t&&st(n))return-1;if(vt(t))return t===nt?nn(-0,-n):n<0?0:bt}if(t<0&&!1===ct(n))return(t-t)/(t-t);if(i=ht(t),r=o&Mt|0,e=u&Mt|0,f=u>>>31|0,a=(a=o>>>31|0)&&st(n)?-1:1,e>1105199104){if(e>1139802112)return function(t,n){return(K(t)&Mt)<=1072693247?n<0?1/0:0:n>0?1/0:0}(t,n);if(r<1072693247)return 1===f?a*Xt*Xt:a*Zt*Zt;if(r>1072693248)return 0===f?a*Xt*Xt:a*Zt*Zt;y=function(t,n){var r,e,i,o,u,a;return r=(u=1.9259629911266175e-8*(i=n-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=It(e=(o=1.4426950216293335*i)+u,0))-o),t[0]=e,t[1]=r,t}(tn,i)}else y=function(t,n,r){var e,i,o,u,a,f,c,l,s,y,p,b,v,h,N,m,w,d,g,A,_;return d=0,r<Rt&&(d-=53,r=K(n*=9007199254740992)),d+=(r>>20)-tt|0,r=1072693248|(g=1048575&r|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,r-=Rt),u=It(i=(m=(n=$(n,r))-(c=Wt[A]))*(w=1/(n+c)),0),e=524288+(r>>1|536870912),f=$(0,e+=A<<18),N=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=It(f=3+(o=u*u)+(N+=(a=w*(m-u*f-u*(n-(f-c))))*(u+i)),0),v=(p=-7.028461650952758e-9*(s=It(s=(m=u*f)+(w=a*f+(N-(f-3-o))*i),0))+.9617966939259756*(w-(s-m))+Ct[A])-((b=It(b=(y=.9617967009544373*s)+p+(l=qt[A])+(h=d),0))-h-l-y),t[0]=b,t[1]=v,t}(tn,i,r);if(p=(s=(n-(c=It(n,0)))*y[0]+n*y[1])+(l=c*y[0]),_t.assign(p,$t,1,0),b=Tt($t[0]),v=Tt($t[1]),b>=Qt){if(0!=(b-Qt|v))return a*Xt*Xt;if(s+8008566259537294e-32>p-l)return a*Xt*Xt}else if((b&Mt)>=1083231232){if(0!=(b-3230714880|v))return a*Zt*Zt;if(s<=p-l)return a*Zt*Zt}return p=function(t,n,r){var e,i,o,u,a,f,c,l,s,y;return s=((l=t&Mt|0)>>20)-tt|0,c=0,l>1071644672&&(i=$(0,((c=t+(Kt>>s+1)>>>0)&~(Jt>>(s=((c&Mt)>>20)-tt|0)))>>>0),c=(c&Jt|Kt)>>20-s>>>0,t<0&&(c=-c),n-=i),t=Tt(t=K(f=1-((f=(o=.6931471824645996*(i=It(i=r+n,0)))+(u=.6931471805599453*(r-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-o))+f*a)-f))),(t+=c<<20>>>0)>>20<=0?Dt(f,c):$(f,t)}(b,l,s),a*p}function rn(t,n,r){return _(t)||_(n)||_(r)||n>=r?NaN:t<n?0:t>=r?1:(t-n)/(r-n)}function en(t){return function(){return t}}function on(t,n,r){return _(t)||_(n)||_(r)||n>=r?NaN:t<n?nt:t>=r?0:ot((t-n)/(r-n))}function un(t,n,r){return _(t)||_(n)||_(r)||n>=r?NaN:t<n||t>r?nt:-ot(r-n)}c(rn,"factory",(function(t,n){return _(t)||_(n)||t>=n?en(NaN):function(r){return _(r)?NaN:r<t?0:r>=n?1:(r-t)/(n-t)}})),c(on,"factory",(function(t,n){return _(t)||_(n)||t>=n?en(NaN):function(r){return _(r)?NaN:r<t?nt:r>=n?0:ot((r-t)/(n-t))}})),c(un,"factory",(function(t,n){return _(t)||_(n)||t>=n?en(NaN):function(r){return _(r)?NaN:r<t||r>n?nt:-ot(n-t)}}));var an=Math.ceil;function fn(t){return t<0?an(t):ft(t)}var cn=1.4426950408889634,ln=1/(1<<28);function sn(t){var n;return _(t)||t===bt?t:t===nt?0:t>709.782712893384?bt:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<ln?1+t:function(t,n,r){var e,i,o,u;return Dt(1-(n-(e=t-n)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-t),r)}(t-.6931471803691238*(n=fn(t<0?cn*t-.5:cn*t+.5)),1.9082149292705877e-10*n,n)}function yn(t,n,r){var e;return _(t)||_(n)||_(r)||n>=r?NaN:0===t?1:(e=sn(t*r)-sn(t*n),e/=t*(r-n))}function pn(t,n,r){return _(t)||_(n)||_(r)||n>=r?NaN:t<n||t>r?0:1/(r-n)}function bn(t,n,r){return _(n)||_(r)||n>=r||_(t)||t<0||t>1?NaN:n+t*(r-n)}function vn(){var t,n=arguments,r=n[0],e="https://stdlib.io/e/"+r+"?";for(t=1;t<n.length;t++)e+="&arg[]="+encodeURIComponent(n[t]);return e}function hn(){var t,n;if(!(this instanceof hn))return 0===arguments.length?new hn:new hn(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!s(t=arguments[0])||_(t))throw new TypeError(vn("invalid argument. Minimum support must be a number. Value: `%s`.",t));if(!s(n)||_(n))throw new TypeError(vn("invalid argument. Maximum support must be a number. Value: `%s`.",n));if(t>=n)throw new RangeError(vn("invalid arguments. Minimum support must be less than maximum support. Value: `(%f, %f)`.",t,n))}else t=0,n=1;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!s(r)||_(r))throw new TypeError(vn("invalid assignment. Must be a number. Value: `%s`.",r));if(r>=n)throw new RangeError(vn("invalid assignment. Must be less than %f. Value: `%f`.",n,r));t=r}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!s(r)||_(r))throw new TypeError(vn("invalid assignment. Must be a number. Value: `%s`.",r));if(t>=r)throw new RangeError(vn("invalid assignment. Must be greater than %f. Value: `%f`.",t,r));n=r}}),this}return c(yn,"factory",(function(t,n){return _(t)||_(n)||t>=n?en(NaN):function(r){var e;return _(r)?NaN:0===r?1:(e=sn(r*n)-sn(r*t),e/=r*(n-t))}})),c(pn,"factory",(function(t,n){return _(t)||_(n)||t>=n?en(NaN):function(r){return _(r)?NaN:r<t||r>n?0:1/(n-t)}})),c(bn,"factory",(function(t,n){return _(t)||_(n)||t>=n?en(NaN):function(r){return _(r)||r<0||r>1?NaN:t+r*(n-t)}})),l(hn.prototype,"entropy",(function(){return t=this.a,n=this.b,t>=n?NaN:ot(n-t);var t,n})),l(hn.prototype,"kurtosis",(function(){return t=this.a,n=this.b,_(t)||_(n)||t>=n?NaN:-1.2;var t,n})),l(hn.prototype,"mean",(function(){return t=this.a,n=this.b,t>=n?NaN:.5*(t+n);var t,n})),l(hn.prototype,"median",(function(){return t=this.a,n=this.b,t>=n?NaN:.5*(t+n);var t,n})),l(hn.prototype,"skewness",(function(){return t=this.a,n=this.b,_(t)||_(n)||t>=n?NaN:0;var t,n})),l(hn.prototype,"stdev",(function(){return t=this.a,n=this.b,t>=n?NaN:at*(n-t);var t,n})),l(hn.prototype,"variance",(function(){return t=this.a,n=this.b,t>=n?NaN:1/12*nn(n-t,2);var t,n})),c(hn.prototype,"cdf",(function(t){return rn(t,this.a,this.b)})),c(hn.prototype,"logcdf",(function(t){return on(t,this.a,this.b)})),c(hn.prototype,"logpdf",(function(t){return un(t,this.a,this.b)})),c(hn.prototype,"mgf",(function(t){return yn(t,this.a,this.b)})),c(hn.prototype,"pdf",(function(t){return pn(t,this.a,this.b)})),c(hn.prototype,"quantile",(function(t){return bn(t,this.a,this.b)})),hn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Uniform=n();
//# sourceMappingURL=index.js.map
