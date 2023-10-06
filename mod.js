// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function N(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,d,"$1e"),e=l.call(e,b,"e"),e=l.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,v,"e+0$1"),e=l.call(e,y,"e-0$1"),r.alternate&&(e=l.call(e,h,"$1."),e=l.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):s.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+m(e):m(e)+r}var E=String.fromCharCode,_=isNaN,I=Array.isArray;function U(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function H(r){var n,t,e,a,o,c,s,p,l;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(n=void 0!==e.precision,!(e=U(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,_(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!_(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(o)?String(e.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=N(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function k(r){var n,t,e,i;for(t=[],i=0,e=S.exec(r);e;)(n=r.slice(i,S.lastIndex-e[0].length)).length&&t.push(n),t.push(x(e)),i=S.lastIndex,e=S.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function j(r){return"string"==typeof r}function F(r){var n,t,e;if(!j(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=k(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return H.apply(null,t)}var O=Object.prototype,T=O.toString,G=O.__defineGetter__,V=O.__defineSetter__,W=O.__lookupGetter__,L=O.__lookupSetter__;var R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(r,n)||L.call(r,n)?(e=r.__proto__,r.__proto__=O,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(r,n,t.get),o&&V&&V.call(r,n,t.set),r};function $(r,n,t){R(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r,n,t){R(r,n,{configurable:!1,enumerable:!1,get:t})}function P(r){return"number"==typeof r}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return D&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=M()?function(r){var n,t,e,i,a;if(null==r)return Z.call(r);t=r[Y],a=Y,n=null!=(i=r)&&q.call(i,a);try{r[Y]=void 0}catch(n){return Z.call(r)}return e=Z.call(r),n?r[Y]=t:delete r[Y],e}:function(r){return Z.call(r)},B=Number,J=B.prototype.toString;var K=M();function Q(r){return"object"==typeof r&&(r instanceof B||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function rr(r){return P(r)||Q(r)}function nr(r){return r!=r}$(rr,"isPrimitive",P),$(rr,"isObject",Q);var tr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var ir,ar="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,n,t;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(tr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,ur="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var cr,sr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,n,t;if("function"!=typeof fr)return!1;try{n=new fr([1,3.14,-3.14,NaN]),t=n,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr=cr,lr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var yr,hr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,n,t;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,256,257]),t=n,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var gr=yr,wr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var dr,Nr="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,n,t;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,65536,65537]),t=n,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var mr,Ar=dr,Er={uint16:Ar,uint8:gr};(mr=new Er.uint16(1))[0]=4660;var _r=52===new Er.uint8(mr.buffer)[0],Ir=!0===_r?1:0,Ur=new pr(1),Hr=new or(Ur.buffer);function Sr(r){return Ur[0]=r,Hr[Ir]}var xr=!0===_r?1:0,kr=new pr(1),jr=new or(kr.buffer);var Fr=B.NEGATIVE_INFINITY;var Or=.6931471803691238,Tr=1.9082149292705877e-10;function Gr(r){var n,t,e,i,a,o,u,f,c,s,p,l;return 0===r?Fr:nr(r)||r<0?NaN:(a=0,(t=Sr(r))<1048576&&(a-=54,t=Sr(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-1023|0,a+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,n){return kr[0]=r,jr[xr]=n>>>0,kr[0]}(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===a?0:a*Or+a*Tr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Or-(o-a*Tr-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Or-(n-(s*(n+o)+a*Tr)-u)):0===a?u-s*(u-o):a*Or-(s*(u-o)-a*Tr-u))))}var Vr=(0,Math.sqrt)(1/12);var Wr=Math.floor;function Lr(r){return Wr(r)===r}function Rr(r){return Lr(r/2)}function $r(r){return Rr(r>0?r-1:r+1)}var Cr=Number.POSITIVE_INFINITY;function Pr(r){return r===Cr||r===Fr}var Dr=Math.sqrt;function Mr(r){return Math.abs(r)}var Zr,qr={uint16:Ar,uint8:gr};Zr=function(){var r;return(r=new qr.uint16(1))[0]=4660,52===new qr.uint8(r.buffer)[0]}();var Xr,Yr,zr=Zr;!0===zr?(Xr=1,Yr=0):(Xr=0,Yr=1);var Br={HIGH:Xr,LOW:Yr},Jr=new pr(1),Kr=new or(Jr.buffer),Qr=Br.HIGH,rn=Br.LOW;function nn(r,n,t,e){return Jr[0]=r,n[e]=Kr[Qr],n[e+t]=Kr[rn],n}function tn(r){return nn(r,[0,0],1,0)}$(tn,"assign",nn);var en=!0===zr?0:1,an=new pr(1),on=new or(an.buffer);function un(r,n){return an[0]=r,on[en]=n>>>0,an[0]}function fn(r){return 0|r}var cn,sn,pn=!0===zr?1:0,ln=new pr(1),vn=new or(ln.buffer);function yn(r){return ln[0]=r,vn[pn]}!0===zr?(cn=1,sn=0):(cn=0,sn=1);var hn={HIGH:cn,LOW:sn},gn=new pr(1),wn=new or(gn.buffer),bn=hn.HIGH,dn=hn.LOW;function Nn(r,n){return wn[bn]=r,wn[dn]=n,gn[0]}var mn=[0,0];function An(r,n){var t,e;return tn.assign(r,mn,1,0),t=mn[0],t&=2147483647,e=yn(n),Nn(t|=e&=2147483648,mn[1])}var En=!0===zr?1:0,_n=new pr(1),In=new or(_n.buffer);function Un(r,n){return _n[0]=r,In[En]=n>>>0,_n[0]}var Hn=[1,1.5],Sn=[0,.5849624872207642],xn=[0,1.350039202129749e-8];function kn(r,n,t,e){return nr(r)||Pr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Mr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}$((function(r){return kn(r,[0,0],1,0)}),"assign",kn);var jn=[0,0],Fn=[0,0];function On(r,n){var t,e;return 0===n||0===r||nr(r)||Pr(r)?r:(kn(r,jn,1,0),n+=jn[1],n+=function(r){var n=yn(r);return(n=(2146435072&n)>>>20)-1023|0}(r=jn[0]),n<-1074?An(0,r):n>1023?r<0?Fr:Cr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tn.assign(r,Fn,1,0),t=Fn[0],t&=2148532223,e*Nn(t|=n+1023<<20,Fn[1])))}var Tn=1e300,Gn=1e-300,Vn=[0,0],Wn=[0,0];function Ln(r,n){var t,e,i,a,o,u,f,c,s,p,l,v,y,h;if(nr(r)||nr(n))return NaN;if(tn.assign(n,Vn,1,0),o=Vn[0],0===Vn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Dr(r);if(-.5===n)return 1/Dr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Pr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Mr(r)<1==(n===Cr)?0:Cr}(r,n)}if(tn.assign(r,Vn,1,0),a=Vn[0],0===Vn[1]){if(0===a)return function(r,n){return n===Fr?Cr:n===Cr?0:n>0?$r(n)?r:0:$r(n)?An(Cr,r):Cr}(r,n);if(1===r)return 1;if(-1===r&&$r(n))return-1;if(Pr(r))return r===Fr?Ln(-0,-n):n<0?0:Cr}if(r<0&&!1===Lr(n))return(r-r)/(r-r);if(i=Mr(r),t=2147483647&a|0,e=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&$r(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&yn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Tn*Tn:u*Gn*Gn;if(t>1072693248)return 0===f?u*Tn*Tn:u*Gn*Gn;l=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=un(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(Wn,i)}else l=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,v,y,h,g,w,b,d,N,m,A,E;return N=0,t<1048576&&(N-=53,t=yn(n*=9007199254740992)),N+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?A=0:m<767610?A=1:(A=0,N+=1,t-=1048576),o=un(i=(b=(n=Un(n,t))-(c=Hn[A]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),f=Un(0,e+=A<<18),w=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=un(f=3+(a=o*o)+(w+=(u=d*(b-o*f-o*(n-(f-c))))*(o+i)),0),h=(v=-7.028461650952758e-9*(p=un(p=(b=o*f)+(d=u*f+(w-(f-3-a))*i),0))+.9617966939259756*(d-(p-b))+xn[A])-((y=un(y=(l=.9617967009544373*p)+v+(s=Sn[A])+(g=N),0))-g-s-l),r[0]=y,r[1]=h,r}(Wn,i,t);if(v=(p=(n-(c=un(n,0)))*l[0]+n*l[1])+(s=c*l[0]),tn.assign(v,Vn,1,0),y=fn(Vn[0]),h=fn(Vn[1]),y>=1083179008){if(0!=(y-1083179008|h))return u*Tn*Tn;if(p+8008566259537294e-32>v-s)return u*Tn*Tn}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|h))return u*Gn*Gn;if(p<=v-s)return u*Gn*Gn}return v=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,v;return l=((p=2147483647&r|0)>>20)-1023|0,s=0,p>1071644672&&(e=((s=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-l>>>0,r<0&&(s=-s),n-=a=Un(0,e)),r=fn(r=yn(c=1-((c=(o=.6931471824645996*(a=un(a=t+n,0)))+(u=.6931471805599453*(t-(a-n))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(v=a)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?On(c,s):Un(c,r)}(y,s,p),u*v}function Rn(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n?0:r>=t?1:(r-n)/(t-n)}$(Rn,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){if(nr(t))return NaN;if(t<r)return 0;if(t>=n)return 1;return(t-r)/(n-r)};var t}));var $n,Cn={uint16:Ar,uint8:gr};$n=function(){var r;return(r=new Cn.uint16(1))[0]=4660,52===new Cn.uint8(r.buffer)[0]}();var Pn=$n,Dn=!0===Pn?1:0,Mn=new pr(1),Zn=new or(Mn.buffer);function qn(r){return Mn[0]=r,Zn[Dn]}var Xn=!0===Pn?1:0,Yn=new pr(1),zn=new or(Yn.buffer);var Bn=.6931471803691238,Jn=1.9082149292705877e-10;function Kn(r){var n,t,e,i,a,o,u,f,c,s,p,l;return 0===r?Fr:nr(r)||r<0?NaN:(a=0,(t=qn(r))<1048576&&(a-=54,t=qn(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-1023|0,a+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,n){return Yn[0]=r,zn[Xn]=n>>>0,Yn[0]}(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===a?0:a*Bn+a*Jn:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Bn-(o-a*Jn-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Bn-(n-(s*(n+o)+a*Jn)-u)):0===a?u-s*(u-o):a*Bn-(s*(u-o)-a*Jn-u))))}function Qn(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n?Fr:r>=t?0:Kn((r-n)/(t-n))}$(Qn,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){if(nr(t))return NaN;if(t<r)return Fr;if(t>=n)return 0;return Kn((t-r)/(n-r))};var t}));var rt,nt={uint16:Ar,uint8:gr};rt=function(){var r;return(r=new nt.uint16(1))[0]=4660,52===new nt.uint8(r.buffer)[0]}();var tt=rt,et=!0===tt?1:0,it=new pr(1),at=new or(it.buffer);function ot(r){return it[0]=r,at[et]}var ut=!0===tt?1:0,ft=new pr(1),ct=new or(ft.buffer);var st=.6931471803691238,pt=1.9082149292705877e-10;function lt(r){var n,t,e,i,a,o,u,f,c,s,p,l;return 0===r?Fr:nr(r)||r<0?NaN:(a=0,(t=ot(r))<1048576&&(a-=54,t=ot(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-1023|0,a+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,n){return ft[0]=r,ct[ut]=n>>>0,ft[0]}(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===a?0:a*st+a*pt:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*st-(o-a*pt-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*st-(n-(s*(n+o)+a*pt)-u)):0===a?u-s*(u-o):a*st-(s*(u-o)-a*pt-u))))}function vt(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n||r>t?Fr:-lt(t-n)}$(vt,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){if(nr(t))return NaN;if(t<r||t>n)return Fr;return-lt(n-r)};var t}));var yt=Math.ceil;function ht(r){return r<0?yt(r):Wr(r)}function gt(r){return r===Cr||r===Fr}var wt,bt={uint16:Ar,uint8:gr};wt=function(){var r;return(r=new bt.uint16(1))[0]=4660,52===new bt.uint8(r.buffer)[0]}();var dt,Nt,mt=wt;!0===mt?(dt=1,Nt=0):(dt=0,Nt=1);var At={HIGH:dt,LOW:Nt},Et=new pr(1),_t=new or(Et.buffer),It=At.HIGH,Ut=At.LOW;function Ht(r,n,t,e){return Et[0]=r,n[e]=_t[It],n[e+t]=_t[Ut],n}function St(r){return Ht(r,[0,0],1,0)}$(St,"assign",Ht);var xt,kt,jt=!0===mt?1:0,Ft=new pr(1),Ot=new or(Ft.buffer);function Tt(r){return Ft[0]=r,Ot[jt]}!0===mt?(xt=1,kt=0):(xt=0,kt=1);var Gt={HIGH:xt,LOW:kt},Vt=new pr(1),Wt=new or(Vt.buffer),Lt=Gt.HIGH,Rt=Gt.LOW;function $t(r,n){return Wt[Lt]=r,Wt[Rt]=n,Vt[0]}var Ct=[0,0];function Pt(r,n,t,e){return nr(r)||gt(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}$((function(r){return Pt(r,[0,0],1,0)}),"assign",Pt);var Dt=[0,0],Mt=[0,0];function Zt(r,n){var t,e,i,a,o,u;return 0===n||0===r||nr(r)||gt(r)?r:(Pt(r,Dt,1,0),n+=Dt[1],n+=function(r){var n=Tt(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Dt[0]),n<-1074?(i=0,a=r,St.assign(i,Ct,1,0),o=Ct[0],o&=2147483647,u=Tt(a),$t(o|=u&=2147483648,Ct[1])):n>1023?r<0?Fr:Cr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,St.assign(r,Mt,1,0),t=Mt[0],t&=2148532223,e*$t(t|=n+1023<<20,Mt[1])))}function qt(r){var n;return nr(r)||r===Cr?r:r===Fr?0:r>709.782712893384?Cr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,i,a,o;return Zt(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=ht(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Xt(r,n,t){var e;return nr(r)||nr(n)||nr(t)||n>=t?NaN:0===r?1:(e=qt(r*t)-qt(r*n),e/=r*(t-n))}function Yt(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n||r>t?0:1/(t-n)}function zt(r,n,t){return nr(n)||nr(t)||n>=t||nr(r)||r<0||r>1?NaN:n+r*(t-n)}function Bt(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function Jt(){var r,n;if(!(this instanceof Jt))return 0===arguments.length?new Jt:new Jt(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!P(r=arguments[0])||nr(r))throw new TypeError(Bt("19D8a,H5",r));if(!P(n)||nr(n))throw new TypeError(Bt("19D8b,H6",n));if(r>=n)throw new RangeError(Bt("19DH7",r,n))}else r=0,n=1;return R(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!P(t)||nr(t))throw new TypeError(Bt("19D8d,H8",t));if(t>=n)throw new RangeError(Bt("19D8e,H9",n,t));r=t}}),R(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!P(t)||nr(t))throw new TypeError(Bt("19D8d,H8",t));if(r>=t)throw new RangeError(Bt("19D8f,HA",r,t));n=t}}),this}$(Xt,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){var e;if(nr(t))return NaN;if(0===t)return 1;return e=qt(t*n)-qt(t*r),e/=t*(n-r)};var t})),$(Yt,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){if(nr(t))return NaN;if(t<r||t>n)return 0;return 1/(n-r)};var t})),$(zt,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){if(nr(t)||t<0||t>1)return NaN;return r+t*(n-r)};var t})),C(Jt.prototype,"entropy",(function(){return r=this.a,n=this.b,r>=n?NaN:Gr(n-r);var r,n})),C(Jt.prototype,"kurtosis",(function(){return r=this.a,n=this.b,nr(r)||nr(n)||r>=n?NaN:-1.2;var r,n})),C(Jt.prototype,"mean",(function(){return r=this.a,n=this.b,r>=n?NaN:.5*(r+n);var r,n})),C(Jt.prototype,"median",(function(){return r=this.a,n=this.b,r>=n?NaN:.5*(r+n);var r,n})),C(Jt.prototype,"skewness",(function(){return r=this.a,n=this.b,nr(r)||nr(n)||r>=n?NaN:0;var r,n})),C(Jt.prototype,"stdev",(function(){return r=this.a,n=this.b,r>=n?NaN:Vr*(n-r);var r,n})),C(Jt.prototype,"variance",(function(){return r=this.a,n=this.b,r>=n?NaN:1/12*Ln(n-r,2);var r,n})),$(Jt.prototype,"cdf",(function(r){return Rn(r,this.a,this.b)})),$(Jt.prototype,"logcdf",(function(r){return Qn(r,this.a,this.b)})),$(Jt.prototype,"logpdf",(function(r){return vt(r,this.a,this.b)})),$(Jt.prototype,"mgf",(function(r){return Xt(r,this.a,this.b)})),$(Jt.prototype,"pdf",(function(r){return Yt(r,this.a,this.b)})),$(Jt.prototype,"quantile",(function(r){return zt(r,this.a,this.b)}));export{Jt as default};
//# sourceMappingURL=mod.js.map
