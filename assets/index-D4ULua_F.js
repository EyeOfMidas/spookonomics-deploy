(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const rl="164",zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Em=0,Bu=1,Am=2,ku=1,zu=2,vn=3,yn=0,ci=1,gi=2,kn=0,Vr=1,ol=2,Hu=3,Vu=4,Rm=5,dr=100,Cm=101,Pm=102,Im=103,Lm=104,Nm=200,Dm=201,Om=202,Um=203,al=204,sl=205,Fm=206,Bm=207,km=208,zm=209,Hm=210,Vm=211,Gm=212,Wm=213,Xm=214,jm=0,qm=1,Ym=2,Da=3,Km=4,Zm=5,Qm=6,Jm=7,Gu=0,$m=1,eg=2,zn=0,tg=1,ig=2,ng=3,rg=4,og=5,ag=6,sg=7,Wu="attached",lg="detached",Xu=300,Gr=301,Wr=302,Oa=303,ll=304,Ua=306,Xr=1e3,tn=1001,Fa=1002,ei=1003,ju=1004,Go=1005,Dt=1006,Ba=1007,nn=1008,Hn=1009,cg=1010,ug=1011,qu=1012,Yu=1013,jr=1014,qt=1015,Ii=1016,Ku=1017,Zu=1018,Wo=1020,hg=35902,dg=1021,pg=1022,Li=1023,fg=1024,mg=1025,qr=1026,Xo=1027,cl=1028,Qu=1029,gg=1030,Ju=1031,$u=1033,ul=33776,hl=33777,dl=33778,pl=33779,eh=35840,th=35841,ih=35842,nh=35843,rh=36196,oh=37492,ah=37496,sh=37808,lh=37809,ch=37810,uh=37811,hh=37812,dh=37813,ph=37814,fh=37815,mh=37816,gh=37817,_h=37818,vh=37819,yh=37820,xh=37821,fl=36492,Mh=36494,Th=36495,_g=36283,bh=36284,Sh=36285,wh=36286,jo=2300,Yr=2301,ml=2302,Eh=2400,Ah=2401,Rh=2402,vg=2500,yg=0,Ch=1,gl=2,xg=3200,Mg=3201,Ph=0,Tg=1,xn="",ti="srgb",Ot="srgb-linear",_l="display-p3",ka="display-p3-linear",za="linear",St="srgb",Ha="rec709",Va="p3",Kr=7680,Ih=519,bg=512,Sg=513,wg=514,Lh=515,Eg=516,Ag=517,Rg=518,Cg=519,vl=35044,Pg=35048,Nh="300 es",Mn=2e3,Ga=2001;class pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dh=1234567;const qo=Math.PI/180,Zr=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function yl(n,e){return(n%e+e)%e}function Ig(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Lg(n,e,t){return n!==e?(t-n)/(e-n):0}function Yo(n,e,t){return(1-t)*n+t*e}function Ng(n,e,t,i){return Yo(n,e,1-Math.exp(-t*i))}function Dg(n,e=1){return e-Math.abs(yl(n,e*2)-e)}function Og(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ug(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Fg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bg(n,e){return n+Math.random()*(e-n)}function kg(n){return n*(.5-Math.random())}function zg(n){n!==void 0&&(Dh=n);let e=Dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hg(n){return n*qo}function Vg(n){return n*Zr}function Gg(n){return(n&n-1)===0&&n!==0}function Wg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jg(n,e,t,i,r){const o=Math.cos,a=Math.sin,s=o(t/2),c=a(t/2),u=o((e+i)/2),p=a((e+i)/2),l=o((e-i)/2),h=a((e-i)/2),d=o((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":n.set(s*p,c*l,c*h,s*u);break;case"YZY":n.set(c*h,s*p,c*l,s*u);break;case"ZXZ":n.set(c*l,c*h,s*p,s*u);break;case"XZX":n.set(s*p,c*f,c*d,s*u);break;case"YXY":n.set(c*d,s*p,c*f,s*u);break;case"ZYZ":n.set(c*f,c*d,s*p,s*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Oh={DEG2RAD:qo,RAD2DEG:Zr,generateUUID:Xi,clamp:zt,euclideanModulo:yl,mapLinear:Ig,inverseLerp:Lg,lerp:Yo,damp:Ng,pingpong:Dg,smoothstep:Og,smootherstep:Ug,randInt:Fg,randFloat:Bg,randFloatSpread:kg,seededRandom:zg,degToRad:Hg,radToDeg:Vg,isPowerOfTwo:Gg,ceilPowerOfTwo:Wg,floorPowerOfTwo:Xg,setQuaternionFromProperEuler:jg,normalize:_t,denormalize:ji};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,r,o,a,s,c,u){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,c,u)}set(e,t,i,r,o,a,s,c,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=s,p[3]=t,p[4]=o,p[5]=c,p[6]=i,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[3],c=i[6],u=i[1],p=i[4],l=i[7],h=i[2],d=i[5],f=i[8],_=r[0],g=r[3],m=r[6],x=r[1],y=r[4],T=r[7],P=r[2],S=r[5],E=r[8];return o[0]=a*_+s*x+c*P,o[3]=a*g+s*y+c*S,o[6]=a*m+s*T+c*E,o[1]=u*_+p*x+l*P,o[4]=u*g+p*y+l*S,o[7]=u*m+p*T+l*E,o[2]=h*_+d*x+f*P,o[5]=h*g+d*y+f*S,o[8]=h*m+d*T+f*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],u=e[7],p=e[8];return t*a*p-t*s*u-i*o*p+i*s*c+r*o*u-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],u=e[7],p=e[8],l=p*a-s*u,h=s*c-p*o,d=u*o-a*c,f=t*l+i*h+r*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return e[0]=l*_,e[1]=(r*u-p*i)*_,e[2]=(s*i-r*a)*_,e[3]=h*_,e[4]=(p*t-r*c)*_,e[5]=(r*o-s*t)*_,e[6]=d*_,e[7]=(i*c-u*t)*_,e[8]=(a*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,s){const c=Math.cos(o),u=Math.sin(o);return this.set(i*c,i*u,-i*(c*a+u*s)+a+e,-r*u,r*c,-r*(-u*a+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new lt;function Uh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qg(){const n=Ko("canvas");return n.style.display="block",n}const Fh={};function Bh(n){n in Fh||(Fh[n]=!0,console.warn(n))}const kh=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wa={[Ot]:{transfer:za,primaries:Ha,toReference:n=>n,fromReference:n=>n},[ti]:{transfer:St,primaries:Ha,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ka]:{transfer:za,primaries:Va,toReference:n=>n.applyMatrix3(zh),fromReference:n=>n.applyMatrix3(kh)},[_l]:{transfer:St,primaries:Va,toReference:n=>n.convertSRGBToLinear().applyMatrix3(zh),fromReference:n=>n.applyMatrix3(kh).convertLinearToSRGB()}},Yg=new Set([Ot,ka]),gt={enabled:!0,_workingColorSpace:Ot,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Yg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Wa[e].toReference,r=Wa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Wa[n].primaries},getTransfer:function(n){return n===xn?za:Wa[n].transfer}};function Qr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ml(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Jr;class Kg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jr===void 0&&(Jr=Ko("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Qr(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qr(t[i]/255)*255):t[i]=Qr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zg=0;class Hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(Tl(r[a].image)):o.push(Tl(r[a]))}else o=Tl(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qg=0;class Wt extends pr{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=tn,r=tn,o=Dt,a=nn,s=Li,c=Hn,u=Wt.DEFAULT_ANISOTROPY,p=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Xi(),this.name="",this.source=new Hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=Xu,Wt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const a=e.elements,s=a[0],c=a[4],u=a[8],p=a[1],l=a[5],h=a[9],d=a[2],f=a[6],_=a[10];if(Math.abs(c-p)<.01&&Math.abs(u-d)<.01&&Math.abs(h-f)<.01){if(Math.abs(c+p)<.1&&Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(s+l+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(s+1)/2,x=(l+1)/2,y=(_+1)/2,T=(c+p)/4,P=(u+d)/4,S=(h+f)/4;return m>x&&m>y?m<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(m),r=T/i,o=P/i):x>y?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=T/r,o=S/r):y<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(y),i=P/o,r=S/o),this.set(i,r,o,t),this}let g=Math.sqrt((f-h)*(f-h)+(u-d)*(u-d)+(p-c)*(p-c));return Math.abs(g)<.001&&(g=1),this.x=(f-h)/g,this.y=(u-d)/g,this.z=(p-c)/g,this.w=Math.acos((s+l+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jg extends pr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends Jg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vh extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $g extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,s){let c=i[r+0],u=i[r+1],p=i[r+2],l=i[r+3];const h=o[a+0],d=o[a+1],f=o[a+2],_=o[a+3];if(s===0){e[t+0]=c,e[t+1]=u,e[t+2]=p,e[t+3]=l;return}if(s===1){e[t+0]=h,e[t+1]=d,e[t+2]=f,e[t+3]=_;return}if(l!==_||c!==h||u!==d||p!==f){let g=1-s;const m=c*h+u*d+p*f+l*_,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const P=Math.sqrt(y),S=Math.atan2(P,m*x);g=Math.sin(g*S)/P,s=Math.sin(s*S)/P}const T=s*x;if(c=c*g+h*T,u=u*g+d*T,p=p*g+f*T,l=l*g+_*T,g===1-s){const P=1/Math.sqrt(c*c+u*u+p*p+l*l);c*=P,u*=P,p*=P,l*=P}}e[t]=c,e[t+1]=u,e[t+2]=p,e[t+3]=l}static multiplyQuaternionsFlat(e,t,i,r,o,a){const s=i[r],c=i[r+1],u=i[r+2],p=i[r+3],l=o[a],h=o[a+1],d=o[a+2],f=o[a+3];return e[t]=s*f+p*l+c*d-u*h,e[t+1]=c*f+p*h+u*l-s*d,e[t+2]=u*f+p*d+s*h-c*l,e[t+3]=p*f-s*l-c*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,c=Math.sin,u=s(i/2),p=s(r/2),l=s(o/2),h=c(i/2),d=c(r/2),f=c(o/2);switch(a){case"XYZ":this._x=h*p*l+u*d*f,this._y=u*d*l-h*p*f,this._z=u*p*f+h*d*l,this._w=u*p*l-h*d*f;break;case"YXZ":this._x=h*p*l+u*d*f,this._y=u*d*l-h*p*f,this._z=u*p*f-h*d*l,this._w=u*p*l+h*d*f;break;case"ZXY":this._x=h*p*l-u*d*f,this._y=u*d*l+h*p*f,this._z=u*p*f+h*d*l,this._w=u*p*l-h*d*f;break;case"ZYX":this._x=h*p*l-u*d*f,this._y=u*d*l+h*p*f,this._z=u*p*f-h*d*l,this._w=u*p*l+h*d*f;break;case"YZX":this._x=h*p*l+u*d*f,this._y=u*d*l+h*p*f,this._z=u*p*f-h*d*l,this._w=u*p*l-h*d*f;break;case"XZY":this._x=h*p*l-u*d*f,this._y=u*d*l-h*p*f,this._z=u*p*f+h*d*l,this._w=u*p*l+h*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],s=t[5],c=t[9],u=t[2],p=t[6],l=t[10],h=i+s+l;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(p-c)*d,this._y=(o-u)*d,this._z=(a-r)*d}else if(i>s&&i>l){const d=2*Math.sqrt(1+i-s-l);this._w=(p-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(o+u)/d}else if(s>l){const d=2*Math.sqrt(1+s-i-l);this._w=(o-u)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+p)/d}else{const d=2*Math.sqrt(1+l-i-s);this._w=(a-r)/d,this._x=(o+u)/d,this._y=(c+p)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,a=e._w,s=t._x,c=t._y,u=t._z,p=t._w;return this._x=i*p+a*s+r*u-o*c,this._y=r*p+a*c+o*s-i*u,this._z=o*p+a*u+i*c-r*s,this._w=a*p-i*s-r*c-o*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const c=1-s*s;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*o+t*this._z,this.normalize(),this}const u=Math.sqrt(c),p=Math.atan2(u,s),l=Math.sin((1-t)*p)/u,h=Math.sin(t*p)/u;return this._w=a*l+this._w*h,this._x=i*l+this._x*h,this._y=r*l+this._y*h,this._z=o*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,c=e.w,u=2*(a*r-s*i),p=2*(s*t-o*r),l=2*(o*i-a*t);return this.x=t+c*u+a*l-s*p,this.y=i+c*p+s*u-o*l,this.z=r+c*l+o*p-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,a=t.x,s=t.y,c=t.z;return this.x=r*c-o*s,this.y=o*a-i*c,this.z=i*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bl=new O,Gh=new _i;class Tn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,qi):qi.fromBufferAttribute(o,a),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),ja.subVectors(this.max,Zo),$r.subVectors(e.a,Zo),eo.subVectors(e.b,Zo),to.subVectors(e.c,Zo),Vn.subVectors(eo,$r),Gn.subVectors(to,eo),mr.subVectors($r,to);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-mr.z,mr.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,mr.z,0,-mr.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-mr.y,mr.x,0];return!Sl(t,$r,eo,to,ja)||(t=[1,0,0,0,1,0,0,0,1],!Sl(t,$r,eo,to,ja))?!1:(qa.crossVectors(Vn,Gn),t=[qa.x,qa.y,qa.z],Sl(t,$r,eo,to,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new O,new O,new O,new O,new O,new O,new O,new O],qi=new O,Xa=new Tn,$r=new O,eo=new O,to=new O,Vn=new O,Gn=new O,mr=new O,Zo=new O,ja=new O,qa=new O,gr=new O;function Sl(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){gr.fromArray(n,o);const s=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),c=e.dot(gr),u=t.dot(gr),p=i.dot(gr);if(Math.max(-Math.max(c,u,p),Math.min(c,u,p))>s)return!1}return!0}const e_=new Tn,Qo=new O,wl=new O;class rn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):e_.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(wl)),this.expandByPoint(Qo.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new O,El=new O,Ya=new O,Wn=new O,Al=new O,Ka=new O,Rl=new O;class io{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){El.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(El);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Ya),s=Wn.dot(this.direction),c=-Wn.dot(Ya),u=Wn.lengthSq(),p=Math.abs(1-a*a);let l,h,d,f;if(p>0)if(l=a*c-s,h=a*s-c,f=o*p,l>=0)if(h>=-f)if(h<=f){const _=1/p;l*=_,h*=_,d=l*(l+a*h+2*s)+h*(a*l+h+2*c)+u}else h=o,l=Math.max(0,-(a*h+s)),d=-l*l+h*(h+2*c)+u;else h=-o,l=Math.max(0,-(a*h+s)),d=-l*l+h*(h+2*c)+u;else h<=-f?(l=Math.max(0,-(-a*o+s)),h=l>0?-o:Math.min(Math.max(-o,-c),o),d=-l*l+h*(h+2*c)+u):h<=f?(l=0,h=Math.min(Math.max(-o,-c),o),d=h*(h+2*c)+u):(l=Math.max(0,-(a*o+s)),h=l>0?o:Math.min(Math.max(-o,-c),o),d=-l*l+h*(h+2*c)+u);else h=a>0?-o:o,l=Math.max(0,-(a*h+s)),d=-l*l+h*(h+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,l),r&&r.copy(El).addScaledVector(Ya,h),d}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const i=Sn.dot(this.direction),r=Sn.dot(Sn)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,c=i+a;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,s,c;const u=1/this.direction.x,p=1/this.direction.y,l=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),p>=0?(o=(e.min.y-h.y)*p,a=(e.max.y-h.y)*p):(o=(e.max.y-h.y)*p,a=(e.min.y-h.y)*p),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),l>=0?(s=(e.min.z-h.z)*l,c=(e.max.z-h.z)*l):(s=(e.max.z-h.z)*l,c=(e.min.z-h.z)*l),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,r,o){Al.subVectors(t,e),Ka.subVectors(i,e),Rl.crossVectors(Al,Ka);let a=this.direction.dot(Rl),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const c=s*this.direction.dot(Ka.crossVectors(Wn,Ka));if(c<0)return null;const u=s*this.direction.dot(Al.cross(Wn));if(u<0||c+u>a)return null;const p=-s*Wn.dot(Rl);return p<0?null:this.at(p/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,i,r,o,a,s,c,u,p,l,h,d,f,_,g){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,c,u,p,l,h,d,f,_,g)}set(e,t,i,r,o,a,s,c,u,p,l,h,d,f,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=o,m[5]=a,m[9]=s,m[13]=c,m[2]=u,m[6]=p,m[10]=l,m[14]=h,m[3]=d,m[7]=f,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/no.setFromMatrixColumn(e,0).length(),o=1/no.setFromMatrixColumn(e,1).length(),a=1/no.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),c=Math.cos(r),u=Math.sin(r),p=Math.cos(o),l=Math.sin(o);if(e.order==="XYZ"){const h=a*p,d=a*l,f=s*p,_=s*l;t[0]=c*p,t[4]=-c*l,t[8]=u,t[1]=d+f*u,t[5]=h-_*u,t[9]=-s*c,t[2]=_-h*u,t[6]=f+d*u,t[10]=a*c}else if(e.order==="YXZ"){const h=c*p,d=c*l,f=u*p,_=u*l;t[0]=h+_*s,t[4]=f*s-d,t[8]=a*u,t[1]=a*l,t[5]=a*p,t[9]=-s,t[2]=d*s-f,t[6]=_+h*s,t[10]=a*c}else if(e.order==="ZXY"){const h=c*p,d=c*l,f=u*p,_=u*l;t[0]=h-_*s,t[4]=-a*l,t[8]=f+d*s,t[1]=d+f*s,t[5]=a*p,t[9]=_-h*s,t[2]=-a*u,t[6]=s,t[10]=a*c}else if(e.order==="ZYX"){const h=a*p,d=a*l,f=s*p,_=s*l;t[0]=c*p,t[4]=f*u-d,t[8]=h*u+_,t[1]=c*l,t[5]=_*u+h,t[9]=d*u-f,t[2]=-u,t[6]=s*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*u,f=s*c,_=s*u;t[0]=c*p,t[4]=_-h*l,t[8]=f*l+d,t[1]=l,t[5]=a*p,t[9]=-s*p,t[2]=-u*p,t[6]=d*l+f,t[10]=h-_*l}else if(e.order==="XZY"){const h=a*c,d=a*u,f=s*c,_=s*u;t[0]=c*p,t[4]=-l,t[8]=u*p,t[1]=h*l+_,t[5]=a*p,t[9]=d*l-f,t[2]=f*l-d,t[6]=s*p,t[10]=_*l+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t_,e,i_)}lookAt(e,t,i){const r=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Xn.crossVectors(i,vi),Xn.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Xn.crossVectors(i,vi)),Xn.normalize(),Za.crossVectors(vi,Xn),r[0]=Xn.x,r[4]=Za.x,r[8]=vi.x,r[1]=Xn.y,r[5]=Za.y,r[9]=vi.y,r[2]=Xn.z,r[6]=Za.z,r[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[4],c=i[8],u=i[12],p=i[1],l=i[5],h=i[9],d=i[13],f=i[2],_=i[6],g=i[10],m=i[14],x=i[3],y=i[7],T=i[11],P=i[15],S=r[0],E=r[4],C=r[8],M=r[12],b=r[1],k=r[5],X=r[9],U=r[13],Y=r[2],q=r[6],te=r[10],ne=r[14],Q=r[3],se=r[7],de=r[11],Pe=r[15];return o[0]=a*S+s*b+c*Y+u*Q,o[4]=a*E+s*k+c*q+u*se,o[8]=a*C+s*X+c*te+u*de,o[12]=a*M+s*U+c*ne+u*Pe,o[1]=p*S+l*b+h*Y+d*Q,o[5]=p*E+l*k+h*q+d*se,o[9]=p*C+l*X+h*te+d*de,o[13]=p*M+l*U+h*ne+d*Pe,o[2]=f*S+_*b+g*Y+m*Q,o[6]=f*E+_*k+g*q+m*se,o[10]=f*C+_*X+g*te+m*de,o[14]=f*M+_*U+g*ne+m*Pe,o[3]=x*S+y*b+T*Y+P*Q,o[7]=x*E+y*k+T*q+P*se,o[11]=x*C+y*X+T*te+P*de,o[15]=x*M+y*U+T*ne+P*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],c=e[9],u=e[13],p=e[2],l=e[6],h=e[10],d=e[14],f=e[3],_=e[7],g=e[11],m=e[15];return f*(+o*c*l-r*u*l-o*s*h+i*u*h+r*s*d-i*c*d)+_*(+t*c*d-t*u*h+o*a*h-r*a*d+r*u*p-o*c*p)+g*(+t*u*l-t*s*d-o*a*l+i*a*d+o*s*p-i*u*p)+m*(-r*s*p-t*c*l+t*s*h+r*a*l-i*a*h+i*c*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],u=e[7],p=e[8],l=e[9],h=e[10],d=e[11],f=e[12],_=e[13],g=e[14],m=e[15],x=l*g*u-_*h*u+_*c*d-s*g*d-l*c*m+s*h*m,y=f*h*u-p*g*u-f*c*d+a*g*d+p*c*m-a*h*m,T=p*_*u-f*l*u+f*s*d-a*_*d-p*s*m+a*l*m,P=f*l*c-p*_*c-f*s*h+a*_*h+p*s*g-a*l*g,S=t*x+i*y+r*T+o*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=x*E,e[1]=(_*h*o-l*g*o-_*r*d+i*g*d+l*r*m-i*h*m)*E,e[2]=(s*g*o-_*c*o+_*r*u-i*g*u-s*r*m+i*c*m)*E,e[3]=(l*c*o-s*h*o-l*r*u+i*h*u+s*r*d-i*c*d)*E,e[4]=y*E,e[5]=(p*g*o-f*h*o+f*r*d-t*g*d-p*r*m+t*h*m)*E,e[6]=(f*c*o-a*g*o-f*r*u+t*g*u+a*r*m-t*c*m)*E,e[7]=(a*h*o-p*c*o+p*r*u-t*h*u-a*r*d+t*c*d)*E,e[8]=T*E,e[9]=(f*l*o-p*_*o-f*i*d+t*_*d+p*i*m-t*l*m)*E,e[10]=(a*_*o-f*s*o+f*i*u-t*_*u-a*i*m+t*s*m)*E,e[11]=(p*s*o-a*l*o-p*i*u+t*l*u+a*i*d-t*s*d)*E,e[12]=P*E,e[13]=(p*_*r-f*l*r+f*i*h-t*_*h-p*i*g+t*l*g)*E,e[14]=(f*s*r-a*_*r-f*i*c+t*_*c+a*i*g-t*s*g)*E,e[15]=(a*l*r-p*s*r+p*i*c-t*l*c-a*i*h+t*s*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,s=e.y,c=e.z,u=o*a,p=o*s;return this.set(u*a+i,u*s-r*c,u*c+r*s,0,u*s+r*c,p*s+i,p*c-r*a,0,u*c-r*s,p*c+r*a,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,a=t._y,s=t._z,c=t._w,u=o+o,p=a+a,l=s+s,h=o*u,d=o*p,f=o*l,_=a*p,g=a*l,m=s*l,x=c*u,y=c*p,T=c*l,P=i.x,S=i.y,E=i.z;return r[0]=(1-(_+m))*P,r[1]=(d+T)*P,r[2]=(f-y)*P,r[3]=0,r[4]=(d-T)*S,r[5]=(1-(h+m))*S,r[6]=(g+x)*S,r[7]=0,r[8]=(f+y)*E,r[9]=(g-x)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=no.set(r[0],r[1],r[2]).length();const a=no.set(r[4],r[5],r[6]).length(),s=no.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Yi.copy(this);const c=1/o,u=1/a,p=1/s;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=u,Yi.elements[5]*=u,Yi.elements[6]*=u,Yi.elements[8]*=p,Yi.elements[9]*=p,Yi.elements[10]*=p,t.setFromRotationMatrix(Yi),i.x=o,i.y=a,i.z=s,this}makePerspective(e,t,i,r,o,a,s=Mn){const c=this.elements,u=2*o/(t-e),p=2*o/(i-r),l=(t+e)/(t-e),h=(i+r)/(i-r);let d,f;if(s===Mn)d=-(a+o)/(a-o),f=-2*a*o/(a-o);else if(s===Ga)d=-a/(a-o),f=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,o,a,s=Mn){const c=this.elements,u=1/(t-e),p=1/(i-r),l=1/(a-o),h=(t+e)*u,d=(i+r)*p;let f,_;if(s===Mn)f=(a+o)*l,_=-2*l;else if(s===Ga)f=o*l,_=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*p,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const no=new O,Yi=new et,t_=new O(0,0,0),i_=new O(1,1,1),Xn=new O,Za=new O,vi=new O,Wh=new et,Xh=new _i;class gn{constructor(e=0,t=0,i=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],c=r[1],u=r[5],p=r[9],l=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-p,d),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(s,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,o),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-l,o)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-p,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const jh=new O,ro=new _i,wn=new et,Qa=new O,Jo=new O,r_=new O,o_=new _i,qh=new O(1,0,0),Yh=new O(0,1,0),Kh=new O(0,0,1),Zh={type:"added"},a_={type:"removed"},oo={type:"childadded",child:null},Pl={type:"childremoved",child:null};class ct extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new O,t=new gn,i=new _i,r=new O(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new lt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(qh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Jo,Qa,this.up):wn.lookAt(Qa,Jo,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),ro.setFromRotationMatrix(wn),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),oo.child=e,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a_),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,r_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,o_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let u=0,p=c.length;u<p;u++){const l=c[u];o(e.shapes,l)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,u=this.material.length;c<u;c++)s.push(o(e.materials,this.material[c]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(o(e.animations,c))}}if(t){const s=a(e.geometries),c=a(e.materials),u=a(e.textures),p=a(e.images),l=a(e.shapes),h=a(e.skeletons),d=a(e.animations),f=a(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),p.length>0&&(i.images=p),l.length>0&&(i.shapes=l),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(s){const c=[];for(const u in s){const p=s[u];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ct.DEFAULT_UP=new O(0,1,0),ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new O,En=new O,Il=new O,An=new O,ao=new O,so=new O,Qh=new O,Ll=new O,Nl=new O,Dl=new O;class _n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ki.subVectors(e,t),r.cross(Ki);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Ki.subVectors(r,t),En.subVectors(i,t),Il.subVectors(e,t);const a=Ki.dot(Ki),s=Ki.dot(En),c=Ki.dot(Il),u=En.dot(En),p=En.dot(Il),l=a*u-s*s;if(l===0)return o.set(0,0,0),null;const h=1/l,d=(u*c-s*p)*h,f=(a*p-s*c)*h;return o.set(1-d-f,f,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,i,r,o,a,s,c){return this.getBarycoord(e,t,i,r,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,An.x),c.addScaledVector(a,An.y),c.addScaledVector(s,An.z),c)}static isFrontFacing(e,t,i,r){return Ki.subVectors(i,t),En.subVectors(e,t),Ki.cross(En).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),En.subVectors(this.a,this.b),Ki.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let a,s;ao.subVectors(r,i),so.subVectors(o,i),Ll.subVectors(e,i);const c=ao.dot(Ll),u=so.dot(Ll);if(c<=0&&u<=0)return t.copy(i);Nl.subVectors(e,r);const p=ao.dot(Nl),l=so.dot(Nl);if(p>=0&&l<=p)return t.copy(r);const h=c*l-p*u;if(h<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(ao,a);Dl.subVectors(e,o);const d=ao.dot(Dl),f=so.dot(Dl);if(f>=0&&d<=f)return t.copy(o);const _=d*u-c*f;if(_<=0&&u>=0&&f<=0)return s=u/(u-f),t.copy(i).addScaledVector(so,s);const g=p*f-d*l;if(g<=0&&l-p>=0&&d-f>=0)return Qh.subVectors(o,r),s=(l-p)/(l-p+(d-f)),t.copy(r).addScaledVector(Qh,s);const m=1/(g+_+h);return a=_*m,s=h*m,t.copy(i).addScaledVector(ao,a).addScaledVector(so,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Ol(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=yl(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=Ol(a,o,e+1/3),this.g=Ol(a,o,e),this.b=Ol(a,o,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=ti){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const i=Jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=Ml(e.r),this.g=Ml(e.g),this.b=Ml(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return gt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(zt(Kt.r*255,0,255))*65536+Math.round(zt(Kt.g*255,0,255))*256+Math.round(zt(Kt.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,o=Kt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let c,u;const p=(s+a)/2;if(s===a)c=0,u=0;else{const l=a-s;switch(u=p<=.5?l/(a+s):l/(2-a-s),a){case i:c=(r-o)/l+(r<o?6:0);break;case r:c=(o-i)/l+2;break;case o:c=(i-r)/l+4;break}c/=6}return e.h=c,e.s=u,e.l=p,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=ti){gt.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Ja);const i=Yo(jn.h,Ja.h,t),r=Yo(jn.s,Ja.s,t),o=Yo(jn.l,Ja.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new qe;qe.NAMES=Jh;let s_=0;class on extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Vr,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=sl,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==sl&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Da&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const c=o[s];delete c.metadata,a.push(c)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qn extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rn=l_();function l_(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;u<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(i[c]=1024>>-u-14,i[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(i[c]=u+15<<10,i[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const o=new Uint32Array(2048),a=new Uint32Array(64),s=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,p=0;for(;!(u&8388608);)u<<=1,p-=8388608;u&=-8388609,p+=947912704,o[c]=u|p}for(let c=1024;c<2048;++c)o[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(s[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:o,exponentTable:a,offsetTable:s}}function c_(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=zt(n,-65504,65504),Rn.floatView[0]=n;const e=Rn.uint32View[0],t=e>>23&511;return Rn.baseTable[t]+((e&8388607)>>Rn.shiftTable[t])}function u_(n){const e=n>>10;return Rn.uint32View[0]=Rn.mantissaTable[Rn.offsetTable[e]+(n&1023)]+Rn.exponentTable[e],Rn.floatView[0]}const lo={toHalfFloat:c_,fromHalfFloat:u_},Ut=new O,$a=new je;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),o=_t(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class $h extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ed extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ni extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let h_=0;const Di=new et,Ul=new ct,co=new O,yi=new Tn,$o=new Tn,Ht=new O;class Wi extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uh(e)?ed:$h)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new lt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,i){return Di.makeTranslation(e,t,i),this.applyMatrix4(Di),this}scale(e,t,i){return Di.makeScale(e,t,i),this.applyMatrix4(Di),this}lookAt(e){return Ul.lookAt(e),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ni(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const s=t[o];$o.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(yi.min,$o.min),yi.expandByPoint(Ht),Ht.addVectors(yi.max,$o.max),yi.expandByPoint(Ht)):(yi.expandByPoint($o.min),yi.expandByPoint($o.max))}yi.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)Ht.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let o=0,a=t.length;o<a;o++){const s=t[o],c=this.morphTargetsRelative;for(let u=0,p=s.count;u<p;u++)Ht.fromBufferAttribute(s,u),c&&(co.fromBufferAttribute(e,u),Ht.add(co)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),s=[],c=[];for(let C=0;C<i.count;C++)s[C]=new O,c[C]=new O;const u=new O,p=new O,l=new O,h=new je,d=new je,f=new je,_=new O,g=new O;function m(C,M,b){u.fromBufferAttribute(i,C),p.fromBufferAttribute(i,M),l.fromBufferAttribute(i,b),h.fromBufferAttribute(o,C),d.fromBufferAttribute(o,M),f.fromBufferAttribute(o,b),p.sub(u),l.sub(u),d.sub(h),f.sub(h);const k=1/(d.x*f.y-f.x*d.y);isFinite(k)&&(_.copy(p).multiplyScalar(f.y).addScaledVector(l,-d.y).multiplyScalar(k),g.copy(l).multiplyScalar(d.x).addScaledVector(p,-f.x).multiplyScalar(k),s[C].add(_),s[M].add(_),s[b].add(_),c[C].add(g),c[M].add(g),c[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,M=x.length;C<M;++C){const b=x[C],k=b.start,X=b.count;for(let U=k,Y=k+X;U<Y;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new O,T=new O,P=new O,S=new O;function E(C){P.fromBufferAttribute(r,C),S.copy(P);const M=s[C];y.copy(M),y.sub(P.multiplyScalar(P.dot(M))).normalize(),T.crossVectors(S,M);const b=T.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,b)}for(let C=0,M=x.length;C<M;++C){const b=x[C],k=b.start,X=b.count;for(let U=k,Y=k+X;U<Y;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new O,o=new O,a=new O,s=new O,c=new O,u=new O,p=new O,l=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const f=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,f),o.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),p.subVectors(a,o),l.subVectors(r,o),p.cross(l),s.fromBufferAttribute(i,f),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),s.add(p),c.add(p),u.add(p),i.setXYZ(f,s.x,s.y,s.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),p.subVectors(a,o),l.subVectors(r,o),p.cross(l),i.setXYZ(h+0,p.x,p.y,p.z),i.setXYZ(h+1,p.x,p.y,p.z),i.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(s,c){const u=s.array,p=s.itemSize,l=s.normalized,h=new u.constructor(c.length*p);let d=0,f=0;for(let _=0,g=c.length;_<g;_++){s.isInterleavedBufferAttribute?d=c[_]*s.data.stride+s.offset:d=c[_]*p;for(let m=0;m<p;m++)h[f++]=u[d++]}return new Xt(h,p,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wi,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],u=e(c,i);t.setAttribute(s,u)}const o=this.morphAttributes;for(const s in o){const c=[],u=o[s];for(let p=0,l=u.length;p<l;p++){const h=u[p],d=e(h,i);c.push(d)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const u=a[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],p=[];for(let l=0,h=u.length;l<h;l++){const d=u[l];p.push(d.toJSON(e.data))}p.length>0&&(r[c]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(t))}const o=e.morphAttributes;for(const u in o){const p=[],l=o[u];for(let h=0,d=l.length;h<d;h++)p.push(l[h].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,p=a.length;u<p;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new et,_r=new io,es=new rn,id=new O,uo=new O,ho=new O,po=new O,Fl=new O,ts=new O,is=new je,ns=new je,rs=new je,nd=new O,rd=new O,od=new O,os=new O,as=new O;class ii extends ct{constructor(e=new Wi,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){ts.set(0,0,0);for(let c=0,u=o.length;c<u;c++){const p=s[c],l=o[c];p!==0&&(Fl.fromBufferAttribute(l,e),a?ts.addScaledVector(Fl,p):ts.addScaledVector(Fl.sub(t),p))}t.add(ts)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(o),_r.copy(e.ray).recast(e.near),!(es.containsPoint(_r.origin)===!1&&(_r.intersectSphere(es,id)===null||_r.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(td.copy(o).invert(),_r.copy(e.ray).applyMatrix4(td),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,i){let r;const o=this.geometry,a=this.material,s=o.index,c=o.attributes.position,u=o.attributes.uv,p=o.attributes.uv1,l=o.attributes.normal,h=o.groups,d=o.drawRange;if(s!==null)if(Array.isArray(a))for(let f=0,_=h.length;f<_;f++){const g=h[f],m=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let T=x,P=y;T<P;T+=3){const S=s.getX(T),E=s.getX(T+1),C=s.getX(T+2);r=ss(this,m,e,i,u,p,l,S,E,C),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),_=Math.min(s.count,d.start+d.count);for(let g=f,m=_;g<m;g+=3){const x=s.getX(g),y=s.getX(g+1),T=s.getX(g+2);r=ss(this,a,e,i,u,p,l,x,y,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,_=h.length;f<_;f++){const g=h[f],m=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let T=x,P=y;T<P;T+=3){const S=T,E=T+1,C=T+2;r=ss(this,m,e,i,u,p,l,S,E,C),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=f,m=_;g<m;g+=3){const x=g,y=g+1,T=g+2;r=ss(this,a,e,i,u,p,l,x,y,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function d_(n,e,t,i,r,o,a,s){let c;if(e.side===ci?c=i.intersectTriangle(a,o,r,!0,s):c=i.intersectTriangle(r,o,a,e.side===yn,s),c===null)return null;as.copy(s),as.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(as);return u<t.near||u>t.far?null:{distance:u,point:as.clone(),object:n}}function ss(n,e,t,i,r,o,a,s,c,u){n.getVertexPosition(s,uo),n.getVertexPosition(c,ho),n.getVertexPosition(u,po);const p=d_(n,e,t,i,uo,ho,po,os);if(p){r&&(is.fromBufferAttribute(r,s),ns.fromBufferAttribute(r,c),rs.fromBufferAttribute(r,u),p.uv=_n.getInterpolation(os,uo,ho,po,is,ns,rs,new je)),o&&(is.fromBufferAttribute(o,s),ns.fromBufferAttribute(o,c),rs.fromBufferAttribute(o,u),p.uv1=_n.getInterpolation(os,uo,ho,po,is,ns,rs,new je)),a&&(nd.fromBufferAttribute(a,s),rd.fromBufferAttribute(a,c),od.fromBufferAttribute(a,u),p.normal=_n.getInterpolation(os,uo,ho,po,nd,rd,od,new O),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const l={a:s,b:c,c:u,normal:new O,materialIndex:0};_n.getNormal(uo,ho,po,l.normal),p.face=l}return p}class La extends Wi{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const c=[],u=[],p=[],l=[];let h=0,d=0;f("z","y","x",-1,-1,i,t,e,a,o,0),f("z","y","x",1,-1,i,t,-e,a,o,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,o,4),f("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new Ni(u,3)),this.setAttribute("normal",new Ni(p,3)),this.setAttribute("uv",new Ni(l,2));function f(_,g,m,x,y,T,P,S,E,C,M){const b=T/E,k=P/C,X=T/2,U=P/2,Y=S/2,q=E+1,te=C+1;let ne=0,Q=0;const se=new O;for(let de=0;de<te;de++){const Pe=de*k-U;for(let Ve=0;Ve<q;Ve++){const Ue=Ve*b-X;se[_]=Ue*x,se[g]=Pe*y,se[m]=Y,u.push(se.x,se.y,se.z),se[_]=0,se[g]=0,se[m]=S>0?1:-1,p.push(se.x,se.y,se.z),l.push(Ve/E),l.push(1-de/C),ne+=1}}for(let de=0;de<C;de++)for(let Pe=0;Pe<E;Pe++){const Ve=h+Pe+q*de,Ue=h+Pe+q*(de+1),ee=h+(Pe+1)+q*(de+1),pe=h+(Pe+1)+q*de;c.push(Ve,Ue,pe),c.push(Ue,ee,pe),Q+=6}s.addGroup(d,Q,M),d+=Q,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ni(n){const e={};for(let t=0;t<n.length;t++){const i=fo(n[t]);for(const r in i)e[r]=i[r]}return e}function p_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ad(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const f_={clone:fo,merge:ni};var m_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m_,this.fragmentShader=g_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=p_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sd extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new O,ld=new je,cd=new je;class ri extends sd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,ld,cd),t.subVectors(cd,ld)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/c,t-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mo=-90,go=1;class __ extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ri(mo,go,e,t);r.layers=this.layers,this.add(r);const o=new ri(mo,go,e,t);o.layers=this.layers,this.add(o);const a=new ri(mo,go,e,t);a.layers=this.layers,this.add(a);const s=new ri(mo,go,e,t);s.layers=this.layers,this.add(s);const c=new ri(mo,go,e,t);c.layers=this.layers,this.add(c);const u=new ri(mo,go,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,s,c]=t;for(const u of t)this.remove(u);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,c,u,p]=this.children,l=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,p),e.setRenderTarget(l,h,d),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class ud extends Wt{constructor(e,t,i,r,o,a,s,c,u,p){e=e!==void 0?e:[],t=t!==void 0?t:Gr,super(e,t,i,r,o,a,s,c,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v_ extends fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ud(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new La(5,5,5),o=new Zi({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:kn});o.uniforms.tEquirect.value=t;const a=new ii(r,o),s=t.minFilter;return t.minFilter===nn&&(t.minFilter=Dt),new __(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}}const Bl=new O,y_=new O,x_=new lt;class Kn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Bl.subVectors(i,t).cross(y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Bl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||x_.getNormalMatrix(e),r=this.coplanarPoint(Bl).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new rn,ls=new O;class kl{constructor(e=new Kn,t=new Kn,i=new Kn,r=new Kn,o=new Kn,a=new Kn){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],c=r[3],u=r[4],p=r[5],l=r[6],h=r[7],d=r[8],f=r[9],_=r[10],g=r[11],m=r[12],x=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,h-u,g-d,T-m).normalize(),i[1].setComponents(c+o,h+u,g+d,T+m).normalize(),i[2].setComponents(c+a,h+p,g+f,T+x).normalize(),i[3].setComponents(c-a,h-p,g-f,T-x).normalize(),i[4].setComponents(c-s,h-l,g-_,T-y).normalize(),t===Mn)i[5].setComponents(c+s,h+l,g+_,T+y).normalize();else if(t===Ga)i[5].setComponents(s,l,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ls.x=r.normal.x>0?e.max.x:e.min.x,ls.y=r.normal.y>0?e.max.y:e.min.y,ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function M_(n){const e=new WeakMap;function t(s,c){const u=s.array,p=s.usage,l=u.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,u,p),s.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:l}}function i(s,c,u){const p=c.array,l=c._updateRange,h=c.updateRanges;if(n.bindBuffer(u,s),l.count===-1&&h.length===0&&n.bufferSubData(u,0,p),h.length!==0){for(let d=0,f=h.length;d<f;d++){const _=h[d];n.bufferSubData(u,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}c.clearUpdateRanges()}l.count!==-1&&(n.bufferSubData(u,l.offset*p.BYTES_PER_ELEMENT,p,l.offset,l.count),l.count=-1),c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(n.deleteBuffer(c.buffer),e.delete(s))}function a(s,c){if(s.isGLBufferAttribute){const p=e.get(s);(!p||p.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const u=e.get(s);if(u===void 0)e.set(s,t(s,c));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,s,c),u.version=s.version}}return{get:r,remove:o,update:a}}class Na extends Wi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,a=t/2,s=Math.floor(i),c=Math.floor(r),u=s+1,p=c+1,l=e/s,h=t/c,d=[],f=[],_=[],g=[];for(let m=0;m<p;m++){const x=m*h-a;for(let y=0;y<u;y++){const T=y*l-o;f.push(T,-x,0),_.push(0,0,1),g.push(y/s),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<s;x++){const y=x+u*m,T=x+u*(m+1),P=x+1+u*(m+1),S=x+1+u*m;d.push(y,T,S),d.push(T,P,S)}this.setIndex(d),this.setAttribute("position",new Ni(f,3)),this.setAttribute("normal",new Ni(_,3)),this.setAttribute("uv",new Ni(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.widthSegments,e.heightSegments)}}var T_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b_=`#ifdef USE_ALPHAHASH
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
#endif`,S_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
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
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
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
#endif`,I_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O_=`#ifdef USE_IRIDESCENCE
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
#endif`,U_=`#ifdef USE_BUMPMAP
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
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q_=`vec3 transformedNormal = objectNormal;
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
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`
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
}`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
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
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
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
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
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
#endif`,x0=`struct PhysicalMaterial {
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
}`,M0=`
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U0=`#ifdef USE_MORPHNORMALS
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
#endif`,F0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
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
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,av=`float getShadowMask() {
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
}`,sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
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
#endif`,cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mv=`#ifdef USE_TRANSMISSION
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
#endif`,gv=`#ifdef USE_TRANSMISSION
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tv=`uniform sampler2D t2D;
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
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`#include <common>
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
}`,Rv=`#if DEPTH_PACKING == 3200
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
}`,Cv=`#define DISTANCE
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
}`,Pv=`#define DISTANCE
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`uniform float scale;
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Fv=`#define LAMBERT
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
}`,Bv=`#define LAMBERT
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
}`,kv=`#define MATCAP
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
}`,zv=`#define MATCAP
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
}`,Hv=`#define NORMAL
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
}`,Vv=`#define NORMAL
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
}`,Gv=`#define PHONG
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
}`,Wv=`#define PHONG
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
}`,Xv=`#define STANDARD
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
}`,jv=`#define STANDARD
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
}`,qv=`#define TOON
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
}`,Yv=`#define TOON
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
}`,Kv=`uniform float size;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Qv=`#include <common>
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
}`,Jv=`uniform vec3 color;
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
}`,$v=`uniform float rotation;
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
}`,ey=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:T_,alphahash_pars_fragment:b_,alphamap_fragment:S_,alphamap_pars_fragment:w_,alphatest_fragment:E_,alphatest_pars_fragment:A_,aomap_fragment:R_,aomap_pars_fragment:C_,batching_pars_vertex:P_,batching_vertex:I_,begin_vertex:L_,beginnormal_vertex:N_,bsdfs:D_,iridescence_fragment:O_,bumpmap_pars_fragment:U_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:z_,color_fragment:H_,color_pars_fragment:V_,color_pars_vertex:G_,color_vertex:W_,common:X_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:q_,displacementmap_pars_vertex:Y_,displacementmap_vertex:K_,emissivemap_fragment:Z_,emissivemap_pars_fragment:Q_,colorspace_fragment:J_,colorspace_pars_fragment:$_,envmap_fragment:e0,envmap_common_pars_fragment:t0,envmap_pars_fragment:i0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:r0,fog_vertex:o0,fog_pars_vertex:a0,fog_fragment:s0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:u0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:_0,lights_phong_pars_fragment:v0,lights_physical_fragment:y0,lights_physical_pars_fragment:x0,lights_fragment_begin:M0,lights_fragment_maps:T0,lights_fragment_end:b0,logdepthbuf_fragment:S0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:E0,logdepthbuf_vertex:A0,map_fragment:R0,map_pars_fragment:C0,map_particle_fragment:P0,map_particle_pars_fragment:I0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:N0,morphinstance_vertex:D0,morphcolor_vertex:O0,morphnormal_vertex:U0,morphtarget_pars_vertex:F0,morphtarget_vertex:B0,normal_fragment_begin:k0,normal_fragment_maps:z0,normal_pars_fragment:H0,normal_pars_vertex:V0,normal_vertex:G0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Y0,opaque_fragment:K0,packing:Z0,premultiplied_alpha_fragment:Q0,project_vertex:J0,dithering_fragment:$0,dithering_pars_fragment:ev,roughnessmap_fragment:tv,roughnessmap_pars_fragment:iv,shadowmap_pars_fragment:nv,shadowmap_pars_vertex:rv,shadowmap_vertex:ov,shadowmask_pars_fragment:av,skinbase_vertex:sv,skinning_pars_vertex:lv,skinning_vertex:cv,skinnormal_vertex:uv,specularmap_fragment:hv,specularmap_pars_fragment:dv,tonemapping_fragment:pv,tonemapping_pars_fragment:fv,transmission_fragment:mv,transmission_pars_fragment:gv,uv_pars_fragment:_v,uv_pars_vertex:vv,uv_vertex:yv,worldpos_vertex:xv,background_vert:Mv,background_frag:Tv,backgroundCube_vert:bv,backgroundCube_frag:Sv,cube_vert:wv,cube_frag:Ev,depth_vert:Av,depth_frag:Rv,distanceRGBA_vert:Cv,distanceRGBA_frag:Pv,equirect_vert:Iv,equirect_frag:Lv,linedashed_vert:Nv,linedashed_frag:Dv,meshbasic_vert:Ov,meshbasic_frag:Uv,meshlambert_vert:Fv,meshlambert_frag:Bv,meshmatcap_vert:kv,meshmatcap_frag:zv,meshnormal_vert:Hv,meshnormal_frag:Vv,meshphong_vert:Gv,meshphong_frag:Wv,meshphysical_vert:Xv,meshphysical_frag:jv,meshtoon_vert:qv,meshtoon_frag:Yv,points_vert:Kv,points_frag:Zv,shadow_vert:Qv,shadow_frag:Jv,sprite_vert:$v,sprite_frag:ey},Se={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},an={basic:{uniforms:ni([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:ni([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:ni([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:ni([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:ni([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:ni([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:ni([Se.points,Se.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:ni([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:ni([Se.common,Se.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:ni([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:ni([Se.sprite,Se.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:ni([Se.common,Se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:ni([Se.lights,Se.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};an.physical={uniforms:ni([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const cs={r:0,b:0,g:0},yr=new gn,ty=new et;function iy(n,e,t,i,r,o,a){const s=new qe(0);let c=o===!0?0:1,u,p,l=null,h=0,d=null;function f(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const T=f(x);T===null?m(s,c):T&&T.isColor&&(m(T,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function g(x,y){const T=f(y);T&&(T.isCubeTexture||T.mapping===Ua)?(p===void 0&&(p=new ii(new La(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:fo(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),yr.copy(y.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(ty.makeRotationFromEuler(yr)),p.material.toneMapped=gt.getTransfer(T.colorSpace)!==St,(l!==T||h!==T.version||d!==n.toneMapping)&&(p.material.needsUpdate=!0,l=T,h=T.version,d=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new ii(new Na(2,2),new Zi({name:"BackgroundMaterial",uniforms:fo(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=gt.getTransfer(T.colorSpace)!==St,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(l!==T||h!==T.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,l=T,h=T.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function m(x,y){x.getRGB(cs,ad(n)),i.buffers.color.setClear(cs.r,cs.g,cs.b,y,a)}return{getClearColor:function(){return s},setClearColor:function(x,y=1){s.set(x),c=y,m(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,m(s,c)},render:_,addToRenderList:g}}function ny(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,a=!1;function s(b,k,X,U,Y){let q=!1;const te=l(U,X,k);o!==te&&(o=te,u(o.object)),q=d(b,U,X,Y),q&&f(b,U,X,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,T(b,k,X,U),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function u(b){return n.bindVertexArray(b)}function p(b){return n.deleteVertexArray(b)}function l(b,k,X){const U=X.wireframe===!0;let Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let q=Y[k.id];q===void 0&&(q={},Y[k.id]=q);let te=q[U];return te===void 0&&(te=h(c()),q[U]=te),te}function h(b){const k=[],X=[],U=[];for(let Y=0;Y<t;Y++)k[Y]=0,X[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:U,object:b,attributes:{},index:null}}function d(b,k,X,U){const Y=o.attributes,q=k.attributes;let te=0;const ne=X.getAttributes();for(const Q in ne)if(ne[Q].location>=0){const se=Y[Q];let de=q[Q];if(de===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;te++}return o.attributesNum!==te||o.index!==U}function f(b,k,X,U){const Y={},q=k.attributes;let te=0;const ne=X.getAttributes();for(const Q in ne)if(ne[Q].location>=0){let se=q[Q];se===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(se=b.instanceColor));const de={};de.attribute=se,se&&se.data&&(de.data=se.data),Y[Q]=de,te++}o.attributes=Y,o.attributesNum=te,o.index=U}function _(){const b=o.newAttributes;for(let k=0,X=b.length;k<X;k++)b[k]=0}function g(b){m(b,0)}function m(b,k){const X=o.newAttributes,U=o.enabledAttributes,Y=o.attributeDivisors;X[b]=1,U[b]===0&&(n.enableVertexAttribArray(b),U[b]=1),Y[b]!==k&&(n.vertexAttribDivisor(b,k),Y[b]=k)}function x(){const b=o.newAttributes,k=o.enabledAttributes;for(let X=0,U=k.length;X<U;X++)k[X]!==b[X]&&(n.disableVertexAttribArray(X),k[X]=0)}function y(b,k,X,U,Y,q,te){te===!0?n.vertexAttribIPointer(b,k,X,Y,q):n.vertexAttribPointer(b,k,X,U,Y,q)}function T(b,k,X,U){_();const Y=U.attributes,q=X.getAttributes(),te=k.defaultAttributeValues;for(const ne in q){const Q=q[ne];if(Q.location>=0){let se=Y[ne];if(se===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const de=se.normalized,Pe=se.itemSize,Ve=e.get(se);if(Ve===void 0)continue;const Ue=Ve.buffer,ee=Ve.type,pe=Ve.bytesPerElement,Re=ee===n.INT||ee===n.UNSIGNED_INT||se.gpuType===Yu;if(se.isInterleavedBufferAttribute){const ye=se.data,Je=ye.stride,Ze=se.offset;if(ye.isInstancedInterleavedBuffer){for(let H=0;H<Q.locationSize;H++)m(Q.location+H,ye.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let H=0;H<Q.locationSize;H++)g(Q.location+H);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let H=0;H<Q.locationSize;H++)y(Q.location+H,Pe/Q.locationSize,ee,de,Je*pe,(Ze+Pe/Q.locationSize*H)*pe,Re)}else{if(se.isInstancedBufferAttribute){for(let ye=0;ye<Q.locationSize;ye++)m(Q.location+ye,se.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ye=0;ye<Q.locationSize;ye++)g(Q.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let ye=0;ye<Q.locationSize;ye++)y(Q.location+ye,Pe/Q.locationSize,ee,de,Pe*pe,Pe/Q.locationSize*ye*pe,Re)}}else if(te!==void 0){const de=te[ne];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(Q.location,de);break;case 3:n.vertexAttrib3fv(Q.location,de);break;case 4:n.vertexAttrib4fv(Q.location,de);break;default:n.vertexAttrib1fv(Q.location,de)}}}}x()}function P(){C();for(const b in i){const k=i[b];for(const X in k){const U=k[X];for(const Y in U)p(U[Y].object),delete U[Y];delete k[X]}delete i[b]}}function S(b){if(i[b.id]===void 0)return;const k=i[b.id];for(const X in k){const U=k[X];for(const Y in U)p(U[Y].object),delete U[Y];delete k[X]}delete i[b.id]}function E(b){for(const k in i){const X=i[k];if(X[b.id]===void 0)continue;const U=X[b.id];for(const Y in U)p(U[Y].object),delete U[Y];delete X[b.id]}}function C(){M(),a=!0,o!==r&&(o=r,u(o.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:C,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function ry(n,e,t){let i;function r(u){i=u}function o(u,p){n.drawArrays(i,u,p),t.update(p,i,1)}function a(u,p,l){l!==0&&(n.drawArraysInstanced(i,u,p,l),t.update(p,i,l))}function s(u,p,l){if(l===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<l;d++)this.render(u[d],p[d]);else{h.multiDrawArraysWEBGL(i,u,0,p,0,l);let d=0;for(let f=0;f<l;f++)d+=p[f];t.update(d,i,1)}}function c(u,p,l,h){if(l===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u.length;f++)a(u[f],p[f],h[f]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,p,0,h,0,l);let f=0;for(let _=0;_<l;_++)f+=p[_];for(let _=0;_<h.length;_++)t.update(f,i,h[_])}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function oy(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(S){return!(S!==Li&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(S){const E=S===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Hn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==qt&&!E)}function c(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const p=c(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const l=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=d>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:T,maxSamples:P}}function ay(n){const e=this;let t=null,i=0,r=!1,o=!1;const a=new Kn,s=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){const d=l.length!==0||h||i!==0||r;return r=h,i=l.length,d},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(l,h){t=p(l,h,0)},this.setState=function(l,h,d){const f=l.clippingPlanes,_=l.clipIntersection,g=l.clipShadows,m=n.get(l);if(!r||f===null||f.length===0||o&&!g)o?p(null):u();else{const x=o?0:i,y=x*4;let T=m.clippingState||null;c.value=T,T=p(f,h,y,d);for(let P=0;P!==y;++P)T[P]=t[P];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(l,h,d,f){const _=l!==null?l.length:0;let g=null;if(_!==0){if(g=c.value,f!==!0||g===null){const m=d+_*4,x=h.matrixWorldInverse;s.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,T=d;y!==_;++y,T+=4)a.copy(l[y]).applyMatrix4(x,s),a.normal.toArray(g,T),g[T+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function sy(n){let e=new WeakMap;function t(a,s){return s===Oa?a.mapping=Gr:s===ll&&(a.mapping=Wr),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===Oa||s===ll)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new v_(c.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class zl extends sd{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,s-=p*this.view.offsetY,c=s-p*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=4,dd=[.125,.215,.35,.446,.526,.582],xr=20,Hl=new zl,pd=new qe;let Vl=null,Gl=0,Wl=0,Xl=!1;const Mr=(1+Math.sqrt(5))/2,vo=1/Mr,fd=[new O(-Mr,vo,0),new O(Mr,vo,0),new O(-vo,0,Mr),new O(vo,0,Mr),new O(0,Mr,-vo),new O(0,Mr,vo),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,Gl,Wl),this._renderer.xr.enabled=Xl,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ii,format:Li,colorSpace:Ot,depthBuffer:!1},r=gd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(o)),this._blurMaterial=cy(o,e,t)}return r}_compileMaterial(e){const t=new ii(this._lodPlanes[0],e);this._renderer.compile(t,Hl)}_sceneToCubeUV(e,t,i,r){const o=new ri(90,1,t,i),a=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,p=c.toneMapping;c.getClearColor(pd),c.toneMapping=zn,c.autoClear=!1;const l=new qn({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1}),h=new ii(new La,l);let d=!1;const f=e.background;f?f.isColor&&(l.color.copy(f),e.background=null,d=!0):(l.color.copy(pd),d=!0);for(let _=0;_<6;_++){const g=_%3;g===0?(o.up.set(0,a[_],0),o.lookAt(s[_],0,0)):g===1?(o.up.set(0,0,a[_]),o.lookAt(0,s[_],0)):(o.up.set(0,a[_],0),o.lookAt(0,0,s[_]));const m=this._cubeSize;us(r,g*m,_>2?m:0,m,m),c.setRenderTarget(r),d&&c.render(h,o),c.render(e,o)}h.geometry.dispose(),h.material.dispose(),c.toneMapping=p,c.autoClear=u,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Gr||e.mapping===Wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new ii(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const c=this._cubeSize;us(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Hl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=fd[(r-o-1)%fd.length];this._blur(e,o-1,o,a,s)}t.autoClear=i}_blur(e,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,s){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,l=new ii(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,f=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*xr-1),_=o/f,g=isFinite(o)?1+Math.floor(p*_):xr;g>xr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xr}`);const m=[];let x=0;for(let E=0;E<xr;++E){const C=E/_,M=Math.exp(-C*C/2);m.push(M),E===0?x+=M:E<g&&(x+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:y}=this;h.dTheta.value=f,h.mipInt.value=y-i;const T=this._sizeLods[r],P=3*T*(r>y-_o?r-y+_o:0),S=4*(this._cubeSize-T);us(t,P,S,3*T,2*T),c.setRenderTarget(t),c.render(l,Hl)}}function ly(n){const e=[],t=[],i=[];let r=n;const o=n-_o+1+dd.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let c=1/s;a>n-_o?c=dd[a-n+_o-1]:a===0&&(c=0),i.push(c);const u=1/(s-2),p=-u,l=1+u,h=[p,p,l,p,l,l,p,p,l,l,p,l],d=6,f=6,_=3,g=2,m=1,x=new Float32Array(_*f*d),y=new Float32Array(g*f*d),T=new Float32Array(m*f*d);for(let S=0;S<d;S++){const E=S%3*2/3-1,C=S>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];x.set(M,_*f*S),y.set(h,g*f*S);const b=[S,S,S,S,S,S];T.set(b,m*f*S)}const P=new Wi;P.setAttribute("position",new Xt(x,_)),P.setAttribute("uv",new Xt(y,g)),P.setAttribute("faceIndex",new Xt(T,m)),e.push(P),r>_o&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gd(n,e,t){const i=new fr(n,e,t);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cy(n,e,t){const i=new Float32Array(xr),r=new O(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function _d(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function vd(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}function uy(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,u=c===Oa||c===ll,p=c===Gr||c===Wr;if(u||p){let l=e.get(s);const h=l!==void 0?l.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return t===null&&(t=new md(n)),l=u?t.fromEquirectangular(s,l):t.fromCubemap(s,l),l.texture.pmremVersion=s.pmremVersion,e.set(s,l),l.texture;if(l!==void 0)return l.texture;{const d=s.image;return u&&d&&d.height>0||p&&d&&r(d)?(t===null&&(t=new md(n)),l=u?t.fromEquirectangular(s):t.fromCubemap(s),l.texture.pmremVersion=s.pmremVersion,e.set(s,l),s.addEventListener("dispose",o),l.texture):null}}}return s}function r(s){let c=0;const u=6;for(let p=0;p<u;p++)s[p]!==void 0&&c++;return c===u}function o(s){const c=s.target;c.removeEventListener("dispose",o);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function hy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dy(n,e,t,i){const r={},o=new WeakMap;function a(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const f in h.attributes)e.remove(h.attributes[f]);for(const f in h.morphAttributes){const _=h.morphAttributes[f];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}h.removeEventListener("dispose",a),delete r[h.id];const d=o.get(h);d&&(e.remove(d),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(l,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(l){const h=l.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER);const d=l.morphAttributes;for(const f in d){const _=d[f];for(let g=0,m=_.length;g<m;g++)e.update(_[g],n.ARRAY_BUFFER)}}function u(l){const h=[],d=l.index,f=l.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,T=x.length;y<T;y+=3){const P=x[y+0],S=x[y+1],E=x[y+2];h.push(P,S,S,E,E,P)}}else if(f!==void 0){const x=f.array;_=f.version;for(let y=0,T=x.length/3-1;y<T;y+=3){const P=y+0,S=y+1,E=y+2;h.push(P,S,S,E,E,P)}}else return;const g=new(Uh(h)?ed:$h)(h,1);g.version=_;const m=o.get(l);m&&e.remove(m),o.set(l,g)}function p(l){const h=o.get(l);if(h){const d=l.index;d!==null&&h.version<d.version&&u(l)}else u(l);return o.get(l)}return{get:s,update:c,getWireframeAttribute:p}}function py(n,e,t){let i;function r(h){i=h}let o,a;function s(h){o=h.type,a=h.bytesPerElement}function c(h,d){n.drawElements(i,d,o,h*a),t.update(d,i,1)}function u(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,o,h*a,f),t.update(d,i,f))}function p(h,d,f){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f;g++)this.render(h[g]/a,d[g]);else{_.multiDrawElementsWEBGL(i,d,0,o,h,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];t.update(g,i,1)}}function l(h,d,f,_){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)u(h[m]/a,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,o,h,0,_,0,f);let m=0;for(let x=0;x<f;x++)m+=d[x];for(let x=0;x<_.length;x++)t.update(m,i,_[x])}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=l}function fy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=s*(o/3);break;case n.LINES:t.lines+=s*(o/2);break;case n.LINE_STRIP:t.lines+=s*(o-1);break;case n.LINE_LOOP:t.lines+=s*o;break;case n.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function my(n,e,t){const i=new WeakMap,r=new Mt;function o(a,s,c){const u=a.morphTargetInfluences,p=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,l=p!==void 0?p.length:0;let h=i.get(s);if(h===void 0||h.count!==l){let f=function(){M.dispose(),i.delete(s),s.removeEventListener("dispose",f)};var d=f;h!==void 0&&h.texture.dispose();const _=s.morphAttributes.position!==void 0,g=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,x=s.morphAttributes.position||[],y=s.morphAttributes.normal||[],T=s.morphAttributes.color||[];let P=0;_===!0&&(P=1),g===!0&&(P=2),m===!0&&(P=3);let S=s.attributes.position.count*P,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*E*4*l),M=new Vh(C,S,E,l);M.type=qt,M.needsUpdate=!0;const b=P*4;for(let k=0;k<l;k++){const X=x[k],U=y[k],Y=T[k],q=S*E*4*k;for(let te=0;te<X.count;te++){const ne=te*b;_===!0&&(r.fromBufferAttribute(X,te),C[q+ne+0]=r.x,C[q+ne+1]=r.y,C[q+ne+2]=r.z,C[q+ne+3]=0),g===!0&&(r.fromBufferAttribute(U,te),C[q+ne+4]=r.x,C[q+ne+5]=r.y,C[q+ne+6]=r.z,C[q+ne+7]=0),m===!0&&(r.fromBufferAttribute(Y,te),C[q+ne+8]=r.x,C[q+ne+9]=r.y,C[q+ne+10]=r.z,C[q+ne+11]=Y.itemSize===4?r.w:1)}}h={count:l,texture:M,size:new je(S,E)},i.set(s,h),s.addEventListener("dispose",f)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<u.length;g++)f+=u[g];const _=s.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",u)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:o}}function gy(n,e,t,i){let r=new WeakMap;function o(c){const u=i.render.frame,p=c.geometry,l=e.get(c,p);if(r.get(l)!==u&&(e.update(l),r.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return l}function a(){r=new WeakMap}function s(c){const u=c.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}class yd extends Wt{constructor(e,t,i,r,o,a,s,c,u,p){if(p=p!==void 0?p:qr,p!==qr&&p!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===qr&&(i=jr),i===void 0&&p===Xo&&(i=Wo),super(null,r,o,a,s,c,p,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:ei,this.minFilter=c!==void 0?c:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xd=new Wt,Md=new yd(1,1);Md.compareFunction=Lh;const Td=new Vh,bd=new $g,Sd=new ud,wd=[],Ed=[],Ad=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function yo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=wd[r];if(o===void 0&&(o=new Float32Array(r),wd[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,n[a].toArray(o,s)}return o}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hs(n,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _y(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function My(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Cd.set(i),n.uniformMatrix2fv(this.addr,!1,Cd),kt(t,i)}}function Ty(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Rd.set(i),n.uniformMatrix3fv(this.addr,!1,Rd),kt(t,i)}}function by(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Ad.set(i),n.uniformMatrix4fv(this.addr,!1,Ad),kt(t,i)}}function Sy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function Ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function Ry(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function Ly(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const o=this.type===n.SAMPLER_2D_SHADOW?Md:xd;t.setTexture2D(e||o,r)}function Ny(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bd,r)}function Dy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sd,r)}function Oy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Td,r)}function Uy(n){switch(n){case 5126:return _y;case 35664:return vy;case 35665:return yy;case 35666:return xy;case 35674:return My;case 35675:return Ty;case 35676:return by;case 5124:case 35670:return Sy;case 35667:case 35671:return wy;case 35668:case 35672:return Ey;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Oy}}function Fy(n,e){n.uniform1fv(this.addr,e)}function By(n,e){const t=yo(e,this.size,2);n.uniform2fv(this.addr,t)}function ky(n,e){const t=yo(e,this.size,3);n.uniform3fv(this.addr,t)}function zy(n,e){const t=yo(e,this.size,4);n.uniform4fv(this.addr,t)}function Hy(n,e){const t=yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vy(n,e){const t=yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gy(n,e){const t=yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wy(n,e){n.uniform1iv(this.addr,e)}function Xy(n,e){n.uniform2iv(this.addr,e)}function jy(n,e){n.uniform3iv(this.addr,e)}function qy(n,e){n.uniform4iv(this.addr,e)}function Yy(n,e){n.uniform1uiv(this.addr,e)}function Ky(n,e){n.uniform2uiv(this.addr,e)}function Zy(n,e){n.uniform3uiv(this.addr,e)}function Qy(n,e){n.uniform4uiv(this.addr,e)}function Jy(n,e,t){const i=this.cache,r=e.length,o=hs(t,r);Bt(i,o)||(n.uniform1iv(this.addr,o),kt(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||xd,o[a])}function $y(n,e,t){const i=this.cache,r=e.length,o=hs(t,r);Bt(i,o)||(n.uniform1iv(this.addr,o),kt(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||bd,o[a])}function ex(n,e,t){const i=this.cache,r=e.length,o=hs(t,r);Bt(i,o)||(n.uniform1iv(this.addr,o),kt(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Sd,o[a])}function tx(n,e,t){const i=this.cache,r=e.length,o=hs(t,r);Bt(i,o)||(n.uniform1iv(this.addr,o),kt(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Td,o[a])}function ix(n){switch(n){case 5126:return Fy;case 35664:return By;case 35665:return ky;case 35666:return zy;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return jy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return Ky;case 36295:return Zy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}class nx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Uy(t.type)}}class rx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ix(t.type)}}class ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,t[s.id],i)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function Pd(n,e){n.seq.push(e),n.map[e.id]=e}function ax(n,e,t){const i=n.name,r=i.length;for(ql.lastIndex=0;;){const o=ql.exec(i),a=ql.lastIndex;let s=o[1];const c=o[2]==="]",u=o[3];if(c&&(s=s|0),u===void 0||u==="["&&a+2===r){Pd(t,u===void 0?new nx(s,n,e):new rx(s,n,e));break}else{let p=t.map[s];p===void 0&&(p=new ox(s),Pd(t,p)),t=p}}}class ds{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);ax(o,a,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Id(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sx=37297;let lx=0;function cx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function ux(n){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(n);let i;switch(e===t?i="":e===Va&&t===Ha?i="LinearDisplayP3ToLinearSRGB":e===Ha&&t===Va&&(i="LinearSRGBToLinearDisplayP3"),n){case Ot:case ka:return[i,"LinearTransferOETF"];case ti:case _l:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ld(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cx(n.getShaderSource(e),a)}else return r}function hx(n,e){const t=ux(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dx(n,e){let t;switch(e){case tg:t="Linear";break;case ig:t="Reinhard";break;case ng:t="OptimizedCineon";break;case rg:t="ACESFilmic";break;case ag:t="AgX";break;case sg:t="Neutral";break;case og:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function px(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function fx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),a=o.name;let s=1;o.type===n.FLOAT_MAT2&&(s=2),o.type===n.FLOAT_MAT3&&(s=3),o.type===n.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:s}}return t}function ea(n){return n!==""}function Nd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(n){return n.replace(gx,vx)}const _x=new Map;function vx(n,e){let t=st[e];if(t===void 0){const i=_x.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}const yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(n){return n.replace(yx,xx)}function xx(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ud(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Mx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Tx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gr:case Wr:e="ENVMAP_TYPE_CUBE";break;case Ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wr:e="ENVMAP_MODE_REFRACTION";break}return e}function Sx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gu:e="ENVMAP_BLENDING_MULTIPLY";break;case $m:e="ENVMAP_BLENDING_MIX";break;case eg:e="ENVMAP_BLENDING_ADD";break}return e}function wx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ex(n,e,t,i){const r=n.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const c=Mx(t),u=Tx(t),p=bx(t),l=Sx(t),h=wx(t),d=px(t),f=fx(o),_=r.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ea).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ea).join(`
`),m.length>0&&(m+=`
`)):(g=[Ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),m=[Ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?st.tonemapping_pars_fragment:"",t.toneMapping!==zn?dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,hx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=Yl(a),a=Nd(a,t),a=Dd(a,t),s=Yl(s),s=Nd(s,t),s=Dd(s,t),a=Od(a),s=Od(s),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+g+a,T=x+m+s,P=Id(r,r.VERTEX_SHADER,y),S=Id(r,r.FRAGMENT_SHADER,T);r.attachShader(_,P),r.attachShader(_,S),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(k){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(P).trim(),Y=r.getShaderInfoLog(S).trim();let q=!0,te=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,S);else{const ne=Ld(r,P,"vertex"),Q=Ld(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+X+`
`+ne+`
`+Q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(U===""||Y==="")&&(te=!1);te&&(k.diagnostics={runnable:q,programLog:X,vertexShader:{log:U,prefix:g},fragmentShader:{log:Y,prefix:m}})}r.deleteShader(P),r.deleteShader(S),C=new ds(r,_),M=mx(r,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,sx)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=S,this}let Ax=0;class Rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Cx(e),t.set(e,i)),i}}class Cx{constructor(e){this.id=Ax++,this.code=e,this.usedTimes=0}}function Px(n,e,t,i,r,o,a){const s=new Cl,c=new Rx,u=new Set,p=[],l=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return u.add(M),M===0?"uv":`uv${M}`}function g(M,b,k,X,U){const Y=X.fog,q=U.geometry,te=M.isMeshStandardMaterial?X.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),Q=ne&&ne.mapping===Ua?ne.image.height:null,se=f[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pe=de!==void 0?de.length:0;let Ve=0;q.morphAttributes.position!==void 0&&(Ve=1),q.morphAttributes.normal!==void 0&&(Ve=2),q.morphAttributes.color!==void 0&&(Ve=3);let Ue,ee,pe,Re;if(se){const z=an[se];Ue=z.vertexShader,ee=z.fragmentShader}else Ue=M.vertexShader,ee=M.fragmentShader,c.update(M),pe=c.getVertexShaderID(M),Re=c.getFragmentShaderID(M);const ye=n.getRenderTarget(),Je=U.isInstancedMesh===!0,Ze=U.isBatchedMesh===!0,H=!!M.map,$e=!!M.matcap,Fe=!!ne,ot=!!M.aoMap,De=!!M.lightMap,ke=!!M.bumpMap,tt=!!M.normalMap,he=!!M.displacementMap,ft=!!M.emissiveMap,D=!!M.metalnessMap,A=!!M.roughnessMap,J=M.anisotropy>0,le=M.clearcoat>0,me=M.dispersion>0,fe=M.iridescence>0,Be=M.sheen>0,Te=M.transmission>0,be=J&&!!M.anisotropyMap,Ye=le&&!!M.clearcoatMap,xe=le&&!!M.clearcoatNormalMap,ze=le&&!!M.clearcoatRoughnessMap,ut=fe&&!!M.iridescenceMap,He=fe&&!!M.iridescenceThicknessMap,Ne=Be&&!!M.sheenColorMap,it=Be&&!!M.sheenRoughnessMap,at=!!M.specularMap,mt=!!M.specularColorMap,N=!!M.specularIntensityMap,L=Te&&!!M.transmissionMap,$=Te&&!!M.thicknessMap,K=!!M.gradientMap,_e=!!M.alphaMap,v=M.alphaTest>0,w=!!M.alphaHash,I=!!M.extensions;let B=zn;M.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(B=n.toneMapping);const Z={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Ue,fragmentShader:ee,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:Re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ze,instancing:Je,instancingColor:Je&&U.instanceColor!==null,instancingMorph:Je&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ot,alphaToCoverage:!!M.alphaToCoverage,map:H,matcap:$e,envMap:Fe,envMapMode:Fe&&ne.mapping,envMapCubeUVHeight:Q,aoMap:ot,lightMap:De,bumpMap:ke,normalMap:tt,displacementMap:h&&he,emissiveMap:ft,normalMapObjectSpace:tt&&M.normalMapType===Tg,normalMapTangentSpace:tt&&M.normalMapType===Ph,metalnessMap:D,roughnessMap:A,anisotropy:J,anisotropyMap:be,clearcoat:le,clearcoatMap:Ye,clearcoatNormalMap:xe,clearcoatRoughnessMap:ze,dispersion:me,iridescence:fe,iridescenceMap:ut,iridescenceThicknessMap:He,sheen:Be,sheenColorMap:Ne,sheenRoughnessMap:it,specularMap:at,specularColorMap:mt,specularIntensityMap:N,transmission:Te,transmissionMap:L,thicknessMap:$,gradientMap:K,opaque:M.transparent===!1&&M.blending===Vr&&M.alphaToCoverage===!1,alphaMap:_e,alphaTest:v,alphaHash:w,combine:M.combine,mapUv:H&&_(M.map.channel),aoMapUv:ot&&_(M.aoMap.channel),lightMapUv:De&&_(M.lightMap.channel),bumpMapUv:ke&&_(M.bumpMap.channel),normalMapUv:tt&&_(M.normalMap.channel),displacementMapUv:he&&_(M.displacementMap.channel),emissiveMapUv:ft&&_(M.emissiveMap.channel),metalnessMapUv:D&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:be&&_(M.anisotropyMap.channel),clearcoatMapUv:Ye&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:it&&_(M.sheenRoughnessMap.channel),specularMapUv:at&&_(M.specularMap.channel),specularColorMapUv:mt&&_(M.specularColorMap.channel),specularIntensityMapUv:N&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:$&&_(M.thicknessMap.channel),alphaMapUv:_e&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(tt||J),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(H||_e),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:B,useLegacyLights:n._useLegacyLights,decodeVideoTexture:H&&M.map.isVideoTexture===!0&&gt.getTransfer(M.map.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gi,flipSided:M.side===ci,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:I&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:I&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Z.vertexUv1s=u.has(1),Z.vertexUv2s=u.has(2),Z.vertexUv3s=u.has(3),u.clear(),Z}function m(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)b.push(k),b.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(x(b,M),y(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function x(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){s.disableAll(),b.supportsVertexTextures&&s.enable(0),b.instancing&&s.enable(1),b.instancingColor&&s.enable(2),b.instancingMorph&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),b.alphaHash&&s.enable(18),b.batching&&s.enable(19),b.dispersion&&s.enable(20),M.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.useLegacyLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.alphaToCoverage&&s.enable(20),M.push(s.mask)}function T(M){const b=f[M.type];let k;if(b){const X=an[b];k=f_.clone(X.uniforms)}else k=M.uniforms;return k}function P(M,b){let k;for(let X=0,U=p.length;X<U;X++){const Y=p[X];if(Y.cacheKey===b){k=Y,++k.usedTimes;break}}return k===void 0&&(k=new Ex(n,b,M,o),p.push(k)),k}function S(M){if(--M.usedTimes===0){const b=p.indexOf(M);p[b]=p[p.length-1],p.pop(),M.destroy()}}function E(M){c.remove(M)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:T,acquireProgram:P,releaseProgram:S,releaseShaderCache:E,programs:p,dispose:C}}function Ix(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function i(o,a,s){n.get(o)[a]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Lx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bd(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(l,h,d,f,_,g){let m=n[e];return m===void 0?(m={id:l.id,object:l,geometry:h,material:d,groupOrder:f,renderOrder:l.renderOrder,z:_,group:g},n[e]=m):(m.id=l.id,m.object=l,m.geometry=h,m.material=d,m.groupOrder=f,m.renderOrder=l.renderOrder,m.z=_,m.group=g),e++,m}function s(l,h,d,f,_,g){const m=a(l,h,d,f,_,g);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):t.push(m)}function c(l,h,d,f,_,g){const m=a(l,h,d,f,_,g);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function u(l,h){t.length>1&&t.sort(l||Lx),i.length>1&&i.sort(h||Fd),r.length>1&&r.sort(h||Fd)}function p(){for(let l=e,h=n.length;l<h;l++){const d=n[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:s,unshift:c,finish:p,sort:u}}function Nx(){let n=new WeakMap;function e(i,r){const o=n.get(i);let a;return o===void 0?(a=new Bd,n.set(i,[a])):r>=o.length?(a=new Bd,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Dx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new qe};break;case"SpotLight":t={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Ox(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ux=0;function Fx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bx(n){const e=new Dx,t=Ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,o=new et,a=new et;function s(u,p){let l=0,h=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,_=0,g=0,m=0,x=0,y=0,T=0,P=0,S=0,E=0,C=0;u.sort(Fx);const M=p===!0?Math.PI:1;for(let k=0,X=u.length;k<X;k++){const U=u[k],Y=U.color,q=U.intensity,te=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)l+=Y.r*q*M,h+=Y.g*q*M,d+=Y.b*q*M;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(U.sh.coefficients[Q],q);C++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const se=U.shadow,de=t.get(U);de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,i.directionalShadow[f]=de,i.directionalShadowMap[f]=ne,i.directionalShadowMatrix[f]=U.shadow.matrix,y++}i.directional[f]=Q,f++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(Y).multiplyScalar(q*M),Q.distance=te,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,i.spot[g]=Q;const se=U.shadow;if(U.map&&(i.spotLightMap[S]=U.map,S++,se.updateMatrices(U),U.castShadow&&E++),i.spotLightMatrix[g]=se.matrix,U.castShadow){const de=t.get(U);de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,i.spotShadow[g]=de,i.spotShadowMap[g]=ne,P++}g++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(Y).multiplyScalar(q),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=Q,m++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity*M),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const se=U.shadow,de=t.get(U);de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,de.shadowCameraNear=se.camera.near,de.shadowCameraFar=se.camera.far,i.pointShadow[_]=de,i.pointShadowMap[_]=ne,i.pointShadowMatrix[_]=U.shadow.matrix,T++}i.point[_]=Q,_++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(q*M),Q.groundColor.copy(U.groundColor).multiplyScalar(q*M),i.hemi[x]=Q,x++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==f||b.pointLength!==_||b.spotLength!==g||b.rectAreaLength!==m||b.hemiLength!==x||b.numDirectionalShadows!==y||b.numPointShadows!==T||b.numSpotShadows!==P||b.numSpotMaps!==S||b.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=P+S-E,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,b.directionalLength=f,b.pointLength=_,b.spotLength=g,b.rectAreaLength=m,b.hemiLength=x,b.numDirectionalShadows=y,b.numPointShadows=T,b.numSpotShadows=P,b.numSpotMaps=S,b.numLightProbes=C,i.version=Ux++)}function c(u,p){let l=0,h=0,d=0,f=0,_=0;const g=p.matrixWorldInverse;for(let m=0,x=u.length;m<x;m++){const y=u[m];if(y.isDirectionalLight){const T=i.directional[l];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),l++}else if(y.isSpotLight){const T=i.spot[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const T=i.rectArea[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),f++}else if(y.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),_++}}}return{setup:s,setupView:c,state:i}}function kd(n){const e=new Bx(n),t=[],i=[];function r(p){u.camera=p,t.length=0,i.length=0}function o(p){t.push(p)}function a(p){i.push(p)}function s(p){e.setup(t,p)}function c(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:s,setupLightsView:c,pushLight:o,pushShadow:a}}function kx(n){let e=new WeakMap;function t(r,o=0){const a=e.get(r);let s;return a===void 0?(s=new kd(n),e.set(r,[s])):o>=a.length?(s=new kd(n),a.push(s)):s=a[o],s}function i(){e=new WeakMap}return{get:t,dispose:i}}class zx extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hx extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
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
}`;function Wx(n,e,t){let i=new kl;const r=new je,o=new je,a=new Mt,s=new zx({depthPacking:Mg}),c=new Hx,u={},p=t.maxTextureSize,l={[yn]:ci,[ci]:yn,[gi]:gi},h=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Vx,fragmentShader:Gx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const f=new Wi;f.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ii(f,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let m=this.type;this.render=function(S,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),X=n.state;X.setBlending(kn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const U=m!==vn&&this.type===vn,Y=m===vn&&this.type!==vn;for(let q=0,te=S.length;q<te;q++){const ne=S[q],Q=ne.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const se=Q.getFrameExtents();if(r.multiply(se),o.copy(Q.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/se.x),r.x=o.x*se.x,Q.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/se.y),r.y=o.y*se.y,Q.mapSize.y=o.y)),Q.map===null||U===!0||Y===!0){const Pe=this.type!==vn?{minFilter:ei,magFilter:ei}:{};Q.map!==null&&Q.map.dispose(),Q.map=new fr(r.x,r.y,Pe),Q.map.texture.name=ne.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const de=Q.getViewportCount();for(let Pe=0;Pe<de;Pe++){const Ve=Q.getViewport(Pe);a.set(o.x*Ve.x,o.y*Ve.y,o.x*Ve.z,o.y*Ve.w),X.viewport(a),Q.updateMatrices(ne,Pe),i=Q.getFrustum(),T(E,C,Q.camera,ne,this.type)}Q.isPointLightShadow!==!0&&this.type===vn&&x(Q,C),Q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,b,k)};function x(S,E){const C=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new fr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,C,h,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,C,d,_,null)}function y(S,E,C,M){let b=null;const k=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0)b=k;else if(b=C.isPointLight===!0?c:s,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const X=b.uuid,U=E.uuid;let Y=u[X];Y===void 0&&(Y={},u[X]=Y);let q=Y[U];q===void 0&&(q=b.clone(),Y[U]=q,E.addEventListener("dispose",P)),b=q}if(b.visible=E.visible,b.wireframe=E.wireframe,M===vn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:l[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=n.properties.get(b);X.light=C}return b}function T(S,E,C,M,b){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===vn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const X=e.update(S),U=S.material;if(Array.isArray(U)){const Y=X.groups;for(let q=0,te=Y.length;q<te;q++){const ne=Y[q],Q=U[ne.materialIndex];if(Q&&Q.visible){const se=y(S,Q,M,b);S.onBeforeShadow(n,S,E,C,X,se,ne),n.renderBufferDirect(C,null,X,se,S,ne),S.onAfterShadow(n,S,E,C,X,se,ne)}}}else if(U.visible){const Y=y(S,U,M,b);S.onBeforeShadow(n,S,E,C,X,Y,null),n.renderBufferDirect(C,null,X,Y,S,null),S.onAfterShadow(n,S,E,C,X,Y,null)}}const k=S.children;for(let X=0,U=k.length;X<U;X++)T(k[X],E,C,M,b)}function P(S){S.target.removeEventListener("dispose",P);for(const E in u){const C=u[E],M=S.target.uuid;M in C&&(C[M].dispose(),delete C[M])}}}function Xx(n){function e(){let L=!1;const $=new Mt;let K=null;const _e=new Mt(0,0,0,0);return{setMask:function(v){K!==v&&!L&&(n.colorMask(v,v,v,v),K=v)},setLocked:function(v){L=v},setClear:function(v,w,I,B,Z){Z===!0&&(v*=B,w*=B,I*=B),$.set(v,w,I,B),_e.equals($)===!1&&(n.clearColor(v,w,I,B),_e.copy($))},reset:function(){L=!1,K=null,_e.set(-1,0,0,0)}}}function t(){let L=!1,$=null,K=null,_e=null;return{setTest:function(v){v?Re(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(v){$!==v&&!L&&(n.depthMask(v),$=v)},setFunc:function(v){if(K!==v){switch(v){case jm:n.depthFunc(n.NEVER);break;case qm:n.depthFunc(n.ALWAYS);break;case Ym:n.depthFunc(n.LESS);break;case Da:n.depthFunc(n.LEQUAL);break;case Km:n.depthFunc(n.EQUAL);break;case Zm:n.depthFunc(n.GEQUAL);break;case Qm:n.depthFunc(n.GREATER);break;case Jm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=v}},setLocked:function(v){L=v},setClear:function(v){_e!==v&&(n.clearDepth(v),_e=v)},reset:function(){L=!1,$=null,K=null,_e=null}}}function i(){let L=!1,$=null,K=null,_e=null,v=null,w=null,I=null,B=null,Z=null;return{setTest:function(z){L||(z?Re(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(z){$!==z&&!L&&(n.stencilMask(z),$=z)},setFunc:function(z,re,ce){(K!==z||_e!==re||v!==ce)&&(n.stencilFunc(z,re,ce),K=z,_e=re,v=ce)},setOp:function(z,re,ce){(w!==z||I!==re||B!==ce)&&(n.stencilOp(z,re,ce),w=z,I=re,B=ce)},setLocked:function(z){L=z},setClear:function(z){Z!==z&&(n.clearStencil(z),Z=z)},reset:function(){L=!1,$=null,K=null,_e=null,v=null,w=null,I=null,B=null,Z=null}}}const r=new e,o=new t,a=new i,s=new WeakMap,c=new WeakMap;let u={},p={},l=new WeakMap,h=[],d=null,f=!1,_=null,g=null,m=null,x=null,y=null,T=null,P=null,S=new qe(0,0,0),E=0,C=!1,M=null,b=null,k=null,X=null,U=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),q=te>=1):ne.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),q=te>=2);let Q=null,se={};const de=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),Ve=new Mt().fromArray(de),Ue=new Mt().fromArray(Pe);function ee(L,$,K,_e){const v=new Uint8Array(4),w=n.createTexture();n.bindTexture(L,w),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let I=0;I<K;I++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D($,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,v):n.texImage2D($+I,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,v);return w}const pe={};pe[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Re(n.DEPTH_TEST),o.setFunc(Da),ke(!1),tt(Bu),Re(n.CULL_FACE),ot(kn);function Re(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ye(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Je(L,$){return p[L]!==$?(n.bindFramebuffer(L,$),p[L]=$,L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=$),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=$),!0):!1}function Ze(L,$){let K=h,_e=!1;if(L){K=l.get($),K===void 0&&(K=[],l.set($,K));const v=L.textures;if(K.length!==v.length||K[0]!==n.COLOR_ATTACHMENT0){for(let w=0,I=v.length;w<I;w++)K[w]=n.COLOR_ATTACHMENT0+w;K.length=v.length,_e=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,_e=!0);_e&&n.drawBuffers(K)}function H(L){return d!==L?(n.useProgram(L),d=L,!0):!1}const $e={[dr]:n.FUNC_ADD,[Cm]:n.FUNC_SUBTRACT,[Pm]:n.FUNC_REVERSE_SUBTRACT};$e[Im]=n.MIN,$e[Lm]=n.MAX;const Fe={[Nm]:n.ZERO,[Dm]:n.ONE,[Om]:n.SRC_COLOR,[al]:n.SRC_ALPHA,[Hm]:n.SRC_ALPHA_SATURATE,[km]:n.DST_COLOR,[Fm]:n.DST_ALPHA,[Um]:n.ONE_MINUS_SRC_COLOR,[sl]:n.ONE_MINUS_SRC_ALPHA,[zm]:n.ONE_MINUS_DST_COLOR,[Bm]:n.ONE_MINUS_DST_ALPHA,[Vm]:n.CONSTANT_COLOR,[Gm]:n.ONE_MINUS_CONSTANT_COLOR,[Wm]:n.CONSTANT_ALPHA,[Xm]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(L,$,K,_e,v,w,I,B,Z,z){if(L===kn){f===!0&&(ye(n.BLEND),f=!1);return}if(f===!1&&(Re(n.BLEND),f=!0),L!==Rm){if(L!==_||z!==C){if((g!==dr||y!==dr)&&(n.blendEquation(n.FUNC_ADD),g=dr,y=dr),z)switch(L){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.ONE,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,x=null,T=null,P=null,S.set(0,0,0),E=0,_=L,C=z}return}v=v||$,w=w||K,I=I||_e,($!==g||v!==y)&&(n.blendEquationSeparate($e[$],$e[v]),g=$,y=v),(K!==m||_e!==x||w!==T||I!==P)&&(n.blendFuncSeparate(Fe[K],Fe[_e],Fe[w],Fe[I]),m=K,x=_e,T=w,P=I),(B.equals(S)===!1||Z!==E)&&(n.blendColor(B.r,B.g,B.b,Z),S.copy(B),E=Z),_=L,C=!1}function De(L,$){L.side===gi?ye(n.CULL_FACE):Re(n.CULL_FACE);let K=L.side===ci;$&&(K=!K),ke(K),L.blending===Vr&&L.transparent===!1?ot(kn):ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const _e=L.stencilWrite;a.setTest(_e),_e&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Re(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function tt(L){L!==Em?(Re(n.CULL_FACE),L!==b&&(L===Bu?n.cullFace(n.BACK):L===Am?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),b=L}function he(L){L!==k&&(q&&n.lineWidth(L),k=L)}function ft(L,$,K){L?(Re(n.POLYGON_OFFSET_FILL),(X!==$||U!==K)&&(n.polygonOffset($,K),X=$,U=K)):ye(n.POLYGON_OFFSET_FILL)}function D(L){L?Re(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function A(L){L===void 0&&(L=n.TEXTURE0+Y-1),Q!==L&&(n.activeTexture(L),Q=L)}function J(L,$,K){K===void 0&&(Q===null?K=n.TEXTURE0+Y-1:K=Q);let _e=se[K];_e===void 0&&(_e={type:void 0,texture:void 0},se[K]=_e),(_e.type!==L||_e.texture!==$)&&(Q!==K&&(n.activeTexture(K),Q=K),n.bindTexture(L,$||pe[L]),_e.type=L,_e.texture=$)}function le(){const L=se[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(L){Ve.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ve.copy(L))}function it(L){Ue.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ue.copy(L))}function at(L,$){let K=c.get($);K===void 0&&(K=new WeakMap,c.set($,K));let _e=K.get(L);_e===void 0&&(_e=n.getUniformBlockIndex($,L.name),K.set(L,_e))}function mt(L,$){const K=c.get($).get(L);s.get($)!==K&&(n.uniformBlockBinding($,K,L.__bindingPointIndex),s.set($,K))}function N(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,se={},p={},l=new WeakMap,h=[],d=null,f=!1,_=null,g=null,m=null,x=null,y=null,T=null,P=null,S=new qe(0,0,0),E=0,C=!1,M=null,b=null,k=null,X=null,U=null,Ve.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Re,disable:ye,bindFramebuffer:Je,drawBuffers:Ze,useProgram:H,setBlending:ot,setMaterial:De,setFlipSided:ke,setCullFace:tt,setLineWidth:he,setPolygonOffset:ft,setScissorTest:D,activeTexture:A,bindTexture:J,unbindTexture:le,compressedTexImage2D:me,compressedTexImage3D:fe,texImage2D:ut,texImage3D:He,updateUBOMapping:at,uniformBlockBinding:mt,texStorage2D:xe,texStorage3D:ze,texSubImage2D:Be,texSubImage3D:Te,compressedTexSubImage2D:be,compressedTexSubImage3D:Ye,scissor:Ne,viewport:it,reset:N}}function jx(n,e,t,i,r,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new je,p=new WeakMap;let l;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(D,A){return d?new OffscreenCanvas(D,A):Ko("canvas")}function _(D,A,J){let le=1;const me=ft(D);if((me.width>J||me.height>J)&&(le=J/Math.max(me.width,me.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(le*me.width),Be=Math.floor(le*me.height);l===void 0&&(l=f(fe,Be));const Te=A?f(fe,Be):l;return Te.width=fe,Te.height=Be,Te.getContext("2d").drawImage(D,0,0,fe,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+fe+"x"+Be+")."),Te}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==ei&&D.minFilter!==Dt}function m(D){n.generateMipmap(D)}function x(D,A,J,le,me=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=A;if(A===n.RED&&(J===n.FLOAT&&(fe=n.R32F),J===n.HALF_FLOAT&&(fe=n.R16F),J===n.UNSIGNED_BYTE&&(fe=n.R8)),A===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(fe=n.R8UI),J===n.UNSIGNED_SHORT&&(fe=n.R16UI),J===n.UNSIGNED_INT&&(fe=n.R32UI),J===n.BYTE&&(fe=n.R8I),J===n.SHORT&&(fe=n.R16I),J===n.INT&&(fe=n.R32I)),A===n.RG&&(J===n.FLOAT&&(fe=n.RG32F),J===n.HALF_FLOAT&&(fe=n.RG16F),J===n.UNSIGNED_BYTE&&(fe=n.RG8)),A===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(fe=n.RG8UI),J===n.UNSIGNED_SHORT&&(fe=n.RG16UI),J===n.UNSIGNED_INT&&(fe=n.RG32UI),J===n.BYTE&&(fe=n.RG8I),J===n.SHORT&&(fe=n.RG16I),J===n.INT&&(fe=n.RG32I)),A===n.RGB&&J===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),A===n.RGBA){const Be=me?za:gt.getTransfer(le);J===n.FLOAT&&(fe=n.RGBA32F),J===n.HALF_FLOAT&&(fe=n.RGBA16F),J===n.UNSIGNED_BYTE&&(fe=Be===St?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function y(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==ei&&D.minFilter!==Dt?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){const A=D.target;A.removeEventListener("dispose",T),S(A),A.isVideoTexture&&p.delete(A)}function P(D){const A=D.target;A.removeEventListener("dispose",P),C(A)}function S(D){const A=i.get(D);if(A.__webglInit===void 0)return;const J=D.source,le=h.get(J);if(le){const me=le[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&E(D),Object.keys(le).length===0&&h.delete(J)}i.remove(D)}function E(D){const A=i.get(D);n.deleteTexture(A.__webglTexture);const J=D.source,le=h.get(J);delete le[A.__cacheKey],a.memory.textures--}function C(D){const A=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(A.__webglFramebuffer[le]))for(let me=0;me<A.__webglFramebuffer[le].length;me++)n.deleteFramebuffer(A.__webglFramebuffer[le][me]);else n.deleteFramebuffer(A.__webglFramebuffer[le]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[le])}else{if(Array.isArray(A.__webglFramebuffer))for(let le=0;le<A.__webglFramebuffer.length;le++)n.deleteFramebuffer(A.__webglFramebuffer[le]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let le=0;le<A.__webglColorRenderbuffer.length;le++)A.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[le]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=D.textures;for(let le=0,me=J.length;le<me;le++){const fe=i.get(J[le]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(J[le])}i.remove(D)}let M=0;function b(){M=0}function k(){const D=M;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),M+=1,D}function X(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function U(D,A){const J=i.get(D);if(D.isVideoTexture&&tt(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const le=D.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(J,D,A);return}}t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+A)}function Y(D,A){const J=i.get(D);if(D.version>0&&J.__version!==D.version){Ve(J,D,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+A)}function q(D,A){const J=i.get(D);if(D.version>0&&J.__version!==D.version){Ve(J,D,A);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+A)}function te(D,A){const J=i.get(D);if(D.version>0&&J.__version!==D.version){Ue(J,D,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+A)}const ne={[Xr]:n.REPEAT,[tn]:n.CLAMP_TO_EDGE,[Fa]:n.MIRRORED_REPEAT},Q={[ei]:n.NEAREST,[ju]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[Dt]:n.LINEAR,[Ba]:n.LINEAR_MIPMAP_NEAREST,[nn]:n.LINEAR_MIPMAP_LINEAR},se={[bg]:n.NEVER,[Cg]:n.ALWAYS,[Sg]:n.LESS,[Lh]:n.LEQUAL,[wg]:n.EQUAL,[Rg]:n.GEQUAL,[Eg]:n.GREATER,[Ag]:n.NOTEQUAL};function de(D,A){if(A.type===qt&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Dt||A.magFilter===Ba||A.magFilter===Go||A.magFilter===nn||A.minFilter===Dt||A.minFilter===Ba||A.minFilter===Go||A.minFilter===nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ne[A.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ne[A.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ne[A.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Q[A.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Q[A.minFilter]),A.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ei||A.minFilter!==Go&&A.minFilter!==nn||A.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Pe(D,A){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",T));const le=A.source;let me=h.get(le);me===void 0&&(me={},h.set(le,me));const fe=X(A);if(fe!==D.__cacheKey){me[fe]===void 0&&(me[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),me[fe].usedTimes++;const Be=me[D.__cacheKey];Be!==void 0&&(me[D.__cacheKey].usedTimes--,Be.usedTimes===0&&E(A)),D.__cacheKey=fe,D.__webglTexture=me[fe].texture}return J}function Ve(D,A,J){let le=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=n.TEXTURE_3D);const me=Pe(D,A),fe=A.source;t.bindTexture(le,D.__webglTexture,n.TEXTURE0+J);const Be=i.get(fe);if(fe.version!==Be.__version||me===!0){t.activeTexture(n.TEXTURE0+J);const Te=gt.getPrimaries(gt.workingColorSpace),be=A.colorSpace===xn?null:gt.getPrimaries(A.colorSpace),Ye=A.colorSpace===xn||Te===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let xe=_(A.image,!1,r.maxTextureSize);xe=he(A,xe);const ze=o.convert(A.format,A.colorSpace),ut=o.convert(A.type);let He=x(A.internalFormat,ze,ut,A.colorSpace,A.isVideoTexture);de(le,A);let Ne;const it=A.mipmaps,at=A.isVideoTexture!==!0,mt=Be.__version===void 0||me===!0,N=fe.dataReady,L=y(A,xe);if(A.isDepthTexture)He=n.DEPTH_COMPONENT16,A.type===qt?He=n.DEPTH_COMPONENT32F:A.type===jr?He=n.DEPTH_COMPONENT24:A.type===Wo&&(He=n.DEPTH24_STENCIL8),mt&&(at?t.texStorage2D(n.TEXTURE_2D,1,He,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,He,xe.width,xe.height,0,ze,ut,null));else if(A.isDataTexture)if(it.length>0){at&&mt&&t.texStorage2D(n.TEXTURE_2D,L,He,it[0].width,it[0].height);for(let $=0,K=it.length;$<K;$++)Ne=it[$],at?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ne.width,Ne.height,ze,ut,Ne.data):t.texImage2D(n.TEXTURE_2D,$,He,Ne.width,Ne.height,0,ze,ut,Ne.data);A.generateMipmaps=!1}else at?(mt&&t.texStorage2D(n.TEXTURE_2D,L,He,xe.width,xe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe.width,xe.height,ze,ut,xe.data)):t.texImage2D(n.TEXTURE_2D,0,He,xe.width,xe.height,0,ze,ut,xe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,He,it[0].width,it[0].height,xe.depth);for(let $=0,K=it.length;$<K;$++)Ne=it[$],A.format!==Li?ze!==null?at?N&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ne.width,Ne.height,xe.depth,ze,Ne.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,He,Ne.width,Ne.height,xe.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ne.width,Ne.height,xe.depth,ze,ut,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,He,Ne.width,Ne.height,xe.depth,0,ze,ut,Ne.data)}else{at&&mt&&t.texStorage2D(n.TEXTURE_2D,L,He,it[0].width,it[0].height);for(let $=0,K=it.length;$<K;$++)Ne=it[$],A.format!==Li?ze!==null?at?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Ne.width,Ne.height,ze,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,$,He,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ne.width,Ne.height,ze,ut,Ne.data):t.texImage2D(n.TEXTURE_2D,$,He,Ne.width,Ne.height,0,ze,ut,Ne.data)}else if(A.isDataArrayTexture)at?(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,He,xe.width,xe.height,xe.depth),N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ze,ut,xe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,xe.width,xe.height,xe.depth,0,ze,ut,xe.data);else if(A.isData3DTexture)at?(mt&&t.texStorage3D(n.TEXTURE_3D,L,He,xe.width,xe.height,xe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ze,ut,xe.data)):t.texImage3D(n.TEXTURE_3D,0,He,xe.width,xe.height,xe.depth,0,ze,ut,xe.data);else if(A.isFramebufferTexture){if(mt)if(at)t.texStorage2D(n.TEXTURE_2D,L,He,xe.width,xe.height);else{let $=xe.width,K=xe.height;for(let _e=0;_e<L;_e++)t.texImage2D(n.TEXTURE_2D,_e,He,$,K,0,ze,ut,null),$>>=1,K>>=1}}else if(it.length>0){if(at&&mt){const $=ft(it[0]);t.texStorage2D(n.TEXTURE_2D,L,He,$.width,$.height)}for(let $=0,K=it.length;$<K;$++)Ne=it[$],at?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ze,ut,Ne):t.texImage2D(n.TEXTURE_2D,$,He,ze,ut,Ne);A.generateMipmaps=!1}else if(at){if(mt){const $=ft(xe);t.texStorage2D(n.TEXTURE_2D,L,He,$.width,$.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,ut,xe)}else t.texImage2D(n.TEXTURE_2D,0,He,ze,ut,xe);g(A)&&m(le),Be.__version=fe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Ue(D,A,J){if(A.image.length!==6)return;const le=Pe(D,A),me=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+J);const fe=i.get(me);if(me.version!==fe.__version||le===!0){t.activeTexture(n.TEXTURE0+J);const Be=gt.getPrimaries(gt.workingColorSpace),Te=A.colorSpace===xn?null:gt.getPrimaries(A.colorSpace),be=A.colorSpace===xn||Be===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,xe=A.image[0]&&A.image[0].isDataTexture,ze=[];for(let K=0;K<6;K++)!Ye&&!xe?ze[K]=_(A.image[K],!0,r.maxCubemapSize):ze[K]=xe?A.image[K].image:A.image[K],ze[K]=he(A,ze[K]);const ut=ze[0],He=o.convert(A.format,A.colorSpace),Ne=o.convert(A.type),it=x(A.internalFormat,He,Ne,A.colorSpace),at=A.isVideoTexture!==!0,mt=fe.__version===void 0||le===!0,N=me.dataReady;let L=y(A,ut);de(n.TEXTURE_CUBE_MAP,A);let $;if(Ye){at&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,L,it,ut.width,ut.height);for(let K=0;K<6;K++){$=ze[K].mipmaps;for(let _e=0;_e<$.length;_e++){const v=$[_e];A.format!==Li?He!==null?at?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,v.width,v.height,He,v.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,it,v.width,v.height,0,v.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,v.width,v.height,He,Ne,v.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,it,v.width,v.height,0,He,Ne,v.data)}}}else{if($=A.mipmaps,at&&mt){$.length>0&&L++;const K=ft(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,L,it,K.width,K.height)}for(let K=0;K<6;K++)if(xe){at?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ze[K].width,ze[K].height,He,Ne,ze[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,it,ze[K].width,ze[K].height,0,He,Ne,ze[K].data);for(let _e=0;_e<$.length;_e++){const v=$[_e].image[K].image;at?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,v.width,v.height,He,Ne,v.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,it,v.width,v.height,0,He,Ne,v.data)}}else{at?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,He,Ne,ze[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,it,He,Ne,ze[K]);for(let _e=0;_e<$.length;_e++){const v=$[_e];at?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,He,Ne,v.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,it,He,Ne,v.image[K])}}}g(A)&&m(n.TEXTURE_CUBE_MAP),fe.__version=me.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ee(D,A,J,le,me,fe){const Be=o.convert(J.format,J.colorSpace),Te=o.convert(J.type),be=x(J.internalFormat,Be,Te,J.colorSpace);if(!i.get(A).__hasExternalTextures){const Ye=Math.max(1,A.width>>fe),xe=Math.max(1,A.height>>fe);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,fe,be,Ye,xe,A.depth,0,Be,Te,null):t.texImage2D(me,fe,be,Ye,xe,0,Be,Te,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ke(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,me,i.get(J).__webglTexture,0,De(A)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,me,i.get(J).__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(D,A,J){if(n.bindRenderbuffer(n.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let le=n.DEPTH_COMPONENT24;if(J||ke(A)){const me=A.depthTexture;me&&me.isDepthTexture&&(me.type===qt?le=n.DEPTH_COMPONENT32F:me.type===jr&&(le=n.DEPTH_COMPONENT24));const fe=De(A);ke(A)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,le,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,le,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){const le=De(A);J&&ke(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,A.width,A.height):ke(A)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,D)}else{const le=A.textures;for(let me=0;me<le.length;me++){const fe=le[me],Be=o.convert(fe.format,fe.colorSpace),Te=o.convert(fe.type),be=x(fe.internalFormat,Be,Te,fe.colorSpace),Ye=De(A);J&&ke(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,be,A.width,A.height):ke(A)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,be,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,be,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),U(A.depthTexture,0);const J=i.get(A.depthTexture).__webglTexture,le=De(A);if(A.depthTexture.format===qr)ke(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(A.depthTexture.format===Xo)ke(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ye(D){const A=i.get(D),J=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Re(A.__webglFramebuffer,D)}else if(J){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]=n.createRenderbuffer(),pe(A.__webglDepthbuffer[le],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),pe(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(D,A,J){const le=i.get(D);A!==void 0&&ee(le.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&ye(D)}function Ze(D){const A=D.texture,J=i.get(D),le=i.get(A);D.addEventListener("dispose",P);const me=D.textures,fe=D.isWebGLCubeRenderTarget===!0,Be=me.length>1;if(Be||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=A.version,a.memory.textures++),fe){J.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Te]=[];for(let be=0;be<A.mipmaps.length;be++)J.__webglFramebuffer[Te][be]=n.createFramebuffer()}else J.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Te=0;Te<A.mipmaps.length;Te++)J.__webglFramebuffer[Te]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Be)for(let Te=0,be=me.length;Te<be;Te++){const Ye=i.get(me[Te]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&ke(D)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const be=me[Te];J.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[Te]);const Ye=o.convert(be.format,be.colorSpace),xe=o.convert(be.type),ze=x(be.internalFormat,Ye,xe,be.colorSpace,D.isXRRenderTarget===!0),ut=De(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,ze,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,J.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),de(n.TEXTURE_CUBE_MAP,A);for(let Te=0;Te<6;Te++)if(A.mipmaps&&A.mipmaps.length>0)for(let be=0;be<A.mipmaps.length;be++)ee(J.__webglFramebuffer[Te][be],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,be);else ee(J.__webglFramebuffer[Te],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);g(A)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Te=0,be=me.length;Te<be;Te++){const Ye=me[Te],xe=i.get(Ye);t.bindTexture(n.TEXTURE_2D,xe.__webglTexture),de(n.TEXTURE_2D,Ye),ee(J.__webglFramebuffer,D,Ye,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,0),g(Ye)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,le.__webglTexture),de(Te,A),A.mipmaps&&A.mipmaps.length>0)for(let be=0;be<A.mipmaps.length;be++)ee(J.__webglFramebuffer[be],D,A,n.COLOR_ATTACHMENT0,Te,be);else ee(J.__webglFramebuffer,D,A,n.COLOR_ATTACHMENT0,Te,0);g(A)&&m(Te),t.unbindTexture()}D.depthBuffer&&ye(D)}function H(D){const A=D.textures;for(let J=0,le=A.length;J<le;J++){const me=A[J];if(g(me)){const fe=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Be=i.get(me).__webglTexture;t.bindTexture(fe,Be),m(fe),t.unbindTexture()}}}const $e=[],Fe=[];function ot(D){if(D.samples>0){if(ke(D)===!1){const A=D.textures,J=D.width,le=D.height;let me=n.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(D),Te=A.length>1;if(Te)for(let be=0;be<A.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let be=0;be<A.length;be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),Te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[be]);const Ye=i.get(A[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,J,le,0,0,J,le,me,n.NEAREST),c===!0&&($e.length=0,Fe.length=0,$e.push(n.COLOR_ATTACHMENT0+be),D.depthBuffer&&D.resolveDepthBuffer===!1&&($e.push(fe),Fe.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let be=0;be<A.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Be.__webglColorRenderbuffer[be]);const Ye=i.get(A[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const A=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function De(D){return Math.min(r.maxSamples,D.samples)}function ke(D){const A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function tt(D){const A=a.render.frame;p.get(D)!==A&&(p.set(D,A),D.update())}function he(D,A){const J=D.colorSpace,le=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Ot&&J!==xn&&(gt.getTransfer(J)===St?(le!==Li||me!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function ft(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=b,this.setTexture2D=U,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=te,this.rebindTextures=Je,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ke}function qx(n,e){function t(i,r=xn){let o;const a=gt.getTransfer(r);if(i===Hn)return n.UNSIGNED_BYTE;if(i===Ku)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cg)return n.BYTE;if(i===ug)return n.SHORT;if(i===qu)return n.UNSIGNED_SHORT;if(i===Yu)return n.INT;if(i===jr)return n.UNSIGNED_INT;if(i===qt)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===dg)return n.ALPHA;if(i===pg)return n.RGB;if(i===Li)return n.RGBA;if(i===fg)return n.LUMINANCE;if(i===mg)return n.LUMINANCE_ALPHA;if(i===qr)return n.DEPTH_COMPONENT;if(i===Xo)return n.DEPTH_STENCIL;if(i===cl)return n.RED;if(i===Qu)return n.RED_INTEGER;if(i===gg)return n.RG;if(i===Ju)return n.RG_INTEGER;if(i===$u)return n.RGBA_INTEGER;if(i===ul||i===hl||i===dl||i===pl)if(a===St)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ul)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ul)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eh||i===th||i===ih||i===nh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===eh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===th)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ih)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rh||i===oh||i===ah)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===rh||i===oh)return a===St?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ah)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sh||i===lh||i===ch||i===uh||i===hh||i===dh||i===ph||i===fh||i===mh||i===gh||i===_h||i===vh||i===yh||i===xh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===sh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ch)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ph)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_h)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xh)return a===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fl||i===Mh||i===Th)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===fl)return a===St?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Th)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_g||i===bh||i===Sh||i===wh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===fl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===bh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Yx extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sn extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kx={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null;const s=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(u,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const p=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],h=p.position.distanceTo(l.position),d=.02,f=.005;u.inputState.pinching&&h>d+f?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-f&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
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

}`;class Jx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Wt,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Zi({vertexShader:Zx,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ii(new Na(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class $x extends pr{constructor(e,t){super();const i=this;let r=null,o=1,a=null,s="local-floor",c=1,u=null,p=null,l=null,h=null,d=null,f=null;const _=new Jx,g=t.getContextAttributes();let m=null,x=null;const y=[],T=[],P=new je;let S=null;const E=new ri;E.layers.enable(1),E.viewport=new Mt;const C=new ri;C.layers.enable(2),C.viewport=new Mt;const M=[E,C],b=new Yx;b.layers.enable(1),b.layers.enable(2);let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=y[ee];return pe===void 0&&(pe=new Kl,y[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=y[ee];return pe===void 0&&(pe=new Kl,y[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=y[ee];return pe===void 0&&(pe=new Kl,y[ee]=pe),pe.getHandSpace()};function U(ee){const pe=T.indexOf(ee.inputSource);if(pe===-1)return;const Re=y[pe];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,u||a),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Y(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let ee=0;ee<y.length;ee++){const pe=T[ee];pe!==null&&(T[ee]=null,y[ee].disconnect(pe))}k=null,X=null,_.reset(),e.setRenderTarget(m),d=null,h=null,l=null,r=null,x=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ee){u=ee},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return l},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const pe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new fr(d.framebufferWidth,d.framebufferHeight,{format:Li,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let pe=null,Re=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=g.stencil?Xo:qr,Re=g.stencil?Wo:jr);const Je={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:o};l=new XRWebGLBinding(r,t),h=l.createProjectionLayer(Je),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new fr(h.textureWidth,h.textureHeight,{format:Li,type:Hn,depthTexture:new yd(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(s),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(ee){for(let pe=0;pe<ee.removed.length;pe++){const Re=ee.removed[pe],ye=T.indexOf(Re);ye>=0&&(T[ye]=null,y[ye].disconnect(Re))}for(let pe=0;pe<ee.added.length;pe++){const Re=ee.added[pe];let ye=T.indexOf(Re);if(ye===-1){for(let Ze=0;Ze<y.length;Ze++)if(Ze>=T.length){T.push(Re),ye=Ze;break}else if(T[Ze]===null){T[Ze]=Re,ye=Ze;break}if(ye===-1)break}const Je=y[ye];Je&&Je.connect(Re)}}const te=new O,ne=new O;function Q(ee,pe,Re){te.setFromMatrixPosition(pe.matrixWorld),ne.setFromMatrixPosition(Re.matrixWorld);const ye=te.distanceTo(ne),Je=pe.projectionMatrix.elements,Ze=Re.projectionMatrix.elements,H=Je[14]/(Je[10]-1),$e=Je[14]/(Je[10]+1),Fe=(Je[9]+1)/Je[5],ot=(Je[9]-1)/Je[5],De=(Je[8]-1)/Je[0],ke=(Ze[8]+1)/Ze[0],tt=H*De,he=H*ke,ft=ye/(-De+ke),D=ft*-De;pe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(D),ee.translateZ(ft),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const A=H+ft,J=$e+ft,le=tt-D,me=he+(ye-D),fe=Fe*$e/J*A,Be=ot*$e/J*A;ee.projectionMatrix.makePerspective(le,me,fe,Be,A,J),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function se(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;_.texture!==null&&(ee.near=_.depthNear,ee.far=_.depthFar),b.near=C.near=E.near=ee.near,b.far=C.far=E.far=ee.far,(k!==b.near||X!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,X=b.far,E.near=k,E.far=X,C.near=k,C.far=X,E.updateProjectionMatrix(),C.updateProjectionMatrix(),ee.updateProjectionMatrix());const pe=ee.parent,Re=b.cameras;se(b,pe);for(let ye=0;ye<Re.length;ye++)se(Re[ye],pe);Re.length===2?Q(b,E,C):b.projectionMatrix.copy(E.projectionMatrix),de(ee,b,pe)};function de(ee,pe,Re){Re===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Zr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(ee){c=ee,h!==null&&(h.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null};let Pe=null;function Ve(ee,pe){if(p=pe.getViewerPose(u||a),f=pe,p!==null){const Re=p.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ye=!1;Re.length!==b.cameras.length&&(b.cameras.length=0,ye=!0);for(let Ze=0;Ze<Re.length;Ze++){const H=Re[Ze];let $e=null;if(d!==null)$e=d.getViewport(H);else{const ot=l.getViewSubImage(h,H);$e=ot.viewport,Ze===0&&(e.setRenderTargetTextures(x,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(x))}let Fe=M[Ze];Fe===void 0&&(Fe=new ri,Fe.layers.enable(Ze),Fe.viewport=new Mt,M[Ze]=Fe),Fe.matrix.fromArray(H.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(H.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set($e.x,$e.y,$e.width,$e.height),Ze===0&&(b.matrix.copy(Fe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ye===!0&&b.cameras.push(Fe)}const Je=r.enabledFeatures;if(Je&&Je.includes("depth-sensing")){const Ze=l.getDepthInformation(Re[0]);Ze&&Ze.isValid&&Ze.texture&&_.init(e,Ze,r.renderState)}}for(let Re=0;Re<y.length;Re++){const ye=T[Re],Je=y[Re];ye!==null&&Je!==void 0&&Je.update(ye,pe,u||a)}_.render(e,b),Pe&&Pe(ee,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),f=null}const Ue=new hd;Ue.setAnimationLoop(Ve),this.setAnimationLoop=function(ee){Pe=ee},this.dispose=function(){}}}const Tr=new gn,e1=new et;function t1(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ad(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,y,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),l(g,m)):m.isMeshPhongMaterial?(o(g,m),p(g,m)):m.isMeshStandardMaterial?(o(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,T)):m.isMeshMatcapMaterial?(o(g,m),f(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),_(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?c(g,m,x,y):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ci&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ci&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,T=x.envMapRotation;if(y&&(g.envMap.value=y,Tr.copy(T),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),g.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(Tr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*P,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function p(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function l(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ci&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i1(n,e,t,i){let r={},o={},a=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const T=y.program;i.uniformBlockBinding(x,T)}function u(x,y){let T=r[x.id];T===void 0&&(f(x),T=p(x),r[x.id]=T,x.addEventListener("dispose",g));const P=y.program;i.updateUBOMapping(x,P);const S=e.render.frame;o[x.id]!==S&&(h(x),o[x.id]=S)}function p(x){const y=l();x.__bindingPointIndex=y;const T=n.createBuffer(),P=x.__size,S=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function l(){for(let x=0;x<s;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=r[x.id],T=x.uniforms,P=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,E=T.length;S<E;S++){const C=Array.isArray(T[S])?T[S]:[T[S]];for(let M=0,b=C.length;M<b;M++){const k=C[M];if(d(k,S,M,P)===!0){const X=k.__offset,U=Array.isArray(k.value)?k.value:[k.value];let Y=0;for(let q=0;q<U.length;q++){const te=U[q],ne=_(te);typeof te=="number"||typeof te=="boolean"?(k.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,X+Y,k.__data)):te.isMatrix3?(k.__data[0]=te.elements[0],k.__data[1]=te.elements[1],k.__data[2]=te.elements[2],k.__data[3]=0,k.__data[4]=te.elements[3],k.__data[5]=te.elements[4],k.__data[6]=te.elements[5],k.__data[7]=0,k.__data[8]=te.elements[6],k.__data[9]=te.elements[7],k.__data[10]=te.elements[8],k.__data[11]=0):(te.toArray(k.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,y,T,P){const S=x.value,E=y+"_"+T;if(P[E]===void 0)return typeof S=="number"||typeof S=="boolean"?P[E]=S:P[E]=S.clone(),!0;{const C=P[E];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return P[E]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function f(x){const y=x.uniforms;let T=0;const P=16;for(let E=0,C=y.length;E<C;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,k=M.length;b<k;b++){const X=M[b],U=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,q=U.length;Y<q;Y++){const te=U[Y],ne=_(te),Q=T%P;Q!==0&&P-Q<ne.boundary&&(T+=P-Q),X.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=ne.storage}}}const S=T%P;return S>0&&(T+=P-S),x.__size=T,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function m(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},o={}}return{bind:c,update:u,dispose:m}}class n1{constructor(e={}){const{canvas:t=qg(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),f=new Int32Array(4);let _=null,g=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this._useLegacyLights=!1,this.toneMapping=zn,this.toneMappingExposure=1;const y=this;let T=!1,P=0,S=0,E=null,C=-1,M=null;const b=new Mt,k=new Mt;let X=null;const U=new qe(0);let Y=0,q=t.width,te=t.height,ne=1,Q=null,se=null;const de=new Mt(0,0,q,te),Pe=new Mt(0,0,q,te);let Ve=!1;const Ue=new kl;let ee=!1,pe=!1;const Re=new et,ye=new O,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ze(){return E===null?ne:1}let H=i;function $e(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rl}`),t.addEventListener("webglcontextlost",L,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",K,!1),H===null){const V="webgl2";if(H=$e(V,R),H===null)throw $e(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,ot,De,ke,tt,he,ft,D,A,J,le,me,fe,Be,Te,be,Ye,xe,ze,ut,He,Ne,it,at;function mt(){Fe=new hy(H),Fe.init(),Ne=new qx(H,Fe),ot=new oy(H,Fe,e,Ne),De=new Xx(H),ke=new fy(H),tt=new Ix,he=new jx(H,Fe,De,tt,ot,Ne,ke),ft=new sy(y),D=new uy(y),A=new M_(H),it=new ny(H,A),J=new dy(H,A,ke,it),le=new gy(H,J,A,ke),ze=new my(H,ot,he),be=new ay(tt),me=new Px(y,ft,D,Fe,ot,it,be),fe=new t1(y,tt),Be=new Nx,Te=new kx(Fe),xe=new iy(y,ft,D,De,le,h,c),Ye=new Wx(y,le,ot),at=new i1(H,ke,ot,De),ut=new ry(H,Fe,ke),He=new py(H,Fe,ke),ke.programs=me.programs,y.capabilities=ot,y.extensions=Fe,y.properties=tt,y.renderLists=Be,y.shadowMap=Ye,y.state=De,y.info=ke}mt();const N=new $x(y,H);this.xr=N,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(q,te,!1))},this.getSize=function(R){return R.set(q,te)},this.setSize=function(R,V,j=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,te=V,t.width=Math.floor(R*ne),t.height=Math.floor(V*ne),j===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(q*ne,te*ne).floor()},this.setDrawingBufferSize=function(R,V,j){q=R,te=V,ne=j,t.width=Math.floor(R*j),t.height=Math.floor(V*j),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(de)},this.setViewport=function(R,V,j,G){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,V,j,G),De.viewport(b.copy(de).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(Pe)},this.setScissor=function(R,V,j,G){R.isVector4?Pe.set(R.x,R.y,R.z,R.w):Pe.set(R,V,j,G),De.scissor(k.copy(Pe).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(R){De.setScissorTest(Ve=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(R=!0,V=!0,j=!0){let G=0;if(R){let W=!1;if(E!==null){const ge=E.texture.format;W=ge===$u||ge===Ju||ge===Qu}if(W){const ge=E.texture.type,Ae=ge===Hn||ge===jr||ge===qu||ge===Wo||ge===Ku||ge===Zu,ve=xe.getClearColor(),Ee=xe.getClearAlpha(),Ge=ve.r,rt=ve.g,Ke=ve.b;Ae?(d[0]=Ge,d[1]=rt,d[2]=Ke,d[3]=Ee,H.clearBufferuiv(H.COLOR,0,d)):(f[0]=Ge,f[1]=rt,f[2]=Ke,f[3]=Ee,H.clearBufferiv(H.COLOR,0,f))}else G|=H.COLOR_BUFFER_BIT}V&&(G|=H.DEPTH_BUFFER_BIT),j&&(G|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",L,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",K,!1),Be.dispose(),Te.dispose(),tt.dispose(),ft.dispose(),D.dispose(),le.dispose(),it.dispose(),at.dispose(),me.dispose(),N.dispose(),N.removeEventListener("sessionstart",z),N.removeEventListener("sessionend",re),ce.stop()};function L(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=ke.autoReset,V=Ye.enabled,j=Ye.autoUpdate,G=Ye.needsUpdate,W=Ye.type;mt(),ke.autoReset=R,Ye.enabled=V,Ye.autoUpdate=j,Ye.needsUpdate=G,Ye.type=W}function K(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const V=R.target;V.removeEventListener("dispose",_e),v(V)}function v(R){w(R),tt.remove(R)}function w(R){const V=tt.get(R).programs;V!==void 0&&(V.forEach(function(j){me.releaseProgram(j)}),R.isShaderMaterial&&me.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,j,G,W,ge){V===null&&(V=Je);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,ve=Oe(R,V,j,G,W);De.setMaterial(G,Ae);let Ee=j.index,Ge=1;if(G.wireframe===!0){if(Ee=J.getWireframeAttribute(j),Ee===void 0)return;Ge=2}const rt=j.drawRange,Ke=j.attributes.position;let Et=rt.start*Ge,li=(rt.start+rt.count)*Ge;ge!==null&&(Et=Math.max(Et,ge.start*Ge),li=Math.min(li,(ge.start+ge.count)*Ge)),Ee!==null?(Et=Math.max(Et,0),li=Math.min(li,Ee.count)):Ke!=null&&(Et=Math.max(Et,0),li=Math.min(li,Ke.count));const Ci=li-Et;if(Ci<0||Ci===1/0)return;it.setup(W,G,ve,j,Ee);let $t,At=ut;if(Ee!==null&&($t=A.get(Ee),At=He,At.setIndex($t)),W.isMesh)G.wireframe===!0?(De.setLineWidth(G.wireframeLinewidth*Ze()),At.setMode(H.LINES)):At.setMode(H.TRIANGLES);else if(W.isLine){let nt=G.linewidth;nt===void 0&&(nt=1),De.setLineWidth(nt*Ze()),W.isLineSegments?At.setMode(H.LINES):W.isLineLoop?At.setMode(H.LINE_LOOP):At.setMode(H.LINE_STRIP)}else W.isPoints?At.setMode(H.POINTS):W.isSprite&&At.setMode(H.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?At.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)At.renderInstances(Et,Ci,W.count);else if(j.isInstancedBufferGeometry){const nt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,$s=Math.min(j.instanceCount,nt);At.renderInstances(Et,Ci,$s)}else At.render(Et,Ci)};function I(R,V,j){R.transparent===!0&&R.side===gi&&R.forceSinglePass===!1?(R.side=ci,R.needsUpdate=!0,Ie(R,V,j),R.side=yn,R.needsUpdate=!0,Ie(R,V,j),R.side=gi):Ie(R,V,j)}this.compile=function(R,V,j=null){j===null&&(j=R),g=Te.get(j),g.init(V),x.push(g),j.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),R!==j&&R.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(y._useLegacyLights);const G=new Set;return R.traverse(function(W){const ge=W.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const ve=ge[Ae];I(ve,j,W),G.add(ve)}else I(ge,j,W),G.add(ge)}),x.pop(),g=null,G},this.compileAsync=function(R,V,j=null){const G=this.compile(R,V,j);return new Promise(W=>{function ge(){if(G.forEach(function(Ae){tt.get(Ae).currentProgram.isReady()&&G.delete(Ae)}),G.size===0){W(R);return}setTimeout(ge,10)}Fe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let B=null;function Z(R){B&&B(R)}function z(){ce.stop()}function re(){ce.start()}const ce=new hd;ce.setAnimationLoop(Z),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(R){B=R,N.setAnimationLoop(R),R===null?ce.stop():ce.start()},N.addEventListener("sessionstart",z),N.addEventListener("sessionend",re),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(V),V=N.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,V,E),g=Te.get(R,x.length),g.init(V),x.push(g),Re.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ue.setFromProjectionMatrix(Re),pe=this.localClippingEnabled,ee=be.init(this.clippingPlanes,pe),_=Be.get(R,m.length),_.init(),m.push(_),ue(R,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Q,se);const j=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1;j&&xe.addToRenderList(_,R),this.info.render.frame++,ee===!0&&be.beginShadows();const G=g.state.shadowsArray;Ye.render(G,R,V),ee===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,ge=_.transmissive;if(g.setupLights(y._useLegacyLights),V.isArrayCamera){const Ae=V.cameras;if(ge.length>0)for(let ve=0,Ee=Ae.length;ve<Ee;ve++){const Ge=Ae[ve];oe(W,ge,R,Ge)}j&&xe.render(R);for(let ve=0,Ee=Ae.length;ve<Ee;ve++){const Ge=Ae[ve];ae(_,R,Ge,Ge.viewport)}}else ge.length>0&&oe(W,ge,R,V),j&&xe.render(R),ae(_,R,V);E!==null&&(he.updateMultisampleRenderTarget(E),he.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(y,R,V),it.resetDefaultState(),C=-1,M=null,x.pop(),x.length>0?(g=x[x.length-1],ee===!0&&be.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ue(R,V,j,G){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ue.intersectsSprite(R)){G&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const ge=le.update(R),Ae=R.material;Ae.visible&&_.push(R,ge,Ae,j,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ue.intersectsObject(R))){const ge=le.update(R),Ae=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ye.copy(ge.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Ae)){const ve=ge.groups;for(let Ee=0,Ge=ve.length;Ee<Ge;Ee++){const rt=ve[Ee],Ke=Ae[rt.materialIndex];Ke&&Ke.visible&&_.push(R,ge,Ke,j,ye.z,rt)}}else Ae.visible&&_.push(R,ge,Ae,j,ye.z,null)}}const W=R.children;for(let ge=0,Ae=W.length;ge<Ae;ge++)ue(W[ge],V,j,G)}function ae(R,V,j,G){const W=R.opaque,ge=R.transmissive,Ae=R.transparent;g.setupLightsView(j),ee===!0&&be.setGlobalState(y.clippingPlanes,j),G&&De.viewport(b.copy(G)),W.length>0&&we(W,V,j),ge.length>0&&we(ge,V,j),Ae.length>0&&we(Ae,V,j),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function oe(R,V,j,G){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new fr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ii:Hn,minFilter:nn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const W=g.state.transmissionRenderTarget[G.id],ge=G.viewport||b;W.setSize(ge.z,ge.w);const Ae=y.getRenderTarget();y.setRenderTarget(W),y.getClearColor(U),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear();const ve=y.toneMapping;y.toneMapping=zn;const Ee=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),ee===!0&&be.setGlobalState(y.clippingPlanes,G),we(R,j,G),he.updateMultisampleRenderTarget(W),he.updateRenderTargetMipmap(W),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let rt=0,Ke=V.length;rt<Ke;rt++){const Et=V[rt],li=Et.object,Ci=Et.geometry,$t=Et.material,At=Et.group;if($t.side===gi&&li.layers.test(G.layers)){const nt=$t.side;$t.side=ci,$t.needsUpdate=!0,Me(li,j,G,Ci,$t,At),$t.side=nt,$t.needsUpdate=!0,Ge=!0}}Ge===!0&&(he.updateMultisampleRenderTarget(W),he.updateRenderTargetMipmap(W))}y.setRenderTarget(Ae),y.setClearColor(U,Y),Ee!==void 0&&(G.viewport=Ee),y.toneMapping=ve}function we(R,V,j){const G=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ge=R.length;W<ge;W++){const Ae=R[W],ve=Ae.object,Ee=Ae.geometry,Ge=G===null?Ae.material:G,rt=Ae.group;ve.layers.test(j.layers)&&Me(ve,V,j,Ee,Ge,rt)}}function Me(R,V,j,G,W,ge){R.onBeforeRender(y,V,j,G,W,ge),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(y,V,j,G,R,ge),W.transparent===!0&&W.side===gi&&W.forceSinglePass===!1?(W.side=ci,W.needsUpdate=!0,y.renderBufferDirect(j,V,G,W,R,ge),W.side=yn,W.needsUpdate=!0,y.renderBufferDirect(j,V,G,W,R,ge),W.side=gi):y.renderBufferDirect(j,V,G,W,R,ge),R.onAfterRender(y,V,j,G,W,ge)}function Ie(R,V,j){V.isScene!==!0&&(V=Je);const G=tt.get(R),W=g.state.lights,ge=g.state.shadowsArray,Ae=W.state.version,ve=me.getParameters(R,W.state,ge,V,j),Ee=me.getProgramCacheKey(ve);let Ge=G.programs;G.environment=R.isMeshStandardMaterial?V.environment:null,G.fog=V.fog,G.envMap=(R.isMeshStandardMaterial?D:ft).get(R.envMap||G.environment),G.envMapRotation=G.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ge===void 0&&(R.addEventListener("dispose",_e),Ge=new Map,G.programs=Ge);let rt=Ge.get(Ee);if(rt!==void 0){if(G.currentProgram===rt&&G.lightsStateVersion===Ae)return Ce(R,ve),rt}else ve.uniforms=me.getUniforms(R),R.onBuild(j,ve,y),R.onBeforeCompile(ve,y),rt=me.acquireProgram(ve,Ee),Ge.set(Ee,rt),G.uniforms=ve.uniforms;const Ke=G.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=be.uniform),Ce(R,ve),G.needsLights=Tt(R),G.lightsStateVersion=Ae,G.needsLights&&(Ke.ambientLightColor.value=W.state.ambient,Ke.lightProbe.value=W.state.probe,Ke.directionalLights.value=W.state.directional,Ke.directionalLightShadows.value=W.state.directionalShadow,Ke.spotLights.value=W.state.spot,Ke.spotLightShadows.value=W.state.spotShadow,Ke.rectAreaLights.value=W.state.rectArea,Ke.ltc_1.value=W.state.rectAreaLTC1,Ke.ltc_2.value=W.state.rectAreaLTC2,Ke.pointLights.value=W.state.point,Ke.pointLightShadows.value=W.state.pointShadow,Ke.hemisphereLights.value=W.state.hemi,Ke.directionalShadowMap.value=W.state.directionalShadowMap,Ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ke.spotShadowMap.value=W.state.spotShadowMap,Ke.spotLightMatrix.value=W.state.spotLightMatrix,Ke.spotLightMap.value=W.state.spotLightMap,Ke.pointShadowMap.value=W.state.pointShadowMap,Ke.pointShadowMatrix.value=W.state.pointShadowMatrix),G.currentProgram=rt,G.uniformsList=null,rt}function We(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=ds.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Ce(R,V){const j=tt.get(R);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Oe(R,V,j,G,W){V.isScene!==!0&&(V=Je),he.resetTextureUnits();const ge=V.fog,Ae=G.isMeshStandardMaterial?V.environment:null,ve=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ot,Ee=(G.isMeshStandardMaterial?D:ft).get(G.envMap||Ae),Ge=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,rt=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ke=!!j.morphAttributes.position,Et=!!j.morphAttributes.normal,li=!!j.morphAttributes.color;let Ci=zn;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ci=y.toneMapping);const $t=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,At=$t!==void 0?$t.length:0,nt=tt.get(G),$s=g.state.lights;if(ee===!0&&(pe===!0||R!==M)){const Pi=R===M&&G.id===C;be.setState(G,R,Pi)}let el=!1;G.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==$s.state.version||nt.outputColorSpace!==ve||W.isBatchedMesh&&nt.batching===!1||!W.isBatchedMesh&&nt.batching===!0||W.isInstancedMesh&&nt.instancing===!1||!W.isInstancedMesh&&nt.instancing===!0||W.isSkinnedMesh&&nt.skinning===!1||!W.isSkinnedMesh&&nt.skinning===!0||W.isInstancedMesh&&nt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&nt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&nt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&nt.instancingMorph===!1&&W.morphTexture!==null||nt.envMap!==Ee||G.fog===!0&&nt.fog!==ge||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==be.numPlanes||nt.numIntersection!==be.numIntersection)||nt.vertexAlphas!==Ge||nt.vertexTangents!==rt||nt.morphTargets!==Ke||nt.morphNormals!==Et||nt.morphColors!==li||nt.toneMapping!==Ci||nt.morphTargetsCount!==At)&&(el=!0):(el=!0,nt.__version=G.version);let hr=nt.currentProgram;el===!0&&(hr=Ie(G,V,W));let Uu=!1,Vo=!1,tl=!1;const jt=hr.getUniforms(),Bn=nt.uniforms;if(De.useProgram(hr.program)&&(Uu=!0,Vo=!0,tl=!0),G.id!==C&&(C=G.id,Vo=!0),Uu||M!==R){jt.setValue(H,"projectionMatrix",R.projectionMatrix),jt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Pi=jt.map.cameraPosition;Pi!==void 0&&Pi.setValue(H,ye.setFromMatrixPosition(R.matrixWorld)),ot.logarithmicDepthBuffer&&jt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&jt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Vo=!0,tl=!0)}if(W.isSkinnedMesh){jt.setOptional(H,W,"bindMatrix"),jt.setOptional(H,W,"bindMatrixInverse");const Pi=W.skeleton;Pi&&(Pi.boneTexture===null&&Pi.computeBoneTexture(),jt.setValue(H,"boneTexture",Pi.boneTexture,he))}W.isBatchedMesh&&(jt.setOptional(H,W,"batchingTexture"),jt.setValue(H,"batchingTexture",W._matricesTexture,he));const il=j.morphAttributes;if((il.position!==void 0||il.normal!==void 0||il.color!==void 0)&&ze.update(W,j,hr),(Vo||nt.receiveShadow!==W.receiveShadow)&&(nt.receiveShadow=W.receiveShadow,jt.setValue(H,"receiveShadow",W.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Bn.envMap.value=Ee,Bn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&V.environment!==null&&(Bn.envMapIntensity.value=V.environmentIntensity),Vo&&(jt.setValue(H,"toneMappingExposure",y.toneMappingExposure),nt.needsLights&&Qe(Bn,tl),ge&&G.fog===!0&&fe.refreshFogUniforms(Bn,ge),fe.refreshMaterialUniforms(Bn,G,ne,te,g.state.transmissionRenderTarget[R.id]),ds.upload(H,We(nt),Bn,he)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ds.upload(H,We(nt),Bn,he),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&jt.setValue(H,"center",W.center),jt.setValue(H,"modelViewMatrix",W.modelViewMatrix),jt.setValue(H,"normalMatrix",W.normalMatrix),jt.setValue(H,"modelMatrix",W.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Pi=G.uniformsGroups;for(let nl=0,wm=Pi.length;nl<wm;nl++){const Fu=Pi[nl];at.update(Fu,hr),at.bind(Fu,hr)}}return hr}function Qe(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Tt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,V,j){tt.get(R.texture).__webglTexture=V,tt.get(R.depthTexture).__webglTexture=j;const G=tt.get(R);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=j===void 0,G.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const j=tt.get(R);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,j=0){E=R,P=V,S=j;let G=!0,W=null,ge=!1,Ae=!1;if(R){const ve=tt.get(R);ve.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(H.FRAMEBUFFER,null),G=!1):ve.__webglFramebuffer===void 0?he.setupRenderTarget(R):ve.__hasExternalTextures&&he.rebindTextures(R,tt.get(R.texture).__webglTexture,tt.get(R.depthTexture).__webglTexture);const Ee=R.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Ae=!0);const Ge=tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?W=Ge[V][j]:W=Ge[V],ge=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?W=tt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?W=Ge[j]:W=Ge,b.copy(R.viewport),k.copy(R.scissor),X=R.scissorTest}else b.copy(de).multiplyScalar(ne).floor(),k.copy(Pe).multiplyScalar(ne).floor(),X=Ve;if(De.bindFramebuffer(H.FRAMEBUFFER,W)&&G&&De.drawBuffers(R,W),De.viewport(b),De.scissor(k),De.setScissorTest(X),ge){const ve=tt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,ve.__webglTexture,j)}else if(Ae){const ve=tt.get(R.texture),Ee=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ve.__webglTexture,j||0,Ee)}C=-1},this.readRenderTargetPixels=function(R,V,j,G,W,ge,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(ve=ve[Ae]),ve){De.bindFramebuffer(H.FRAMEBUFFER,ve);try{const Ee=R.texture,Ge=Ee.format,rt=Ee.type;if(!ot.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-G&&j>=0&&j<=R.height-W&&H.readPixels(V,j,G,W,Ne.convert(Ge),Ne.convert(rt),ge)}finally{const Ee=E!==null?tt.get(E).__webglFramebuffer:null;De.bindFramebuffer(H.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(R,V,j=0){const G=Math.pow(2,-j),W=Math.floor(V.image.width*G),ge=Math.floor(V.image.height*G);he.setTexture2D(V,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,R.x,R.y,W,ge),De.unbindTexture()},this.copyTextureToTexture=function(R,V,j,G=0){const W=V.image.width,ge=V.image.height,Ae=Ne.convert(j.format),ve=Ne.convert(j.type);he.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),V.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,R.x,R.y,W,ge,Ae,ve,V.image.data):V.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Ae,V.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,G,R.x,R.y,Ae,ve,V.image),G===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(R,V,j,G,W=0){const ge=R.max.x-R.min.x,Ae=R.max.y-R.min.y,ve=R.max.z-R.min.z,Ee=Ne.convert(G.format),Ge=Ne.convert(G.type);let rt;if(G.isData3DTexture)he.setTexture3D(G,0),rt=H.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)he.setTexture2DArray(G,0),rt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const Ke=H.getParameter(H.UNPACK_ROW_LENGTH),Et=H.getParameter(H.UNPACK_IMAGE_HEIGHT),li=H.getParameter(H.UNPACK_SKIP_PIXELS),Ci=H.getParameter(H.UNPACK_SKIP_ROWS),$t=H.getParameter(H.UNPACK_SKIP_IMAGES),At=j.isCompressedTexture?j.mipmaps[W]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,At.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,At.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,R.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,R.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,R.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(rt,W,V.x,V.y,V.z,ge,Ae,ve,Ee,Ge,At.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(rt,W,V.x,V.y,V.z,ge,Ae,ve,Ee,At.data):H.texSubImage3D(rt,W,V.x,V.y,V.z,ge,Ae,ve,Ee,Ge,At),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et),H.pixelStorei(H.UNPACK_SKIP_PIXELS,li),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ci),H.pixelStorei(H.UNPACK_SKIP_IMAGES,$t),W===0&&G.generateMipmaps&&H.generateMipmap(rt),De.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),De.unbindTexture()},this.resetState=function(){P=0,S=0,E=null,De.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_l?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Lu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=i}clone(){return new Lu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class r1 extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class o1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const oi=new O;class Nu{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix4(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)oi.fromBufferAttribute(this,t),oi.applyNormalMatrix(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)oi.fromBufferAttribute(this,t),oi.transformDirection(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ji(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),o=_t(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zd=new O,Hd=new Mt,Vd=new Mt,a1=new O,Gd=new et,ps=new O,Zl=new rn,Wd=new et,Ql=new io;class s1 extends ii{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wu,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ps),this.boundingBox.expandByPoint(ps)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ps),this.boundingSphere.expandByPoint(ps)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zl.copy(this.boundingSphere),Zl.applyMatrix4(r),e.ray.intersectsSphere(Zl)!==!1&&(Wd.copy(r).invert(),Ql.copy(e.ray).applyMatrix4(Wd),!(this.boundingBox!==null&&Ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ql)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Hd.fromBufferAttribute(r.attributes.skinIndex,e),Vd.fromBufferAttribute(r.attributes.skinWeight,e),zd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const a=Vd.getComponent(o);if(a!==0){const s=Hd.getComponent(o);Gd.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(a1.copy(zd).applyMatrix4(Gd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xd extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Jl extends Wt{constructor(e=null,t=1,i=1,r,o,a,s,c,u=ei,p=ei,l,h){super(null,a,s,c,u,p,r,o,l,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new et,l1=new et;class Du{constructor(e=[],t=[]){this.uuid=Xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let o=0,a=e.length;o<a;o++){const s=e[o]?e[o].matrixWorld:l1;jd.multiplyMatrices(s,t[o]),jd.toArray(i,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Du(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Jl(t,e,e,Li,qt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const o=e.bones[i];let a=t[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new Xd),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const a=t[r];e.bones.push(a.uuid);const s=i[r];e.boneInverses.push(s.toArray())}return e}}class $l extends Xt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xo=new et,qd=new et,fs=[],Yd=new Tn,c1=new et,ta=new ii,ia=new rn;class ec extends ii{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,c1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xo),Yd.copy(e.boundingBox).applyMatrix4(xo),this.boundingBox.union(Yd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xo),ia.copy(e.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,a=e*o+1;for(let s=0;s<i.length;s++)i[s]=r[a+s]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(i),e.ray.intersectsSphere(ia)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,xo),qd.multiplyMatrices(i,xo),ta.matrixWorld=qd,ta.raycast(e,fs);for(let a=0,s=fs.length;a<s;a++){const c=fs[a];c.instanceId=o,c.object=this,t.push(c)}fs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jl(new Float32Array(r*this.count),r,this.count,cl,qt));const o=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const s=this.geometry.morphTargetsRelative?1:1-a,c=r*e;o[c]=s,o.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Kd extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ms=new O,gs=new O,Zd=new et,na=new io,_s=new rn,tc=new O,Qd=new O;class ic extends ct{constructor(e=new Wi,t=new Kd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)ms.fromBufferAttribute(t,r-1),gs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ms.distanceTo(gs);e.setAttribute("lineDistance",new Ni(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(r),_s.radius+=o,e.ray.intersectsSphere(_s)===!1)return;Zd.copy(r).invert(),na.copy(e.ray).applyMatrix4(Zd);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,u=this.isLineSegments?2:1,p=i.index,l=i.attributes.position;if(p!==null){const h=Math.max(0,a.start),d=Math.min(p.count,a.start+a.count);for(let f=h,_=d-1;f<_;f+=u){const g=p.getX(f),m=p.getX(f+1),x=vs(this,e,na,c,g,m);x&&t.push(x)}if(this.isLineLoop){const f=p.getX(d-1),_=p.getX(h),g=vs(this,e,na,c,f,_);g&&t.push(g)}}else{const h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let f=h,_=d-1;f<_;f+=u){const g=vs(this,e,na,c,f,f+1);g&&t.push(g)}if(this.isLineLoop){const f=vs(this,e,na,c,d-1,h);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vs(n,e,t,i,r,o){const a=n.geometry.attributes.position;if(ms.fromBufferAttribute(a,r),gs.fromBufferAttribute(a,o),t.distanceSqToSegment(ms,gs,tc,Qd)>i)return;tc.applyMatrix4(n.matrixWorld);const s=e.ray.origin.distanceTo(tc);if(!(s<e.near||s>e.far))return{distance:s,point:Qd.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Jd=new O,$d=new O;class u1 extends ic{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)Jd.fromBufferAttribute(t,r),$d.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jd.distanceTo($d);e.setAttribute("lineDistance",new Ni(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h1 extends ic{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ep extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tp=new et,nc=new io,ys=new rn,xs=new O;class ip extends ct{constructor(e=new Wi,t=new ep){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(r),ys.radius+=o,e.ray.intersectsSphere(ys)===!1)return;tp.copy(r).invert(),nc.copy(e.ray).applyMatrix4(tp);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,u=i.index,p=i.attributes.position;if(u!==null){const l=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let d=l,f=h;d<f;d++){const _=u.getX(d);xs.fromBufferAttribute(p,_),np(xs,_,c,r,e,t,this)}}else{const l=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let d=l,f=h;d<f;d++)xs.fromBufferAttribute(p,d),np(xs,d,c,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function np(n,e,t,i,r,o,a){const s=nc.distanceSqToPoint(n);if(s<t){const c=new O;nc.closestPointToPoint(n,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:a})}}class Ou extends Wi{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+s,Math.PI);let u=0;const p=[],l=new O,h=new O,d=[],f=[],_=[],g=[];for(let m=0;m<=i;m++){const x=[],y=m/i;let T=0;m===0&&a===0?T=.5/t:m===i&&c===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){const S=P/t;l.x=-e*Math.cos(r+S*o)*Math.sin(a+y*s),l.y=e*Math.cos(a+y*s),l.z=e*Math.sin(r+S*o)*Math.sin(a+y*s),f.push(l.x,l.y,l.z),h.copy(l).normalize(),_.push(h.x,h.y,h.z),g.push(S+T,1-y),x.push(u++)}p.push(x)}for(let m=0;m<i;m++)for(let x=0;x<t;x++){const y=p[m][x+1],T=p[m][x],P=p[m+1][x],S=p[m+1][x+1];(m!==0||a>0)&&d.push(y,T,S),(m!==i-1||c<Math.PI)&&d.push(T,P,S)}this.setIndex(d),this.setAttribute("position",new Ni(f,3)),this.setAttribute("normal",new Ni(_,3)),this.setAttribute("uv",new Ni(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rc extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ln extends rc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ms(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function d1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function p1(n){function e(r,o){return n[r]-n[o]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function rp(n,e,t){const i=n.length,r=new n.constructor(i);for(let o=0,a=0;a!==i;++o){const s=t[o]*e;for(let c=0;c!==e;++c)r[a++]=n[s+c]}return r}function op(n,e,t,i){let r=1,o=n[0];for(;o!==void 0&&o[i]===void 0;)o=n[r++];if(o===void 0)return;let a=o[i];if(a!==void 0)if(Array.isArray(a))do a=o[i],a!==void 0&&(e.push(o.time),t.push.apply(t,a)),o=n[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[i],a!==void 0&&(e.push(o.time),a.toArray(t,t.length)),o=n[r++];while(o!==void 0);else do a=o[i],a!==void 0&&(e.push(o.time),t.push(a)),o=n[r++];while(o!==void 0)}class ra{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],o=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<o)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(o=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=o)){const s=t[1];e<s&&(i=2,o=s);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break e}a=i,i=0;break t}break i}for(;i<a;){const s=i+a>>>1;e<t[s]?a=s:i=s+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let a=0;a!==r;++a)t[a]=i[o+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class f1 extends ra{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(e,t,i){const r=this.parameterPositions;let o=e-2,a=e+1,s=r[o],c=r[a];if(s===void 0)switch(this.getSettings_().endingStart){case Ah:o=e,s=2*t-i;break;case Rh:o=r.length-2,s=t+r[o]-r[o+1];break;default:o=e,s=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ah:a=e,c=2*i-t;break;case Rh:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}const u=(i-t)*.5,p=this.valueSize;this._weightPrev=u/(t-s),this._weightNext=u/(c-i),this._offsetPrev=o*p,this._offsetNext=a*p}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=e*s,u=c-s,p=this._offsetPrev,l=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(i-t)/(r-t),_=f*f,g=_*f,m=-h*g+2*h*_-h*f,x=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*f+1,y=(-1-d)*g+(1.5+d)*_+.5*f,T=d*g-d*_;for(let P=0;P!==s;++P)o[P]=m*a[p+P]+x*a[u+P]+y*a[c+P]+T*a[l+P];return o}}class m1 extends ra{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=e*s,u=c-s,p=(i-t)/(r-t),l=1-p;for(let h=0;h!==s;++h)o[h]=a[u+h]*l+a[c+h]*p;return o}}class g1 extends ra{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class cn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new g1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new m1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new f1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jo:t=this.InterpolantFactoryMethodDiscrete;break;case Yr:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jo;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let o=0,a=r-1;for(;o!==r&&i[o]<e;)++o;for(;a!==-1&&i[a]>t;)--a;if(++a,o!==0||a!==r){o>=a&&(a=Math.max(a,1),o=a-1);const s=this.getValueSize();this.times=i.slice(o,a),this.values=this.values.slice(o*s,a*s)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==o;s++){const c=i[s];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,c,a),e=!1;break}a=c}if(r!==void 0&&d1(r))for(let s=0,c=r.length;s!==c;++s){const u=r[s];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ml,o=e.length-1;let a=1;for(let s=1;s<o;++s){let c=!1;const u=e[s],p=e[s+1];if(u!==p&&(s!==1||u!==e[0]))if(r)c=!0;else{const l=s*i,h=l-i,d=l+i;for(let f=0;f!==i;++f){const _=t[l+f];if(_!==t[h+f]||_!==t[d+f]){c=!0;break}}}if(c){if(s!==a){e[a]=e[s];const l=s*i,h=a*i;for(let d=0;d!==i;++d)t[h+d]=t[l+d]}++a}}if(o>0){e[a]=e[o];for(let s=o*i,c=a*i,u=0;u!==i;++u)t[c+u]=t[s+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}cn.prototype.TimeBufferType=Float32Array,cn.prototype.ValueBufferType=Float32Array,cn.prototype.DefaultInterpolation=Yr;class Mo extends cn{}Mo.prototype.ValueTypeName="bool",Mo.prototype.ValueBufferType=Array,Mo.prototype.DefaultInterpolation=jo,Mo.prototype.InterpolantFactoryMethodLinear=void 0,Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class ap extends cn{}ap.prototype.ValueTypeName="color";class To extends cn{}To.prototype.ValueTypeName="number";class _1 extends ra{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=(i-t)/(r-t);let u=e*s;for(let p=u+s;u!==p;u+=4)_i.slerpFlat(o,0,a,u-s,a,u,c);return o}}class br extends cn{InterpolantFactoryMethodLinear(e){return new _1(this.times,this.values,this.getValueSize(),e)}}br.prototype.ValueTypeName="quaternion",br.prototype.DefaultInterpolation=Yr,br.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends cn{}bo.prototype.ValueTypeName="string",bo.prototype.ValueBufferType=Array,bo.prototype.DefaultInterpolation=jo,bo.prototype.InterpolantFactoryMethodLinear=void 0,bo.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends cn{}So.prototype.ValueTypeName="vector";class v1{constructor(e="",t=-1,i=[],r=vg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Xi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,s=i.length;a!==s;++a)t.push(x1(i[a]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,a=i.length;o!==a;++o)t.push(cn.toJSON(i[o]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const o=t.length,a=[];for(let s=0;s<o;s++){let c=[],u=[];c.push((s+o-1)%o,s,(s+1)%o),u.push(0,1,0);const p=p1(c);c=rp(c,1,p),u=rp(u,1,p),!r&&c[0]===0&&(c.push(o),u.push(u[0])),a.push(new To(".morphTargetInfluences["+t[s].name+"]",c,u).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},o=/^([\w-]*?)([\d]+)$/;for(let s=0,c=e.length;s<c;s++){const u=e[s],p=u.name.match(o);if(p&&p.length>1){const l=p[1];let h=r[l];h||(r[l]=h=[]),h.push(u)}}const a=[];for(const s in r)a.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(p,l,h,d,f){if(h.length!==0){const _=[],g=[];op(h,_,g,d),_.length!==0&&f.push(new p(l,_,g))}},r=[],o=e.name||"default",a=e.fps||30,s=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let p=0;p<u.length;p++){const l=u[p].keys;if(!(!l||l.length===0))if(l[0].morphTargets){const h={};let d;for(d=0;d<l.length;d++)if(l[d].morphTargets)for(let f=0;f<l[d].morphTargets.length;f++)h[l[d].morphTargets[f]]=-1;for(const f in h){const _=[],g=[];for(let m=0;m!==l[d].morphTargets.length;++m){const x=l[d];_.push(x.time),g.push(x.morphTarget===f?1:0)}r.push(new To(".morphTargetInfluence["+f+"]",_,g))}c=h.length*a}else{const h=".bones["+t[p].name+"]";i(So,h+".position",l,"pos",r),i(br,h+".quaternion",l,"rot",r),i(So,h+".scale",l,"scl",r)}}return r.length===0?null:new this(o,c,r,s)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function y1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return To;case"vector":case"vector2":case"vector3":case"vector4":return So;case"color":return ap;case"quaternion":return br;case"bool":case"boolean":return Mo;case"string":return bo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function x1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=y1(n.type);if(n.times===void 0){const t=[],i=[];op(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Zn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class sp{constructor(e,t,i){const r=this;let o=!1,a=0,s=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){s++,o===!1&&r.onStart!==void 0&&r.onStart(p,a,s),o=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,s),a===s&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return c?c(p):p},this.setURLModifier=function(p){return c=p,this},this.addHandler=function(p,l){return u.push(p,l),this},this.removeHandler=function(p){const l=u.indexOf(p);return l!==-1&&u.splice(l,2),this},this.getHandler=function(p){for(let l=0,h=u.length;l<h;l+=2){const d=u[l],f=u[l+1];if(d.global&&(d.lastIndex=0),d.test(p))return f}return null}}}const M1=new sp;class Sr{constructor(e){this.manager=e!==void 0?e:M1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Sr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class T1 extends Error{constructor(e,t){super(e),this.response=t}}class oc extends Sr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Zn.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:i,onError:r});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const p=Cn[e],l=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),d=h?parseInt(h):0,f=d!==0;let _=0;const g=new ReadableStream({start(m){x();function x(){l.read().then(({done:y,value:T})=>{if(y)m.close();else{_+=T.byteLength;const P=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:d});for(let S=0,E=p.length;S<E;S++){const C=p[S];C.onProgress&&C.onProgress(P)}m.enqueue(T),x()}})}}});return new Response(g)}else throw new T1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(p=>new DOMParser().parseFromString(p,s));case"json":return u.json();default:if(s===void 0)return u.text();{const p=/charset="?([^;"\s]*)"?/i.exec(s),l=p&&p[1]?p[1].toLowerCase():void 0,h=new TextDecoder(l);return u.arrayBuffer().then(d=>h.decode(d))}}}).then(u=>{Zn.add(e,u);const p=Cn[e];delete Cn[e];for(let l=0,h=p.length;l<h;l++){const d=p[l];d.onLoad&&d.onLoad(u)}}).catch(u=>{const p=Cn[e];if(p===void 0)throw this.manager.itemError(e),u;delete Cn[e];for(let l=0,h=p.length;l<h;l++){const d=p[l];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class b1 extends Sr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=Zn.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;const s=Ko("img");function c(){p(),Zn.add(e,this),t&&t(this),o.manager.itemEnd(e)}function u(l){p(),r&&r(l),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){s.removeEventListener("load",c,!1),s.removeEventListener("error",u,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),o.manager.itemStart(e),s.src=e,s}}class lp extends Sr{constructor(e){super(e)}load(e,t,i,r){const o=this,a=new Jl,s=new oc(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(o.withCredentials),s.load(e,function(c){let u;try{u=o.parse(c)}catch(p){if(r!==void 0)r(p);else{console.error(p);return}}u.image!==void 0?a.image=u.image:u.data!==void 0&&(a.image.width=u.width,a.image.height=u.height,a.image.data=u.data),a.wrapS=u.wrapS!==void 0?u.wrapS:tn,a.wrapT=u.wrapT!==void 0?u.wrapT:tn,a.magFilter=u.magFilter!==void 0?u.magFilter:Dt,a.minFilter=u.minFilter!==void 0?u.minFilter:Dt,a.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(a.colorSpace=u.colorSpace),u.flipY!==void 0&&(a.flipY=u.flipY),u.format!==void 0&&(a.format=u.format),u.type!==void 0&&(a.type=u.type),u.mipmaps!==void 0&&(a.mipmaps=u.mipmaps,a.minFilter=nn),u.mipmapCount===1&&(a.minFilter=Dt),u.generateMipmaps!==void 0&&(a.generateMipmaps=u.generateMipmaps),a.needsUpdate=!0,t&&t(a,u)},i,r),a}}class cp extends Sr{constructor(e){super(e)}load(e,t,i,r){const o=new Wt,a=new b1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){o.image=s,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Ts extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ac=new et,up=new O,hp=new O;class sc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;up.setFromMatrixPosition(e.matrixWorld),t.position.copy(up),hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hp),t.updateMatrixWorld(),ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class S1 extends sc{constructor(){super(new ri(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Zr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(i!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class w1 extends Ts{constructor(e,t,i=0,r=Math.PI/3,o=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new S1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const dp=new et,oa=new O,lc=new O;class E1 extends sc{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),oa.setFromMatrixPosition(e.matrixWorld),i.position.copy(oa),lc.copy(i.position),lc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(lc),i.updateMatrixWorld(),r.makeTranslation(-oa.x,-oa.y,-oa.z),dp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dp)}}class A1 extends Ts{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new E1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class R1 extends sc{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pp extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new R1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class C1 extends Ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class aa{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class P1 extends Sr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=Zn.get(e);if(a!==void 0){if(o.manager.itemStart(e),a.then){a.then(u=>{t&&t(u),o.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a}const s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader;const c=fetch(e,s).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(u){return Zn.add(e,u),t&&t(u),o.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Zn.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Zn.add(e,c),o.manager.itemStart(e)}}class I1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fp(){return(typeof performance>"u"?Date:performance).now()}const cc="\\[\\]\\.:\\/",L1=new RegExp("["+cc+"]","g"),uc="[^"+cc+"]",N1="[^"+cc.replace("\\.","")+"]",D1=/((?:WC+[\/:])*)/.source.replace("WC",uc),O1=/(WCOD+)?/.source.replace("WCOD",N1),U1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),F1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),B1=new RegExp("^"+D1+O1+U1+F1+"$"),k1=["material","materials","bones","map"];class z1{constructor(e,t,i){const r=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class yt{constructor(e,t,i){this.path=t,this.parsedPath=i||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,i):new yt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L1,"")}static parseTrackName(e){const t=B1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=i.nodeName.substring(r+1);k1.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let a=0;a<o.length;a++){const s=o[a];if(s.name===t||s.uuid===t)return s;const c=i(s.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===u){u=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[r];if(a===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=z1,yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray],yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const mp=new et;class H1{constructor(e,t,i=0,r=1/0){this.ray=new io(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mp),this}intersectObject(e,t=!0,i=[]){return hc(e,this,i,t),i.sort(gp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)hc(e[r],this,i,t);return i.sort(gp),i}}function gp(n,e){return n.distance-e.distance}function hc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)hc(r[o],e,t,!0)}}class _p{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);const vp={type:"change"},dc={type:"start"},yp={type:"end"},bs=new io,xp=new Kn,V1=Math.cos(70*Oh.DEG2RAD);class G1 extends pr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Ye),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ye),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(vp),i.update(),o=r.NONE},this.update=function(){const N=new O,L=new _i().setFromUnitVectors(e.up,new O(0,1,0)),$=L.clone().invert(),K=new O,_e=new _i,v=new O,w=2*Math.PI;return function(I=null){const B=i.object.position;N.copy(B).sub(i.target),N.applyQuaternion(L),s.setFromVector3(N),i.autoRotate&&o===r.NONE&&X(b(I)),i.enableDamping?(s.theta+=c.theta*i.dampingFactor,s.phi+=c.phi*i.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let Z=i.minAzimuthAngle,z=i.maxAzimuthAngle;isFinite(Z)&&isFinite(z)&&(Z<-Math.PI?Z+=w:Z>Math.PI&&(Z-=w),z<-Math.PI?z+=w:z>Math.PI&&(z-=w),Z<=z?s.theta=Math.max(Z,Math.min(z,s.theta)):s.theta=s.theta>(Z+z)/2?Math.max(Z,s.theta):Math.min(z,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let re=!1;if(i.zoomToCursor&&S||i.object.isOrthographicCamera)s.radius=de(s.radius);else{const ce=s.radius;s.radius=de(s.radius*u),re=ce!=s.radius}if(N.setFromSpherical(s),N.applyQuaternion($),B.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),p.set(0,0,0)),i.zoomToCursor&&S){let ce=null;if(i.object.isPerspectiveCamera){const ue=N.length();ce=de(ue*u);const ae=ue-ce;i.object.position.addScaledVector(T,ae),i.object.updateMatrixWorld(),re=!!ae}else if(i.object.isOrthographicCamera){const ue=new O(P.x,P.y,0);ue.unproject(i.object);const ae=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),re=ae!==i.object.zoom;const oe=new O(P.x,P.y,0);oe.unproject(i.object),i.object.position.sub(oe).add(ue),i.object.updateMatrixWorld(),ce=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ce!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ce).add(i.object.position):(bs.origin.copy(i.object.position),bs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(bs.direction))<V1?e.lookAt(i.target):(xp.setFromNormalAndCoplanarPoint(i.object.up,i.target),bs.intersectPlane(xp,i.target))))}else if(i.object.isOrthographicCamera){const ce=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),ce!==i.object.zoom&&(i.object.updateProjectionMatrix(),re=!0)}return u=1,S=!1,re||K.distanceToSquared(i.object.position)>a||8*(1-_e.dot(i.object.quaternion))>a||v.distanceToSquared(i.target)>a?(i.dispatchEvent(vp),K.copy(i.object.position),_e.copy(i.object.quaternion),v.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ut),i.domElement.removeEventListener("pointerdown",D),i.domElement.removeEventListener("pointercancel",J),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",J),i.domElement.getRootNode().removeEventListener("keydown",Te,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ye),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new _p,c=new _p;let u=1;const p=new O,l=new je,h=new je,d=new je,f=new je,_=new je,g=new je,m=new je,x=new je,y=new je,T=new O,P=new je;let S=!1;const E=[],C={};let M=!1;function b(N){return N!==null?2*Math.PI/60*i.autoRotateSpeed*N:2*Math.PI/60/60*i.autoRotateSpeed}function k(N){const L=Math.abs(N*.01);return Math.pow(.95,i.zoomSpeed*L)}function X(N){c.theta-=N}function U(N){c.phi-=N}const Y=function(){const N=new O;return function(L,$){N.setFromMatrixColumn($,0),N.multiplyScalar(-L),p.add(N)}}(),q=function(){const N=new O;return function(L,$){i.screenSpacePanning===!0?N.setFromMatrixColumn($,1):(N.setFromMatrixColumn($,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(L),p.add(N)}}(),te=function(){const N=new O;return function(L,$){const K=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;N.copy(_e).sub(i.target);let v=N.length();v*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*L*v/K.clientHeight,i.object.matrix),q(2*$*v/K.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(L*(i.object.right-i.object.left)/i.object.zoom/K.clientWidth,i.object.matrix),q($*(i.object.top-i.object.bottom)/i.object.zoom/K.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(N,L){if(!i.zoomToCursor)return;S=!0;const $=i.domElement.getBoundingClientRect(),K=N-$.left,_e=L-$.top,v=$.width,w=$.height;P.x=K/v*2-1,P.y=-(_e/w)*2+1,T.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function de(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function Pe(N){l.set(N.clientX,N.clientY)}function Ve(N){se(N.clientX,N.clientX),m.set(N.clientX,N.clientY)}function Ue(N){f.set(N.clientX,N.clientY)}function ee(N){h.set(N.clientX,N.clientY),d.subVectors(h,l).multiplyScalar(i.rotateSpeed);const L=i.domElement;X(2*Math.PI*d.x/L.clientHeight),U(2*Math.PI*d.y/L.clientHeight),l.copy(h),i.update()}function pe(N){x.set(N.clientX,N.clientY),y.subVectors(x,m),y.y>0?ne(k(y.y)):y.y<0&&Q(k(y.y)),m.copy(x),i.update()}function Re(N){_.set(N.clientX,N.clientY),g.subVectors(_,f).multiplyScalar(i.panSpeed),te(g.x,g.y),f.copy(_),i.update()}function ye(N){se(N.clientX,N.clientY),N.deltaY<0?Q(k(N.deltaY)):N.deltaY>0&&ne(k(N.deltaY)),i.update()}function Je(N){let L=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(0,i.keyPanSpeed),L=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(0,-i.keyPanSpeed),L=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(i.keyPanSpeed,0),L=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(-i.keyPanSpeed,0),L=!0;break}L&&(N.preventDefault(),i.update())}function Ze(N){if(E.length===1)l.set(N.pageX,N.pageY);else{const L=mt(N),$=.5*(N.pageX+L.x),K=.5*(N.pageY+L.y);l.set($,K)}}function H(N){if(E.length===1)f.set(N.pageX,N.pageY);else{const L=mt(N),$=.5*(N.pageX+L.x),K=.5*(N.pageY+L.y);f.set($,K)}}function $e(N){const L=mt(N),$=N.pageX-L.x,K=N.pageY-L.y,_e=Math.sqrt($*$+K*K);m.set(0,_e)}function Fe(N){i.enableZoom&&$e(N),i.enablePan&&H(N)}function ot(N){i.enableZoom&&$e(N),i.enableRotate&&Ze(N)}function De(N){if(E.length==1)h.set(N.pageX,N.pageY);else{const $=mt(N),K=.5*(N.pageX+$.x),_e=.5*(N.pageY+$.y);h.set(K,_e)}d.subVectors(h,l).multiplyScalar(i.rotateSpeed);const L=i.domElement;X(2*Math.PI*d.x/L.clientHeight),U(2*Math.PI*d.y/L.clientHeight),l.copy(h)}function ke(N){if(E.length===1)_.set(N.pageX,N.pageY);else{const L=mt(N),$=.5*(N.pageX+L.x),K=.5*(N.pageY+L.y);_.set($,K)}g.subVectors(_,f).multiplyScalar(i.panSpeed),te(g.x,g.y),f.copy(_)}function tt(N){const L=mt(N),$=N.pageX-L.x,K=N.pageY-L.y,_e=Math.sqrt($*$+K*K);x.set(0,_e),y.set(0,Math.pow(x.y/m.y,i.zoomSpeed)),ne(y.y),m.copy(x);const v=(N.pageX+L.x)*.5,w=(N.pageY+L.y)*.5;se(v,w)}function he(N){i.enableZoom&&tt(N),i.enablePan&&ke(N)}function ft(N){i.enableZoom&&tt(N),i.enableRotate&&De(N)}function D(N){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",A),i.domElement.addEventListener("pointerup",J)),!it(N)&&(He(N),N.pointerType==="touch"?xe(N):le(N)))}function A(N){i.enabled!==!1&&(N.pointerType==="touch"?ze(N):me(N))}function J(N){switch(Ne(N),E.length){case 0:i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",J),i.dispatchEvent(yp),o=r.NONE;break;case 1:const L=E[0],$=C[L];xe({pointerId:L,pageX:$.x,pageY:$.y});break}}function le(N){let L;switch(N.button){case 0:L=i.mouseButtons.LEFT;break;case 1:L=i.mouseButtons.MIDDLE;break;case 2:L=i.mouseButtons.RIGHT;break;default:L=-1}switch(L){case zr.DOLLY:if(i.enableZoom===!1)return;Ve(N),o=r.DOLLY;break;case zr.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;Ue(N),o=r.PAN}else{if(i.enableRotate===!1)return;Pe(N),o=r.ROTATE}break;case zr.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;Pe(N),o=r.ROTATE}else{if(i.enablePan===!1)return;Ue(N),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(dc)}function me(N){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;ee(N);break;case r.DOLLY:if(i.enableZoom===!1)return;pe(N);break;case r.PAN:if(i.enablePan===!1)return;Re(N);break}}function fe(N){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(N.preventDefault(),i.dispatchEvent(dc),ye(Be(N)),i.dispatchEvent(yp))}function Be(N){const L=N.deltaMode,$={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(L){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return N.ctrlKey&&!M&&($.deltaY*=10),$}function Te(N){N.key==="Control"&&(M=!0,i.domElement.getRootNode().addEventListener("keyup",be,{passive:!0,capture:!0}))}function be(N){N.key==="Control"&&(M=!1,i.domElement.getRootNode().removeEventListener("keyup",be,{passive:!0,capture:!0}))}function Ye(N){i.enabled===!1||i.enablePan===!1||Je(N)}function xe(N){switch(at(N),E.length){case 1:switch(i.touches.ONE){case Hr.ROTATE:if(i.enableRotate===!1)return;Ze(N),o=r.TOUCH_ROTATE;break;case Hr.PAN:if(i.enablePan===!1)return;H(N),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Hr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(N),o=r.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ot(N),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(dc)}function ze(N){switch(at(N),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;De(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ke(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ft(N),i.update();break;default:o=r.NONE}}function ut(N){i.enabled!==!1&&N.preventDefault()}function He(N){E.push(N.pointerId)}function Ne(N){delete C[N.pointerId];for(let L=0;L<E.length;L++)if(E[L]==N.pointerId){E.splice(L,1);return}}function it(N){for(let L=0;L<E.length;L++)if(E[L]==N.pointerId)return!0;return!1}function at(N){let L=C[N.pointerId];L===void 0&&(L=new je,C[N.pointerId]=L),L.set(N.pageX,N.pageY)}function mt(N){const L=N.pointerId===E[0]?E[1]:E[0];return C[L]}i.domElement.addEventListener("contextmenu",ut),i.domElement.addEventListener("pointerdown",D),i.domElement.addEventListener("pointercancel",J),i.domElement.addEventListener("wheel",fe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Te,{passive:!0,capture:!0}),this.update()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Oi=Uint8Array,wo=Uint16Array,W1=Int32Array,Mp=new Oi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Tp=new Oi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),X1=new Oi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),bp=function(n,e){for(var t=new wo(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new W1(t[30]),i=1;i<30;++i)for(var o=t[i];o<t[i+1];++o)r[o]=o-t[i]<<5|i;return{b:t,r}},Sp=bp(Mp,2),wp=Sp.b,j1=Sp.r;wp[28]=258,j1[258]=28;for(var q1=bp(Tp,0),Y1=q1.b,pc=new wo(32768),wt=0;wt<32768;++wt){var Qn=(wt&43690)>>1|(wt&21845)<<1;Qn=(Qn&52428)>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>4|(Qn&3855)<<4,pc[wt]=((Qn&65280)>>8|(Qn&255)<<8)>>1}for(var sa=function(n,e,t){for(var i=n.length,r=0,o=new wo(e);r<i;++r)n[r]&&++o[n[r]-1];var a=new wo(e);for(r=1;r<e;++r)a[r]=a[r-1]+o[r-1]<<1;var s;if(t){s=new wo(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var u=r<<4|n[r],p=e-n[r],l=a[n[r]-1]++<<p,h=l|(1<<p)-1;l<=h;++l)s[pc[l]>>c]=u}else for(s=new wo(i),r=0;r<i;++r)n[r]&&(s[r]=pc[a[n[r]-1]++]>>15-n[r]);return s},la=new Oi(288),wt=0;wt<144;++wt)la[wt]=8;for(var wt=144;wt<256;++wt)la[wt]=9;for(var wt=256;wt<280;++wt)la[wt]=7;for(var wt=280;wt<288;++wt)la[wt]=8;for(var Ep=new Oi(32),wt=0;wt<32;++wt)Ep[wt]=5;var K1=sa(la,9,1),Z1=sa(Ep,5,1),fc=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Qi=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},mc=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},Q1=function(n){return(n+7)/8|0},J1=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Oi(n.subarray(e,t))},$1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ji=function(n,e,t){var i=new Error(e||$1[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Ji),!t)throw i;return i},eM=function(n,e,t,i){var r=n.length,o=0;if(!r||e.f&&!e.l)return t||new Oi(0);var a=!t,s=a||e.i!=2,c=e.i;a&&(t=new Oi(r*3));var u=function($e){var Fe=t.length;if($e>Fe){var ot=new Oi(Math.max(Fe*2,$e));ot.set(t),t=ot}},p=e.f||0,l=e.p||0,h=e.b||0,d=e.l,f=e.d,_=e.m,g=e.n,m=r*8;do{if(!d){p=Qi(n,l,1);var x=Qi(n,l+1,3);if(l+=3,x)if(x==1)d=K1,f=Z1,_=9,g=5;else if(x==2){var y=Qi(n,l,31)+257,T=Qi(n,l+10,15)+4,P=y+Qi(n,l+5,31)+1;l+=14;for(var S=new Oi(P),E=new Oi(19),C=0;C<T;++C)E[X1[C]]=Qi(n,l+C*3,7);l+=T*3;for(var M=fc(E),b=(1<<M)-1,k=sa(E,M,1),C=0;C<P;){var X=k[Qi(n,l,b)];l+=X&15;var U=X>>4;if(U<16)S[C++]=U;else{var Y=0,q=0;for(U==16?(q=3+Qi(n,l,3),l+=2,Y=S[C-1]):U==17?(q=3+Qi(n,l,7),l+=3):U==18&&(q=11+Qi(n,l,127),l+=7);q--;)S[C++]=Y}}var te=S.subarray(0,y),ne=S.subarray(y);_=fc(te),g=fc(ne),d=sa(te,_,1),f=sa(ne,g,1)}else Ji(1);else{var U=Q1(l)+4,Q=n[U-4]|n[U-3]<<8,se=U+Q;if(se>r){c&&Ji(0);break}s&&u(h+Q),t.set(n.subarray(U,se),h),e.b=h+=Q,e.p=l=se*8,e.f=p;continue}if(l>m){c&&Ji(0);break}}s&&u(h+131072);for(var de=(1<<_)-1,Pe=(1<<g)-1,Ve=l;;Ve=l){var Y=d[mc(n,l)&de],Ue=Y>>4;if(l+=Y&15,l>m){c&&Ji(0);break}if(Y||Ji(2),Ue<256)t[h++]=Ue;else if(Ue==256){Ve=l,d=null;break}else{var ee=Ue-254;if(Ue>264){var C=Ue-257,pe=Mp[C];ee=Qi(n,l,(1<<pe)-1)+wp[C],l+=pe}var Re=f[mc(n,l)&Pe],ye=Re>>4;Re||Ji(3),l+=Re&15;var ne=Y1[ye];if(ye>3){var pe=Tp[ye];ne+=mc(n,l)&(1<<pe)-1,l+=pe}if(l>m){c&&Ji(0);break}s&&u(h+131072);var Je=h+ee;if(h<ne){var Ze=o-ne,H=Math.min(ne,Je);for(Ze+h<0&&Ji(3);h<H;++h)t[h]=i[Ze+h]}for(;h<Je;++h)t[h]=t[h-ne]}}e.l=d,e.p=Ve,e.b=h,e.f=p,d&&(p=1,e.m=_,e.d=f,e.n=g)}while(!p);return h!=t.length&&a?J1(t,0,h):t.subarray(0,h)},tM=new Oi(0),iM=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Ji(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&Ji(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Ss(n,e){return eM(n.subarray(iM(n,e),-4),{i:2},e,e)}var nM=typeof TextDecoder<"u"&&new TextDecoder,rM=0;try{nM.decode(tM,{stream:!0}),rM=1}catch{}function Ap(n,e){if(e===yg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===gl||e===Ch){let t=n.getIndex();if(t===null){const a=[],s=n.getAttribute("position");if(s!==void 0){for(let c=0;c<s.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===gl)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=n.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class oM extends lp{constructor(e){super(e),this.type=Ii}parse(e){const t=Math.pow(2.7182818,2.2);function i(v,w){let I=0;for(let Z=0;Z<65536;++Z)(Z==0||v[Z>>3]&1<<(Z&7))&&(w[I++]=Z);const B=I-1;for(;I<65536;)w[I++]=0;return B}function r(v){for(let w=0;w<16384;w++)v[w]={},v[w].len=0,v[w].lit=0,v[w].p=null}const o={l:0,c:0,lc:0};function a(v,w,I,B,Z){for(;I<v;)w=w<<8|Fe(B,Z),I+=8;I-=v,o.l=w>>I&(1<<v)-1,o.c=w,o.lc=I}const s=new Array(59);function c(v){for(let I=0;I<=58;++I)s[I]=0;for(let I=0;I<65537;++I)s[v[I]]+=1;let w=0;for(let I=58;I>0;--I){const B=w+s[I]>>1;s[I]=w,w=B}for(let I=0;I<65537;++I){const B=v[I];B>0&&(v[I]=B|s[B]++<<6)}}function u(v,w,I,B,Z,z){const re=w;let ce=0,ue=0;for(;B<=Z;B++){if(re.value-w.value>I)return!1;a(6,ce,ue,v,re);const ae=o.l;if(ce=o.c,ue=o.lc,z[B]=ae,ae==63){if(re.value-w.value>I)throw new Error("Something wrong with hufUnpackEncTable");a(8,ce,ue,v,re);let oe=o.l+6;if(ce=o.c,ue=o.lc,B+oe>Z+1)throw new Error("Something wrong with hufUnpackEncTable");for(;oe--;)z[B++]=0;B--}else if(ae>=59){let oe=ae-59+2;if(B+oe>Z+1)throw new Error("Something wrong with hufUnpackEncTable");for(;oe--;)z[B++]=0;B--}}c(z)}function p(v){return v&63}function l(v){return v>>6}function h(v,w,I,B){for(;w<=I;w++){const Z=l(v[w]),z=p(v[w]);if(Z>>z)throw new Error("Invalid table entry");if(z>14){const re=B[Z>>z-14];if(re.len)throw new Error("Invalid table entry");if(re.lit++,re.p){const ce=re.p;re.p=new Array(re.lit);for(let ue=0;ue<re.lit-1;++ue)re.p[ue]=ce[ue]}else re.p=new Array(1);re.p[re.lit-1]=w}else if(z){let re=0;for(let ce=1<<14-z;ce>0;ce--){const ue=B[(Z<<14-z)+re];if(ue.len||ue.p)throw new Error("Invalid table entry");ue.len=z,ue.lit=w,re++}}}return!0}const d={c:0,lc:0};function f(v,w,I,B){v=v<<8|Fe(I,B),w+=8,d.c=v,d.lc=w}const _={c:0,lc:0};function g(v,w,I,B,Z,z,re,ce,ue){if(v==w){B<8&&(f(I,B,Z,z),I=d.c,B=d.lc),B-=8;let ae=I>>B;if(ae=new Uint8Array([ae])[0],ce.value+ae>ue)return!1;const oe=re[ce.value-1];for(;ae-- >0;)re[ce.value++]=oe}else if(ce.value<ue)re[ce.value++]=v;else return!1;_.c=I,_.lc=B}function m(v){return v&65535}function x(v){const w=m(v);return w>32767?w-65536:w}const y={a:0,b:0};function T(v,w){const I=x(v),B=x(w),Z=I+(B&1)+(B>>1),z=Z,re=Z-B;y.a=z,y.b=re}function P(v,w){const I=m(v),B=m(w),Z=I-(B>>1)&65535,z=B+Z-32768&65535;y.a=z,y.b=Z}function S(v,w,I,B,Z,z,re){const ce=re<16384,ue=I>Z?Z:I;let ae=1,oe,we;for(;ae<=ue;)ae<<=1;for(ae>>=1,oe=ae,ae>>=1;ae>=1;){we=0;const Me=we+z*(Z-oe),Ie=z*ae,We=z*oe,Ce=B*ae,Oe=B*oe;let Qe,Tt,R,V;for(;we<=Me;we+=We){let j=we;const G=we+B*(I-oe);for(;j<=G;j+=Oe){const W=j+Ce,ge=j+Ie,Ae=ge+Ce;ce?(T(v[j+w],v[ge+w]),Qe=y.a,R=y.b,T(v[W+w],v[Ae+w]),Tt=y.a,V=y.b,T(Qe,Tt),v[j+w]=y.a,v[W+w]=y.b,T(R,V),v[ge+w]=y.a,v[Ae+w]=y.b):(P(v[j+w],v[ge+w]),Qe=y.a,R=y.b,P(v[W+w],v[Ae+w]),Tt=y.a,V=y.b,P(Qe,Tt),v[j+w]=y.a,v[W+w]=y.b,P(R,V),v[ge+w]=y.a,v[Ae+w]=y.b)}if(I&ae){const W=j+Ie;ce?T(v[j+w],v[W+w]):P(v[j+w],v[W+w]),Qe=y.a,v[W+w]=y.b,v[j+w]=Qe}}if(Z&ae){let j=we;const G=we+B*(I-oe);for(;j<=G;j+=Oe){const W=j+Ce;ce?T(v[j+w],v[W+w]):P(v[j+w],v[W+w]),Qe=y.a,v[W+w]=y.b,v[j+w]=Qe}}oe=ae,ae>>=1}return we}function E(v,w,I,B,Z,z,re,ce,ue){let ae=0,oe=0;const we=re,Me=Math.trunc(B.value+(Z+7)/8);for(;B.value<Me;)for(f(ae,oe,I,B),ae=d.c,oe=d.lc;oe>=14;){const We=ae>>oe-14&16383,Ce=w[We];if(Ce.len)oe-=Ce.len,g(Ce.lit,z,ae,oe,I,B,ce,ue,we),ae=_.c,oe=_.lc;else{if(!Ce.p)throw new Error("hufDecode issues");let Oe;for(Oe=0;Oe<Ce.lit;Oe++){const Qe=p(v[Ce.p[Oe]]);for(;oe<Qe&&B.value<Me;)f(ae,oe,I,B),ae=d.c,oe=d.lc;if(oe>=Qe&&l(v[Ce.p[Oe]])==(ae>>oe-Qe&(1<<Qe)-1)){oe-=Qe,g(Ce.p[Oe],z,ae,oe,I,B,ce,ue,we),ae=_.c,oe=_.lc;break}}if(Oe==Ce.lit)throw new Error("hufDecode issues")}}const Ie=8-Z&7;for(ae>>=Ie,oe-=Ie;oe>0;){const We=w[ae<<14-oe&16383];if(We.len)oe-=We.len,g(We.lit,z,ae,oe,I,B,ce,ue,we),ae=_.c,oe=_.lc;else throw new Error("hufDecode issues")}return!0}function C(v,w,I,B,Z,z){const re={value:0},ce=I.value,ue=$e(w,I),ae=$e(w,I);I.value+=4;const oe=$e(w,I);if(I.value+=4,ue<0||ue>=65537||ae<0||ae>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const we=new Array(65537),Me=new Array(16384);r(Me);const Ie=B-(I.value-ce);if(u(v,I,Ie,ue,ae,we),oe>8*(B-(I.value-ce)))throw new Error("Something wrong with hufUncompress");h(we,ue,ae,Me),E(we,Me,v,I,oe,ae,z,Z,re)}function M(v,w,I){for(let B=0;B<I;++B)w[B]=v[w[B]]}function b(v){for(let w=1;w<v.length;w++){const I=v[w-1]+v[w]-128;v[w]=I}}function k(v,w){let I=0,B=Math.floor((v.length+1)/2),Z=0;const z=v.length-1;for(;!(Z>z||(w[Z++]=v[I++],Z>z));)w[Z++]=v[B++]}function X(v){let w=v.byteLength;const I=new Array;let B=0;const Z=new DataView(v);for(;w>0;){const z=Z.getInt8(B++);if(z<0){const re=-z;w-=re+1;for(let ce=0;ce<re;ce++)I.push(Z.getUint8(B++))}else{const re=z;w-=2;const ce=Z.getUint8(B++);for(let ue=0;ue<re+1;ue++)I.push(ce)}}return I}function U(v,w,I,B,Z,z){let re=new DataView(z.buffer);const ce=I[v.idx[0]].width,ue=I[v.idx[0]].height,ae=3,oe=Math.floor(ce/8),we=Math.ceil(ce/8),Me=Math.ceil(ue/8),Ie=ce-(we-1)*8,We=ue-(Me-1)*8,Ce={value:0},Oe=new Array(ae),Qe=new Array(ae),Tt=new Array(ae),R=new Array(ae),V=new Array(ae);for(let G=0;G<ae;++G)V[G]=w[v.idx[G]],Oe[G]=G<1?0:Oe[G-1]+we*Me,Qe[G]=new Float32Array(64),Tt[G]=new Uint16Array(64),R[G]=new Uint16Array(we*64);for(let G=0;G<Me;++G){let W=8;G==Me-1&&(W=We);let ge=8;for(let ve=0;ve<we;++ve){ve==we-1&&(ge=Ie);for(let Ee=0;Ee<ae;++Ee)Tt[Ee].fill(0),Tt[Ee][0]=Z[Oe[Ee]++],Y(Ce,B,Tt[Ee]),q(Tt[Ee],Qe[Ee]),te(Qe[Ee]);ne(Qe);for(let Ee=0;Ee<ae;++Ee)Q(Qe[Ee],R[Ee],ve*64)}let Ae=0;for(let ve=0;ve<ae;++ve){const Ee=I[v.idx[ve]].type;for(let Ge=8*G;Ge<8*G+W;++Ge){Ae=V[ve][Ge];for(let rt=0;rt<oe;++rt){const Ke=rt*64+(Ge&7)*8;re.setUint16(Ae+0*2*Ee,R[ve][Ke+0],!0),re.setUint16(Ae+1*2*Ee,R[ve][Ke+1],!0),re.setUint16(Ae+2*2*Ee,R[ve][Ke+2],!0),re.setUint16(Ae+3*2*Ee,R[ve][Ke+3],!0),re.setUint16(Ae+4*2*Ee,R[ve][Ke+4],!0),re.setUint16(Ae+5*2*Ee,R[ve][Ke+5],!0),re.setUint16(Ae+6*2*Ee,R[ve][Ke+6],!0),re.setUint16(Ae+7*2*Ee,R[ve][Ke+7],!0),Ae+=8*2*Ee}}if(oe!=we)for(let Ge=8*G;Ge<8*G+W;++Ge){const rt=V[ve][Ge]+8*oe*2*Ee,Ke=oe*64+(Ge&7)*8;for(let Et=0;Et<ge;++Et)re.setUint16(rt+Et*2*Ee,R[ve][Ke+Et],!0)}}}const j=new Uint16Array(ce);re=new DataView(z.buffer);for(let G=0;G<ae;++G){I[v.idx[G]].decoded=!0;const W=I[v.idx[G]].type;if(I[G].type==2)for(let ge=0;ge<ue;++ge){const Ae=V[G][ge];for(let ve=0;ve<ce;++ve)j[ve]=re.getUint16(Ae+ve*2*W,!0);for(let ve=0;ve<ce;++ve)re.setFloat32(Ae+ve*2*W,he(j[ve]),!0)}}}function Y(v,w,I){let B,Z=1;for(;Z<64;)B=w[v.value],B==65280?Z=64:B>>8==255?Z+=B&255:(I[Z]=B,Z++),v.value++}function q(v,w){w[0]=he(v[0]),w[1]=he(v[1]),w[2]=he(v[5]),w[3]=he(v[6]),w[4]=he(v[14]),w[5]=he(v[15]),w[6]=he(v[27]),w[7]=he(v[28]),w[8]=he(v[2]),w[9]=he(v[4]),w[10]=he(v[7]),w[11]=he(v[13]),w[12]=he(v[16]),w[13]=he(v[26]),w[14]=he(v[29]),w[15]=he(v[42]),w[16]=he(v[3]),w[17]=he(v[8]),w[18]=he(v[12]),w[19]=he(v[17]),w[20]=he(v[25]),w[21]=he(v[30]),w[22]=he(v[41]),w[23]=he(v[43]),w[24]=he(v[9]),w[25]=he(v[11]),w[26]=he(v[18]),w[27]=he(v[24]),w[28]=he(v[31]),w[29]=he(v[40]),w[30]=he(v[44]),w[31]=he(v[53]),w[32]=he(v[10]),w[33]=he(v[19]),w[34]=he(v[23]),w[35]=he(v[32]),w[36]=he(v[39]),w[37]=he(v[45]),w[38]=he(v[52]),w[39]=he(v[54]),w[40]=he(v[20]),w[41]=he(v[22]),w[42]=he(v[33]),w[43]=he(v[38]),w[44]=he(v[46]),w[45]=he(v[51]),w[46]=he(v[55]),w[47]=he(v[60]),w[48]=he(v[21]),w[49]=he(v[34]),w[50]=he(v[37]),w[51]=he(v[47]),w[52]=he(v[50]),w[53]=he(v[56]),w[54]=he(v[59]),w[55]=he(v[61]),w[56]=he(v[35]),w[57]=he(v[36]),w[58]=he(v[48]),w[59]=he(v[49]),w[60]=he(v[57]),w[61]=he(v[58]),w[62]=he(v[62]),w[63]=he(v[63])}function te(v){const w=.5*Math.cos(.7853975),I=.5*Math.cos(3.14159/16),B=.5*Math.cos(3.14159/8),Z=.5*Math.cos(3*3.14159/16),z=.5*Math.cos(5*3.14159/16),re=.5*Math.cos(3*3.14159/8),ce=.5*Math.cos(7*3.14159/16),ue=new Array(4),ae=new Array(4),oe=new Array(4),we=new Array(4);for(let Me=0;Me<8;++Me){const Ie=Me*8;ue[0]=B*v[Ie+2],ue[1]=re*v[Ie+2],ue[2]=B*v[Ie+6],ue[3]=re*v[Ie+6],ae[0]=I*v[Ie+1]+Z*v[Ie+3]+z*v[Ie+5]+ce*v[Ie+7],ae[1]=Z*v[Ie+1]-ce*v[Ie+3]-I*v[Ie+5]-z*v[Ie+7],ae[2]=z*v[Ie+1]-I*v[Ie+3]+ce*v[Ie+5]+Z*v[Ie+7],ae[3]=ce*v[Ie+1]-z*v[Ie+3]+Z*v[Ie+5]-I*v[Ie+7],oe[0]=w*(v[Ie+0]+v[Ie+4]),oe[3]=w*(v[Ie+0]-v[Ie+4]),oe[1]=ue[0]+ue[3],oe[2]=ue[1]-ue[2],we[0]=oe[0]+oe[1],we[1]=oe[3]+oe[2],we[2]=oe[3]-oe[2],we[3]=oe[0]-oe[1],v[Ie+0]=we[0]+ae[0],v[Ie+1]=we[1]+ae[1],v[Ie+2]=we[2]+ae[2],v[Ie+3]=we[3]+ae[3],v[Ie+4]=we[3]-ae[3],v[Ie+5]=we[2]-ae[2],v[Ie+6]=we[1]-ae[1],v[Ie+7]=we[0]-ae[0]}for(let Me=0;Me<8;++Me)ue[0]=B*v[16+Me],ue[1]=re*v[16+Me],ue[2]=B*v[48+Me],ue[3]=re*v[48+Me],ae[0]=I*v[8+Me]+Z*v[24+Me]+z*v[40+Me]+ce*v[56+Me],ae[1]=Z*v[8+Me]-ce*v[24+Me]-I*v[40+Me]-z*v[56+Me],ae[2]=z*v[8+Me]-I*v[24+Me]+ce*v[40+Me]+Z*v[56+Me],ae[3]=ce*v[8+Me]-z*v[24+Me]+Z*v[40+Me]-I*v[56+Me],oe[0]=w*(v[Me]+v[32+Me]),oe[3]=w*(v[Me]-v[32+Me]),oe[1]=ue[0]+ue[3],oe[2]=ue[1]-ue[2],we[0]=oe[0]+oe[1],we[1]=oe[3]+oe[2],we[2]=oe[3]-oe[2],we[3]=oe[0]-oe[1],v[0+Me]=we[0]+ae[0],v[8+Me]=we[1]+ae[1],v[16+Me]=we[2]+ae[2],v[24+Me]=we[3]+ae[3],v[32+Me]=we[3]-ae[3],v[40+Me]=we[2]-ae[2],v[48+Me]=we[1]-ae[1],v[56+Me]=we[0]-ae[0]}function ne(v){for(let w=0;w<64;++w){const I=v[0][w],B=v[1][w],Z=v[2][w];v[0][w]=I+1.5747*Z,v[1][w]=I-.1873*B-.4682*Z,v[2][w]=I+1.8556*B}}function Q(v,w,I){for(let B=0;B<64;++B)w[I+B]=lo.toHalfFloat(se(v[B]))}function se(v){return v<=1?Math.sign(v)*Math.pow(Math.abs(v),2.2):Math.sign(v)*Math.pow(t,Math.abs(v)-1)}function de(v){return new DataView(v.array.buffer,v.offset.value,v.size)}function Pe(v){const w=v.viewer.buffer.slice(v.offset.value,v.offset.value+v.size),I=new Uint8Array(X(w)),B=new Uint8Array(I.length);return b(I),k(I,B),new DataView(B.buffer)}function Ve(v){const w=v.array.slice(v.offset.value,v.offset.value+v.size),I=Ss(w),B=new Uint8Array(I.length);return b(I),k(I,B),new DataView(B.buffer)}function Ue(v){const w=v.viewer,I={value:v.offset.value},B=new Uint16Array(v.columns*v.lines*(v.inputChannels.length*v.type)),Z=new Uint8Array(8192);let z=0;const re=new Array(v.inputChannels.length);for(let We=0,Ce=v.inputChannels.length;We<Ce;We++)re[We]={},re[We].start=z,re[We].end=re[We].start,re[We].nx=v.columns,re[We].ny=v.lines,re[We].size=v.type,z+=re[We].nx*re[We].ny*re[We].size;const ce=ft(w,I),ue=ft(w,I);if(ue>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ce<=ue)for(let We=0;We<ue-ce+1;We++)Z[We+ce]=ot(w,I);const ae=new Uint16Array(65536),oe=i(Z,ae),we=$e(w,I);C(v.array,w,I,we,B,z);for(let We=0;We<v.inputChannels.length;++We){const Ce=re[We];for(let Oe=0;Oe<re[We].size;++Oe)S(B,Ce.start+Oe,Ce.nx,Ce.size,Ce.ny,Ce.nx*Ce.size,oe)}M(ae,B,z);let Me=0;const Ie=new Uint8Array(B.buffer.byteLength);for(let We=0;We<v.lines;We++)for(let Ce=0;Ce<v.inputChannels.length;Ce++){const Oe=re[Ce],Qe=Oe.nx*Oe.size,Tt=new Uint8Array(B.buffer,Oe.end*2,Qe*2);Ie.set(Tt,Me),Me+=Qe*2,Oe.end+=Qe}return new DataView(Ie.buffer)}function ee(v){const w=v.array.slice(v.offset.value,v.offset.value+v.size),I=Ss(w),B=v.inputChannels.length*v.lines*v.columns*v.totalBytes,Z=new ArrayBuffer(B),z=new DataView(Z);let re=0,ce=0;const ue=new Array(4);for(let ae=0;ae<v.lines;ae++)for(let oe=0;oe<v.inputChannels.length;oe++){let we=0;switch(v.inputChannels[oe].pixelType){case 1:ue[0]=re,ue[1]=ue[0]+v.columns,re=ue[1]+v.columns;for(let Me=0;Me<v.columns;++Me){const Ie=I[ue[0]++]<<8|I[ue[1]++];we+=Ie,z.setUint16(ce,we,!0),ce+=2}break;case 2:ue[0]=re,ue[1]=ue[0]+v.columns,ue[2]=ue[1]+v.columns,re=ue[2]+v.columns;for(let Me=0;Me<v.columns;++Me){const Ie=I[ue[0]++]<<24|I[ue[1]++]<<16|I[ue[2]++]<<8;we+=Ie,z.setUint32(ce,we,!0),ce+=4}break}}return z}function pe(v){const w=v.viewer,I={value:v.offset.value},B=new Uint8Array(v.columns*v.lines*(v.inputChannels.length*v.type*2)),Z={version:De(w,I),unknownUncompressedSize:De(w,I),unknownCompressedSize:De(w,I),acCompressedSize:De(w,I),dcCompressedSize:De(w,I),rleCompressedSize:De(w,I),rleUncompressedSize:De(w,I),rleRawSize:De(w,I),totalAcUncompressedCount:De(w,I),totalDcUncompressedCount:De(w,I),acCompression:De(w,I)};if(Z.version<2)throw new Error("EXRLoader.parse: "+K.compression+" version "+Z.version+" is unsupported");const z=new Array;let re=ft(w,I)-2;for(;re>0;){const Ce=Re(w.buffer,I),Oe=ot(w,I),Qe=Oe>>2&3,Tt=(Oe>>4)-1,R=new Int8Array([Tt])[0],V=ot(w,I);z.push({name:Ce,index:R,type:V,compression:Qe}),re-=Ce.length+3}const ce=K.channels,ue=new Array(v.inputChannels.length);for(let Ce=0;Ce<v.inputChannels.length;++Ce){const Oe=ue[Ce]={},Qe=ce[Ce];Oe.name=Qe.name,Oe.compression=0,Oe.decoded=!1,Oe.type=Qe.pixelType,Oe.pLinear=Qe.pLinear,Oe.width=v.columns,Oe.height=v.lines}const ae={idx:new Array(3)};for(let Ce=0;Ce<v.inputChannels.length;++Ce){const Oe=ue[Ce];for(let Qe=0;Qe<z.length;++Qe){const Tt=z[Qe];Oe.name==Tt.name&&(Oe.compression=Tt.compression,Tt.index>=0&&(ae.idx[Tt.index]=Ce),Oe.offset=Ce)}}let oe,we,Me;if(Z.acCompressedSize>0)switch(Z.acCompression){case 0:oe=new Uint16Array(Z.totalAcUncompressedCount),C(v.array,w,I,Z.acCompressedSize,oe,Z.totalAcUncompressedCount);break;case 1:const Ce=v.array.slice(I.value,I.value+Z.totalAcUncompressedCount),Oe=Ss(Ce);oe=new Uint16Array(Oe.buffer),I.value+=Z.totalAcUncompressedCount;break}if(Z.dcCompressedSize>0){const Ce={array:v.array,offset:I,size:Z.dcCompressedSize};we=new Uint16Array(Ve(Ce).buffer),I.value+=Z.dcCompressedSize}if(Z.rleRawSize>0){const Ce=v.array.slice(I.value,I.value+Z.rleCompressedSize),Oe=Ss(Ce);Me=X(Oe.buffer),I.value+=Z.rleCompressedSize}let Ie=0;const We=new Array(ue.length);for(let Ce=0;Ce<We.length;++Ce)We[Ce]=new Array;for(let Ce=0;Ce<v.lines;++Ce)for(let Oe=0;Oe<ue.length;++Oe)We[Oe].push(Ie),Ie+=ue[Oe].width*v.type*2;U(ae,We,ue,oe,we,B);for(let Ce=0;Ce<ue.length;++Ce){const Oe=ue[Ce];if(!Oe.decoded)switch(Oe.compression){case 2:let Qe=0,Tt=0;for(let R=0;R<v.lines;++R){let V=We[Ce][Qe];for(let j=0;j<Oe.width;++j){for(let G=0;G<2*Oe.type;++G)B[V++]=Me[Tt+G*Oe.width*Oe.height];Tt++}Qe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(B.buffer)}function Re(v,w){const I=new Uint8Array(v);let B=0;for(;I[w.value+B]!=0;)B+=1;const Z=new TextDecoder().decode(I.slice(w.value,w.value+B));return w.value=w.value+B+1,Z}function ye(v,w,I){const B=new TextDecoder().decode(new Uint8Array(v).slice(w.value,w.value+I));return w.value=w.value+I,B}function Je(v,w){const I=H(v,w),B=$e(v,w);return[I,B]}function Ze(v,w){const I=$e(v,w),B=$e(v,w);return[I,B]}function H(v,w){const I=v.getInt32(w.value,!0);return w.value=w.value+4,I}function $e(v,w){const I=v.getUint32(w.value,!0);return w.value=w.value+4,I}function Fe(v,w){const I=v[w.value];return w.value=w.value+1,I}function ot(v,w){const I=v.getUint8(w.value);return w.value=w.value+1,I}const De=function(v,w){let I;return"getBigInt64"in DataView.prototype?I=Number(v.getBigInt64(w.value,!0)):I=v.getUint32(w.value+4,!0)+Number(v.getUint32(w.value,!0)<<32),w.value+=8,I};function ke(v,w){const I=v.getFloat32(w.value,!0);return w.value+=4,I}function tt(v,w){return lo.toHalfFloat(ke(v,w))}function he(v){const w=(v&31744)>>10,I=v&1023;return(v>>15?-1:1)*(w?w===31?I?NaN:1/0:Math.pow(2,w-15)*(1+I/1024):6103515625e-14*(I/1024))}function ft(v,w){const I=v.getUint16(w.value,!0);return w.value+=2,I}function D(v,w){return he(ft(v,w))}function A(v,w,I,B){const Z=I.value,z=[];for(;I.value<Z+B-1;){const re=Re(w,I),ce=H(v,I),ue=ot(v,I);I.value+=3;const ae=H(v,I),oe=H(v,I);z.push({name:re,pixelType:ce,pLinear:ue,xSampling:ae,ySampling:oe})}return I.value+=1,z}function J(v,w){const I=ke(v,w),B=ke(v,w),Z=ke(v,w),z=ke(v,w),re=ke(v,w),ce=ke(v,w),ue=ke(v,w),ae=ke(v,w);return{redX:I,redY:B,greenX:Z,greenY:z,blueX:re,blueY:ce,whiteX:ue,whiteY:ae}}function le(v,w){const I=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],B=ot(v,w);return I[B]}function me(v,w){const I=H(v,w),B=H(v,w),Z=H(v,w),z=H(v,w);return{xMin:I,yMin:B,xMax:Z,yMax:z}}function fe(v,w){const I=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],B=ot(v,w);return I[B]}function Be(v,w){const I=["ENVMAP_LATLONG","ENVMAP_CUBE"],B=ot(v,w);return I[B]}function Te(v,w){const I=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],B=["ROUND_DOWN","ROUND_UP"],Z=$e(v,w),z=$e(v,w),re=ot(v,w);return{xSize:Z,ySize:z,levelMode:I[re&15],roundingMode:B[re>>4]}}function be(v,w){const I=ke(v,w),B=ke(v,w);return[I,B]}function Ye(v,w){const I=ke(v,w),B=ke(v,w),Z=ke(v,w);return[I,B,Z]}function xe(v,w,I,B,Z){if(B==="string"||B==="stringvector"||B==="iccProfile")return ye(w,I,Z);if(B==="chlist")return A(v,w,I,Z);if(B==="chromaticities")return J(v,I);if(B==="compression")return le(v,I);if(B==="box2i")return me(v,I);if(B==="envmap")return Be(v,I);if(B==="tiledesc")return Te(v,I);if(B==="lineOrder")return fe(v,I);if(B==="float")return ke(v,I);if(B==="v2f")return be(v,I);if(B==="v3f")return Ye(v,I);if(B==="int")return H(v,I);if(B==="rational")return Je(v,I);if(B==="timecode")return Ze(v,I);if(B==="preview")return I.value+=Z,"skipped";I.value+=Z}function ze(v,w){const I=Math.log2(v);return w=="ROUND_DOWN"?Math.floor(I):Math.ceil(I)}function ut(v,w,I){let B=0;switch(v.levelMode){case"ONE_LEVEL":B=1;break;case"MIPMAP_LEVELS":B=ze(Math.max(w,I),v.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return B}function He(v,w,I,B){const Z=new Array(v);for(let z=0;z<v;z++){const re=1<<z;let ce=w/re|0;B=="ROUND_UP"&&ce*re<w&&(ce+=1);const ue=Math.max(ce,1);Z[z]=(ue+I-1)/I|0}return Z}function Ne(){const v=this,w=v.offset,I={value:0};for(let B=0;B<v.tileCount;B++){const Z=H(v.viewer,w),z=H(v.viewer,w);w.value+=8,v.size=$e(v.viewer,w);const re=Z*v.blockWidth,ce=z*v.blockHeight;v.columns=re+v.blockWidth>v.width?v.width-re:v.blockWidth,v.lines=ce+v.blockHeight>v.height?v.height-ce:v.blockHeight;const ue=v.columns*v.totalBytes,ae=v.size<v.lines*ue?v.uncompress(v):de(v);w.value+=v.size;for(let oe=0;oe<v.lines;oe++){const we=oe*v.columns*v.totalBytes;for(let Me=0;Me<v.inputChannels.length;Me++){const Ie=K.channels[Me].name,We=v.channelByteOffsets[Ie]*v.columns,Ce=v.decodeChannels[Ie];if(Ce===void 0)continue;I.value=we+We;const Oe=(v.height-(1+ce+oe))*v.outLineWidth;for(let Qe=0;Qe<v.columns;Qe++){const Tt=Oe+(Qe+re)*v.outputChannels+Ce;v.byteArray[Tt]=v.getter(ae,I)}}}}}function it(){const v=this,w=v.offset,I={value:0};for(let B=0;B<v.height/v.blockHeight;B++){const Z=H(v.viewer,w)-K.dataWindow.yMin;v.size=$e(v.viewer,w),v.lines=Z+v.blockHeight>v.height?v.height-Z:v.blockHeight;const z=v.columns*v.totalBytes,re=v.size<v.lines*z?v.uncompress(v):de(v);w.value+=v.size;for(let ce=0;ce<v.blockHeight;ce++){const ue=B*v.blockHeight,ae=ce+v.scanOrder(ue);if(ae>=v.height)continue;const oe=ce*z,we=(v.height-1-ae)*v.outLineWidth;for(let Me=0;Me<v.inputChannels.length;Me++){const Ie=K.channels[Me].name,We=v.channelByteOffsets[Ie]*v.columns,Ce=v.decodeChannels[Ie];if(Ce!==void 0){I.value=oe+We;for(let Oe=0;Oe<v.columns;Oe++){const Qe=we+Oe*v.outputChannels+Ce;v.byteArray[Qe]=v.getter(re,I)}}}}}}function at(v,w,I){const B={};if(v.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");B.version=v.getUint8(4);const Z=v.getUint8(5);B.spec={singleTile:!!(Z&2),longName:!!(Z&4),deepFormat:!!(Z&8),multiPart:!!(Z&16)},I.value=8;let z=!0;for(;z;){const re=Re(w,I);if(re==0)z=!1;else{const ce=Re(w,I),ue=$e(v,I),ae=xe(v,w,I,ce,ue);ae===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ce}'.`):B[re]=ae}}if(Z&-7)throw console.error("THREE.EXRHeader:",B),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return B}function mt(v,w,I,B,Z){const z={size:0,viewer:w,array:I,offset:B,width:v.dataWindow.xMax-v.dataWindow.xMin+1,height:v.dataWindow.yMax-v.dataWindow.yMin+1,inputChannels:v.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Ot};switch(v.compression){case"NO_COMPRESSION":z.blockHeight=1,z.uncompress=de;break;case"RLE_COMPRESSION":z.blockHeight=1,z.uncompress=Pe;break;case"ZIPS_COMPRESSION":z.blockHeight=1,z.uncompress=Ve;break;case"ZIP_COMPRESSION":z.blockHeight=16,z.uncompress=Ve;break;case"PIZ_COMPRESSION":z.blockHeight=32,z.uncompress=Ue;break;case"PXR24_COMPRESSION":z.blockHeight=16,z.uncompress=ee;break;case"DWAA_COMPRESSION":z.blockHeight=32,z.uncompress=pe;break;case"DWAB_COMPRESSION":z.blockHeight=256,z.uncompress=pe;break;default:throw new Error("EXRLoader.parse: "+v.compression+" is unsupported")}const re={};for(const oe of v.channels)switch(oe.name){case"Y":case"R":case"G":case"B":case"A":re[oe.name]=!0,z.type=oe.pixelType}let ce=!1;if(re.R&&re.G&&re.B)ce=!re.A,z.outputChannels=4,z.decodeChannels={R:0,G:1,B:2,A:3};else if(re.Y)z.outputChannels=1,z.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(z.type==1)switch(Z){case qt:z.getter=D;break;case Ii:z.getter=ft;break}else if(z.type==2)switch(Z){case qt:z.getter=ke;break;case Ii:z.getter=tt}else throw new Error("EXRLoader.parse: unsupported pixelType "+z.type+" for "+v.compression+".");z.columns=z.width;const ue=z.width*z.height*z.outputChannels;switch(Z){case qt:z.byteArray=new Float32Array(ue),ce&&z.byteArray.fill(1,0,ue);break;case Ii:z.byteArray=new Uint16Array(ue),ce&&z.byteArray.fill(15360,0,ue);break;default:console.error("THREE.EXRLoader: unsupported type: ",Z);break}let ae=0;for(const oe of v.channels)z.decodeChannels[oe.name]!==void 0&&(z.channelByteOffsets[oe.name]=ae),ae+=oe.pixelType*2;if(z.totalBytes=ae,z.outLineWidth=z.width*z.outputChannels,v.lineOrder==="INCREASING_Y"?z.scanOrder=oe=>oe:z.scanOrder=oe=>z.height-1-oe,z.outputChannels==4?(z.format=Li,z.colorSpace=Ot):(z.format=cl,z.colorSpace=xn),v.spec.singleTile){z.blockHeight=v.tiles.ySize,z.blockWidth=v.tiles.xSize;const oe=ut(v.tiles,z.width,z.height),we=He(oe,z.width,v.tiles.xSize,v.tiles.roundingMode),Me=He(oe,z.height,v.tiles.ySize,v.tiles.roundingMode);z.tileCount=we[0]*Me[0];for(let Ie=0;Ie<oe;Ie++)for(let We=0;We<Me[Ie];We++)for(let Ce=0;Ce<we[Ie];Ce++)De(w,B);z.decode=Ne.bind(z)}else{z.blockWidth=z.width;const oe=Math.ceil(z.height/z.blockHeight);for(let we=0;we<oe;we++)De(w,B);z.decode=it.bind(z)}return z}const N={value:0},L=new DataView(e),$=new Uint8Array(e),K=at(L,e,N),_e=mt(K,L,$,N,this.type);return _e.decode(),{header:K,width:_e.width,height:_e.height,data:_e.byteArray,format:_e.format,colorSpace:_e.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,r){function o(a,s){a.colorSpace=s.colorSpace,a.minFilter=Dt,a.magFilter=Dt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,s)}return super.load(e,o,i,r)}}class aM extends Sr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new wM(t)})}load(e,t,i,r){const o=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=aa.extractUrlBase(e);a=aa.resolveURL(u,this.path)}else a=aa.extractUrlBase(e);this.manager.itemStart(e);const s=function(u){r?r(u):console.error(u),o.manager.itemError(e),o.manager.itemEnd(e)},c=new oc(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{o.parse(u,a,function(p){t(p),o.manager.itemEnd(e)},s)}catch(p){s(p)}},i,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let o;const a={},s={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rp){try{a[ht.KHR_BINARY_GLTF]=new EM(e)}catch(p){r&&r(p);return}o=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new kM(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const l=this.pluginCallbacks[p](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[l.name]=l,a[l.name]=!0}if(o.extensionsUsed)for(let p=0;p<o.extensionsUsed.length;++p){const l=o.extensionsUsed[p],h=o.extensionsRequired||[];switch(l){case ht.KHR_MATERIALS_UNLIT:a[l]=new cM;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[l]=new AM(o,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[l]=new RM;break;case ht.KHR_MESH_QUANTIZATION:a[l]=new CM;break;default:h.indexOf(l)>=0&&s[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(a),u.setPlugins(s),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,o){i.parse(e,t,r,o)})}}function sM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lM{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const o=t.json,a=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let s;const c=new qe(16777215);a.color!==void 0&&c.setRGB(a.color[0],a.color[1],a.color[2],Ot);const u=a.range!==void 0?a.range:0;switch(a.type){case"directional":s=new pp(c),s.target.position.set(0,0,-1),s.add(s.target);break;case"point":s=new A1(c),s.distance=u;break;case"spot":s=new w1(c),s.distance=u,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,s.angle=a.spot.outerConeAngle,s.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return s.position.set(0,0,0),s.decay=2,$n(s,a),a.intensity!==void 0&&(s.intensity=a.intensity),s.name=t.createUniqueName(a.name||"light_"+e),r=Promise.resolve(s),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return i._getNodeRef(t.cache,o,a)})}}class cM{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(e,t,i){const r=[];e.color=new qe(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ot),e.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",o.baseColorTexture,ti))}return Promise.all(r)}}class uM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class hM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const s=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(s,s)}return Promise.all(o)}}class dM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class pM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class fM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const s=a.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Ot)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ti)),a.sheenRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class mM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class gM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const s=a.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(s[0],s[1],s[2],Ot),Promise.all(o)}}class _M{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class vM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const s=a.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(s[0],s[1],s[2],Ot),a.specularColorTexture!==void 0&&o.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,ti)),Promise.all(o)}}class yM{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(o)}}class xM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class MM{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,a)}}class TM{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],s=r.images[a.source];let c=i.textureLoader;if(s.uri){const u=i.options.manager.getHandler(s.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bM{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],s=r.images[a.source];let c=i.textureLoader;if(s.uri){const u=i.options.manager.getHandler(s.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class SM{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(s){const c=r.byteOffset||0,u=r.byteLength||0,p=r.count,l=r.byteStride,h=new Uint8Array(s,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(p,l,h,r.mode,r.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(p*l);return a.decodeGltfBuffer(new Uint8Array(d),p,l,h,r.mode,r.filter),d})})}else return null}}class wM{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Ui.TRIANGLES&&c.mode!==Ui.TRIANGLE_STRIP&&c.mode!==Ui.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],s={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(s[c]=u,s[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),p=u.isGroup?u.children:[u],l=c[0].count,h=[];for(const d of p){const f=new et,_=new O,g=new _i,m=new O(1,1,1),x=new ec(d.geometry,d.material,l);for(let y=0;y<l;y++)s.TRANSLATION&&_.fromBufferAttribute(s.TRANSLATION,y),s.ROTATION&&g.fromBufferAttribute(s.ROTATION,y),s.SCALE&&m.fromBufferAttribute(s.SCALE,y),x.setMatrixAt(y,f.compose(_,g,m));for(const y in s)if(y==="_COLOR_0"){const T=s[y];x.instanceColor=new $l(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&d.geometry.setAttribute(y,s[y]);ct.prototype.copy.call(x,d),this.parser.assignFinalMaterial(x),h.push(x)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const Rp="glTF",ca=12,Cp={JSON:1313821514,BIN:5130562};class EM{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ca),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ca,o=new DataView(e,ca);let a=0;for(;a<r;){const s=o.getUint32(a,!0);a+=4;const c=o.getUint32(a,!0);if(a+=4,c===Cp.JSON){const u=new Uint8Array(e,ca+a,s);this.content=i.decode(u)}else if(c===Cp.BIN){const u=ca+a;this.body=e.slice(u,u+s)}a+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class AM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,s={},c={},u={};for(const p in a){const l=_c[p]||p.toLowerCase();s[l]=a[p]}for(const p in e.attributes){const l=_c[p]||p.toLowerCase();if(a[p]!==void 0){const h=i.accessors[e.attributes[p]],d=Eo[h.componentType];u[l]=d.name,c[l]=h.normalized===!0}}return t.getDependency("bufferView",o).then(function(p){return new Promise(function(l,h){r.decodeDracoFile(p,function(d){for(const f in d.attributes){const _=d.attributes[f],g=c[f];g!==void 0&&(_.normalized=g)}l(d)},s,u,Ot,h)})})}}class RM{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class CM{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class Pp extends ra{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[o+a];return t}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=s*2,u=s*3,p=r-t,l=(i-t)/p,h=l*l,d=h*l,f=e*u,_=f-u,g=-2*d+3*h,m=d-h,x=1-g,y=m-h+l;for(let T=0;T!==s;T++){const P=a[_+T+s],S=a[_+T+c]*p,E=a[f+T+s],C=a[f+T]*p;o[T]=x*P+y*S+g*E+m*C}return o}}const PM=new _i;class IM extends Pp{interpolate_(e,t,i,r){const o=super.interpolate_(e,t,i,r);return PM.fromArray(o).normalize().toArray(o),o}}const Ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ip={9728:ei,9729:Dt,9984:ju,9985:Ba,9986:Go,9987:nn},Lp={33071:tn,33648:Fa,10497:Xr},gc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_c={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},LM={CUBICSPLINE:void 0,LINEAR:Yr,STEP:jo},vc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function NM(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new rc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yn})),n.DefaultMaterial}function wr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function $n(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function DM(n,e,t){let i=!1,r=!1,o=!1;for(let u=0,p=e.length;u<p;u++){const l=e[u];if(l.POSITION!==void 0&&(i=!0),l.NORMAL!==void 0&&(r=!0),l.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(n);const a=[],s=[],c=[];for(let u=0,p=e.length;u<p;u++){const l=e[u];if(i){const h=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):n.attributes.position;a.push(h)}if(r){const h=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):n.attributes.normal;s.push(h)}if(o){const h=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):n.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(s),Promise.all(c)]).then(function(u){const p=u[0],l=u[1],h=u[2];return i&&(n.morphAttributes.position=p),r&&(n.morphAttributes.normal=l),o&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function OM(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function UM(n){let e;const t=n.extensions&&n.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+yc(t.attributes):e=n.indices+":"+yc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+yc(n.targets[i]);return e}function yc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function xc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FM(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const BM=new et;class kM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,o=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,o=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&o<98?this.textureLoader=new cp(this.options.manager):this.textureLoader=new P1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const s={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return wr(o,s,r),$n(s,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(s)})).then(function(){for(const c of s.scenes)c.updateMatrixWorld();e(s)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){const a=t[r].joints;for(let s=0,c=a.length;s<c;s++)e[a[s]].isBone=!0}for(let r=0,o=e.length;r<o;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),o=(a,s)=>{const c=this.associations.get(a);c!=null&&this.associations.set(s,c);for(const[u,p]of a.children.entries())o(p,s.children[u])};return o(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const o=e(t[r]);o&&i.push(o)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,a){i.load(aa.resolveURL(t.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,o=t.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=gc[r.type],s=Eo[r.componentType],c=r.normalized===!0,u=new s(r.count*a);return Promise.resolve(new Xt(u,a,c))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){const s=a[0],c=gc[r.type],u=Eo[r.componentType],p=u.BYTES_PER_ELEMENT,l=p*c,h=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,f=r.normalized===!0;let _,g;if(d&&d!==l){const m=Math.floor(h/d),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let y=t.cache.get(x);y||(_=new u(s,m*d,r.count*d/p),y=new o1(_,d/p),t.cache.add(x,y)),g=new Nu(y,c,h%d/p,f)}else s===null?_=new u(r.count*c):_=new u(s,h,r.count*c),g=new Xt(_,c,f);if(r.sparse!==void 0){const m=gc.SCALAR,x=Eo[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,T=r.sparse.values.byteOffset||0,P=new x(a[1],y,r.sparse.count*m),S=new u(a[2],T,r.sparse.count*c);s!==null&&(g=new Xt(g.array.slice(),g.itemSize,g.normalized));for(let E=0,C=P.length;E<C;E++){const M=P[E];if(g.setX(M,S[E*c]),c>=2&&g.setY(M,S[E*c+1]),c>=3&&g.setZ(M,S[E*c+2]),c>=4&&g.setW(M,S[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const s=i.manager.getHandler(o.uri);s!==null&&(a=s)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const r=this,o=this.json,a=o.textures[e],s=o.images[t],c=(s.uri||s.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=a.name||s.name||"",p.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(p.name=s.uri);const l=(o.samplers||{})[a.sampler]||{};return p.magFilter=Ip[l.magFilter]||Dt,p.minFilter=Ip[l.minFilter]||nn,p.wrapS=Lp[l.wrapS]||Xr,p.wrapT=Lp[l.wrapT]||Xr,r.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const i=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());const a=r.images[e],s=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(l){u=!0;const h=new Blob([l],{type:a.mimeType});return c=s.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(c).then(function(l){return new Promise(function(h,d){let f=h;t.isImageBitmapLoader===!0&&(f=function(_){const g=new Wt(_);g.needsUpdate=!0,h(g)}),t.load(aa.resolveURL(l,o.path),f,void 0,d)})}).then(function(l){return u===!0&&s.revokeObjectURL(c),l.userData.mimeType=a.mimeType||FM(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[e]=p,p}assignTexture(e,t,i,r){const o=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),o.extensions[ht.KHR_TEXTURE_TRANSFORM]){const s=i.extensions!==void 0?i.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const c=o.associations.get(a);a=o.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,s),o.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const s="PointsMaterial:"+i.uuid;let c=this.cache.get(s);c||(c=new ep,on.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(s,c)),i=c}else if(e.isLine){const s="LineBasicMaterial:"+i.uuid;let c=this.cache.get(s);c||(c=new Kd,on.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(s,c)),i=c}if(r||o||a){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),o&&(s+="vertex-colors:"),a&&(s+="flat-shading:");let c=this.cache.get(s);c||(c=i.clone(),o&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(s,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return rc}loadMaterial(e){const t=this,i=this.json,r=this.extensions,o=i.materials[e];let a;const s={},c=o.extensions||{},u=[];if(c[ht.KHR_MATERIALS_UNLIT]){const l=r[ht.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),u.push(l.extendParams(s,o,t))}else{const l=o.pbrMetallicRoughness||{};if(s.color=new qe(1,1,1),s.opacity=1,Array.isArray(l.baseColorFactor)){const h=l.baseColorFactor;s.color.setRGB(h[0],h[1],h[2],Ot),s.opacity=h[3]}l.baseColorTexture!==void 0&&u.push(t.assignTexture(s,"map",l.baseColorTexture,ti)),s.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,s.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(s,"metalnessMap",l.metallicRoughnessTexture)),u.push(t.assignTexture(s,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,s)})))}o.doubleSided===!0&&(s.side=gi);const p=o.alphaMode||vc.OPAQUE;if(p===vc.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,p===vc.MASK&&(s.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==qn&&(u.push(t.assignTexture(s,"normalMap",o.normalTexture)),s.normalScale=new je(1,1),o.normalTexture.scale!==void 0)){const l=o.normalTexture.scale;s.normalScale.set(l,l)}if(o.occlusionTexture!==void 0&&a!==qn&&(u.push(t.assignTexture(s,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==qn){const l=o.emissiveFactor;s.emissive=new qe().setRGB(l[0],l[1],l[2],Ot)}return o.emissiveTexture!==void 0&&a!==qn&&u.push(t.assignTexture(s,"emissiveMap",o.emissiveTexture,ti)),Promise.all(u).then(function(){const l=new a(s);return o.name&&(l.name=o.name),$n(l,o),t.associations.set(l,{materials:e}),o.extensions&&wr(r,l,o),l})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function o(s){return i[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(c){return Np(c,s,t)})}const a=[];for(let s=0,c=e.length;s<c;s++){const u=e[s],p=UM(u),l=r[p];if(l)a.push(l.promise);else{let h;u.extensions&&u.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?h=o(u):h=Np(new Wi,u,t),r[p]={primitive:u,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,o=i.meshes[e],a=o.primitives,s=[];for(let c=0,u=a.length;c<u;c++){const p=a[c].material===void 0?NM(this.cache):this.getDependency("material",a[c].material);s.push(p)}return s.push(t.loadGeometries(a)),Promise.all(s).then(function(c){const u=c.slice(0,c.length-1),p=c[c.length-1],l=[];for(let d=0,f=p.length;d<f;d++){const _=p[d],g=a[d];let m;const x=u[d];if(g.mode===Ui.TRIANGLES||g.mode===Ui.TRIANGLE_STRIP||g.mode===Ui.TRIANGLE_FAN||g.mode===void 0)m=o.isSkinnedMesh===!0?new s1(_,x):new ii(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Ui.TRIANGLE_STRIP?m.geometry=Ap(m.geometry,Ch):g.mode===Ui.TRIANGLE_FAN&&(m.geometry=Ap(m.geometry,gl));else if(g.mode===Ui.LINES)m=new u1(_,x);else if(g.mode===Ui.LINE_STRIP)m=new ic(_,x);else if(g.mode===Ui.LINE_LOOP)m=new h1(_,x);else if(g.mode===Ui.POINTS)m=new ip(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&OM(m,o),m.name=t.createUniqueName(o.name||"mesh_"+e),$n(m,o),g.extensions&&wr(r,m,g),t.assignFinalMaterial(m),l.push(m)}for(let d=0,f=l.length;d<f;d++)t.associations.set(l[d],{meshes:e,primitives:d});if(l.length===1)return o.extensions&&wr(r,l[0],o),l[0];const h=new sn;o.extensions&&wr(r,h,o),t.associations.set(h,{meshes:e});for(let d=0,f=l.length;d<f;d++)h.add(l[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ri(Oh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new zl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),$n(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,o=t.joints.length;r<o;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const o=r.pop(),a=r,s=[],c=[];for(let u=0,p=a.length;u<p;u++){const l=a[u];if(l){s.push(l);const h=new et;o!==null&&h.fromArray(o.array,u*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Du(s,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,a=[],s=[],c=[],u=[],p=[];for(let l=0,h=r.channels.length;l<h;l++){const d=r.channels[l],f=r.samplers[d.sampler],_=d.target,g=_.node,m=r.parameters!==void 0?r.parameters[f.input]:f.input,x=r.parameters!==void 0?r.parameters[f.output]:f.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),u.push(f),p.push(_))}return Promise.all([Promise.all(a),Promise.all(s),Promise.all(c),Promise.all(u),Promise.all(p)]).then(function(l){const h=l[0],d=l[1],f=l[2],_=l[3],g=l[4],m=[];for(let x=0,y=h.length;x<y;x++){const T=h[x],P=d[x],S=f[x],E=_[x],C=g[x];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const M=i._createAnimationTracks(T,P,S,E,C);if(M)for(let b=0;b<M.length;b++)m.push(M[b])}return new v1(o,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){const a=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(s){if(s.isMesh)for(let c=0,u=r.weights.length;c<u;c++)s.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],o=i._loadNodeShallow(e),a=[],s=r.children||[];for(let u=0,p=s.length;u<p;u++)a.push(i.getDependency("node",s[u]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),c]).then(function(u){const p=u[0],l=u[1],h=u[2];h!==null&&p.traverse(function(d){d.isSkinnedMesh&&d.bind(h,BM)});for(let d=0,f=l.length;d<f;d++)p.add(l[d]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],a=o.name?r.createUniqueName(o.name):"",s=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&s.push(c),o.camera!==void 0&&s.push(r.getDependency("camera",o.camera).then(function(u){return r._getNodeRef(r.cameraCache,o.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){s.push(u)}),this.nodeCache[e]=Promise.all(s).then(function(u){let p;if(o.isBone===!0?p=new Xd:u.length>1?p=new sn:u.length===1?p=u[0]:p=new ct,p!==u[0])for(let l=0,h=u.length;l<h;l++)p.add(u[l]);if(o.name&&(p.userData.name=o.name,p.name=a),$n(p,o),o.extensions&&wr(i,p,o),o.matrix!==void 0){const l=new et;l.fromArray(o.matrix),p.applyMatrix4(l)}else o.translation!==void 0&&p.position.fromArray(o.translation),o.rotation!==void 0&&p.quaternion.fromArray(o.rotation),o.scale!==void 0&&p.scale.fromArray(o.scale);return r.associations.has(p)||r.associations.set(p,{}),r.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,o=new sn;i.name&&(o.name=r.createUniqueName(i.name)),$n(o,i),i.extensions&&wr(t,o,i);const a=i.nodes||[],s=[];for(let c=0,u=a.length;c<u;c++)s.push(r.getDependency("node",a[c]));return Promise.all(s).then(function(c){for(let p=0,l=c.length;p<l;p++)o.add(c[p]);const u=p=>{const l=new Map;for(const[h,d]of r.associations)(h instanceof on||h instanceof Wt)&&l.set(h,d);return p.traverse(h=>{const d=r.associations.get(h);d!=null&&l.set(h,d)}),l};return r.associations=u(o),o})}_createAnimationTracks(e,t,i,r,o){const a=[],s=e.name?e.name:e.uuid,c=[];Jn[o.path]===Jn.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(s);let u;switch(Jn[o.path]){case Jn.weights:u=To;break;case Jn.rotation:u=br;break;case Jn.position:case Jn.scale:u=So;break;default:switch(i.itemSize){case 1:u=To;break;case 2:case 3:default:u=So;break}break}const p=r.interpolation!==void 0?LM[r.interpolation]:Yr,l=this._getArrayFromAccessor(i);for(let h=0,d=c.length;h<d;h++){const f=new u(c[h]+"."+Jn[o.path],t.array,l,p);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=xc(t.constructor),r=new Float32Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=t[o]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const i=this instanceof br?IM:Pp;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zM(n,e,t){const i=e.attributes,r=new Tn;if(i.POSITION!==void 0){const s=t.json.accessors[i.POSITION],c=s.min,u=s.max;if(c!==void 0&&u!==void 0){if(r.set(new O(c[0],c[1],c[2]),new O(u[0],u[1],u[2])),s.normalized){const p=xc(Eo[s.componentType]);r.min.multiplyScalar(p),r.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const s=new O,c=new O;for(let u=0,p=o.length;u<p;u++){const l=o[u];if(l.POSITION!==void 0){const h=t.json.accessors[l.POSITION],d=h.min,f=h.max;if(d!==void 0&&f!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(f[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(f[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(f[2]))),h.normalized){const _=xc(Eo[h.componentType]);c.multiplyScalar(_)}s.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(s)}n.boundingBox=r;const a=new rn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function Np(n,e,t){const i=e.attributes,r=[];function o(a,s){return t.getDependency("accessor",a).then(function(c){n.setAttribute(s,c)})}for(const a in i){const s=_c[a]||a.toLowerCase();s in n.attributes||r.push(o(i[a],s))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(s){n.setIndex(s)});r.push(a)}return gt.workingColorSpace!==Ot&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),$n(n,e),zM(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?DM(n,e.targets,t):n})}class HM extends lp{constructor(e){super(e),this.type=Ii}parse(e){const t=function(m,x){switch(m){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},i=`
`,r=function(m,x,y){x=x||1024;let T=m.pos,P=-1,S=0,E="",C=String.fromCharCode.apply(null,new Uint16Array(m.subarray(T,T+128)));for(;0>(P=C.indexOf(i))&&S<x&&T<m.byteLength;)E+=C,S+=C.length,T+=128,C+=String.fromCharCode.apply(null,new Uint16Array(m.subarray(T,T+128)));return-1<P?(m.pos+=S+P+1,E+C.slice(0,P)):!1},o=function(m){const x=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,S=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,E={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let C,M;for((m.pos>=m.byteLength||!(C=r(m)))&&t(1,"no header found"),(M=C.match(x))||t(3,"bad initial token"),E.valid|=1,E.programtype=M[1],E.string+=C+`
`;C=r(m),C!==!1;){if(E.string+=C+`
`,C.charAt(0)==="#"){E.comments+=C+`
`;continue}if((M=C.match(y))&&(E.gamma=parseFloat(M[1])),(M=C.match(T))&&(E.exposure=parseFloat(M[1])),(M=C.match(P))&&(E.valid|=2,E.format=M[1]),(M=C.match(S))&&(E.valid|=4,E.height=parseInt(M[1],10),E.width=parseInt(M[2],10)),E.valid&2&&E.valid&4)break}return E.valid&2||t(3,"missing format specifier"),E.valid&4||t(3,"missing image size specifier"),E},a=function(m,x,y){const T=x;if(T<8||T>32767||m[0]!==2||m[1]!==2||m[2]&128)return new Uint8Array(m);T!==(m[2]<<8|m[3])&&t(3,"wrong scanline width");const P=new Uint8Array(4*x*y);P.length||t(4,"unable to allocate buffer space");let S=0,E=0;const C=4*T,M=new Uint8Array(4),b=new Uint8Array(C);let k=y;for(;k>0&&E<m.byteLength;){E+4>m.byteLength&&t(1),M[0]=m[E++],M[1]=m[E++],M[2]=m[E++],M[3]=m[E++],(M[0]!=2||M[1]!=2||(M[2]<<8|M[3])!=T)&&t(3,"bad rgbe scanline format");let X=0,U;for(;X<C&&E<m.byteLength;){U=m[E++];const q=U>128;if(q&&(U-=128),(U===0||X+U>C)&&t(3,"bad scanline data"),q){const te=m[E++];for(let ne=0;ne<U;ne++)b[X++]=te}else b.set(m.subarray(E,E+U),X),X+=U,E+=U}const Y=T;for(let q=0;q<Y;q++){let te=0;P[S]=b[q+te],te+=T,P[S+1]=b[q+te],te+=T,P[S+2]=b[q+te],te+=T,P[S+3]=b[q+te],S+=4}k--}return P},s=function(m,x,y,T){const P=m[x+3],S=Math.pow(2,P-128)/255;y[T+0]=m[x+0]*S,y[T+1]=m[x+1]*S,y[T+2]=m[x+2]*S,y[T+3]=1},c=function(m,x,y,T){const P=m[x+3],S=Math.pow(2,P-128)/255;y[T+0]=lo.toHalfFloat(Math.min(m[x+0]*S,65504)),y[T+1]=lo.toHalfFloat(Math.min(m[x+1]*S,65504)),y[T+2]=lo.toHalfFloat(Math.min(m[x+2]*S,65504)),y[T+3]=lo.toHalfFloat(1)},u=new Uint8Array(e);u.pos=0;const p=o(u),l=p.width,h=p.height,d=a(u.subarray(u.pos),l,h);let f,_,g;switch(this.type){case qt:g=d.length/4;const m=new Float32Array(g*4);for(let y=0;y<g;y++)s(d,y*4,m,y*4);f=m,_=qt;break;case Ii:g=d.length/4;const x=new Uint16Array(g*4);for(let y=0;y<g;y++)c(d,y*4,x,y*4);f=x,_=Ii;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:l,height:h,data:f,header:p.string,gamma:p.gamma,exposure:p.exposure,type:_}}setDataType(e){return this.type=e,this}load(e,t,i,r){function o(a,s){switch(a.type){case qt:case Ii:a.colorSpace=Ot,a.minFilter=Dt,a.magFilter=Dt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,s)}return super.load(e,o,i,r)}}function Pn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Dp(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ao={duration:.5,overwrite:!1,delay:0},Mc,Zt,Rt,Fi=1e8,bt=1/Fi,Tc=Math.PI*2,VM=Tc/4,GM=0,Op=Math.sqrt,WM=Math.cos,XM=Math.sin,Vt=function(n){return typeof n=="string"},Lt=function(n){return typeof n=="function"},In=function(n){return typeof n=="number"},bc=function(n){return typeof n>"u"},un=function(n){return typeof n=="object"},ui=function(n){return n!==!1},Sc=function(){return typeof window<"u"},ws=function(n){return Lt(n)||Vt(n)},Up=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qt=Array.isArray,wc=/(?:-?\.?\d|\.)+/gi,Fp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bp=/[+-]=-?[.\d]+/,kp=/[^,'"\[\]\s]+/gi,jM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,hn,Ac,Rc,Mi={},Es={},zp,Hp=function(n){return(Es=Ar(n,Mi))&&pi},Cc=function(n,e){return console.warn("Invalid property",n,"set to",e,"Missing plugin? gsap.registerPlugin()")},ua=function(n,e){return!e&&console.warn(n)},Vp=function(n,e){return n&&(Mi[n]=e)&&Es&&(Es[n]=e)||Mi},ha=function(){return 0},qM={suppressEvents:!0,isStart:!0,kill:!1},As={suppressEvents:!0,kill:!1},YM={suppressEvents:!0},Pc={},er=[],Ic={},Gp,Ti={},Lc={},Wp=30,Rs=[],Nc="",Dc=function(n){var e=n[0],t,i;if(un(e)||Lt(e)||(n=[n]),!(t=(e._gsap||{}).harness)){for(i=Rs.length;i--&&!Rs[i].targetTest(e););t=Rs[i]}for(i=n.length;i--;)n[i]&&(n[i]._gsap||(n[i]._gsap=new xf(n[i],t)))||n.splice(i,1);return n},Er=function(n){return n._gsap||Dc(zi(n))[0]._gsap},Xp=function(n,e,t){return(t=n[e])&&Lt(t)?n[e]():bc(t)&&n.getAttribute&&n.getAttribute(e)||t},hi=function(n,e){return(n=n.split(",")).forEach(e)||n},Nt=function(n){return Math.round(n*1e5)/1e5||0},Gt=function(n){return Math.round(n*1e7)/1e7||0},Co=function(n,e){var t=e.charAt(0),i=parseFloat(e.substr(2));return n=parseFloat(n),t==="+"?n+i:t==="-"?n-i:t==="*"?n*i:n/i},KM=function(n,e){for(var t=e.length,i=0;n.indexOf(e[i])<0&&++i<t;);return i<t},Cs=function(){var n=er.length,e=er.slice(0),t,i;for(Ic={},er.length=0,t=0;t<n;t++)i=e[t],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},jp=function(n,e,t,i){er.length&&!Zt&&Cs(),n.render(e,t,Zt&&e<0&&(n._initted||n._startAt)),er.length&&!Zt&&Cs()},qp=function(n){var e=parseFloat(n);return(e||e===0)&&(n+"").match(kp).length<2?e:Vt(n)?n.trim():n},Yp=function(n){return n},Bi=function(n,e){for(var t in e)t in n||(n[t]=e[t]);return n},ZM=function(n){return function(e,t){for(var i in t)i in e||i==="duration"&&n||i==="ease"||(e[i]=t[i])}},Ar=function(n,e){for(var t in e)n[t]=e[t];return n},Kp=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=un(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ps=function(n,e){var t={},i;for(i in n)i in e||(t[i]=n[i]);return t},da=function(n){var e=n.parent||Pt,t=n.keyframes?ZM(Qt(n.keyframes)):Bi;if(ui(n.inherit))for(;e;)t(n,e.vars.defaults),e=e.parent||e._dp;return n},QM=function(n,e){for(var t=n.length,i=t===e.length;i&&t--&&n[t]===e[t];);return t<0},Zp=function(n,e,t,i,r){var o=n[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=n[t],n[t]=e),e._next?e._next._prev=e:n[i]=e,e._prev=o,e.parent=e._dp=n,e},Is=function(n,e,t,i){t===void 0&&(t="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:n[t]===e&&(n[t]=o),o?o._prev=r:n[i]===e&&(n[i]=r),e._next=e._prev=e.parent=null},tr=function(n,e){n.parent&&(!e||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},Rr=function(n,e){if(n&&(!e||e._end>n._dur||e._start<0))for(var t=n;t;)t._dirty=1,t=t.parent;return n},JM=function(n){for(var e=n.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return n},Oc=function(n,e,t,i){return n._startAt&&(Zt?n._startAt.revert(As):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(e,!0,i))},$M=function n(e){return!e||e._ts&&n(e.parent)},Qp=function(n){return n._repeat?Po(n._tTime,n=n.duration()+n._rDelay)*n:0},Po=function(n,e){var t=Math.floor(n/=e);return n&&t===n?t-1:t},Ls=function(n,e){return(n-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ns=function(n){return n._end=Gt(n._start+(n._tDur/Math.abs(n._ts||n._rts||bt)||0))},Ds=function(n,e){var t=n._dp;return t&&t.smoothChildTiming&&n._ts&&(n._start=Gt(t._time-(n._ts>0?e/n._ts:((n._dirty?n.totalDuration():n._tDur)-e)/-n._ts)),Ns(n),t._dirty||Rr(t,n)),n},Jp=function(n,e){var t;if((e._time||!e._dur&&e._initted||e._start<n._time&&(e._dur||!e.add))&&(t=Ls(n.rawTime(),e),(!e._dur||fa(0,e.totalDuration(),t)-e._tTime>bt)&&e.render(t,!0)),Rr(n,e)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(t=n;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;n._zTime=-bt}},dn=function(n,e,t,i){return e.parent&&tr(e),e._start=Gt((In(t)?t:t||n!==Pt?ki(n,t,e):n._time)+e._delay),e._end=Gt(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Zp(n,e,"_first","_last",n._sort?"_start":0),Uc(e)||(n._recent=e),i||Jp(n,e),n._ts<0&&Ds(n,n._tTime),n},$p=function(n,e){return(Mi.ScrollTrigger||Cc("scrollTrigger",e))&&Mi.ScrollTrigger.create(e,n)},ef=function(n,e,t,i,r){if(Xc(n,e,r),!n._initted)return 1;if(!t&&n._pt&&!Zt&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&Gp!==Si.frame)return er.push(n),n._lazy=[r,i],1},eT=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Uc=function(n){var e=n.data;return e==="isFromStart"||e==="isStart"},tT=function(n,e,t,i){var r=n.ratio,o=e<0||!e&&(!n._start&&eT(n)&&!(!n._initted&&Uc(n))||(n._ts<0||n._dp._ts<0)&&!Uc(n))?0:1,a=n._rDelay,s=0,c,u,p;if(a&&n._repeat&&(s=fa(0,n._tDur,e),u=Po(s,a),n._yoyo&&u&1&&(o=1-o),u!==Po(n._tTime,a)&&(r=1-o,n.vars.repeatRefresh&&n._initted&&n.invalidate())),o!==r||Zt||i||n._zTime===bt||!e&&n._zTime){if(!n._initted&&ef(n,e,i,t,s))return;for(p=n._zTime,n._zTime=e||(t?bt:0),t||(t=e&&!p),n.ratio=o,n._from&&(o=1-o),n._time=0,n._tTime=s,c=n._pt;c;)c.r(o,c.d),c=c._next;e<0&&Oc(n,e,t,!0),n._onUpdate&&!t&&bi(n,"onUpdate"),s&&n._repeat&&!t&&n.parent&&bi(n,"onRepeat"),(e>=n._tDur||e<0)&&n.ratio===o&&(o&&tr(n,1),!t&&!Zt&&(bi(n,o?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=e)},iT=function(n,e,t){var i;if(t>e)for(i=n._first;i&&i._start<=t;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=n._last;i&&i._start>=t;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Io=function(n,e,t,i){var r=n._repeat,o=Gt(e)||0,a=n._tTime/n._tDur;return a&&!i&&(n._time*=o/n._dur),n._dur=o,n._tDur=r?r<0?1e10:Gt(o*(r+1)+n._rDelay*r):o,a>0&&!i&&Ds(n,n._tTime=n._tDur*a),n.parent&&Ns(n),t||Rr(n.parent,n),n},tf=function(n){return n instanceof ai?Rr(n):Io(n,n._dur)},nT={_start:0,endTime:ha,totalDuration:ha},ki=function n(e,t,i){var r=e.labels,o=e._recent||nT,a=e.duration()>=Fi?o.endTime(!1):e._dur,s,c,u;return Vt(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),u=t.substr(-1)==="%",s=t.indexOf("="),c==="<"||c===">"?(s>=0&&(t=t.replace(/=/,"")),(c==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(s<0?o:i).totalDuration()/100:1)):s<0?(t in r||(r[t]=a),r[t]):(c=parseFloat(t.charAt(s-1)+t.substr(s+1)),u&&i&&(c=c/100*(Qt(i)?i[0]:i).totalDuration()),s>1?n(e,t.substr(0,s-1),i)+c:a+c)):t==null?a:+t},pa=function(n,e,t){var i=In(e[1]),r=(i?2:1)+(n<2?0:1),o=e[r],a,s;if(i&&(o.duration=e[1]),o.parent=t,n){for(a=o,s=t;s&&!("immediateRender"in a);)a=s.vars.defaults||{},s=ui(s.vars.inherit)&&s.parent;o.immediateRender=ui(a.immediateRender),n<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ft(e[0],o,e[r+1])},ir=function(n,e){return n||n===0?e(n):e},fa=function(n,e,t){return t<n?n:t>e?e:t},Jt=function(n,e){return!Vt(n)||!(e=jM.exec(n))?"":e[1]},rT=function(n,e,t){return ir(t,function(i){return fa(n,e,i)})},Fc=[].slice,nf=function(n,e){return n&&un(n)&&"length"in n&&(!e&&!n.length||n.length-1 in n&&un(n[0]))&&!n.nodeType&&n!==hn},oT=function(n,e,t){return t===void 0&&(t=[]),n.forEach(function(i){var r;return Vt(i)&&!e||nf(i,1)?(r=t).push.apply(r,zi(i)):t.push(i)})||t},zi=function(n,e,t){return Rt&&!e&&Rt.selector?Rt.selector(n):Vt(n)&&!t&&(Ac||!No())?Fc.call((e||Rc).querySelectorAll(n),0):Qt(n)?oT(n,t):nf(n)?Fc.call(n,0):n?[n]:[]},Bc=function(n){return n=zi(n)[0]||ua("Invalid scope")||{},function(e){var t=n.current||n.nativeElement||n;return zi(e,t.querySelectorAll?t:t===n?ua("Invalid scope")||Rc.createElement("div"):n)}},rf=function(n){return n.sort(function(){return .5-Math.random()})},of=function(n){if(Lt(n))return n;var e=un(n)?n:{each:n},t=Cr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,s=isNaN(i)||a,c=e.axis,u=i,p=i;return Vt(i)?u=p={center:.5,edges:.5,end:1}[i]||0:!a&&s&&(u=i[0],p=i[1]),function(l,h,d){var f=(d||e).length,_=o[f],g,m,x,y,T,P,S,E,C;if(!_){if(C=e.grid==="auto"?0:(e.grid||[1,Fi])[1],!C){for(S=-Fi;S<(S=d[C++].getBoundingClientRect().left)&&C<f;);C<f&&C--}for(_=o[f]=[],g=s?Math.min(C,f)*u-.5:i%C,m=C===Fi?0:s?f*p/C-.5:i/C|0,S=0,E=Fi,P=0;P<f;P++)x=P%C-g,y=m-(P/C|0),_[P]=T=c?Math.abs(c==="y"?y:x):Op(x*x+y*y),T>S&&(S=T),T<E&&(E=T);i==="random"&&rf(_),_.max=S-E,_.min=E,_.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(C>f?f-1:c?c==="y"?f/C:C:Math.max(C,f/C))||0)*(i==="edges"?-1:1),_.b=f<0?r-f:r,_.u=Jt(e.amount||e.each)||0,t=t&&f<0?_f(t):t}return f=(_[l]-_.min)/_.max||0,Gt(_.b+(t?t(f):f)*_.v)+_.u}},kc=function(n){var e=Math.pow(10,((n+"").split(".")[1]||"").length);return function(t){var i=Gt(Math.round(parseFloat(t)/n)*n*e);return(i-i%1)/e+(In(t)?0:Jt(t))}},af=function(n,e){var t=Qt(n),i,r;return!t&&un(n)&&(i=t=n.radius||Fi,n.values?(n=zi(n.values),(r=!In(n[0]))&&(i*=i)):n=kc(n.increment)),ir(e,t?Lt(n)?function(o){return r=n(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),s=parseFloat(r?o.y:0),c=Fi,u=0,p=n.length,l,h;p--;)r?(l=n[p].x-a,h=n[p].y-s,l=l*l+h*h):l=Math.abs(n[p]-a),l<c&&(c=l,u=p);return u=!i||c<=i?n[u]:o,r||u===o||In(o)?u:u+Jt(o)}:kc(n))},sf=function(n,e,t,i){return ir(Qt(n)?!e:t===!0?!!(t=0):!i,function(){return Qt(n)?n[~~(Math.random()*n.length)]:(t=t||1e-5)&&(i=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((n-t/2+Math.random()*(e-n+t*.99))/t)*t*i)/i})},aT=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(i){return e.reduce(function(r,o){return o(r)},i)}},sT=function(n,e){return function(t){return n(parseFloat(t))+(e||Jt(t))}},lT=function(n,e,t){return cf(n,e,0,1,t)},lf=function(n,e,t){return ir(t,function(i){return n[~~e(i)]})},cT=function n(e,t,i){var r=t-e;return Qt(e)?lf(e,n(0,e.length),t):ir(i,function(o){return(r+(o-e)%r)%r+e})},uT=function n(e,t,i){var r=t-e,o=r*2;return Qt(e)?lf(e,n(0,e.length-1),t):ir(i,function(a){return a=(o+(a-e)%o)%o||0,e+(a>r?o-a:a)})},ma=function(n){for(var e=0,t="",i,r,o,a;~(i=n.indexOf("random(",e));)o=n.indexOf(")",i),a=n.charAt(i+7)==="[",r=n.substr(i+7,o-i-7).match(a?kp:wc),t+=n.substr(e,i-e)+sf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return t+n.substr(e,n.length-e)},cf=function(n,e,t,i,r){var o=e-n,a=i-t;return ir(r,function(s){return t+((s-n)/o*a||0)})},hT=function n(e,t,i,r){var o=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!o){var a=Vt(e),s={},c,u,p,l,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Qt(e)&&!Qt(t)){for(p=[],l=e.length,h=l-2,u=1;u<l;u++)p.push(n(e[u-1],e[u]));l--,o=function(d){d*=l;var f=Math.min(h,~~d);return p[f](d-f)},i=t}else r||(e=Ar(Qt(e)?[]:{},e));if(!p){for(c in t)Gc.call(s,e,c,"get",t[c]);o=function(d){return Yc(d,s)||(a?e.p:e)}}}return ir(i,o)},uf=function(n,e,t){var i=n.labels,r=Fi,o,a,s;for(o in i)a=i[o]-e,a<0==!!t&&a&&r>(a=Math.abs(a))&&(s=o,r=a);return s},bi=function(n,e,t){var i=n.vars,r=i[e],o=Rt,a=n._ctx,s,c,u;if(r)return s=i[e+"Params"],c=i.callbackScope||n,t&&er.length&&Cs(),a&&(Rt=a),u=s?r.apply(c,s):r.call(c),Rt=o,u},ga=function(n){return tr(n),n.scrollTrigger&&n.scrollTrigger.kill(!!Zt),n.progress()<1&&bi(n,"onInterrupt"),n},Lo,hf=[],df=function(n){if(n)if(n=!n.name&&n.default||n,Sc()||n.headless){var e=n.name,t=Lt(n),i=e&&!t&&n.init?function(){this._props=[]}:n,r={init:ha,render:Yc,add:Gc,kill:AT,modifier:ET,rawVars:0},o={targetTest:0,get:0,getSetter:qc,aliases:{},register:0};if(No(),n!==i){if(Ti[e])return;Bi(i,Bi(Ps(n,r),o)),Ar(i.prototype,Ar(r,Ps(n,o))),Ti[i.prop=e]=i,n.targetTest&&(Rs.push(i),Pc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Vp(e,i),n.register&&n.register(pi,i,di)}else hf.push(n)},xt=255,_a={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},zc=function(n,e,t){return n+=n<0?1:n>1?-1:0,(n*6<1?e+(t-e)*n*6:n<.5?t:n*3<2?e+(t-e)*(2/3-n)*6:e)*xt+.5|0},pf=function(n,e,t){var i=n?In(n)?[n>>16,n>>8&xt,n&xt]:0:_a.black,r,o,a,s,c,u,p,l,h,d;if(!i){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),_a[n])i=_a[n];else if(n.charAt(0)==="#"){if(n.length<6&&(r=n.charAt(1),o=n.charAt(2),a=n.charAt(3),n="#"+r+r+o+o+a+a+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return i=parseInt(n.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),i=[n>>16,n>>8&xt,n&xt]}else if(n.substr(0,3)==="hsl"){if(i=d=n.match(wc),!e)s=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=zc(s+1/3,r,o),i[1]=zc(s,r,o),i[2]=zc(s-1/3,r,o);else if(~n.indexOf("="))return i=n.match(Fp),t&&i.length<4&&(i[3]=1),i}else i=n.match(wc)||_a.transparent;i=i.map(Number)}return e&&!d&&(r=i[0]/xt,o=i[1]/xt,a=i[2]/xt,p=Math.max(r,o,a),l=Math.min(r,o,a),u=(p+l)/2,p===l?s=c=0:(h=p-l,c=u>.5?h/(2-p-l):h/(p+l),s=p===r?(o-a)/h+(o<a?6:0):p===o?(a-r)/h+2:(r-o)/h+4,s*=60),i[0]=~~(s+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),t&&i.length<4&&(i[3]=1),i},ff=function(n){var e=[],t=[],i=-1;return n.split(nr).forEach(function(r){var o=r.match(Ro)||[];e.push.apply(e,o),t.push(i+=o.length+1)}),e.c=t,e},mf=function(n,e,t){var i="",r=(n+i).match(nr),o=e?"hsla(":"rgba(",a=0,s,c,u,p;if(!r)return n;if(r=r.map(function(l){return(l=pf(l,e,1))&&o+(e?l[0]+","+l[1]+"%,"+l[2]+"%,"+l[3]:l.join(","))+")"}),t&&(u=ff(n),s=t.c,s.join(i)!==u.c.join(i)))for(c=n.replace(nr,"1").split(Ro),p=c.length-1;a<p;a++)i+=c[a]+(~s.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:t).shift());if(!c)for(c=n.split(nr),p=c.length-1;a<p;a++)i+=c[a]+r[a];return i+c[p]},nr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _a)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),dT=/hsl[a]?\(/,gf=function(n){var e=n.join(" "),t;if(nr.lastIndex=0,nr.test(e))return t=dT.test(e),n[1]=mf(n[1],t),n[0]=mf(n[0],t,ff(n[1])),!0},va,Si=function(){var n=Date.now,e=500,t=33,i=n(),r=i,o=1e3/240,a=o,s=[],c,u,p,l,h,d,f=function _(g){var m=n()-r,x=g===!0,y,T,P,S;if((m>e||m<0)&&(i+=m-t),r+=m,P=r-i,y=P-a,(y>0||x)&&(S=++l.frame,h=P-l.time*1e3,l.time=P=P/1e3,a+=y+(y>=o?4:o-y),T=1),x||(c=u(_)),T)for(d=0;d<s.length;d++)s[d](P,h,S,g)};return l={time:0,frame:0,tick:function(){f(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){zp&&(!Ac&&Sc()&&(hn=Ac=window,Rc=hn.document||{},Mi.gsap=pi,(hn.gsapVersions||(hn.gsapVersions=[])).push(pi.version),Hp(Es||hn.GreenSockGlobals||!hn.gsap&&hn||{}),hf.forEach(df)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&l.sleep(),u=p||function(_){return setTimeout(_,a-l.time*1e3+1|0)},va=1,f(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(c),va=0,u=ha},lagSmoothing:function(_,g){e=_||1/0,t=Math.min(g||33,e)},fps:function(_){o=1e3/(_||240),a=l.time*1e3+o},add:function(_,g,m){var x=g?function(y,T,P,S){_(y,T,P,S),l.remove(x)}:_;return l.remove(_),s[m?"unshift":"push"](x),No(),x},remove:function(_,g){~(g=s.indexOf(_))&&s.splice(g,1)&&d>=g&&d--},_listeners:s},l}(),No=function(){return!va&&Si.wake()},dt={},pT=/^[\d.\-M][\d.\-,\s]/,fT=/["']/g,mT=function(n){for(var e={},t=n.substr(1,n.length-3).split(":"),i=t[0],r=1,o=t.length,a,s,c;r<o;r++)s=t[r],a=r!==o-1?s.lastIndexOf(","):s.length,c=s.substr(0,a),e[i]=isNaN(c)?c.replace(fT,"").trim():+c,i=s.substr(a+1).trim();return e},gT=function(n){var e=n.indexOf("(")+1,t=n.indexOf(")"),i=n.indexOf("(",e);return n.substring(e,~i&&i<t?n.indexOf(")",t+1):t)},_T=function(n){var e=(n+"").split("("),t=dt[e[0]];return t&&e.length>1&&t.config?t.config.apply(null,~n.indexOf("{")?[mT(e[1])]:gT(n).split(",").map(qp)):dt._CE&&pT.test(n)?dt._CE("",n):t},_f=function(n){return function(e){return 1-n(1-e)}},vf=function n(e,t){for(var i=e._first,r;i;)i instanceof ai?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Cr=function(n,e){return n&&(Lt(n)?n:dt[n]||_T(n))||e},Pr=function(n,e,t,i){t===void 0&&(t=function(a){return 1-e(1-a)}),i===void 0&&(i=function(a){return a<.5?e(a*2)/2:1-e((1-a)*2)/2});var r={easeIn:e,easeOut:t,easeInOut:i},o;return hi(n,function(a){dt[a]=Mi[a]=r,dt[o=a.toLowerCase()]=t;for(var s in r)dt[o+(s==="easeIn"?".in":s==="easeOut"?".out":".inOut")]=dt[a+"."+s]=r[s]}),r},yf=function(n){return function(e){return e<.5?(1-n(1-e*2))/2:.5+n((e-.5)*2)/2}},Hc=function n(e,t,i){var r=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),a=o/Tc*(Math.asin(1/r)||0),s=function(u){return u===1?1:r*Math.pow(2,-10*u)*XM((u-a)*o)+1},c=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:yf(s);return o=Tc/o,c.config=function(u,p){return n(e,u,p)},c},Vc=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:yf(i);return r.config=function(o){return n(e,o)},r};hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Pr(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})}),dt.Linear.easeNone=dt.none=dt.Linear.easeIn,Pr("Elastic",Hc("in"),Hc("out"),Hc()),function(n,e){var t=1/e,i=2*t,r=2.5*t,o=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Pr("Bounce",function(a){return 1-o(1-a)},o)}(7.5625,2.75),Pr("Expo",function(n){return n?Math.pow(2,10*(n-1)):0}),Pr("Circ",function(n){return-(Op(1-n*n)-1)}),Pr("Sine",function(n){return n===1?1:-WM(n*VM)+1}),Pr("Back",Vc("in"),Vc("out"),Vc()),dt.SteppedEase=dt.steps=Mi.SteppedEase={config:function(n,e){n===void 0&&(n=1);var t=1/n,i=n+(e?0:1),r=e?1:0,o=1-bt;return function(a){return((i*fa(0,o,a)|0)+r)*t}}},Ao.ease=dt["quad.out"],hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Nc+=n+","+n+"Params,"});var xf=function(n,e){this.id=GM++,n._gsap=this,this.target=n,this.harness=e,this.get=e?e.get:Xp,this.set=e?e.getSetter:qc},ya=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Io(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),va||Si.wake()}var e=n.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Io(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,i){if(No(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ds(this,t),!r._dp||r.parent||Jp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&dn(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),jp(this,t,i)),this},e.time=function(t,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Qp(this))%(this._dur+this._rDelay)||(t?this._dur:0),i):this._time},e.totalProgress=function(t,i){return arguments.length?this.totalTime(this.totalDuration()*t,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(t,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+Qp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,i):this._repeat?Po(this._tTime,r)+1:1},e.timeScale=function(t,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Ls(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-bt?0:this._rts,this.totalTime(fa(-Math.abs(this._delay),this._tDur,r),i!==!1),Ns(this),JM(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(No(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&dn(i,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(ui(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var i=this.parent||this._dp;return i?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ls(i.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=YM);var i=Zt;return Zt=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Zt=i,this},e.globalTime=function(t){for(var i=this,r=arguments.length?t:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(t):r},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,tf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var i=this._time;return this._rDelay=t,tf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,i){return this.totalTime(ki(this,t),ui(i))},e.restart=function(t,i){return this.play().totalTime(t?-this._delay:0,ui(i))},e.play=function(t,i){return t!=null&&this.seek(t,i),this.reversed(!1).paused(!1)},e.reverse=function(t,i){return t!=null&&this.seek(t||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(t,i){return t!=null&&this.seek(t,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var t=this.parent||this._dp,i=this._start,r;return!!(!t||this._ts&&this._initted&&t.isActive()&&(r=t.rawTime(!0))>=i&&r<this.endTime(!0)-bt)},e.eventCallback=function(t,i,r){var o=this.vars;return arguments.length>1?(i?(o[t]=i,r&&(o[t+"Params"]=r),t==="onUpdate"&&(this._onUpdate=i)):delete o[t],this):o[t]},e.then=function(t){var i=this;return new Promise(function(r){var o=Lt(t)?t:Yp,a=function(){var s=i.then;i.then=null,Lt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=s),r(o),i.then=s};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ga(this)},n}();Bi(ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var ai=function(n){Dp(e,n);function e(i,r){var o;return i===void 0&&(i={}),o=n.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=ui(i.sortChildren),Pt&&dn(i.parent||Pt,Pn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&$p(Pn(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(i,r,o){return pa(0,arguments,this),this},t.from=function(i,r,o){return pa(1,arguments,this),this},t.fromTo=function(i,r,o,a){return pa(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,da(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ft(i,r,ki(this,o),1),this},t.call=function(i,r,o){return dn(this,Ft.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,s,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ft(i,o,ki(this,s)),this},t.staggerFrom=function(i,r,o,a,s,c,u){return o.runBackwards=1,da(o).immediateRender=ui(o.immediateRender),this.staggerTo(i,r,o,a,s,c,u)},t.staggerFromTo=function(i,r,o,a,s,c,u,p){return a.startAt=o,da(a).immediateRender=ui(a.immediateRender),this.staggerTo(i,r,a,s,c,u,p)},t.render=function(i,r,o){var a=this._time,s=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Gt(i),p=this._zTime<0!=i<0&&(this._initted||!c),l,h,d,f,_,g,m,x,y,T,P,S;if(this!==Pt&&u>s&&i>=0&&(u=s),u!==this._tTime||o||p){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),l=u,y=this._start,x=this._ts,g=!x,p&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,r,o);if(l=Gt(u%_),u===s?(f=this._repeat,l=c):(f=~~(u/_),f&&f===u/_&&(l=c,f--),l>c&&(l=c)),T=Po(this._tTime,_),!a&&this._tTime&&T!==f&&this._tTime-T*_-this._dur<=0&&(T=f),P&&f&1&&(l=c-l,S=1),f!==T&&!this._lock){var E=P&&T&1,C=E===(P&&f&1);if(f<T&&(E=!E),a=E?0:u%c?c:u,this._lock=1,this.render(a||(S?0:Gt(f*_)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,s=this._tDur,C&&(this._lock=2,a=E?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;vf(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=iT(this,Gt(a),Gt(l)),m&&(u-=l-(l=m._start))),this._tTime=u,this._time=l,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&l&&!r&&!f&&(bi(this,"onStart"),this._tTime!==u))return this;if(l>=a&&i>=0)for(h=this._first;h;){if(d=h._next,(h._act||l>=h._start)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,r,o);if(h.render(h._ts>0?(l-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(l-h._start)*h._ts,r,o),l!==this._time||!this._ts&&!g){m=0,d&&(u+=this._zTime=-bt);break}}h=d}else{h=this._last;for(var M=i<0?i:l;h;){if(d=h._prev,(h._act||M<=h._end)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,r,o);if(h.render(h._ts>0?(M-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(M-h._start)*h._ts,r,o||Zt&&(h._initted||h._startAt)),l!==this._time||!this._ts&&!g){m=0,d&&(u+=this._zTime=M?-bt:bt);break}}h=d}}if(m&&!r&&(this.pause(),m.render(l>=a?0:-bt)._zTime=l>=a?1:-1,this._ts))return this._start=y,Ns(this),this.render(i,r,o);this._onUpdate&&!r&&bi(this,"onUpdate",!0),(u===s&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===s&&this._ts>0||!u&&this._ts<0)&&tr(this,1),!r&&!(i<0&&!a)&&(u||a||!s)&&(bi(this,u===s&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<s&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(In(r)||(r=ki(this,r,i)),!(i instanceof ya)){if(Qt(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Vt(i))return this.addLabel(i,r);if(Lt(i))i=Ft.delayedCall(0,i);else return this}return this!==i?dn(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Fi);for(var s=[],c=this._first;c;)c._start>=a&&(c instanceof Ft?r&&s.push(c):(o&&s.push(c),i&&s.push.apply(s,c.getChildren(!0,r,o)))),c=c._next;return s},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Vt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(Is(this,i),i===this._recent&&(this._recent=this._last),Rr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(Si.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),n.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ki(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Ft.delayedCall(0,r||ha,o);return a.data="isPause",this._hasPause=1,dn(this,a,ki(this,i))},t.removePause=function(i){var r=this._first;for(i=ki(this,i);r;)r._start===i&&r.data==="isPause"&&tr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),s=a.length;s--;)rr!==a[s]&&a[s].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=zi(i),s=this._first,c=In(r),u;s;)s instanceof Ft?KM(s._targets,a)&&(c?(!rr||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&o.push(s):(u=s.getTweensOf(a,r)).length&&o.push.apply(o,u),s=s._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=ki(o,i),s=r,c=s.startAt,u=s.onStart,p=s.onStartParams,l=s.immediateRender,h,d=Ft.to(o,Bi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!h){var f=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());d._dur!==f&&Io(d,f,0,1).render(d._time,!0,!0),h=1}u&&u.apply(d,p||[])}},r));return l?d.render(0):d},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Bi({startAt:{time:ki(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),uf(this,ki(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),uf(this,ki(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,s=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in s)s[c]>=o&&(s[c]+=i);return Rr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return n.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Rr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,s=Fi,c,u,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(p=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>s&&o._sort&&a._ts&&!o._lock?(o._lock=1,dn(o,a,u-a._delay,1)._lock=0):s=u,u<0&&a._ts&&(r-=u,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),s=0),a._end>r&&a._ts&&(r=a._end),a=c;Io(o,o===Pt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Pt._ts&&(jp(Pt,Ls(i,Pt)),Gp=Si.frame),Si.frame>=Wp){Wp+=xi.autoSleep||120;var r=Pt._first;if((!r||!r._ts)&&xi.autoSleep&&Si._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Si.sleep()}}},e}(ya);Bi(ai.prototype,{_lock:0,_hasPause:0,_forcing:0});var vT=function(n,e,t,i,r,o,a){var s=new di(this._pt,n,e,0,1,Ef,null,r),c=0,u=0,p,l,h,d,f,_,g,m;for(s.b=t,s.e=i,t+="",i+="",(g=~i.indexOf("random("))&&(i=ma(i)),o&&(m=[t,i],o(m,n,e),t=m[0],i=m[1]),l=t.match(Ec)||[];p=Ec.exec(i);)d=p[0],f=i.substring(c,p.index),h?h=(h+1)%5:f.substr(-5)==="rgba("&&(h=1),d!==l[u++]&&(_=parseFloat(l[u-1])||0,s._pt={_next:s._pt,p:f||u===1?f:",",s:_,c:d.charAt(1)==="="?Co(_,d)-_:parseFloat(d)-_,m:h&&h<4?Math.round:0},c=Ec.lastIndex);return s.c=c<i.length?i.substring(c,i.length):"",s.fp=a,(Bp.test(i)||g)&&(s.e=0),this._pt=s,s},Gc=function(n,e,t,i,r,o,a,s,c,u){Lt(i)&&(i=i(r||0,n,o));var p=n[e],l=t!=="get"?t:Lt(p)?c?n[e.indexOf("set")||!Lt(n["get"+e.substr(3)])?e:"get"+e.substr(3)](c):n[e]():p,h=Lt(p)?c?bT:Sf:jc,d;if(Vt(i)&&(~i.indexOf("random(")&&(i=ma(i)),i.charAt(1)==="="&&(d=Co(l,i)+(Jt(l)||0),(d||d===0)&&(i=d))),!u||l!==i||Wc)return!isNaN(l*i)&&i!==""?(d=new di(this._pt,n,e,+l||0,i-(l||0),typeof p=="boolean"?wT:wf,0,h),c&&(d.fp=c),a&&d.modifier(a,this,n),this._pt=d):(!p&&!(e in n)&&Cc(e,i),vT.call(this,n,e,l,i,h,s||xi.stringFilter,c))},yT=function(n,e,t,i,r){if(Lt(n)&&(n=xa(n,r,e,t,i)),!un(n)||n.style&&n.nodeType||Qt(n)||Up(n))return Vt(n)?xa(n,r,e,t,i):n;var o={},a;for(a in n)o[a]=xa(n[a],r,e,t,i);return o},Mf=function(n,e,t,i,r,o){var a,s,c,u;if(Ti[n]&&(a=new Ti[n]).init(r,a.rawVars?e[n]:yT(e[n],i,r,o,t),t,i,o)!==!1&&(t._pt=s=new di(t._pt,r,n,0,1,a.render,a,0,a.priority),t!==Lo))for(c=t._ptLookup[t._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=s;return a},rr,Wc,Xc=function n(e,t,i){var r=e.vars,o=r.ease,a=r.startAt,s=r.immediateRender,c=r.lazy,u=r.onUpdate,p=r.runBackwards,l=r.yoyoEase,h=r.keyframes,d=r.autoRevert,f=e._dur,_=e._startAt,g=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:g,y=e._overwrite==="auto"&&!Mc,T=e.timeline,P,S,E,C,M,b,k,X,U,Y,q,te,ne;if(T&&(!h||!o)&&(o="none"),e._ease=Cr(o,Ao.ease),e._yEase=l?_f(Cr(l===!0?o:l,Ao.ease)):0,l&&e._yoyo&&!e._repeat&&(l=e._yEase,e._yEase=e._ease,e._ease=l),e._from=!T&&!!r.runBackwards,!T||h&&!r.stagger){if(X=g[0]?Er(g[0]).harness:0,te=X&&r[X.prop],P=Ps(r,Pc),_&&(_._zTime<0&&_.progress(1),t<0&&p&&s&&!d?_.render(-1,!0):_.revert(p&&f?As:qM),_._lazy=0),a){if(tr(e._startAt=Ft.set(g,Bi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ui(c),startAt:null,delay:0,onUpdate:u&&function(){return bi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!s&&!d)&&e._startAt.revert(As),s&&f&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&f&&!_){if(t&&(s=!1),E=Bi({overwrite:!1,data:"isFromStart",lazy:s&&!_&&ui(c),immediateRender:s,stagger:0,parent:m},P),te&&(E[X.prop]=te),tr(e._startAt=Ft.set(g,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(As):e._startAt.render(-1,!0)),e._zTime=t,!s)n(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,c=f&&ui(c)||c&&!f,S=0;S<g.length;S++){if(M=g[S],k=M._gsap||Dc(g)[S]._gsap,e._ptLookup[S]=Y={},Ic[k.id]&&er.length&&Cs(),q=x===g?S:x.indexOf(M),X&&(U=new X).init(M,te||P,e,q,x)!==!1&&(e._pt=C=new di(e._pt,M,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(Q){Y[Q]=C}),U.priority&&(b=1)),!X||te)for(E in P)Ti[E]&&(U=Mf(E,P,e,q,M,x))?U.priority&&(b=1):Y[E]=C=Gc.call(e,M,E,"get",P[E],q,x,0,r.stringFilter);e._op&&e._op[S]&&e.kill(M,e._op[S]),y&&e._pt&&(rr=e,Pt.killTweensOf(M,Y,e.globalTime(t)),ne=!e.parent,rr=0),e._pt&&c&&(Ic[k.id]=1)}b&&Af(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!ne,h&&t<=0&&T.render(Fi,!0,!0)},xT=function(n,e,t,i,r,o,a,s){var c=(n._pt&&n._ptCache||(n._ptCache={}))[e],u,p,l,h;if(!c)for(c=n._ptCache[e]=[],l=n._ptLookup,h=n._targets.length;h--;){if(u=l[h][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Wc=1,n.vars[e]="+=0",Xc(n,a),Wc=0,s?ua(e+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)p=c[h],u=p._pt||p,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=t-u.s,p.e&&(p.e=Nt(t)+Jt(p.e)),p.b&&(p.b=u.s+Jt(p.b))},MT=function(n,e){var t=n[0]?Er(n[0]).harness:0,i=t&&t.aliases,r,o,a,s;if(!i)return e;r=Ar({},e);for(o in i)if(o in r)for(s=i[o].split(","),a=s.length;a--;)r[s[a]]=r[o];return r},TT=function(n,e,t,i){var r=e.ease||i||"power1.inOut",o,a;if(Qt(e))a=t[n]||(t[n]=[]),e.forEach(function(s,c){return a.push({t:c/(e.length-1)*100,v:s,e:r})});else for(o in e)a=t[o]||(t[o]=[]),o==="ease"||a.push({t:parseFloat(n),v:e[o],e:r})},xa=function(n,e,t,i,r){return Lt(n)?n.call(e,t,i,r):Vt(n)&&~n.indexOf("random(")?ma(n):n},Tf=Nc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bf={};hi(Tf+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return bf[n]=1});var Ft=function(n){Dp(e,n);function e(i,r,o,a){var s;typeof r=="number"&&(o.duration=r,r=o,o=null),s=n.call(this,a?r:da(r))||this;var c=s.vars,u=c.duration,p=c.delay,l=c.immediateRender,h=c.stagger,d=c.overwrite,f=c.keyframes,_=c.defaults,g=c.scrollTrigger,m=c.yoyoEase,x=r.parent||Pt,y=(Qt(i)||Up(i)?In(i[0]):"length"in r)?[i]:zi(i),T,P,S,E,C,M,b,k;if(s._targets=y.length?Dc(y):ua("GSAP target "+i+" not found. https://gsap.com",!xi.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=d,f||h||ws(u)||ws(p)){if(r=s.vars,T=s.timeline=new ai({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),T.kill(),T.parent=T._dp=Pn(s),T._start=0,h||ws(u)||ws(p)){if(E=y.length,b=h&&of(h),un(h))for(C in h)~Tf.indexOf(C)&&(k||(k={}),k[C]=h[C]);for(P=0;P<E;P++)S=Ps(r,bf),S.stagger=0,m&&(S.yoyoEase=m),k&&Ar(S,k),M=y[P],S.duration=+xa(u,Pn(s),P,M,y),S.delay=(+xa(p,Pn(s),P,M,y)||0)-s._delay,!h&&E===1&&S.delay&&(s._delay=p=S.delay,s._start+=p,S.delay=0),T.to(M,S,b?b(P,M,y):0),T._ease=dt.none;T.duration()?u=p=0:s.timeline=0}else if(f){da(Bi(T.vars.defaults,{ease:"none"})),T._ease=Cr(f.ease||r.ease||"none");var X=0,U,Y,q;if(Qt(f))f.forEach(function(te){return T.to(y,te,">")}),T.duration();else{S={};for(C in f)C==="ease"||C==="easeEach"||TT(C,f[C],S,f.easeEach);for(C in S)for(U=S[C].sort(function(te,ne){return te.t-ne.t}),X=0,P=0;P<U.length;P++)Y=U[P],q={ease:Y.e,duration:(Y.t-(P?U[P-1].t:0))/100*u},q[C]=Y.v,T.to(y,q,X),X+=q.duration;T.duration()<u&&T.to({},{duration:u-T.duration()})}}u||s.duration(u=T.duration())}else s.timeline=0;return d===!0&&!Mc&&(rr=Pn(s),Pt.killTweensOf(y),rr=0),dn(x,Pn(s),o),r.reversed&&s.reverse(),r.paused&&s.paused(!0),(l||!u&&!f&&s._start===Gt(x._time)&&ui(l)&&$M(Pn(s))&&x.data!=="nested")&&(s._tTime=-bt,s.render(Math.max(0,-p)||0)),g&&$p(Pn(s),g),s}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,s=this._tDur,c=this._dur,u=i<0,p=i>s-bt&&!u?s:i<bt?0:i,l,h,d,f,_,g,m,x,y;if(!c)tT(this,i,r,o);else if(p!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(l=p,x=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,o);if(l=Gt(p%f),p===s?(d=this._repeat,l=c):(d=~~(p/f),d&&d===Gt(p/f)&&(l=c,d--),l>c&&(l=c)),g=this._yoyo&&d&1,g&&(y=this._yEase,l=c-l),_=Po(this._tTime,f),l===a&&!o&&this._initted&&d===_)return this._tTime=p,this;d!==_&&(x&&this._yEase&&vf(x,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==f&&this._initted&&(this._lock=o=1,this.render(Gt(f*d),!0).invalidate()._lock=0))}if(!this._initted){if(ef(this,u?i:l,o,r,p))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&d!==_))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=p,this._time=l,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(y||this._ease)(l/c),this._from&&(this.ratio=m=1-m),l&&!a&&!r&&!d&&(bi(this,"onStart"),this._tTime!==p))return this;for(h=this._pt;h;)h.r(m,h.d),h=h._next;x&&x.render(i<0?i:x._dur*x._ease(l/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Oc(this,i,r,o),bi(this,"onUpdate")),this._repeat&&d!==_&&this.vars.onRepeat&&!r&&this.parent&&bi(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(u&&!this._onUpdate&&Oc(this,i,!0,!0),(i||!c)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&tr(this,1),!r&&!(u&&!a)&&(p||a||g)&&(bi(this,p===s?"onComplete":"onReverseComplete",!0),this._prom&&!(p<s&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),n.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,s){va||Si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Xc(this,c),u=this._ease(c/this._dur),xT(this,i,r,o,a,u,c,s)?this.resetTo(i,r,o,a,1):(Ds(this,0),this.parent||Zp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ga(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,rr&&rr.vars.overwrite!==!0)._first||ga(this),this.parent&&o!==this.timeline.totalDuration()&&Io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,s=i?zi(i):a,c=this._ptLookup,u=this._pt,p,l,h,d,f,_,g;if((!r||r==="all")&&QM(a,s))return r==="all"&&(this._pt=0),ga(this);for(p=this._op=this._op||[],r!=="all"&&(Vt(r)&&(f={},hi(r,function(m){return f[m]=1}),r=f),r=MT(a,r)),g=a.length;g--;)if(~s.indexOf(a[g])){l=c[g],r==="all"?(p[g]=r,d=l,h={}):(h=p[g]=p[g]||{},d=r);for(f in d)_=l&&l[f],_&&((!("kill"in _.d)||_.d.kill(f)===!0)&&Is(this,_,"_pt"),delete l[f]),h!=="all"&&(h[f]=1)}return this._initted&&!this._pt&&u&&ga(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return pa(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return pa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Pt.killTweensOf(i,r,o)},e}(ya);Bi(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),hi("staggerTo,staggerFrom,staggerFromTo",function(n){Ft[n]=function(){var e=new ai,t=Fc.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var jc=function(n,e,t){return n[e]=t},Sf=function(n,e,t){return n[e](t)},bT=function(n,e,t,i){return n[e](i.fp,t)},ST=function(n,e,t){return n.setAttribute(e,t)},qc=function(n,e){return Lt(n[e])?Sf:bc(n[e])&&n.setAttribute?ST:jc},wf=function(n,e){return e.set(e.t,e.p,Math.round((e.s+e.c*n)*1e6)/1e6,e)},wT=function(n,e){return e.set(e.t,e.p,!!(e.s+e.c*n),e)},Ef=function(n,e){var t=e._pt,i="";if(!n&&e.b)i=e.b;else if(n===1&&e.e)i=e.e;else{for(;t;)i=t.p+(t.m?t.m(t.s+t.c*n):Math.round((t.s+t.c*n)*1e4)/1e4)+i,t=t._next;i+=e.c}e.set(e.t,e.p,i,e)},Yc=function(n,e){for(var t=e._pt;t;)t.r(n,t.d),t=t._next},ET=function(n,e,t,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(n,e,t),r=o},AT=function(n){for(var e=this._pt,t,i;e;)i=e._next,e.p===n&&!e.op||e.op===n?Is(this,e,"_pt"):e.dep||(t=1),e=i;return!t},RT=function(n,e,t,i){i.mSet(n,e,i.m.call(i.tween,t,i.mt),i)},Af=function(n){for(var e=n._pt,t,i,r,o;e;){for(t=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=t}n._pt=r},di=function(){function n(t,i,r,o,a,s,c,u,p){this.t=i,this.s=o,this.c=a,this.p=r,this.r=s||wf,this.d=c||this,this.set=u||jc,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(t,i,r){this.mSet=this.mSet||this.set,this.set=RT,this.m=t,this.mt=r,this.tween=i},n}();hi(Nc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Pc[n]=1}),Mi.TweenMax=Mi.TweenLite=Ft,Mi.TimelineLite=Mi.TimelineMax=ai,Pt=new ai({sortChildren:!1,defaults:Ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),xi.stringFilter=gf;var Ir=[],Os={},CT=[],Rf=0,PT=0,Kc=function(n){return(Os[n]||CT).map(function(e){return e()})},Zc=function(){var n=Date.now(),e=[];n-Rf>2&&(Kc("matchMediaInit"),Ir.forEach(function(t){var i=t.queries,r=t.conditions,o,a,s,c;for(a in i)o=hn.matchMedia(i[a]).matches,o&&(s=1),o!==r[a]&&(r[a]=o,c=1);c&&(t.revert(),s&&e.push(t))}),Kc("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t,function(i){return t.add(null,i)})}),Rf=n,Kc("matchMedia"))},Cf=function(){function n(t,i){this.selector=i&&Bc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=PT++,t&&this.add(t)}var e=n.prototype;return e.add=function(t,i,r){Lt(t)&&(r=i,i=t,t=Lt);var o=this,a=function(){var s=Rt,c=o.selector,u;return s&&s!==o&&s.data.push(o),r&&(o.selector=Bc(r)),Rt=o,u=i.apply(o,arguments),Lt(u)&&o._r.push(u),Rt=s,o.selector=c,o.isReverted=!1,u};return o.last=a,t===Lt?a(o,function(s){return o.add(null,s)}):t?o[t]=a:a},e.ignore=function(t){var i=Rt;Rt=null,t(this),Rt=i},e.getTweens=function(){var t=[];return this.data.forEach(function(i){return i instanceof n?t.push.apply(t,i.getTweens()):i instanceof Ft&&!(i.parent&&i.parent.data==="nested")&&t.push(i)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,i){var r=this;if(t?function(){for(var a=r.getTweens(),s=r.data.length,c;s--;)c=r.data[s],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,p){return p.g-u.g||-1/0}).forEach(function(u){return u.t.revert(t)}),s=r.data.length;s--;)c=r.data[s],c instanceof ai?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ft)&&c.revert&&c.revert(t);r._r.forEach(function(u){return u(t,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ir.length;o--;)Ir[o].id===this.id&&Ir.splice(o,1)},e.revert=function(t){this.kill(t||{})},n}(),IT=function(){function n(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=n.prototype;return e.add=function(t,i,r){un(t)||(t={matches:t});var o=new Cf(0,r||this.scope),a=o.conditions={},s,c,u;Rt&&!o.selector&&(o.selector=Rt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=t;for(c in t)c==="all"?u=1:(s=hn.matchMedia(t[c]),s&&(Ir.indexOf(o)<0&&Ir.push(o),(a[c]=s.matches)&&(u=1),s.addListener?s.addListener(Zc):s.addEventListener("change",Zc)));return u&&i(o,function(p){return o.add(null,p)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(i){return i.kill(t,!0)})},n}(),Us={registerPlugin:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];e.forEach(function(i){return df(i)})},timeline:function(n){return new ai(n)},getTweensOf:function(n,e){return Pt.getTweensOf(n,e)},getProperty:function(n,e,t,i){Vt(n)&&(n=zi(n)[0]);var r=Er(n||{}).get,o=t?Yp:qp;return t==="native"&&(t=""),n&&(e?o((Ti[e]&&Ti[e].get||r)(n,e,t,i)):function(a,s,c){return o((Ti[a]&&Ti[a].get||r)(n,a,s,c))})},quickSetter:function(n,e,t){if(n=zi(n),n.length>1){var i=n.map(function(u){return pi.quickSetter(u,e,t)}),r=i.length;return function(u){for(var p=r;p--;)i[p](u)}}n=n[0]||{};var o=Ti[e],a=Er(n),s=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var p=new o;Lo._pt=0,p.init(n,t?u+t:u,Lo,0,[n]),p.render(1,p),Lo._pt&&Yc(1,Lo)}:a.set(n,s);return o?c:function(u){return c(n,s,t?u+t:u,a,1)}},quickTo:function(n,e,t){var i,r=pi.to(n,Ar((i={},i[e]="+=0.1",i.paused=!0,i),t||{})),o=function(a,s,c){return r.resetTo(e,a,s,c)};return o.tween=r,o},isTweening:function(n){return Pt.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=Cr(n.ease,Ao.ease)),Kp(Ao,n||{})},config:function(n){return Kp(xi,n||{})},registerEffect:function(n){var e=n.name,t=n.effect,i=n.plugins,r=n.defaults,o=n.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ti[a]&&!Mi[a]&&ua(e+" effect requires "+a+" plugin.")}),Lc[e]=function(a,s,c){return t(zi(a),Bi(s||{},r),c)},o&&(ai.prototype[e]=function(a,s,c){return this.add(Lc[e](a,un(s)?s:(c=s)&&{},this),c)})},registerEase:function(n,e){dt[n]=Cr(e)},parseEase:function(n,e){return arguments.length?Cr(n,e):dt},getById:function(n){return Pt.getById(n)},exportRoot:function(n,e){n===void 0&&(n={});var t=new ai(n),i,r;for(t.smoothChildTiming=ui(n.smoothChildTiming),Pt.remove(t),t._dp=0,t._time=t._tTime=Pt._time,i=Pt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ft&&i.vars.onComplete===i._targets[0]))&&dn(t,i,i._start-i._delay),i=r;return dn(Pt,t,0),t},context:function(n,e){return n?new Cf(n,e):Rt},matchMedia:function(n){return new IT(n)},matchMediaRefresh:function(){return Ir.forEach(function(n){var e=n.conditions,t,i;for(i in e)e[i]&&(e[i]=!1,t=1);t&&n.revert()})||Zc()},addEventListener:function(n,e){var t=Os[n]||(Os[n]=[]);~t.indexOf(e)||t.push(e)},removeEventListener:function(n,e){var t=Os[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)},utils:{wrap:cT,wrapYoyo:uT,distribute:of,random:sf,snap:af,normalize:lT,getUnit:Jt,clamp:rT,splitColor:pf,toArray:zi,selector:Bc,mapRange:cf,pipe:aT,unitize:sT,interpolate:hT,shuffle:rf},install:Hp,effects:Lc,ticker:Si,updateRoot:ai.updateRoot,plugins:Ti,globalTimeline:Pt,core:{PropTween:di,globals:Vp,Tween:Ft,Timeline:ai,Animation:ya,getCache:Er,_removeLinkedListItem:Is,reverting:function(){return Zt},context:function(n){return n&&Rt&&(Rt.data.push(n),n._ctx=Rt),Rt},suppressOverwrites:function(n){return Mc=n}}};hi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Us[n]=Ft[n]}),Si.add(ai.updateRoot),Lo=Us.to({},{duration:0});var LT=function(n,e){for(var t=n._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},NT=function(n,e){var t=n._targets,i,r,o;for(i in e)for(r=t.length;r--;)o=n._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=LT(o,i)),o&&o.modifier&&o.modifier(e[i],n,t[r],i))},Qc=function(n,e){return{name:n,rawVars:1,init:function(t,i,r){r._onInit=function(o){var a,s;if(Vt(i)&&(a={},hi(i,function(c){return a[c]=1}),i=a),e){a={};for(s in i)a[s]=e(i[s]);i=a}NT(o,i)}}}},pi=Us.registerPlugin({name:"attr",init:function(n,e,t,i,r){var o,a,s;this.tween=t;for(o in e)s=n.getAttribute(o)||"",a=this.add(n,"setAttribute",(s||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=s,this._props.push(o)},render:function(n,e){for(var t=e._pt;t;)Zt?t.set(t.t,t.p,t.b,t):t.r(n,t.d),t=t._next}},{name:"endArray",init:function(n,e){for(var t=e.length;t--;)this.add(n,t,n[t]||0,e[t],0,0,0,0,0,1)}},Qc("roundProps",kc),Qc("modifiers"),Qc("snap",af))||Us;Ft.version=ai.version=pi.version="3.12.5",zp=1,Sc()&&No(),dt.Power0,dt.Power1,dt.Power2,dt.Power3,dt.Power4,dt.Linear,dt.Quad,dt.Cubic,dt.Quart,dt.Quint,dt.Strong,dt.Elastic,dt.Back,dt.SteppedEase,dt.Bounce,dt.Sine,dt.Expo,dt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pf,or,Do,Jc,Lr,If,$c,DT=function(){return typeof window<"u"},Ln={},Nr=180/Math.PI,Oo=Math.PI/180,Uo=Math.atan2,Lf=1e8,eu=/([A-Z])/g,OT=/(left|right|width|margin|padding|x)/i,UT=/[\s,\(]\S/,pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tu=function(n,e){return e.set(e.t,e.p,Math.round((e.s+e.c*n)*1e4)/1e4+e.u,e)},FT=function(n,e){return e.set(e.t,e.p,n===1?e.e:Math.round((e.s+e.c*n)*1e4)/1e4+e.u,e)},BT=function(n,e){return e.set(e.t,e.p,n?Math.round((e.s+e.c*n)*1e4)/1e4+e.u:e.b,e)},kT=function(n,e){var t=e.s+e.c*n;e.set(e.t,e.p,~~(t+(t<0?-.5:.5))+e.u,e)},Nf=function(n,e){return e.set(e.t,e.p,n?e.e:e.b,e)},Df=function(n,e){return e.set(e.t,e.p,n!==1?e.b:e.e,e)},zT=function(n,e,t){return n.style[e]=t},HT=function(n,e,t){return n.style.setProperty(e,t)},VT=function(n,e,t){return n._gsap[e]=t},GT=function(n,e,t){return n._gsap.scaleX=n._gsap.scaleY=t},WT=function(n,e,t,i,r){var o=n._gsap;o.scaleX=o.scaleY=t,o.renderTransform(r,o)},XT=function(n,e,t,i,r){var o=n._gsap;o[e]=t,o.renderTransform(r,o)},It="transform",fi=It+"Origin",jT=function n(e,t){var i=this,r=this.target,o=r.style,a=r._gsap;if(e in Ln&&o){if(this.tfm=this.tfm||{},e!=="transform")e=pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=Nn(r,s)}):this.tfm[e]=a.x?a[e]:Nn(r,e),e===fi&&(this.tfm.zOrigin=a.zOrigin);else return pn.transform.split(",").forEach(function(s){return n.call(i,s,t)});if(this.props.indexOf(It)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fi,t,"")),e=It}(o||t)&&this.props.push(e,t,o[e])},Of=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},qT=function(){var n=this.props,e=this.target,t=e.style,i=e._gsap,r,o;for(r=0;r<n.length;r+=3)n[r+1]?e[n[r]]=n[r+2]:n[r+2]?t[n[r]]=n[r+2]:t.removeProperty(n[r].substr(0,2)==="--"?n[r]:n[r].replace(eu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=$c(),(!r||!r.isStart)&&!t[It]&&(Of(t),i.zOrigin&&t[fi]&&(t[fi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Uf=function(n,e){var t={target:n,props:[],revert:qT,save:jT};return n._gsap||pi.core.getCache(n),e&&e.split(",").forEach(function(i){return t.save(i)}),t},Ff,iu=function(n,e){var t=or.createElementNS?or.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):or.createElement(n);return t&&t.style?t:or.createElement(n)},fn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(eu,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Fo(t)||t,1)||""},Bf="O,Moz,ms,Ms,Webkit".split(","),Fo=function(n,e,t){var i=e||Lr,r=i.style,o=5;if(n in r&&!t)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);o--&&!(Bf[o]+n in r););return o<0?null:(o===3?"ms":o>=0?Bf[o]:"")+n},nu=function(){DT()&&window.document&&(Pf=window,or=Pf.document,Do=or.documentElement,Lr=iu("div")||{style:{}},iu("div"),It=Fo(It),fi=It+"Origin",Lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ff=!!Fo("perspective"),$c=pi.core.reverting,Jc=1)},ru=function n(e){var t=iu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,o=this.style.cssText,a;if(Do.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Do.removeChild(t),this.style.cssText=o,a},kf=function(n,e){for(var t=e.length;t--;)if(n.hasAttribute(e[t]))return n.getAttribute(e[t])},zf=function(n){var e;try{e=n.getBBox()}catch{e=ru.call(n,!0)}return e&&(e.width||e.height)||n.getBBox===ru||(e=ru.call(n,!0)),e&&!e.width&&!e.x&&!e.y?{x:+kf(n,["x","cx","x1"])||0,y:+kf(n,["y","cy","y1"])||0,width:0,height:0}:e},Hf=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&zf(n))},Dr=function(n,e){if(e){var t=n.style,i;e in Ln&&e!==fi&&(e=It),t.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),t.removeProperty(i==="--"?e:e.replace(eu,"-$1").toLowerCase())):t.removeAttribute(e)}},ar=function(n,e,t,i,r,o){var a=new di(n._pt,e,t,0,1,o?Df:Nf);return n._pt=a,a.b=i,a.e=r,n._props.push(t),a},Vf={deg:1,rad:1,turn:1},YT={grid:1,flex:1},sr=function n(e,t,i,r){var o=parseFloat(i)||0,a=(i+"").trim().substr((o+"").length)||"px",s=Lr.style,c=OT.test(t),u=e.tagName.toLowerCase()==="svg",p=(u?"client":"offset")+(c?"Width":"Height"),l=100,h=r==="px",d=r==="%",f,_,g,m;if(r===a||!o||Vf[r]||Vf[a])return o;if(a!=="px"&&!h&&(o=n(e,t,i,"px")),m=e.getCTM&&Hf(e),(d||a==="%")&&(Ln[t]||~t.indexOf("adius")))return f=m?e.getBBox()[c?"width":"height"]:e[p],Nt(d?o/f*l:o/100*f);if(s[c?"width":"height"]=l+(h?a:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===or||!_.appendChild)&&(_=or.body),g=_._gsap,g&&d&&g.width&&c&&g.time===Si.time&&!g.uncache)return Nt(o/g.width*l);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=l+r,f=e[p],x?e.style[t]=x:Dr(e,t)}else(d||a==="%")&&!YT[fn(_,"display")]&&(s.position=fn(e,"position")),_===e&&(s.position="static"),_.appendChild(Lr),f=Lr[p],_.removeChild(Lr),s.position="absolute";return c&&d&&(g=Er(_),g.time=Si.time,g.width=_[p]),Nt(h?f*o/l:f&&o?l/f*o:0)},Nn=function(n,e,t,i){var r;return Jc||nu(),e in pn&&e!=="transform"&&(e=pn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ln[e]&&e!=="transform"?(r=Ta(n,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Bs(fn(n,fi))+" "+r.zOrigin+"px"):(r=n.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Fs[e]&&Fs[e](n,e,t)||fn(n,e)||Xp(n,e)||(e==="opacity"?1:0))),t&&!~(r+"").trim().indexOf(" ")?sr(n,e,r,t)+t:r},KT=function(n,e,t,i){if(!t||t==="none"){var r=Fo(e,n,1),o=r&&fn(n,r,1);o&&o!==t?(e=r,t=o):e==="borderColor"&&(t=fn(n,"borderTopColor"))}var a=new di(this._pt,n.style,e,0,1,Ef),s=0,c=0,u,p,l,h,d,f,_,g,m,x,y,T;if(a.b=t,a.e=i,t+="",i+="",i==="auto"&&(f=n.style[e],n.style[e]=i,i=fn(n,e)||i,f?n.style[e]=f:Dr(n,e)),u=[t,i],gf(u),t=u[0],i=u[1],l=t.match(Ro)||[],T=i.match(Ro)||[],T.length){for(;p=Ro.exec(i);)_=p[0],m=i.substring(s,p.index),d?d=(d+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(d=1),_!==(f=l[c++]||"")&&(h=parseFloat(f)||0,y=f.substr((h+"").length),_.charAt(1)==="="&&(_=Co(h,_)+y),g=parseFloat(_),x=_.substr((g+"").length),s=Ro.lastIndex-x.length,x||(x=x||xi.units[e]||y,s===i.length&&(i+=x,a.e+=x)),y!==x&&(h=sr(n,e,f,x)||0),a._pt={_next:a._pt,p:m||c===1?m:",",s:h,c:g-h,m:d&&d<4||e==="zIndex"?Math.round:0});a.c=s<i.length?i.substring(s,i.length):""}else a.r=e==="display"&&i==="none"?Df:Nf;return Bp.test(i)&&(a.e=0),this._pt=a,a},Gf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ZT=function(n){var e=n.split(" "),t=e[0],i=e[1]||"50%";return(t==="top"||t==="bottom"||i==="left"||i==="right")&&(n=t,t=i,i=n),e[0]=Gf[t]||t,e[1]=Gf[i]||i,e.join(" ")},QT=function(n,e){if(e.tween&&e.tween._time===e.tween._dur){var t=e.t,i=t.style,r=e.u,o=t._gsap,a,s,c;if(r==="all"||r===!0)i.cssText="",s=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Ln[a]&&(s=1,a=a==="transformOrigin"?fi:It),Dr(t,a);s&&(Dr(t,It),o&&(o.svg&&t.removeAttribute("transform"),Ta(t,1),o.uncache=1,Of(i)))}},Fs={clearProps:function(n,e,t,i,r){if(r.data!=="isFromStart"){var o=n._pt=new di(n._pt,e,t,0,0,QT);return o.u=i,o.pr=-10,o.tween=r,n._props.push(t),1}}},Ma=[1,0,0,1,0,0],Wf={},Xf=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},jf=function(n){var e=fn(n,It);return Xf(e)?Ma:e.substr(7).match(Fp).map(Nt)},ou=function(n,e){var t=n._gsap||Er(n),i=n.style,r=jf(n),o,a,s,c;return t.svg&&n.getAttribute("transform")?(s=n.transform.baseVal.consolidate().matrix,r=[s.a,s.b,s.c,s.d,s.e,s.f],r.join(",")==="1,0,0,1,0,0"?Ma:r):(r===Ma&&!n.offsetParent&&n!==Do&&!t.svg&&(s=i.display,i.display="block",o=n.parentNode,(!o||!n.offsetParent)&&(c=1,a=n.nextElementSibling,Do.appendChild(n)),r=jf(n),s?i.display=s:Dr(n,"display"),c&&(a?o.insertBefore(n,a):o?o.appendChild(n):Do.removeChild(n))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},au=function(n,e,t,i,r,o){var a=n._gsap,s=r||ou(n,!0),c=a.xOrigin||0,u=a.yOrigin||0,p=a.xOffset||0,l=a.yOffset||0,h=s[0],d=s[1],f=s[2],_=s[3],g=s[4],m=s[5],x=e.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,P,S,E,C;t?s!==Ma&&(S=h*_-d*f)&&(E=y*(_/S)+T*(-f/S)+(f*m-_*g)/S,C=y*(-d/S)+T*(h/S)-(h*m-d*g)/S,y=E,T=C):(P=zf(n),y=P.x+(~x[0].indexOf("%")?y/100*P.width:y),T=P.y+(~(x[1]||x[0]).indexOf("%")?T/100*P.height:T)),i||i!==!1&&a.smooth?(g=y-c,m=T-u,a.xOffset=p+(g*h+m*f)-g,a.yOffset=l+(g*d+m*_)-m):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!t,n.style[fi]="0px 0px",o&&(ar(o,a,"xOrigin",c,y),ar(o,a,"yOrigin",u,T),ar(o,a,"xOffset",p,a.xOffset),ar(o,a,"yOffset",l,a.yOffset)),n.setAttribute("data-svg-origin",y+" "+T)},Ta=function(n,e){var t=n._gsap||new xf(n);if("x"in t&&!e&&!t.uncache)return t;var i=n.style,r=t.scaleX<0,o="px",a="deg",s=getComputedStyle(n),c=fn(n,fi)||"0",u,p,l,h,d,f,_,g,m,x,y,T,P,S,E,C,M,b,k,X,U,Y,q,te,ne,Q,se,de,Pe,Ve,Ue,ee;return u=p=l=f=_=g=m=x=y=0,h=d=1,t.svg=!!(n.getCTM&&Hf(n)),s.translate&&((s.translate!=="none"||s.scale!=="none"||s.rotate!=="none")&&(i[It]=(s.translate!=="none"?"translate3d("+(s.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(s.rotate!=="none"?"rotate("+s.rotate+") ":"")+(s.scale!=="none"?"scale("+s.scale.split(" ").join(",")+") ":"")+(s[It]!=="none"?s[It]:"")),i.scale=i.rotate=i.translate="none"),S=ou(n,t.svg),t.svg&&(t.uncache?(ne=n.getBBox(),c=t.xOrigin-ne.x+"px "+(t.yOrigin-ne.y)+"px",te=""):te=!e&&n.getAttribute("data-svg-origin"),au(n,te||c,!!te||t.originIsAbsolute,t.smooth!==!1,S)),T=t.xOrigin||0,P=t.yOrigin||0,S!==Ma&&(b=S[0],k=S[1],X=S[2],U=S[3],u=Y=S[4],p=q=S[5],S.length===6?(h=Math.sqrt(b*b+k*k),d=Math.sqrt(U*U+X*X),f=b||k?Uo(k,b)*Nr:0,m=X||U?Uo(X,U)*Nr+f:0,m&&(d*=Math.abs(Math.cos(m*Oo))),t.svg&&(u-=T-(T*b+P*X),p-=P-(T*k+P*U))):(ee=S[6],Ve=S[7],se=S[8],de=S[9],Pe=S[10],Ue=S[11],u=S[12],p=S[13],l=S[14],E=Uo(ee,Pe),_=E*Nr,E&&(C=Math.cos(-E),M=Math.sin(-E),te=Y*C+se*M,ne=q*C+de*M,Q=ee*C+Pe*M,se=Y*-M+se*C,de=q*-M+de*C,Pe=ee*-M+Pe*C,Ue=Ve*-M+Ue*C,Y=te,q=ne,ee=Q),E=Uo(-X,Pe),g=E*Nr,E&&(C=Math.cos(-E),M=Math.sin(-E),te=b*C-se*M,ne=k*C-de*M,Q=X*C-Pe*M,Ue=U*M+Ue*C,b=te,k=ne,X=Q),E=Uo(k,b),f=E*Nr,E&&(C=Math.cos(E),M=Math.sin(E),te=b*C+k*M,ne=Y*C+q*M,k=k*C-b*M,q=q*C-Y*M,b=te,Y=ne),_&&Math.abs(_)+Math.abs(f)>359.9&&(_=f=0,g=180-g),h=Nt(Math.sqrt(b*b+k*k+X*X)),d=Nt(Math.sqrt(q*q+ee*ee)),E=Uo(Y,q),m=Math.abs(E)>2e-4?E*Nr:0,y=Ue?1/(Ue<0?-Ue:Ue):0),t.svg&&(te=n.getAttribute("transform"),t.forceCSS=n.setAttribute("transform","")||!Xf(fn(n,It)),te&&n.setAttribute("transform",te))),Math.abs(m)>90&&Math.abs(m)<270&&(r?(h*=-1,m+=f<=0?180:-180,f+=f<=0?180:-180):(d*=-1,m+=m<=0?180:-180)),e=e||t.uncache,t.x=u-((t.xPercent=u&&(!e&&t.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-u)?-50:0)))?n.offsetWidth*t.xPercent/100:0)+o,t.y=p-((t.yPercent=p&&(!e&&t.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-p)?-50:0)))?n.offsetHeight*t.yPercent/100:0)+o,t.z=l+o,t.scaleX=Nt(h),t.scaleY=Nt(d),t.rotation=Nt(f)+a,t.rotationX=Nt(_)+a,t.rotationY=Nt(g)+a,t.skewX=m+a,t.skewY=x+a,t.transformPerspective=y+o,(t.zOrigin=parseFloat(c.split(" ")[2])||!e&&t.zOrigin||0)&&(i[fi]=Bs(c)),t.xOffset=t.yOffset=0,t.force3D=xi.force3D,t.renderTransform=t.svg?$T:Ff?qf:JT,t.uncache=0,t},Bs=function(n){return(n=n.split(" "))[0]+" "+n[1]},su=function(n,e,t){var i=Jt(e);return Nt(parseFloat(e)+parseFloat(sr(n,"x",t+"px",i)))+i},JT=function(n,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,qf(n,e)},Or="0deg",ba="0px",Ur=") ",qf=function(n,e){var t=e||this,i=t.xPercent,r=t.yPercent,o=t.x,a=t.y,s=t.z,c=t.rotation,u=t.rotationY,p=t.rotationX,l=t.skewX,h=t.skewY,d=t.scaleX,f=t.scaleY,_=t.transformPerspective,g=t.force3D,m=t.target,x=t.zOrigin,y="",T=g==="auto"&&n&&n!==1||g===!0;if(x&&(p!==Or||u!==Or)){var P=parseFloat(u)*Oo,S=Math.sin(P),E=Math.cos(P),C;P=parseFloat(p)*Oo,C=Math.cos(P),o=su(m,o,S*C*-x),a=su(m,a,-Math.sin(P)*-x),s=su(m,s,E*C*-x+x)}_!==ba&&(y+="perspective("+_+Ur),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||o!==ba||a!==ba||s!==ba)&&(y+=s!==ba||T?"translate3d("+o+", "+a+", "+s+") ":"translate("+o+", "+a+Ur),c!==Or&&(y+="rotate("+c+Ur),u!==Or&&(y+="rotateY("+u+Ur),p!==Or&&(y+="rotateX("+p+Ur),(l!==Or||h!==Or)&&(y+="skew("+l+", "+h+Ur),(d!==1||f!==1)&&(y+="scale("+d+", "+f+Ur),m.style[It]=y||"translate(0, 0)"},$T=function(n,e){var t=e||this,i=t.xPercent,r=t.yPercent,o=t.x,a=t.y,s=t.rotation,c=t.skewX,u=t.skewY,p=t.scaleX,l=t.scaleY,h=t.target,d=t.xOrigin,f=t.yOrigin,_=t.xOffset,g=t.yOffset,m=t.forceCSS,x=parseFloat(o),y=parseFloat(a),T,P,S,E,C;s=parseFloat(s),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,s+=u),s||c?(s*=Oo,c*=Oo,T=Math.cos(s)*p,P=Math.sin(s)*p,S=Math.sin(s-c)*-l,E=Math.cos(s-c)*l,c&&(u*=Oo,C=Math.tan(c-u),C=Math.sqrt(1+C*C),S*=C,E*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),T*=C,P*=C)),T=Nt(T),P=Nt(P),S=Nt(S),E=Nt(E)):(T=p,E=l,P=S=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=sr(h,"x",o,"px"),y=sr(h,"y",a,"px")),(d||f||_||g)&&(x=Nt(x+d-(d*T+f*S)+_),y=Nt(y+f-(d*P+f*E)+g)),(i||r)&&(C=h.getBBox(),x=Nt(x+i/100*C.width),y=Nt(y+r/100*C.height)),C="matrix("+T+","+P+","+S+","+E+","+x+","+y+")",h.setAttribute("transform",C),m&&(h.style[It]=C)},eb=function(n,e,t,i,r){var o=360,a=Vt(r),s=parseFloat(r)*(a&&~r.indexOf("rad")?Nr:1),c=s-i,u=i+c+"deg",p,l;return a&&(p=r.split("_")[1],p==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),p==="cw"&&c<0?c=(c+o*Lf)%o-~~(c/o)*o:p==="ccw"&&c>0&&(c=(c-o*Lf)%o-~~(c/o)*o)),n._pt=l=new di(n._pt,e,t,i,c,FT),l.e=u,l.u="deg",n._props.push(t),l},Yf=function(n,e){for(var t in e)n[t]=e[t];return n},tb=function(n,e,t){var i=Yf({},t._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=t.style,a,s,c,u,p,l,h,d;i.svg?(c=t.getAttribute("transform"),t.setAttribute("transform",""),o[It]=e,a=Ta(t,1),Dr(t,It),t.setAttribute("transform",c)):(c=getComputedStyle(t)[It],o[It]=e,a=Ta(t,1),o[It]=c);for(s in Ln)c=i[s],u=a[s],c!==u&&r.indexOf(s)<0&&(h=Jt(c),d=Jt(u),p=h!==d?sr(t,s,c,d):parseFloat(c),l=parseFloat(u),n._pt=new di(n._pt,a,s,p,l-p,tu),n._pt.u=d||0,n._props.push(s));Yf(a,i)};hi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",o="Left",a=(e<3?[t,i,r,o]:[t+o,t+i,r+i,r+o]).map(function(s){return e<2?n+s:"border"+s+n});Fs[e>1?"border"+n:n]=function(s,c,u,p,l){var h,d;if(arguments.length<4)return h=a.map(function(f){return Nn(s,f,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(p+"").split(" "),d={},a.forEach(function(f,_){return d[f]=h[_]=h[_]||h[(_-1)/2|0]}),s.init(c,d,l)}});var Kf={name:"css",register:nu,targetTest:function(n){return n.style&&n.nodeType},init:function(n,e,t,i,r){var o=this._props,a=n.style,s=t.vars.startAt,c,u,p,l,h,d,f,_,g,m,x,y,T,P,S,E;Jc||nu(),this.styles=this.styles||Uf(n),E=this.styles.props,this.tween=t;for(f in e)if(f!=="autoRound"&&(u=e[f],!(Ti[f]&&Mf(f,e,t,i,n,r)))){if(h=typeof u,d=Fs[f],h==="function"&&(u=u.call(t,i,n,r),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ma(u)),d)d(this,n,f,u,t)&&(S=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(n).getPropertyValue(f)+"").trim(),u+="",nr.lastIndex=0,nr.test(c)||(_=Jt(c),g=Jt(u)),g?_!==g&&(c=sr(n,f,c,g)+g):_&&(u+=_),this.add(a,"setProperty",c,u,i,r,0,0,f),o.push(f),E.push(f,0,a[f]);else if(h!=="undefined"){if(s&&f in s?(c=typeof s[f]=="function"?s[f].call(t,i,n,r):s[f],Vt(c)&&~c.indexOf("random(")&&(c=ma(c)),Jt(c+"")||c==="auto"||(c+=xi.units[f]||Jt(Nn(n,f))||""),(c+"").charAt(1)==="="&&(c=Nn(n,f))):c=Nn(n,f),l=parseFloat(c),m=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),m&&(u=u.substr(2)),p=parseFloat(u),f in pn&&(f==="autoAlpha"&&(l===1&&Nn(n,"visibility")==="hidden"&&p&&(l=0),E.push("visibility",0,a.visibility),ar(this,a,"visibility",l?"inherit":"hidden",p?"inherit":"hidden",!p)),f!=="scale"&&f!=="transform"&&(f=pn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),x=f in Ln,x){if(this.styles.save(f),y||(T=n._gsap,T.renderTransform&&!e.parseTransform||Ta(n,e.parseTransform),P=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new di(this._pt,a,It,0,1,T.renderTransform,T,0,-1),y.dep=1),f==="scale")this._pt=new di(this._pt,T,"scaleY",T.scaleY,(m?Co(T.scaleY,m+p):p)-T.scaleY||0,tu),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){E.push(fi,0,a[fi]),u=ZT(u),T.svg?au(n,u,0,P,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==T.zOrigin&&ar(this,T,"zOrigin",T.zOrigin,g),ar(this,a,f,Bs(c),Bs(u)));continue}else if(f==="svgOrigin"){au(n,u,1,P,0,this);continue}else if(f in Wf){eb(this,T,f,l,m?Co(l,m+u):u);continue}else if(f==="smoothOrigin"){ar(this,T,"smooth",T.smooth,u);continue}else if(f==="force3D"){T[f]=u;continue}else if(f==="transform"){tb(this,u,n);continue}}else f in a||(f=Fo(f)||f);if(x||(p||p===0)&&(l||l===0)&&!UT.test(u)&&f in a)_=(c+"").substr((l+"").length),p||(p=0),g=Jt(u)||(f in xi.units?xi.units[f]:_),_!==g&&(l=sr(n,f,c,g)),this._pt=new di(this._pt,x?T:a,f,l,(m?Co(l,m+p):p)-l,!x&&(g==="px"||f==="zIndex")&&e.autoRound!==!1?kT:tu),this._pt.u=g||0,_!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=BT);else if(f in a)KT.call(this,n,f,c,m?m+u:u);else if(f in n)this.add(n,f,c||n[f],m?m+u:u,i,r);else if(f!=="parseTransform"){Cc(f,u);continue}x||(f in a?E.push(f,0,a[f]):E.push(f,1,c||n[f])),o.push(f)}}S&&Af(this)},render:function(n,e){if(e.tween._time||!$c())for(var t=e._pt;t;)t.r(n,t.d),t=t._next;else e.styles.revert()},get:Nn,aliases:pn,getSetter:function(n,e,t){var i=pn[e];return i&&i.indexOf(",")<0&&(e=i),e in Ln&&e!==fi&&(n._gsap.x||Nn(n,"x"))?t&&If===t?e==="scale"?GT:VT:(If=t||{})&&(e==="scale"?WT:XT):n.style&&!bc(n.style[e])?zT:~e.indexOf("-")?HT:qc(n,e)},core:{_removeProperty:Dr,_getMatrix:ou}};pi.utils.checkPrefix=Fo,pi.core.getStyleSaver=Uf,function(n,e,t,i){var r=hi(n+","+e+","+t,function(o){Ln[o]=1});hi(e,function(o){xi.units[o]="deg",Wf[o]=1}),pn[r[13]]=n+","+e,hi(i,function(o){var a=o.split(":");pn[a[1]]=r[a[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){xi.units[n]="px"}),pi.registerPlugin(Kf);var Xe=pi.registerPlugin(Kf)||pi;Xe.core.Tween;var Sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ib(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var wa={};/*!
*  howler.js v2.2.4
*  howlerjs.com
*
*  (c) 2013-2020, James Simpson of GoldFire Studios
*  goldfirestudios.com
*
*  MIT License
*/(function(n){(function(){var e=function(){this.init()};e.prototype={init:function(){var l=this||t;return l._counter=1e3,l._html5AudioPool=[],l.html5PoolSize=10,l._codecs={},l._howls=[],l._muted=!1,l._volume=1,l._canPlayEvent="canplaythrough",l._navigator=typeof window<"u"&&window.navigator?window.navigator:null,l.masterGain=null,l.noAudio=!1,l.usingWebAudio=!0,l.autoSuspend=!0,l.ctx=null,l.autoUnlock=!0,l._setup(),l},volume:function(l){var h=this||t;if(l=parseFloat(l),h.ctx||p(),typeof l<"u"&&l>=0&&l<=1){if(h._volume=l,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var f=h._howls[d]._getSoundIds(),_=0;_<f.length;_++){var g=h._howls[d]._soundById(f[_]);g&&g._node&&(g._node.volume=g._volume*l)}return h}return h._volume},mute:function(l){var h=this||t;h.ctx||p(),h._muted=l,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l?0:h._volume,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var f=h._howls[d]._getSoundIds(),_=0;_<f.length;_++){var g=h._howls[d]._soundById(f[_]);g&&g._node&&(g._node.muted=l?!0:g._muted)}return h},stop:function(){for(var l=this||t,h=0;h<l._howls.length;h++)l._howls[h].stop();return l},unload:function(){for(var l=this||t,h=l._howls.length-1;h>=0;h--)l._howls[h].unload();return l.usingWebAudio&&l.ctx&&typeof l.ctx.close<"u"&&(l.ctx.close(),l.ctx=null,p()),l},codecs:function(l){return(this||t)._codecs[l.replace(/^x-/,"")]},_setup:function(){var l=this||t;if(l.state=l.ctx&&l.ctx.state||"suspended",l._autoSuspend(),!l.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(l._canPlayEvent="canplay")}catch{l.noAudio=!0}else l.noAudio=!0;try{var h=new Audio;h.muted&&(l.noAudio=!0)}catch{}return l.noAudio||l._setupCodecs(),l},_setupCodecs:function(){var l=this||t,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return l}if(!h||typeof h.canPlayType!="function")return l;var d=h.canPlayType("audio/mpeg;").replace(/^no$/,""),f=l._navigator?l._navigator.userAgent:"",_=f.match(/OPR\/(\d+)/g),g=_&&parseInt(_[0].split("/")[1],10)<33,m=f.indexOf("Safari")!==-1&&f.indexOf("Chrome")===-1,x=f.match(/Version\/(.*?) /),y=m&&x&&parseInt(x[1],10)<15;return l._codecs={mp3:!!(!g&&(d||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!y&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!y&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},l},_unlockAudio:function(){var l=this||t;if(!(l._audioUnlocked||!l.ctx)){l._audioUnlocked=!1,l.autoUnlock=!1,!l._mobileUnloaded&&l.ctx.sampleRate!==44100&&(l._mobileUnloaded=!0,l.unload()),l._scratchBuffer=l.ctx.createBuffer(1,1,22050);var h=function(d){for(;l._html5AudioPool.length<l.html5PoolSize;)try{var f=new Audio;f._unlocked=!0,l._releaseHtml5Audio(f)}catch{l.noAudio=!0;break}for(var _=0;_<l._howls.length;_++)if(!l._howls[_]._webAudio)for(var g=l._howls[_]._getSoundIds(),m=0;m<g.length;m++){var x=l._howls[_]._soundById(g[m]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}l._autoResume();var y=l.ctx.createBufferSource();y.buffer=l._scratchBuffer,y.connect(l.ctx.destination),typeof y.start>"u"?y.noteOn(0):y.start(0),typeof l.ctx.resume=="function"&&l.ctx.resume(),y.onended=function(){y.disconnect(0),l._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var T=0;T<l._howls.length;T++)l._howls[T]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),l}},_obtainHtml5Audio:function(){var l=this||t;if(l._html5AudioPool.length)return l._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(l){var h=this||t;return l._unlocked&&h._html5AudioPool.push(l),h},_autoSuspend:function(){var l=this;if(!(!l.autoSuspend||!l.ctx||typeof l.ctx.suspend>"u"||!t.usingWebAudio)){for(var h=0;h<l._howls.length;h++)if(l._howls[h]._webAudio){for(var d=0;d<l._howls[h]._sounds.length;d++)if(!l._howls[h]._sounds[d]._paused)return l}return l._suspendTimer&&clearTimeout(l._suspendTimer),l._suspendTimer=setTimeout(function(){if(l.autoSuspend){l._suspendTimer=null,l.state="suspending";var f=function(){l.state="suspended",l._resumeAfterSuspend&&(delete l._resumeAfterSuspend,l._autoResume())};l.ctx.suspend().then(f,f)}},3e4),l}},_autoResume:function(){var l=this;if(!(!l.ctx||typeof l.ctx.resume>"u"||!t.usingWebAudio))return l.state==="running"&&l.ctx.state!=="interrupted"&&l._suspendTimer?(clearTimeout(l._suspendTimer),l._suspendTimer=null):l.state==="suspended"||l.state==="running"&&l.ctx.state==="interrupted"?(l.ctx.resume().then(function(){l.state="running";for(var h=0;h<l._howls.length;h++)l._howls[h]._emit("resume")}),l._suspendTimer&&(clearTimeout(l._suspendTimer),l._suspendTimer=null)):l.state==="suspending"&&(l._resumeAfterSuspend=!0),l}};var t=new e,i=function(l){var h=this;if(!l.src||l.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(l)};i.prototype={init:function(l){var h=this;return t.ctx||p(),h._autoplay=l.autoplay||!1,h._format=typeof l.format!="string"?l.format:[l.format],h._html5=l.html5||!1,h._muted=l.mute||!1,h._loop=l.loop||!1,h._pool=l.pool||5,h._preload=typeof l.preload=="boolean"||l.preload==="metadata"?l.preload:!0,h._rate=l.rate||1,h._sprite=l.sprite||{},h._src=typeof l.src!="string"?l.src:[l.src],h._volume=l.volume!==void 0?l.volume:1,h._xhr={method:l.xhr&&l.xhr.method?l.xhr.method:"GET",headers:l.xhr&&l.xhr.headers?l.xhr.headers:null,withCredentials:l.xhr&&l.xhr.withCredentials?l.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=l.onend?[{fn:l.onend}]:[],h._onfade=l.onfade?[{fn:l.onfade}]:[],h._onload=l.onload?[{fn:l.onload}]:[],h._onloaderror=l.onloaderror?[{fn:l.onloaderror}]:[],h._onplayerror=l.onplayerror?[{fn:l.onplayerror}]:[],h._onpause=l.onpause?[{fn:l.onpause}]:[],h._onplay=l.onplay?[{fn:l.onplay}]:[],h._onstop=l.onstop?[{fn:l.onstop}]:[],h._onmute=l.onmute?[{fn:l.onmute}]:[],h._onvolume=l.onvolume?[{fn:l.onvolume}]:[],h._onrate=l.onrate?[{fn:l.onrate}]:[],h._onseek=l.onseek?[{fn:l.onseek}]:[],h._onunlock=l.onunlock?[{fn:l.onunlock}]:[],h._onresume=[],h._webAudio=t.usingWebAudio&&!h._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var l=this,h=null;if(t.noAudio){l._emit("loaderror",null,"No audio support.");return}typeof l._src=="string"&&(l._src=[l._src]);for(var d=0;d<l._src.length;d++){var f,_;if(l._format&&l._format[d])f=l._format[d];else{if(_=l._src[d],typeof _!="string"){l._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}f=/^data:audio\/([^;,]+);/i.exec(_),f||(f=/\.([^.]+)$/.exec(_.split("?",1)[0])),f&&(f=f[1].toLowerCase())}if(f||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),f&&t.codecs(f)){h=l._src[d];break}}if(!h){l._emit("loaderror",null,"No codec support for selected audio sources.");return}return l._src=h,l._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(l._html5=!0,l._webAudio=!1),new r(l),l._webAudio&&a(l),l},play:function(l,h){var d=this,f=null;if(typeof l=="number")f=l,l=null;else{if(typeof l=="string"&&d._state==="loaded"&&!d._sprite[l])return null;if(typeof l>"u"&&(l="__default",!d._playLock)){for(var _=0,g=0;g<d._sounds.length;g++)d._sounds[g]._paused&&!d._sounds[g]._ended&&(_++,f=d._sounds[g]._id);_===1?l=null:f=null}}var m=f?d._soundById(f):d._inactiveSound();if(!m)return null;if(f&&!l&&(l=m._sprite||"__default"),d._state!=="loaded"){m._sprite=l,m._ended=!1;var x=m._id;return d._queue.push({event:"play",action:function(){d.play(x)}}),x}if(f&&!m._paused)return h||d._loadQueue("play"),m._id;d._webAudio&&t._autoResume();var y=Math.max(0,m._seek>0?m._seek:d._sprite[l][0]/1e3),T=Math.max(0,(d._sprite[l][0]+d._sprite[l][1])/1e3-y),P=T*1e3/Math.abs(m._rate),S=d._sprite[l][0]/1e3,E=(d._sprite[l][0]+d._sprite[l][1])/1e3;m._sprite=l,m._ended=!1;var C=function(){m._paused=!1,m._seek=y,m._start=S,m._stop=E,m._loop=!!(m._loop||d._sprite[l][2])};if(y>=E){d._ended(m);return}var M=m._node;if(d._webAudio){var b=function(){d._playLock=!1,C(),d._refreshBuffer(m);var Y=m._muted||d._muted?0:m._volume;M.gain.setValueAtTime(Y,t.ctx.currentTime),m._playStart=t.ctx.currentTime,typeof M.bufferSource.start>"u"?m._loop?M.bufferSource.noteGrainOn(0,y,86400):M.bufferSource.noteGrainOn(0,y,T):m._loop?M.bufferSource.start(0,y,86400):M.bufferSource.start(0,y,T),P!==1/0&&(d._endTimers[m._id]=setTimeout(d._ended.bind(d,m),P)),h||setTimeout(function(){d._emit("play",m._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?b():(d._playLock=!0,d.once("resume",b),d._clearTimer(m._id))}else{var k=function(){M.currentTime=y,M.muted=m._muted||d._muted||t._muted||M.muted,M.volume=m._volume*t.volume(),M.playbackRate=m._rate;try{var Y=M.play();if(Y&&typeof Promise<"u"&&(Y instanceof Promise||typeof Y.then=="function")?(d._playLock=!0,C(),Y.then(function(){d._playLock=!1,M._unlocked=!0,h?d._loadQueue():d._emit("play",m._id)}).catch(function(){d._playLock=!1,d._emit("playerror",m._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),m._ended=!0,m._paused=!0})):h||(d._playLock=!1,C(),d._emit("play",m._id)),M.playbackRate=m._rate,M.paused){d._emit("playerror",m._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}l!=="__default"||m._loop?d._endTimers[m._id]=setTimeout(d._ended.bind(d,m),P):(d._endTimers[m._id]=function(){d._ended(m),M.removeEventListener("ended",d._endTimers[m._id],!1)},M.addEventListener("ended",d._endTimers[m._id],!1))}catch(q){d._emit("playerror",m._id,q)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=d._src,M.load());var X=window&&window.ejecta||!M.readyState&&t._navigator.isCocoonJS;if(M.readyState>=3||X)k();else{d._playLock=!0,d._state="loading";var U=function(){d._state="loaded",k(),M.removeEventListener(t._canPlayEvent,U,!1)};M.addEventListener(t._canPlayEvent,U,!1),d._clearTimer(m._id)}}return m._id},pause:function(l){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(l)}}),h;for(var d=h._getSoundIds(l),f=0;f<d.length;f++){h._clearTimer(d[f]);var _=h._soundById(d[f]);if(_&&!_._paused&&(_._seek=h.seek(d[f]),_._rateSeek=0,_._paused=!0,h._stopFade(d[f]),_._node))if(h._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),h._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||h._emit("pause",_?_._id:null)}return h},stop:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(l)}}),d;for(var f=d._getSoundIds(l),_=0;_<f.length;_++){d._clearTimer(f[_]);var g=d._soundById(f[_]);g&&(g._seek=g._start||0,g._rateSeek=0,g._paused=!0,g._ended=!0,d._stopFade(f[_]),g._node&&(d._webAudio?g._node.bufferSource&&(typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),d._cleanBuffer(g._node)):(!isNaN(g._node.duration)||g._node.duration===1/0)&&(g._node.currentTime=g._start||0,g._node.pause(),g._node.duration===1/0&&d._clearSound(g._node))),h||d._emit("stop",g._id))}return d},mute:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(l,h)}}),d;if(typeof h>"u")if(typeof l=="boolean")d._muted=l;else return d._muted;for(var f=d._getSoundIds(h),_=0;_<f.length;_++){var g=d._soundById(f[_]);g&&(g._muted=l,g._interval&&d._stopFade(g._id),d._webAudio&&g._node?g._node.gain.setValueAtTime(l?0:g._volume,t.ctx.currentTime):g._node&&(g._node.muted=t._muted?!0:l),d._emit("mute",g._id))}return d},volume:function(){var l=this,h=arguments,d,f;if(h.length===0)return l._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?f=parseInt(h[0],10):d=parseFloat(h[0])}else h.length>=2&&(d=parseFloat(h[0]),f=parseInt(h[1],10));var m;if(typeof d<"u"&&d>=0&&d<=1){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"volume",action:function(){l.volume.apply(l,h)}}),l;typeof f>"u"&&(l._volume=d),f=l._getSoundIds(f);for(var x=0;x<f.length;x++)m=l._soundById(f[x]),m&&(m._volume=d,h[2]||l._stopFade(f[x]),l._webAudio&&m._node&&!m._muted?m._node.gain.setValueAtTime(d,t.ctx.currentTime):m._node&&!m._muted&&(m._node.volume=d*t.volume()),l._emit("volume",m._id))}else return m=f?l._soundById(f):l._sounds[0],m?m._volume:0;return l},fade:function(l,h,d,f){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(l,h,d,f)}}),_;l=Math.min(Math.max(0,parseFloat(l)),1),h=Math.min(Math.max(0,parseFloat(h)),1),d=parseFloat(d),_.volume(l,f);for(var g=_._getSoundIds(f),m=0;m<g.length;m++){var x=_._soundById(g[m]);if(x){if(f||_._stopFade(g[m]),_._webAudio&&!x._muted){var y=t.ctx.currentTime,T=y+d/1e3;x._volume=l,x._node.gain.setValueAtTime(l,y),x._node.gain.linearRampToValueAtTime(h,T)}_._startFadeInterval(x,l,h,d,g[m],typeof f>"u")}}return _},_startFadeInterval:function(l,h,d,f,_,g){var m=this,x=h,y=d-h,T=Math.abs(y/.01),P=Math.max(4,T>0?f/T:f),S=Date.now();l._fadeTo=d,l._interval=setInterval(function(){var E=(Date.now()-S)/f;S=Date.now(),x+=y*E,x=Math.round(x*100)/100,y<0?x=Math.max(d,x):x=Math.min(d,x),m._webAudio?l._volume=x:m.volume(x,l._id,!0),g&&(m._volume=x),(d<h&&x<=d||d>h&&x>=d)&&(clearInterval(l._interval),l._interval=null,l._fadeTo=null,m.volume(d,l._id),m._emit("fade",l._id))},P)},_stopFade:function(l){var h=this,d=h._soundById(l);return d&&d._interval&&(h._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,h.volume(d._fadeTo,l),d._fadeTo=null,h._emit("fade",l)),h},loop:function(){var l=this,h=arguments,d,f,_;if(h.length===0)return l._loop;if(h.length===1)if(typeof h[0]=="boolean")d=h[0],l._loop=d;else return _=l._soundById(parseInt(h[0],10)),_?_._loop:!1;else h.length===2&&(d=h[0],f=parseInt(h[1],10));for(var g=l._getSoundIds(f),m=0;m<g.length;m++)_=l._soundById(g[m]),_&&(_._loop=d,l._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,l.playing(g[m])&&(l.pause(g[m],!0),l.play(g[m],!0)))));return l},rate:function(){var l=this,h=arguments,d,f;if(h.length===0)f=l._sounds[0]._id;else if(h.length===1){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?f=parseInt(h[0],10):d=parseFloat(h[0])}else h.length===2&&(d=parseFloat(h[0]),f=parseInt(h[1],10));var m;if(typeof d=="number"){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"rate",action:function(){l.rate.apply(l,h)}}),l;typeof f>"u"&&(l._rate=d),f=l._getSoundIds(f);for(var x=0;x<f.length;x++)if(m=l._soundById(f[x]),m){l.playing(f[x])&&(m._rateSeek=l.seek(f[x]),m._playStart=l._webAudio?t.ctx.currentTime:m._playStart),m._rate=d,l._webAudio&&m._node&&m._node.bufferSource?m._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):m._node&&(m._node.playbackRate=d);var y=l.seek(f[x]),T=(l._sprite[m._sprite][0]+l._sprite[m._sprite][1])/1e3-y,P=T*1e3/Math.abs(m._rate);(l._endTimers[f[x]]||!m._paused)&&(l._clearTimer(f[x]),l._endTimers[f[x]]=setTimeout(l._ended.bind(l,m),P)),l._emit("rate",m._id)}}else return m=l._soundById(f),m?m._rate:l._rate;return l},seek:function(){var l=this,h=arguments,d,f;if(h.length===0)l._sounds.length&&(f=l._sounds[0]._id);else if(h.length===1){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?f=parseInt(h[0],10):l._sounds.length&&(f=l._sounds[0]._id,d=parseFloat(h[0]))}else h.length===2&&(d=parseFloat(h[0]),f=parseInt(h[1],10));if(typeof f>"u")return 0;if(typeof d=="number"&&(l._state!=="loaded"||l._playLock))return l._queue.push({event:"seek",action:function(){l.seek.apply(l,h)}}),l;var m=l._soundById(f);if(m)if(typeof d=="number"&&d>=0){var x=l.playing(f);x&&l.pause(f,!0),m._seek=d,m._ended=!1,l._clearTimer(f),!l._webAudio&&m._node&&!isNaN(m._node.duration)&&(m._node.currentTime=d);var y=function(){x&&l.play(f,!0),l._emit("seek",f)};if(x&&!l._webAudio){var T=function(){l._playLock?setTimeout(T,0):y()};setTimeout(T,0)}else y()}else if(l._webAudio){var P=l.playing(f)?t.ctx.currentTime-m._playStart:0,S=m._rateSeek?m._rateSeek-m._seek:0;return m._seek+(S+P*Math.abs(m._rate))}else return m._node.currentTime;return l},playing:function(l){var h=this;if(typeof l=="number"){var d=h._soundById(l);return d?!d._paused:!1}for(var f=0;f<h._sounds.length;f++)if(!h._sounds[f]._paused)return!0;return!1},duration:function(l){var h=this,d=h._duration,f=h._soundById(l);return f&&(d=h._sprite[f._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var l=this,h=l._sounds,d=0;d<h.length;d++)h[d]._paused||l.stop(h[d]._id),l._webAudio||(l._clearSound(h[d]._node),h[d]._node.removeEventListener("error",h[d]._errorFn,!1),h[d]._node.removeEventListener(t._canPlayEvent,h[d]._loadFn,!1),h[d]._node.removeEventListener("ended",h[d]._endFn,!1),t._releaseHtml5Audio(h[d]._node)),delete h[d]._node,l._clearTimer(h[d]._id);var f=t._howls.indexOf(l);f>=0&&t._howls.splice(f,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===l._src||l._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return o&&_&&delete o[l._src],t.noAudio=!1,l._state="unloaded",l._sounds=[],l=null,null},on:function(l,h,d,f){var _=this,g=_["_on"+l];return typeof h=="function"&&g.push(f?{id:d,fn:h,once:f}:{id:d,fn:h}),_},off:function(l,h,d){var f=this,_=f["_on"+l],g=0;if(typeof h=="number"&&(d=h,h=null),h||d)for(g=0;g<_.length;g++){var m=d===_[g].id;if(h===_[g].fn&&m||!h&&m){_.splice(g,1);break}}else if(l)f["_on"+l]=[];else{var x=Object.keys(f);for(g=0;g<x.length;g++)x[g].indexOf("_on")===0&&Array.isArray(f[x[g]])&&(f[x[g]]=[])}return f},once:function(l,h,d){var f=this;return f.on(l,h,d,1),f},_emit:function(l,h,d){for(var f=this,_=f["_on"+l],g=_.length-1;g>=0;g--)(!_[g].id||_[g].id===h||l==="load")&&(setTimeout((function(m){m.call(this,h,d)}).bind(f,_[g].fn),0),_[g].once&&f.off(l,_[g].fn,_[g].id));return f._loadQueue(l),f},_loadQueue:function(l){var h=this;if(h._queue.length>0){var d=h._queue[0];d.event===l&&(h._queue.shift(),h._loadQueue()),l||d.action()}return h},_ended:function(l){var h=this,d=l._sprite;if(!h._webAudio&&l._node&&!l._node.paused&&!l._node.ended&&l._node.currentTime<l._stop)return setTimeout(h._ended.bind(h,l),100),h;var f=!!(l._loop||h._sprite[d][2]);if(h._emit("end",l._id),!h._webAudio&&f&&h.stop(l._id,!0).play(l._id),h._webAudio&&f){h._emit("play",l._id),l._seek=l._start||0,l._rateSeek=0,l._playStart=t.ctx.currentTime;var _=(l._stop-l._start)*1e3/Math.abs(l._rate);h._endTimers[l._id]=setTimeout(h._ended.bind(h,l),_)}return h._webAudio&&!f&&(l._paused=!0,l._ended=!0,l._seek=l._start||0,l._rateSeek=0,h._clearTimer(l._id),h._cleanBuffer(l._node),t._autoSuspend()),!h._webAudio&&!f&&h.stop(l._id,!0),h},_clearTimer:function(l){var h=this;if(h._endTimers[l]){if(typeof h._endTimers[l]!="function")clearTimeout(h._endTimers[l]);else{var d=h._soundById(l);d&&d._node&&d._node.removeEventListener("ended",h._endTimers[l],!1)}delete h._endTimers[l]}return h},_soundById:function(l){for(var h=this,d=0;d<h._sounds.length;d++)if(l===h._sounds[d]._id)return h._sounds[d];return null},_inactiveSound:function(){var l=this;l._drain();for(var h=0;h<l._sounds.length;h++)if(l._sounds[h]._ended)return l._sounds[h].reset();return new r(l)},_drain:function(){var l=this,h=l._pool,d=0,f=0;if(!(l._sounds.length<h)){for(f=0;f<l._sounds.length;f++)l._sounds[f]._ended&&d++;for(f=l._sounds.length-1;f>=0;f--){if(d<=h)return;l._sounds[f]._ended&&(l._webAudio&&l._sounds[f]._node&&l._sounds[f]._node.disconnect(0),l._sounds.splice(f,1),d--)}}},_getSoundIds:function(l){var h=this;if(typeof l>"u"){for(var d=[],f=0;f<h._sounds.length;f++)d.push(h._sounds[f]._id);return d}else return[l]},_refreshBuffer:function(l){var h=this;return l._node.bufferSource=t.ctx.createBufferSource(),l._node.bufferSource.buffer=o[h._src],l._panner?l._node.bufferSource.connect(l._panner):l._node.bufferSource.connect(l._node),l._node.bufferSource.loop=l._loop,l._loop&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop||0),l._node.bufferSource.playbackRate.setValueAtTime(l._rate,t.ctx.currentTime),h},_cleanBuffer:function(l){var h=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!l.bufferSource)return h;if(t._scratchBuffer&&l.bufferSource&&(l.bufferSource.onended=null,l.bufferSource.disconnect(0),d))try{l.bufferSource.buffer=t._scratchBuffer}catch{}return l.bufferSource=null,h},_clearSound:function(l){var h=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);h||(l.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(l){this._parent=l,this.init()};r.prototype={init:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,h._sounds.push(l),l.create(),l},create:function(){var l=this,h=l._parent,d=t._muted||l._muted||l._parent._muted?0:l._volume;return h._webAudio?(l._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),l._node.gain.setValueAtTime(d,t.ctx.currentTime),l._node.paused=!0,l._node.connect(t.masterGain)):t.noAudio||(l._node=t._obtainHtml5Audio(),l._errorFn=l._errorListener.bind(l),l._node.addEventListener("error",l._errorFn,!1),l._loadFn=l._loadListener.bind(l),l._node.addEventListener(t._canPlayEvent,l._loadFn,!1),l._endFn=l._endListener.bind(l),l._node.addEventListener("ended",l._endFn,!1),l._node.src=h._src,l._node.preload=h._preload===!0?"auto":h._preload,l._node.volume=d*t.volume(),l._node.load()),l},reset:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._rateSeek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,l},_errorListener:function(){var l=this;l._parent._emit("loaderror",l._id,l._node.error?l._node.error.code:0),l._node.removeEventListener("error",l._errorFn,!1)},_loadListener:function(){var l=this,h=l._parent;h._duration=Math.ceil(l._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),l._node.removeEventListener(t._canPlayEvent,l._loadFn,!1)},_endListener:function(){var l=this,h=l._parent;h._duration===1/0&&(h._duration=Math.ceil(l._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(l)),l._node.removeEventListener("ended",l._endFn,!1)}};var o={},a=function(l){var h=l._src;if(o[h]){l._duration=o[h].duration,u(l);return}if(/^data:[^;]+;base64,/.test(h)){for(var d=atob(h.split(",")[1]),f=new Uint8Array(d.length),_=0;_<d.length;++_)f[_]=d.charCodeAt(_);c(f.buffer,l)}else{var g=new XMLHttpRequest;g.open(l._xhr.method,h,!0),g.withCredentials=l._xhr.withCredentials,g.responseType="arraybuffer",l._xhr.headers&&Object.keys(l._xhr.headers).forEach(function(m){g.setRequestHeader(m,l._xhr.headers[m])}),g.onload=function(){var m=(g.status+"")[0];if(m!=="0"&&m!=="2"&&m!=="3"){l._emit("loaderror",null,"Failed loading audio file with status: "+g.status+".");return}c(g.response,l)},g.onerror=function(){l._webAudio&&(l._html5=!0,l._webAudio=!1,l._sounds=[],delete o[h],l.load())},s(g)}},s=function(l){try{l.send()}catch{l.onerror()}},c=function(l,h){var d=function(){h._emit("loaderror",null,"Decoding audio data failed.")},f=function(_){_&&h._sounds.length>0?(o[h._src]=_,u(h,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(l).then(f).catch(d):t.ctx.decodeAudioData(l,f,d)},u=function(l,h){h&&!l._duration&&(l._duration=h.duration),Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue())},p=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var l=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),h=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=h?parseInt(h[1],10):null;if(l&&d&&d<9){var f=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!f&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};n.Howler=t,n.Howl=i,typeof Sa<"u"?(Sa.HowlerGlobal=e,Sa.Howler=t,Sa.Howl=i,Sa.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=i,window.Sound=r)})();/*!
*  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
*  
*  howler.js v2.2.4
*  howlerjs.com
*
*  (c) 2013-2020, James Simpson of GoldFire Studios
*  goldfirestudios.com
*
*  MIT License
*/(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var i=this;if(!i.ctx||!i.ctx.listener)return i;for(var r=i._howls.length-1;r>=0;r--)i._howls[r].stereo(t);return i},HowlerGlobal.prototype.pos=function(t,i,r){var o=this;if(!o.ctx||!o.ctx.listener)return o;if(i=typeof i!="number"?o._pos[1]:i,r=typeof r!="number"?o._pos[2]:r,typeof t=="number")o._pos=[t,i,r],typeof o.ctx.listener.positionX<"u"?(o.ctx.listener.positionX.setTargetAtTime(o._pos[0],Howler.ctx.currentTime,.1),o.ctx.listener.positionY.setTargetAtTime(o._pos[1],Howler.ctx.currentTime,.1),o.ctx.listener.positionZ.setTargetAtTime(o._pos[2],Howler.ctx.currentTime,.1)):o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]);else return o._pos;return o},HowlerGlobal.prototype.orientation=function(t,i,r,o,a,s){var c=this;if(!c.ctx||!c.ctx.listener)return c;var u=c._orientation;if(i=typeof i!="number"?u[1]:i,r=typeof r!="number"?u[2]:r,o=typeof o!="number"?u[3]:o,a=typeof a!="number"?u[4]:a,s=typeof s!="number"?u[5]:s,typeof t=="number")c._orientation=[t,i,r,o,a,s],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(i,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(o,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(s,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(t,i,r,o,a,s);else return u;return c},Howl.prototype.init=function(t){return function(i){var r=this;return r._orientation=i.orientation||[1,0,0],r._stereo=i.stereo||null,r._pos=i.pos||null,r._pannerAttr={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:360,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:360,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:0,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:"inverse",maxDistance:typeof i.maxDistance<"u"?i.maxDistance:1e4,panningModel:typeof i.panningModel<"u"?i.panningModel:"HRTF",refDistance:typeof i.refDistance<"u"?i.refDistance:1,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:1},r._onstereo=i.onstereo?[{fn:i.onstereo}]:[],r._onpos=i.onpos?[{fn:i.onpos}]:[],r._onorientation=i.onorientation?[{fn:i.onorientation}]:[],t.call(this,i)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,i){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,i)}}),r;var o=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof i>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var a=r._getSoundIds(i),s=0;s<a.length;s++){var c=r._soundById(a[s]);if(c)if(typeof t=="number")c._stereo=t,c._pos=[t,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&e(c,o),o==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(t,0,0):c._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",c._id);else return c._stereo}return r},Howl.prototype.pos=function(t,i,r,o){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,i,r,o)}}),a;if(i=typeof i!="number"?0:i,r=typeof r!="number"?-.5:r,typeof o>"u")if(typeof t=="number")a._pos=[t,i,r];else return a._pos;for(var s=a._getSoundIds(o),c=0;c<s.length;c++){var u=a._soundById(s[c]);if(u)if(typeof t=="number")u._pos=[t,i,r],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(i,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setPosition(t,i,r)),a._emit("pos",u._id);else return u._pos}return a},Howl.prototype.orientation=function(t,i,r,o){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,i,r,o)}}),a;if(i=typeof i!="number"?a._orientation[1]:i,r=typeof r!="number"?a._orientation[2]:r,typeof o>"u")if(typeof t=="number")a._orientation=[t,i,r];else return a._orientation;for(var s=a._getSoundIds(o),c=0;c<s.length;c++){var u=a._soundById(s[c]);if(u)if(typeof t=="number")u._orientation=[t,i,r],u._node&&(u._panner||(u._pos||(u._pos=a._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(i,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setOrientation(t,i,r)),a._emit("orientation",u._id);else return u._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,i=arguments,r,o,a;if(!t._webAudio)return t;if(i.length===0)return t._pannerAttr;if(i.length===1)if(typeof i[0]=="object")r=i[0],typeof o>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(i[0],10)),a?a._pannerAttr:t._pannerAttr;else i.length===2&&(r=i[0],o=parseInt(i[1],10));for(var s=t._getSoundIds(o),c=0;c<s.length;c++)if(a=t._soundById(s[c]),a){var u=a._pannerAttr;u={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:u.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:u.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:u.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:u.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:u.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:u.panningModel};var p=a._panner;p||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),p=a._panner),p.coneInnerAngle=u.coneInnerAngle,p.coneOuterAngle=u.coneOuterAngle,p.coneOuterGain=u.coneOuterGain,p.distanceModel=u.distanceModel,p.maxDistance=u.maxDistance,p.refDistance=u.refDistance,p.rolloffFactor=u.rolloffFactor,p.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var i=this,r=i._parent;i._orientation=r._orientation,i._stereo=r._stereo,i._pos=r._pos,i._pannerAttr=r._pannerAttr,t.call(this),i._stereo?r.stereo(i._stereo):i._pos&&r.pos(i._pos[0],i._pos[1],i._pos[2],i._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var i=this,r=i._parent;return i._orientation=r._orientation,i._stereo=r._stereo,i._pos=r._pos,i._pannerAttr=r._pannerAttr,i._stereo?r.stereo(i._stereo):i._pos?r.pos(i._pos[0],i._pos[1],i._pos[2],i._id):i._panner&&(i._panner.disconnect(0),i._panner=void 0,r._refreshBuffer(i)),t.call(this)}}(Sound.prototype.reset);var e=function(t,i){i=i||"spatial",i==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(wa);const nb=ib(wa),vt=function(n,e){return new Promise((t,i)=>{n.gltfLoader.load(e,r=>{r.scene.traverse(a=>{a.isMesh&&a.material.isMeshStandardMaterial&&(a.castShadow=!0,a.receiveShadow=!0)});const o=new sn;o.add(r.scene),t(o)})})};class rb{constructor(e){this.game=e}async load(e){let t=[];for(let r=0;r<e.models.length;r++){let o=e.tiles.reduce((p,l)=>l.model==r?++p:p,0);if(o==0){console.warn(`model ${e.models[r]} at index ${r} not used.`);continue}let a=e.models[r];const s=await vt(this.game,a);let c;s.traverse(p=>{if(p.isMesh){c=p;return}});const u=new ec(c.geometry,c.material,o);u.receiveShadow=!0,t[r]=u}const i=new et;return e.models.forEach((r,o)=>{e.tiles.filter(a=>a.model==o).forEach((a,s)=>{const c=new O(a.position[0]*4,a.position[1],a.position[2]*4),u=new _i;u.setFromAxisAngle(ct.DEFAULT_UP,a.rotation);const p=new O(1,1,1);i.compose(c,u,p),t[o].setMatrixAt(s,i)})}),e.meta.shadow.forEach(r=>{t[r]&&(t[r].castShadow=!0,t[r].receiveShadow=!0)}),t}}const ob=async(n,e)=>{let t=await new Promise((i,r)=>{n.rgbeLoader.load(e,(o,a)=>{i(o,a)})});t.mapping=Oa,n.scene.background=t,n.scene.environment=t};class ab{constructor(e,t){this.ingredientInfo=e,this.model=null,this.game=t}getName(){return this.ingredientInfo.name}async spawn(e,t){return this.model=await vt(this.game,this.ingredientInfo.model),this.shelfSlot=e,this.model.position.x=e.position.x,this.model.position.y=e.position.y,this.model.position.z=e.position.z,this.game.scene.add(this.model),this.model}beginBrew(){this.model.moving=!0,clearTimeout(this.model.timeoutId),Xe.to(this.model.scale,{duration:2.5,x:0,y:0,z:0,onComplete:()=>{this.model.visible=!1,this.model.timeoutId=setTimeout(()=>{this.model.position.x=this.shelfSlot.position.x,this.model.position.y=this.ingredientInfo.wobble.amplitude*Math.sin(this.ingredientInfo.wobble.frequency*this.game.clock.getElapsedTime()+700)+(this.shelfSlot.position.y+this.ingredientInfo.shelfOffset),this.model.position.z=this.shelfSlot.position.z,this.model.visible=!0,Xe.to(this.model.scale,{duration:.7,x:1,y:1,z:1,ease:"bounce",onComplete:()=>{this.model.moving=!1}})},3e3)}}),Xe.to(this.model.position,{duration:1.5,motionPath:this.shelfSlot.motionPath,onComplete:()=>{}})}wobble(){this.model.moving||(this.model.position.y=this.ingredientInfo.wobble.amplitude*Math.sin(this.ingredientInfo.wobble.frequency*this.game.clock.getElapsedTime())+(this.shelfSlot.position.y+this.ingredientInfo.shelfOffset),this.model.rotateOnAxis(new O(0,1,0),-this.ingredientInfo.wobble.rotation))}}Array.prototype.equals=function(n,e=!0){if(!n||this.length!=n.length)return!1;for(var t=0;t<this.length;t++){if(e&&this[t]!=n[t])return!1;if(!e)return this.sort().equals(n.sort(),!0)}return!0},Array.prototype.remove=function(n){const e=this.indexOf(n);e!=-1?this.splice(e,1):console.warn(`did not find ${n} in array ${this}`)},Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]},Array.prototype.shuffle=function(){let n,e;for(let t=this.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),e=this[t],this[t]=this[n],this[n]=e;return this};var sb=`attribute float aScale;

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
}`,lb=`void main()\r
{\r
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\r
    float strength = 0.05 / distanceToCenter - 0.1;\r
    gl_FragColor = vec4(1.0, 1.0, 1.0, strength);

    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`,cb=`attribute float aScale;

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
}`,ub=`uniform float uBlendTime;\r
uniform vec3 uPotionColor;\r
uniform vec3 uNextPotionColor;\r
uniform float uTransparency;

void main()\r
{\r
    gl_FragColor = vec4(mix(uPotionColor, uNextPotionColor, uBlendTime), uTransparency);\r
}`;function hb(n,e){document.getElementById("prev").addEventListener("click",t=>{ks(n,e)}),document.getElementById("next").addEventListener("click",t=>{lu(n,e)})}function db(n,e){document.getElementById("room-navigation").style.display="block"}function pb(n,e){document.getElementById("room-navigation").style.display="none",document.getElementById("prev").style.display="block",document.getElementById("next").style.display="block",document.getElementById("prev-text").innerHTML="Shop",document.getElementById("next-text").innerHTML="Market"}function ks(n,e){switch(e.currentRoom){case mi:ur(Fr),document.getElementById("prev").style.display="none",document.getElementById("next-text").innerHTML="Brew";break;case cr:ur(mi),document.getElementById("next").style.display="block",document.getElementById("prev-text").innerHTML="Shop";break}}function lu(n,e){switch(e.currentRoom){case mi:ur(cr),document.getElementById("next").style.display="none",document.getElementById("prev-text").innerHTML="Brew";break;case Fr:ur(mi),document.getElementById("prev").style.display="block",document.getElementById("next-text").innerHTML="Market";break}}async function fb(n,e){const t=document.getElementById("main-menu-container");document.getElementById("play-button").addEventListener("click",()=>{gb(),db();const i=e.cameraPositions[1];Xe.to(n.camera.position,{duration:2.5,x:i.camera.x,y:i.camera.y,z:i.camera.z}),Xe.to(n.lookAtFocus,{duration:2.5,x:i.focus.x,y:i.focus.y,z:i.focus.z})}),document.getElementById("reset-save-button").addEventListener("click",()=>{confirm("Are you sure you want to delete your Spookonomics save data? This cannot be undone.")&&(Bb(e),Jf(e))}),t.addEventListener("click",i=>{i.stopPropagation()})}async function mb(n,e){const t=document.getElementById("main-menu-container");t.style.display="block";const i=document.getElementById("main-menu-display");i.style.opacity=0,Xe.to(i,{opacity:1,duration:.8})}async function gb(n,e){const t=document.getElementById("main-menu-container"),i=document.getElementById("main-menu-display");Xe.to(i,{opacity:0,duration:.8,onComplete:()=>{t.style.display="none"}})}const _b={image:"./images/potion_unknown.png",title:"Unknown",properties:[]};function cu(n,e){const t=document.getElementById("brew-selected-container").children;for(let i=0;i<t.length;i++)t[i].classList.add("disabled"),t[i].getElementsByClassName("disabled-selected-ingredient")[0].style.display="block",t[i].getElementsByClassName("active-selected-ingredient")[0].style.display="none";for(let i=0;i<e.selectedIngredients.length;i++){const r=e.selectedIngredients[i],o=e.ingredientInfo[r];t[i].classList.remove("disabled"),t[i].getElementsByClassName("disabled-selected-ingredient")[0].style.display="none";const a=t[i].getElementsByClassName("active-selected-ingredient")[0];a.style.display="flex",a.getElementsByClassName("selected-ingredient-image")[0].getElementsByTagName("img")[0].src=o.image,a.getElementsByClassName("selected-ingredient-description")[0].getElementsByTagName("h2")[0].innerText=o.title,a.getElementsByClassName("selected-ingredient-description")[0].getElementsByTagName("p")[0].innerText=o.description}}function uu(n,e){const t=e.potionInfo.filter(o=>e.selectedIngredients.equals(o.ingredients,!1));let i=_b;e.potionToBrew=null,t.length==1&&(i=t[0],e.potionToBrew=i),document.getElementById("potion-icon").innerHTML="";let r=document.createElement("img");r.src=i.image,document.getElementById("potion-icon").appendChild(r),document.getElementById("potion-name").innerText=i.title,document.getElementById("potion-properties-list").innerHTML="",i.properties.forEach(o=>{let a=document.createElement("li");a.innerText=o,document.getElementById("potion-properties-list").appendChild(a)})}async function vb(n,e){document.getElementById("brew-container").addEventListener("click",()=>{Bo(n,e)}),document.getElementById("brew-right-side").addEventListener("click",r=>{r.stopPropagation()});const t=document.getElementById("brew-selected-container").children,i=document.getElementById("brew-ingredients-container").children;for(const r of i)r.addEventListener("click",o=>{if(o.stopPropagation(),e.selectedIngredients.length<2){e.soundEffects["audio/click1.ogg"].play();const a=r.getAttribute("data-ingredient");e.selectedIngredients.push(a),cu(n,e)}uu(n,e)});for(let r=0;r<t.length;r++){const o=t[r];o.addEventListener("click",a=>{a.stopPropagation(),!o.classList.contains("disabled")&&(e.soundEffects["audio/click1.ogg"].play(),e.selectedIngredients.splice(r,1),cu(n,e),uu(n,e))})}document.getElementById("start-brew").addEventListener("click",()=>{e.beginBrew()})}async function yb(n,e){if(e.cauldron.brewMenuOpen)return;const t=document.getElementById("brew-container");if(t.style.display="block",n.canvas.clientWidth>=1024){let r=e.cameraPositions[e.currentRoom-1];Xe.to(n.lookAtFocus,{x:r.focus.x+2.5,duration:.8}),Xe.to(n.camera.position,{x:r.camera.x+2.5,duration:.8})}else{let r=e.cameraPositions[e.currentRoom-1];Xe.to(n.lookAtFocus,{y:r.focus.y-1.5,duration:.8}),Xe.to(n.camera.position,{y:r.camera.y-1.5,duration:.8})}cu(n,e),uu(n,e);const i=document.getElementById("brew-right-side");Xe.to(i,{x:0,duration:.8,onComplete:()=>{e.cauldron.brewMenuOpen=!0}})}async function Bo(n,e){if(!e.cauldron.brewMenuOpen)return;e.cauldron.brewMenuOpen=!1;const t=document.getElementById("brew-container");if(n.canvas.clientWidth>=1024){let r=e.cameraPositions[e.currentRoom-1];Xe.to(n.lookAtFocus,{x:r.focus.x,duration:.8}),Xe.to(n.camera.position,{x:r.camera.x,duration:.8})}else{let r=e.cameraPositions[e.currentRoom-1];Xe.to(n.lookAtFocus,{y:r.focus.y,duration:.8}),Xe.to(n.camera.position,{y:r.camera.y,duration:.8})}const i=document.getElementById("brew-right-side");Xe.to(i,{x:1024,duration:.8,onComplete:()=>{t.style.display="none"}})}async function xb(n,e){document.getElementById("shop-container").addEventListener("click",()=>{zs(n,e)}),document.getElementById("shop-panel").addEventListener("click",t=>{t.stopPropagation()}),document.getElementById("start-selling").addEventListener("click",t=>{e.beginSell()})}function hu(n,e){const t=document.getElementById("shop-potions-container");t.innerHTML="";const i={};e.potionInventory.forEach(o=>{i[o]?i[o]++:i[o]=1}),Object.keys(i).forEach(o=>{const a=e.potionInfo.find(p=>p.name==o),s=document.createElement("div");s.className="potion-container",s.title=a.title,s.setAttribute("data-potion",a.name);const c=document.createElement("img");c.src=a.image,c.title=a.title;const u=document.createElement("div");u.className="potion-inventory-count",u.innerHTML=`${i[o]}`,s.appendChild(c),s.appendChild(u),t.appendChild(s)});const r=document.getElementById("shop-potions-container").children;for(const o of r)o.addEventListener("click",a=>{if(a.stopPropagation(),e.potionStocked.length<6){e.soundEffects["audio/click1.ogg"].play();const s=o.getAttribute("data-potion");gu(e.potionStocked,"potion-stocked",s),_u(e.potionInventory,"potion-inventory",s),e.potionInventory.sort(),e.potionStocked.sort()}hu(n,e),du(n,e)})}function du(n,e){const t=document.getElementById("shop-shelves-container");t.innerHTML="";let i=0;for(let o=0;o<6;o++){if(i%2==0){const l=document.createElement("div");l.className="shop-shelf",t.appendChild(l)}const a=t.getElementsByClassName("shop-shelf")[Math.floor(i/2)];i++;const s=e.potionStocked[o];if(!s){const l=document.createElement("div");l.className="stocked-potion-container disabled-stocked-potion",a.appendChild(l);continue}const c=e.potionInfo.find(l=>l.name==s),u=document.createElement("div");u.className="stocked-potion-container",u.title=c.title,u.setAttribute("data-potion",c.name);const p=document.createElement("img");p.src=c.image,p.title=c.title,u.appendChild(p),a.appendChild(u)}const r=document.getElementById("shop-shelves-container").getElementsByClassName("stocked-potion-container");for(const o of r)o.classList.contains("disabled-stocked-potion")||o.addEventListener("click",a=>{if(a.stopPropagation(),e.potionStocked.length>0){e.soundEffects["audio/click1.ogg"].play();const s=o.getAttribute("data-potion");_u(e.potionStocked,"potion-stocked",s),gu(e.potionInventory,"potion-inventory",s),e.potionInventory.sort(),e.potionStocked.sort()}hu(n,e),du(n,e)});mu()}async function Mb(n,e){const t=document.getElementById("shop-container");t.style.display="block",hu(n,e),du(n,e);const i=document.getElementById("shop-panel");Xe.to(i,{x:0,duration:.8,onComplete:()=>{e.chest.isStocking=!0}})}async function zs(n,e){e.chest.isStocking=!1;const t=document.getElementById("shop-panel");Xe.to(t,{x:1280,duration:.8,onComplete:()=>{const i=document.getElementById("shop-container");i.style.display="none"}})}const Tb=["models/floor_tile_large.gltf.glb","models/wall_shelves.gltf.glb","models/wall_inset_shelves.gltf.glb","models/wall_inset_shelves_decoratedA.gltf.glb","models/kitchencounter_straight_B_styleB.gltf","models/wall_pillar.gltf.glb","models/wall_arched.gltf.glb","models/floor_dirt_large.gltf.glb","models/tree_pine_yellow_large.gltf","models/tree_pine_orange_large.gltf","models/maze_short.gltf","models/maze_tall.gltf","models/wall.gltf.glb","models/shelves.gltf.glb"],bb={shadow:[8,9,10,11,13]},Sb=[{model:0,position:[-1,0,-.5],rotation:0},{model:0,position:[-1,0,.5],rotation:0},{model:0,position:[-1,0,1.5],rotation:0},{model:0,position:[0,0,-.5],rotation:0},{model:0,position:[0,0,.5],rotation:0},{model:0,position:[0,0,1.5],rotation:0},{model:0,position:[1,0,-.5],rotation:0},{model:0,position:[1,0,.5],rotation:0},{model:0,position:[1,0,1.5],rotation:0},{model:0,position:[1,0,-.5],rotation:0},{model:0,position:[1,0,.5],rotation:0},{model:0,position:[1,0,1.5],rotation:0},{model:2,position:[-1.5,0,.5],rotation:1.5707963267948966},{model:3,position:[-1.5,0,1.5],rotation:1.5707963267948966},{model:12,position:[-1,0,-1],rotation:0},{model:13,position:[-1,0,-1],rotation:0},{model:2,position:[0,0,-1],rotation:0},{model:3,position:[1,0,-1],rotation:0},{model:1,position:[1.5,0,-.5],rotation:-1.5707963267948966},{model:2,position:[1.5,0,1.5],rotation:-1.5707963267948966},{model:0,position:[-4,0,-.5],rotation:0},{model:0,position:[-4,0,.5],rotation:0},{model:0,position:[-4,0,1.5],rotation:0},{model:0,position:[-3,0,-.5],rotation:0},{model:0,position:[-3,0,.5],rotation:0},{model:0,position:[-3,0,1.5],rotation:0},{model:0,position:[-2,0,-.5],rotation:0},{model:0,position:[-2,0,.5],rotation:0},{model:0,position:[-2,0,1.5],rotation:0},{model:5,position:[-4.5,0,-.5],rotation:1.5707963267948966},{model:5,position:[-4.5,0,.5],rotation:1.5707963267948966},{model:5,position:[-4.5,0,1.5],rotation:1.5707963267948966},{model:3,position:[-4,0,-1],rotation:0},{model:13,position:[-3,0,-1],rotation:0},{model:12,position:[-3,0,-1],rotation:0},{model:12,position:[-2,0,-1],rotation:0},{model:13,position:[-2,0,-1],rotation:0},{model:4,position:[-4,0,-0],rotation:0},{model:4,position:[-3.5,0,-0],rotation:0},{model:4,position:[-3,0,-0],rotation:0},{model:4,position:[-2.5,0,-0],rotation:0},{model:7,position:[1,0,-6],rotation:0},{model:7,position:[1,0,-5],rotation:0},{model:7,position:[1,0,-4],rotation:0},{model:7,position:[1,0,-3],rotation:0},{model:7,position:[1,0,-2],rotation:0},{model:7,position:[1,0,-1],rotation:0},{model:10,position:[1,0,-6],rotation:0},{model:11,position:[1,0,-5.5],rotation:0},{model:10,position:[1,0,-5],rotation:0},{model:11,position:[1,0,-4.5],rotation:0},{model:11,position:[1,0,-4],rotation:0},{model:10,position:[1,0,-3.5],rotation:0},{model:10,position:[1,0,-3],rotation:0},{model:11,position:[1,0,-2.5],rotation:0},{model:10,position:[1,0,-2],rotation:0},{model:7,position:[2,0,-6],rotation:0},{model:7,position:[2,0,-5],rotation:0},{model:7,position:[2,0,-4],rotation:0},{model:7,position:[2,0,-3],rotation:0},{model:7,position:[2,0,-2],rotation:0},{model:7,position:[2,0,-1],rotation:0},{model:7,position:[2,0,0],rotation:0},{model:7,position:[2,0,1],rotation:0},{model:7,position:[2,0,2],rotation:0},{model:7,position:[3,0,-6],rotation:0},{model:7,position:[3,0,-5],rotation:0},{model:7,position:[3,0,-4],rotation:0},{model:7,position:[3,0,-3],rotation:0},{model:7,position:[3,0,-2],rotation:0},{model:7,position:[3,0,-1],rotation:0},{model:7,position:[3,0,0],rotation:0},{model:7,position:[3,0,1],rotation:0},{model:7,position:[3,0,2],rotation:0},{model:7,position:[4,0,-6],rotation:0},{model:7,position:[4,0,-5],rotation:0},{model:7,position:[4,0,-4],rotation:0},{model:7,position:[4,0,-3],rotation:0},{model:7,position:[4,0,-2],rotation:0},{model:7,position:[4,0,-1],rotation:0},{model:7,position:[4,0,0],rotation:0},{model:7,position:[4,0,1],rotation:0},{model:7,position:[4,0,2],rotation:0},{model:7,position:[5,0,-6],rotation:0},{model:7,position:[5,0,-5],rotation:0},{model:7,position:[5,0,-4],rotation:0},{model:7,position:[5,0,-3],rotation:0},{model:7,position:[5,0,-2],rotation:0},{model:7,position:[5,0,-1],rotation:0},{model:7,position:[5,0,0],rotation:0},{model:7,position:[5,0,1],rotation:0},{model:7,position:[5,0,2],rotation:0},{model:7,position:[5,0,3],rotation:0},{model:11,position:[4.5,0,2.5],rotation:0},{model:11,position:[5,0,2.5],rotation:0},{model:7,position:[6,0,-6],rotation:0},{model:7,position:[6,0,-5],rotation:0},{model:7,position:[6,0,-4],rotation:0},{model:7,position:[6,0,-3],rotation:0},{model:7,position:[6,0,-2],rotation:0},{model:7,position:[6,0,-1],rotation:0},{model:7,position:[6,0,0],rotation:0},{model:7,position:[6,0,1],rotation:0},{model:7,position:[6,0,2],rotation:0},{model:7,position:[6,0,3],rotation:0},{model:10,position:[5.5,0,2.5],rotation:0},{model:11,position:[6,0,2.5],rotation:0},{model:7,position:[7,0,-6],rotation:0},{model:7,position:[7,0,-5],rotation:0},{model:7,position:[7,0,-4],rotation:0},{model:7,position:[7,0,-3],rotation:0},{model:7,position:[7,0,-2],rotation:0},{model:7,position:[7,0,-1],rotation:0},{model:7,position:[7,0,0],rotation:0},{model:7,position:[7,0,1],rotation:0},{model:7,position:[7,0,2],rotation:0},{model:7,position:[7,0,3],rotation:0},{model:10,position:[6.5,0,2.5],rotation:0},{model:10,position:[7,0,2.5],rotation:0},{model:7,position:[8,0,-6],rotation:0},{model:7,position:[8,0,-5],rotation:0},{model:7,position:[8,0,-4],rotation:0},{model:7,position:[8,0,-3],rotation:0},{model:7,position:[8,0,-2],rotation:0},{model:7,position:[8,0,-1],rotation:0},{model:7,position:[8,0,0],rotation:0},{model:7,position:[8,0,1],rotation:0},{model:7,position:[8,0,2],rotation:0},{model:7,position:[8,0,3],rotation:0},{model:7,position:[9,0,-6],rotation:0},{model:7,position:[9,0,-5],rotation:0},{model:7,position:[9,0,-4],rotation:0},{model:7,position:[9,0,-3],rotation:0},{model:7,position:[9,0,-2],rotation:0},{model:7,position:[9,0,-1],rotation:0},{model:7,position:[9,0,0],rotation:0},{model:7,position:[9,0,1],rotation:0},{model:7,position:[9,0,2],rotation:0},{model:7,position:[9,0,3],rotation:0},{model:11,position:[9,0,-3],rotation:0},{model:11,position:[9,0,-2.5],rotation:0},{model:10,position:[9,0,-2],rotation:0},{model:10,position:[9,0,-1.5],rotation:0},{model:11,position:[9,0,-1],rotation:0},{model:11,position:[9,0,-.5],rotation:0},{model:10,position:[9,0,0],rotation:0},{model:11,position:[9,0,.5],rotation:0},{model:10,position:[9,0,1],rotation:0},{model:10,position:[9,0,1.5],rotation:0},{model:10,position:[9,0,2],rotation:0},{model:11,position:[9,0,2.5],rotation:0},{model:11,position:[9,0,3],rotation:0},{model:9,position:[3,0,-3],rotation:0},{model:8,position:[4,0,-1],rotation:5.356194490192345},{model:9,position:[6,0,-2],rotation:3.141592653589793},{model:9,position:[3,0,0],rotation:0},{model:8,position:[8,0,1],rotation:0}],wb={models:Tb,meta:bb,tiles:Sb},Eb={name:"pumpkin",model:"models/pumpkin_orange_small.gltf",image:"./images/ingredient_pumpkin.png",title:"Pumpkin",description:"Makes things pumpkiny",shelfOffset:-.15,wobble:{amplitude:.125,frequency:4,rotation:.01}},Ab={name:"tomato",model:"models/food_ingredient_tomato.gltf",image:"./images/ingredient_tomato.png",title:"Tomato",description:"Makes things tomatoy",shelfOffset:-.2,wobble:{amplitude:.125,frequency:3.7,rotation:.01}},Rb={name:"lettuce",model:"models/food_ingredient_lettuce.gltf",image:"./images/ingredient_lettuce.png",title:"Lettuce",description:"Makes things lettucey",shelfOffset:.1,wobble:{amplitude:.0625,frequency:2.7,rotation:.005}},Cb={name:"mushroom",model:"models/food_ingredient_mushroom.gltf",image:"./images/ingredient_mushroom.png",title:"Mushroom",description:"Makes things mushroomy",shelfOffset:.05,wobble:{amplitude:.125,frequency:3.6,rotation:.01}},Pb={pumpkin:Eb,tomato:Ab,lettuce:Rb,mushroom:Cb},Ib=[{name:"pumpkin-spice",ingredients:["pumpkin","pumpkin"],image:"./images/potion_wide_orange.png",title:"Pumpkin Spice Latte",properties:["Tasty","Basic","Spooky"],model:"models/bottle_C_brown.gltf.glb",color:{r:.8,g:.3,b:0}},{name:"wildendraught",ingredients:["pumpkin","mushroom"],image:"./images/potion_normal_green.png",title:"Wildendraught",properties:["Feral","Unhinged","Carbonated"],model:"models/bottle_B_green.gltf.glb",color:{r:.1,g:.8,b:.1}},{name:"spooksauce",ingredients:["pumpkin","tomato"],image:"./images/potion_narrow_purple.png",title:"Spooksauce",properties:["Haunting","Creepy","Sweet"],model:"models/bottle_A_purple.gltf.glb",color:{r:.7,g:.1,b:.6}},{name:"carrot-juice",ingredients:["pumpkin","lettuce"],image:"./images/potion_narrow_orange.png",title:"Carrot Juice",properties:["Confusing","Unusual","Disturbing"],model:"models/bottle_A_brown.gltf.glb",color:{r:.7,g:.5,b:.1}},{name:"sanguis-damnum",ingredients:["tomato","tomato"],image:"./images/potion_wide_purple.png",title:"Sanguis Damnum",properties:["Coppery","Thick","Hot"],model:"models/bottle_C_purple.gltf.glb",color:{r:.5,g:.1,b:.5}},{name:"freshie",ingredients:["tomato","lettuce"],image:"./images/potion_normal_purple.png",title:"Freshie",properties:["Umami","Invigorating","Yum"],model:"models/bottle_B_purple.gltf.glb",color:{r:.7,g:.2,b:.9}},{name:"corpsicle",ingredients:["tomato","mushroom"],image:"./images/potion_narrow_blue.png",title:"Corpsicle",properties:["Meaty","Pulpy","Moldy"],model:"models/bottle_A_blue.gltf.glb",color:{r:0,g:.1,b:.4}},{name:"healthy-greens",ingredients:["lettuce","lettuce"],image:"./images/potion_wide_green.png",title:"Healthy Greens",properties:["Healthy","Crisp","Verdant"],model:"models/bottle_C_green.gltf.glb",color:{r:0,g:.8,b:.2}},{name:"not-poison",ingredients:["lettuce","mushroom"],image:"./images/potion_narrow_green.png",title:"Not Poison",properties:["Bitter","Almond","Intense"],model:"models/bottle_A_green.gltf.glb",color:{r:.2,g:.8,b:.2}},{name:"fungus-amongus",ingredients:["mushroom","mushroom"],image:"./images/potion_wide_blue.png",title:"Fungus Amongus",properties:["Sour","Vile","Suspicious"],model:"models/bottle_C_blue.gltf.glb",color:{r:.4,g:.4,b:.8}}];var Lb=`attribute float aScale;

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
}`,Nb=`uniform sampler2D uPotionIcon;

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
}`;class pu{constructor(e,t,i,r,o,a,s){this.game=e,this.meshPath=t,this.desiredPotion=i,this.scale=r,this.position=o,this.rotation=a,this.updateFunction=s,this.rejectCount=0,this.rejectionColors=[new qe("yellow"),new qe("orange"),new qe("crimson")]}async init(e){const t=await vt(this.game,this.meshPath);t.scale.copy(this.scale),this.object3d=new sn,this.object3d.add(t),this.object3d.position.set(-15,.1,10),this.object3d.rotateOnAxis(ct.DEFAULT_UP,this.rotation),this.game.scene.add(this.object3d);const i=new Na(1,1),r=this.game.textureLoader.load("./textures/speechbubble.png"),o=new qn({map:r,transparent:!0,side:gi}),a={uPotionIcon:{value:this.game.textureLoader.load(this.desiredPotion.image)}},s=new ii(i.clone(),new Zi({uniforms:a,vertexShader:Lb,fragmentShader:Nb,transparent:!0}));s.position.y=.085,s.position.z=.05,s.scale.set(.5,.5,.5),this.requestBillboard=new sn,this.billboardSprite=new ii(i.clone(),o),this.requestBillboard.add(this.billboardSprite),this.requestBillboard.add(s),this.requestBillboard.position.x=0,this.requestBillboard.position.y=2.5,this.requestBillboard.position.z=0,this.requestBillboard.visible=!1,this.object3d.add(this.requestBillboard),Xe.to(this.object3d.position,{duration:2*e+2,x:this.position.x,y:this.position.y,z:this.position.z})}update(e){this.updateFunction(e)}showDesire(){this.object3d.wantIsAnimating||(this.object3d.wantIsAnimating=!0,this.object3d.wantIsAnimating=!0,this.requestBillboard.lookAt(this.game.camera.position),this.requestBillboard.visible=!0,this.requestBillboard.position.set(0,.5,0),this.requestBillboard.scale.set(0,0,0),Xe.to(this.requestBillboard.position,{duration:2,y:2.5,ease:"elastic",onUpdate:()=>{this.requestBillboard.lookAt(this.game.camera.position)}}),Xe.to(this.requestBillboard.scale,{duration:2,x:1,y:1,z:1,ease:"elastic",onComplete:()=>{this.object3d.wantIsAnimating=!1}}))}hideDesire(){this.object3d.wantIsAnimating=!0,Xe.to(this.requestBillboard.position,{duration:2,y:.5,ease:"back"}),Xe.to(this.requestBillboard.scale,{duration:2,x:0,y:0,z:0,ease:"back",onComplete:()=>{this.requestBillboard.visible=!1,this.object3d.wantIsAnimating=!1}})}acceptPotion(){}rejectPotion(e=1){this.rejectCount+=e,this.billboardSprite.material.color=this.rejectionColors[Math.min(2,this.rejectCount-1)]}showSad(){console.log("not what I wanted")}isMatchingPotion(e){return this.desiredPotion.name==e.name}}const Hi="spookonomics-v1",fu=new H1;let ie,wi,Ei,Ct,Ai,lr,Ri,$i,Dn;const Hs=[],On={},F={},Fr=1,mi=2,cr=3,Db=[{position:new O(-3.5,1.5,-3.5),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]},{position:new O(-4.5,1.5,-3.5),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]},{position:new O(-4.5,0,-3),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]},{position:new O(-4.5,3,-3.5),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]}],Zf=[{position:new O(-12.5,2.75,-3.25),motionPath:[]},{position:new O(-11.5,2.75,-3.25),motionPath:[]},{position:new O(-8.5,2.75,-3.25),motionPath:[]},{position:new O(-7.5,2.75,-3.25),motionPath:[]},{position:new O(-8.5,1.25,-3.25),motionPath:[]},{position:new O(-7.5,1.25,-3.25),motionPath:[]}],Ea=[],Qf=[],Vs=[],mn=[],Gs=15;async function Ob(n,e){if(!e.potionToBrew){e.soundEffects["audio/witch_cackle1.ogg"].play();return}e.cauldron.isBrewing=!0,Bo(n,e),e.brewWitch.stir=!0,e.brewWitch.bounce=!0,e.spoon.visible=!0,e.selectedIngredients.forEach(i=>{Hs.find(r=>r.getName()==i).beginBrew()}),e.bottle1=await vt(n,e.potionToBrew.model),e.bottle1.position.y=-1.5,n.scene.add(e.bottle1),e.selectedIngredients=[],e.soundEffects["audio/click1.ogg"].play();const t=e.potionToBrew.color;e.cauldronUniforms.uNextPotionColor.value=new qe(t.r,t.g,t.b),e.cauldronUniforms.uBlendTime.value=0,setTimeout(()=>{e.soundEffects["audio/bubbling.mp3"].volume(.5),e.soundEffects["audio/bubbling.mp3"].play(),e.bubbleParticles.visible=!0,Xe.to(e.cauldronUniforms.uBlendTime,{value:1,duration:4.5,onComplete:()=>{e.cauldronUniforms.uPotionColor.value=e.cauldronUniforms.uNextPotionColor.value,e.cauldronUniforms.uBlendTime.value=0}})},900),setTimeout(()=>{gu(e.potionInventory,"potion-inventory",e.potionToBrew.name),e.potionToBrew=null,e.selectedIngredients=[],e.bottle1.position.set(0,-1.5,0),e.soundEffects["audio/bubbling.mp3"].fade(1,0,300),e.brewWitch.stir=!1,e.brewWitch.bounce=!1,e.spoon.visible=!1,e.bubbleParticles.visible=!1,Xe.to(e.bottle1.position,{duration:3,y:1.5,ease:"elastic",onComplete:()=>{setTimeout(()=>{n.scene.remove(e.bottle1),e.cauldron.isBrewing=!1},1e3)}})},5e3)}async function Ub(n,e){const t=[new O(-12.9,.1,3),new O(-13.1,.1,4),new O(-12.7,.1,5),new O(-13.1,.1,6),new O(-12.9,.1,7),new O(-13,.1,8)][F.customers.length],i=Math.floor(Math.random()*3);let r;switch(i){case 0:r=new pu(ie,"characters/assembled_character_1.gltf.glb",n,new O(3.5,3.5,3.5),t,Math.PI,function(o){this.object3d.position.y=.0625*Math.sin(2*o)+.5});break;case 1:r=new pu(ie,"characters/character_skeleton_minion.gltf",n,new O(1,1,1),t,Math.PI,function(o){this.object3d.scale.x=1+.03125*Math.sin(11.8*o),this.object3d.scale.y=1+-.03125*Math.sin(11.8*o),this.object3d.scale.z=1+.03125*Math.sin(11.8*o)});break;case 2:r=new pu(ie,"characters/ghost_1.gltf.glb",n,new O(3.5,3.5,3.5),t,Math.PI,function(o){this.object3d.position.y=.0625*Math.sin(2.2*o)+.5});break}return await r.init(e),r}async function Fb(n,e){if(e.potionStocked.length<1){e.soundEffects["audio/witch_cackle1.ogg"].play();return}e.soundEffects["audio/click1.ogg"].play(),e.isSellingPotions=!0;let t=[];t.push(...e.potionStocked),t.push(...e.potionInventory),t.push(...e.potionInfo.map(r=>r.name)),t.shuffle();let i=Math.min(t.length,Math.floor(Math.random()*3)+3);for(let r=0;r<i;r++){const o=t.shift(),a=e.potionInfo.find(s=>s.name==o);e.customers.push(await Ub(a,r))}setTimeout(()=>{e.soundEffects["audio/store-entrance-bell.ogg"].play()},500),e.customers[0].showDesire(),zs(n,e)}async function mu(){let n=0;for(let e=0;e<Zf.length;e++){F.displayedPotions[e]&&(ie.entities.remove(F.displayedPotions[e]),ie.scene.remove(F.displayedPotions[e]),F.displayedPotions[e]=null);const t=F.potionInfo.find(r=>F.potionStocked[e]==r.name);if(!t)continue;const i=await vt(ie,t.model);i.position.copy(Zf[n++].position),i.potionData=t,F.displayedPotions[e]=i,ie.entities.push(i),ie.scene.add(i)}}function gu(n,e,t){localStorage.getItem(`${Hi}-${e}`)?n.push(t):n=[t],localStorage.setItem(`${Hi}-${e}`,JSON.stringify(n))}function _u(n,e,t){localStorage.getItem(`${Hi}-${e}`)?n.remove(t):n=[],localStorage.setItem(`${Hi}-${e}`,JSON.stringify(n))}function Bb(n){localStorage.removeItem(`${Hi}-potion-inventory`),localStorage.removeItem(`${Hi}-potion-stocked`),localStorage.setItem(`${Hi}-potion-inventory`,JSON.stringify([])),n.potionInventory=[],localStorage.setItem(`${Hi}-potion-stocked`,JSON.stringify([])),n.potionStocked=[]}function Jf(n){let e=localStorage.getItem(`${Hi}-potion-inventory`);e?(n.potionInventory=JSON.parse(e),n.potionInventory.sort()):(localStorage.setItem(`${Hi}-potion-inventory`,JSON.stringify([])),n.potionInventory=[]);let t=localStorage.getItem(`${Hi}-potion-stocked`);t?(n.potionStocked=JSON.parse(t),n.potionStocked.sort()):(localStorage.setItem(`${Hi}-potion-stocked`,JSON.stringify([])),n.potionStocked=[])}async function kb(n){ie=n,Jf(F),F.currentRoom=2,F.soundEffects=On,F.selectedIngredients=[],F.cameraPositions=[{camera:new O(-15,5,7),focus:new O(-13,.1,0)},{camera:new O(1,5,7),focus:new O(0,.1,0)},{camera:new O(12,5,7),focus:new O(18,.1,0)},{camera:new O(1.37,2.41,3.77),focus:new O(-1.15,.79,-.19)}],["audio/click1.ogg","audio/sinkWater1.ogg","audio/doorOpen_1.ogg","audio/doorClose_4.ogg","audio/drawKnife2.ogg","audio/witch_cackle1.ogg","audio/bubbling.mp3","audio/chest_close_creak.ogg","audio/chest_open_creak.ogg","audio/handleCoins.ogg","audio/impactGlass_medium_000.ogg","audio/impactGlass_medium_001.ogg","audio/impactGlass_medium_002.ogg","audio/impactGlass_medium_003.ogg","audio/impactGlass_medium_004.ogg","audio/impactWood_heavy_002.ogg","audio/impactWood_heavy_004.ogg","audio/impactSoft_medium_002.ogg","audio/impactSoft_medium_004.ogg","audio/cash-register.ogg","audio/store-entrance-bell.ogg"].forEach(M=>{On[M]=new wa.Howl({src:[M],preload:!0})}),On["audio/doorClose_4.ogg"].volume(.5),On["audio/doorOpen_1.ogg"].volume(.5);let e=new rb(ie);ie.camera.position.copy(F.cameraPositions[3].camera),ie.lookAtFocus=F.cameraPositions[3].focus.clone(),await ob(ie,"kloppenheim_02_puresky_1k.hdr"),ie.scene.background=null,ie.scene.fog=new Lu(0,12,20),(await e.load(wb)).forEach(M=>{ie.scene.add(M)}),F.ingredientInfo=Pb,F.potionInfo=Ib,Object.values(F.ingredientInfo).forEach(M=>{Hs.push(new ab(M,ie))});let t=0;Hs.forEach(async M=>{await M.spawn(Db[t++])}),F.candycorn=await vt(ie,"models/candycorn.gltf"),F.candycorn.position.x=-3.3,F.candycorn.position.z=-3.5,ie.scene.add(F.candycorn),F.pumpkin2=await vt(ie,"models/pumpkin_orange.gltf"),ie.entities.push(F.pumpkin2),F.pumpkin2.position.x=-10,F.pumpkin2.position.y=1,F.pumpkin2.position.z=.5,ie.scene.add(F.pumpkin2),wi=await vt(ie,"models/pumpkin_orange_jackolantern.gltf"),ie.entities.push(wi),wi.spin=0,wi.position.set(3,.1,1),wi.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),ie.scene.add(wi),Ri=await vt(ie,"models/candle_thin.gltf.glb"),ie.entities.push(Ri),Ri.position.x=0,Ri.position.y=1,Ri.position.z=-2.5,Ri.isLit=!1,ie.scene.add(Ri),$i=await vt(ie,"models/candle_thin_lit.gltf.glb"),ie.entities.push($i),$i.position.x=0,$i.position.y=1,$i.position.z=-2.5,$i.visible=!1,ie.scene.add($i),F.cauldronUniforms={uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uBlendTime:{value:0},uPotionColor:{value:new O(0,.8,.2)},uNextPotionColor:{value:new O(0,.8,.2)},uTransparency:{value:.8}},F.cauldron=await vt(ie,"models/simple_cauldron.gltf.glb");const i=F.cauldron.getObjectByName("Sphere015");i.material.side=gi;const r=F.cauldron.getObjectByName("Sphere015_1"),o=new Zi({fragmentShader:ub,vertexShader:cb,uniforms:F.cauldronUniforms,transparent:!0,depthWrite:!1,side:gi});r.material=o,ie.entities.push(F.cauldron),F.cauldron.position.y=.1,ie.scene.add(F.cauldron),F.brewWitch=await vt(ie,"characters/character_witch.gltf"),ie.entities.push(F.brewWitch),F.brewWitch.position.x=1,F.brewWitch.position.y=.1,F.brewWitch.position.z=-1,F.brewWitch.stir=!1,F.brewWitch.bounce=!1,F.brewWitch.lookAt(F.cauldron.position),ie.scene.add(F.brewWitch),F.shopWitch=await vt(ie,"characters/character_witch.gltf"),ie.entities.push(F.shopWitch),F.shopWitch.position.x=-13,F.shopWitch.position.y=.1,F.shopWitch.position.z=-2,ie.scene.add(F.shopWitch),F.marketWitch=await vt(ie,"characters/character_witch.gltf"),ie.entities.push(F.marketWitch),F.marketWitch.position.x=20,F.marketWitch.position.y=.1,F.marketWitch.position.z=2.5,F.marketWitch.rotateOnAxis(ct.DEFAULT_UP,Math.PI),ie.scene.add(F.marketWitch),F.spoon=await vt(ie,"models/spoon.gltf"),ie.entities.push(F.spoon),F.spoon.rotateOnAxis(new O(1,0,0),Math.PI),F.spoon.position.y=1.25,F.spoon.visible=!1,ie.scene.add(F.spoon),Dn=await vt(ie,"models/book_grey.gltf.glb"),ie.entities.push(Dn),Dn.rotateOnAxis(ct.DEFAULT_UP,Math.PI),Dn.position.x=4.6,Dn.position.y=1.9,Dn.position.z=-3.9,ie.scene.add(Dn);const a=new Ou(.1,24,24),s=o;F.bubbleParticles=new ec(a,s,Gs),F.bubbleParticles.instanceMatrix.setUsage(Pg),F.bubbleParticles.visible=!1,ie.scene.add(F.bubbleParticles);const c=new et;for(let M=0;M<Gs;M++)Ea[M]=new O(.5*(Math.random()-.5),.5,.5*(Math.random()-.5)),Vs[M]=7-M*.5,mn[M]=.2,Qf[M]=new O(0,.01,0);const u=new _i,p=new O(1,1,1);for(let M=0;M<Gs;M++){u.setFromAxisAngle(ct.DEFAULT_UP,0);const b=p.set(mn[M],mn[M],mn[M]);c.compose(Ea[M],u,b),F.bubbleParticles.setMatrixAt(M,c)}Ei=await vt(ie,"models/wall_doorway.glb"),Ei.position.set(-6,0,-2),Ei.castShadow=!1,Ei.traverse(M=>{M.isMesh&&(M.castShadow=!1)}),Ei.rotateOnAxis(ct.DEFAULT_UP,Math.PI/2),Ei.isOpen=!1,Ei.isMoving=!1,ie.entities.push(Ei),ie.scene.add(Ei),Ai=await vt(ie,"models/wall_doorway.glb"),Ai.position.set(6,0,2),Ai.castShadow=!1,Ai.traverse(M=>{M.isMesh&&(M.castShadow=!1)}),Ai.rotateOnAxis(ct.DEFAULT_UP,Math.PI/2),Ai.isOpen=!1,Ai.isMoving=!1,ie.entities.push(Ai),ie.scene.add(Ai),F.displayedPotions=[],mu(),lr=await vt(ie,"models/lollipop_green.gltf"),lr.position.x=-11.5,lr.position.y=1.28,lr.position.z=-3.4,lr.rotateOnAxis(new O(1,0,0),Math.PI/2),lr.rotateOnAxis(new O(0,0,1),Math.PI/2+-.3),ie.entities.push(lr),ie.scene.add(lr),F.chest=await vt(ie,"models/chest_large.glb"),F.chest.scale.set(.5,.5,.5),F.chest.position.x=-16,F.chest.position.y=1,F.chest.position.z=0,F.chest.rotateOnAxis(ct.DEFAULT_UP,Math.PI/4),ie.entities.push(F.chest),ie.scene.add(F.chest),F.coin=await vt(ie,"models/coin.gltf.glb"),F.coin.position.x=-12,F.coin.position.y=1.1,F.coin.position.z=0,ie.entities.push(F.coin),ie.scene.add(F.coin),F.customers=[],F.sellingSkeleton=await vt(ie,"characters/character_skeleton_mage.gltf"),F.sellingSkeleton.position.x=20,F.sellingSkeleton.position.y=.1,F.sellingSkeleton.position.z=-1,F.sellingSkeleton.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),ie.entities.push(F.sellingSkeleton),ie.scene.add(F.sellingSkeleton),F.sign=await vt(ie,"models/sign_left.gltf"),F.sign.position.x=14,F.sign.position.y=.1,F.sign.position.z=2,ie.entities.push(F.sign),ie.scene.add(F.sign);const l=await vt(ie,"models/crate_mushrooms.gltf");l.scale.set(.5,.5,.5),l.position.x=19.5,l.position.z=.5,l.rotateOnAxis(ct.DEFAULT_UP,Math.PI/4),ie.entities.push(l),ie.scene.add(l);const h=await vt(ie,"models/crate_tomatoes.gltf");h.scale.set(.5,.5,.5),h.position.x=21,ie.entities.push(h),ie.scene.add(h);const d=await vt(ie,"models/crate_lettuce.gltf");d.scale.set(.5,.5,.5),d.position.x=18.5,d.position.z=-.5,ie.entities.push(d),ie.scene.add(d);const f=await vt(ie,"models/coffin_decorated.gltf");f.position.x=23,f.position.z=6,f.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),ie.scene.add(f);const _=await vt(ie,"models/candy_orange_A.gltf");_.position.x=21,_.position.y=.25,_.position.z=6,_.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),ie.scene.add(_);const g=await vt(ie,"models/candy_bucket_B_decorated.gltf");g.position.x=21.5,g.position.y=.1,g.position.z=5.5,g.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/2),ie.scene.add(g),F.firefliesUniforms={uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}};const m=new Zi({fragmentShader:lb,vertexShader:sb,uniforms:F.firefliesUniforms,transparent:!0,depthWrite:!1,blending:ol}),x=new Wi,y=50,T=new Float32Array(y*3),P=new Float32Array(y);for(let M=0;M<y;M++)T[M*3+0]=24*(Math.random()-.5)+18,T[M*3+1]=4*Math.random()+2,T[M*3+2]=16*(Math.random()-.5),P[M]=.8*Math.random()+1.2;x.setAttribute("position",new Xt(T,3)),x.setAttribute("aScale",new Xt(P,1));const S=new ip(x,m);ie.scene.add(S);const E=new C1(16777215,1);ie.scene.add(E);const C=24;Ct=new pp(16777215,.9),Ct.position.set(8,10,6),Ct.castShadow=!0,Ct.shadow.camera.left=-C,Ct.shadow.camera.right=C,Ct.shadow.camera.top=-C,Ct.shadow.camera.bottom=C,Ct.shadow.camera.far=28,Ct.shadow.mapSize.width=Math.min(ie.renderer.capabilities.maxTextureSize,2048),Ct.shadow.mapSize.height=Math.min(ie.renderer.capabilities.maxTextureSize,2048),Ct.shadow.bias=-.005,Ct.shadow.radius=6,Ct.cameraOffset=new O,Ct.cameraOffset.copy(Ct.position),Ct.cameraOffset.sub(new O(0,0,0)),Ct.target=ie.camera,Ct.update=function(){const M=new O;M.copy(Ct.cameraOffset).add(ie.camera.position),Ct.position.set(M.x,M.y,M.z),Ct.shadow&&Ct.shadow.camera.position.set(M.x,M.y,M.z)},ie.scene.add(Ct),fb(ie,F),hb(ie,F),vb(ie,F),xb(ie,F),F.beginBrew=()=>{Ob(ie,F)},F.beginSell=()=>{Fb(ie,F)}}function zb(n){let e=n.clock.getElapsedTime();Hs.forEach(o=>{o.wobble()}),F.candycorn.position.y=.125*Math.sin(4.1*e)+3,F.candycorn.rotateOnAxis(ct.DEFAULT_UP,-.02),Ct.update(),fu.setFromCamera(n.mousePosition,n.camera),wa.Howler.pos(n.camera.position.x,n.camera.position.y,n.camera.position.z),wa.Howler.orientation(n.camera.position.x,n.camera.position.y,n.camera.position.z,0,1,0);const t=new _i,i=new O(1,1,1),r=new et;for(let o=0;o<Gs;o++){Ea[o].add(Qf[o]),mn[o]=Math.min(mn[o]+.01,1),Vs[o]-=.1,Vs[o]<=0&&(Vs[o]=7,Ea[o].set(.5*(Math.random()-.5),.5,.5*(Math.random()-.5)),mn[o]=.2);const a=i.set(mn[o],mn[o],mn[o]);r.compose(Ea[o],t,a),F.bubbleParticles.setMatrixAt(o,r)}F.bubbleParticles.instanceMatrix.needsUpdate=!0,F.brewWitch.stir&&(F.spoon.position.x=.125*Math.sin(4*e),F.spoon.position.z=.125*Math.cos(4*e)),F.brewWitch.bounce?(F.brewWitch.scale.x=1+.03125*Math.sin(12*e),F.brewWitch.scale.y=1+-.03125*Math.sin(12*e),F.brewWitch.scale.z=1+.03125*Math.sin(12*e)):(F.brewWitch.scale.x=1,F.brewWitch.scale.y=1,F.brewWitch.scale.z=1),wi.spin>0&&(wi.spin-=.05,wi.rotateOnAxis(ct.DEFAULT_UP,-.1),wi.spin<0&&(wi.spin=0)),F.sellingSkeleton.scale.x=1+.03125*Math.sin(12*e),F.sellingSkeleton.scale.y=1+-.03125*Math.sin(12*e),F.sellingSkeleton.scale.z=1+.03125*Math.sin(12*e),F.firefliesUniforms.uTime.value=e,F.cauldronUniforms.uTime.value=e,F.customers.forEach(o=>{o.update(e)}),Ri.position.y=.625*Math.sin(.5*e)+1.3,$i.position.y=.625*Math.sin(.5*e)+1.3,fu.intersectObjects(n.entities.filter(o=>o.visible)).length>0?document.body.style.cursor="pointer":document.body.style.cursor="default"}function si(n,e){return n==e?!0:e.parent!=null?si(n,e.parent):!1}function Hb(){let n=fu.intersectObjects(ie.entities.filter(e=>e.visible));n.length>0&&n.every(e=>{switch(F.currentRoom){case Fr:if(si(F.chest,e.object)||si(F.shopWitch,e.object))return F.isSellingPotions||(F.chest.isStocking?zs(ie,F):Mb(ie,F)),!1;if(si(F.coin,e.object)){let t=[{x:-12,y:1.1,z:1},{x:-12,y:2,z:2},{x:-16,y:2,z:2},{x:-16,y:1,z:0}];return Xe.to(F.coin.position,{duration:3.5,motionPath:t,onComplete:()=>{F.soundEffects["audio/handleCoins.ogg"].play(),Gb(F.chest,()=>{F.coin.scale.set(0,0,0),F.coin.position.set(-12,1.1,0),Xe.to(F.coin.scale,{ease:"elastic",duration:.7,x:1,y:1,z:1})})}}),setTimeout(()=>{Vb(F.chest)},700),!1}if(F.displayedPotions.forEach(t=>{if(si(t,e.object))if(F.isSellingPotions)if(F.customers[0].isMatchingPotion(t.potionData)){const i=F.customers[0];i.hideDesire();const r=[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}];Xe.to(t.position,{duration:2,motionPath:r,onComplete:()=>{_u(F.potionStocked,"potion-stocked",t.potionData.name),mu(),i.acceptPotion(),F.soundEffects["audio/cash-register.ogg"].play(),vu()}})}else $f(),Xe.fromTo(t.rotation,{duration:.1,z:.2},{duration:.1,z:0}),F.customers[0].rejectPotion(),F.customers[0].rejectCount>=3&&(F.customers[0].showSad(),vu());else $f(),Xe.fromTo(t.rotation,{duration:.1,z:.2},{duration:.1,z:0})}),si(F.pumpkin2,e.object))return F.pumpkin2.isMoving?void 0:(F.pumpkin2.isMoving=!0,Xe.to(F.pumpkin2.position,{duration:2,y:3,onComplete:()=>{setTimeout(()=>{F.soundEffects["audio/impactWood_heavy_002.ogg"].play()},400),setTimeout(()=>{F.soundEffects["audio/impactSoft_medium_002.ogg"].play()},800),Xe.to(F.pumpkin2.position,{duration:1,y:1,ease:"bounce",onComplete:()=>{F.pumpkin2.isMoving=!1}})}}),!1);break;case mi:if(si(wi,e.object))return On["audio/drawKnife2.ogg"].play(),wi.spin+=Math.PI,!1;if(si(Dn,e.object)){let t=[{x:4.6,y:1.9,z:0},{x:4.6,y:1.9,z:-3.9}];return Xe.to(Dn.position,{duration:6,motionPath:t,onComplete:()=>{}}),!1}if(si(F.brewWitch,e.object)||si(F.cauldron,e.object))return F.cauldron.isBrewing||(F.cauldron.brewMenuOpen?Bo(ie,F):yb(ie,F)),!1;if(si(Ri,e.object))return Ri.isLit=!0,$i.visible=!0,Ri.visible=!1,!1;if(si($i,e.object))return Ri.isLit=!1,$i.visible=!1,Ri.visible=!0,!1;break;case cr:si(F.sign,e.object)&&ks(ie,F);break}if(si(Ei,e.object))return F.currentRoom==mi?ks(ie,F):F.currentRoom==Fr&&lu(ie,F),!1;if(si(Ai,e.object))return F.currentRoom==mi?lu(ie,F):F.currentRoom==cr&&ks(ie,F),!1})}function vu(){const n=F.customers.shift(),e=[{x:-11,y:.1,z:3},{x:-8,y:.1,z:3},{x:-4,y:.1,z:10}];setTimeout(()=>{F.soundEffects["audio/store-entrance-bell.ogg"].play()},4e3),Xe.to(n.object3d.position,{duration:8,motionPath:e,onComplete:()=>{ie.scene.remove(n.object3d)}}),Xe.to(n.object3d.rotation,{duration:1,y:Math.PI,onComplete:()=>{},onUpdate:()=>{n.requestBillboard.lookAt(ie.camera.position)}}),F.customers.forEach(t=>{Xe.to(t.object3d.position,{duration:1.5,z:t.object3d.position.z-1})}),F.customers.length==0?F.isSellingPotions=!1:(F.customers[0].showDesire(),F.potionStocked.length<1&&(F.customers[0].rejectPotion(3),F.customers[0].showSad(),vu()))}function $f(){setTimeout(()=>{let e=Math.floor(5*Math.random());F.soundEffects[`audio/impactGlass_medium_00${e}.ogg`].play()},50);let n=Math.floor(5*Math.random());F.soundEffects[`audio/impactGlass_medium_00${n}.ogg`].play()}function Vb(n){let e=n.getObjectByName("chest_large_lid");n.isOpen||n.isMoving||(On["audio/chest_open_creak.ogg"].play(),n.isMoving=!0,Xe.to(e.rotation,{duration:2.5,x:-(Math.PI/2)+Math.PI/8,ease:"elastic",onComplete:()=>{n.isOpen=!0,n.isMoving=!1}}))}function Gb(n,e=()=>{}){let t=n.getObjectByName("chest_large_lid");n.isOpen&&(n.isMoving||(On["audio/chest_close_creak.ogg"].play(),n.isMoving=!0,Xe.to(t.rotation,{duration:1.5,x:0,ease:"bounce",onComplete:()=>{n.isOpen=!1,n.isMoving=!1,e()}})))}function yu(n){let e=n.getObjectByName("wall_doorway_door");n.isOpen||n.isMoving||(On["audio/doorOpen_1.ogg"].play(),n.isMoving=!0,Xe.to(e.rotation,{duration:2.5,y:-Math.PI/2,ease:"elastic",onComplete:()=>{n.isOpen=!0,n.isMoving=!1}}))}function xu(n){let e=n.getObjectByName("wall_doorway_door");n.isOpen&&(n.isMoving||(On["audio/doorClose_4.ogg"].play(),n.isMoving=!0,Xe.to(e.rotation,{duration:2.5,y:0,ease:"elastic",onComplete:()=>{n.isOpen=!1,n.isMoving=!1}})))}function Wb(){Bo(ie,F),yu(Ei);const n=F.cameraPositions[0];Xe.to(ie.camera.position,{duration:2.5,x:n.camera.x,y:n.camera.y,z:n.camera.z,onComplete:()=>{xu(Ei)}}),Xe.to(ie.lookAtFocus,{duration:2.5,x:n.focus.x,y:n.focus.y,z:n.focus.z}),F.currentRoom=Fr}function Xb(){let n=Ei;F.currentRoom==cr&&(n=Ai),yu(n);const e=F.cameraPositions[1];Xe.to(ie.camera.position,{duration:2.5,x:e.camera.x,y:e.camera.y,z:e.camera.z,onComplete:()=>{xu(n)}}),Xe.to(ie.lookAtFocus,{duration:2.5,x:e.focus.x,y:e.focus.y,z:e.focus.z}),F.currentRoom=mi}function jb(){Bo(ie,F),yu(Ai);const n=F.cameraPositions[2];Xe.to(ie.camera.position,{duration:2.5,x:n.camera.x,y:n.camera.y,z:n.camera.z,onComplete:()=>{xu(Ai)}}),Xe.to(ie.lookAtFocus,{duration:2.5,x:n.focus.x,y:n.focus.y,z:n.focus.z}),F.currentRoom=cr}function ur(n){if(n!=F.currentRoom)switch(n){case Fr:Wb();break;case mi:Xb();break;case cr:jb();break}}function qb(){ie.keyboard.Digit1&&F.currentRoom==mi&&ur(Fr),ie.keyboard.Digit2&&F.currentRoom!=mi&&ur(mi),ie.keyboard.Digit3&&F.currentRoom==mi&&ur(cr),(ie.keyboard.Digit9||ie.keyboard.F9)&&(ie.orbitControls.enabled=!ie.orbitControls.enabled,ie.orbitControls.enabled||(console.log("position:",ie.camera.position),console.log("focus:",ie.orbitControls.target),ur(F.currentRoom))),ie.keyboard.Escape&&(Bo(ie,F),zs(ie,F),pb(),mb(),F.currentRoom=mi,ie.camera.position.copy(F.cameraPositions[3].camera),ie.lookAtFocus=F.cameraPositions[3].focus.clone())}/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yb=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Kb=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Zb=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Qb=/(^[#\.][a-z]|[a-y][a-z])/i,Jb=Math.PI/180,$b=180/Math.PI,Ws=Math.sin,Xs=Math.cos,Vi=Math.abs,Un=Math.sqrt,eS=Math.atan2,Mu=1e8,em=function(n){return typeof n=="string"},tm=function(n){return typeof n=="number"},tS=function(n){return typeof n>"u"},iS={},nS={},js=1e5,im=function(n){return Math.round((n+Mu)%1*js)/js||(n<0?0:1)},pt=function(n){return Math.round(n*js)/js||0},nm=function(n){return Math.round(n*1e10)/1e10||0},rm=function(n,e,t,i){var r=n[e],o=i===1?6:Tu(r,t,i);if((o||!i)&&o+t+2<r.length)return n.splice(e,0,r.slice(0,t+o+2)),r.splice(0,t+o),1},om=function(n,e,t){var i=n.length,r=~~(t*i);if(n[r]>e){for(;--r&&n[r]>e;);r<0&&(r=0)}else for(;n[++r]<e&&r<i;);return r<i?r:i-1},rS=function(n,e){var t=n.length;for(n.reverse();t--;)n[t].reversed||sS(n[t])},am=function(n,e){return e.totalLength=n.totalLength,n.samples?(e.samples=n.samples.slice(0),e.lookup=n.lookup.slice(0),e.minLength=n.minLength,e.resolution=n.resolution):n.totalPoints&&(e.totalPoints=n.totalPoints),e},oS=function(n,e){var t=n.length,i=n[t-1]||[],r=i.length;t&&e[0]===i[r-2]&&e[1]===i[r-1]&&(e=i.concat(e.slice(2)),t--),n[t]=e};function qs(n){n=em(n)&&Qb.test(n)&&document.querySelector(n)||n;var e=n.getAttribute?n:0,t;return e&&(n=n.getAttribute("d"))?(e._gsPath||(e._gsPath={}),t=e._gsPath[n],t&&!t._dirty?t:e._gsPath[n]=Ys(n)):n?em(n)?Ys(n):tm(n[0])?[n]:n:console.warn("Expecting a <path> element or an SVG path data string")}function aS(n){for(var e=[],t=0;t<n.length;t++)e[t]=am(n[t],n[t].slice(0));return am(n,e)}function sS(n){var e=0,t;for(n.reverse();e<n.length;e+=2)t=n[e],n[e]=n[e+1],n[e+1]=t;n.reversed=!n.reversed}var lS=function(n,e){var t=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(n.attributes),r=i.length,o;for(e=","+e+",";--r>-1;)o=i[r].nodeName.toLowerCase(),e.indexOf(","+o+",")<0&&t.setAttributeNS(null,o,i[r].nodeValue);return t},cS={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},uS=function(n,e){for(var t=e?e.split(","):[],i={},r=t.length;--r>-1;)i[t[r]]=+n.getAttribute(t[r])||0;return i};function hS(n,e){var t=n.tagName.toLowerCase(),i=.552284749831,r,o,a,s,c,u,p,l,h,d,f,_,g,m,x,y,T,P,S,E,C,M;return t==="path"||!n.getBBox?n:(u=lS(n,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=uS(n,cS[t]),t==="rect"?(s=M.rx,c=M.ry||s,o=M.x,a=M.y,d=M.width-s*2,f=M.height-c*2,s||c?(_=o+s*(1-i),g=o+s,m=g+d,x=m+s*i,y=m+s,T=a+c*(1-i),P=a+c,S=P+f,E=S+c*i,C=S+c,r="M"+y+","+P+" V"+S+" C"+[y,E,x,C,m,C,m-(m-g)/3,C,g+(m-g)/3,C,g,C,_,C,o,E,o,S,o,S-(S-P)/3,o,P+(S-P)/3,o,P,o,T,_,a,g,a,g+(m-g)/3,a,m-(m-g)/3,a,m,a,x,a,y,T,y,P].join(",")+"z"):r="M"+(o+d)+","+a+" v"+f+" h"+-d+" v"+-f+" h"+d+"z"):t==="circle"||t==="ellipse"?(t==="circle"?(s=c=M.r,l=s*i):(s=M.rx,c=M.ry,l=c*i),o=M.cx,a=M.cy,p=s*i,r="M"+(o+s)+","+a+" C"+[o+s,a+l,o+p,a+c,o,a+c,o-p,a+c,o-s,a+l,o-s,a,o-s,a-l,o-p,a-c,o,a-c,o+p,a-c,o+s,a-l,o+s,a].join(",")+"z"):t==="line"?r="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:(t==="polyline"||t==="polygon")&&(h=(n.getAttribute("points")+"").match(Kb)||[],o=h.shift(),a=h.shift(),r="M"+o+","+a+" L"+h.join(","),t==="polygon"&&(r+=","+o+","+a+"z")),u.setAttribute("d",hm(u._gsRawPath=Ys(r))),e&&n.parentNode&&(n.parentNode.insertBefore(u,n),n.parentNode.removeChild(n)),u)}function sm(n,e,t){var i=n[e],r=n[e+2],o=n[e+4],a;return i+=(r-i)*t,r+=(o-r)*t,i+=(r-i)*t,a=r+(o+(n[e+6]-o)*t-r)*t-i,i=n[e+1],r=n[e+3],o=n[e+5],i+=(r-i)*t,r+=(o-r)*t,i+=(r-i)*t,pt(eS(r+(o+(n[e+7]-o)*t-r)*t-i,a)*$b)}function lm(n,e,t){t=tS(t)?1:nm(t)||0,e=nm(e)||0;var i=Math.max(0,~~(Vi(t-e)-1e-8)),r=aS(n);if(e>t&&(e=1-e,t=1-t,rS(r),r.totalLength=0),e<0||t<0){var o=Math.abs(~~Math.min(e,t))+1;e+=o,t+=o}r.totalLength||Br(r);var a=t>1,s=cm(r,e,iS,!0),c=cm(r,t,nS),u=c.segment,p=s.segment,l=c.segIndex,h=s.segIndex,d=c.i,f=s.i,_=h===l,g=d===f&&_,m,x,y,T,P,S,E,C;if(a||i){for(m=l<h||_&&d<f||g&&c.t<s.t,rm(r,h,f,s.t)&&(h++,m||(l++,g?(c.t=(c.t-s.t)/(1-s.t),d=0):_&&(d-=f))),Math.abs(1-(t-e))<1e-5?l=h-1:!c.t&&l?l--:rm(r,l,d,c.t)&&m&&h++,s.t===1&&(h=(h+1)%r.length),P=[],S=r.length,E=1+S*i,C=h,E+=(S-h+l)%S,T=0;T<E;T++)oS(P,r[C++%S]);r=P}else if(y=c.t===1?6:Tu(u,d,c.t),e!==t)for(x=Tu(p,f,g?s.t/c.t:s.t),_&&(y+=x),u.splice(d+y+2),(x||f)&&p.splice(0,f+x),T=r.length;T--;)(T<h||T>l)&&r.splice(T,1);else u.angle=sm(u,d+y,0),d+=y,s=u[d],c=u[d+1],u.length=u.totalLength=0,u.totalPoints=r.totalPoints=8,u.push(s,c,s,c,s,c,s,c);return r.totalLength=0,r}function dS(n,e,t){e=e||0,n.samples||(n.samples=[],n.lookup=[]);var i=~~n.resolution||12,r=1/i,o=n.length,a=n[e],s=n[e+1],c=e?e/6*i:0,u=n.samples,p=n.lookup,l=(e?n.minLength:Mu)||Mu,h=u[c+t*i-1],d=e?u[c-1]:0,f,_,g,m,x,y,T,P,S,E,C,M,b,k,X,U,Y;for(u.length=p.length=0,_=e+2;_<o;_+=6){if(g=n[_+4]-a,m=n[_+2]-a,x=n[_]-a,P=n[_+5]-s,S=n[_+3]-s,E=n[_+1]-s,y=T=C=M=0,Vi(g)<.01&&Vi(P)<.01&&Vi(x)+Vi(E)<.01)n.length>8&&(n.splice(_,6),_-=6,o-=6);else for(f=1;f<=i;f++)k=r*f,b=1-k,y=T-(T=(k*k*g+3*b*(k*m+b*x))*k),C=M-(M=(k*k*P+3*b*(k*S+b*E))*k),U=Un(C*C+y*y),U<l&&(l=U),d+=U,u[c++]=d;a+=g,s+=P}if(h)for(h-=d;c<u.length;c++)u[c]+=h;if(u.length&&l){if(n.totalLength=Y=u[u.length-1]||0,n.minLength=l,Y/l<9999)for(U=X=0,f=0;f<Y;f+=l)p[U++]=u[X]<f?++X:X}else n.totalLength=u[0]=0;return e?d-u[e/2-1]:d}function Br(n,e){var t,i,r;for(r=t=i=0;r<n.length;r++)n[r].resolution=~~e||12,i+=n[r].length,t+=dS(n[r]);return n.totalPoints=i,n.totalLength=t,n}function Tu(n,e,t){if(t<=0||t>=1)return 0;var i=n[e],r=n[e+1],o=n[e+2],a=n[e+3],s=n[e+4],c=n[e+5],u=n[e+6],p=n[e+7],l=i+(o-i)*t,h=o+(s-o)*t,d=r+(a-r)*t,f=a+(c-a)*t,_=l+(h-l)*t,g=d+(f-d)*t,m=s+(u-s)*t,x=c+(p-c)*t;return h+=(m-h)*t,f+=(x-f)*t,n.splice(e+2,4,pt(l),pt(d),pt(_),pt(g),pt(_+(h-_)*t),pt(g+(f-g)*t),pt(h),pt(f),pt(m),pt(x)),n.samples&&n.samples.splice(e/6*n.resolution|0,0,0,0,0,0,0,0),6}function cm(n,e,t,i){t=t||{},n.totalLength||Br(n),(e<0||e>1)&&(e=im(e));var r=0,o=n[0],a,s,c,u,p,l,h;if(!e)h=l=r=0,o=n[0];else if(e===1)h=1,r=n.length-1,o=n[r],l=o.length-8;else{if(n.length>1){for(c=n.totalLength*e,p=l=0;(p+=n[l++].totalLength)<c;)r=l;o=n[r],u=p-o.totalLength,e=(c-u)/(p-u)||0}a=o.samples,s=o.resolution,c=o.totalLength*e,l=o.lookup.length?o.lookup[~~(c/o.minLength)]||0:om(a,c,e),u=l?a[l-1]:0,p=a[l],p<c&&(u=p,p=a[++l]),h=1/s*((c-u)/(p-u)+l%s),l=~~(l/s)*6,i&&h===1&&(l+6<o.length?(l+=6,h=0):r+1<n.length&&(l=h=0,o=n[++r]))}return t.t=h,t.i=l,t.path=n,t.segment=o,t.segIndex=r,t}function um(n,e,t,i){var r=n[0],o=i||{},a,s,c,u,p,l,h,d,f;if((e<0||e>1)&&(e=im(e)),r.lookup||Br(n),n.length>1){for(c=n.totalLength*e,p=l=0;(p+=n[l++].totalLength)<c;)r=n[l];u=p-r.totalLength,e=(c-u)/(p-u)||0}return a=r.samples,s=r.resolution,c=r.totalLength*e,l=r.lookup.length?r.lookup[e<1?~~(c/r.minLength):r.lookup.length-1]||0:om(a,c,e),u=l?a[l-1]:0,p=a[l],p<c&&(u=p,p=a[++l]),h=1/s*((c-u)/(p-u)+l%s)||0,f=1-h,l=~~(l/s)*6,d=r[l],o.x=pt((h*h*(r[l+6]-d)+3*f*(h*(r[l+4]-d)+f*(r[l+2]-d)))*h+d),o.y=pt((h*h*(r[l+7]-(d=r[l+1]))+3*f*(h*(r[l+5]-d)+f*(r[l+3]-d)))*h+d),t&&(o.angle=r.totalLength?sm(r,l,h>=1?1-1e-9:h||1e-9):r.angle||0),o}function Aa(n,e,t,i,r,o,a){for(var s=n.length,c,u,p,l,h;--s>-1;)for(c=n[s],u=c.length,p=0;p<u;p+=2)l=c[p],h=c[p+1],c[p]=l*e+h*i+o,c[p+1]=l*t+h*r+a;return n._dirty=1,n}function pS(n,e,t,i,r,o,a,s,c){if(!(n===s&&e===c)){t=Vi(t),i=Vi(i);var u=r%360*Jb,p=Xs(u),l=Ws(u),h=Math.PI,d=h*2,f=(n-s)/2,_=(e-c)/2,g=p*f+l*_,m=-l*f+p*_,x=g*g,y=m*m,T=x/(t*t)+y/(i*i);T>1&&(t=Un(T)*t,i=Un(T)*i);var P=t*t,S=i*i,E=(P*S-P*y-S*x)/(P*y+S*x);E<0&&(E=0);var C=(o===a?-1:1)*Un(E),M=C*(t*m/i),b=C*-(i*g/t),k=(n+s)/2,X=(e+c)/2,U=k+(p*M-l*b),Y=X+(l*M+p*b),q=(g-M)/t,te=(m-b)/i,ne=(-g-M)/t,Q=(-m-b)/i,se=q*q+te*te,de=(te<0?-1:1)*Math.acos(q/Un(se)),Pe=(q*Q-te*ne<0?-1:1)*Math.acos((q*ne+te*Q)/Un(se*(ne*ne+Q*Q)));isNaN(Pe)&&(Pe=h),!a&&Pe>0?Pe-=d:a&&Pe<0&&(Pe+=d),de%=d,Pe%=d;var Ve=Math.ceil(Vi(Pe)/(d/4)),Ue=[],ee=Pe/Ve,pe=4/3*Ws(ee/2)/(1+Xs(ee/2)),Re=p*t,ye=l*t,Je=l*-i,Ze=p*i,H;for(H=0;H<Ve;H++)r=de+H*ee,g=Xs(r),m=Ws(r),q=Xs(r+=ee),te=Ws(r),Ue.push(g-pe*m,m+pe*g,q+pe*te,te-pe*q,q,te);for(H=0;H<Ue.length;H+=2)g=Ue[H],m=Ue[H+1],Ue[H]=g*Re+m*Je+U,Ue[H+1]=g*ye+m*Ze+Y;return Ue[H-2]=s,Ue[H-1]=c,Ue}}function Ys(n){var e=(n+"").replace(Zb,function(M){var b=+M;return b<1e-4&&b>-1e-4?0:b}).match(Yb)||[],t=[],i=0,r=0,o=2/3,a=e.length,s=0,c="ERROR: malformed path: "+n,u,p,l,h,d,f,_,g,m,x,y,T,P,S,E,C=function(M,b,k,X){x=(k-M)/3,y=(X-b)/3,_.push(M+x,b+y,k-x,X-y,k,X)};if(!n||!isNaN(e[0])||isNaN(e[1]))return console.log(c),t;for(u=0;u<a;u++)if(P=d,isNaN(e[u])?(d=e[u].toUpperCase(),f=d!==e[u]):u--,l=+e[u+1],h=+e[u+2],f&&(l+=i,h+=r),u||(g=l,m=h),d==="M")_&&(_.length<8?t.length-=1:s+=_.length),i=g=l,r=m=h,_=[l,h],t.push(_),u+=2,d="L";else if(d==="C")_||(_=[0,0]),f||(i=r=0),_.push(l,h,i+e[u+3]*1,r+e[u+4]*1,i+=e[u+5]*1,r+=e[u+6]*1),u+=6;else if(d==="S")x=i,y=r,(P==="C"||P==="S")&&(x+=i-_[_.length-4],y+=r-_[_.length-3]),f||(i=r=0),_.push(x,y,l,h,i+=e[u+3]*1,r+=e[u+4]*1),u+=4;else if(d==="Q")x=i+(l-i)*o,y=r+(h-r)*o,f||(i=r=0),i+=e[u+3]*1,r+=e[u+4]*1,_.push(x,y,i+(l-i)*o,r+(h-r)*o,i,r),u+=4;else if(d==="T")x=i-_[_.length-4],y=r-_[_.length-3],_.push(i+x,r+y,l+(i+x*1.5-l)*o,h+(r+y*1.5-h)*o,i=l,r=h),u+=2;else if(d==="H")C(i,r,i=l,r),u+=1;else if(d==="V")C(i,r,i,r=l+(f?r-i:0)),u+=1;else if(d==="L"||d==="Z")d==="Z"&&(l=g,h=m,_.closed=!0),(d==="L"||Vi(i-l)>.5||Vi(r-h)>.5)&&(C(i,r,l,h),d==="L"&&(u+=2)),i=l,r=h;else if(d==="A"){if(S=e[u+4],E=e[u+5],x=e[u+6],y=e[u+7],p=7,S.length>1&&(S.length<3?(y=x,x=E,p--):(y=E,x=S.substr(2),p-=2),E=S.charAt(1),S=S.charAt(0)),T=pS(i,r,+e[u+1],+e[u+2],+e[u+3],+S,+E,(f?i:0)+x*1,(f?r:0)+y*1),u+=p,T)for(p=0;p<T.length;p++)_.push(T[p]);i=_[_.length-2],r=_[_.length-1]}else console.log(c);return u=_.length,u<6?(t.pop(),u=0):_[0]===_[u-2]&&_[1]===_[u-1]&&(_.closed=!0),t.totalPoints=s+u,t}function fS(n,e){e===void 0&&(e=1);for(var t=n[0],i=0,r=[t,i],o=2;o<n.length;o+=2)r.push(t,i,n[o],i=(n[o]-t)*e/2,t=n[o],-i);return r}function bu(n,e){Vi(n[0]-n[2])<1e-4&&Vi(n[1]-n[3])<1e-4&&(n=n.slice(2));var t=n.length-2,i=+n[0],r=+n[1],o=+n[2],a=+n[3],s=[i,r,i,r],c=o-i,u=a-r,p=Math.abs(n[t]-i)<.001&&Math.abs(n[t+1]-r)<.001,l,h,d,f,_,g,m,x,y,T,P,S,E,C,M;for(p&&(n.push(o,a),o=i,a=r,i=n[t-2],r=n[t-1],n.unshift(i,r),t+=4),e=e||e===0?+e:1,d=2;d<t;d+=2)l=i,h=r,i=o,r=a,o=+n[d+2],a=+n[d+3],!(i===o&&r===a)&&(f=c,_=u,c=o-i,u=a-r,g=Un(f*f+_*_),m=Un(c*c+u*u),x=Un(Math.pow(c/m+f/g,2)+Math.pow(u/m+_/g,2)),y=(g+m)*e*.25/x,T=i-(i-l)*(g?y/g:0),P=i+(o-i)*(m?y/m:0),S=i-(T+((P-T)*(g*3/(g+m)+.5)/4||0)),E=r-(r-h)*(g?y/g:0),C=r+(a-r)*(m?y/m:0),M=r-(E+((C-E)*(g*3/(g+m)+.5)/4||0)),(i!==l||r!==h)&&s.push(pt(T+S),pt(E+M),pt(i),pt(r),pt(P+S),pt(C+M)));return i!==o||r!==a||s.length<4?s.push(pt(o),pt(a),pt(o),pt(a)):s.length-=2,s.length===2?s.push(i,r,i,r,i,r):p&&(s.splice(0,6),s.length=s.length-6),s}function hm(n){tm(n[0])&&(n=[n]);var e="",t=n.length,i,r,o,a;for(r=0;r<t;r++){for(a=n[r],e+="M"+pt(a[0])+","+pt(a[1])+" C",i=a.length,o=2;o<i;o++)e+=pt(a[o++])+","+pt(a[o++])+" "+pt(a[o++])+","+pt(a[o++])+" "+pt(a[o++])+","+pt(a[o])+" ";a.closed&&(e+="z")}return e}/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fn,kr,Su,Ks,Ra,Zs,Qs,Ca,en="transform",wu=en+"Origin",dm,pm=function(n){var e=n.ownerDocument||n;for(!(en in n.style)&&("msTransform"in n.style)&&(en="msTransform",wu=en+"Origin");e.parentNode&&(e=e.parentNode););if(kr=window,Qs=new Pa,e){Fn=e,Su=e.documentElement,Ks=e.body,Ca=Fn.createElementNS("http://www.w3.org/2000/svg","g"),Ca.style.transform="none";var t=e.createElement("div"),i=e.createElement("div"),r=e&&(e.body||e.firstElementChild);r&&r.appendChild&&(r.appendChild(t),t.appendChild(i),t.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),dm=i.offsetParent!==t,r.removeChild(t))}return e},mS=function(n){for(var e,t;n&&n!==Ks;)t=n._gsap,t&&t.uncache&&t.get(n,"x"),t&&!t.scaleX&&!t.scaleY&&t.renderTransform&&(t.scaleX=t.scaleY=1e-4,t.renderTransform(1,t),e?e.push(t):e=[t]),n=n.parentNode;return e},fm=[],mm=[],gS=function(){return kr.pageYOffset||Fn.scrollTop||Su.scrollTop||Ks.scrollTop||0},_S=function(){return kr.pageXOffset||Fn.scrollLeft||Su.scrollLeft||Ks.scrollLeft||0},Eu=function(n){return n.ownerSVGElement||((n.tagName+"").toLowerCase()==="svg"?n:null)},vS=function n(e){if(kr.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return n(e)},Au=function n(e,t){if(e.parentNode&&(Fn||pm(e))){var i=Eu(e),r=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",o=i?t?"rect":"g":"div",a=t!==2?0:100,s=t===3?100:0,c="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",u=Fn.createElementNS?Fn.createElementNS(r.replace(/^https/,"http"),o):Fn.createElement(o);return t&&(i?(Zs||(Zs=n(e)),u.setAttribute("width",.01),u.setAttribute("height",.01),u.setAttribute("transform","translate("+a+","+s+")"),Zs.appendChild(u)):(Ra||(Ra=n(e),Ra.style.cssText=c),u.style.cssText=c+"width:0.1px;height:0.1px;top:"+s+"px;left:"+a+"px",Ra.appendChild(u))),u}throw"Need document and parent."},yS=function(n){for(var e=new Pa,t=0;t<n.numberOfItems;t++)e.multiply(n.getItem(t).matrix);return e},xS=function(n){var e=n.getCTM(),t;return e||(t=n.style[en],n.style[en]="none",n.appendChild(Ca),e=Ca.getCTM(),n.removeChild(Ca),t?n.style[en]=t:n.style.removeProperty(en.replace(/([A-Z])/g,"-$1").toLowerCase())),e||Qs.clone()},MS=function(n,e){var t=Eu(n),i=n===t,r=t?fm:mm,o=n.parentNode,a,s,c,u,p,l;if(n===kr)return n;if(r.length||r.push(Au(n,1),Au(n,2),Au(n,3)),a=t?Zs:Ra,t)i?(c=xS(n),u=-c.e/c.a,p=-c.f/c.d,s=Qs):n.getBBox?(c=n.getBBox(),s=n.transform?n.transform.baseVal:{},s=s.numberOfItems?s.numberOfItems>1?yS(s):s.getItem(0).matrix:Qs,u=s.a*c.x+s.c*c.y,p=s.b*c.x+s.d*c.y):(s=new Pa,u=p=0),e&&n.tagName.toLowerCase()==="g"&&(u=p=0),(i?t:o).appendChild(a),a.setAttribute("transform","matrix("+s.a+","+s.b+","+s.c+","+s.d+","+(s.e+u)+","+(s.f+p)+")");else{if(u=p=0,dm)for(s=n.offsetParent,c=n;c&&(c=c.parentNode)&&c!==s&&c.parentNode;)(kr.getComputedStyle(c)[en]+"").length>4&&(u=c.offsetLeft,p=c.offsetTop,c=0);if(l=kr.getComputedStyle(n),l.position!=="absolute"&&l.position!=="fixed")for(s=n.offsetParent;o&&o!==s;)u+=o.scrollLeft||0,p+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=n.offsetTop-p+"px",c.left=n.offsetLeft-u+"px",c[en]=l[en],c[wu]=l[wu],c.position=l.position==="fixed"?"fixed":"absolute",n.parentNode.appendChild(a)}return a},Ru=function(n,e,t,i,r,o,a){return n.a=e,n.b=t,n.c=i,n.d=r,n.e=o,n.f=a,n},Pa=function(){function n(t,i,r,o,a,s){t===void 0&&(t=1),i===void 0&&(i=0),r===void 0&&(r=0),o===void 0&&(o=1),a===void 0&&(a=0),s===void 0&&(s=0),Ru(this,t,i,r,o,a,s)}var e=n.prototype;return e.inverse=function(){var t=this.a,i=this.b,r=this.c,o=this.d,a=this.e,s=this.f,c=t*o-i*r||1e-10;return Ru(this,o/c,-i/c,-r/c,t/c,(r*s-o*a)/c,-(t*s-i*a)/c)},e.multiply=function(t){var i=this.a,r=this.b,o=this.c,a=this.d,s=this.e,c=this.f,u=t.a,p=t.c,l=t.b,h=t.d,d=t.e,f=t.f;return Ru(this,u*i+l*o,u*r+l*a,p*i+h*o,p*r+h*a,s+d*i+f*o,c+d*r+f*a)},e.clone=function(){return new n(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var i=this.a,r=this.b,o=this.c,a=this.d,s=this.e,c=this.f;return i===t.a&&r===t.b&&o===t.c&&a===t.d&&s===t.e&&c===t.f},e.apply=function(t,i){i===void 0&&(i={});var r=t.x,o=t.y,a=this.a,s=this.b,c=this.c,u=this.d,p=this.e,l=this.f;return i.x=r*a+o*c+p||0,i.y=r*s+o*u+l||0,i},n}();function ko(n,e,t,i){if(!n||!n.parentNode||(Fn||pm(n)).documentElement===n)return new Pa;var r=mS(n),o=Eu(n),a=o?fm:mm,s=MS(n,t),c=a[0].getBoundingClientRect(),u=a[1].getBoundingClientRect(),p=a[2].getBoundingClientRect(),l=s.parentNode,h=!i&&vS(n),d=new Pa((u.left-c.left)/100,(u.top-c.top)/100,(p.left-c.left)/100,(p.top-c.top)/100,c.left+(h?0:_S()),c.top+(h?0:gS()));if(l.removeChild(s),r)for(c=r.length;c--;)u=r[c],u.scaleX=u.scaleY=0,u.renderTransform(1,u);return e?d.inverse():d}/*!
 * MotionPathPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var TS="x,translateX,left,marginLeft,xPercent".split(","),bS="y,translateY,top,marginTop,yPercent".split(","),SS=Math.PI/180,Gi,gm,zo,Cu,Pu,_m,wS=function(){return Gi||typeof window<"u"&&(Gi=window.gsap)&&Gi.registerPlugin&&Gi},Ia=function(n,e,t,i){for(var r=e.length,o=i===2?0:i,a=0;a<r;a++)n[o]=parseFloat(e[a][t]),i===2&&(n[o+1]=0),o+=2;return n},Ho=function(n,e,t){return parseFloat(n._gsap.get(n,e,t||"px"))||0},vm=function(n){var e=n[0],t=n[1],i;for(i=2;i<n.length;i+=2)e=n[i]+=e,t=n[i+1]+=t},ym=function(n,e,t,i,r,o,a,s,c){if(a.type==="cubic")e=[e];else{a.fromCurrent!==!1&&e.unshift(Ho(t,i,s),r?Ho(t,r,c):0),a.relative&&vm(e);var u=r?bu:fS;e=[u(e,a.curviness)]}return e=o(Mm(e,t,a)),Js(n,t,i,e,"x",s),r&&Js(n,t,r,e,"y",c),Br(e,a.resolution||(a.curviness===0?20:12))},ES=function(n){return n},AS=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,xm=function(n,e,t){var i=ko(n),r=0,o=0,a;return(n.tagName+"").toLowerCase()==="svg"?(a=n.viewBox.baseVal,a.width||(a={width:+n.getAttribute("width"),height:+n.getAttribute("height")})):a=e&&n.getBBox&&n.getBBox(),e&&e!=="auto"&&(r=e.push?e[0]*(a?a.width:n.offsetWidth||0):e.x,o=e.push?e[1]*(a?a.height:n.offsetHeight||0):e.y),t.apply(r||o?i.apply({x:r,y:o}):{x:i.e,y:i.f})},Iu=function(n,e,t,i){var r=ko(n.parentNode,!0,!0),o=r.clone().multiply(ko(e)),a=xm(n,t,r),s=xm(e,i,r),c=s.x,u=s.y,p;return o.e=o.f=0,i==="auto"&&e.getTotalLength&&e.tagName.toLowerCase()==="path"&&(p=e.getAttribute("d").match(AS)||[],p=o.apply({x:+p[0],y:+p[1]}),c+=p.x,u+=p.y),p&&(p=o.apply(e.getBBox()),c-=p.x,u-=p.y),o.e=c-a.x,o.f=u-a.y,o},Mm=function(n,e,t){var i=t.align,r=t.matrix,o=t.offsetX,a=t.offsetY,s=t.alignOrigin,c=n[0][0],u=n[0][1],p=Ho(e,"x"),l=Ho(e,"y"),h,d,f;return!n||!n.length?qs("M0,0L0,0"):(i&&(i==="self"||(h=Cu(i)[0]||e)===e?Aa(n,1,0,0,1,p-c,l-u):(s&&s[2]!==!1?Gi.set(e,{transformOrigin:s[0]*100+"% "+s[1]*100+"%"}):s=[Ho(e,"xPercent")/-100,Ho(e,"yPercent")/-100],d=Iu(e,h,s,"auto"),f=d.apply({x:c,y:u}),Aa(n,d.a,d.b,d.c,d.d,p+d.e-(f.x-d.e),l+d.f-(f.y-d.f)))),r?Aa(n,r.a,r.b,r.c,r.d,r.e,r.f):(o||a)&&Aa(n,1,0,0,1,o||0,a||0),n)},Js=function(n,e,t,i,r,o){var a=e._gsap,s=a.harness,c=s&&s.aliases&&s.aliases[t],u=c&&c.indexOf(",")<0?c:t,p=n._pt=new gm(n._pt,e,u,0,0,ES,0,a.set(e,u,n));p.u=zo(a.get(e,u,o))||0,p.path=i,p.pp=r,n._props.push(u)},RS=function(n,e){return function(t){return n||e!==1?lm(t,n,e):t}},Tm={version:"3.12.5",name:"motionPath",register:function(n,e,t){Gi=n,zo=Gi.utils.getUnit,Cu=Gi.utils.toArray,Pu=Gi.core.getStyleSaver,_m=Gi.core.reverting||function(){},gm=t},init:function(n,e,t){if(!Gi)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof e=="object"&&!e.style)||!e.path)&&(e={path:e});var i=[],r=e,o=r.path,a=r.autoRotate,s=r.unitX,c=r.unitY,u=r.x,p=r.y,l=o[0],h=RS(e.start,"end"in e?e.end:1),d,f;if(this.rawPaths=i,this.target=n,this.tween=t,this.styles=Pu&&Pu(n,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=n._gsap.set(n,this.rProp,this),this.ru=zo(n._gsap.get(n,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof l!="number"){for(f in l)!u&&~TS.indexOf(f)?u=f:!p&&~bS.indexOf(f)&&(p=f);u&&p?i.push(ym(this,Ia(Ia([],o,u,0),o,p,1),n,u,p,h,e,s||zo(o[0][u]),c||zo(o[0][p]))):u=p=0;for(f in l)f!==u&&f!==p&&i.push(ym(this,Ia([],o,f,2),n,f,0,h,e,zo(o[0][f])))}else d=h(Mm(qs(e.path),n,e)),Br(d,e.resolution),i.push(d),Js(this,n,e.x||"x",d,"x",e.unitX||"px"),Js(this,n,e.y||"y",d,"y",e.unitY||"px")},render:function(n,e){var t=e.rawPaths,i=t.length,r=e._pt;if(e.tween._time||!_m()){for(n>1?n=1:n<0&&(n=0);i--;)um(t[i],n,!i&&e.rotate,t[i]);for(;r;)r.set(r.t,r.p,r.path[r.pp]+r.u,r.d,n),r=r._next;e.rotate&&e.rSet(e.target,e.rProp,t[0].angle*(e.radians?SS:1)+e.rOffset+e.ru,e,n)}else e.styles.revert()},getLength:function(n){return Br(qs(n)).totalLength},sliceRawPath:lm,getRawPath:qs,pointsToSegment:bu,stringToRawPath:Ys,rawPathToString:hm,transformRawPath:Aa,getGlobalMatrix:ko,getPositionOnPath:um,cacheRawPathMeasurements:Br,convertToPath:function(n,e){return Cu(n).map(function(t){return hS(t,e!==!1)})},convertCoordinates:function(n,e,t){var i=ko(e,!0,!0).multiply(ko(n));return t?i.apply(t):i},getAlignMatrix:Iu,getRelativePosition:function(n,e,t,i){var r=Iu(n,e,t,i);return{x:r.e,y:r.f}},arrayToRawPath:function(n,e){e=e||{};var t=Ia(Ia([],n,e.x||"x",0),n,e.y||"y",1);return e.relative&&vm(t),[e.type==="cubic"?t:bu(t,e.curviness)]}};wS()&&Gi.registerPlugin(Tm),Xe.registerPlugin(Tm),nb.autoUnlock=!0;const Le={};Le.entities=[],Le.loadingManager=new sp,Le.gltfLoader=new aM(Le.loadingManager),Le.textureLoader=new cp(Le.loadingManager),Le.exrLoader=new oM(Le.loadingManager),Le.rgbeLoader=new HM(Le.loadingManager),Le.clock=new I1,Le.camera=new ri(60,1,.1,256),Le.scene=new r1,Le.mousePosition=new je(0,0),Le.keyboard={},Le.lookAtFocus=new O(0,0,0);function CS(){Le.renderer=new n1({canvas:Le.canvas,antialias:!0}),Le.renderer.setSize(Le.canvas.offsetWidth,Le.canvas.offsetHeight),Le.renderer.shadowMap.enabled=!0,Le.renderer.shadowMap.type=zu,Le.orbitControls=new G1(Le.camera,Le.renderer.domElement),Le.orbitControls.enabled=!1,bm(),kb(Le).then(()=>{document.getElementById("loading").style.display="none",Le.clock.start(),Sm()})}function bm(){Le.renderer.setSize(window.innerWidth,window.innerHeight,!0),Le.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),Le.camera.aspect=Le.canvas.offsetWidth/Le.canvas.offsetHeight,Le.camera.updateProjectionMatrix()}function PS(){zb(Le),Le.orbitControls.update(),Le.orbitControls.enabled||Le.camera.lookAt(Le.lookAtFocus),Le.renderer.render(Le.scene,Le.camera)}function Sm(){PS(),window.requestAnimationFrame(Sm)}async function IS(n){Le.canvas=n,document.addEventListener("DOMContentLoaded",CS),window.addEventListener("resize",bm),Le.canvas.addEventListener("mousemove",e=>{Le.mousePosition.x=2*(e.clientX/Le.canvas.offsetWidth-.5),Le.mousePosition.y=-2*(e.clientY/Le.canvas.offsetHeight-.5)}),Le.canvas.addEventListener("touchmove",e=>{e.touches.length==1&&(Le.mousePosition.x=2*(e.touches[0].clientX/Le.canvas.offsetWidth-.5),Le.mousePosition.y=-2*(e.touches[0].clientY/Le.canvas.offsetHeight-.5))}),Le.canvas.addEventListener("touchstart",e=>{e.touches.length==1&&(Le.mousePosition.x=2*(e.touches[0].clientX/Le.canvas.offsetWidth-.5),Le.mousePosition.y=-2*(e.touches[0].clientY/Le.canvas.offsetHeight-.5))}),Le.canvas.addEventListener("mousedown",e=>{Le.mousePosition.x=2*(e.clientX/Le.canvas.offsetWidth-.5),Le.mousePosition.y=-2*(e.clientY/Le.canvas.offsetHeight-.5)}),Le.canvas.addEventListener("click",e=>{Hb()}),window.addEventListener("keydown",e=>{const t=Le.keyboard[e.code];Le.keyboard[e.code]=!0,t||qb()}),window.addEventListener("keyup",e=>{Le.keyboard[e.code]=!1})}const LS=document.querySelector("canvas.webgl");IS(LS);
