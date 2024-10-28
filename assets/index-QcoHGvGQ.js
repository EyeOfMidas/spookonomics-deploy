(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const ll="164",Vr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bm=0,Vu=1,km=2,Gu=1,Wu=2,yn=3,xn=0,ui=1,hi=2,Hn=0,Wr=1,cl=2,Xu=3,ju=4,zm=5,pr=100,Hm=101,Vm=102,Gm=103,Wm=104,Xm=200,jm=201,qm=202,Ym=203,ul=204,hl=205,Km=206,Zm=207,$m=208,Qm=209,Jm=210,eg=211,tg=212,ig=213,ng=214,rg=0,og=1,ag=2,Fa=3,sg=4,lg=5,cg=6,ug=7,qu=0,hg=1,dg=2,Vn=0,pg=1,fg=2,mg=3,gg=4,_g=5,vg=6,yg=7,Yu="attached",xg="detached",Ku=300,Xr=301,jr=302,Ba=303,dl=304,ka=306,qr=1e3,di=1001,za=1002,ii=1003,Zu=1004,Xo=1005,It=1006,Ha=1007,nn=1008,Gn=1009,Tg=1010,Mg=1011,$u=1012,Qu=1013,Yr=1014,Yt=1015,Ui=1016,Ju=1017,eh=1018,jo=1020,bg=35902,Sg=1021,wg=1022,Ni=1023,Eg=1024,Ag=1025,Kr=1026,qo=1027,pl=1028,th=1029,Rg=1030,ih=1031,nh=1033,fl=33776,ml=33777,gl=33778,_l=33779,rh=35840,oh=35841,ah=35842,sh=35843,lh=36196,ch=37492,uh=37496,hh=37808,dh=37809,ph=37810,fh=37811,mh=37812,gh=37813,_h=37814,vh=37815,yh=37816,xh=37817,Th=37818,Mh=37819,bh=37820,Sh=37821,vl=36492,wh=36494,Eh=36495,Cg=36283,Ah=36284,Rh=36285,Ch=36286,Yo=2300,Zr=2301,yl=2302,Ph=2400,Lh=2401,Ih=2402,Pg=2500,Lg=0,Uh=1,xl=2,Ig=3200,Ug=3201,Nh=0,Ng=1,Tn="",ni="srgb",Dt="srgb-linear",Tl="display-p3",Va="display-p3-linear",Ga="linear",St="srgb",Wa="rec709",Xa="p3",$r=7680,Dh=519,Dg=512,Og=513,Fg=514,Oh=515,Bg=516,kg=517,zg=518,Hg=519,Ml=35044,Vg=35048,Fh="300 es",Mn=2e3,ja=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bh=1234567;const Ko=Math.PI/180,Qr=180/Math.PI;function ji(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function bl(n,e){return(n%e+e)%e}function Gg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Wg(n,e,t){return n!==e?(t-n)/(e-n):0}function Zo(n,e,t){return(1-t)*n+t*e}function Xg(n,e,t,i){return Zo(n,e,1-Math.exp(-t*i))}function jg(n,e=1){return e-Math.abs(bl(n,e*2)-e)}function qg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zg(n,e){return n+Math.random()*(e-n)}function $g(n){return n*(.5-Math.random())}function Qg(n){n!==void 0&&(Bh=n);let e=Bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jg(n){return n*Ko}function e_(n){return n*Qr}function t_(n){return(n&n-1)===0&&n!==0}function i_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function n_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function r_(n,e,t,i,r){const o=Math.cos,a=Math.sin,s=o(t/2),c=a(t/2),u=o((e+i)/2),p=a((e+i)/2),l=o((e-i)/2),h=a((e-i)/2),d=o((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":n.set(s*p,c*l,c*h,s*u);break;case"YZY":n.set(c*h,s*p,c*l,s*u);break;case"ZXZ":n.set(c*l,c*h,s*p,s*u);break;case"XZX":n.set(s*p,c*f,c*d,s*u);break;case"YXY":n.set(c*d,s*p,c*f,s*u);break;case"ZYZ":n.set(c*f,c*d,s*p,s*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const kh={DEG2RAD:Ko,RAD2DEG:Qr,generateUUID:ji,clamp:Vt,euclideanModulo:bl,mapLinear:Gg,inverseLerp:Wg,lerp:Zo,damp:Xg,pingpong:jg,smoothstep:qg,smootherstep:Yg,randInt:Kg,randFloat:Zg,randFloatSpread:$g,seededRandom:Qg,degToRad:Jg,radToDeg:e_,isPowerOfTwo:t_,ceilPowerOfTwo:i_,floorPowerOfTwo:n_,setQuaternionFromProperEuler:r_,normalize:_t,denormalize:qi};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,r,o,a,s,c,u){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,c,u)}set(e,t,i,r,o,a,s,c,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=s,p[3]=t,p[4]=o,p[5]=c,p[6]=i,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[3],c=i[6],u=i[1],p=i[4],l=i[7],h=i[2],d=i[5],f=i[8],_=r[0],g=r[3],m=r[6],x=r[1],y=r[4],M=r[7],P=r[2],S=r[5],E=r[8];return o[0]=a*_+s*x+c*P,o[3]=a*g+s*y+c*S,o[6]=a*m+s*M+c*E,o[1]=u*_+p*x+l*P,o[4]=u*g+p*y+l*S,o[7]=u*m+p*M+l*E,o[2]=h*_+d*x+f*P,o[5]=h*g+d*y+f*S,o[8]=h*m+d*M+f*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],u=e[7],p=e[8];return t*a*p-t*s*u-i*o*p+i*s*c+r*o*u-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],u=e[7],p=e[8],l=p*a-s*u,h=s*c-p*o,d=u*o-a*c,f=t*l+i*h+r*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return e[0]=l*_,e[1]=(r*u-p*i)*_,e[2]=(s*i-r*a)*_,e[3]=h*_,e[4]=(p*t-r*c)*_,e[5]=(r*o-s*t)*_,e[6]=d*_,e[7]=(i*c-u*t)*_,e[8]=(a*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,s){const c=Math.cos(o),u=Math.sin(o);return this.set(i*c,i*u,-i*(c*a+u*s)+a+e,-r*u,r*c,-r*(-u*a+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Sl.makeScale(e,t)),this}rotate(e){return this.premultiply(Sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sl=new lt;function zh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function o_(){const n=$o("canvas");return n.style.display="block",n}const Hh={};function Vh(n){n in Hh||(Hh[n]=!0,console.warn(n))}const Gh=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wh=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qa={[Dt]:{transfer:Ga,primaries:Wa,toReference:n=>n,fromReference:n=>n},[ni]:{transfer:St,primaries:Wa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Va]:{transfer:Ga,primaries:Xa,toReference:n=>n.applyMatrix3(Wh),fromReference:n=>n.applyMatrix3(Gh)},[Tl]:{transfer:St,primaries:Xa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Wh),fromReference:n=>n.applyMatrix3(Gh).convertLinearToSRGB()}},a_=new Set([Dt,Va]),gt={enabled:!0,_workingColorSpace:Dt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!a_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=qa[e].toReference,r=qa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return qa[n].primaries},getTransfer:function(n){return n===Tn?Ga:qa[n].transfer}};function Jr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let eo;class s_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{eo===void 0&&(eo=$o("canvas")),eo.width=e.width,eo.height=e.height;const i=eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=eo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$o("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Jr(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jr(t[i]/255)*255):t[i]=Jr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l_=0;class Xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(El(r[a].image)):o.push(El(r[a]))}else o=El(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function El(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?s_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c_=0;class Ht extends fr{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=di,r=di,o=It,a=nn,s=Ni,c=Gn,u=Ht.DEFAULT_ANISOTROPY,p=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=ji(),this.name="",this.source=new Xh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null,Ht.DEFAULT_MAPPING=Ku,Ht.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const a=e.elements,s=a[0],c=a[4],u=a[8],p=a[1],l=a[5],h=a[9],d=a[2],f=a[6],_=a[10];if(Math.abs(c-p)<.01&&Math.abs(u-d)<.01&&Math.abs(h-f)<.01){if(Math.abs(c+p)<.1&&Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(s+l+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(s+1)/2,x=(l+1)/2,y=(_+1)/2,M=(c+p)/4,P=(u+d)/4,S=(h+f)/4;return m>x&&m>y?m<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(m),r=M/i,o=P/i):x>y?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=M/r,o=S/r):y<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(y),i=P/o,r=S/o),this.set(i,r,o,t),this}let g=Math.sqrt((f-h)*(f-h)+(u-d)*(u-d)+(p-c)*(p-c));return Math.abs(g)<.001&&(g=1),this.x=(f-h)/g,this.y=(u-d)/g,this.z=(p-c)/g,this.w=Math.acos((s+l+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u_ extends fr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends u_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jh extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class h_ extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,s){let c=i[r+0],u=i[r+1],p=i[r+2],l=i[r+3];const h=o[a+0],d=o[a+1],f=o[a+2],_=o[a+3];if(s===0){e[t+0]=c,e[t+1]=u,e[t+2]=p,e[t+3]=l;return}if(s===1){e[t+0]=h,e[t+1]=d,e[t+2]=f,e[t+3]=_;return}if(l!==_||c!==h||u!==d||p!==f){let g=1-s;const m=c*h+u*d+p*f+l*_,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const P=Math.sqrt(y),S=Math.atan2(P,m*x);g=Math.sin(g*S)/P,s=Math.sin(s*S)/P}const M=s*x;if(c=c*g+h*M,u=u*g+d*M,p=p*g+f*M,l=l*g+_*M,g===1-s){const P=1/Math.sqrt(c*c+u*u+p*p+l*l);c*=P,u*=P,p*=P,l*=P}}e[t]=c,e[t+1]=u,e[t+2]=p,e[t+3]=l}static multiplyQuaternionsFlat(e,t,i,r,o,a){const s=i[r],c=i[r+1],u=i[r+2],p=i[r+3],l=o[a],h=o[a+1],d=o[a+2],f=o[a+3];return e[t]=s*f+p*l+c*d-u*h,e[t+1]=c*f+p*h+u*l-s*d,e[t+2]=u*f+p*d+s*h-c*l,e[t+3]=p*f-s*l-c*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,c=Math.sin,u=s(i/2),p=s(r/2),l=s(o/2),h=c(i/2),d=c(r/2),f=c(o/2);switch(a){case"XYZ":this._x=h*p*l+u*d*f,this._y=u*d*l-h*p*f,this._z=u*p*f+h*d*l,this._w=u*p*l-h*d*f;break;case"YXZ":this._x=h*p*l+u*d*f,this._y=u*d*l-h*p*f,this._z=u*p*f-h*d*l,this._w=u*p*l+h*d*f;break;case"ZXY":this._x=h*p*l-u*d*f,this._y=u*d*l+h*p*f,this._z=u*p*f+h*d*l,this._w=u*p*l-h*d*f;break;case"ZYX":this._x=h*p*l-u*d*f,this._y=u*d*l+h*p*f,this._z=u*p*f-h*d*l,this._w=u*p*l+h*d*f;break;case"YZX":this._x=h*p*l+u*d*f,this._y=u*d*l+h*p*f,this._z=u*p*f-h*d*l,this._w=u*p*l-h*d*f;break;case"XZY":this._x=h*p*l-u*d*f,this._y=u*d*l-h*p*f,this._z=u*p*f+h*d*l,this._w=u*p*l+h*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],s=t[5],c=t[9],u=t[2],p=t[6],l=t[10],h=i+s+l;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(p-c)*d,this._y=(o-u)*d,this._z=(a-r)*d}else if(i>s&&i>l){const d=2*Math.sqrt(1+i-s-l);this._w=(p-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(o+u)/d}else if(s>l){const d=2*Math.sqrt(1+s-i-l);this._w=(o-u)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+p)/d}else{const d=2*Math.sqrt(1+l-i-s);this._w=(a-r)/d,this._x=(o+u)/d,this._y=(c+p)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,a=e._w,s=t._x,c=t._y,u=t._z,p=t._w;return this._x=i*p+a*s+r*u-o*c,this._y=r*p+a*c+o*s-i*u,this._z=o*p+a*u+i*c-r*s,this._w=a*p-i*s-r*c-o*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const c=1-s*s;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*o+t*this._z,this.normalize(),this}const u=Math.sqrt(c),p=Math.atan2(u,s),l=Math.sin((1-t)*p)/u,h=Math.sin(t*p)/u;return this._w=a*l+this._w*h,this._x=i*l+this._x*h,this._y=r*l+this._y*h,this._z=o*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,c=e.w,u=2*(a*r-s*i),p=2*(s*t-o*r),l=2*(o*i-a*t);return this.x=t+c*u+a*l-s*p,this.y=i+c*p+s*u-o*l,this.z=r+c*l+o*p-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,a=t.x,s=t.y,c=t.z;return this.x=r*c-o*s,this.y=o*a-i*c,this.z=i*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new O,qh=new yi;class bn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,Yi):Yi.fromBufferAttribute(o,a),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Ka.subVectors(this.max,Qo),to.subVectors(e.a,Qo),io.subVectors(e.b,Qo),no.subVectors(e.c,Qo),Wn.subVectors(io,to),Xn.subVectors(no,io),gr.subVectors(to,no);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-gr.z,gr.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,gr.z,0,-gr.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-gr.y,gr.x,0];return!Rl(t,to,io,no,Ka)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,to,io,no,Ka))?!1:(Za.crossVectors(Wn,Xn),t=[Za.x,Za.y,Za.z],Rl(t,to,io,no,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new O,new O,new O,new O,new O,new O,new O,new O],Yi=new O,Ya=new bn,to=new O,io=new O,no=new O,Wn=new O,Xn=new O,gr=new O,Qo=new O,Ka=new O,Za=new O,_r=new O;function Rl(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){_r.fromArray(n,o);const s=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),c=e.dot(_r),u=t.dot(_r),p=i.dot(_r);if(Math.max(-Math.max(c,u,p),Math.min(c,u,p))>s)return!1}return!0}const d_=new bn,Jo=new O,Cl=new O;class rn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):d_.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const t=Jo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(Cl)),this.expandByPoint(Jo.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new O,Pl=new O,$a=new O,jn=new O,Ll=new O,Qa=new O,Il=new O;class ro{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pl.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Pl);const o=e.distanceTo(t)*.5,a=-this.direction.dot($a),s=jn.dot(this.direction),c=-jn.dot($a),u=jn.lengthSq(),p=Math.abs(1-a*a);let l,h,d,f;if(p>0)if(l=a*c-s,h=a*s-c,f=o*p,l>=0)if(h>=-f)if(h<=f){const _=1/p;l*=_,h*=_,d=l*(l+a*h+2*s)+h*(a*l+h+2*c)+u}else h=o,l=Math.max(0,-(a*h+s)),d=-l*l+h*(h+2*c)+u;else h=-o,l=Math.max(0,-(a*h+s)),d=-l*l+h*(h+2*c)+u;else h<=-f?(l=Math.max(0,-(-a*o+s)),h=l>0?-o:Math.min(Math.max(-o,-c),o),d=-l*l+h*(h+2*c)+u):h<=f?(l=0,h=Math.min(Math.max(-o,-c),o),d=h*(h+2*c)+u):(l=Math.max(0,-(a*o+s)),h=l>0?o:Math.min(Math.max(-o,-c),o),d=-l*l+h*(h+2*c)+u);else h=a>0?-o:o,l=Math.max(0,-(a*h+s)),d=-l*l+h*(h+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,l),r&&r.copy(Pl).addScaledVector($a,h),d}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,c=i+a;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,s,c;const u=1/this.direction.x,p=1/this.direction.y,l=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),p>=0?(o=(e.min.y-h.y)*p,a=(e.max.y-h.y)*p):(o=(e.max.y-h.y)*p,a=(e.min.y-h.y)*p),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),l>=0?(s=(e.min.z-h.z)*l,c=(e.max.z-h.z)*l):(s=(e.max.z-h.z)*l,c=(e.min.z-h.z)*l),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,r,o){Ll.subVectors(t,e),Qa.subVectors(i,e),Il.crossVectors(Ll,Qa);let a=this.direction.dot(Il),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;jn.subVectors(this.origin,e);const c=s*this.direction.dot(Qa.crossVectors(jn,Qa));if(c<0)return null;const u=s*this.direction.dot(Ll.cross(jn));if(u<0||c+u>a)return null;const p=-s*jn.dot(Il);return p<0?null:this.at(p/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,i,r,o,a,s,c,u,p,l,h,d,f,_,g){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,c,u,p,l,h,d,f,_,g)}set(e,t,i,r,o,a,s,c,u,p,l,h,d,f,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=o,m[5]=a,m[9]=s,m[13]=c,m[2]=u,m[6]=p,m[10]=l,m[14]=h,m[3]=d,m[7]=f,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),o=1/oo.setFromMatrixColumn(e,1).length(),a=1/oo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),c=Math.cos(r),u=Math.sin(r),p=Math.cos(o),l=Math.sin(o);if(e.order==="XYZ"){const h=a*p,d=a*l,f=s*p,_=s*l;t[0]=c*p,t[4]=-c*l,t[8]=u,t[1]=d+f*u,t[5]=h-_*u,t[9]=-s*c,t[2]=_-h*u,t[6]=f+d*u,t[10]=a*c}else if(e.order==="YXZ"){const h=c*p,d=c*l,f=u*p,_=u*l;t[0]=h+_*s,t[4]=f*s-d,t[8]=a*u,t[1]=a*l,t[5]=a*p,t[9]=-s,t[2]=d*s-f,t[6]=_+h*s,t[10]=a*c}else if(e.order==="ZXY"){const h=c*p,d=c*l,f=u*p,_=u*l;t[0]=h-_*s,t[4]=-a*l,t[8]=f+d*s,t[1]=d+f*s,t[5]=a*p,t[9]=_-h*s,t[2]=-a*u,t[6]=s,t[10]=a*c}else if(e.order==="ZYX"){const h=a*p,d=a*l,f=s*p,_=s*l;t[0]=c*p,t[4]=f*u-d,t[8]=h*u+_,t[1]=c*l,t[5]=_*u+h,t[9]=d*u-f,t[2]=-u,t[6]=s*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*u,f=s*c,_=s*u;t[0]=c*p,t[4]=_-h*l,t[8]=f*l+d,t[1]=l,t[5]=a*p,t[9]=-s*p,t[2]=-u*p,t[6]=d*l+f,t[10]=h-_*l}else if(e.order==="XZY"){const h=a*c,d=a*u,f=s*c,_=s*u;t[0]=c*p,t[4]=-l,t[8]=u*p,t[1]=h*l+_,t[5]=a*p,t[9]=d*l-f,t[2]=f*l-d,t[6]=s*p,t[10]=_*l+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,f_)}lookAt(e,t,i){const r=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),qn.crossVectors(i,xi),qn.lengthSq()===0&&(Math.abs(i.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),qn.crossVectors(i,xi)),qn.normalize(),Ja.crossVectors(xi,qn),r[0]=qn.x,r[4]=Ja.x,r[8]=xi.x,r[1]=qn.y,r[5]=Ja.y,r[9]=xi.y,r[2]=qn.z,r[6]=Ja.z,r[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[4],c=i[8],u=i[12],p=i[1],l=i[5],h=i[9],d=i[13],f=i[2],_=i[6],g=i[10],m=i[14],x=i[3],y=i[7],M=i[11],P=i[15],S=r[0],E=r[4],C=r[8],T=r[12],b=r[1],k=r[5],X=r[9],F=r[13],Y=r[2],q=r[6],ie=r[10],ne=r[14],$=r[3],se=r[7],de=r[11],Pe=r[15];return o[0]=a*S+s*b+c*Y+u*$,o[4]=a*E+s*k+c*q+u*se,o[8]=a*C+s*X+c*ie+u*de,o[12]=a*T+s*F+c*ne+u*Pe,o[1]=p*S+l*b+h*Y+d*$,o[5]=p*E+l*k+h*q+d*se,o[9]=p*C+l*X+h*ie+d*de,o[13]=p*T+l*F+h*ne+d*Pe,o[2]=f*S+_*b+g*Y+m*$,o[6]=f*E+_*k+g*q+m*se,o[10]=f*C+_*X+g*ie+m*de,o[14]=f*T+_*F+g*ne+m*Pe,o[3]=x*S+y*b+M*Y+P*$,o[7]=x*E+y*k+M*q+P*se,o[11]=x*C+y*X+M*ie+P*de,o[15]=x*T+y*F+M*ne+P*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],c=e[9],u=e[13],p=e[2],l=e[6],h=e[10],d=e[14],f=e[3],_=e[7],g=e[11],m=e[15];return f*(+o*c*l-r*u*l-o*s*h+i*u*h+r*s*d-i*c*d)+_*(+t*c*d-t*u*h+o*a*h-r*a*d+r*u*p-o*c*p)+g*(+t*u*l-t*s*d-o*a*l+i*a*d+o*s*p-i*u*p)+m*(-r*s*p-t*c*l+t*s*h+r*a*l-i*a*h+i*c*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],u=e[7],p=e[8],l=e[9],h=e[10],d=e[11],f=e[12],_=e[13],g=e[14],m=e[15],x=l*g*u-_*h*u+_*c*d-s*g*d-l*c*m+s*h*m,y=f*h*u-p*g*u-f*c*d+a*g*d+p*c*m-a*h*m,M=p*_*u-f*l*u+f*s*d-a*_*d-p*s*m+a*l*m,P=f*l*c-p*_*c-f*s*h+a*_*h+p*s*g-a*l*g,S=t*x+i*y+r*M+o*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=x*E,e[1]=(_*h*o-l*g*o-_*r*d+i*g*d+l*r*m-i*h*m)*E,e[2]=(s*g*o-_*c*o+_*r*u-i*g*u-s*r*m+i*c*m)*E,e[3]=(l*c*o-s*h*o-l*r*u+i*h*u+s*r*d-i*c*d)*E,e[4]=y*E,e[5]=(p*g*o-f*h*o+f*r*d-t*g*d-p*r*m+t*h*m)*E,e[6]=(f*c*o-a*g*o-f*r*u+t*g*u+a*r*m-t*c*m)*E,e[7]=(a*h*o-p*c*o+p*r*u-t*h*u-a*r*d+t*c*d)*E,e[8]=M*E,e[9]=(f*l*o-p*_*o-f*i*d+t*_*d+p*i*m-t*l*m)*E,e[10]=(a*_*o-f*s*o+f*i*u-t*_*u-a*i*m+t*s*m)*E,e[11]=(p*s*o-a*l*o-p*i*u+t*l*u+a*i*d-t*s*d)*E,e[12]=P*E,e[13]=(p*_*r-f*l*r+f*i*h-t*_*h-p*i*g+t*l*g)*E,e[14]=(f*s*r-a*_*r-f*i*c+t*_*c+a*i*g-t*s*g)*E,e[15]=(a*l*r-p*s*r+p*i*c-t*l*c-a*i*h+t*s*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,s=e.y,c=e.z,u=o*a,p=o*s;return this.set(u*a+i,u*s-r*c,u*c+r*s,0,u*s+r*c,p*s+i,p*c-r*a,0,u*c-r*s,p*c+r*a,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,a=t._y,s=t._z,c=t._w,u=o+o,p=a+a,l=s+s,h=o*u,d=o*p,f=o*l,_=a*p,g=a*l,m=s*l,x=c*u,y=c*p,M=c*l,P=i.x,S=i.y,E=i.z;return r[0]=(1-(_+m))*P,r[1]=(d+M)*P,r[2]=(f-y)*P,r[3]=0,r[4]=(d-M)*S,r[5]=(1-(h+m))*S,r[6]=(g+x)*S,r[7]=0,r[8]=(f+y)*E,r[9]=(g-x)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=oo.set(r[0],r[1],r[2]).length();const a=oo.set(r[4],r[5],r[6]).length(),s=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ki.copy(this);const c=1/o,u=1/a,p=1/s;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=u,Ki.elements[5]*=u,Ki.elements[6]*=u,Ki.elements[8]*=p,Ki.elements[9]*=p,Ki.elements[10]*=p,t.setFromRotationMatrix(Ki),i.x=o,i.y=a,i.z=s,this}makePerspective(e,t,i,r,o,a,s=Mn){const c=this.elements,u=2*o/(t-e),p=2*o/(i-r),l=(t+e)/(t-e),h=(i+r)/(i-r);let d,f;if(s===Mn)d=-(a+o)/(a-o),f=-2*a*o/(a-o);else if(s===ja)d=-a/(a-o),f=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,o,a,s=Mn){const c=this.elements,u=1/(t-e),p=1/(i-r),l=1/(a-o),h=(t+e)*u,d=(i+r)*p;let f,_;if(s===Mn)f=(a+o)*l,_=-2*l;else if(s===ja)f=o*l,_=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*p,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oo=new O,Ki=new et,p_=new O(0,0,0),f_=new O(1,1,1),qn=new O,Ja=new O,xi=new O,Yh=new et,Kh=new yi;class _n{constructor(e=0,t=0,i=0,r=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],c=r[1],u=r[5],p=r[9],l=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-p,d),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(s,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,o),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-l,o)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-p,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m_=0;const Zh=new O,ao=new yi,En=new et,es=new O,ea=new O,g_=new O,__=new yi,$h=new O(1,0,0),Qh=new O(0,1,0),Jh=new O(0,0,1),ed={type:"added"},v_={type:"removed"},so={type:"childadded",child:null},Nl={type:"childremoved",child:null};class ct extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new O,t=new _n,i=new yi,r=new O(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new lt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?es.copy(e):es.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ea,es,this.up):En.lookAt(es,ea,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),ao.setFromRotationMatrix(En),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v_),Nl.child=e,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,__,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let u=0,p=c.length;u<p;u++){const l=c[u];o(e.shapes,l)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,u=this.material.length;c<u;c++)s.push(o(e.materials,this.material[c]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(o(e.animations,c))}}if(t){const s=a(e.geometries),c=a(e.materials),u=a(e.textures),p=a(e.images),l=a(e.shapes),h=a(e.skeletons),d=a(e.animations),f=a(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),p.length>0&&(i.images=p),l.length>0&&(i.shapes=l),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(s){const c=[];for(const u in s){const p=s[u];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ct.DEFAULT_UP=new O(0,1,0),ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new O,An=new O,Dl=new O,Rn=new O,lo=new O,co=new O,td=new O,Ol=new O,Fl=new O,Bl=new O;class vn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zi.subVectors(e,t),r.cross(Zi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Zi.subVectors(r,t),An.subVectors(i,t),Dl.subVectors(e,t);const a=Zi.dot(Zi),s=Zi.dot(An),c=Zi.dot(Dl),u=An.dot(An),p=An.dot(Dl),l=a*u-s*s;if(l===0)return o.set(0,0,0),null;const h=1/l,d=(u*c-s*p)*h,f=(a*p-s*c)*h;return o.set(1-d-f,f,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,i,r,o,a,s,c){return this.getBarycoord(e,t,i,r,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Rn.x),c.addScaledVector(a,Rn.y),c.addScaledVector(s,Rn.z),c)}static isFrontFacing(e,t,i,r){return Zi.subVectors(i,t),An.subVectors(e,t),Zi.cross(An).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),An.subVectors(this.a,this.b),Zi.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let a,s;lo.subVectors(r,i),co.subVectors(o,i),Ol.subVectors(e,i);const c=lo.dot(Ol),u=co.dot(Ol);if(c<=0&&u<=0)return t.copy(i);Fl.subVectors(e,r);const p=lo.dot(Fl),l=co.dot(Fl);if(p>=0&&l<=p)return t.copy(r);const h=c*l-p*u;if(h<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(lo,a);Bl.subVectors(e,o);const d=lo.dot(Bl),f=co.dot(Bl);if(f>=0&&d<=f)return t.copy(o);const _=d*u-c*f;if(_<=0&&u>=0&&f<=0)return s=u/(u-f),t.copy(i).addScaledVector(co,s);const g=p*f-d*l;if(g<=0&&l-p>=0&&d-f>=0)return td.subVectors(o,r),s=(l-p)/(l-p+(d-f)),t.copy(r).addScaledVector(td,s);const m=1/(g+_+h);return a=_*m,s=h*m,t.copy(i).addScaledVector(lo,a).addScaledVector(co,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function kl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=bl(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=kl(a,o,e+1/3),this.g=kl(a,o,e),this.b=kl(a,o,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=ni){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const i=id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=wl(e.r),this.g=wl(e.g),this.b=wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return gt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Vt(Zt.r*255,0,255))*65536+Math.round(Vt(Zt.g*255,0,255))*256+Math.round(Vt(Zt.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Zt.copy(this),t);const i=Zt.r,r=Zt.g,o=Zt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let c,u;const p=(s+a)/2;if(s===a)c=0,u=0;else{const l=a-s;switch(u=p<=.5?l/(a+s):l/(2-a-s),a){case i:c=(r-o)/l+(r<o?6:0);break;case r:c=(o-i)/l+2;break;case o:c=(i-r)/l+4;break}c/=6}return e.h=c,e.s=u,e.l=p,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=ni){gt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,r=Zt.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(ts);const i=Zo(Yn.h,ts.h,t),r=Zo(Yn.s,ts.s,t),o=Zo(Yn.l,ts.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new qe;qe.NAMES=id;let y_=0;class on extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Wr,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=hl,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ul&&(i.blendSrc=this.blendSrc),this.blendDst!==hl&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const c=o[s];delete c.metadata,a.push(c)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cn extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pn=x_();function x_(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;u<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(i[c]=1024>>-u-14,i[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(i[c]=u+15<<10,i[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const o=new Uint32Array(2048),a=new Uint32Array(64),s=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,p=0;for(;!(u&8388608);)u<<=1,p-=8388608;u&=-8388609,p+=947912704,o[c]=u|p}for(let c=1024;c<2048;++c)o[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(s[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:o,exponentTable:a,offsetTable:s}}function T_(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Vt(n,-65504,65504),Pn.floatView[0]=n;const e=Pn.uint32View[0],t=e>>23&511;return Pn.baseTable[t]+((e&8388607)>>Pn.shiftTable[t])}function M_(n){const e=n>>10;return Pn.uint32View[0]=Pn.mantissaTable[Pn.offsetTable[e]+(n&1023)]+Pn.exponentTable[e],Pn.floatView[0]}const uo={toHalfFloat:T_,fromHalfFloat:M_},Ot=new O,is=new je;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Vh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),o=_t(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ml&&(e.usage=this.usage),e}}class nd extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rd extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Di extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let b_=0;const Oi=new et,zl=new ct,ho=new O,Ti=new bn,ta=new bn,Gt=new O;class Xi extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zh(e)?rd:nd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new lt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const s=t[o];ta.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(Ti.min,ta.min),Ti.expandByPoint(Gt),Gt.addVectors(Ti.max,ta.max),Ti.expandByPoint(Gt)):(Ti.expandByPoint(ta.min),Ti.expandByPoint(ta.max))}Ti.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)Gt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let o=0,a=t.length;o<a;o++){const s=t[o],c=this.morphTargetsRelative;for(let u=0,p=s.count;u<p;u++)Gt.fromBufferAttribute(s,u),c&&(ho.fromBufferAttribute(e,u),Gt.add(ho)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),s=[],c=[];for(let C=0;C<i.count;C++)s[C]=new O,c[C]=new O;const u=new O,p=new O,l=new O,h=new je,d=new je,f=new je,_=new O,g=new O;function m(C,T,b){u.fromBufferAttribute(i,C),p.fromBufferAttribute(i,T),l.fromBufferAttribute(i,b),h.fromBufferAttribute(o,C),d.fromBufferAttribute(o,T),f.fromBufferAttribute(o,b),p.sub(u),l.sub(u),d.sub(h),f.sub(h);const k=1/(d.x*f.y-f.x*d.y);isFinite(k)&&(_.copy(p).multiplyScalar(f.y).addScaledVector(l,-d.y).multiplyScalar(k),g.copy(l).multiplyScalar(d.x).addScaledVector(p,-f.x).multiplyScalar(k),s[C].add(_),s[T].add(_),s[b].add(_),c[C].add(g),c[T].add(g),c[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,T=x.length;C<T;++C){const b=x[C],k=b.start,X=b.count;for(let F=k,Y=k+X;F<Y;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new O,M=new O,P=new O,S=new O;function E(C){P.fromBufferAttribute(r,C),S.copy(P);const T=s[C];y.copy(T),y.sub(P.multiplyScalar(P.dot(T))).normalize(),M.crossVectors(S,T);const b=M.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,b)}for(let C=0,T=x.length;C<T;++C){const b=x[C],k=b.start,X=b.count;for(let F=k,Y=k+X;F<Y;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new O,o=new O,a=new O,s=new O,c=new O,u=new O,p=new O,l=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const f=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,f),o.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),p.subVectors(a,o),l.subVectors(r,o),p.cross(l),s.fromBufferAttribute(i,f),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),s.add(p),c.add(p),u.add(p),i.setXYZ(f,s.x,s.y,s.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),p.subVectors(a,o),l.subVectors(r,o),p.cross(l),i.setXYZ(h+0,p.x,p.y,p.z),i.setXYZ(h+1,p.x,p.y,p.z),i.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(s,c){const u=s.array,p=s.itemSize,l=s.normalized,h=new u.constructor(c.length*p);let d=0,f=0;for(let _=0,g=c.length;_<g;_++){s.isInterleavedBufferAttribute?d=c[_]*s.data.stride+s.offset:d=c[_]*p;for(let m=0;m<p;m++)h[f++]=u[d++]}return new jt(h,p,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],u=e(c,i);t.setAttribute(s,u)}const o=this.morphAttributes;for(const s in o){const c=[],u=o[s];for(let p=0,l=u.length;p<l;p++){const h=u[p],d=e(h,i);c.push(d)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const u=a[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],p=[];for(let l=0,h=u.length;l<h;l++){const d=u[l];p.push(d.toJSON(e.data))}p.length>0&&(r[c]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(t))}const o=e.morphAttributes;for(const u in o){const p=[],l=o[u];for(let h=0,d=l.length;h<d;h++)p.push(l[h].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,p=a.length;u<p;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const od=new et,vr=new ro,ns=new rn,ad=new O,po=new O,fo=new O,mo=new O,Hl=new O,rs=new O,os=new je,as=new je,ss=new je,sd=new O,ld=new O,cd=new O,ls=new O,cs=new O;class $t extends ct{constructor(e=new Xi,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){rs.set(0,0,0);for(let c=0,u=o.length;c<u;c++){const p=s[c],l=o[c];p!==0&&(Hl.fromBufferAttribute(l,e),a?rs.addScaledVector(Hl,p):rs.addScaledVector(Hl.sub(t),p))}t.add(rs)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(o),vr.copy(e.ray).recast(e.near),!(ns.containsPoint(vr.origin)===!1&&(vr.intersectSphere(ns,ad)===null||vr.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(od.copy(o).invert(),vr.copy(e.ray).applyMatrix4(od),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,i){let r;const o=this.geometry,a=this.material,s=o.index,c=o.attributes.position,u=o.attributes.uv,p=o.attributes.uv1,l=o.attributes.normal,h=o.groups,d=o.drawRange;if(s!==null)if(Array.isArray(a))for(let f=0,_=h.length;f<_;f++){const g=h[f],m=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let M=x,P=y;M<P;M+=3){const S=s.getX(M),E=s.getX(M+1),C=s.getX(M+2);r=us(this,m,e,i,u,p,l,S,E,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),_=Math.min(s.count,d.start+d.count);for(let g=f,m=_;g<m;g+=3){const x=s.getX(g),y=s.getX(g+1),M=s.getX(g+2);r=us(this,a,e,i,u,p,l,x,y,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,_=h.length;f<_;f++){const g=h[f],m=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=x,P=y;M<P;M+=3){const S=M,E=M+1,C=M+2;r=us(this,m,e,i,u,p,l,S,E,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=f,m=_;g<m;g+=3){const x=g,y=g+1,M=g+2;r=us(this,a,e,i,u,p,l,x,y,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function S_(n,e,t,i,r,o,a,s){let c;if(e.side===ui?c=i.intersectTriangle(a,o,r,!0,s):c=i.intersectTriangle(r,o,a,e.side===xn,s),c===null)return null;cs.copy(s),cs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(cs);return u<t.near||u>t.far?null:{distance:u,point:cs.clone(),object:n}}function us(n,e,t,i,r,o,a,s,c,u){n.getVertexPosition(s,po),n.getVertexPosition(c,fo),n.getVertexPosition(u,mo);const p=S_(n,e,t,i,po,fo,mo,ls);if(p){r&&(os.fromBufferAttribute(r,s),as.fromBufferAttribute(r,c),ss.fromBufferAttribute(r,u),p.uv=vn.getInterpolation(ls,po,fo,mo,os,as,ss,new je)),o&&(os.fromBufferAttribute(o,s),as.fromBufferAttribute(o,c),ss.fromBufferAttribute(o,u),p.uv1=vn.getInterpolation(ls,po,fo,mo,os,as,ss,new je)),a&&(sd.fromBufferAttribute(a,s),ld.fromBufferAttribute(a,c),cd.fromBufferAttribute(a,u),p.normal=vn.getInterpolation(ls,po,fo,mo,sd,ld,cd,new O),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const l={a:s,b:c,c:u,normal:new O,materialIndex:0};vn.getNormal(po,fo,mo,l.normal),p.face=l}return p}class Oa extends Xi{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const c=[],u=[],p=[],l=[];let h=0,d=0;f("z","y","x",-1,-1,i,t,e,a,o,0),f("z","y","x",1,-1,i,t,-e,a,o,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,o,4),f("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new Di(u,3)),this.setAttribute("normal",new Di(p,3)),this.setAttribute("uv",new Di(l,2));function f(_,g,m,x,y,M,P,S,E,C,T){const b=M/E,k=P/C,X=M/2,F=P/2,Y=S/2,q=E+1,ie=C+1;let ne=0,$=0;const se=new O;for(let de=0;de<ie;de++){const Pe=de*k-F;for(let Ge=0;Ge<q;Ge++){const Fe=Ge*b-X;se[_]=Fe*x,se[g]=Pe*y,se[m]=Y,u.push(se.x,se.y,se.z),se[_]=0,se[g]=0,se[m]=S>0?1:-1,p.push(se.x,se.y,se.z),l.push(Ge/E),l.push(1-de/C),ne+=1}}for(let de=0;de<C;de++)for(let Pe=0;Pe<E;Pe++){const Ge=h+Pe+q*de,Fe=h+Pe+q*(de+1),te=h+(Pe+1)+q*(de+1),pe=h+(Pe+1)+q*de;c.push(Ge,Fe,pe),c.push(Fe,te,pe),$+=6}s.addGroup(d,$,T),d+=$,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ri(n){const e={};for(let t=0;t<n.length;t++){const i=go(n[t]);for(const r in i)e[r]=i[r]}return e}function w_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ud(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const E_={clone:go,merge:ri};var A_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=w_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hd extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new O,dd=new je,pd=new je;class oi extends hd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,dd,pd),t.subVectors(pd,dd)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/c,t-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _o=-90,vo=1;class C_ extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new oi(_o,vo,e,t);r.layers=this.layers,this.add(r);const o=new oi(_o,vo,e,t);o.layers=this.layers,this.add(o);const a=new oi(_o,vo,e,t);a.layers=this.layers,this.add(a);const s=new oi(_o,vo,e,t);s.layers=this.layers,this.add(s);const c=new oi(_o,vo,e,t);c.layers=this.layers,this.add(c);const u=new oi(_o,vo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,s,c]=t;for(const u of t)this.remove(u);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,c,u,p]=this.children,l=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,p),e.setRenderTarget(l,h,d),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class fd extends Ht{constructor(e,t,i,r,o,a,s,c,u,p){e=e!==void 0?e:[],t=t!==void 0?t:Xr,super(e,t,i,r,o,a,s,c,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P_ extends mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Oa(5,5,5),o=new $i({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ui,blending:Hn});o.uniforms.tEquirect.value=t;const a=new $t(r,o),s=t.minFilter;return t.minFilter===nn&&(t.minFilter=It),new C_(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}}const Vl=new O,L_=new O,I_=new lt;class Zn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vl.subVectors(i,t).cross(L_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||I_.getNormalMatrix(e),r=this.coplanarPoint(Vl).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new rn,hs=new O;class Gl{constructor(e=new Zn,t=new Zn,i=new Zn,r=new Zn,o=new Zn,a=new Zn){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],c=r[3],u=r[4],p=r[5],l=r[6],h=r[7],d=r[8],f=r[9],_=r[10],g=r[11],m=r[12],x=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-o,h-u,g-d,M-m).normalize(),i[1].setComponents(c+o,h+u,g+d,M+m).normalize(),i[2].setComponents(c+a,h+p,g+f,M+x).normalize(),i[3].setComponents(c-a,h-p,g-f,M-x).normalize(),i[4].setComponents(c-s,h-l,g-_,M-y).normalize(),t===Mn)i[5].setComponents(c+s,h+l,g+_,M+y).normalize();else if(t===ja)i[5].setComponents(s,l,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(hs.x=r.normal.x>0?e.max.x:e.min.x,hs.y=r.normal.y>0?e.max.y:e.min.y,hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function md(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function U_(n){const e=new WeakMap;function t(s,c){const u=s.array,p=s.usage,l=u.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,u,p),s.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:l}}function i(s,c,u){const p=c.array,l=c._updateRange,h=c.updateRanges;if(n.bindBuffer(u,s),l.count===-1&&h.length===0&&n.bufferSubData(u,0,p),h.length!==0){for(let d=0,f=h.length;d<f;d++){const _=h[d];n.bufferSubData(u,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}c.clearUpdateRanges()}l.count!==-1&&(n.bufferSubData(u,l.offset*p.BYTES_PER_ELEMENT,p,l.offset,l.count),l.count=-1),c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(n.deleteBuffer(c.buffer),e.delete(s))}function a(s,c){if(s.isGLBufferAttribute){const p=e.get(s);(!p||p.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const u=e.get(s);if(u===void 0)e.set(s,t(s,c));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,s,c),u.version=s.version}}return{get:r,remove:o,update:a}}class Go extends Xi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,a=t/2,s=Math.floor(i),c=Math.floor(r),u=s+1,p=c+1,l=e/s,h=t/c,d=[],f=[],_=[],g=[];for(let m=0;m<p;m++){const x=m*h-a;for(let y=0;y<u;y++){const M=y*l-o;f.push(M,-x,0),_.push(0,0,1),g.push(y/s),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<s;x++){const y=x+u*m,M=x+u*(m+1),P=x+1+u*(m+1),S=x+1+u*m;d.push(y,M,S),d.push(M,P,S)}this.setIndex(d),this.setAttribute("position",new Di(f,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.widthSegments,e.heightSegments)}}var N_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,O_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,W_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,q_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,n0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,E0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,K0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ev=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Av=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ey=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ty=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ry=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:N_,alphahash_pars_fragment:D_,alphamap_fragment:O_,alphamap_pars_fragment:F_,alphatest_fragment:B_,alphatest_pars_fragment:k_,aomap_fragment:z_,aomap_pars_fragment:H_,batching_pars_vertex:V_,batching_vertex:G_,begin_vertex:W_,beginnormal_vertex:X_,bsdfs:j_,iridescence_fragment:q_,bumpmap_pars_fragment:Y_,clipping_planes_fragment:K_,clipping_planes_pars_fragment:Z_,clipping_planes_pars_vertex:$_,clipping_planes_vertex:Q_,color_fragment:J_,color_pars_fragment:e0,color_pars_vertex:t0,color_vertex:i0,common:n0,cube_uv_reflection_fragment:r0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:s0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:u0,colorspace_pars_fragment:h0,envmap_fragment:d0,envmap_common_pars_fragment:p0,envmap_pars_fragment:f0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:E0,envmap_vertex:g0,fog_vertex:_0,fog_pars_vertex:v0,fog_fragment:y0,fog_pars_fragment:x0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:M0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:S0,lights_pars_begin:w0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:P0,lights_physical_fragment:L0,lights_physical_pars_fragment:I0,lights_fragment_begin:U0,lights_fragment_maps:N0,lights_fragment_end:D0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:k0,map_fragment:z0,map_pars_fragment:H0,map_particle_fragment:V0,map_particle_pars_fragment:G0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:j0,morphcolor_vertex:q0,morphnormal_vertex:Y0,morphtarget_pars_vertex:K0,morphtarget_vertex:Z0,normal_fragment_begin:$0,normal_fragment_maps:Q0,normal_pars_fragment:J0,normal_pars_vertex:ev,normal_vertex:tv,normalmap_pars_fragment:iv,clearcoat_normal_fragment_begin:nv,clearcoat_normal_fragment_maps:rv,clearcoat_pars_fragment:ov,iridescence_pars_fragment:av,opaque_fragment:sv,packing:lv,premultiplied_alpha_fragment:cv,project_vertex:uv,dithering_fragment:hv,dithering_pars_fragment:dv,roughnessmap_fragment:pv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:mv,shadowmap_pars_vertex:gv,shadowmap_vertex:_v,shadowmask_pars_fragment:vv,skinbase_vertex:yv,skinning_pars_vertex:xv,skinning_vertex:Tv,skinnormal_vertex:Mv,specularmap_fragment:bv,specularmap_pars_fragment:Sv,tonemapping_fragment:wv,tonemapping_pars_fragment:Ev,transmission_fragment:Av,transmission_pars_fragment:Rv,uv_pars_fragment:Cv,uv_pars_vertex:Pv,uv_vertex:Lv,worldpos_vertex:Iv,background_vert:Uv,background_frag:Nv,backgroundCube_vert:Dv,backgroundCube_frag:Ov,cube_vert:Fv,cube_frag:Bv,depth_vert:kv,depth_frag:zv,distanceRGBA_vert:Hv,distanceRGBA_frag:Vv,equirect_vert:Gv,equirect_frag:Wv,linedashed_vert:Xv,linedashed_frag:jv,meshbasic_vert:qv,meshbasic_frag:Yv,meshlambert_vert:Kv,meshlambert_frag:Zv,meshmatcap_vert:$v,meshmatcap_frag:Qv,meshnormal_vert:Jv,meshnormal_frag:ey,meshphong_vert:ty,meshphong_frag:iy,meshphysical_vert:ny,meshphysical_frag:ry,meshtoon_vert:oy,meshtoon_frag:ay,points_vert:sy,points_frag:ly,shadow_vert:cy,shadow_frag:uy,sprite_vert:hy,sprite_frag:dy},Se={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},an={basic:{uniforms:ri([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:ri([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:ri([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:ri([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:ri([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:ri([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:ri([Se.points,Se.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:ri([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:ri([Se.common,Se.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:ri([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:ri([Se.sprite,Se.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:ri([Se.common,Se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:ri([Se.lights,Se.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};an.physical={uniforms:ri([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const ds={r:0,b:0,g:0},xr=new _n,py=new et;function fy(n,e,t,i,r,o,a){const s=new qe(0);let c=o===!0?0:1,u,p,l=null,h=0,d=null;function f(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const M=f(x);M===null?m(s,c):M&&M.isColor&&(m(M,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function g(x,y){const M=f(y);M&&(M.isCubeTexture||M.mapping===ka)?(p===void 0&&(p=new $t(new Oa(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:go(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),xr.copy(y.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),p.material.uniforms.envMap.value=M,p.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(py.makeRotationFromEuler(xr)),p.material.toneMapped=gt.getTransfer(M.colorSpace)!==St,(l!==M||h!==M.version||d!==n.toneMapping)&&(p.material.needsUpdate=!0,l=M,h=M.version,d=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new $t(new Go(2,2),new $i({name:"BackgroundMaterial",uniforms:go(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=gt.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(l!==M||h!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,l=M,h=M.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function m(x,y){x.getRGB(ds,ud(n)),i.buffers.color.setClear(ds.r,ds.g,ds.b,y,a)}return{getClearColor:function(){return s},setClearColor:function(x,y=1){s.set(x),c=y,m(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,m(s,c)},render:_,addToRenderList:g}}function my(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,a=!1;function s(b,k,X,F,Y){let q=!1;const ie=l(F,X,k);o!==ie&&(o=ie,u(o.object)),q=d(b,F,X,Y),q&&f(b,F,X,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(b,k,X,F),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function u(b){return n.bindVertexArray(b)}function p(b){return n.deleteVertexArray(b)}function l(b,k,X){const F=X.wireframe===!0;let Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let q=Y[k.id];q===void 0&&(q={},Y[k.id]=q);let ie=q[F];return ie===void 0&&(ie=h(c()),q[F]=ie),ie}function h(b){const k=[],X=[],F=[];for(let Y=0;Y<t;Y++)k[Y]=0,X[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:F,object:b,attributes:{},index:null}}function d(b,k,X,F){const Y=o.attributes,q=k.attributes;let ie=0;const ne=X.getAttributes();for(const $ in ne)if(ne[$].location>=0){const se=Y[$];let de=q[$];if(de===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;ie++}return o.attributesNum!==ie||o.index!==F}function f(b,k,X,F){const Y={},q=k.attributes;let ie=0;const ne=X.getAttributes();for(const $ in ne)if(ne[$].location>=0){let se=q[$];se===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(se=b.instanceColor));const de={};de.attribute=se,se&&se.data&&(de.data=se.data),Y[$]=de,ie++}o.attributes=Y,o.attributesNum=ie,o.index=F}function _(){const b=o.newAttributes;for(let k=0,X=b.length;k<X;k++)b[k]=0}function g(b){m(b,0)}function m(b,k){const X=o.newAttributes,F=o.enabledAttributes,Y=o.attributeDivisors;X[b]=1,F[b]===0&&(n.enableVertexAttribArray(b),F[b]=1),Y[b]!==k&&(n.vertexAttribDivisor(b,k),Y[b]=k)}function x(){const b=o.newAttributes,k=o.enabledAttributes;for(let X=0,F=k.length;X<F;X++)k[X]!==b[X]&&(n.disableVertexAttribArray(X),k[X]=0)}function y(b,k,X,F,Y,q,ie){ie===!0?n.vertexAttribIPointer(b,k,X,Y,q):n.vertexAttribPointer(b,k,X,F,Y,q)}function M(b,k,X,F){_();const Y=F.attributes,q=X.getAttributes(),ie=k.defaultAttributeValues;for(const ne in q){const $=q[ne];if($.location>=0){let se=Y[ne];if(se===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const de=se.normalized,Pe=se.itemSize,Ge=e.get(se);if(Ge===void 0)continue;const Fe=Ge.buffer,te=Ge.type,pe=Ge.bytesPerElement,Re=te===n.INT||te===n.UNSIGNED_INT||se.gpuType===Qu;if(se.isInterleavedBufferAttribute){const ye=se.data,Qe=ye.stride,Ze=se.offset;if(ye.isInstancedInterleavedBuffer){for(let H=0;H<$.locationSize;H++)m($.location+H,ye.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let H=0;H<$.locationSize;H++)g($.location+H);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let H=0;H<$.locationSize;H++)y($.location+H,Pe/$.locationSize,te,de,Qe*pe,(Ze+Pe/$.locationSize*H)*pe,Re)}else{if(se.isInstancedBufferAttribute){for(let ye=0;ye<$.locationSize;ye++)m($.location+ye,se.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ye=0;ye<$.locationSize;ye++)g($.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ye=0;ye<$.locationSize;ye++)y($.location+ye,Pe/$.locationSize,te,de,Pe*pe,Pe/$.locationSize*ye*pe,Re)}}else if(ie!==void 0){const de=ie[ne];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv($.location,de);break;case 3:n.vertexAttrib3fv($.location,de);break;case 4:n.vertexAttrib4fv($.location,de);break;default:n.vertexAttrib1fv($.location,de)}}}}x()}function P(){C();for(const b in i){const k=i[b];for(const X in k){const F=k[X];for(const Y in F)p(F[Y].object),delete F[Y];delete k[X]}delete i[b]}}function S(b){if(i[b.id]===void 0)return;const k=i[b.id];for(const X in k){const F=k[X];for(const Y in F)p(F[Y].object),delete F[Y];delete k[X]}delete i[b.id]}function E(b){for(const k in i){const X=i[k];if(X[b.id]===void 0)continue;const F=X[b.id];for(const Y in F)p(F[Y].object),delete F[Y];delete X[b.id]}}function C(){T(),a=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:C,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function gy(n,e,t){let i;function r(u){i=u}function o(u,p){n.drawArrays(i,u,p),t.update(p,i,1)}function a(u,p,l){l!==0&&(n.drawArraysInstanced(i,u,p,l),t.update(p,i,l))}function s(u,p,l){if(l===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<l;d++)this.render(u[d],p[d]);else{h.multiDrawArraysWEBGL(i,u,0,p,0,l);let d=0;for(let f=0;f<l;f++)d+=p[f];t.update(d,i,1)}}function c(u,p,l,h){if(l===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u.length;f++)a(u[f],p[f],h[f]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,p,0,h,0,l);let f=0;for(let _=0;_<l;_++)f+=p[_];for(let _=0;_<h.length;_++)t.update(f,i,h[_])}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function _y(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(S){return!(S!==Ni&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(S){const E=S===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Gn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Yt&&!E)}function c(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const p=c(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const l=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:M,maxSamples:P}}function vy(n){const e=this;let t=null,i=0,r=!1,o=!1;const a=new Zn,s=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){const d=l.length!==0||h||i!==0||r;return r=h,i=l.length,d},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(l,h){t=p(l,h,0)},this.setState=function(l,h,d){const f=l.clippingPlanes,_=l.clipIntersection,g=l.clipShadows,m=n.get(l);if(!r||f===null||f.length===0||o&&!g)o?p(null):u();else{const x=o?0:i,y=x*4;let M=m.clippingState||null;c.value=M,M=p(f,h,y,d);for(let P=0;P!==y;++P)M[P]=t[P];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(l,h,d,f){const _=l!==null?l.length:0;let g=null;if(_!==0){if(g=c.value,f!==!0||g===null){const m=d+_*4,x=h.matrixWorldInverse;s.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,M=d;y!==_;++y,M+=4)a.copy(l[y]).applyMatrix4(x,s),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function yy(n){let e=new WeakMap;function t(a,s){return s===Ba?a.mapping=Xr:s===dl&&(a.mapping=jr),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===Ba||s===dl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new P_(c.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Wl extends hd{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,s-=p*this.view.offsetY,c=s-p*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yo=4,gd=[.125,.215,.35,.446,.526,.582],Tr=20,Xl=new Wl,_d=new qe;let jl=null,ql=0,Yl=0,Kl=!1;const Mr=(1+Math.sqrt(5))/2,xo=1/Mr,vd=[new O(-Mr,xo,0),new O(Mr,xo,0),new O(-xo,0,Mr),new O(xo,0,Mr),new O(0,Mr,-xo),new O(0,Mr,xo),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class yd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){jl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,ql,Yl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:Ui,format:Ni,colorSpace:Dt,depthBuffer:!1},r=xd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xy(o)),this._blurMaterial=Ty(o,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,i,r){const o=new oi(90,1,t,i),a=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,p=c.toneMapping;c.getClearColor(_d),c.toneMapping=Vn,c.autoClear=!1;const l=new Cn({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1}),h=new $t(new Oa,l);let d=!1;const f=e.background;f?f.isColor&&(l.color.copy(f),e.background=null,d=!0):(l.color.copy(_d),d=!0);for(let _=0;_<6;_++){const g=_%3;g===0?(o.up.set(0,a[_],0),o.lookAt(s[_],0,0)):g===1?(o.up.set(0,0,a[_]),o.lookAt(0,s[_],0)):(o.up.set(0,a[_],0),o.lookAt(0,0,s[_]));const m=this._cubeSize;ps(r,g*m,_>2?m:0,m,m),c.setRenderTarget(r),d&&c.render(h,o),c.render(e,o)}h.geometry.dispose(),h.material.dispose(),c.toneMapping=p,c.autoClear=u,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Td());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const c=this._cubeSize;ps(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Xl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=vd[(r-o-1)%vd.length];this._blur(e,o-1,o,a,s)}t.autoClear=i}_blur(e,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,s){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,l=new $t(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,f=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Tr-1),_=o/f,g=isFinite(o)?1+Math.floor(p*_):Tr;g>Tr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Tr}`);const m=[];let x=0;for(let E=0;E<Tr;++E){const C=E/_,T=Math.exp(-C*C/2);m.push(T),E===0?x+=T:E<g&&(x+=2*T)}for(let E=0;E<m.length;E++)m[E]=m[E]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:y}=this;h.dTheta.value=f,h.mipInt.value=y-i;const M=this._sizeLods[r],P=3*M*(r>y-yo?r-y+yo:0),S=4*(this._cubeSize-M);ps(t,P,S,3*M,2*M),c.setRenderTarget(t),c.render(l,Xl)}}function xy(n){const e=[],t=[],i=[];let r=n;const o=n-yo+1+gd.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let c=1/s;a>n-yo?c=gd[a-n+yo-1]:a===0&&(c=0),i.push(c);const u=1/(s-2),p=-u,l=1+u,h=[p,p,l,p,l,l,p,p,l,l,p,l],d=6,f=6,_=3,g=2,m=1,x=new Float32Array(_*f*d),y=new Float32Array(g*f*d),M=new Float32Array(m*f*d);for(let S=0;S<d;S++){const E=S%3*2/3-1,C=S>2?0:-1,T=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];x.set(T,_*f*S),y.set(h,g*f*S);const b=[S,S,S,S,S,S];M.set(b,m*f*S)}const P=new Xi;P.setAttribute("position",new jt(x,_)),P.setAttribute("uv",new jt(y,g)),P.setAttribute("faceIndex",new jt(M,m)),e.push(P),r>yo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xd(n,e,t){const i=new mr(n,e,t);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ty(n,e,t){const i=new Float32Array(Tr),r=new O(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Td(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Md(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function My(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,u=c===Ba||c===dl,p=c===Xr||c===jr;if(u||p){let l=e.get(s);const h=l!==void 0?l.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return t===null&&(t=new yd(n)),l=u?t.fromEquirectangular(s,l):t.fromCubemap(s,l),l.texture.pmremVersion=s.pmremVersion,e.set(s,l),l.texture;if(l!==void 0)return l.texture;{const d=s.image;return u&&d&&d.height>0||p&&d&&r(d)?(t===null&&(t=new yd(n)),l=u?t.fromEquirectangular(s):t.fromCubemap(s),l.texture.pmremVersion=s.pmremVersion,e.set(s,l),s.addEventListener("dispose",o),l.texture):null}}}return s}function r(s){let c=0;const u=6;for(let p=0;p<u;p++)s[p]!==void 0&&c++;return c===u}function o(s){const c=s.target;c.removeEventListener("dispose",o);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function by(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sy(n,e,t,i){const r={},o=new WeakMap;function a(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const f in h.attributes)e.remove(h.attributes[f]);for(const f in h.morphAttributes){const _=h.morphAttributes[f];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}h.removeEventListener("dispose",a),delete r[h.id];const d=o.get(h);d&&(e.remove(d),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(l,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(l){const h=l.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER);const d=l.morphAttributes;for(const f in d){const _=d[f];for(let g=0,m=_.length;g<m;g++)e.update(_[g],n.ARRAY_BUFFER)}}function u(l){const h=[],d=l.index,f=l.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,M=x.length;y<M;y+=3){const P=x[y+0],S=x[y+1],E=x[y+2];h.push(P,S,S,E,E,P)}}else if(f!==void 0){const x=f.array;_=f.version;for(let y=0,M=x.length/3-1;y<M;y+=3){const P=y+0,S=y+1,E=y+2;h.push(P,S,S,E,E,P)}}else return;const g=new(zh(h)?rd:nd)(h,1);g.version=_;const m=o.get(l);m&&e.remove(m),o.set(l,g)}function p(l){const h=o.get(l);if(h){const d=l.index;d!==null&&h.version<d.version&&u(l)}else u(l);return o.get(l)}return{get:s,update:c,getWireframeAttribute:p}}function wy(n,e,t){let i;function r(h){i=h}let o,a;function s(h){o=h.type,a=h.bytesPerElement}function c(h,d){n.drawElements(i,d,o,h*a),t.update(d,i,1)}function u(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,o,h*a,f),t.update(d,i,f))}function p(h,d,f){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f;g++)this.render(h[g]/a,d[g]);else{_.multiDrawElementsWEBGL(i,d,0,o,h,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];t.update(g,i,1)}}function l(h,d,f,_){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)u(h[m]/a,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,o,h,0,_,0,f);let m=0;for(let x=0;x<f;x++)m+=d[x];for(let x=0;x<_.length;x++)t.update(m,i,_[x])}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=l}function Ey(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=s*(o/3);break;case n.LINES:t.lines+=s*(o/2);break;case n.LINE_STRIP:t.lines+=s*(o-1);break;case n.LINE_LOOP:t.lines+=s*o;break;case n.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ay(n,e,t){const i=new WeakMap,r=new Tt;function o(a,s,c){const u=a.morphTargetInfluences,p=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,l=p!==void 0?p.length:0;let h=i.get(s);if(h===void 0||h.count!==l){let f=function(){T.dispose(),i.delete(s),s.removeEventListener("dispose",f)};var d=f;h!==void 0&&h.texture.dispose();const _=s.morphAttributes.position!==void 0,g=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,x=s.morphAttributes.position||[],y=s.morphAttributes.normal||[],M=s.morphAttributes.color||[];let P=0;_===!0&&(P=1),g===!0&&(P=2),m===!0&&(P=3);let S=s.attributes.position.count*P,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*E*4*l),T=new jh(C,S,E,l);T.type=Yt,T.needsUpdate=!0;const b=P*4;for(let k=0;k<l;k++){const X=x[k],F=y[k],Y=M[k],q=S*E*4*k;for(let ie=0;ie<X.count;ie++){const ne=ie*b;_===!0&&(r.fromBufferAttribute(X,ie),C[q+ne+0]=r.x,C[q+ne+1]=r.y,C[q+ne+2]=r.z,C[q+ne+3]=0),g===!0&&(r.fromBufferAttribute(F,ie),C[q+ne+4]=r.x,C[q+ne+5]=r.y,C[q+ne+6]=r.z,C[q+ne+7]=0),m===!0&&(r.fromBufferAttribute(Y,ie),C[q+ne+8]=r.x,C[q+ne+9]=r.y,C[q+ne+10]=r.z,C[q+ne+11]=Y.itemSize===4?r.w:1)}}h={count:l,texture:T,size:new je(S,E)},i.set(s,h),s.addEventListener("dispose",f)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<u.length;g++)f+=u[g];const _=s.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",u)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:o}}function Ry(n,e,t,i){let r=new WeakMap;function o(c){const u=i.render.frame,p=c.geometry,l=e.get(c,p);if(r.get(l)!==u&&(e.update(l),r.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return l}function a(){r=new WeakMap}function s(c){const u=c.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}class bd extends Ht{constructor(e,t,i,r,o,a,s,c,u,p){if(p=p!==void 0?p:Kr,p!==Kr&&p!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Kr&&(i=Yr),i===void 0&&p===qo&&(i=jo),super(null,r,o,a,s,c,p,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:ii,this.minFilter=c!==void 0?c:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sd=new Ht,wd=new bd(1,1);wd.compareFunction=Oh;const Ed=new jh,Ad=new h_,Rd=new fd,Cd=[],Pd=[],Ld=new Float32Array(16),Id=new Float32Array(9),Ud=new Float32Array(4);function To(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Cd[r];if(o===void 0&&(o=new Float32Array(r),Cd[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,n[a].toArray(o,s)}return o}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fs(n,e){let t=Pd[e];t===void 0&&(t=new Int32Array(e),Pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function Uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Ud.set(i),n.uniformMatrix2fv(this.addr,!1,Ud),zt(t,i)}}function Ny(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Id.set(i),n.uniformMatrix3fv(this.addr,!1,Id),zt(t,i)}}function Dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Ld.set(i),n.uniformMatrix4fv(this.addr,!1,Ld),zt(t,i)}}function Oy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function zy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function Gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function Wy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const o=this.type===n.SAMPLER_2D_SHADOW?wd:Sd;t.setTexture2D(e||o,r)}function Xy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ad,r)}function jy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rd,r)}function qy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ed,r)}function Yy(n){switch(n){case 5126:return Cy;case 35664:return Py;case 35665:return Ly;case 35666:return Iy;case 35674:return Uy;case 35675:return Ny;case 35676:return Dy;case 5124:case 35670:return Oy;case 35667:case 35671:return Fy;case 35668:case 35672:return By;case 35669:case 35673:return ky;case 5125:return zy;case 36294:return Hy;case 36295:return Vy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return qy}}function Ky(n,e){n.uniform1fv(this.addr,e)}function Zy(n,e){const t=To(e,this.size,2);n.uniform2fv(this.addr,t)}function $y(n,e){const t=To(e,this.size,3);n.uniform3fv(this.addr,t)}function Qy(n,e){const t=To(e,this.size,4);n.uniform4fv(this.addr,t)}function Jy(n,e){const t=To(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ex(n,e){const t=To(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tx(n,e){const t=To(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ix(n,e){n.uniform1iv(this.addr,e)}function nx(n,e){n.uniform2iv(this.addr,e)}function rx(n,e){n.uniform3iv(this.addr,e)}function ox(n,e){n.uniform4iv(this.addr,e)}function ax(n,e){n.uniform1uiv(this.addr,e)}function sx(n,e){n.uniform2uiv(this.addr,e)}function lx(n,e){n.uniform3uiv(this.addr,e)}function cx(n,e){n.uniform4uiv(this.addr,e)}function ux(n,e,t){const i=this.cache,r=e.length,o=fs(t,r);kt(i,o)||(n.uniform1iv(this.addr,o),zt(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Sd,o[a])}function hx(n,e,t){const i=this.cache,r=e.length,o=fs(t,r);kt(i,o)||(n.uniform1iv(this.addr,o),zt(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ad,o[a])}function dx(n,e,t){const i=this.cache,r=e.length,o=fs(t,r);kt(i,o)||(n.uniform1iv(this.addr,o),zt(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Rd,o[a])}function px(n,e,t){const i=this.cache,r=e.length,o=fs(t,r);kt(i,o)||(n.uniform1iv(this.addr,o),zt(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ed,o[a])}function fx(n){switch(n){case 5126:return Ky;case 35664:return Zy;case 35665:return $y;case 35666:return Qy;case 35674:return Jy;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return ix;case 35667:case 35671:return nx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return sx;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}class mx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yy(t.type)}}class gx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fx(t.type)}}class _x{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,t[s.id],i)}}}const $l=/(\w+)(\])?(\[|\.)?/g;function Nd(n,e){n.seq.push(e),n.map[e.id]=e}function vx(n,e,t){const i=n.name,r=i.length;for($l.lastIndex=0;;){const o=$l.exec(i),a=$l.lastIndex;let s=o[1];const c=o[2]==="]",u=o[3];if(c&&(s=s|0),u===void 0||u==="["&&a+2===r){Nd(t,u===void 0?new mx(s,n,e):new gx(s,n,e));break}else{let p=t.map[s];p===void 0&&(p=new _x(s),Nd(t,p)),t=p}}}class ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);vx(o,a,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Dd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yx=37297;let xx=0;function Tx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function Mx(n){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(n);let i;switch(e===t?i="":e===Xa&&t===Wa?i="LinearDisplayP3ToLinearSRGB":e===Wa&&t===Xa&&(i="LinearSRGBToLinearDisplayP3"),n){case Dt:case Va:return[i,"LinearTransferOETF"];case ni:case Tl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Od(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Tx(n.getShaderSource(e),a)}else return r}function bx(n,e){const t=Mx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Sx(n,e){let t;switch(e){case pg:t="Linear";break;case fg:t="Reinhard";break;case mg:t="OptimizedCineon";break;case gg:t="ACESFilmic";break;case vg:t="AgX";break;case yg:t="Neutral";break;case _g:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function Ex(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ax(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),a=o.name;let s=1;o.type===n.FLOAT_MAT2&&(s=2),o.type===n.FLOAT_MAT3&&(s=3),o.type===n.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:s}}return t}function ia(n){return n!==""}function Fd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(n){return n.replace(Rx,Px)}const Cx=new Map;function Px(n,e){let t=st[e];if(t===void 0){const i=Cx.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}const Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kd(n){return n.replace(Lx,Ix)}function Ix(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function zd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ux(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Nx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xr:case jr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ox(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qu:e="ENVMAP_BLENDING_MULTIPLY";break;case hg:e="ENVMAP_BLENDING_MIX";break;case dg:e="ENVMAP_BLENDING_ADD";break}return e}function Fx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Bx(n,e,t,i){const r=n.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const c=Ux(t),u=Nx(t),p=Dx(t),l=Ox(t),h=Fx(t),d=wx(t),f=Ex(o),_=r.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ia).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ia).join(`
`),m.length>0&&(m+=`
`)):(g=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),m=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?st.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,bx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=Ql(a),a=Fd(a,t),a=Bd(a,t),s=Ql(s),s=Fd(s,t),s=Bd(s,t),a=kd(a),s=kd(s),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+g+a,M=x+m+s,P=Dd(r,r.VERTEX_SHADER,y),S=Dd(r,r.FRAGMENT_SHADER,M);r.attachShader(_,P),r.attachShader(_,S),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(k){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(P).trim(),Y=r.getShaderInfoLog(S).trim();let q=!0,ie=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,S);else{const ne=Od(r,P,"vertex"),$=Od(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+X+`
`+ne+`
`+$)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(F===""||Y==="")&&(ie=!1);ie&&(k.diagnostics={runnable:q,programLog:X,vertexShader:{log:F,prefix:g},fragmentShader:{log:Y,prefix:m}})}r.deleteShader(P),r.deleteShader(S),C=new ms(r,_),T=Ax(r,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,yx)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=S,this}let kx=0;class zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Hx(e),t.set(e,i)),i}}class Hx{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}}function Vx(n,e,t,i,r,o,a){const s=new Ul,c=new zx,u=new Set,p=[],l=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return u.add(T),T===0?"uv":`uv${T}`}function g(T,b,k,X,F){const Y=X.fog,q=F.geometry,ie=T.isMeshStandardMaterial?X.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||ie),$=ne&&ne.mapping===ka?ne.image.height:null,se=f[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pe=de!==void 0?de.length:0;let Ge=0;q.morphAttributes.position!==void 0&&(Ge=1),q.morphAttributes.normal!==void 0&&(Ge=2),q.morphAttributes.color!==void 0&&(Ge=3);let Fe,te,pe,Re;if(se){const z=an[se];Fe=z.vertexShader,te=z.fragmentShader}else Fe=T.vertexShader,te=T.fragmentShader,c.update(T),pe=c.getVertexShaderID(T),Re=c.getFragmentShaderID(T);const ye=n.getRenderTarget(),Qe=F.isInstancedMesh===!0,Ze=F.isBatchedMesh===!0,H=!!T.map,Je=!!T.matcap,Be=!!ne,ot=!!T.aoMap,Ne=!!T.lightMap,ze=!!T.bumpMap,tt=!!T.normalMap,he=!!T.displacementMap,ft=!!T.emissiveMap,D=!!T.metalnessMap,A=!!T.roughnessMap,J=T.anisotropy>0,le=T.clearcoat>0,me=T.dispersion>0,fe=T.iridescence>0,ke=T.sheen>0,Me=T.transmission>0,be=J&&!!T.anisotropyMap,Ye=le&&!!T.clearcoatMap,xe=le&&!!T.clearcoatNormalMap,He=le&&!!T.clearcoatRoughnessMap,ut=fe&&!!T.iridescenceMap,Ve=fe&&!!T.iridescenceThicknessMap,Ue=ke&&!!T.sheenColorMap,it=ke&&!!T.sheenRoughnessMap,at=!!T.specularMap,mt=!!T.specularColorMap,N=!!T.specularIntensityMap,U=Me&&!!T.transmissionMap,ee=Me&&!!T.thicknessMap,K=!!T.gradientMap,_e=!!T.alphaMap,v=T.alphaTest>0,w=!!T.alphaHash,I=!!T.extensions;let B=Vn;T.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(B=n.toneMapping);const Z={shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:Fe,fragmentShader:te,defines:T.defines,customVertexShaderID:pe,customFragmentShaderID:Re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Ze,instancing:Qe,instancingColor:Qe&&F.instanceColor!==null,instancingMorph:Qe&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Dt,alphaToCoverage:!!T.alphaToCoverage,map:H,matcap:Je,envMap:Be,envMapMode:Be&&ne.mapping,envMapCubeUVHeight:$,aoMap:ot,lightMap:Ne,bumpMap:ze,normalMap:tt,displacementMap:h&&he,emissiveMap:ft,normalMapObjectSpace:tt&&T.normalMapType===Ng,normalMapTangentSpace:tt&&T.normalMapType===Nh,metalnessMap:D,roughnessMap:A,anisotropy:J,anisotropyMap:be,clearcoat:le,clearcoatMap:Ye,clearcoatNormalMap:xe,clearcoatRoughnessMap:He,dispersion:me,iridescence:fe,iridescenceMap:ut,iridescenceThicknessMap:Ve,sheen:ke,sheenColorMap:Ue,sheenRoughnessMap:it,specularMap:at,specularColorMap:mt,specularIntensityMap:N,transmission:Me,transmissionMap:U,thicknessMap:ee,gradientMap:K,opaque:T.transparent===!1&&T.blending===Wr&&T.alphaToCoverage===!1,alphaMap:_e,alphaTest:v,alphaHash:w,combine:T.combine,mapUv:H&&_(T.map.channel),aoMapUv:ot&&_(T.aoMap.channel),lightMapUv:Ne&&_(T.lightMap.channel),bumpMapUv:ze&&_(T.bumpMap.channel),normalMapUv:tt&&_(T.normalMap.channel),displacementMapUv:he&&_(T.displacementMap.channel),emissiveMapUv:ft&&_(T.emissiveMap.channel),metalnessMapUv:D&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:be&&_(T.anisotropyMap.channel),clearcoatMapUv:Ye&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:it&&_(T.sheenRoughnessMap.channel),specularMapUv:at&&_(T.specularMap.channel),specularColorMapUv:mt&&_(T.specularColorMap.channel),specularIntensityMapUv:N&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:ee&&_(T.thicknessMap.channel),alphaMapUv:_e&&_(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(tt||J),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(H||_e),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:B,useLegacyLights:n._useLegacyLights,decodeVideoTexture:H&&T.map.isVideoTexture===!0&&gt.getTransfer(T.map.colorSpace)===St,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===hi,flipSided:T.side===ui,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:I&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:I&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Z.vertexUv1s=u.has(1),Z.vertexUv2s=u.has(2),Z.vertexUv3s=u.has(3),u.clear(),Z}function m(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)b.push(k),b.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(x(b,T),y(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function x(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function y(T,b){s.disableAll(),b.supportsVertexTextures&&s.enable(0),b.instancing&&s.enable(1),b.instancingColor&&s.enable(2),b.instancingMorph&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),b.alphaHash&&s.enable(18),b.batching&&s.enable(19),b.dispersion&&s.enable(20),T.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.useLegacyLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.alphaToCoverage&&s.enable(20),T.push(s.mask)}function M(T){const b=f[T.type];let k;if(b){const X=an[b];k=E_.clone(X.uniforms)}else k=T.uniforms;return k}function P(T,b){let k;for(let X=0,F=p.length;X<F;X++){const Y=p[X];if(Y.cacheKey===b){k=Y,++k.usedTimes;break}}return k===void 0&&(k=new Bx(n,b,T,o),p.push(k)),k}function S(T){if(--T.usedTimes===0){const b=p.indexOf(T);p[b]=p[p.length-1],p.pop(),T.destroy()}}function E(T){c.remove(T)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:P,releaseProgram:S,releaseShaderCache:E,programs:p,dispose:C}}function Gx(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function i(o,a,s){n.get(o)[a]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Wx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vd(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(l,h,d,f,_,g){let m=n[e];return m===void 0?(m={id:l.id,object:l,geometry:h,material:d,groupOrder:f,renderOrder:l.renderOrder,z:_,group:g},n[e]=m):(m.id=l.id,m.object=l,m.geometry=h,m.material=d,m.groupOrder=f,m.renderOrder=l.renderOrder,m.z=_,m.group=g),e++,m}function s(l,h,d,f,_,g){const m=a(l,h,d,f,_,g);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):t.push(m)}function c(l,h,d,f,_,g){const m=a(l,h,d,f,_,g);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function u(l,h){t.length>1&&t.sort(l||Wx),i.length>1&&i.sort(h||Hd),r.length>1&&r.sort(h||Hd)}function p(){for(let l=e,h=n.length;l<h;l++){const d=n[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:s,unshift:c,finish:p,sort:u}}function Xx(){let n=new WeakMap;function e(i,r){const o=n.get(i);let a;return o===void 0?(a=new Vd,n.set(i,[a])):r>=o.length?(a=new Vd,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function jx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new qe};break;case"SpotLight":t={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function qx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Yx=0;function Kx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Zx(n){const e=new jx,t=qx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,o=new et,a=new et;function s(u,p){let l=0,h=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,_=0,g=0,m=0,x=0,y=0,M=0,P=0,S=0,E=0,C=0;u.sort(Kx);const T=p===!0?Math.PI:1;for(let k=0,X=u.length;k<X;k++){const F=u[k],Y=F.color,q=F.intensity,ie=F.distance,ne=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)l+=Y.r*q*T,h+=Y.g*q*T,d+=Y.b*q*T;else if(F.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(F.sh.coefficients[$],q);C++}else if(F.isDirectionalLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*T),F.castShadow){const se=F.shadow,de=t.get(F);de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,i.directionalShadow[f]=de,i.directionalShadowMap[f]=ne,i.directionalShadowMatrix[f]=F.shadow.matrix,y++}i.directional[f]=$,f++}else if(F.isSpotLight){const $=e.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(Y).multiplyScalar(q*T),$.distance=ie,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,i.spot[g]=$;const se=F.shadow;if(F.map&&(i.spotLightMap[S]=F.map,S++,se.updateMatrices(F),F.castShadow&&E++),i.spotLightMatrix[g]=se.matrix,F.castShadow){const de=t.get(F);de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,i.spotShadow[g]=de,i.spotShadowMap[g]=ne,P++}g++}else if(F.isRectAreaLight){const $=e.get(F);$.color.copy(Y).multiplyScalar(q),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=$,m++}else if(F.isPointLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*T),$.distance=F.distance,$.decay=F.decay,F.castShadow){const se=F.shadow,de=t.get(F);de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,de.shadowCameraNear=se.camera.near,de.shadowCameraFar=se.camera.far,i.pointShadow[_]=de,i.pointShadowMap[_]=ne,i.pointShadowMatrix[_]=F.shadow.matrix,M++}i.point[_]=$,_++}else if(F.isHemisphereLight){const $=e.get(F);$.skyColor.copy(F.color).multiplyScalar(q*T),$.groundColor.copy(F.groundColor).multiplyScalar(q*T),i.hemi[x]=$,x++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==f||b.pointLength!==_||b.spotLength!==g||b.rectAreaLength!==m||b.hemiLength!==x||b.numDirectionalShadows!==y||b.numPointShadows!==M||b.numSpotShadows!==P||b.numSpotMaps!==S||b.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=P+S-E,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,b.directionalLength=f,b.pointLength=_,b.spotLength=g,b.rectAreaLength=m,b.hemiLength=x,b.numDirectionalShadows=y,b.numPointShadows=M,b.numSpotShadows=P,b.numSpotMaps=S,b.numLightProbes=C,i.version=Yx++)}function c(u,p){let l=0,h=0,d=0,f=0,_=0;const g=p.matrixWorldInverse;for(let m=0,x=u.length;m<x;m++){const y=u[m];if(y.isDirectionalLight){const M=i.directional[l];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),l++}else if(y.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const M=i.rectArea[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),f++}else if(y.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:s,setupView:c,state:i}}function Gd(n){const e=new Zx(n),t=[],i=[];function r(p){u.camera=p,t.length=0,i.length=0}function o(p){t.push(p)}function a(p){i.push(p)}function s(p){e.setup(t,p)}function c(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:s,setupLightsView:c,pushLight:o,pushShadow:a}}function $x(n){let e=new WeakMap;function t(r,o=0){const a=e.get(r);let s;return a===void 0?(s=new Gd(n),e.set(r,[s])):o>=a.length?(s=new Gd(n),a.push(s)):s=a[o],s}function i(){e=new WeakMap}return{get:t,dispose:i}}class Qx extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jx extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i1(n,e,t){let i=new Gl;const r=new je,o=new je,a=new Tt,s=new Qx({depthPacking:Ug}),c=new Jx,u={},p=t.maxTextureSize,l={[xn]:ui,[ui]:xn,[hi]:hi},h=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:e1,fragmentShader:t1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const f=new Xi;f.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(f,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gu;let m=this.type;this.render=function(S,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const T=n.getRenderTarget(),b=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Hn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const F=m!==yn&&this.type===yn,Y=m===yn&&this.type!==yn;for(let q=0,ie=S.length;q<ie;q++){const ne=S[q],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const se=$.getFrameExtents();if(r.multiply(se),o.copy($.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/se.x),r.x=o.x*se.x,$.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/se.y),r.y=o.y*se.y,$.mapSize.y=o.y)),$.map===null||F===!0||Y===!0){const Pe=this.type!==yn?{minFilter:ii,magFilter:ii}:{};$.map!==null&&$.map.dispose(),$.map=new mr(r.x,r.y,Pe),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const de=$.getViewportCount();for(let Pe=0;Pe<de;Pe++){const Ge=$.getViewport(Pe);a.set(o.x*Ge.x,o.y*Ge.y,o.x*Ge.z,o.y*Ge.w),X.viewport(a),$.updateMatrices(ne,Pe),i=$.getFrustum(),M(E,C,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===yn&&x($,C),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(T,b,k)};function x(S,E){const C=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new mr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,C,h,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,C,d,_,null)}function y(S,E,C,T){let b=null;const k=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0)b=k;else if(b=C.isPointLight===!0?c:s,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const X=b.uuid,F=E.uuid;let Y=u[X];Y===void 0&&(Y={},u[X]=Y);let q=Y[F];q===void 0&&(q=b.clone(),Y[F]=q,E.addEventListener("dispose",P)),b=q}if(b.visible=E.visible,b.wireframe=E.wireframe,T===yn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:l[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=n.properties.get(b);X.light=C}return b}function M(S,E,C,T,b){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===yn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const X=e.update(S),F=S.material;if(Array.isArray(F)){const Y=X.groups;for(let q=0,ie=Y.length;q<ie;q++){const ne=Y[q],$=F[ne.materialIndex];if($&&$.visible){const se=y(S,$,T,b);S.onBeforeShadow(n,S,E,C,X,se,ne),n.renderBufferDirect(C,null,X,se,S,ne),S.onAfterShadow(n,S,E,C,X,se,ne)}}}else if(F.visible){const Y=y(S,F,T,b);S.onBeforeShadow(n,S,E,C,X,Y,null),n.renderBufferDirect(C,null,X,Y,S,null),S.onAfterShadow(n,S,E,C,X,Y,null)}}const k=S.children;for(let X=0,F=k.length;X<F;X++)M(k[X],E,C,T,b)}function P(S){S.target.removeEventListener("dispose",P);for(const E in u){const C=u[E],T=S.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}function n1(n){function e(){let U=!1;const ee=new Tt;let K=null;const _e=new Tt(0,0,0,0);return{setMask:function(v){K!==v&&!U&&(n.colorMask(v,v,v,v),K=v)},setLocked:function(v){U=v},setClear:function(v,w,I,B,Z){Z===!0&&(v*=B,w*=B,I*=B),ee.set(v,w,I,B),_e.equals(ee)===!1&&(n.clearColor(v,w,I,B),_e.copy(ee))},reset:function(){U=!1,K=null,_e.set(-1,0,0,0)}}}function t(){let U=!1,ee=null,K=null,_e=null;return{setTest:function(v){v?Re(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(v){ee!==v&&!U&&(n.depthMask(v),ee=v)},setFunc:function(v){if(K!==v){switch(v){case rg:n.depthFunc(n.NEVER);break;case og:n.depthFunc(n.ALWAYS);break;case ag:n.depthFunc(n.LESS);break;case Fa:n.depthFunc(n.LEQUAL);break;case sg:n.depthFunc(n.EQUAL);break;case lg:n.depthFunc(n.GEQUAL);break;case cg:n.depthFunc(n.GREATER);break;case ug:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=v}},setLocked:function(v){U=v},setClear:function(v){_e!==v&&(n.clearDepth(v),_e=v)},reset:function(){U=!1,ee=null,K=null,_e=null}}}function i(){let U=!1,ee=null,K=null,_e=null,v=null,w=null,I=null,B=null,Z=null;return{setTest:function(z){U||(z?Re(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(z){ee!==z&&!U&&(n.stencilMask(z),ee=z)},setFunc:function(z,re,ce){(K!==z||_e!==re||v!==ce)&&(n.stencilFunc(z,re,ce),K=z,_e=re,v=ce)},setOp:function(z,re,ce){(w!==z||I!==re||B!==ce)&&(n.stencilOp(z,re,ce),w=z,I=re,B=ce)},setLocked:function(z){U=z},setClear:function(z){Z!==z&&(n.clearStencil(z),Z=z)},reset:function(){U=!1,ee=null,K=null,_e=null,v=null,w=null,I=null,B=null,Z=null}}}const r=new e,o=new t,a=new i,s=new WeakMap,c=new WeakMap;let u={},p={},l=new WeakMap,h=[],d=null,f=!1,_=null,g=null,m=null,x=null,y=null,M=null,P=null,S=new qe(0,0,0),E=0,C=!1,T=null,b=null,k=null,X=null,F=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ie=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ne)[1]),q=ie>=1):ne.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),q=ie>=2);let $=null,se={};const de=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),Ge=new Tt().fromArray(de),Fe=new Tt().fromArray(Pe);function te(U,ee,K,_e){const v=new Uint8Array(4),w=n.createTexture();n.bindTexture(U,w),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let I=0;I<K;I++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,v):n.texImage2D(ee+I,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,v);return w}const pe={};pe[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Re(n.DEPTH_TEST),o.setFunc(Fa),ze(!1),tt(Vu),Re(n.CULL_FACE),ot(Hn);function Re(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function ye(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Qe(U,ee){return p[U]!==ee?(n.bindFramebuffer(U,ee),p[U]=ee,U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ee),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ze(U,ee){let K=h,_e=!1;if(U){K=l.get(ee),K===void 0&&(K=[],l.set(ee,K));const v=U.textures;if(K.length!==v.length||K[0]!==n.COLOR_ATTACHMENT0){for(let w=0,I=v.length;w<I;w++)K[w]=n.COLOR_ATTACHMENT0+w;K.length=v.length,_e=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,_e=!0);_e&&n.drawBuffers(K)}function H(U){return d!==U?(n.useProgram(U),d=U,!0):!1}const Je={[pr]:n.FUNC_ADD,[Hm]:n.FUNC_SUBTRACT,[Vm]:n.FUNC_REVERSE_SUBTRACT};Je[Gm]=n.MIN,Je[Wm]=n.MAX;const Be={[Xm]:n.ZERO,[jm]:n.ONE,[qm]:n.SRC_COLOR,[ul]:n.SRC_ALPHA,[Jm]:n.SRC_ALPHA_SATURATE,[$m]:n.DST_COLOR,[Km]:n.DST_ALPHA,[Ym]:n.ONE_MINUS_SRC_COLOR,[hl]:n.ONE_MINUS_SRC_ALPHA,[Qm]:n.ONE_MINUS_DST_COLOR,[Zm]:n.ONE_MINUS_DST_ALPHA,[eg]:n.CONSTANT_COLOR,[tg]:n.ONE_MINUS_CONSTANT_COLOR,[ig]:n.CONSTANT_ALPHA,[ng]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(U,ee,K,_e,v,w,I,B,Z,z){if(U===Hn){f===!0&&(ye(n.BLEND),f=!1);return}if(f===!1&&(Re(n.BLEND),f=!0),U!==zm){if(U!==_||z!==C){if((g!==pr||y!==pr)&&(n.blendEquation(n.FUNC_ADD),g=pr,y=pr),z)switch(U){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFunc(n.ONE,n.ONE);break;case Xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,x=null,M=null,P=null,S.set(0,0,0),E=0,_=U,C=z}return}v=v||ee,w=w||K,I=I||_e,(ee!==g||v!==y)&&(n.blendEquationSeparate(Je[ee],Je[v]),g=ee,y=v),(K!==m||_e!==x||w!==M||I!==P)&&(n.blendFuncSeparate(Be[K],Be[_e],Be[w],Be[I]),m=K,x=_e,M=w,P=I),(B.equals(S)===!1||Z!==E)&&(n.blendColor(B.r,B.g,B.b,Z),S.copy(B),E=Z),_=U,C=!1}function Ne(U,ee){U.side===hi?ye(n.CULL_FACE):Re(n.CULL_FACE);let K=U.side===ui;ee&&(K=!K),ze(K),U.blending===Wr&&U.transparent===!1?ot(Hn):ot(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const _e=U.stencilWrite;a.setTest(_e),_e&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Re(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){T!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),T=U)}function tt(U){U!==Bm?(Re(n.CULL_FACE),U!==b&&(U===Vu?n.cullFace(n.BACK):U===km?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),b=U}function he(U){U!==k&&(q&&n.lineWidth(U),k=U)}function ft(U,ee,K){U?(Re(n.POLYGON_OFFSET_FILL),(X!==ee||F!==K)&&(n.polygonOffset(ee,K),X=ee,F=K)):ye(n.POLYGON_OFFSET_FILL)}function D(U){U?Re(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function A(U){U===void 0&&(U=n.TEXTURE0+Y-1),$!==U&&(n.activeTexture(U),$=U)}function J(U,ee,K){K===void 0&&($===null?K=n.TEXTURE0+Y-1:K=$);let _e=se[K];_e===void 0&&(_e={type:void 0,texture:void 0},se[K]=_e),(_e.type!==U||_e.texture!==ee)&&($!==K&&(n.activeTexture(K),$=K),n.bindTexture(U,ee||pe[U]),_e.type=U,_e.texture=ee)}function le(){const U=se[$];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(U){Ge.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ge.copy(U))}function it(U){Fe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Fe.copy(U))}function at(U,ee){let K=c.get(ee);K===void 0&&(K=new WeakMap,c.set(ee,K));let _e=K.get(U);_e===void 0&&(_e=n.getUniformBlockIndex(ee,U.name),K.set(U,_e))}function mt(U,ee){const K=c.get(ee).get(U);s.get(ee)!==K&&(n.uniformBlockBinding(ee,K,U.__bindingPointIndex),s.set(ee,K))}function N(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},$=null,se={},p={},l=new WeakMap,h=[],d=null,f=!1,_=null,g=null,m=null,x=null,y=null,M=null,P=null,S=new qe(0,0,0),E=0,C=!1,T=null,b=null,k=null,X=null,F=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Re,disable:ye,bindFramebuffer:Qe,drawBuffers:Ze,useProgram:H,setBlending:ot,setMaterial:Ne,setFlipSided:ze,setCullFace:tt,setLineWidth:he,setPolygonOffset:ft,setScissorTest:D,activeTexture:A,bindTexture:J,unbindTexture:le,compressedTexImage2D:me,compressedTexImage3D:fe,texImage2D:ut,texImage3D:Ve,updateUBOMapping:at,uniformBlockBinding:mt,texStorage2D:xe,texStorage3D:He,texSubImage2D:ke,texSubImage3D:Me,compressedTexSubImage2D:be,compressedTexSubImage3D:Ye,scissor:Ue,viewport:it,reset:N}}function r1(n,e,t,i,r,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new je,p=new WeakMap;let l;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(D,A){return d?new OffscreenCanvas(D,A):$o("canvas")}function _(D,A,J){let le=1;const me=ft(D);if((me.width>J||me.height>J)&&(le=J/Math.max(me.width,me.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(le*me.width),ke=Math.floor(le*me.height);l===void 0&&(l=f(fe,ke));const Me=A?f(fe,ke):l;return Me.width=fe,Me.height=ke,Me.getContext("2d").drawImage(D,0,0,fe,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+fe+"x"+ke+")."),Me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==ii&&D.minFilter!==It}function m(D){n.generateMipmap(D)}function x(D,A,J,le,me=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=A;if(A===n.RED&&(J===n.FLOAT&&(fe=n.R32F),J===n.HALF_FLOAT&&(fe=n.R16F),J===n.UNSIGNED_BYTE&&(fe=n.R8)),A===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(fe=n.R8UI),J===n.UNSIGNED_SHORT&&(fe=n.R16UI),J===n.UNSIGNED_INT&&(fe=n.R32UI),J===n.BYTE&&(fe=n.R8I),J===n.SHORT&&(fe=n.R16I),J===n.INT&&(fe=n.R32I)),A===n.RG&&(J===n.FLOAT&&(fe=n.RG32F),J===n.HALF_FLOAT&&(fe=n.RG16F),J===n.UNSIGNED_BYTE&&(fe=n.RG8)),A===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(fe=n.RG8UI),J===n.UNSIGNED_SHORT&&(fe=n.RG16UI),J===n.UNSIGNED_INT&&(fe=n.RG32UI),J===n.BYTE&&(fe=n.RG8I),J===n.SHORT&&(fe=n.RG16I),J===n.INT&&(fe=n.RG32I)),A===n.RGB&&J===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),A===n.RGBA){const ke=me?Ga:gt.getTransfer(le);J===n.FLOAT&&(fe=n.RGBA32F),J===n.HALF_FLOAT&&(fe=n.RGBA16F),J===n.UNSIGNED_BYTE&&(fe=ke===St?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function y(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==ii&&D.minFilter!==It?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function M(D){const A=D.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&p.delete(A)}function P(D){const A=D.target;A.removeEventListener("dispose",P),C(A)}function S(D){const A=i.get(D);if(A.__webglInit===void 0)return;const J=D.source,le=h.get(J);if(le){const me=le[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&E(D),Object.keys(le).length===0&&h.delete(J)}i.remove(D)}function E(D){const A=i.get(D);n.deleteTexture(A.__webglTexture);const J=D.source,le=h.get(J);delete le[A.__cacheKey],a.memory.textures--}function C(D){const A=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(A.__webglFramebuffer[le]))for(let me=0;me<A.__webglFramebuffer[le].length;me++)n.deleteFramebuffer(A.__webglFramebuffer[le][me]);else n.deleteFramebuffer(A.__webglFramebuffer[le]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[le])}else{if(Array.isArray(A.__webglFramebuffer))for(let le=0;le<A.__webglFramebuffer.length;le++)n.deleteFramebuffer(A.__webglFramebuffer[le]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let le=0;le<A.__webglColorRenderbuffer.length;le++)A.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[le]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=D.textures;for(let le=0,me=J.length;le<me;le++){const fe=i.get(J[le]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(J[le])}i.remove(D)}let T=0;function b(){T=0}function k(){const D=T;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),T+=1,D}function X(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function F(D,A){const J=i.get(D);if(D.isVideoTexture&&tt(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const le=D.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(J,D,A);return}}t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+A)}function Y(D,A){const J=i.get(D);if(D.version>0&&J.__version!==D.version){Ge(J,D,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+A)}function q(D,A){const J=i.get(D);if(D.version>0&&J.__version!==D.version){Ge(J,D,A);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+A)}function ie(D,A){const J=i.get(D);if(D.version>0&&J.__version!==D.version){Fe(J,D,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+A)}const ne={[qr]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},$={[ii]:n.NEAREST,[Zu]:n.NEAREST_MIPMAP_NEAREST,[Xo]:n.NEAREST_MIPMAP_LINEAR,[It]:n.LINEAR,[Ha]:n.LINEAR_MIPMAP_NEAREST,[nn]:n.LINEAR_MIPMAP_LINEAR},se={[Dg]:n.NEVER,[Hg]:n.ALWAYS,[Og]:n.LESS,[Oh]:n.LEQUAL,[Fg]:n.EQUAL,[zg]:n.GEQUAL,[Bg]:n.GREATER,[kg]:n.NOTEQUAL};function de(D,A){if(A.type===Yt&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===It||A.magFilter===Ha||A.magFilter===Xo||A.magFilter===nn||A.minFilter===It||A.minFilter===Ha||A.minFilter===Xo||A.minFilter===nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ne[A.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ne[A.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ne[A.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,$[A.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,$[A.minFilter]),A.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ii||A.minFilter!==Xo&&A.minFilter!==nn||A.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Pe(D,A){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",M));const le=A.source;let me=h.get(le);me===void 0&&(me={},h.set(le,me));const fe=X(A);if(fe!==D.__cacheKey){me[fe]===void 0&&(me[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),me[fe].usedTimes++;const ke=me[D.__cacheKey];ke!==void 0&&(me[D.__cacheKey].usedTimes--,ke.usedTimes===0&&E(A)),D.__cacheKey=fe,D.__webglTexture=me[fe].texture}return J}function Ge(D,A,J){let le=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=n.TEXTURE_3D);const me=Pe(D,A),fe=A.source;t.bindTexture(le,D.__webglTexture,n.TEXTURE0+J);const ke=i.get(fe);if(fe.version!==ke.__version||me===!0){t.activeTexture(n.TEXTURE0+J);const Me=gt.getPrimaries(gt.workingColorSpace),be=A.colorSpace===Tn?null:gt.getPrimaries(A.colorSpace),Ye=A.colorSpace===Tn||Me===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let xe=_(A.image,!1,r.maxTextureSize);xe=he(A,xe);const He=o.convert(A.format,A.colorSpace),ut=o.convert(A.type);let Ve=x(A.internalFormat,He,ut,A.colorSpace,A.isVideoTexture);de(le,A);let Ue;const it=A.mipmaps,at=A.isVideoTexture!==!0,mt=ke.__version===void 0||me===!0,N=fe.dataReady,U=y(A,xe);if(A.isDepthTexture)Ve=n.DEPTH_COMPONENT16,A.type===Yt?Ve=n.DEPTH_COMPONENT32F:A.type===Yr?Ve=n.DEPTH_COMPONENT24:A.type===jo&&(Ve=n.DEPTH24_STENCIL8),mt&&(at?t.texStorage2D(n.TEXTURE_2D,1,Ve,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,xe.width,xe.height,0,He,ut,null));else if(A.isDataTexture)if(it.length>0){at&&mt&&t.texStorage2D(n.TEXTURE_2D,U,Ve,it[0].width,it[0].height);for(let ee=0,K=it.length;ee<K;ee++)Ue=it[ee],at?N&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ue.width,Ue.height,He,ut,Ue.data):t.texImage2D(n.TEXTURE_2D,ee,Ve,Ue.width,Ue.height,0,He,ut,Ue.data);A.generateMipmaps=!1}else at?(mt&&t.texStorage2D(n.TEXTURE_2D,U,Ve,xe.width,xe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe.width,xe.height,He,ut,xe.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,xe.width,xe.height,0,He,ut,xe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,U,Ve,it[0].width,it[0].height,xe.depth);for(let ee=0,K=it.length;ee<K;ee++)Ue=it[ee],A.format!==Ni?He!==null?at?N&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Ue.width,Ue.height,xe.depth,He,Ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Ve,Ue.width,Ue.height,xe.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Ue.width,Ue.height,xe.depth,He,ut,Ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Ve,Ue.width,Ue.height,xe.depth,0,He,ut,Ue.data)}else{at&&mt&&t.texStorage2D(n.TEXTURE_2D,U,Ve,it[0].width,it[0].height);for(let ee=0,K=it.length;ee<K;ee++)Ue=it[ee],A.format!==Ni?He!==null?at?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Ue.width,Ue.height,He,Ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Ve,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?N&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ue.width,Ue.height,He,ut,Ue.data):t.texImage2D(n.TEXTURE_2D,ee,Ve,Ue.width,Ue.height,0,He,ut,Ue.data)}else if(A.isDataArrayTexture)at?(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,U,Ve,xe.width,xe.height,xe.depth),N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,He,ut,xe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,xe.width,xe.height,xe.depth,0,He,ut,xe.data);else if(A.isData3DTexture)at?(mt&&t.texStorage3D(n.TEXTURE_3D,U,Ve,xe.width,xe.height,xe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,He,ut,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,xe.width,xe.height,xe.depth,0,He,ut,xe.data);else if(A.isFramebufferTexture){if(mt)if(at)t.texStorage2D(n.TEXTURE_2D,U,Ve,xe.width,xe.height);else{let ee=xe.width,K=xe.height;for(let _e=0;_e<U;_e++)t.texImage2D(n.TEXTURE_2D,_e,Ve,ee,K,0,He,ut,null),ee>>=1,K>>=1}}else if(it.length>0){if(at&&mt){const ee=ft(it[0]);t.texStorage2D(n.TEXTURE_2D,U,Ve,ee.width,ee.height)}for(let ee=0,K=it.length;ee<K;ee++)Ue=it[ee],at?N&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,He,ut,Ue):t.texImage2D(n.TEXTURE_2D,ee,Ve,He,ut,Ue);A.generateMipmaps=!1}else if(at){if(mt){const ee=ft(xe);t.texStorage2D(n.TEXTURE_2D,U,Ve,ee.width,ee.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,ut,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,He,ut,xe);g(A)&&m(le),ke.__version=fe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Fe(D,A,J){if(A.image.length!==6)return;const le=Pe(D,A),me=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+J);const fe=i.get(me);if(me.version!==fe.__version||le===!0){t.activeTexture(n.TEXTURE0+J);const ke=gt.getPrimaries(gt.workingColorSpace),Me=A.colorSpace===Tn?null:gt.getPrimaries(A.colorSpace),be=A.colorSpace===Tn||ke===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,xe=A.image[0]&&A.image[0].isDataTexture,He=[];for(let K=0;K<6;K++)!Ye&&!xe?He[K]=_(A.image[K],!0,r.maxCubemapSize):He[K]=xe?A.image[K].image:A.image[K],He[K]=he(A,He[K]);const ut=He[0],Ve=o.convert(A.format,A.colorSpace),Ue=o.convert(A.type),it=x(A.internalFormat,Ve,Ue,A.colorSpace),at=A.isVideoTexture!==!0,mt=fe.__version===void 0||le===!0,N=me.dataReady;let U=y(A,ut);de(n.TEXTURE_CUBE_MAP,A);let ee;if(Ye){at&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,it,ut.width,ut.height);for(let K=0;K<6;K++){ee=He[K].mipmaps;for(let _e=0;_e<ee.length;_e++){const v=ee[_e];A.format!==Ni?Ve!==null?at?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,v.width,v.height,Ve,v.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,it,v.width,v.height,0,v.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,v.width,v.height,Ve,Ue,v.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,it,v.width,v.height,0,Ve,Ue,v.data)}}}else{if(ee=A.mipmaps,at&&mt){ee.length>0&&U++;const K=ft(He[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,U,it,K.width,K.height)}for(let K=0;K<6;K++)if(xe){at?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,He[K].width,He[K].height,Ve,Ue,He[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,it,He[K].width,He[K].height,0,Ve,Ue,He[K].data);for(let _e=0;_e<ee.length;_e++){const v=ee[_e].image[K].image;at?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,v.width,v.height,Ve,Ue,v.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,it,v.width,v.height,0,Ve,Ue,v.data)}}else{at?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ve,Ue,He[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,it,Ve,Ue,He[K]);for(let _e=0;_e<ee.length;_e++){const v=ee[_e];at?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,Ve,Ue,v.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,it,Ve,Ue,v.image[K])}}}g(A)&&m(n.TEXTURE_CUBE_MAP),fe.__version=me.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function te(D,A,J,le,me,fe){const ke=o.convert(J.format,J.colorSpace),Me=o.convert(J.type),be=x(J.internalFormat,ke,Me,J.colorSpace);if(!i.get(A).__hasExternalTextures){const Ye=Math.max(1,A.width>>fe),xe=Math.max(1,A.height>>fe);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,fe,be,Ye,xe,A.depth,0,ke,Me,null):t.texImage2D(me,fe,be,Ye,xe,0,ke,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ze(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,me,i.get(J).__webglTexture,0,Ne(A)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,me,i.get(J).__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(D,A,J){if(n.bindRenderbuffer(n.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let le=n.DEPTH_COMPONENT24;if(J||ze(A)){const me=A.depthTexture;me&&me.isDepthTexture&&(me.type===Yt?le=n.DEPTH_COMPONENT32F:me.type===Yr&&(le=n.DEPTH_COMPONENT24));const fe=Ne(A);ze(A)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,le,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,le,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){const le=Ne(A);J&&ze(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,A.width,A.height):ze(A)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,D)}else{const le=A.textures;for(let me=0;me<le.length;me++){const fe=le[me],ke=o.convert(fe.format,fe.colorSpace),Me=o.convert(fe.type),be=x(fe.internalFormat,ke,Me,fe.colorSpace),Ye=Ne(A);J&&ze(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,be,A.width,A.height):ze(A)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,be,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,be,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);const J=i.get(A.depthTexture).__webglTexture,le=Ne(A);if(A.depthTexture.format===Kr)ze(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(A.depthTexture.format===qo)ze(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ye(D){const A=i.get(D),J=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Re(A.__webglFramebuffer,D)}else if(J){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]=n.createRenderbuffer(),pe(A.__webglDepthbuffer[le],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),pe(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(D,A,J){const le=i.get(D);A!==void 0&&te(le.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&ye(D)}function Ze(D){const A=D.texture,J=i.get(D),le=i.get(A);D.addEventListener("dispose",P);const me=D.textures,fe=D.isWebGLCubeRenderTarget===!0,ke=me.length>1;if(ke||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=A.version,a.memory.textures++),fe){J.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Me]=[];for(let be=0;be<A.mipmaps.length;be++)J.__webglFramebuffer[Me][be]=n.createFramebuffer()}else J.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Me=0;Me<A.mipmaps.length;Me++)J.__webglFramebuffer[Me]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(ke)for(let Me=0,be=me.length;Me<be;Me++){const Ye=i.get(me[Me]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&ze(D)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Me=0;Me<me.length;Me++){const be=me[Me];J.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[Me]);const Ye=o.convert(be.format,be.colorSpace),xe=o.convert(be.type),He=x(be.internalFormat,Ye,xe,be.colorSpace,D.isXRRenderTarget===!0),ut=Ne(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,He,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,J.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),de(n.TEXTURE_CUBE_MAP,A);for(let Me=0;Me<6;Me++)if(A.mipmaps&&A.mipmaps.length>0)for(let be=0;be<A.mipmaps.length;be++)te(J.__webglFramebuffer[Me][be],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,be);else te(J.__webglFramebuffer[Me],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(A)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Me=0,be=me.length;Me<be;Me++){const Ye=me[Me],xe=i.get(Ye);t.bindTexture(n.TEXTURE_2D,xe.__webglTexture),de(n.TEXTURE_2D,Ye),te(J.__webglFramebuffer,D,Ye,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),g(Ye)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Me=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,le.__webglTexture),de(Me,A),A.mipmaps&&A.mipmaps.length>0)for(let be=0;be<A.mipmaps.length;be++)te(J.__webglFramebuffer[be],D,A,n.COLOR_ATTACHMENT0,Me,be);else te(J.__webglFramebuffer,D,A,n.COLOR_ATTACHMENT0,Me,0);g(A)&&m(Me),t.unbindTexture()}D.depthBuffer&&ye(D)}function H(D){const A=D.textures;for(let J=0,le=A.length;J<le;J++){const me=A[J];if(g(me)){const fe=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ke=i.get(me).__webglTexture;t.bindTexture(fe,ke),m(fe),t.unbindTexture()}}}const Je=[],Be=[];function ot(D){if(D.samples>0){if(ze(D)===!1){const A=D.textures,J=D.width,le=D.height;let me=n.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=i.get(D),Me=A.length>1;if(Me)for(let be=0;be<A.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let be=0;be<A.length;be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ke.__webglColorRenderbuffer[be]);const Ye=i.get(A[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,J,le,0,0,J,le,me,n.NEAREST),c===!0&&(Je.length=0,Be.length=0,Je.push(n.COLOR_ATTACHMENT0+be),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Je.push(fe),Be.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let be=0;be<A.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ke.__webglColorRenderbuffer[be]);const Ye=i.get(A[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const A=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ne(D){return Math.min(r.maxSamples,D.samples)}function ze(D){const A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function tt(D){const A=a.render.frame;p.get(D)!==A&&(p.set(D,A),D.update())}function he(D,A){const J=D.colorSpace,le=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Dt&&J!==Tn&&(gt.getTransfer(J)===St?(le!==Ni||me!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function ft(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=b,this.setTexture2D=F,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=ie,this.rebindTextures=Qe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ze}function o1(n,e){function t(i,r=Tn){let o;const a=gt.getTransfer(r);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Ju)return n.UNSIGNED_SHORT_4_4_4_4;if(i===eh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tg)return n.BYTE;if(i===Mg)return n.SHORT;if(i===$u)return n.UNSIGNED_SHORT;if(i===Qu)return n.INT;if(i===Yr)return n.UNSIGNED_INT;if(i===Yt)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===Sg)return n.ALPHA;if(i===wg)return n.RGB;if(i===Ni)return n.RGBA;if(i===Eg)return n.LUMINANCE;if(i===Ag)return n.LUMINANCE_ALPHA;if(i===Kr)return n.DEPTH_COMPONENT;if(i===qo)return n.DEPTH_STENCIL;if(i===pl)return n.RED;if(i===th)return n.RED_INTEGER;if(i===Rg)return n.RG;if(i===ih)return n.RG_INTEGER;if(i===nh)return n.RGBA_INTEGER;if(i===fl||i===ml||i===gl||i===_l)if(a===St)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===fl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_l)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===fl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_l)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===oh||i===ah||i===sh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===rh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ah)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===ch||i===uh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===lh||i===ch)return a===St?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===uh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hh||i===dh||i===ph||i===fh||i===mh||i===gh||i===_h||i===vh||i===yh||i===xh||i===Th||i===Mh||i===bh||i===Sh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===hh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_h)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Th)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vl||i===wh||i===Eh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===vl)return a===St?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cg||i===Ah||i===Rh||i===Ch)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===vl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ah)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ch)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class a1 extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sn extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s1={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null;const s=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(u,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const p=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],h=p.position.distanceTo(l.position),d=.02,f=.005;u.inputState.pinching&&h>d+f?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-f&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(s1)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class u1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ht,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new $i({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $t(new Go(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class h1 extends fr{constructor(e,t){super();const i=this;let r=null,o=1,a=null,s="local-floor",c=1,u=null,p=null,l=null,h=null,d=null,f=null;const _=new u1,g=t.getContextAttributes();let m=null,x=null;const y=[],M=[],P=new je;let S=null;const E=new oi;E.layers.enable(1),E.viewport=new Tt;const C=new oi;C.layers.enable(2),C.viewport=new Tt;const T=[E,C],b=new a1;b.layers.enable(1),b.layers.enable(2);let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=y[te];return pe===void 0&&(pe=new Jl,y[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=y[te];return pe===void 0&&(pe=new Jl,y[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=y[te];return pe===void 0&&(pe=new Jl,y[te]=pe),pe.getHandSpace()};function F(te){const pe=M.indexOf(te.inputSource);if(pe===-1)return;const Re=y[pe];Re!==void 0&&(Re.update(te.inputSource,te.frame,u||a),Re.dispatchEvent({type:te.type,data:te.inputSource}))}function Y(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let te=0;te<y.length;te++){const pe=M[te];pe!==null&&(M[te]=null,y[te].disconnect(pe))}k=null,X=null,_.reset(),e.setRenderTarget(m),d=null,h=null,l=null,r=null,x=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return l},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const pe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new mr(d.framebufferWidth,d.framebufferHeight,{format:Ni,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let pe=null,Re=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=g.stencil?qo:Kr,Re=g.stencil?jo:Yr);const Qe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:o};l=new XRWebGLBinding(r,t),h=l.createProjectionLayer(Qe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new mr(h.textureWidth,h.textureHeight,{format:Ni,type:Gn,depthTexture:new bd(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(s),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(te){for(let pe=0;pe<te.removed.length;pe++){const Re=te.removed[pe],ye=M.indexOf(Re);ye>=0&&(M[ye]=null,y[ye].disconnect(Re))}for(let pe=0;pe<te.added.length;pe++){const Re=te.added[pe];let ye=M.indexOf(Re);if(ye===-1){for(let Ze=0;Ze<y.length;Ze++)if(Ze>=M.length){M.push(Re),ye=Ze;break}else if(M[Ze]===null){M[Ze]=Re,ye=Ze;break}if(ye===-1)break}const Qe=y[ye];Qe&&Qe.connect(Re)}}const ie=new O,ne=new O;function $(te,pe,Re){ie.setFromMatrixPosition(pe.matrixWorld),ne.setFromMatrixPosition(Re.matrixWorld);const ye=ie.distanceTo(ne),Qe=pe.projectionMatrix.elements,Ze=Re.projectionMatrix.elements,H=Qe[14]/(Qe[10]-1),Je=Qe[14]/(Qe[10]+1),Be=(Qe[9]+1)/Qe[5],ot=(Qe[9]-1)/Qe[5],Ne=(Qe[8]-1)/Qe[0],ze=(Ze[8]+1)/Ze[0],tt=H*Ne,he=H*ze,ft=ye/(-Ne+ze),D=ft*-Ne;pe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(D),te.translateZ(ft),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const A=H+ft,J=Je+ft,le=tt-D,me=he+(ye-D),fe=Be*Je/J*A,ke=ot*Je/J*A;te.projectionMatrix.makePerspective(le,me,fe,ke,A,J),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function se(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;_.texture!==null&&(te.near=_.depthNear,te.far=_.depthFar),b.near=C.near=E.near=te.near,b.far=C.far=E.far=te.far,(k!==b.near||X!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,X=b.far,E.near=k,E.far=X,C.near=k,C.far=X,E.updateProjectionMatrix(),C.updateProjectionMatrix(),te.updateProjectionMatrix());const pe=te.parent,Re=b.cameras;se(b,pe);for(let ye=0;ye<Re.length;ye++)se(Re[ye],pe);Re.length===2?$(b,E,C):b.projectionMatrix.copy(E.projectionMatrix),de(te,b,pe)};function de(te,pe,Re){Re===null?te.matrix.copy(pe.matrixWorld):(te.matrix.copy(Re.matrixWorld),te.matrix.invert(),te.matrix.multiply(pe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Qr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(te){c=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null};let Pe=null;function Ge(te,pe){if(p=pe.getViewerPose(u||a),f=pe,p!==null){const Re=p.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ye=!1;Re.length!==b.cameras.length&&(b.cameras.length=0,ye=!0);for(let Ze=0;Ze<Re.length;Ze++){const H=Re[Ze];let Je=null;if(d!==null)Je=d.getViewport(H);else{const ot=l.getViewSubImage(h,H);Je=ot.viewport,Ze===0&&(e.setRenderTargetTextures(x,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(x))}let Be=T[Ze];Be===void 0&&(Be=new oi,Be.layers.enable(Ze),Be.viewport=new Tt,T[Ze]=Be),Be.matrix.fromArray(H.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(H.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Je.x,Je.y,Je.width,Je.height),Ze===0&&(b.matrix.copy(Be.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ye===!0&&b.cameras.push(Be)}const Qe=r.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")){const Ze=l.getDepthInformation(Re[0]);Ze&&Ze.isValid&&Ze.texture&&_.init(e,Ze,r.renderState)}}for(let Re=0;Re<y.length;Re++){const ye=M[Re],Qe=y[Re];ye!==null&&Qe!==void 0&&Qe.update(ye,pe,u||a)}_.render(e,b),Pe&&Pe(te,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),f=null}const Fe=new md;Fe.setAnimationLoop(Ge),this.setAnimationLoop=function(te){Pe=te},this.dispose=function(){}}}const br=new _n,d1=new et;function p1(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ud(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),l(g,m)):m.isMeshPhongMaterial?(o(g,m),p(g,m)):m.isMeshStandardMaterial?(o(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(o(g,m),f(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),_(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?c(g,m,x,y):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ui&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ui&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,M=x.envMapRotation;if(y&&(g.envMap.value=y,br.copy(M),br.x*=-1,br.y*=-1,br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),g.envMapRotation.value.setFromMatrix4(d1.makeRotationFromEuler(br)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*P,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function p(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function l(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ui&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function f1(n,e,t,i){let r={},o={},a=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const M=y.program;i.uniformBlockBinding(x,M)}function u(x,y){let M=r[x.id];M===void 0&&(f(x),M=p(x),r[x.id]=M,x.addEventListener("dispose",g));const P=y.program;i.updateUBOMapping(x,P);const S=e.render.frame;o[x.id]!==S&&(h(x),o[x.id]=S)}function p(x){const y=l();x.__bindingPointIndex=y;const M=n.createBuffer(),P=x.__size,S=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function l(){for(let x=0;x<s;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=r[x.id],M=x.uniforms,P=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,E=M.length;S<E;S++){const C=Array.isArray(M[S])?M[S]:[M[S]];for(let T=0,b=C.length;T<b;T++){const k=C[T];if(d(k,S,T,P)===!0){const X=k.__offset,F=Array.isArray(k.value)?k.value:[k.value];let Y=0;for(let q=0;q<F.length;q++){const ie=F[q],ne=_(ie);typeof ie=="number"||typeof ie=="boolean"?(k.__data[0]=ie,n.bufferSubData(n.UNIFORM_BUFFER,X+Y,k.__data)):ie.isMatrix3?(k.__data[0]=ie.elements[0],k.__data[1]=ie.elements[1],k.__data[2]=ie.elements[2],k.__data[3]=0,k.__data[4]=ie.elements[3],k.__data[5]=ie.elements[4],k.__data[6]=ie.elements[5],k.__data[7]=0,k.__data[8]=ie.elements[6],k.__data[9]=ie.elements[7],k.__data[10]=ie.elements[8],k.__data[11]=0):(ie.toArray(k.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,y,M,P){const S=x.value,E=y+"_"+M;if(P[E]===void 0)return typeof S=="number"||typeof S=="boolean"?P[E]=S:P[E]=S.clone(),!0;{const C=P[E];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return P[E]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function f(x){const y=x.uniforms;let M=0;const P=16;for(let E=0,C=y.length;E<C;E++){const T=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,k=T.length;b<k;b++){const X=T[b],F=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,q=F.length;Y<q;Y++){const ie=F[Y],ne=_(ie),$=M%P;$!==0&&P-$<ne.boundary&&(M+=P-$),X.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=ne.storage}}}const S=M%P;return S>0&&(M+=P-S),x.__size=M,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function m(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},o={}}return{bind:c,update:u,dispose:m}}class m1{constructor(e={}){const{canvas:t=o_(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),f=new Int32Array(4);let _=null,g=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this._useLegacyLights=!1,this.toneMapping=Vn,this.toneMappingExposure=1;const y=this;let M=!1,P=0,S=0,E=null,C=-1,T=null;const b=new Tt,k=new Tt;let X=null;const F=new qe(0);let Y=0,q=t.width,ie=t.height,ne=1,$=null,se=null;const de=new Tt(0,0,q,ie),Pe=new Tt(0,0,q,ie);let Ge=!1;const Fe=new Gl;let te=!1,pe=!1;const Re=new et,ye=new O,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ze(){return E===null?ne:1}let H=i;function Je(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ll}`),t.addEventListener("webglcontextlost",U,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",K,!1),H===null){const V="webgl2";if(H=Je(V,R),H===null)throw Je(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Be,ot,Ne,ze,tt,he,ft,D,A,J,le,me,fe,ke,Me,be,Ye,xe,He,ut,Ve,Ue,it,at;function mt(){Be=new by(H),Be.init(),Ue=new o1(H,Be),ot=new _y(H,Be,e,Ue),Ne=new n1(H),ze=new Ey(H),tt=new Gx,he=new r1(H,Be,Ne,tt,ot,Ue,ze),ft=new yy(y),D=new My(y),A=new U_(H),it=new my(H,A),J=new Sy(H,A,ze,it),le=new Ry(H,J,A,ze),He=new Ay(H,ot,he),be=new vy(tt),me=new Vx(y,ft,D,Be,ot,it,be),fe=new p1(y,tt),ke=new Xx,Me=new $x(Be),xe=new fy(y,ft,D,Ne,le,h,c),Ye=new i1(y,le,ot),at=new f1(H,ze,ot,Ne),ut=new gy(H,Be,ze),Ve=new wy(H,Be,ze),ze.programs=me.programs,y.capabilities=ot,y.extensions=Be,y.properties=tt,y.renderLists=ke,y.shadowMap=Ye,y.state=Ne,y.info=ze}mt();const N=new h1(y,H);this.xr=N,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=Be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(q,ie,!1))},this.getSize=function(R){return R.set(q,ie)},this.setSize=function(R,V,j=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,ie=V,t.width=Math.floor(R*ne),t.height=Math.floor(V*ne),j===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(q*ne,ie*ne).floor()},this.setDrawingBufferSize=function(R,V,j){q=R,ie=V,ne=j,t.width=Math.floor(R*j),t.height=Math.floor(V*j),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(de)},this.setViewport=function(R,V,j,G){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,V,j,G),Ne.viewport(b.copy(de).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(Pe)},this.setScissor=function(R,V,j,G){R.isVector4?Pe.set(R.x,R.y,R.z,R.w):Pe.set(R,V,j,G),Ne.scissor(k.copy(Pe).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(R){Ne.setScissorTest(Ge=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(R=!0,V=!0,j=!0){let G=0;if(R){let W=!1;if(E!==null){const ge=E.texture.format;W=ge===nh||ge===ih||ge===th}if(W){const ge=E.texture.type,Ae=ge===Gn||ge===Yr||ge===$u||ge===jo||ge===Ju||ge===eh,ve=xe.getClearColor(),Ee=xe.getClearAlpha(),We=ve.r,rt=ve.g,Ke=ve.b;Ae?(d[0]=We,d[1]=rt,d[2]=Ke,d[3]=Ee,H.clearBufferuiv(H.COLOR,0,d)):(f[0]=We,f[1]=rt,f[2]=Ke,f[3]=Ee,H.clearBufferiv(H.COLOR,0,f))}else G|=H.COLOR_BUFFER_BIT}V&&(G|=H.DEPTH_BUFFER_BIT),j&&(G|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",U,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",K,!1),ke.dispose(),Me.dispose(),tt.dispose(),ft.dispose(),D.dispose(),le.dispose(),it.dispose(),at.dispose(),me.dispose(),N.dispose(),N.removeEventListener("sessionstart",z),N.removeEventListener("sessionend",re),ce.stop()};function U(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=ze.autoReset,V=Ye.enabled,j=Ye.autoUpdate,G=Ye.needsUpdate,W=Ye.type;mt(),ze.autoReset=R,Ye.enabled=V,Ye.autoUpdate=j,Ye.needsUpdate=G,Ye.type=W}function K(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const V=R.target;V.removeEventListener("dispose",_e),v(V)}function v(R){w(R),tt.remove(R)}function w(R){const V=tt.get(R).programs;V!==void 0&&(V.forEach(function(j){me.releaseProgram(j)}),R.isShaderMaterial&&me.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,j,G,W,ge){V===null&&(V=Qe);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,ve=De(R,V,j,G,W);Ne.setMaterial(G,Ae);let Ee=j.index,We=1;if(G.wireframe===!0){if(Ee=J.getWireframeAttribute(j),Ee===void 0)return;We=2}const rt=j.drawRange,Ke=j.attributes.position;let Et=rt.start*We,ci=(rt.start+rt.count)*We;ge!==null&&(Et=Math.max(Et,ge.start*We),ci=Math.min(ci,(ge.start+ge.count)*We)),Ee!==null?(Et=Math.max(Et,0),ci=Math.min(ci,Ee.count)):Ke!=null&&(Et=Math.max(Et,0),ci=Math.min(ci,Ke.count));const Li=ci-Et;if(Li<0||Li===1/0)return;it.setup(W,G,ve,j,Ee);let ti,At=ut;if(Ee!==null&&(ti=A.get(Ee),At=Ve,At.setIndex(ti)),W.isMesh)G.wireframe===!0?(Ne.setLineWidth(G.wireframeLinewidth*Ze()),At.setMode(H.LINES)):At.setMode(H.TRIANGLES);else if(W.isLine){let nt=G.linewidth;nt===void 0&&(nt=1),Ne.setLineWidth(nt*Ze()),W.isLineSegments?At.setMode(H.LINES):W.isLineLoop?At.setMode(H.LINE_LOOP):At.setMode(H.LINE_STRIP)}else W.isPoints?At.setMode(H.POINTS):W.isSprite&&At.setMode(H.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?At.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)At.renderInstances(Et,Li,W.count);else if(j.isInstancedBufferGeometry){const nt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,nl=Math.min(j.instanceCount,nt);At.renderInstances(Et,Li,nl)}else At.render(Et,Li)};function I(R,V,j){R.transparent===!0&&R.side===hi&&R.forceSinglePass===!1?(R.side=ui,R.needsUpdate=!0,Le(R,V,j),R.side=xn,R.needsUpdate=!0,Le(R,V,j),R.side=hi):Le(R,V,j)}this.compile=function(R,V,j=null){j===null&&(j=R),g=Me.get(j),g.init(V),x.push(g),j.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),R!==j&&R.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(y._useLegacyLights);const G=new Set;return R.traverse(function(W){const ge=W.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const ve=ge[Ae];I(ve,j,W),G.add(ve)}else I(ge,j,W),G.add(ge)}),x.pop(),g=null,G},this.compileAsync=function(R,V,j=null){const G=this.compile(R,V,j);return new Promise(W=>{function ge(){if(G.forEach(function(Ae){tt.get(Ae).currentProgram.isReady()&&G.delete(Ae)}),G.size===0){W(R);return}setTimeout(ge,10)}Be.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let B=null;function Z(R){B&&B(R)}function z(){ce.stop()}function re(){ce.start()}const ce=new md;ce.setAnimationLoop(Z),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(R){B=R,N.setAnimationLoop(R),R===null?ce.stop():ce.start()},N.addEventListener("sessionstart",z),N.addEventListener("sessionend",re),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(V),V=N.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,V,E),g=Me.get(R,x.length),g.init(V),x.push(g),Re.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Fe.setFromProjectionMatrix(Re),pe=this.localClippingEnabled,te=be.init(this.clippingPlanes,pe),_=ke.get(R,m.length),_.init(),m.push(_),ue(R,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort($,se);const j=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1;j&&xe.addToRenderList(_,R),this.info.render.frame++,te===!0&&be.beginShadows();const G=g.state.shadowsArray;Ye.render(G,R,V),te===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,ge=_.transmissive;if(g.setupLights(y._useLegacyLights),V.isArrayCamera){const Ae=V.cameras;if(ge.length>0)for(let ve=0,Ee=Ae.length;ve<Ee;ve++){const We=Ae[ve];oe(W,ge,R,We)}j&&xe.render(R);for(let ve=0,Ee=Ae.length;ve<Ee;ve++){const We=Ae[ve];ae(_,R,We,We.viewport)}}else ge.length>0&&oe(W,ge,R,V),j&&xe.render(R),ae(_,R,V);E!==null&&(he.updateMultisampleRenderTarget(E),he.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(y,R,V),it.resetDefaultState(),C=-1,T=null,x.pop(),x.length>0?(g=x[x.length-1],te===!0&&be.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ue(R,V,j,G){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Fe.intersectsSprite(R)){G&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const ge=le.update(R),Ae=R.material;Ae.visible&&_.push(R,ge,Ae,j,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Fe.intersectsObject(R))){const ge=le.update(R),Ae=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ye.copy(ge.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Ae)){const ve=ge.groups;for(let Ee=0,We=ve.length;Ee<We;Ee++){const rt=ve[Ee],Ke=Ae[rt.materialIndex];Ke&&Ke.visible&&_.push(R,ge,Ke,j,ye.z,rt)}}else Ae.visible&&_.push(R,ge,Ae,j,ye.z,null)}}const W=R.children;for(let ge=0,Ae=W.length;ge<Ae;ge++)ue(W[ge],V,j,G)}function ae(R,V,j,G){const W=R.opaque,ge=R.transmissive,Ae=R.transparent;g.setupLightsView(j),te===!0&&be.setGlobalState(y.clippingPlanes,j),G&&Ne.viewport(b.copy(G)),W.length>0&&we(W,V,j),ge.length>0&&we(ge,V,j),Ae.length>0&&we(Ae,V,j),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function oe(R,V,j,G){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new mr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Ui:Gn,minFilter:nn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const W=g.state.transmissionRenderTarget[G.id],ge=G.viewport||b;W.setSize(ge.z,ge.w);const Ae=y.getRenderTarget();y.setRenderTarget(W),y.getClearColor(F),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear();const ve=y.toneMapping;y.toneMapping=Vn;const Ee=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),te===!0&&be.setGlobalState(y.clippingPlanes,G),we(R,j,G),he.updateMultisampleRenderTarget(W),he.updateRenderTargetMipmap(W),Be.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let rt=0,Ke=V.length;rt<Ke;rt++){const Et=V[rt],ci=Et.object,Li=Et.geometry,ti=Et.material,At=Et.group;if(ti.side===hi&&ci.layers.test(G.layers)){const nt=ti.side;ti.side=ui,ti.needsUpdate=!0,Te(ci,j,G,Li,ti,At),ti.side=nt,ti.needsUpdate=!0,We=!0}}We===!0&&(he.updateMultisampleRenderTarget(W),he.updateRenderTargetMipmap(W))}y.setRenderTarget(Ae),y.setClearColor(F,Y),Ee!==void 0&&(G.viewport=Ee),y.toneMapping=ve}function we(R,V,j){const G=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ge=R.length;W<ge;W++){const Ae=R[W],ve=Ae.object,Ee=Ae.geometry,We=G===null?Ae.material:G,rt=Ae.group;ve.layers.test(j.layers)&&Te(ve,V,j,Ee,We,rt)}}function Te(R,V,j,G,W,ge){R.onBeforeRender(y,V,j,G,W,ge),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(y,V,j,G,R,ge),W.transparent===!0&&W.side===hi&&W.forceSinglePass===!1?(W.side=ui,W.needsUpdate=!0,y.renderBufferDirect(j,V,G,W,R,ge),W.side=xn,W.needsUpdate=!0,y.renderBufferDirect(j,V,G,W,R,ge),W.side=hi):y.renderBufferDirect(j,V,G,W,R,ge),R.onAfterRender(y,V,j,G,W,ge)}function Le(R,V,j){V.isScene!==!0&&(V=Qe);const G=tt.get(R),W=g.state.lights,ge=g.state.shadowsArray,Ae=W.state.version,ve=me.getParameters(R,W.state,ge,V,j),Ee=me.getProgramCacheKey(ve);let We=G.programs;G.environment=R.isMeshStandardMaterial?V.environment:null,G.fog=V.fog,G.envMap=(R.isMeshStandardMaterial?D:ft).get(R.envMap||G.environment),G.envMapRotation=G.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",_e),We=new Map,G.programs=We);let rt=We.get(Ee);if(rt!==void 0){if(G.currentProgram===rt&&G.lightsStateVersion===Ae)return Ce(R,ve),rt}else ve.uniforms=me.getUniforms(R),R.onBuild(j,ve,y),R.onBeforeCompile(ve,y),rt=me.acquireProgram(ve,Ee),We.set(Ee,rt),G.uniforms=ve.uniforms;const Ke=G.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=be.uniform),Ce(R,ve),G.needsLights=Mt(R),G.lightsStateVersion=Ae,G.needsLights&&(Ke.ambientLightColor.value=W.state.ambient,Ke.lightProbe.value=W.state.probe,Ke.directionalLights.value=W.state.directional,Ke.directionalLightShadows.value=W.state.directionalShadow,Ke.spotLights.value=W.state.spot,Ke.spotLightShadows.value=W.state.spotShadow,Ke.rectAreaLights.value=W.state.rectArea,Ke.ltc_1.value=W.state.rectAreaLTC1,Ke.ltc_2.value=W.state.rectAreaLTC2,Ke.pointLights.value=W.state.point,Ke.pointLightShadows.value=W.state.pointShadow,Ke.hemisphereLights.value=W.state.hemi,Ke.directionalShadowMap.value=W.state.directionalShadowMap,Ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ke.spotShadowMap.value=W.state.spotShadowMap,Ke.spotLightMatrix.value=W.state.spotLightMatrix,Ke.spotLightMap.value=W.state.spotLightMap,Ke.pointShadowMap.value=W.state.pointShadowMap,Ke.pointShadowMatrix.value=W.state.pointShadowMatrix),G.currentProgram=rt,G.uniformsList=null,rt}function Xe(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=ms.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Ce(R,V){const j=tt.get(R);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function De(R,V,j,G,W){V.isScene!==!0&&(V=Qe),he.resetTextureUnits();const ge=V.fog,Ae=G.isMeshStandardMaterial?V.environment:null,ve=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Dt,Ee=(G.isMeshStandardMaterial?D:ft).get(G.envMap||Ae),We=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,rt=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ke=!!j.morphAttributes.position,Et=!!j.morphAttributes.normal,ci=!!j.morphAttributes.color;let Li=Vn;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Li=y.toneMapping);const ti=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,At=ti!==void 0?ti.length:0,nt=tt.get(G),nl=g.state.lights;if(te===!0&&(pe===!0||R!==T)){const Ii=R===T&&G.id===C;be.setState(G,R,Ii)}let rl=!1;G.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==nl.state.version||nt.outputColorSpace!==ve||W.isBatchedMesh&&nt.batching===!1||!W.isBatchedMesh&&nt.batching===!0||W.isInstancedMesh&&nt.instancing===!1||!W.isInstancedMesh&&nt.instancing===!0||W.isSkinnedMesh&&nt.skinning===!1||!W.isSkinnedMesh&&nt.skinning===!0||W.isInstancedMesh&&nt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&nt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&nt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&nt.instancingMorph===!1&&W.morphTexture!==null||nt.envMap!==Ee||G.fog===!0&&nt.fog!==ge||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==be.numPlanes||nt.numIntersection!==be.numIntersection)||nt.vertexAlphas!==We||nt.vertexTangents!==rt||nt.morphTargets!==Ke||nt.morphNormals!==Et||nt.morphColors!==ci||nt.toneMapping!==Li||nt.morphTargetsCount!==At)&&(rl=!0):(rl=!0,nt.__version=G.version);let dr=nt.currentProgram;rl===!0&&(dr=Le(G,V,W));let zu=!1,Wo=!1,ol=!1;const qt=dr.getUniforms(),zn=nt.uniforms;if(Ne.useProgram(dr.program)&&(zu=!0,Wo=!0,ol=!0),G.id!==C&&(C=G.id,Wo=!0),zu||T!==R){qt.setValue(H,"projectionMatrix",R.projectionMatrix),qt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Ii=qt.map.cameraPosition;Ii!==void 0&&Ii.setValue(H,ye.setFromMatrixPosition(R.matrixWorld)),ot.logarithmicDepthBuffer&&qt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&qt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Wo=!0,ol=!0)}if(W.isSkinnedMesh){qt.setOptional(H,W,"bindMatrix"),qt.setOptional(H,W,"bindMatrixInverse");const Ii=W.skeleton;Ii&&(Ii.boneTexture===null&&Ii.computeBoneTexture(),qt.setValue(H,"boneTexture",Ii.boneTexture,he))}W.isBatchedMesh&&(qt.setOptional(H,W,"batchingTexture"),qt.setValue(H,"batchingTexture",W._matricesTexture,he));const al=j.morphAttributes;if((al.position!==void 0||al.normal!==void 0||al.color!==void 0)&&He.update(W,j,dr),(Wo||nt.receiveShadow!==W.receiveShadow)&&(nt.receiveShadow=W.receiveShadow,qt.setValue(H,"receiveShadow",W.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(zn.envMap.value=Ee,zn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&V.environment!==null&&(zn.envMapIntensity.value=V.environmentIntensity),Wo&&(qt.setValue(H,"toneMappingExposure",y.toneMappingExposure),nt.needsLights&&$e(zn,ol),ge&&G.fog===!0&&fe.refreshFogUniforms(zn,ge),fe.refreshMaterialUniforms(zn,G,ne,ie,g.state.transmissionRenderTarget[R.id]),ms.upload(H,Xe(nt),zn,he)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ms.upload(H,Xe(nt),zn,he),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&qt.setValue(H,"center",W.center),qt.setValue(H,"modelViewMatrix",W.modelViewMatrix),qt.setValue(H,"normalMatrix",W.normalMatrix),qt.setValue(H,"modelMatrix",W.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ii=G.uniformsGroups;for(let sl=0,Fm=Ii.length;sl<Fm;sl++){const Hu=Ii[sl];at.update(Hu,dr),at.bind(Hu,dr)}}return dr}function $e(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Mt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,V,j){tt.get(R.texture).__webglTexture=V,tt.get(R.depthTexture).__webglTexture=j;const G=tt.get(R);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=j===void 0,G.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const j=tt.get(R);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,j=0){E=R,P=V,S=j;let G=!0,W=null,ge=!1,Ae=!1;if(R){const ve=tt.get(R);ve.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(H.FRAMEBUFFER,null),G=!1):ve.__webglFramebuffer===void 0?he.setupRenderTarget(R):ve.__hasExternalTextures&&he.rebindTextures(R,tt.get(R.texture).__webglTexture,tt.get(R.depthTexture).__webglTexture);const Ee=R.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Ae=!0);const We=tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[V])?W=We[V][j]:W=We[V],ge=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?W=tt.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?W=We[j]:W=We,b.copy(R.viewport),k.copy(R.scissor),X=R.scissorTest}else b.copy(de).multiplyScalar(ne).floor(),k.copy(Pe).multiplyScalar(ne).floor(),X=Ge;if(Ne.bindFramebuffer(H.FRAMEBUFFER,W)&&G&&Ne.drawBuffers(R,W),Ne.viewport(b),Ne.scissor(k),Ne.setScissorTest(X),ge){const ve=tt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,ve.__webglTexture,j)}else if(Ae){const ve=tt.get(R.texture),Ee=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ve.__webglTexture,j||0,Ee)}C=-1},this.readRenderTargetPixels=function(R,V,j,G,W,ge,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(ve=ve[Ae]),ve){Ne.bindFramebuffer(H.FRAMEBUFFER,ve);try{const Ee=R.texture,We=Ee.format,rt=Ee.type;if(!ot.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-G&&j>=0&&j<=R.height-W&&H.readPixels(V,j,G,W,Ue.convert(We),Ue.convert(rt),ge)}finally{const Ee=E!==null?tt.get(E).__webglFramebuffer:null;Ne.bindFramebuffer(H.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(R,V,j=0){const G=Math.pow(2,-j),W=Math.floor(V.image.width*G),ge=Math.floor(V.image.height*G);he.setTexture2D(V,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,R.x,R.y,W,ge),Ne.unbindTexture()},this.copyTextureToTexture=function(R,V,j,G=0){const W=V.image.width,ge=V.image.height,Ae=Ue.convert(j.format),ve=Ue.convert(j.type);he.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),V.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,R.x,R.y,W,ge,Ae,ve,V.image.data):V.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Ae,V.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,G,R.x,R.y,Ae,ve,V.image),G===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(R,V,j,G,W=0){const ge=R.max.x-R.min.x,Ae=R.max.y-R.min.y,ve=R.max.z-R.min.z,Ee=Ue.convert(G.format),We=Ue.convert(G.type);let rt;if(G.isData3DTexture)he.setTexture3D(G,0),rt=H.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)he.setTexture2DArray(G,0),rt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const Ke=H.getParameter(H.UNPACK_ROW_LENGTH),Et=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ci=H.getParameter(H.UNPACK_SKIP_PIXELS),Li=H.getParameter(H.UNPACK_SKIP_ROWS),ti=H.getParameter(H.UNPACK_SKIP_IMAGES),At=j.isCompressedTexture?j.mipmaps[W]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,At.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,At.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,R.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,R.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,R.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(rt,W,V.x,V.y,V.z,ge,Ae,ve,Ee,We,At.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(rt,W,V.x,V.y,V.z,ge,Ae,ve,Ee,At.data):H.texSubImage3D(rt,W,V.x,V.y,V.z,ge,Ae,ve,Ee,We,At),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ci),H.pixelStorei(H.UNPACK_SKIP_ROWS,Li),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ti),W===0&&G.generateMipmaps&&H.generateMipmap(rt),Ne.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),Ne.unbindTexture()},this.resetState=function(){P=0,S=0,E=null,Ne.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Tl?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Va?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ou{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=i}clone(){return new Ou(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class g1 extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Vh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ai=new O;class Fu{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix4(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.applyNormalMatrix(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.transformDirection(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),o=_t(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wd=new O,Xd=new Tt,jd=new Tt,v1=new O,qd=new et,gs=new O,ec=new rn,Yd=new et,tc=new ro;class y1 extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yu,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,gs),this.boundingBox.expandByPoint(gs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,gs),this.boundingSphere.expandByPoint(gs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ec.copy(this.boundingSphere),ec.applyMatrix4(r),e.ray.intersectsSphere(ec)!==!1&&(Yd.copy(r).invert(),tc.copy(e.ray).applyMatrix4(Yd),!(this.boundingBox!==null&&tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Tt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Xd.fromBufferAttribute(r.attributes.skinIndex,e),jd.fromBufferAttribute(r.attributes.skinWeight,e),Wd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const a=jd.getComponent(o);if(a!==0){const s=Xd.getComponent(o);qd.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(v1.copy(Wd).applyMatrix4(qd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Kd extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ic extends Ht{constructor(e=null,t=1,i=1,r,o,a,s,c,u=ii,p=ii,l,h){super(null,a,s,c,u,p,r,o,l,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zd=new et,x1=new et;class Bu{constructor(e=[],t=[]){this.uuid=ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let o=0,a=e.length;o<a;o++){const s=e[o]?e[o].matrixWorld:x1;Zd.multiplyMatrices(s,t[o]),Zd.toArray(i,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Bu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ic(t,e,e,Ni,Yt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const o=e.bones[i];let a=t[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new Kd),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const a=t[r];e.bones.push(a.uuid);const s=i[r];e.boneInverses.push(s.toArray())}return e}}class nc extends jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mo=new et,$d=new et,_s=[],Qd=new bn,T1=new et,na=new $t,ra=new rn;class rc extends $t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,T1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mo),Qd.copy(e.boundingBox).applyMatrix4(Mo),this.boundingBox.union(Qd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mo),ra.copy(e.boundingSphere).applyMatrix4(Mo),this.boundingSphere.union(ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,a=e*o+1;for(let s=0;s<i.length;s++)i[s]=r[a+s]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(na.geometry=this.geometry,na.material=this.material,na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(i),e.ray.intersectsSphere(ra)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Mo),$d.multiplyMatrices(i,Mo),na.matrixWorld=$d,na.raycast(e,_s);for(let a=0,s=_s.length;a<s;a++){const c=_s[a];c.instanceId=o,c.object=this,t.push(c)}_s.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ic(new Float32Array(r*this.count),r,this.count,pl,Yt));const o=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const s=this.geometry.morphTargetsRelative?1:1-a,c=r*e;o[c]=s,o.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jd extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vs=new O,ys=new O,ep=new et,oa=new ro,xs=new rn,oc=new O,tp=new O;class ac extends ct{constructor(e=new Xi,t=new Jd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)vs.fromBufferAttribute(t,r-1),ys.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=vs.distanceTo(ys);e.setAttribute("lineDistance",new Di(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(r),xs.radius+=o,e.ray.intersectsSphere(xs)===!1)return;ep.copy(r).invert(),oa.copy(e.ray).applyMatrix4(ep);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,u=this.isLineSegments?2:1,p=i.index,l=i.attributes.position;if(p!==null){const h=Math.max(0,a.start),d=Math.min(p.count,a.start+a.count);for(let f=h,_=d-1;f<_;f+=u){const g=p.getX(f),m=p.getX(f+1),x=Ts(this,e,oa,c,g,m);x&&t.push(x)}if(this.isLineLoop){const f=p.getX(d-1),_=p.getX(h),g=Ts(this,e,oa,c,f,_);g&&t.push(g)}}else{const h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let f=h,_=d-1;f<_;f+=u){const g=Ts(this,e,oa,c,f,f+1);g&&t.push(g)}if(this.isLineLoop){const f=Ts(this,e,oa,c,d-1,h);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ts(n,e,t,i,r,o){const a=n.geometry.attributes.position;if(vs.fromBufferAttribute(a,r),ys.fromBufferAttribute(a,o),t.distanceSqToSegment(vs,ys,oc,tp)>i)return;oc.applyMatrix4(n.matrixWorld);const s=e.ray.origin.distanceTo(oc);if(!(s<e.near||s>e.far))return{distance:s,point:tp.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const ip=new O,np=new O;class M1 extends ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)ip.fromBufferAttribute(t,r),np.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ip.distanceTo(np);e.setAttribute("lineDistance",new Di(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class b1 extends ac{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rp extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const op=new et,sc=new ro,Ms=new rn,bs=new O;class ap extends ct{constructor(e=new Xi,t=new rp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(r),Ms.radius+=o,e.ray.intersectsSphere(Ms)===!1)return;op.copy(r).invert(),sc.copy(e.ray).applyMatrix4(op);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,u=i.index,p=i.attributes.position;if(u!==null){const l=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let d=l,f=h;d<f;d++){const _=u.getX(d);bs.fromBufferAttribute(p,_),sp(bs,_,c,r,e,t,this)}}else{const l=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let d=l,f=h;d<f;d++)bs.fromBufferAttribute(p,d),sp(bs,d,c,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sp(n,e,t,i,r,o,a){const s=sc.distanceSqToPoint(n);if(s<t){const c=new O;sc.closestPointToPoint(n,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:a})}}class lp extends Ht{constructor(e,t,i,r,o,a,s,c,u){super(e,t,i,r,o,a,s,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ku extends Xi{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+s,Math.PI);let u=0;const p=[],l=new O,h=new O,d=[],f=[],_=[],g=[];for(let m=0;m<=i;m++){const x=[],y=m/i;let M=0;m===0&&a===0?M=.5/t:m===i&&c===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const S=P/t;l.x=-e*Math.cos(r+S*o)*Math.sin(a+y*s),l.y=e*Math.cos(a+y*s),l.z=e*Math.sin(r+S*o)*Math.sin(a+y*s),f.push(l.x,l.y,l.z),h.copy(l).normalize(),_.push(h.x,h.y,h.z),g.push(S+M,1-y),x.push(u++)}p.push(x)}for(let m=0;m<i;m++)for(let x=0;x<t;x++){const y=p[m][x+1],M=p[m][x],P=p[m+1][x],S=p[m+1][x+1];(m!==0||a>0)&&d.push(y,M,S),(m!==i-1||c<Math.PI)&&d.push(M,P,S)}this.setIndex(d),this.setAttribute("position",new Di(f,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lc extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ln extends lc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ss(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function S1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function w1(n){function e(r,o){return n[r]-n[o]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function cp(n,e,t){const i=n.length,r=new n.constructor(i);for(let o=0,a=0;a!==i;++o){const s=t[o]*e;for(let c=0;c!==e;++c)r[a++]=n[s+c]}return r}function up(n,e,t,i){let r=1,o=n[0];for(;o!==void 0&&o[i]===void 0;)o=n[r++];if(o===void 0)return;let a=o[i];if(a!==void 0)if(Array.isArray(a))do a=o[i],a!==void 0&&(e.push(o.time),t.push.apply(t,a)),o=n[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[i],a!==void 0&&(e.push(o.time),a.toArray(t,t.length)),o=n[r++];while(o!==void 0);else do a=o[i],a!==void 0&&(e.push(o.time),t.push(a)),o=n[r++];while(o!==void 0)}class aa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],o=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<o)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(o=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=o)){const s=t[1];e<s&&(i=2,o=s);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break e}a=i,i=0;break t}break i}for(;i<a;){const s=i+a>>>1;e<t[s]?a=s:i=s+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let a=0;a!==r;++a)t[a]=i[o+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class E1 extends aa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ph,endingEnd:Ph}}intervalChanged_(e,t,i){const r=this.parameterPositions;let o=e-2,a=e+1,s=r[o],c=r[a];if(s===void 0)switch(this.getSettings_().endingStart){case Lh:o=e,s=2*t-i;break;case Ih:o=r.length-2,s=t+r[o]-r[o+1];break;default:o=e,s=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Lh:a=e,c=2*i-t;break;case Ih:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}const u=(i-t)*.5,p=this.valueSize;this._weightPrev=u/(t-s),this._weightNext=u/(c-i),this._offsetPrev=o*p,this._offsetNext=a*p}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=e*s,u=c-s,p=this._offsetPrev,l=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(i-t)/(r-t),_=f*f,g=_*f,m=-h*g+2*h*_-h*f,x=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*f+1,y=(-1-d)*g+(1.5+d)*_+.5*f,M=d*g-d*_;for(let P=0;P!==s;++P)o[P]=m*a[p+P]+x*a[u+P]+y*a[c+P]+M*a[l+P];return o}}class A1 extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=e*s,u=c-s,p=(i-t)/(r-t),l=1-p;for(let h=0;h!==s;++h)o[h]=a[u+h]*l+a[c+h]*p;return o}}class R1 extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class cn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ss(t,this.TimeBufferType),this.values=Ss(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ss(e.times,Array),values:Ss(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new R1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new A1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new E1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Yo:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case yl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let o=0,a=r-1;for(;o!==r&&i[o]<e;)++o;for(;a!==-1&&i[a]>t;)--a;if(++a,o!==0||a!==r){o>=a&&(a=Math.max(a,1),o=a-1);const s=this.getValueSize();this.times=i.slice(o,a),this.values=this.values.slice(o*s,a*s)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==o;s++){const c=i[s];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,c,a),e=!1;break}a=c}if(r!==void 0&&S1(r))for(let s=0,c=r.length;s!==c;++s){const u=r[s];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===yl,o=e.length-1;let a=1;for(let s=1;s<o;++s){let c=!1;const u=e[s],p=e[s+1];if(u!==p&&(s!==1||u!==e[0]))if(r)c=!0;else{const l=s*i,h=l-i,d=l+i;for(let f=0;f!==i;++f){const _=t[l+f];if(_!==t[h+f]||_!==t[d+f]){c=!0;break}}}if(c){if(s!==a){e[a]=e[s];const l=s*i,h=a*i;for(let d=0;d!==i;++d)t[h+d]=t[l+d]}++a}}if(o>0){e[a]=e[o];for(let s=o*i,c=a*i,u=0;u!==i;++u)t[c+u]=t[s+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}cn.prototype.TimeBufferType=Float32Array,cn.prototype.ValueBufferType=Float32Array,cn.prototype.DefaultInterpolation=Zr;class bo extends cn{}bo.prototype.ValueTypeName="bool",bo.prototype.ValueBufferType=Array,bo.prototype.DefaultInterpolation=Yo,bo.prototype.InterpolantFactoryMethodLinear=void 0,bo.prototype.InterpolantFactoryMethodSmooth=void 0;class hp extends cn{}hp.prototype.ValueTypeName="color";class So extends cn{}So.prototype.ValueTypeName="number";class C1 extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=(i-t)/(r-t);let u=e*s;for(let p=u+s;u!==p;u+=4)yi.slerpFlat(o,0,a,u-s,a,u,c);return o}}class Sr extends cn{InterpolantFactoryMethodLinear(e){return new C1(this.times,this.values,this.getValueSize(),e)}}Sr.prototype.ValueTypeName="quaternion",Sr.prototype.DefaultInterpolation=Zr,Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class wo extends cn{}wo.prototype.ValueTypeName="string",wo.prototype.ValueBufferType=Array,wo.prototype.DefaultInterpolation=Yo,wo.prototype.InterpolantFactoryMethodLinear=void 0,wo.prototype.InterpolantFactoryMethodSmooth=void 0;class Eo extends cn{}Eo.prototype.ValueTypeName="vector";class P1{constructor(e="",t=-1,i=[],r=Pg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ji(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,s=i.length;a!==s;++a)t.push(I1(i[a]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,a=i.length;o!==a;++o)t.push(cn.toJSON(i[o]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const o=t.length,a=[];for(let s=0;s<o;s++){let c=[],u=[];c.push((s+o-1)%o,s,(s+1)%o),u.push(0,1,0);const p=w1(c);c=cp(c,1,p),u=cp(u,1,p),!r&&c[0]===0&&(c.push(o),u.push(u[0])),a.push(new So(".morphTargetInfluences["+t[s].name+"]",c,u).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},o=/^([\w-]*?)([\d]+)$/;for(let s=0,c=e.length;s<c;s++){const u=e[s],p=u.name.match(o);if(p&&p.length>1){const l=p[1];let h=r[l];h||(r[l]=h=[]),h.push(u)}}const a=[];for(const s in r)a.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(p,l,h,d,f){if(h.length!==0){const _=[],g=[];up(h,_,g,d),_.length!==0&&f.push(new p(l,_,g))}},r=[],o=e.name||"default",a=e.fps||30,s=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let p=0;p<u.length;p++){const l=u[p].keys;if(!(!l||l.length===0))if(l[0].morphTargets){const h={};let d;for(d=0;d<l.length;d++)if(l[d].morphTargets)for(let f=0;f<l[d].morphTargets.length;f++)h[l[d].morphTargets[f]]=-1;for(const f in h){const _=[],g=[];for(let m=0;m!==l[d].morphTargets.length;++m){const x=l[d];_.push(x.time),g.push(x.morphTarget===f?1:0)}r.push(new So(".morphTargetInfluence["+f+"]",_,g))}c=h.length*a}else{const h=".bones["+t[p].name+"]";i(Eo,h+".position",l,"pos",r),i(Sr,h+".quaternion",l,"rot",r),i(Eo,h+".scale",l,"scl",r)}}return r.length===0?null:new this(o,c,r,s)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function L1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return So;case"vector":case"vector2":case"vector3":case"vector4":return Eo;case"color":return hp;case"quaternion":return Sr;case"bool":case"boolean":return bo;case"string":return wo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function I1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=L1(n.type);if(n.times===void 0){const t=[],i=[];up(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const $n={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dp{constructor(e,t,i){const r=this;let o=!1,a=0,s=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){s++,o===!1&&r.onStart!==void 0&&r.onStart(p,a,s),o=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,s),a===s&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return c?c(p):p},this.setURLModifier=function(p){return c=p,this},this.addHandler=function(p,l){return u.push(p,l),this},this.removeHandler=function(p){const l=u.indexOf(p);return l!==-1&&u.splice(l,2),this},this.getHandler=function(p){for(let l=0,h=u.length;l<h;l+=2){const d=u[l],f=u[l+1];if(d.global&&(d.lastIndex=0),d.test(p))return f}return null}}}const U1=new dp;class wr{constructor(e){this.manager=e!==void 0?e:U1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ln={};class N1 extends Error{constructor(e,t){super(e),this.response=t}}class cc extends wr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=$n.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:i,onError:r});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const p=Ln[e],l=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),d=h?parseInt(h):0,f=d!==0;let _=0;const g=new ReadableStream({start(m){x();function x(){l.read().then(({done:y,value:M})=>{if(y)m.close();else{_+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:d});for(let S=0,E=p.length;S<E;S++){const C=p[S];C.onProgress&&C.onProgress(P)}m.enqueue(M),x()}})}}});return new Response(g)}else throw new N1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(p=>new DOMParser().parseFromString(p,s));case"json":return u.json();default:if(s===void 0)return u.text();{const p=/charset="?([^;"\s]*)"?/i.exec(s),l=p&&p[1]?p[1].toLowerCase():void 0,h=new TextDecoder(l);return u.arrayBuffer().then(d=>h.decode(d))}}}).then(u=>{$n.add(e,u);const p=Ln[e];delete Ln[e];for(let l=0,h=p.length;l<h;l++){const d=p[l];d.onLoad&&d.onLoad(u)}}).catch(u=>{const p=Ln[e];if(p===void 0)throw this.manager.itemError(e),u;delete Ln[e];for(let l=0,h=p.length;l<h;l++){const d=p[l];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class D1 extends wr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=$n.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;const s=$o("img");function c(){p(),$n.add(e,this),t&&t(this),o.manager.itemEnd(e)}function u(l){p(),r&&r(l),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){s.removeEventListener("load",c,!1),s.removeEventListener("error",u,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),o.manager.itemStart(e),s.src=e,s}}class pp extends wr{constructor(e){super(e)}load(e,t,i,r){const o=this,a=new ic,s=new cc(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(o.withCredentials),s.load(e,function(c){let u;try{u=o.parse(c)}catch(p){if(r!==void 0)r(p);else{console.error(p);return}}u.image!==void 0?a.image=u.image:u.data!==void 0&&(a.image.width=u.width,a.image.height=u.height,a.image.data=u.data),a.wrapS=u.wrapS!==void 0?u.wrapS:di,a.wrapT=u.wrapT!==void 0?u.wrapT:di,a.magFilter=u.magFilter!==void 0?u.magFilter:It,a.minFilter=u.minFilter!==void 0?u.minFilter:It,a.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(a.colorSpace=u.colorSpace),u.flipY!==void 0&&(a.flipY=u.flipY),u.format!==void 0&&(a.format=u.format),u.type!==void 0&&(a.type=u.type),u.mipmaps!==void 0&&(a.mipmaps=u.mipmaps,a.minFilter=nn),u.mipmapCount===1&&(a.minFilter=It),u.generateMipmaps!==void 0&&(a.generateMipmaps=u.generateMipmaps),a.needsUpdate=!0,t&&t(a,u)},i,r),a}}class fp extends wr{constructor(e){super(e)}load(e,t,i,r){const o=new Ht,a=new D1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){o.image=s,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class ws extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const uc=new et,mp=new O,gp=new O;class hc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(mp),gp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gp),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O1 extends hc{constructor(){super(new oi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Qr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(i!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class F1 extends ws{constructor(e,t,i=0,r=Math.PI/3,o=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new O1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _p=new et,sa=new O,dc=new O;class B1 extends hc{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),sa.setFromMatrixPosition(e.matrixWorld),i.position.copy(sa),dc.copy(i.position),dc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(dc),i.updateMatrixWorld(),r.makeTranslation(-sa.x,-sa.y,-sa.z),_p.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_p)}}class k1 extends ws{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new B1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class z1 extends hc{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vp extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new z1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class H1 extends ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class la{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class V1 extends wr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=$n.get(e);if(a!==void 0){if(o.manager.itemStart(e),a.then){a.then(u=>{t&&t(u),o.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a}const s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader;const c=fetch(e,s).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(u){return $n.add(e,u),t&&t(u),o.manager.itemEnd(e),u}).catch(function(u){r&&r(u),$n.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});$n.add(e,c),o.manager.itemStart(e)}}class G1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yp(){return(typeof performance>"u"?Date:performance).now()}const pc="\\[\\]\\.:\\/",W1=new RegExp("["+pc+"]","g"),fc="[^"+pc+"]",X1="[^"+pc.replace("\\.","")+"]",j1=/((?:WC+[\/:])*)/.source.replace("WC",fc),q1=/(WCOD+)?/.source.replace("WCOD",X1),Y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),K1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),Z1=new RegExp("^"+j1+q1+Y1+K1+"$"),$1=["material","materials","bones","map"];class Q1{constructor(e,t,i){const r=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class yt{constructor(e,t,i){this.path=t,this.parsedPath=i||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,i):new yt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W1,"")}static parseTrackName(e){const t=Z1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=i.nodeName.substring(r+1);$1.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let a=0;a<o.length;a++){const s=o[a];if(s.name===t||s.uuid===t)return s;const c=i(s.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===u){u=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[r];if(a===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=Q1,yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray],yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const xp=new et;class J1{constructor(e,t,i=0,r=1/0){this.ray=new ro(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xp),this}intersectObject(e,t=!0,i=[]){return mc(e,this,i,t),i.sort(Tp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)mc(e[r],this,i,t);return i.sort(Tp),i}}function Tp(n,e){return n.distance-e.distance}function mc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)mc(r[o],e,t,!0)}}class Mp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);const bp={type:"change"},gc={type:"start"},Sp={type:"end"},Es=new ro,wp=new Zn,eT=Math.cos(70*kh.DEG2RAD);class tT extends fr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Ye),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ye),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(bp),i.update(),o=r.NONE},this.update=function(){const N=new O,U=new yi().setFromUnitVectors(e.up,new O(0,1,0)),ee=U.clone().invert(),K=new O,_e=new yi,v=new O,w=2*Math.PI;return function(I=null){const B=i.object.position;N.copy(B).sub(i.target),N.applyQuaternion(U),s.setFromVector3(N),i.autoRotate&&o===r.NONE&&X(b(I)),i.enableDamping?(s.theta+=c.theta*i.dampingFactor,s.phi+=c.phi*i.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let Z=i.minAzimuthAngle,z=i.maxAzimuthAngle;isFinite(Z)&&isFinite(z)&&(Z<-Math.PI?Z+=w:Z>Math.PI&&(Z-=w),z<-Math.PI?z+=w:z>Math.PI&&(z-=w),Z<=z?s.theta=Math.max(Z,Math.min(z,s.theta)):s.theta=s.theta>(Z+z)/2?Math.max(Z,s.theta):Math.min(z,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let re=!1;if(i.zoomToCursor&&S||i.object.isOrthographicCamera)s.radius=de(s.radius);else{const ce=s.radius;s.radius=de(s.radius*u),re=ce!=s.radius}if(N.setFromSpherical(s),N.applyQuaternion(ee),B.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),p.set(0,0,0)),i.zoomToCursor&&S){let ce=null;if(i.object.isPerspectiveCamera){const ue=N.length();ce=de(ue*u);const ae=ue-ce;i.object.position.addScaledVector(M,ae),i.object.updateMatrixWorld(),re=!!ae}else if(i.object.isOrthographicCamera){const ue=new O(P.x,P.y,0);ue.unproject(i.object);const ae=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),re=ae!==i.object.zoom;const oe=new O(P.x,P.y,0);oe.unproject(i.object),i.object.position.sub(oe).add(ue),i.object.updateMatrixWorld(),ce=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ce!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ce).add(i.object.position):(Es.origin.copy(i.object.position),Es.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Es.direction))<eT?e.lookAt(i.target):(wp.setFromNormalAndCoplanarPoint(i.object.up,i.target),Es.intersectPlane(wp,i.target))))}else if(i.object.isOrthographicCamera){const ce=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),ce!==i.object.zoom&&(i.object.updateProjectionMatrix(),re=!0)}return u=1,S=!1,re||K.distanceToSquared(i.object.position)>a||8*(1-_e.dot(i.object.quaternion))>a||v.distanceToSquared(i.target)>a?(i.dispatchEvent(bp),K.copy(i.object.position),_e.copy(i.object.quaternion),v.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ut),i.domElement.removeEventListener("pointerdown",D),i.domElement.removeEventListener("pointercancel",J),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",J),i.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ye),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new Mp,c=new Mp;let u=1;const p=new O,l=new je,h=new je,d=new je,f=new je,_=new je,g=new je,m=new je,x=new je,y=new je,M=new O,P=new je;let S=!1;const E=[],C={};let T=!1;function b(N){return N!==null?2*Math.PI/60*i.autoRotateSpeed*N:2*Math.PI/60/60*i.autoRotateSpeed}function k(N){const U=Math.abs(N*.01);return Math.pow(.95,i.zoomSpeed*U)}function X(N){c.theta-=N}function F(N){c.phi-=N}const Y=function(){const N=new O;return function(U,ee){N.setFromMatrixColumn(ee,0),N.multiplyScalar(-U),p.add(N)}}(),q=function(){const N=new O;return function(U,ee){i.screenSpacePanning===!0?N.setFromMatrixColumn(ee,1):(N.setFromMatrixColumn(ee,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(U),p.add(N)}}(),ie=function(){const N=new O;return function(U,ee){const K=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;N.copy(_e).sub(i.target);let v=N.length();v*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*U*v/K.clientHeight,i.object.matrix),q(2*ee*v/K.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(U*(i.object.right-i.object.left)/i.object.zoom/K.clientWidth,i.object.matrix),q(ee*(i.object.top-i.object.bottom)/i.object.zoom/K.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(N,U){if(!i.zoomToCursor)return;S=!0;const ee=i.domElement.getBoundingClientRect(),K=N-ee.left,_e=U-ee.top,v=ee.width,w=ee.height;P.x=K/v*2-1,P.y=-(_e/w)*2+1,M.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function de(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function Pe(N){l.set(N.clientX,N.clientY)}function Ge(N){se(N.clientX,N.clientX),m.set(N.clientX,N.clientY)}function Fe(N){f.set(N.clientX,N.clientY)}function te(N){h.set(N.clientX,N.clientY),d.subVectors(h,l).multiplyScalar(i.rotateSpeed);const U=i.domElement;X(2*Math.PI*d.x/U.clientHeight),F(2*Math.PI*d.y/U.clientHeight),l.copy(h),i.update()}function pe(N){x.set(N.clientX,N.clientY),y.subVectors(x,m),y.y>0?ne(k(y.y)):y.y<0&&$(k(y.y)),m.copy(x),i.update()}function Re(N){_.set(N.clientX,N.clientY),g.subVectors(_,f).multiplyScalar(i.panSpeed),ie(g.x,g.y),f.copy(_),i.update()}function ye(N){se(N.clientX,N.clientY),N.deltaY<0?$(k(N.deltaY)):N.deltaY>0&&ne(k(N.deltaY)),i.update()}function Qe(N){let U=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(0,i.keyPanSpeed),U=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(0,-i.keyPanSpeed),U=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(i.keyPanSpeed,0),U=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(-i.keyPanSpeed,0),U=!0;break}U&&(N.preventDefault(),i.update())}function Ze(N){if(E.length===1)l.set(N.pageX,N.pageY);else{const U=mt(N),ee=.5*(N.pageX+U.x),K=.5*(N.pageY+U.y);l.set(ee,K)}}function H(N){if(E.length===1)f.set(N.pageX,N.pageY);else{const U=mt(N),ee=.5*(N.pageX+U.x),K=.5*(N.pageY+U.y);f.set(ee,K)}}function Je(N){const U=mt(N),ee=N.pageX-U.x,K=N.pageY-U.y,_e=Math.sqrt(ee*ee+K*K);m.set(0,_e)}function Be(N){i.enableZoom&&Je(N),i.enablePan&&H(N)}function ot(N){i.enableZoom&&Je(N),i.enableRotate&&Ze(N)}function Ne(N){if(E.length==1)h.set(N.pageX,N.pageY);else{const ee=mt(N),K=.5*(N.pageX+ee.x),_e=.5*(N.pageY+ee.y);h.set(K,_e)}d.subVectors(h,l).multiplyScalar(i.rotateSpeed);const U=i.domElement;X(2*Math.PI*d.x/U.clientHeight),F(2*Math.PI*d.y/U.clientHeight),l.copy(h)}function ze(N){if(E.length===1)_.set(N.pageX,N.pageY);else{const U=mt(N),ee=.5*(N.pageX+U.x),K=.5*(N.pageY+U.y);_.set(ee,K)}g.subVectors(_,f).multiplyScalar(i.panSpeed),ie(g.x,g.y),f.copy(_)}function tt(N){const U=mt(N),ee=N.pageX-U.x,K=N.pageY-U.y,_e=Math.sqrt(ee*ee+K*K);x.set(0,_e),y.set(0,Math.pow(x.y/m.y,i.zoomSpeed)),ne(y.y),m.copy(x);const v=(N.pageX+U.x)*.5,w=(N.pageY+U.y)*.5;se(v,w)}function he(N){i.enableZoom&&tt(N),i.enablePan&&ze(N)}function ft(N){i.enableZoom&&tt(N),i.enableRotate&&Ne(N)}function D(N){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",A),i.domElement.addEventListener("pointerup",J)),!it(N)&&(Ve(N),N.pointerType==="touch"?xe(N):le(N)))}function A(N){i.enabled!==!1&&(N.pointerType==="touch"?He(N):me(N))}function J(N){switch(Ue(N),E.length){case 0:i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",J),i.dispatchEvent(Sp),o=r.NONE;break;case 1:const U=E[0],ee=C[U];xe({pointerId:U,pageX:ee.x,pageY:ee.y});break}}function le(N){let U;switch(N.button){case 0:U=i.mouseButtons.LEFT;break;case 1:U=i.mouseButtons.MIDDLE;break;case 2:U=i.mouseButtons.RIGHT;break;default:U=-1}switch(U){case Vr.DOLLY:if(i.enableZoom===!1)return;Ge(N),o=r.DOLLY;break;case Vr.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;Fe(N),o=r.PAN}else{if(i.enableRotate===!1)return;Pe(N),o=r.ROTATE}break;case Vr.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;Pe(N),o=r.ROTATE}else{if(i.enablePan===!1)return;Fe(N),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(gc)}function me(N){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;te(N);break;case r.DOLLY:if(i.enableZoom===!1)return;pe(N);break;case r.PAN:if(i.enablePan===!1)return;Re(N);break}}function fe(N){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(N.preventDefault(),i.dispatchEvent(gc),ye(ke(N)),i.dispatchEvent(Sp))}function ke(N){const U=N.deltaMode,ee={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(U){case 1:ee.deltaY*=16;break;case 2:ee.deltaY*=100;break}return N.ctrlKey&&!T&&(ee.deltaY*=10),ee}function Me(N){N.key==="Control"&&(T=!0,i.domElement.getRootNode().addEventListener("keyup",be,{passive:!0,capture:!0}))}function be(N){N.key==="Control"&&(T=!1,i.domElement.getRootNode().removeEventListener("keyup",be,{passive:!0,capture:!0}))}function Ye(N){i.enabled===!1||i.enablePan===!1||Qe(N)}function xe(N){switch(at(N),E.length){case 1:switch(i.touches.ONE){case Gr.ROTATE:if(i.enableRotate===!1)return;Ze(N),o=r.TOUCH_ROTATE;break;case Gr.PAN:if(i.enablePan===!1)return;H(N),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Gr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(N),o=r.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ot(N),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(gc)}function He(N){switch(at(N),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ne(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ze(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ft(N),i.update();break;default:o=r.NONE}}function ut(N){i.enabled!==!1&&N.preventDefault()}function Ve(N){E.push(N.pointerId)}function Ue(N){delete C[N.pointerId];for(let U=0;U<E.length;U++)if(E[U]==N.pointerId){E.splice(U,1);return}}function it(N){for(let U=0;U<E.length;U++)if(E[U]==N.pointerId)return!0;return!1}function at(N){let U=C[N.pointerId];U===void 0&&(U=new je,C[N.pointerId]=U),U.set(N.pageX,N.pageY)}function mt(N){const U=N.pointerId===E[0]?E[1]:E[0];return C[U]}i.domElement.addEventListener("contextmenu",ut),i.domElement.addEventListener("pointerdown",D),i.domElement.addEventListener("pointercancel",J),i.domElement.addEventListener("wheel",fe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Fi=Uint8Array,Ao=Uint16Array,iT=Int32Array,Ep=new Fi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ap=new Fi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),nT=new Fi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Rp=function(n,e){for(var t=new Ao(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new iT(t[30]),i=1;i<30;++i)for(var o=t[i];o<t[i+1];++o)r[o]=o-t[i]<<5|i;return{b:t,r}},Cp=Rp(Ep,2),Pp=Cp.b,rT=Cp.r;Pp[28]=258,rT[258]=28;for(var oT=Rp(Ap,0),aT=oT.b,_c=new Ao(32768),wt=0;wt<32768;++wt){var Qn=(wt&43690)>>1|(wt&21845)<<1;Qn=(Qn&52428)>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>4|(Qn&3855)<<4,_c[wt]=((Qn&65280)>>8|(Qn&255)<<8)>>1}for(var ca=function(n,e,t){for(var i=n.length,r=0,o=new Ao(e);r<i;++r)n[r]&&++o[n[r]-1];var a=new Ao(e);for(r=1;r<e;++r)a[r]=a[r-1]+o[r-1]<<1;var s;if(t){s=new Ao(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var u=r<<4|n[r],p=e-n[r],l=a[n[r]-1]++<<p,h=l|(1<<p)-1;l<=h;++l)s[_c[l]>>c]=u}else for(s=new Ao(i),r=0;r<i;++r)n[r]&&(s[r]=_c[a[n[r]-1]++]>>15-n[r]);return s},ua=new Fi(288),wt=0;wt<144;++wt)ua[wt]=8;for(var wt=144;wt<256;++wt)ua[wt]=9;for(var wt=256;wt<280;++wt)ua[wt]=7;for(var wt=280;wt<288;++wt)ua[wt]=8;for(var Lp=new Fi(32),wt=0;wt<32;++wt)Lp[wt]=5;var sT=ca(ua,9,1),lT=ca(Lp,5,1),vc=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Qi=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},yc=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},cT=function(n){return(n+7)/8|0},uT=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Fi(n.subarray(e,t))},hT=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ji=function(n,e,t){var i=new Error(e||hT[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Ji),!t)throw i;return i},dT=function(n,e,t,i){var r=n.length,o=0;if(!r||e.f&&!e.l)return t||new Fi(0);var a=!t,s=a||e.i!=2,c=e.i;a&&(t=new Fi(r*3));var u=function(Je){var Be=t.length;if(Je>Be){var ot=new Fi(Math.max(Be*2,Je));ot.set(t),t=ot}},p=e.f||0,l=e.p||0,h=e.b||0,d=e.l,f=e.d,_=e.m,g=e.n,m=r*8;do{if(!d){p=Qi(n,l,1);var x=Qi(n,l+1,3);if(l+=3,x)if(x==1)d=sT,f=lT,_=9,g=5;else if(x==2){var y=Qi(n,l,31)+257,M=Qi(n,l+10,15)+4,P=y+Qi(n,l+5,31)+1;l+=14;for(var S=new Fi(P),E=new Fi(19),C=0;C<M;++C)E[nT[C]]=Qi(n,l+C*3,7);l+=M*3;for(var T=vc(E),b=(1<<T)-1,k=ca(E,T,1),C=0;C<P;){var X=k[Qi(n,l,b)];l+=X&15;var F=X>>4;if(F<16)S[C++]=F;else{var Y=0,q=0;for(F==16?(q=3+Qi(n,l,3),l+=2,Y=S[C-1]):F==17?(q=3+Qi(n,l,7),l+=3):F==18&&(q=11+Qi(n,l,127),l+=7);q--;)S[C++]=Y}}var ie=S.subarray(0,y),ne=S.subarray(y);_=vc(ie),g=vc(ne),d=ca(ie,_,1),f=ca(ne,g,1)}else Ji(1);else{var F=cT(l)+4,$=n[F-4]|n[F-3]<<8,se=F+$;if(se>r){c&&Ji(0);break}s&&u(h+$),t.set(n.subarray(F,se),h),e.b=h+=$,e.p=l=se*8,e.f=p;continue}if(l>m){c&&Ji(0);break}}s&&u(h+131072);for(var de=(1<<_)-1,Pe=(1<<g)-1,Ge=l;;Ge=l){var Y=d[yc(n,l)&de],Fe=Y>>4;if(l+=Y&15,l>m){c&&Ji(0);break}if(Y||Ji(2),Fe<256)t[h++]=Fe;else if(Fe==256){Ge=l,d=null;break}else{var te=Fe-254;if(Fe>264){var C=Fe-257,pe=Ep[C];te=Qi(n,l,(1<<pe)-1)+Pp[C],l+=pe}var Re=f[yc(n,l)&Pe],ye=Re>>4;Re||Ji(3),l+=Re&15;var ne=aT[ye];if(ye>3){var pe=Ap[ye];ne+=yc(n,l)&(1<<pe)-1,l+=pe}if(l>m){c&&Ji(0);break}s&&u(h+131072);var Qe=h+te;if(h<ne){var Ze=o-ne,H=Math.min(ne,Qe);for(Ze+h<0&&Ji(3);h<H;++h)t[h]=i[Ze+h]}for(;h<Qe;++h)t[h]=t[h-ne]}}e.l=d,e.p=Ge,e.b=h,e.f=p,d&&(p=1,e.m=_,e.d=f,e.n=g)}while(!p);return h!=t.length&&a?uT(t,0,h):t.subarray(0,h)},pT=new Fi(0),fT=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Ji(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&Ji(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function As(n,e){return dT(n.subarray(fT(n,e),-4),{i:2},e,e)}var mT=typeof TextDecoder<"u"&&new TextDecoder,gT=0;try{mT.decode(pT,{stream:!0}),gT=1}catch{}function Ip(n,e){if(e===Lg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===xl||e===Uh){let t=n.getIndex();if(t===null){const a=[],s=n.getAttribute("position");if(s!==void 0){for(let c=0;c<s.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===xl)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=n.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class _T extends pp{constructor(e){super(e),this.type=Ui}parse(e){const t=Math.pow(2.7182818,2.2);function i(v,w){let I=0;for(let Z=0;Z<65536;++Z)(Z==0||v[Z>>3]&1<<(Z&7))&&(w[I++]=Z);const B=I-1;for(;I<65536;)w[I++]=0;return B}function r(v){for(let w=0;w<16384;w++)v[w]={},v[w].len=0,v[w].lit=0,v[w].p=null}const o={l:0,c:0,lc:0};function a(v,w,I,B,Z){for(;I<v;)w=w<<8|Be(B,Z),I+=8;I-=v,o.l=w>>I&(1<<v)-1,o.c=w,o.lc=I}const s=new Array(59);function c(v){for(let I=0;I<=58;++I)s[I]=0;for(let I=0;I<65537;++I)s[v[I]]+=1;let w=0;for(let I=58;I>0;--I){const B=w+s[I]>>1;s[I]=w,w=B}for(let I=0;I<65537;++I){const B=v[I];B>0&&(v[I]=B|s[B]++<<6)}}function u(v,w,I,B,Z,z){const re=w;let ce=0,ue=0;for(;B<=Z;B++){if(re.value-w.value>I)return!1;a(6,ce,ue,v,re);const ae=o.l;if(ce=o.c,ue=o.lc,z[B]=ae,ae==63){if(re.value-w.value>I)throw new Error("Something wrong with hufUnpackEncTable");a(8,ce,ue,v,re);let oe=o.l+6;if(ce=o.c,ue=o.lc,B+oe>Z+1)throw new Error("Something wrong with hufUnpackEncTable");for(;oe--;)z[B++]=0;B--}else if(ae>=59){let oe=ae-59+2;if(B+oe>Z+1)throw new Error("Something wrong with hufUnpackEncTable");for(;oe--;)z[B++]=0;B--}}c(z)}function p(v){return v&63}function l(v){return v>>6}function h(v,w,I,B){for(;w<=I;w++){const Z=l(v[w]),z=p(v[w]);if(Z>>z)throw new Error("Invalid table entry");if(z>14){const re=B[Z>>z-14];if(re.len)throw new Error("Invalid table entry");if(re.lit++,re.p){const ce=re.p;re.p=new Array(re.lit);for(let ue=0;ue<re.lit-1;++ue)re.p[ue]=ce[ue]}else re.p=new Array(1);re.p[re.lit-1]=w}else if(z){let re=0;for(let ce=1<<14-z;ce>0;ce--){const ue=B[(Z<<14-z)+re];if(ue.len||ue.p)throw new Error("Invalid table entry");ue.len=z,ue.lit=w,re++}}}return!0}const d={c:0,lc:0};function f(v,w,I,B){v=v<<8|Be(I,B),w+=8,d.c=v,d.lc=w}const _={c:0,lc:0};function g(v,w,I,B,Z,z,re,ce,ue){if(v==w){B<8&&(f(I,B,Z,z),I=d.c,B=d.lc),B-=8;let ae=I>>B;if(ae=new Uint8Array([ae])[0],ce.value+ae>ue)return!1;const oe=re[ce.value-1];for(;ae-- >0;)re[ce.value++]=oe}else if(ce.value<ue)re[ce.value++]=v;else return!1;_.c=I,_.lc=B}function m(v){return v&65535}function x(v){const w=m(v);return w>32767?w-65536:w}const y={a:0,b:0};function M(v,w){const I=x(v),B=x(w),Z=I+(B&1)+(B>>1),z=Z,re=Z-B;y.a=z,y.b=re}function P(v,w){const I=m(v),B=m(w),Z=I-(B>>1)&65535,z=B+Z-32768&65535;y.a=z,y.b=Z}function S(v,w,I,B,Z,z,re){const ce=re<16384,ue=I>Z?Z:I;let ae=1,oe,we;for(;ae<=ue;)ae<<=1;for(ae>>=1,oe=ae,ae>>=1;ae>=1;){we=0;const Te=we+z*(Z-oe),Le=z*ae,Xe=z*oe,Ce=B*ae,De=B*oe;let $e,Mt,R,V;for(;we<=Te;we+=Xe){let j=we;const G=we+B*(I-oe);for(;j<=G;j+=De){const W=j+Ce,ge=j+Le,Ae=ge+Ce;ce?(M(v[j+w],v[ge+w]),$e=y.a,R=y.b,M(v[W+w],v[Ae+w]),Mt=y.a,V=y.b,M($e,Mt),v[j+w]=y.a,v[W+w]=y.b,M(R,V),v[ge+w]=y.a,v[Ae+w]=y.b):(P(v[j+w],v[ge+w]),$e=y.a,R=y.b,P(v[W+w],v[Ae+w]),Mt=y.a,V=y.b,P($e,Mt),v[j+w]=y.a,v[W+w]=y.b,P(R,V),v[ge+w]=y.a,v[Ae+w]=y.b)}if(I&ae){const W=j+Le;ce?M(v[j+w],v[W+w]):P(v[j+w],v[W+w]),$e=y.a,v[W+w]=y.b,v[j+w]=$e}}if(Z&ae){let j=we;const G=we+B*(I-oe);for(;j<=G;j+=De){const W=j+Ce;ce?M(v[j+w],v[W+w]):P(v[j+w],v[W+w]),$e=y.a,v[W+w]=y.b,v[j+w]=$e}}oe=ae,ae>>=1}return we}function E(v,w,I,B,Z,z,re,ce,ue){let ae=0,oe=0;const we=re,Te=Math.trunc(B.value+(Z+7)/8);for(;B.value<Te;)for(f(ae,oe,I,B),ae=d.c,oe=d.lc;oe>=14;){const Xe=ae>>oe-14&16383,Ce=w[Xe];if(Ce.len)oe-=Ce.len,g(Ce.lit,z,ae,oe,I,B,ce,ue,we),ae=_.c,oe=_.lc;else{if(!Ce.p)throw new Error("hufDecode issues");let De;for(De=0;De<Ce.lit;De++){const $e=p(v[Ce.p[De]]);for(;oe<$e&&B.value<Te;)f(ae,oe,I,B),ae=d.c,oe=d.lc;if(oe>=$e&&l(v[Ce.p[De]])==(ae>>oe-$e&(1<<$e)-1)){oe-=$e,g(Ce.p[De],z,ae,oe,I,B,ce,ue,we),ae=_.c,oe=_.lc;break}}if(De==Ce.lit)throw new Error("hufDecode issues")}}const Le=8-Z&7;for(ae>>=Le,oe-=Le;oe>0;){const Xe=w[ae<<14-oe&16383];if(Xe.len)oe-=Xe.len,g(Xe.lit,z,ae,oe,I,B,ce,ue,we),ae=_.c,oe=_.lc;else throw new Error("hufDecode issues")}return!0}function C(v,w,I,B,Z,z){const re={value:0},ce=I.value,ue=Je(w,I),ae=Je(w,I);I.value+=4;const oe=Je(w,I);if(I.value+=4,ue<0||ue>=65537||ae<0||ae>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const we=new Array(65537),Te=new Array(16384);r(Te);const Le=B-(I.value-ce);if(u(v,I,Le,ue,ae,we),oe>8*(B-(I.value-ce)))throw new Error("Something wrong with hufUncompress");h(we,ue,ae,Te),E(we,Te,v,I,oe,ae,z,Z,re)}function T(v,w,I){for(let B=0;B<I;++B)w[B]=v[w[B]]}function b(v){for(let w=1;w<v.length;w++){const I=v[w-1]+v[w]-128;v[w]=I}}function k(v,w){let I=0,B=Math.floor((v.length+1)/2),Z=0;const z=v.length-1;for(;!(Z>z||(w[Z++]=v[I++],Z>z));)w[Z++]=v[B++]}function X(v){let w=v.byteLength;const I=new Array;let B=0;const Z=new DataView(v);for(;w>0;){const z=Z.getInt8(B++);if(z<0){const re=-z;w-=re+1;for(let ce=0;ce<re;ce++)I.push(Z.getUint8(B++))}else{const re=z;w-=2;const ce=Z.getUint8(B++);for(let ue=0;ue<re+1;ue++)I.push(ce)}}return I}function F(v,w,I,B,Z,z){let re=new DataView(z.buffer);const ce=I[v.idx[0]].width,ue=I[v.idx[0]].height,ae=3,oe=Math.floor(ce/8),we=Math.ceil(ce/8),Te=Math.ceil(ue/8),Le=ce-(we-1)*8,Xe=ue-(Te-1)*8,Ce={value:0},De=new Array(ae),$e=new Array(ae),Mt=new Array(ae),R=new Array(ae),V=new Array(ae);for(let G=0;G<ae;++G)V[G]=w[v.idx[G]],De[G]=G<1?0:De[G-1]+we*Te,$e[G]=new Float32Array(64),Mt[G]=new Uint16Array(64),R[G]=new Uint16Array(we*64);for(let G=0;G<Te;++G){let W=8;G==Te-1&&(W=Xe);let ge=8;for(let ve=0;ve<we;++ve){ve==we-1&&(ge=Le);for(let Ee=0;Ee<ae;++Ee)Mt[Ee].fill(0),Mt[Ee][0]=Z[De[Ee]++],Y(Ce,B,Mt[Ee]),q(Mt[Ee],$e[Ee]),ie($e[Ee]);ne($e);for(let Ee=0;Ee<ae;++Ee)$($e[Ee],R[Ee],ve*64)}let Ae=0;for(let ve=0;ve<ae;++ve){const Ee=I[v.idx[ve]].type;for(let We=8*G;We<8*G+W;++We){Ae=V[ve][We];for(let rt=0;rt<oe;++rt){const Ke=rt*64+(We&7)*8;re.setUint16(Ae+0*2*Ee,R[ve][Ke+0],!0),re.setUint16(Ae+1*2*Ee,R[ve][Ke+1],!0),re.setUint16(Ae+2*2*Ee,R[ve][Ke+2],!0),re.setUint16(Ae+3*2*Ee,R[ve][Ke+3],!0),re.setUint16(Ae+4*2*Ee,R[ve][Ke+4],!0),re.setUint16(Ae+5*2*Ee,R[ve][Ke+5],!0),re.setUint16(Ae+6*2*Ee,R[ve][Ke+6],!0),re.setUint16(Ae+7*2*Ee,R[ve][Ke+7],!0),Ae+=8*2*Ee}}if(oe!=we)for(let We=8*G;We<8*G+W;++We){const rt=V[ve][We]+8*oe*2*Ee,Ke=oe*64+(We&7)*8;for(let Et=0;Et<ge;++Et)re.setUint16(rt+Et*2*Ee,R[ve][Ke+Et],!0)}}}const j=new Uint16Array(ce);re=new DataView(z.buffer);for(let G=0;G<ae;++G){I[v.idx[G]].decoded=!0;const W=I[v.idx[G]].type;if(I[G].type==2)for(let ge=0;ge<ue;++ge){const Ae=V[G][ge];for(let ve=0;ve<ce;++ve)j[ve]=re.getUint16(Ae+ve*2*W,!0);for(let ve=0;ve<ce;++ve)re.setFloat32(Ae+ve*2*W,he(j[ve]),!0)}}}function Y(v,w,I){let B,Z=1;for(;Z<64;)B=w[v.value],B==65280?Z=64:B>>8==255?Z+=B&255:(I[Z]=B,Z++),v.value++}function q(v,w){w[0]=he(v[0]),w[1]=he(v[1]),w[2]=he(v[5]),w[3]=he(v[6]),w[4]=he(v[14]),w[5]=he(v[15]),w[6]=he(v[27]),w[7]=he(v[28]),w[8]=he(v[2]),w[9]=he(v[4]),w[10]=he(v[7]),w[11]=he(v[13]),w[12]=he(v[16]),w[13]=he(v[26]),w[14]=he(v[29]),w[15]=he(v[42]),w[16]=he(v[3]),w[17]=he(v[8]),w[18]=he(v[12]),w[19]=he(v[17]),w[20]=he(v[25]),w[21]=he(v[30]),w[22]=he(v[41]),w[23]=he(v[43]),w[24]=he(v[9]),w[25]=he(v[11]),w[26]=he(v[18]),w[27]=he(v[24]),w[28]=he(v[31]),w[29]=he(v[40]),w[30]=he(v[44]),w[31]=he(v[53]),w[32]=he(v[10]),w[33]=he(v[19]),w[34]=he(v[23]),w[35]=he(v[32]),w[36]=he(v[39]),w[37]=he(v[45]),w[38]=he(v[52]),w[39]=he(v[54]),w[40]=he(v[20]),w[41]=he(v[22]),w[42]=he(v[33]),w[43]=he(v[38]),w[44]=he(v[46]),w[45]=he(v[51]),w[46]=he(v[55]),w[47]=he(v[60]),w[48]=he(v[21]),w[49]=he(v[34]),w[50]=he(v[37]),w[51]=he(v[47]),w[52]=he(v[50]),w[53]=he(v[56]),w[54]=he(v[59]),w[55]=he(v[61]),w[56]=he(v[35]),w[57]=he(v[36]),w[58]=he(v[48]),w[59]=he(v[49]),w[60]=he(v[57]),w[61]=he(v[58]),w[62]=he(v[62]),w[63]=he(v[63])}function ie(v){const w=.5*Math.cos(.7853975),I=.5*Math.cos(3.14159/16),B=.5*Math.cos(3.14159/8),Z=.5*Math.cos(3*3.14159/16),z=.5*Math.cos(5*3.14159/16),re=.5*Math.cos(3*3.14159/8),ce=.5*Math.cos(7*3.14159/16),ue=new Array(4),ae=new Array(4),oe=new Array(4),we=new Array(4);for(let Te=0;Te<8;++Te){const Le=Te*8;ue[0]=B*v[Le+2],ue[1]=re*v[Le+2],ue[2]=B*v[Le+6],ue[3]=re*v[Le+6],ae[0]=I*v[Le+1]+Z*v[Le+3]+z*v[Le+5]+ce*v[Le+7],ae[1]=Z*v[Le+1]-ce*v[Le+3]-I*v[Le+5]-z*v[Le+7],ae[2]=z*v[Le+1]-I*v[Le+3]+ce*v[Le+5]+Z*v[Le+7],ae[3]=ce*v[Le+1]-z*v[Le+3]+Z*v[Le+5]-I*v[Le+7],oe[0]=w*(v[Le+0]+v[Le+4]),oe[3]=w*(v[Le+0]-v[Le+4]),oe[1]=ue[0]+ue[3],oe[2]=ue[1]-ue[2],we[0]=oe[0]+oe[1],we[1]=oe[3]+oe[2],we[2]=oe[3]-oe[2],we[3]=oe[0]-oe[1],v[Le+0]=we[0]+ae[0],v[Le+1]=we[1]+ae[1],v[Le+2]=we[2]+ae[2],v[Le+3]=we[3]+ae[3],v[Le+4]=we[3]-ae[3],v[Le+5]=we[2]-ae[2],v[Le+6]=we[1]-ae[1],v[Le+7]=we[0]-ae[0]}for(let Te=0;Te<8;++Te)ue[0]=B*v[16+Te],ue[1]=re*v[16+Te],ue[2]=B*v[48+Te],ue[3]=re*v[48+Te],ae[0]=I*v[8+Te]+Z*v[24+Te]+z*v[40+Te]+ce*v[56+Te],ae[1]=Z*v[8+Te]-ce*v[24+Te]-I*v[40+Te]-z*v[56+Te],ae[2]=z*v[8+Te]-I*v[24+Te]+ce*v[40+Te]+Z*v[56+Te],ae[3]=ce*v[8+Te]-z*v[24+Te]+Z*v[40+Te]-I*v[56+Te],oe[0]=w*(v[Te]+v[32+Te]),oe[3]=w*(v[Te]-v[32+Te]),oe[1]=ue[0]+ue[3],oe[2]=ue[1]-ue[2],we[0]=oe[0]+oe[1],we[1]=oe[3]+oe[2],we[2]=oe[3]-oe[2],we[3]=oe[0]-oe[1],v[0+Te]=we[0]+ae[0],v[8+Te]=we[1]+ae[1],v[16+Te]=we[2]+ae[2],v[24+Te]=we[3]+ae[3],v[32+Te]=we[3]-ae[3],v[40+Te]=we[2]-ae[2],v[48+Te]=we[1]-ae[1],v[56+Te]=we[0]-ae[0]}function ne(v){for(let w=0;w<64;++w){const I=v[0][w],B=v[1][w],Z=v[2][w];v[0][w]=I+1.5747*Z,v[1][w]=I-.1873*B-.4682*Z,v[2][w]=I+1.8556*B}}function $(v,w,I){for(let B=0;B<64;++B)w[I+B]=uo.toHalfFloat(se(v[B]))}function se(v){return v<=1?Math.sign(v)*Math.pow(Math.abs(v),2.2):Math.sign(v)*Math.pow(t,Math.abs(v)-1)}function de(v){return new DataView(v.array.buffer,v.offset.value,v.size)}function Pe(v){const w=v.viewer.buffer.slice(v.offset.value,v.offset.value+v.size),I=new Uint8Array(X(w)),B=new Uint8Array(I.length);return b(I),k(I,B),new DataView(B.buffer)}function Ge(v){const w=v.array.slice(v.offset.value,v.offset.value+v.size),I=As(w),B=new Uint8Array(I.length);return b(I),k(I,B),new DataView(B.buffer)}function Fe(v){const w=v.viewer,I={value:v.offset.value},B=new Uint16Array(v.columns*v.lines*(v.inputChannels.length*v.type)),Z=new Uint8Array(8192);let z=0;const re=new Array(v.inputChannels.length);for(let Xe=0,Ce=v.inputChannels.length;Xe<Ce;Xe++)re[Xe]={},re[Xe].start=z,re[Xe].end=re[Xe].start,re[Xe].nx=v.columns,re[Xe].ny=v.lines,re[Xe].size=v.type,z+=re[Xe].nx*re[Xe].ny*re[Xe].size;const ce=ft(w,I),ue=ft(w,I);if(ue>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ce<=ue)for(let Xe=0;Xe<ue-ce+1;Xe++)Z[Xe+ce]=ot(w,I);const ae=new Uint16Array(65536),oe=i(Z,ae),we=Je(w,I);C(v.array,w,I,we,B,z);for(let Xe=0;Xe<v.inputChannels.length;++Xe){const Ce=re[Xe];for(let De=0;De<re[Xe].size;++De)S(B,Ce.start+De,Ce.nx,Ce.size,Ce.ny,Ce.nx*Ce.size,oe)}T(ae,B,z);let Te=0;const Le=new Uint8Array(B.buffer.byteLength);for(let Xe=0;Xe<v.lines;Xe++)for(let Ce=0;Ce<v.inputChannels.length;Ce++){const De=re[Ce],$e=De.nx*De.size,Mt=new Uint8Array(B.buffer,De.end*2,$e*2);Le.set(Mt,Te),Te+=$e*2,De.end+=$e}return new DataView(Le.buffer)}function te(v){const w=v.array.slice(v.offset.value,v.offset.value+v.size),I=As(w),B=v.inputChannels.length*v.lines*v.columns*v.totalBytes,Z=new ArrayBuffer(B),z=new DataView(Z);let re=0,ce=0;const ue=new Array(4);for(let ae=0;ae<v.lines;ae++)for(let oe=0;oe<v.inputChannels.length;oe++){let we=0;switch(v.inputChannels[oe].pixelType){case 1:ue[0]=re,ue[1]=ue[0]+v.columns,re=ue[1]+v.columns;for(let Te=0;Te<v.columns;++Te){const Le=I[ue[0]++]<<8|I[ue[1]++];we+=Le,z.setUint16(ce,we,!0),ce+=2}break;case 2:ue[0]=re,ue[1]=ue[0]+v.columns,ue[2]=ue[1]+v.columns,re=ue[2]+v.columns;for(let Te=0;Te<v.columns;++Te){const Le=I[ue[0]++]<<24|I[ue[1]++]<<16|I[ue[2]++]<<8;we+=Le,z.setUint32(ce,we,!0),ce+=4}break}}return z}function pe(v){const w=v.viewer,I={value:v.offset.value},B=new Uint8Array(v.columns*v.lines*(v.inputChannels.length*v.type*2)),Z={version:Ne(w,I),unknownUncompressedSize:Ne(w,I),unknownCompressedSize:Ne(w,I),acCompressedSize:Ne(w,I),dcCompressedSize:Ne(w,I),rleCompressedSize:Ne(w,I),rleUncompressedSize:Ne(w,I),rleRawSize:Ne(w,I),totalAcUncompressedCount:Ne(w,I),totalDcUncompressedCount:Ne(w,I),acCompression:Ne(w,I)};if(Z.version<2)throw new Error("EXRLoader.parse: "+K.compression+" version "+Z.version+" is unsupported");const z=new Array;let re=ft(w,I)-2;for(;re>0;){const Ce=Re(w.buffer,I),De=ot(w,I),$e=De>>2&3,Mt=(De>>4)-1,R=new Int8Array([Mt])[0],V=ot(w,I);z.push({name:Ce,index:R,type:V,compression:$e}),re-=Ce.length+3}const ce=K.channels,ue=new Array(v.inputChannels.length);for(let Ce=0;Ce<v.inputChannels.length;++Ce){const De=ue[Ce]={},$e=ce[Ce];De.name=$e.name,De.compression=0,De.decoded=!1,De.type=$e.pixelType,De.pLinear=$e.pLinear,De.width=v.columns,De.height=v.lines}const ae={idx:new Array(3)};for(let Ce=0;Ce<v.inputChannels.length;++Ce){const De=ue[Ce];for(let $e=0;$e<z.length;++$e){const Mt=z[$e];De.name==Mt.name&&(De.compression=Mt.compression,Mt.index>=0&&(ae.idx[Mt.index]=Ce),De.offset=Ce)}}let oe,we,Te;if(Z.acCompressedSize>0)switch(Z.acCompression){case 0:oe=new Uint16Array(Z.totalAcUncompressedCount),C(v.array,w,I,Z.acCompressedSize,oe,Z.totalAcUncompressedCount);break;case 1:const Ce=v.array.slice(I.value,I.value+Z.totalAcUncompressedCount),De=As(Ce);oe=new Uint16Array(De.buffer),I.value+=Z.totalAcUncompressedCount;break}if(Z.dcCompressedSize>0){const Ce={array:v.array,offset:I,size:Z.dcCompressedSize};we=new Uint16Array(Ge(Ce).buffer),I.value+=Z.dcCompressedSize}if(Z.rleRawSize>0){const Ce=v.array.slice(I.value,I.value+Z.rleCompressedSize),De=As(Ce);Te=X(De.buffer),I.value+=Z.rleCompressedSize}let Le=0;const Xe=new Array(ue.length);for(let Ce=0;Ce<Xe.length;++Ce)Xe[Ce]=new Array;for(let Ce=0;Ce<v.lines;++Ce)for(let De=0;De<ue.length;++De)Xe[De].push(Le),Le+=ue[De].width*v.type*2;F(ae,Xe,ue,oe,we,B);for(let Ce=0;Ce<ue.length;++Ce){const De=ue[Ce];if(!De.decoded)switch(De.compression){case 2:let $e=0,Mt=0;for(let R=0;R<v.lines;++R){let V=Xe[Ce][$e];for(let j=0;j<De.width;++j){for(let G=0;G<2*De.type;++G)B[V++]=Te[Mt+G*De.width*De.height];Mt++}$e++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(B.buffer)}function Re(v,w){const I=new Uint8Array(v);let B=0;for(;I[w.value+B]!=0;)B+=1;const Z=new TextDecoder().decode(I.slice(w.value,w.value+B));return w.value=w.value+B+1,Z}function ye(v,w,I){const B=new TextDecoder().decode(new Uint8Array(v).slice(w.value,w.value+I));return w.value=w.value+I,B}function Qe(v,w){const I=H(v,w),B=Je(v,w);return[I,B]}function Ze(v,w){const I=Je(v,w),B=Je(v,w);return[I,B]}function H(v,w){const I=v.getInt32(w.value,!0);return w.value=w.value+4,I}function Je(v,w){const I=v.getUint32(w.value,!0);return w.value=w.value+4,I}function Be(v,w){const I=v[w.value];return w.value=w.value+1,I}function ot(v,w){const I=v.getUint8(w.value);return w.value=w.value+1,I}const Ne=function(v,w){let I;return"getBigInt64"in DataView.prototype?I=Number(v.getBigInt64(w.value,!0)):I=v.getUint32(w.value+4,!0)+Number(v.getUint32(w.value,!0)<<32),w.value+=8,I};function ze(v,w){const I=v.getFloat32(w.value,!0);return w.value+=4,I}function tt(v,w){return uo.toHalfFloat(ze(v,w))}function he(v){const w=(v&31744)>>10,I=v&1023;return(v>>15?-1:1)*(w?w===31?I?NaN:1/0:Math.pow(2,w-15)*(1+I/1024):6103515625e-14*(I/1024))}function ft(v,w){const I=v.getUint16(w.value,!0);return w.value+=2,I}function D(v,w){return he(ft(v,w))}function A(v,w,I,B){const Z=I.value,z=[];for(;I.value<Z+B-1;){const re=Re(w,I),ce=H(v,I),ue=ot(v,I);I.value+=3;const ae=H(v,I),oe=H(v,I);z.push({name:re,pixelType:ce,pLinear:ue,xSampling:ae,ySampling:oe})}return I.value+=1,z}function J(v,w){const I=ze(v,w),B=ze(v,w),Z=ze(v,w),z=ze(v,w),re=ze(v,w),ce=ze(v,w),ue=ze(v,w),ae=ze(v,w);return{redX:I,redY:B,greenX:Z,greenY:z,blueX:re,blueY:ce,whiteX:ue,whiteY:ae}}function le(v,w){const I=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],B=ot(v,w);return I[B]}function me(v,w){const I=H(v,w),B=H(v,w),Z=H(v,w),z=H(v,w);return{xMin:I,yMin:B,xMax:Z,yMax:z}}function fe(v,w){const I=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],B=ot(v,w);return I[B]}function ke(v,w){const I=["ENVMAP_LATLONG","ENVMAP_CUBE"],B=ot(v,w);return I[B]}function Me(v,w){const I=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],B=["ROUND_DOWN","ROUND_UP"],Z=Je(v,w),z=Je(v,w),re=ot(v,w);return{xSize:Z,ySize:z,levelMode:I[re&15],roundingMode:B[re>>4]}}function be(v,w){const I=ze(v,w),B=ze(v,w);return[I,B]}function Ye(v,w){const I=ze(v,w),B=ze(v,w),Z=ze(v,w);return[I,B,Z]}function xe(v,w,I,B,Z){if(B==="string"||B==="stringvector"||B==="iccProfile")return ye(w,I,Z);if(B==="chlist")return A(v,w,I,Z);if(B==="chromaticities")return J(v,I);if(B==="compression")return le(v,I);if(B==="box2i")return me(v,I);if(B==="envmap")return ke(v,I);if(B==="tiledesc")return Me(v,I);if(B==="lineOrder")return fe(v,I);if(B==="float")return ze(v,I);if(B==="v2f")return be(v,I);if(B==="v3f")return Ye(v,I);if(B==="int")return H(v,I);if(B==="rational")return Qe(v,I);if(B==="timecode")return Ze(v,I);if(B==="preview")return I.value+=Z,"skipped";I.value+=Z}function He(v,w){const I=Math.log2(v);return w=="ROUND_DOWN"?Math.floor(I):Math.ceil(I)}function ut(v,w,I){let B=0;switch(v.levelMode){case"ONE_LEVEL":B=1;break;case"MIPMAP_LEVELS":B=He(Math.max(w,I),v.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return B}function Ve(v,w,I,B){const Z=new Array(v);for(let z=0;z<v;z++){const re=1<<z;let ce=w/re|0;B=="ROUND_UP"&&ce*re<w&&(ce+=1);const ue=Math.max(ce,1);Z[z]=(ue+I-1)/I|0}return Z}function Ue(){const v=this,w=v.offset,I={value:0};for(let B=0;B<v.tileCount;B++){const Z=H(v.viewer,w),z=H(v.viewer,w);w.value+=8,v.size=Je(v.viewer,w);const re=Z*v.blockWidth,ce=z*v.blockHeight;v.columns=re+v.blockWidth>v.width?v.width-re:v.blockWidth,v.lines=ce+v.blockHeight>v.height?v.height-ce:v.blockHeight;const ue=v.columns*v.totalBytes,ae=v.size<v.lines*ue?v.uncompress(v):de(v);w.value+=v.size;for(let oe=0;oe<v.lines;oe++){const we=oe*v.columns*v.totalBytes;for(let Te=0;Te<v.inputChannels.length;Te++){const Le=K.channels[Te].name,Xe=v.channelByteOffsets[Le]*v.columns,Ce=v.decodeChannels[Le];if(Ce===void 0)continue;I.value=we+Xe;const De=(v.height-(1+ce+oe))*v.outLineWidth;for(let $e=0;$e<v.columns;$e++){const Mt=De+($e+re)*v.outputChannels+Ce;v.byteArray[Mt]=v.getter(ae,I)}}}}}function it(){const v=this,w=v.offset,I={value:0};for(let B=0;B<v.height/v.blockHeight;B++){const Z=H(v.viewer,w)-K.dataWindow.yMin;v.size=Je(v.viewer,w),v.lines=Z+v.blockHeight>v.height?v.height-Z:v.blockHeight;const z=v.columns*v.totalBytes,re=v.size<v.lines*z?v.uncompress(v):de(v);w.value+=v.size;for(let ce=0;ce<v.blockHeight;ce++){const ue=B*v.blockHeight,ae=ce+v.scanOrder(ue);if(ae>=v.height)continue;const oe=ce*z,we=(v.height-1-ae)*v.outLineWidth;for(let Te=0;Te<v.inputChannels.length;Te++){const Le=K.channels[Te].name,Xe=v.channelByteOffsets[Le]*v.columns,Ce=v.decodeChannels[Le];if(Ce!==void 0){I.value=oe+Xe;for(let De=0;De<v.columns;De++){const $e=we+De*v.outputChannels+Ce;v.byteArray[$e]=v.getter(re,I)}}}}}}function at(v,w,I){const B={};if(v.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");B.version=v.getUint8(4);const Z=v.getUint8(5);B.spec={singleTile:!!(Z&2),longName:!!(Z&4),deepFormat:!!(Z&8),multiPart:!!(Z&16)},I.value=8;let z=!0;for(;z;){const re=Re(w,I);if(re==0)z=!1;else{const ce=Re(w,I),ue=Je(v,I),ae=xe(v,w,I,ce,ue);ae===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ce}'.`):B[re]=ae}}if(Z&-7)throw console.error("THREE.EXRHeader:",B),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return B}function mt(v,w,I,B,Z){const z={size:0,viewer:w,array:I,offset:B,width:v.dataWindow.xMax-v.dataWindow.xMin+1,height:v.dataWindow.yMax-v.dataWindow.yMin+1,inputChannels:v.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Dt};switch(v.compression){case"NO_COMPRESSION":z.blockHeight=1,z.uncompress=de;break;case"RLE_COMPRESSION":z.blockHeight=1,z.uncompress=Pe;break;case"ZIPS_COMPRESSION":z.blockHeight=1,z.uncompress=Ge;break;case"ZIP_COMPRESSION":z.blockHeight=16,z.uncompress=Ge;break;case"PIZ_COMPRESSION":z.blockHeight=32,z.uncompress=Fe;break;case"PXR24_COMPRESSION":z.blockHeight=16,z.uncompress=te;break;case"DWAA_COMPRESSION":z.blockHeight=32,z.uncompress=pe;break;case"DWAB_COMPRESSION":z.blockHeight=256,z.uncompress=pe;break;default:throw new Error("EXRLoader.parse: "+v.compression+" is unsupported")}const re={};for(const oe of v.channels)switch(oe.name){case"Y":case"R":case"G":case"B":case"A":re[oe.name]=!0,z.type=oe.pixelType}let ce=!1;if(re.R&&re.G&&re.B)ce=!re.A,z.outputChannels=4,z.decodeChannels={R:0,G:1,B:2,A:3};else if(re.Y)z.outputChannels=1,z.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(z.type==1)switch(Z){case Yt:z.getter=D;break;case Ui:z.getter=ft;break}else if(z.type==2)switch(Z){case Yt:z.getter=ze;break;case Ui:z.getter=tt}else throw new Error("EXRLoader.parse: unsupported pixelType "+z.type+" for "+v.compression+".");z.columns=z.width;const ue=z.width*z.height*z.outputChannels;switch(Z){case Yt:z.byteArray=new Float32Array(ue),ce&&z.byteArray.fill(1,0,ue);break;case Ui:z.byteArray=new Uint16Array(ue),ce&&z.byteArray.fill(15360,0,ue);break;default:console.error("THREE.EXRLoader: unsupported type: ",Z);break}let ae=0;for(const oe of v.channels)z.decodeChannels[oe.name]!==void 0&&(z.channelByteOffsets[oe.name]=ae),ae+=oe.pixelType*2;if(z.totalBytes=ae,z.outLineWidth=z.width*z.outputChannels,v.lineOrder==="INCREASING_Y"?z.scanOrder=oe=>oe:z.scanOrder=oe=>z.height-1-oe,z.outputChannels==4?(z.format=Ni,z.colorSpace=Dt):(z.format=pl,z.colorSpace=Tn),v.spec.singleTile){z.blockHeight=v.tiles.ySize,z.blockWidth=v.tiles.xSize;const oe=ut(v.tiles,z.width,z.height),we=Ve(oe,z.width,v.tiles.xSize,v.tiles.roundingMode),Te=Ve(oe,z.height,v.tiles.ySize,v.tiles.roundingMode);z.tileCount=we[0]*Te[0];for(let Le=0;Le<oe;Le++)for(let Xe=0;Xe<Te[Le];Xe++)for(let Ce=0;Ce<we[Le];Ce++)Ne(w,B);z.decode=Ue.bind(z)}else{z.blockWidth=z.width;const oe=Math.ceil(z.height/z.blockHeight);for(let we=0;we<oe;we++)Ne(w,B);z.decode=it.bind(z)}return z}const N={value:0},U=new DataView(e),ee=new Uint8Array(e),K=at(U,e,N),_e=mt(K,U,ee,N,this.type);return _e.decode(),{header:K,width:_e.width,height:_e.height,data:_e.byteArray,format:_e.format,colorSpace:_e.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,r){function o(a,s){a.colorSpace=s.colorSpace,a.minFilter=It,a.magFilter=It,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,s)}return super.load(e,o,i,r)}}class vT extends wr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bT(t)}),this.register(function(t){return new ST(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new MT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new xT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new FT(t)})}load(e,t,i,r){const o=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=la.extractUrlBase(e);a=la.resolveURL(u,this.path)}else a=la.extractUrlBase(e);this.manager.itemStart(e);const s=function(u){r?r(u):console.error(u),o.manager.itemError(e),o.manager.itemEnd(e)},c=new cc(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{o.parse(u,a,function(p){t(p),o.manager.itemEnd(e)},s)}catch(p){s(p)}},i,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let o;const a={},s={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Up){try{a[ht.KHR_BINARY_GLTF]=new BT(e)}catch(p){r&&r(p);return}o=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new $T(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const l=this.pluginCallbacks[p](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[l.name]=l,a[l.name]=!0}if(o.extensionsUsed)for(let p=0;p<o.extensionsUsed.length;++p){const l=o.extensionsUsed[p],h=o.extensionsRequired||[];switch(l){case ht.KHR_MATERIALS_UNLIT:a[l]=new TT;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[l]=new kT(o,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[l]=new zT;break;case ht.KHR_MESH_QUANTIZATION:a[l]=new HT;break;default:h.indexOf(l)>=0&&s[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(a),u.setPlugins(s),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,o){i.parse(e,t,r,o)})}}function yT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xT{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const o=t.json,a=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let s;const c=new qe(16777215);a.color!==void 0&&c.setRGB(a.color[0],a.color[1],a.color[2],Dt);const u=a.range!==void 0?a.range:0;switch(a.type){case"directional":s=new vp(c),s.target.position.set(0,0,-1),s.add(s.target);break;case"point":s=new k1(c),s.distance=u;break;case"spot":s=new F1(c),s.distance=u,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,s.angle=a.spot.outerConeAngle,s.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return s.position.set(0,0,0),s.decay=2,er(s,a),a.intensity!==void 0&&(s.intensity=a.intensity),s.name=t.createUniqueName(a.name||"light_"+e),r=Promise.resolve(s),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return i._getNodeRef(t.cache,o,a)})}}class TT{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,i){const r=[];e.color=new qe(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Dt),e.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",o.baseColorTexture,ni))}return Promise.all(r)}}class MT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class bT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const s=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(s,s)}return Promise.all(o)}}class ST{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class wT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class ET{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const s=a.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Dt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ni)),a.sheenRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class AT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class RT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const s=a.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(s[0],s[1],s[2],Dt),Promise.all(o)}}class CT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class PT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const s=a.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(s[0],s[1],s[2],Dt),a.specularColorTexture!==void 0&&o.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,ni)),Promise.all(o)}}class LT{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(o)}}class IT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class UT{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,a)}}class NT{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],s=r.images[a.source];let c=i.textureLoader;if(s.uri){const u=i.options.manager.getHandler(s.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class DT{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],s=r.images[a.source];let c=i.textureLoader;if(s.uri){const u=i.options.manager.getHandler(s.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class OT{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(s){const c=r.byteOffset||0,u=r.byteLength||0,p=r.count,l=r.byteStride,h=new Uint8Array(s,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(p,l,h,r.mode,r.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(p*l);return a.decodeGltfBuffer(new Uint8Array(d),p,l,h,r.mode,r.filter),d})})}else return null}}class FT{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Bi.TRIANGLES&&c.mode!==Bi.TRIANGLE_STRIP&&c.mode!==Bi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],s={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(s[c]=u,s[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),p=u.isGroup?u.children:[u],l=c[0].count,h=[];for(const d of p){const f=new et,_=new O,g=new yi,m=new O(1,1,1),x=new rc(d.geometry,d.material,l);for(let y=0;y<l;y++)s.TRANSLATION&&_.fromBufferAttribute(s.TRANSLATION,y),s.ROTATION&&g.fromBufferAttribute(s.ROTATION,y),s.SCALE&&m.fromBufferAttribute(s.SCALE,y),x.setMatrixAt(y,f.compose(_,g,m));for(const y in s)if(y==="_COLOR_0"){const M=s[y];x.instanceColor=new nc(M.array,M.itemSize,M.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&d.geometry.setAttribute(y,s[y]);ct.prototype.copy.call(x,d),this.parser.assignFinalMaterial(x),h.push(x)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const Up="glTF",ha=12,Np={JSON:1313821514,BIN:5130562};class BT{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ha),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ha,o=new DataView(e,ha);let a=0;for(;a<r;){const s=o.getUint32(a,!0);a+=4;const c=o.getUint32(a,!0);if(a+=4,c===Np.JSON){const u=new Uint8Array(e,ha+a,s);this.content=i.decode(u)}else if(c===Np.BIN){const u=ha+a;this.body=e.slice(u,u+s)}a+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,s={},c={},u={};for(const p in a){const l=Tc[p]||p.toLowerCase();s[l]=a[p]}for(const p in e.attributes){const l=Tc[p]||p.toLowerCase();if(a[p]!==void 0){const h=i.accessors[e.attributes[p]],d=Ro[h.componentType];u[l]=d.name,c[l]=h.normalized===!0}}return t.getDependency("bufferView",o).then(function(p){return new Promise(function(l,h){r.decodeDracoFile(p,function(d){for(const f in d.attributes){const _=d.attributes[f],g=c[f];g!==void 0&&(_.normalized=g)}l(d)},s,u,Dt,h)})})}}class zT{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class HT{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class Dp extends aa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[o+a];return t}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=s*2,u=s*3,p=r-t,l=(i-t)/p,h=l*l,d=h*l,f=e*u,_=f-u,g=-2*d+3*h,m=d-h,x=1-g,y=m-h+l;for(let M=0;M!==s;M++){const P=a[_+M+s],S=a[_+M+c]*p,E=a[f+M+s],C=a[f+M]*p;o[M]=x*P+y*S+g*E+m*C}return o}}const VT=new yi;class GT extends Dp{interpolate_(e,t,i,r){const o=super.interpolate_(e,t,i,r);return VT.fromArray(o).normalize().toArray(o),o}}const Bi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ro={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Op={9728:ii,9729:It,9984:Zu,9985:Ha,9986:Xo,9987:nn},Fp={33071:di,33648:za,10497:qr},xc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},WT={CUBICSPLINE:void 0,LINEAR:Zr,STEP:Yo},Mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new lc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),n.DefaultMaterial}function Er(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function er(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jT(n,e,t){let i=!1,r=!1,o=!1;for(let u=0,p=e.length;u<p;u++){const l=e[u];if(l.POSITION!==void 0&&(i=!0),l.NORMAL!==void 0&&(r=!0),l.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(n);const a=[],s=[],c=[];for(let u=0,p=e.length;u<p;u++){const l=e[u];if(i){const h=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):n.attributes.position;a.push(h)}if(r){const h=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):n.attributes.normal;s.push(h)}if(o){const h=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):n.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(s),Promise.all(c)]).then(function(u){const p=u[0],l=u[1],h=u[2];return i&&(n.morphAttributes.position=p),r&&(n.morphAttributes.normal=l),o&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function qT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function YT(n){let e;const t=n.extensions&&n.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bc(t.attributes):e=n.indices+":"+bc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+bc(n.targets[i]);return e}function bc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Sc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function KT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ZT=new et;class $T{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,o=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,o=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&o<98?this.textureLoader=new fp(this.options.manager):this.textureLoader=new V1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const s={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Er(o,s,r),er(s,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(s)})).then(function(){for(const c of s.scenes)c.updateMatrixWorld();e(s)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){const a=t[r].joints;for(let s=0,c=a.length;s<c;s++)e[a[s]].isBone=!0}for(let r=0,o=e.length;r<o;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),o=(a,s)=>{const c=this.associations.get(a);c!=null&&this.associations.set(s,c);for(const[u,p]of a.children.entries())o(p,s.children[u])};return o(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const o=e(t[r]);o&&i.push(o)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,a){i.load(la.resolveURL(t.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,o=t.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=xc[r.type],s=Ro[r.componentType],c=r.normalized===!0,u=new s(r.count*a);return Promise.resolve(new jt(u,a,c))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){const s=a[0],c=xc[r.type],u=Ro[r.componentType],p=u.BYTES_PER_ELEMENT,l=p*c,h=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,f=r.normalized===!0;let _,g;if(d&&d!==l){const m=Math.floor(h/d),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let y=t.cache.get(x);y||(_=new u(s,m*d,r.count*d/p),y=new _1(_,d/p),t.cache.add(x,y)),g=new Fu(y,c,h%d/p,f)}else s===null?_=new u(r.count*c):_=new u(s,h,r.count*c),g=new jt(_,c,f);if(r.sparse!==void 0){const m=xc.SCALAR,x=Ro[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,P=new x(a[1],y,r.sparse.count*m),S=new u(a[2],M,r.sparse.count*c);s!==null&&(g=new jt(g.array.slice(),g.itemSize,g.normalized));for(let E=0,C=P.length;E<C;E++){const T=P[E];if(g.setX(T,S[E*c]),c>=2&&g.setY(T,S[E*c+1]),c>=3&&g.setZ(T,S[E*c+2]),c>=4&&g.setW(T,S[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const s=i.manager.getHandler(o.uri);s!==null&&(a=s)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const r=this,o=this.json,a=o.textures[e],s=o.images[t],c=(s.uri||s.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=a.name||s.name||"",p.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(p.name=s.uri);const l=(o.samplers||{})[a.sampler]||{};return p.magFilter=Op[l.magFilter]||It,p.minFilter=Op[l.minFilter]||nn,p.wrapS=Fp[l.wrapS]||qr,p.wrapT=Fp[l.wrapT]||qr,r.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const i=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());const a=r.images[e],s=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(l){u=!0;const h=new Blob([l],{type:a.mimeType});return c=s.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(c).then(function(l){return new Promise(function(h,d){let f=h;t.isImageBitmapLoader===!0&&(f=function(_){const g=new Ht(_);g.needsUpdate=!0,h(g)}),t.load(la.resolveURL(l,o.path),f,void 0,d)})}).then(function(l){return u===!0&&s.revokeObjectURL(c),l.userData.mimeType=a.mimeType||KT(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[e]=p,p}assignTexture(e,t,i,r){const o=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),o.extensions[ht.KHR_TEXTURE_TRANSFORM]){const s=i.extensions!==void 0?i.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const c=o.associations.get(a);a=o.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,s),o.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const s="PointsMaterial:"+i.uuid;let c=this.cache.get(s);c||(c=new rp,on.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(s,c)),i=c}else if(e.isLine){const s="LineBasicMaterial:"+i.uuid;let c=this.cache.get(s);c||(c=new Jd,on.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(s,c)),i=c}if(r||o||a){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),o&&(s+="vertex-colors:"),a&&(s+="flat-shading:");let c=this.cache.get(s);c||(c=i.clone(),o&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(s,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return lc}loadMaterial(e){const t=this,i=this.json,r=this.extensions,o=i.materials[e];let a;const s={},c=o.extensions||{},u=[];if(c[ht.KHR_MATERIALS_UNLIT]){const l=r[ht.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),u.push(l.extendParams(s,o,t))}else{const l=o.pbrMetallicRoughness||{};if(s.color=new qe(1,1,1),s.opacity=1,Array.isArray(l.baseColorFactor)){const h=l.baseColorFactor;s.color.setRGB(h[0],h[1],h[2],Dt),s.opacity=h[3]}l.baseColorTexture!==void 0&&u.push(t.assignTexture(s,"map",l.baseColorTexture,ni)),s.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,s.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(s,"metalnessMap",l.metallicRoughnessTexture)),u.push(t.assignTexture(s,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,s)})))}o.doubleSided===!0&&(s.side=hi);const p=o.alphaMode||Mc.OPAQUE;if(p===Mc.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,p===Mc.MASK&&(s.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==Cn&&(u.push(t.assignTexture(s,"normalMap",o.normalTexture)),s.normalScale=new je(1,1),o.normalTexture.scale!==void 0)){const l=o.normalTexture.scale;s.normalScale.set(l,l)}if(o.occlusionTexture!==void 0&&a!==Cn&&(u.push(t.assignTexture(s,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==Cn){const l=o.emissiveFactor;s.emissive=new qe().setRGB(l[0],l[1],l[2],Dt)}return o.emissiveTexture!==void 0&&a!==Cn&&u.push(t.assignTexture(s,"emissiveMap",o.emissiveTexture,ni)),Promise.all(u).then(function(){const l=new a(s);return o.name&&(l.name=o.name),er(l,o),t.associations.set(l,{materials:e}),o.extensions&&Er(r,l,o),l})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function o(s){return i[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(c){return Bp(c,s,t)})}const a=[];for(let s=0,c=e.length;s<c;s++){const u=e[s],p=YT(u),l=r[p];if(l)a.push(l.promise);else{let h;u.extensions&&u.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?h=o(u):h=Bp(new Xi,u,t),r[p]={primitive:u,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,o=i.meshes[e],a=o.primitives,s=[];for(let c=0,u=a.length;c<u;c++){const p=a[c].material===void 0?XT(this.cache):this.getDependency("material",a[c].material);s.push(p)}return s.push(t.loadGeometries(a)),Promise.all(s).then(function(c){const u=c.slice(0,c.length-1),p=c[c.length-1],l=[];for(let d=0,f=p.length;d<f;d++){const _=p[d],g=a[d];let m;const x=u[d];if(g.mode===Bi.TRIANGLES||g.mode===Bi.TRIANGLE_STRIP||g.mode===Bi.TRIANGLE_FAN||g.mode===void 0)m=o.isSkinnedMesh===!0?new y1(_,x):new $t(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Bi.TRIANGLE_STRIP?m.geometry=Ip(m.geometry,Uh):g.mode===Bi.TRIANGLE_FAN&&(m.geometry=Ip(m.geometry,xl));else if(g.mode===Bi.LINES)m=new M1(_,x);else if(g.mode===Bi.LINE_STRIP)m=new ac(_,x);else if(g.mode===Bi.LINE_LOOP)m=new b1(_,x);else if(g.mode===Bi.POINTS)m=new ap(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&qT(m,o),m.name=t.createUniqueName(o.name||"mesh_"+e),er(m,o),g.extensions&&Er(r,m,g),t.assignFinalMaterial(m),l.push(m)}for(let d=0,f=l.length;d<f;d++)t.associations.set(l[d],{meshes:e,primitives:d});if(l.length===1)return o.extensions&&Er(r,l[0],o),l[0];const h=new sn;o.extensions&&Er(r,h,o),t.associations.set(h,{meshes:e});for(let d=0,f=l.length;d<f;d++)h.add(l[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new oi(kh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Wl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),er(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,o=t.joints.length;r<o;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const o=r.pop(),a=r,s=[],c=[];for(let u=0,p=a.length;u<p;u++){const l=a[u];if(l){s.push(l);const h=new et;o!==null&&h.fromArray(o.array,u*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Bu(s,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,a=[],s=[],c=[],u=[],p=[];for(let l=0,h=r.channels.length;l<h;l++){const d=r.channels[l],f=r.samplers[d.sampler],_=d.target,g=_.node,m=r.parameters!==void 0?r.parameters[f.input]:f.input,x=r.parameters!==void 0?r.parameters[f.output]:f.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),u.push(f),p.push(_))}return Promise.all([Promise.all(a),Promise.all(s),Promise.all(c),Promise.all(u),Promise.all(p)]).then(function(l){const h=l[0],d=l[1],f=l[2],_=l[3],g=l[4],m=[];for(let x=0,y=h.length;x<y;x++){const M=h[x],P=d[x],S=f[x],E=_[x],C=g[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const T=i._createAnimationTracks(M,P,S,E,C);if(T)for(let b=0;b<T.length;b++)m.push(T[b])}return new P1(o,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){const a=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(s){if(s.isMesh)for(let c=0,u=r.weights.length;c<u;c++)s.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],o=i._loadNodeShallow(e),a=[],s=r.children||[];for(let u=0,p=s.length;u<p;u++)a.push(i.getDependency("node",s[u]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),c]).then(function(u){const p=u[0],l=u[1],h=u[2];h!==null&&p.traverse(function(d){d.isSkinnedMesh&&d.bind(h,ZT)});for(let d=0,f=l.length;d<f;d++)p.add(l[d]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],a=o.name?r.createUniqueName(o.name):"",s=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&s.push(c),o.camera!==void 0&&s.push(r.getDependency("camera",o.camera).then(function(u){return r._getNodeRef(r.cameraCache,o.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){s.push(u)}),this.nodeCache[e]=Promise.all(s).then(function(u){let p;if(o.isBone===!0?p=new Kd:u.length>1?p=new sn:u.length===1?p=u[0]:p=new ct,p!==u[0])for(let l=0,h=u.length;l<h;l++)p.add(u[l]);if(o.name&&(p.userData.name=o.name,p.name=a),er(p,o),o.extensions&&Er(i,p,o),o.matrix!==void 0){const l=new et;l.fromArray(o.matrix),p.applyMatrix4(l)}else o.translation!==void 0&&p.position.fromArray(o.translation),o.rotation!==void 0&&p.quaternion.fromArray(o.rotation),o.scale!==void 0&&p.scale.fromArray(o.scale);return r.associations.has(p)||r.associations.set(p,{}),r.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,o=new sn;i.name&&(o.name=r.createUniqueName(i.name)),er(o,i),i.extensions&&Er(t,o,i);const a=i.nodes||[],s=[];for(let c=0,u=a.length;c<u;c++)s.push(r.getDependency("node",a[c]));return Promise.all(s).then(function(c){for(let p=0,l=c.length;p<l;p++)o.add(c[p]);const u=p=>{const l=new Map;for(const[h,d]of r.associations)(h instanceof on||h instanceof Ht)&&l.set(h,d);return p.traverse(h=>{const d=r.associations.get(h);d!=null&&l.set(h,d)}),l};return r.associations=u(o),o})}_createAnimationTracks(e,t,i,r,o){const a=[],s=e.name?e.name:e.uuid,c=[];Jn[o.path]===Jn.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(s);let u;switch(Jn[o.path]){case Jn.weights:u=So;break;case Jn.rotation:u=Sr;break;case Jn.position:case Jn.scale:u=Eo;break;default:switch(i.itemSize){case 1:u=So;break;case 2:case 3:default:u=Eo;break}break}const p=r.interpolation!==void 0?WT[r.interpolation]:Zr,l=this._getArrayFromAccessor(i);for(let h=0,d=c.length;h<d;h++){const f=new u(c[h]+"."+Jn[o.path],t.array,l,p);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Sc(t.constructor),r=new Float32Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=t[o]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const i=this instanceof Sr?GT:Dp;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function QT(n,e,t){const i=e.attributes,r=new bn;if(i.POSITION!==void 0){const s=t.json.accessors[i.POSITION],c=s.min,u=s.max;if(c!==void 0&&u!==void 0){if(r.set(new O(c[0],c[1],c[2]),new O(u[0],u[1],u[2])),s.normalized){const p=Sc(Ro[s.componentType]);r.min.multiplyScalar(p),r.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const s=new O,c=new O;for(let u=0,p=o.length;u<p;u++){const l=o[u];if(l.POSITION!==void 0){const h=t.json.accessors[l.POSITION],d=h.min,f=h.max;if(d!==void 0&&f!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(f[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(f[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(f[2]))),h.normalized){const _=Sc(Ro[h.componentType]);c.multiplyScalar(_)}s.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(s)}n.boundingBox=r;const a=new rn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function Bp(n,e,t){const i=e.attributes,r=[];function o(a,s){return t.getDependency("accessor",a).then(function(c){n.setAttribute(s,c)})}for(const a in i){const s=Tc[a]||a.toLowerCase();s in n.attributes||r.push(o(i[a],s))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(s){n.setIndex(s)});r.push(a)}return gt.workingColorSpace!==Dt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),er(n,e),QT(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?jT(n,e.targets,t):n})}class JT extends pp{constructor(e){super(e),this.type=Ui}parse(e){const t=function(m,x){switch(m){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},i=`
`,r=function(m,x,y){x=x||1024;let M=m.pos,P=-1,S=0,E="",C=String.fromCharCode.apply(null,new Uint16Array(m.subarray(M,M+128)));for(;0>(P=C.indexOf(i))&&S<x&&M<m.byteLength;)E+=C,S+=C.length,M+=128,C+=String.fromCharCode.apply(null,new Uint16Array(m.subarray(M,M+128)));return-1<P?(m.pos+=S+P+1,E+C.slice(0,P)):!1},o=function(m){const x=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,S=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,E={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let C,T;for((m.pos>=m.byteLength||!(C=r(m)))&&t(1,"no header found"),(T=C.match(x))||t(3,"bad initial token"),E.valid|=1,E.programtype=T[1],E.string+=C+`
`;C=r(m),C!==!1;){if(E.string+=C+`
`,C.charAt(0)==="#"){E.comments+=C+`
`;continue}if((T=C.match(y))&&(E.gamma=parseFloat(T[1])),(T=C.match(M))&&(E.exposure=parseFloat(T[1])),(T=C.match(P))&&(E.valid|=2,E.format=T[1]),(T=C.match(S))&&(E.valid|=4,E.height=parseInt(T[1],10),E.width=parseInt(T[2],10)),E.valid&2&&E.valid&4)break}return E.valid&2||t(3,"missing format specifier"),E.valid&4||t(3,"missing image size specifier"),E},a=function(m,x,y){const M=x;if(M<8||M>32767||m[0]!==2||m[1]!==2||m[2]&128)return new Uint8Array(m);M!==(m[2]<<8|m[3])&&t(3,"wrong scanline width");const P=new Uint8Array(4*x*y);P.length||t(4,"unable to allocate buffer space");let S=0,E=0;const C=4*M,T=new Uint8Array(4),b=new Uint8Array(C);let k=y;for(;k>0&&E<m.byteLength;){E+4>m.byteLength&&t(1),T[0]=m[E++],T[1]=m[E++],T[2]=m[E++],T[3]=m[E++],(T[0]!=2||T[1]!=2||(T[2]<<8|T[3])!=M)&&t(3,"bad rgbe scanline format");let X=0,F;for(;X<C&&E<m.byteLength;){F=m[E++];const q=F>128;if(q&&(F-=128),(F===0||X+F>C)&&t(3,"bad scanline data"),q){const ie=m[E++];for(let ne=0;ne<F;ne++)b[X++]=ie}else b.set(m.subarray(E,E+F),X),X+=F,E+=F}const Y=M;for(let q=0;q<Y;q++){let ie=0;P[S]=b[q+ie],ie+=M,P[S+1]=b[q+ie],ie+=M,P[S+2]=b[q+ie],ie+=M,P[S+3]=b[q+ie],S+=4}k--}return P},s=function(m,x,y,M){const P=m[x+3],S=Math.pow(2,P-128)/255;y[M+0]=m[x+0]*S,y[M+1]=m[x+1]*S,y[M+2]=m[x+2]*S,y[M+3]=1},c=function(m,x,y,M){const P=m[x+3],S=Math.pow(2,P-128)/255;y[M+0]=uo.toHalfFloat(Math.min(m[x+0]*S,65504)),y[M+1]=uo.toHalfFloat(Math.min(m[x+1]*S,65504)),y[M+2]=uo.toHalfFloat(Math.min(m[x+2]*S,65504)),y[M+3]=uo.toHalfFloat(1)},u=new Uint8Array(e);u.pos=0;const p=o(u),l=p.width,h=p.height,d=a(u.subarray(u.pos),l,h);let f,_,g;switch(this.type){case Yt:g=d.length/4;const m=new Float32Array(g*4);for(let y=0;y<g;y++)s(d,y*4,m,y*4);f=m,_=Yt;break;case Ui:g=d.length/4;const x=new Uint16Array(g*4);for(let y=0;y<g;y++)c(d,y*4,x,y*4);f=x,_=Ui;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:l,height:h,data:f,header:p.string,gamma:p.gamma,exposure:p.exposure,type:_}}setDataType(e){return this.type=e,this}load(e,t,i,r){function o(a,s){switch(a.type){case Yt:case Ui:a.colorSpace=Dt,a.minFilter=It,a.magFilter=It,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,s)}return super.load(e,o,i,r)}}function In(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function kp(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Co={duration:.5,overwrite:!1,delay:0},wc,Qt,Rt,ki=1e8,bt=1/ki,Ec=Math.PI*2,eM=Ec/4,tM=0,zp=Math.sqrt,iM=Math.cos,nM=Math.sin,Wt=function(n){return typeof n=="string"},Ut=function(n){return typeof n=="function"},Un=function(n){return typeof n=="number"},Ac=function(n){return typeof n>"u"},un=function(n){return typeof n=="object"},pi=function(n){return n!==!1},Rc=function(){return typeof window<"u"},Rs=function(n){return Ut(n)||Wt(n)},Hp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,Cc=/(?:-?\.?\d|\.)+/gi,Vp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Po=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gp=/[+-]=-?[.\d]+/,Wp=/[^,'"\[\]\s]+/gi,rM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,hn,Lc,Ic,bi={},Cs={},Xp,jp=function(n){return(Cs=Rr(n,bi))&&gi},Uc=function(n,e){return console.warn("Invalid property",n,"set to",e,"Missing plugin? gsap.registerPlugin()")},da=function(n,e){return!e&&console.warn(n)},qp=function(n,e){return n&&(bi[n]=e)&&Cs&&(Cs[n]=e)||bi},pa=function(){return 0},oM={suppressEvents:!0,isStart:!0,kill:!1},Ps={suppressEvents:!0,kill:!1},aM={suppressEvents:!0},Nc={},tr=[],Dc={},Yp,Si={},Oc={},Kp=30,Ls=[],Fc="",Bc=function(n){var e=n[0],t,i;if(un(e)||Ut(e)||(n=[n]),!(t=(e._gsap||{}).harness)){for(i=Ls.length;i--&&!Ls[i].targetTest(e););t=Ls[i]}for(i=n.length;i--;)n[i]&&(n[i]._gsap||(n[i]._gsap=new wf(n[i],t)))||n.splice(i,1);return n},Ar=function(n){return n._gsap||Bc(Vi(n))[0]._gsap},Zp=function(n,e,t){return(t=n[e])&&Ut(t)?n[e]():Ac(t)&&n.getAttribute&&n.getAttribute(e)||t},fi=function(n,e){return(n=n.split(",")).forEach(e)||n},Nt=function(n){return Math.round(n*1e5)/1e5||0},Xt=function(n){return Math.round(n*1e7)/1e7||0},Lo=function(n,e){var t=e.charAt(0),i=parseFloat(e.substr(2));return n=parseFloat(n),t==="+"?n+i:t==="-"?n-i:t==="*"?n*i:n/i},sM=function(n,e){for(var t=e.length,i=0;n.indexOf(e[i])<0&&++i<t;);return i<t},Is=function(){var n=tr.length,e=tr.slice(0),t,i;for(Dc={},tr.length=0,t=0;t<n;t++)i=e[t],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$p=function(n,e,t,i){tr.length&&!Qt&&Is(),n.render(e,t,Qt&&e<0&&(n._initted||n._startAt)),tr.length&&!Qt&&Is()},Qp=function(n){var e=parseFloat(n);return(e||e===0)&&(n+"").match(Wp).length<2?e:Wt(n)?n.trim():n},Jp=function(n){return n},zi=function(n,e){for(var t in e)t in n||(n[t]=e[t]);return n},lM=function(n){return function(e,t){for(var i in t)i in e||i==="duration"&&n||i==="ease"||(e[i]=t[i])}},Rr=function(n,e){for(var t in e)n[t]=e[t];return n},ef=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=un(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Us=function(n,e){var t={},i;for(i in n)i in e||(t[i]=n[i]);return t},fa=function(n){var e=n.parent||Pt,t=n.keyframes?lM(Jt(n.keyframes)):zi;if(pi(n.inherit))for(;e;)t(n,e.vars.defaults),e=e.parent||e._dp;return n},cM=function(n,e){for(var t=n.length,i=t===e.length;i&&t--&&n[t]===e[t];);return t<0},tf=function(n,e,t,i,r){var o=n[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=n[t],n[t]=e),e._next?e._next._prev=e:n[i]=e,e._prev=o,e.parent=e._dp=n,e},Ns=function(n,e,t,i){t===void 0&&(t="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:n[t]===e&&(n[t]=o),o?o._prev=r:n[i]===e&&(n[i]=r),e._next=e._prev=e.parent=null},ir=function(n,e){n.parent&&(!e||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},Cr=function(n,e){if(n&&(!e||e._end>n._dur||e._start<0))for(var t=n;t;)t._dirty=1,t=t.parent;return n},uM=function(n){for(var e=n.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return n},kc=function(n,e,t,i){return n._startAt&&(Qt?n._startAt.revert(Ps):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(e,!0,i))},hM=function n(e){return!e||e._ts&&n(e.parent)},nf=function(n){return n._repeat?Io(n._tTime,n=n.duration()+n._rDelay)*n:0},Io=function(n,e){var t=Math.floor(n/=e);return n&&t===n?t-1:t},Ds=function(n,e){return(n-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Os=function(n){return n._end=Xt(n._start+(n._tDur/Math.abs(n._ts||n._rts||bt)||0))},Fs=function(n,e){var t=n._dp;return t&&t.smoothChildTiming&&n._ts&&(n._start=Xt(t._time-(n._ts>0?e/n._ts:((n._dirty?n.totalDuration():n._tDur)-e)/-n._ts)),Os(n),t._dirty||Cr(t,n)),n},rf=function(n,e){var t;if((e._time||!e._dur&&e._initted||e._start<n._time&&(e._dur||!e.add))&&(t=Ds(n.rawTime(),e),(!e._dur||ga(0,e.totalDuration(),t)-e._tTime>bt)&&e.render(t,!0)),Cr(n,e)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(t=n;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;n._zTime=-bt}},dn=function(n,e,t,i){return e.parent&&ir(e),e._start=Xt((Un(t)?t:t||n!==Pt?Hi(n,t,e):n._time)+e._delay),e._end=Xt(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),tf(n,e,"_first","_last",n._sort?"_start":0),zc(e)||(n._recent=e),i||rf(n,e),n._ts<0&&Fs(n,n._tTime),n},of=function(n,e){return(bi.ScrollTrigger||Uc("scrollTrigger",e))&&bi.ScrollTrigger.create(e,n)},af=function(n,e,t,i,r){if(Kc(n,e,r),!n._initted)return 1;if(!t&&n._pt&&!Qt&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&Yp!==Ei.frame)return tr.push(n),n._lazy=[r,i],1},dM=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},zc=function(n){var e=n.data;return e==="isFromStart"||e==="isStart"},pM=function(n,e,t,i){var r=n.ratio,o=e<0||!e&&(!n._start&&dM(n)&&!(!n._initted&&zc(n))||(n._ts<0||n._dp._ts<0)&&!zc(n))?0:1,a=n._rDelay,s=0,c,u,p;if(a&&n._repeat&&(s=ga(0,n._tDur,e),u=Io(s,a),n._yoyo&&u&1&&(o=1-o),u!==Io(n._tTime,a)&&(r=1-o,n.vars.repeatRefresh&&n._initted&&n.invalidate())),o!==r||Qt||i||n._zTime===bt||!e&&n._zTime){if(!n._initted&&af(n,e,i,t,s))return;for(p=n._zTime,n._zTime=e||(t?bt:0),t||(t=e&&!p),n.ratio=o,n._from&&(o=1-o),n._time=0,n._tTime=s,c=n._pt;c;)c.r(o,c.d),c=c._next;e<0&&kc(n,e,t,!0),n._onUpdate&&!t&&wi(n,"onUpdate"),s&&n._repeat&&!t&&n.parent&&wi(n,"onRepeat"),(e>=n._tDur||e<0)&&n.ratio===o&&(o&&ir(n,1),!t&&!Qt&&(wi(n,o?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=e)},fM=function(n,e,t){var i;if(t>e)for(i=n._first;i&&i._start<=t;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=n._last;i&&i._start>=t;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Uo=function(n,e,t,i){var r=n._repeat,o=Xt(e)||0,a=n._tTime/n._tDur;return a&&!i&&(n._time*=o/n._dur),n._dur=o,n._tDur=r?r<0?1e10:Xt(o*(r+1)+n._rDelay*r):o,a>0&&!i&&Fs(n,n._tTime=n._tDur*a),n.parent&&Os(n),t||Cr(n.parent,n),n},sf=function(n){return n instanceof si?Cr(n):Uo(n,n._dur)},mM={_start:0,endTime:pa,totalDuration:pa},Hi=function n(e,t,i){var r=e.labels,o=e._recent||mM,a=e.duration()>=ki?o.endTime(!1):e._dur,s,c,u;return Wt(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),u=t.substr(-1)==="%",s=t.indexOf("="),c==="<"||c===">"?(s>=0&&(t=t.replace(/=/,"")),(c==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(s<0?o:i).totalDuration()/100:1)):s<0?(t in r||(r[t]=a),r[t]):(c=parseFloat(t.charAt(s-1)+t.substr(s+1)),u&&i&&(c=c/100*(Jt(i)?i[0]:i).totalDuration()),s>1?n(e,t.substr(0,s-1),i)+c:a+c)):t==null?a:+t},ma=function(n,e,t){var i=Un(e[1]),r=(i?2:1)+(n<2?0:1),o=e[r],a,s;if(i&&(o.duration=e[1]),o.parent=t,n){for(a=o,s=t;s&&!("immediateRender"in a);)a=s.vars.defaults||{},s=pi(s.vars.inherit)&&s.parent;o.immediateRender=pi(a.immediateRender),n<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ft(e[0],o,e[r+1])},nr=function(n,e){return n||n===0?e(n):e},ga=function(n,e,t){return t<n?n:t>e?e:t},ei=function(n,e){return!Wt(n)||!(e=rM.exec(n))?"":e[1]},gM=function(n,e,t){return nr(t,function(i){return ga(n,e,i)})},Hc=[].slice,lf=function(n,e){return n&&un(n)&&"length"in n&&(!e&&!n.length||n.length-1 in n&&un(n[0]))&&!n.nodeType&&n!==hn},_M=function(n,e,t){return t===void 0&&(t=[]),n.forEach(function(i){var r;return Wt(i)&&!e||lf(i,1)?(r=t).push.apply(r,Vi(i)):t.push(i)})||t},Vi=function(n,e,t){return Rt&&!e&&Rt.selector?Rt.selector(n):Wt(n)&&!t&&(Lc||!Do())?Hc.call((e||Ic).querySelectorAll(n),0):Jt(n)?_M(n,t):lf(n)?Hc.call(n,0):n?[n]:[]},Vc=function(n){return n=Vi(n)[0]||da("Invalid scope")||{},function(e){var t=n.current||n.nativeElement||n;return Vi(e,t.querySelectorAll?t:t===n?da("Invalid scope")||Ic.createElement("div"):n)}},cf=function(n){return n.sort(function(){return .5-Math.random()})},uf=function(n){if(Ut(n))return n;var e=un(n)?n:{each:n},t=Pr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,s=isNaN(i)||a,c=e.axis,u=i,p=i;return Wt(i)?u=p={center:.5,edges:.5,end:1}[i]||0:!a&&s&&(u=i[0],p=i[1]),function(l,h,d){var f=(d||e).length,_=o[f],g,m,x,y,M,P,S,E,C;if(!_){if(C=e.grid==="auto"?0:(e.grid||[1,ki])[1],!C){for(S=-ki;S<(S=d[C++].getBoundingClientRect().left)&&C<f;);C<f&&C--}for(_=o[f]=[],g=s?Math.min(C,f)*u-.5:i%C,m=C===ki?0:s?f*p/C-.5:i/C|0,S=0,E=ki,P=0;P<f;P++)x=P%C-g,y=m-(P/C|0),_[P]=M=c?Math.abs(c==="y"?y:x):zp(x*x+y*y),M>S&&(S=M),M<E&&(E=M);i==="random"&&cf(_),_.max=S-E,_.min=E,_.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(C>f?f-1:c?c==="y"?f/C:C:Math.max(C,f/C))||0)*(i==="edges"?-1:1),_.b=f<0?r-f:r,_.u=ei(e.amount||e.each)||0,t=t&&f<0?Mf(t):t}return f=(_[l]-_.min)/_.max||0,Xt(_.b+(t?t(f):f)*_.v)+_.u}},Gc=function(n){var e=Math.pow(10,((n+"").split(".")[1]||"").length);return function(t){var i=Xt(Math.round(parseFloat(t)/n)*n*e);return(i-i%1)/e+(Un(t)?0:ei(t))}},hf=function(n,e){var t=Jt(n),i,r;return!t&&un(n)&&(i=t=n.radius||ki,n.values?(n=Vi(n.values),(r=!Un(n[0]))&&(i*=i)):n=Gc(n.increment)),nr(e,t?Ut(n)?function(o){return r=n(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),s=parseFloat(r?o.y:0),c=ki,u=0,p=n.length,l,h;p--;)r?(l=n[p].x-a,h=n[p].y-s,l=l*l+h*h):l=Math.abs(n[p]-a),l<c&&(c=l,u=p);return u=!i||c<=i?n[u]:o,r||u===o||Un(o)?u:u+ei(o)}:Gc(n))},df=function(n,e,t,i){return nr(Jt(n)?!e:t===!0?!!(t=0):!i,function(){return Jt(n)?n[~~(Math.random()*n.length)]:(t=t||1e-5)&&(i=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((n-t/2+Math.random()*(e-n+t*.99))/t)*t*i)/i})},vM=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(i){return e.reduce(function(r,o){return o(r)},i)}},yM=function(n,e){return function(t){return n(parseFloat(t))+(e||ei(t))}},xM=function(n,e,t){return ff(n,e,0,1,t)},pf=function(n,e,t){return nr(t,function(i){return n[~~e(i)]})},TM=function n(e,t,i){var r=t-e;return Jt(e)?pf(e,n(0,e.length),t):nr(i,function(o){return(r+(o-e)%r)%r+e})},MM=function n(e,t,i){var r=t-e,o=r*2;return Jt(e)?pf(e,n(0,e.length-1),t):nr(i,function(a){return a=(o+(a-e)%o)%o||0,e+(a>r?o-a:a)})},_a=function(n){for(var e=0,t="",i,r,o,a;~(i=n.indexOf("random(",e));)o=n.indexOf(")",i),a=n.charAt(i+7)==="[",r=n.substr(i+7,o-i-7).match(a?Wp:Cc),t+=n.substr(e,i-e)+df(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return t+n.substr(e,n.length-e)},ff=function(n,e,t,i,r){var o=e-n,a=i-t;return nr(r,function(s){return t+((s-n)/o*a||0)})},bM=function n(e,t,i,r){var o=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!o){var a=Wt(e),s={},c,u,p,l,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(p=[],l=e.length,h=l-2,u=1;u<l;u++)p.push(n(e[u-1],e[u]));l--,o=function(d){d*=l;var f=Math.min(h,~~d);return p[f](d-f)},i=t}else r||(e=Rr(Jt(e)?[]:{},e));if(!p){for(c in t)qc.call(s,e,c,"get",t[c]);o=function(d){return Qc(d,s)||(a?e.p:e)}}}return nr(i,o)},mf=function(n,e,t){var i=n.labels,r=ki,o,a,s;for(o in i)a=i[o]-e,a<0==!!t&&a&&r>(a=Math.abs(a))&&(s=o,r=a);return s},wi=function(n,e,t){var i=n.vars,r=i[e],o=Rt,a=n._ctx,s,c,u;if(r)return s=i[e+"Params"],c=i.callbackScope||n,t&&tr.length&&Is(),a&&(Rt=a),u=s?r.apply(c,s):r.call(c),Rt=o,u},va=function(n){return ir(n),n.scrollTrigger&&n.scrollTrigger.kill(!!Qt),n.progress()<1&&wi(n,"onInterrupt"),n},No,gf=[],_f=function(n){if(n)if(n=!n.name&&n.default||n,Rc()||n.headless){var e=n.name,t=Ut(n),i=e&&!t&&n.init?function(){this._props=[]}:n,r={init:pa,render:Qc,add:qc,kill:kM,modifier:BM,rawVars:0},o={targetTest:0,get:0,getSetter:$c,aliases:{},register:0};if(Do(),n!==i){if(Si[e])return;zi(i,zi(Us(n,r),o)),Rr(i.prototype,Rr(r,Us(n,o))),Si[i.prop=e]=i,n.targetTest&&(Ls.push(i),Nc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}qp(e,i),n.register&&n.register(gi,i,mi)}else gf.push(n)},xt=255,ya={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},Wc=function(n,e,t){return n+=n<0?1:n>1?-1:0,(n*6<1?e+(t-e)*n*6:n<.5?t:n*3<2?e+(t-e)*(2/3-n)*6:e)*xt+.5|0},vf=function(n,e,t){var i=n?Un(n)?[n>>16,n>>8&xt,n&xt]:0:ya.black,r,o,a,s,c,u,p,l,h,d;if(!i){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),ya[n])i=ya[n];else if(n.charAt(0)==="#"){if(n.length<6&&(r=n.charAt(1),o=n.charAt(2),a=n.charAt(3),n="#"+r+r+o+o+a+a+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return i=parseInt(n.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),i=[n>>16,n>>8&xt,n&xt]}else if(n.substr(0,3)==="hsl"){if(i=d=n.match(Cc),!e)s=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Wc(s+1/3,r,o),i[1]=Wc(s,r,o),i[2]=Wc(s-1/3,r,o);else if(~n.indexOf("="))return i=n.match(Vp),t&&i.length<4&&(i[3]=1),i}else i=n.match(Cc)||ya.transparent;i=i.map(Number)}return e&&!d&&(r=i[0]/xt,o=i[1]/xt,a=i[2]/xt,p=Math.max(r,o,a),l=Math.min(r,o,a),u=(p+l)/2,p===l?s=c=0:(h=p-l,c=u>.5?h/(2-p-l):h/(p+l),s=p===r?(o-a)/h+(o<a?6:0):p===o?(a-r)/h+2:(r-o)/h+4,s*=60),i[0]=~~(s+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),t&&i.length<4&&(i[3]=1),i},yf=function(n){var e=[],t=[],i=-1;return n.split(rr).forEach(function(r){var o=r.match(Po)||[];e.push.apply(e,o),t.push(i+=o.length+1)}),e.c=t,e},xf=function(n,e,t){var i="",r=(n+i).match(rr),o=e?"hsla(":"rgba(",a=0,s,c,u,p;if(!r)return n;if(r=r.map(function(l){return(l=vf(l,e,1))&&o+(e?l[0]+","+l[1]+"%,"+l[2]+"%,"+l[3]:l.join(","))+")"}),t&&(u=yf(n),s=t.c,s.join(i)!==u.c.join(i)))for(c=n.replace(rr,"1").split(Po),p=c.length-1;a<p;a++)i+=c[a]+(~s.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:t).shift());if(!c)for(c=n.split(rr),p=c.length-1;a<p;a++)i+=c[a]+r[a];return i+c[p]},rr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ya)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),SM=/hsl[a]?\(/,Tf=function(n){var e=n.join(" "),t;if(rr.lastIndex=0,rr.test(e))return t=SM.test(e),n[1]=xf(n[1],t),n[0]=xf(n[0],t,yf(n[1])),!0},xa,Ei=function(){var n=Date.now,e=500,t=33,i=n(),r=i,o=1e3/240,a=o,s=[],c,u,p,l,h,d,f=function _(g){var m=n()-r,x=g===!0,y,M,P,S;if((m>e||m<0)&&(i+=m-t),r+=m,P=r-i,y=P-a,(y>0||x)&&(S=++l.frame,h=P-l.time*1e3,l.time=P=P/1e3,a+=y+(y>=o?4:o-y),M=1),x||(c=u(_)),M)for(d=0;d<s.length;d++)s[d](P,h,S,g)};return l={time:0,frame:0,tick:function(){f(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){Xp&&(!Lc&&Rc()&&(hn=Lc=window,Ic=hn.document||{},bi.gsap=gi,(hn.gsapVersions||(hn.gsapVersions=[])).push(gi.version),jp(Cs||hn.GreenSockGlobals||!hn.gsap&&hn||{}),gf.forEach(_f)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&l.sleep(),u=p||function(_){return setTimeout(_,a-l.time*1e3+1|0)},xa=1,f(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(c),xa=0,u=pa},lagSmoothing:function(_,g){e=_||1/0,t=Math.min(g||33,e)},fps:function(_){o=1e3/(_||240),a=l.time*1e3+o},add:function(_,g,m){var x=g?function(y,M,P,S){_(y,M,P,S),l.remove(x)}:_;return l.remove(_),s[m?"unshift":"push"](x),Do(),x},remove:function(_,g){~(g=s.indexOf(_))&&s.splice(g,1)&&d>=g&&d--},_listeners:s},l}(),Do=function(){return!xa&&Ei.wake()},dt={},wM=/^[\d.\-M][\d.\-,\s]/,EM=/["']/g,AM=function(n){for(var e={},t=n.substr(1,n.length-3).split(":"),i=t[0],r=1,o=t.length,a,s,c;r<o;r++)s=t[r],a=r!==o-1?s.lastIndexOf(","):s.length,c=s.substr(0,a),e[i]=isNaN(c)?c.replace(EM,"").trim():+c,i=s.substr(a+1).trim();return e},RM=function(n){var e=n.indexOf("(")+1,t=n.indexOf(")"),i=n.indexOf("(",e);return n.substring(e,~i&&i<t?n.indexOf(")",t+1):t)},CM=function(n){var e=(n+"").split("("),t=dt[e[0]];return t&&e.length>1&&t.config?t.config.apply(null,~n.indexOf("{")?[AM(e[1])]:RM(n).split(",").map(Qp)):dt._CE&&wM.test(n)?dt._CE("",n):t},Mf=function(n){return function(e){return 1-n(1-e)}},bf=function n(e,t){for(var i=e._first,r;i;)i instanceof si?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Pr=function(n,e){return n&&(Ut(n)?n:dt[n]||CM(n))||e},Lr=function(n,e,t,i){t===void 0&&(t=function(a){return 1-e(1-a)}),i===void 0&&(i=function(a){return a<.5?e(a*2)/2:1-e((1-a)*2)/2});var r={easeIn:e,easeOut:t,easeInOut:i},o;return fi(n,function(a){dt[a]=bi[a]=r,dt[o=a.toLowerCase()]=t;for(var s in r)dt[o+(s==="easeIn"?".in":s==="easeOut"?".out":".inOut")]=dt[a+"."+s]=r[s]}),r},Sf=function(n){return function(e){return e<.5?(1-n(1-e*2))/2:.5+n((e-.5)*2)/2}},Xc=function n(e,t,i){var r=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),a=o/Ec*(Math.asin(1/r)||0),s=function(u){return u===1?1:r*Math.pow(2,-10*u)*nM((u-a)*o)+1},c=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:Sf(s);return o=Ec/o,c.config=function(u,p){return n(e,u,p)},c},jc=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:Sf(i);return r.config=function(o){return n(e,o)},r};fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Lr(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})}),dt.Linear.easeNone=dt.none=dt.Linear.easeIn,Lr("Elastic",Xc("in"),Xc("out"),Xc()),function(n,e){var t=1/e,i=2*t,r=2.5*t,o=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Lr("Bounce",function(a){return 1-o(1-a)},o)}(7.5625,2.75),Lr("Expo",function(n){return n?Math.pow(2,10*(n-1)):0}),Lr("Circ",function(n){return-(zp(1-n*n)-1)}),Lr("Sine",function(n){return n===1?1:-iM(n*eM)+1}),Lr("Back",jc("in"),jc("out"),jc()),dt.SteppedEase=dt.steps=bi.SteppedEase={config:function(n,e){n===void 0&&(n=1);var t=1/n,i=n+(e?0:1),r=e?1:0,o=1-bt;return function(a){return((i*ga(0,o,a)|0)+r)*t}}},Co.ease=dt["quad.out"],fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Fc+=n+","+n+"Params,"});var wf=function(n,e){this.id=tM++,n._gsap=this,this.target=n,this.harness=e,this.get=e?e.get:Zp,this.set=e?e.getSetter:$c},Ta=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Uo(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),xa||Ei.wake()}var e=n.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Uo(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,i){if(Do(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Fs(this,t),!r._dp||r.parent||rf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&dn(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),$p(this,t,i)),this},e.time=function(t,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+nf(this))%(this._dur+this._rDelay)||(t?this._dur:0),i):this._time},e.totalProgress=function(t,i){return arguments.length?this.totalTime(this.totalDuration()*t,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(t,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+nf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,i):this._repeat?Io(this._tTime,r)+1:1},e.timeScale=function(t,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Ds(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-bt?0:this._rts,this.totalTime(ga(-Math.abs(this._delay),this._tDur,r),i!==!1),Os(this),uM(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Do(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&dn(i,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(pi(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var i=this.parent||this._dp;return i?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ds(i.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=aM);var i=Qt;return Qt=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Qt=i,this},e.globalTime=function(t){for(var i=this,r=arguments.length?t:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(t):r},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,sf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var i=this._time;return this._rDelay=t,sf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,i){return this.totalTime(Hi(this,t),pi(i))},e.restart=function(t,i){return this.play().totalTime(t?-this._delay:0,pi(i))},e.play=function(t,i){return t!=null&&this.seek(t,i),this.reversed(!1).paused(!1)},e.reverse=function(t,i){return t!=null&&this.seek(t||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(t,i){return t!=null&&this.seek(t,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var t=this.parent||this._dp,i=this._start,r;return!!(!t||this._ts&&this._initted&&t.isActive()&&(r=t.rawTime(!0))>=i&&r<this.endTime(!0)-bt)},e.eventCallback=function(t,i,r){var o=this.vars;return arguments.length>1?(i?(o[t]=i,r&&(o[t+"Params"]=r),t==="onUpdate"&&(this._onUpdate=i)):delete o[t],this):o[t]},e.then=function(t){var i=this;return new Promise(function(r){var o=Ut(t)?t:Jp,a=function(){var s=i.then;i.then=null,Ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=s),r(o),i.then=s};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){va(this)},n}();zi(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var si=function(n){kp(e,n);function e(i,r){var o;return i===void 0&&(i={}),o=n.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=pi(i.sortChildren),Pt&&dn(i.parent||Pt,In(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&of(In(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(i,r,o){return ma(0,arguments,this),this},t.from=function(i,r,o){return ma(1,arguments,this),this},t.fromTo=function(i,r,o,a){return ma(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,fa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ft(i,r,Hi(this,o),1),this},t.call=function(i,r,o){return dn(this,Ft.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,s,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ft(i,o,Hi(this,s)),this},t.staggerFrom=function(i,r,o,a,s,c,u){return o.runBackwards=1,fa(o).immediateRender=pi(o.immediateRender),this.staggerTo(i,r,o,a,s,c,u)},t.staggerFromTo=function(i,r,o,a,s,c,u,p){return a.startAt=o,fa(a).immediateRender=pi(a.immediateRender),this.staggerTo(i,r,a,s,c,u,p)},t.render=function(i,r,o){var a=this._time,s=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Xt(i),p=this._zTime<0!=i<0&&(this._initted||!c),l,h,d,f,_,g,m,x,y,M,P,S;if(this!==Pt&&u>s&&i>=0&&(u=s),u!==this._tTime||o||p){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),l=u,y=this._start,x=this._ts,g=!x,p&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,r,o);if(l=Xt(u%_),u===s?(f=this._repeat,l=c):(f=~~(u/_),f&&f===u/_&&(l=c,f--),l>c&&(l=c)),M=Io(this._tTime,_),!a&&this._tTime&&M!==f&&this._tTime-M*_-this._dur<=0&&(M=f),P&&f&1&&(l=c-l,S=1),f!==M&&!this._lock){var E=P&&M&1,C=E===(P&&f&1);if(f<M&&(E=!E),a=E?0:u%c?c:u,this._lock=1,this.render(a||(S?0:Xt(f*_)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&wi(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,s=this._tDur,C&&(this._lock=2,a=E?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;bf(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=fM(this,Xt(a),Xt(l)),m&&(u-=l-(l=m._start))),this._tTime=u,this._time=l,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&l&&!r&&!f&&(wi(this,"onStart"),this._tTime!==u))return this;if(l>=a&&i>=0)for(h=this._first;h;){if(d=h._next,(h._act||l>=h._start)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,r,o);if(h.render(h._ts>0?(l-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(l-h._start)*h._ts,r,o),l!==this._time||!this._ts&&!g){m=0,d&&(u+=this._zTime=-bt);break}}h=d}else{h=this._last;for(var T=i<0?i:l;h;){if(d=h._prev,(h._act||T<=h._end)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,r,o);if(h.render(h._ts>0?(T-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(T-h._start)*h._ts,r,o||Qt&&(h._initted||h._startAt)),l!==this._time||!this._ts&&!g){m=0,d&&(u+=this._zTime=T?-bt:bt);break}}h=d}}if(m&&!r&&(this.pause(),m.render(l>=a?0:-bt)._zTime=l>=a?1:-1,this._ts))return this._start=y,Os(this),this.render(i,r,o);this._onUpdate&&!r&&wi(this,"onUpdate",!0),(u===s&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===s&&this._ts>0||!u&&this._ts<0)&&ir(this,1),!r&&!(i<0&&!a)&&(u||a||!s)&&(wi(this,u===s&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<s&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Un(r)||(r=Hi(this,r,i)),!(i instanceof Ta)){if(Jt(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Wt(i))return this.addLabel(i,r);if(Ut(i))i=Ft.delayedCall(0,i);else return this}return this!==i?dn(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-ki);for(var s=[],c=this._first;c;)c._start>=a&&(c instanceof Ft?r&&s.push(c):(o&&s.push(c),i&&s.push.apply(s,c.getChildren(!0,r,o)))),c=c._next;return s},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Wt(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(Ns(this,i),i===this._recent&&(this._recent=this._last),Cr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(Ei.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),n.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Hi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Ft.delayedCall(0,r||pa,o);return a.data="isPause",this._hasPause=1,dn(this,a,Hi(this,i))},t.removePause=function(i){var r=this._first;for(i=Hi(this,i);r;)r._start===i&&r.data==="isPause"&&ir(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),s=a.length;s--;)or!==a[s]&&a[s].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Vi(i),s=this._first,c=Un(r),u;s;)s instanceof Ft?sM(s._targets,a)&&(c?(!or||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&o.push(s):(u=s.getTweensOf(a,r)).length&&o.push.apply(o,u),s=s._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Hi(o,i),s=r,c=s.startAt,u=s.onStart,p=s.onStartParams,l=s.immediateRender,h,d=Ft.to(o,zi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!h){var f=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());d._dur!==f&&Uo(d,f,0,1).render(d._time,!0,!0),h=1}u&&u.apply(d,p||[])}},r));return l?d.render(0):d},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,zi({startAt:{time:Hi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),mf(this,Hi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),mf(this,Hi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,s=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in s)s[c]>=o&&(s[c]+=i);return Cr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return n.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Cr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,s=ki,c,u,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(p=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>s&&o._sort&&a._ts&&!o._lock?(o._lock=1,dn(o,a,u-a._delay,1)._lock=0):s=u,u<0&&a._ts&&(r-=u,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),s=0),a._end>r&&a._ts&&(r=a._end),a=c;Uo(o,o===Pt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Pt._ts&&($p(Pt,Ds(i,Pt)),Yp=Ei.frame),Ei.frame>=Kp){Kp+=Mi.autoSleep||120;var r=Pt._first;if((!r||!r._ts)&&Mi.autoSleep&&Ei._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ei.sleep()}}},e}(Ta);zi(si.prototype,{_lock:0,_hasPause:0,_forcing:0});var PM=function(n,e,t,i,r,o,a){var s=new mi(this._pt,n,e,0,1,Lf,null,r),c=0,u=0,p,l,h,d,f,_,g,m;for(s.b=t,s.e=i,t+="",i+="",(g=~i.indexOf("random("))&&(i=_a(i)),o&&(m=[t,i],o(m,n,e),t=m[0],i=m[1]),l=t.match(Pc)||[];p=Pc.exec(i);)d=p[0],f=i.substring(c,p.index),h?h=(h+1)%5:f.substr(-5)==="rgba("&&(h=1),d!==l[u++]&&(_=parseFloat(l[u-1])||0,s._pt={_next:s._pt,p:f||u===1?f:",",s:_,c:d.charAt(1)==="="?Lo(_,d)-_:parseFloat(d)-_,m:h&&h<4?Math.round:0},c=Pc.lastIndex);return s.c=c<i.length?i.substring(c,i.length):"",s.fp=a,(Gp.test(i)||g)&&(s.e=0),this._pt=s,s},qc=function(n,e,t,i,r,o,a,s,c,u){Ut(i)&&(i=i(r||0,n,o));var p=n[e],l=t!=="get"?t:Ut(p)?c?n[e.indexOf("set")||!Ut(n["get"+e.substr(3)])?e:"get"+e.substr(3)](c):n[e]():p,h=Ut(p)?c?DM:Cf:Zc,d;if(Wt(i)&&(~i.indexOf("random(")&&(i=_a(i)),i.charAt(1)==="="&&(d=Lo(l,i)+(ei(l)||0),(d||d===0)&&(i=d))),!u||l!==i||Yc)return!isNaN(l*i)&&i!==""?(d=new mi(this._pt,n,e,+l||0,i-(l||0),typeof p=="boolean"?FM:Pf,0,h),c&&(d.fp=c),a&&d.modifier(a,this,n),this._pt=d):(!p&&!(e in n)&&Uc(e,i),PM.call(this,n,e,l,i,h,s||Mi.stringFilter,c))},LM=function(n,e,t,i,r){if(Ut(n)&&(n=Ma(n,r,e,t,i)),!un(n)||n.style&&n.nodeType||Jt(n)||Hp(n))return Wt(n)?Ma(n,r,e,t,i):n;var o={},a;for(a in n)o[a]=Ma(n[a],r,e,t,i);return o},Ef=function(n,e,t,i,r,o){var a,s,c,u;if(Si[n]&&(a=new Si[n]).init(r,a.rawVars?e[n]:LM(e[n],i,r,o,t),t,i,o)!==!1&&(t._pt=s=new mi(t._pt,r,n,0,1,a.render,a,0,a.priority),t!==No))for(c=t._ptLookup[t._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=s;return a},or,Yc,Kc=function n(e,t,i){var r=e.vars,o=r.ease,a=r.startAt,s=r.immediateRender,c=r.lazy,u=r.onUpdate,p=r.runBackwards,l=r.yoyoEase,h=r.keyframes,d=r.autoRevert,f=e._dur,_=e._startAt,g=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:g,y=e._overwrite==="auto"&&!wc,M=e.timeline,P,S,E,C,T,b,k,X,F,Y,q,ie,ne;if(M&&(!h||!o)&&(o="none"),e._ease=Pr(o,Co.ease),e._yEase=l?Mf(Pr(l===!0?o:l,Co.ease)):0,l&&e._yoyo&&!e._repeat&&(l=e._yEase,e._yEase=e._ease,e._ease=l),e._from=!M&&!!r.runBackwards,!M||h&&!r.stagger){if(X=g[0]?Ar(g[0]).harness:0,ie=X&&r[X.prop],P=Us(r,Nc),_&&(_._zTime<0&&_.progress(1),t<0&&p&&s&&!d?_.render(-1,!0):_.revert(p&&f?Ps:oM),_._lazy=0),a){if(ir(e._startAt=Ft.set(g,zi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&pi(c),startAt:null,delay:0,onUpdate:u&&function(){return wi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!s&&!d)&&e._startAt.revert(Ps),s&&f&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&f&&!_){if(t&&(s=!1),E=zi({overwrite:!1,data:"isFromStart",lazy:s&&!_&&pi(c),immediateRender:s,stagger:0,parent:m},P),ie&&(E[X.prop]=ie),ir(e._startAt=Ft.set(g,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(Ps):e._startAt.render(-1,!0)),e._zTime=t,!s)n(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,c=f&&pi(c)||c&&!f,S=0;S<g.length;S++){if(T=g[S],k=T._gsap||Bc(g)[S]._gsap,e._ptLookup[S]=Y={},Dc[k.id]&&tr.length&&Is(),q=x===g?S:x.indexOf(T),X&&(F=new X).init(T,ie||P,e,q,x)!==!1&&(e._pt=C=new mi(e._pt,T,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function($){Y[$]=C}),F.priority&&(b=1)),!X||ie)for(E in P)Si[E]&&(F=Ef(E,P,e,q,T,x))?F.priority&&(b=1):Y[E]=C=qc.call(e,T,E,"get",P[E],q,x,0,r.stringFilter);e._op&&e._op[S]&&e.kill(T,e._op[S]),y&&e._pt&&(or=e,Pt.killTweensOf(T,Y,e.globalTime(t)),ne=!e.parent,or=0),e._pt&&c&&(Dc[k.id]=1)}b&&If(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!ne,h&&t<=0&&M.render(ki,!0,!0)},IM=function(n,e,t,i,r,o,a,s){var c=(n._pt&&n._ptCache||(n._ptCache={}))[e],u,p,l,h;if(!c)for(c=n._ptCache[e]=[],l=n._ptLookup,h=n._targets.length;h--;){if(u=l[h][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Yc=1,n.vars[e]="+=0",Kc(n,a),Yc=0,s?da(e+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)p=c[h],u=p._pt||p,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=t-u.s,p.e&&(p.e=Nt(t)+ei(p.e)),p.b&&(p.b=u.s+ei(p.b))},UM=function(n,e){var t=n[0]?Ar(n[0]).harness:0,i=t&&t.aliases,r,o,a,s;if(!i)return e;r=Rr({},e);for(o in i)if(o in r)for(s=i[o].split(","),a=s.length;a--;)r[s[a]]=r[o];return r},NM=function(n,e,t,i){var r=e.ease||i||"power1.inOut",o,a;if(Jt(e))a=t[n]||(t[n]=[]),e.forEach(function(s,c){return a.push({t:c/(e.length-1)*100,v:s,e:r})});else for(o in e)a=t[o]||(t[o]=[]),o==="ease"||a.push({t:parseFloat(n),v:e[o],e:r})},Ma=function(n,e,t,i,r){return Ut(n)?n.call(e,t,i,r):Wt(n)&&~n.indexOf("random(")?_a(n):n},Af=Fc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rf={};fi(Af+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Rf[n]=1});var Ft=function(n){kp(e,n);function e(i,r,o,a){var s;typeof r=="number"&&(o.duration=r,r=o,o=null),s=n.call(this,a?r:fa(r))||this;var c=s.vars,u=c.duration,p=c.delay,l=c.immediateRender,h=c.stagger,d=c.overwrite,f=c.keyframes,_=c.defaults,g=c.scrollTrigger,m=c.yoyoEase,x=r.parent||Pt,y=(Jt(i)||Hp(i)?Un(i[0]):"length"in r)?[i]:Vi(i),M,P,S,E,C,T,b,k;if(s._targets=y.length?Bc(y):da("GSAP target "+i+" not found. https://gsap.com",!Mi.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=d,f||h||Rs(u)||Rs(p)){if(r=s.vars,M=s.timeline=new si({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),M.kill(),M.parent=M._dp=In(s),M._start=0,h||Rs(u)||Rs(p)){if(E=y.length,b=h&&uf(h),un(h))for(C in h)~Af.indexOf(C)&&(k||(k={}),k[C]=h[C]);for(P=0;P<E;P++)S=Us(r,Rf),S.stagger=0,m&&(S.yoyoEase=m),k&&Rr(S,k),T=y[P],S.duration=+Ma(u,In(s),P,T,y),S.delay=(+Ma(p,In(s),P,T,y)||0)-s._delay,!h&&E===1&&S.delay&&(s._delay=p=S.delay,s._start+=p,S.delay=0),M.to(T,S,b?b(P,T,y):0),M._ease=dt.none;M.duration()?u=p=0:s.timeline=0}else if(f){fa(zi(M.vars.defaults,{ease:"none"})),M._ease=Pr(f.ease||r.ease||"none");var X=0,F,Y,q;if(Jt(f))f.forEach(function(ie){return M.to(y,ie,">")}),M.duration();else{S={};for(C in f)C==="ease"||C==="easeEach"||NM(C,f[C],S,f.easeEach);for(C in S)for(F=S[C].sort(function(ie,ne){return ie.t-ne.t}),X=0,P=0;P<F.length;P++)Y=F[P],q={ease:Y.e,duration:(Y.t-(P?F[P-1].t:0))/100*u},q[C]=Y.v,M.to(y,q,X),X+=q.duration;M.duration()<u&&M.to({},{duration:u-M.duration()})}}u||s.duration(u=M.duration())}else s.timeline=0;return d===!0&&!wc&&(or=In(s),Pt.killTweensOf(y),or=0),dn(x,In(s),o),r.reversed&&s.reverse(),r.paused&&s.paused(!0),(l||!u&&!f&&s._start===Xt(x._time)&&pi(l)&&hM(In(s))&&x.data!=="nested")&&(s._tTime=-bt,s.render(Math.max(0,-p)||0)),g&&of(In(s),g),s}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,s=this._tDur,c=this._dur,u=i<0,p=i>s-bt&&!u?s:i<bt?0:i,l,h,d,f,_,g,m,x,y;if(!c)pM(this,i,r,o);else if(p!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(l=p,x=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,o);if(l=Xt(p%f),p===s?(d=this._repeat,l=c):(d=~~(p/f),d&&d===Xt(p/f)&&(l=c,d--),l>c&&(l=c)),g=this._yoyo&&d&1,g&&(y=this._yEase,l=c-l),_=Io(this._tTime,f),l===a&&!o&&this._initted&&d===_)return this._tTime=p,this;d!==_&&(x&&this._yEase&&bf(x,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==f&&this._initted&&(this._lock=o=1,this.render(Xt(f*d),!0).invalidate()._lock=0))}if(!this._initted){if(af(this,u?i:l,o,r,p))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&d!==_))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=p,this._time=l,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(y||this._ease)(l/c),this._from&&(this.ratio=m=1-m),l&&!a&&!r&&!d&&(wi(this,"onStart"),this._tTime!==p))return this;for(h=this._pt;h;)h.r(m,h.d),h=h._next;x&&x.render(i<0?i:x._dur*x._ease(l/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&kc(this,i,r,o),wi(this,"onUpdate")),this._repeat&&d!==_&&this.vars.onRepeat&&!r&&this.parent&&wi(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(u&&!this._onUpdate&&kc(this,i,!0,!0),(i||!c)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&ir(this,1),!r&&!(u&&!a)&&(p||a||g)&&(wi(this,p===s?"onComplete":"onReverseComplete",!0),this._prom&&!(p<s&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),n.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,s){xa||Ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Kc(this,c),u=this._ease(c/this._dur),IM(this,i,r,o,a,u,c,s)?this.resetTo(i,r,o,a,1):(Fs(this,0),this.parent||tf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?va(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,or&&or.vars.overwrite!==!0)._first||va(this),this.parent&&o!==this.timeline.totalDuration()&&Uo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,s=i?Vi(i):a,c=this._ptLookup,u=this._pt,p,l,h,d,f,_,g;if((!r||r==="all")&&cM(a,s))return r==="all"&&(this._pt=0),va(this);for(p=this._op=this._op||[],r!=="all"&&(Wt(r)&&(f={},fi(r,function(m){return f[m]=1}),r=f),r=UM(a,r)),g=a.length;g--;)if(~s.indexOf(a[g])){l=c[g],r==="all"?(p[g]=r,d=l,h={}):(h=p[g]=p[g]||{},d=r);for(f in d)_=l&&l[f],_&&((!("kill"in _.d)||_.d.kill(f)===!0)&&Ns(this,_,"_pt"),delete l[f]),h!=="all"&&(h[f]=1)}return this._initted&&!this._pt&&u&&va(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ma(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return ma(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Pt.killTweensOf(i,r,o)},e}(Ta);zi(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),fi("staggerTo,staggerFrom,staggerFromTo",function(n){Ft[n]=function(){var e=new si,t=Hc.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Zc=function(n,e,t){return n[e]=t},Cf=function(n,e,t){return n[e](t)},DM=function(n,e,t,i){return n[e](i.fp,t)},OM=function(n,e,t){return n.setAttribute(e,t)},$c=function(n,e){return Ut(n[e])?Cf:Ac(n[e])&&n.setAttribute?OM:Zc},Pf=function(n,e){return e.set(e.t,e.p,Math.round((e.s+e.c*n)*1e6)/1e6,e)},FM=function(n,e){return e.set(e.t,e.p,!!(e.s+e.c*n),e)},Lf=function(n,e){var t=e._pt,i="";if(!n&&e.b)i=e.b;else if(n===1&&e.e)i=e.e;else{for(;t;)i=t.p+(t.m?t.m(t.s+t.c*n):Math.round((t.s+t.c*n)*1e4)/1e4)+i,t=t._next;i+=e.c}e.set(e.t,e.p,i,e)},Qc=function(n,e){for(var t=e._pt;t;)t.r(n,t.d),t=t._next},BM=function(n,e,t,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(n,e,t),r=o},kM=function(n){for(var e=this._pt,t,i;e;)i=e._next,e.p===n&&!e.op||e.op===n?Ns(this,e,"_pt"):e.dep||(t=1),e=i;return!t},zM=function(n,e,t,i){i.mSet(n,e,i.m.call(i.tween,t,i.mt),i)},If=function(n){for(var e=n._pt,t,i,r,o;e;){for(t=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=t}n._pt=r},mi=function(){function n(t,i,r,o,a,s,c,u,p){this.t=i,this.s=o,this.c=a,this.p=r,this.r=s||Pf,this.d=c||this,this.set=u||Zc,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(t,i,r){this.mSet=this.mSet||this.set,this.set=zM,this.m=t,this.mt=r,this.tween=i},n}();fi(Fc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Nc[n]=1}),bi.TweenMax=bi.TweenLite=Ft,bi.TimelineLite=bi.TimelineMax=si,Pt=new si({sortChildren:!1,defaults:Co,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Mi.stringFilter=Tf;var Ir=[],Bs={},HM=[],Uf=0,VM=0,Jc=function(n){return(Bs[n]||HM).map(function(e){return e()})},eu=function(){var n=Date.now(),e=[];n-Uf>2&&(Jc("matchMediaInit"),Ir.forEach(function(t){var i=t.queries,r=t.conditions,o,a,s,c;for(a in i)o=hn.matchMedia(i[a]).matches,o&&(s=1),o!==r[a]&&(r[a]=o,c=1);c&&(t.revert(),s&&e.push(t))}),Jc("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t,function(i){return t.add(null,i)})}),Uf=n,Jc("matchMedia"))},Nf=function(){function n(t,i){this.selector=i&&Vc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=VM++,t&&this.add(t)}var e=n.prototype;return e.add=function(t,i,r){Ut(t)&&(r=i,i=t,t=Ut);var o=this,a=function(){var s=Rt,c=o.selector,u;return s&&s!==o&&s.data.push(o),r&&(o.selector=Vc(r)),Rt=o,u=i.apply(o,arguments),Ut(u)&&o._r.push(u),Rt=s,o.selector=c,o.isReverted=!1,u};return o.last=a,t===Ut?a(o,function(s){return o.add(null,s)}):t?o[t]=a:a},e.ignore=function(t){var i=Rt;Rt=null,t(this),Rt=i},e.getTweens=function(){var t=[];return this.data.forEach(function(i){return i instanceof n?t.push.apply(t,i.getTweens()):i instanceof Ft&&!(i.parent&&i.parent.data==="nested")&&t.push(i)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,i){var r=this;if(t?function(){for(var a=r.getTweens(),s=r.data.length,c;s--;)c=r.data[s],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,p){return p.g-u.g||-1/0}).forEach(function(u){return u.t.revert(t)}),s=r.data.length;s--;)c=r.data[s],c instanceof si?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ft)&&c.revert&&c.revert(t);r._r.forEach(function(u){return u(t,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ir.length;o--;)Ir[o].id===this.id&&Ir.splice(o,1)},e.revert=function(t){this.kill(t||{})},n}(),GM=function(){function n(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=n.prototype;return e.add=function(t,i,r){un(t)||(t={matches:t});var o=new Nf(0,r||this.scope),a=o.conditions={},s,c,u;Rt&&!o.selector&&(o.selector=Rt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=t;for(c in t)c==="all"?u=1:(s=hn.matchMedia(t[c]),s&&(Ir.indexOf(o)<0&&Ir.push(o),(a[c]=s.matches)&&(u=1),s.addListener?s.addListener(eu):s.addEventListener("change",eu)));return u&&i(o,function(p){return o.add(null,p)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(i){return i.kill(t,!0)})},n}(),ks={registerPlugin:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];e.forEach(function(i){return _f(i)})},timeline:function(n){return new si(n)},getTweensOf:function(n,e){return Pt.getTweensOf(n,e)},getProperty:function(n,e,t,i){Wt(n)&&(n=Vi(n)[0]);var r=Ar(n||{}).get,o=t?Jp:Qp;return t==="native"&&(t=""),n&&(e?o((Si[e]&&Si[e].get||r)(n,e,t,i)):function(a,s,c){return o((Si[a]&&Si[a].get||r)(n,a,s,c))})},quickSetter:function(n,e,t){if(n=Vi(n),n.length>1){var i=n.map(function(u){return gi.quickSetter(u,e,t)}),r=i.length;return function(u){for(var p=r;p--;)i[p](u)}}n=n[0]||{};var o=Si[e],a=Ar(n),s=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var p=new o;No._pt=0,p.init(n,t?u+t:u,No,0,[n]),p.render(1,p),No._pt&&Qc(1,No)}:a.set(n,s);return o?c:function(u){return c(n,s,t?u+t:u,a,1)}},quickTo:function(n,e,t){var i,r=gi.to(n,Rr((i={},i[e]="+=0.1",i.paused=!0,i),t||{})),o=function(a,s,c){return r.resetTo(e,a,s,c)};return o.tween=r,o},isTweening:function(n){return Pt.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=Pr(n.ease,Co.ease)),ef(Co,n||{})},config:function(n){return ef(Mi,n||{})},registerEffect:function(n){var e=n.name,t=n.effect,i=n.plugins,r=n.defaults,o=n.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Si[a]&&!bi[a]&&da(e+" effect requires "+a+" plugin.")}),Oc[e]=function(a,s,c){return t(Vi(a),zi(s||{},r),c)},o&&(si.prototype[e]=function(a,s,c){return this.add(Oc[e](a,un(s)?s:(c=s)&&{},this),c)})},registerEase:function(n,e){dt[n]=Pr(e)},parseEase:function(n,e){return arguments.length?Pr(n,e):dt},getById:function(n){return Pt.getById(n)},exportRoot:function(n,e){n===void 0&&(n={});var t=new si(n),i,r;for(t.smoothChildTiming=pi(n.smoothChildTiming),Pt.remove(t),t._dp=0,t._time=t._tTime=Pt._time,i=Pt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ft&&i.vars.onComplete===i._targets[0]))&&dn(t,i,i._start-i._delay),i=r;return dn(Pt,t,0),t},context:function(n,e){return n?new Nf(n,e):Rt},matchMedia:function(n){return new GM(n)},matchMediaRefresh:function(){return Ir.forEach(function(n){var e=n.conditions,t,i;for(i in e)e[i]&&(e[i]=!1,t=1);t&&n.revert()})||eu()},addEventListener:function(n,e){var t=Bs[n]||(Bs[n]=[]);~t.indexOf(e)||t.push(e)},removeEventListener:function(n,e){var t=Bs[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)},utils:{wrap:TM,wrapYoyo:MM,distribute:uf,random:df,snap:hf,normalize:xM,getUnit:ei,clamp:gM,splitColor:vf,toArray:Vi,selector:Vc,mapRange:ff,pipe:vM,unitize:yM,interpolate:bM,shuffle:cf},install:jp,effects:Oc,ticker:Ei,updateRoot:si.updateRoot,plugins:Si,globalTimeline:Pt,core:{PropTween:mi,globals:qp,Tween:Ft,Timeline:si,Animation:Ta,getCache:Ar,_removeLinkedListItem:Ns,reverting:function(){return Qt},context:function(n){return n&&Rt&&(Rt.data.push(n),n._ctx=Rt),Rt},suppressOverwrites:function(n){return wc=n}}};fi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ks[n]=Ft[n]}),Ei.add(si.updateRoot),No=ks.to({},{duration:0});var WM=function(n,e){for(var t=n._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},XM=function(n,e){var t=n._targets,i,r,o;for(i in e)for(r=t.length;r--;)o=n._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=WM(o,i)),o&&o.modifier&&o.modifier(e[i],n,t[r],i))},tu=function(n,e){return{name:n,rawVars:1,init:function(t,i,r){r._onInit=function(o){var a,s;if(Wt(i)&&(a={},fi(i,function(c){return a[c]=1}),i=a),e){a={};for(s in i)a[s]=e(i[s]);i=a}XM(o,i)}}}},gi=ks.registerPlugin({name:"attr",init:function(n,e,t,i,r){var o,a,s;this.tween=t;for(o in e)s=n.getAttribute(o)||"",a=this.add(n,"setAttribute",(s||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=s,this._props.push(o)},render:function(n,e){for(var t=e._pt;t;)Qt?t.set(t.t,t.p,t.b,t):t.r(n,t.d),t=t._next}},{name:"endArray",init:function(n,e){for(var t=e.length;t--;)this.add(n,t,n[t]||0,e[t],0,0,0,0,0,1)}},tu("roundProps",Gc),tu("modifiers"),tu("snap",hf))||ks;Ft.version=si.version=gi.version="3.12.5",Xp=1,Rc()&&Do(),dt.Power0,dt.Power1,dt.Power2,dt.Power3,dt.Power4,dt.Linear,dt.Quad,dt.Cubic,dt.Quart,dt.Quint,dt.Strong,dt.Elastic,dt.Back,dt.SteppedEase,dt.Bounce,dt.Sine,dt.Expo,dt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Df,ar,Oo,iu,Ur,Of,nu,jM=function(){return typeof window<"u"},Nn={},Nr=180/Math.PI,Fo=Math.PI/180,Bo=Math.atan2,Ff=1e8,ru=/([A-Z])/g,qM=/(left|right|width|margin|padding|x)/i,YM=/[\s,\(]\S/,pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ou=function(n,e){return e.set(e.t,e.p,Math.round((e.s+e.c*n)*1e4)/1e4+e.u,e)},KM=function(n,e){return e.set(e.t,e.p,n===1?e.e:Math.round((e.s+e.c*n)*1e4)/1e4+e.u,e)},ZM=function(n,e){return e.set(e.t,e.p,n?Math.round((e.s+e.c*n)*1e4)/1e4+e.u:e.b,e)},$M=function(n,e){var t=e.s+e.c*n;e.set(e.t,e.p,~~(t+(t<0?-.5:.5))+e.u,e)},Bf=function(n,e){return e.set(e.t,e.p,n?e.e:e.b,e)},kf=function(n,e){return e.set(e.t,e.p,n!==1?e.b:e.e,e)},QM=function(n,e,t){return n.style[e]=t},JM=function(n,e,t){return n.style.setProperty(e,t)},eb=function(n,e,t){return n._gsap[e]=t},tb=function(n,e,t){return n._gsap.scaleX=n._gsap.scaleY=t},ib=function(n,e,t,i,r){var o=n._gsap;o.scaleX=o.scaleY=t,o.renderTransform(r,o)},nb=function(n,e,t,i,r){var o=n._gsap;o[e]=t,o.renderTransform(r,o)},Lt="transform",_i=Lt+"Origin",rb=function n(e,t){var i=this,r=this.target,o=r.style,a=r._gsap;if(e in Nn&&o){if(this.tfm=this.tfm||{},e!=="transform")e=pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=Dn(r,s)}):this.tfm[e]=a.x?a[e]:Dn(r,e),e===_i&&(this.tfm.zOrigin=a.zOrigin);else return pn.transform.split(",").forEach(function(s){return n.call(i,s,t)});if(this.props.indexOf(Lt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(_i,t,"")),e=Lt}(o||t)&&this.props.push(e,t,o[e])},zf=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},ob=function(){var n=this.props,e=this.target,t=e.style,i=e._gsap,r,o;for(r=0;r<n.length;r+=3)n[r+1]?e[n[r]]=n[r+2]:n[r+2]?t[n[r]]=n[r+2]:t.removeProperty(n[r].substr(0,2)==="--"?n[r]:n[r].replace(ru,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=nu(),(!r||!r.isStart)&&!t[Lt]&&(zf(t),i.zOrigin&&t[_i]&&(t[_i]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Hf=function(n,e){var t={target:n,props:[],revert:ob,save:rb};return n._gsap||gi.core.getCache(n),e&&e.split(",").forEach(function(i){return t.save(i)}),t},Vf,au=function(n,e){var t=ar.createElementNS?ar.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):ar.createElement(n);return t&&t.style?t:ar.createElement(n)},fn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(ru,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ko(t)||t,1)||""},Gf="O,Moz,ms,Ms,Webkit".split(","),ko=function(n,e,t){var i=e||Ur,r=i.style,o=5;if(n in r&&!t)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);o--&&!(Gf[o]+n in r););return o<0?null:(o===3?"ms":o>=0?Gf[o]:"")+n},su=function(){jM()&&window.document&&(Df=window,ar=Df.document,Oo=ar.documentElement,Ur=au("div")||{style:{}},au("div"),Lt=ko(Lt),_i=Lt+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vf=!!ko("perspective"),nu=gi.core.reverting,iu=1)},lu=function n(e){var t=au("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,o=this.style.cssText,a;if(Oo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Oo.removeChild(t),this.style.cssText=o,a},Wf=function(n,e){for(var t=e.length;t--;)if(n.hasAttribute(e[t]))return n.getAttribute(e[t])},Xf=function(n){var e;try{e=n.getBBox()}catch{e=lu.call(n,!0)}return e&&(e.width||e.height)||n.getBBox===lu||(e=lu.call(n,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Wf(n,["x","cx","x1"])||0,y:+Wf(n,["y","cy","y1"])||0,width:0,height:0}:e},jf=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&Xf(n))},Dr=function(n,e){if(e){var t=n.style,i;e in Nn&&e!==_i&&(e=Lt),t.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),t.removeProperty(i==="--"?e:e.replace(ru,"-$1").toLowerCase())):t.removeAttribute(e)}},sr=function(n,e,t,i,r,o){var a=new mi(n._pt,e,t,0,1,o?kf:Bf);return n._pt=a,a.b=i,a.e=r,n._props.push(t),a},qf={deg:1,rad:1,turn:1},ab={grid:1,flex:1},lr=function n(e,t,i,r){var o=parseFloat(i)||0,a=(i+"").trim().substr((o+"").length)||"px",s=Ur.style,c=qM.test(t),u=e.tagName.toLowerCase()==="svg",p=(u?"client":"offset")+(c?"Width":"Height"),l=100,h=r==="px",d=r==="%",f,_,g,m;if(r===a||!o||qf[r]||qf[a])return o;if(a!=="px"&&!h&&(o=n(e,t,i,"px")),m=e.getCTM&&jf(e),(d||a==="%")&&(Nn[t]||~t.indexOf("adius")))return f=m?e.getBBox()[c?"width":"height"]:e[p],Nt(d?o/f*l:o/100*f);if(s[c?"width":"height"]=l+(h?a:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ar||!_.appendChild)&&(_=ar.body),g=_._gsap,g&&d&&g.width&&c&&g.time===Ei.time&&!g.uncache)return Nt(o/g.width*l);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=l+r,f=e[p],x?e.style[t]=x:Dr(e,t)}else(d||a==="%")&&!ab[fn(_,"display")]&&(s.position=fn(e,"position")),_===e&&(s.position="static"),_.appendChild(Ur),f=Ur[p],_.removeChild(Ur),s.position="absolute";return c&&d&&(g=Ar(_),g.time=Ei.time,g.width=_[p]),Nt(h?f*o/l:f&&o?l/f*o:0)},Dn=function(n,e,t,i){var r;return iu||su(),e in pn&&e!=="transform"&&(e=pn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Nn[e]&&e!=="transform"?(r=Sa(n,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Hs(fn(n,_i))+" "+r.zOrigin+"px"):(r=n.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=zs[e]&&zs[e](n,e,t)||fn(n,e)||Zp(n,e)||(e==="opacity"?1:0))),t&&!~(r+"").trim().indexOf(" ")?lr(n,e,r,t)+t:r},sb=function(n,e,t,i){if(!t||t==="none"){var r=ko(e,n,1),o=r&&fn(n,r,1);o&&o!==t?(e=r,t=o):e==="borderColor"&&(t=fn(n,"borderTopColor"))}var a=new mi(this._pt,n.style,e,0,1,Lf),s=0,c=0,u,p,l,h,d,f,_,g,m,x,y,M;if(a.b=t,a.e=i,t+="",i+="",i==="auto"&&(f=n.style[e],n.style[e]=i,i=fn(n,e)||i,f?n.style[e]=f:Dr(n,e)),u=[t,i],Tf(u),t=u[0],i=u[1],l=t.match(Po)||[],M=i.match(Po)||[],M.length){for(;p=Po.exec(i);)_=p[0],m=i.substring(s,p.index),d?d=(d+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(d=1),_!==(f=l[c++]||"")&&(h=parseFloat(f)||0,y=f.substr((h+"").length),_.charAt(1)==="="&&(_=Lo(h,_)+y),g=parseFloat(_),x=_.substr((g+"").length),s=Po.lastIndex-x.length,x||(x=x||Mi.units[e]||y,s===i.length&&(i+=x,a.e+=x)),y!==x&&(h=lr(n,e,f,x)||0),a._pt={_next:a._pt,p:m||c===1?m:",",s:h,c:g-h,m:d&&d<4||e==="zIndex"?Math.round:0});a.c=s<i.length?i.substring(s,i.length):""}else a.r=e==="display"&&i==="none"?kf:Bf;return Gp.test(i)&&(a.e=0),this._pt=a,a},Yf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lb=function(n){var e=n.split(" "),t=e[0],i=e[1]||"50%";return(t==="top"||t==="bottom"||i==="left"||i==="right")&&(n=t,t=i,i=n),e[0]=Yf[t]||t,e[1]=Yf[i]||i,e.join(" ")},cb=function(n,e){if(e.tween&&e.tween._time===e.tween._dur){var t=e.t,i=t.style,r=e.u,o=t._gsap,a,s,c;if(r==="all"||r===!0)i.cssText="",s=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Nn[a]&&(s=1,a=a==="transformOrigin"?_i:Lt),Dr(t,a);s&&(Dr(t,Lt),o&&(o.svg&&t.removeAttribute("transform"),Sa(t,1),o.uncache=1,zf(i)))}},zs={clearProps:function(n,e,t,i,r){if(r.data!=="isFromStart"){var o=n._pt=new mi(n._pt,e,t,0,0,cb);return o.u=i,o.pr=-10,o.tween=r,n._props.push(t),1}}},ba=[1,0,0,1,0,0],Kf={},Zf=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},$f=function(n){var e=fn(n,Lt);return Zf(e)?ba:e.substr(7).match(Vp).map(Nt)},cu=function(n,e){var t=n._gsap||Ar(n),i=n.style,r=$f(n),o,a,s,c;return t.svg&&n.getAttribute("transform")?(s=n.transform.baseVal.consolidate().matrix,r=[s.a,s.b,s.c,s.d,s.e,s.f],r.join(",")==="1,0,0,1,0,0"?ba:r):(r===ba&&!n.offsetParent&&n!==Oo&&!t.svg&&(s=i.display,i.display="block",o=n.parentNode,(!o||!n.offsetParent)&&(c=1,a=n.nextElementSibling,Oo.appendChild(n)),r=$f(n),s?i.display=s:Dr(n,"display"),c&&(a?o.insertBefore(n,a):o?o.appendChild(n):Oo.removeChild(n))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},uu=function(n,e,t,i,r,o){var a=n._gsap,s=r||cu(n,!0),c=a.xOrigin||0,u=a.yOrigin||0,p=a.xOffset||0,l=a.yOffset||0,h=s[0],d=s[1],f=s[2],_=s[3],g=s[4],m=s[5],x=e.split(" "),y=parseFloat(x[0])||0,M=parseFloat(x[1])||0,P,S,E,C;t?s!==ba&&(S=h*_-d*f)&&(E=y*(_/S)+M*(-f/S)+(f*m-_*g)/S,C=y*(-d/S)+M*(h/S)-(h*m-d*g)/S,y=E,M=C):(P=Xf(n),y=P.x+(~x[0].indexOf("%")?y/100*P.width:y),M=P.y+(~(x[1]||x[0]).indexOf("%")?M/100*P.height:M)),i||i!==!1&&a.smooth?(g=y-c,m=M-u,a.xOffset=p+(g*h+m*f)-g,a.yOffset=l+(g*d+m*_)-m):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!t,n.style[_i]="0px 0px",o&&(sr(o,a,"xOrigin",c,y),sr(o,a,"yOrigin",u,M),sr(o,a,"xOffset",p,a.xOffset),sr(o,a,"yOffset",l,a.yOffset)),n.setAttribute("data-svg-origin",y+" "+M)},Sa=function(n,e){var t=n._gsap||new wf(n);if("x"in t&&!e&&!t.uncache)return t;var i=n.style,r=t.scaleX<0,o="px",a="deg",s=getComputedStyle(n),c=fn(n,_i)||"0",u,p,l,h,d,f,_,g,m,x,y,M,P,S,E,C,T,b,k,X,F,Y,q,ie,ne,$,se,de,Pe,Ge,Fe,te;return u=p=l=f=_=g=m=x=y=0,h=d=1,t.svg=!!(n.getCTM&&jf(n)),s.translate&&((s.translate!=="none"||s.scale!=="none"||s.rotate!=="none")&&(i[Lt]=(s.translate!=="none"?"translate3d("+(s.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(s.rotate!=="none"?"rotate("+s.rotate+") ":"")+(s.scale!=="none"?"scale("+s.scale.split(" ").join(",")+") ":"")+(s[Lt]!=="none"?s[Lt]:"")),i.scale=i.rotate=i.translate="none"),S=cu(n,t.svg),t.svg&&(t.uncache?(ne=n.getBBox(),c=t.xOrigin-ne.x+"px "+(t.yOrigin-ne.y)+"px",ie=""):ie=!e&&n.getAttribute("data-svg-origin"),uu(n,ie||c,!!ie||t.originIsAbsolute,t.smooth!==!1,S)),M=t.xOrigin||0,P=t.yOrigin||0,S!==ba&&(b=S[0],k=S[1],X=S[2],F=S[3],u=Y=S[4],p=q=S[5],S.length===6?(h=Math.sqrt(b*b+k*k),d=Math.sqrt(F*F+X*X),f=b||k?Bo(k,b)*Nr:0,m=X||F?Bo(X,F)*Nr+f:0,m&&(d*=Math.abs(Math.cos(m*Fo))),t.svg&&(u-=M-(M*b+P*X),p-=P-(M*k+P*F))):(te=S[6],Ge=S[7],se=S[8],de=S[9],Pe=S[10],Fe=S[11],u=S[12],p=S[13],l=S[14],E=Bo(te,Pe),_=E*Nr,E&&(C=Math.cos(-E),T=Math.sin(-E),ie=Y*C+se*T,ne=q*C+de*T,$=te*C+Pe*T,se=Y*-T+se*C,de=q*-T+de*C,Pe=te*-T+Pe*C,Fe=Ge*-T+Fe*C,Y=ie,q=ne,te=$),E=Bo(-X,Pe),g=E*Nr,E&&(C=Math.cos(-E),T=Math.sin(-E),ie=b*C-se*T,ne=k*C-de*T,$=X*C-Pe*T,Fe=F*T+Fe*C,b=ie,k=ne,X=$),E=Bo(k,b),f=E*Nr,E&&(C=Math.cos(E),T=Math.sin(E),ie=b*C+k*T,ne=Y*C+q*T,k=k*C-b*T,q=q*C-Y*T,b=ie,Y=ne),_&&Math.abs(_)+Math.abs(f)>359.9&&(_=f=0,g=180-g),h=Nt(Math.sqrt(b*b+k*k+X*X)),d=Nt(Math.sqrt(q*q+te*te)),E=Bo(Y,q),m=Math.abs(E)>2e-4?E*Nr:0,y=Fe?1/(Fe<0?-Fe:Fe):0),t.svg&&(ie=n.getAttribute("transform"),t.forceCSS=n.setAttribute("transform","")||!Zf(fn(n,Lt)),ie&&n.setAttribute("transform",ie))),Math.abs(m)>90&&Math.abs(m)<270&&(r?(h*=-1,m+=f<=0?180:-180,f+=f<=0?180:-180):(d*=-1,m+=m<=0?180:-180)),e=e||t.uncache,t.x=u-((t.xPercent=u&&(!e&&t.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-u)?-50:0)))?n.offsetWidth*t.xPercent/100:0)+o,t.y=p-((t.yPercent=p&&(!e&&t.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-p)?-50:0)))?n.offsetHeight*t.yPercent/100:0)+o,t.z=l+o,t.scaleX=Nt(h),t.scaleY=Nt(d),t.rotation=Nt(f)+a,t.rotationX=Nt(_)+a,t.rotationY=Nt(g)+a,t.skewX=m+a,t.skewY=x+a,t.transformPerspective=y+o,(t.zOrigin=parseFloat(c.split(" ")[2])||!e&&t.zOrigin||0)&&(i[_i]=Hs(c)),t.xOffset=t.yOffset=0,t.force3D=Mi.force3D,t.renderTransform=t.svg?hb:Vf?Qf:ub,t.uncache=0,t},Hs=function(n){return(n=n.split(" "))[0]+" "+n[1]},hu=function(n,e,t){var i=ei(e);return Nt(parseFloat(e)+parseFloat(lr(n,"x",t+"px",i)))+i},ub=function(n,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Qf(n,e)},Or="0deg",wa="0px",Fr=") ",Qf=function(n,e){var t=e||this,i=t.xPercent,r=t.yPercent,o=t.x,a=t.y,s=t.z,c=t.rotation,u=t.rotationY,p=t.rotationX,l=t.skewX,h=t.skewY,d=t.scaleX,f=t.scaleY,_=t.transformPerspective,g=t.force3D,m=t.target,x=t.zOrigin,y="",M=g==="auto"&&n&&n!==1||g===!0;if(x&&(p!==Or||u!==Or)){var P=parseFloat(u)*Fo,S=Math.sin(P),E=Math.cos(P),C;P=parseFloat(p)*Fo,C=Math.cos(P),o=hu(m,o,S*C*-x),a=hu(m,a,-Math.sin(P)*-x),s=hu(m,s,E*C*-x+x)}_!==wa&&(y+="perspective("+_+Fr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||o!==wa||a!==wa||s!==wa)&&(y+=s!==wa||M?"translate3d("+o+", "+a+", "+s+") ":"translate("+o+", "+a+Fr),c!==Or&&(y+="rotate("+c+Fr),u!==Or&&(y+="rotateY("+u+Fr),p!==Or&&(y+="rotateX("+p+Fr),(l!==Or||h!==Or)&&(y+="skew("+l+", "+h+Fr),(d!==1||f!==1)&&(y+="scale("+d+", "+f+Fr),m.style[Lt]=y||"translate(0, 0)"},hb=function(n,e){var t=e||this,i=t.xPercent,r=t.yPercent,o=t.x,a=t.y,s=t.rotation,c=t.skewX,u=t.skewY,p=t.scaleX,l=t.scaleY,h=t.target,d=t.xOrigin,f=t.yOrigin,_=t.xOffset,g=t.yOffset,m=t.forceCSS,x=parseFloat(o),y=parseFloat(a),M,P,S,E,C;s=parseFloat(s),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,s+=u),s||c?(s*=Fo,c*=Fo,M=Math.cos(s)*p,P=Math.sin(s)*p,S=Math.sin(s-c)*-l,E=Math.cos(s-c)*l,c&&(u*=Fo,C=Math.tan(c-u),C=Math.sqrt(1+C*C),S*=C,E*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),M*=C,P*=C)),M=Nt(M),P=Nt(P),S=Nt(S),E=Nt(E)):(M=p,E=l,P=S=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=lr(h,"x",o,"px"),y=lr(h,"y",a,"px")),(d||f||_||g)&&(x=Nt(x+d-(d*M+f*S)+_),y=Nt(y+f-(d*P+f*E)+g)),(i||r)&&(C=h.getBBox(),x=Nt(x+i/100*C.width),y=Nt(y+r/100*C.height)),C="matrix("+M+","+P+","+S+","+E+","+x+","+y+")",h.setAttribute("transform",C),m&&(h.style[Lt]=C)},db=function(n,e,t,i,r){var o=360,a=Wt(r),s=parseFloat(r)*(a&&~r.indexOf("rad")?Nr:1),c=s-i,u=i+c+"deg",p,l;return a&&(p=r.split("_")[1],p==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),p==="cw"&&c<0?c=(c+o*Ff)%o-~~(c/o)*o:p==="ccw"&&c>0&&(c=(c-o*Ff)%o-~~(c/o)*o)),n._pt=l=new mi(n._pt,e,t,i,c,KM),l.e=u,l.u="deg",n._props.push(t),l},Jf=function(n,e){for(var t in e)n[t]=e[t];return n},pb=function(n,e,t){var i=Jf({},t._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=t.style,a,s,c,u,p,l,h,d;i.svg?(c=t.getAttribute("transform"),t.setAttribute("transform",""),o[Lt]=e,a=Sa(t,1),Dr(t,Lt),t.setAttribute("transform",c)):(c=getComputedStyle(t)[Lt],o[Lt]=e,a=Sa(t,1),o[Lt]=c);for(s in Nn)c=i[s],u=a[s],c!==u&&r.indexOf(s)<0&&(h=ei(c),d=ei(u),p=h!==d?lr(t,s,c,d):parseFloat(c),l=parseFloat(u),n._pt=new mi(n._pt,a,s,p,l-p,ou),n._pt.u=d||0,n._props.push(s));Jf(a,i)};fi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",o="Left",a=(e<3?[t,i,r,o]:[t+o,t+i,r+i,r+o]).map(function(s){return e<2?n+s:"border"+s+n});zs[e>1?"border"+n:n]=function(s,c,u,p,l){var h,d;if(arguments.length<4)return h=a.map(function(f){return Dn(s,f,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(p+"").split(" "),d={},a.forEach(function(f,_){return d[f]=h[_]=h[_]||h[(_-1)/2|0]}),s.init(c,d,l)}});var em={name:"css",register:su,targetTest:function(n){return n.style&&n.nodeType},init:function(n,e,t,i,r){var o=this._props,a=n.style,s=t.vars.startAt,c,u,p,l,h,d,f,_,g,m,x,y,M,P,S,E;iu||su(),this.styles=this.styles||Hf(n),E=this.styles.props,this.tween=t;for(f in e)if(f!=="autoRound"&&(u=e[f],!(Si[f]&&Ef(f,e,t,i,n,r)))){if(h=typeof u,d=zs[f],h==="function"&&(u=u.call(t,i,n,r),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=_a(u)),d)d(this,n,f,u,t)&&(S=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(n).getPropertyValue(f)+"").trim(),u+="",rr.lastIndex=0,rr.test(c)||(_=ei(c),g=ei(u)),g?_!==g&&(c=lr(n,f,c,g)+g):_&&(u+=_),this.add(a,"setProperty",c,u,i,r,0,0,f),o.push(f),E.push(f,0,a[f]);else if(h!=="undefined"){if(s&&f in s?(c=typeof s[f]=="function"?s[f].call(t,i,n,r):s[f],Wt(c)&&~c.indexOf("random(")&&(c=_a(c)),ei(c+"")||c==="auto"||(c+=Mi.units[f]||ei(Dn(n,f))||""),(c+"").charAt(1)==="="&&(c=Dn(n,f))):c=Dn(n,f),l=parseFloat(c),m=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),m&&(u=u.substr(2)),p=parseFloat(u),f in pn&&(f==="autoAlpha"&&(l===1&&Dn(n,"visibility")==="hidden"&&p&&(l=0),E.push("visibility",0,a.visibility),sr(this,a,"visibility",l?"inherit":"hidden",p?"inherit":"hidden",!p)),f!=="scale"&&f!=="transform"&&(f=pn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),x=f in Nn,x){if(this.styles.save(f),y||(M=n._gsap,M.renderTransform&&!e.parseTransform||Sa(n,e.parseTransform),P=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new mi(this._pt,a,Lt,0,1,M.renderTransform,M,0,-1),y.dep=1),f==="scale")this._pt=new mi(this._pt,M,"scaleY",M.scaleY,(m?Lo(M.scaleY,m+p):p)-M.scaleY||0,ou),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){E.push(_i,0,a[_i]),u=lb(u),M.svg?uu(n,u,0,P,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==M.zOrigin&&sr(this,M,"zOrigin",M.zOrigin,g),sr(this,a,f,Hs(c),Hs(u)));continue}else if(f==="svgOrigin"){uu(n,u,1,P,0,this);continue}else if(f in Kf){db(this,M,f,l,m?Lo(l,m+u):u);continue}else if(f==="smoothOrigin"){sr(this,M,"smooth",M.smooth,u);continue}else if(f==="force3D"){M[f]=u;continue}else if(f==="transform"){pb(this,u,n);continue}}else f in a||(f=ko(f)||f);if(x||(p||p===0)&&(l||l===0)&&!YM.test(u)&&f in a)_=(c+"").substr((l+"").length),p||(p=0),g=ei(u)||(f in Mi.units?Mi.units[f]:_),_!==g&&(l=lr(n,f,c,g)),this._pt=new mi(this._pt,x?M:a,f,l,(m?Lo(l,m+p):p)-l,!x&&(g==="px"||f==="zIndex")&&e.autoRound!==!1?$M:ou),this._pt.u=g||0,_!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=ZM);else if(f in a)sb.call(this,n,f,c,m?m+u:u);else if(f in n)this.add(n,f,c||n[f],m?m+u:u,i,r);else if(f!=="parseTransform"){Uc(f,u);continue}x||(f in a?E.push(f,0,a[f]):E.push(f,1,c||n[f])),o.push(f)}}S&&If(this)},render:function(n,e){if(e.tween._time||!nu())for(var t=e._pt;t;)t.r(n,t.d),t=t._next;else e.styles.revert()},get:Dn,aliases:pn,getSetter:function(n,e,t){var i=pn[e];return i&&i.indexOf(",")<0&&(e=i),e in Nn&&e!==_i&&(n._gsap.x||Dn(n,"x"))?t&&Of===t?e==="scale"?tb:eb:(Of=t||{})&&(e==="scale"?ib:nb):n.style&&!Ac(n.style[e])?QM:~e.indexOf("-")?JM:$c(n,e)},core:{_removeProperty:Dr,_getMatrix:cu}};gi.utils.checkPrefix=ko,gi.core.getStyleSaver=Hf,function(n,e,t,i){var r=fi(n+","+e+","+t,function(o){Nn[o]=1});fi(e,function(o){Mi.units[o]="deg",Kf[o]=1}),pn[r[13]]=n+","+e,fi(i,function(o){var a=o.split(":");pn[a[1]]=r[a[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Mi.units[n]="px"}),gi.registerPlugin(em);var Oe=gi.registerPlugin(em)||gi;Oe.core.Tween;var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Aa={};/*!
*  howler.js v2.2.4
*  howlerjs.com
*
*  (c) 2013-2020, James Simpson of GoldFire Studios
*  goldfirestudios.com
*
*  MIT License
*/(function(n){(function(){var e=function(){this.init()};e.prototype={init:function(){var l=this||t;return l._counter=1e3,l._html5AudioPool=[],l.html5PoolSize=10,l._codecs={},l._howls=[],l._muted=!1,l._volume=1,l._canPlayEvent="canplaythrough",l._navigator=typeof window<"u"&&window.navigator?window.navigator:null,l.masterGain=null,l.noAudio=!1,l.usingWebAudio=!0,l.autoSuspend=!0,l.ctx=null,l.autoUnlock=!0,l._setup(),l},volume:function(l){var h=this||t;if(l=parseFloat(l),h.ctx||p(),typeof l<"u"&&l>=0&&l<=1){if(h._volume=l,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var f=h._howls[d]._getSoundIds(),_=0;_<f.length;_++){var g=h._howls[d]._soundById(f[_]);g&&g._node&&(g._node.volume=g._volume*l)}return h}return h._volume},mute:function(l){var h=this||t;h.ctx||p(),h._muted=l,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l?0:h._volume,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var f=h._howls[d]._getSoundIds(),_=0;_<f.length;_++){var g=h._howls[d]._soundById(f[_]);g&&g._node&&(g._node.muted=l?!0:g._muted)}return h},stop:function(){for(var l=this||t,h=0;h<l._howls.length;h++)l._howls[h].stop();return l},unload:function(){for(var l=this||t,h=l._howls.length-1;h>=0;h--)l._howls[h].unload();return l.usingWebAudio&&l.ctx&&typeof l.ctx.close<"u"&&(l.ctx.close(),l.ctx=null,p()),l},codecs:function(l){return(this||t)._codecs[l.replace(/^x-/,"")]},_setup:function(){var l=this||t;if(l.state=l.ctx&&l.ctx.state||"suspended",l._autoSuspend(),!l.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(l._canPlayEvent="canplay")}catch{l.noAudio=!0}else l.noAudio=!0;try{var h=new Audio;h.muted&&(l.noAudio=!0)}catch{}return l.noAudio||l._setupCodecs(),l},_setupCodecs:function(){var l=this||t,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return l}if(!h||typeof h.canPlayType!="function")return l;var d=h.canPlayType("audio/mpeg;").replace(/^no$/,""),f=l._navigator?l._navigator.userAgent:"",_=f.match(/OPR\/(\d+)/g),g=_&&parseInt(_[0].split("/")[1],10)<33,m=f.indexOf("Safari")!==-1&&f.indexOf("Chrome")===-1,x=f.match(/Version\/(.*?) /),y=m&&x&&parseInt(x[1],10)<15;return l._codecs={mp3:!!(!g&&(d||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!y&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!y&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},l},_unlockAudio:function(){var l=this||t;if(!(l._audioUnlocked||!l.ctx)){l._audioUnlocked=!1,l.autoUnlock=!1,!l._mobileUnloaded&&l.ctx.sampleRate!==44100&&(l._mobileUnloaded=!0,l.unload()),l._scratchBuffer=l.ctx.createBuffer(1,1,22050);var h=function(d){for(;l._html5AudioPool.length<l.html5PoolSize;)try{var f=new Audio;f._unlocked=!0,l._releaseHtml5Audio(f)}catch{l.noAudio=!0;break}for(var _=0;_<l._howls.length;_++)if(!l._howls[_]._webAudio)for(var g=l._howls[_]._getSoundIds(),m=0;m<g.length;m++){var x=l._howls[_]._soundById(g[m]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}l._autoResume();var y=l.ctx.createBufferSource();y.buffer=l._scratchBuffer,y.connect(l.ctx.destination),typeof y.start>"u"?y.noteOn(0):y.start(0),typeof l.ctx.resume=="function"&&l.ctx.resume(),y.onended=function(){y.disconnect(0),l._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var M=0;M<l._howls.length;M++)l._howls[M]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),l}},_obtainHtml5Audio:function(){var l=this||t;if(l._html5AudioPool.length)return l._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(l){var h=this||t;return l._unlocked&&h._html5AudioPool.push(l),h},_autoSuspend:function(){var l=this;if(!(!l.autoSuspend||!l.ctx||typeof l.ctx.suspend>"u"||!t.usingWebAudio)){for(var h=0;h<l._howls.length;h++)if(l._howls[h]._webAudio){for(var d=0;d<l._howls[h]._sounds.length;d++)if(!l._howls[h]._sounds[d]._paused)return l}return l._suspendTimer&&clearTimeout(l._suspendTimer),l._suspendTimer=setTimeout(function(){if(l.autoSuspend){l._suspendTimer=null,l.state="suspending";var f=function(){l.state="suspended",l._resumeAfterSuspend&&(delete l._resumeAfterSuspend,l._autoResume())};l.ctx.suspend().then(f,f)}},3e4),l}},_autoResume:function(){var l=this;if(!(!l.ctx||typeof l.ctx.resume>"u"||!t.usingWebAudio))return l.state==="running"&&l.ctx.state!=="interrupted"&&l._suspendTimer?(clearTimeout(l._suspendTimer),l._suspendTimer=null):l.state==="suspended"||l.state==="running"&&l.ctx.state==="interrupted"?(l.ctx.resume().then(function(){l.state="running";for(var h=0;h<l._howls.length;h++)l._howls[h]._emit("resume")}),l._suspendTimer&&(clearTimeout(l._suspendTimer),l._suspendTimer=null)):l.state==="suspending"&&(l._resumeAfterSuspend=!0),l}};var t=new e,i=function(l){var h=this;if(!l.src||l.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(l)};i.prototype={init:function(l){var h=this;return t.ctx||p(),h._autoplay=l.autoplay||!1,h._format=typeof l.format!="string"?l.format:[l.format],h._html5=l.html5||!1,h._muted=l.mute||!1,h._loop=l.loop||!1,h._pool=l.pool||5,h._preload=typeof l.preload=="boolean"||l.preload==="metadata"?l.preload:!0,h._rate=l.rate||1,h._sprite=l.sprite||{},h._src=typeof l.src!="string"?l.src:[l.src],h._volume=l.volume!==void 0?l.volume:1,h._xhr={method:l.xhr&&l.xhr.method?l.xhr.method:"GET",headers:l.xhr&&l.xhr.headers?l.xhr.headers:null,withCredentials:l.xhr&&l.xhr.withCredentials?l.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=l.onend?[{fn:l.onend}]:[],h._onfade=l.onfade?[{fn:l.onfade}]:[],h._onload=l.onload?[{fn:l.onload}]:[],h._onloaderror=l.onloaderror?[{fn:l.onloaderror}]:[],h._onplayerror=l.onplayerror?[{fn:l.onplayerror}]:[],h._onpause=l.onpause?[{fn:l.onpause}]:[],h._onplay=l.onplay?[{fn:l.onplay}]:[],h._onstop=l.onstop?[{fn:l.onstop}]:[],h._onmute=l.onmute?[{fn:l.onmute}]:[],h._onvolume=l.onvolume?[{fn:l.onvolume}]:[],h._onrate=l.onrate?[{fn:l.onrate}]:[],h._onseek=l.onseek?[{fn:l.onseek}]:[],h._onunlock=l.onunlock?[{fn:l.onunlock}]:[],h._onresume=[],h._webAudio=t.usingWebAudio&&!h._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var l=this,h=null;if(t.noAudio){l._emit("loaderror",null,"No audio support.");return}typeof l._src=="string"&&(l._src=[l._src]);for(var d=0;d<l._src.length;d++){var f,_;if(l._format&&l._format[d])f=l._format[d];else{if(_=l._src[d],typeof _!="string"){l._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}f=/^data:audio\/([^;,]+);/i.exec(_),f||(f=/\.([^.]+)$/.exec(_.split("?",1)[0])),f&&(f=f[1].toLowerCase())}if(f||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),f&&t.codecs(f)){h=l._src[d];break}}if(!h){l._emit("loaderror",null,"No codec support for selected audio sources.");return}return l._src=h,l._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(l._html5=!0,l._webAudio=!1),new r(l),l._webAudio&&a(l),l},play:function(l,h){var d=this,f=null;if(typeof l=="number")f=l,l=null;else{if(typeof l=="string"&&d._state==="loaded"&&!d._sprite[l])return null;if(typeof l>"u"&&(l="__default",!d._playLock)){for(var _=0,g=0;g<d._sounds.length;g++)d._sounds[g]._paused&&!d._sounds[g]._ended&&(_++,f=d._sounds[g]._id);_===1?l=null:f=null}}var m=f?d._soundById(f):d._inactiveSound();if(!m)return null;if(f&&!l&&(l=m._sprite||"__default"),d._state!=="loaded"){m._sprite=l,m._ended=!1;var x=m._id;return d._queue.push({event:"play",action:function(){d.play(x)}}),x}if(f&&!m._paused)return h||d._loadQueue("play"),m._id;d._webAudio&&t._autoResume();var y=Math.max(0,m._seek>0?m._seek:d._sprite[l][0]/1e3),M=Math.max(0,(d._sprite[l][0]+d._sprite[l][1])/1e3-y),P=M*1e3/Math.abs(m._rate),S=d._sprite[l][0]/1e3,E=(d._sprite[l][0]+d._sprite[l][1])/1e3;m._sprite=l,m._ended=!1;var C=function(){m._paused=!1,m._seek=y,m._start=S,m._stop=E,m._loop=!!(m._loop||d._sprite[l][2])};if(y>=E){d._ended(m);return}var T=m._node;if(d._webAudio){var b=function(){d._playLock=!1,C(),d._refreshBuffer(m);var Y=m._muted||d._muted?0:m._volume;T.gain.setValueAtTime(Y,t.ctx.currentTime),m._playStart=t.ctx.currentTime,typeof T.bufferSource.start>"u"?m._loop?T.bufferSource.noteGrainOn(0,y,86400):T.bufferSource.noteGrainOn(0,y,M):m._loop?T.bufferSource.start(0,y,86400):T.bufferSource.start(0,y,M),P!==1/0&&(d._endTimers[m._id]=setTimeout(d._ended.bind(d,m),P)),h||setTimeout(function(){d._emit("play",m._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?b():(d._playLock=!0,d.once("resume",b),d._clearTimer(m._id))}else{var k=function(){T.currentTime=y,T.muted=m._muted||d._muted||t._muted||T.muted,T.volume=m._volume*t.volume(),T.playbackRate=m._rate;try{var Y=T.play();if(Y&&typeof Promise<"u"&&(Y instanceof Promise||typeof Y.then=="function")?(d._playLock=!0,C(),Y.then(function(){d._playLock=!1,T._unlocked=!0,h?d._loadQueue():d._emit("play",m._id)}).catch(function(){d._playLock=!1,d._emit("playerror",m._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),m._ended=!0,m._paused=!0})):h||(d._playLock=!1,C(),d._emit("play",m._id)),T.playbackRate=m._rate,T.paused){d._emit("playerror",m._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}l!=="__default"||m._loop?d._endTimers[m._id]=setTimeout(d._ended.bind(d,m),P):(d._endTimers[m._id]=function(){d._ended(m),T.removeEventListener("ended",d._endTimers[m._id],!1)},T.addEventListener("ended",d._endTimers[m._id],!1))}catch(q){d._emit("playerror",m._id,q)}};T.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(T.src=d._src,T.load());var X=window&&window.ejecta||!T.readyState&&t._navigator.isCocoonJS;if(T.readyState>=3||X)k();else{d._playLock=!0,d._state="loading";var F=function(){d._state="loaded",k(),T.removeEventListener(t._canPlayEvent,F,!1)};T.addEventListener(t._canPlayEvent,F,!1),d._clearTimer(m._id)}}return m._id},pause:function(l){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(l)}}),h;for(var d=h._getSoundIds(l),f=0;f<d.length;f++){h._clearTimer(d[f]);var _=h._soundById(d[f]);if(_&&!_._paused&&(_._seek=h.seek(d[f]),_._rateSeek=0,_._paused=!0,h._stopFade(d[f]),_._node))if(h._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),h._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||h._emit("pause",_?_._id:null)}return h},stop:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(l)}}),d;for(var f=d._getSoundIds(l),_=0;_<f.length;_++){d._clearTimer(f[_]);var g=d._soundById(f[_]);g&&(g._seek=g._start||0,g._rateSeek=0,g._paused=!0,g._ended=!0,d._stopFade(f[_]),g._node&&(d._webAudio?g._node.bufferSource&&(typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),d._cleanBuffer(g._node)):(!isNaN(g._node.duration)||g._node.duration===1/0)&&(g._node.currentTime=g._start||0,g._node.pause(),g._node.duration===1/0&&d._clearSound(g._node))),h||d._emit("stop",g._id))}return d},mute:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(l,h)}}),d;if(typeof h>"u")if(typeof l=="boolean")d._muted=l;else return d._muted;for(var f=d._getSoundIds(h),_=0;_<f.length;_++){var g=d._soundById(f[_]);g&&(g._muted=l,g._interval&&d._stopFade(g._id),d._webAudio&&g._node?g._node.gain.setValueAtTime(l?0:g._volume,t.ctx.currentTime):g._node&&(g._node.muted=t._muted?!0:l),d._emit("mute",g._id))}return d},volume:function(){var l=this,h=arguments,d,f;if(h.length===0)return l._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?f=parseInt(h[0],10):d=parseFloat(h[0])}else h.length>=2&&(d=parseFloat(h[0]),f=parseInt(h[1],10));var m;if(typeof d<"u"&&d>=0&&d<=1){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"volume",action:function(){l.volume.apply(l,h)}}),l;typeof f>"u"&&(l._volume=d),f=l._getSoundIds(f);for(var x=0;x<f.length;x++)m=l._soundById(f[x]),m&&(m._volume=d,h[2]||l._stopFade(f[x]),l._webAudio&&m._node&&!m._muted?m._node.gain.setValueAtTime(d,t.ctx.currentTime):m._node&&!m._muted&&(m._node.volume=d*t.volume()),l._emit("volume",m._id))}else return m=f?l._soundById(f):l._sounds[0],m?m._volume:0;return l},fade:function(l,h,d,f){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(l,h,d,f)}}),_;l=Math.min(Math.max(0,parseFloat(l)),1),h=Math.min(Math.max(0,parseFloat(h)),1),d=parseFloat(d),_.volume(l,f);for(var g=_._getSoundIds(f),m=0;m<g.length;m++){var x=_._soundById(g[m]);if(x){if(f||_._stopFade(g[m]),_._webAudio&&!x._muted){var y=t.ctx.currentTime,M=y+d/1e3;x._volume=l,x._node.gain.setValueAtTime(l,y),x._node.gain.linearRampToValueAtTime(h,M)}_._startFadeInterval(x,l,h,d,g[m],typeof f>"u")}}return _},_startFadeInterval:function(l,h,d,f,_,g){var m=this,x=h,y=d-h,M=Math.abs(y/.01),P=Math.max(4,M>0?f/M:f),S=Date.now();l._fadeTo=d,l._interval=setInterval(function(){var E=(Date.now()-S)/f;S=Date.now(),x+=y*E,x=Math.round(x*100)/100,y<0?x=Math.max(d,x):x=Math.min(d,x),m._webAudio?l._volume=x:m.volume(x,l._id,!0),g&&(m._volume=x),(d<h&&x<=d||d>h&&x>=d)&&(clearInterval(l._interval),l._interval=null,l._fadeTo=null,m.volume(d,l._id),m._emit("fade",l._id))},P)},_stopFade:function(l){var h=this,d=h._soundById(l);return d&&d._interval&&(h._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,h.volume(d._fadeTo,l),d._fadeTo=null,h._emit("fade",l)),h},loop:function(){var l=this,h=arguments,d,f,_;if(h.length===0)return l._loop;if(h.length===1)if(typeof h[0]=="boolean")d=h[0],l._loop=d;else return _=l._soundById(parseInt(h[0],10)),_?_._loop:!1;else h.length===2&&(d=h[0],f=parseInt(h[1],10));for(var g=l._getSoundIds(f),m=0;m<g.length;m++)_=l._soundById(g[m]),_&&(_._loop=d,l._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,l.playing(g[m])&&(l.pause(g[m],!0),l.play(g[m],!0)))));return l},rate:function(){var l=this,h=arguments,d,f;if(h.length===0)f=l._sounds[0]._id;else if(h.length===1){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?f=parseInt(h[0],10):d=parseFloat(h[0])}else h.length===2&&(d=parseFloat(h[0]),f=parseInt(h[1],10));var m;if(typeof d=="number"){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"rate",action:function(){l.rate.apply(l,h)}}),l;typeof f>"u"&&(l._rate=d),f=l._getSoundIds(f);for(var x=0;x<f.length;x++)if(m=l._soundById(f[x]),m){l.playing(f[x])&&(m._rateSeek=l.seek(f[x]),m._playStart=l._webAudio?t.ctx.currentTime:m._playStart),m._rate=d,l._webAudio&&m._node&&m._node.bufferSource?m._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):m._node&&(m._node.playbackRate=d);var y=l.seek(f[x]),M=(l._sprite[m._sprite][0]+l._sprite[m._sprite][1])/1e3-y,P=M*1e3/Math.abs(m._rate);(l._endTimers[f[x]]||!m._paused)&&(l._clearTimer(f[x]),l._endTimers[f[x]]=setTimeout(l._ended.bind(l,m),P)),l._emit("rate",m._id)}}else return m=l._soundById(f),m?m._rate:l._rate;return l},seek:function(){var l=this,h=arguments,d,f;if(h.length===0)l._sounds.length&&(f=l._sounds[0]._id);else if(h.length===1){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?f=parseInt(h[0],10):l._sounds.length&&(f=l._sounds[0]._id,d=parseFloat(h[0]))}else h.length===2&&(d=parseFloat(h[0]),f=parseInt(h[1],10));if(typeof f>"u")return 0;if(typeof d=="number"&&(l._state!=="loaded"||l._playLock))return l._queue.push({event:"seek",action:function(){l.seek.apply(l,h)}}),l;var m=l._soundById(f);if(m)if(typeof d=="number"&&d>=0){var x=l.playing(f);x&&l.pause(f,!0),m._seek=d,m._ended=!1,l._clearTimer(f),!l._webAudio&&m._node&&!isNaN(m._node.duration)&&(m._node.currentTime=d);var y=function(){x&&l.play(f,!0),l._emit("seek",f)};if(x&&!l._webAudio){var M=function(){l._playLock?setTimeout(M,0):y()};setTimeout(M,0)}else y()}else if(l._webAudio){var P=l.playing(f)?t.ctx.currentTime-m._playStart:0,S=m._rateSeek?m._rateSeek-m._seek:0;return m._seek+(S+P*Math.abs(m._rate))}else return m._node.currentTime;return l},playing:function(l){var h=this;if(typeof l=="number"){var d=h._soundById(l);return d?!d._paused:!1}for(var f=0;f<h._sounds.length;f++)if(!h._sounds[f]._paused)return!0;return!1},duration:function(l){var h=this,d=h._duration,f=h._soundById(l);return f&&(d=h._sprite[f._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var l=this,h=l._sounds,d=0;d<h.length;d++)h[d]._paused||l.stop(h[d]._id),l._webAudio||(l._clearSound(h[d]._node),h[d]._node.removeEventListener("error",h[d]._errorFn,!1),h[d]._node.removeEventListener(t._canPlayEvent,h[d]._loadFn,!1),h[d]._node.removeEventListener("ended",h[d]._endFn,!1),t._releaseHtml5Audio(h[d]._node)),delete h[d]._node,l._clearTimer(h[d]._id);var f=t._howls.indexOf(l);f>=0&&t._howls.splice(f,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===l._src||l._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return o&&_&&delete o[l._src],t.noAudio=!1,l._state="unloaded",l._sounds=[],l=null,null},on:function(l,h,d,f){var _=this,g=_["_on"+l];return typeof h=="function"&&g.push(f?{id:d,fn:h,once:f}:{id:d,fn:h}),_},off:function(l,h,d){var f=this,_=f["_on"+l],g=0;if(typeof h=="number"&&(d=h,h=null),h||d)for(g=0;g<_.length;g++){var m=d===_[g].id;if(h===_[g].fn&&m||!h&&m){_.splice(g,1);break}}else if(l)f["_on"+l]=[];else{var x=Object.keys(f);for(g=0;g<x.length;g++)x[g].indexOf("_on")===0&&Array.isArray(f[x[g]])&&(f[x[g]]=[])}return f},once:function(l,h,d){var f=this;return f.on(l,h,d,1),f},_emit:function(l,h,d){for(var f=this,_=f["_on"+l],g=_.length-1;g>=0;g--)(!_[g].id||_[g].id===h||l==="load")&&(setTimeout((function(m){m.call(this,h,d)}).bind(f,_[g].fn),0),_[g].once&&f.off(l,_[g].fn,_[g].id));return f._loadQueue(l),f},_loadQueue:function(l){var h=this;if(h._queue.length>0){var d=h._queue[0];d.event===l&&(h._queue.shift(),h._loadQueue()),l||d.action()}return h},_ended:function(l){var h=this,d=l._sprite;if(!h._webAudio&&l._node&&!l._node.paused&&!l._node.ended&&l._node.currentTime<l._stop)return setTimeout(h._ended.bind(h,l),100),h;var f=!!(l._loop||h._sprite[d][2]);if(h._emit("end",l._id),!h._webAudio&&f&&h.stop(l._id,!0).play(l._id),h._webAudio&&f){h._emit("play",l._id),l._seek=l._start||0,l._rateSeek=0,l._playStart=t.ctx.currentTime;var _=(l._stop-l._start)*1e3/Math.abs(l._rate);h._endTimers[l._id]=setTimeout(h._ended.bind(h,l),_)}return h._webAudio&&!f&&(l._paused=!0,l._ended=!0,l._seek=l._start||0,l._rateSeek=0,h._clearTimer(l._id),h._cleanBuffer(l._node),t._autoSuspend()),!h._webAudio&&!f&&h.stop(l._id,!0),h},_clearTimer:function(l){var h=this;if(h._endTimers[l]){if(typeof h._endTimers[l]!="function")clearTimeout(h._endTimers[l]);else{var d=h._soundById(l);d&&d._node&&d._node.removeEventListener("ended",h._endTimers[l],!1)}delete h._endTimers[l]}return h},_soundById:function(l){for(var h=this,d=0;d<h._sounds.length;d++)if(l===h._sounds[d]._id)return h._sounds[d];return null},_inactiveSound:function(){var l=this;l._drain();for(var h=0;h<l._sounds.length;h++)if(l._sounds[h]._ended)return l._sounds[h].reset();return new r(l)},_drain:function(){var l=this,h=l._pool,d=0,f=0;if(!(l._sounds.length<h)){for(f=0;f<l._sounds.length;f++)l._sounds[f]._ended&&d++;for(f=l._sounds.length-1;f>=0;f--){if(d<=h)return;l._sounds[f]._ended&&(l._webAudio&&l._sounds[f]._node&&l._sounds[f]._node.disconnect(0),l._sounds.splice(f,1),d--)}}},_getSoundIds:function(l){var h=this;if(typeof l>"u"){for(var d=[],f=0;f<h._sounds.length;f++)d.push(h._sounds[f]._id);return d}else return[l]},_refreshBuffer:function(l){var h=this;return l._node.bufferSource=t.ctx.createBufferSource(),l._node.bufferSource.buffer=o[h._src],l._panner?l._node.bufferSource.connect(l._panner):l._node.bufferSource.connect(l._node),l._node.bufferSource.loop=l._loop,l._loop&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop||0),l._node.bufferSource.playbackRate.setValueAtTime(l._rate,t.ctx.currentTime),h},_cleanBuffer:function(l){var h=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!l.bufferSource)return h;if(t._scratchBuffer&&l.bufferSource&&(l.bufferSource.onended=null,l.bufferSource.disconnect(0),d))try{l.bufferSource.buffer=t._scratchBuffer}catch{}return l.bufferSource=null,h},_clearSound:function(l){var h=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);h||(l.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(l){this._parent=l,this.init()};r.prototype={init:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,h._sounds.push(l),l.create(),l},create:function(){var l=this,h=l._parent,d=t._muted||l._muted||l._parent._muted?0:l._volume;return h._webAudio?(l._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),l._node.gain.setValueAtTime(d,t.ctx.currentTime),l._node.paused=!0,l._node.connect(t.masterGain)):t.noAudio||(l._node=t._obtainHtml5Audio(),l._errorFn=l._errorListener.bind(l),l._node.addEventListener("error",l._errorFn,!1),l._loadFn=l._loadListener.bind(l),l._node.addEventListener(t._canPlayEvent,l._loadFn,!1),l._endFn=l._endListener.bind(l),l._node.addEventListener("ended",l._endFn,!1),l._node.src=h._src,l._node.preload=h._preload===!0?"auto":h._preload,l._node.volume=d*t.volume(),l._node.load()),l},reset:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._rateSeek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,l},_errorListener:function(){var l=this;l._parent._emit("loaderror",l._id,l._node.error?l._node.error.code:0),l._node.removeEventListener("error",l._errorFn,!1)},_loadListener:function(){var l=this,h=l._parent;h._duration=Math.ceil(l._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),l._node.removeEventListener(t._canPlayEvent,l._loadFn,!1)},_endListener:function(){var l=this,h=l._parent;h._duration===1/0&&(h._duration=Math.ceil(l._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(l)),l._node.removeEventListener("ended",l._endFn,!1)}};var o={},a=function(l){var h=l._src;if(o[h]){l._duration=o[h].duration,u(l);return}if(/^data:[^;]+;base64,/.test(h)){for(var d=atob(h.split(",")[1]),f=new Uint8Array(d.length),_=0;_<d.length;++_)f[_]=d.charCodeAt(_);c(f.buffer,l)}else{var g=new XMLHttpRequest;g.open(l._xhr.method,h,!0),g.withCredentials=l._xhr.withCredentials,g.responseType="arraybuffer",l._xhr.headers&&Object.keys(l._xhr.headers).forEach(function(m){g.setRequestHeader(m,l._xhr.headers[m])}),g.onload=function(){var m=(g.status+"")[0];if(m!=="0"&&m!=="2"&&m!=="3"){l._emit("loaderror",null,"Failed loading audio file with status: "+g.status+".");return}c(g.response,l)},g.onerror=function(){l._webAudio&&(l._html5=!0,l._webAudio=!1,l._sounds=[],delete o[h],l.load())},s(g)}},s=function(l){try{l.send()}catch{l.onerror()}},c=function(l,h){var d=function(){h._emit("loaderror",null,"Decoding audio data failed.")},f=function(_){_&&h._sounds.length>0?(o[h._src]=_,u(h,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(l).then(f).catch(d):t.ctx.decodeAudioData(l,f,d)},u=function(l,h){h&&!l._duration&&(l._duration=h.duration),Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue())},p=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var l=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),h=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=h?parseInt(h[1],10):null;if(l&&d&&d<9){var f=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!f&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};n.Howler=t,n.Howl=i,typeof Ea<"u"?(Ea.HowlerGlobal=e,Ea.Howler=t,Ea.Howl=i,Ea.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=i,window.Sound=r)})();/*!
*  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
*  
*  howler.js v2.2.4
*  howlerjs.com
*
*  (c) 2013-2020, James Simpson of GoldFire Studios
*  goldfirestudios.com
*
*  MIT License
*/(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var i=this;if(!i.ctx||!i.ctx.listener)return i;for(var r=i._howls.length-1;r>=0;r--)i._howls[r].stereo(t);return i},HowlerGlobal.prototype.pos=function(t,i,r){var o=this;if(!o.ctx||!o.ctx.listener)return o;if(i=typeof i!="number"?o._pos[1]:i,r=typeof r!="number"?o._pos[2]:r,typeof t=="number")o._pos=[t,i,r],typeof o.ctx.listener.positionX<"u"?(o.ctx.listener.positionX.setTargetAtTime(o._pos[0],Howler.ctx.currentTime,.1),o.ctx.listener.positionY.setTargetAtTime(o._pos[1],Howler.ctx.currentTime,.1),o.ctx.listener.positionZ.setTargetAtTime(o._pos[2],Howler.ctx.currentTime,.1)):o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]);else return o._pos;return o},HowlerGlobal.prototype.orientation=function(t,i,r,o,a,s){var c=this;if(!c.ctx||!c.ctx.listener)return c;var u=c._orientation;if(i=typeof i!="number"?u[1]:i,r=typeof r!="number"?u[2]:r,o=typeof o!="number"?u[3]:o,a=typeof a!="number"?u[4]:a,s=typeof s!="number"?u[5]:s,typeof t=="number")c._orientation=[t,i,r,o,a,s],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(i,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(o,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(s,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(t,i,r,o,a,s);else return u;return c},Howl.prototype.init=function(t){return function(i){var r=this;return r._orientation=i.orientation||[1,0,0],r._stereo=i.stereo||null,r._pos=i.pos||null,r._pannerAttr={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:360,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:360,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:0,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:"inverse",maxDistance:typeof i.maxDistance<"u"?i.maxDistance:1e4,panningModel:typeof i.panningModel<"u"?i.panningModel:"HRTF",refDistance:typeof i.refDistance<"u"?i.refDistance:1,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:1},r._onstereo=i.onstereo?[{fn:i.onstereo}]:[],r._onpos=i.onpos?[{fn:i.onpos}]:[],r._onorientation=i.onorientation?[{fn:i.onorientation}]:[],t.call(this,i)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,i){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,i)}}),r;var o=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof i>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var a=r._getSoundIds(i),s=0;s<a.length;s++){var c=r._soundById(a[s]);if(c)if(typeof t=="number")c._stereo=t,c._pos=[t,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&e(c,o),o==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(t,0,0):c._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",c._id);else return c._stereo}return r},Howl.prototype.pos=function(t,i,r,o){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,i,r,o)}}),a;if(i=typeof i!="number"?0:i,r=typeof r!="number"?-.5:r,typeof o>"u")if(typeof t=="number")a._pos=[t,i,r];else return a._pos;for(var s=a._getSoundIds(o),c=0;c<s.length;c++){var u=a._soundById(s[c]);if(u)if(typeof t=="number")u._pos=[t,i,r],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(i,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setPosition(t,i,r)),a._emit("pos",u._id);else return u._pos}return a},Howl.prototype.orientation=function(t,i,r,o){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,i,r,o)}}),a;if(i=typeof i!="number"?a._orientation[1]:i,r=typeof r!="number"?a._orientation[2]:r,typeof o>"u")if(typeof t=="number")a._orientation=[t,i,r];else return a._orientation;for(var s=a._getSoundIds(o),c=0;c<s.length;c++){var u=a._soundById(s[c]);if(u)if(typeof t=="number")u._orientation=[t,i,r],u._node&&(u._panner||(u._pos||(u._pos=a._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(i,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setOrientation(t,i,r)),a._emit("orientation",u._id);else return u._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,i=arguments,r,o,a;if(!t._webAudio)return t;if(i.length===0)return t._pannerAttr;if(i.length===1)if(typeof i[0]=="object")r=i[0],typeof o>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(i[0],10)),a?a._pannerAttr:t._pannerAttr;else i.length===2&&(r=i[0],o=parseInt(i[1],10));for(var s=t._getSoundIds(o),c=0;c<s.length;c++)if(a=t._soundById(s[c]),a){var u=a._pannerAttr;u={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:u.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:u.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:u.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:u.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:u.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:u.panningModel};var p=a._panner;p||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),p=a._panner),p.coneInnerAngle=u.coneInnerAngle,p.coneOuterAngle=u.coneOuterAngle,p.coneOuterGain=u.coneOuterGain,p.distanceModel=u.distanceModel,p.maxDistance=u.maxDistance,p.refDistance=u.refDistance,p.rolloffFactor=u.rolloffFactor,p.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var i=this,r=i._parent;i._orientation=r._orientation,i._stereo=r._stereo,i._pos=r._pos,i._pannerAttr=r._pannerAttr,t.call(this),i._stereo?r.stereo(i._stereo):i._pos&&r.pos(i._pos[0],i._pos[1],i._pos[2],i._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var i=this,r=i._parent;return i._orientation=r._orientation,i._stereo=r._stereo,i._pos=r._pos,i._pannerAttr=r._pannerAttr,i._stereo?r.stereo(i._stereo):i._pos?r.pos(i._pos[0],i._pos[1],i._pos[2],i._id):i._panner&&(i._panner.disconnect(0),i._panner=void 0,r._refreshBuffer(i)),t.call(this)}}(Sound.prototype.reset);var e=function(t,i){i=i||"spatial",i==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Aa);const mb=fb(Aa),vt=function(n,e){return new Promise((t,i)=>{n.gltfLoader.load(e,r=>{r.scene.traverse(a=>{a.isMesh&&a.material.isMeshStandardMaterial&&(a.castShadow=!0,a.receiveShadow=!0)});const o=new sn;o.add(r.scene),t(o)})})};class gb{constructor(e){this.game=e}async load(e){let t=[];for(let r=0;r<e.models.length;r++){let o=e.tiles.reduce((p,l)=>l.model==r?++p:p,0);if(o==0){console.warn(`model ${e.models[r]} at index ${r} not used.`);continue}let a=e.models[r];const s=await vt(this.game,a);let c;s.traverse(p=>{if(p.isMesh){c=p;return}});const u=new rc(c.geometry,c.material,o);u.receiveShadow=!0,t[r]=u}const i=new et;return e.models.forEach((r,o)=>{e.tiles.filter(a=>a.model==o).forEach((a,s)=>{const c=new O(a.position[0]*4,a.position[1],a.position[2]*4),u=new yi;u.setFromAxisAngle(ct.DEFAULT_UP,a.rotation);const p=new O(1,1,1);i.compose(c,u,p),t[o].setMatrixAt(s,i)})}),e.meta.shadow.forEach(r=>{t[r]&&(t[r].castShadow=!0,t[r].receiveShadow=!0)}),t}}const _b=async(n,e)=>{let t=await new Promise((i,r)=>{n.rgbeLoader.load(e,(o,a)=>{i(o,a)})});t.mapping=Ba,n.scene.background=t,n.scene.environment=t};class vb{constructor(e,t){this.ingredientInfo=e,this.model=null,this.game=t}getName(){return this.ingredientInfo.name}async spawn(e,t){return this.model=await vt(this.game,this.ingredientInfo.model),this.shelfSlot=e,this.model.position.x=e.position.x,this.model.position.y=e.position.y,this.model.position.z=e.position.z,this.game.scene.add(this.model),this.model}beginBrew(){this.model.moving=!0,clearTimeout(this.model.timeoutId),Oe.to(this.model.scale,{duration:2.5,x:0,y:0,z:0,onComplete:()=>{this.model.visible=!1,this.model.timeoutId=setTimeout(()=>{this.model.position.x=this.shelfSlot.position.x,this.model.position.y=this.ingredientInfo.wobble.amplitude*Math.sin(this.ingredientInfo.wobble.frequency*this.game.clock.getElapsedTime()+700)+(this.shelfSlot.position.y+this.ingredientInfo.shelfOffset),this.model.position.z=this.shelfSlot.position.z,this.model.visible=!0,Oe.to(this.model.scale,{duration:.7,x:1,y:1,z:1,ease:"bounce",onComplete:()=>{this.model.moving=!1}})},3e3)}}),Oe.to(this.model.position,{duration:1.5,motionPath:this.shelfSlot.motionPath,onComplete:()=>{}})}wobble(){this.model.moving||(this.model.position.y=this.ingredientInfo.wobble.amplitude*Math.sin(this.ingredientInfo.wobble.frequency*this.game.clock.getElapsedTime())+(this.shelfSlot.position.y+this.ingredientInfo.shelfOffset),this.model.rotateOnAxis(new O(0,1,0),-this.ingredientInfo.wobble.rotation))}}Array.prototype.equals=function(n,e=!0){if(!n||this.length!=n.length)return!1;for(var t=0;t<this.length;t++){if(e&&this[t]!=n[t])return!1;if(!e)return this.sort().equals(n.sort(),!0)}return!0},Array.prototype.remove=function(n){const e=this.indexOf(n);e!=-1?this.splice(e,1):console.warn(`did not find ${n} in array ${this}`)},Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]},Array.prototype.shuffle=function(){let n,e;for(let t=this.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),e=this[t],this[t]=this[n],this[n]=e;return this};var yb=`attribute float aScale;

uniform float uPixelRatio;\r
uniform float uTime;

void main()\r
{\r
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.1;\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;\r
    gl_PointSize = 100.0 * aScale * uPixelRatio;\r
    gl_PointSize *= (1.0  / -viewPosition.z);\r
}`,xb=`void main()\r
{\r
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\r
    float strength = 0.05 / distanceToCenter - 0.1;\r
    gl_FragColor = vec4(1.0, 1.0, 1.0, strength);

    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`,Tb=`attribute float aScale;

uniform float uPixelRatio;\r
uniform float uTime;

void main()\r
{

    vec4 mvPosition = vec4(position, 1.0);\r
    #ifdef USE_INSTANCING\r
	     mvPosition = instanceMatrix * mvPosition;\r
     #endif\r
    vec4 modelPosition = modelMatrix * mvPosition;\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;\r
}`,Mb=`uniform float uBlendTime;\r
uniform vec3 uPotionColor;\r
uniform vec3 uNextPotionColor;\r
uniform float uTransparency;

void main()\r
{\r
    gl_FragColor = vec4(mix(uPotionColor, uNextPotionColor, uBlendTime), uTransparency);\r
}`;function bb(n,e){document.getElementById("prev").addEventListener("click",t=>{Vs(n,e)}),document.getElementById("next").addEventListener("click",t=>{du(n,e)})}function Sb(n,e){document.getElementById("room-navigation").style.display="block"}function wb(n,e){document.getElementById("room-navigation").style.display="none",document.getElementById("prev").style.display="block",document.getElementById("next").style.display="block",document.getElementById("prev-text").innerHTML="Shop",document.getElementById("next-text").innerHTML="Market"}function Vs(n,e){switch(e.currentRoom){case vi:hr(kr),document.getElementById("prev").style.display="none",document.getElementById("next-text").innerHTML="Brew";break;case ur:hr(vi),document.getElementById("next").style.display="block",document.getElementById("prev-text").innerHTML="Shop";break}}function du(n,e){switch(e.currentRoom){case vi:hr(ur),document.getElementById("next").style.display="none",document.getElementById("prev-text").innerHTML="Brew";break;case kr:hr(vi),document.getElementById("prev").style.display="block",document.getElementById("next-text").innerHTML="Market";break}}function Eb(n,e){document.getElementById("game-status-container").style.display="flex"}function Ab(n,e){document.getElementById("game-status-container").style.display="none"}function Ra(n,e){document.getElementById("currency-progress").value=e.currency,document.getElementById("currency-progress").title=e.currency,document.getElementById("current-day-text").innerHTML=`day ${e.currentDay}`}function tm(n){n.brewTutorial1.alreadySeen||(n.brewInactivityHandle=setTimeout(()=>{Oe.to(n.brewTutorial1.material,{duration:1.5,opacity:1,onStart:()=>{n.brewTutorial1.castShadow=!0}})},5e3))}async function Rb(n,e){const t=document.getElementById("main-menu-container");document.getElementById("play-button").addEventListener("click",()=>{tm(e),Pb(),Sb(),Eb();const i=e.cameraPositions[1];Oe.to(n.camera.position,{duration:2.5,x:i.camera.x,y:i.camera.y,z:i.camera.z}),Oe.to(n.lookAtFocus,{duration:2.5,x:i.focus.x,y:i.focus.y,z:i.focus.z})}),document.getElementById("reset-save-button").addEventListener("click",()=>{confirm("Are you sure you want to delete your Spookonomics save data? This cannot be undone.")&&(lm(e),cm(e))}),t.addEventListener("click",i=>{i.stopPropagation()})}async function Cb(n,e){const t=document.getElementById("main-menu-container");t.style.display="block";const i=document.getElementById("main-menu-display");i.style.opacity=0,Oe.to(i,{opacity:1,duration:.8})}async function Pb(n,e){const t=document.getElementById("main-menu-container"),i=document.getElementById("main-menu-display");Oe.to(i,{opacity:0,duration:.8,onComplete:()=>{t.style.display="none"}})}const Lb={image:"./images/potion_unknown.png",title:"Unknown",properties:[]};function pu(n,e){const t=document.getElementById("brew-selected-container").children;for(let i=0;i<t.length;i++)t[i].classList.add("disabled"),t[i].getElementsByClassName("disabled-selected-ingredient")[0].style.display="block",t[i].getElementsByClassName("active-selected-ingredient")[0].style.display="none";for(let i=0;i<e.selectedIngredients.length;i++){const r=e.selectedIngredients[i],o=e.ingredientInfo[r];t[i].classList.remove("disabled"),t[i].getElementsByClassName("disabled-selected-ingredient")[0].style.display="none";const a=t[i].getElementsByClassName("active-selected-ingredient")[0];a.style.display="flex",a.getElementsByClassName("selected-ingredient-image")[0].getElementsByTagName("img")[0].src=o.image,a.getElementsByClassName("selected-ingredient-description")[0].getElementsByTagName("h2")[0].innerText=o.title,a.getElementsByClassName("selected-ingredient-description")[0].getElementsByTagName("p")[0].innerText=o.description}}function fu(n,e){const t=e.potionInfo.filter(c=>e.selectedIngredients.equals(c.ingredients,!1));let i=Lb;e.potionToBrew=null,t.length==1&&(i=t[0],e.potionToBrew=i),document.getElementById("potion-icon").innerHTML="";let r=document.createElement("img");r.src=i.image,document.getElementById("potion-icon").appendChild(r);const o={};e.potionInventory.forEach(c=>{o[c]?o[c]++:o[c]=1});const a=o[i.name]??0,s=document.getElementById("potion-icon-container").getElementsByClassName("potion-inventory-count")[0];a==0?s.style.display="none":(s.style.display="block",s.innerHTML=a),document.getElementById("potion-name").innerText=i.title,document.getElementById("potion-properties-list").innerHTML="",i.properties.forEach(c=>{let u=document.createElement("li");u.innerText=c,document.getElementById("potion-properties-list").appendChild(u)})}async function Ib(n,e){document.getElementById("brew-container").addEventListener("click",()=>{Br(n,e)}),document.getElementById("brew-right-side").addEventListener("click",r=>{r.stopPropagation()});const t=document.getElementById("brew-selected-container").children,i=document.getElementById("brew-ingredients-container").children;for(const r of i)r.addEventListener("click",o=>{if(o.stopPropagation(),e.selectedIngredients.length<2){e.soundEffects["audio/click1.ogg"].play();const a=r.getAttribute("data-ingredient");e.selectedIngredients.push(a),pu(n,e)}fu(n,e)});for(let r=0;r<t.length;r++){const o=t[r];o.addEventListener("click",a=>{a.stopPropagation(),!o.classList.contains("disabled")&&(e.soundEffects["audio/click1.ogg"].play(),e.selectedIngredients.splice(r,1),pu(n,e),fu(n,e))})}document.getElementById("start-brew").addEventListener("click",()=>{e.beginBrew()})}async function im(n,e){if(e.cauldron.brewMenuOpen)return;const t=document.getElementById("brew-container");if(t.style.display="block",n.canvas.clientWidth>=1024){let r=e.cameraPositions[e.currentRoom-1];Oe.to(n.lookAtFocus,{x:r.focus.x+2.5,duration:.8}),Oe.to(n.camera.position,{x:r.camera.x+2.5,duration:.8})}else{let r=e.cameraPositions[e.currentRoom-1];Oe.to(n.lookAtFocus,{y:r.focus.y-1.5,duration:.8}),Oe.to(n.camera.position,{y:r.camera.y-1.5,duration:.8})}pu(n,e),fu(n,e);const i=document.getElementById("brew-right-side");Oe.to(i,{x:0,duration:.8,onComplete:()=>{e.cauldron.brewMenuOpen=!0}})}async function Br(n,e){if(!e.cauldron.brewMenuOpen)return;e.cauldron.brewMenuOpen=!1;const t=document.getElementById("brew-container");if(n.canvas.clientWidth>=1024){let r=e.cameraPositions[e.currentRoom-1];Oe.to(n.lookAtFocus,{x:r.focus.x,duration:.8}),Oe.to(n.camera.position,{x:r.camera.x,duration:.8})}else{let r=e.cameraPositions[e.currentRoom-1];Oe.to(n.lookAtFocus,{y:r.focus.y,duration:.8}),Oe.to(n.camera.position,{y:r.camera.y,duration:.8})}const i=document.getElementById("brew-right-side");Oe.to(i,{x:1024,duration:.8,onComplete:()=>{t.style.display="none"}})}function Ub(n){n.shopTutorial1.alreadySeen||(n.shopInactivityHandle=setTimeout(()=>{Oe.to(n.shopTutorial1.material,{duration:1.5,opacity:1,onStart:()=>{n.shopTutorial1.castShadow=!0}})},5e3))}async function Nb(n,e){document.getElementById("shop-container").addEventListener("click",()=>{Ca(n,e)}),document.getElementById("shop-panel").addEventListener("click",t=>{t.stopPropagation()}),document.getElementById("start-selling").addEventListener("click",t=>{e.beginSell()})}function mu(n,e){const t=document.getElementById("shop-potions-container");t.innerHTML="";const i={};e.potionInventory.forEach(o=>{i[o]?i[o]++:i[o]=1}),Object.keys(i).forEach(o=>{const a=e.potionInfo.find(p=>p.name==o),s=document.createElement("div");s.className="potion-container",s.title=a.title,s.setAttribute("data-potion",a.name);const c=document.createElement("img");c.src=a.image,c.title=a.title;const u=document.createElement("div");u.className="potion-inventory-count",u.innerHTML=`${i[o]}`,s.appendChild(c),s.appendChild(u),t.appendChild(s)});const r=document.getElementById("shop-potions-container").children;for(const o of r)o.addEventListener("click",a=>{if(a.stopPropagation(),e.potionStocked.length<6){e.soundEffects["audio/click1.ogg"].play();const s=o.getAttribute("data-potion");qs(e.potionStocked,"potion-stocked",s),Tu(e.potionInventory,"potion-inventory",s),e.potionInventory.sort(),e.potionStocked.sort()}mu(n,e),gu(n,e)})}function gu(n,e){const t=document.getElementById("shop-shelves-container");t.innerHTML="";let i=0;for(let o=0;o<6;o++){if(i%2==0){const l=document.createElement("div");l.className="shop-shelf",t.appendChild(l)}const a=t.getElementsByClassName("shop-shelf")[Math.floor(i/2)];i++;const s=e.potionStocked[o];if(!s){const l=document.createElement("div");l.className="stocked-potion-container disabled-stocked-potion",a.appendChild(l);continue}const c=e.potionInfo.find(l=>l.name==s),u=document.createElement("div");u.className="stocked-potion-container",u.title=c.title,u.setAttribute("data-potion",c.name);const p=document.createElement("img");p.src=c.image,p.title=c.title,u.appendChild(p),a.appendChild(u)}const r=document.getElementById("shop-shelves-container").getElementsByClassName("stocked-potion-container");for(const o of r)o.classList.contains("disabled-stocked-potion")||o.addEventListener("click",a=>{if(a.stopPropagation(),e.potionStocked.length>0){e.soundEffects["audio/click1.ogg"].play();const s=o.getAttribute("data-potion");Tu(e.potionStocked,"potion-stocked",s),qs(e.potionInventory,"potion-inventory",s),e.potionInventory.sort(),e.potionStocked.sort()}mu(n,e),gu(n,e)});js()}async function nm(n,e){const t=document.getElementById("shop-container");t.style.display="block",mu(n,e),gu(n,e);const i=document.getElementById("shop-panel");Oe.to(i,{x:0,duration:.8,onComplete:()=>{e.chest.isStocking=!0}})}async function Ca(n,e){e.chest.isStocking=!1;const t=document.getElementById("shop-panel");Oe.to(t,{x:1024,duration:.8,onComplete:()=>{const i=document.getElementById("shop-container");i.style.display="none"}})}const Db=["models/floor_tile_large.gltf.glb","models/wall_shelves.gltf.glb","models/wall_inset_shelves.gltf.glb","models/wall_inset_shelves_decoratedA.gltf.glb","models/kitchencounter_straight_B_styleB.gltf","models/wall_pillar.gltf.glb","models/wall_arched.gltf.glb","models/floor_dirt_large.gltf.glb","models/tree_pine_yellow_large.gltf","models/tree_pine_orange_large.gltf","models/maze_short.gltf","models/maze_tall.gltf","models/wall.gltf.glb","models/shelves.gltf.glb"],Ob={shadow:[8,9,10,11,13]},Fb=[{model:0,position:[-1,0,-.5],rotation:0},{model:0,position:[-1,0,.5],rotation:0},{model:0,position:[-1,0,1.5],rotation:0},{model:0,position:[0,0,-.5],rotation:0},{model:0,position:[0,0,.5],rotation:0},{model:0,position:[0,0,1.5],rotation:0},{model:0,position:[1,0,-.5],rotation:0},{model:0,position:[1,0,.5],rotation:0},{model:0,position:[1,0,1.5],rotation:0},{model:0,position:[1,0,-.5],rotation:0},{model:0,position:[1,0,.5],rotation:0},{model:0,position:[1,0,1.5],rotation:0},{model:2,position:[-1.5,0,.5],rotation:1.5707963267948966},{model:3,position:[-1.5,0,1.5],rotation:1.5707963267948966},{model:12,position:[-1,0,-1],rotation:0},{model:13,position:[-1,0,-1],rotation:0},{model:2,position:[0,0,-1],rotation:0},{model:3,position:[1,0,-1],rotation:0},{model:1,position:[1.5,0,-.5],rotation:-1.5707963267948966},{model:2,position:[1.5,0,1.5],rotation:-1.5707963267948966},{model:0,position:[-4,0,-.5],rotation:0},{model:0,position:[-4,0,.5],rotation:0},{model:0,position:[-4,0,1.5],rotation:0},{model:0,position:[-3,0,-.5],rotation:0},{model:0,position:[-3,0,.5],rotation:0},{model:0,position:[-3,0,1.5],rotation:0},{model:0,position:[-2,0,-.5],rotation:0},{model:0,position:[-2,0,.5],rotation:0},{model:0,position:[-2,0,1.5],rotation:0},{model:5,position:[-4.5,0,-.5],rotation:1.5707963267948966},{model:5,position:[-4.5,0,.5],rotation:1.5707963267948966},{model:5,position:[-4.5,0,1.5],rotation:1.5707963267948966},{model:3,position:[-4,0,-1],rotation:0},{model:13,position:[-3,0,-1],rotation:0},{model:12,position:[-3,0,-1],rotation:0},{model:12,position:[-2,0,-1],rotation:0},{model:13,position:[-2,0,-1],rotation:0},{model:4,position:[-4,0,-0],rotation:0},{model:4,position:[-3.5,0,-0],rotation:0},{model:4,position:[-3,0,-0],rotation:0},{model:4,position:[-2.5,0,-0],rotation:0},{model:7,position:[1,0,-6],rotation:0},{model:7,position:[1,0,-5],rotation:0},{model:7,position:[1,0,-4],rotation:0},{model:7,position:[1,0,-3],rotation:0},{model:7,position:[1,0,-2],rotation:0},{model:7,position:[1,0,-1],rotation:0},{model:10,position:[1,0,-6],rotation:0},{model:11,position:[1,0,-5.5],rotation:0},{model:10,position:[1,0,-5],rotation:0},{model:11,position:[1,0,-4.5],rotation:0},{model:11,position:[1,0,-4],rotation:0},{model:10,position:[1,0,-3.5],rotation:0},{model:10,position:[1,0,-3],rotation:0},{model:11,position:[1,0,-2.5],rotation:0},{model:10,position:[1,0,-2],rotation:0},{model:7,position:[2,0,-6],rotation:0},{model:7,position:[2,0,-5],rotation:0},{model:7,position:[2,0,-4],rotation:0},{model:7,position:[2,0,-3],rotation:0},{model:7,position:[2,0,-2],rotation:0},{model:7,position:[2,0,-1],rotation:0},{model:7,position:[2,0,0],rotation:0},{model:7,position:[2,0,1],rotation:0},{model:7,position:[2,0,2],rotation:0},{model:7,position:[3,0,-6],rotation:0},{model:7,position:[3,0,-5],rotation:0},{model:7,position:[3,0,-4],rotation:0},{model:7,position:[3,0,-3],rotation:0},{model:7,position:[3,0,-2],rotation:0},{model:7,position:[3,0,-1],rotation:0},{model:7,position:[3,0,0],rotation:0},{model:7,position:[3,0,1],rotation:0},{model:7,position:[3,0,2],rotation:0},{model:7,position:[4,0,-6],rotation:0},{model:7,position:[4,0,-5],rotation:0},{model:7,position:[4,0,-4],rotation:0},{model:7,position:[4,0,-3],rotation:0},{model:7,position:[4,0,-2],rotation:0},{model:7,position:[4,0,-1],rotation:0},{model:7,position:[4,0,0],rotation:0},{model:7,position:[4,0,1],rotation:0},{model:7,position:[4,0,2],rotation:0},{model:7,position:[5,0,-6],rotation:0},{model:7,position:[5,0,-5],rotation:0},{model:7,position:[5,0,-4],rotation:0},{model:7,position:[5,0,-3],rotation:0},{model:7,position:[5,0,-2],rotation:0},{model:7,position:[5,0,-1],rotation:0},{model:7,position:[5,0,0],rotation:0},{model:7,position:[5,0,1],rotation:0},{model:7,position:[5,0,2],rotation:0},{model:7,position:[5,0,3],rotation:0},{model:11,position:[4.5,0,2.5],rotation:0},{model:11,position:[5,0,2.5],rotation:0},{model:7,position:[6,0,-6],rotation:0},{model:7,position:[6,0,-5],rotation:0},{model:7,position:[6,0,-4],rotation:0},{model:7,position:[6,0,-3],rotation:0},{model:7,position:[6,0,-2],rotation:0},{model:7,position:[6,0,-1],rotation:0},{model:7,position:[6,0,0],rotation:0},{model:7,position:[6,0,1],rotation:0},{model:7,position:[6,0,2],rotation:0},{model:7,position:[6,0,3],rotation:0},{model:10,position:[5.5,0,2.5],rotation:0},{model:11,position:[6,0,2.5],rotation:0},{model:7,position:[7,0,-6],rotation:0},{model:7,position:[7,0,-5],rotation:0},{model:7,position:[7,0,-4],rotation:0},{model:7,position:[7,0,-3],rotation:0},{model:7,position:[7,0,-2],rotation:0},{model:7,position:[7,0,-1],rotation:0},{model:7,position:[7,0,0],rotation:0},{model:7,position:[7,0,1],rotation:0},{model:7,position:[7,0,2],rotation:0},{model:7,position:[7,0,3],rotation:0},{model:10,position:[6.5,0,2.5],rotation:0},{model:10,position:[7,0,2.5],rotation:0},{model:7,position:[8,0,-6],rotation:0},{model:7,position:[8,0,-5],rotation:0},{model:7,position:[8,0,-4],rotation:0},{model:7,position:[8,0,-3],rotation:0},{model:7,position:[8,0,-2],rotation:0},{model:7,position:[8,0,-1],rotation:0},{model:7,position:[8,0,0],rotation:0},{model:7,position:[8,0,1],rotation:0},{model:7,position:[8,0,2],rotation:0},{model:7,position:[8,0,3],rotation:0},{model:7,position:[9,0,-6],rotation:0},{model:7,position:[9,0,-5],rotation:0},{model:7,position:[9,0,-4],rotation:0},{model:7,position:[9,0,-3],rotation:0},{model:7,position:[9,0,-2],rotation:0},{model:7,position:[9,0,-1],rotation:0},{model:7,position:[9,0,0],rotation:0},{model:7,position:[9,0,1],rotation:0},{model:7,position:[9,0,2],rotation:0},{model:7,position:[9,0,3],rotation:0},{model:11,position:[9,0,-3],rotation:0},{model:11,position:[9,0,-2.5],rotation:0},{model:10,position:[9,0,-2],rotation:0},{model:10,position:[9,0,-1.5],rotation:0},{model:11,position:[9,0,-1],rotation:0},{model:11,position:[9,0,-.5],rotation:0},{model:10,position:[9,0,0],rotation:0},{model:11,position:[9,0,.5],rotation:0},{model:10,position:[9,0,1],rotation:0},{model:10,position:[9,0,1.5],rotation:0},{model:10,position:[9,0,2],rotation:0},{model:11,position:[9,0,2.5],rotation:0},{model:11,position:[9,0,3],rotation:0},{model:9,position:[3,0,-3],rotation:0},{model:8,position:[4,0,-1],rotation:5.356194490192345},{model:9,position:[6,0,-2],rotation:3.141592653589793},{model:9,position:[3,0,0],rotation:0},{model:8,position:[8,0,1],rotation:0}],Bb={models:Db,meta:Ob,tiles:Fb},kb={name:"pumpkin",model:"models/pumpkin_orange_small.gltf",image:"./images/ingredient_pumpkin.png",title:"Pumpkin",description:"Makes things pumpkiny",shelfOffset:-.15,wobble:{amplitude:.125,frequency:4,rotation:.01}},zb={name:"tomato",model:"models/food_ingredient_tomato.gltf",image:"./images/ingredient_tomato.png",title:"Tomato",description:"Makes things tomatoy",shelfOffset:-.2,wobble:{amplitude:.125,frequency:3.7,rotation:.01}},Hb={name:"lettuce",model:"models/food_ingredient_lettuce.gltf",image:"./images/ingredient_lettuce.png",title:"Lettuce",description:"Makes things lettucey",shelfOffset:.1,wobble:{amplitude:.0625,frequency:2.7,rotation:.005}},Vb={name:"mushroom",model:"models/food_ingredient_mushroom.gltf",image:"./images/ingredient_mushroom.png",title:"Mushroom",description:"Makes things mushroomy",shelfOffset:.05,wobble:{amplitude:.125,frequency:3.6,rotation:.01}},Gb={pumpkin:kb,tomato:zb,lettuce:Hb,mushroom:Vb},Wb=[{name:"pumpkin-spice",ingredients:["pumpkin","pumpkin"],image:"./images/potion_wide_orange.png",title:"Pumpkin Spice Latte",properties:["Tasty","Basic","Spooky"],model:"models/bottle_C_brown.gltf.glb",color:{r:.8,g:.3,b:0},value:100},{name:"wildendraught",ingredients:["pumpkin","mushroom"],image:"./images/potion_normal_green.png",title:"Wildendraught",properties:["Feral","Unhinged","Carbonated"],model:"models/bottle_B_green.gltf.glb",color:{r:.1,g:.8,b:.1},value:100},{name:"spooksauce",ingredients:["pumpkin","tomato"],image:"./images/potion_narrow_purple.png",title:"Spooksauce",properties:["Haunting","Creepy","Sweet"],model:"models/bottle_A_purple.gltf.glb",color:{r:.7,g:.1,b:.6},value:100},{name:"carrot-juice",ingredients:["pumpkin","lettuce"],image:"./images/potion_narrow_orange.png",title:"Carrot Juice",properties:["Confusing","Unusual","Disturbing"],model:"models/bottle_A_brown.gltf.glb",color:{r:.7,g:.5,b:.1},value:100},{name:"sanguis-damnum",ingredients:["tomato","tomato"],image:"./images/potion_wide_purple.png",title:"Sanguis Damnum",properties:["Coppery","Thick","Hot"],model:"models/bottle_C_purple.gltf.glb",color:{r:.5,g:.1,b:.5},value:100},{name:"freshie",ingredients:["tomato","lettuce"],image:"./images/potion_normal_purple.png",title:"Freshie",properties:["Umami","Invigorating","Yum"],model:"models/bottle_B_purple.gltf.glb",color:{r:.7,g:.2,b:.9},value:100},{name:"corpsicle",ingredients:["tomato","mushroom"],image:"./images/potion_narrow_blue.png",title:"Corpsicle",properties:["Meaty","Pulpy","Moldy"],model:"models/bottle_A_blue.gltf.glb",color:{r:0,g:.1,b:.4},value:100},{name:"healthy-greens",ingredients:["lettuce","lettuce"],image:"./images/potion_wide_green.png",title:"Healthy Greens",properties:["Healthy","Crisp","Verdant"],model:"models/bottle_C_green.gltf.glb",color:{r:0,g:.8,b:.2},value:100},{name:"not-poison",ingredients:["lettuce","mushroom"],image:"./images/potion_narrow_green.png",title:"Not Poison",properties:["Bitter","Almond","Intense"],model:"models/bottle_A_green.gltf.glb",color:{r:.2,g:.8,b:.2},value:100},{name:"fungus-amongus",ingredients:["mushroom","mushroom"],image:"./images/potion_wide_blue.png",title:"Fungus Amongus",properties:["Sour","Vile","Suspicious"],model:"models/bottle_C_blue.gltf.glb",color:{r:.4,g:.4,b:.8},value:100}];var Xb=`attribute float aScale;

uniform float uPixelRatio;\r
uniform float uTime;

varying vec2 vUv;\r
varying vec3 vPosition;

void main()\r
{\r
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;\r
    vUv = uv;\r
    vPosition = position;\r
}`,jb=`uniform sampler2D uPotionIcon;

varying vec2 vUv;\r
varying vec3 vPosition;

void main()\r
{\r
    float insideColor = step(0.03, abs(distance(vUv, vec2(0.5)) - 0.47));\r
    float inCircle = 1.0 - step(0.5, length(vPosition.xy));

    vec3 color = texture2D(uPotionIcon, vUv).rgb;
    float mask = inCircle;

    gl_FragColor = vec4(color, mask);

    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`;class _u{constructor(e,t,i,r,o,a,s){this.game=e,this.meshPath=t,this.desiredPotion=i,this.scale=r,this.position=o,this.rotation=a,this.updateFunction=s,this.rejectCount=0,this.rejectionColors=[new qe("yellow"),new qe("orange"),new qe("crimson")]}async init(){const e=await vt(this.game,this.meshPath);e.scale.copy(this.scale),this.object3d=new sn,this.object3d.add(e),this.object3d.position.set(-15,.1,10),this.object3d.rotateOnAxis(ct.DEFAULT_UP,this.rotation),this.game.scene.add(this.object3d);const t=new Go(1,1),i=this.game.textureLoader.load("./textures/speechbubble.png"),r=new Cn({map:i,transparent:!0,side:hi}),o={uPotionIcon:{value:this.game.textureLoader.load(this.desiredPotion.image)}},a=new $t(t.clone(),new $i({uniforms:o,vertexShader:Xb,fragmentShader:jb,transparent:!0}));a.position.y=.085,a.position.z=.05,a.scale.set(.5,.5,.5),this.requestBillboard=new sn,this.billboardSprite=new $t(t.clone(),r),this.requestBillboard.add(this.billboardSprite),this.requestBillboard.add(a),this.requestBillboard.position.x=0,this.requestBillboard.position.y=2.5,this.requestBillboard.position.z=0,this.requestBillboard.visible=!1,this.object3d.add(this.requestBillboard),Oe.to(this.object3d.position,{duration:2,x:this.position.x,y:this.position.y,z:this.position.z})}update(e){this.updateFunction(e)}showDesire(){this.object3d.wantIsAnimating||(this.object3d.wantIsAnimating=!0,this.object3d.wantIsAnimating=!0,this.requestBillboard.lookAt(this.game.camera.position),this.requestBillboard.visible=!0,this.requestBillboard.position.set(0,.5,0),this.requestBillboard.scale.set(0,0,0),Oe.to(this.requestBillboard.position,{duration:2,y:2.5,ease:"elastic",onUpdate:()=>{this.requestBillboard.lookAt(this.game.camera.position)}}),Oe.to(this.requestBillboard.scale,{duration:2,x:1,y:1,z:1,ease:"elastic",onComplete:()=>{this.object3d.wantIsAnimating=!1}}))}hideDesire(){this.object3d.wantIsAnimating=!0,Oe.to(this.requestBillboard.position,{duration:2,y:.5,ease:"back"}),Oe.to(this.requestBillboard.scale,{duration:2,x:0,y:0,z:0,ease:"back",onComplete:()=>{this.requestBillboard.visible=!1,this.object3d.wantIsAnimating=!1}})}acceptPotion(){}rejectPotion(e=1){this.rejectCount+=e,this.billboardSprite.material.color=this.rejectionColors[Math.min(2,this.rejectCount-1)]}showSad(){console.log("not what I wanted")}isMatchingPotion(e){return this.desiredPotion.name==e.name}}function rm(n,e,t){const i=n.split(" "),r=[];let o="";const a=t.width-8*2;return i.forEach(s=>{const c=o+s+" ",u=e.measureText(c.trim());u.actualBoundingBoxLeft+u.actualBoundingBoxRight>a?(r.push(o.trim()),o=s+" "):o=c}),o!=""&&r.push(o.trim()),r}function vu(n,e={}){const t={width:512,height:512,font:"86px Arial",textAlign:"center",lineWidth:8};e.width&&(t.width=e.width),e.height&&(t.height=e.height),e.font&&(t.font=e.font),e.textAlign&&(t.textAlign=e.textAlign),e.lineWidth&&(t.lineWidth=e.lineWidth);const i=qb(n,t),r=Yb(n,t),o=new Cn({transparent:!0,map:i,side:hi,alphaMap:r,alphaTest:.1}),a=new Go(4,4),s=new $t(a,o);return s.castShadow=!0,s}function qb(n,e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.clearRect(0,0,e.width,e.height),i.font=e.font,i.textAlign=e.textAlign,i.lineWidth=e.lineWidth,i.lineCap="round",i.lineJoin="round";const r=rm(n,i,e);for(let a=0;a<r.length;a++){const s=r[a],c=i.measureText(s);let u=c.fontBoundingBoxAscent+c.fontBoundingBoxDescent;i.beginPath(),i.strokeStyle="black",i.strokeText(s,e.width/2,8+u*(a+1)),i.beginPath(),i.fillStyle="white",i.fillText(s,e.width/2,8+u*(a+1))}const o=new lp(t);return o.minFilter=It,o.wrapS=di,o.wrapT=di,o.needsUpdate=!0,o}function Yb(n,e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.clearRect(0,0,e.width,e.height),i.beginPath(),i.fillStyle="black",i.rect(0,0,e.width,e.height),i.fill(),i.font=e.font,i.textAlign=e.textAlign,i.lineWidth=e.lineWidth,i.lineCap="round",i.lineJoin="round";const r=rm(n,i,e);for(let a=0;a<r.length;a++){const s=r[a],c=i.measureText(s);let u=c.fontBoundingBoxAscent+c.fontBoundingBoxDescent;i.beginPath(),i.strokeStyle="white",i.strokeText(s,e.width/2,8+u*(a+1)),i.beginPath(),i.fillStyle="white",i.fillText(s,e.width/2,8+u*(a+1))}const o=new lp(t);return o.minFilter=It,o.wrapS=di,o.wrapT=di,o.needsUpdate=!0,o}function Kb(n,e){document.getElementById("play-again").addEventListener("click",t=>{$b(),lm(e),hm(n,e)})}function Zb(n,e){document.getElementById("game-over-container").style.display="block";const t=document.getElementById("game-over-blackout");Oe.to(t,{duration:2,opacity:1});const i=document.getElementById("game-over-panel");i.getElementsByTagName("p")[0].innerHTML=`You made ${e.currency} gold in:`,i.getElementsByTagName("h2")[0].innerHTML=`${e.currentDay-1} days`}function $b(n,e){const t=document.getElementById("game-over-blackout");Oe.to(t,{duration:2,opacity:0,onComplete:()=>{document.getElementById("game-over-container").style.display="none"}})}const Bt="spookonomics-v1",yu=new J1;let Q,Ai,Ri,Ct,Ci,cr,Pi,en,On;const Gs=[],Fn={},L={},kr=1,vi=2,ur=3,Qb=[{position:new O(-3.5,1.5,-3.5),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]},{position:new O(-4.5,1.5,-3.5),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]},{position:new O(-4.5,0,-3),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]},{position:new O(-3.3,3,-3.5),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]}],om=[{position:new O(-12.5,2.75,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]},{position:new O(-11.5,2.75,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]},{position:new O(-8.5,2.75,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]},{position:new O(-7.5,2.75,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]},{position:new O(-8.5,1.25,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]},{position:new O(-7.5,1.25,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]}],am=[{position:new O(-12.9,.1,3)},{position:new O(-13.1,.1,4)},{position:new O(-12.7,.1,5)},{position:new O(-13.1,.1,6)},{position:new O(-12.9,.1,7)},{position:new O(-13,.1,8)}],Pa=[],sm=[],Ws=[],mn=[],Xs=15;async function Jb(n,e){if(!e.potionToBrew){e.soundEffects["audio/witch_cackle1.ogg"].play();return}e.cauldron.isBrewing=!0,Br(n,e),e.brewWitch.stir=!0,e.brewWitch.bounce=!0,e.spoon.visible=!0,e.selectedIngredients.forEach(i=>{Gs.find(r=>r.getName()==i).beginBrew()}),e.bottle1=await vt(n,e.potionToBrew.model),e.bottle1.position.y=-1.5,n.scene.add(e.bottle1),e.selectedIngredients=[],e.soundEffects["audio/click1.ogg"].play();const t=e.potionToBrew.color;e.cauldronUniforms.uNextPotionColor.value=new qe(t.r,t.g,t.b),e.cauldronUniforms.uBlendTime.value=0,setTimeout(()=>{e.soundEffects["audio/bubbling.mp3"].volume(.5),e.soundEffects["audio/bubbling.mp3"].play(),e.bubbleParticles.visible=!0,Oe.to(e.cauldronUniforms.uBlendTime,{value:1,duration:4.5,onComplete:()=>{e.cauldronUniforms.uPotionColor.value=e.cauldronUniforms.uNextPotionColor.value,e.cauldronUniforms.uBlendTime.value=0}})},900),setTimeout(()=>{qs(e.potionInventory,"potion-inventory",e.potionToBrew.name),e.potionToBrew=null,e.selectedIngredients=[],e.bottle1.position.set(0,-1.5,0),e.soundEffects["audio/bubbling.mp3"].fade(1,0,300),e.brewWitch.stir=!1,e.brewWitch.bounce=!1,e.spoon.visible=!1,e.bubbleParticles.visible=!1,Oe.to(e.bottle1.position,{duration:3,y:1.5,ease:"elastic",onComplete:()=>{setTimeout(()=>{n.scene.remove(e.bottle1),e.cauldron.isBrewing=!1},1e3)}})},5e3)}async function eS(n,e){const t=am[L.customers.length].position,i=Math.floor(Math.random()*3);let r;switch(i){case 0:r=new _u(Q,"characters/assembled_character_1.gltf.glb",n,new O(3.5,3.5,3.5),t,Math.PI,function(o){this.object3d.position.y=.0625*Math.sin(2*o)+.5});break;case 1:r=new _u(Q,"characters/character_skeleton_minion.gltf",n,new O(1,1,1),t,Math.PI,function(o){this.object3d.scale.x=1+.03125*Math.sin(11.8*o),this.object3d.scale.y=1+-.03125*Math.sin(11.8*o),this.object3d.scale.z=1+.03125*Math.sin(11.8*o)});break;case 2:r=new _u(Q,"characters/ghost_1.gltf.glb",n,new O(3.5,3.5,3.5),t,Math.PI,function(o){this.object3d.position.y=.0625*Math.sin(2.2*o)+.5});break}return await r.init(e),r}function tS(n){n.shopTutorial2.alreadySeen||(n.shopInactivityHandle=setTimeout(()=>{Oe.to(n.shopTutorial2.material,{duration:1.5,opacity:1,onStart:()=>{n.shopTutorial2.castShadow=!0}})},5e3))}async function iS(n,e){if(e.potionStocked.length<1){e.soundEffects["audio/witch_cackle1.ogg"].play();return}e.soundEffects["audio/click1.ogg"].play(),e.isSellingPotions=!0,tS(e);let t=[];t.push(...e.potionStocked),t.push(...e.potionInventory),t.push(...e.potionInfo.map(r=>r.name)),t.shuffle();let i=Math.min(t.length,Math.floor(Math.random()*3)+3);for(let r=0;r<i;r++){const o=t.shift(),a=e.potionInfo.find(s=>s.name==o);e.customers.push(await eS(a,r))}setTimeout(()=>{e.soundEffects["audio/store-entrance-bell.ogg"].play()},500),e.customers[0].showDesire(),Ca(n,e)}async function js(){let n=0;for(let e=0;e<om.length;e++){L.displayedPotions[e]&&(Q.entities.remove(L.displayedPotions[e]),Q.scene.remove(L.displayedPotions[e]),L.displayedPotions[e]=null);const t=L.potionInfo.find(r=>L.potionStocked[e]==r.name);if(!t)continue;const i=await vt(Q,t.model);i.position.copy(om[n++].position),i.potionData=t,L.displayedPotions[e]=i,Q.entities.push(i),Q.scene.add(i)}}function qs(n,e,t){localStorage.getItem(`${Bt}-${e}`)?n.push(t):n=[t],localStorage.setItem(`${Bt}-${e}`,JSON.stringify(n))}function xu(n,e){let t=parseInt(localStorage.getItem(`${Bt}-${n}`))??0;return t+=e,localStorage.setItem(`${Bt}-${n}`,t),t}function Tu(n,e,t){localStorage.getItem(`${Bt}-${e}`)?n.remove(t):n=[],localStorage.setItem(`${Bt}-${e}`,JSON.stringify(n))}function lm(n){localStorage.removeItem(`${Bt}-potion-inventory`),localStorage.removeItem(`${Bt}-potion-stocked`),localStorage.setItem(`${Bt}-potion-inventory`,JSON.stringify([])),n.potionInventory=[],localStorage.setItem(`${Bt}-potion-stocked`,JSON.stringify([])),n.potionStocked=[],n.currency=100,localStorage.setItem(`${Bt}-currency`,n.currency),n.currentDay=1,localStorage.setItem(`${Bt}-currentday`,n.currentDay)}function cm(n){let e=localStorage.getItem(`${Bt}-potion-inventory`);e?(n.potionInventory=JSON.parse(e),n.potionInventory.sort()):(localStorage.setItem(`${Bt}-potion-inventory`,JSON.stringify([])),n.potionInventory=[]);let t=localStorage.getItem(`${Bt}-potion-stocked`);t?(n.potionStocked=JSON.parse(t),n.potionStocked.sort()):(localStorage.setItem(`${Bt}-potion-stocked`,JSON.stringify([])),n.potionStocked=[]),n.currency=localStorage.getItem(`${Bt}-currency`),n.currency||(localStorage.setItem(`${Bt}-currency`,100),n.currency=100),n.currentDay=localStorage.getItem(`${Bt}-currentday`),n.currentDay||(localStorage.setItem(`${Bt}-currentday`,1),n.currentDay=1)}async function nS(n){Q=n,cm(L),L.currentRoom=2,L.soundEffects=Fn,L.selectedIngredients=[],L.cameraPositions=[{camera:new O(-15,5,7),focus:new O(-13,.1,0)},{camera:new O(1,5,7),focus:new O(0,.1,0)},{camera:new O(12,5,7),focus:new O(18,.1,0)},{camera:new O(1.37,2.41,3.77),focus:new O(-1.15,.79,-.19)}],["audio/click1.ogg","audio/sinkWater1.ogg","audio/doorOpen_1.ogg","audio/doorClose_4.ogg","audio/drawKnife2.ogg","audio/witch_cackle1.ogg","audio/bubbling.mp3","audio/chest_close_creak.ogg","audio/chest_open_creak.ogg","audio/handleCoins.ogg","audio/impactGlass_medium_000.ogg","audio/impactGlass_medium_001.ogg","audio/impactGlass_medium_002.ogg","audio/impactGlass_medium_003.ogg","audio/impactGlass_medium_004.ogg","audio/impactWood_heavy_002.ogg","audio/impactWood_heavy_004.ogg","audio/impactSoft_medium_002.ogg","audio/impactSoft_medium_004.ogg","audio/cash-register.ogg","audio/store-entrance-bell.ogg"].forEach(T=>{Fn[T]=new Aa.Howl({src:[T],preload:!0})}),Fn["audio/doorClose_4.ogg"].volume(.5),Fn["audio/doorOpen_1.ogg"].volume(.5);let e=new gb(Q);Q.camera.position.copy(L.cameraPositions[3].camera),Q.lookAtFocus=L.cameraPositions[3].focus.clone(),await _b(Q,"kloppenheim_02_puresky_1k.hdr"),Q.scene.background=null,Q.scene.fog=new Ou(0,12,20),(await e.load(Bb)).forEach(T=>{Q.scene.add(T)}),L.ingredientInfo=Gb,L.potionInfo=Wb,Object.values(L.ingredientInfo).forEach(T=>{Gs.push(new vb(T,Q))});let t=0;Gs.forEach(async T=>{await T.spawn(Qb[t++])}),L.candycorn=await vt(Q,"models/candycorn.gltf"),L.candycorn.position.x=-4.5,L.candycorn.position.z=-3.5,Q.scene.add(L.candycorn),L.pumpkin2=await vt(Q,"models/pumpkin_orange.gltf"),Q.entities.push(L.pumpkin2),L.pumpkin2.position.x=-10,L.pumpkin2.position.y=1,L.pumpkin2.position.z=.5,Q.scene.add(L.pumpkin2),Ai=await vt(Q,"models/pumpkin_orange_jackolantern.gltf"),Q.entities.push(Ai),Ai.spin=0,Ai.position.set(3,.1,1),Ai.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),Q.scene.add(Ai),Pi=await vt(Q,"models/candle_thin.gltf.glb"),Q.entities.push(Pi),Pi.position.x=0,Pi.position.y=1,Pi.position.z=-2.5,Pi.isLit=!1,Q.scene.add(Pi),en=await vt(Q,"models/candle_thin_lit.gltf.glb"),Q.entities.push(en),en.position.x=0,en.position.y=1,en.position.z=-2.5,en.visible=!1,Q.scene.add(en),L.cauldronUniforms={uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uBlendTime:{value:0},uPotionColor:{value:new O(0,.8,.2)},uNextPotionColor:{value:new O(0,.8,.2)},uTransparency:{value:.8}},L.cauldron=await vt(Q,"models/simple_cauldron.gltf.glb");const i=L.cauldron.getObjectByName("Sphere015");i.material.side=hi;const r=L.cauldron.getObjectByName("Sphere015_1"),o=new $i({fragmentShader:Mb,vertexShader:Tb,uniforms:L.cauldronUniforms,transparent:!0,depthWrite:!1,side:hi});r.material=o,Q.entities.push(L.cauldron),L.cauldron.position.y=.1,Q.scene.add(L.cauldron),L.brewTutorial1=vu("Click to Brew",{font:"86px Alice"}),L.brewTutorial1.position.z=2.4,L.brewTutorial1.position.y=.2,L.brewTutorial1.rotateOnAxis(new O(1,0,0),-Math.PI/2),L.brewTutorial1.alreadySeen=!1,L.brewTutorial1.material.opacity=0,L.brewTutorial1.castShadow=!1,Q.scene.add(L.brewTutorial1),L.brewWitch=await vt(Q,"characters/character_witch.gltf"),Q.entities.push(L.brewWitch),L.brewWitch.position.x=1,L.brewWitch.position.y=.1,L.brewWitch.position.z=-1,L.brewWitch.stir=!1,L.brewWitch.bounce=!1,L.brewWitch.lookAt(L.cauldron.position),Q.scene.add(L.brewWitch),L.shopWitch=await vt(Q,"characters/character_witch.gltf"),Q.entities.push(L.shopWitch),L.shopWitch.position.x=-13,L.shopWitch.position.y=.1,L.shopWitch.position.z=-2,Q.scene.add(L.shopWitch),L.marketWitch=await vt(Q,"characters/character_witch.gltf"),Q.entities.push(L.marketWitch),L.marketWitch.position.x=20,L.marketWitch.position.y=.1,L.marketWitch.position.z=2.5,L.marketWitch.rotateOnAxis(ct.DEFAULT_UP,Math.PI),Q.scene.add(L.marketWitch),L.spoon=await vt(Q,"models/spoon.gltf"),Q.entities.push(L.spoon),L.spoon.rotateOnAxis(new O(1,0,0),Math.PI),L.spoon.position.y=1.25,L.spoon.visible=!1,Q.scene.add(L.spoon),On=await vt(Q,"models/book_grey.gltf.glb"),Q.entities.push(On),On.rotateOnAxis(ct.DEFAULT_UP,Math.PI),On.position.x=4.6,On.position.y=1.9,On.position.z=-3.9,Q.scene.add(On);const a=new ku(.1,24,24),s=o;L.bubbleParticles=new rc(a,s,Xs),L.bubbleParticles.instanceMatrix.setUsage(Vg),L.bubbleParticles.visible=!1,Q.scene.add(L.bubbleParticles);const c=new et;for(let T=0;T<Xs;T++)Pa[T]=new O(.5*(Math.random()-.5),.5,.5*(Math.random()-.5)),Ws[T]=7-T*.5,mn[T]=.2,sm[T]=new O(0,.01,0);const u=new yi,p=new O(1,1,1);for(let T=0;T<Xs;T++){u.setFromAxisAngle(ct.DEFAULT_UP,0);const b=p.set(mn[T],mn[T],mn[T]);c.compose(Pa[T],u,b),L.bubbleParticles.setMatrixAt(T,c)}Ri=await vt(Q,"models/wall_doorway.glb"),Ri.position.set(-6,0,-2),Ri.castShadow=!1,Ri.traverse(T=>{T.isMesh&&(T.castShadow=!1)}),Ri.rotateOnAxis(ct.DEFAULT_UP,Math.PI/2),Ri.isOpen=!1,Ri.isMoving=!1,Q.entities.push(Ri),Q.scene.add(Ri),Ci=await vt(Q,"models/wall_doorway.glb"),Ci.position.set(6,0,2),Ci.castShadow=!1,Ci.traverse(T=>{T.isMesh&&(T.castShadow=!1)}),Ci.rotateOnAxis(ct.DEFAULT_UP,Math.PI/2),Ci.isOpen=!1,Ci.isMoving=!1,Q.entities.push(Ci),Q.scene.add(Ci),L.displayedPotions=[],js(),cr=await vt(Q,"models/lollipop_green.gltf"),cr.position.x=-11.5,cr.position.y=1.28,cr.position.z=-3.4,cr.rotateOnAxis(new O(1,0,0),Math.PI/2),cr.rotateOnAxis(new O(0,0,1),Math.PI/2+-.3),Q.entities.push(cr),Q.scene.add(cr),L.chest=await vt(Q,"models/chest_large.glb"),L.chest.scale.set(.5,.5,.5),L.chest.position.x=-15.5,L.chest.position.y=1,L.chest.position.z=0,L.chest.rotateOnAxis(ct.DEFAULT_UP,Math.PI/4),Q.entities.push(L.chest),Q.scene.add(L.chest),L.shopTutorial1=vu("Click to Sell",{font:"100px Alice"}),L.shopTutorial1.position.x=-15.5,L.shopTutorial1.position.z=.2,L.shopTutorial1.position.y=1.8,L.shopTutorial1.alreadySeen=!1,L.shopTutorial1.scale.set(.6,.6,.6),L.shopTutorial1.material.opacity=0,L.shopTutorial1.castShadow=!1,Q.scene.add(L.shopTutorial1),L.shopTutorial2=vu("Pick the correct potion",{font:"72px Alice"}),L.shopTutorial2.position.x=-10,L.shopTutorial2.position.z=-3.4,L.shopTutorial2.position.y=1.5,L.shopTutorial2.alreadySeen=!1,L.shopTutorial2.scale.set(1,1,1),L.shopTutorial2.material.opacity=0,L.shopTutorial2.castShadow=!1,Q.scene.add(L.shopTutorial2),L.coin=await vt(Q,"models/coin.gltf.glb"),L.coin.position.x=-12,L.coin.position.y=1.1,L.coin.position.z=0,Q.entities.push(L.coin),Q.scene.add(L.coin),L.customers=[],L.sellingSkeleton=await vt(Q,"characters/character_skeleton_mage.gltf"),L.sellingSkeleton.position.x=20,L.sellingSkeleton.position.y=.1,L.sellingSkeleton.position.z=-1,L.sellingSkeleton.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),Q.entities.push(L.sellingSkeleton),Q.scene.add(L.sellingSkeleton),L.sign=await vt(Q,"models/sign_left.gltf"),L.sign.position.x=14,L.sign.position.y=.1,L.sign.position.z=2,Q.entities.push(L.sign),Q.scene.add(L.sign);const l=await vt(Q,"models/crate_mushrooms.gltf");l.scale.set(.5,.5,.5),l.position.x=19.5,l.position.z=.5,l.rotateOnAxis(ct.DEFAULT_UP,Math.PI/4),Q.entities.push(l),Q.scene.add(l);const h=await vt(Q,"models/crate_tomatoes.gltf");h.scale.set(.5,.5,.5),h.position.x=21,Q.entities.push(h),Q.scene.add(h);const d=await vt(Q,"models/crate_lettuce.gltf");d.scale.set(.5,.5,.5),d.position.x=18.5,d.position.z=-.5,Q.entities.push(d),Q.scene.add(d);const f=await vt(Q,"models/coffin_decorated.gltf");f.position.x=23,f.position.z=6,f.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),Q.scene.add(f);const _=await vt(Q,"models/candy_orange_A.gltf");_.position.x=21,_.position.y=.25,_.position.z=6,_.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),Q.scene.add(_);const g=await vt(Q,"models/candy_bucket_B_decorated.gltf");g.position.x=21.5,g.position.y=.1,g.position.z=5.5,g.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/2),Q.scene.add(g),L.firefliesUniforms={uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}};const m=new $i({fragmentShader:xb,vertexShader:yb,uniforms:L.firefliesUniforms,transparent:!0,depthWrite:!1,blending:cl}),x=new Xi,y=50,M=new Float32Array(y*3),P=new Float32Array(y);for(let T=0;T<y;T++)M[T*3+0]=24*(Math.random()-.5)+18,M[T*3+1]=4*Math.random()+2,M[T*3+2]=16*(Math.random()-.5),P[T]=.8*Math.random()+1.2;x.setAttribute("position",new jt(M,3)),x.setAttribute("aScale",new jt(P,1));const S=new ap(x,m);Q.scene.add(S);const E=new H1(16777215,1);Q.scene.add(E);const C=24;Ct=new vp(16777215,.9),Ct.position.set(8,10,6),Ct.castShadow=!0,Ct.shadow.camera.left=-C,Ct.shadow.camera.right=C,Ct.shadow.camera.top=-C,Ct.shadow.camera.bottom=C,Ct.shadow.camera.far=28,Ct.shadow.mapSize.width=Math.min(Q.renderer.capabilities.maxTextureSize,2048),Ct.shadow.mapSize.height=Math.min(Q.renderer.capabilities.maxTextureSize,2048),Ct.shadow.bias=-.005,Ct.shadow.radius=6,Ct.cameraOffset=new O,Ct.cameraOffset.copy(Ct.position),Ct.cameraOffset.sub(new O(0,0,0)),Ct.target=Q.camera,Ct.update=function(){const T=new O;T.copy(Ct.cameraOffset).add(Q.camera.position),Ct.position.set(T.x,T.y,T.z),Ct.shadow&&Ct.shadow.camera.position.set(T.x,T.y,T.z)},Q.scene.add(Ct),Rb(Q,L),bb(Q,L),Ib(Q,L),Nb(Q,L),Kb(Q,L),Ra(Q,L),L.beginBrew=()=>{Jb(Q,L)},L.beginSell=()=>{iS(Q,L)}}function rS(n){let e=n.clock.getElapsedTime();Gs.forEach(o=>{o.wobble()}),L.candycorn.position.y=.125*Math.sin(4.1*e)+3,L.candycorn.rotateOnAxis(ct.DEFAULT_UP,-.02),Ct.update(),yu.setFromCamera(n.mousePosition,n.camera),Aa.Howler.pos(n.camera.position.x,n.camera.position.y,n.camera.position.z),Aa.Howler.orientation(n.camera.position.x,n.camera.position.y,n.camera.position.z,0,1,0);const t=new yi,i=new O(1,1,1),r=new et;for(let o=0;o<Xs;o++){Pa[o].add(sm[o]),mn[o]=Math.min(mn[o]+.01,1),Ws[o]-=.1,Ws[o]<=0&&(Ws[o]=7,Pa[o].set(.5*(Math.random()-.5),.5,.5*(Math.random()-.5)),mn[o]=.2);const a=i.set(mn[o],mn[o],mn[o]);r.compose(Pa[o],t,a),L.bubbleParticles.setMatrixAt(o,r)}L.bubbleParticles.instanceMatrix.needsUpdate=!0,L.brewWitch.stir&&(L.spoon.position.x=.125*Math.sin(4*e),L.spoon.position.z=.125*Math.cos(4*e)),L.brewWitch.bounce?(L.brewWitch.scale.x=1+.03125*Math.sin(12*e),L.brewWitch.scale.y=1+-.03125*Math.sin(12*e),L.brewWitch.scale.z=1+.03125*Math.sin(12*e)):(L.brewWitch.scale.x=1,L.brewWitch.scale.y=1,L.brewWitch.scale.z=1),Ai.spin>0&&(Ai.spin-=.05,Ai.rotateOnAxis(ct.DEFAULT_UP,-.1),Ai.spin<0&&(Ai.spin=0)),L.sellingSkeleton.scale.x=1+.03125*Math.sin(12*e),L.sellingSkeleton.scale.y=1+-.03125*Math.sin(12*e),L.sellingSkeleton.scale.z=1+.03125*Math.sin(12*e),L.firefliesUniforms.uTime.value=e,L.cauldronUniforms.uTime.value=e,L.customers.forEach(o=>{o.update(e)}),Pi.position.y=.625*Math.sin(.5*e)+1.3,en.position.y=.625*Math.sin(.5*e)+1.3,yu.intersectObjects(n.entities.filter(o=>o.visible)).length>0?document.body.style.cursor="pointer":document.body.style.cursor="default"}function li(n,e){return n==e?!0:e.parent!=null?li(n,e.parent):!1}function oS(){let n=yu.intersectObjects(Q.entities.filter(e=>e.visible));n.length>0&&n.every(e=>{switch(L.currentRoom){case kr:if(li(L.chest,e.object))return L.isSellingPotions||(L.shopInactivityHandle&&(clearTimeout(L.shopInactivityHandle),L.shopInactivityHandle=0),L.chest.isStocking?Ca(Q,L):(nm(Q,L),L.shopTutorial1.material.opacity>0&&Oe.to(L.shopTutorial1.material,{duration:1.5,opacity:0,onComplete:()=>{L.shopTutorial1.castShadow=!1,L.shopTutorial1.alreadySeen=!0}}))),!1;if(li(L.shopWitch,e.object))return L.isSellingPotions||(L.shopInactivityHandle&&(clearTimeout(L.shopInactivityHandle),L.shopInactivityHandle=0),L.chest.isStocking?Ca(Q,L):(nm(Q,L),L.shopTutorial1.material.opacity>0&&Oe.to(L.shopTutorial1.material,{duration:1.5,opacity:0,onComplete:()=>{L.shopTutorial1.castShadow=!1,L.shopTutorial1.alreadySeen=!0}}))),!1;if(li(L.coin,e.object)){let t=[{x:-12,y:1.1,z:1},{x:-12,y:2,z:2},{x:-15.5,y:2,z:2},{x:-15.5,y:1.2,z:0}];return Oe.to(L.coin.position,{duration:3.5,motionPath:t,onComplete:()=>{L.soundEffects["audio/handleCoins.ogg"].play(),sS(L.chest,()=>{L.coin.scale.set(0,0,0),L.coin.position.set(-12,1.1,0),Oe.to(L.coin.scale,{ease:"elastic",duration:.7,x:1,y:1,z:1})})}}),setTimeout(()=>{aS(L.chest)},700),!1}if(L.displayedPotions.forEach(t=>{if(li(t,e.object))if(L.isSellingPotions)if(L.sellInactivityHandle&&(clearTimeout(L.sellInactivityHandle),L.sellInactivityHandle=0),L.customers[0].isMatchingPotion(t.potionData)){L.shopTutorial2.material.opacity>0&&Oe.to(L.shopTutorial2.material,{duration:1.5,opacity:0,onComplete:()=>{L.shopTutorial2.castShadow=!1,L.shopTutorial2.alreadySeen=!0}});const i=L.customers[0];i.hideDesire();const r=[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}];Oe.to(t.position,{duration:2,motionPath:r,onComplete:()=>{Tu(L.potionStocked,"potion-stocked",t.potionData.name),js(),i.acceptPotion(),L.soundEffects["audio/cash-register.ogg"].play(),L.currency=xu("currency",t.potionData.value),Ra(Q,L),Mu()}})}else um(),Oe.fromTo(t.rotation,{duration:.1,z:.2},{duration:.1,z:0}),L.customers[0].rejectPotion(),L.customers[0].rejectCount>=3&&(L.customers[0].showSad(),Mu());else um(),Oe.fromTo(t.rotation,{duration:.1,z:.2},{duration:.1,z:0})}),li(L.pumpkin2,e.object))return L.pumpkin2.isMoving?void 0:(L.pumpkin2.isMoving=!0,Oe.to(L.pumpkin2.position,{duration:2,y:3,onComplete:()=>{setTimeout(()=>{L.soundEffects["audio/impactWood_heavy_002.ogg"].play()},400),setTimeout(()=>{L.soundEffects["audio/impactSoft_medium_002.ogg"].play()},800),Oe.to(L.pumpkin2.position,{duration:1,y:1,ease:"bounce",onComplete:()=>{L.pumpkin2.isMoving=!1}})}}),!1);break;case vi:if(li(Ai,e.object))return Fn["audio/drawKnife2.ogg"].play(),Ai.spin+=Math.PI,!1;if(li(On,e.object)){let t=[{x:4.6,y:1.9,z:0},{x:4.6,y:1.9,z:-3.9}];return Oe.to(On.position,{duration:6,motionPath:t,onComplete:()=>{}}),!1}if(li(L.brewWitch,e.object))return L.cauldron.isBrewing||(L.brewInactivityHandle&&(clearTimeout(L.brewInactivityHandle),L.brewInactivityHandle=0),L.cauldron.brewMenuOpen?Br(Q,L):(im(Q,L),L.brewTutorial1.material.opacity>0&&Oe.to(L.brewTutorial1.material,{duration:1.5,opacity:0,onComplete:()=>{L.brewTutorial1.castShadow=!1,L.brewTutorial1.alreadySeen=!0}}))),!1;if(li(L.cauldron,e.object))return L.cauldron.isBrewing||(L.brewInactivityHandle&&(clearTimeout(L.brewInactivityHandle),L.brewInactivityHandle=0),L.cauldron.brewMenuOpen?Br(Q,L):(im(Q,L),L.brewTutorial1.material.opacity>0&&Oe.to(L.brewTutorial1.material,{duration:1.5,opacity:0,onComplete:()=>{L.brewTutorial1.castShadow=!1,L.brewTutorial1.alreadySeen=!0}}))),!1;if(li(Pi,e.object))return Pi.isLit=!0,en.visible=!0,Pi.visible=!1,!1;if(li(en,e.object))return Pi.isLit=!1,en.visible=!1,Pi.visible=!0,!1;break;case ur:li(L.sign,e.object)&&Vs(Q,L);break}if(li(Ri,e.object))return L.currentRoom==vi?Vs(Q,L):L.currentRoom==kr&&du(Q,L),!1;if(li(Ci,e.object))return L.currentRoom==vi?du(Q,L):L.currentRoom==ur&&Vs(Q,L),!1})}function Mu(){const n=L.customers.shift();if(!n)return;const e=[{x:-11,y:.1,z:3},{x:-8,y:.1,z:3},{x:-4,y:.1,z:10}];setTimeout(()=>{L.soundEffects["audio/store-entrance-bell.ogg"].play()},4e3),Oe.to(n.object3d.position,{duration:8,motionPath:e,onComplete:()=>{Q.scene.remove(n.object3d)}}),Oe.to(n.object3d.rotation,{duration:1,y:Math.PI,onComplete:()=>{},onUpdate:()=>{n.requestBillboard.lookAt(Q.camera.position)}});for(let t=0;t<L.customers.length;t++){const i=L.customers[t],r=am[t].position;Oe.to(i.object3d.position,{duration:1.5,x:r.x,y:r.y,z:r.z})}L.customers.length==0?(L.isSellingPotions=!1,L.currentDay=xu("currentday",1),Ra(Q,L),L.currency>=1e3&&Zb(Q,L)):(L.customers[0].showDesire(),L.potionStocked.length<1&&(L.customers[0].rejectPotion(3),L.customers[0].showSad(),Mu()))}function um(){setTimeout(()=>{let e=Math.floor(5*Math.random());L.soundEffects[`audio/impactGlass_medium_00${e}.ogg`].play()},50);let n=Math.floor(5*Math.random());L.soundEffects[`audio/impactGlass_medium_00${n}.ogg`].play()}function aS(n){let e=n.getObjectByName("chest_large_lid");n.isOpen||n.isMoving||(Fn["audio/chest_open_creak.ogg"].play(),n.isMoving=!0,Oe.to(e.rotation,{duration:2.5,x:-(Math.PI/2)+Math.PI/8,ease:"elastic",onComplete:()=>{n.isOpen=!0,n.isMoving=!1}}))}function sS(n,e=()=>{}){let t=n.getObjectByName("chest_large_lid");n.isOpen&&(n.isMoving||(Fn["audio/chest_close_creak.ogg"].play(),n.isMoving=!0,Oe.to(t.rotation,{duration:1.5,x:0,ease:"bounce",onComplete:()=>{n.isOpen=!1,n.isMoving=!1,e()}})))}function bu(n){let e=n.getObjectByName("wall_doorway_door");n.isOpen||n.isMoving||(Fn["audio/doorOpen_1.ogg"].play(),n.isMoving=!0,Oe.to(e.rotation,{duration:2.5,y:-Math.PI/2,ease:"elastic",onComplete:()=>{n.isOpen=!0,n.isMoving=!1}}))}function Su(n){let e=n.getObjectByName("wall_doorway_door");n.isOpen&&(n.isMoving||(Fn["audio/doorClose_4.ogg"].play(),n.isMoving=!0,Oe.to(e.rotation,{duration:2.5,y:0,ease:"elastic",onComplete:()=>{n.isOpen=!1,n.isMoving=!1}})))}function lS(){Br(Q,L),bu(Ri);const n=L.cameraPositions[0];Oe.to(Q.camera.position,{duration:2.5,x:n.camera.x,y:n.camera.y,z:n.camera.z,onComplete:()=>{Su(Ri)}}),Oe.to(Q.lookAtFocus,{duration:2.5,x:n.focus.x,y:n.focus.y,z:n.focus.z}),L.currentRoom=kr,Ub(L)}function cS(){let n=Ri;L.currentRoom==ur&&(n=Ci),bu(n);const e=L.cameraPositions[1];Oe.to(Q.camera.position,{duration:2.5,x:e.camera.x,y:e.camera.y,z:e.camera.z,onComplete:()=>{Su(n)}}),Oe.to(Q.lookAtFocus,{duration:2.5,x:e.focus.x,y:e.focus.y,z:e.focus.z}),L.currentRoom=vi,tm(L)}function uS(){Br(Q,L),bu(Ci);const n=L.cameraPositions[2];Oe.to(Q.camera.position,{duration:2.5,x:n.camera.x,y:n.camera.y,z:n.camera.z,onComplete:()=>{Su(Ci)}}),Oe.to(Q.lookAtFocus,{duration:2.5,x:n.focus.x,y:n.focus.y,z:n.focus.z}),L.currentRoom=ur}function hr(n){if(n!=L.currentRoom)switch(n){case kr:lS();break;case vi:cS();break;case ur:uS();break}}let gn=[];function hS(n){Q.keyboard.Digit1&&L.currentRoom==vi&&(hr(kr),gn=[]),Q.keyboard.Digit2&&L.currentRoom!=vi&&(hr(vi),gn=[]),Q.keyboard.Digit3&&L.currentRoom==vi&&(hr(ur),gn=[]),(Q.keyboard.Digit9||Q.keyboard.F9)&&(Q.orbitControls.enabled=!Q.orbitControls.enabled,Q.orbitControls.enabled||(console.log("position:",Q.camera.position),console.log("focus:",Q.orbitControls.target),hr(L.currentRoom),gn=[])),Q.keyboard.Escape&&(hm(Q,L),gn=[]),gn.push(n.replace("Key",""));const e=gn.join("").toLowerCase();e.includes("ghostbux")&&(gn=[],L.currency+=1e3,xu("currency",1e3),Ra(Q,L),L.soundEffects["audio/witch_cackle1.ogg"].play()),e.includes("awesomesauce")&&(gn=[],L.potionInventory.push(...L.potionInfo.map(t=>t.name)),qs(L.potionInventory,"potion-inventory","spooksauce"),L.soundEffects["audio/witch_cackle1.ogg"].play()),e.includes("yeschef")&&(gn=[],L.soundEffects["audio/witch_cackle1.ogg"].play())}function hm(n,e){Br(n,e),Ca(n,e),wb(),Cb(),Ab(),e.currentRoom=vi,n.camera.position.copy(e.cameraPositions[3].camera),n.lookAtFocus=e.cameraPositions[3].focus.clone(),e.brewTutorial1.material.opacity=0,e.brewTutorial1.castShadow=!1,e.brewTutorial1.alreadySeen=!1,e.shopTutorial1.material.opacity=0,e.shopTutorial1.castShadow=!1,e.shopTutorial1.alreadySeen=!1,e.shopTutorial2.material.opacity=0,e.shopTutorial2.castShadow=!1,e.shopTutorial2.alreadySeen=!1,js(),Ra(n,e)}/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dS=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,pS=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,fS=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,mS=/(^[#\.][a-z]|[a-y][a-z])/i,gS=Math.PI/180,_S=180/Math.PI,Ys=Math.sin,Ks=Math.cos,Gi=Math.abs,Bn=Math.sqrt,vS=Math.atan2,wu=1e8,dm=function(n){return typeof n=="string"},pm=function(n){return typeof n=="number"},yS=function(n){return typeof n>"u"},xS={},TS={},Zs=1e5,fm=function(n){return Math.round((n+wu)%1*Zs)/Zs||(n<0?0:1)},pt=function(n){return Math.round(n*Zs)/Zs||0},mm=function(n){return Math.round(n*1e10)/1e10||0},gm=function(n,e,t,i){var r=n[e],o=i===1?6:Eu(r,t,i);if((o||!i)&&o+t+2<r.length)return n.splice(e,0,r.slice(0,t+o+2)),r.splice(0,t+o),1},_m=function(n,e,t){var i=n.length,r=~~(t*i);if(n[r]>e){for(;--r&&n[r]>e;);r<0&&(r=0)}else for(;n[++r]<e&&r<i;);return r<i?r:i-1},MS=function(n,e){var t=n.length;for(n.reverse();t--;)n[t].reversed||wS(n[t])},vm=function(n,e){return e.totalLength=n.totalLength,n.samples?(e.samples=n.samples.slice(0),e.lookup=n.lookup.slice(0),e.minLength=n.minLength,e.resolution=n.resolution):n.totalPoints&&(e.totalPoints=n.totalPoints),e},bS=function(n,e){var t=n.length,i=n[t-1]||[],r=i.length;t&&e[0]===i[r-2]&&e[1]===i[r-1]&&(e=i.concat(e.slice(2)),t--),n[t]=e};function $s(n){n=dm(n)&&mS.test(n)&&document.querySelector(n)||n;var e=n.getAttribute?n:0,t;return e&&(n=n.getAttribute("d"))?(e._gsPath||(e._gsPath={}),t=e._gsPath[n],t&&!t._dirty?t:e._gsPath[n]=Qs(n)):n?dm(n)?Qs(n):pm(n[0])?[n]:n:console.warn("Expecting a <path> element or an SVG path data string")}function SS(n){for(var e=[],t=0;t<n.length;t++)e[t]=vm(n[t],n[t].slice(0));return vm(n,e)}function wS(n){var e=0,t;for(n.reverse();e<n.length;e+=2)t=n[e],n[e]=n[e+1],n[e+1]=t;n.reversed=!n.reversed}var ES=function(n,e){var t=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(n.attributes),r=i.length,o;for(e=","+e+",";--r>-1;)o=i[r].nodeName.toLowerCase(),e.indexOf(","+o+",")<0&&t.setAttributeNS(null,o,i[r].nodeValue);return t},AS={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},RS=function(n,e){for(var t=e?e.split(","):[],i={},r=t.length;--r>-1;)i[t[r]]=+n.getAttribute(t[r])||0;return i};function CS(n,e){var t=n.tagName.toLowerCase(),i=.552284749831,r,o,a,s,c,u,p,l,h,d,f,_,g,m,x,y,M,P,S,E,C,T;return t==="path"||!n.getBBox?n:(u=ES(n,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),T=RS(n,AS[t]),t==="rect"?(s=T.rx,c=T.ry||s,o=T.x,a=T.y,d=T.width-s*2,f=T.height-c*2,s||c?(_=o+s*(1-i),g=o+s,m=g+d,x=m+s*i,y=m+s,M=a+c*(1-i),P=a+c,S=P+f,E=S+c*i,C=S+c,r="M"+y+","+P+" V"+S+" C"+[y,E,x,C,m,C,m-(m-g)/3,C,g+(m-g)/3,C,g,C,_,C,o,E,o,S,o,S-(S-P)/3,o,P+(S-P)/3,o,P,o,M,_,a,g,a,g+(m-g)/3,a,m-(m-g)/3,a,m,a,x,a,y,M,y,P].join(",")+"z"):r="M"+(o+d)+","+a+" v"+f+" h"+-d+" v"+-f+" h"+d+"z"):t==="circle"||t==="ellipse"?(t==="circle"?(s=c=T.r,l=s*i):(s=T.rx,c=T.ry,l=c*i),o=T.cx,a=T.cy,p=s*i,r="M"+(o+s)+","+a+" C"+[o+s,a+l,o+p,a+c,o,a+c,o-p,a+c,o-s,a+l,o-s,a,o-s,a-l,o-p,a-c,o,a-c,o+p,a-c,o+s,a-l,o+s,a].join(",")+"z"):t==="line"?r="M"+T.x1+","+T.y1+" L"+T.x2+","+T.y2:(t==="polyline"||t==="polygon")&&(h=(n.getAttribute("points")+"").match(pS)||[],o=h.shift(),a=h.shift(),r="M"+o+","+a+" L"+h.join(","),t==="polygon"&&(r+=","+o+","+a+"z")),u.setAttribute("d",bm(u._gsRawPath=Qs(r))),e&&n.parentNode&&(n.parentNode.insertBefore(u,n),n.parentNode.removeChild(n)),u)}function ym(n,e,t){var i=n[e],r=n[e+2],o=n[e+4],a;return i+=(r-i)*t,r+=(o-r)*t,i+=(r-i)*t,a=r+(o+(n[e+6]-o)*t-r)*t-i,i=n[e+1],r=n[e+3],o=n[e+5],i+=(r-i)*t,r+=(o-r)*t,i+=(r-i)*t,pt(vS(r+(o+(n[e+7]-o)*t-r)*t-i,a)*_S)}function xm(n,e,t){t=yS(t)?1:mm(t)||0,e=mm(e)||0;var i=Math.max(0,~~(Gi(t-e)-1e-8)),r=SS(n);if(e>t&&(e=1-e,t=1-t,MS(r),r.totalLength=0),e<0||t<0){var o=Math.abs(~~Math.min(e,t))+1;e+=o,t+=o}r.totalLength||zr(r);var a=t>1,s=Tm(r,e,xS,!0),c=Tm(r,t,TS),u=c.segment,p=s.segment,l=c.segIndex,h=s.segIndex,d=c.i,f=s.i,_=h===l,g=d===f&&_,m,x,y,M,P,S,E,C;if(a||i){for(m=l<h||_&&d<f||g&&c.t<s.t,gm(r,h,f,s.t)&&(h++,m||(l++,g?(c.t=(c.t-s.t)/(1-s.t),d=0):_&&(d-=f))),Math.abs(1-(t-e))<1e-5?l=h-1:!c.t&&l?l--:gm(r,l,d,c.t)&&m&&h++,s.t===1&&(h=(h+1)%r.length),P=[],S=r.length,E=1+S*i,C=h,E+=(S-h+l)%S,M=0;M<E;M++)bS(P,r[C++%S]);r=P}else if(y=c.t===1?6:Eu(u,d,c.t),e!==t)for(x=Eu(p,f,g?s.t/c.t:s.t),_&&(y+=x),u.splice(d+y+2),(x||f)&&p.splice(0,f+x),M=r.length;M--;)(M<h||M>l)&&r.splice(M,1);else u.angle=ym(u,d+y,0),d+=y,s=u[d],c=u[d+1],u.length=u.totalLength=0,u.totalPoints=r.totalPoints=8,u.push(s,c,s,c,s,c,s,c);return r.totalLength=0,r}function PS(n,e,t){e=e||0,n.samples||(n.samples=[],n.lookup=[]);var i=~~n.resolution||12,r=1/i,o=n.length,a=n[e],s=n[e+1],c=e?e/6*i:0,u=n.samples,p=n.lookup,l=(e?n.minLength:wu)||wu,h=u[c+t*i-1],d=e?u[c-1]:0,f,_,g,m,x,y,M,P,S,E,C,T,b,k,X,F,Y;for(u.length=p.length=0,_=e+2;_<o;_+=6){if(g=n[_+4]-a,m=n[_+2]-a,x=n[_]-a,P=n[_+5]-s,S=n[_+3]-s,E=n[_+1]-s,y=M=C=T=0,Gi(g)<.01&&Gi(P)<.01&&Gi(x)+Gi(E)<.01)n.length>8&&(n.splice(_,6),_-=6,o-=6);else for(f=1;f<=i;f++)k=r*f,b=1-k,y=M-(M=(k*k*g+3*b*(k*m+b*x))*k),C=T-(T=(k*k*P+3*b*(k*S+b*E))*k),F=Bn(C*C+y*y),F<l&&(l=F),d+=F,u[c++]=d;a+=g,s+=P}if(h)for(h-=d;c<u.length;c++)u[c]+=h;if(u.length&&l){if(n.totalLength=Y=u[u.length-1]||0,n.minLength=l,Y/l<9999)for(F=X=0,f=0;f<Y;f+=l)p[F++]=u[X]<f?++X:X}else n.totalLength=u[0]=0;return e?d-u[e/2-1]:d}function zr(n,e){var t,i,r;for(r=t=i=0;r<n.length;r++)n[r].resolution=~~e||12,i+=n[r].length,t+=PS(n[r]);return n.totalPoints=i,n.totalLength=t,n}function Eu(n,e,t){if(t<=0||t>=1)return 0;var i=n[e],r=n[e+1],o=n[e+2],a=n[e+3],s=n[e+4],c=n[e+5],u=n[e+6],p=n[e+7],l=i+(o-i)*t,h=o+(s-o)*t,d=r+(a-r)*t,f=a+(c-a)*t,_=l+(h-l)*t,g=d+(f-d)*t,m=s+(u-s)*t,x=c+(p-c)*t;return h+=(m-h)*t,f+=(x-f)*t,n.splice(e+2,4,pt(l),pt(d),pt(_),pt(g),pt(_+(h-_)*t),pt(g+(f-g)*t),pt(h),pt(f),pt(m),pt(x)),n.samples&&n.samples.splice(e/6*n.resolution|0,0,0,0,0,0,0,0),6}function Tm(n,e,t,i){t=t||{},n.totalLength||zr(n),(e<0||e>1)&&(e=fm(e));var r=0,o=n[0],a,s,c,u,p,l,h;if(!e)h=l=r=0,o=n[0];else if(e===1)h=1,r=n.length-1,o=n[r],l=o.length-8;else{if(n.length>1){for(c=n.totalLength*e,p=l=0;(p+=n[l++].totalLength)<c;)r=l;o=n[r],u=p-o.totalLength,e=(c-u)/(p-u)||0}a=o.samples,s=o.resolution,c=o.totalLength*e,l=o.lookup.length?o.lookup[~~(c/o.minLength)]||0:_m(a,c,e),u=l?a[l-1]:0,p=a[l],p<c&&(u=p,p=a[++l]),h=1/s*((c-u)/(p-u)+l%s),l=~~(l/s)*6,i&&h===1&&(l+6<o.length?(l+=6,h=0):r+1<n.length&&(l=h=0,o=n[++r]))}return t.t=h,t.i=l,t.path=n,t.segment=o,t.segIndex=r,t}function Mm(n,e,t,i){var r=n[0],o=i||{},a,s,c,u,p,l,h,d,f;if((e<0||e>1)&&(e=fm(e)),r.lookup||zr(n),n.length>1){for(c=n.totalLength*e,p=l=0;(p+=n[l++].totalLength)<c;)r=n[l];u=p-r.totalLength,e=(c-u)/(p-u)||0}return a=r.samples,s=r.resolution,c=r.totalLength*e,l=r.lookup.length?r.lookup[e<1?~~(c/r.minLength):r.lookup.length-1]||0:_m(a,c,e),u=l?a[l-1]:0,p=a[l],p<c&&(u=p,p=a[++l]),h=1/s*((c-u)/(p-u)+l%s)||0,f=1-h,l=~~(l/s)*6,d=r[l],o.x=pt((h*h*(r[l+6]-d)+3*f*(h*(r[l+4]-d)+f*(r[l+2]-d)))*h+d),o.y=pt((h*h*(r[l+7]-(d=r[l+1]))+3*f*(h*(r[l+5]-d)+f*(r[l+3]-d)))*h+d),t&&(o.angle=r.totalLength?ym(r,l,h>=1?1-1e-9:h||1e-9):r.angle||0),o}function La(n,e,t,i,r,o,a){for(var s=n.length,c,u,p,l,h;--s>-1;)for(c=n[s],u=c.length,p=0;p<u;p+=2)l=c[p],h=c[p+1],c[p]=l*e+h*i+o,c[p+1]=l*t+h*r+a;return n._dirty=1,n}function LS(n,e,t,i,r,o,a,s,c){if(!(n===s&&e===c)){t=Gi(t),i=Gi(i);var u=r%360*gS,p=Ks(u),l=Ys(u),h=Math.PI,d=h*2,f=(n-s)/2,_=(e-c)/2,g=p*f+l*_,m=-l*f+p*_,x=g*g,y=m*m,M=x/(t*t)+y/(i*i);M>1&&(t=Bn(M)*t,i=Bn(M)*i);var P=t*t,S=i*i,E=(P*S-P*y-S*x)/(P*y+S*x);E<0&&(E=0);var C=(o===a?-1:1)*Bn(E),T=C*(t*m/i),b=C*-(i*g/t),k=(n+s)/2,X=(e+c)/2,F=k+(p*T-l*b),Y=X+(l*T+p*b),q=(g-T)/t,ie=(m-b)/i,ne=(-g-T)/t,$=(-m-b)/i,se=q*q+ie*ie,de=(ie<0?-1:1)*Math.acos(q/Bn(se)),Pe=(q*$-ie*ne<0?-1:1)*Math.acos((q*ne+ie*$)/Bn(se*(ne*ne+$*$)));isNaN(Pe)&&(Pe=h),!a&&Pe>0?Pe-=d:a&&Pe<0&&(Pe+=d),de%=d,Pe%=d;var Ge=Math.ceil(Gi(Pe)/(d/4)),Fe=[],te=Pe/Ge,pe=4/3*Ys(te/2)/(1+Ks(te/2)),Re=p*t,ye=l*t,Qe=l*-i,Ze=p*i,H;for(H=0;H<Ge;H++)r=de+H*te,g=Ks(r),m=Ys(r),q=Ks(r+=te),ie=Ys(r),Fe.push(g-pe*m,m+pe*g,q+pe*ie,ie-pe*q,q,ie);for(H=0;H<Fe.length;H+=2)g=Fe[H],m=Fe[H+1],Fe[H]=g*Re+m*Qe+F,Fe[H+1]=g*ye+m*Ze+Y;return Fe[H-2]=s,Fe[H-1]=c,Fe}}function Qs(n){var e=(n+"").replace(fS,function(T){var b=+T;return b<1e-4&&b>-1e-4?0:b}).match(dS)||[],t=[],i=0,r=0,o=2/3,a=e.length,s=0,c="ERROR: malformed path: "+n,u,p,l,h,d,f,_,g,m,x,y,M,P,S,E,C=function(T,b,k,X){x=(k-T)/3,y=(X-b)/3,_.push(T+x,b+y,k-x,X-y,k,X)};if(!n||!isNaN(e[0])||isNaN(e[1]))return console.log(c),t;for(u=0;u<a;u++)if(P=d,isNaN(e[u])?(d=e[u].toUpperCase(),f=d!==e[u]):u--,l=+e[u+1],h=+e[u+2],f&&(l+=i,h+=r),u||(g=l,m=h),d==="M")_&&(_.length<8?t.length-=1:s+=_.length),i=g=l,r=m=h,_=[l,h],t.push(_),u+=2,d="L";else if(d==="C")_||(_=[0,0]),f||(i=r=0),_.push(l,h,i+e[u+3]*1,r+e[u+4]*1,i+=e[u+5]*1,r+=e[u+6]*1),u+=6;else if(d==="S")x=i,y=r,(P==="C"||P==="S")&&(x+=i-_[_.length-4],y+=r-_[_.length-3]),f||(i=r=0),_.push(x,y,l,h,i+=e[u+3]*1,r+=e[u+4]*1),u+=4;else if(d==="Q")x=i+(l-i)*o,y=r+(h-r)*o,f||(i=r=0),i+=e[u+3]*1,r+=e[u+4]*1,_.push(x,y,i+(l-i)*o,r+(h-r)*o,i,r),u+=4;else if(d==="T")x=i-_[_.length-4],y=r-_[_.length-3],_.push(i+x,r+y,l+(i+x*1.5-l)*o,h+(r+y*1.5-h)*o,i=l,r=h),u+=2;else if(d==="H")C(i,r,i=l,r),u+=1;else if(d==="V")C(i,r,i,r=l+(f?r-i:0)),u+=1;else if(d==="L"||d==="Z")d==="Z"&&(l=g,h=m,_.closed=!0),(d==="L"||Gi(i-l)>.5||Gi(r-h)>.5)&&(C(i,r,l,h),d==="L"&&(u+=2)),i=l,r=h;else if(d==="A"){if(S=e[u+4],E=e[u+5],x=e[u+6],y=e[u+7],p=7,S.length>1&&(S.length<3?(y=x,x=E,p--):(y=E,x=S.substr(2),p-=2),E=S.charAt(1),S=S.charAt(0)),M=LS(i,r,+e[u+1],+e[u+2],+e[u+3],+S,+E,(f?i:0)+x*1,(f?r:0)+y*1),u+=p,M)for(p=0;p<M.length;p++)_.push(M[p]);i=_[_.length-2],r=_[_.length-1]}else console.log(c);return u=_.length,u<6?(t.pop(),u=0):_[0]===_[u-2]&&_[1]===_[u-1]&&(_.closed=!0),t.totalPoints=s+u,t}function IS(n,e){e===void 0&&(e=1);for(var t=n[0],i=0,r=[t,i],o=2;o<n.length;o+=2)r.push(t,i,n[o],i=(n[o]-t)*e/2,t=n[o],-i);return r}function Au(n,e){Gi(n[0]-n[2])<1e-4&&Gi(n[1]-n[3])<1e-4&&(n=n.slice(2));var t=n.length-2,i=+n[0],r=+n[1],o=+n[2],a=+n[3],s=[i,r,i,r],c=o-i,u=a-r,p=Math.abs(n[t]-i)<.001&&Math.abs(n[t+1]-r)<.001,l,h,d,f,_,g,m,x,y,M,P,S,E,C,T;for(p&&(n.push(o,a),o=i,a=r,i=n[t-2],r=n[t-1],n.unshift(i,r),t+=4),e=e||e===0?+e:1,d=2;d<t;d+=2)l=i,h=r,i=o,r=a,o=+n[d+2],a=+n[d+3],!(i===o&&r===a)&&(f=c,_=u,c=o-i,u=a-r,g=Bn(f*f+_*_),m=Bn(c*c+u*u),x=Bn(Math.pow(c/m+f/g,2)+Math.pow(u/m+_/g,2)),y=(g+m)*e*.25/x,M=i-(i-l)*(g?y/g:0),P=i+(o-i)*(m?y/m:0),S=i-(M+((P-M)*(g*3/(g+m)+.5)/4||0)),E=r-(r-h)*(g?y/g:0),C=r+(a-r)*(m?y/m:0),T=r-(E+((C-E)*(g*3/(g+m)+.5)/4||0)),(i!==l||r!==h)&&s.push(pt(M+S),pt(E+T),pt(i),pt(r),pt(P+S),pt(C+T)));return i!==o||r!==a||s.length<4?s.push(pt(o),pt(a),pt(o),pt(a)):s.length-=2,s.length===2?s.push(i,r,i,r,i,r):p&&(s.splice(0,6),s.length=s.length-6),s}function bm(n){pm(n[0])&&(n=[n]);var e="",t=n.length,i,r,o,a;for(r=0;r<t;r++){for(a=n[r],e+="M"+pt(a[0])+","+pt(a[1])+" C",i=a.length,o=2;o<i;o++)e+=pt(a[o++])+","+pt(a[o++])+" "+pt(a[o++])+","+pt(a[o++])+" "+pt(a[o++])+","+pt(a[o])+" ";a.closed&&(e+="z")}return e}/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kn,Hr,Ru,Js,Ia,el,tl,Ua,tn="transform",Cu=tn+"Origin",Sm,wm=function(n){var e=n.ownerDocument||n;for(!(tn in n.style)&&("msTransform"in n.style)&&(tn="msTransform",Cu=tn+"Origin");e.parentNode&&(e=e.parentNode););if(Hr=window,tl=new Na,e){kn=e,Ru=e.documentElement,Js=e.body,Ua=kn.createElementNS("http://www.w3.org/2000/svg","g"),Ua.style.transform="none";var t=e.createElement("div"),i=e.createElement("div"),r=e&&(e.body||e.firstElementChild);r&&r.appendChild&&(r.appendChild(t),t.appendChild(i),t.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),Sm=i.offsetParent!==t,r.removeChild(t))}return e},US=function(n){for(var e,t;n&&n!==Js;)t=n._gsap,t&&t.uncache&&t.get(n,"x"),t&&!t.scaleX&&!t.scaleY&&t.renderTransform&&(t.scaleX=t.scaleY=1e-4,t.renderTransform(1,t),e?e.push(t):e=[t]),n=n.parentNode;return e},Em=[],Am=[],NS=function(){return Hr.pageYOffset||kn.scrollTop||Ru.scrollTop||Js.scrollTop||0},DS=function(){return Hr.pageXOffset||kn.scrollLeft||Ru.scrollLeft||Js.scrollLeft||0},Pu=function(n){return n.ownerSVGElement||((n.tagName+"").toLowerCase()==="svg"?n:null)},OS=function n(e){if(Hr.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return n(e)},Lu=function n(e,t){if(e.parentNode&&(kn||wm(e))){var i=Pu(e),r=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",o=i?t?"rect":"g":"div",a=t!==2?0:100,s=t===3?100:0,c="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",u=kn.createElementNS?kn.createElementNS(r.replace(/^https/,"http"),o):kn.createElement(o);return t&&(i?(el||(el=n(e)),u.setAttribute("width",.01),u.setAttribute("height",.01),u.setAttribute("transform","translate("+a+","+s+")"),el.appendChild(u)):(Ia||(Ia=n(e),Ia.style.cssText=c),u.style.cssText=c+"width:0.1px;height:0.1px;top:"+s+"px;left:"+a+"px",Ia.appendChild(u))),u}throw"Need document and parent."},FS=function(n){for(var e=new Na,t=0;t<n.numberOfItems;t++)e.multiply(n.getItem(t).matrix);return e},BS=function(n){var e=n.getCTM(),t;return e||(t=n.style[tn],n.style[tn]="none",n.appendChild(Ua),e=Ua.getCTM(),n.removeChild(Ua),t?n.style[tn]=t:n.style.removeProperty(tn.replace(/([A-Z])/g,"-$1").toLowerCase())),e||tl.clone()},kS=function(n,e){var t=Pu(n),i=n===t,r=t?Em:Am,o=n.parentNode,a,s,c,u,p,l;if(n===Hr)return n;if(r.length||r.push(Lu(n,1),Lu(n,2),Lu(n,3)),a=t?el:Ia,t)i?(c=BS(n),u=-c.e/c.a,p=-c.f/c.d,s=tl):n.getBBox?(c=n.getBBox(),s=n.transform?n.transform.baseVal:{},s=s.numberOfItems?s.numberOfItems>1?FS(s):s.getItem(0).matrix:tl,u=s.a*c.x+s.c*c.y,p=s.b*c.x+s.d*c.y):(s=new Na,u=p=0),e&&n.tagName.toLowerCase()==="g"&&(u=p=0),(i?t:o).appendChild(a),a.setAttribute("transform","matrix("+s.a+","+s.b+","+s.c+","+s.d+","+(s.e+u)+","+(s.f+p)+")");else{if(u=p=0,Sm)for(s=n.offsetParent,c=n;c&&(c=c.parentNode)&&c!==s&&c.parentNode;)(Hr.getComputedStyle(c)[tn]+"").length>4&&(u=c.offsetLeft,p=c.offsetTop,c=0);if(l=Hr.getComputedStyle(n),l.position!=="absolute"&&l.position!=="fixed")for(s=n.offsetParent;o&&o!==s;)u+=o.scrollLeft||0,p+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=n.offsetTop-p+"px",c.left=n.offsetLeft-u+"px",c[tn]=l[tn],c[Cu]=l[Cu],c.position=l.position==="fixed"?"fixed":"absolute",n.parentNode.appendChild(a)}return a},Iu=function(n,e,t,i,r,o,a){return n.a=e,n.b=t,n.c=i,n.d=r,n.e=o,n.f=a,n},Na=function(){function n(t,i,r,o,a,s){t===void 0&&(t=1),i===void 0&&(i=0),r===void 0&&(r=0),o===void 0&&(o=1),a===void 0&&(a=0),s===void 0&&(s=0),Iu(this,t,i,r,o,a,s)}var e=n.prototype;return e.inverse=function(){var t=this.a,i=this.b,r=this.c,o=this.d,a=this.e,s=this.f,c=t*o-i*r||1e-10;return Iu(this,o/c,-i/c,-r/c,t/c,(r*s-o*a)/c,-(t*s-i*a)/c)},e.multiply=function(t){var i=this.a,r=this.b,o=this.c,a=this.d,s=this.e,c=this.f,u=t.a,p=t.c,l=t.b,h=t.d,d=t.e,f=t.f;return Iu(this,u*i+l*o,u*r+l*a,p*i+h*o,p*r+h*a,s+d*i+f*o,c+d*r+f*a)},e.clone=function(){return new n(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var i=this.a,r=this.b,o=this.c,a=this.d,s=this.e,c=this.f;return i===t.a&&r===t.b&&o===t.c&&a===t.d&&s===t.e&&c===t.f},e.apply=function(t,i){i===void 0&&(i={});var r=t.x,o=t.y,a=this.a,s=this.b,c=this.c,u=this.d,p=this.e,l=this.f;return i.x=r*a+o*c+p||0,i.y=r*s+o*u+l||0,i},n}();function zo(n,e,t,i){if(!n||!n.parentNode||(kn||wm(n)).documentElement===n)return new Na;var r=US(n),o=Pu(n),a=o?Em:Am,s=kS(n,t),c=a[0].getBoundingClientRect(),u=a[1].getBoundingClientRect(),p=a[2].getBoundingClientRect(),l=s.parentNode,h=!i&&OS(n),d=new Na((u.left-c.left)/100,(u.top-c.top)/100,(p.left-c.left)/100,(p.top-c.top)/100,c.left+(h?0:DS()),c.top+(h?0:NS()));if(l.removeChild(s),r)for(c=r.length;c--;)u=r[c],u.scaleX=u.scaleY=0,u.renderTransform(1,u);return e?d.inverse():d}/*!
 * MotionPathPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zS="x,translateX,left,marginLeft,xPercent".split(","),HS="y,translateY,top,marginTop,yPercent".split(","),VS=Math.PI/180,Wi,Rm,Ho,Uu,Nu,Cm,GS=function(){return Wi||typeof window<"u"&&(Wi=window.gsap)&&Wi.registerPlugin&&Wi},Da=function(n,e,t,i){for(var r=e.length,o=i===2?0:i,a=0;a<r;a++)n[o]=parseFloat(e[a][t]),i===2&&(n[o+1]=0),o+=2;return n},Vo=function(n,e,t){return parseFloat(n._gsap.get(n,e,t||"px"))||0},Pm=function(n){var e=n[0],t=n[1],i;for(i=2;i<n.length;i+=2)e=n[i]+=e,t=n[i+1]+=t},Lm=function(n,e,t,i,r,o,a,s,c){if(a.type==="cubic")e=[e];else{a.fromCurrent!==!1&&e.unshift(Vo(t,i,s),r?Vo(t,r,c):0),a.relative&&Pm(e);var u=r?Au:IS;e=[u(e,a.curviness)]}return e=o(Um(e,t,a)),il(n,t,i,e,"x",s),r&&il(n,t,r,e,"y",c),zr(e,a.resolution||(a.curviness===0?20:12))},WS=function(n){return n},XS=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,Im=function(n,e,t){var i=zo(n),r=0,o=0,a;return(n.tagName+"").toLowerCase()==="svg"?(a=n.viewBox.baseVal,a.width||(a={width:+n.getAttribute("width"),height:+n.getAttribute("height")})):a=e&&n.getBBox&&n.getBBox(),e&&e!=="auto"&&(r=e.push?e[0]*(a?a.width:n.offsetWidth||0):e.x,o=e.push?e[1]*(a?a.height:n.offsetHeight||0):e.y),t.apply(r||o?i.apply({x:r,y:o}):{x:i.e,y:i.f})},Du=function(n,e,t,i){var r=zo(n.parentNode,!0,!0),o=r.clone().multiply(zo(e)),a=Im(n,t,r),s=Im(e,i,r),c=s.x,u=s.y,p;return o.e=o.f=0,i==="auto"&&e.getTotalLength&&e.tagName.toLowerCase()==="path"&&(p=e.getAttribute("d").match(XS)||[],p=o.apply({x:+p[0],y:+p[1]}),c+=p.x,u+=p.y),p&&(p=o.apply(e.getBBox()),c-=p.x,u-=p.y),o.e=c-a.x,o.f=u-a.y,o},Um=function(n,e,t){var i=t.align,r=t.matrix,o=t.offsetX,a=t.offsetY,s=t.alignOrigin,c=n[0][0],u=n[0][1],p=Vo(e,"x"),l=Vo(e,"y"),h,d,f;return!n||!n.length?$s("M0,0L0,0"):(i&&(i==="self"||(h=Uu(i)[0]||e)===e?La(n,1,0,0,1,p-c,l-u):(s&&s[2]!==!1?Wi.set(e,{transformOrigin:s[0]*100+"% "+s[1]*100+"%"}):s=[Vo(e,"xPercent")/-100,Vo(e,"yPercent")/-100],d=Du(e,h,s,"auto"),f=d.apply({x:c,y:u}),La(n,d.a,d.b,d.c,d.d,p+d.e-(f.x-d.e),l+d.f-(f.y-d.f)))),r?La(n,r.a,r.b,r.c,r.d,r.e,r.f):(o||a)&&La(n,1,0,0,1,o||0,a||0),n)},il=function(n,e,t,i,r,o){var a=e._gsap,s=a.harness,c=s&&s.aliases&&s.aliases[t],u=c&&c.indexOf(",")<0?c:t,p=n._pt=new Rm(n._pt,e,u,0,0,WS,0,a.set(e,u,n));p.u=Ho(a.get(e,u,o))||0,p.path=i,p.pp=r,n._props.push(u)},jS=function(n,e){return function(t){return n||e!==1?xm(t,n,e):t}},Nm={version:"3.12.5",name:"motionPath",register:function(n,e,t){Wi=n,Ho=Wi.utils.getUnit,Uu=Wi.utils.toArray,Nu=Wi.core.getStyleSaver,Cm=Wi.core.reverting||function(){},Rm=t},init:function(n,e,t){if(!Wi)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof e=="object"&&!e.style)||!e.path)&&(e={path:e});var i=[],r=e,o=r.path,a=r.autoRotate,s=r.unitX,c=r.unitY,u=r.x,p=r.y,l=o[0],h=jS(e.start,"end"in e?e.end:1),d,f;if(this.rawPaths=i,this.target=n,this.tween=t,this.styles=Nu&&Nu(n,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=n._gsap.set(n,this.rProp,this),this.ru=Ho(n._gsap.get(n,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof l!="number"){for(f in l)!u&&~zS.indexOf(f)?u=f:!p&&~HS.indexOf(f)&&(p=f);u&&p?i.push(Lm(this,Da(Da([],o,u,0),o,p,1),n,u,p,h,e,s||Ho(o[0][u]),c||Ho(o[0][p]))):u=p=0;for(f in l)f!==u&&f!==p&&i.push(Lm(this,Da([],o,f,2),n,f,0,h,e,Ho(o[0][f])))}else d=h(Um($s(e.path),n,e)),zr(d,e.resolution),i.push(d),il(this,n,e.x||"x",d,"x",e.unitX||"px"),il(this,n,e.y||"y",d,"y",e.unitY||"px")},render:function(n,e){var t=e.rawPaths,i=t.length,r=e._pt;if(e.tween._time||!Cm()){for(n>1?n=1:n<0&&(n=0);i--;)Mm(t[i],n,!i&&e.rotate,t[i]);for(;r;)r.set(r.t,r.p,r.path[r.pp]+r.u,r.d,n),r=r._next;e.rotate&&e.rSet(e.target,e.rProp,t[0].angle*(e.radians?VS:1)+e.rOffset+e.ru,e,n)}else e.styles.revert()},getLength:function(n){return zr($s(n)).totalLength},sliceRawPath:xm,getRawPath:$s,pointsToSegment:Au,stringToRawPath:Qs,rawPathToString:bm,transformRawPath:La,getGlobalMatrix:zo,getPositionOnPath:Mm,cacheRawPathMeasurements:zr,convertToPath:function(n,e){return Uu(n).map(function(t){return CS(t,e!==!1)})},convertCoordinates:function(n,e,t){var i=zo(e,!0,!0).multiply(zo(n));return t?i.apply(t):i},getAlignMatrix:Du,getRelativePosition:function(n,e,t,i){var r=Du(n,e,t,i);return{x:r.e,y:r.f}},arrayToRawPath:function(n,e){e=e||{};var t=Da(Da([],n,e.x||"x",0),n,e.y||"y",1);return e.relative&&Pm(t),[e.type==="cubic"?t:Au(t,e.curviness)]}};GS()&&Wi.registerPlugin(Nm),Oe.registerPlugin(Nm),mb.autoUnlock=!0;const Ie={};Ie.entities=[],Ie.loadingManager=new dp,Ie.gltfLoader=new vT(Ie.loadingManager),Ie.textureLoader=new fp(Ie.loadingManager),Ie.exrLoader=new _T(Ie.loadingManager),Ie.rgbeLoader=new JT(Ie.loadingManager),Ie.clock=new G1,Ie.camera=new oi(60,1,.1,256),Ie.scene=new g1,Ie.mousePosition=new je(0,0),Ie.keyboard={},Ie.lookAtFocus=new O(0,0,0);function qS(){Ie.renderer=new m1({canvas:Ie.canvas,antialias:!0}),Ie.renderer.setSize(Ie.canvas.offsetWidth,Ie.canvas.offsetHeight),Ie.renderer.shadowMap.enabled=!0,Ie.renderer.shadowMap.type=Wu,Ie.orbitControls=new tT(Ie.camera,Ie.renderer.domElement),Ie.orbitControls.enabled=!1,Dm(),nS(Ie).then(()=>{document.getElementById("loading").style.display="none",Ie.clock.start(),Om()})}function Dm(){Ie.renderer.setSize(window.innerWidth,window.innerHeight,!0),Ie.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),Ie.camera.aspect=Ie.canvas.offsetWidth/Ie.canvas.offsetHeight,Ie.camera.updateProjectionMatrix()}function YS(){rS(Ie),Ie.orbitControls.update(),Ie.orbitControls.enabled||Ie.camera.lookAt(Ie.lookAtFocus),Ie.renderer.render(Ie.scene,Ie.camera)}function Om(){YS(),window.requestAnimationFrame(Om)}async function KS(n){Ie.canvas=n,document.addEventListener("DOMContentLoaded",qS),window.addEventListener("resize",Dm),Ie.canvas.addEventListener("mousemove",e=>{Ie.mousePosition.x=2*(e.clientX/Ie.canvas.offsetWidth-.5),Ie.mousePosition.y=-2*(e.clientY/Ie.canvas.offsetHeight-.5)}),Ie.canvas.addEventListener("touchmove",e=>{e.touches.length==1&&(Ie.mousePosition.x=2*(e.touches[0].clientX/Ie.canvas.offsetWidth-.5),Ie.mousePosition.y=-2*(e.touches[0].clientY/Ie.canvas.offsetHeight-.5))}),Ie.canvas.addEventListener("touchstart",e=>{e.touches.length==1&&(Ie.mousePosition.x=2*(e.touches[0].clientX/Ie.canvas.offsetWidth-.5),Ie.mousePosition.y=-2*(e.touches[0].clientY/Ie.canvas.offsetHeight-.5))}),Ie.canvas.addEventListener("mousedown",e=>{Ie.mousePosition.x=2*(e.clientX/Ie.canvas.offsetWidth-.5),Ie.mousePosition.y=-2*(e.clientY/Ie.canvas.offsetHeight-.5)}),Ie.canvas.addEventListener("click",e=>{oS()}),window.addEventListener("keydown",e=>{const t=Ie.keyboard[e.code];Ie.keyboard[e.code]=!0,t||hS(e.code)}),window.addEventListener("keyup",e=>{Ie.keyboard[e.code]=!1})}const ZS=document.querySelector("canvas.webgl");KS(ZS);
