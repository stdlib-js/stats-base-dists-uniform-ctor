// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,v,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,h,"$1."),e=p.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function N(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var m=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,o,a,f,c,s,p,l,y,h,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,E(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,h=e.padRight,g=void 0,(g=y-l.length)<0?l:l=h?l+N(g):N(g)+l)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,n,e,i;for(n=[],i=0,e=S.exec(r);e;)(t=r.slice(i,S.lastIndex-e[0].length)).length&&n.push(t),n.push(I(e)),i=S.lastIndex,e=S.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function k(r){var t,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var x=Object.prototype,T=x.toString,F=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,R=x.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===T.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,t)||R.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,t,n.get),a&&O&&O.call(r,t,n.set),r};function G(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r,t,n){$(r,t,{configurable:!1,enumerable:!1,get:n})}function D(r){return"number"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function P(){return H&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,L=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof M?M.toStringTag:"",q=P()?function(r){var t,n,e,i,o;if(null==r)return W.call(r);n=r[Z],o=Z,t=null!=(i=r)&&L.call(i,o);try{r[Z]=void 0}catch(t){return W.call(r)}return e=W.call(r),t?r[Z]=n:delete r[Z],e}:function(r){return W.call(r)},X=Number,Y=X.prototype.toString,z=P();function B(r){return"object"==typeof r&&(r instanceof X||(z?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function J(r){return D(r)||B(r)}function K(r){return r!=r}G(J,"isPrimitive",D),G(J,"isObject",B);var Q,rr="function"==typeof Uint32Array,tr="function"==typeof Uint32Array?Uint32Array:null,nr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,t,n;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er,ir=Q,or="function"==typeof Float64Array,ar="function"==typeof Float64Array?Float64Array:null,ur="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,t,n;if("function"!=typeof ar)return!1;try{t=new ar([1,3.14,-3.14,NaN]),n=t,r=(or&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,cr=er,sr="function"==typeof Uint8Array,pr="function"==typeof Uint8Array?Uint8Array:null,lr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,256,257]),n=t,r=(sr&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var yr,hr=fr,gr="function"==typeof Uint16Array,dr="function"==typeof Uint16Array?Uint16Array:null,vr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(gr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var br,wr={uint16:yr,uint8:hr};(br=new wr.uint16(1))[0]=4660;var Nr=52===new wr.uint8(br.buffer)[0],mr=!0===Nr?1:0,Ar=new cr(1),Er=new ir(Ar.buffer);function _r(r){return Ar[0]=r,Er[mr]}var Ur=!0===Nr?1:0,Sr=new cr(1),Ir=new ir(Sr.buffer);function jr(r,t){return Sr[0]=r,Ir[Ur]=t>>>0,Sr[0]}var kr=1023,xr=X.NEGATIVE_INFINITY,Tr=.6931471803691238,Fr=1.9082149292705877e-10,Or=0x40000000000000,Vr=.3333333333333333,Rr=1048575,$r=2146435072,Gr=1048576,Cr=1072693248;function Dr(r){var t,n,e,i,o,a,u,f,c,s,p,l;return 0===r?xr:K(r)||r<0?NaN:(o=0,(n=_r(r))<Gr&&(o-=54,n=_r(r*=Or)),n>=$r?r+r:(o+=(n>>20)-kr|0,o+=(f=614244+(n&=Rr)&1048576|0)>>20|0,u=(r=jr(r,n|f^Cr))-1,(Rr&2+n)<3?0===u?0===o?0:o*Tr+o*Fr:(a=u*u*(.5-Vr*u),0===o?u-a:o*Tr-(a-o*Fr-u)):(f=n-398458|0,c=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(t=.5*u*u,0===o?u-(t-s*(t+a)):o*Tr-(t-(s*(t+a)+o*Fr)-u)):0===o?u-s*(u-a):o*Tr-(s*(u-a)-o*Fr-u))))}var Hr=Math.sqrt,Pr=Hr(1/12),Wr=Math.floor;function Lr(r){return Wr(r)===r}function Mr(r){return Lr(r/2)}function Zr(r){return Mr(r>0?r-1:r+1)}var qr,Xr,Yr=Number.POSITIVE_INFINITY;function zr(r){return r===Yr||r===xr}function Br(r){return Math.abs(r)}!0===Nr?(qr=1,Xr=0):(qr=0,Xr=1);var Jr={HIGH:qr,LOW:Xr},Kr=new cr(1),Qr=new ir(Kr.buffer),rt=Jr.HIGH,tt=Jr.LOW;function nt(r,t,n,e){return Kr[0]=r,t[e]=Qr[rt],t[e+n]=Qr[tt],t}function et(r){return nt(r,[0,0],1,0)}G(et,"assign",nt);var it=!0===Nr?0:1,ot=new cr(1),at=new ir(ot.buffer);function ut(r,t){return ot[0]=r,at[it]=t>>>0,ot[0]}function ft(r){return 0|r}var ct,st,pt=2147483647,lt=2147483648;!0===Nr?(ct=1,st=0):(ct=0,st=1);var yt={HIGH:ct,LOW:st},ht=new cr(1),gt=new ir(ht.buffer),dt=yt.HIGH,vt=yt.LOW;function bt(r,t){return gt[dt]=r,gt[vt]=t,ht[0]}var wt=[0,0];function Nt(r,t){var n,e;return et.assign(r,wt,1,0),n=wt[0],n&=pt,e=_r(t),bt(n|=e&=lt,wt[1])}var mt=1072693247,At=1e300,Et=1e-300,_t=1048575,Ut=1048576,St=1072693248,It=536870912,jt=524288,kt=20,xt=9007199254740992,Tt=.9617966939259756,Ft=.9617967009544373,Ot=-7.028461650952758e-9,Vt=[1,1.5],Rt=[0,.5849624872207642],$t=[0,1.350039202129749e-8],Gt=1.4426950408889634,Ct=1.4426950216293335,Dt=1.9259629911266175e-8,Ht=1023,Pt=-1023,Wt=-1074,Lt=22250738585072014e-324,Mt=4503599627370496;function Zt(r,t,n,e){return K(r)||zr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Br(r)<Lt?(t[e]=r*Mt,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}G((function(r){return Zt(r,[0,0],1,0)}),"assign",Zt);var qt=2146435072,Xt=2220446049250313e-31,Yt=2148532223,zt=[0,0],Bt=[0,0];function Jt(r,t){var n,e;return 0===t||0===r||K(r)||zr(r)?r:(Zt(r,zt,1,0),r=zt[0],t+=zt[1],t+=function(r){var t=_r(r);return(t=(t&qt)>>>20)-kr|0}(r),t<Wt?Nt(0,r):t>Ht?r<0?xr:Yr:(t<=Pt?(t+=52,e=Xt):e=1,et.assign(r,Bt,1,0),n=Bt[0],n&=Yt,e*bt(n|=t+kr<<20,Bt[1])))}var Kt=.6931471805599453,Qt=1048575,rn=1048576,tn=1071644672,nn=20,en=.6931471824645996,on=-1.904654299957768e-9,an=1072693247,un=1105199104,fn=1139802112,cn=1083179008,sn=1072693248,pn=1083231232,ln=3230714880,yn=31,hn=1e300,gn=1e-300,dn=8008566259537294e-32,vn=[0,0],bn=[0,0];function wn(r,t){var n,e,i,o,a,u,f,c,s,p,l,y,h,g;if(K(r)||K(t))return NaN;if(et.assign(t,vn,1,0),a=vn[0],0===vn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Hr(r);if(-.5===t)return 1/Hr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(zr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Br(r)<1==(t===Yr)?0:Yr}(r,t)}if(et.assign(r,vn,1,0),o=vn[0],0===vn[1]){if(0===o)return function(r,t){return t===xr?Yr:t===Yr?0:t>0?Zr(t)?r:0:Zr(t)?Nt(Yr,r):Yr}(r,t);if(1===r)return 1;if(-1===r&&Zr(t))return-1;if(zr(r))return r===xr?wn(-0,-t):t<0?0:Yr}if(r<0&&!1===Lr(t))return(r-r)/(r-r);if(i=Br(r),n=o&pt|0,e=a&pt|0,f=a>>>yn|0,u=(u=o>>>yn|0)&&Zr(t)?-1:1,e>un){if(e>fn)return function(r,t){return(_r(r)&pt)<=mt?t<0?At*At:Et*Et:t>0?At*At:Et*Et}(r,t);if(n<an)return 1===f?u*hn*hn:u*gn*gn;if(n>sn)return 0===f?u*hn*hn:u*gn*gn;l=function(r,t){var n,e,i,o,a,u,f;return o=(i=t-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Dt-o*Gt)-((e=ut(e=(a=Ct*i)+u,0))-a),r[0]=e,r[1]=n,r}(bn,i)}else l=function(r,t,n){var e,i,o,a,u,f,c,s,p,l,y,h,g,d,v,b,w,N,m,A,E;return N=0,n<Ut&&(N-=53,n=_r(t*=xt)),N+=(n>>kt)-kr|0,n=(m=n&_t|0)|St|0,m<=235662?A=0:m<767610?A=1:(A=0,N+=1,n-=Ut),a=ut(i=(b=(t=jr(t,n))-(c=Vt[A]))*(w=1/(t+c)),0),e=(n>>1|It)+jt,f=jr(0,e+=A<<18),v=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=ut(f=3+(o=a*a)+(v+=(u=w*(b-a*f-a*(t-(f-c))))*(a+i)),0),p=ut(p=(b=a*f)+(w=u*f+(v-(f-3-o))*i),0),l=Ft*p,g=(y=Ot*p+(w-(p-b))*Tt+$t[A])-((h=ut(h=l+y+(s=Rt[A])+(d=N),0))-d-s-l),r[0]=h,r[1]=g,r}(bn,i,n);if(y=(p=(t-(c=ut(t,0)))*l[0]+t*l[1])+(s=c*l[0]),et.assign(y,vn,1,0),h=ft(vn[0]),g=ft(vn[1]),h>=cn){if(0!=(h-cn|g))return u*hn*hn;if(p+dn>y-s)return u*hn*hn}else if((h&pt)>=pn){if(0!=(h-ln|g))return u*gn*gn;if(p<=y-s)return u*gn*gn}return y=function(r,t,n){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&pt|0)>>nn)-kr|0,c=0,s>tn&&(i=jr(0,((c=r+(rn>>p+1)>>>0)&~(Qt>>(p=((c&pt)>>nn)-kr|0)))>>>0),c=(c&Qt|rn)>>nn-p>>>0,r<0&&(c=-c),t-=i),r=ft(r=_r(f=1-((f=(o=(i=ut(i=n+t,0))*en)+(a=(n-(i-t))*Kt+i*on))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<nn>>>0)>>nn<=0?Jt(f,c):jr(f,r)}(h,s,p),u*y}function Nn(r,t,n){return K(r)||K(t)||K(n)||t>=n?NaN:r<t?0:r>=n?1:(r-t)/(n-t)}function mn(r){return function(){return r}}function An(r,t,n){return K(r)||K(t)||K(n)||t>=n?NaN:r<t?xr:r>=n?0:Dr((r-t)/(n-t))}function En(r,t,n){return K(r)||K(t)||K(n)||t>=n?NaN:r<t||r>n?xr:-Dr(n-t)}G(Nn,"factory",(function(r,t){return K(r)||K(t)||r>=t?mn(NaN):function(n){return K(n)?NaN:n<r?0:n>=t?1:(n-r)/(t-r)}})),G(An,"factory",(function(r,t){return K(r)||K(t)||r>=t?mn(NaN):function(n){return K(n)?NaN:n<r?xr:n>=t?0:Dr((n-r)/(t-r))}})),G(En,"factory",(function(r,t){return K(r)||K(t)||r>=t?mn(NaN):function(n){return K(n)?NaN:n<r||n>t?xr:-Dr(t-r)}}));var _n=Math.ceil;function Un(r){return r<0?_n(r):Wr(r)}var Sn=.6931471803691238,In=1.9082149292705877e-10,jn=1.4426950408889634,kn=709.782712893384,xn=-745.1332191019411,Tn=1/(1<<28),Fn=-Tn;function On(r){var t;return K(r)||r===Yr?r:r===xr?0:r>kn?Yr:r<xn?0:r>Fn&&r<Tn?1+r:function(r,t,n){var e,i,o,a;return Jt(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-(t=Un(r<0?jn*r-.5:jn*r+.5))*Sn,t*In,t)}function Vn(r,t,n){var e;return K(r)||K(t)||K(n)||t>=n?NaN:0===r?1:(e=On(r*n)-On(r*t),e/=r*(n-t))}function Rn(r,t,n){return K(r)||K(t)||K(n)||t>=n?NaN:r<t||r>n?0:1/(n-t)}function $n(r,t,n){return K(t)||K(n)||t>=n||K(r)||r<0||r>1?NaN:t+r*(n-t)}function Gn(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function Cn(){var r,t;if(!(this instanceof Cn))return 0===arguments.length?new Cn:new Cn(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!D(r=arguments[0])||K(r))throw new TypeError(Gn("19D8a",r));if(!D(t)||K(t))throw new TypeError(Gn("19D8b",t));if(r>=t)throw new RangeError(Gn("19DDV",r,t))}else r=0,t=1;return $(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!D(n)||K(n))throw new TypeError(Gn("19D8d",n));if(n>=t)throw new RangeError(Gn("19D8e",t,n));r=n}}),$(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!D(n)||K(n))throw new TypeError(Gn("19D8d",n));if(r>=n)throw new RangeError(Gn("19D8f",r,n));t=n}}),this}return G(Vn,"factory",(function(r,t){return K(r)||K(t)||r>=t?mn(NaN):function(n){var e;return K(n)?NaN:0===n?1:(e=On(n*t)-On(n*r),e/=n*(t-r))}})),G(Rn,"factory",(function(r,t){return K(r)||K(t)||r>=t?mn(NaN):function(n){return K(n)?NaN:n<r||n>t?0:1/(t-r)}})),G($n,"factory",(function(r,t){return K(r)||K(t)||r>=t?mn(NaN):function(n){return K(n)||n<0||n>1?NaN:r+n*(t-r)}})),C(Cn.prototype,"entropy",(function(){return r=this.a,t=this.b,r>=t?NaN:Dr(t-r);var r,t})),C(Cn.prototype,"kurtosis",(function(){return r=this.a,t=this.b,K(r)||K(t)||r>=t?NaN:-1.2;var r,t})),C(Cn.prototype,"mean",(function(){return r=this.a,t=this.b,r>=t?NaN:.5*(r+t);var r,t})),C(Cn.prototype,"median",(function(){return r=this.a,t=this.b,r>=t?NaN:.5*(r+t);var r,t})),C(Cn.prototype,"skewness",(function(){return r=this.a,t=this.b,K(r)||K(t)||r>=t?NaN:0;var r,t})),C(Cn.prototype,"stdev",(function(){return r=this.a,t=this.b,r>=t?NaN:Pr*(t-r);var r,t})),C(Cn.prototype,"variance",(function(){return r=this.a,t=this.b,r>=t?NaN:1/12*wn(t-r,2);var r,t})),G(Cn.prototype,"cdf",(function(r){return Nn(r,this.a,this.b)})),G(Cn.prototype,"logcdf",(function(r){return An(r,this.a,this.b)})),G(Cn.prototype,"logpdf",(function(r){return En(r,this.a,this.b)})),G(Cn.prototype,"mgf",(function(r){return Vn(r,this.a,this.b)})),G(Cn.prototype,"pdf",(function(r){return Rn(r,this.a,this.b)})),G(Cn.prototype,"quantile",(function(r){return $n(r,this.a,this.b)})),Cn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).Uniform=t();
//# sourceMappingURL=browser.js.map
