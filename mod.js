// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,y=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,s=/e\+(\d)$/,v=/e-(\d)$/,w=/^(\d+)$/,h=/^(\d+)e/,A=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function g(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,b,"$1e"),e=l.call(e,d,"e"),e=l.call(e,A,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,s,"e+0$1"),e=l.call(e,v,"e-0$1"),r.alternate&&(e=l.call(e,w,"$1."),e=l.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):y.call(e)}function U(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function N(r,n,t){var e=n-r.length;return e<0?r:r=t?r+U(e):U(e)+r}var m=String.fromCharCode,E=isNaN,F=Array.isArray;function I(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function j(r){var n,t,e,o,a,c,y,p,l;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",y=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(n=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(y=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[y],10),y+=1,E(e.width))throw new TypeError("the argument for * width at position "+y+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[y],10),y+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+y+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[y],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=g(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=N(e.arg,e.width,e.padRight)),c+=e.arg||"",y+=1}return c}var _=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function H(r){var n,t,e,i;for(t=[],i=0,e=_.exec(r);e;)(n=r.slice(i,_.lastIndex-e[0].length)).length&&t.push(n),t.push(T(e)),i=_.lastIndex,e=_.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function S(r){return"string"==typeof r}function x(r){var n,t,e;if(!S(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=H(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return j.apply(null,t)}var k=Object.prototype,O=k.toString,V=k.__defineGetter__,G=k.__defineSetter__,W=k.__lookupGetter__,L=k.__lookupSetter__;var R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(r,n)||L.call(r,n)?(e=r.__proto__,r.__proto__=k,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,n,t.get),a&&G&&G.call(r,n,t.set),r};function $(r,n,t){R(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function P(r,n,t){R(r,n,{configurable:!1,enumerable:!1,get:t})}function C(r){return"number"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return M&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,X="function"==typeof q?q.toStringTag:"";var z=D()?function(r){var n,t,e,i,o;if(null==r)return Y.call(r);t=r[X],o=X,n=null!=(i=r)&&Z.call(i,o);try{r[X]=void 0}catch(n){return Y.call(r)}return e=Y.call(r),n?r[X]=t:delete r[X],e}:function(r){return Y.call(r)},B=Number,J=B.prototype.toString;var K=D();function Q(r){return"object"==typeof r&&(r instanceof B||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function rr(r){return C(r)||Q(r)}function nr(r){return r!=r}$(rr,"isPrimitive",C),$(rr,"isObject",Q);var tr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var ir,or="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,n,t;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(tr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ar=ir,ur="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var cr,yr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,n,t;if("function"!=typeof fr)return!1;try{n=new fr([1,3.14,-3.14,NaN]),t=n,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var pr=cr,lr="function"==typeof Uint8Array;var sr="function"==typeof Uint8Array?Uint8Array:null;var vr,wr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,n,t;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,256,257]),t=n,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var hr=vr,Ar="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var br,gr="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ar&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var Ur,Nr={uint16:br,uint8:hr};(Ur=new Nr.uint16(1))[0]=4660;var mr=52===new Nr.uint8(Ur.buffer)[0],Er=!0===mr?1:0,Fr=new pr(1),Ir=new ar(Fr.buffer);function jr(r){return Fr[0]=r,Ir[Er]}var _r=!0===mr?1:0,Tr=new pr(1),Hr=new ar(Tr.buffer);var Sr=B.NEGATIVE_INFINITY;var xr=.6931471803691238,kr=1.9082149292705877e-10;function Or(r){var n,t,e,i,o,a,u,f,c,y,p,l;return 0===r?Sr:nr(r)||r<0?NaN:(o=0,(t=jr(r))<1048576&&(o-=54,t=jr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,n){return Tr[0]=r,Hr[_r]=n>>>0,Tr[0]}(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===o?0:o*xr+o*kr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*xr-(a-o*kr-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(y=u/(2+u))*y)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-y*(n+a)):o*xr-(n-(y*(n+a)+o*kr)-u)):0===o?u-y*(u-a):o*xr-(y*(u-a)-o*kr-u))))}var Vr=(0,Math.sqrt)(1/12);var Gr=Math.floor;function Wr(r){return Gr(r)===r}function Lr(r){return Wr(r/2)}function Rr(r){return Lr(r>0?r-1:r+1)}var $r=Number.POSITIVE_INFINITY,Pr=B.NEGATIVE_INFINITY;function Cr(r){return r===$r||r===Pr}var Mr=Math.sqrt;function Dr(r){return Math.abs(r)}var Yr="function"==typeof Uint32Array;var Zr="function"==typeof Uint32Array?Uint32Array:null;var qr,Xr="function"==typeof Uint32Array?Uint32Array:void 0;qr=function(){var r,n,t;if("function"!=typeof Zr)return!1;try{n=new Zr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Yr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var zr=qr,Br="function"==typeof Float64Array;var Jr="function"==typeof Float64Array?Float64Array:null;var Kr,Qr="function"==typeof Float64Array?Float64Array:void 0;Kr=function(){var r,n,t;if("function"!=typeof Jr)return!1;try{n=new Jr([1,3.14,-3.14,NaN]),t=n,r=(Br&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var rn=Kr,nn="function"==typeof Uint8Array;var tn="function"==typeof Uint8Array?Uint8Array:null;var en,on="function"==typeof Uint8Array?Uint8Array:void 0;en=function(){var r,n,t;if("function"!=typeof tn)return!1;try{n=new tn(n=[1,3.14,-3.14,256,257]),t=n,r=(nn&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?on:function(){throw new Error("not implemented")};var an=en,un="function"==typeof Uint16Array;var fn="function"==typeof Uint16Array?Uint16Array:null;var cn,yn="function"==typeof Uint16Array?Uint16Array:void 0;cn=function(){var r,n,t;if("function"!=typeof fn)return!1;try{n=new fn(n=[1,3.14,-3.14,65536,65537]),t=n,r=(un&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?yn:function(){throw new Error("not implemented")};var pn,ln={uint16:cn,uint8:an};pn=function(){var r;return(r=new ln.uint16(1))[0]=4660,52===new ln.uint8(r.buffer)[0]}();var sn,vn,wn=pn;!0===wn?(sn=1,vn=0):(sn=0,vn=1);var hn={HIGH:sn,LOW:vn},An=new rn(1),dn=new zr(An.buffer),bn=hn.HIGH,gn=hn.LOW;function Un(r,n,t,e){return An[0]=r,n[e]=dn[bn],n[e+t]=dn[gn],n}function Nn(r){return Un(r,[0,0],1,0)}$(Nn,"assign",Un);var mn=!0===wn?0:1,En=new rn(1),Fn=new zr(En.buffer);function In(r,n){return En[0]=r,Fn[mn]=n>>>0,En[0]}function jn(r){return 0|r}var _n,Tn,Hn=!0===wn?1:0,Sn=new rn(1),xn=new zr(Sn.buffer);function kn(r){return Sn[0]=r,xn[Hn]}!0===wn?(_n=1,Tn=0):(_n=0,Tn=1);var On={HIGH:_n,LOW:Tn},Vn=new rn(1),Gn=new zr(Vn.buffer),Wn=On.HIGH,Ln=On.LOW;function Rn(r,n){return Gn[Wn]=r,Gn[Ln]=n,Vn[0]}var $n=[0,0];function Pn(r,n){var t,e;return Nn.assign(r,$n,1,0),t=$n[0],t&=2147483647,e=kn(n),Rn(t|=e&=2147483648,$n[1])}var Cn=!0===wn?1:0,Mn=new rn(1),Dn=new zr(Mn.buffer);function Yn(r,n){return Mn[0]=r,Dn[Cn]=n>>>0,Mn[0]}var Zn=[1,1.5],qn=[0,.5849624872207642],Xn=[0,1.350039202129749e-8];function zn(r,n,t,e){return nr(r)||Cr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Dr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}$((function(r){return zn(r,[0,0],1,0)}),"assign",zn);var Bn=[0,0],Jn=[0,0];function Kn(r,n){var t,e;return 0===n||0===r||nr(r)||Cr(r)?r:(zn(r,Bn,1,0),n+=Bn[1],n+=function(r){var n=kn(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Bn[0]),n<-1074?Pn(0,r):n>1023?r<0?Pr:$r:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Nn.assign(r,Jn,1,0),t=Jn[0],t&=2148532223,e*Rn(t|=n+1023<<20,Jn[1])))}var Qn=1e300,rt=1e-300,nt=[0,0],tt=[0,0];function et(r,n){var t,e,i,o,a,u,f,c,y,p,l,s,v,w;if(nr(r)||nr(n))return NaN;if(Nn.assign(n,nt,1,0),a=nt[0],0===nt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Mr(r);if(-.5===n)return 1/Mr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Cr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Dr(r)<1==(n===$r)?0:$r}(r,n)}if(Nn.assign(r,nt,1,0),o=nt[0],0===nt[1]){if(0===o)return function(r,n){return n===Pr?$r:n===$r?0:n>0?Rr(n)?r:0:Rr(n)?Pn($r,r):$r}(r,n);if(1===r)return 1;if(-1===r&&Rr(n))return-1;if(Cr(r))return r===Pr?et(-0,-n):n<0?0:$r}if(r<0&&!1===Wr(n))return(r-r)/(r-r);if(i=Dr(r),t=2147483647&o|0,e=2147483647&a|0,f=a>>>31|0,u=(u=o>>>31|0)&&Rr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&kn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Qn*Qn:u*rt*rt;if(t>1072693248)return 0===f?u*Qn*Qn:u*rt*rt;l=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=In(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(tt,i)}else l=function(r,n,t){var e,i,o,a,u,f,c,y,p,l,s,v,w,h,A,d,b,g,U,N,m;return g=0,t<1048576&&(g-=53,t=kn(n*=9007199254740992)),g+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?N=0:U<767610?N=1:(N=0,g+=1,t-=1048576),a=In(i=(d=(n=Yn(n,t))-(c=Zn[N]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=Yn(0,e+=N<<18),A=(o=i*i)*o*(0===(m=o)?.5999999999999946:.5999999999999946+m*(.4285714285785502+m*(.33333332981837743+m*(.272728123808534+m*(.23066074577556175+.20697501780033842*m))))),f=In(f=3+(o=a*a)+(A+=(u=b*(d-a*f-a*(n-(f-c))))*(a+i)),0),w=(s=-7.028461650952758e-9*(p=In(p=(d=a*f)+(b=u*f+(A-(f-3-o))*i),0))+.9617966939259756*(b-(p-d))+Xn[N])-((v=In(v=(l=.9617967009544373*p)+s+(y=qn[N])+(h=g),0))-h-y-l),r[0]=v,r[1]=w,r}(tt,i,t);if(s=(p=(n-(c=In(n,0)))*l[0]+n*l[1])+(y=c*l[0]),Nn.assign(s,nt,1,0),v=jn(nt[0]),w=jn(nt[1]),v>=1083179008){if(0!=(v-1083179008|w))return u*Qn*Qn;if(p+8008566259537294e-32>s-y)return u*Qn*Qn}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|w))return u*rt*rt;if(p<=s-y)return u*rt*rt}return s=function(r,n,t){var e,i,o,a,u,f,c,y,p,l,s;return l=((p=2147483647&r|0)>>20)-1023|0,y=0,p>1071644672&&(e=((y=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&y)>>20)-1023|0)))>>>0,y=(1048575&y|1048576)>>20-l>>>0,r<0&&(y=-y),n-=o=Yn(0,e)),r=jn(r=kn(c=1-((c=(a=.6931471824645996*(o=In(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(i=c-(o=c*c)*(0===(s=o)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-a))+c*f)-c))),(r+=y<<20>>>0)>>20<=0?Kn(c,y):Yn(c,r)}(v,y,p),u*s}function it(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n?0:r>=t?1:(r-n)/(t-n)}$(it,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){if(nr(t))return NaN;if(t<r)return 0;if(t>=n)return 1;return(t-r)/(n-r)};var t}));var ot="function"==typeof Uint32Array;var at="function"==typeof Uint32Array?Uint32Array:null;var ut,ft="function"==typeof Uint32Array?Uint32Array:void 0;ut=function(){var r,n,t;if("function"!=typeof at)return!1;try{n=new at(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ot&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ft:function(){throw new Error("not implemented")};var ct=ut,yt="function"==typeof Float64Array;var pt="function"==typeof Float64Array?Float64Array:null;var lt,st="function"==typeof Float64Array?Float64Array:void 0;lt=function(){var r,n,t;if("function"!=typeof pt)return!1;try{n=new pt([1,3.14,-3.14,NaN]),t=n,r=(yt&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?st:function(){throw new Error("not implemented")};var vt=lt,wt="function"==typeof Uint8Array;var ht="function"==typeof Uint8Array?Uint8Array:null;var At,dt="function"==typeof Uint8Array?Uint8Array:void 0;At=function(){var r,n,t;if("function"!=typeof ht)return!1;try{n=new ht(n=[1,3.14,-3.14,256,257]),t=n,r=(wt&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dt:function(){throw new Error("not implemented")};var bt=At,gt="function"==typeof Uint16Array;var Ut="function"==typeof Uint16Array?Uint16Array:null;var Nt,mt="function"==typeof Uint16Array?Uint16Array:void 0;Nt=function(){var r,n,t;if("function"!=typeof Ut)return!1;try{n=new Ut(n=[1,3.14,-3.14,65536,65537]),t=n,r=(gt&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mt:function(){throw new Error("not implemented")};var Et,Ft={uint16:Nt,uint8:bt};Et=function(){var r;return(r=new Ft.uint16(1))[0]=4660,52===new Ft.uint8(r.buffer)[0]}();var It=Et,jt=!0===It?1:0,_t=new vt(1),Tt=new ct(_t.buffer);function Ht(r){return _t[0]=r,Tt[jt]}var St=!0===It?1:0,xt=new vt(1),kt=new ct(xt.buffer);var Ot=B.NEGATIVE_INFINITY;var Vt=.6931471803691238,Gt=1.9082149292705877e-10;function Wt(r){var n,t,e,i,o,a,u,f,c,y,p,l;return 0===r?Ot:nr(r)||r<0?NaN:(o=0,(t=Ht(r))<1048576&&(o-=54,t=Ht(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,n){return xt[0]=r,kt[St]=n>>>0,xt[0]}(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===o?0:o*Vt+o*Gt:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Vt-(a-o*Gt-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(y=u/(2+u))*y)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-y*(n+a)):o*Vt-(n-(y*(n+a)+o*Gt)-u)):0===o?u-y*(u-a):o*Vt-(y*(u-a)-o*Gt-u))))}function Lt(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n?Ot:r>=t?0:Wt((r-n)/(t-n))}$(Lt,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){if(nr(t))return NaN;if(t<r)return Ot;if(t>=n)return 0;return Wt((t-r)/(n-r))};var t}));var Rt="function"==typeof Uint32Array;var $t="function"==typeof Uint32Array?Uint32Array:null;var Pt,Ct="function"==typeof Uint32Array?Uint32Array:void 0;Pt=function(){var r,n,t;if("function"!=typeof $t)return!1;try{n=new $t(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Rt&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ct:function(){throw new Error("not implemented")};var Mt=Pt,Dt="function"==typeof Float64Array;var Yt="function"==typeof Float64Array?Float64Array:null;var Zt,qt="function"==typeof Float64Array?Float64Array:void 0;Zt=function(){var r,n,t;if("function"!=typeof Yt)return!1;try{n=new Yt([1,3.14,-3.14,NaN]),t=n,r=(Dt&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?qt:function(){throw new Error("not implemented")};var Xt=Zt,zt="function"==typeof Uint8Array;var Bt="function"==typeof Uint8Array?Uint8Array:null;var Jt,Kt="function"==typeof Uint8Array?Uint8Array:void 0;Jt=function(){var r,n,t;if("function"!=typeof Bt)return!1;try{n=new Bt(n=[1,3.14,-3.14,256,257]),t=n,r=(zt&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Kt:function(){throw new Error("not implemented")};var Qt=Jt,re="function"==typeof Uint16Array;var ne="function"==typeof Uint16Array?Uint16Array:null;var te,ee="function"==typeof Uint16Array?Uint16Array:void 0;te=function(){var r,n,t;if("function"!=typeof ne)return!1;try{n=new ne(n=[1,3.14,-3.14,65536,65537]),t=n,r=(re&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ee:function(){throw new Error("not implemented")};var ie,oe={uint16:te,uint8:Qt};ie=function(){var r;return(r=new oe.uint16(1))[0]=4660,52===new oe.uint8(r.buffer)[0]}();var ae=ie,ue=!0===ae?1:0,fe=new Xt(1),ce=new Mt(fe.buffer);function ye(r){return fe[0]=r,ce[ue]}var pe=!0===ae?1:0,le=new Xt(1),se=new Mt(le.buffer);var ve=B.NEGATIVE_INFINITY;var we=.6931471803691238,he=1.9082149292705877e-10;function Ae(r){var n,t,e,i,o,a,u,f,c,y,p,l;return 0===r?ve:nr(r)||r<0?NaN:(o=0,(t=ye(r))<1048576&&(o-=54,t=ye(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,n){return le[0]=r,se[pe]=n>>>0,le[0]}(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===o?0:o*we+o*he:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*we-(a-o*he-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(y=u/(2+u))*y)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-y*(n+a)):o*we-(n-(y*(n+a)+o*he)-u)):0===o?u-y*(u-a):o*we-(y*(u-a)-o*he-u))))}function de(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n||r>t?ve:-Ae(t-n)}$(de,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){if(nr(t))return NaN;if(t<r||t>n)return ve;return-Ae(n-r)};var t}));var be=Math.floor,ge=Math.ceil;function Ue(r){return r<0?ge(r):be(r)}var Ne=B.NEGATIVE_INFINITY,me=Number.POSITIVE_INFINITY;function Ee(r){return r===me||r===Ne}var Fe="function"==typeof Uint32Array;var Ie="function"==typeof Uint32Array?Uint32Array:null;var je,_e="function"==typeof Uint32Array?Uint32Array:void 0;je=function(){var r,n,t;if("function"!=typeof Ie)return!1;try{n=new Ie(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Fe&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_e:function(){throw new Error("not implemented")};var Te=je,He="function"==typeof Float64Array;var Se="function"==typeof Float64Array?Float64Array:null;var xe,ke="function"==typeof Float64Array?Float64Array:void 0;xe=function(){var r,n,t;if("function"!=typeof Se)return!1;try{n=new Se([1,3.14,-3.14,NaN]),t=n,r=(He&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ke:function(){throw new Error("not implemented")};var Oe=xe,Ve="function"==typeof Uint8Array;var Ge="function"==typeof Uint8Array?Uint8Array:null;var We,Le="function"==typeof Uint8Array?Uint8Array:void 0;We=function(){var r,n,t;if("function"!=typeof Ge)return!1;try{n=new Ge(n=[1,3.14,-3.14,256,257]),t=n,r=(Ve&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Le:function(){throw new Error("not implemented")};var Re=We,$e="function"==typeof Uint16Array;var Pe="function"==typeof Uint16Array?Uint16Array:null;var Ce,Me="function"==typeof Uint16Array?Uint16Array:void 0;Ce=function(){var r,n,t;if("function"!=typeof Pe)return!1;try{n=new Pe(n=[1,3.14,-3.14,65536,65537]),t=n,r=($e&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Me:function(){throw new Error("not implemented")};var De,Ye={uint16:Ce,uint8:Re};De=function(){var r;return(r=new Ye.uint16(1))[0]=4660,52===new Ye.uint8(r.buffer)[0]}();var Ze,qe,Xe=De;!0===Xe?(Ze=1,qe=0):(Ze=0,qe=1);var ze={HIGH:Ze,LOW:qe},Be=new Oe(1),Je=new Te(Be.buffer),Ke=ze.HIGH,Qe=ze.LOW;function ri(r,n,t,e){return Be[0]=r,n[e]=Je[Ke],n[e+t]=Je[Qe],n}function ni(r){return ri(r,[0,0],1,0)}$(ni,"assign",ri);var ti,ei,ii=!0===Xe?1:0,oi=new Oe(1),ai=new Te(oi.buffer);function ui(r){return oi[0]=r,ai[ii]}!0===Xe?(ti=1,ei=0):(ti=0,ei=1);var fi={HIGH:ti,LOW:ei},ci=new Oe(1),yi=new Te(ci.buffer),pi=fi.HIGH,li=fi.LOW;function si(r,n){return yi[pi]=r,yi[li]=n,ci[0]}var vi=[0,0];function wi(r,n,t,e){return nr(r)||Ee(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}$((function(r){return wi(r,[0,0],1,0)}),"assign",wi);var hi=[0,0],Ai=[0,0];function di(r,n){var t,e,i,o,a,u;return 0===n||0===r||nr(r)||Ee(r)?r:(wi(r,hi,1,0),n+=hi[1],n+=function(r){var n=ui(r);return(n=(2146435072&n)>>>20)-1023|0}(r=hi[0]),n<-1074?(i=0,o=r,ni.assign(i,vi,1,0),a=vi[0],a&=2147483647,u=ui(o),si(a|=u&=2147483648,vi[1])):n>1023?r<0?Ne:me:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ni.assign(r,Ai,1,0),t=Ai[0],t&=2148532223,e*si(t|=n+1023<<20,Ai[1])))}function bi(r){var n;return nr(r)||r===me?r:r===Ne?0:r>709.782712893384?me:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,i,o,a;return di(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=Ue(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function gi(r,n,t){var e;return nr(r)||nr(n)||nr(t)||n>=t?NaN:0===r?1:(e=bi(r*t)-bi(r*n),e/=r*(t-n))}function Ui(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n||r>t?0:1/(t-n)}function Ni(r,n,t){return nr(n)||nr(t)||n>=t||nr(r)||r<0||r>1?NaN:n+r*(t-n)}function mi(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function Ei(){var r,n;if(!(this instanceof Ei))return 0===arguments.length?new Ei:new Ei(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!C(r=arguments[0])||nr(r))throw new TypeError(mi("19D8a,H5",r));if(!C(n)||nr(n))throw new TypeError(mi("19D8b,H6",n));if(r>=n)throw new RangeError(mi("19DH7",r,n))}else r=0,n=1;return R(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!C(t)||nr(t))throw new TypeError(mi("19D8d,H8",t));if(t>=n)throw new RangeError(mi("19D8e,H9",n,t));r=t}}),R(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!C(t)||nr(t))throw new TypeError(mi("19D8d,H8",t));if(r>=t)throw new RangeError(mi("19D8f,HA",r,t));n=t}}),this}$(gi,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){var e;if(nr(t))return NaN;if(0===t)return 1;return e=bi(t*n)-bi(t*r),e/=t*(n-r)};var t})),$(Ui,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){if(nr(t))return NaN;if(t<r||t>n)return 0;return 1/(n-r)};var t})),$(Ni,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){if(nr(t)||t<0||t>1)return NaN;return r+t*(n-r)};var t})),P(Ei.prototype,"entropy",(function(){return r=this.a,n=this.b,r>=n?NaN:Or(n-r);var r,n})),P(Ei.prototype,"kurtosis",(function(){return r=this.a,n=this.b,nr(r)||nr(n)||r>=n?NaN:-1.2;var r,n})),P(Ei.prototype,"mean",(function(){return r=this.a,n=this.b,r>=n?NaN:.5*(r+n);var r,n})),P(Ei.prototype,"median",(function(){return r=this.a,n=this.b,r>=n?NaN:.5*(r+n);var r,n})),P(Ei.prototype,"skewness",(function(){return r=this.a,n=this.b,nr(r)||nr(n)||r>=n?NaN:0;var r,n})),P(Ei.prototype,"stdev",(function(){return r=this.a,n=this.b,r>=n?NaN:Vr*(n-r);var r,n})),P(Ei.prototype,"variance",(function(){return r=this.a,n=this.b,r>=n?NaN:1/12*et(n-r,2);var r,n})),$(Ei.prototype,"cdf",(function(r){return it(r,this.a,this.b)})),$(Ei.prototype,"logcdf",(function(r){return Lt(r,this.a,this.b)})),$(Ei.prototype,"logpdf",(function(r){return de(r,this.a,this.b)})),$(Ei.prototype,"mgf",(function(r){return gi(r,this.a,this.b)})),$(Ei.prototype,"pdf",(function(r){return Ui(r,this.a,this.b)})),$(Ei.prototype,"quantile",(function(r){return Ni(r,this.a,this.b)}));export{Ei as default};
//# sourceMappingURL=mod.js.map
