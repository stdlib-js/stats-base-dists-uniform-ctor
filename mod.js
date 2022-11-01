// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,a=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(o.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,f.get),p&&i&&i.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r,t,n){f(r,t,{configurable:!1,enumerable:!1,get:n})}function y(r){return"number"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var N=s()?function(r){var t,n,e,u,i;if(null==r)return v.call(r);n=r[h],i=h,t=null!=(u=r)&&b.call(u,i);try{r[h]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[h]=n:delete r[h],e}:function(r){return v.call(r)},m=Number,w=m.prototype.toString;var g=s();function d(r){return"object"==typeof r&&(r instanceof m||(g?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Number]"===N(r)))}function A(r){return y(r)||d(r)}function _(r){return r!=r}c(A,"isPrimitive",y),c(A,"isObject",d);var U="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null;var E,I="function"==typeof Uint32Array?Uint32Array:void 0;E=function(){var r,t,n;if("function"!=typeof j)return!1;try{t=new j(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(U&&n instanceof Uint32Array||"[object Uint32Array]"===N(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O=E,S="function"==typeof Float64Array;var T="function"==typeof Float64Array?Float64Array:null;var M,V="function"==typeof Float64Array?Float64Array:void 0;M=function(){var r,t,n;if("function"!=typeof T)return!1;try{t=new T([1,3.14,-3.14,NaN]),n=t,r=(S&&n instanceof Float64Array||"[object Float64Array]"===N(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var F=M,H="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var P,x="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,256,257]),n=t,r=(H&&n instanceof Uint8Array||"[object Uint8Array]"===N(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};var k=P,L="function"==typeof Uint16Array;var R="function"==typeof Uint16Array?Uint16Array:null;var W,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,t,n;if("function"!=typeof R)return!1;try{t=new R(t=[1,3.14,-3.14,65536,65537]),n=t,r=(L&&n instanceof Uint16Array||"[object Uint16Array]"===N(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,Y={uint16:W,uint8:k};(C=new Y.uint16(1))[0]=4660;var z=52===new Y.uint8(C.buffer)[0],B=!0===z?1:0,D=new F(1),J=new O(D.buffer);function K(r){return D[0]=r,J[B]}var Q=!0===z?1:0,X=new F(1),Z=new O(X.buffer);function $(r,t){return X[0]=r,Z[Q]=t>>>0,X[0]}var rr=m.NEGATIVE_INFINITY;var tr=.6931471803691238,nr=1.9082149292705877e-10;function er(r){var t,n,e,u,i,o,a,f,c,l,y,p;return 0===r?rr:_(r)||r<0?NaN:(i=0,(n=K(r))<1048576&&(i-=54,n=K(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(f=(n&=1048575)+614244&1048576|0)>>20|0,a=(r=$(r,n|1072693248^f))-1,(1048575&2+n)<3?0===a?0===i?0:i*tr+i*nr:(o=a*a*(.5-.3333333333333333*a),0===i?a-o:i*tr-(o-i*nr-a)):(f=n-398458|0,c=440401-n|0,u=(y=(p=(l=a/(2+a))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),o=e+u,(f|=c)>0?(t=.5*a*a,0===i?a-(t-l*(t+o)):i*tr-(t-(l*(t+o)+i*nr)-a)):0===i?a-l*(a-o):i*tr-(l*(a-o)-i*nr-a))))}var ur=Math.sqrt,ir=ur(1/12);var or=Math.floor;function ar(r){return or(r)===r}function fr(r){return ar(r/2)}function cr(r){return fr(r>0?r-1:r+1)}var lr,yr,pr=Number.POSITIVE_INFINITY;function sr(r){return r===pr||r===rr}function vr(r){return Math.abs(r)}!0===z?(lr=1,yr=0):(lr=0,yr=1);var br={HIGH:lr,LOW:yr},hr=new F(1),Nr=new O(hr.buffer),mr=br.HIGH,wr=br.LOW;function gr(r,t){return hr[0]=t,r[0]=Nr[mr],r[1]=Nr[wr],r}function dr(r,t){return 1===arguments.length?gr([0,0],r):gr(r,t)}var Ar,_r,Ur=!0===z?0:1,jr=new F(1),Er=new O(jr.buffer);function Ir(r,t){return jr[0]=r,Er[Ur]=t>>>0,jr[0]}function Or(r){return 0|r}!0===z?(Ar=1,_r=0):(Ar=0,_r=1);var Sr={HIGH:Ar,LOW:_r},Tr=new F(1),Mr=new O(Tr.buffer),Vr=Sr.HIGH,Fr=Sr.LOW;function Hr(r,t){return Mr[Vr]=r,Mr[Fr]=t,Tr[0]}var Gr=[0,0];function Pr(r,t){var n,e;return dr(Gr,r),n=Gr[0],n&=2147483647,e=K(t),Hr(n|=e&=2147483648,Gr[1])}var xr=[1,1.5],kr=[0,.5849624872207642],Lr=[0,1.350039202129749e-8];function Rr(r,t,n,e){return _(r)||sr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&vr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}c((function(r){return Rr(r,[0,0],1,0)}),"assign",Rr);var Wr=[0,0],qr=[0,0];function Cr(r,t){var n,e;return 0===t||0===r||_(r)||sr(r)?r:(Rr(r,Wr,1,0),t+=Wr[1],t+=function(r){var t=K(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Wr[0]),t<-1074?Pr(0,r):t>1023?r<0?rr:pr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,dr(qr,r),n=qr[0],n&=2148532223,e*Hr(n|=t+1023<<20,qr[1])))}var Yr=1e300,zr=1e-300,Br=[0,0],Dr=[0,0];function Jr(r,t){var n,e,u,i,o,a,f,c,l,y,p,s,v,b;if(_(r)||_(t))return NaN;if(dr(Br,t),o=Br[0],0===Br[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return ur(r);if(-.5===t)return 1/ur(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(sr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:vr(r)<1==(t===pr)?0:pr}(r,t)}if(dr(Br,r),i=Br[0],0===Br[1]){if(0===i)return function(r,t){return t===rr?pr:t===pr?0:t>0?cr(t)?r:0:cr(t)?Pr(pr,r):pr}(r,t);if(1===r)return 1;if(-1===r&&cr(t))return-1;if(sr(r))return r===rr?Jr(-0,-t):t<0?0:pr}if(r<0&&!1===ar(t))return(r-r)/(r-r);if(u=vr(r),n=2147483647&i|0,e=2147483647&o|0,f=o>>>31|0,a=(a=i>>>31|0)&&cr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&K(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?a*Yr*Yr:a*zr*zr;if(n>1072693248)return 0===f?a*Yr*Yr:a*zr*zr;p=function(r,t){var n,e,u,i,o,a;return n=(o=1.9259629911266175e-8*(u=t-1)-u*u*(0===(a=u)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Ir(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=n,r}(Dr,u)}else p=function(r,t,n){var e,u,i,o,a,f,c,l,y,p,s,v,b,h,N,m,w,g,d,A,_;return g=0,n<1048576&&(g-=53,n=K(t*=9007199254740992)),g+=(n>>20)-1023|0,n=1072693248|(d=1048575&n|0),d<=235662?A=0:d<767610?A=1:(A=0,g+=1,n-=1048576),o=Ir(u=(m=(t=$(t,n))-(c=xr[A]))*(w=1/(t+c)),0),e=524288+(n>>1|536870912),f=$(0,e+=A<<18),N=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Ir(f=3+(i=o*o)+(N+=(a=w*(m-o*f-o*(t-(f-c))))*(o+u)),0),b=(s=-7.028461650952758e-9*(y=Ir(y=(m=o*f)+(w=a*f+(N-(f-3-i))*u),0))+.9617966939259756*(w-(y-m))+Lr[A])-((v=Ir(v=(p=.9617967009544373*y)+s+(l=kr[A])+(h=g),0))-h-l-p),r[0]=v,r[1]=b,r}(Dr,u,n);if(y=(t-(c=Ir(t,0)))*p[0]+t*p[1],l=c*p[0],dr(Br,s=y+l),v=Or(Br[0]),b=Or(Br[1]),v>=1083179008){if(0!=(v-1083179008|b))return a*Yr*Yr;if(y+8008566259537294e-32>s-l)return a*Yr*Yr}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|b))return a*zr*zr;if(y<=s-l)return a*zr*zr}return s=function(r,t,n){var e,u,i,o,a,f,c,l,y,p,s;return p=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),t-=i=$(0,e)),r=Or(r=K(c=1-((c=(o=.6931471824645996*(i=Ir(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((f=a-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Cr(c,l):$(c,r)}(v,l,y),a*s}function Kr(r,t,n){return _(r)||_(t)||_(n)||t>=n?NaN:r<t?0:r>=n?1:(r-t)/(n-t)}function Qr(r){return function(){return r}}function Xr(r,t,n){return _(r)||_(t)||_(n)||t>=n?NaN:r<t?rr:r>=n?0:er((r-t)/(n-t))}function Zr(r,t,n){return _(r)||_(t)||_(n)||t>=n?NaN:r<t||r>n?rr:-er(n-t)}c(Kr,"factory",(function(r,t){return _(r)||_(t)||r>=t?Qr(NaN):function(n){if(_(n))return NaN;if(n<r)return 0;if(n>=t)return 1;return(n-r)/(t-r)}})),c(Xr,"factory",(function(r,t){return _(r)||_(t)||r>=t?Qr(NaN):function(n){if(_(n))return NaN;if(n<r)return rr;if(n>=t)return 0;return er((n-r)/(t-r))}})),c(Zr,"factory",(function(r,t){return _(r)||_(t)||r>=t?Qr(NaN):function(n){if(_(n))return NaN;if(n<r||n>t)return rr;return-er(t-r)}}));var $r=Math.ceil;function rt(r){return r<0?$r(r):or(r)}function tt(r){var t;return _(r)||r===pr?r:r===rr?0:r>709.782712893384?pr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,u,i,o;return Cr(1-(t-(e=r-t)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=rt(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function nt(r,t,n){var e;return _(r)||_(t)||_(n)||t>=n?NaN:0===r?1:(e=tt(r*n)-tt(r*t),e/=r*(n-t))}function et(r,t,n){return _(r)||_(t)||_(n)||t>=n?NaN:r<t||r>n?0:1/(n-t)}function ut(r,t,n){return _(t)||_(n)||t>=n||_(r)||r<0||r>1?NaN:t+r*(n-t)}function it(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function ot(){var r,t;if(!(this instanceof ot))return 0===arguments.length?new ot:new ot(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!y(r=arguments[0])||_(r))throw new TypeError(it("invalid argument. Minimum support must be a number. Value: `%s`.",r));if(!y(t)||_(t))throw new TypeError(it("invalid argument. Maximum support must be a number. Value: `%s`.",t));if(r>=t)throw new RangeError(it("invalid arguments. Minimum support must be less than maximum support. Value: `(%f, %f)`.",r,t))}else r=0,t=1;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!y(n)||_(n))throw new TypeError(it("invalid assignment. Must be a number. Value: `%s`.",n));if(n>=t)throw new RangeError(it("invalid assignment. Must be less than %f. Value: `%f`.",t,n));r=n}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!y(n)||_(n))throw new TypeError(it("invalid assignment. Must be a number. Value: `%s`.",n));if(r>=n)throw new RangeError(it("invalid assignment. Must be greater than %f. Value: `%f`.",r,n));t=n}}),this}c(nt,"factory",(function(r,t){return _(r)||_(t)||r>=t?Qr(NaN):function(n){var e;if(_(n))return NaN;if(0===n)return 1;return e=tt(n*t)-tt(n*r),e/=n*(t-r)}})),c(et,"factory",(function(r,t){return _(r)||_(t)||r>=t?Qr(NaN):function(n){if(_(n))return NaN;if(n<r||n>t)return 0;return 1/(t-r)}})),c(ut,"factory",(function(r,t){return _(r)||_(t)||r>=t?Qr(NaN):function(n){if(_(n)||n<0||n>1)return NaN;return r+n*(t-r)}})),l(ot.prototype,"entropy",(function(){return r=this.a,t=this.b,r>=t?NaN:er(t-r);var r,t})),l(ot.prototype,"kurtosis",(function(){return r=this.a,t=this.b,_(r)||_(t)||r>=t?NaN:-1.2;var r,t})),l(ot.prototype,"mean",(function(){return r=this.a,t=this.b,r>=t?NaN:.5*(r+t);var r,t})),l(ot.prototype,"median",(function(){return r=this.a,t=this.b,r>=t?NaN:.5*(r+t);var r,t})),l(ot.prototype,"skewness",(function(){return r=this.a,t=this.b,_(r)||_(t)||r>=t?NaN:0;var r,t})),l(ot.prototype,"stdev",(function(){return r=this.a,t=this.b,r>=t?NaN:ir*(t-r);var r,t})),l(ot.prototype,"variance",(function(){return r=this.a,t=this.b,r>=t?NaN:1/12*Jr(t-r,2);var r,t})),c(ot.prototype,"cdf",(function(r){return Kr(r,this.a,this.b)})),c(ot.prototype,"logcdf",(function(r){return Xr(r,this.a,this.b)})),c(ot.prototype,"logpdf",(function(r){return Zr(r,this.a,this.b)})),c(ot.prototype,"mgf",(function(r){return nt(r,this.a,this.b)})),c(ot.prototype,"pdf",(function(r){return et(r,this.a,this.b)})),c(ot.prototype,"quantile",(function(r){return ut(r,this.a,this.b)}));export{ot as default};
//# sourceMappingURL=mod.js.map
