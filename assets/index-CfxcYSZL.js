(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const yl="164",qr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ug=0,ih=1,hg=2,nh=1,rh=2,bn=3,Tn=0,fi=1,Jt=2,Yi=0,Kr=1,Jo=2,oh=3,ah=4,dg=5,gr=100,pg=101,fg=102,mg=103,gg=104,_g=200,vg=201,yg=202,xg=203,xl=204,Ml=205,Mg=206,Sg=207,bg=208,Tg=209,wg=210,Eg=211,Ag=212,Rg=213,Cg=214,Pg=0,Ig=1,Lg=2,Xa=3,Dg=4,Ug=5,Ng=6,Og=7,sh=0,Bg=1,kg=2,Gn=0,lh=1,ch=2,uh=3,hh=4,Fg=5,dh=6,ph=7,fh="attached",zg="detached",mh=300,Zr=301,$r=302,qa=303,Sl=304,Ya=306,Qr=1e3,mi=1001,Ka=1002,li=1003,gh=1004,ea=1005,Ut=1006,Za=1007,an=1008,Wn=1009,Hg=1010,Vg=1011,_h=1012,vh=1013,Jr=1014,ei=1015,Nt=1016,yh=1017,xh=1018,ta=1020,Gg=35902,Wg=1021,jg=1022,ki=1023,Xg=1024,qg=1025,eo=1026,ia=1027,bl=1028,Mh=1029,Yg=1030,Sh=1031,bh=1033,Tl=33776,wl=33777,El=33778,Al=33779,Th=35840,wh=35841,Eh=35842,Ah=35843,Rh=36196,Ch=37492,Ph=37496,Ih=37808,Lh=37809,Dh=37810,Uh=37811,Nh=37812,Oh=37813,Bh=37814,kh=37815,Fh=37816,zh=37817,Hh=37818,Vh=37819,Gh=37820,Wh=37821,Rl=36492,jh=36494,Xh=36495,Kg=36283,qh=36284,Yh=36285,Kh=36286,na=2300,to=2301,Cl=2302,Zh=2400,$h=2401,Qh=2402,Zg=2500,$g=0,Jh=1,Pl=2,Qg=3200,ed=3201,td=0,Jg=1,wn="",ti="srgb",Ft="srgb-linear",Il="display-p3",$a="display-p3-linear",Qa="linear",bt="srgb",Ja="rec709",es="p3",io=7680,id=519,e_=512,t_=513,i_=514,nd=515,n_=516,r_=517,o_=518,a_=519,Ll=35044,s_=35048,rd="300 es",En=2e3,ts=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let od=1234567;const ra=Math.PI/180,no=180/Math.PI;function Ki(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ii[n&255]+ii[n>>8&255]+ii[n>>16&255]+ii[n>>24&255]+"-"+ii[e&255]+ii[e>>8&255]+"-"+ii[e>>16&15|64]+ii[e>>24&255]+"-"+ii[t&63|128]+ii[t>>8&255]+"-"+ii[t>>16&255]+ii[t>>24&255]+ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function Dl(n,e){return(n%e+e)%e}function l_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function c_(n,e,t){return n!==e?(t-n)/(e-n):0}function oa(n,e,t){return(1-t)*n+t*e}function u_(n,e,t,i){return oa(n,e,1-Math.exp(-t*i))}function h_(n,e=1){return e-Math.abs(Dl(n,e*2)-e)}function d_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function p_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function f_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function m_(n,e){return n+Math.random()*(e-n)}function g_(n){return n*(.5-Math.random())}function __(n){n!==void 0&&(od=n);let e=od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v_(n){return n*ra}function y_(n){return n*no}function x_(n){return(n&n-1)===0&&n!==0}function M_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function S_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function b_(n,e,t,i,r){const o=Math.cos,a=Math.sin,s=o(t/2),c=a(t/2),u=o((e+i)/2),p=a((e+i)/2),l=o((e-i)/2),h=a((e-i)/2),d=o((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":n.set(s*p,c*l,c*h,s*u);break;case"YZY":n.set(c*h,s*p,c*l,s*u);break;case"ZXZ":n.set(c*l,c*h,s*p,s*u);break;case"XZX":n.set(s*p,c*m,c*d,s*u);break;case"YXY":n.set(c*d,s*p,c*m,s*u);break;case"ZYZ":n.set(c*m,c*d,s*p,s*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ad={DEG2RAD:ra,RAD2DEG:no,generateUUID:Ki,clamp:jt,euclideanModulo:Dl,mapLinear:l_,inverseLerp:c_,lerp:oa,damp:u_,pingpong:h_,smoothstep:d_,smootherstep:p_,randInt:f_,randFloat:m_,randFloatSpread:g_,seededRandom:__,degToRad:v_,radToDeg:y_,isPowerOfTwo:x_,ceilPowerOfTwo:M_,floorPowerOfTwo:S_,setQuaternionFromProperEuler:b_,normalize:_t,denormalize:Zi};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,r,o,a,s,c,u){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,c,u)}set(e,t,i,r,o,a,s,c,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=s,p[3]=t,p[4]=o,p[5]=c,p[6]=i,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[3],c=i[6],u=i[1],p=i[4],l=i[7],h=i[2],d=i[5],m=i[8],_=r[0],g=r[3],f=r[6],x=r[1],y=r[4],M=r[7],P=r[2],S=r[5],E=r[8];return o[0]=a*_+s*x+c*P,o[3]=a*g+s*y+c*S,o[6]=a*f+s*M+c*E,o[1]=u*_+p*x+l*P,o[4]=u*g+p*y+l*S,o[7]=u*f+p*M+l*E,o[2]=h*_+d*x+m*P,o[5]=h*g+d*y+m*S,o[8]=h*f+d*M+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],u=e[7],p=e[8];return t*a*p-t*s*u-i*o*p+i*s*c+r*o*u-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],u=e[7],p=e[8],l=p*a-s*u,h=s*c-p*o,d=u*o-a*c,m=t*l+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=l*_,e[1]=(r*u-p*i)*_,e[2]=(s*i-r*a)*_,e[3]=h*_,e[4]=(p*t-r*c)*_,e[5]=(r*o-s*t)*_,e[6]=d*_,e[7]=(i*c-u*t)*_,e[8]=(a*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,s){const c=Math.cos(o),u=Math.sin(o);return this.set(i*c,i*u,-i*(c*a+u*s)+a+e,-r*u,r*c,-r*(-u*a+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ul=new lt;function sd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function T_(){const n=aa("canvas");return n.style.display="block",n}const ld={};function cd(n){n in ld||(ld[n]=!0,console.warn(n))}const ud=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hd=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[Ft]:{transfer:Qa,primaries:Ja,toReference:n=>n,fromReference:n=>n},[ti]:{transfer:bt,primaries:Ja,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$a]:{transfer:Qa,primaries:es,toReference:n=>n.applyMatrix3(hd),fromReference:n=>n.applyMatrix3(ud)},[Il]:{transfer:bt,primaries:es,toReference:n=>n.convertSRGBToLinear().applyMatrix3(hd),fromReference:n=>n.applyMatrix3(ud).convertLinearToSRGB()}},w_=new Set([Ft,$a]),pt={enabled:!0,_workingColorSpace:Ft,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!w_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=is[e].toReference,r=is[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return is[n].primaries},getTransfer:function(n){return n===wn?Qa:is[n].transfer}};function ro(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let oo;class E_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oo===void 0&&(oo=aa("canvas")),oo.width=e.width,oo.height=e.height;const i=oo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=oo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=aa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=ro(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ro(t[i]/255)*255):t[i]=ro(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(Ol(r[a].image)):o.push(Ol(r[a]))}else o=Ol(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?E_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class Wt extends _r{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=mi,r=mi,o=Ut,a=an,s=ki,c=Wn,u=Wt.DEFAULT_ANISOTROPY,p=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Ki(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=mh,Wt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const a=e.elements,s=a[0],c=a[4],u=a[8],p=a[1],l=a[5],h=a[9],d=a[2],m=a[6],_=a[10];if(Math.abs(c-p)<.01&&Math.abs(u-d)<.01&&Math.abs(h-m)<.01){if(Math.abs(c+p)<.1&&Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(s+l+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(s+1)/2,x=(l+1)/2,y=(_+1)/2,M=(c+p)/4,P=(u+d)/4,S=(h+m)/4;return f>x&&f>y?f<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(f),r=M/i,o=P/i):x>y?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=M/r,o=S/r):y<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(y),i=P/o,r=S/o),this.set(i,r,o,t),this}let g=Math.sqrt((m-h)*(m-h)+(u-d)*(u-d)+(p-c)*(p-c));return Math.abs(g)<.001&&(g=1),this.x=(m-h)/g,this.y=(u-d)/g,this.z=(p-c)/g,this.w=Math.acos((s+l+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends _r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xt extends C_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class P_ extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,s){let c=i[r+0],u=i[r+1],p=i[r+2],l=i[r+3];const h=o[a+0],d=o[a+1],m=o[a+2],_=o[a+3];if(s===0){e[t+0]=c,e[t+1]=u,e[t+2]=p,e[t+3]=l;return}if(s===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(l!==_||c!==h||u!==d||p!==m){let g=1-s;const f=c*h+u*d+p*m+l*_,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const P=Math.sqrt(y),S=Math.atan2(P,f*x);g=Math.sin(g*S)/P,s=Math.sin(s*S)/P}const M=s*x;if(c=c*g+h*M,u=u*g+d*M,p=p*g+m*M,l=l*g+_*M,g===1-s){const P=1/Math.sqrt(c*c+u*u+p*p+l*l);c*=P,u*=P,p*=P,l*=P}}e[t]=c,e[t+1]=u,e[t+2]=p,e[t+3]=l}static multiplyQuaternionsFlat(e,t,i,r,o,a){const s=i[r],c=i[r+1],u=i[r+2],p=i[r+3],l=o[a],h=o[a+1],d=o[a+2],m=o[a+3];return e[t]=s*m+p*l+c*d-u*h,e[t+1]=c*m+p*h+u*l-s*d,e[t+2]=u*m+p*d+s*h-c*l,e[t+3]=p*m-s*l-c*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,c=Math.sin,u=s(i/2),p=s(r/2),l=s(o/2),h=c(i/2),d=c(r/2),m=c(o/2);switch(a){case"XYZ":this._x=h*p*l+u*d*m,this._y=u*d*l-h*p*m,this._z=u*p*m+h*d*l,this._w=u*p*l-h*d*m;break;case"YXZ":this._x=h*p*l+u*d*m,this._y=u*d*l-h*p*m,this._z=u*p*m-h*d*l,this._w=u*p*l+h*d*m;break;case"ZXY":this._x=h*p*l-u*d*m,this._y=u*d*l+h*p*m,this._z=u*p*m+h*d*l,this._w=u*p*l-h*d*m;break;case"ZYX":this._x=h*p*l-u*d*m,this._y=u*d*l+h*p*m,this._z=u*p*m-h*d*l,this._w=u*p*l+h*d*m;break;case"YZX":this._x=h*p*l+u*d*m,this._y=u*d*l+h*p*m,this._z=u*p*m-h*d*l,this._w=u*p*l-h*d*m;break;case"XZY":this._x=h*p*l-u*d*m,this._y=u*d*l-h*p*m,this._z=u*p*m+h*d*l,this._w=u*p*l+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],s=t[5],c=t[9],u=t[2],p=t[6],l=t[10],h=i+s+l;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(p-c)*d,this._y=(o-u)*d,this._z=(a-r)*d}else if(i>s&&i>l){const d=2*Math.sqrt(1+i-s-l);this._w=(p-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(o+u)/d}else if(s>l){const d=2*Math.sqrt(1+s-i-l);this._w=(o-u)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+p)/d}else{const d=2*Math.sqrt(1+l-i-s);this._w=(a-r)/d,this._x=(o+u)/d,this._y=(c+p)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,a=e._w,s=t._x,c=t._y,u=t._z,p=t._w;return this._x=i*p+a*s+r*u-o*c,this._y=r*p+a*c+o*s-i*u,this._z=o*p+a*u+i*c-r*s,this._w=a*p-i*s-r*c-o*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const c=1-s*s;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*o+t*this._z,this.normalize(),this}const u=Math.sqrt(c),p=Math.atan2(u,s),l=Math.sin((1-t)*p)/u,h=Math.sin(t*p)/u;return this._w=a*l+this._w*h,this._x=i*l+this._x*h,this._y=r*l+this._y*h,this._z=o*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,c=e.w,u=2*(a*r-s*i),p=2*(s*t-o*r),l=2*(o*i-a*t);return this.x=t+c*u+a*l-s*p,this.y=i+c*p+s*u-o*l,this.z=r+c*l+o*p-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,a=t.x,s=t.y,c=t.z;return this.x=r*c-o*s,this.y=o*a-i*c,this.z=i*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new N,fd=new bi;class An{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,$i):$i.fromBufferAttribute(o,a),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ns.copy(i.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),rs.subVectors(this.max,sa),ao.subVectors(e.a,sa),so.subVectors(e.b,sa),lo.subVectors(e.c,sa),jn.subVectors(so,ao),Xn.subVectors(lo,so),vr.subVectors(ao,lo);let t=[0,-jn.z,jn.y,0,-Xn.z,Xn.y,0,-vr.z,vr.y,jn.z,0,-jn.x,Xn.z,0,-Xn.x,vr.z,0,-vr.x,-jn.y,jn.x,0,-Xn.y,Xn.x,0,-vr.y,vr.x,0];return!kl(t,ao,so,lo,rs)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,ao,so,lo,rs))?!1:(os.crossVectors(jn,Xn),t=[os.x,os.y,os.z],kl(t,ao,so,lo,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new N,new N,new N,new N,new N,new N,new N,new N],$i=new N,ns=new An,ao=new N,so=new N,lo=new N,jn=new N,Xn=new N,vr=new N,sa=new N,rs=new N,os=new N,yr=new N;function kl(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){yr.fromArray(n,o);const s=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),c=e.dot(yr),u=t.dot(yr),p=i.dot(yr);if(Math.max(-Math.max(c,u,p),Math.min(c,u,p))>s)return!1}return!0}const I_=new An,la=new N,Fl=new N;class sn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):I_.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Fl)),this.expandByPoint(la.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new N,zl=new N,as=new N,qn=new N,Hl=new N,ss=new N,Vl=new N;class co{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zl.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(zl);const o=e.distanceTo(t)*.5,a=-this.direction.dot(as),s=qn.dot(this.direction),c=-qn.dot(as),u=qn.lengthSq(),p=Math.abs(1-a*a);let l,h,d,m;if(p>0)if(l=a*c-s,h=a*s-c,m=o*p,l>=0)if(h>=-m)if(h<=m){const _=1/p;l*=_,h*=_,d=l*(l+a*h+2*s)+h*(a*l+h+2*c)+u}else h=o,l=Math.max(0,-(a*h+s)),d=-l*l+h*(h+2*c)+u;else h=-o,l=Math.max(0,-(a*h+s)),d=-l*l+h*(h+2*c)+u;else h<=-m?(l=Math.max(0,-(-a*o+s)),h=l>0?-o:Math.min(Math.max(-o,-c),o),d=-l*l+h*(h+2*c)+u):h<=m?(l=0,h=Math.min(Math.max(-o,-c),o),d=h*(h+2*c)+u):(l=Math.max(0,-(a*o+s)),h=l>0?o:Math.min(Math.max(-o,-c),o),d=-l*l+h*(h+2*c)+u);else h=a>0?-o:o,l=Math.max(0,-(a*h+s)),d=-l*l+h*(h+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,l),r&&r.copy(zl).addScaledVector(as,h),d}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,c=i+a;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,s,c;const u=1/this.direction.x,p=1/this.direction.y,l=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),p>=0?(o=(e.min.y-h.y)*p,a=(e.max.y-h.y)*p):(o=(e.max.y-h.y)*p,a=(e.min.y-h.y)*p),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),l>=0?(s=(e.min.z-h.z)*l,c=(e.max.z-h.z)*l):(s=(e.max.z-h.z)*l,c=(e.min.z-h.z)*l),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,o){Hl.subVectors(t,e),ss.subVectors(i,e),Vl.crossVectors(Hl,ss);let a=this.direction.dot(Vl),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;qn.subVectors(this.origin,e);const c=s*this.direction.dot(ss.crossVectors(qn,ss));if(c<0)return null;const u=s*this.direction.dot(Hl.cross(qn));if(u<0||c+u>a)return null;const p=-s*qn.dot(Vl);return p<0?null:this.at(p/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,r,o,a,s,c,u,p,l,h,d,m,_,g){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,c,u,p,l,h,d,m,_,g)}set(e,t,i,r,o,a,s,c,u,p,l,h,d,m,_,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=o,f[5]=a,f[9]=s,f[13]=c,f[2]=u,f[6]=p,f[10]=l,f[14]=h,f[3]=d,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/uo.setFromMatrixColumn(e,0).length(),o=1/uo.setFromMatrixColumn(e,1).length(),a=1/uo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),c=Math.cos(r),u=Math.sin(r),p=Math.cos(o),l=Math.sin(o);if(e.order==="XYZ"){const h=a*p,d=a*l,m=s*p,_=s*l;t[0]=c*p,t[4]=-c*l,t[8]=u,t[1]=d+m*u,t[5]=h-_*u,t[9]=-s*c,t[2]=_-h*u,t[6]=m+d*u,t[10]=a*c}else if(e.order==="YXZ"){const h=c*p,d=c*l,m=u*p,_=u*l;t[0]=h+_*s,t[4]=m*s-d,t[8]=a*u,t[1]=a*l,t[5]=a*p,t[9]=-s,t[2]=d*s-m,t[6]=_+h*s,t[10]=a*c}else if(e.order==="ZXY"){const h=c*p,d=c*l,m=u*p,_=u*l;t[0]=h-_*s,t[4]=-a*l,t[8]=m+d*s,t[1]=d+m*s,t[5]=a*p,t[9]=_-h*s,t[2]=-a*u,t[6]=s,t[10]=a*c}else if(e.order==="ZYX"){const h=a*p,d=a*l,m=s*p,_=s*l;t[0]=c*p,t[4]=m*u-d,t[8]=h*u+_,t[1]=c*l,t[5]=_*u+h,t[9]=d*u-m,t[2]=-u,t[6]=s*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*u,m=s*c,_=s*u;t[0]=c*p,t[4]=_-h*l,t[8]=m*l+d,t[1]=l,t[5]=a*p,t[9]=-s*p,t[2]=-u*p,t[6]=d*l+m,t[10]=h-_*l}else if(e.order==="XZY"){const h=a*c,d=a*u,m=s*c,_=s*u;t[0]=c*p,t[4]=-l,t[8]=u*p,t[1]=h*l+_,t[5]=a*p,t[9]=d*l-m,t[2]=m*l-d,t[6]=s*p,t[10]=_*l+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L_,e,D_)}lookAt(e,t,i){const r=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Yn.crossVectors(i,Ti),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Yn.crossVectors(i,Ti)),Yn.normalize(),ls.crossVectors(Ti,Yn),r[0]=Yn.x,r[4]=ls.x,r[8]=Ti.x,r[1]=Yn.y,r[5]=ls.y,r[9]=Ti.y,r[2]=Yn.z,r[6]=ls.z,r[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[4],c=i[8],u=i[12],p=i[1],l=i[5],h=i[9],d=i[13],m=i[2],_=i[6],g=i[10],f=i[14],x=i[3],y=i[7],M=i[11],P=i[15],S=r[0],E=r[4],I=r[8],b=r[12],T=r[1],F=r[5],j=r[9],B=r[13],Y=r[2],q=r[6],ie=r[10],ne=r[14],Q=r[3],se=r[7],de=r[11],Le=r[15];return o[0]=a*S+s*T+c*Y+u*Q,o[4]=a*E+s*F+c*q+u*se,o[8]=a*I+s*j+c*ie+u*de,o[12]=a*b+s*B+c*ne+u*Le,o[1]=p*S+l*T+h*Y+d*Q,o[5]=p*E+l*F+h*q+d*se,o[9]=p*I+l*j+h*ie+d*de,o[13]=p*b+l*B+h*ne+d*Le,o[2]=m*S+_*T+g*Y+f*Q,o[6]=m*E+_*F+g*q+f*se,o[10]=m*I+_*j+g*ie+f*de,o[14]=m*b+_*B+g*ne+f*Le,o[3]=x*S+y*T+M*Y+P*Q,o[7]=x*E+y*F+M*q+P*se,o[11]=x*I+y*j+M*ie+P*de,o[15]=x*b+y*B+M*ne+P*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],c=e[9],u=e[13],p=e[2],l=e[6],h=e[10],d=e[14],m=e[3],_=e[7],g=e[11],f=e[15];return m*(+o*c*l-r*u*l-o*s*h+i*u*h+r*s*d-i*c*d)+_*(+t*c*d-t*u*h+o*a*h-r*a*d+r*u*p-o*c*p)+g*(+t*u*l-t*s*d-o*a*l+i*a*d+o*s*p-i*u*p)+f*(-r*s*p-t*c*l+t*s*h+r*a*l-i*a*h+i*c*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],u=e[7],p=e[8],l=e[9],h=e[10],d=e[11],m=e[12],_=e[13],g=e[14],f=e[15],x=l*g*u-_*h*u+_*c*d-s*g*d-l*c*f+s*h*f,y=m*h*u-p*g*u-m*c*d+a*g*d+p*c*f-a*h*f,M=p*_*u-m*l*u+m*s*d-a*_*d-p*s*f+a*l*f,P=m*l*c-p*_*c-m*s*h+a*_*h+p*s*g-a*l*g,S=t*x+i*y+r*M+o*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=x*E,e[1]=(_*h*o-l*g*o-_*r*d+i*g*d+l*r*f-i*h*f)*E,e[2]=(s*g*o-_*c*o+_*r*u-i*g*u-s*r*f+i*c*f)*E,e[3]=(l*c*o-s*h*o-l*r*u+i*h*u+s*r*d-i*c*d)*E,e[4]=y*E,e[5]=(p*g*o-m*h*o+m*r*d-t*g*d-p*r*f+t*h*f)*E,e[6]=(m*c*o-a*g*o-m*r*u+t*g*u+a*r*f-t*c*f)*E,e[7]=(a*h*o-p*c*o+p*r*u-t*h*u-a*r*d+t*c*d)*E,e[8]=M*E,e[9]=(m*l*o-p*_*o-m*i*d+t*_*d+p*i*f-t*l*f)*E,e[10]=(a*_*o-m*s*o+m*i*u-t*_*u-a*i*f+t*s*f)*E,e[11]=(p*s*o-a*l*o-p*i*u+t*l*u+a*i*d-t*s*d)*E,e[12]=P*E,e[13]=(p*_*r-m*l*r+m*i*h-t*_*h-p*i*g+t*l*g)*E,e[14]=(m*s*r-a*_*r-m*i*c+t*_*c+a*i*g-t*s*g)*E,e[15]=(a*l*r-p*s*r+p*i*c-t*l*c-a*i*h+t*s*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,s=e.y,c=e.z,u=o*a,p=o*s;return this.set(u*a+i,u*s-r*c,u*c+r*s,0,u*s+r*c,p*s+i,p*c-r*a,0,u*c-r*s,p*c+r*a,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,a=t._y,s=t._z,c=t._w,u=o+o,p=a+a,l=s+s,h=o*u,d=o*p,m=o*l,_=a*p,g=a*l,f=s*l,x=c*u,y=c*p,M=c*l,P=i.x,S=i.y,E=i.z;return r[0]=(1-(_+f))*P,r[1]=(d+M)*P,r[2]=(m-y)*P,r[3]=0,r[4]=(d-M)*S,r[5]=(1-(h+f))*S,r[6]=(g+x)*S,r[7]=0,r[8]=(m+y)*E,r[9]=(g-x)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=uo.set(r[0],r[1],r[2]).length();const a=uo.set(r[4],r[5],r[6]).length(),s=uo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Qi.copy(this);const c=1/o,u=1/a,p=1/s;return Qi.elements[0]*=c,Qi.elements[1]*=c,Qi.elements[2]*=c,Qi.elements[4]*=u,Qi.elements[5]*=u,Qi.elements[6]*=u,Qi.elements[8]*=p,Qi.elements[9]*=p,Qi.elements[10]*=p,t.setFromRotationMatrix(Qi),i.x=o,i.y=a,i.z=s,this}makePerspective(e,t,i,r,o,a,s=En){const c=this.elements,u=2*o/(t-e),p=2*o/(i-r),l=(t+e)/(t-e),h=(i+r)/(i-r);let d,m;if(s===En)d=-(a+o)/(a-o),m=-2*a*o/(a-o);else if(s===ts)d=-a/(a-o),m=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,o,a,s=En){const c=this.elements,u=1/(t-e),p=1/(i-r),l=1/(a-o),h=(t+e)*u,d=(i+r)*p;let m,_;if(s===En)m=(a+o)*l,_=-2*l;else if(s===ts)m=o*l,_=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*p,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const uo=new N,Qi=new Qe,L_=new N(0,0,0),D_=new N(1,1,1),Yn=new N,ls=new N,Ti=new N,md=new Qe,gd=new bi;class Mn{constructor(e=0,t=0,i=0,r=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],c=r[1],u=r[5],p=r[9],l=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-p,d),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(s,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-l,o)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-p,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(md,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gd.setFromEuler(this),this.setFromQuaternion(gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Gl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const _d=new N,ho=new bi,Pn=new Qe,cs=new N,ca=new N,N_=new N,O_=new bi,vd=new N(1,0,0),yd=new N(0,1,0),xd=new N(0,0,1),Md={type:"added"},B_={type:"removed"},po={type:"childadded",child:null},Wl={type:"childremoved",child:null};class ct extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new N,t=new Mn,i=new bi,r=new N(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new lt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(yd,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(yd,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cs.copy(e):cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ca,cs,this.up):Pn.lookAt(cs,ca,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),ho.setFromRotationMatrix(Pn),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Md),po.child=e,this.dispatchEvent(po),po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B_),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Md),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,O_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let u=0,p=c.length;u<p;u++){const l=c[u];o(e.shapes,l)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,u=this.material.length;c<u;c++)s.push(o(e.materials,this.material[c]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(o(e.animations,c))}}if(t){const s=a(e.geometries),c=a(e.materials),u=a(e.textures),p=a(e.images),l=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),p.length>0&&(i.images=p),l.length>0&&(i.shapes=l),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(s){const c=[];for(const u in s){const p=s[u];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ct.DEFAULT_UP=new N(0,1,0),ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new N,In=new N,jl=new N,Ln=new N,fo=new N,mo=new N,Sd=new N,Xl=new N,ql=new N,Yl=new N;class Sn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ji.subVectors(e,t),r.cross(Ji);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Ji.subVectors(r,t),In.subVectors(i,t),jl.subVectors(e,t);const a=Ji.dot(Ji),s=Ji.dot(In),c=Ji.dot(jl),u=In.dot(In),p=In.dot(jl),l=a*u-s*s;if(l===0)return o.set(0,0,0),null;const h=1/l,d=(u*c-s*p)*h,m=(a*p-s*c)*h;return o.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,r,o,a,s,c){return this.getBarycoord(e,t,i,r,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(s,Ln.z),c)}static isFrontFacing(e,t,i,r){return Ji.subVectors(i,t),In.subVectors(e,t),Ji.cross(In).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Ji.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let a,s;fo.subVectors(r,i),mo.subVectors(o,i),Xl.subVectors(e,i);const c=fo.dot(Xl),u=mo.dot(Xl);if(c<=0&&u<=0)return t.copy(i);ql.subVectors(e,r);const p=fo.dot(ql),l=mo.dot(ql);if(p>=0&&l<=p)return t.copy(r);const h=c*l-p*u;if(h<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(fo,a);Yl.subVectors(e,o);const d=fo.dot(Yl),m=mo.dot(Yl);if(m>=0&&d<=m)return t.copy(o);const _=d*u-c*m;if(_<=0&&u>=0&&m<=0)return s=u/(u-m),t.copy(i).addScaledVector(mo,s);const g=p*m-d*l;if(g<=0&&l-p>=0&&d-m>=0)return Sd.subVectors(o,r),s=(l-p)/(l-p+(d-m)),t.copy(r).addScaledVector(Sd,s);const f=1/(g+_+h);return a=_*f,s=h*f,t.copy(i).addScaledVector(fo,a).addScaledVector(mo,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Kl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=pt.workingColorSpace){if(e=Dl(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=Kl(a,o,e+1/3),this.g=Kl(a,o,e),this.b=Kl(a,o,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=ti){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const i=bd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}copyLinearToSRGB(e){return this.r=Nl(e.r),this.g=Nl(e.g),this.b=Nl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return pt.fromWorkingColorSpace(ni.copy(this),e),Math.round(jt(ni.r*255,0,255))*65536+Math.round(jt(ni.g*255,0,255))*256+Math.round(jt(ni.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(ni.copy(this),t);const i=ni.r,r=ni.g,o=ni.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let c,u;const p=(s+a)/2;if(s===a)c=0,u=0;else{const l=a-s;switch(u=p<=.5?l/(a+s):l/(2-a-s),a){case i:c=(r-o)/l+(r<o?6:0);break;case r:c=(o-i)/l+2;break;case o:c=(i-r)/l+4;break}c/=6}return e.h=c,e.s=u,e.l=p,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=ti){pt.fromWorkingColorSpace(ni.copy(this),e);const t=ni.r,i=ni.g,r=ni.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(us);const i=oa(Kn.h,us.h,t),r=oa(Kn.s,us.s,t),o=oa(Kn.l,us.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new ke;ke.NAMES=bd;let k_=0;class ln extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Kr,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=Ml,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Tn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ml&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==id&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(i.stencilFail=this.stencilFail),this.stencilZFail!==io&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const c=o[s];delete c.metadata,a.push(c)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cn extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dn=F_();function F_(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;u<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(i[c]=1024>>-u-14,i[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(i[c]=u+15<<10,i[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const o=new Uint32Array(2048),a=new Uint32Array(64),s=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,p=0;for(;!(u&8388608);)u<<=1,p-=8388608;u&=-8388609,p+=947912704,o[c]=u|p}for(let c=1024;c<2048;++c)o[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(s[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:o,exponentTable:a,offsetTable:s}}function z_(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=jt(n,-65504,65504),Dn.floatView[0]=n;const e=Dn.uint32View[0],t=e>>23&511;return Dn.baseTable[t]+((e&8388607)>>Dn.shiftTable[t])}function H_(n){const e=n>>10;return Dn.uint32View[0]=Dn.mantissaTable[Dn.offsetTable[e]+(n&1023)]+Dn.exponentTable[e],Dn.floatView[0]}const go={toHalfFloat:z_,fromHalfFloat:H_},zt=new N,hs=new Ie;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return cd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),o=_t(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}}class Td extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wd extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gi extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let V_=0;const Fi=new Qe,Zl=new ct,_o=new N,wi=new An,ua=new An,qt=new N;class Ni extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sd(e)?wd:Td)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new lt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,i){return Fi.makeTranslation(e,t,i),this.applyMatrix4(Fi),this}scale(e,t,i){return Fi.makeScale(e,t,i),this.applyMatrix4(Fi),this}lookAt(e){return Zl.lookAt(e),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new gi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const s=t[o];ua.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(wi.min,ua.min),wi.expandByPoint(qt),qt.addVectors(wi.max,ua.max),wi.expandByPoint(qt)):(wi.expandByPoint(ua.min),wi.expandByPoint(ua.max))}wi.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)qt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let o=0,a=t.length;o<a;o++){const s=t[o],c=this.morphTargetsRelative;for(let u=0,p=s.count;u<p;u++)qt.fromBufferAttribute(s,u),c&&(_o.fromBufferAttribute(e,u),qt.add(_o)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),s=[],c=[];for(let I=0;I<i.count;I++)s[I]=new N,c[I]=new N;const u=new N,p=new N,l=new N,h=new Ie,d=new Ie,m=new Ie,_=new N,g=new N;function f(I,b,T){u.fromBufferAttribute(i,I),p.fromBufferAttribute(i,b),l.fromBufferAttribute(i,T),h.fromBufferAttribute(o,I),d.fromBufferAttribute(o,b),m.fromBufferAttribute(o,T),p.sub(u),l.sub(u),d.sub(h),m.sub(h);const F=1/(d.x*m.y-m.x*d.y);isFinite(F)&&(_.copy(p).multiplyScalar(m.y).addScaledVector(l,-d.y).multiplyScalar(F),g.copy(l).multiplyScalar(d.x).addScaledVector(p,-m.x).multiplyScalar(F),s[I].add(_),s[b].add(_),s[T].add(_),c[I].add(g),c[b].add(g),c[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,b=x.length;I<b;++I){const T=x[I],F=T.start,j=T.count;for(let B=F,Y=F+j;B<Y;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new N,M=new N,P=new N,S=new N;function E(I){P.fromBufferAttribute(r,I),S.copy(P);const b=s[I];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),M.crossVectors(S,b);const T=M.dot(c[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,T)}for(let I=0,b=x.length;I<b;++I){const T=x[I],F=T.start,j=T.count;for(let B=F,Y=F+j;B<Y;B+=3)E(e.getX(B+0)),E(e.getX(B+1)),E(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new N,o=new N,a=new N,s=new N,c=new N,u=new N,p=new N,l=new N;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),p.subVectors(a,o),l.subVectors(r,o),p.cross(l),s.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),s.add(p),c.add(p),u.add(p),i.setXYZ(m,s.x,s.y,s.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),p.subVectors(a,o),l.subVectors(r,o),p.cross(l),i.setXYZ(h+0,p.x,p.y,p.z),i.setXYZ(h+1,p.x,p.y,p.z),i.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(s,c){const u=s.array,p=s.itemSize,l=s.normalized,h=new u.constructor(c.length*p);let d=0,m=0;for(let _=0,g=c.length;_<g;_++){s.isInterleavedBufferAttribute?d=c[_]*s.data.stride+s.offset:d=c[_]*p;for(let f=0;f<p;f++)h[m++]=u[d++]}return new Zt(h,p,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ni,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],u=e(c,i);t.setAttribute(s,u)}const o=this.morphAttributes;for(const s in o){const c=[],u=o[s];for(let p=0,l=u.length;p<l;p++){const h=u[p],d=e(h,i);c.push(d)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const u=a[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],p=[];for(let l=0,h=u.length;l<h;l++){const d=u[l];p.push(d.toJSON(e.data))}p.length>0&&(r[c]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(t))}const o=e.morphAttributes;for(const u in o){const p=[],l=o[u];for(let h=0,d=l.length;h<d;h++)p.push(l[h].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,p=a.length;u<p;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new Qe,xr=new co,ds=new sn,Ad=new N,vo=new N,yo=new N,xo=new N,$l=new N,ps=new N,fs=new Ie,ms=new Ie,gs=new Ie,Rd=new N,Cd=new N,Pd=new N,_s=new N,vs=new N;class $t extends ct{constructor(e=new Ni,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){ps.set(0,0,0);for(let c=0,u=o.length;c<u;c++){const p=s[c],l=o[c];p!==0&&($l.fromBufferAttribute(l,e),a?ps.addScaledVector($l,p):ps.addScaledVector($l.sub(t),p))}t.add(ps)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere),ds.applyMatrix4(o),xr.copy(e.ray).recast(e.near),!(ds.containsPoint(xr.origin)===!1&&(xr.intersectSphere(ds,Ad)===null||xr.origin.distanceToSquared(Ad)>(e.far-e.near)**2))&&(Ed.copy(o).invert(),xr.copy(e.ray).applyMatrix4(Ed),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,i){let r;const o=this.geometry,a=this.material,s=o.index,c=o.attributes.position,u=o.attributes.uv,p=o.attributes.uv1,l=o.attributes.normal,h=o.groups,d=o.drawRange;if(s!==null)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){const g=h[m],f=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let M=x,P=y;M<P;M+=3){const S=s.getX(M),E=s.getX(M+1),I=s.getX(M+2);r=ys(this,f,e,i,u,p,l,S,E,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(s.count,d.start+d.count);for(let g=m,f=_;g<f;g+=3){const x=s.getX(g),y=s.getX(g+1),M=s.getX(g+2);r=ys(this,a,e,i,u,p,l,x,y,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){const g=h[m],f=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=x,P=y;M<P;M+=3){const S=M,E=M+1,I=M+2;r=ys(this,f,e,i,u,p,l,S,E,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,f=_;g<f;g+=3){const x=g,y=g+1,M=g+2;r=ys(this,a,e,i,u,p,l,x,y,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function G_(n,e,t,i,r,o,a,s){let c;if(e.side===fi?c=i.intersectTriangle(a,o,r,!0,s):c=i.intersectTriangle(r,o,a,e.side===Tn,s),c===null)return null;vs.copy(s),vs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(vs);return u<t.near||u>t.far?null:{distance:u,point:vs.clone(),object:n}}function ys(n,e,t,i,r,o,a,s,c,u){n.getVertexPosition(s,vo),n.getVertexPosition(c,yo),n.getVertexPosition(u,xo);const p=G_(n,e,t,i,vo,yo,xo,_s);if(p){r&&(fs.fromBufferAttribute(r,s),ms.fromBufferAttribute(r,c),gs.fromBufferAttribute(r,u),p.uv=Sn.getInterpolation(_s,vo,yo,xo,fs,ms,gs,new Ie)),o&&(fs.fromBufferAttribute(o,s),ms.fromBufferAttribute(o,c),gs.fromBufferAttribute(o,u),p.uv1=Sn.getInterpolation(_s,vo,yo,xo,fs,ms,gs,new Ie)),a&&(Rd.fromBufferAttribute(a,s),Cd.fromBufferAttribute(a,c),Pd.fromBufferAttribute(a,u),p.normal=Sn.getInterpolation(_s,vo,yo,xo,Rd,Cd,Pd,new N),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const l={a:s,b:c,c:u,normal:new N,materialIndex:0};Sn.getNormal(vo,yo,xo,l.normal),p.face=l}return p}class ja extends Ni{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const c=[],u=[],p=[],l=[];let h=0,d=0;m("z","y","x",-1,-1,i,t,e,a,o,0),m("z","y","x",1,-1,i,t,-e,a,o,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,o,4),m("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new gi(u,3)),this.setAttribute("normal",new gi(p,3)),this.setAttribute("uv",new gi(l,2));function m(_,g,f,x,y,M,P,S,E,I,b){const T=M/E,F=P/I,j=M/2,B=P/2,Y=S/2,q=E+1,ie=I+1;let ne=0,Q=0;const se=new N;for(let de=0;de<ie;de++){const Le=de*F-B;for(let je=0;je<q;je++){const Fe=je*T-j;se[_]=Fe*x,se[g]=Le*y,se[f]=Y,u.push(se.x,se.y,se.z),se[_]=0,se[g]=0,se[f]=S>0?1:-1,p.push(se.x,se.y,se.z),l.push(je/E),l.push(1-de/I),ne+=1}}for(let de=0;de<I;de++)for(let Le=0;Le<E;Le++){const je=h+Le+q*de,Fe=h+Le+q*(de+1),te=h+(Le+1)+q*(de+1),pe=h+(Le+1)+q*de;c.push(je,Fe,pe),c.push(Fe,te,pe),Q+=6}s.addGroup(d,Q,b),d+=Q,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ci(n){const e={};for(let t=0;t<n.length;t++){const i=Mo(n[t]);for(const r in i)e[r]=i[r]}return e}function W_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Id(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Mr={clone:Mo,merge:ci};var j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=W_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ld extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new N,Dd=new Ie,Ud=new Ie;class ui extends Ld{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Ud),t.subVectors(Ud,Dd)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/c,t-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const So=-90,bo=1;class q_ extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ui(So,bo,e,t);r.layers=this.layers,this.add(r);const o=new ui(So,bo,e,t);o.layers=this.layers,this.add(o);const a=new ui(So,bo,e,t);a.layers=this.layers,this.add(a);const s=new ui(So,bo,e,t);s.layers=this.layers,this.add(s);const c=new ui(So,bo,e,t);c.layers=this.layers,this.add(c);const u=new ui(So,bo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,s,c]=t;for(const u of t)this.remove(u);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,c,u,p]=this.children,l=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,p),e.setRenderTarget(l,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Nd extends Wt{constructor(e,t,i,r,o,a,s,c,u,p){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,i,r,o,a,s,c,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y_ extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ja(5,5,5),o=new Pt({name:"CubemapFromEquirect",uniforms:Mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fi,blending:Yi});o.uniforms.tEquirect.value=t;const a=new $t(r,o),s=t.minFilter;return t.minFilter===an&&(t.minFilter=Ut),new q_(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}}const Ql=new N,K_=new N,Z_=new lt;class $n{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ql.subVectors(i,t).cross(K_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ql),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Z_.getNormalMatrix(e),r=this.coplanarPoint(Ql).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new sn,xs=new N;class Jl{constructor(e=new $n,t=new $n,i=new $n,r=new $n,o=new $n,a=new $n){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=En){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],c=r[3],u=r[4],p=r[5],l=r[6],h=r[7],d=r[8],m=r[9],_=r[10],g=r[11],f=r[12],x=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-o,h-u,g-d,M-f).normalize(),i[1].setComponents(c+o,h+u,g+d,M+f).normalize(),i[2].setComponents(c+a,h+p,g+m,M+x).normalize(),i[3].setComponents(c-a,h-p,g-m,M-x).normalize(),i[4].setComponents(c-s,h-l,g-_,M-y).normalize(),t===En)i[5].setComponents(c+s,h+l,g+_,M+y).normalize();else if(t===ts)i[5].setComponents(s,l,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xs.x=r.normal.x>0?e.max.x:e.min.x,xs.y=r.normal.y>0?e.max.y:e.min.y,xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function $_(n){const e=new WeakMap;function t(s,c){const u=s.array,p=s.usage,l=u.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,u,p),s.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:l}}function i(s,c,u){const p=c.array,l=c._updateRange,h=c.updateRanges;if(n.bindBuffer(u,s),l.count===-1&&h.length===0&&n.bufferSubData(u,0,p),h.length!==0){for(let d=0,m=h.length;d<m;d++){const _=h[d];n.bufferSubData(u,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}c.clearUpdateRanges()}l.count!==-1&&(n.bufferSubData(u,l.offset*p.BYTES_PER_ELEMENT,p,l.offset,l.count),l.count=-1),c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(n.deleteBuffer(c.buffer),e.delete(s))}function a(s,c){if(s.isGLBufferAttribute){const p=e.get(s);(!p||p.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const u=e.get(s);if(u===void 0)e.set(s,t(s,c));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,s,c),u.version=s.version}}return{get:r,remove:o,update:a}}class Zo extends Ni{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,a=t/2,s=Math.floor(i),c=Math.floor(r),u=s+1,p=c+1,l=e/s,h=t/c,d=[],m=[],_=[],g=[];for(let f=0;f<p;f++){const x=f*h-a;for(let y=0;y<u;y++){const M=y*l-o;m.push(M,-x,0),_.push(0,0,1),g.push(y/s),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<s;x++){const y=x+u*f,M=x+u*(f+1),P=x+1+u*(f+1),S=x+1+u*f;d.push(y,M,S),d.push(M,P,S)}this.setIndex(d),this.setAttribute("position",new gi(m,3)),this.setAttribute("normal",new gi(_,3)),this.setAttribute("uv",new gi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
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
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
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
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
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
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h0=`#ifdef USE_IRIDESCENCE
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
#endif`,d0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,M0=`#define PI 3.141592653589793
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
} // validated`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b0=`vec3 transformedNormal = objectNormal;
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
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`
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
}`,P0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
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
#endif`,Z0=`struct PhysicalMaterial {
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
}`,$0=`
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sv=`#if defined( USE_POINTS_UV )
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
#endif`,lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
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
#endif`,pv=`#ifdef USE_MORPHTARGETS
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
#endif`,fv=`#ifdef USE_MORPHTARGETS
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
#endif`,mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xv=`#ifdef USE_NORMALMAP
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
#endif`,Mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ev=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ov=`float getShadowMask() {
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
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zv=`#ifdef USE_SKINNING
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
#endif`,Hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qv=`uniform sampler2D t2D;
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
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
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
}`,ry=`#if DEPTH_PACKING == 3200
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
}`,oy=`#define DISTANCE
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
}`,ay=`#define DISTANCE
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`uniform float scale;
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
}`,uy=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,dy=`uniform vec3 diffuse;
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
}`,py=`#define LAMBERT
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
}`,fy=`#define LAMBERT
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
}`,my=`#define MATCAP
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
}`,gy=`#define MATCAP
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
}`,_y=`#define NORMAL
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
}`,vy=`#define NORMAL
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
}`,yy=`#define PHONG
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
}`,xy=`#define PHONG
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
}`,My=`#define STANDARD
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
}`,Sy=`#define STANDARD
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
}`,by=`#define TOON
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
}`,Ty=`#define TOON
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
}`,wy=`uniform float size;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Ay=`#include <common>
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
}`,Ry=`uniform vec3 color;
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
}`,Cy=`uniform float rotation;
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
}`,Py=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Q_,alphahash_pars_fragment:J_,alphamap_fragment:e0,alphamap_pars_fragment:t0,alphatest_fragment:i0,alphatest_pars_fragment:n0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:s0,begin_vertex:l0,beginnormal_vertex:c0,bsdfs:u0,iridescence_fragment:h0,bumpmap_pars_fragment:d0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:g0,color_fragment:_0,color_pars_fragment:v0,color_pars_vertex:y0,color_vertex:x0,common:M0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:b0,displacementmap_pars_vertex:T0,displacementmap_vertex:w0,emissivemap_fragment:E0,emissivemap_pars_fragment:A0,colorspace_fragment:R0,colorspace_pars_fragment:C0,envmap_fragment:P0,envmap_common_pars_fragment:I0,envmap_pars_fragment:L0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:W0,envmap_vertex:U0,fog_vertex:N0,fog_pars_vertex:O0,fog_fragment:B0,fog_pars_fragment:k0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:z0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:V0,lights_pars_begin:G0,lights_toon_fragment:j0,lights_toon_pars_fragment:X0,lights_phong_fragment:q0,lights_phong_pars_fragment:Y0,lights_physical_fragment:K0,lights_physical_pars_fragment:Z0,lights_fragment_begin:$0,lights_fragment_maps:Q0,lights_fragment_end:J0,logdepthbuf_fragment:ev,logdepthbuf_pars_fragment:tv,logdepthbuf_pars_vertex:iv,logdepthbuf_vertex:nv,map_fragment:rv,map_pars_fragment:ov,map_particle_fragment:av,map_particle_pars_fragment:sv,metalnessmap_fragment:lv,metalnessmap_pars_fragment:cv,morphinstance_vertex:uv,morphcolor_vertex:hv,morphnormal_vertex:dv,morphtarget_pars_vertex:pv,morphtarget_vertex:fv,normal_fragment_begin:mv,normal_fragment_maps:gv,normal_pars_fragment:_v,normal_pars_vertex:vv,normal_vertex:yv,normalmap_pars_fragment:xv,clearcoat_normal_fragment_begin:Mv,clearcoat_normal_fragment_maps:Sv,clearcoat_pars_fragment:bv,iridescence_pars_fragment:Tv,opaque_fragment:wv,packing:Ev,premultiplied_alpha_fragment:Av,project_vertex:Rv,dithering_fragment:Cv,dithering_pars_fragment:Pv,roughnessmap_fragment:Iv,roughnessmap_pars_fragment:Lv,shadowmap_pars_fragment:Dv,shadowmap_pars_vertex:Uv,shadowmap_vertex:Nv,shadowmask_pars_fragment:Ov,skinbase_vertex:Bv,skinning_pars_vertex:kv,skinning_vertex:Fv,skinnormal_vertex:zv,specularmap_fragment:Hv,specularmap_pars_fragment:Vv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Wv,transmission_fragment:jv,transmission_pars_fragment:Xv,uv_pars_fragment:qv,uv_pars_vertex:Yv,uv_vertex:Kv,worldpos_vertex:Zv,background_vert:$v,background_frag:Qv,backgroundCube_vert:Jv,backgroundCube_frag:ey,cube_vert:ty,cube_frag:iy,depth_vert:ny,depth_frag:ry,distanceRGBA_vert:oy,distanceRGBA_frag:ay,equirect_vert:sy,equirect_frag:ly,linedashed_vert:cy,linedashed_frag:uy,meshbasic_vert:hy,meshbasic_frag:dy,meshlambert_vert:py,meshlambert_frag:fy,meshmatcap_vert:my,meshmatcap_frag:gy,meshnormal_vert:_y,meshnormal_frag:vy,meshphong_vert:yy,meshphong_frag:xy,meshphysical_vert:My,meshphysical_frag:Sy,meshtoon_vert:by,meshtoon_frag:Ty,points_vert:wy,points_frag:Ey,shadow_vert:Ay,shadow_frag:Ry,sprite_vert:Cy,sprite_frag:Py},be={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},un={basic:{uniforms:ci([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:ci([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ke(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:ci([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:ci([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:ci([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ke(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:ci([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:ci([be.points,be.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:ci([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:ci([be.common,be.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:ci([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:ci([be.sprite,be.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:ci([be.common,be.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:ci([be.lights,be.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};un.physical={uniforms:ci([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ms={r:0,b:0,g:0},br=new Mn,Iy=new Qe;function Ly(n,e,t,i,r,o,a){const s=new ke(0);let c=o===!0?0:1,u,p,l=null,h=0,d=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const M=m(x);M===null?f(s,c):M&&M.isColor&&(f(M,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function g(x,y){const M=m(y);M&&(M.isCubeTexture||M.mapping===Ya)?(p===void 0&&(p=new $t(new ja(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Mo(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),br.copy(y.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),p.material.uniforms.envMap.value=M,p.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(br)),p.material.toneMapped=pt.getTransfer(M.colorSpace)!==bt,(l!==M||h!==M.version||d!==n.toneMapping)&&(p.material.needsUpdate=!0,l=M,h=M.version,d=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new $t(new Zo(2,2),new Pt({name:"BackgroundMaterial",uniforms:Mo(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=pt.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(l!==M||h!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,l=M,h=M.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function f(x,y){x.getRGB(Ms,Id(n)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,y,a)}return{getClearColor:function(){return s},setClearColor:function(x,y=1){s.set(x),c=y,f(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(s,c)},render:_,addToRenderList:g}}function Dy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,a=!1;function s(T,F,j,B,Y){let q=!1;const ie=l(B,j,F);o!==ie&&(o=ie,u(o.object)),q=d(T,B,j,Y),q&&m(T,B,j,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(T,F,j,B),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function u(T){return n.bindVertexArray(T)}function p(T){return n.deleteVertexArray(T)}function l(T,F,j){const B=j.wireframe===!0;let Y=i[T.id];Y===void 0&&(Y={},i[T.id]=Y);let q=Y[F.id];q===void 0&&(q={},Y[F.id]=q);let ie=q[B];return ie===void 0&&(ie=h(c()),q[B]=ie),ie}function h(T){const F=[],j=[],B=[];for(let Y=0;Y<t;Y++)F[Y]=0,j[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:B,object:T,attributes:{},index:null}}function d(T,F,j,B){const Y=o.attributes,q=F.attributes;let ie=0;const ne=j.getAttributes();for(const Q in ne)if(ne[Q].location>=0){const se=Y[Q];let de=q[Q];if(de===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(de=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(de=T.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;ie++}return o.attributesNum!==ie||o.index!==B}function m(T,F,j,B){const Y={},q=F.attributes;let ie=0;const ne=j.getAttributes();for(const Q in ne)if(ne[Q].location>=0){let se=q[Q];se===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(se=T.instanceColor));const de={};de.attribute=se,se&&se.data&&(de.data=se.data),Y[Q]=de,ie++}o.attributes=Y,o.attributesNum=ie,o.index=B}function _(){const T=o.newAttributes;for(let F=0,j=T.length;F<j;F++)T[F]=0}function g(T){f(T,0)}function f(T,F){const j=o.newAttributes,B=o.enabledAttributes,Y=o.attributeDivisors;j[T]=1,B[T]===0&&(n.enableVertexAttribArray(T),B[T]=1),Y[T]!==F&&(n.vertexAttribDivisor(T,F),Y[T]=F)}function x(){const T=o.newAttributes,F=o.enabledAttributes;for(let j=0,B=F.length;j<B;j++)F[j]!==T[j]&&(n.disableVertexAttribArray(j),F[j]=0)}function y(T,F,j,B,Y,q,ie){ie===!0?n.vertexAttribIPointer(T,F,j,Y,q):n.vertexAttribPointer(T,F,j,B,Y,q)}function M(T,F,j,B){_();const Y=B.attributes,q=j.getAttributes(),ie=F.defaultAttributeValues;for(const ne in q){const Q=q[ne];if(Q.location>=0){let se=Y[ne];if(se===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(se=T.instanceColor)),se!==void 0){const de=se.normalized,Le=se.itemSize,je=e.get(se);if(je===void 0)continue;const Fe=je.buffer,te=je.type,pe=je.bytesPerElement,Ce=te===n.INT||te===n.UNSIGNED_INT||se.gpuType===vh;if(se.isInterleavedBufferAttribute){const xe=se.data,Je=xe.stride,Ze=se.offset;if(xe.isInstancedInterleavedBuffer){for(let H=0;H<Q.locationSize;H++)f(Q.location+H,xe.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let H=0;H<Q.locationSize;H++)g(Q.location+H);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let H=0;H<Q.locationSize;H++)y(Q.location+H,Le/Q.locationSize,te,de,Je*pe,(Ze+Le/Q.locationSize*H)*pe,Ce)}else{if(se.isInstancedBufferAttribute){for(let xe=0;xe<Q.locationSize;xe++)f(Q.location+xe,se.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let xe=0;xe<Q.locationSize;xe++)g(Q.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let xe=0;xe<Q.locationSize;xe++)y(Q.location+xe,Le/Q.locationSize,te,de,Le*pe,Le/Q.locationSize*xe*pe,Ce)}}else if(ie!==void 0){const de=ie[ne];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(Q.location,de);break;case 3:n.vertexAttrib3fv(Q.location,de);break;case 4:n.vertexAttrib4fv(Q.location,de);break;default:n.vertexAttrib1fv(Q.location,de)}}}}x()}function P(){I();for(const T in i){const F=i[T];for(const j in F){const B=F[j];for(const Y in B)p(B[Y].object),delete B[Y];delete F[j]}delete i[T]}}function S(T){if(i[T.id]===void 0)return;const F=i[T.id];for(const j in F){const B=F[j];for(const Y in B)p(B[Y].object),delete B[Y];delete F[j]}delete i[T.id]}function E(T){for(const F in i){const j=i[F];if(j[T.id]===void 0)continue;const B=j[T.id];for(const Y in B)p(B[Y].object),delete B[Y];delete j[T.id]}}function I(){b(),a=!0,o!==r&&(o=r,u(o.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:I,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function Uy(n,e,t){let i;function r(u){i=u}function o(u,p){n.drawArrays(i,u,p),t.update(p,i,1)}function a(u,p,l){l!==0&&(n.drawArraysInstanced(i,u,p,l),t.update(p,i,l))}function s(u,p,l){if(l===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<l;d++)this.render(u[d],p[d]);else{h.multiDrawArraysWEBGL(i,u,0,p,0,l);let d=0;for(let m=0;m<l;m++)d+=p[m];t.update(d,i,1)}}function c(u,p,l,h){if(l===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u.length;m++)a(u[m],p[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,p,0,h,0,l);let m=0;for(let _=0;_<l;_++)m+=p[_];for(let _=0;_<h.length;_++)t.update(m,i,h[_])}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Ny(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(S){return!(S!==ki&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(S){const E=S===Nt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Wn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ei&&!E)}function c(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const p=c(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const l=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:M,maxSamples:P}}function Oy(n){const e=this;let t=null,i=0,r=!1,o=!1;const a=new $n,s=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){const d=l.length!==0||h||i!==0||r;return r=h,i=l.length,d},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(l,h){t=p(l,h,0)},this.setState=function(l,h,d){const m=l.clippingPlanes,_=l.clipIntersection,g=l.clipShadows,f=n.get(l);if(!r||m===null||m.length===0||o&&!g)o?p(null):u();else{const x=o?0:i,y=x*4;let M=f.clippingState||null;c.value=M,M=p(m,h,y,d);for(let P=0;P!==y;++P)M[P]=t[P];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(l,h,d,m){const _=l!==null?l.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const f=d+_*4,x=h.matrixWorldInverse;s.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,M=d;y!==_;++y,M+=4)a.copy(l[y]).applyMatrix4(x,s),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function By(n){let e=new WeakMap;function t(a,s){return s===qa?a.mapping=Zr:s===Sl&&(a.mapping=$r),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===qa||s===Sl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Y_(c.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Ss extends Ld{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,s-=p*this.view.offsetY,c=s-p*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const To=4,Bd=[.125,.215,.35,.446,.526,.582],Tr=20,ec=new Ss,kd=new ke;let tc=null,ic=0,nc=0,rc=!1;const wr=(1+Math.sqrt(5))/2,wo=1/wr,Fd=[new N(-wr,wo,0),new N(wr,wo,0),new N(-wo,0,wr),new N(wo,0,wr),new N(0,wr,-wo),new N(0,wr,wo),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class zd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){tc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,ic,nc),this._renderer.xr.enabled=rc,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Nt,format:ki,colorSpace:Ft,depthBuffer:!1},r=Hd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ky(o)),this._blurMaterial=Fy(o,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,i,r){const o=new ui(90,1,t,i),a=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,p=c.toneMapping;c.getClearColor(kd),c.toneMapping=Gn,c.autoClear=!1;const l=new cn({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),h=new $t(new ja,l);let d=!1;const m=e.background;m?m.isColor&&(l.color.copy(m),e.background=null,d=!0):(l.color.copy(kd),d=!0);for(let _=0;_<6;_++){const g=_%3;g===0?(o.up.set(0,a[_],0),o.lookAt(s[_],0,0)):g===1?(o.up.set(0,0,a[_]),o.lookAt(0,s[_],0)):(o.up.set(0,a[_],0),o.lookAt(0,0,s[_]));const f=this._cubeSize;bs(r,g*f,_>2?f:0,f,f),c.setRenderTarget(r),d&&c.render(h,o),c.render(e,o)}h.geometry.dispose(),h.material.dispose(),c.toneMapping=p,c.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zr||e.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const c=this._cubeSize;bs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ec)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=Fd[(r-o-1)%Fd.length];this._blur(e,o-1,o,a,s)}t.autoClear=i}_blur(e,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,s){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,l=new $t(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Tr-1),_=o/m,g=isFinite(o)?1+Math.floor(p*_):Tr;g>Tr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Tr}`);const f=[];let x=0;for(let E=0;E<Tr;++E){const I=E/_,b=Math.exp(-I*I/2);f.push(b),E===0?x+=b:E<g&&(x+=2*b)}for(let E=0;E<f.length;E++)f[E]=f[E]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-i;const M=this._sizeLods[r],P=3*M*(r>y-To?r-y+To:0),S=4*(this._cubeSize-M);bs(t,P,S,3*M,2*M),c.setRenderTarget(t),c.render(l,ec)}}function ky(n){const e=[],t=[],i=[];let r=n;const o=n-To+1+Bd.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let c=1/s;a>n-To?c=Bd[a-n+To-1]:a===0&&(c=0),i.push(c);const u=1/(s-2),p=-u,l=1+u,h=[p,p,l,p,l,l,p,p,l,l,p,l],d=6,m=6,_=3,g=2,f=1,x=new Float32Array(_*m*d),y=new Float32Array(g*m*d),M=new Float32Array(f*m*d);for(let S=0;S<d;S++){const E=S%3*2/3-1,I=S>2?0:-1,b=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];x.set(b,_*m*S),y.set(h,g*m*S);const T=[S,S,S,S,S,S];M.set(T,f*m*S)}const P=new Ni;P.setAttribute("position",new Zt(x,_)),P.setAttribute("uv",new Zt(y,g)),P.setAttribute("faceIndex",new Zt(M,f)),e.push(P),r>To&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hd(n,e,t){const i=new Xt(n,e,t);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fy(n,e,t){const i=new Float32Array(Tr),r=new N(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Vd(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Gd(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function zy(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,u=c===qa||c===Sl,p=c===Zr||c===$r;if(u||p){let l=e.get(s);const h=l!==void 0?l.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return t===null&&(t=new zd(n)),l=u?t.fromEquirectangular(s,l):t.fromCubemap(s,l),l.texture.pmremVersion=s.pmremVersion,e.set(s,l),l.texture;if(l!==void 0)return l.texture;{const d=s.image;return u&&d&&d.height>0||p&&d&&r(d)?(t===null&&(t=new zd(n)),l=u?t.fromEquirectangular(s):t.fromCubemap(s),l.texture.pmremVersion=s.pmremVersion,e.set(s,l),s.addEventListener("dispose",o),l.texture):null}}}return s}function r(s){let c=0;const u=6;for(let p=0;p<u;p++)s[p]!==void 0&&c++;return c===u}function o(s){const c=s.target;c.removeEventListener("dispose",o);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Hy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vy(n,e,t,i){const r={},o=new WeakMap;function a(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const _=h.morphAttributes[m];for(let g=0,f=_.length;g<f;g++)e.remove(_[g])}h.removeEventListener("dispose",a),delete r[h.id];const d=o.get(h);d&&(e.remove(d),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(l,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(l){const h=l.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER);const d=l.morphAttributes;for(const m in d){const _=d[m];for(let g=0,f=_.length;g<f;g++)e.update(_[g],n.ARRAY_BUFFER)}}function u(l){const h=[],d=l.index,m=l.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,M=x.length;y<M;y+=3){const P=x[y+0],S=x[y+1],E=x[y+2];h.push(P,S,S,E,E,P)}}else if(m!==void 0){const x=m.array;_=m.version;for(let y=0,M=x.length/3-1;y<M;y+=3){const P=y+0,S=y+1,E=y+2;h.push(P,S,S,E,E,P)}}else return;const g=new(sd(h)?wd:Td)(h,1);g.version=_;const f=o.get(l);f&&e.remove(f),o.set(l,g)}function p(l){const h=o.get(l);if(h){const d=l.index;d!==null&&h.version<d.version&&u(l)}else u(l);return o.get(l)}return{get:s,update:c,getWireframeAttribute:p}}function Gy(n,e,t){let i;function r(h){i=h}let o,a;function s(h){o=h.type,a=h.bytesPerElement}function c(h,d){n.drawElements(i,d,o,h*a),t.update(d,i,1)}function u(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,o,h*a,m),t.update(d,i,m))}function p(h,d,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<m;g++)this.render(h[g]/a,d[g]);else{_.multiDrawElementsWEBGL(i,d,0,o,h,0,m);let g=0;for(let f=0;f<m;f++)g+=d[f];t.update(g,i,1)}}function l(h,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)u(h[f]/a,d[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,o,h,0,_,0,m);let f=0;for(let x=0;x<m;x++)f+=d[x];for(let x=0;x<_.length;x++)t.update(f,i,_[x])}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=l}function Wy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=s*(o/3);break;case n.LINES:t.lines+=s*(o/2);break;case n.LINE_STRIP:t.lines+=s*(o-1);break;case n.LINE_LOOP:t.lines+=s*o;break;case n.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jy(n,e,t){const i=new WeakMap,r=new Mt;function o(a,s,c){const u=a.morphTargetInfluences,p=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,l=p!==void 0?p.length:0;let h=i.get(s);if(h===void 0||h.count!==l){let m=function(){b.dispose(),i.delete(s),s.removeEventListener("dispose",m)};var d=m;h!==void 0&&h.texture.dispose();const _=s.morphAttributes.position!==void 0,g=s.morphAttributes.normal!==void 0,f=s.morphAttributes.color!==void 0,x=s.morphAttributes.position||[],y=s.morphAttributes.normal||[],M=s.morphAttributes.color||[];let P=0;_===!0&&(P=1),g===!0&&(P=2),f===!0&&(P=3);let S=s.attributes.position.count*P,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*E*4*l),b=new pd(I,S,E,l);b.type=ei,b.needsUpdate=!0;const T=P*4;for(let F=0;F<l;F++){const j=x[F],B=y[F],Y=M[F],q=S*E*4*F;for(let ie=0;ie<j.count;ie++){const ne=ie*T;_===!0&&(r.fromBufferAttribute(j,ie),I[q+ne+0]=r.x,I[q+ne+1]=r.y,I[q+ne+2]=r.z,I[q+ne+3]=0),g===!0&&(r.fromBufferAttribute(B,ie),I[q+ne+4]=r.x,I[q+ne+5]=r.y,I[q+ne+6]=r.z,I[q+ne+7]=0),f===!0&&(r.fromBufferAttribute(Y,ie),I[q+ne+8]=r.x,I[q+ne+9]=r.y,I[q+ne+10]=r.z,I[q+ne+11]=Y.itemSize===4?r.w:1)}}h={count:l,texture:b,size:new Ie(S,E)},i.set(s,h),s.addEventListener("dispose",m)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<u.length;g++)m+=u[g];const _=s.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",u)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:o}}function Xy(n,e,t,i){let r=new WeakMap;function o(c){const u=i.render.frame,p=c.geometry,l=e.get(c,p);if(r.get(l)!==u&&(e.update(l),r.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return l}function a(){r=new WeakMap}function s(c){const u=c.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}class Wd extends Wt{constructor(e,t,i,r,o,a,s,c,u,p){if(p=p!==void 0?p:eo,p!==eo&&p!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===eo&&(i=Jr),i===void 0&&p===ia&&(i=ta),super(null,r,o,a,s,c,p,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:li,this.minFilter=c!==void 0?c:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jd=new Wt,Xd=new Wd(1,1);Xd.compareFunction=nd;const qd=new pd,Yd=new P_,Kd=new Nd,Zd=[],$d=[],Qd=new Float32Array(16),Jd=new Float32Array(9),ep=new Float32Array(4);function Eo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Zd[r];if(o===void 0&&(o=new Float32Array(r),Zd[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,n[a].toArray(o,s)}return o}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ts(n,e){let t=$d[e];t===void 0&&(t=new Int32Array(e),$d[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function Ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function $y(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;ep.set(i),n.uniformMatrix2fv(this.addr,!1,ep),Gt(t,i)}}function Qy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Jd.set(i),n.uniformMatrix3fv(this.addr,!1,Jd),Gt(t,i)}}function Jy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Qd.set(i),n.uniformMatrix4fv(this.addr,!1,Qd),Gt(t,i)}}function ex(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function rx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function lx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const o=this.type===n.SAMPLER_2D_SHADOW?Xd:jd;t.setTexture2D(e||o,r)}function cx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yd,r)}function ux(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Kd,r)}function hx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qd,r)}function dx(n){switch(n){case 5126:return qy;case 35664:return Yy;case 35665:return Ky;case 35666:return Zy;case 35674:return $y;case 35675:return Qy;case 35676:return Jy;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return ix;case 35669:case 35673:return nx;case 5125:return rx;case 36294:return ox;case 36295:return ax;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return hx}}function px(n,e){n.uniform1fv(this.addr,e)}function fx(n,e){const t=Eo(e,this.size,2);n.uniform2fv(this.addr,t)}function mx(n,e){const t=Eo(e,this.size,3);n.uniform3fv(this.addr,t)}function gx(n,e){const t=Eo(e,this.size,4);n.uniform4fv(this.addr,t)}function _x(n,e){const t=Eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vx(n,e){const t=Eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yx(n,e){const t=Eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xx(n,e){n.uniform1iv(this.addr,e)}function Mx(n,e){n.uniform2iv(this.addr,e)}function Sx(n,e){n.uniform3iv(this.addr,e)}function bx(n,e){n.uniform4iv(this.addr,e)}function Tx(n,e){n.uniform1uiv(this.addr,e)}function wx(n,e){n.uniform2uiv(this.addr,e)}function Ex(n,e){n.uniform3uiv(this.addr,e)}function Ax(n,e){n.uniform4uiv(this.addr,e)}function Rx(n,e,t){const i=this.cache,r=e.length,o=Ts(t,r);Vt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||jd,o[a])}function Cx(n,e,t){const i=this.cache,r=e.length,o=Ts(t,r);Vt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Yd,o[a])}function Px(n,e,t){const i=this.cache,r=e.length,o=Ts(t,r);Vt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Kd,o[a])}function Ix(n,e,t){const i=this.cache,r=e.length,o=Ts(t,r);Vt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qd,o[a])}function Lx(n){switch(n){case 5126:return px;case 35664:return fx;case 35665:return mx;case 35666:return gx;case 35674:return _x;case 35675:return vx;case 35676:return yx;case 5124:case 35670:return xx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return bx;case 5125:return Tx;case 36294:return wx;case 36295:return Ex;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Ix}}class Dx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dx(t.type)}}class Ux{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lx(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,t[s.id],i)}}}const ac=/(\w+)(\])?(\[|\.)?/g;function tp(n,e){n.seq.push(e),n.map[e.id]=e}function Ox(n,e,t){const i=n.name,r=i.length;for(ac.lastIndex=0;;){const o=ac.exec(i),a=ac.lastIndex;let s=o[1];const c=o[2]==="]",u=o[3];if(c&&(s=s|0),u===void 0||u==="["&&a+2===r){tp(t,u===void 0?new Dx(s,n,e):new Ux(s,n,e));break}else{let p=t.map[s];p===void 0&&(p=new Nx(s),tp(t,p)),t=p}}}class ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);Ox(o,a,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ip(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bx=37297;let kx=0;function Fx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function zx(n){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(n);let i;switch(e===t?i="":e===es&&t===Ja?i="LinearDisplayP3ToLinearSRGB":e===Ja&&t===es&&(i="LinearSRGBToLinearDisplayP3"),n){case Ft:case $a:return[i,"LinearTransferOETF"];case ti:case Il:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function np(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Fx(n.getShaderSource(e),a)}else return r}function Hx(n,e){const t=zx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vx(n,e){let t;switch(e){case lh:t="Linear";break;case ch:t="Reinhard";break;case uh:t="OptimizedCineon";break;case hh:t="ACESFilmic";break;case dh:t="AgX";break;case ph:t="Neutral";break;case Fg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function Wx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),a=o.name;let s=1;o.type===n.FLOAT_MAT2&&(s=2),o.type===n.FLOAT_MAT3&&(s=3),o.type===n.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:s}}return t}function ha(n){return n!==""}function rp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function op(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(n){return n.replace(Xx,Yx)}const qx=new Map;function Yx(n,e){let t=st[e];if(t===void 0){const i=qx.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sc(t)}const Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(n){return n.replace(Kx,Zx)}function Zx(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function sp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function $x(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case $r:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function e1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sh:e="ENVMAP_BLENDING_MULTIPLY";break;case Bg:e="ENVMAP_BLENDING_MIX";break;case kg:e="ENVMAP_BLENDING_ADD";break}return e}function t1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function i1(n,e,t,i){const r=n.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const c=$x(t),u=Qx(t),p=Jx(t),l=e1(t),h=t1(t),d=Gx(t),m=Wx(o),_=r.createProgram();let g,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ha).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ha).join(`
`),f.length>0&&(f+=`
`)):(g=[sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),f=[sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?st.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Hx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),a=sc(a),a=rp(a,t),a=op(a,t),s=sc(s),s=rp(s,t),s=op(s,t),a=ap(a),s=ap(s),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+g+a,M=x+f+s,P=ip(r,r.VERTEX_SHADER,y),S=ip(r,r.FRAGMENT_SHADER,M);r.attachShader(_,P),r.attachShader(_,S),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(F){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(P).trim(),Y=r.getShaderInfoLog(S).trim();let q=!0,ie=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,S);else{const ne=np(r,P,"vertex"),Q=np(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+j+`
`+ne+`
`+Q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(B===""||Y==="")&&(ie=!1);ie&&(F.diagnostics={runnable:q,programLog:j,vertexShader:{log:B,prefix:g},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(P),r.deleteShader(S),I=new ws(r,_),b=jx(r,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,Bx)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=S,this}let n1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new o1(e),t.set(e,i)),i}}class o1{constructor(e){this.id=n1++,this.code=e,this.usedTimes=0}}function a1(n,e,t,i,r,o,a){const s=new Gl,c=new r1,u=new Set,p=[],l=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return u.add(b),b===0?"uv":`uv${b}`}function g(b,T,F,j,B){const Y=j.fog,q=B.geometry,ie=b.isMeshStandardMaterial?j.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||ie),Q=ne&&ne.mapping===Ya?ne.image.height:null,se=m[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Le=de!==void 0?de.length:0;let je=0;q.morphAttributes.position!==void 0&&(je=1),q.morphAttributes.normal!==void 0&&(je=2),q.morphAttributes.color!==void 0&&(je=3);let Fe,te,pe,Ce;if(se){const z=un[se];Fe=z.vertexShader,te=z.fragmentShader}else Fe=b.vertexShader,te=b.fragmentShader,c.update(b),pe=c.getVertexShaderID(b),Ce=c.getFragmentShaderID(b);const xe=n.getRenderTarget(),Je=B.isInstancedMesh===!0,Ze=B.isBatchedMesh===!0,H=!!b.map,et=!!b.matcap,ze=!!ne,ot=!!b.aoMap,Oe=!!b.lightMap,Ve=!!b.bumpMap,tt=!!b.normalMap,he=!!b.displacementMap,mt=!!b.emissiveMap,O=!!b.metalnessMap,R=!!b.roughnessMap,J=b.anisotropy>0,le=b.clearcoat>0,me=b.dispersion>0,fe=b.iridescence>0,He=b.sheen>0,Te=b.transmission>0,we=J&&!!b.anisotropyMap,Ye=le&&!!b.clearcoatMap,Me=le&&!!b.clearcoatNormalMap,Ge=le&&!!b.clearcoatRoughnessMap,ut=fe&&!!b.iridescenceMap,We=fe&&!!b.iridescenceThicknessMap,Ue=He&&!!b.sheenColorMap,it=He&&!!b.sheenRoughnessMap,at=!!b.specularMap,gt=!!b.specularColorMap,U=!!b.specularIntensityMap,D=Te&&!!b.transmissionMap,ee=Te&&!!b.thicknessMap,Z=!!b.gradientMap,_e=!!b.alphaMap,v=b.alphaTest>0,w=!!b.alphaHash,L=!!b.extensions;let k=Gn;b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(k=n.toneMapping);const $={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:Fe,fragmentShader:te,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ze,instancing:Je,instancingColor:Je&&B.instanceColor!==null,instancingMorph:Je&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ft,alphaToCoverage:!!b.alphaToCoverage,map:H,matcap:et,envMap:ze,envMapMode:ze&&ne.mapping,envMapCubeUVHeight:Q,aoMap:ot,lightMap:Oe,bumpMap:Ve,normalMap:tt,displacementMap:h&&he,emissiveMap:mt,normalMapObjectSpace:tt&&b.normalMapType===Jg,normalMapTangentSpace:tt&&b.normalMapType===td,metalnessMap:O,roughnessMap:R,anisotropy:J,anisotropyMap:we,clearcoat:le,clearcoatMap:Ye,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ge,dispersion:me,iridescence:fe,iridescenceMap:ut,iridescenceThicknessMap:We,sheen:He,sheenColorMap:Ue,sheenRoughnessMap:it,specularMap:at,specularColorMap:gt,specularIntensityMap:U,transmission:Te,transmissionMap:D,thicknessMap:ee,gradientMap:Z,opaque:b.transparent===!1&&b.blending===Kr&&b.alphaToCoverage===!1,alphaMap:_e,alphaTest:v,alphaHash:w,combine:b.combine,mapUv:H&&_(b.map.channel),aoMapUv:ot&&_(b.aoMap.channel),lightMapUv:Oe&&_(b.lightMap.channel),bumpMapUv:Ve&&_(b.bumpMap.channel),normalMapUv:tt&&_(b.normalMap.channel),displacementMapUv:he&&_(b.displacementMap.channel),emissiveMapUv:mt&&_(b.emissiveMap.channel),metalnessMapUv:O&&_(b.metalnessMap.channel),roughnessMapUv:R&&_(b.roughnessMap.channel),anisotropyMapUv:we&&_(b.anisotropyMap.channel),clearcoatMapUv:Ye&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:it&&_(b.sheenRoughnessMap.channel),specularMapUv:at&&_(b.specularMap.channel),specularColorMapUv:gt&&_(b.specularColorMap.channel),specularIntensityMapUv:U&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:ee&&_(b.thicknessMap.channel),alphaMapUv:_e&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(tt||J),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(H||_e),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:je,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:k,useLegacyLights:n._useLegacyLights,decodeVideoTexture:H&&b.map.isVideoTexture===!0&&pt.getTransfer(b.map.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Jt,flipSided:b.side===fi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:L&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:L&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $.vertexUv1s=u.has(1),$.vertexUv2s=u.has(2),$.vertexUv3s=u.has(3),u.clear(),$}function f(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)T.push(F),T.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(x(T,b),y(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function x(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){s.disableAll(),T.supportsVertexTextures&&s.enable(0),T.instancing&&s.enable(1),T.instancingColor&&s.enable(2),T.instancingMorph&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),T.alphaHash&&s.enable(18),T.batching&&s.enable(19),T.dispersion&&s.enable(20),b.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.alphaToCoverage&&s.enable(20),b.push(s.mask)}function M(b){const T=m[b.type];let F;if(T){const j=un[T];F=Mr.clone(j.uniforms)}else F=b.uniforms;return F}function P(b,T){let F;for(let j=0,B=p.length;j<B;j++){const Y=p[j];if(Y.cacheKey===T){F=Y,++F.usedTimes;break}}return F===void 0&&(F=new i1(n,T,b,o),p.push(F)),F}function S(b){if(--b.usedTimes===0){const T=p.indexOf(b);p[T]=p[p.length-1],p.pop(),b.destroy()}}function E(b){c.remove(b)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:M,acquireProgram:P,releaseProgram:S,releaseShaderCache:E,programs:p,dispose:I}}function s1(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function i(o,a,s){n.get(o)[a]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function l1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cp(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(l,h,d,m,_,g){let f=n[e];return f===void 0?(f={id:l.id,object:l,geometry:h,material:d,groupOrder:m,renderOrder:l.renderOrder,z:_,group:g},n[e]=f):(f.id=l.id,f.object=l,f.geometry=h,f.material=d,f.groupOrder=m,f.renderOrder=l.renderOrder,f.z=_,f.group=g),e++,f}function s(l,h,d,m,_,g){const f=a(l,h,d,m,_,g);d.transmission>0?i.push(f):d.transparent===!0?r.push(f):t.push(f)}function c(l,h,d,m,_,g){const f=a(l,h,d,m,_,g);d.transmission>0?i.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function u(l,h){t.length>1&&t.sort(l||l1),i.length>1&&i.sort(h||lp),r.length>1&&r.sort(h||lp)}function p(){for(let l=e,h=n.length;l<h;l++){const d=n[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:s,unshift:c,finish:p,sort:u}}function c1(){let n=new WeakMap;function e(i,r){const o=n.get(i);let a;return o===void 0?(a=new cp,n.set(i,[a])):r>=o.length?(a=new cp,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function u1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ke};break;case"SpotLight":t={position:new N,direction:new N,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function h1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let d1=0;function p1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function f1(n){const e=new u1,t=h1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,o=new Qe,a=new Qe;function s(u,p){let l=0,h=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let m=0,_=0,g=0,f=0,x=0,y=0,M=0,P=0,S=0,E=0,I=0;u.sort(p1);const b=p===!0?Math.PI:1;for(let F=0,j=u.length;F<j;F++){const B=u[F],Y=B.color,q=B.intensity,ie=B.distance,ne=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)l+=Y.r*q*b,h+=Y.g*q*b,d+=Y.b*q*b;else if(B.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(B.sh.coefficients[Q],q);I++}else if(B.isDirectionalLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*b),B.castShadow){const se=B.shadow,de=t.get(B);de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,i.directionalShadow[m]=de,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=B.shadow.matrix,y++}i.directional[m]=Q,m++}else if(B.isSpotLight){const Q=e.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(Y).multiplyScalar(q*b),Q.distance=ie,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,i.spot[g]=Q;const se=B.shadow;if(B.map&&(i.spotLightMap[S]=B.map,S++,se.updateMatrices(B),B.castShadow&&E++),i.spotLightMatrix[g]=se.matrix,B.castShadow){const de=t.get(B);de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,i.spotShadow[g]=de,i.spotShadowMap[g]=ne,P++}g++}else if(B.isRectAreaLight){const Q=e.get(B);Q.color.copy(Y).multiplyScalar(q),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),i.rectArea[f]=Q,f++}else if(B.isPointLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*b),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const se=B.shadow,de=t.get(B);de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,de.shadowCameraNear=se.camera.near,de.shadowCameraFar=se.camera.far,i.pointShadow[_]=de,i.pointShadowMap[_]=ne,i.pointShadowMatrix[_]=B.shadow.matrix,M++}i.point[_]=Q,_++}else if(B.isHemisphereLight){const Q=e.get(B);Q.skyColor.copy(B.color).multiplyScalar(q*b),Q.groundColor.copy(B.groundColor).multiplyScalar(q*b),i.hemi[x]=Q,x++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==m||T.pointLength!==_||T.spotLength!==g||T.rectAreaLength!==f||T.hemiLength!==x||T.numDirectionalShadows!==y||T.numPointShadows!==M||T.numSpotShadows!==P||T.numSpotMaps!==S||T.numLightProbes!==I)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=f,i.point.length=_,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=P+S-E,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=I,T.directionalLength=m,T.pointLength=_,T.spotLength=g,T.rectAreaLength=f,T.hemiLength=x,T.numDirectionalShadows=y,T.numPointShadows=M,T.numSpotShadows=P,T.numSpotMaps=S,T.numLightProbes=I,i.version=d1++)}function c(u,p){let l=0,h=0,d=0,m=0,_=0;const g=p.matrixWorldInverse;for(let f=0,x=u.length;f<x;f++){const y=u[f];if(y.isDirectionalLight){const M=i.directional[l];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),l++}else if(y.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:s,setupView:c,state:i}}function up(n){const e=new f1(n),t=[],i=[];function r(p){u.camera=p,t.length=0,i.length=0}function o(p){t.push(p)}function a(p){i.push(p)}function s(p){e.setup(t,p)}function c(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:s,setupLightsView:c,pushLight:o,pushShadow:a}}function m1(n){let e=new WeakMap;function t(r,o=0){const a=e.get(r);let s;return a===void 0?(s=new up(n),e.set(r,[s])):o>=a.length?(s=new up(n),a.push(s)):s=a[o],s}function i(){e=new WeakMap}return{get:t,dispose:i}}class hp extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g1 extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
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
}`;function y1(n,e,t){let i=new Jl;const r=new Ie,o=new Ie,a=new Mt,s=new hp({depthPacking:ed}),c=new g1,u={},p=t.maxTextureSize,l={[Tn]:fi,[fi]:Tn,[Jt]:Jt},h=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:_1,fragmentShader:v1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ni;m.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let f=this.type;this.render=function(S,E,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const b=n.getRenderTarget(),T=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Yi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const B=f!==bn&&this.type===bn,Y=f===bn&&this.type!==bn;for(let q=0,ie=S.length;q<ie;q++){const ne=S[q],Q=ne.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const se=Q.getFrameExtents();if(r.multiply(se),o.copy(Q.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/se.x),r.x=o.x*se.x,Q.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/se.y),r.y=o.y*se.y,Q.mapSize.y=o.y)),Q.map===null||B===!0||Y===!0){const Le=this.type!==bn?{minFilter:li,magFilter:li}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Xt(r.x,r.y,Le),Q.map.texture.name=ne.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const de=Q.getViewportCount();for(let Le=0;Le<de;Le++){const je=Q.getViewport(Le);a.set(o.x*je.x,o.y*je.y,o.x*je.z,o.y*je.w),j.viewport(a),Q.updateMatrices(ne,Le),i=Q.getFrustum(),M(E,I,Q.camera,ne,this.type)}Q.isPointLightShadow!==!0&&this.type===bn&&x(Q,I),Q.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(b,T,F)};function x(S,E){const I=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Xt(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,I,h,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,I,d,_,null)}function y(S,E,I,b){let T=null;const F=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)T=F;else if(T=I.isPointLight===!0?c:s,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const j=T.uuid,B=E.uuid;let Y=u[j];Y===void 0&&(Y={},u[j]=Y);let q=Y[B];q===void 0&&(q=T.clone(),Y[B]=q,E.addEventListener("dispose",P)),T=q}if(T.visible=E.visible,T.wireframe=E.wireframe,b===bn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:l[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const j=n.properties.get(T);j.light=I}return T}function M(S,E,I,b,T){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===bn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);const j=e.update(S),B=S.material;if(Array.isArray(B)){const Y=j.groups;for(let q=0,ie=Y.length;q<ie;q++){const ne=Y[q],Q=B[ne.materialIndex];if(Q&&Q.visible){const se=y(S,Q,b,T);S.onBeforeShadow(n,S,E,I,j,se,ne),n.renderBufferDirect(I,null,j,se,S,ne),S.onAfterShadow(n,S,E,I,j,se,ne)}}}else if(B.visible){const Y=y(S,B,b,T);S.onBeforeShadow(n,S,E,I,j,Y,null),n.renderBufferDirect(I,null,j,Y,S,null),S.onAfterShadow(n,S,E,I,j,Y,null)}}const F=S.children;for(let j=0,B=F.length;j<B;j++)M(F[j],E,I,b,T)}function P(S){S.target.removeEventListener("dispose",P);for(const E in u){const I=u[E],b=S.target.uuid;b in I&&(I[b].dispose(),delete I[b])}}}function x1(n){function e(){let D=!1;const ee=new Mt;let Z=null;const _e=new Mt(0,0,0,0);return{setMask:function(v){Z!==v&&!D&&(n.colorMask(v,v,v,v),Z=v)},setLocked:function(v){D=v},setClear:function(v,w,L,k,$){$===!0&&(v*=k,w*=k,L*=k),ee.set(v,w,L,k),_e.equals(ee)===!1&&(n.clearColor(v,w,L,k),_e.copy(ee))},reset:function(){D=!1,Z=null,_e.set(-1,0,0,0)}}}function t(){let D=!1,ee=null,Z=null,_e=null;return{setTest:function(v){v?Ce(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(v){ee!==v&&!D&&(n.depthMask(v),ee=v)},setFunc:function(v){if(Z!==v){switch(v){case Pg:n.depthFunc(n.NEVER);break;case Ig:n.depthFunc(n.ALWAYS);break;case Lg:n.depthFunc(n.LESS);break;case Xa:n.depthFunc(n.LEQUAL);break;case Dg:n.depthFunc(n.EQUAL);break;case Ug:n.depthFunc(n.GEQUAL);break;case Ng:n.depthFunc(n.GREATER);break;case Og:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=v}},setLocked:function(v){D=v},setClear:function(v){_e!==v&&(n.clearDepth(v),_e=v)},reset:function(){D=!1,ee=null,Z=null,_e=null}}}function i(){let D=!1,ee=null,Z=null,_e=null,v=null,w=null,L=null,k=null,$=null;return{setTest:function(z){D||(z?Ce(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(z){ee!==z&&!D&&(n.stencilMask(z),ee=z)},setFunc:function(z,re,ce){(Z!==z||_e!==re||v!==ce)&&(n.stencilFunc(z,re,ce),Z=z,_e=re,v=ce)},setOp:function(z,re,ce){(w!==z||L!==re||k!==ce)&&(n.stencilOp(z,re,ce),w=z,L=re,k=ce)},setLocked:function(z){D=z},setClear:function(z){$!==z&&(n.clearStencil(z),$=z)},reset:function(){D=!1,ee=null,Z=null,_e=null,v=null,w=null,L=null,k=null,$=null}}}const r=new e,o=new t,a=new i,s=new WeakMap,c=new WeakMap;let u={},p={},l=new WeakMap,h=[],d=null,m=!1,_=null,g=null,f=null,x=null,y=null,M=null,P=null,S=new ke(0,0,0),E=0,I=!1,b=null,T=null,F=null,j=null,B=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ie=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ne)[1]),q=ie>=1):ne.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),q=ie>=2);let Q=null,se={};const de=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),je=new Mt().fromArray(de),Fe=new Mt().fromArray(Le);function te(D,ee,Z,_e){const v=new Uint8Array(4),w=n.createTexture();n.bindTexture(D,w),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let L=0;L<Z;L++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,v):n.texImage2D(ee+L,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,v);return w}const pe={};pe[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ce(n.DEPTH_TEST),o.setFunc(Xa),Ve(!1),tt(ih),Ce(n.CULL_FACE),ot(Yi);function Ce(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function xe(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Je(D,ee){return p[D]!==ee?(n.bindFramebuffer(D,ee),p[D]=ee,D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ee),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ze(D,ee){let Z=h,_e=!1;if(D){Z=l.get(ee),Z===void 0&&(Z=[],l.set(ee,Z));const v=D.textures;if(Z.length!==v.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let w=0,L=v.length;w<L;w++)Z[w]=n.COLOR_ATTACHMENT0+w;Z.length=v.length,_e=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,_e=!0);_e&&n.drawBuffers(Z)}function H(D){return d!==D?(n.useProgram(D),d=D,!0):!1}const et={[gr]:n.FUNC_ADD,[pg]:n.FUNC_SUBTRACT,[fg]:n.FUNC_REVERSE_SUBTRACT};et[mg]=n.MIN,et[gg]=n.MAX;const ze={[_g]:n.ZERO,[vg]:n.ONE,[yg]:n.SRC_COLOR,[xl]:n.SRC_ALPHA,[wg]:n.SRC_ALPHA_SATURATE,[bg]:n.DST_COLOR,[Mg]:n.DST_ALPHA,[xg]:n.ONE_MINUS_SRC_COLOR,[Ml]:n.ONE_MINUS_SRC_ALPHA,[Tg]:n.ONE_MINUS_DST_COLOR,[Sg]:n.ONE_MINUS_DST_ALPHA,[Eg]:n.CONSTANT_COLOR,[Ag]:n.ONE_MINUS_CONSTANT_COLOR,[Rg]:n.CONSTANT_ALPHA,[Cg]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(D,ee,Z,_e,v,w,L,k,$,z){if(D===Yi){m===!0&&(xe(n.BLEND),m=!1);return}if(m===!1&&(Ce(n.BLEND),m=!0),D!==dg){if(D!==_||z!==I){if((g!==gr||y!==gr)&&(n.blendEquation(n.FUNC_ADD),g=gr,y=gr),z)switch(D){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jo:n.blendFunc(n.ONE,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ah:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,x=null,M=null,P=null,S.set(0,0,0),E=0,_=D,I=z}return}v=v||ee,w=w||Z,L=L||_e,(ee!==g||v!==y)&&(n.blendEquationSeparate(et[ee],et[v]),g=ee,y=v),(Z!==f||_e!==x||w!==M||L!==P)&&(n.blendFuncSeparate(ze[Z],ze[_e],ze[w],ze[L]),f=Z,x=_e,M=w,P=L),(k.equals(S)===!1||$!==E)&&(n.blendColor(k.r,k.g,k.b,$),S.copy(k),E=$),_=D,I=!1}function Oe(D,ee){D.side===Jt?xe(n.CULL_FACE):Ce(n.CULL_FACE);let Z=D.side===fi;ee&&(Z=!Z),Ve(Z),D.blending===Kr&&D.transparent===!1?ot(Yi):ot(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const _e=D.stencilWrite;a.setTest(_e),_e&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),mt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){b!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),b=D)}function tt(D){D!==ug?(Ce(n.CULL_FACE),D!==T&&(D===ih?n.cullFace(n.BACK):D===hg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),T=D}function he(D){D!==F&&(q&&n.lineWidth(D),F=D)}function mt(D,ee,Z){D?(Ce(n.POLYGON_OFFSET_FILL),(j!==ee||B!==Z)&&(n.polygonOffset(ee,Z),j=ee,B=Z)):xe(n.POLYGON_OFFSET_FILL)}function O(D){D?Ce(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function R(D){D===void 0&&(D=n.TEXTURE0+Y-1),Q!==D&&(n.activeTexture(D),Q=D)}function J(D,ee,Z){Z===void 0&&(Q===null?Z=n.TEXTURE0+Y-1:Z=Q);let _e=se[Z];_e===void 0&&(_e={type:void 0,texture:void 0},se[Z]=_e),(_e.type!==D||_e.texture!==ee)&&(Q!==Z&&(n.activeTexture(Z),Q=Z),n.bindTexture(D,ee||pe[D]),_e.type=D,_e.texture=ee)}function le(){const D=se[Q];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(D){je.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),je.copy(D))}function it(D){Fe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function at(D,ee){let Z=c.get(ee);Z===void 0&&(Z=new WeakMap,c.set(ee,Z));let _e=Z.get(D);_e===void 0&&(_e=n.getUniformBlockIndex(ee,D.name),Z.set(D,_e))}function gt(D,ee){const Z=c.get(ee).get(D);s.get(ee)!==Z&&(n.uniformBlockBinding(ee,Z,D.__bindingPointIndex),s.set(ee,Z))}function U(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,se={},p={},l=new WeakMap,h=[],d=null,m=!1,_=null,g=null,f=null,x=null,y=null,M=null,P=null,S=new ke(0,0,0),E=0,I=!1,b=null,T=null,F=null,j=null,B=null,je.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ce,disable:xe,bindFramebuffer:Je,drawBuffers:Ze,useProgram:H,setBlending:ot,setMaterial:Oe,setFlipSided:Ve,setCullFace:tt,setLineWidth:he,setPolygonOffset:mt,setScissorTest:O,activeTexture:R,bindTexture:J,unbindTexture:le,compressedTexImage2D:me,compressedTexImage3D:fe,texImage2D:ut,texImage3D:We,updateUBOMapping:at,uniformBlockBinding:gt,texStorage2D:Me,texStorage3D:Ge,texSubImage2D:He,texSubImage3D:Te,compressedTexSubImage2D:we,compressedTexSubImage3D:Ye,scissor:Ue,viewport:it,reset:U}}function M1(n,e,t,i,r,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,p=new WeakMap;let l;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(O,R){return d?new OffscreenCanvas(O,R):aa("canvas")}function _(O,R,J){let le=1;const me=mt(O);if((me.width>J||me.height>J)&&(le=J/Math.max(me.width,me.height)),le<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const fe=Math.floor(le*me.width),He=Math.floor(le*me.height);l===void 0&&(l=m(fe,He));const Te=R?m(fe,He):l;return Te.width=fe,Te.height=He,Te.getContext("2d").drawImage(O,0,0,fe,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+fe+"x"+He+")."),Te}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),O;return O}function g(O){return O.generateMipmaps&&O.minFilter!==li&&O.minFilter!==Ut}function f(O){n.generateMipmap(O)}function x(O,R,J,le,me=!1){if(O!==null){if(n[O]!==void 0)return n[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let fe=R;if(R===n.RED&&(J===n.FLOAT&&(fe=n.R32F),J===n.HALF_FLOAT&&(fe=n.R16F),J===n.UNSIGNED_BYTE&&(fe=n.R8)),R===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(fe=n.R8UI),J===n.UNSIGNED_SHORT&&(fe=n.R16UI),J===n.UNSIGNED_INT&&(fe=n.R32UI),J===n.BYTE&&(fe=n.R8I),J===n.SHORT&&(fe=n.R16I),J===n.INT&&(fe=n.R32I)),R===n.RG&&(J===n.FLOAT&&(fe=n.RG32F),J===n.HALF_FLOAT&&(fe=n.RG16F),J===n.UNSIGNED_BYTE&&(fe=n.RG8)),R===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(fe=n.RG8UI),J===n.UNSIGNED_SHORT&&(fe=n.RG16UI),J===n.UNSIGNED_INT&&(fe=n.RG32UI),J===n.BYTE&&(fe=n.RG8I),J===n.SHORT&&(fe=n.RG16I),J===n.INT&&(fe=n.RG32I)),R===n.RGB&&J===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),R===n.RGBA){const He=me?Qa:pt.getTransfer(le);J===n.FLOAT&&(fe=n.RGBA32F),J===n.HALF_FLOAT&&(fe=n.RGBA16F),J===n.UNSIGNED_BYTE&&(fe=He===bt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function y(O,R){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==li&&O.minFilter!==Ut?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function M(O){const R=O.target;R.removeEventListener("dispose",M),S(R),R.isVideoTexture&&p.delete(R)}function P(O){const R=O.target;R.removeEventListener("dispose",P),I(R)}function S(O){const R=i.get(O);if(R.__webglInit===void 0)return;const J=O.source,le=h.get(J);if(le){const me=le[R.__cacheKey];me.usedTimes--,me.usedTimes===0&&E(O),Object.keys(le).length===0&&h.delete(J)}i.remove(O)}function E(O){const R=i.get(O);n.deleteTexture(R.__webglTexture);const J=O.source,le=h.get(J);delete le[R.__cacheKey],a.memory.textures--}function I(O){const R=i.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(R.__webglFramebuffer[le]))for(let me=0;me<R.__webglFramebuffer[le].length;me++)n.deleteFramebuffer(R.__webglFramebuffer[le][me]);else n.deleteFramebuffer(R.__webglFramebuffer[le]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[le])}else{if(Array.isArray(R.__webglFramebuffer))for(let le=0;le<R.__webglFramebuffer.length;le++)n.deleteFramebuffer(R.__webglFramebuffer[le]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let le=0;le<R.__webglColorRenderbuffer.length;le++)R.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[le]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const J=O.textures;for(let le=0,me=J.length;le<me;le++){const fe=i.get(J[le]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(J[le])}i.remove(O)}let b=0;function T(){b=0}function F(){const O=b;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),b+=1,O}function j(O){const R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function B(O,R){const J=i.get(O);if(O.isVideoTexture&&tt(O),O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){const le=O.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(J,O,R);return}}t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+R)}function Y(O,R){const J=i.get(O);if(O.version>0&&J.__version!==O.version){je(J,O,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+R)}function q(O,R){const J=i.get(O);if(O.version>0&&J.__version!==O.version){je(J,O,R);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+R)}function ie(O,R){const J=i.get(O);if(O.version>0&&J.__version!==O.version){Fe(J,O,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+R)}const ne={[Qr]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},Q={[li]:n.NEAREST,[gh]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[Ut]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[an]:n.LINEAR_MIPMAP_LINEAR},se={[e_]:n.NEVER,[a_]:n.ALWAYS,[t_]:n.LESS,[nd]:n.LEQUAL,[i_]:n.EQUAL,[o_]:n.GEQUAL,[n_]:n.GREATER,[r_]:n.NOTEQUAL};function de(O,R){if(R.type===ei&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ut||R.magFilter===Za||R.magFilter===ea||R.magFilter===an||R.minFilter===Ut||R.minFilter===Za||R.minFilter===ea||R.minFilter===an)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,ne[R.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,ne[R.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,ne[R.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,Q[R.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,Q[R.minFilter]),R.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,se[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===li||R.minFilter!==ea&&R.minFilter!==an||R.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Le(O,R){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",M));const le=R.source;let me=h.get(le);me===void 0&&(me={},h.set(le,me));const fe=j(R);if(fe!==O.__cacheKey){me[fe]===void 0&&(me[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),me[fe].usedTimes++;const He=me[O.__cacheKey];He!==void 0&&(me[O.__cacheKey].usedTimes--,He.usedTimes===0&&E(R)),O.__cacheKey=fe,O.__webglTexture=me[fe].texture}return J}function je(O,R,J){let le=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(le=n.TEXTURE_3D);const me=Le(O,R),fe=R.source;t.bindTexture(le,O.__webglTexture,n.TEXTURE0+J);const He=i.get(fe);if(fe.version!==He.__version||me===!0){t.activeTexture(n.TEXTURE0+J);const Te=pt.getPrimaries(pt.workingColorSpace),we=R.colorSpace===wn?null:pt.getPrimaries(R.colorSpace),Ye=R.colorSpace===wn||Te===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Me=_(R.image,!1,r.maxTextureSize);Me=he(R,Me);const Ge=o.convert(R.format,R.colorSpace),ut=o.convert(R.type);let We=x(R.internalFormat,Ge,ut,R.colorSpace,R.isVideoTexture);de(le,R);let Ue;const it=R.mipmaps,at=R.isVideoTexture!==!0,gt=He.__version===void 0||me===!0,U=fe.dataReady,D=y(R,Me);if(R.isDepthTexture)We=n.DEPTH_COMPONENT16,R.type===ei?We=n.DEPTH_COMPONENT32F:R.type===Jr?We=n.DEPTH_COMPONENT24:R.type===ta&&(We=n.DEPTH24_STENCIL8),gt&&(at?t.texStorage2D(n.TEXTURE_2D,1,We,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,We,Me.width,Me.height,0,Ge,ut,null));else if(R.isDataTexture)if(it.length>0){at&&gt&&t.texStorage2D(n.TEXTURE_2D,D,We,it[0].width,it[0].height);for(let ee=0,Z=it.length;ee<Z;ee++)Ue=it[ee],at?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ue.width,Ue.height,Ge,ut,Ue.data):t.texImage2D(n.TEXTURE_2D,ee,We,Ue.width,Ue.height,0,Ge,ut,Ue.data);R.generateMipmaps=!1}else at?(gt&&t.texStorage2D(n.TEXTURE_2D,D,We,Me.width,Me.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,Ge,ut,Me.data)):t.texImage2D(n.TEXTURE_2D,0,We,Me.width,Me.height,0,Ge,ut,Me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){at&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,D,We,it[0].width,it[0].height,Me.depth);for(let ee=0,Z=it.length;ee<Z;ee++)Ue=it[ee],R.format!==ki?Ge!==null?at?U&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Ue.width,Ue.height,Me.depth,Ge,Ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,We,Ue.width,Ue.height,Me.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Ue.width,Ue.height,Me.depth,Ge,ut,Ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,We,Ue.width,Ue.height,Me.depth,0,Ge,ut,Ue.data)}else{at&&gt&&t.texStorage2D(n.TEXTURE_2D,D,We,it[0].width,it[0].height);for(let ee=0,Z=it.length;ee<Z;ee++)Ue=it[ee],R.format!==ki?Ge!==null?at?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Ue.width,Ue.height,Ge,Ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ue.width,Ue.height,Ge,ut,Ue.data):t.texImage2D(n.TEXTURE_2D,ee,We,Ue.width,Ue.height,0,Ge,ut,Ue.data)}else if(R.isDataArrayTexture)at?(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,D,We,Me.width,Me.height,Me.depth),U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ge,ut,Me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,Me.width,Me.height,Me.depth,0,Ge,ut,Me.data);else if(R.isData3DTexture)at?(gt&&t.texStorage3D(n.TEXTURE_3D,D,We,Me.width,Me.height,Me.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ge,ut,Me.data)):t.texImage3D(n.TEXTURE_3D,0,We,Me.width,Me.height,Me.depth,0,Ge,ut,Me.data);else if(R.isFramebufferTexture){if(gt)if(at)t.texStorage2D(n.TEXTURE_2D,D,We,Me.width,Me.height);else{let ee=Me.width,Z=Me.height;for(let _e=0;_e<D;_e++)t.texImage2D(n.TEXTURE_2D,_e,We,ee,Z,0,Ge,ut,null),ee>>=1,Z>>=1}}else if(it.length>0){if(at&&gt){const ee=mt(it[0]);t.texStorage2D(n.TEXTURE_2D,D,We,ee.width,ee.height)}for(let ee=0,Z=it.length;ee<Z;ee++)Ue=it[ee],at?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ge,ut,Ue):t.texImage2D(n.TEXTURE_2D,ee,We,Ge,ut,Ue);R.generateMipmaps=!1}else if(at){if(gt){const ee=mt(Me);t.texStorage2D(n.TEXTURE_2D,D,We,ee.width,ee.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,ut,Me)}else t.texImage2D(n.TEXTURE_2D,0,We,Ge,ut,Me);g(R)&&f(le),He.__version=fe.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function Fe(O,R,J){if(R.image.length!==6)return;const le=Le(O,R),me=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+J);const fe=i.get(me);if(me.version!==fe.__version||le===!0){t.activeTexture(n.TEXTURE0+J);const He=pt.getPrimaries(pt.workingColorSpace),Te=R.colorSpace===wn?null:pt.getPrimaries(R.colorSpace),we=R.colorSpace===wn||He===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ye=R.isCompressedTexture||R.image[0].isCompressedTexture,Me=R.image[0]&&R.image[0].isDataTexture,Ge=[];for(let Z=0;Z<6;Z++)!Ye&&!Me?Ge[Z]=_(R.image[Z],!0,r.maxCubemapSize):Ge[Z]=Me?R.image[Z].image:R.image[Z],Ge[Z]=he(R,Ge[Z]);const ut=Ge[0],We=o.convert(R.format,R.colorSpace),Ue=o.convert(R.type),it=x(R.internalFormat,We,Ue,R.colorSpace),at=R.isVideoTexture!==!0,gt=fe.__version===void 0||le===!0,U=me.dataReady;let D=y(R,ut);de(n.TEXTURE_CUBE_MAP,R);let ee;if(Ye){at&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,it,ut.width,ut.height);for(let Z=0;Z<6;Z++){ee=Ge[Z].mipmaps;for(let _e=0;_e<ee.length;_e++){const v=ee[_e];R.format!==ki?We!==null?at?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,v.width,v.height,We,v.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,it,v.width,v.height,0,v.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,v.width,v.height,We,Ue,v.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,it,v.width,v.height,0,We,Ue,v.data)}}}else{if(ee=R.mipmaps,at&&gt){ee.length>0&&D++;const Z=mt(Ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,D,it,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Me){at?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ge[Z].width,Ge[Z].height,We,Ue,Ge[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,it,Ge[Z].width,Ge[Z].height,0,We,Ue,Ge[Z].data);for(let _e=0;_e<ee.length;_e++){const v=ee[_e].image[Z].image;at?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,v.width,v.height,We,Ue,v.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,it,v.width,v.height,0,We,Ue,v.data)}}else{at?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,We,Ue,Ge[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,it,We,Ue,Ge[Z]);for(let _e=0;_e<ee.length;_e++){const v=ee[_e];at?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,We,Ue,v.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,it,We,Ue,v.image[Z])}}}g(R)&&f(n.TEXTURE_CUBE_MAP),fe.__version=me.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function te(O,R,J,le,me,fe){const He=o.convert(J.format,J.colorSpace),Te=o.convert(J.type),we=x(J.internalFormat,He,Te,J.colorSpace);if(!i.get(R).__hasExternalTextures){const Ye=Math.max(1,R.width>>fe),Me=Math.max(1,R.height>>fe);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,fe,we,Ye,Me,R.depth,0,He,Te,null):t.texImage2D(me,fe,we,Ye,Me,0,He,Te,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),Ve(R)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,me,i.get(J).__webglTexture,0,Oe(R)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,me,i.get(J).__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(O,R,J){if(n.bindRenderbuffer(n.RENDERBUFFER,O),R.depthBuffer&&!R.stencilBuffer){let le=n.DEPTH_COMPONENT24;if(J||Ve(R)){const me=R.depthTexture;me&&me.isDepthTexture&&(me.type===ei?le=n.DEPTH_COMPONENT32F:me.type===Jr&&(le=n.DEPTH_COMPONENT24));const fe=Oe(R);Ve(R)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,le,R.width,R.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,le,R.width,R.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,R.width,R.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,O)}else if(R.depthBuffer&&R.stencilBuffer){const le=Oe(R);J&&Ve(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,R.width,R.height):Ve(R)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,O)}else{const le=R.textures;for(let me=0;me<le.length;me++){const fe=le[me],He=o.convert(fe.format,fe.colorSpace),Te=o.convert(fe.type),we=x(fe.internalFormat,He,Te,fe.colorSpace),Ye=Oe(R);J&&Ve(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,we,R.width,R.height):Ve(R)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,we,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,we,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(O,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),B(R.depthTexture,0);const J=i.get(R.depthTexture).__webglTexture,le=Oe(R);if(R.depthTexture.format===eo)Ve(R)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(R.depthTexture.format===ia)Ve(R)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function xe(O){const R=i.get(O),J=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ce(R.__webglFramebuffer,O)}else if(J){R.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[le]),R.__webglDepthbuffer[le]=n.createRenderbuffer(),pe(R.__webglDepthbuffer[le],O,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=n.createRenderbuffer(),pe(R.__webglDepthbuffer,O,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(O,R,J){const le=i.get(O);R!==void 0&&te(le.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&xe(O)}function Ze(O){const R=O.texture,J=i.get(O),le=i.get(R);O.addEventListener("dispose",P);const me=O.textures,fe=O.isWebGLCubeRenderTarget===!0,He=me.length>1;if(He||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=R.version,a.memory.textures++),fe){J.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[Te]=[];for(let we=0;we<R.mipmaps.length;we++)J.__webglFramebuffer[Te][we]=n.createFramebuffer()}else J.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let Te=0;Te<R.mipmaps.length;Te++)J.__webglFramebuffer[Te]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(He)for(let Te=0,we=me.length;Te<we;Te++){const Ye=i.get(me[Te]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(O.samples>0&&Ve(O)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const we=me[Te];J.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[Te]);const Ye=o.convert(we.format,we.colorSpace),Me=o.convert(we.type),Ge=x(we.internalFormat,Ye,Me,we.colorSpace,O.isXRRenderTarget===!0),ut=Oe(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Ge,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,J.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(J.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),de(n.TEXTURE_CUBE_MAP,R);for(let Te=0;Te<6;Te++)if(R.mipmaps&&R.mipmaps.length>0)for(let we=0;we<R.mipmaps.length;we++)te(J.__webglFramebuffer[Te][we],O,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,we);else te(J.__webglFramebuffer[Te],O,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);g(R)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Te=0,we=me.length;Te<we;Te++){const Ye=me[Te],Me=i.get(Ye);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),de(n.TEXTURE_2D,Ye),te(J.__webglFramebuffer,O,Ye,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,0),g(Ye)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Te=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,le.__webglTexture),de(Te,R),R.mipmaps&&R.mipmaps.length>0)for(let we=0;we<R.mipmaps.length;we++)te(J.__webglFramebuffer[we],O,R,n.COLOR_ATTACHMENT0,Te,we);else te(J.__webglFramebuffer,O,R,n.COLOR_ATTACHMENT0,Te,0);g(R)&&f(Te),t.unbindTexture()}O.depthBuffer&&xe(O)}function H(O){const R=O.textures;for(let J=0,le=R.length;J<le;J++){const me=R[J];if(g(me)){const fe=O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,He=i.get(me).__webglTexture;t.bindTexture(fe,He),f(fe),t.unbindTexture()}}}const et=[],ze=[];function ot(O){if(O.samples>0){if(Ve(O)===!1){const R=O.textures,J=O.width,le=O.height;let me=n.COLOR_BUFFER_BIT;const fe=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,He=i.get(O),Te=R.length>1;if(Te)for(let we=0;we<R.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let we=0;we<R.length;we++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),Te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,He.__webglColorRenderbuffer[we]);const Ye=i.get(R[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,J,le,0,0,J,le,me,n.NEAREST),c===!0&&(et.length=0,ze.length=0,et.push(n.COLOR_ATTACHMENT0+we),O.depthBuffer&&O.resolveDepthBuffer===!1&&(et.push(fe),ze.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let we=0;we<R.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,He.__webglColorRenderbuffer[we]);const Ye=i.get(R[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){const R=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Oe(O){return Math.min(r.maxSamples,O.samples)}function Ve(O){const R=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function tt(O){const R=a.render.frame;p.get(O)!==R&&(p.set(O,R),O.update())}function he(O,R){const J=O.colorSpace,le=O.format,me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==Ft&&J!==wn&&(pt.getTransfer(J)===bt?(le!==ki||me!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function mt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(u.width=O.naturalWidth||O.width,u.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(u.width=O.displayWidth,u.height=O.displayHeight):(u.width=O.width,u.height=O.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=T,this.setTexture2D=B,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=ie,this.rebindTextures=Je,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ve}function S1(n,e){function t(i,r=wn){let o;const a=pt.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===yh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hg)return n.BYTE;if(i===Vg)return n.SHORT;if(i===_h)return n.UNSIGNED_SHORT;if(i===vh)return n.INT;if(i===Jr)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===Nt)return n.HALF_FLOAT;if(i===Wg)return n.ALPHA;if(i===jg)return n.RGB;if(i===ki)return n.RGBA;if(i===Xg)return n.LUMINANCE;if(i===qg)return n.LUMINANCE_ALPHA;if(i===eo)return n.DEPTH_COMPONENT;if(i===ia)return n.DEPTH_STENCIL;if(i===bl)return n.RED;if(i===Mh)return n.RED_INTEGER;if(i===Yg)return n.RG;if(i===Sh)return n.RG_INTEGER;if(i===bh)return n.RGBA_INTEGER;if(i===Tl||i===wl||i===El||i===Al)if(a===bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Tl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===El)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Al)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Tl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===El)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Al)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Th||i===wh||i===Eh||i===Ah)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Th)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ah)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rh||i===Ch||i===Ph)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Rh||i===Ch)return a===bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ph)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ih||i===Lh||i===Dh||i===Uh||i===Nh||i===Oh||i===Bh||i===kh||i===Fh||i===zh||i===Hh||i===Vh||i===Gh||i===Wh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ih)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wh)return a===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===jh||i===Xh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Rl)return a===bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kg||i===qh||i===Yh||i===Kh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Rl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===qh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class b1 extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hn extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T1={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null;const s=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),f=this._getHandJoint(u,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const p=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],h=p.position.distanceTo(l.position),d=.02,m=.005;u.inputState.pinching&&h>d+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(T1)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const w1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
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

}`;class A1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Wt,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Pt({vertexShader:w1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $t(new Zo(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class R1 extends _r{constructor(e,t){super();const i=this;let r=null,o=1,a=null,s="local-floor",c=1,u=null,p=null,l=null,h=null,d=null,m=null;const _=new A1,g=t.getContextAttributes();let f=null,x=null;const y=[],M=[],P=new Ie;let S=null;const E=new ui;E.layers.enable(1),E.viewport=new Mt;const I=new ui;I.layers.enable(2),I.viewport=new Mt;const b=[E,I],T=new b1;T.layers.enable(1),T.layers.enable(2);let F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=y[te];return pe===void 0&&(pe=new lc,y[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=y[te];return pe===void 0&&(pe=new lc,y[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=y[te];return pe===void 0&&(pe=new lc,y[te]=pe),pe.getHandSpace()};function B(te){const pe=M.indexOf(te.inputSource);if(pe===-1)return;const Ce=y[pe];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,u||a),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let te=0;te<y.length;te++){const pe=M[te];pe!==null&&(M[te]=null,y[te].disconnect(pe))}F=null,j=null,_.reset(),e.setRenderTarget(f),d=null,h=null,l=null,r=null,x=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return l},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const pe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Xt(d.framebufferWidth,d.framebufferHeight,{format:ki,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let pe=null,Ce=null,xe=null;g.depth&&(xe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=g.stencil?ia:eo,Ce=g.stencil?ta:Jr);const Je={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:o};l=new XRWebGLBinding(r,t),h=l.createProjectionLayer(Je),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Xt(h.textureWidth,h.textureHeight,{format:ki,type:Wn,depthTexture:new Wd(h.textureWidth,h.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(s),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(te){for(let pe=0;pe<te.removed.length;pe++){const Ce=te.removed[pe],xe=M.indexOf(Ce);xe>=0&&(M[xe]=null,y[xe].disconnect(Ce))}for(let pe=0;pe<te.added.length;pe++){const Ce=te.added[pe];let xe=M.indexOf(Ce);if(xe===-1){for(let Ze=0;Ze<y.length;Ze++)if(Ze>=M.length){M.push(Ce),xe=Ze;break}else if(M[Ze]===null){M[Ze]=Ce,xe=Ze;break}if(xe===-1)break}const Je=y[xe];Je&&Je.connect(Ce)}}const ie=new N,ne=new N;function Q(te,pe,Ce){ie.setFromMatrixPosition(pe.matrixWorld),ne.setFromMatrixPosition(Ce.matrixWorld);const xe=ie.distanceTo(ne),Je=pe.projectionMatrix.elements,Ze=Ce.projectionMatrix.elements,H=Je[14]/(Je[10]-1),et=Je[14]/(Je[10]+1),ze=(Je[9]+1)/Je[5],ot=(Je[9]-1)/Je[5],Oe=(Je[8]-1)/Je[0],Ve=(Ze[8]+1)/Ze[0],tt=H*Oe,he=H*Ve,mt=xe/(-Oe+Ve),O=mt*-Oe;pe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(O),te.translateZ(mt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const R=H+mt,J=et+mt,le=tt-O,me=he+(xe-O),fe=ze*et/J*R,He=ot*et/J*R;te.projectionMatrix.makePerspective(le,me,fe,He,R,J),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function se(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;_.texture!==null&&(te.near=_.depthNear,te.far=_.depthFar),T.near=I.near=E.near=te.near,T.far=I.far=E.far=te.far,(F!==T.near||j!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,j=T.far,E.near=F,E.far=j,I.near=F,I.far=j,E.updateProjectionMatrix(),I.updateProjectionMatrix(),te.updateProjectionMatrix());const pe=te.parent,Ce=T.cameras;se(T,pe);for(let xe=0;xe<Ce.length;xe++)se(Ce[xe],pe);Ce.length===2?Q(T,E,I):T.projectionMatrix.copy(E.projectionMatrix),de(te,T,pe)};function de(te,pe,Ce){Ce===null?te.matrix.copy(pe.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(pe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=no*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(te){c=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null};let Le=null;function je(te,pe){if(p=pe.getViewerPose(u||a),m=pe,p!==null){const Ce=p.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let xe=!1;Ce.length!==T.cameras.length&&(T.cameras.length=0,xe=!0);for(let Ze=0;Ze<Ce.length;Ze++){const H=Ce[Ze];let et=null;if(d!==null)et=d.getViewport(H);else{const ot=l.getViewSubImage(h,H);et=ot.viewport,Ze===0&&(e.setRenderTargetTextures(x,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(x))}let ze=b[Ze];ze===void 0&&(ze=new ui,ze.layers.enable(Ze),ze.viewport=new Mt,b[Ze]=ze),ze.matrix.fromArray(H.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(H.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(et.x,et.y,et.width,et.height),Ze===0&&(T.matrix.copy(ze.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xe===!0&&T.cameras.push(ze)}const Je=r.enabledFeatures;if(Je&&Je.includes("depth-sensing")){const Ze=l.getDepthInformation(Ce[0]);Ze&&Ze.isValid&&Ze.texture&&_.init(e,Ze,r.renderState)}}for(let Ce=0;Ce<y.length;Ce++){const xe=M[Ce],Je=y[Ce];xe!==null&&Je!==void 0&&Je.update(xe,pe,u||a)}_.render(e,T),Le&&Le(te,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),m=null}const Fe=new Od;Fe.setAnimationLoop(je),this.setAnimationLoop=function(te){Le=te},this.dispose=function(){}}}const Er=new Mn,C1=new Qe;function P1(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Id(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(g,f):f.isMeshToonMaterial?(o(g,f),l(g,f)):f.isMeshPhongMaterial?(o(g,f),p(g,f)):f.isMeshStandardMaterial?(o(g,f),h(g,f),f.isMeshPhysicalMaterial&&d(g,f,M)):f.isMeshMatcapMaterial?(o(g,f),m(g,f)):f.isMeshDepthMaterial?o(g,f):f.isMeshDistanceMaterial?(o(g,f),_(g,f)):f.isMeshNormalMaterial?o(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&s(g,f)):f.isPointsMaterial?c(g,f,x,y):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===fi&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===fi&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f),y=x.envMap,M=x.envMapRotation;if(y&&(g.envMap.value=y,Er.copy(M),Er.x*=-1,Er.y*=-1,Er.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),g.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Er)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*P,t(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function s(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,x,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=y*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function p(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function l(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fi&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I1(n,e,t,i){let r={},o={},a=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const M=y.program;i.uniformBlockBinding(x,M)}function u(x,y){let M=r[x.id];M===void 0&&(m(x),M=p(x),r[x.id]=M,x.addEventListener("dispose",g));const P=y.program;i.updateUBOMapping(x,P);const S=e.render.frame;o[x.id]!==S&&(h(x),o[x.id]=S)}function p(x){const y=l();x.__bindingPointIndex=y;const M=n.createBuffer(),P=x.__size,S=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function l(){for(let x=0;x<s;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=r[x.id],M=x.uniforms,P=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,E=M.length;S<E;S++){const I=Array.isArray(M[S])?M[S]:[M[S]];for(let b=0,T=I.length;b<T;b++){const F=I[b];if(d(F,S,b,P)===!0){const j=F.__offset,B=Array.isArray(F.value)?F.value:[F.value];let Y=0;for(let q=0;q<B.length;q++){const ie=B[q],ne=_(ie);typeof ie=="number"||typeof ie=="boolean"?(F.__data[0]=ie,n.bufferSubData(n.UNIFORM_BUFFER,j+Y,F.__data)):ie.isMatrix3?(F.__data[0]=ie.elements[0],F.__data[1]=ie.elements[1],F.__data[2]=ie.elements[2],F.__data[3]=0,F.__data[4]=ie.elements[3],F.__data[5]=ie.elements[4],F.__data[6]=ie.elements[5],F.__data[7]=0,F.__data[8]=ie.elements[6],F.__data[9]=ie.elements[7],F.__data[10]=ie.elements[8],F.__data[11]=0):(ie.toArray(F.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,y,M,P){const S=x.value,E=y+"_"+M;if(P[E]===void 0)return typeof S=="number"||typeof S=="boolean"?P[E]=S:P[E]=S.clone(),!0;{const I=P[E];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return P[E]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function m(x){const y=x.uniforms;let M=0;const P=16;for(let E=0,I=y.length;E<I;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let T=0,F=b.length;T<F;T++){const j=b[T],B=Array.isArray(j.value)?j.value:[j.value];for(let Y=0,q=B.length;Y<q;Y++){const ie=B[Y],ne=_(ie),Q=M%P;Q!==0&&P-Q<ne.boundary&&(M+=P-Q),j.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=M,M+=ne.storage}}}const S=M%P;return S>0&&(M+=P-S),x.__size=M,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function f(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},o={}}return{bind:c,update:u,dispose:f}}class L1{constructor(e={}){const{canvas:t=T_(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this._useLegacyLights=!1,this.toneMapping=Gn,this.toneMappingExposure=1;const y=this;let M=!1,P=0,S=0,E=null,I=-1,b=null;const T=new Mt,F=new Mt;let j=null;const B=new ke(0);let Y=0,q=t.width,ie=t.height,ne=1,Q=null,se=null;const de=new Mt(0,0,q,ie),Le=new Mt(0,0,q,ie);let je=!1;const Fe=new Jl;let te=!1,pe=!1;const Ce=new Qe,xe=new N,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ze(){return E===null?ne:1}let H=i;function et(C,V){return t.getContext(C,V)}try{const C={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",D,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",Z,!1),H===null){const V="webgl2";if(H=et(V,C),H===null)throw et(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ze,ot,Oe,Ve,tt,he,mt,O,R,J,le,me,fe,He,Te,we,Ye,Me,Ge,ut,We,Ue,it,at;function gt(){ze=new Hy(H),ze.init(),Ue=new S1(H,ze),ot=new Ny(H,ze,e,Ue),Oe=new x1(H),Ve=new Wy(H),tt=new s1,he=new M1(H,ze,Oe,tt,ot,Ue,Ve),mt=new By(y),O=new zy(y),R=new $_(H),it=new Dy(H,R),J=new Vy(H,R,Ve,it),le=new Xy(H,J,R,Ve),Ge=new jy(H,ot,he),we=new Oy(tt),me=new a1(y,mt,O,ze,ot,it,we),fe=new P1(y,tt),He=new c1,Te=new m1(ze),Me=new Ly(y,mt,O,Oe,le,h,c),Ye=new y1(y,le,ot),at=new I1(H,Ve,ot,Oe),ut=new Uy(H,ze,Ve),We=new Gy(H,ze,Ve),Ve.programs=me.programs,y.capabilities=ot,y.extensions=ze,y.properties=tt,y.renderLists=He,y.shadowMap=Ye,y.state=Oe,y.info=Ve}gt();const U=new R1(y,H);this.xr=U,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(C){C!==void 0&&(ne=C,this.setSize(q,ie,!1))},this.getSize=function(C){return C.set(q,ie)},this.setSize=function(C,V,X=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,ie=V,t.width=Math.floor(C*ne),t.height=Math.floor(V*ne),X===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(q*ne,ie*ne).floor()},this.setDrawingBufferSize=function(C,V,X){q=C,ie=V,ne=X,t.width=Math.floor(C*X),t.height=Math.floor(V*X),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(de)},this.setViewport=function(C,V,X,G){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,V,X,G),Oe.viewport(T.copy(de).multiplyScalar(ne).round())},this.getScissor=function(C){return C.copy(Le)},this.setScissor=function(C,V,X,G){C.isVector4?Le.set(C.x,C.y,C.z,C.w):Le.set(C,V,X,G),Oe.scissor(F.copy(Le).multiplyScalar(ne).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(C){Oe.setScissorTest(je=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(C=!0,V=!0,X=!0){let G=0;if(C){let W=!1;if(E!==null){const ge=E.texture.format;W=ge===bh||ge===Sh||ge===Mh}if(W){const ge=E.texture.type,Re=ge===Wn||ge===Jr||ge===_h||ge===ta||ge===yh||ge===xh,ye=Me.getClearColor(),Ae=Me.getClearAlpha(),Xe=ye.r,rt=ye.g,Ke=ye.b;Re?(d[0]=Xe,d[1]=rt,d[2]=Ke,d[3]=Ae,H.clearBufferuiv(H.COLOR,0,d)):(m[0]=Xe,m[1]=rt,m[2]=Ke,m[3]=Ae,H.clearBufferiv(H.COLOR,0,m))}else G|=H.COLOR_BUFFER_BIT}V&&(G|=H.DEPTH_BUFFER_BIT),X&&(G|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),He.dispose(),Te.dispose(),tt.dispose(),mt.dispose(),O.dispose(),le.dispose(),it.dispose(),at.dispose(),me.dispose(),U.dispose(),U.removeEventListener("sessionstart",z),U.removeEventListener("sessionend",re),ce.stop()};function D(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=Ve.autoReset,V=Ye.enabled,X=Ye.autoUpdate,G=Ye.needsUpdate,W=Ye.type;gt(),Ve.autoReset=C,Ye.enabled=V,Ye.autoUpdate=X,Ye.needsUpdate=G,Ye.type=W}function Z(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function _e(C){const V=C.target;V.removeEventListener("dispose",_e),v(V)}function v(C){w(C),tt.remove(C)}function w(C){const V=tt.get(C).programs;V!==void 0&&(V.forEach(function(X){me.releaseProgram(X)}),C.isShaderMaterial&&me.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,X,G,W,ge){V===null&&(V=Je);const Re=W.isMesh&&W.matrixWorld.determinant()<0,ye=Be(C,V,X,G,W);Oe.setMaterial(G,Re);let Ae=X.index,Xe=1;if(G.wireframe===!0){if(Ae=J.getWireframeAttribute(X),Ae===void 0)return;Xe=2}const rt=X.drawRange,Ke=X.attributes.position;let Et=rt.start*Xe,pi=(rt.start+rt.count)*Xe;ge!==null&&(Et=Math.max(Et,ge.start*Xe),pi=Math.min(pi,(ge.start+ge.count)*Xe)),Ae!==null?(Et=Math.max(Et,0),pi=Math.min(pi,Ae.count)):Ke!=null&&(Et=Math.max(Et,0),pi=Math.min(pi,Ke.count));const Oi=pi-Et;if(Oi<0||Oi===1/0)return;it.setup(W,G,ye,X,Ae);let si,At=ut;if(Ae!==null&&(si=R.get(Ae),At=We,At.setIndex(si)),W.isMesh)G.wireframe===!0?(Oe.setLineWidth(G.wireframeLinewidth*Ze()),At.setMode(H.LINES)):At.setMode(H.TRIANGLES);else if(W.isLine){let nt=G.linewidth;nt===void 0&&(nt=1),Oe.setLineWidth(nt*Ze()),W.isLineSegments?At.setMode(H.LINES):W.isLineLoop?At.setMode(H.LINE_LOOP):At.setMode(H.LINE_STRIP)}else W.isPoints?At.setMode(H.POINTS):W.isSprite&&At.setMode(H.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?At.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)At.renderInstances(Et,Oi,W.count);else if(X.isInstancedBufferGeometry){const nt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,fl=Math.min(X.instanceCount,nt);At.renderInstances(Et,Oi,fl)}else At.render(Et,Oi)};function L(C,V,X){C.transparent===!0&&C.side===Jt&&C.forceSinglePass===!1?(C.side=fi,C.needsUpdate=!0,De(C,V,X),C.side=Tn,C.needsUpdate=!0,De(C,V,X),C.side=Jt):De(C,V,X)}this.compile=function(C,V,X=null){X===null&&(X=C),g=Te.get(X),g.init(V),x.push(g),X.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),C!==X&&C.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(y._useLegacyLights);const G=new Set;return C.traverse(function(W){const ge=W.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){const ye=ge[Re];L(ye,X,W),G.add(ye)}else L(ge,X,W),G.add(ge)}),x.pop(),g=null,G},this.compileAsync=function(C,V,X=null){const G=this.compile(C,V,X);return new Promise(W=>{function ge(){if(G.forEach(function(Re){tt.get(Re).currentProgram.isReady()&&G.delete(Re)}),G.size===0){W(C);return}setTimeout(ge,10)}ze.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let k=null;function $(C){k&&k(C)}function z(){ce.stop()}function re(){ce.start()}const ce=new Od;ce.setAnimationLoop($),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(C){k=C,U.setAnimationLoop(C),C===null?ce.stop():ce.start()},U.addEventListener("sessionstart",z),U.addEventListener("sessionend",re),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(V),V=U.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,V,E),g=Te.get(C,x.length),g.init(V),x.push(g),Ce.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Fe.setFromProjectionMatrix(Ce),pe=this.localClippingEnabled,te=we.init(this.clippingPlanes,pe),_=He.get(C,f.length),_.init(),f.push(_),ue(C,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Q,se);const X=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1;X&&Me.addToRenderList(_,C),this.info.render.frame++,te===!0&&we.beginShadows();const G=g.state.shadowsArray;Ye.render(G,C,V),te===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,ge=_.transmissive;if(g.setupLights(y._useLegacyLights),V.isArrayCamera){const Re=V.cameras;if(ge.length>0)for(let ye=0,Ae=Re.length;ye<Ae;ye++){const Xe=Re[ye];oe(W,ge,C,Xe)}X&&Me.render(C);for(let ye=0,Ae=Re.length;ye<Ae;ye++){const Xe=Re[ye];ae(_,C,Xe,Xe.viewport)}}else ge.length>0&&oe(W,ge,C,V),X&&Me.render(C),ae(_,C,V);E!==null&&(he.updateMultisampleRenderTarget(E),he.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(y,C,V),it.resetDefaultState(),I=-1,b=null,x.pop(),x.length>0?(g=x[x.length-1],te===!0&&we.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ue(C,V,X,G){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Fe.intersectsSprite(C)){G&&xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ce);const ge=le.update(C),Re=C.material;Re.visible&&_.push(C,ge,Re,X,xe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Fe.intersectsObject(C))){const ge=le.update(C),Re=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xe.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),xe.copy(ge.boundingSphere.center)),xe.applyMatrix4(C.matrixWorld).applyMatrix4(Ce)),Array.isArray(Re)){const ye=ge.groups;for(let Ae=0,Xe=ye.length;Ae<Xe;Ae++){const rt=ye[Ae],Ke=Re[rt.materialIndex];Ke&&Ke.visible&&_.push(C,ge,Ke,X,xe.z,rt)}}else Re.visible&&_.push(C,ge,Re,X,xe.z,null)}}const W=C.children;for(let ge=0,Re=W.length;ge<Re;ge++)ue(W[ge],V,X,G)}function ae(C,V,X,G){const W=C.opaque,ge=C.transmissive,Re=C.transparent;g.setupLightsView(X),te===!0&&we.setGlobalState(y.clippingPlanes,X),G&&Oe.viewport(T.copy(G)),W.length>0&&Ee(W,V,X),ge.length>0&&Ee(ge,V,X),Re.length>0&&Ee(Re,V,X),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function oe(C,V,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new Xt(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Nt:Wn,minFilter:an,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const W=g.state.transmissionRenderTarget[G.id],ge=G.viewport||T;W.setSize(ge.z,ge.w);const Re=y.getRenderTarget();y.setRenderTarget(W),y.getClearColor(B),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear();const ye=y.toneMapping;y.toneMapping=Gn;const Ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),te===!0&&we.setGlobalState(y.clippingPlanes,G),Ee(C,X,G),he.updateMultisampleRenderTarget(W),he.updateRenderTargetMipmap(W),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let rt=0,Ke=V.length;rt<Ke;rt++){const Et=V[rt],pi=Et.object,Oi=Et.geometry,si=Et.material,At=Et.group;if(si.side===Jt&&pi.layers.test(G.layers)){const nt=si.side;si.side=fi,si.needsUpdate=!0,Se(pi,X,G,Oi,si,At),si.side=nt,si.needsUpdate=!0,Xe=!0}}Xe===!0&&(he.updateMultisampleRenderTarget(W),he.updateRenderTargetMipmap(W))}y.setRenderTarget(Re),y.setClearColor(B,Y),Ae!==void 0&&(G.viewport=Ae),y.toneMapping=ye}function Ee(C,V,X){const G=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ge=C.length;W<ge;W++){const Re=C[W],ye=Re.object,Ae=Re.geometry,Xe=G===null?Re.material:G,rt=Re.group;ye.layers.test(X.layers)&&Se(ye,V,X,Ae,Xe,rt)}}function Se(C,V,X,G,W,ge){C.onBeforeRender(y,V,X,G,W,ge),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(y,V,X,G,C,ge),W.transparent===!0&&W.side===Jt&&W.forceSinglePass===!1?(W.side=fi,W.needsUpdate=!0,y.renderBufferDirect(X,V,G,W,C,ge),W.side=Tn,W.needsUpdate=!0,y.renderBufferDirect(X,V,G,W,C,ge),W.side=Jt):y.renderBufferDirect(X,V,G,W,C,ge),C.onAfterRender(y,V,X,G,W,ge)}function De(C,V,X){V.isScene!==!0&&(V=Je);const G=tt.get(C),W=g.state.lights,ge=g.state.shadowsArray,Re=W.state.version,ye=me.getParameters(C,W.state,ge,V,X),Ae=me.getProgramCacheKey(ye);let Xe=G.programs;G.environment=C.isMeshStandardMaterial?V.environment:null,G.fog=V.fog,G.envMap=(C.isMeshStandardMaterial?O:mt).get(C.envMap||G.environment),G.envMapRotation=G.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",_e),Xe=new Map,G.programs=Xe);let rt=Xe.get(Ae);if(rt!==void 0){if(G.currentProgram===rt&&G.lightsStateVersion===Re)return Pe(C,ye),rt}else ye.uniforms=me.getUniforms(C),C.onBuild(X,ye,y),C.onBeforeCompile(ye,y),rt=me.acquireProgram(ye,Ae),Xe.set(Ae,rt),G.uniforms=ye.uniforms;const Ke=G.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=we.uniform),Pe(C,ye),G.needsLights=St(C),G.lightsStateVersion=Re,G.needsLights&&(Ke.ambientLightColor.value=W.state.ambient,Ke.lightProbe.value=W.state.probe,Ke.directionalLights.value=W.state.directional,Ke.directionalLightShadows.value=W.state.directionalShadow,Ke.spotLights.value=W.state.spot,Ke.spotLightShadows.value=W.state.spotShadow,Ke.rectAreaLights.value=W.state.rectArea,Ke.ltc_1.value=W.state.rectAreaLTC1,Ke.ltc_2.value=W.state.rectAreaLTC2,Ke.pointLights.value=W.state.point,Ke.pointLightShadows.value=W.state.pointShadow,Ke.hemisphereLights.value=W.state.hemi,Ke.directionalShadowMap.value=W.state.directionalShadowMap,Ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ke.spotShadowMap.value=W.state.spotShadowMap,Ke.spotLightMatrix.value=W.state.spotLightMatrix,Ke.spotLightMap.value=W.state.spotLightMap,Ke.pointShadowMap.value=W.state.pointShadowMap,Ke.pointShadowMatrix.value=W.state.pointShadowMatrix),G.currentProgram=rt,G.uniformsList=null,rt}function qe(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=ws.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Pe(C,V){const X=tt.get(C);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function Be(C,V,X,G,W){V.isScene!==!0&&(V=Je),he.resetTextureUnits();const ge=V.fog,Re=G.isMeshStandardMaterial?V.environment:null,ye=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ft,Ae=(G.isMeshStandardMaterial?O:mt).get(G.envMap||Re),Xe=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,rt=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ke=!!X.morphAttributes.position,Et=!!X.morphAttributes.normal,pi=!!X.morphAttributes.color;let Oi=Gn;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Oi=y.toneMapping);const si=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,At=si!==void 0?si.length:0,nt=tt.get(G),fl=g.state.lights;if(te===!0&&(pe===!0||C!==b)){const Bi=C===b&&G.id===I;we.setState(G,C,Bi)}let ml=!1;G.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==fl.state.version||nt.outputColorSpace!==ye||W.isBatchedMesh&&nt.batching===!1||!W.isBatchedMesh&&nt.batching===!0||W.isInstancedMesh&&nt.instancing===!1||!W.isInstancedMesh&&nt.instancing===!0||W.isSkinnedMesh&&nt.skinning===!1||!W.isSkinnedMesh&&nt.skinning===!0||W.isInstancedMesh&&nt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&nt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&nt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&nt.instancingMorph===!1&&W.morphTexture!==null||nt.envMap!==Ae||G.fog===!0&&nt.fog!==ge||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==we.numPlanes||nt.numIntersection!==we.numIntersection)||nt.vertexAlphas!==Xe||nt.vertexTangents!==rt||nt.morphTargets!==Ke||nt.morphNormals!==Et||nt.morphColors!==pi||nt.toneMapping!==Oi||nt.morphTargetsCount!==At)&&(ml=!0):(ml=!0,nt.__version=G.version);let mr=nt.currentProgram;ml===!0&&(mr=De(G,V,W));let eh=!1,Qo=!1,gl=!1;const Qt=mr.getUniforms(),Vn=nt.uniforms;if(Oe.useProgram(mr.program)&&(eh=!0,Qo=!0,gl=!0),G.id!==I&&(I=G.id,Qo=!0),eh||b!==C){Qt.setValue(H,"projectionMatrix",C.projectionMatrix),Qt.setValue(H,"viewMatrix",C.matrixWorldInverse);const Bi=Qt.map.cameraPosition;Bi!==void 0&&Bi.setValue(H,xe.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&Qt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Qt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Qo=!0,gl=!0)}if(W.isSkinnedMesh){Qt.setOptional(H,W,"bindMatrix"),Qt.setOptional(H,W,"bindMatrixInverse");const Bi=W.skeleton;Bi&&(Bi.boneTexture===null&&Bi.computeBoneTexture(),Qt.setValue(H,"boneTexture",Bi.boneTexture,he))}W.isBatchedMesh&&(Qt.setOptional(H,W,"batchingTexture"),Qt.setValue(H,"batchingTexture",W._matricesTexture,he));const _l=X.morphAttributes;if((_l.position!==void 0||_l.normal!==void 0||_l.color!==void 0)&&Ge.update(W,X,mr),(Qo||nt.receiveShadow!==W.receiveShadow)&&(nt.receiveShadow=W.receiveShadow,Qt.setValue(H,"receiveShadow",W.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Vn.envMap.value=Ae,Vn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&V.environment!==null&&(Vn.envMapIntensity.value=V.environmentIntensity),Qo&&(Qt.setValue(H,"toneMappingExposure",y.toneMappingExposure),nt.needsLights&&$e(Vn,gl),ge&&G.fog===!0&&fe.refreshFogUniforms(Vn,ge),fe.refreshMaterialUniforms(Vn,G,ne,ie,g.state.transmissionRenderTarget[C.id]),ws.upload(H,qe(nt),Vn,he)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ws.upload(H,qe(nt),Vn,he),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Qt.setValue(H,"center",W.center),Qt.setValue(H,"modelViewMatrix",W.modelViewMatrix),Qt.setValue(H,"normalMatrix",W.normalMatrix),Qt.setValue(H,"modelMatrix",W.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Bi=G.uniformsGroups;for(let vl=0,cg=Bi.length;vl<cg;vl++){const th=Bi[vl];at.update(th,mr),at.bind(th,mr)}}return mr}function $e(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function St(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,V,X){tt.get(C.texture).__webglTexture=V,tt.get(C.depthTexture).__webglTexture=X;const G=tt.get(C);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=X===void 0,G.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){const X=tt.get(C);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,X=0){E=C,P=V,S=X;let G=!0,W=null,ge=!1,Re=!1;if(C){const ye=tt.get(C);ye.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(H.FRAMEBUFFER,null),G=!1):ye.__webglFramebuffer===void 0?he.setupRenderTarget(C):ye.__hasExternalTextures&&he.rebindTextures(C,tt.get(C.texture).__webglTexture,tt.get(C.depthTexture).__webglTexture);const Ae=C.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Re=!0);const Xe=tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[V])?W=Xe[V][X]:W=Xe[V],ge=!0):C.samples>0&&he.useMultisampledRTT(C)===!1?W=tt.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?W=Xe[X]:W=Xe,T.copy(C.viewport),F.copy(C.scissor),j=C.scissorTest}else T.copy(de).multiplyScalar(ne).floor(),F.copy(Le).multiplyScalar(ne).floor(),j=je;if(Oe.bindFramebuffer(H.FRAMEBUFFER,W)&&G&&Oe.drawBuffers(C,W),Oe.viewport(T),Oe.scissor(F),Oe.setScissorTest(j),ge){const ye=tt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,ye.__webglTexture,X)}else if(Re){const ye=tt.get(C.texture),Ae=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ye.__webglTexture,X||0,Ae)}I=-1},this.readRenderTargetPixels=function(C,V,X,G,W,ge,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(ye=ye[Re]),ye){Oe.bindFramebuffer(H.FRAMEBUFFER,ye);try{const Ae=C.texture,Xe=Ae.format,rt=Ae.type;if(!ot.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-G&&X>=0&&X<=C.height-W&&H.readPixels(V,X,G,W,Ue.convert(Xe),Ue.convert(rt),ge)}finally{const Ae=E!==null?tt.get(E).__webglFramebuffer:null;Oe.bindFramebuffer(H.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(C,V,X=0){const G=Math.pow(2,-X),W=Math.floor(V.image.width*G),ge=Math.floor(V.image.height*G);he.setTexture2D(V,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,C.x,C.y,W,ge),Oe.unbindTexture()},this.copyTextureToTexture=function(C,V,X,G=0){const W=V.image.width,ge=V.image.height,Re=Ue.convert(X.format),ye=Ue.convert(X.type);he.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),V.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,C.x,C.y,W,ge,Re,ye,V.image.data):V.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Re,V.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,G,C.x,C.y,Re,ye,V.image),G===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(C,V,X,G,W=0){const ge=C.max.x-C.min.x,Re=C.max.y-C.min.y,ye=C.max.z-C.min.z,Ae=Ue.convert(G.format),Xe=Ue.convert(G.type);let rt;if(G.isData3DTexture)he.setTexture3D(G,0),rt=H.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)he.setTexture2DArray(G,0),rt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const Ke=H.getParameter(H.UNPACK_ROW_LENGTH),Et=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pi=H.getParameter(H.UNPACK_SKIP_PIXELS),Oi=H.getParameter(H.UNPACK_SKIP_ROWS),si=H.getParameter(H.UNPACK_SKIP_IMAGES),At=X.isCompressedTexture?X.mipmaps[W]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,At.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,At.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(rt,W,V.x,V.y,V.z,ge,Re,ye,Ae,Xe,At.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(rt,W,V.x,V.y,V.z,ge,Re,ye,Ae,At.data):H.texSubImage3D(rt,W,V.x,V.y,V.z,ge,Re,ye,Ae,Xe,At),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Oi),H.pixelStorei(H.UNPACK_SKIP_IMAGES,si),W===0&&G.generateMipmaps&&H.generateMipmap(rt),Oe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?he.setTextureCube(C,0):C.isData3DTexture?he.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?he.setTexture2DArray(C,0):he.setTexture2D(C,0),Oe.unbindTexture()},this.resetState=function(){P=0,S=0,E=null,Oe.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Il?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===$a?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Zu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new Zu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class D1 extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class U1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return cd("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hi=new N;class $u{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix4(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.applyNormalMatrix(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.transformDirection(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),o=_t(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $u(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dp=new N,pp=new Mt,fp=new Mt,N1=new N,mp=new Qe,Es=new N,cc=new sn,gp=new Qe,uc=new co;class O1 extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Es),this.boundingBox.expandByPoint(Es)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Es),this.boundingSphere.expandByPoint(Es)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cc.copy(this.boundingSphere),cc.applyMatrix4(r),e.ray.intersectsSphere(cc)!==!1&&(gp.copy(r).invert(),uc.copy(e.ray).applyMatrix4(gp),!(this.boundingBox!==null&&uc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,uc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;pp.fromBufferAttribute(r.attributes.skinIndex,e),fp.fromBufferAttribute(r.attributes.skinWeight,e),dp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const a=fp.getComponent(o);if(a!==0){const s=pp.getComponent(o);mp.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(N1.copy(dp).applyMatrix4(mp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class _p extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hc extends Wt{constructor(e=null,t=1,i=1,r,o,a,s,c,u=li,p=li,l,h){super(null,a,s,c,u,p,r,o,l,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vp=new Qe,B1=new Qe;class Qu{constructor(e=[],t=[]){this.uuid=Ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let o=0,a=e.length;o<a;o++){const s=e[o]?e[o].matrixWorld:B1;vp.multiplyMatrices(s,t[o]),vp.toArray(i,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Qu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new hc(t,e,e,ki,ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const o=e.bones[i];let a=t[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new _p),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const a=t[r];e.bones.push(a.uuid);const s=i[r];e.boneInverses.push(s.toArray())}return e}}class dc extends Zt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ao=new Qe,yp=new Qe,As=[],xp=new An,k1=new Qe,da=new $t,pa=new sn;class pc extends $t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,k1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ao),xp.copy(e.boundingBox).applyMatrix4(Ao),this.boundingBox.union(xp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ao),pa.copy(e.boundingSphere).applyMatrix4(Ao),this.boundingSphere.union(pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,a=e*o+1;for(let s=0;s<i.length;s++)i[s]=r[a+s]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(i),e.ray.intersectsSphere(pa)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Ao),yp.multiplyMatrices(i,Ao),da.matrixWorld=yp,da.raycast(e,As);for(let a=0,s=As.length;a<s;a++){const c=As[a];c.instanceId=o,c.object=this,t.push(c)}As.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new hc(new Float32Array(r*this.count),r,this.count,bl,ei));const o=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const s=this.geometry.morphTargetsRelative?1:1-a,c=r*e;o[c]=s,o.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Mp extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rs=new N,Cs=new N,Sp=new Qe,fa=new co,Ps=new sn,fc=new N,bp=new N;class mc extends ct{constructor(e=new Ni,t=new Mp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Rs.fromBufferAttribute(t,r-1),Cs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Rs.distanceTo(Cs);e.setAttribute("lineDistance",new gi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),Ps.radius+=o,e.ray.intersectsSphere(Ps)===!1)return;Sp.copy(r).invert(),fa.copy(e.ray).applyMatrix4(Sp);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,u=this.isLineSegments?2:1,p=i.index,l=i.attributes.position;if(p!==null){const h=Math.max(0,a.start),d=Math.min(p.count,a.start+a.count);for(let m=h,_=d-1;m<_;m+=u){const g=p.getX(m),f=p.getX(m+1),x=Is(this,e,fa,c,g,f);x&&t.push(x)}if(this.isLineLoop){const m=p.getX(d-1),_=p.getX(h),g=Is(this,e,fa,c,m,_);g&&t.push(g)}}else{const h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=h,_=d-1;m<_;m+=u){const g=Is(this,e,fa,c,m,m+1);g&&t.push(g)}if(this.isLineLoop){const m=Is(this,e,fa,c,d-1,h);m&&t.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Is(n,e,t,i,r,o){const a=n.geometry.attributes.position;if(Rs.fromBufferAttribute(a,r),Cs.fromBufferAttribute(a,o),t.distanceSqToSegment(Rs,Cs,fc,bp)>i)return;fc.applyMatrix4(n.matrixWorld);const s=e.ray.origin.distanceTo(fc);if(!(s<e.near||s>e.far))return{distance:s,point:bp.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Tp=new N,wp=new N;class F1 extends mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)Tp.fromBufferAttribute(t,r),wp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Tp.distanceTo(wp);e.setAttribute("lineDistance",new gi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class z1 extends mc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ep extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ap=new Qe,gc=new co,Ls=new sn,Ds=new N;class Rp extends ct{constructor(e=new Ni,t=new Ep){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=o,e.ray.intersectsSphere(Ls)===!1)return;Ap.copy(r).invert(),gc.copy(e.ray).applyMatrix4(Ap);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,u=i.index,p=i.attributes.position;if(u!==null){const l=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let d=l,m=h;d<m;d++){const _=u.getX(d);Ds.fromBufferAttribute(p,_),Cp(Ds,_,c,r,e,t,this)}}else{const l=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let d=l,m=h;d<m;d++)Ds.fromBufferAttribute(p,d),Cp(Ds,d,c,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cp(n,e,t,i,r,o,a){const s=gc.distanceSqToPoint(n);if(s<t){const c=new N;gc.closestPointToPoint(n,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:a})}}class Pp extends Wt{constructor(e,t,i,r,o,a,s,c,u){super(e,t,i,r,o,a,s,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ju extends Ni{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+s,Math.PI);let u=0;const p=[],l=new N,h=new N,d=[],m=[],_=[],g=[];for(let f=0;f<=i;f++){const x=[],y=f/i;let M=0;f===0&&a===0?M=.5/t:f===i&&c===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const S=P/t;l.x=-e*Math.cos(r+S*o)*Math.sin(a+y*s),l.y=e*Math.cos(a+y*s),l.z=e*Math.sin(r+S*o)*Math.sin(a+y*s),m.push(l.x,l.y,l.z),h.copy(l).normalize(),_.push(h.x,h.y,h.z),g.push(S+M,1-y),x.push(u++)}p.push(x)}for(let f=0;f<i;f++)for(let x=0;x<t;x++){const y=p[f][x+1],M=p[f][x],P=p[f+1][x],S=p[f+1][x+1];(f!==0||a>0)&&d.push(y,M,S),(f!==i-1||c<Math.PI)&&d.push(M,P,S)}this.setIndex(d),this.setAttribute("position",new gi(m,3)),this.setAttribute("normal",new gi(_,3)),this.setAttribute("uv",new gi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class H1 extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _c extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dn extends _c{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Us(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function V1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function G1(n){function e(r,o){return n[r]-n[o]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Ip(n,e,t){const i=n.length,r=new n.constructor(i);for(let o=0,a=0;a!==i;++o){const s=t[o]*e;for(let c=0;c!==e;++c)r[a++]=n[s+c]}return r}function Lp(n,e,t,i){let r=1,o=n[0];for(;o!==void 0&&o[i]===void 0;)o=n[r++];if(o===void 0)return;let a=o[i];if(a!==void 0)if(Array.isArray(a))do a=o[i],a!==void 0&&(e.push(o.time),t.push.apply(t,a)),o=n[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[i],a!==void 0&&(e.push(o.time),a.toArray(t,t.length)),o=n[r++];while(o!==void 0);else do a=o[i],a!==void 0&&(e.push(o.time),t.push(a)),o=n[r++];while(o!==void 0)}class ma{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],o=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<o)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(o=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=o)){const s=t[1];e<s&&(i=2,o=s);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break e}a=i,i=0;break t}break i}for(;i<a;){const s=i+a>>>1;e<t[s]?a=s:i=s+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let a=0;a!==r;++a)t[a]=i[o+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class W1 extends ma{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(e,t,i){const r=this.parameterPositions;let o=e-2,a=e+1,s=r[o],c=r[a];if(s===void 0)switch(this.getSettings_().endingStart){case $h:o=e,s=2*t-i;break;case Qh:o=r.length-2,s=t+r[o]-r[o+1];break;default:o=e,s=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $h:a=e,c=2*i-t;break;case Qh:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}const u=(i-t)*.5,p=this.valueSize;this._weightPrev=u/(t-s),this._weightNext=u/(c-i),this._offsetPrev=o*p,this._offsetNext=a*p}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=e*s,u=c-s,p=this._offsetPrev,l=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(i-t)/(r-t),_=m*m,g=_*m,f=-h*g+2*h*_-h*m,x=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,y=(-1-d)*g+(1.5+d)*_+.5*m,M=d*g-d*_;for(let P=0;P!==s;++P)o[P]=f*a[p+P]+x*a[u+P]+y*a[c+P]+M*a[l+P];return o}}class j1 extends ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=e*s,u=c-s,p=(i-t)/(r-t),l=1-p;for(let h=0;h!==s;++h)o[h]=a[u+h]*l+a[c+h]*p;return o}}class X1 extends ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class pn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Us(t,this.TimeBufferType),this.values=Us(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Us(e.times,Array),values:Us(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new X1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new j1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new W1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case to:t=this.InterpolantFactoryMethodLinear;break;case Cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let o=0,a=r-1;for(;o!==r&&i[o]<e;)++o;for(;a!==-1&&i[a]>t;)--a;if(++a,o!==0||a!==r){o>=a&&(a=Math.max(a,1),o=a-1);const s=this.getValueSize();this.times=i.slice(o,a),this.values=this.values.slice(o*s,a*s)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==o;s++){const c=i[s];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,c,a),e=!1;break}a=c}if(r!==void 0&&V1(r))for(let s=0,c=r.length;s!==c;++s){const u=r[s];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Cl,o=e.length-1;let a=1;for(let s=1;s<o;++s){let c=!1;const u=e[s],p=e[s+1];if(u!==p&&(s!==1||u!==e[0]))if(r)c=!0;else{const l=s*i,h=l-i,d=l+i;for(let m=0;m!==i;++m){const _=t[l+m];if(_!==t[h+m]||_!==t[d+m]){c=!0;break}}}if(c){if(s!==a){e[a]=e[s];const l=s*i,h=a*i;for(let d=0;d!==i;++d)t[h+d]=t[l+d]}++a}}if(o>0){e[a]=e[o];for(let s=o*i,c=a*i,u=0;u!==i;++u)t[c+u]=t[s+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}pn.prototype.TimeBufferType=Float32Array,pn.prototype.ValueBufferType=Float32Array,pn.prototype.DefaultInterpolation=to;class Ro extends pn{}Ro.prototype.ValueTypeName="bool",Ro.prototype.ValueBufferType=Array,Ro.prototype.DefaultInterpolation=na,Ro.prototype.InterpolantFactoryMethodLinear=void 0,Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Dp extends pn{}Dp.prototype.ValueTypeName="color";class Co extends pn{}Co.prototype.ValueTypeName="number";class q1 extends ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=(i-t)/(r-t);let u=e*s;for(let p=u+s;u!==p;u+=4)bi.slerpFlat(o,0,a,u-s,a,u,c);return o}}class Ar extends pn{InterpolantFactoryMethodLinear(e){return new q1(this.times,this.values,this.getValueSize(),e)}}Ar.prototype.ValueTypeName="quaternion",Ar.prototype.DefaultInterpolation=to,Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Po extends pn{}Po.prototype.ValueTypeName="string",Po.prototype.ValueBufferType=Array,Po.prototype.DefaultInterpolation=na,Po.prototype.InterpolantFactoryMethodLinear=void 0,Po.prototype.InterpolantFactoryMethodSmooth=void 0;class Io extends pn{}Io.prototype.ValueTypeName="vector";class Y1{constructor(e="",t=-1,i=[],r=Zg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Ki(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,s=i.length;a!==s;++a)t.push(Z1(i[a]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,a=i.length;o!==a;++o)t.push(pn.toJSON(i[o]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const o=t.length,a=[];for(let s=0;s<o;s++){let c=[],u=[];c.push((s+o-1)%o,s,(s+1)%o),u.push(0,1,0);const p=G1(c);c=Ip(c,1,p),u=Ip(u,1,p),!r&&c[0]===0&&(c.push(o),u.push(u[0])),a.push(new Co(".morphTargetInfluences["+t[s].name+"]",c,u).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},o=/^([\w-]*?)([\d]+)$/;for(let s=0,c=e.length;s<c;s++){const u=e[s],p=u.name.match(o);if(p&&p.length>1){const l=p[1];let h=r[l];h||(r[l]=h=[]),h.push(u)}}const a=[];for(const s in r)a.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(p,l,h,d,m){if(h.length!==0){const _=[],g=[];Lp(h,_,g,d),_.length!==0&&m.push(new p(l,_,g))}},r=[],o=e.name||"default",a=e.fps||30,s=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let p=0;p<u.length;p++){const l=u[p].keys;if(!(!l||l.length===0))if(l[0].morphTargets){const h={};let d;for(d=0;d<l.length;d++)if(l[d].morphTargets)for(let m=0;m<l[d].morphTargets.length;m++)h[l[d].morphTargets[m]]=-1;for(const m in h){const _=[],g=[];for(let f=0;f!==l[d].morphTargets.length;++f){const x=l[d];_.push(x.time),g.push(x.morphTarget===m?1:0)}r.push(new Co(".morphTargetInfluence["+m+"]",_,g))}c=h.length*a}else{const h=".bones["+t[p].name+"]";i(Io,h+".position",l,"pos",r),i(Ar,h+".quaternion",l,"rot",r),i(Io,h+".scale",l,"scl",r)}}return r.length===0?null:new this(o,c,r,s)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function K1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Co;case"vector":case"vector2":case"vector3":case"vector4":return Io;case"color":return Dp;case"quaternion":return Ar;case"bool":case"boolean":return Ro;case"string":return Po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Z1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=K1(n.type);if(n.times===void 0){const t=[],i=[];Lp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Qn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Up{constructor(e,t,i){const r=this;let o=!1,a=0,s=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){s++,o===!1&&r.onStart!==void 0&&r.onStart(p,a,s),o=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,s),a===s&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return c?c(p):p},this.setURLModifier=function(p){return c=p,this},this.addHandler=function(p,l){return u.push(p,l),this},this.removeHandler=function(p){const l=u.indexOf(p);return l!==-1&&u.splice(l,2),this},this.getHandler=function(p){for(let l=0,h=u.length;l<h;l+=2){const d=u[l],m=u[l+1];if(d.global&&(d.lastIndex=0),d.test(p))return m}return null}}}const $1=new Up;class Rr{constructor(e){this.manager=e!==void 0?e:$1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class Q1 extends Error{constructor(e,t){super(e),this.response=t}}class vc extends Rr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Qn.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:i,onError:r});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const p=Un[e],l=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let _=0;const g=new ReadableStream({start(f){x();function x(){l.read().then(({done:y,value:M})=>{if(y)f.close();else{_+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let S=0,E=p.length;S<E;S++){const I=p[S];I.onProgress&&I.onProgress(P)}f.enqueue(M),x()}})}}});return new Response(g)}else throw new Q1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(p=>new DOMParser().parseFromString(p,s));case"json":return u.json();default:if(s===void 0)return u.text();{const p=/charset="?([^;"\s]*)"?/i.exec(s),l=p&&p[1]?p[1].toLowerCase():void 0,h=new TextDecoder(l);return u.arrayBuffer().then(d=>h.decode(d))}}}).then(u=>{Qn.add(e,u);const p=Un[e];delete Un[e];for(let l=0,h=p.length;l<h;l++){const d=p[l];d.onLoad&&d.onLoad(u)}}).catch(u=>{const p=Un[e];if(p===void 0)throw this.manager.itemError(e),u;delete Un[e];for(let l=0,h=p.length;l<h;l++){const d=p[l];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class J1 extends Rr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=Qn.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;const s=aa("img");function c(){p(),Qn.add(e,this),t&&t(this),o.manager.itemEnd(e)}function u(l){p(),r&&r(l),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){s.removeEventListener("load",c,!1),s.removeEventListener("error",u,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),o.manager.itemStart(e),s.src=e,s}}class Np extends Rr{constructor(e){super(e)}load(e,t,i,r){const o=this,a=new hc,s=new vc(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(o.withCredentials),s.load(e,function(c){let u;try{u=o.parse(c)}catch(p){if(r!==void 0)r(p);else{console.error(p);return}}u.image!==void 0?a.image=u.image:u.data!==void 0&&(a.image.width=u.width,a.image.height=u.height,a.image.data=u.data),a.wrapS=u.wrapS!==void 0?u.wrapS:mi,a.wrapT=u.wrapT!==void 0?u.wrapT:mi,a.magFilter=u.magFilter!==void 0?u.magFilter:Ut,a.minFilter=u.minFilter!==void 0?u.minFilter:Ut,a.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(a.colorSpace=u.colorSpace),u.flipY!==void 0&&(a.flipY=u.flipY),u.format!==void 0&&(a.format=u.format),u.type!==void 0&&(a.type=u.type),u.mipmaps!==void 0&&(a.mipmaps=u.mipmaps,a.minFilter=an),u.mipmapCount===1&&(a.minFilter=Ut),u.generateMipmaps!==void 0&&(a.generateMipmaps=u.generateMipmaps),a.needsUpdate=!0,t&&t(a,u)},i,r),a}}class Op extends Rr{constructor(e){super(e)}load(e,t,i,r){const o=new Wt,a=new J1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){o.image=s,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Ns extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const yc=new Qe,Bp=new N,kp=new N;class xc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bp),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eM extends xc{constructor(){super(new ui(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=no*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(i!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class tM extends Ns{constructor(e,t,i=0,r=Math.PI/3,o=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new eM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fp=new Qe,ga=new N,Mc=new N;class iM extends xc{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ga.setFromMatrixPosition(e.matrixWorld),i.position.copy(ga),Mc.copy(i.position),Mc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Mc),i.updateMatrixWorld(),r.makeTranslation(-ga.x,-ga.y,-ga.z),Fp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fp)}}class nM extends Ns{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new iM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rM extends xc{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new rM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oM extends Ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _a{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class aM extends Rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=Qn.get(e);if(a!==void 0){if(o.manager.itemStart(e),a.then){a.then(u=>{t&&t(u),o.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a}const s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader;const c=fetch(e,s).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(u){return Qn.add(e,u),t&&t(u),o.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Qn.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Qn.add(e,c),o.manager.itemStart(e)}}class Hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vp(){return(typeof performance>"u"?Date:performance).now()}const Sc="\\[\\]\\.:\\/",sM=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",lM="[^"+Sc.replace("\\.","")+"]",cM=/((?:WC+[\/:])*)/.source.replace("WC",bc),uM=/(WCOD+)?/.source.replace("WCOD",lM),hM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),dM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),pM=new RegExp("^"+cM+uM+hM+dM+"$"),fM=["material","materials","bones","map"];class mM{constructor(e,t,i){const r=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class yt{constructor(e,t,i){this.path=t,this.parsedPath=i||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,i):new yt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sM,"")}static parseTrackName(e){const t=pM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=i.nodeName.substring(r+1);fM.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let a=0;a<o.length;a++){const s=o[a];if(s.name===t||s.uuid===t)return s;const c=i(s.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===u){u=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[r];if(a===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=mM,yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray],yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Gp=new Qe;class gM{constructor(e,t,i=0,r=1/0){this.ray=new co(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gp),this}intersectObject(e,t=!0,i=[]){return Tc(e,this,i,t),i.sort(Wp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Tc(e[r],this,i,t);return i.sort(Wp),i}}function Wp(n,e){return n.distance-e.distance}function Tc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Tc(r[o],e,t,!0)}}class jp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);const Xp={type:"change"},wc={type:"start"},qp={type:"end"},Os=new co,Yp=new $n,_M=Math.cos(70*ad.DEG2RAD);class vM extends _r{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Ye),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ye),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xp),i.update(),o=r.NONE},this.update=function(){const U=new N,D=new bi().setFromUnitVectors(e.up,new N(0,1,0)),ee=D.clone().invert(),Z=new N,_e=new bi,v=new N,w=2*Math.PI;return function(L=null){const k=i.object.position;U.copy(k).sub(i.target),U.applyQuaternion(D),s.setFromVector3(U),i.autoRotate&&o===r.NONE&&j(T(L)),i.enableDamping?(s.theta+=c.theta*i.dampingFactor,s.phi+=c.phi*i.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let $=i.minAzimuthAngle,z=i.maxAzimuthAngle;isFinite($)&&isFinite(z)&&($<-Math.PI?$+=w:$>Math.PI&&($-=w),z<-Math.PI?z+=w:z>Math.PI&&(z-=w),$<=z?s.theta=Math.max($,Math.min(z,s.theta)):s.theta=s.theta>($+z)/2?Math.max($,s.theta):Math.min(z,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let re=!1;if(i.zoomToCursor&&S||i.object.isOrthographicCamera)s.radius=de(s.radius);else{const ce=s.radius;s.radius=de(s.radius*u),re=ce!=s.radius}if(U.setFromSpherical(s),U.applyQuaternion(ee),k.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),p.set(0,0,0)),i.zoomToCursor&&S){let ce=null;if(i.object.isPerspectiveCamera){const ue=U.length();ce=de(ue*u);const ae=ue-ce;i.object.position.addScaledVector(M,ae),i.object.updateMatrixWorld(),re=!!ae}else if(i.object.isOrthographicCamera){const ue=new N(P.x,P.y,0);ue.unproject(i.object);const ae=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),re=ae!==i.object.zoom;const oe=new N(P.x,P.y,0);oe.unproject(i.object),i.object.position.sub(oe).add(ue),i.object.updateMatrixWorld(),ce=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ce!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ce).add(i.object.position):(Os.origin.copy(i.object.position),Os.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Os.direction))<_M?e.lookAt(i.target):(Yp.setFromNormalAndCoplanarPoint(i.object.up,i.target),Os.intersectPlane(Yp,i.target))))}else if(i.object.isOrthographicCamera){const ce=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),ce!==i.object.zoom&&(i.object.updateProjectionMatrix(),re=!0)}return u=1,S=!1,re||Z.distanceToSquared(i.object.position)>a||8*(1-_e.dot(i.object.quaternion))>a||v.distanceToSquared(i.target)>a?(i.dispatchEvent(Xp),Z.copy(i.object.position),_e.copy(i.object.quaternion),v.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ut),i.domElement.removeEventListener("pointerdown",O),i.domElement.removeEventListener("pointercancel",J),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",J),i.domElement.getRootNode().removeEventListener("keydown",Te,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ye),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new jp,c=new jp;let u=1;const p=new N,l=new Ie,h=new Ie,d=new Ie,m=new Ie,_=new Ie,g=new Ie,f=new Ie,x=new Ie,y=new Ie,M=new N,P=new Ie;let S=!1;const E=[],I={};let b=!1;function T(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function F(U){const D=Math.abs(U*.01);return Math.pow(.95,i.zoomSpeed*D)}function j(U){c.theta-=U}function B(U){c.phi-=U}const Y=function(){const U=new N;return function(D,ee){U.setFromMatrixColumn(ee,0),U.multiplyScalar(-D),p.add(U)}}(),q=function(){const U=new N;return function(D,ee){i.screenSpacePanning===!0?U.setFromMatrixColumn(ee,1):(U.setFromMatrixColumn(ee,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(D),p.add(U)}}(),ie=function(){const U=new N;return function(D,ee){const Z=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;U.copy(_e).sub(i.target);let v=U.length();v*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*D*v/Z.clientHeight,i.object.matrix),q(2*ee*v/Z.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(D*(i.object.right-i.object.left)/i.object.zoom/Z.clientWidth,i.object.matrix),q(ee*(i.object.top-i.object.bottom)/i.object.zoom/Z.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(U,D){if(!i.zoomToCursor)return;S=!0;const ee=i.domElement.getBoundingClientRect(),Z=U-ee.left,_e=D-ee.top,v=ee.width,w=ee.height;P.x=Z/v*2-1,P.y=-(_e/w)*2+1,M.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function de(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function Le(U){l.set(U.clientX,U.clientY)}function je(U){se(U.clientX,U.clientX),f.set(U.clientX,U.clientY)}function Fe(U){m.set(U.clientX,U.clientY)}function te(U){h.set(U.clientX,U.clientY),d.subVectors(h,l).multiplyScalar(i.rotateSpeed);const D=i.domElement;j(2*Math.PI*d.x/D.clientHeight),B(2*Math.PI*d.y/D.clientHeight),l.copy(h),i.update()}function pe(U){x.set(U.clientX,U.clientY),y.subVectors(x,f),y.y>0?ne(F(y.y)):y.y<0&&Q(F(y.y)),f.copy(x),i.update()}function Ce(U){_.set(U.clientX,U.clientY),g.subVectors(_,m).multiplyScalar(i.panSpeed),ie(g.x,g.y),m.copy(_),i.update()}function xe(U){se(U.clientX,U.clientY),U.deltaY<0?Q(F(U.deltaY)):U.deltaY>0&&ne(F(U.deltaY)),i.update()}function Je(U){let D=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(0,i.keyPanSpeed),D=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(0,-i.keyPanSpeed),D=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(i.keyPanSpeed,0),D=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(-i.keyPanSpeed,0),D=!0;break}D&&(U.preventDefault(),i.update())}function Ze(U){if(E.length===1)l.set(U.pageX,U.pageY);else{const D=gt(U),ee=.5*(U.pageX+D.x),Z=.5*(U.pageY+D.y);l.set(ee,Z)}}function H(U){if(E.length===1)m.set(U.pageX,U.pageY);else{const D=gt(U),ee=.5*(U.pageX+D.x),Z=.5*(U.pageY+D.y);m.set(ee,Z)}}function et(U){const D=gt(U),ee=U.pageX-D.x,Z=U.pageY-D.y,_e=Math.sqrt(ee*ee+Z*Z);f.set(0,_e)}function ze(U){i.enableZoom&&et(U),i.enablePan&&H(U)}function ot(U){i.enableZoom&&et(U),i.enableRotate&&Ze(U)}function Oe(U){if(E.length==1)h.set(U.pageX,U.pageY);else{const ee=gt(U),Z=.5*(U.pageX+ee.x),_e=.5*(U.pageY+ee.y);h.set(Z,_e)}d.subVectors(h,l).multiplyScalar(i.rotateSpeed);const D=i.domElement;j(2*Math.PI*d.x/D.clientHeight),B(2*Math.PI*d.y/D.clientHeight),l.copy(h)}function Ve(U){if(E.length===1)_.set(U.pageX,U.pageY);else{const D=gt(U),ee=.5*(U.pageX+D.x),Z=.5*(U.pageY+D.y);_.set(ee,Z)}g.subVectors(_,m).multiplyScalar(i.panSpeed),ie(g.x,g.y),m.copy(_)}function tt(U){const D=gt(U),ee=U.pageX-D.x,Z=U.pageY-D.y,_e=Math.sqrt(ee*ee+Z*Z);x.set(0,_e),y.set(0,Math.pow(x.y/f.y,i.zoomSpeed)),ne(y.y),f.copy(x);const v=(U.pageX+D.x)*.5,w=(U.pageY+D.y)*.5;se(v,w)}function he(U){i.enableZoom&&tt(U),i.enablePan&&Ve(U)}function mt(U){i.enableZoom&&tt(U),i.enableRotate&&Oe(U)}function O(U){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",J)),!it(U)&&(We(U),U.pointerType==="touch"?Me(U):le(U)))}function R(U){i.enabled!==!1&&(U.pointerType==="touch"?Ge(U):me(U))}function J(U){switch(Ue(U),E.length){case 0:i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",J),i.dispatchEvent(qp),o=r.NONE;break;case 1:const D=E[0],ee=I[D];Me({pointerId:D,pageX:ee.x,pageY:ee.y});break}}function le(U){let D;switch(U.button){case 0:D=i.mouseButtons.LEFT;break;case 1:D=i.mouseButtons.MIDDLE;break;case 2:D=i.mouseButtons.RIGHT;break;default:D=-1}switch(D){case qr.DOLLY:if(i.enableZoom===!1)return;je(U),o=r.DOLLY;break;case qr.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;Fe(U),o=r.PAN}else{if(i.enableRotate===!1)return;Le(U),o=r.ROTATE}break;case qr.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;Le(U),o=r.ROTATE}else{if(i.enablePan===!1)return;Fe(U),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(wc)}function me(U){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;te(U);break;case r.DOLLY:if(i.enableZoom===!1)return;pe(U);break;case r.PAN:if(i.enablePan===!1)return;Ce(U);break}}function fe(U){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(U.preventDefault(),i.dispatchEvent(wc),xe(He(U)),i.dispatchEvent(qp))}function He(U){const D=U.deltaMode,ee={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(D){case 1:ee.deltaY*=16;break;case 2:ee.deltaY*=100;break}return U.ctrlKey&&!b&&(ee.deltaY*=10),ee}function Te(U){U.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",we,{passive:!0,capture:!0}))}function we(U){U.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",we,{passive:!0,capture:!0}))}function Ye(U){i.enabled===!1||i.enablePan===!1||Je(U)}function Me(U){switch(at(U),E.length){case 1:switch(i.touches.ONE){case Yr.ROTATE:if(i.enableRotate===!1)return;Ze(U),o=r.TOUCH_ROTATE;break;case Yr.PAN:if(i.enablePan===!1)return;H(U),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Yr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(U),o=r.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ot(U),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(wc)}function Ge(U){switch(at(U),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Oe(U),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ve(U),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(U),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;mt(U),i.update();break;default:o=r.NONE}}function ut(U){i.enabled!==!1&&U.preventDefault()}function We(U){E.push(U.pointerId)}function Ue(U){delete I[U.pointerId];for(let D=0;D<E.length;D++)if(E[D]==U.pointerId){E.splice(D,1);return}}function it(U){for(let D=0;D<E.length;D++)if(E[D]==U.pointerId)return!0;return!1}function at(U){let D=I[U.pointerId];D===void 0&&(D=new Ie,I[U.pointerId]=D),D.set(U.pageX,U.pageY)}function gt(U){const D=U.pointerId===E[0]?E[1]:E[0];return I[D]}i.domElement.addEventListener("contextmenu",ut),i.domElement.addEventListener("pointerdown",O),i.domElement.addEventListener("pointercancel",J),i.domElement.addEventListener("wheel",fe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Te,{passive:!0,capture:!0}),this.update()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var zi=Uint8Array,Lo=Uint16Array,yM=Int32Array,Kp=new zi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Zp=new zi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),xM=new zi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$p=function(n,e){for(var t=new Lo(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new yM(t[30]),i=1;i<30;++i)for(var o=t[i];o<t[i+1];++o)r[o]=o-t[i]<<5|i;return{b:t,r}},Qp=$p(Kp,2),Jp=Qp.b,MM=Qp.r;Jp[28]=258,MM[258]=28;for(var SM=$p(Zp,0),bM=SM.b,Ec=new Lo(32768),wt=0;wt<32768;++wt){var Jn=(wt&43690)>>1|(wt&21845)<<1;Jn=(Jn&52428)>>2|(Jn&13107)<<2,Jn=(Jn&61680)>>4|(Jn&3855)<<4,Ec[wt]=((Jn&65280)>>8|(Jn&255)<<8)>>1}for(var va=function(n,e,t){for(var i=n.length,r=0,o=new Lo(e);r<i;++r)n[r]&&++o[n[r]-1];var a=new Lo(e);for(r=1;r<e;++r)a[r]=a[r-1]+o[r-1]<<1;var s;if(t){s=new Lo(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var u=r<<4|n[r],p=e-n[r],l=a[n[r]-1]++<<p,h=l|(1<<p)-1;l<=h;++l)s[Ec[l]>>c]=u}else for(s=new Lo(i),r=0;r<i;++r)n[r]&&(s[r]=Ec[a[n[r]-1]++]>>15-n[r]);return s},ya=new zi(288),wt=0;wt<144;++wt)ya[wt]=8;for(var wt=144;wt<256;++wt)ya[wt]=9;for(var wt=256;wt<280;++wt)ya[wt]=7;for(var wt=280;wt<288;++wt)ya[wt]=8;for(var ef=new zi(32),wt=0;wt<32;++wt)ef[wt]=5;var TM=va(ya,9,1),wM=va(ef,5,1),Ac=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},en=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Rc=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},EM=function(n){return(n+7)/8|0},AM=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new zi(n.subarray(e,t))},RM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],tn=function(n,e,t){var i=new Error(e||RM[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,tn),!t)throw i;return i},CM=function(n,e,t,i){var r=n.length,o=0;if(!r||e.f&&!e.l)return t||new zi(0);var a=!t,s=a||e.i!=2,c=e.i;a&&(t=new zi(r*3));var u=function(et){var ze=t.length;if(et>ze){var ot=new zi(Math.max(ze*2,et));ot.set(t),t=ot}},p=e.f||0,l=e.p||0,h=e.b||0,d=e.l,m=e.d,_=e.m,g=e.n,f=r*8;do{if(!d){p=en(n,l,1);var x=en(n,l+1,3);if(l+=3,x)if(x==1)d=TM,m=wM,_=9,g=5;else if(x==2){var y=en(n,l,31)+257,M=en(n,l+10,15)+4,P=y+en(n,l+5,31)+1;l+=14;for(var S=new zi(P),E=new zi(19),I=0;I<M;++I)E[xM[I]]=en(n,l+I*3,7);l+=M*3;for(var b=Ac(E),T=(1<<b)-1,F=va(E,b,1),I=0;I<P;){var j=F[en(n,l,T)];l+=j&15;var B=j>>4;if(B<16)S[I++]=B;else{var Y=0,q=0;for(B==16?(q=3+en(n,l,3),l+=2,Y=S[I-1]):B==17?(q=3+en(n,l,7),l+=3):B==18&&(q=11+en(n,l,127),l+=7);q--;)S[I++]=Y}}var ie=S.subarray(0,y),ne=S.subarray(y);_=Ac(ie),g=Ac(ne),d=va(ie,_,1),m=va(ne,g,1)}else tn(1);else{var B=EM(l)+4,Q=n[B-4]|n[B-3]<<8,se=B+Q;if(se>r){c&&tn(0);break}s&&u(h+Q),t.set(n.subarray(B,se),h),e.b=h+=Q,e.p=l=se*8,e.f=p;continue}if(l>f){c&&tn(0);break}}s&&u(h+131072);for(var de=(1<<_)-1,Le=(1<<g)-1,je=l;;je=l){var Y=d[Rc(n,l)&de],Fe=Y>>4;if(l+=Y&15,l>f){c&&tn(0);break}if(Y||tn(2),Fe<256)t[h++]=Fe;else if(Fe==256){je=l,d=null;break}else{var te=Fe-254;if(Fe>264){var I=Fe-257,pe=Kp[I];te=en(n,l,(1<<pe)-1)+Jp[I],l+=pe}var Ce=m[Rc(n,l)&Le],xe=Ce>>4;Ce||tn(3),l+=Ce&15;var ne=bM[xe];if(xe>3){var pe=Zp[xe];ne+=Rc(n,l)&(1<<pe)-1,l+=pe}if(l>f){c&&tn(0);break}s&&u(h+131072);var Je=h+te;if(h<ne){var Ze=o-ne,H=Math.min(ne,Je);for(Ze+h<0&&tn(3);h<H;++h)t[h]=i[Ze+h]}for(;h<Je;++h)t[h]=t[h-ne]}}e.l=d,e.p=je,e.b=h,e.f=p,d&&(p=1,e.m=_,e.d=m,e.n=g)}while(!p);return h!=t.length&&a?AM(t,0,h):t.subarray(0,h)},PM=new zi(0),IM=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&tn(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&tn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Bs(n,e){return CM(n.subarray(IM(n,e),-4),{i:2},e,e)}var LM=typeof TextDecoder<"u"&&new TextDecoder,DM=0;try{LM.decode(PM,{stream:!0}),DM=1}catch{}function tf(n,e){if(e===$g)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Pl||e===Jh){let t=n.getIndex();if(t===null){const a=[],s=n.getAttribute("position");if(s!==void 0){for(let c=0;c<s.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Pl)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=n.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class UM extends Np{constructor(e){super(e),this.type=Nt}parse(e){const t=Math.pow(2.7182818,2.2);function i(v,w){let L=0;for(let $=0;$<65536;++$)($==0||v[$>>3]&1<<($&7))&&(w[L++]=$);const k=L-1;for(;L<65536;)w[L++]=0;return k}function r(v){for(let w=0;w<16384;w++)v[w]={},v[w].len=0,v[w].lit=0,v[w].p=null}const o={l:0,c:0,lc:0};function a(v,w,L,k,$){for(;L<v;)w=w<<8|ze(k,$),L+=8;L-=v,o.l=w>>L&(1<<v)-1,o.c=w,o.lc=L}const s=new Array(59);function c(v){for(let L=0;L<=58;++L)s[L]=0;for(let L=0;L<65537;++L)s[v[L]]+=1;let w=0;for(let L=58;L>0;--L){const k=w+s[L]>>1;s[L]=w,w=k}for(let L=0;L<65537;++L){const k=v[L];k>0&&(v[L]=k|s[k]++<<6)}}function u(v,w,L,k,$,z){const re=w;let ce=0,ue=0;for(;k<=$;k++){if(re.value-w.value>L)return!1;a(6,ce,ue,v,re);const ae=o.l;if(ce=o.c,ue=o.lc,z[k]=ae,ae==63){if(re.value-w.value>L)throw new Error("Something wrong with hufUnpackEncTable");a(8,ce,ue,v,re);let oe=o.l+6;if(ce=o.c,ue=o.lc,k+oe>$+1)throw new Error("Something wrong with hufUnpackEncTable");for(;oe--;)z[k++]=0;k--}else if(ae>=59){let oe=ae-59+2;if(k+oe>$+1)throw new Error("Something wrong with hufUnpackEncTable");for(;oe--;)z[k++]=0;k--}}c(z)}function p(v){return v&63}function l(v){return v>>6}function h(v,w,L,k){for(;w<=L;w++){const $=l(v[w]),z=p(v[w]);if($>>z)throw new Error("Invalid table entry");if(z>14){const re=k[$>>z-14];if(re.len)throw new Error("Invalid table entry");if(re.lit++,re.p){const ce=re.p;re.p=new Array(re.lit);for(let ue=0;ue<re.lit-1;++ue)re.p[ue]=ce[ue]}else re.p=new Array(1);re.p[re.lit-1]=w}else if(z){let re=0;for(let ce=1<<14-z;ce>0;ce--){const ue=k[($<<14-z)+re];if(ue.len||ue.p)throw new Error("Invalid table entry");ue.len=z,ue.lit=w,re++}}}return!0}const d={c:0,lc:0};function m(v,w,L,k){v=v<<8|ze(L,k),w+=8,d.c=v,d.lc=w}const _={c:0,lc:0};function g(v,w,L,k,$,z,re,ce,ue){if(v==w){k<8&&(m(L,k,$,z),L=d.c,k=d.lc),k-=8;let ae=L>>k;if(ae=new Uint8Array([ae])[0],ce.value+ae>ue)return!1;const oe=re[ce.value-1];for(;ae-- >0;)re[ce.value++]=oe}else if(ce.value<ue)re[ce.value++]=v;else return!1;_.c=L,_.lc=k}function f(v){return v&65535}function x(v){const w=f(v);return w>32767?w-65536:w}const y={a:0,b:0};function M(v,w){const L=x(v),k=x(w),$=L+(k&1)+(k>>1),z=$,re=$-k;y.a=z,y.b=re}function P(v,w){const L=f(v),k=f(w),$=L-(k>>1)&65535,z=k+$-32768&65535;y.a=z,y.b=$}function S(v,w,L,k,$,z,re){const ce=re<16384,ue=L>$?$:L;let ae=1,oe,Ee;for(;ae<=ue;)ae<<=1;for(ae>>=1,oe=ae,ae>>=1;ae>=1;){Ee=0;const Se=Ee+z*($-oe),De=z*ae,qe=z*oe,Pe=k*ae,Be=k*oe;let $e,St,C,V;for(;Ee<=Se;Ee+=qe){let X=Ee;const G=Ee+k*(L-oe);for(;X<=G;X+=Be){const W=X+Pe,ge=X+De,Re=ge+Pe;ce?(M(v[X+w],v[ge+w]),$e=y.a,C=y.b,M(v[W+w],v[Re+w]),St=y.a,V=y.b,M($e,St),v[X+w]=y.a,v[W+w]=y.b,M(C,V),v[ge+w]=y.a,v[Re+w]=y.b):(P(v[X+w],v[ge+w]),$e=y.a,C=y.b,P(v[W+w],v[Re+w]),St=y.a,V=y.b,P($e,St),v[X+w]=y.a,v[W+w]=y.b,P(C,V),v[ge+w]=y.a,v[Re+w]=y.b)}if(L&ae){const W=X+De;ce?M(v[X+w],v[W+w]):P(v[X+w],v[W+w]),$e=y.a,v[W+w]=y.b,v[X+w]=$e}}if($&ae){let X=Ee;const G=Ee+k*(L-oe);for(;X<=G;X+=Be){const W=X+Pe;ce?M(v[X+w],v[W+w]):P(v[X+w],v[W+w]),$e=y.a,v[W+w]=y.b,v[X+w]=$e}}oe=ae,ae>>=1}return Ee}function E(v,w,L,k,$,z,re,ce,ue){let ae=0,oe=0;const Ee=re,Se=Math.trunc(k.value+($+7)/8);for(;k.value<Se;)for(m(ae,oe,L,k),ae=d.c,oe=d.lc;oe>=14;){const qe=ae>>oe-14&16383,Pe=w[qe];if(Pe.len)oe-=Pe.len,g(Pe.lit,z,ae,oe,L,k,ce,ue,Ee),ae=_.c,oe=_.lc;else{if(!Pe.p)throw new Error("hufDecode issues");let Be;for(Be=0;Be<Pe.lit;Be++){const $e=p(v[Pe.p[Be]]);for(;oe<$e&&k.value<Se;)m(ae,oe,L,k),ae=d.c,oe=d.lc;if(oe>=$e&&l(v[Pe.p[Be]])==(ae>>oe-$e&(1<<$e)-1)){oe-=$e,g(Pe.p[Be],z,ae,oe,L,k,ce,ue,Ee),ae=_.c,oe=_.lc;break}}if(Be==Pe.lit)throw new Error("hufDecode issues")}}const De=8-$&7;for(ae>>=De,oe-=De;oe>0;){const qe=w[ae<<14-oe&16383];if(qe.len)oe-=qe.len,g(qe.lit,z,ae,oe,L,k,ce,ue,Ee),ae=_.c,oe=_.lc;else throw new Error("hufDecode issues")}return!0}function I(v,w,L,k,$,z){const re={value:0},ce=L.value,ue=et(w,L),ae=et(w,L);L.value+=4;const oe=et(w,L);if(L.value+=4,ue<0||ue>=65537||ae<0||ae>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const Ee=new Array(65537),Se=new Array(16384);r(Se);const De=k-(L.value-ce);if(u(v,L,De,ue,ae,Ee),oe>8*(k-(L.value-ce)))throw new Error("Something wrong with hufUncompress");h(Ee,ue,ae,Se),E(Ee,Se,v,L,oe,ae,z,$,re)}function b(v,w,L){for(let k=0;k<L;++k)w[k]=v[w[k]]}function T(v){for(let w=1;w<v.length;w++){const L=v[w-1]+v[w]-128;v[w]=L}}function F(v,w){let L=0,k=Math.floor((v.length+1)/2),$=0;const z=v.length-1;for(;!($>z||(w[$++]=v[L++],$>z));)w[$++]=v[k++]}function j(v){let w=v.byteLength;const L=new Array;let k=0;const $=new DataView(v);for(;w>0;){const z=$.getInt8(k++);if(z<0){const re=-z;w-=re+1;for(let ce=0;ce<re;ce++)L.push($.getUint8(k++))}else{const re=z;w-=2;const ce=$.getUint8(k++);for(let ue=0;ue<re+1;ue++)L.push(ce)}}return L}function B(v,w,L,k,$,z){let re=new DataView(z.buffer);const ce=L[v.idx[0]].width,ue=L[v.idx[0]].height,ae=3,oe=Math.floor(ce/8),Ee=Math.ceil(ce/8),Se=Math.ceil(ue/8),De=ce-(Ee-1)*8,qe=ue-(Se-1)*8,Pe={value:0},Be=new Array(ae),$e=new Array(ae),St=new Array(ae),C=new Array(ae),V=new Array(ae);for(let G=0;G<ae;++G)V[G]=w[v.idx[G]],Be[G]=G<1?0:Be[G-1]+Ee*Se,$e[G]=new Float32Array(64),St[G]=new Uint16Array(64),C[G]=new Uint16Array(Ee*64);for(let G=0;G<Se;++G){let W=8;G==Se-1&&(W=qe);let ge=8;for(let ye=0;ye<Ee;++ye){ye==Ee-1&&(ge=De);for(let Ae=0;Ae<ae;++Ae)St[Ae].fill(0),St[Ae][0]=$[Be[Ae]++],Y(Pe,k,St[Ae]),q(St[Ae],$e[Ae]),ie($e[Ae]);ne($e);for(let Ae=0;Ae<ae;++Ae)Q($e[Ae],C[Ae],ye*64)}let Re=0;for(let ye=0;ye<ae;++ye){const Ae=L[v.idx[ye]].type;for(let Xe=8*G;Xe<8*G+W;++Xe){Re=V[ye][Xe];for(let rt=0;rt<oe;++rt){const Ke=rt*64+(Xe&7)*8;re.setUint16(Re+0*2*Ae,C[ye][Ke+0],!0),re.setUint16(Re+1*2*Ae,C[ye][Ke+1],!0),re.setUint16(Re+2*2*Ae,C[ye][Ke+2],!0),re.setUint16(Re+3*2*Ae,C[ye][Ke+3],!0),re.setUint16(Re+4*2*Ae,C[ye][Ke+4],!0),re.setUint16(Re+5*2*Ae,C[ye][Ke+5],!0),re.setUint16(Re+6*2*Ae,C[ye][Ke+6],!0),re.setUint16(Re+7*2*Ae,C[ye][Ke+7],!0),Re+=8*2*Ae}}if(oe!=Ee)for(let Xe=8*G;Xe<8*G+W;++Xe){const rt=V[ye][Xe]+8*oe*2*Ae,Ke=oe*64+(Xe&7)*8;for(let Et=0;Et<ge;++Et)re.setUint16(rt+Et*2*Ae,C[ye][Ke+Et],!0)}}}const X=new Uint16Array(ce);re=new DataView(z.buffer);for(let G=0;G<ae;++G){L[v.idx[G]].decoded=!0;const W=L[v.idx[G]].type;if(L[G].type==2)for(let ge=0;ge<ue;++ge){const Re=V[G][ge];for(let ye=0;ye<ce;++ye)X[ye]=re.getUint16(Re+ye*2*W,!0);for(let ye=0;ye<ce;++ye)re.setFloat32(Re+ye*2*W,he(X[ye]),!0)}}}function Y(v,w,L){let k,$=1;for(;$<64;)k=w[v.value],k==65280?$=64:k>>8==255?$+=k&255:(L[$]=k,$++),v.value++}function q(v,w){w[0]=he(v[0]),w[1]=he(v[1]),w[2]=he(v[5]),w[3]=he(v[6]),w[4]=he(v[14]),w[5]=he(v[15]),w[6]=he(v[27]),w[7]=he(v[28]),w[8]=he(v[2]),w[9]=he(v[4]),w[10]=he(v[7]),w[11]=he(v[13]),w[12]=he(v[16]),w[13]=he(v[26]),w[14]=he(v[29]),w[15]=he(v[42]),w[16]=he(v[3]),w[17]=he(v[8]),w[18]=he(v[12]),w[19]=he(v[17]),w[20]=he(v[25]),w[21]=he(v[30]),w[22]=he(v[41]),w[23]=he(v[43]),w[24]=he(v[9]),w[25]=he(v[11]),w[26]=he(v[18]),w[27]=he(v[24]),w[28]=he(v[31]),w[29]=he(v[40]),w[30]=he(v[44]),w[31]=he(v[53]),w[32]=he(v[10]),w[33]=he(v[19]),w[34]=he(v[23]),w[35]=he(v[32]),w[36]=he(v[39]),w[37]=he(v[45]),w[38]=he(v[52]),w[39]=he(v[54]),w[40]=he(v[20]),w[41]=he(v[22]),w[42]=he(v[33]),w[43]=he(v[38]),w[44]=he(v[46]),w[45]=he(v[51]),w[46]=he(v[55]),w[47]=he(v[60]),w[48]=he(v[21]),w[49]=he(v[34]),w[50]=he(v[37]),w[51]=he(v[47]),w[52]=he(v[50]),w[53]=he(v[56]),w[54]=he(v[59]),w[55]=he(v[61]),w[56]=he(v[35]),w[57]=he(v[36]),w[58]=he(v[48]),w[59]=he(v[49]),w[60]=he(v[57]),w[61]=he(v[58]),w[62]=he(v[62]),w[63]=he(v[63])}function ie(v){const w=.5*Math.cos(.7853975),L=.5*Math.cos(3.14159/16),k=.5*Math.cos(3.14159/8),$=.5*Math.cos(3*3.14159/16),z=.5*Math.cos(5*3.14159/16),re=.5*Math.cos(3*3.14159/8),ce=.5*Math.cos(7*3.14159/16),ue=new Array(4),ae=new Array(4),oe=new Array(4),Ee=new Array(4);for(let Se=0;Se<8;++Se){const De=Se*8;ue[0]=k*v[De+2],ue[1]=re*v[De+2],ue[2]=k*v[De+6],ue[3]=re*v[De+6],ae[0]=L*v[De+1]+$*v[De+3]+z*v[De+5]+ce*v[De+7],ae[1]=$*v[De+1]-ce*v[De+3]-L*v[De+5]-z*v[De+7],ae[2]=z*v[De+1]-L*v[De+3]+ce*v[De+5]+$*v[De+7],ae[3]=ce*v[De+1]-z*v[De+3]+$*v[De+5]-L*v[De+7],oe[0]=w*(v[De+0]+v[De+4]),oe[3]=w*(v[De+0]-v[De+4]),oe[1]=ue[0]+ue[3],oe[2]=ue[1]-ue[2],Ee[0]=oe[0]+oe[1],Ee[1]=oe[3]+oe[2],Ee[2]=oe[3]-oe[2],Ee[3]=oe[0]-oe[1],v[De+0]=Ee[0]+ae[0],v[De+1]=Ee[1]+ae[1],v[De+2]=Ee[2]+ae[2],v[De+3]=Ee[3]+ae[3],v[De+4]=Ee[3]-ae[3],v[De+5]=Ee[2]-ae[2],v[De+6]=Ee[1]-ae[1],v[De+7]=Ee[0]-ae[0]}for(let Se=0;Se<8;++Se)ue[0]=k*v[16+Se],ue[1]=re*v[16+Se],ue[2]=k*v[48+Se],ue[3]=re*v[48+Se],ae[0]=L*v[8+Se]+$*v[24+Se]+z*v[40+Se]+ce*v[56+Se],ae[1]=$*v[8+Se]-ce*v[24+Se]-L*v[40+Se]-z*v[56+Se],ae[2]=z*v[8+Se]-L*v[24+Se]+ce*v[40+Se]+$*v[56+Se],ae[3]=ce*v[8+Se]-z*v[24+Se]+$*v[40+Se]-L*v[56+Se],oe[0]=w*(v[Se]+v[32+Se]),oe[3]=w*(v[Se]-v[32+Se]),oe[1]=ue[0]+ue[3],oe[2]=ue[1]-ue[2],Ee[0]=oe[0]+oe[1],Ee[1]=oe[3]+oe[2],Ee[2]=oe[3]-oe[2],Ee[3]=oe[0]-oe[1],v[0+Se]=Ee[0]+ae[0],v[8+Se]=Ee[1]+ae[1],v[16+Se]=Ee[2]+ae[2],v[24+Se]=Ee[3]+ae[3],v[32+Se]=Ee[3]-ae[3],v[40+Se]=Ee[2]-ae[2],v[48+Se]=Ee[1]-ae[1],v[56+Se]=Ee[0]-ae[0]}function ne(v){for(let w=0;w<64;++w){const L=v[0][w],k=v[1][w],$=v[2][w];v[0][w]=L+1.5747*$,v[1][w]=L-.1873*k-.4682*$,v[2][w]=L+1.8556*k}}function Q(v,w,L){for(let k=0;k<64;++k)w[L+k]=go.toHalfFloat(se(v[k]))}function se(v){return v<=1?Math.sign(v)*Math.pow(Math.abs(v),2.2):Math.sign(v)*Math.pow(t,Math.abs(v)-1)}function de(v){return new DataView(v.array.buffer,v.offset.value,v.size)}function Le(v){const w=v.viewer.buffer.slice(v.offset.value,v.offset.value+v.size),L=new Uint8Array(j(w)),k=new Uint8Array(L.length);return T(L),F(L,k),new DataView(k.buffer)}function je(v){const w=v.array.slice(v.offset.value,v.offset.value+v.size),L=Bs(w),k=new Uint8Array(L.length);return T(L),F(L,k),new DataView(k.buffer)}function Fe(v){const w=v.viewer,L={value:v.offset.value},k=new Uint16Array(v.columns*v.lines*(v.inputChannels.length*v.type)),$=new Uint8Array(8192);let z=0;const re=new Array(v.inputChannels.length);for(let qe=0,Pe=v.inputChannels.length;qe<Pe;qe++)re[qe]={},re[qe].start=z,re[qe].end=re[qe].start,re[qe].nx=v.columns,re[qe].ny=v.lines,re[qe].size=v.type,z+=re[qe].nx*re[qe].ny*re[qe].size;const ce=mt(w,L),ue=mt(w,L);if(ue>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ce<=ue)for(let qe=0;qe<ue-ce+1;qe++)$[qe+ce]=ot(w,L);const ae=new Uint16Array(65536),oe=i($,ae),Ee=et(w,L);I(v.array,w,L,Ee,k,z);for(let qe=0;qe<v.inputChannels.length;++qe){const Pe=re[qe];for(let Be=0;Be<re[qe].size;++Be)S(k,Pe.start+Be,Pe.nx,Pe.size,Pe.ny,Pe.nx*Pe.size,oe)}b(ae,k,z);let Se=0;const De=new Uint8Array(k.buffer.byteLength);for(let qe=0;qe<v.lines;qe++)for(let Pe=0;Pe<v.inputChannels.length;Pe++){const Be=re[Pe],$e=Be.nx*Be.size,St=new Uint8Array(k.buffer,Be.end*2,$e*2);De.set(St,Se),Se+=$e*2,Be.end+=$e}return new DataView(De.buffer)}function te(v){const w=v.array.slice(v.offset.value,v.offset.value+v.size),L=Bs(w),k=v.inputChannels.length*v.lines*v.columns*v.totalBytes,$=new ArrayBuffer(k),z=new DataView($);let re=0,ce=0;const ue=new Array(4);for(let ae=0;ae<v.lines;ae++)for(let oe=0;oe<v.inputChannels.length;oe++){let Ee=0;switch(v.inputChannels[oe].pixelType){case 1:ue[0]=re,ue[1]=ue[0]+v.columns,re=ue[1]+v.columns;for(let Se=0;Se<v.columns;++Se){const De=L[ue[0]++]<<8|L[ue[1]++];Ee+=De,z.setUint16(ce,Ee,!0),ce+=2}break;case 2:ue[0]=re,ue[1]=ue[0]+v.columns,ue[2]=ue[1]+v.columns,re=ue[2]+v.columns;for(let Se=0;Se<v.columns;++Se){const De=L[ue[0]++]<<24|L[ue[1]++]<<16|L[ue[2]++]<<8;Ee+=De,z.setUint32(ce,Ee,!0),ce+=4}break}}return z}function pe(v){const w=v.viewer,L={value:v.offset.value},k=new Uint8Array(v.columns*v.lines*(v.inputChannels.length*v.type*2)),$={version:Oe(w,L),unknownUncompressedSize:Oe(w,L),unknownCompressedSize:Oe(w,L),acCompressedSize:Oe(w,L),dcCompressedSize:Oe(w,L),rleCompressedSize:Oe(w,L),rleUncompressedSize:Oe(w,L),rleRawSize:Oe(w,L),totalAcUncompressedCount:Oe(w,L),totalDcUncompressedCount:Oe(w,L),acCompression:Oe(w,L)};if($.version<2)throw new Error("EXRLoader.parse: "+Z.compression+" version "+$.version+" is unsupported");const z=new Array;let re=mt(w,L)-2;for(;re>0;){const Pe=Ce(w.buffer,L),Be=ot(w,L),$e=Be>>2&3,St=(Be>>4)-1,C=new Int8Array([St])[0],V=ot(w,L);z.push({name:Pe,index:C,type:V,compression:$e}),re-=Pe.length+3}const ce=Z.channels,ue=new Array(v.inputChannels.length);for(let Pe=0;Pe<v.inputChannels.length;++Pe){const Be=ue[Pe]={},$e=ce[Pe];Be.name=$e.name,Be.compression=0,Be.decoded=!1,Be.type=$e.pixelType,Be.pLinear=$e.pLinear,Be.width=v.columns,Be.height=v.lines}const ae={idx:new Array(3)};for(let Pe=0;Pe<v.inputChannels.length;++Pe){const Be=ue[Pe];for(let $e=0;$e<z.length;++$e){const St=z[$e];Be.name==St.name&&(Be.compression=St.compression,St.index>=0&&(ae.idx[St.index]=Pe),Be.offset=Pe)}}let oe,Ee,Se;if($.acCompressedSize>0)switch($.acCompression){case 0:oe=new Uint16Array($.totalAcUncompressedCount),I(v.array,w,L,$.acCompressedSize,oe,$.totalAcUncompressedCount);break;case 1:const Pe=v.array.slice(L.value,L.value+$.totalAcUncompressedCount),Be=Bs(Pe);oe=new Uint16Array(Be.buffer),L.value+=$.totalAcUncompressedCount;break}if($.dcCompressedSize>0){const Pe={array:v.array,offset:L,size:$.dcCompressedSize};Ee=new Uint16Array(je(Pe).buffer),L.value+=$.dcCompressedSize}if($.rleRawSize>0){const Pe=v.array.slice(L.value,L.value+$.rleCompressedSize),Be=Bs(Pe);Se=j(Be.buffer),L.value+=$.rleCompressedSize}let De=0;const qe=new Array(ue.length);for(let Pe=0;Pe<qe.length;++Pe)qe[Pe]=new Array;for(let Pe=0;Pe<v.lines;++Pe)for(let Be=0;Be<ue.length;++Be)qe[Be].push(De),De+=ue[Be].width*v.type*2;B(ae,qe,ue,oe,Ee,k);for(let Pe=0;Pe<ue.length;++Pe){const Be=ue[Pe];if(!Be.decoded)switch(Be.compression){case 2:let $e=0,St=0;for(let C=0;C<v.lines;++C){let V=qe[Pe][$e];for(let X=0;X<Be.width;++X){for(let G=0;G<2*Be.type;++G)k[V++]=Se[St+G*Be.width*Be.height];St++}$e++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(k.buffer)}function Ce(v,w){const L=new Uint8Array(v);let k=0;for(;L[w.value+k]!=0;)k+=1;const $=new TextDecoder().decode(L.slice(w.value,w.value+k));return w.value=w.value+k+1,$}function xe(v,w,L){const k=new TextDecoder().decode(new Uint8Array(v).slice(w.value,w.value+L));return w.value=w.value+L,k}function Je(v,w){const L=H(v,w),k=et(v,w);return[L,k]}function Ze(v,w){const L=et(v,w),k=et(v,w);return[L,k]}function H(v,w){const L=v.getInt32(w.value,!0);return w.value=w.value+4,L}function et(v,w){const L=v.getUint32(w.value,!0);return w.value=w.value+4,L}function ze(v,w){const L=v[w.value];return w.value=w.value+1,L}function ot(v,w){const L=v.getUint8(w.value);return w.value=w.value+1,L}const Oe=function(v,w){let L;return"getBigInt64"in DataView.prototype?L=Number(v.getBigInt64(w.value,!0)):L=v.getUint32(w.value+4,!0)+Number(v.getUint32(w.value,!0)<<32),w.value+=8,L};function Ve(v,w){const L=v.getFloat32(w.value,!0);return w.value+=4,L}function tt(v,w){return go.toHalfFloat(Ve(v,w))}function he(v){const w=(v&31744)>>10,L=v&1023;return(v>>15?-1:1)*(w?w===31?L?NaN:1/0:Math.pow(2,w-15)*(1+L/1024):6103515625e-14*(L/1024))}function mt(v,w){const L=v.getUint16(w.value,!0);return w.value+=2,L}function O(v,w){return he(mt(v,w))}function R(v,w,L,k){const $=L.value,z=[];for(;L.value<$+k-1;){const re=Ce(w,L),ce=H(v,L),ue=ot(v,L);L.value+=3;const ae=H(v,L),oe=H(v,L);z.push({name:re,pixelType:ce,pLinear:ue,xSampling:ae,ySampling:oe})}return L.value+=1,z}function J(v,w){const L=Ve(v,w),k=Ve(v,w),$=Ve(v,w),z=Ve(v,w),re=Ve(v,w),ce=Ve(v,w),ue=Ve(v,w),ae=Ve(v,w);return{redX:L,redY:k,greenX:$,greenY:z,blueX:re,blueY:ce,whiteX:ue,whiteY:ae}}function le(v,w){const L=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],k=ot(v,w);return L[k]}function me(v,w){const L=H(v,w),k=H(v,w),$=H(v,w),z=H(v,w);return{xMin:L,yMin:k,xMax:$,yMax:z}}function fe(v,w){const L=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],k=ot(v,w);return L[k]}function He(v,w){const L=["ENVMAP_LATLONG","ENVMAP_CUBE"],k=ot(v,w);return L[k]}function Te(v,w){const L=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],k=["ROUND_DOWN","ROUND_UP"],$=et(v,w),z=et(v,w),re=ot(v,w);return{xSize:$,ySize:z,levelMode:L[re&15],roundingMode:k[re>>4]}}function we(v,w){const L=Ve(v,w),k=Ve(v,w);return[L,k]}function Ye(v,w){const L=Ve(v,w),k=Ve(v,w),$=Ve(v,w);return[L,k,$]}function Me(v,w,L,k,$){if(k==="string"||k==="stringvector"||k==="iccProfile")return xe(w,L,$);if(k==="chlist")return R(v,w,L,$);if(k==="chromaticities")return J(v,L);if(k==="compression")return le(v,L);if(k==="box2i")return me(v,L);if(k==="envmap")return He(v,L);if(k==="tiledesc")return Te(v,L);if(k==="lineOrder")return fe(v,L);if(k==="float")return Ve(v,L);if(k==="v2f")return we(v,L);if(k==="v3f")return Ye(v,L);if(k==="int")return H(v,L);if(k==="rational")return Je(v,L);if(k==="timecode")return Ze(v,L);if(k==="preview")return L.value+=$,"skipped";L.value+=$}function Ge(v,w){const L=Math.log2(v);return w=="ROUND_DOWN"?Math.floor(L):Math.ceil(L)}function ut(v,w,L){let k=0;switch(v.levelMode){case"ONE_LEVEL":k=1;break;case"MIPMAP_LEVELS":k=Ge(Math.max(w,L),v.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return k}function We(v,w,L,k){const $=new Array(v);for(let z=0;z<v;z++){const re=1<<z;let ce=w/re|0;k=="ROUND_UP"&&ce*re<w&&(ce+=1);const ue=Math.max(ce,1);$[z]=(ue+L-1)/L|0}return $}function Ue(){const v=this,w=v.offset,L={value:0};for(let k=0;k<v.tileCount;k++){const $=H(v.viewer,w),z=H(v.viewer,w);w.value+=8,v.size=et(v.viewer,w);const re=$*v.blockWidth,ce=z*v.blockHeight;v.columns=re+v.blockWidth>v.width?v.width-re:v.blockWidth,v.lines=ce+v.blockHeight>v.height?v.height-ce:v.blockHeight;const ue=v.columns*v.totalBytes,ae=v.size<v.lines*ue?v.uncompress(v):de(v);w.value+=v.size;for(let oe=0;oe<v.lines;oe++){const Ee=oe*v.columns*v.totalBytes;for(let Se=0;Se<v.inputChannels.length;Se++){const De=Z.channels[Se].name,qe=v.channelByteOffsets[De]*v.columns,Pe=v.decodeChannels[De];if(Pe===void 0)continue;L.value=Ee+qe;const Be=(v.height-(1+ce+oe))*v.outLineWidth;for(let $e=0;$e<v.columns;$e++){const St=Be+($e+re)*v.outputChannels+Pe;v.byteArray[St]=v.getter(ae,L)}}}}}function it(){const v=this,w=v.offset,L={value:0};for(let k=0;k<v.height/v.blockHeight;k++){const $=H(v.viewer,w)-Z.dataWindow.yMin;v.size=et(v.viewer,w),v.lines=$+v.blockHeight>v.height?v.height-$:v.blockHeight;const z=v.columns*v.totalBytes,re=v.size<v.lines*z?v.uncompress(v):de(v);w.value+=v.size;for(let ce=0;ce<v.blockHeight;ce++){const ue=k*v.blockHeight,ae=ce+v.scanOrder(ue);if(ae>=v.height)continue;const oe=ce*z,Ee=(v.height-1-ae)*v.outLineWidth;for(let Se=0;Se<v.inputChannels.length;Se++){const De=Z.channels[Se].name,qe=v.channelByteOffsets[De]*v.columns,Pe=v.decodeChannels[De];if(Pe!==void 0){L.value=oe+qe;for(let Be=0;Be<v.columns;Be++){const $e=Ee+Be*v.outputChannels+Pe;v.byteArray[$e]=v.getter(re,L)}}}}}}function at(v,w,L){const k={};if(v.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");k.version=v.getUint8(4);const $=v.getUint8(5);k.spec={singleTile:!!($&2),longName:!!($&4),deepFormat:!!($&8),multiPart:!!($&16)},L.value=8;let z=!0;for(;z;){const re=Ce(w,L);if(re==0)z=!1;else{const ce=Ce(w,L),ue=et(v,L),ae=Me(v,w,L,ce,ue);ae===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ce}'.`):k[re]=ae}}if($&-7)throw console.error("THREE.EXRHeader:",k),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return k}function gt(v,w,L,k,$){const z={size:0,viewer:w,array:L,offset:k,width:v.dataWindow.xMax-v.dataWindow.xMin+1,height:v.dataWindow.yMax-v.dataWindow.yMin+1,inputChannels:v.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Ft};switch(v.compression){case"NO_COMPRESSION":z.blockHeight=1,z.uncompress=de;break;case"RLE_COMPRESSION":z.blockHeight=1,z.uncompress=Le;break;case"ZIPS_COMPRESSION":z.blockHeight=1,z.uncompress=je;break;case"ZIP_COMPRESSION":z.blockHeight=16,z.uncompress=je;break;case"PIZ_COMPRESSION":z.blockHeight=32,z.uncompress=Fe;break;case"PXR24_COMPRESSION":z.blockHeight=16,z.uncompress=te;break;case"DWAA_COMPRESSION":z.blockHeight=32,z.uncompress=pe;break;case"DWAB_COMPRESSION":z.blockHeight=256,z.uncompress=pe;break;default:throw new Error("EXRLoader.parse: "+v.compression+" is unsupported")}const re={};for(const oe of v.channels)switch(oe.name){case"Y":case"R":case"G":case"B":case"A":re[oe.name]=!0,z.type=oe.pixelType}let ce=!1;if(re.R&&re.G&&re.B)ce=!re.A,z.outputChannels=4,z.decodeChannels={R:0,G:1,B:2,A:3};else if(re.Y)z.outputChannels=1,z.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(z.type==1)switch($){case ei:z.getter=O;break;case Nt:z.getter=mt;break}else if(z.type==2)switch($){case ei:z.getter=Ve;break;case Nt:z.getter=tt}else throw new Error("EXRLoader.parse: unsupported pixelType "+z.type+" for "+v.compression+".");z.columns=z.width;const ue=z.width*z.height*z.outputChannels;switch($){case ei:z.byteArray=new Float32Array(ue),ce&&z.byteArray.fill(1,0,ue);break;case Nt:z.byteArray=new Uint16Array(ue),ce&&z.byteArray.fill(15360,0,ue);break;default:console.error("THREE.EXRLoader: unsupported type: ",$);break}let ae=0;for(const oe of v.channels)z.decodeChannels[oe.name]!==void 0&&(z.channelByteOffsets[oe.name]=ae),ae+=oe.pixelType*2;if(z.totalBytes=ae,z.outLineWidth=z.width*z.outputChannels,v.lineOrder==="INCREASING_Y"?z.scanOrder=oe=>oe:z.scanOrder=oe=>z.height-1-oe,z.outputChannels==4?(z.format=ki,z.colorSpace=Ft):(z.format=bl,z.colorSpace=wn),v.spec.singleTile){z.blockHeight=v.tiles.ySize,z.blockWidth=v.tiles.xSize;const oe=ut(v.tiles,z.width,z.height),Ee=We(oe,z.width,v.tiles.xSize,v.tiles.roundingMode),Se=We(oe,z.height,v.tiles.ySize,v.tiles.roundingMode);z.tileCount=Ee[0]*Se[0];for(let De=0;De<oe;De++)for(let qe=0;qe<Se[De];qe++)for(let Pe=0;Pe<Ee[De];Pe++)Oe(w,k);z.decode=Ue.bind(z)}else{z.blockWidth=z.width;const oe=Math.ceil(z.height/z.blockHeight);for(let Ee=0;Ee<oe;Ee++)Oe(w,k);z.decode=it.bind(z)}return z}const U={value:0},D=new DataView(e),ee=new Uint8Array(e),Z=at(D,e,U),_e=gt(Z,D,ee,U,this.type);return _e.decode(),{header:Z,width:_e.width,height:_e.height,data:_e.byteArray,format:_e.format,colorSpace:_e.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,r){function o(a,s){a.colorSpace=s.colorSpace,a.minFilter=Ut,a.magFilter=Ut,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,s)}return super.load(e,o,i,r)}}class NM extends Rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new eS(t)})}load(e,t,i,r){const o=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=_a.extractUrlBase(e);a=_a.resolveURL(u,this.path)}else a=_a.extractUrlBase(e);this.manager.itemStart(e);const s=function(u){r?r(u):console.error(u),o.manager.itemError(e),o.manager.itemEnd(e)},c=new vc(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{o.parse(u,a,function(p){t(p),o.manager.itemEnd(e)},s)}catch(p){s(p)}},i,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let o;const a={},s={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===nf){try{a[ht.KHR_BINARY_GLTF]=new tS(e)}catch(p){r&&r(p);return}o=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new fS(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const l=this.pluginCallbacks[p](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[l.name]=l,a[l.name]=!0}if(o.extensionsUsed)for(let p=0;p<o.extensionsUsed.length;++p){const l=o.extensionsUsed[p],h=o.extensionsRequired||[];switch(l){case ht.KHR_MATERIALS_UNLIT:a[l]=new kM;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[l]=new iS(o,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[l]=new nS;break;case ht.KHR_MESH_QUANTIZATION:a[l]=new rS;break;default:h.indexOf(l)>=0&&s[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(a),u.setPlugins(s),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,o){i.parse(e,t,r,o)})}}function OM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BM{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const o=t.json,a=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let s;const c=new ke(16777215);a.color!==void 0&&c.setRGB(a.color[0],a.color[1],a.color[2],Ft);const u=a.range!==void 0?a.range:0;switch(a.type){case"directional":s=new zp(c),s.target.position.set(0,0,-1),s.add(s.target);break;case"point":s=new nM(c),s.distance=u;break;case"spot":s=new tM(c),s.distance=u,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,s.angle=a.spot.outerConeAngle,s.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return s.position.set(0,0,0),s.decay=2,tr(s,a),a.intensity!==void 0&&(s.intensity=a.intensity),s.name=t.createUniqueName(a.name||"light_"+e),r=Promise.resolve(s),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return i._getNodeRef(t.cache,o,a)})}}class kM{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,i){const r=[];e.color=new ke(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ft),e.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",o.baseColorTexture,ti))}return Promise.all(r)}}class FM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class zM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const s=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(s,s)}return Promise.all(o)}}class HM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class VM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class GM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const s=a.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Ft)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ti)),a.sheenRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class WM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class jM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const s=a.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(s[0],s[1],s[2],Ft),Promise.all(o)}}class XM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class qM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const s=a.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(s[0],s[1],s[2],Ft),a.specularColorTexture!==void 0&&o.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,ti)),Promise.all(o)}}class YM{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(o)}}class KM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class ZM{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,a)}}class $M{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],s=r.images[a.source];let c=i.textureLoader;if(s.uri){const u=i.options.manager.getHandler(s.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class QM{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],s=r.images[a.source];let c=i.textureLoader;if(s.uri){const u=i.options.manager.getHandler(s.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class JM{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(s){const c=r.byteOffset||0,u=r.byteLength||0,p=r.count,l=r.byteStride,h=new Uint8Array(s,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(p,l,h,r.mode,r.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(p*l);return a.decodeGltfBuffer(new Uint8Array(d),p,l,h,r.mode,r.filter),d})})}else return null}}class eS{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Hi.TRIANGLES&&c.mode!==Hi.TRIANGLE_STRIP&&c.mode!==Hi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],s={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(s[c]=u,s[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),p=u.isGroup?u.children:[u],l=c[0].count,h=[];for(const d of p){const m=new Qe,_=new N,g=new bi,f=new N(1,1,1),x=new pc(d.geometry,d.material,l);for(let y=0;y<l;y++)s.TRANSLATION&&_.fromBufferAttribute(s.TRANSLATION,y),s.ROTATION&&g.fromBufferAttribute(s.ROTATION,y),s.SCALE&&f.fromBufferAttribute(s.SCALE,y),x.setMatrixAt(y,m.compose(_,g,f));for(const y in s)if(y==="_COLOR_0"){const M=s[y];x.instanceColor=new dc(M.array,M.itemSize,M.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&d.geometry.setAttribute(y,s[y]);ct.prototype.copy.call(x,d),this.parser.assignFinalMaterial(x),h.push(x)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const nf="glTF",xa=12,rf={JSON:1313821514,BIN:5130562};class tS{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-xa,o=new DataView(e,xa);let a=0;for(;a<r;){const s=o.getUint32(a,!0);a+=4;const c=o.getUint32(a,!0);if(a+=4,c===rf.JSON){const u=new Uint8Array(e,xa+a,s);this.content=i.decode(u)}else if(c===rf.BIN){const u=xa+a;this.body=e.slice(u,u+s)}a+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,s={},c={},u={};for(const p in a){const l=Pc[p]||p.toLowerCase();s[l]=a[p]}for(const p in e.attributes){const l=Pc[p]||p.toLowerCase();if(a[p]!==void 0){const h=i.accessors[e.attributes[p]],d=Do[h.componentType];u[l]=d.name,c[l]=h.normalized===!0}}return t.getDependency("bufferView",o).then(function(p){return new Promise(function(l,h){r.decodeDracoFile(p,function(d){for(const m in d.attributes){const _=d.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}l(d)},s,u,Ft,h)})})}}class nS{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rS{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class of extends ma{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[o+a];return t}interpolate_(e,t,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,c=s*2,u=s*3,p=r-t,l=(i-t)/p,h=l*l,d=h*l,m=e*u,_=m-u,g=-2*d+3*h,f=d-h,x=1-g,y=f-h+l;for(let M=0;M!==s;M++){const P=a[_+M+s],S=a[_+M+c]*p,E=a[m+M+s],I=a[m+M]*p;o[M]=x*P+y*S+g*E+f*I}return o}}const oS=new bi;class aS extends of{interpolate_(e,t,i,r){const o=super.interpolate_(e,t,i,r);return oS.fromArray(o).normalize().toArray(o),o}}const Hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Do={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},af={9728:li,9729:Ut,9984:gh,9985:Za,9986:ea,9987:an},sf={33071:mi,33648:Ka,10497:Qr},Cc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sS={CUBICSPLINE:void 0,LINEAR:to,STEP:na},Ic={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new _c({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tn})),n.DefaultMaterial}function Cr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function tr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cS(n,e,t){let i=!1,r=!1,o=!1;for(let u=0,p=e.length;u<p;u++){const l=e[u];if(l.POSITION!==void 0&&(i=!0),l.NORMAL!==void 0&&(r=!0),l.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(n);const a=[],s=[],c=[];for(let u=0,p=e.length;u<p;u++){const l=e[u];if(i){const h=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):n.attributes.position;a.push(h)}if(r){const h=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):n.attributes.normal;s.push(h)}if(o){const h=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):n.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(s),Promise.all(c)]).then(function(u){const p=u[0],l=u[1],h=u[2];return i&&(n.morphAttributes.position=p),r&&(n.morphAttributes.normal=l),o&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function uS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hS(n){let e;const t=n.extensions&&n.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lc(t.attributes):e=n.indices+":"+Lc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Lc(n.targets[i]);return e}function Lc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Dc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const pS=new Qe;class fS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new OM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,o=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,o=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&o<98?this.textureLoader=new Op(this.options.manager):this.textureLoader=new aM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const s={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Cr(o,s,r),tr(s,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(s)})).then(function(){for(const c of s.scenes)c.updateMatrixWorld();e(s)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){const a=t[r].joints;for(let s=0,c=a.length;s<c;s++)e[a[s]].isBone=!0}for(let r=0,o=e.length;r<o;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),o=(a,s)=>{const c=this.associations.get(a);c!=null&&this.associations.set(s,c);for(const[u,p]of a.children.entries())o(p,s.children[u])};return o(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const o=e(t[r]);o&&i.push(o)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,a){i.load(_a.resolveURL(t.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,o=t.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Cc[r.type],s=Do[r.componentType],c=r.normalized===!0,u=new s(r.count*a);return Promise.resolve(new Zt(u,a,c))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){const s=a[0],c=Cc[r.type],u=Do[r.componentType],p=u.BYTES_PER_ELEMENT,l=p*c,h=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let _,g;if(d&&d!==l){const f=Math.floor(h/d),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let y=t.cache.get(x);y||(_=new u(s,f*d,r.count*d/p),y=new U1(_,d/p),t.cache.add(x,y)),g=new $u(y,c,h%d/p,m)}else s===null?_=new u(r.count*c):_=new u(s,h,r.count*c),g=new Zt(_,c,m);if(r.sparse!==void 0){const f=Cc.SCALAR,x=Do[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,P=new x(a[1],y,r.sparse.count*f),S=new u(a[2],M,r.sparse.count*c);s!==null&&(g=new Zt(g.array.slice(),g.itemSize,g.normalized));for(let E=0,I=P.length;E<I;E++){const b=P[E];if(g.setX(b,S[E*c]),c>=2&&g.setY(b,S[E*c+1]),c>=3&&g.setZ(b,S[E*c+2]),c>=4&&g.setW(b,S[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const s=i.manager.getHandler(o.uri);s!==null&&(a=s)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const r=this,o=this.json,a=o.textures[e],s=o.images[t],c=(s.uri||s.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=a.name||s.name||"",p.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(p.name=s.uri);const l=(o.samplers||{})[a.sampler]||{};return p.magFilter=af[l.magFilter]||Ut,p.minFilter=af[l.minFilter]||an,p.wrapS=sf[l.wrapS]||Qr,p.wrapT=sf[l.wrapT]||Qr,r.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const i=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());const a=r.images[e],s=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(l){u=!0;const h=new Blob([l],{type:a.mimeType});return c=s.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(c).then(function(l){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Wt(_);g.needsUpdate=!0,h(g)}),t.load(_a.resolveURL(l,o.path),m,void 0,d)})}).then(function(l){return u===!0&&s.revokeObjectURL(c),l.userData.mimeType=a.mimeType||dS(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[e]=p,p}assignTexture(e,t,i,r){const o=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),o.extensions[ht.KHR_TEXTURE_TRANSFORM]){const s=i.extensions!==void 0?i.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const c=o.associations.get(a);a=o.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,s),o.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const s="PointsMaterial:"+i.uuid;let c=this.cache.get(s);c||(c=new Ep,ln.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(s,c)),i=c}else if(e.isLine){const s="LineBasicMaterial:"+i.uuid;let c=this.cache.get(s);c||(c=new Mp,ln.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(s,c)),i=c}if(r||o||a){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),o&&(s+="vertex-colors:"),a&&(s+="flat-shading:");let c=this.cache.get(s);c||(c=i.clone(),o&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(s,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return _c}loadMaterial(e){const t=this,i=this.json,r=this.extensions,o=i.materials[e];let a;const s={},c=o.extensions||{},u=[];if(c[ht.KHR_MATERIALS_UNLIT]){const l=r[ht.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),u.push(l.extendParams(s,o,t))}else{const l=o.pbrMetallicRoughness||{};if(s.color=new ke(1,1,1),s.opacity=1,Array.isArray(l.baseColorFactor)){const h=l.baseColorFactor;s.color.setRGB(h[0],h[1],h[2],Ft),s.opacity=h[3]}l.baseColorTexture!==void 0&&u.push(t.assignTexture(s,"map",l.baseColorTexture,ti)),s.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,s.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(s,"metalnessMap",l.metallicRoughnessTexture)),u.push(t.assignTexture(s,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,s)})))}o.doubleSided===!0&&(s.side=Jt);const p=o.alphaMode||Ic.OPAQUE;if(p===Ic.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,p===Ic.MASK&&(s.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==cn&&(u.push(t.assignTexture(s,"normalMap",o.normalTexture)),s.normalScale=new Ie(1,1),o.normalTexture.scale!==void 0)){const l=o.normalTexture.scale;s.normalScale.set(l,l)}if(o.occlusionTexture!==void 0&&a!==cn&&(u.push(t.assignTexture(s,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==cn){const l=o.emissiveFactor;s.emissive=new ke().setRGB(l[0],l[1],l[2],Ft)}return o.emissiveTexture!==void 0&&a!==cn&&u.push(t.assignTexture(s,"emissiveMap",o.emissiveTexture,ti)),Promise.all(u).then(function(){const l=new a(s);return o.name&&(l.name=o.name),tr(l,o),t.associations.set(l,{materials:e}),o.extensions&&Cr(r,l,o),l})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function o(s){return i[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(c){return lf(c,s,t)})}const a=[];for(let s=0,c=e.length;s<c;s++){const u=e[s],p=hS(u),l=r[p];if(l)a.push(l.promise);else{let h;u.extensions&&u.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?h=o(u):h=lf(new Ni,u,t),r[p]={primitive:u,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,o=i.meshes[e],a=o.primitives,s=[];for(let c=0,u=a.length;c<u;c++){const p=a[c].material===void 0?lS(this.cache):this.getDependency("material",a[c].material);s.push(p)}return s.push(t.loadGeometries(a)),Promise.all(s).then(function(c){const u=c.slice(0,c.length-1),p=c[c.length-1],l=[];for(let d=0,m=p.length;d<m;d++){const _=p[d],g=a[d];let f;const x=u[d];if(g.mode===Hi.TRIANGLES||g.mode===Hi.TRIANGLE_STRIP||g.mode===Hi.TRIANGLE_FAN||g.mode===void 0)f=o.isSkinnedMesh===!0?new O1(_,x):new $t(_,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===Hi.TRIANGLE_STRIP?f.geometry=tf(f.geometry,Jh):g.mode===Hi.TRIANGLE_FAN&&(f.geometry=tf(f.geometry,Pl));else if(g.mode===Hi.LINES)f=new F1(_,x);else if(g.mode===Hi.LINE_STRIP)f=new mc(_,x);else if(g.mode===Hi.LINE_LOOP)f=new z1(_,x);else if(g.mode===Hi.POINTS)f=new Rp(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&uS(f,o),f.name=t.createUniqueName(o.name||"mesh_"+e),tr(f,o),g.extensions&&Cr(r,f,g),t.assignFinalMaterial(f),l.push(f)}for(let d=0,m=l.length;d<m;d++)t.associations.set(l[d],{meshes:e,primitives:d});if(l.length===1)return o.extensions&&Cr(r,l[0],o),l[0];const h=new hn;o.extensions&&Cr(r,h,o),t.associations.set(h,{meshes:e});for(let d=0,m=l.length;d<m;d++)h.add(l[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ui(ad.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ss(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),tr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,o=t.joints.length;r<o;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const o=r.pop(),a=r,s=[],c=[];for(let u=0,p=a.length;u<p;u++){const l=a[u];if(l){s.push(l);const h=new Qe;o!==null&&h.fromArray(o.array,u*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Qu(s,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,a=[],s=[],c=[],u=[],p=[];for(let l=0,h=r.channels.length;l<h;l++){const d=r.channels[l],m=r.samplers[d.sampler],_=d.target,g=_.node,f=r.parameters!==void 0?r.parameters[m.input]:m.input,x=r.parameters!==void 0?r.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),u.push(m),p.push(_))}return Promise.all([Promise.all(a),Promise.all(s),Promise.all(c),Promise.all(u),Promise.all(p)]).then(function(l){const h=l[0],d=l[1],m=l[2],_=l[3],g=l[4],f=[];for(let x=0,y=h.length;x<y;x++){const M=h[x],P=d[x],S=m[x],E=_[x],I=g[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const b=i._createAnimationTracks(M,P,S,E,I);if(b)for(let T=0;T<b.length;T++)f.push(b[T])}return new Y1(o,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){const a=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(s){if(s.isMesh)for(let c=0,u=r.weights.length;c<u;c++)s.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],o=i._loadNodeShallow(e),a=[],s=r.children||[];for(let u=0,p=s.length;u<p;u++)a.push(i.getDependency("node",s[u]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),c]).then(function(u){const p=u[0],l=u[1],h=u[2];h!==null&&p.traverse(function(d){d.isSkinnedMesh&&d.bind(h,pS)});for(let d=0,m=l.length;d<m;d++)p.add(l[d]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],a=o.name?r.createUniqueName(o.name):"",s=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&s.push(c),o.camera!==void 0&&s.push(r.getDependency("camera",o.camera).then(function(u){return r._getNodeRef(r.cameraCache,o.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){s.push(u)}),this.nodeCache[e]=Promise.all(s).then(function(u){let p;if(o.isBone===!0?p=new _p:u.length>1?p=new hn:u.length===1?p=u[0]:p=new ct,p!==u[0])for(let l=0,h=u.length;l<h;l++)p.add(u[l]);if(o.name&&(p.userData.name=o.name,p.name=a),tr(p,o),o.extensions&&Cr(i,p,o),o.matrix!==void 0){const l=new Qe;l.fromArray(o.matrix),p.applyMatrix4(l)}else o.translation!==void 0&&p.position.fromArray(o.translation),o.rotation!==void 0&&p.quaternion.fromArray(o.rotation),o.scale!==void 0&&p.scale.fromArray(o.scale);return r.associations.has(p)||r.associations.set(p,{}),r.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,o=new hn;i.name&&(o.name=r.createUniqueName(i.name)),tr(o,i),i.extensions&&Cr(t,o,i);const a=i.nodes||[],s=[];for(let c=0,u=a.length;c<u;c++)s.push(r.getDependency("node",a[c]));return Promise.all(s).then(function(c){for(let p=0,l=c.length;p<l;p++)o.add(c[p]);const u=p=>{const l=new Map;for(const[h,d]of r.associations)(h instanceof ln||h instanceof Wt)&&l.set(h,d);return p.traverse(h=>{const d=r.associations.get(h);d!=null&&l.set(h,d)}),l};return r.associations=u(o),o})}_createAnimationTracks(e,t,i,r,o){const a=[],s=e.name?e.name:e.uuid,c=[];er[o.path]===er.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(s);let u;switch(er[o.path]){case er.weights:u=Co;break;case er.rotation:u=Ar;break;case er.position:case er.scale:u=Io;break;default:switch(i.itemSize){case 1:u=Co;break;case 2:case 3:default:u=Io;break}break}const p=r.interpolation!==void 0?sS[r.interpolation]:to,l=this._getArrayFromAccessor(i);for(let h=0,d=c.length;h<d;h++){const m=new u(c[h]+"."+er[o.path],t.array,l,p);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Dc(t.constructor),r=new Float32Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=t[o]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const i=this instanceof Ar?aS:of;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mS(n,e,t){const i=e.attributes,r=new An;if(i.POSITION!==void 0){const s=t.json.accessors[i.POSITION],c=s.min,u=s.max;if(c!==void 0&&u!==void 0){if(r.set(new N(c[0],c[1],c[2]),new N(u[0],u[1],u[2])),s.normalized){const p=Dc(Do[s.componentType]);r.min.multiplyScalar(p),r.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const s=new N,c=new N;for(let u=0,p=o.length;u<p;u++){const l=o[u];if(l.POSITION!==void 0){const h=t.json.accessors[l.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){const _=Dc(Do[h.componentType]);c.multiplyScalar(_)}s.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(s)}n.boundingBox=r;const a=new sn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function lf(n,e,t){const i=e.attributes,r=[];function o(a,s){return t.getDependency("accessor",a).then(function(c){n.setAttribute(s,c)})}for(const a in i){const s=Pc[a]||a.toLowerCase();s in n.attributes||r.push(o(i[a],s))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(s){n.setIndex(s)});r.push(a)}return pt.workingColorSpace!==Ft&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),tr(n,e),mS(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?cS(n,e.targets,t):n})}class gS extends Np{constructor(e){super(e),this.type=Nt}parse(e){const t=function(f,x){switch(f){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},i=`
`,r=function(f,x,y){x=x||1024;let M=f.pos,P=-1,S=0,E="",I=String.fromCharCode.apply(null,new Uint16Array(f.subarray(M,M+128)));for(;0>(P=I.indexOf(i))&&S<x&&M<f.byteLength;)E+=I,S+=I.length,M+=128,I+=String.fromCharCode.apply(null,new Uint16Array(f.subarray(M,M+128)));return-1<P?(f.pos+=S+P+1,E+I.slice(0,P)):!1},o=function(f){const x=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,S=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,E={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let I,b;for((f.pos>=f.byteLength||!(I=r(f)))&&t(1,"no header found"),(b=I.match(x))||t(3,"bad initial token"),E.valid|=1,E.programtype=b[1],E.string+=I+`
`;I=r(f),I!==!1;){if(E.string+=I+`
`,I.charAt(0)==="#"){E.comments+=I+`
`;continue}if((b=I.match(y))&&(E.gamma=parseFloat(b[1])),(b=I.match(M))&&(E.exposure=parseFloat(b[1])),(b=I.match(P))&&(E.valid|=2,E.format=b[1]),(b=I.match(S))&&(E.valid|=4,E.height=parseInt(b[1],10),E.width=parseInt(b[2],10)),E.valid&2&&E.valid&4)break}return E.valid&2||t(3,"missing format specifier"),E.valid&4||t(3,"missing image size specifier"),E},a=function(f,x,y){const M=x;if(M<8||M>32767||f[0]!==2||f[1]!==2||f[2]&128)return new Uint8Array(f);M!==(f[2]<<8|f[3])&&t(3,"wrong scanline width");const P=new Uint8Array(4*x*y);P.length||t(4,"unable to allocate buffer space");let S=0,E=0;const I=4*M,b=new Uint8Array(4),T=new Uint8Array(I);let F=y;for(;F>0&&E<f.byteLength;){E+4>f.byteLength&&t(1),b[0]=f[E++],b[1]=f[E++],b[2]=f[E++],b[3]=f[E++],(b[0]!=2||b[1]!=2||(b[2]<<8|b[3])!=M)&&t(3,"bad rgbe scanline format");let j=0,B;for(;j<I&&E<f.byteLength;){B=f[E++];const q=B>128;if(q&&(B-=128),(B===0||j+B>I)&&t(3,"bad scanline data"),q){const ie=f[E++];for(let ne=0;ne<B;ne++)T[j++]=ie}else T.set(f.subarray(E,E+B),j),j+=B,E+=B}const Y=M;for(let q=0;q<Y;q++){let ie=0;P[S]=T[q+ie],ie+=M,P[S+1]=T[q+ie],ie+=M,P[S+2]=T[q+ie],ie+=M,P[S+3]=T[q+ie],S+=4}F--}return P},s=function(f,x,y,M){const P=f[x+3],S=Math.pow(2,P-128)/255;y[M+0]=f[x+0]*S,y[M+1]=f[x+1]*S,y[M+2]=f[x+2]*S,y[M+3]=1},c=function(f,x,y,M){const P=f[x+3],S=Math.pow(2,P-128)/255;y[M+0]=go.toHalfFloat(Math.min(f[x+0]*S,65504)),y[M+1]=go.toHalfFloat(Math.min(f[x+1]*S,65504)),y[M+2]=go.toHalfFloat(Math.min(f[x+2]*S,65504)),y[M+3]=go.toHalfFloat(1)},u=new Uint8Array(e);u.pos=0;const p=o(u),l=p.width,h=p.height,d=a(u.subarray(u.pos),l,h);let m,_,g;switch(this.type){case ei:g=d.length/4;const f=new Float32Array(g*4);for(let y=0;y<g;y++)s(d,y*4,f,y*4);m=f,_=ei;break;case Nt:g=d.length/4;const x=new Uint16Array(g*4);for(let y=0;y<g;y++)c(d,y*4,x,y*4);m=x,_=Nt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:l,height:h,data:m,header:p.string,gamma:p.gamma,exposure:p.exposure,type:_}}setDataType(e){return this.type=e,this}load(e,t,i,r){function o(a,s){switch(a.type){case ei:case Nt:a.colorSpace=Ft,a.minFilter=Ut,a.magFilter=Ut,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,s)}return super.load(e,o,i,r)}}class Pr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _S=new Ss(-1,1,1,-1,0,1);class vS extends Ni{constructor(){super(),this.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gi([0,2,0,0,2,0],2))}}const yS=new vS;class ks{constructor(e){this._mesh=new $t(yS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_S)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Uc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class cf extends Pr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mr.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ks(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class uf extends Pr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class xS extends Pr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class MS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ie);this._width=i.width,this._height=i.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cf(Uc),this.copyPass.material.blending=Yi,this.clock=new Hp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const s=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}uf!==void 0&&(a instanceof uf?i=!0:a instanceof xS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fr extends Pr{constructor(e,t,i,r){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=r!==void 0?r:[],this.visibleEdgeColor=new ke(1,1,1),this.hiddenEdgeColor=new ke(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256);const o=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Xt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new hp,this.depthMaterial.side=Jt,this.depthMaterial.depthPacking=ed,this.depthMaterial.blending=Yi,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Jt,this.prepareMaskMaterial.fragmentShader=p(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Xt(this.resolution.x,this.resolution.y,{type:Nt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Xt(o,a,{type:Nt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Xt(o,a,{type:Nt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Xt(Math.round(o/2),Math.round(a/2),{type:Nt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Xt(o,a,{type:Nt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Xt(Math.round(o/2),Math.round(a/2),{type:Nt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const s=4,c=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(s),this.separableBlurMaterial1.uniforms.texSize.value.set(o,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(c),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(o/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=c,this.overlayMaterial=this.getOverlayMaterial();const u=Uc;this.copyUniforms=Mr.clone(u.uniforms),this.materialCopy=new Pt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Yi,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.fsQuad=new ks(null),this.tempPulseColor1=new ke,this.tempPulseColor2=new ke,this.textureMatrix=new Qe;function p(l,h){const d=h.isPerspectiveCamera?"perspective":"orthographic";return l.replace(/DEPTH_TO_VIEW_Z/g,d+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),r=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,r),this.renderTargetBlurBuffer1.setSize(i,r),this.renderTargetEdgeBuffer1.setSize(i,r),this.separableBlurMaterial1.uniforms.texSize.value.set(i,r),i=Math.round(i/2),r=Math.round(r/2),this.renderTargetBlurBuffer2.setSize(i,r),this.renderTargetEdgeBuffer2.setSize(i,r),this.separableBlurMaterial2.uniforms.texSize.value.set(i,r)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function i(r){r.isMesh&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}for(let r=0;r<this.selectedObjects.length;r++)this.selectedObjects[r].traverse(i)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=[];function r(a){a.isMesh&&i.push(a)}for(let a=0;a<this.selectedObjects.length;a++)this.selectedObjects[a].traverse(r);function o(a){if(a.isMesh||a.isSprite){let s=!1;for(let c=0;c<i.length;c++)if(i[c].id===a.id){s=!0;break}if(s===!1){const c=a.visible;(e===!1||t.get(a)===!0)&&(a.visible=e),t.set(a,c)}}else(a.isPoints||a.isLine)&&(e===!0?a.visible=t.get(a):(t.set(a,a.visible),a.visible=e))}this.renderScene.traverse(o)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,r,o){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,o&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const s=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=s,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=fr.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=fr.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=fr.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=fr.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,o&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new Pt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Ie(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new Pt({uniforms:{maskTexture:{value:null},texSize:{value:new Ie(.5,.5)},visibleEdgeColor:{value:new N(1,1,1)},hiddenEdgeColor:{value:new N(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new Pt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new Pt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Jo,depthTest:!1,depthWrite:!1,transparent:!0})}}fr.BlurDirectionX=new Ie(1,0),fr.BlurDirectionY=new Ie(0,1);const SS={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class bS extends Pr{constructor(){super();const e=SS;this.uniforms=Mr.clone(e.uniforms),this.material=new H1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ch?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ph&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class TS extends Pr{constructor(e,t,i=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const wS={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $o extends Pr{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(o,a,{type:Nt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){const h=new Xt(o,a,{type:Nt});h.texture.name="UnrealBloomPass.h"+l,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new Xt(o,a,{type:Nt});d.texture.name="UnrealBloomPass.v"+l,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),a=Math.round(a/2)}const s=wS;this.highPassUniforms=Mr.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new Ie(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const p=Uc;this.copyUniforms=Mr.clone(p.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,blending:Jo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.basic=new cn,this.fsQuad=new ks(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.invSize.value=new Ie(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let s=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[c].uniforms.direction.value=$o.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=$o.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),s=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}$o.BlurDirectionX=new Ie(1,0),$o.BlurDirectionY=new Ie(0,1);const ES={name:"GammaCorrectionShader",uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = sRGBTransferOETF( tex );

		}`};function Nn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function hf(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Uo={duration:.5,overwrite:!1,delay:0},Nc,ri,Rt,Vi=1e8,Tt=1/Vi,Oc=Math.PI*2,AS=Oc/4,RS=0,df=Math.sqrt,CS=Math.cos,PS=Math.sin,Yt=function(n){return typeof n=="string"},Ot=function(n){return typeof n=="function"},On=function(n){return typeof n=="number"},Bc=function(n){return typeof n>"u"},fn=function(n){return typeof n=="object"},_i=function(n){return n!==!1},kc=function(){return typeof window<"u"},Fs=function(n){return Ot(n)||Yt(n)},pf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},oi=Array.isArray,Fc=/(?:-?\.?\d|\.)+/gi,ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,No=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mf=/[+-]=-?[.\d]+/,gf=/[^,'"\[\]\s]+/gi,IS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,mn,Hc,Vc,Ai={},zs={},_f,vf=function(n){return(zs=Lr(n,Ai))&&xi},Gc=function(n,e){return console.warn("Invalid property",n,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ma=function(n,e){return!e&&console.warn(n)},yf=function(n,e){return n&&(Ai[n]=e)&&zs&&(zs[n]=e)||Ai},Sa=function(){return 0},LS={suppressEvents:!0,isStart:!0,kill:!1},Hs={suppressEvents:!0,kill:!1},DS={suppressEvents:!0},Wc={},ir=[],jc={},xf,Ri={},Xc={},Mf=30,Vs=[],qc="",Yc=function(n){var e=n[0],t,i;if(fn(e)||Ot(e)||(n=[n]),!(t=(e._gsap||{}).harness)){for(i=Vs.length;i--&&!Vs[i].targetTest(e););t=Vs[i]}for(i=n.length;i--;)n[i]&&(n[i]._gsap||(n[i]._gsap=new Zf(n[i],t)))||n.splice(i,1);return n},Ir=function(n){return n._gsap||Yc(ji(n))[0]._gsap},Sf=function(n,e,t){return(t=n[e])&&Ot(t)?n[e]():Bc(t)&&n.getAttribute&&n.getAttribute(e)||t},vi=function(n,e){return(n=n.split(",")).forEach(e)||n},Bt=function(n){return Math.round(n*1e5)/1e5||0},Kt=function(n){return Math.round(n*1e7)/1e7||0},Oo=function(n,e){var t=e.charAt(0),i=parseFloat(e.substr(2));return n=parseFloat(n),t==="+"?n+i:t==="-"?n-i:t==="*"?n*i:n/i},US=function(n,e){for(var t=e.length,i=0;n.indexOf(e[i])<0&&++i<t;);return i<t},Gs=function(){var n=ir.length,e=ir.slice(0),t,i;for(jc={},ir.length=0,t=0;t<n;t++)i=e[t],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bf=function(n,e,t,i){ir.length&&!ri&&Gs(),n.render(e,t,ri&&e<0&&(n._initted||n._startAt)),ir.length&&!ri&&Gs()},Tf=function(n){var e=parseFloat(n);return(e||e===0)&&(n+"").match(gf).length<2?e:Yt(n)?n.trim():n},wf=function(n){return n},Gi=function(n,e){for(var t in e)t in n||(n[t]=e[t]);return n},NS=function(n){return function(e,t){for(var i in t)i in e||i==="duration"&&n||i==="ease"||(e[i]=t[i])}},Lr=function(n,e){for(var t in e)n[t]=e[t];return n},Ef=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=fn(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ws=function(n,e){var t={},i;for(i in n)i in e||(t[i]=n[i]);return t},ba=function(n){var e=n.parent||It,t=n.keyframes?NS(oi(n.keyframes)):Gi;if(_i(n.inherit))for(;e;)t(n,e.vars.defaults),e=e.parent||e._dp;return n},OS=function(n,e){for(var t=n.length,i=t===e.length;i&&t--&&n[t]===e[t];);return t<0},Af=function(n,e,t,i,r){var o=n[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=n[t],n[t]=e),e._next?e._next._prev=e:n[i]=e,e._prev=o,e.parent=e._dp=n,e},js=function(n,e,t,i){t===void 0&&(t="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:n[t]===e&&(n[t]=o),o?o._prev=r:n[i]===e&&(n[i]=r),e._next=e._prev=e.parent=null},nr=function(n,e){n.parent&&(!e||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},Dr=function(n,e){if(n&&(!e||e._end>n._dur||e._start<0))for(var t=n;t;)t._dirty=1,t=t.parent;return n},BS=function(n){for(var e=n.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return n},Kc=function(n,e,t,i){return n._startAt&&(ri?n._startAt.revert(Hs):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(e,!0,i))},kS=function n(e){return!e||e._ts&&n(e.parent)},Rf=function(n){return n._repeat?Bo(n._tTime,n=n.duration()+n._rDelay)*n:0},Bo=function(n,e){var t=Math.floor(n/=e);return n&&t===n?t-1:t},Xs=function(n,e){return(n-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},qs=function(n){return n._end=Kt(n._start+(n._tDur/Math.abs(n._ts||n._rts||Tt)||0))},Ys=function(n,e){var t=n._dp;return t&&t.smoothChildTiming&&n._ts&&(n._start=Kt(t._time-(n._ts>0?e/n._ts:((n._dirty?n.totalDuration():n._tDur)-e)/-n._ts)),qs(n),t._dirty||Dr(t,n)),n},Cf=function(n,e){var t;if((e._time||!e._dur&&e._initted||e._start<n._time&&(e._dur||!e.add))&&(t=Xs(n.rawTime(),e),(!e._dur||wa(0,e.totalDuration(),t)-e._tTime>Tt)&&e.render(t,!0)),Dr(n,e)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(t=n;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;n._zTime=-Tt}},gn=function(n,e,t,i){return e.parent&&nr(e),e._start=Kt((On(t)?t:t||n!==It?Wi(n,t,e):n._time)+e._delay),e._end=Kt(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Af(n,e,"_first","_last",n._sort?"_start":0),Zc(e)||(n._recent=e),i||Cf(n,e),n._ts<0&&Ys(n,n._tTime),n},Pf=function(n,e){return(Ai.ScrollTrigger||Gc("scrollTrigger",e))&&Ai.ScrollTrigger.create(e,n)},If=function(n,e,t,i,r){if(ou(n,e,r),!n._initted)return 1;if(!t&&n._pt&&!ri&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&xf!==Pi.frame)return ir.push(n),n._lazy=[r,i],1},FS=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Zc=function(n){var e=n.data;return e==="isFromStart"||e==="isStart"},zS=function(n,e,t,i){var r=n.ratio,o=e<0||!e&&(!n._start&&FS(n)&&!(!n._initted&&Zc(n))||(n._ts<0||n._dp._ts<0)&&!Zc(n))?0:1,a=n._rDelay,s=0,c,u,p;if(a&&n._repeat&&(s=wa(0,n._tDur,e),u=Bo(s,a),n._yoyo&&u&1&&(o=1-o),u!==Bo(n._tTime,a)&&(r=1-o,n.vars.repeatRefresh&&n._initted&&n.invalidate())),o!==r||ri||i||n._zTime===Tt||!e&&n._zTime){if(!n._initted&&If(n,e,i,t,s))return;for(p=n._zTime,n._zTime=e||(t?Tt:0),t||(t=e&&!p),n.ratio=o,n._from&&(o=1-o),n._time=0,n._tTime=s,c=n._pt;c;)c.r(o,c.d),c=c._next;e<0&&Kc(n,e,t,!0),n._onUpdate&&!t&&Ci(n,"onUpdate"),s&&n._repeat&&!t&&n.parent&&Ci(n,"onRepeat"),(e>=n._tDur||e<0)&&n.ratio===o&&(o&&nr(n,1),!t&&!ri&&(Ci(n,o?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=e)},HS=function(n,e,t){var i;if(t>e)for(i=n._first;i&&i._start<=t;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=n._last;i&&i._start>=t;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ko=function(n,e,t,i){var r=n._repeat,o=Kt(e)||0,a=n._tTime/n._tDur;return a&&!i&&(n._time*=o/n._dur),n._dur=o,n._tDur=r?r<0?1e10:Kt(o*(r+1)+n._rDelay*r):o,a>0&&!i&&Ys(n,n._tTime=n._tDur*a),n.parent&&qs(n),t||Dr(n.parent,n),n},Lf=function(n){return n instanceof di?Dr(n):ko(n,n._dur)},VS={_start:0,endTime:Sa,totalDuration:Sa},Wi=function n(e,t,i){var r=e.labels,o=e._recent||VS,a=e.duration()>=Vi?o.endTime(!1):e._dur,s,c,u;return Yt(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),u=t.substr(-1)==="%",s=t.indexOf("="),c==="<"||c===">"?(s>=0&&(t=t.replace(/=/,"")),(c==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(s<0?o:i).totalDuration()/100:1)):s<0?(t in r||(r[t]=a),r[t]):(c=parseFloat(t.charAt(s-1)+t.substr(s+1)),u&&i&&(c=c/100*(oi(i)?i[0]:i).totalDuration()),s>1?n(e,t.substr(0,s-1),i)+c:a+c)):t==null?a:+t},Ta=function(n,e,t){var i=On(e[1]),r=(i?2:1)+(n<2?0:1),o=e[r],a,s;if(i&&(o.duration=e[1]),o.parent=t,n){for(a=o,s=t;s&&!("immediateRender"in a);)a=s.vars.defaults||{},s=_i(s.vars.inherit)&&s.parent;o.immediateRender=_i(a.immediateRender),n<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ht(e[0],o,e[r+1])},rr=function(n,e){return n||n===0?e(n):e},wa=function(n,e,t){return t<n?n:t>e?e:t},ai=function(n,e){return!Yt(n)||!(e=IS.exec(n))?"":e[1]},GS=function(n,e,t){return rr(t,function(i){return wa(n,e,i)})},$c=[].slice,Df=function(n,e){return n&&fn(n)&&"length"in n&&(!e&&!n.length||n.length-1 in n&&fn(n[0]))&&!n.nodeType&&n!==mn},WS=function(n,e,t){return t===void 0&&(t=[]),n.forEach(function(i){var r;return Yt(i)&&!e||Df(i,1)?(r=t).push.apply(r,ji(i)):t.push(i)})||t},ji=function(n,e,t){return Rt&&!e&&Rt.selector?Rt.selector(n):Yt(n)&&!t&&(Hc||!zo())?$c.call((e||Vc).querySelectorAll(n),0):oi(n)?WS(n,t):Df(n)?$c.call(n,0):n?[n]:[]},Qc=function(n){return n=ji(n)[0]||Ma("Invalid scope")||{},function(e){var t=n.current||n.nativeElement||n;return ji(e,t.querySelectorAll?t:t===n?Ma("Invalid scope")||Vc.createElement("div"):n)}},Uf=function(n){return n.sort(function(){return .5-Math.random()})},Nf=function(n){if(Ot(n))return n;var e=fn(n)?n:{each:n},t=Ur(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,s=isNaN(i)||a,c=e.axis,u=i,p=i;return Yt(i)?u=p={center:.5,edges:.5,end:1}[i]||0:!a&&s&&(u=i[0],p=i[1]),function(l,h,d){var m=(d||e).length,_=o[m],g,f,x,y,M,P,S,E,I;if(!_){if(I=e.grid==="auto"?0:(e.grid||[1,Vi])[1],!I){for(S=-Vi;S<(S=d[I++].getBoundingClientRect().left)&&I<m;);I<m&&I--}for(_=o[m]=[],g=s?Math.min(I,m)*u-.5:i%I,f=I===Vi?0:s?m*p/I-.5:i/I|0,S=0,E=Vi,P=0;P<m;P++)x=P%I-g,y=f-(P/I|0),_[P]=M=c?Math.abs(c==="y"?y:x):df(x*x+y*y),M>S&&(S=M),M<E&&(E=M);i==="random"&&Uf(_),_.max=S-E,_.min=E,_.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(I>m?m-1:c?c==="y"?m/I:I:Math.max(I,m/I))||0)*(i==="edges"?-1:1),_.b=m<0?r-m:r,_.u=ai(e.amount||e.each)||0,t=t&&m<0?qf(t):t}return m=(_[l]-_.min)/_.max||0,Kt(_.b+(t?t(m):m)*_.v)+_.u}},Jc=function(n){var e=Math.pow(10,((n+"").split(".")[1]||"").length);return function(t){var i=Kt(Math.round(parseFloat(t)/n)*n*e);return(i-i%1)/e+(On(t)?0:ai(t))}},Of=function(n,e){var t=oi(n),i,r;return!t&&fn(n)&&(i=t=n.radius||Vi,n.values?(n=ji(n.values),(r=!On(n[0]))&&(i*=i)):n=Jc(n.increment)),rr(e,t?Ot(n)?function(o){return r=n(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),s=parseFloat(r?o.y:0),c=Vi,u=0,p=n.length,l,h;p--;)r?(l=n[p].x-a,h=n[p].y-s,l=l*l+h*h):l=Math.abs(n[p]-a),l<c&&(c=l,u=p);return u=!i||c<=i?n[u]:o,r||u===o||On(o)?u:u+ai(o)}:Jc(n))},Bf=function(n,e,t,i){return rr(oi(n)?!e:t===!0?!!(t=0):!i,function(){return oi(n)?n[~~(Math.random()*n.length)]:(t=t||1e-5)&&(i=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((n-t/2+Math.random()*(e-n+t*.99))/t)*t*i)/i})},jS=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(i){return e.reduce(function(r,o){return o(r)},i)}},XS=function(n,e){return function(t){return n(parseFloat(t))+(e||ai(t))}},qS=function(n,e,t){return Ff(n,e,0,1,t)},kf=function(n,e,t){return rr(t,function(i){return n[~~e(i)]})},YS=function n(e,t,i){var r=t-e;return oi(e)?kf(e,n(0,e.length),t):rr(i,function(o){return(r+(o-e)%r)%r+e})},KS=function n(e,t,i){var r=t-e,o=r*2;return oi(e)?kf(e,n(0,e.length-1),t):rr(i,function(a){return a=(o+(a-e)%o)%o||0,e+(a>r?o-a:a)})},Ea=function(n){for(var e=0,t="",i,r,o,a;~(i=n.indexOf("random(",e));)o=n.indexOf(")",i),a=n.charAt(i+7)==="[",r=n.substr(i+7,o-i-7).match(a?gf:Fc),t+=n.substr(e,i-e)+Bf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return t+n.substr(e,n.length-e)},Ff=function(n,e,t,i,r){var o=e-n,a=i-t;return rr(r,function(s){return t+((s-n)/o*a||0)})},ZS=function n(e,t,i,r){var o=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!o){var a=Yt(e),s={},c,u,p,l,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(oi(e)&&!oi(t)){for(p=[],l=e.length,h=l-2,u=1;u<l;u++)p.push(n(e[u-1],e[u]));l--,o=function(d){d*=l;var m=Math.min(h,~~d);return p[m](d-m)},i=t}else r||(e=Lr(oi(e)?[]:{},e));if(!p){for(c in t)nu.call(s,e,c,"get",t[c]);o=function(d){return lu(d,s)||(a?e.p:e)}}}return rr(i,o)},zf=function(n,e,t){var i=n.labels,r=Vi,o,a,s;for(o in i)a=i[o]-e,a<0==!!t&&a&&r>(a=Math.abs(a))&&(s=o,r=a);return s},Ci=function(n,e,t){var i=n.vars,r=i[e],o=Rt,a=n._ctx,s,c,u;if(r)return s=i[e+"Params"],c=i.callbackScope||n,t&&ir.length&&Gs(),a&&(Rt=a),u=s?r.apply(c,s):r.call(c),Rt=o,u},Aa=function(n){return nr(n),n.scrollTrigger&&n.scrollTrigger.kill(!!ri),n.progress()<1&&Ci(n,"onInterrupt"),n},Fo,Hf=[],Vf=function(n){if(n)if(n=!n.name&&n.default||n,kc()||n.headless){var e=n.name,t=Ot(n),i=e&&!t&&n.init?function(){this._props=[]}:n,r={init:Sa,render:lu,add:nu,kill:db,modifier:hb,rawVars:0},o={targetTest:0,get:0,getSetter:su,aliases:{},register:0};if(zo(),n!==i){if(Ri[e])return;Gi(i,Gi(Ws(n,r),o)),Lr(i.prototype,Lr(r,Ws(n,o))),Ri[i.prop=e]=i,n.targetTest&&(Vs.push(i),Wc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}yf(e,i),n.register&&n.register(xi,i,yi)}else Hf.push(n)},xt=255,Ra={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},eu=function(n,e,t){return n+=n<0?1:n>1?-1:0,(n*6<1?e+(t-e)*n*6:n<.5?t:n*3<2?e+(t-e)*(2/3-n)*6:e)*xt+.5|0},Gf=function(n,e,t){var i=n?On(n)?[n>>16,n>>8&xt,n&xt]:0:Ra.black,r,o,a,s,c,u,p,l,h,d;if(!i){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),Ra[n])i=Ra[n];else if(n.charAt(0)==="#"){if(n.length<6&&(r=n.charAt(1),o=n.charAt(2),a=n.charAt(3),n="#"+r+r+o+o+a+a+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return i=parseInt(n.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),i=[n>>16,n>>8&xt,n&xt]}else if(n.substr(0,3)==="hsl"){if(i=d=n.match(Fc),!e)s=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=eu(s+1/3,r,o),i[1]=eu(s,r,o),i[2]=eu(s-1/3,r,o);else if(~n.indexOf("="))return i=n.match(ff),t&&i.length<4&&(i[3]=1),i}else i=n.match(Fc)||Ra.transparent;i=i.map(Number)}return e&&!d&&(r=i[0]/xt,o=i[1]/xt,a=i[2]/xt,p=Math.max(r,o,a),l=Math.min(r,o,a),u=(p+l)/2,p===l?s=c=0:(h=p-l,c=u>.5?h/(2-p-l):h/(p+l),s=p===r?(o-a)/h+(o<a?6:0):p===o?(a-r)/h+2:(r-o)/h+4,s*=60),i[0]=~~(s+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),t&&i.length<4&&(i[3]=1),i},Wf=function(n){var e=[],t=[],i=-1;return n.split(or).forEach(function(r){var o=r.match(No)||[];e.push.apply(e,o),t.push(i+=o.length+1)}),e.c=t,e},jf=function(n,e,t){var i="",r=(n+i).match(or),o=e?"hsla(":"rgba(",a=0,s,c,u,p;if(!r)return n;if(r=r.map(function(l){return(l=Gf(l,e,1))&&o+(e?l[0]+","+l[1]+"%,"+l[2]+"%,"+l[3]:l.join(","))+")"}),t&&(u=Wf(n),s=t.c,s.join(i)!==u.c.join(i)))for(c=n.replace(or,"1").split(No),p=c.length-1;a<p;a++)i+=c[a]+(~s.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:t).shift());if(!c)for(c=n.split(or),p=c.length-1;a<p;a++)i+=c[a]+r[a];return i+c[p]},or=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ra)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),$S=/hsl[a]?\(/,Xf=function(n){var e=n.join(" "),t;if(or.lastIndex=0,or.test(e))return t=$S.test(e),n[1]=jf(n[1],t),n[0]=jf(n[0],t,Wf(n[1])),!0},Ca,Pi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,o=1e3/240,a=o,s=[],c,u,p,l,h,d,m=function _(g){var f=n()-r,x=g===!0,y,M,P,S;if((f>e||f<0)&&(i+=f-t),r+=f,P=r-i,y=P-a,(y>0||x)&&(S=++l.frame,h=P-l.time*1e3,l.time=P=P/1e3,a+=y+(y>=o?4:o-y),M=1),x||(c=u(_)),M)for(d=0;d<s.length;d++)s[d](P,h,S,g)};return l={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){_f&&(!Hc&&kc()&&(mn=Hc=window,Vc=mn.document||{},Ai.gsap=xi,(mn.gsapVersions||(mn.gsapVersions=[])).push(xi.version),vf(zs||mn.GreenSockGlobals||!mn.gsap&&mn||{}),Hf.forEach(Vf)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&l.sleep(),u=p||function(_){return setTimeout(_,a-l.time*1e3+1|0)},Ca=1,m(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(c),Ca=0,u=Sa},lagSmoothing:function(_,g){e=_||1/0,t=Math.min(g||33,e)},fps:function(_){o=1e3/(_||240),a=l.time*1e3+o},add:function(_,g,f){var x=g?function(y,M,P,S){_(y,M,P,S),l.remove(x)}:_;return l.remove(_),s[f?"unshift":"push"](x),zo(),x},remove:function(_,g){~(g=s.indexOf(_))&&s.splice(g,1)&&d>=g&&d--},_listeners:s},l}(),zo=function(){return!Ca&&Pi.wake()},dt={},QS=/^[\d.\-M][\d.\-,\s]/,JS=/["']/g,eb=function(n){for(var e={},t=n.substr(1,n.length-3).split(":"),i=t[0],r=1,o=t.length,a,s,c;r<o;r++)s=t[r],a=r!==o-1?s.lastIndexOf(","):s.length,c=s.substr(0,a),e[i]=isNaN(c)?c.replace(JS,"").trim():+c,i=s.substr(a+1).trim();return e},tb=function(n){var e=n.indexOf("(")+1,t=n.indexOf(")"),i=n.indexOf("(",e);return n.substring(e,~i&&i<t?n.indexOf(")",t+1):t)},ib=function(n){var e=(n+"").split("("),t=dt[e[0]];return t&&e.length>1&&t.config?t.config.apply(null,~n.indexOf("{")?[eb(e[1])]:tb(n).split(",").map(Tf)):dt._CE&&QS.test(n)?dt._CE("",n):t},qf=function(n){return function(e){return 1-n(1-e)}},Yf=function n(e,t){for(var i=e._first,r;i;)i instanceof di?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Ur=function(n,e){return n&&(Ot(n)?n:dt[n]||ib(n))||e},Nr=function(n,e,t,i){t===void 0&&(t=function(a){return 1-e(1-a)}),i===void 0&&(i=function(a){return a<.5?e(a*2)/2:1-e((1-a)*2)/2});var r={easeIn:e,easeOut:t,easeInOut:i},o;return vi(n,function(a){dt[a]=Ai[a]=r,dt[o=a.toLowerCase()]=t;for(var s in r)dt[o+(s==="easeIn"?".in":s==="easeOut"?".out":".inOut")]=dt[a+"."+s]=r[s]}),r},Kf=function(n){return function(e){return e<.5?(1-n(1-e*2))/2:.5+n((e-.5)*2)/2}},tu=function n(e,t,i){var r=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),a=o/Oc*(Math.asin(1/r)||0),s=function(u){return u===1?1:r*Math.pow(2,-10*u)*PS((u-a)*o)+1},c=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:Kf(s);return o=Oc/o,c.config=function(u,p){return n(e,u,p)},c},iu=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:Kf(i);return r.config=function(o){return n(e,o)},r};vi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Nr(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})}),dt.Linear.easeNone=dt.none=dt.Linear.easeIn,Nr("Elastic",tu("in"),tu("out"),tu()),function(n,e){var t=1/e,i=2*t,r=2.5*t,o=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Nr("Bounce",function(a){return 1-o(1-a)},o)}(7.5625,2.75),Nr("Expo",function(n){return n?Math.pow(2,10*(n-1)):0}),Nr("Circ",function(n){return-(df(1-n*n)-1)}),Nr("Sine",function(n){return n===1?1:-CS(n*AS)+1}),Nr("Back",iu("in"),iu("out"),iu()),dt.SteppedEase=dt.steps=Ai.SteppedEase={config:function(n,e){n===void 0&&(n=1);var t=1/n,i=n+(e?0:1),r=e?1:0,o=1-Tt;return function(a){return((i*wa(0,o,a)|0)+r)*t}}},Uo.ease=dt["quad.out"],vi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return qc+=n+","+n+"Params,"});var Zf=function(n,e){this.id=RS++,n._gsap=this,this.target=n,this.harness=e,this.get=e?e.get:Sf,this.set=e?e.getSetter:su},Pa=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ko(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Ca||Pi.wake()}var e=n.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,ko(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,i){if(zo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ys(this,t),!r._dp||r.parent||Cf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&gn(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),bf(this,t,i)),this},e.time=function(t,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Rf(this))%(this._dur+this._rDelay)||(t?this._dur:0),i):this._time},e.totalProgress=function(t,i){return arguments.length?this.totalTime(this.totalDuration()*t,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(t,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+Rf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,i):this._repeat?Bo(this._tTime,r)+1:1},e.timeScale=function(t,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Xs(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-Tt?0:this._rts,this.totalTime(wa(-Math.abs(this._delay),this._tDur,r),i!==!1),qs(this),BS(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gn(i,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(_i(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var i=this.parent||this._dp;return i?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xs(i.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=DS);var i=ri;return ri=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),ri=i,this},e.globalTime=function(t){for(var i=this,r=arguments.length?t:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(t):r},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,Lf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var i=this._time;return this._rDelay=t,Lf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,i){return this.totalTime(Wi(this,t),_i(i))},e.restart=function(t,i){return this.play().totalTime(t?-this._delay:0,_i(i))},e.play=function(t,i){return t!=null&&this.seek(t,i),this.reversed(!1).paused(!1)},e.reverse=function(t,i){return t!=null&&this.seek(t||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(t,i){return t!=null&&this.seek(t,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var t=this.parent||this._dp,i=this._start,r;return!!(!t||this._ts&&this._initted&&t.isActive()&&(r=t.rawTime(!0))>=i&&r<this.endTime(!0)-Tt)},e.eventCallback=function(t,i,r){var o=this.vars;return arguments.length>1?(i?(o[t]=i,r&&(o[t+"Params"]=r),t==="onUpdate"&&(this._onUpdate=i)):delete o[t],this):o[t]},e.then=function(t){var i=this;return new Promise(function(r){var o=Ot(t)?t:wf,a=function(){var s=i.then;i.then=null,Ot(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=s),r(o),i.then=s};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Aa(this)},n}();Gi(Pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var di=function(n){hf(e,n);function e(i,r){var o;return i===void 0&&(i={}),o=n.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=_i(i.sortChildren),It&&gn(i.parent||It,Nn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&Pf(Nn(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(i,r,o){return Ta(0,arguments,this),this},t.from=function(i,r,o){return Ta(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Ta(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,ba(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ht(i,r,Wi(this,o),1),this},t.call=function(i,r,o){return gn(this,Ht.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,s,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ht(i,o,Wi(this,s)),this},t.staggerFrom=function(i,r,o,a,s,c,u){return o.runBackwards=1,ba(o).immediateRender=_i(o.immediateRender),this.staggerTo(i,r,o,a,s,c,u)},t.staggerFromTo=function(i,r,o,a,s,c,u,p){return a.startAt=o,ba(a).immediateRender=_i(a.immediateRender),this.staggerTo(i,r,a,s,c,u,p)},t.render=function(i,r,o){var a=this._time,s=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Kt(i),p=this._zTime<0!=i<0&&(this._initted||!c),l,h,d,m,_,g,f,x,y,M,P,S;if(this!==It&&u>s&&i>=0&&(u=s),u!==this._tTime||o||p){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),l=u,y=this._start,x=this._ts,g=!x,p&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,r,o);if(l=Kt(u%_),u===s?(m=this._repeat,l=c):(m=~~(u/_),m&&m===u/_&&(l=c,m--),l>c&&(l=c)),M=Bo(this._tTime,_),!a&&this._tTime&&M!==m&&this._tTime-M*_-this._dur<=0&&(M=m),P&&m&1&&(l=c-l,S=1),m!==M&&!this._lock){var E=P&&M&1,I=E===(P&&m&1);if(m<M&&(E=!E),a=E?0:u%c?c:u,this._lock=1,this.render(a||(S?0:Kt(m*_)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,s=this._tDur,I&&(this._lock=2,a=E?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Yf(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(f=HS(this,Kt(a),Kt(l)),f&&(u-=l-(l=f._start))),this._tTime=u,this._time=l,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&l&&!r&&!m&&(Ci(this,"onStart"),this._tTime!==u))return this;if(l>=a&&i>=0)for(h=this._first;h;){if(d=h._next,(h._act||l>=h._start)&&h._ts&&f!==h){if(h.parent!==this)return this.render(i,r,o);if(h.render(h._ts>0?(l-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(l-h._start)*h._ts,r,o),l!==this._time||!this._ts&&!g){f=0,d&&(u+=this._zTime=-Tt);break}}h=d}else{h=this._last;for(var b=i<0?i:l;h;){if(d=h._prev,(h._act||b<=h._end)&&h._ts&&f!==h){if(h.parent!==this)return this.render(i,r,o);if(h.render(h._ts>0?(b-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(b-h._start)*h._ts,r,o||ri&&(h._initted||h._startAt)),l!==this._time||!this._ts&&!g){f=0,d&&(u+=this._zTime=b?-Tt:Tt);break}}h=d}}if(f&&!r&&(this.pause(),f.render(l>=a?0:-Tt)._zTime=l>=a?1:-1,this._ts))return this._start=y,qs(this),this.render(i,r,o);this._onUpdate&&!r&&Ci(this,"onUpdate",!0),(u===s&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===s&&this._ts>0||!u&&this._ts<0)&&nr(this,1),!r&&!(i<0&&!a)&&(u||a||!s)&&(Ci(this,u===s&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<s&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(On(r)||(r=Wi(this,r,i)),!(i instanceof Pa)){if(oi(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Yt(i))return this.addLabel(i,r);if(Ot(i))i=Ht.delayedCall(0,i);else return this}return this!==i?gn(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vi);for(var s=[],c=this._first;c;)c._start>=a&&(c instanceof Ht?r&&s.push(c):(o&&s.push(c),i&&s.push.apply(s,c.getChildren(!0,r,o)))),c=c._next;return s},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Yt(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(js(this,i),i===this._recent&&(this._recent=this._last),Dr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt(Pi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),n.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Wi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Ht.delayedCall(0,r||Sa,o);return a.data="isPause",this._hasPause=1,gn(this,a,Wi(this,i))},t.removePause=function(i){var r=this._first;for(i=Wi(this,i);r;)r._start===i&&r.data==="isPause"&&nr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),s=a.length;s--;)ar!==a[s]&&a[s].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=ji(i),s=this._first,c=On(r),u;s;)s instanceof Ht?US(s._targets,a)&&(c?(!ar||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&o.push(s):(u=s.getTweensOf(a,r)).length&&o.push.apply(o,u),s=s._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Wi(o,i),s=r,c=s.startAt,u=s.onStart,p=s.onStartParams,l=s.immediateRender,h,d=Ht.to(o,Gi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!h){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());d._dur!==m&&ko(d,m,0,1).render(d._time,!0,!0),h=1}u&&u.apply(d,p||[])}},r));return l?d.render(0):d},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Gi({startAt:{time:Wi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),zf(this,Wi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),zf(this,Wi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,s=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in s)s[c]>=o&&(s[c]+=i);return Dr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return n.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Dr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,s=Vi,c,u,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(p=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>s&&o._sort&&a._ts&&!o._lock?(o._lock=1,gn(o,a,u-a._delay,1)._lock=0):s=u,u<0&&a._ts&&(r-=u,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),s=0),a._end>r&&a._ts&&(r=a._end),a=c;ko(o,o===It&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(It._ts&&(bf(It,Xs(i,It)),xf=Pi.frame),Pi.frame>=Mf){Mf+=Ei.autoSleep||120;var r=It._first;if((!r||!r._ts)&&Ei.autoSleep&&Pi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Pi.sleep()}}},e}(Pa);Gi(di.prototype,{_lock:0,_hasPause:0,_forcing:0});var nb=function(n,e,t,i,r,o,a){var s=new yi(this._pt,n,e,0,1,im,null,r),c=0,u=0,p,l,h,d,m,_,g,f;for(s.b=t,s.e=i,t+="",i+="",(g=~i.indexOf("random("))&&(i=Ea(i)),o&&(f=[t,i],o(f,n,e),t=f[0],i=f[1]),l=t.match(zc)||[];p=zc.exec(i);)d=p[0],m=i.substring(c,p.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),d!==l[u++]&&(_=parseFloat(l[u-1])||0,s._pt={_next:s._pt,p:m||u===1?m:",",s:_,c:d.charAt(1)==="="?Oo(_,d)-_:parseFloat(d)-_,m:h&&h<4?Math.round:0},c=zc.lastIndex);return s.c=c<i.length?i.substring(c,i.length):"",s.fp=a,(mf.test(i)||g)&&(s.e=0),this._pt=s,s},nu=function(n,e,t,i,r,o,a,s,c,u){Ot(i)&&(i=i(r||0,n,o));var p=n[e],l=t!=="get"?t:Ot(p)?c?n[e.indexOf("set")||!Ot(n["get"+e.substr(3)])?e:"get"+e.substr(3)](c):n[e]():p,h=Ot(p)?c?lb:em:au,d;if(Yt(i)&&(~i.indexOf("random(")&&(i=Ea(i)),i.charAt(1)==="="&&(d=Oo(l,i)+(ai(l)||0),(d||d===0)&&(i=d))),!u||l!==i||ru)return!isNaN(l*i)&&i!==""?(d=new yi(this._pt,n,e,+l||0,i-(l||0),typeof p=="boolean"?ub:tm,0,h),c&&(d.fp=c),a&&d.modifier(a,this,n),this._pt=d):(!p&&!(e in n)&&Gc(e,i),nb.call(this,n,e,l,i,h,s||Ei.stringFilter,c))},rb=function(n,e,t,i,r){if(Ot(n)&&(n=Ia(n,r,e,t,i)),!fn(n)||n.style&&n.nodeType||oi(n)||pf(n))return Yt(n)?Ia(n,r,e,t,i):n;var o={},a;for(a in n)o[a]=Ia(n[a],r,e,t,i);return o},$f=function(n,e,t,i,r,o){var a,s,c,u;if(Ri[n]&&(a=new Ri[n]).init(r,a.rawVars?e[n]:rb(e[n],i,r,o,t),t,i,o)!==!1&&(t._pt=s=new yi(t._pt,r,n,0,1,a.render,a,0,a.priority),t!==Fo))for(c=t._ptLookup[t._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=s;return a},ar,ru,ou=function n(e,t,i){var r=e.vars,o=r.ease,a=r.startAt,s=r.immediateRender,c=r.lazy,u=r.onUpdate,p=r.runBackwards,l=r.yoyoEase,h=r.keyframes,d=r.autoRevert,m=e._dur,_=e._startAt,g=e._targets,f=e.parent,x=f&&f.data==="nested"?f.vars.targets:g,y=e._overwrite==="auto"&&!Nc,M=e.timeline,P,S,E,I,b,T,F,j,B,Y,q,ie,ne;if(M&&(!h||!o)&&(o="none"),e._ease=Ur(o,Uo.ease),e._yEase=l?qf(Ur(l===!0?o:l,Uo.ease)):0,l&&e._yoyo&&!e._repeat&&(l=e._yEase,e._yEase=e._ease,e._ease=l),e._from=!M&&!!r.runBackwards,!M||h&&!r.stagger){if(j=g[0]?Ir(g[0]).harness:0,ie=j&&r[j.prop],P=Ws(r,Wc),_&&(_._zTime<0&&_.progress(1),t<0&&p&&s&&!d?_.render(-1,!0):_.revert(p&&m?Hs:LS),_._lazy=0),a){if(nr(e._startAt=Ht.set(g,Gi({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&_i(c),startAt:null,delay:0,onUpdate:u&&function(){return Ci(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ri||!s&&!d)&&e._startAt.revert(Hs),s&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&m&&!_){if(t&&(s=!1),E=Gi({overwrite:!1,data:"isFromStart",lazy:s&&!_&&_i(c),immediateRender:s,stagger:0,parent:f},P),ie&&(E[j.prop]=ie),nr(e._startAt=Ht.set(g,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ri?e._startAt.revert(Hs):e._startAt.render(-1,!0)),e._zTime=t,!s)n(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&_i(c)||c&&!m,S=0;S<g.length;S++){if(b=g[S],F=b._gsap||Yc(g)[S]._gsap,e._ptLookup[S]=Y={},jc[F.id]&&ir.length&&Gs(),q=x===g?S:x.indexOf(b),j&&(B=new j).init(b,ie||P,e,q,x)!==!1&&(e._pt=I=new yi(e._pt,b,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(Q){Y[Q]=I}),B.priority&&(T=1)),!j||ie)for(E in P)Ri[E]&&(B=$f(E,P,e,q,b,x))?B.priority&&(T=1):Y[E]=I=nu.call(e,b,E,"get",P[E],q,x,0,r.stringFilter);e._op&&e._op[S]&&e.kill(b,e._op[S]),y&&e._pt&&(ar=e,It.killTweensOf(b,Y,e.globalTime(t)),ne=!e.parent,ar=0),e._pt&&c&&(jc[F.id]=1)}T&&nm(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!ne,h&&t<=0&&M.render(Vi,!0,!0)},ob=function(n,e,t,i,r,o,a,s){var c=(n._pt&&n._ptCache||(n._ptCache={}))[e],u,p,l,h;if(!c)for(c=n._ptCache[e]=[],l=n._ptLookup,h=n._targets.length;h--;){if(u=l[h][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return ru=1,n.vars[e]="+=0",ou(n,a),ru=0,s?Ma(e+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)p=c[h],u=p._pt||p,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=t-u.s,p.e&&(p.e=Bt(t)+ai(p.e)),p.b&&(p.b=u.s+ai(p.b))},ab=function(n,e){var t=n[0]?Ir(n[0]).harness:0,i=t&&t.aliases,r,o,a,s;if(!i)return e;r=Lr({},e);for(o in i)if(o in r)for(s=i[o].split(","),a=s.length;a--;)r[s[a]]=r[o];return r},sb=function(n,e,t,i){var r=e.ease||i||"power1.inOut",o,a;if(oi(e))a=t[n]||(t[n]=[]),e.forEach(function(s,c){return a.push({t:c/(e.length-1)*100,v:s,e:r})});else for(o in e)a=t[o]||(t[o]=[]),o==="ease"||a.push({t:parseFloat(n),v:e[o],e:r})},Ia=function(n,e,t,i,r){return Ot(n)?n.call(e,t,i,r):Yt(n)&&~n.indexOf("random(")?Ea(n):n},Qf=qc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jf={};vi(Qf+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Jf[n]=1});var Ht=function(n){hf(e,n);function e(i,r,o,a){var s;typeof r=="number"&&(o.duration=r,r=o,o=null),s=n.call(this,a?r:ba(r))||this;var c=s.vars,u=c.duration,p=c.delay,l=c.immediateRender,h=c.stagger,d=c.overwrite,m=c.keyframes,_=c.defaults,g=c.scrollTrigger,f=c.yoyoEase,x=r.parent||It,y=(oi(i)||pf(i)?On(i[0]):"length"in r)?[i]:ji(i),M,P,S,E,I,b,T,F;if(s._targets=y.length?Yc(y):Ma("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=d,m||h||Fs(u)||Fs(p)){if(r=s.vars,M=s.timeline=new di({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),M.kill(),M.parent=M._dp=Nn(s),M._start=0,h||Fs(u)||Fs(p)){if(E=y.length,T=h&&Nf(h),fn(h))for(I in h)~Qf.indexOf(I)&&(F||(F={}),F[I]=h[I]);for(P=0;P<E;P++)S=Ws(r,Jf),S.stagger=0,f&&(S.yoyoEase=f),F&&Lr(S,F),b=y[P],S.duration=+Ia(u,Nn(s),P,b,y),S.delay=(+Ia(p,Nn(s),P,b,y)||0)-s._delay,!h&&E===1&&S.delay&&(s._delay=p=S.delay,s._start+=p,S.delay=0),M.to(b,S,T?T(P,b,y):0),M._ease=dt.none;M.duration()?u=p=0:s.timeline=0}else if(m){ba(Gi(M.vars.defaults,{ease:"none"})),M._ease=Ur(m.ease||r.ease||"none");var j=0,B,Y,q;if(oi(m))m.forEach(function(ie){return M.to(y,ie,">")}),M.duration();else{S={};for(I in m)I==="ease"||I==="easeEach"||sb(I,m[I],S,m.easeEach);for(I in S)for(B=S[I].sort(function(ie,ne){return ie.t-ne.t}),j=0,P=0;P<B.length;P++)Y=B[P],q={ease:Y.e,duration:(Y.t-(P?B[P-1].t:0))/100*u},q[I]=Y.v,M.to(y,q,j),j+=q.duration;M.duration()<u&&M.to({},{duration:u-M.duration()})}}u||s.duration(u=M.duration())}else s.timeline=0;return d===!0&&!Nc&&(ar=Nn(s),It.killTweensOf(y),ar=0),gn(x,Nn(s),o),r.reversed&&s.reverse(),r.paused&&s.paused(!0),(l||!u&&!m&&s._start===Kt(x._time)&&_i(l)&&kS(Nn(s))&&x.data!=="nested")&&(s._tTime=-Tt,s.render(Math.max(0,-p)||0)),g&&Pf(Nn(s),g),s}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,s=this._tDur,c=this._dur,u=i<0,p=i>s-Tt&&!u?s:i<Tt?0:i,l,h,d,m,_,g,f,x,y;if(!c)zS(this,i,r,o);else if(p!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(l=p,x=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,r,o);if(l=Kt(p%m),p===s?(d=this._repeat,l=c):(d=~~(p/m),d&&d===Kt(p/m)&&(l=c,d--),l>c&&(l=c)),g=this._yoyo&&d&1,g&&(y=this._yEase,l=c-l),_=Bo(this._tTime,m),l===a&&!o&&this._initted&&d===_)return this._tTime=p,this;d!==_&&(x&&this._yEase&&Yf(x,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==m&&this._initted&&(this._lock=o=1,this.render(Kt(m*d),!0).invalidate()._lock=0))}if(!this._initted){if(If(this,u?i:l,o,r,p))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&d!==_))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=p,this._time=l,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=f=(y||this._ease)(l/c),this._from&&(this.ratio=f=1-f),l&&!a&&!r&&!d&&(Ci(this,"onStart"),this._tTime!==p))return this;for(h=this._pt;h;)h.r(f,h.d),h=h._next;x&&x.render(i<0?i:x._dur*x._ease(l/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Kc(this,i,r,o),Ci(this,"onUpdate")),this._repeat&&d!==_&&this.vars.onRepeat&&!r&&this.parent&&Ci(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(u&&!this._onUpdate&&Kc(this,i,!0,!0),(i||!c)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&nr(this,1),!r&&!(u&&!a)&&(p||a||g)&&(Ci(this,p===s?"onComplete":"onReverseComplete",!0),this._prom&&!(p<s&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),n.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,s){Ca||Pi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ou(this,c),u=this._ease(c/this._dur),ob(this,i,r,o,a,u,c,s)?this.resetTo(i,r,o,a,1):(Ys(this,0),this.parent||Af(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Aa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ar&&ar.vars.overwrite!==!0)._first||Aa(this),this.parent&&o!==this.timeline.totalDuration()&&ko(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,s=i?ji(i):a,c=this._ptLookup,u=this._pt,p,l,h,d,m,_,g;if((!r||r==="all")&&OS(a,s))return r==="all"&&(this._pt=0),Aa(this);for(p=this._op=this._op||[],r!=="all"&&(Yt(r)&&(m={},vi(r,function(f){return m[f]=1}),r=m),r=ab(a,r)),g=a.length;g--;)if(~s.indexOf(a[g])){l=c[g],r==="all"?(p[g]=r,d=l,h={}):(h=p[g]=p[g]||{},d=r);for(m in d)_=l&&l[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&js(this,_,"_pt"),delete l[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&Aa(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ta(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Ta(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return It.killTweensOf(i,r,o)},e}(Pa);Gi(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),vi("staggerTo,staggerFrom,staggerFromTo",function(n){Ht[n]=function(){var e=new di,t=$c.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var au=function(n,e,t){return n[e]=t},em=function(n,e,t){return n[e](t)},lb=function(n,e,t,i){return n[e](i.fp,t)},cb=function(n,e,t){return n.setAttribute(e,t)},su=function(n,e){return Ot(n[e])?em:Bc(n[e])&&n.setAttribute?cb:au},tm=function(n,e){return e.set(e.t,e.p,Math.round((e.s+e.c*n)*1e6)/1e6,e)},ub=function(n,e){return e.set(e.t,e.p,!!(e.s+e.c*n),e)},im=function(n,e){var t=e._pt,i="";if(!n&&e.b)i=e.b;else if(n===1&&e.e)i=e.e;else{for(;t;)i=t.p+(t.m?t.m(t.s+t.c*n):Math.round((t.s+t.c*n)*1e4)/1e4)+i,t=t._next;i+=e.c}e.set(e.t,e.p,i,e)},lu=function(n,e){for(var t=e._pt;t;)t.r(n,t.d),t=t._next},hb=function(n,e,t,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(n,e,t),r=o},db=function(n){for(var e=this._pt,t,i;e;)i=e._next,e.p===n&&!e.op||e.op===n?js(this,e,"_pt"):e.dep||(t=1),e=i;return!t},pb=function(n,e,t,i){i.mSet(n,e,i.m.call(i.tween,t,i.mt),i)},nm=function(n){for(var e=n._pt,t,i,r,o;e;){for(t=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=t}n._pt=r},yi=function(){function n(t,i,r,o,a,s,c,u,p){this.t=i,this.s=o,this.c=a,this.p=r,this.r=s||tm,this.d=c||this,this.set=u||au,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(t,i,r){this.mSet=this.mSet||this.set,this.set=pb,this.m=t,this.mt=r,this.tween=i},n}();vi(qc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Wc[n]=1}),Ai.TweenMax=Ai.TweenLite=Ht,Ai.TimelineLite=Ai.TimelineMax=di,It=new di({sortChildren:!1,defaults:Uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Ei.stringFilter=Xf;var Or=[],Ks={},fb=[],rm=0,mb=0,cu=function(n){return(Ks[n]||fb).map(function(e){return e()})},uu=function(){var n=Date.now(),e=[];n-rm>2&&(cu("matchMediaInit"),Or.forEach(function(t){var i=t.queries,r=t.conditions,o,a,s,c;for(a in i)o=mn.matchMedia(i[a]).matches,o&&(s=1),o!==r[a]&&(r[a]=o,c=1);c&&(t.revert(),s&&e.push(t))}),cu("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t,function(i){return t.add(null,i)})}),rm=n,cu("matchMedia"))},om=function(){function n(t,i){this.selector=i&&Qc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=mb++,t&&this.add(t)}var e=n.prototype;return e.add=function(t,i,r){Ot(t)&&(r=i,i=t,t=Ot);var o=this,a=function(){var s=Rt,c=o.selector,u;return s&&s!==o&&s.data.push(o),r&&(o.selector=Qc(r)),Rt=o,u=i.apply(o,arguments),Ot(u)&&o._r.push(u),Rt=s,o.selector=c,o.isReverted=!1,u};return o.last=a,t===Ot?a(o,function(s){return o.add(null,s)}):t?o[t]=a:a},e.ignore=function(t){var i=Rt;Rt=null,t(this),Rt=i},e.getTweens=function(){var t=[];return this.data.forEach(function(i){return i instanceof n?t.push.apply(t,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&t.push(i)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,i){var r=this;if(t?function(){for(var a=r.getTweens(),s=r.data.length,c;s--;)c=r.data[s],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,p){return p.g-u.g||-1/0}).forEach(function(u){return u.t.revert(t)}),s=r.data.length;s--;)c=r.data[s],c instanceof di?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(t);r._r.forEach(function(u){return u(t,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Or.length;o--;)Or[o].id===this.id&&Or.splice(o,1)},e.revert=function(t){this.kill(t||{})},n}(),gb=function(){function n(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=n.prototype;return e.add=function(t,i,r){fn(t)||(t={matches:t});var o=new om(0,r||this.scope),a=o.conditions={},s,c,u;Rt&&!o.selector&&(o.selector=Rt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=t;for(c in t)c==="all"?u=1:(s=mn.matchMedia(t[c]),s&&(Or.indexOf(o)<0&&Or.push(o),(a[c]=s.matches)&&(u=1),s.addListener?s.addListener(uu):s.addEventListener("change",uu)));return u&&i(o,function(p){return o.add(null,p)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(i){return i.kill(t,!0)})},n}(),Zs={registerPlugin:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];e.forEach(function(i){return Vf(i)})},timeline:function(n){return new di(n)},getTweensOf:function(n,e){return It.getTweensOf(n,e)},getProperty:function(n,e,t,i){Yt(n)&&(n=ji(n)[0]);var r=Ir(n||{}).get,o=t?wf:Tf;return t==="native"&&(t=""),n&&(e?o((Ri[e]&&Ri[e].get||r)(n,e,t,i)):function(a,s,c){return o((Ri[a]&&Ri[a].get||r)(n,a,s,c))})},quickSetter:function(n,e,t){if(n=ji(n),n.length>1){var i=n.map(function(u){return xi.quickSetter(u,e,t)}),r=i.length;return function(u){for(var p=r;p--;)i[p](u)}}n=n[0]||{};var o=Ri[e],a=Ir(n),s=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var p=new o;Fo._pt=0,p.init(n,t?u+t:u,Fo,0,[n]),p.render(1,p),Fo._pt&&lu(1,Fo)}:a.set(n,s);return o?c:function(u){return c(n,s,t?u+t:u,a,1)}},quickTo:function(n,e,t){var i,r=xi.to(n,Lr((i={},i[e]="+=0.1",i.paused=!0,i),t||{})),o=function(a,s,c){return r.resetTo(e,a,s,c)};return o.tween=r,o},isTweening:function(n){return It.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=Ur(n.ease,Uo.ease)),Ef(Uo,n||{})},config:function(n){return Ef(Ei,n||{})},registerEffect:function(n){var e=n.name,t=n.effect,i=n.plugins,r=n.defaults,o=n.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ri[a]&&!Ai[a]&&Ma(e+" effect requires "+a+" plugin.")}),Xc[e]=function(a,s,c){return t(ji(a),Gi(s||{},r),c)},o&&(di.prototype[e]=function(a,s,c){return this.add(Xc[e](a,fn(s)?s:(c=s)&&{},this),c)})},registerEase:function(n,e){dt[n]=Ur(e)},parseEase:function(n,e){return arguments.length?Ur(n,e):dt},getById:function(n){return It.getById(n)},exportRoot:function(n,e){n===void 0&&(n={});var t=new di(n),i,r;for(t.smoothChildTiming=_i(n.smoothChildTiming),It.remove(t),t._dp=0,t._time=t._tTime=It._time,i=It._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&gn(t,i,i._start-i._delay),i=r;return gn(It,t,0),t},context:function(n,e){return n?new om(n,e):Rt},matchMedia:function(n){return new gb(n)},matchMediaRefresh:function(){return Or.forEach(function(n){var e=n.conditions,t,i;for(i in e)e[i]&&(e[i]=!1,t=1);t&&n.revert()})||uu()},addEventListener:function(n,e){var t=Ks[n]||(Ks[n]=[]);~t.indexOf(e)||t.push(e)},removeEventListener:function(n,e){var t=Ks[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)},utils:{wrap:YS,wrapYoyo:KS,distribute:Nf,random:Bf,snap:Of,normalize:qS,getUnit:ai,clamp:GS,splitColor:Gf,toArray:ji,selector:Qc,mapRange:Ff,pipe:jS,unitize:XS,interpolate:ZS,shuffle:Uf},install:vf,effects:Xc,ticker:Pi,updateRoot:di.updateRoot,plugins:Ri,globalTimeline:It,core:{PropTween:yi,globals:yf,Tween:Ht,Timeline:di,Animation:Pa,getCache:Ir,_removeLinkedListItem:js,reverting:function(){return ri},context:function(n){return n&&Rt&&(Rt.data.push(n),n._ctx=Rt),Rt},suppressOverwrites:function(n){return Nc=n}}};vi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Zs[n]=Ht[n]}),Pi.add(di.updateRoot),Fo=Zs.to({},{duration:0});var _b=function(n,e){for(var t=n._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},vb=function(n,e){var t=n._targets,i,r,o;for(i in e)for(r=t.length;r--;)o=n._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=_b(o,i)),o&&o.modifier&&o.modifier(e[i],n,t[r],i))},hu=function(n,e){return{name:n,rawVars:1,init:function(t,i,r){r._onInit=function(o){var a,s;if(Yt(i)&&(a={},vi(i,function(c){return a[c]=1}),i=a),e){a={};for(s in i)a[s]=e(i[s]);i=a}vb(o,i)}}}},xi=Zs.registerPlugin({name:"attr",init:function(n,e,t,i,r){var o,a,s;this.tween=t;for(o in e)s=n.getAttribute(o)||"",a=this.add(n,"setAttribute",(s||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=s,this._props.push(o)},render:function(n,e){for(var t=e._pt;t;)ri?t.set(t.t,t.p,t.b,t):t.r(n,t.d),t=t._next}},{name:"endArray",init:function(n,e){for(var t=e.length;t--;)this.add(n,t,n[t]||0,e[t],0,0,0,0,0,1)}},hu("roundProps",Jc),hu("modifiers"),hu("snap",Of))||Zs;Ht.version=di.version=xi.version="3.12.5",_f=1,kc()&&zo(),dt.Power0,dt.Power1,dt.Power2,dt.Power3,dt.Power4,dt.Linear,dt.Quad,dt.Cubic,dt.Quart,dt.Quint,dt.Strong,dt.Elastic,dt.Back,dt.SteppedEase,dt.Bounce,dt.Sine,dt.Expo,dt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var am,sr,Ho,du,Br,sm,pu,yb=function(){return typeof window<"u"},Bn={},kr=180/Math.PI,Vo=Math.PI/180,Go=Math.atan2,lm=1e8,fu=/([A-Z])/g,xb=/(left|right|width|margin|padding|x)/i,Mb=/[\s,\(]\S/,_n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mu=function(n,e){return e.set(e.t,e.p,Math.round((e.s+e.c*n)*1e4)/1e4+e.u,e)},Sb=function(n,e){return e.set(e.t,e.p,n===1?e.e:Math.round((e.s+e.c*n)*1e4)/1e4+e.u,e)},bb=function(n,e){return e.set(e.t,e.p,n?Math.round((e.s+e.c*n)*1e4)/1e4+e.u:e.b,e)},Tb=function(n,e){var t=e.s+e.c*n;e.set(e.t,e.p,~~(t+(t<0?-.5:.5))+e.u,e)},cm=function(n,e){return e.set(e.t,e.p,n?e.e:e.b,e)},um=function(n,e){return e.set(e.t,e.p,n!==1?e.b:e.e,e)},wb=function(n,e,t){return n.style[e]=t},Eb=function(n,e,t){return n.style.setProperty(e,t)},Ab=function(n,e,t){return n._gsap[e]=t},Rb=function(n,e,t){return n._gsap.scaleX=n._gsap.scaleY=t},Cb=function(n,e,t,i,r){var o=n._gsap;o.scaleX=o.scaleY=t,o.renderTransform(r,o)},Pb=function(n,e,t,i,r){var o=n._gsap;o[e]=t,o.renderTransform(r,o)},Lt="transform",Mi=Lt+"Origin",Ib=function n(e,t){var i=this,r=this.target,o=r.style,a=r._gsap;if(e in Bn&&o){if(this.tfm=this.tfm||{},e!=="transform")e=_n[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=kn(r,s)}):this.tfm[e]=a.x?a[e]:kn(r,e),e===Mi&&(this.tfm.zOrigin=a.zOrigin);else return _n.transform.split(",").forEach(function(s){return n.call(i,s,t)});if(this.props.indexOf(Lt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Mi,t,"")),e=Lt}(o||t)&&this.props.push(e,t,o[e])},hm=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Lb=function(){var n=this.props,e=this.target,t=e.style,i=e._gsap,r,o;for(r=0;r<n.length;r+=3)n[r+1]?e[n[r]]=n[r+2]:n[r+2]?t[n[r]]=n[r+2]:t.removeProperty(n[r].substr(0,2)==="--"?n[r]:n[r].replace(fu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=pu(),(!r||!r.isStart)&&!t[Lt]&&(hm(t),i.zOrigin&&t[Mi]&&(t[Mi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},dm=function(n,e){var t={target:n,props:[],revert:Lb,save:Ib};return n._gsap||xi.core.getCache(n),e&&e.split(",").forEach(function(i){return t.save(i)}),t},pm,gu=function(n,e){var t=sr.createElementNS?sr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):sr.createElement(n);return t&&t.style?t:sr.createElement(n)},vn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(fu,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Wo(t)||t,1)||""},fm="O,Moz,ms,Ms,Webkit".split(","),Wo=function(n,e,t){var i=e||Br,r=i.style,o=5;if(n in r&&!t)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);o--&&!(fm[o]+n in r););return o<0?null:(o===3?"ms":o>=0?fm[o]:"")+n},_u=function(){yb()&&window.document&&(am=window,sr=am.document,Ho=sr.documentElement,Br=gu("div")||{style:{}},gu("div"),Lt=Wo(Lt),Mi=Lt+"Origin",Br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pm=!!Wo("perspective"),pu=xi.core.reverting,du=1)},vu=function n(e){var t=gu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,o=this.style.cssText,a;if(Ho.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Ho.removeChild(t),this.style.cssText=o,a},mm=function(n,e){for(var t=e.length;t--;)if(n.hasAttribute(e[t]))return n.getAttribute(e[t])},gm=function(n){var e;try{e=n.getBBox()}catch{e=vu.call(n,!0)}return e&&(e.width||e.height)||n.getBBox===vu||(e=vu.call(n,!0)),e&&!e.width&&!e.x&&!e.y?{x:+mm(n,["x","cx","x1"])||0,y:+mm(n,["y","cy","y1"])||0,width:0,height:0}:e},_m=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&gm(n))},Fr=function(n,e){if(e){var t=n.style,i;e in Bn&&e!==Mi&&(e=Lt),t.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),t.removeProperty(i==="--"?e:e.replace(fu,"-$1").toLowerCase())):t.removeAttribute(e)}},lr=function(n,e,t,i,r,o){var a=new yi(n._pt,e,t,0,1,o?um:cm);return n._pt=a,a.b=i,a.e=r,n._props.push(t),a},vm={deg:1,rad:1,turn:1},Db={grid:1,flex:1},cr=function n(e,t,i,r){var o=parseFloat(i)||0,a=(i+"").trim().substr((o+"").length)||"px",s=Br.style,c=xb.test(t),u=e.tagName.toLowerCase()==="svg",p=(u?"client":"offset")+(c?"Width":"Height"),l=100,h=r==="px",d=r==="%",m,_,g,f;if(r===a||!o||vm[r]||vm[a])return o;if(a!=="px"&&!h&&(o=n(e,t,i,"px")),f=e.getCTM&&_m(e),(d||a==="%")&&(Bn[t]||~t.indexOf("adius")))return m=f?e.getBBox()[c?"width":"height"]:e[p],Bt(d?o/m*l:o/100*m);if(s[c?"width":"height"]=l+(h?a:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===sr||!_.appendChild)&&(_=sr.body),g=_._gsap,g&&d&&g.width&&c&&g.time===Pi.time&&!g.uncache)return Bt(o/g.width*l);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=l+r,m=e[p],x?e.style[t]=x:Fr(e,t)}else(d||a==="%")&&!Db[vn(_,"display")]&&(s.position=vn(e,"position")),_===e&&(s.position="static"),_.appendChild(Br),m=Br[p],_.removeChild(Br),s.position="absolute";return c&&d&&(g=Ir(_),g.time=Pi.time,g.width=_[p]),Bt(h?m*o/l:m&&o?l/m*o:0)},kn=function(n,e,t,i){var r;return du||_u(),e in _n&&e!=="transform"&&(e=_n[e],~e.indexOf(",")&&(e=e.split(",")[0])),Bn[e]&&e!=="transform"?(r=Da(n,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Qs(vn(n,Mi))+" "+r.zOrigin+"px"):(r=n.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=$s[e]&&$s[e](n,e,t)||vn(n,e)||Sf(n,e)||(e==="opacity"?1:0))),t&&!~(r+"").trim().indexOf(" ")?cr(n,e,r,t)+t:r},Ub=function(n,e,t,i){if(!t||t==="none"){var r=Wo(e,n,1),o=r&&vn(n,r,1);o&&o!==t?(e=r,t=o):e==="borderColor"&&(t=vn(n,"borderTopColor"))}var a=new yi(this._pt,n.style,e,0,1,im),s=0,c=0,u,p,l,h,d,m,_,g,f,x,y,M;if(a.b=t,a.e=i,t+="",i+="",i==="auto"&&(m=n.style[e],n.style[e]=i,i=vn(n,e)||i,m?n.style[e]=m:Fr(n,e)),u=[t,i],Xf(u),t=u[0],i=u[1],l=t.match(No)||[],M=i.match(No)||[],M.length){for(;p=No.exec(i);)_=p[0],f=i.substring(s,p.index),d?d=(d+1)%5:(f.substr(-5)==="rgba("||f.substr(-5)==="hsla(")&&(d=1),_!==(m=l[c++]||"")&&(h=parseFloat(m)||0,y=m.substr((h+"").length),_.charAt(1)==="="&&(_=Oo(h,_)+y),g=parseFloat(_),x=_.substr((g+"").length),s=No.lastIndex-x.length,x||(x=x||Ei.units[e]||y,s===i.length&&(i+=x,a.e+=x)),y!==x&&(h=cr(n,e,m,x)||0),a._pt={_next:a._pt,p:f||c===1?f:",",s:h,c:g-h,m:d&&d<4||e==="zIndex"?Math.round:0});a.c=s<i.length?i.substring(s,i.length):""}else a.r=e==="display"&&i==="none"?um:cm;return mf.test(i)&&(a.e=0),this._pt=a,a},ym={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Nb=function(n){var e=n.split(" "),t=e[0],i=e[1]||"50%";return(t==="top"||t==="bottom"||i==="left"||i==="right")&&(n=t,t=i,i=n),e[0]=ym[t]||t,e[1]=ym[i]||i,e.join(" ")},Ob=function(n,e){if(e.tween&&e.tween._time===e.tween._dur){var t=e.t,i=t.style,r=e.u,o=t._gsap,a,s,c;if(r==="all"||r===!0)i.cssText="",s=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Bn[a]&&(s=1,a=a==="transformOrigin"?Mi:Lt),Fr(t,a);s&&(Fr(t,Lt),o&&(o.svg&&t.removeAttribute("transform"),Da(t,1),o.uncache=1,hm(i)))}},$s={clearProps:function(n,e,t,i,r){if(r.data!=="isFromStart"){var o=n._pt=new yi(n._pt,e,t,0,0,Ob);return o.u=i,o.pr=-10,o.tween=r,n._props.push(t),1}}},La=[1,0,0,1,0,0],xm={},Mm=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},Sm=function(n){var e=vn(n,Lt);return Mm(e)?La:e.substr(7).match(ff).map(Bt)},yu=function(n,e){var t=n._gsap||Ir(n),i=n.style,r=Sm(n),o,a,s,c;return t.svg&&n.getAttribute("transform")?(s=n.transform.baseVal.consolidate().matrix,r=[s.a,s.b,s.c,s.d,s.e,s.f],r.join(",")==="1,0,0,1,0,0"?La:r):(r===La&&!n.offsetParent&&n!==Ho&&!t.svg&&(s=i.display,i.display="block",o=n.parentNode,(!o||!n.offsetParent)&&(c=1,a=n.nextElementSibling,Ho.appendChild(n)),r=Sm(n),s?i.display=s:Fr(n,"display"),c&&(a?o.insertBefore(n,a):o?o.appendChild(n):Ho.removeChild(n))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},xu=function(n,e,t,i,r,o){var a=n._gsap,s=r||yu(n,!0),c=a.xOrigin||0,u=a.yOrigin||0,p=a.xOffset||0,l=a.yOffset||0,h=s[0],d=s[1],m=s[2],_=s[3],g=s[4],f=s[5],x=e.split(" "),y=parseFloat(x[0])||0,M=parseFloat(x[1])||0,P,S,E,I;t?s!==La&&(S=h*_-d*m)&&(E=y*(_/S)+M*(-m/S)+(m*f-_*g)/S,I=y*(-d/S)+M*(h/S)-(h*f-d*g)/S,y=E,M=I):(P=gm(n),y=P.x+(~x[0].indexOf("%")?y/100*P.width:y),M=P.y+(~(x[1]||x[0]).indexOf("%")?M/100*P.height:M)),i||i!==!1&&a.smooth?(g=y-c,f=M-u,a.xOffset=p+(g*h+f*m)-g,a.yOffset=l+(g*d+f*_)-f):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!t,n.style[Mi]="0px 0px",o&&(lr(o,a,"xOrigin",c,y),lr(o,a,"yOrigin",u,M),lr(o,a,"xOffset",p,a.xOffset),lr(o,a,"yOffset",l,a.yOffset)),n.setAttribute("data-svg-origin",y+" "+M)},Da=function(n,e){var t=n._gsap||new Zf(n);if("x"in t&&!e&&!t.uncache)return t;var i=n.style,r=t.scaleX<0,o="px",a="deg",s=getComputedStyle(n),c=vn(n,Mi)||"0",u,p,l,h,d,m,_,g,f,x,y,M,P,S,E,I,b,T,F,j,B,Y,q,ie,ne,Q,se,de,Le,je,Fe,te;return u=p=l=m=_=g=f=x=y=0,h=d=1,t.svg=!!(n.getCTM&&_m(n)),s.translate&&((s.translate!=="none"||s.scale!=="none"||s.rotate!=="none")&&(i[Lt]=(s.translate!=="none"?"translate3d("+(s.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(s.rotate!=="none"?"rotate("+s.rotate+") ":"")+(s.scale!=="none"?"scale("+s.scale.split(" ").join(",")+") ":"")+(s[Lt]!=="none"?s[Lt]:"")),i.scale=i.rotate=i.translate="none"),S=yu(n,t.svg),t.svg&&(t.uncache?(ne=n.getBBox(),c=t.xOrigin-ne.x+"px "+(t.yOrigin-ne.y)+"px",ie=""):ie=!e&&n.getAttribute("data-svg-origin"),xu(n,ie||c,!!ie||t.originIsAbsolute,t.smooth!==!1,S)),M=t.xOrigin||0,P=t.yOrigin||0,S!==La&&(T=S[0],F=S[1],j=S[2],B=S[3],u=Y=S[4],p=q=S[5],S.length===6?(h=Math.sqrt(T*T+F*F),d=Math.sqrt(B*B+j*j),m=T||F?Go(F,T)*kr:0,f=j||B?Go(j,B)*kr+m:0,f&&(d*=Math.abs(Math.cos(f*Vo))),t.svg&&(u-=M-(M*T+P*j),p-=P-(M*F+P*B))):(te=S[6],je=S[7],se=S[8],de=S[9],Le=S[10],Fe=S[11],u=S[12],p=S[13],l=S[14],E=Go(te,Le),_=E*kr,E&&(I=Math.cos(-E),b=Math.sin(-E),ie=Y*I+se*b,ne=q*I+de*b,Q=te*I+Le*b,se=Y*-b+se*I,de=q*-b+de*I,Le=te*-b+Le*I,Fe=je*-b+Fe*I,Y=ie,q=ne,te=Q),E=Go(-j,Le),g=E*kr,E&&(I=Math.cos(-E),b=Math.sin(-E),ie=T*I-se*b,ne=F*I-de*b,Q=j*I-Le*b,Fe=B*b+Fe*I,T=ie,F=ne,j=Q),E=Go(F,T),m=E*kr,E&&(I=Math.cos(E),b=Math.sin(E),ie=T*I+F*b,ne=Y*I+q*b,F=F*I-T*b,q=q*I-Y*b,T=ie,Y=ne),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,g=180-g),h=Bt(Math.sqrt(T*T+F*F+j*j)),d=Bt(Math.sqrt(q*q+te*te)),E=Go(Y,q),f=Math.abs(E)>2e-4?E*kr:0,y=Fe?1/(Fe<0?-Fe:Fe):0),t.svg&&(ie=n.getAttribute("transform"),t.forceCSS=n.setAttribute("transform","")||!Mm(vn(n,Lt)),ie&&n.setAttribute("transform",ie))),Math.abs(f)>90&&Math.abs(f)<270&&(r?(h*=-1,f+=m<=0?180:-180,m+=m<=0?180:-180):(d*=-1,f+=f<=0?180:-180)),e=e||t.uncache,t.x=u-((t.xPercent=u&&(!e&&t.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-u)?-50:0)))?n.offsetWidth*t.xPercent/100:0)+o,t.y=p-((t.yPercent=p&&(!e&&t.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-p)?-50:0)))?n.offsetHeight*t.yPercent/100:0)+o,t.z=l+o,t.scaleX=Bt(h),t.scaleY=Bt(d),t.rotation=Bt(m)+a,t.rotationX=Bt(_)+a,t.rotationY=Bt(g)+a,t.skewX=f+a,t.skewY=x+a,t.transformPerspective=y+o,(t.zOrigin=parseFloat(c.split(" ")[2])||!e&&t.zOrigin||0)&&(i[Mi]=Qs(c)),t.xOffset=t.yOffset=0,t.force3D=Ei.force3D,t.renderTransform=t.svg?kb:pm?bm:Bb,t.uncache=0,t},Qs=function(n){return(n=n.split(" "))[0]+" "+n[1]},Mu=function(n,e,t){var i=ai(e);return Bt(parseFloat(e)+parseFloat(cr(n,"x",t+"px",i)))+i},Bb=function(n,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bm(n,e)},zr="0deg",Ua="0px",Hr=") ",bm=function(n,e){var t=e||this,i=t.xPercent,r=t.yPercent,o=t.x,a=t.y,s=t.z,c=t.rotation,u=t.rotationY,p=t.rotationX,l=t.skewX,h=t.skewY,d=t.scaleX,m=t.scaleY,_=t.transformPerspective,g=t.force3D,f=t.target,x=t.zOrigin,y="",M=g==="auto"&&n&&n!==1||g===!0;if(x&&(p!==zr||u!==zr)){var P=parseFloat(u)*Vo,S=Math.sin(P),E=Math.cos(P),I;P=parseFloat(p)*Vo,I=Math.cos(P),o=Mu(f,o,S*I*-x),a=Mu(f,a,-Math.sin(P)*-x),s=Mu(f,s,E*I*-x+x)}_!==Ua&&(y+="perspective("+_+Hr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||o!==Ua||a!==Ua||s!==Ua)&&(y+=s!==Ua||M?"translate3d("+o+", "+a+", "+s+") ":"translate("+o+", "+a+Hr),c!==zr&&(y+="rotate("+c+Hr),u!==zr&&(y+="rotateY("+u+Hr),p!==zr&&(y+="rotateX("+p+Hr),(l!==zr||h!==zr)&&(y+="skew("+l+", "+h+Hr),(d!==1||m!==1)&&(y+="scale("+d+", "+m+Hr),f.style[Lt]=y||"translate(0, 0)"},kb=function(n,e){var t=e||this,i=t.xPercent,r=t.yPercent,o=t.x,a=t.y,s=t.rotation,c=t.skewX,u=t.skewY,p=t.scaleX,l=t.scaleY,h=t.target,d=t.xOrigin,m=t.yOrigin,_=t.xOffset,g=t.yOffset,f=t.forceCSS,x=parseFloat(o),y=parseFloat(a),M,P,S,E,I;s=parseFloat(s),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,s+=u),s||c?(s*=Vo,c*=Vo,M=Math.cos(s)*p,P=Math.sin(s)*p,S=Math.sin(s-c)*-l,E=Math.cos(s-c)*l,c&&(u*=Vo,I=Math.tan(c-u),I=Math.sqrt(1+I*I),S*=I,E*=I,u&&(I=Math.tan(u),I=Math.sqrt(1+I*I),M*=I,P*=I)),M=Bt(M),P=Bt(P),S=Bt(S),E=Bt(E)):(M=p,E=l,P=S=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=cr(h,"x",o,"px"),y=cr(h,"y",a,"px")),(d||m||_||g)&&(x=Bt(x+d-(d*M+m*S)+_),y=Bt(y+m-(d*P+m*E)+g)),(i||r)&&(I=h.getBBox(),x=Bt(x+i/100*I.width),y=Bt(y+r/100*I.height)),I="matrix("+M+","+P+","+S+","+E+","+x+","+y+")",h.setAttribute("transform",I),f&&(h.style[Lt]=I)},Fb=function(n,e,t,i,r){var o=360,a=Yt(r),s=parseFloat(r)*(a&&~r.indexOf("rad")?kr:1),c=s-i,u=i+c+"deg",p,l;return a&&(p=r.split("_")[1],p==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),p==="cw"&&c<0?c=(c+o*lm)%o-~~(c/o)*o:p==="ccw"&&c>0&&(c=(c-o*lm)%o-~~(c/o)*o)),n._pt=l=new yi(n._pt,e,t,i,c,Sb),l.e=u,l.u="deg",n._props.push(t),l},Tm=function(n,e){for(var t in e)n[t]=e[t];return n},zb=function(n,e,t){var i=Tm({},t._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=t.style,a,s,c,u,p,l,h,d;i.svg?(c=t.getAttribute("transform"),t.setAttribute("transform",""),o[Lt]=e,a=Da(t,1),Fr(t,Lt),t.setAttribute("transform",c)):(c=getComputedStyle(t)[Lt],o[Lt]=e,a=Da(t,1),o[Lt]=c);for(s in Bn)c=i[s],u=a[s],c!==u&&r.indexOf(s)<0&&(h=ai(c),d=ai(u),p=h!==d?cr(t,s,c,d):parseFloat(c),l=parseFloat(u),n._pt=new yi(n._pt,a,s,p,l-p,mu),n._pt.u=d||0,n._props.push(s));Tm(a,i)};vi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",o="Left",a=(e<3?[t,i,r,o]:[t+o,t+i,r+i,r+o]).map(function(s){return e<2?n+s:"border"+s+n});$s[e>1?"border"+n:n]=function(s,c,u,p,l){var h,d;if(arguments.length<4)return h=a.map(function(m){return kn(s,m,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(p+"").split(" "),d={},a.forEach(function(m,_){return d[m]=h[_]=h[_]||h[(_-1)/2|0]}),s.init(c,d,l)}});var wm={name:"css",register:_u,targetTest:function(n){return n.style&&n.nodeType},init:function(n,e,t,i,r){var o=this._props,a=n.style,s=t.vars.startAt,c,u,p,l,h,d,m,_,g,f,x,y,M,P,S,E;du||_u(),this.styles=this.styles||dm(n),E=this.styles.props,this.tween=t;for(m in e)if(m!=="autoRound"&&(u=e[m],!(Ri[m]&&$f(m,e,t,i,n,r)))){if(h=typeof u,d=$s[m],h==="function"&&(u=u.call(t,i,n,r),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Ea(u)),d)d(this,n,m,u,t)&&(S=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(n).getPropertyValue(m)+"").trim(),u+="",or.lastIndex=0,or.test(c)||(_=ai(c),g=ai(u)),g?_!==g&&(c=cr(n,m,c,g)+g):_&&(u+=_),this.add(a,"setProperty",c,u,i,r,0,0,m),o.push(m),E.push(m,0,a[m]);else if(h!=="undefined"){if(s&&m in s?(c=typeof s[m]=="function"?s[m].call(t,i,n,r):s[m],Yt(c)&&~c.indexOf("random(")&&(c=Ea(c)),ai(c+"")||c==="auto"||(c+=Ei.units[m]||ai(kn(n,m))||""),(c+"").charAt(1)==="="&&(c=kn(n,m))):c=kn(n,m),l=parseFloat(c),f=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),f&&(u=u.substr(2)),p=parseFloat(u),m in _n&&(m==="autoAlpha"&&(l===1&&kn(n,"visibility")==="hidden"&&p&&(l=0),E.push("visibility",0,a.visibility),lr(this,a,"visibility",l?"inherit":"hidden",p?"inherit":"hidden",!p)),m!=="scale"&&m!=="transform"&&(m=_n[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in Bn,x){if(this.styles.save(m),y||(M=n._gsap,M.renderTransform&&!e.parseTransform||Da(n,e.parseTransform),P=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new yi(this._pt,a,Lt,0,1,M.renderTransform,M,0,-1),y.dep=1),m==="scale")this._pt=new yi(this._pt,M,"scaleY",M.scaleY,(f?Oo(M.scaleY,f+p):p)-M.scaleY||0,mu),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){E.push(Mi,0,a[Mi]),u=Nb(u),M.svg?xu(n,u,0,P,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==M.zOrigin&&lr(this,M,"zOrigin",M.zOrigin,g),lr(this,a,m,Qs(c),Qs(u)));continue}else if(m==="svgOrigin"){xu(n,u,1,P,0,this);continue}else if(m in xm){Fb(this,M,m,l,f?Oo(l,f+u):u);continue}else if(m==="smoothOrigin"){lr(this,M,"smooth",M.smooth,u);continue}else if(m==="force3D"){M[m]=u;continue}else if(m==="transform"){zb(this,u,n);continue}}else m in a||(m=Wo(m)||m);if(x||(p||p===0)&&(l||l===0)&&!Mb.test(u)&&m in a)_=(c+"").substr((l+"").length),p||(p=0),g=ai(u)||(m in Ei.units?Ei.units[m]:_),_!==g&&(l=cr(n,m,c,g)),this._pt=new yi(this._pt,x?M:a,m,l,(f?Oo(l,f+p):p)-l,!x&&(g==="px"||m==="zIndex")&&e.autoRound!==!1?Tb:mu),this._pt.u=g||0,_!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=bb);else if(m in a)Ub.call(this,n,m,c,f?f+u:u);else if(m in n)this.add(n,m,c||n[m],f?f+u:u,i,r);else if(m!=="parseTransform"){Gc(m,u);continue}x||(m in a?E.push(m,0,a[m]):E.push(m,1,c||n[m])),o.push(m)}}S&&nm(this)},render:function(n,e){if(e.tween._time||!pu())for(var t=e._pt;t;)t.r(n,t.d),t=t._next;else e.styles.revert()},get:kn,aliases:_n,getSetter:function(n,e,t){var i=_n[e];return i&&i.indexOf(",")<0&&(e=i),e in Bn&&e!==Mi&&(n._gsap.x||kn(n,"x"))?t&&sm===t?e==="scale"?Rb:Ab:(sm=t||{})&&(e==="scale"?Cb:Pb):n.style&&!Bc(n.style[e])?wb:~e.indexOf("-")?Eb:su(n,e)},core:{_removeProperty:Fr,_getMatrix:yu}};xi.utils.checkPrefix=Wo,xi.core.getStyleSaver=dm,function(n,e,t,i){var r=vi(n+","+e+","+t,function(o){Bn[o]=1});vi(e,function(o){Ei.units[o]="deg",xm[o]=1}),_n[r[13]]=n+","+e,vi(i,function(o){var a=o.split(":");_n[a[1]]=r[a[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),vi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"}),xi.registerPlugin(wm);var Ne=xi.registerPlugin(wm)||xi;Ne.core.Tween;var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ur={};/*!
*  howler.js v2.2.4
*  howlerjs.com
*
*  (c) 2013-2020, James Simpson of GoldFire Studios
*  goldfirestudios.com
*
*  MIT License
*/(function(n){(function(){var e=function(){this.init()};e.prototype={init:function(){var l=this||t;return l._counter=1e3,l._html5AudioPool=[],l.html5PoolSize=10,l._codecs={},l._howls=[],l._muted=!1,l._volume=1,l._canPlayEvent="canplaythrough",l._navigator=typeof window<"u"&&window.navigator?window.navigator:null,l.masterGain=null,l.noAudio=!1,l.usingWebAudio=!0,l.autoSuspend=!0,l.ctx=null,l.autoUnlock=!0,l._setup(),l},volume:function(l){var h=this||t;if(l=parseFloat(l),h.ctx||p(),typeof l<"u"&&l>=0&&l<=1){if(h._volume=l,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var m=h._howls[d]._getSoundIds(),_=0;_<m.length;_++){var g=h._howls[d]._soundById(m[_]);g&&g._node&&(g._node.volume=g._volume*l)}return h}return h._volume},mute:function(l){var h=this||t;h.ctx||p(),h._muted=l,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l?0:h._volume,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var m=h._howls[d]._getSoundIds(),_=0;_<m.length;_++){var g=h._howls[d]._soundById(m[_]);g&&g._node&&(g._node.muted=l?!0:g._muted)}return h},stop:function(){for(var l=this||t,h=0;h<l._howls.length;h++)l._howls[h].stop();return l},unload:function(){for(var l=this||t,h=l._howls.length-1;h>=0;h--)l._howls[h].unload();return l.usingWebAudio&&l.ctx&&typeof l.ctx.close<"u"&&(l.ctx.close(),l.ctx=null,p()),l},codecs:function(l){return(this||t)._codecs[l.replace(/^x-/,"")]},_setup:function(){var l=this||t;if(l.state=l.ctx&&l.ctx.state||"suspended",l._autoSuspend(),!l.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(l._canPlayEvent="canplay")}catch{l.noAudio=!0}else l.noAudio=!0;try{var h=new Audio;h.muted&&(l.noAudio=!0)}catch{}return l.noAudio||l._setupCodecs(),l},_setupCodecs:function(){var l=this||t,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return l}if(!h||typeof h.canPlayType!="function")return l;var d=h.canPlayType("audio/mpeg;").replace(/^no$/,""),m=l._navigator?l._navigator.userAgent:"",_=m.match(/OPR\/(\d+)/g),g=_&&parseInt(_[0].split("/")[1],10)<33,f=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,x=m.match(/Version\/(.*?) /),y=f&&x&&parseInt(x[1],10)<15;return l._codecs={mp3:!!(!g&&(d||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!y&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!y&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},l},_unlockAudio:function(){var l=this||t;if(!(l._audioUnlocked||!l.ctx)){l._audioUnlocked=!1,l.autoUnlock=!1,!l._mobileUnloaded&&l.ctx.sampleRate!==44100&&(l._mobileUnloaded=!0,l.unload()),l._scratchBuffer=l.ctx.createBuffer(1,1,22050);var h=function(d){for(;l._html5AudioPool.length<l.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,l._releaseHtml5Audio(m)}catch{l.noAudio=!0;break}for(var _=0;_<l._howls.length;_++)if(!l._howls[_]._webAudio)for(var g=l._howls[_]._getSoundIds(),f=0;f<g.length;f++){var x=l._howls[_]._soundById(g[f]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}l._autoResume();var y=l.ctx.createBufferSource();y.buffer=l._scratchBuffer,y.connect(l.ctx.destination),typeof y.start>"u"?y.noteOn(0):y.start(0),typeof l.ctx.resume=="function"&&l.ctx.resume(),y.onended=function(){y.disconnect(0),l._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var M=0;M<l._howls.length;M++)l._howls[M]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),l}},_obtainHtml5Audio:function(){var l=this||t;if(l._html5AudioPool.length)return l._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(l){var h=this||t;return l._unlocked&&h._html5AudioPool.push(l),h},_autoSuspend:function(){var l=this;if(!(!l.autoSuspend||!l.ctx||typeof l.ctx.suspend>"u"||!t.usingWebAudio)){for(var h=0;h<l._howls.length;h++)if(l._howls[h]._webAudio){for(var d=0;d<l._howls[h]._sounds.length;d++)if(!l._howls[h]._sounds[d]._paused)return l}return l._suspendTimer&&clearTimeout(l._suspendTimer),l._suspendTimer=setTimeout(function(){if(l.autoSuspend){l._suspendTimer=null,l.state="suspending";var m=function(){l.state="suspended",l._resumeAfterSuspend&&(delete l._resumeAfterSuspend,l._autoResume())};l.ctx.suspend().then(m,m)}},3e4),l}},_autoResume:function(){var l=this;if(!(!l.ctx||typeof l.ctx.resume>"u"||!t.usingWebAudio))return l.state==="running"&&l.ctx.state!=="interrupted"&&l._suspendTimer?(clearTimeout(l._suspendTimer),l._suspendTimer=null):l.state==="suspended"||l.state==="running"&&l.ctx.state==="interrupted"?(l.ctx.resume().then(function(){l.state="running";for(var h=0;h<l._howls.length;h++)l._howls[h]._emit("resume")}),l._suspendTimer&&(clearTimeout(l._suspendTimer),l._suspendTimer=null)):l.state==="suspending"&&(l._resumeAfterSuspend=!0),l}};var t=new e,i=function(l){var h=this;if(!l.src||l.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(l)};i.prototype={init:function(l){var h=this;return t.ctx||p(),h._autoplay=l.autoplay||!1,h._format=typeof l.format!="string"?l.format:[l.format],h._html5=l.html5||!1,h._muted=l.mute||!1,h._loop=l.loop||!1,h._pool=l.pool||5,h._preload=typeof l.preload=="boolean"||l.preload==="metadata"?l.preload:!0,h._rate=l.rate||1,h._sprite=l.sprite||{},h._src=typeof l.src!="string"?l.src:[l.src],h._volume=l.volume!==void 0?l.volume:1,h._xhr={method:l.xhr&&l.xhr.method?l.xhr.method:"GET",headers:l.xhr&&l.xhr.headers?l.xhr.headers:null,withCredentials:l.xhr&&l.xhr.withCredentials?l.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=l.onend?[{fn:l.onend}]:[],h._onfade=l.onfade?[{fn:l.onfade}]:[],h._onload=l.onload?[{fn:l.onload}]:[],h._onloaderror=l.onloaderror?[{fn:l.onloaderror}]:[],h._onplayerror=l.onplayerror?[{fn:l.onplayerror}]:[],h._onpause=l.onpause?[{fn:l.onpause}]:[],h._onplay=l.onplay?[{fn:l.onplay}]:[],h._onstop=l.onstop?[{fn:l.onstop}]:[],h._onmute=l.onmute?[{fn:l.onmute}]:[],h._onvolume=l.onvolume?[{fn:l.onvolume}]:[],h._onrate=l.onrate?[{fn:l.onrate}]:[],h._onseek=l.onseek?[{fn:l.onseek}]:[],h._onunlock=l.onunlock?[{fn:l.onunlock}]:[],h._onresume=[],h._webAudio=t.usingWebAudio&&!h._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var l=this,h=null;if(t.noAudio){l._emit("loaderror",null,"No audio support.");return}typeof l._src=="string"&&(l._src=[l._src]);for(var d=0;d<l._src.length;d++){var m,_;if(l._format&&l._format[d])m=l._format[d];else{if(_=l._src[d],typeof _!="string"){l._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(_),m||(m=/\.([^.]+)$/.exec(_.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&t.codecs(m)){h=l._src[d];break}}if(!h){l._emit("loaderror",null,"No codec support for selected audio sources.");return}return l._src=h,l._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(l._html5=!0,l._webAudio=!1),new r(l),l._webAudio&&a(l),l},play:function(l,h){var d=this,m=null;if(typeof l=="number")m=l,l=null;else{if(typeof l=="string"&&d._state==="loaded"&&!d._sprite[l])return null;if(typeof l>"u"&&(l="__default",!d._playLock)){for(var _=0,g=0;g<d._sounds.length;g++)d._sounds[g]._paused&&!d._sounds[g]._ended&&(_++,m=d._sounds[g]._id);_===1?l=null:m=null}}var f=m?d._soundById(m):d._inactiveSound();if(!f)return null;if(m&&!l&&(l=f._sprite||"__default"),d._state!=="loaded"){f._sprite=l,f._ended=!1;var x=f._id;return d._queue.push({event:"play",action:function(){d.play(x)}}),x}if(m&&!f._paused)return h||d._loadQueue("play"),f._id;d._webAudio&&t._autoResume();var y=Math.max(0,f._seek>0?f._seek:d._sprite[l][0]/1e3),M=Math.max(0,(d._sprite[l][0]+d._sprite[l][1])/1e3-y),P=M*1e3/Math.abs(f._rate),S=d._sprite[l][0]/1e3,E=(d._sprite[l][0]+d._sprite[l][1])/1e3;f._sprite=l,f._ended=!1;var I=function(){f._paused=!1,f._seek=y,f._start=S,f._stop=E,f._loop=!!(f._loop||d._sprite[l][2])};if(y>=E){d._ended(f);return}var b=f._node;if(d._webAudio){var T=function(){d._playLock=!1,I(),d._refreshBuffer(f);var Y=f._muted||d._muted?0:f._volume;b.gain.setValueAtTime(Y,t.ctx.currentTime),f._playStart=t.ctx.currentTime,typeof b.bufferSource.start>"u"?f._loop?b.bufferSource.noteGrainOn(0,y,86400):b.bufferSource.noteGrainOn(0,y,M):f._loop?b.bufferSource.start(0,y,86400):b.bufferSource.start(0,y,M),P!==1/0&&(d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),P)),h||setTimeout(function(){d._emit("play",f._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?T():(d._playLock=!0,d.once("resume",T),d._clearTimer(f._id))}else{var F=function(){b.currentTime=y,b.muted=f._muted||d._muted||t._muted||b.muted,b.volume=f._volume*t.volume(),b.playbackRate=f._rate;try{var Y=b.play();if(Y&&typeof Promise<"u"&&(Y instanceof Promise||typeof Y.then=="function")?(d._playLock=!0,I(),Y.then(function(){d._playLock=!1,b._unlocked=!0,h?d._loadQueue():d._emit("play",f._id)}).catch(function(){d._playLock=!1,d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):h||(d._playLock=!1,I(),d._emit("play",f._id)),b.playbackRate=f._rate,b.paused){d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}l!=="__default"||f._loop?d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),P):(d._endTimers[f._id]=function(){d._ended(f),b.removeEventListener("ended",d._endTimers[f._id],!1)},b.addEventListener("ended",d._endTimers[f._id],!1))}catch(q){d._emit("playerror",f._id,q)}};b.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(b.src=d._src,b.load());var j=window&&window.ejecta||!b.readyState&&t._navigator.isCocoonJS;if(b.readyState>=3||j)F();else{d._playLock=!0,d._state="loading";var B=function(){d._state="loaded",F(),b.removeEventListener(t._canPlayEvent,B,!1)};b.addEventListener(t._canPlayEvent,B,!1),d._clearTimer(f._id)}}return f._id},pause:function(l){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(l)}}),h;for(var d=h._getSoundIds(l),m=0;m<d.length;m++){h._clearTimer(d[m]);var _=h._soundById(d[m]);if(_&&!_._paused&&(_._seek=h.seek(d[m]),_._rateSeek=0,_._paused=!0,h._stopFade(d[m]),_._node))if(h._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),h._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||h._emit("pause",_?_._id:null)}return h},stop:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(l)}}),d;for(var m=d._getSoundIds(l),_=0;_<m.length;_++){d._clearTimer(m[_]);var g=d._soundById(m[_]);g&&(g._seek=g._start||0,g._rateSeek=0,g._paused=!0,g._ended=!0,d._stopFade(m[_]),g._node&&(d._webAudio?g._node.bufferSource&&(typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),d._cleanBuffer(g._node)):(!isNaN(g._node.duration)||g._node.duration===1/0)&&(g._node.currentTime=g._start||0,g._node.pause(),g._node.duration===1/0&&d._clearSound(g._node))),h||d._emit("stop",g._id))}return d},mute:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(l,h)}}),d;if(typeof h>"u")if(typeof l=="boolean")d._muted=l;else return d._muted;for(var m=d._getSoundIds(h),_=0;_<m.length;_++){var g=d._soundById(m[_]);g&&(g._muted=l,g._interval&&d._stopFade(g._id),d._webAudio&&g._node?g._node.gain.setValueAtTime(l?0:g._volume,t.ctx.currentTime):g._node&&(g._node.muted=t._muted?!0:l),d._emit("mute",g._id))}return d},volume:function(){var l=this,h=arguments,d,m;if(h.length===0)return l._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?m=parseInt(h[0],10):d=parseFloat(h[0])}else h.length>=2&&(d=parseFloat(h[0]),m=parseInt(h[1],10));var f;if(typeof d<"u"&&d>=0&&d<=1){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"volume",action:function(){l.volume.apply(l,h)}}),l;typeof m>"u"&&(l._volume=d),m=l._getSoundIds(m);for(var x=0;x<m.length;x++)f=l._soundById(m[x]),f&&(f._volume=d,h[2]||l._stopFade(m[x]),l._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(d,t.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=d*t.volume()),l._emit("volume",f._id))}else return f=m?l._soundById(m):l._sounds[0],f?f._volume:0;return l},fade:function(l,h,d,m){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(l,h,d,m)}}),_;l=Math.min(Math.max(0,parseFloat(l)),1),h=Math.min(Math.max(0,parseFloat(h)),1),d=parseFloat(d),_.volume(l,m);for(var g=_._getSoundIds(m),f=0;f<g.length;f++){var x=_._soundById(g[f]);if(x){if(m||_._stopFade(g[f]),_._webAudio&&!x._muted){var y=t.ctx.currentTime,M=y+d/1e3;x._volume=l,x._node.gain.setValueAtTime(l,y),x._node.gain.linearRampToValueAtTime(h,M)}_._startFadeInterval(x,l,h,d,g[f],typeof m>"u")}}return _},_startFadeInterval:function(l,h,d,m,_,g){var f=this,x=h,y=d-h,M=Math.abs(y/.01),P=Math.max(4,M>0?m/M:m),S=Date.now();l._fadeTo=d,l._interval=setInterval(function(){var E=(Date.now()-S)/m;S=Date.now(),x+=y*E,x=Math.round(x*100)/100,y<0?x=Math.max(d,x):x=Math.min(d,x),f._webAudio?l._volume=x:f.volume(x,l._id,!0),g&&(f._volume=x),(d<h&&x<=d||d>h&&x>=d)&&(clearInterval(l._interval),l._interval=null,l._fadeTo=null,f.volume(d,l._id),f._emit("fade",l._id))},P)},_stopFade:function(l){var h=this,d=h._soundById(l);return d&&d._interval&&(h._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,h.volume(d._fadeTo,l),d._fadeTo=null,h._emit("fade",l)),h},loop:function(){var l=this,h=arguments,d,m,_;if(h.length===0)return l._loop;if(h.length===1)if(typeof h[0]=="boolean")d=h[0],l._loop=d;else return _=l._soundById(parseInt(h[0],10)),_?_._loop:!1;else h.length===2&&(d=h[0],m=parseInt(h[1],10));for(var g=l._getSoundIds(m),f=0;f<g.length;f++)_=l._soundById(g[f]),_&&(_._loop=d,l._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,l.playing(g[f])&&(l.pause(g[f],!0),l.play(g[f],!0)))));return l},rate:function(){var l=this,h=arguments,d,m;if(h.length===0)m=l._sounds[0]._id;else if(h.length===1){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?m=parseInt(h[0],10):d=parseFloat(h[0])}else h.length===2&&(d=parseFloat(h[0]),m=parseInt(h[1],10));var f;if(typeof d=="number"){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"rate",action:function(){l.rate.apply(l,h)}}),l;typeof m>"u"&&(l._rate=d),m=l._getSoundIds(m);for(var x=0;x<m.length;x++)if(f=l._soundById(m[x]),f){l.playing(m[x])&&(f._rateSeek=l.seek(m[x]),f._playStart=l._webAudio?t.ctx.currentTime:f._playStart),f._rate=d,l._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):f._node&&(f._node.playbackRate=d);var y=l.seek(m[x]),M=(l._sprite[f._sprite][0]+l._sprite[f._sprite][1])/1e3-y,P=M*1e3/Math.abs(f._rate);(l._endTimers[m[x]]||!f._paused)&&(l._clearTimer(m[x]),l._endTimers[m[x]]=setTimeout(l._ended.bind(l,f),P)),l._emit("rate",f._id)}}else return f=l._soundById(m),f?f._rate:l._rate;return l},seek:function(){var l=this,h=arguments,d,m;if(h.length===0)l._sounds.length&&(m=l._sounds[0]._id);else if(h.length===1){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?m=parseInt(h[0],10):l._sounds.length&&(m=l._sounds[0]._id,d=parseFloat(h[0]))}else h.length===2&&(d=parseFloat(h[0]),m=parseInt(h[1],10));if(typeof m>"u")return 0;if(typeof d=="number"&&(l._state!=="loaded"||l._playLock))return l._queue.push({event:"seek",action:function(){l.seek.apply(l,h)}}),l;var f=l._soundById(m);if(f)if(typeof d=="number"&&d>=0){var x=l.playing(m);x&&l.pause(m,!0),f._seek=d,f._ended=!1,l._clearTimer(m),!l._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=d);var y=function(){x&&l.play(m,!0),l._emit("seek",m)};if(x&&!l._webAudio){var M=function(){l._playLock?setTimeout(M,0):y()};setTimeout(M,0)}else y()}else if(l._webAudio){var P=l.playing(m)?t.ctx.currentTime-f._playStart:0,S=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(S+P*Math.abs(f._rate))}else return f._node.currentTime;return l},playing:function(l){var h=this;if(typeof l=="number"){var d=h._soundById(l);return d?!d._paused:!1}for(var m=0;m<h._sounds.length;m++)if(!h._sounds[m]._paused)return!0;return!1},duration:function(l){var h=this,d=h._duration,m=h._soundById(l);return m&&(d=h._sprite[m._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var l=this,h=l._sounds,d=0;d<h.length;d++)h[d]._paused||l.stop(h[d]._id),l._webAudio||(l._clearSound(h[d]._node),h[d]._node.removeEventListener("error",h[d]._errorFn,!1),h[d]._node.removeEventListener(t._canPlayEvent,h[d]._loadFn,!1),h[d]._node.removeEventListener("ended",h[d]._endFn,!1),t._releaseHtml5Audio(h[d]._node)),delete h[d]._node,l._clearTimer(h[d]._id);var m=t._howls.indexOf(l);m>=0&&t._howls.splice(m,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===l._src||l._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return o&&_&&delete o[l._src],t.noAudio=!1,l._state="unloaded",l._sounds=[],l=null,null},on:function(l,h,d,m){var _=this,g=_["_on"+l];return typeof h=="function"&&g.push(m?{id:d,fn:h,once:m}:{id:d,fn:h}),_},off:function(l,h,d){var m=this,_=m["_on"+l],g=0;if(typeof h=="number"&&(d=h,h=null),h||d)for(g=0;g<_.length;g++){var f=d===_[g].id;if(h===_[g].fn&&f||!h&&f){_.splice(g,1);break}}else if(l)m["_on"+l]=[];else{var x=Object.keys(m);for(g=0;g<x.length;g++)x[g].indexOf("_on")===0&&Array.isArray(m[x[g]])&&(m[x[g]]=[])}return m},once:function(l,h,d){var m=this;return m.on(l,h,d,1),m},_emit:function(l,h,d){for(var m=this,_=m["_on"+l],g=_.length-1;g>=0;g--)(!_[g].id||_[g].id===h||l==="load")&&(setTimeout((function(f){f.call(this,h,d)}).bind(m,_[g].fn),0),_[g].once&&m.off(l,_[g].fn,_[g].id));return m._loadQueue(l),m},_loadQueue:function(l){var h=this;if(h._queue.length>0){var d=h._queue[0];d.event===l&&(h._queue.shift(),h._loadQueue()),l||d.action()}return h},_ended:function(l){var h=this,d=l._sprite;if(!h._webAudio&&l._node&&!l._node.paused&&!l._node.ended&&l._node.currentTime<l._stop)return setTimeout(h._ended.bind(h,l),100),h;var m=!!(l._loop||h._sprite[d][2]);if(h._emit("end",l._id),!h._webAudio&&m&&h.stop(l._id,!0).play(l._id),h._webAudio&&m){h._emit("play",l._id),l._seek=l._start||0,l._rateSeek=0,l._playStart=t.ctx.currentTime;var _=(l._stop-l._start)*1e3/Math.abs(l._rate);h._endTimers[l._id]=setTimeout(h._ended.bind(h,l),_)}return h._webAudio&&!m&&(l._paused=!0,l._ended=!0,l._seek=l._start||0,l._rateSeek=0,h._clearTimer(l._id),h._cleanBuffer(l._node),t._autoSuspend()),!h._webAudio&&!m&&h.stop(l._id,!0),h},_clearTimer:function(l){var h=this;if(h._endTimers[l]){if(typeof h._endTimers[l]!="function")clearTimeout(h._endTimers[l]);else{var d=h._soundById(l);d&&d._node&&d._node.removeEventListener("ended",h._endTimers[l],!1)}delete h._endTimers[l]}return h},_soundById:function(l){for(var h=this,d=0;d<h._sounds.length;d++)if(l===h._sounds[d]._id)return h._sounds[d];return null},_inactiveSound:function(){var l=this;l._drain();for(var h=0;h<l._sounds.length;h++)if(l._sounds[h]._ended)return l._sounds[h].reset();return new r(l)},_drain:function(){var l=this,h=l._pool,d=0,m=0;if(!(l._sounds.length<h)){for(m=0;m<l._sounds.length;m++)l._sounds[m]._ended&&d++;for(m=l._sounds.length-1;m>=0;m--){if(d<=h)return;l._sounds[m]._ended&&(l._webAudio&&l._sounds[m]._node&&l._sounds[m]._node.disconnect(0),l._sounds.splice(m,1),d--)}}},_getSoundIds:function(l){var h=this;if(typeof l>"u"){for(var d=[],m=0;m<h._sounds.length;m++)d.push(h._sounds[m]._id);return d}else return[l]},_refreshBuffer:function(l){var h=this;return l._node.bufferSource=t.ctx.createBufferSource(),l._node.bufferSource.buffer=o[h._src],l._panner?l._node.bufferSource.connect(l._panner):l._node.bufferSource.connect(l._node),l._node.bufferSource.loop=l._loop,l._loop&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop||0),l._node.bufferSource.playbackRate.setValueAtTime(l._rate,t.ctx.currentTime),h},_cleanBuffer:function(l){var h=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!l.bufferSource)return h;if(t._scratchBuffer&&l.bufferSource&&(l.bufferSource.onended=null,l.bufferSource.disconnect(0),d))try{l.bufferSource.buffer=t._scratchBuffer}catch{}return l.bufferSource=null,h},_clearSound:function(l){var h=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);h||(l.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(l){this._parent=l,this.init()};r.prototype={init:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,h._sounds.push(l),l.create(),l},create:function(){var l=this,h=l._parent,d=t._muted||l._muted||l._parent._muted?0:l._volume;return h._webAudio?(l._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),l._node.gain.setValueAtTime(d,t.ctx.currentTime),l._node.paused=!0,l._node.connect(t.masterGain)):t.noAudio||(l._node=t._obtainHtml5Audio(),l._errorFn=l._errorListener.bind(l),l._node.addEventListener("error",l._errorFn,!1),l._loadFn=l._loadListener.bind(l),l._node.addEventListener(t._canPlayEvent,l._loadFn,!1),l._endFn=l._endListener.bind(l),l._node.addEventListener("ended",l._endFn,!1),l._node.src=h._src,l._node.preload=h._preload===!0?"auto":h._preload,l._node.volume=d*t.volume(),l._node.load()),l},reset:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._rateSeek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,l},_errorListener:function(){var l=this;l._parent._emit("loaderror",l._id,l._node.error?l._node.error.code:0),l._node.removeEventListener("error",l._errorFn,!1)},_loadListener:function(){var l=this,h=l._parent;h._duration=Math.ceil(l._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),l._node.removeEventListener(t._canPlayEvent,l._loadFn,!1)},_endListener:function(){var l=this,h=l._parent;h._duration===1/0&&(h._duration=Math.ceil(l._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(l)),l._node.removeEventListener("ended",l._endFn,!1)}};var o={},a=function(l){var h=l._src;if(o[h]){l._duration=o[h].duration,u(l);return}if(/^data:[^;]+;base64,/.test(h)){for(var d=atob(h.split(",")[1]),m=new Uint8Array(d.length),_=0;_<d.length;++_)m[_]=d.charCodeAt(_);c(m.buffer,l)}else{var g=new XMLHttpRequest;g.open(l._xhr.method,h,!0),g.withCredentials=l._xhr.withCredentials,g.responseType="arraybuffer",l._xhr.headers&&Object.keys(l._xhr.headers).forEach(function(f){g.setRequestHeader(f,l._xhr.headers[f])}),g.onload=function(){var f=(g.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){l._emit("loaderror",null,"Failed loading audio file with status: "+g.status+".");return}c(g.response,l)},g.onerror=function(){l._webAudio&&(l._html5=!0,l._webAudio=!1,l._sounds=[],delete o[h],l.load())},s(g)}},s=function(l){try{l.send()}catch{l.onerror()}},c=function(l,h){var d=function(){h._emit("loaderror",null,"Decoding audio data failed.")},m=function(_){_&&h._sounds.length>0?(o[h._src]=_,u(h,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(l).then(m).catch(d):t.ctx.decodeAudioData(l,m,d)},u=function(l,h){h&&!l._duration&&(l._duration=h.duration),Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue())},p=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var l=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),h=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=h?parseInt(h[1],10):null;if(l&&d&&d<9){var m=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!m&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};n.Howler=t,n.Howl=i,typeof Na<"u"?(Na.HowlerGlobal=e,Na.Howler=t,Na.Howl=i,Na.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=i,window.Sound=r)})();/*!
*  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
*  
*  howler.js v2.2.4
*  howlerjs.com
*
*  (c) 2013-2020, James Simpson of GoldFire Studios
*  goldfirestudios.com
*
*  MIT License
*/(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var i=this;if(!i.ctx||!i.ctx.listener)return i;for(var r=i._howls.length-1;r>=0;r--)i._howls[r].stereo(t);return i},HowlerGlobal.prototype.pos=function(t,i,r){var o=this;if(!o.ctx||!o.ctx.listener)return o;if(i=typeof i!="number"?o._pos[1]:i,r=typeof r!="number"?o._pos[2]:r,typeof t=="number")o._pos=[t,i,r],typeof o.ctx.listener.positionX<"u"?(o.ctx.listener.positionX.setTargetAtTime(o._pos[0],Howler.ctx.currentTime,.1),o.ctx.listener.positionY.setTargetAtTime(o._pos[1],Howler.ctx.currentTime,.1),o.ctx.listener.positionZ.setTargetAtTime(o._pos[2],Howler.ctx.currentTime,.1)):o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]);else return o._pos;return o},HowlerGlobal.prototype.orientation=function(t,i,r,o,a,s){var c=this;if(!c.ctx||!c.ctx.listener)return c;var u=c._orientation;if(i=typeof i!="number"?u[1]:i,r=typeof r!="number"?u[2]:r,o=typeof o!="number"?u[3]:o,a=typeof a!="number"?u[4]:a,s=typeof s!="number"?u[5]:s,typeof t=="number")c._orientation=[t,i,r,o,a,s],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(i,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(o,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(s,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(t,i,r,o,a,s);else return u;return c},Howl.prototype.init=function(t){return function(i){var r=this;return r._orientation=i.orientation||[1,0,0],r._stereo=i.stereo||null,r._pos=i.pos||null,r._pannerAttr={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:360,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:360,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:0,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:"inverse",maxDistance:typeof i.maxDistance<"u"?i.maxDistance:1e4,panningModel:typeof i.panningModel<"u"?i.panningModel:"HRTF",refDistance:typeof i.refDistance<"u"?i.refDistance:1,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:1},r._onstereo=i.onstereo?[{fn:i.onstereo}]:[],r._onpos=i.onpos?[{fn:i.onpos}]:[],r._onorientation=i.onorientation?[{fn:i.onorientation}]:[],t.call(this,i)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,i){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,i)}}),r;var o=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof i>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var a=r._getSoundIds(i),s=0;s<a.length;s++){var c=r._soundById(a[s]);if(c)if(typeof t=="number")c._stereo=t,c._pos=[t,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&e(c,o),o==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(t,0,0):c._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",c._id);else return c._stereo}return r},Howl.prototype.pos=function(t,i,r,o){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,i,r,o)}}),a;if(i=typeof i!="number"?0:i,r=typeof r!="number"?-.5:r,typeof o>"u")if(typeof t=="number")a._pos=[t,i,r];else return a._pos;for(var s=a._getSoundIds(o),c=0;c<s.length;c++){var u=a._soundById(s[c]);if(u)if(typeof t=="number")u._pos=[t,i,r],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(i,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setPosition(t,i,r)),a._emit("pos",u._id);else return u._pos}return a},Howl.prototype.orientation=function(t,i,r,o){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,i,r,o)}}),a;if(i=typeof i!="number"?a._orientation[1]:i,r=typeof r!="number"?a._orientation[2]:r,typeof o>"u")if(typeof t=="number")a._orientation=[t,i,r];else return a._orientation;for(var s=a._getSoundIds(o),c=0;c<s.length;c++){var u=a._soundById(s[c]);if(u)if(typeof t=="number")u._orientation=[t,i,r],u._node&&(u._panner||(u._pos||(u._pos=a._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(i,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setOrientation(t,i,r)),a._emit("orientation",u._id);else return u._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,i=arguments,r,o,a;if(!t._webAudio)return t;if(i.length===0)return t._pannerAttr;if(i.length===1)if(typeof i[0]=="object")r=i[0],typeof o>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(i[0],10)),a?a._pannerAttr:t._pannerAttr;else i.length===2&&(r=i[0],o=parseInt(i[1],10));for(var s=t._getSoundIds(o),c=0;c<s.length;c++)if(a=t._soundById(s[c]),a){var u=a._pannerAttr;u={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:u.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:u.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:u.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:u.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:u.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:u.panningModel};var p=a._panner;p||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),p=a._panner),p.coneInnerAngle=u.coneInnerAngle,p.coneOuterAngle=u.coneOuterAngle,p.coneOuterGain=u.coneOuterGain,p.distanceModel=u.distanceModel,p.maxDistance=u.maxDistance,p.refDistance=u.refDistance,p.rolloffFactor=u.rolloffFactor,p.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var i=this,r=i._parent;i._orientation=r._orientation,i._stereo=r._stereo,i._pos=r._pos,i._pannerAttr=r._pannerAttr,t.call(this),i._stereo?r.stereo(i._stereo):i._pos&&r.pos(i._pos[0],i._pos[1],i._pos[2],i._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var i=this,r=i._parent;return i._orientation=r._orientation,i._stereo=r._stereo,i._pos=r._pos,i._pannerAttr=r._pannerAttr,i._stereo?r.stereo(i._stereo):i._pos?r.pos(i._pos[0],i._pos[1],i._pos[2],i._id):i._panner&&(i._panner.disconnect(0),i._panner=void 0,r._refreshBuffer(i)),t.call(this)}}(Sound.prototype.reset);var e=function(t,i){i=i||"spatial",i==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(ur);const Vb=Hb(ur),vt=function(n,e){return new Promise((t,i)=>{n.gltfLoader.load(e,r=>{r.scene.traverse(a=>{a.isMesh&&a.material.isMeshStandardMaterial&&(a.castShadow=!0,a.receiveShadow=!0)});const o=new hn;o.add(r.scene),t(o)})})};class Gb{constructor(e){this.game=e}async load(e){let t=[];for(let r=0;r<e.models.length;r++){let o=e.tiles.reduce((p,l)=>l.model==r?++p:p,0);if(o==0){console.warn(`model ${e.models[r]} at index ${r} not used.`);continue}let a=e.models[r];const s=await vt(this.game,a);let c;s.traverse(p=>{if(p.isMesh){c=p;return}});const u=new pc(c.geometry,c.material,o);u.receiveShadow=!0,t[r]=u}const i=new Qe;return e.models.forEach((r,o)=>{e.tiles.filter(a=>a.model==o).forEach((a,s)=>{const c=new N(a.position[0]*4,a.position[1],a.position[2]*4),u=new bi;u.setFromAxisAngle(ct.DEFAULT_UP,a.rotation);const p=new N(1,1,1);i.compose(c,u,p),t[o].setMatrixAt(s,i)})}),e.meta.shadow.forEach(r=>{t[r]&&(t[r].castShadow=!0,t[r].receiveShadow=!0)}),t}}const Wb=async(n,e)=>{let t=await new Promise((i,r)=>{n.rgbeLoader.load(e,(o,a)=>{i(o,a)})});t.mapping=qa,n.scene.background=t,n.scene.environment=t};class jb{constructor(e,t){this.ingredientInfo=e,this.model=null,this.game=t}getName(){return this.ingredientInfo.name}async spawn(e,t){return this.model=await vt(this.game,this.ingredientInfo.model),this.shelfSlot=e,this.model.position.x=e.position.x,this.model.position.y=e.position.y,this.model.position.z=e.position.z,this.game.scene.add(this.model),this.model}beginBrew(){this.model.moving=!0,clearTimeout(this.model.timeoutId),Ne.to(this.model.scale,{duration:2.5,x:0,y:0,z:0,onComplete:()=>{this.model.visible=!1,this.model.timeoutId=setTimeout(()=>{this.model.position.x=this.shelfSlot.position.x,this.model.position.y=this.ingredientInfo.wobble.amplitude*Math.sin(this.ingredientInfo.wobble.frequency*this.game.clock.getElapsedTime()+700)+(this.shelfSlot.position.y+this.ingredientInfo.shelfOffset),this.model.position.z=this.shelfSlot.position.z,this.model.visible=!0,Ne.to(this.model.scale,{duration:.7,x:1,y:1,z:1,ease:"bounce",onComplete:()=>{this.model.moving=!1}})},3e3)}}),Ne.to(this.model.position,{duration:1.5,motionPath:this.shelfSlot.motionPath,onComplete:()=>{}})}wobble(){this.model.moving||(this.model.position.y=this.ingredientInfo.wobble.amplitude*Math.sin(this.ingredientInfo.wobble.frequency*this.game.clock.getElapsedTime())+(this.shelfSlot.position.y+this.ingredientInfo.shelfOffset),this.model.rotateOnAxis(new N(0,1,0),-this.ingredientInfo.wobble.rotation))}}Array.prototype.equals=function(n,e=!0){if(!n||this.length!=n.length)return!1;for(var t=0;t<this.length;t++){if(e&&this[t]!=n[t])return!1;if(!e)return this.sort().equals(n.sort(),!0)}return!0},Array.prototype.remove=function(n){const e=this.indexOf(n);e!=-1?this.splice(e,1):console.warn(`did not find ${n} in array ${this}`)},Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]},Array.prototype.shuffle=function(){let n,e;for(let t=this.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),e=this[t],this[t]=this[n],this[n]=e;return this},Array.prototype.groupCount=function(){const n={};return this.forEach(e=>{n[e]?n[e]++:n[e]=1}),n};var Xb=`attribute float aScale;

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
}`,qb=`void main()\r
{\r
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\r
    float strength = 0.05 / distanceToCenter - 0.1;\r
    gl_FragColor = vec4(1.0, 1.0, 1.0, strength);

    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`,Yb=`attribute float aScale;

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
}`,Kb=`uniform float uBlendTime;\r
uniform vec3 uPotionColor;\r
uniform vec3 uNextPotionColor;\r
uniform float uTransparency;

void main()\r
{\r
    gl_FragColor = vec4(mix(uPotionColor, uNextPotionColor, uBlendTime), uTransparency);\r
}`;function Zb(n,e){document.getElementById("prev").addEventListener("click",t=>{Js(n,e)}),document.getElementById("next").addEventListener("click",t=>{Su(n,e)})}function $b(n,e){document.getElementById("room-navigation").style.display="block"}function Qb(n,e){document.getElementById("room-navigation").style.display="none",document.getElementById("prev").style.display="block",document.getElementById("next").style.display="block",document.getElementById("prev-text").innerHTML="Shop",document.getElementById("next-text").innerHTML="Market"}function Js(n,e){switch(e.currentRoom){case Si:pr(Wr),document.getElementById("prev").style.display="none",document.getElementById("next-text").innerHTML="Brew";break;case dr:pr(Si),document.getElementById("next").style.display="block",document.getElementById("prev-text").innerHTML="Shop";break}}function Su(n,e){switch(e.currentRoom){case Si:pr(dr),document.getElementById("next").style.display="none",document.getElementById("prev-text").innerHTML="Brew";break;case Wr:pr(Si),document.getElementById("prev").style.display="block",document.getElementById("next-text").innerHTML="Market";break}}function Jb(n,e){document.getElementById("game-status-container").style.display="flex"}function eT(n,e){document.getElementById("game-status-container").style.display="none"}function Vr(n,e){document.getElementById("currency-progress-amount").style.width=`${Math.min(100,Math.ceil(100*(e.currency/1e3)))}%`,document.getElementById("currency-amount").innerHTML=e.currency,document.getElementById("current-day-text").innerHTML=`day ${e.currentDay}`}function tT(n,e){document.getElementById("credits-container").addEventListener("click",()=>{bu()}),document.getElementById("credits-back-button").addEventListener("click",()=>{bu()}),document.getElementById("credits-panel").addEventListener("click",t=>{t.stopPropagation()})}function iT(n,e){document.getElementById("credits-container").style.display="flex";const t=document.getElementById("credits-panel");Ne.to(t,{x:0,duration:.8,onComplete:()=>{}}),Eu()}function bu(n,e){const t=document.getElementById("credits-panel");Ne.to(t,{x:-1024,duration:.8,onComplete:()=>{document.getElementById("credits-container").style.display="none"}}),wu()}function nT(n,e){document.getElementById("options-container").addEventListener("click",()=>{Tu()}),document.getElementById("options-panel").addEventListener("click",t=>{t.stopPropagation()}),document.getElementById("options-back-button").addEventListener("click",()=>{Tu()}),document.getElementById("master-volume").addEventListener("change",t=>{const i=document.getElementById("master-volume").value;e.adjustMasterVolume(i)}),document.getElementById("music-volume").addEventListener("change",t=>{const i=document.getElementById("music-volume").value;e.adjustMusicVolume(i)})}function rT(n,e){document.getElementById("options-container").style.display="flex";const t=document.getElementById("options-panel");Ne.to(t,{x:0,duration:.8,onComplete:()=>{}}),Eu()}function Tu(n,e){const t=document.getElementById("options-panel");Ne.to(t,{x:-1024,duration:.8,onComplete:()=>{document.getElementById("options-container").style.display="none"}}),wu()}function Em(n){n.brewTutorial1.alreadySeen||(n.brewInactivityHandle=setTimeout(()=>{Ne.to(n.brewTutorial1.material,{duration:1.5,opacity:1,onStart:()=>{n.brewTutorial1.castShadow=!0}})},5e3))}async function oT(n,e){const t=document.getElementById("main-menu-container");document.getElementById("play-button").addEventListener("click",()=>{Em(e),Eu(),$b(),Jb();const i=e.cameraPositions[1];Ne.to(n.camera.position,{duration:2.5,x:i.camera.x,y:i.camera.y,z:i.camera.z}),Ne.to(n.lookAtFocus,{duration:2.5,x:i.focus.x,y:i.focus.y,z:i.focus.z}),e.musicLoop.play()}),document.getElementById("options-button").addEventListener("click",()=>{rT()}),document.getElementById("credits-button").addEventListener("click",()=>{iT()}),document.getElementById("reset-save-button").addEventListener("click",()=>{confirm("Are you sure you want to delete your Spookonomics save data? This cannot be undone.")&&(Dm(e),Um(e))}),t.addEventListener("click",i=>{i.stopPropagation()})}async function wu(n,e){const t=document.getElementById("main-menu-container");t.style.display="block";const i=document.getElementById("main-menu-display");Ne.to(i,{x:0,duration:.8,onComplete:()=>{}})}async function Eu(n,e){const t=document.getElementById("main-menu-container"),i=document.getElementById("main-menu-display");Ne.to(i,{x:-1024,duration:.8,onComplete:()=>{t.style.display="none"}})}const aT={image:"./images/potion_unknown.png",title:"Unknown",properties:[]};function Au(n,e){const t=document.getElementById("brew-selected-container").children;for(let i=0;i<t.length;i++)t[i].classList.add("disabled"),t[i].getElementsByClassName("disabled-selected-ingredient")[0].style.display="block",t[i].getElementsByClassName("active-selected-ingredient")[0].style.display="none";for(let i=0;i<e.selectedIngredients.length;i++){const r=e.selectedIngredients[i],o=e.ingredientInfo[r];t[i].classList.remove("disabled"),t[i].getElementsByClassName("disabled-selected-ingredient")[0].style.display="none";const a=t[i].getElementsByClassName("active-selected-ingredient")[0];a.style.display="flex",a.getElementsByClassName("selected-ingredient-image")[0].getElementsByTagName("img")[0].src=o.image,a.getElementsByClassName("selected-ingredient-description")[0].getElementsByTagName("h2")[0].innerText=o.title,a.getElementsByClassName("selected-ingredient-description")[0].getElementsByTagName("p")[0].innerText=o.description}}function Ru(n,e){const t=e.potionInfo.filter(s=>e.selectedIngredients.equals(s.ingredients,!1));let i=aT;e.potionToBrew=null,t.length==1&&(i=t[0],e.potionToBrew=i),document.getElementById("potion-icon").innerHTML="";let r=document.createElement("img");r.src=i.image,document.getElementById("potion-icon").appendChild(r);const o=e.potionInventory.groupCount()[i.name]??0,a=document.getElementById("potion-icon-container").getElementsByClassName("potion-inventory-count")[0];o==0?a.style.display="none":(a.style.display="block",a.innerHTML=o),document.getElementById("potion-name").innerText=i.title,document.getElementById("potion-properties-list").innerHTML="",i.properties.forEach(s=>{let c=document.createElement("li");c.innerText=s,document.getElementById("potion-properties-list").appendChild(c)})}function Cu(n,e){const t=document.getElementById("brew-ingredients-container");t.innerHTML="";const i=e.ingredientInventory.groupCount();for(let r in e.ingredientInfo){const o=e.ingredientInfo[r],a=document.createElement("div");a.className="ingredient-container",a.setAttribute("data-ingredient",r);const s=document.createElement("img");s.src=o.image,s.title=o.title;const c=document.createElement("div");c.className="ingredient-inventory-brew-count",c.innerHTML=i[r]??0,a.appendChild(s),a.appendChild(c),a.addEventListener("click",u=>{if(u.stopPropagation(),e.selectedIngredients.length<2){e.soundEffects["audio/click1.ogg"].play();const p=a.getAttribute("data-ingredient");e.selectedIngredients.push(p),Au(n,e)}Ru(n,e)}),t.appendChild(a)}}async function sT(n,e){document.getElementById("brew-container").addEventListener("click",()=>{Gr(n,e)}),document.getElementById("brew-right-side").addEventListener("click",i=>{i.stopPropagation()}),Cu(n,e);const t=document.getElementById("brew-selected-container").children;for(let i=0;i<t.length;i++){const r=t[i];r.addEventListener("click",o=>{o.stopPropagation(),!r.classList.contains("disabled")&&(e.soundEffects["audio/click1.ogg"].play(),e.selectedIngredients.splice(i,1),Au(n,e),Ru(n,e))})}document.getElementById("start-brew").addEventListener("click",()=>{e.beginBrew()})}async function Am(n,e){if(e.cauldron.brewMenuOpen)return;const t=document.getElementById("brew-container");if(t.style.display="block",n.canvas.clientWidth>=1024){let r=e.cameraPositions[e.currentRoom-1];Ne.to(n.lookAtFocus,{x:r.focus.x+2.5,duration:.8}),Ne.to(n.camera.position,{x:r.camera.x+2.5,duration:.8})}else{let r=e.cameraPositions[e.currentRoom-1];Ne.to(n.lookAtFocus,{y:r.focus.y-1.5,duration:.8}),Ne.to(n.camera.position,{y:r.camera.y-1.5,duration:.8})}Cu(n,e),Au(n,e),Ru(n,e),e.soundEffects["audio/drawKnife2.ogg"].play();const i=document.getElementById("brew-right-side");Ne.to(i,{x:0,duration:.8,onComplete:()=>{e.cauldron.brewMenuOpen=!0}})}async function Gr(n,e){if(!e.cauldron.brewMenuOpen)return;e.cauldron.brewMenuOpen=!1;const t=document.getElementById("brew-container");if(n.canvas.clientWidth>=1024){let r=e.cameraPositions[e.currentRoom-1];Ne.to(n.lookAtFocus,{x:r.focus.x,duration:.8}),Ne.to(n.camera.position,{x:r.camera.x,duration:.8})}else{let r=e.cameraPositions[e.currentRoom-1];Ne.to(n.lookAtFocus,{y:r.focus.y,duration:.8}),Ne.to(n.camera.position,{y:r.camera.y,duration:.8})}e.soundEffects["audio/drawKnife2.ogg"].play();const i=document.getElementById("brew-right-side");Ne.to(i,{x:1024,duration:.8,onComplete:()=>{t.style.display="none"}})}function lT(n){n.shopTutorial1.alreadySeen||(n.shopInactivityHandle=setTimeout(()=>{Ne.to(n.shopTutorial1.material,{duration:1.5,opacity:1,onStart:()=>{n.shopTutorial1.castShadow=!0}})},5e3))}async function cT(n,e){document.getElementById("shop-container").addEventListener("click",()=>{Oa(n,e)}),document.getElementById("shop-panel").addEventListener("click",t=>{t.stopPropagation()}),document.getElementById("start-selling").addEventListener("click",t=>{e.beginSell()})}function Pu(n,e){const t=document.getElementById("shop-potions-container");t.innerHTML="";const i=e.potionInventory.groupCount();Object.keys(i).forEach(o=>{const a=e.potionInfo.find(p=>p.name==o),s=document.createElement("div");s.className="potion-container",s.title=a.title,s.setAttribute("data-potion",a.name);const c=document.createElement("img");c.src=a.image,c.title=a.title;const u=document.createElement("div");u.className="potion-inventory-count",u.innerHTML=`${i[o]??0}`,s.appendChild(c),s.appendChild(u),t.appendChild(s)});const r=document.getElementById("shop-potions-container").children;for(const o of r)o.addEventListener("click",a=>{if(a.stopPropagation(),e.potionStocked.length<6){e.soundEffects["audio/click1.ogg"].play();const s=o.getAttribute("data-potion");ka(e.potionStocked,"potion-stocked",s),Fa(e.potionInventory,"potion-inventory",s),e.potionInventory.sort(),e.potionStocked.sort()}Pu(n,e),Iu(n,e)})}function Iu(n,e){const t=document.getElementById("shop-shelves-container");t.innerHTML="";let i=0;for(let o=0;o<6;o++){if(i%2==0){const l=document.createElement("div");l.className="shop-shelf",t.appendChild(l)}const a=t.getElementsByClassName("shop-shelf")[Math.floor(i/2)];i++;const s=e.potionStocked[o];if(!s){const l=document.createElement("div");l.className="stocked-potion-container disabled-stocked-potion",a.appendChild(l);continue}const c=e.potionInfo.find(l=>l.name==s),u=document.createElement("div");u.className="stocked-potion-container",u.title=c.title,u.setAttribute("data-potion",c.name);const p=document.createElement("img");p.src=c.image,p.title=c.title,u.appendChild(p),a.appendChild(u)}const r=document.getElementById("shop-shelves-container").getElementsByClassName("stocked-potion-container");for(const o of r)o.classList.contains("disabled-stocked-potion")||o.addEventListener("click",a=>{if(a.stopPropagation(),e.potionStocked.length>0){e.soundEffects["audio/click1.ogg"].play();const s=o.getAttribute("data-potion");Fa(e.potionStocked,"potion-stocked",s),ka(e.potionInventory,"potion-inventory",s),e.potionInventory.sort(),e.potionStocked.sort()}Pu(n,e),Iu(n,e)});nl()}async function Rm(n,e){const t=document.getElementById("shop-container");t.style.display="block",Pu(n,e),Iu(n,e),e.soundEffects["audio/drawKnife2.ogg"].play();const i=document.getElementById("shop-panel");Ne.to(i,{x:0,duration:.8,onComplete:()=>{e.chest.isStocking=!0}})}async function Oa(n,e){e.chest.isStocking=!1,e.soundEffects["audio/drawKnife2.ogg"].play();const t=document.getElementById("shop-panel");Ne.to(t,{x:1024,duration:.8,onComplete:()=>{const i=document.getElementById("shop-container");i.style.display="none"}})}const uT=["models/floor_tile_large.gltf.glb","models/wall_shelves.gltf.glb","models/wall_inset_shelves.gltf.glb","models/wall_inset_shelves_decoratedA.gltf.glb","models/kitchencounter_straight_B_styleB.gltf","models/wall_pillar.gltf.glb","models/wall_arched.gltf.glb","models/floor_dirt_large.gltf.glb","models/tree_pine_yellow_large.gltf","models/tree_pine_orange_large.gltf","models/maze_short.gltf","models/maze_tall.gltf","models/wall.gltf.glb","models/shelves.gltf.glb"],hT={shadow:[8,9,10,11,13]},dT=[{model:0,position:[-1,0,-.5],rotation:0},{model:0,position:[-1,0,.5],rotation:0},{model:0,position:[-1,0,1.5],rotation:0},{model:0,position:[0,0,-.5],rotation:0},{model:0,position:[0,0,.5],rotation:0},{model:0,position:[0,0,1.5],rotation:0},{model:0,position:[1,0,-.5],rotation:0},{model:0,position:[1,0,.5],rotation:0},{model:0,position:[1,0,1.5],rotation:0},{model:0,position:[1,0,-.5],rotation:0},{model:0,position:[1,0,.5],rotation:0},{model:0,position:[1,0,1.5],rotation:0},{model:2,position:[-1.5,0,.5],rotation:1.5707963267948966},{model:3,position:[-1.5,0,1.5],rotation:1.5707963267948966},{model:12,position:[-1,0,-1],rotation:0},{model:13,position:[-1,0,-1],rotation:0},{model:2,position:[0,0,-1],rotation:0},{model:3,position:[1,0,-1],rotation:0},{model:1,position:[1.5,0,-.5],rotation:-1.5707963267948966},{model:2,position:[1.5,0,1.5],rotation:-1.5707963267948966},{model:0,position:[-4,0,-.5],rotation:0},{model:0,position:[-4,0,.5],rotation:0},{model:0,position:[-4,0,1.5],rotation:0},{model:0,position:[-3,0,-.5],rotation:0},{model:0,position:[-3,0,.5],rotation:0},{model:0,position:[-3,0,1.5],rotation:0},{model:0,position:[-2,0,-.5],rotation:0},{model:0,position:[-2,0,.5],rotation:0},{model:0,position:[-2,0,1.5],rotation:0},{model:5,position:[-4.5,0,-.5],rotation:1.5707963267948966},{model:5,position:[-4.5,0,.5],rotation:1.5707963267948966},{model:5,position:[-4.5,0,1.5],rotation:1.5707963267948966},{model:3,position:[-4,0,-1],rotation:0},{model:13,position:[-3,0,-1],rotation:0},{model:12,position:[-3,0,-1],rotation:0},{model:12,position:[-2,0,-1],rotation:0},{model:13,position:[-2,0,-1],rotation:0},{model:4,position:[-4,0,-0],rotation:0},{model:4,position:[-3.5,0,-0],rotation:0},{model:4,position:[-3,0,-0],rotation:0},{model:4,position:[-2.5,0,-0],rotation:0},{model:7,position:[1,0,-6],rotation:0},{model:7,position:[1,0,-5],rotation:0},{model:7,position:[1,0,-4],rotation:0},{model:7,position:[1,0,-3],rotation:0},{model:7,position:[1,0,-2],rotation:0},{model:7,position:[1,0,-1],rotation:0},{model:10,position:[1,0,-6],rotation:0},{model:11,position:[1,0,-5.5],rotation:0},{model:10,position:[1,0,-5],rotation:0},{model:11,position:[1,0,-4.5],rotation:0},{model:11,position:[1,0,-4],rotation:0},{model:10,position:[1,0,-3.5],rotation:0},{model:10,position:[1,0,-3],rotation:0},{model:11,position:[1,0,-2.5],rotation:0},{model:10,position:[1,0,-2],rotation:0},{model:7,position:[2,0,-6],rotation:0},{model:7,position:[2,0,-5],rotation:0},{model:7,position:[2,0,-4],rotation:0},{model:7,position:[2,0,-3],rotation:0},{model:7,position:[2,0,-2],rotation:0},{model:7,position:[2,0,-1],rotation:0},{model:7,position:[2,0,0],rotation:0},{model:7,position:[2,0,1],rotation:0},{model:7,position:[2,0,2],rotation:0},{model:7,position:[3,0,-6],rotation:0},{model:7,position:[3,0,-5],rotation:0},{model:7,position:[3,0,-4],rotation:0},{model:7,position:[3,0,-3],rotation:0},{model:7,position:[3,0,-2],rotation:0},{model:7,position:[3,0,-1],rotation:0},{model:7,position:[3,0,0],rotation:0},{model:7,position:[3,0,1],rotation:0},{model:7,position:[3,0,2],rotation:0},{model:7,position:[4,0,-6],rotation:0},{model:7,position:[4,0,-5],rotation:0},{model:7,position:[4,0,-4],rotation:0},{model:7,position:[4,0,-3],rotation:0},{model:7,position:[4,0,-2],rotation:0},{model:7,position:[4,0,-1],rotation:0},{model:7,position:[4,0,0],rotation:0},{model:7,position:[4,0,1],rotation:0},{model:7,position:[4,0,2],rotation:0},{model:7,position:[5,0,-6],rotation:0},{model:7,position:[5,0,-5],rotation:0},{model:7,position:[5,0,-4],rotation:0},{model:7,position:[5,0,-3],rotation:0},{model:7,position:[5,0,-2],rotation:0},{model:7,position:[5,0,-1],rotation:0},{model:7,position:[5,0,0],rotation:0},{model:7,position:[5,0,1],rotation:0},{model:7,position:[5,0,2],rotation:0},{model:7,position:[5,0,3],rotation:0},{model:11,position:[4.5,0,2.5],rotation:0},{model:11,position:[5,0,2.5],rotation:0},{model:7,position:[6,0,-6],rotation:0},{model:7,position:[6,0,-5],rotation:0},{model:7,position:[6,0,-4],rotation:0},{model:7,position:[6,0,-3],rotation:0},{model:7,position:[6,0,-2],rotation:0},{model:7,position:[6,0,-1],rotation:0},{model:7,position:[6,0,0],rotation:0},{model:7,position:[6,0,1],rotation:0},{model:7,position:[6,0,2],rotation:0},{model:7,position:[6,0,3],rotation:0},{model:10,position:[5.5,0,2.5],rotation:0},{model:11,position:[6,0,2.5],rotation:0},{model:7,position:[7,0,-6],rotation:0},{model:7,position:[7,0,-5],rotation:0},{model:7,position:[7,0,-4],rotation:0},{model:7,position:[7,0,-3],rotation:0},{model:7,position:[7,0,-2],rotation:0},{model:7,position:[7,0,-1],rotation:0},{model:7,position:[7,0,0],rotation:0},{model:7,position:[7,0,1],rotation:0},{model:7,position:[7,0,2],rotation:0},{model:7,position:[7,0,3],rotation:0},{model:10,position:[6.5,0,2.5],rotation:0},{model:10,position:[7,0,2.5],rotation:0},{model:7,position:[8,0,-6],rotation:0},{model:7,position:[8,0,-5],rotation:0},{model:7,position:[8,0,-4],rotation:0},{model:7,position:[8,0,-3],rotation:0},{model:7,position:[8,0,-2],rotation:0},{model:7,position:[8,0,-1],rotation:0},{model:7,position:[8,0,0],rotation:0},{model:7,position:[8,0,1],rotation:0},{model:7,position:[8,0,2],rotation:0},{model:7,position:[8,0,3],rotation:0},{model:7,position:[9,0,-6],rotation:0},{model:7,position:[9,0,-5],rotation:0},{model:7,position:[9,0,-4],rotation:0},{model:7,position:[9,0,-3],rotation:0},{model:7,position:[9,0,-2],rotation:0},{model:7,position:[9,0,-1],rotation:0},{model:7,position:[9,0,0],rotation:0},{model:7,position:[9,0,1],rotation:0},{model:7,position:[9,0,2],rotation:0},{model:7,position:[9,0,3],rotation:0},{model:11,position:[9,0,-3],rotation:0},{model:11,position:[9,0,-2.5],rotation:0},{model:10,position:[9,0,-2],rotation:0},{model:10,position:[9,0,-1.5],rotation:0},{model:11,position:[9,0,-1],rotation:0},{model:11,position:[9,0,-.5],rotation:0},{model:10,position:[9,0,0],rotation:0},{model:11,position:[9,0,.5],rotation:0},{model:10,position:[9,0,1],rotation:0},{model:10,position:[9,0,1.5],rotation:0},{model:10,position:[9,0,2],rotation:0},{model:11,position:[9,0,2.5],rotation:0},{model:11,position:[9,0,3],rotation:0},{model:9,position:[3,0,-3],rotation:0},{model:8,position:[4,0,-1],rotation:5.356194490192345},{model:9,position:[6,0,-2],rotation:3.141592653589793},{model:9,position:[3,0,0],rotation:0},{model:8,position:[8,0,1],rotation:0}],pT={models:uT,meta:hT,tiles:dT},fT={name:"pumpkin",model:"models/pumpkin_orange_small.gltf",image:"./images/ingredient_pumpkin.png",title:"Pumpkin",description:"Makes things pumpkiny",shelfOffset:-.15,wobble:{amplitude:.125,frequency:4,rotation:.01},cost:10},mT={name:"tomato",model:"models/food_ingredient_tomato.gltf",image:"./images/ingredient_tomato.png",title:"Tomato",description:"Makes things tomatoy",shelfOffset:-.2,wobble:{amplitude:.125,frequency:3.7,rotation:.01},cost:10},gT={name:"lettuce",model:"models/food_ingredient_lettuce.gltf",image:"./images/ingredient_lettuce.png",title:"Lettuce",description:"Makes things lettucey",shelfOffset:.1,wobble:{amplitude:.0625,frequency:2.7,rotation:.005},cost:10},_T={name:"mushroom",model:"models/food_ingredient_mushroom.gltf",image:"./images/ingredient_mushroom.png",title:"Mushroom",description:"Makes things mushroomy",shelfOffset:.05,wobble:{amplitude:.125,frequency:3.6,rotation:.01},cost:10},vT={pumpkin:fT,tomato:mT,lettuce:gT,mushroom:_T},yT=[{name:"pumpkin-spice",ingredients:["pumpkin","pumpkin"],image:"./images/potion_wide_orange.png",title:"Pumpkin Spice Latte",properties:["Tasty","Basic","Spooky"],model:"models/bottle_C_brown.gltf.glb",color:{r:.8,g:.3,b:0},value:100},{name:"wildendraught",ingredients:["pumpkin","mushroom"],image:"./images/potion_normal_green.png",title:"Wildendraught",properties:["Feral","Unhinged","Carbonated"],model:"models/bottle_B_green.gltf.glb",color:{r:.1,g:.8,b:.1},value:100},{name:"spooksauce",ingredients:["pumpkin","tomato"],image:"./images/potion_narrow_purple.png",title:"Spooksauce",properties:["Haunting","Creepy","Sweet"],model:"models/bottle_A_purple.gltf.glb",color:{r:.7,g:.1,b:.6},value:100},{name:"carrot-juice",ingredients:["pumpkin","lettuce"],image:"./images/potion_narrow_orange.png",title:"Carrot Juice",properties:["Confusing","Unusual","Disturbing"],model:"models/bottle_A_brown.gltf.glb",color:{r:.7,g:.5,b:.1},value:100},{name:"sanguis-damnum",ingredients:["tomato","tomato"],image:"./images/potion_wide_purple.png",title:"Sanguis Damnum",properties:["Coppery","Thick","Hot"],model:"models/bottle_C_purple.gltf.glb",color:{r:.5,g:.1,b:.5},value:100},{name:"freshie",ingredients:["tomato","lettuce"],image:"./images/potion_normal_purple.png",title:"Freshie",properties:["Umami","Invigorating","Yum"],model:"models/bottle_B_purple.gltf.glb",color:{r:.7,g:.2,b:.9},value:100},{name:"corpsicle",ingredients:["tomato","mushroom"],image:"./images/potion_narrow_blue.png",title:"Corpsicle",properties:["Meaty","Pulpy","Moldy"],model:"models/bottle_A_blue.gltf.glb",color:{r:0,g:.1,b:.4},value:100},{name:"healthy-greens",ingredients:["lettuce","lettuce"],image:"./images/potion_wide_green.png",title:"Healthy Greens",properties:["Healthy","Crisp","Verdant"],model:"models/bottle_C_green.gltf.glb",color:{r:0,g:.8,b:.2},value:100},{name:"not-poison",ingredients:["lettuce","mushroom"],image:"./images/potion_narrow_green.png",title:"Not Poison",properties:["Bitter","Almond","Intense"],model:"models/bottle_A_green.gltf.glb",color:{r:.2,g:.8,b:.2},value:100},{name:"fungus-amongus",ingredients:["mushroom","mushroom"],image:"./images/potion_wide_blue.png",title:"Fungus Amongus",properties:["Sour","Vile","Suspicious"],model:"models/bottle_C_blue.gltf.glb",color:{r:.4,g:.4,b:.8},value:100}];var xT=`attribute float aScale;

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
}`,MT=`uniform sampler2D uPotionIcon;

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
}`;class Lu{constructor(e,t,i,r,o,a,s){this.game=e,this.meshPath=t,this.desiredPotion=i,this.scale=r,this.position=o,this.rotation=a,this.updateFunction=s,this.rejectCount=0,this.rejectionColors=[new ke("yellow"),new ke("orange"),new ke("crimson")]}async init(){const e=await vt(this.game,this.meshPath);e.scale.copy(this.scale),this.object3d=new hn,this.object3d.add(e),this.object3d.position.set(-15,.1,10),this.object3d.rotateOnAxis(ct.DEFAULT_UP,this.rotation),this.game.scene.add(this.object3d);const t=new Zo(1,1),i=this.game.textureLoader.load("./textures/speechbubble.png"),r=new cn({map:i,transparent:!0,side:Jt}),o={uPotionIcon:{value:this.game.textureLoader.load(this.desiredPotion.image)}},a=new $t(t.clone(),new Pt({uniforms:o,vertexShader:xT,fragmentShader:MT,transparent:!0}));a.position.y=.085,a.position.z=.05,a.scale.set(.5,.5,.5),this.requestBillboard=new hn,this.billboardSprite=new $t(t.clone(),r),this.requestBillboard.add(this.billboardSprite),this.requestBillboard.add(a),this.requestBillboard.position.x=0,this.requestBillboard.position.y=2.5,this.requestBillboard.position.z=0,this.requestBillboard.visible=!1,this.object3d.add(this.requestBillboard),Ne.to(this.object3d.position,{duration:2,x:this.position.x,y:this.position.y,z:this.position.z})}update(e){this.updateFunction(e)}showDesire(){this.object3d.wantIsAnimating||(this.object3d.wantIsAnimating=!0,this.object3d.wantIsAnimating=!0,this.requestBillboard.lookAt(this.game.camera.position),this.requestBillboard.visible=!0,this.requestBillboard.position.set(0,.5,0),this.requestBillboard.scale.set(0,0,0),Ne.to(this.requestBillboard.position,{duration:2,y:2.5,ease:"elastic",onUpdate:()=>{this.requestBillboard.lookAt(this.game.camera.position)}}),Ne.to(this.requestBillboard.scale,{duration:2,x:1,y:1,z:1,ease:"elastic",onComplete:()=>{this.object3d.wantIsAnimating=!1}}))}hideDesire(){this.object3d.wantIsAnimating=!0,Ne.to(this.requestBillboard.position,{duration:2,y:.5,ease:"back"}),Ne.to(this.requestBillboard.scale,{duration:2,x:0,y:0,z:0,ease:"back",onComplete:()=>{this.requestBillboard.visible=!1,this.object3d.wantIsAnimating=!1}})}acceptPotion(){}rejectPotion(e=1){this.rejectCount+=e,this.billboardSprite.material.color=this.rejectionColors[Math.min(2,this.rejectCount-1)]}showSad(){console.log("not what I wanted")}isMatchingPotion(e){return this.desiredPotion.name==e.name}}function Cm(n,e,t){const i=n.split(" "),r=[];let o="";const a=t.width-8*2;return i.forEach(s=>{const c=o+s+" ",u=e.measureText(c.trim());u.actualBoundingBoxLeft+u.actualBoundingBoxRight>a?(r.push(o.trim()),o=s+" "):o=c}),o!=""&&r.push(o.trim()),r}function Du(n,e={}){const t={width:512,height:512,font:"86px Arial",textAlign:"center",lineWidth:8};e.width&&(t.width=e.width),e.height&&(t.height=e.height),e.font&&(t.font=e.font),e.textAlign&&(t.textAlign=e.textAlign),e.lineWidth&&(t.lineWidth=e.lineWidth);const i=ST(n,t),r=bT(n,t),o=new cn({transparent:!0,map:i,side:Jt,alphaMap:r,alphaTest:.1}),a=new Zo(4,4),s=new $t(a,o);return s.castShadow=!0,s}function ST(n,e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.clearRect(0,0,e.width,e.height),i.font=e.font,i.textAlign=e.textAlign,i.lineWidth=e.lineWidth,i.lineCap="round",i.lineJoin="round";const r=Cm(n,i,e);for(let a=0;a<r.length;a++){const s=r[a],c=i.measureText(s);let u=c.fontBoundingBoxAscent+c.fontBoundingBoxDescent;i.beginPath(),i.strokeStyle="black",i.strokeText(s,e.width/2,8+u*(a+1)),i.beginPath(),i.fillStyle="white",i.fillText(s,e.width/2,8+u*(a+1))}const o=new Pp(t);return o.minFilter=Ut,o.wrapS=mi,o.wrapT=mi,o.needsUpdate=!0,o}function bT(n,e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.clearRect(0,0,e.width,e.height),i.beginPath(),i.fillStyle="black",i.rect(0,0,e.width,e.height),i.fill(),i.font=e.font,i.textAlign=e.textAlign,i.lineWidth=e.lineWidth,i.lineCap="round",i.lineJoin="round";const r=Cm(n,i,e);for(let a=0;a<r.length;a++){const s=r[a],c=i.measureText(s);let u=c.fontBoundingBoxAscent+c.fontBoundingBoxDescent;i.beginPath(),i.strokeStyle="white",i.strokeText(s,e.width/2,8+u*(a+1)),i.beginPath(),i.fillStyle="white",i.fillText(s,e.width/2,8+u*(a+1))}const o=new Pp(t);return o.minFilter=Ut,o.wrapS=mi,o.wrapT=mi,o.needsUpdate=!0,o}function TT(n,e){document.getElementById("play-again").addEventListener("click",t=>{ET(),Dm(e),Bm(n,e)})}function wT(n,e){document.getElementById("game-over-container").style.display="block";const t=document.getElementById("game-over-blackout");Ne.to(t,{duration:2,opacity:1});const i=document.getElementById("game-over-panel");i.getElementsByTagName("p")[0].innerHTML=`You made ${e.currency} gold in:`,i.getElementsByTagName("h2")[0].innerHTML=`${e.currentDay-1} days`}function ET(n,e){const t=document.getElementById("game-over-blackout");Ne.to(t,{duration:2,opacity:0,onComplete:()=>{document.getElementById("game-over-container").style.display="none"}})}function AT(n,e){document.getElementById("market-container").addEventListener("click",()=>{Uu(n,e)}),document.getElementById("market-panel").addEventListener("click",t=>{t.stopPropagation()}),document.getElementById("buy-ingredients").addEventListener("click",t=>{e.buyIngredients()})}let jo=0;function RT(n,e){const t=document.getElementById("ingredients-list");t.innerHTML="";const i=e.ingredientInventory.groupCount();for(let r in e.ingredientInfo){const o=e.ingredientInfo[r],a=document.createElement("div");a.className="ingredient-sell-container",a.setAttribute("data-ingredient",r);const s=document.createElement("div");s.className="ingredient-icon-container";const c=document.createElement("img");c.src=o.image;const u=document.createElement("div");u.className="ingredient-inventory-count",u.innerHTML=i[r]??0,s.appendChild(c),s.appendChild(u);const p=document.createElement("div");p.className="ingredient-description";const l=document.createElement("h2");l.innerHTML=o.title;const h=document.createElement("div");h.className="ingredient-price";const d=document.createElement("img");d.src="./images/coin.svg";const m=document.createElement("div");m.className="ingredient-price-value",m.innerHTML=o.cost,h.appendChild(d),h.appendChild(m);const _=document.createElement("div");_.className="call-to-action",_.innerHTML="Click to add to order",_.addEventListener("click",M=>{const P=a.getAttribute("data-ingredient");if(e.ingredientInfo[P].cost+jo>e.currency){e.soundEffects["audio/witch_cackle1.ogg"].play();return}e.soundEffects["audio/click1.ogg"].play(),e.cartItems.push(P),f.innerHTML=e.cartItems.filter(S=>S==r).length,Xo(n,e)}),p.appendChild(l),p.appendChild(h),p.appendChild(_);const g=document.createElement("div");g.className="ingredient-in-cart-container";const f=document.createElement("div");f.className="ingredient-in-cart-amount",f.innerHTML=0,g.appendChild(f);const x=document.createElement("button");x.className="add-ingredient-button",x.innerHTML="+",x.addEventListener("click",()=>{const M=a.getAttribute("data-ingredient");if(e.ingredientInfo[M].cost+jo>e.currency){e.soundEffects["audio/witch_cackle1.ogg"].play();return}e.soundEffects["audio/click1.ogg"].play(),e.cartItems.push(M),f.innerHTML=e.cartItems.filter(P=>P==r).length,Xo(n,e)});const y=document.createElement("button");y.className="remove-ingredient-button",y.innerHTML="-",y.addEventListener("click",()=>{const M=a.getAttribute("data-ingredient");e.cartItems.indexOf(M)!=-1&&(e.soundEffects["audio/click1.ogg"].play(),e.cartItems.splice(e.cartItems.indexOf(M),1),f.innerHTML=e.cartItems.filter(P=>P==r).length,Xo(n,e))}),s.addEventListener("click",()=>{const M=a.getAttribute("data-ingredient");if(e.ingredientInfo[M].cost+jo>e.currency){e.soundEffects["audio/witch_cackle1.ogg"].play();return}e.soundEffects["audio/click1.ogg"].play(),e.cartItems.push(M),f.innerHTML=e.cartItems.filter(P=>P==r).length,Xo(n,e)}),g.addEventListener("click",()=>{const M=a.getAttribute("data-ingredient");e.cartItems.indexOf(M)!=-1&&(e.soundEffects["audio/click1.ogg"].play(),e.cartItems.splice(e.cartItems.indexOf(M),1),f.innerHTML=e.cartItems.filter(P=>P==r).length,Xo(n,e))}),a.appendChild(s),a.appendChild(p),a.appendChild(x),a.appendChild(g),a.appendChild(y),t.appendChild(a)}Xo(n,e)}function Xo(n,e){jo=0,e.cartItems.forEach(t=>{const i=e.ingredientInfo[t];jo+=i.cost}),document.getElementById("total-amount-value").innerHTML=jo}function CT(n,e){if(e.sellingSkeleton.marketMenuOpen)return;const t=document.getElementById("market-container");t.style.display="block",RT(n,e),e.soundEffects["audio/drawKnife2.ogg"].play();const i=document.getElementById("market-panel");Ne.to(i,{x:0,duration:.8,onComplete:()=>{e.sellingSkeleton.marketMenuOpen=!0}})}function Uu(n,e){if(!e.sellingSkeleton.marketMenuOpen)return;e.sellingSkeleton.marketMenuOpen=!1,e.cartItems=[],e.soundEffects["audio/drawKnife2.ogg"].play();const t=document.getElementById("market-panel");Ne.to(t,{x:1024,duration:.8,onComplete:()=>{const i=document.getElementById("market-container");i.style.display="none"}})}const Dt="spookonomics-v1",Nu=new gM;let K,Ii,Li,Ct,Di,hr,Ui,nn,Fn;const el=[],rn={},A={},Wr=1,Si=2,dr=3,PT=[{position:new N(-3.5,1.5,-3.5),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]},{position:new N(-4.5,1.5,-3.5),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]},{position:new N(-4.5,0,-3),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]},{position:new N(-3.3,3,-3.5),motionPath:[{x:-3,y:1.3,z:-3.5},{x:-1.5,y:2,z:0},{x:-.5,y:2,z:0},{x:0,y:.5,z:0}]}],Pm=[{position:new N(-12.5,2.75,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]},{position:new N(-11.5,2.75,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]},{position:new N(-8.5,2.75,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]},{position:new N(-7.5,2.75,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]},{position:new N(-8.5,1.25,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]},{position:new N(-7.5,1.25,-3.25),motionPath:[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}]}],Im=[{position:new N(-12.9,.1,3)},{position:new N(-13.1,.1,4)},{position:new N(-12.7,.1,5)},{position:new N(-13.1,.1,6)},{position:new N(-12.9,.1,7)},{position:new N(-13,.1,8)}],Ba=[],Lm=[],tl=[],yn=[],il=15;async function IT(n,e){if(!e.potionToBrew){e.soundEffects["audio/witch_cackle1.ogg"].play();return}const t=[...e.ingredientInventory];if(t.remove(e.selectedIngredients[0]),t.remove(e.selectedIngredients[1]),e.ingredientInventory.length-t.length<2){e.soundEffects["audio/witch_cackle1.ogg"].play();return}e.cauldron.isBrewing=!0,Gr(n,e),e.brewWitch.stir=!0,e.brewWitch.bounce=!0,e.spoon.visible=!0,e.selectedIngredients.forEach(r=>{el.find(o=>o.getName()==r).beginBrew()}),e.bottle1=await vt(n,e.potionToBrew.model),e.bottle1.position.y=-1.5,n.scene.add(e.bottle1),e.soundEffects["audio/click1.ogg"].play();const i=e.potionToBrew.color;e.cauldronUniforms.uNextPotionColor.value=new ke(i.r,i.g,i.b),e.cauldronUniforms.uBlendTime.value=0,setTimeout(()=>{e.soundEffects["audio/bubbling.mp3"].play(),e.bubbleParticles.visible=!0,Ne.to(e.cauldronUniforms.uBlendTime,{value:1,duration:4.5,onComplete:()=>{e.cauldronUniforms.uPotionColor.value=e.cauldronUniforms.uNextPotionColor.value,e.cauldronUniforms.uBlendTime.value=0}})},900),setTimeout(()=>{ka(e.potionInventory,"potion-inventory",e.potionToBrew.name),Fa(e.ingredientInventory,"ingredient-inventory",e.selectedIngredients[0]),Fa(e.ingredientInventory,"ingredient-inventory",e.selectedIngredients[1]),e.potionToBrew=null,e.selectedIngredients=[],e.bottle1.position.set(0,-1.5,0),e.soundEffects["audio/bubbling.mp3"].fade(1,0,300).on("fade",()=>{e.soundEffects["audio/bubbling.mp3"].stop(),e.soundEffects["audio/bubbling.mp3"].volume(.5)}),e.brewWitch.stir=!1,e.brewWitch.bounce=!1,e.spoon.visible=!1,e.bubbleParticles.visible=!1,Cu(n,e),Ne.to(e.bottle1.position,{duration:3,y:1.5,ease:"elastic",onComplete:()=>{setTimeout(()=>{n.scene.remove(e.bottle1),e.cauldron.isBrewing=!1},1e3)}})},5e3)}async function LT(n,e){const t=Im[A.customers.length].position,i=Math.floor(Math.random()*3);let r;switch(i){case 0:r=new Lu(K,"characters/assembled_character_1.gltf.glb",n,new N(3.5,3.5,3.5),t,Math.PI,function(o){this.object3d.position.y=.0625*Math.sin(2*o)+.5});break;case 1:r=new Lu(K,"characters/character_skeleton_minion.gltf",n,new N(1,1,1),t,Math.PI,function(o){this.object3d.scale.x=1+.03125*Math.sin(11.8*o),this.object3d.scale.y=1+-.03125*Math.sin(11.8*o),this.object3d.scale.z=1+.03125*Math.sin(11.8*o)});break;case 2:r=new Lu(K,"characters/ghost_1.gltf.glb",n,new N(3.5,3.5,3.5),t,Math.PI,function(o){this.object3d.position.y=.0625*Math.sin(2.2*o)+.5});break}return await r.init(e),r}function DT(n){n.shopTutorial2.alreadySeen||(n.shopInactivityHandle=setTimeout(()=>{Ne.to(n.shopTutorial2.material,{duration:1.5,opacity:1,onStart:()=>{n.shopTutorial2.castShadow=!0}})},5e3))}async function UT(n,e){if(e.potionStocked.length<1){e.soundEffects["audio/witch_cackle1.ogg"].play();return}e.soundEffects["audio/click1.ogg"].play(),e.isSellingPotions=!0,DT(e);let t=[];t.push(...e.potionStocked),t.push(...e.potionInventory),t.push(...e.potionInfo.map(r=>r.name)),t.shuffle();let i=Math.min(t.length,Math.floor(Math.random()*3)+3);for(let r=0;r<i;r++){const o=t.shift(),a=e.potionInfo.find(s=>s.name==o);e.customers.push(await LT(a,r))}setTimeout(()=>{e.soundEffects["audio/store-entrance-bell.ogg"].play()},500),e.customers[0].showDesire(),Oa(n,e)}async function nl(){let n=0;for(let e=0;e<Pm.length;e++){A.displayedPotions[e]&&(K.entities.remove(A.displayedPotions[e]),K.scene.remove(A.displayedPotions[e]),A.displayedPotions[e]=null);const t=A.potionInfo.find(r=>A.potionStocked[e]==r.name);if(!t)continue;const i=await vt(K,t.model);i.position.copy(Pm[n++].position),i.potionData=t,A.displayedPotions[e]=i,K.entities.push(i),K.scene.add(i)}}function ka(n,e,t){localStorage.getItem(`${Dt}-${e}`)?n.push(t):n=[t],localStorage.setItem(`${Dt}-${e}`,JSON.stringify(n))}function rl(n,e){let t=parseInt(localStorage.getItem(`${Dt}-${n}`))??0;return t+=e,localStorage.setItem(`${Dt}-${n}`,t),t}function Fa(n,e,t){localStorage.getItem(`${Dt}-${e}`)?n.remove(t):n=[],localStorage.setItem(`${Dt}-${e}`,JSON.stringify(n))}function Dm(n){localStorage.removeItem(`${Dt}-potion-inventory`),localStorage.removeItem(`${Dt}-potion-stocked`),n.potionInventory=[],localStorage.setItem(`${Dt}-potion-inventory`,JSON.stringify(n.potionInventory)),n.potionStocked=[],localStorage.setItem(`${Dt}-potion-stocked`,JSON.stringify(n.potionStocked)),n.currency=100,localStorage.setItem(`${Dt}-currency`,n.currency),n.currentDay=1,localStorage.setItem(`${Dt}-currentday`,n.currentDay),n.cartItems=[],n.ingredientInventory=["mushroom","mushroom","pumpkin","tomato","tomato","lettuce","lettuce"],localStorage.setItem(`${Dt}-ingredient-inventory`,JSON.stringify(n.ingredientInventory)),Vr(K,n)}function Um(n){let e=localStorage.getItem(`${Dt}-potion-inventory`);e?(n.potionInventory=JSON.parse(e),n.potionInventory.sort()):(localStorage.setItem(`${Dt}-potion-inventory`,JSON.stringify([])),n.potionInventory=[]);let t=localStorage.getItem(`${Dt}-potion-stocked`);t?(n.potionStocked=JSON.parse(t),n.potionStocked.sort()):(localStorage.setItem(`${Dt}-potion-stocked`,JSON.stringify([])),n.potionStocked=[]),n.currency=localStorage.getItem(`${Dt}-currency`),n.currency||(localStorage.setItem(`${Dt}-currency`,100),n.currency=100),n.currentDay=localStorage.getItem(`${Dt}-currentday`),n.currentDay||(localStorage.setItem(`${Dt}-currentday`,1),n.currentDay=1);let i=localStorage.getItem(`${Dt}-ingredient-inventory`);i?(n.ingredientInventory=JSON.parse(i),n.ingredientInventory.sort()):(localStorage.setItem(`${Dt}-ingredient-inventory`,JSON.stringify([])),n.ingredientInventory=["mushroom","mushroom","pumpkin","tomato","tomato","lettuce","lettuce"])}function NT(n,e){let t=0;e.cartItems.forEach(i=>{t+=e.ingredientInfo[i].cost,ka(e.ingredientInventory,"ingredient-inventory",i)}),e.currency=rl("currency",-t),t>0&&e.soundEffects["audio/cash-register.ogg"].play(),Vr(n,e),Uu(n,e)}async function OT(n){K=n,Um(A),A.currentRoom=2,A.soundEffects=rn,A.selectedIngredients=[],A.cartItems=[],A.cameraPositions=[{camera:new N(-15,5,7),focus:new N(-13,.1,0)},{camera:new N(1,5,7),focus:new N(0,.1,0)},{camera:new N(12,5,7),focus:new N(18,.1,0)},{camera:new N(1.37,2.41,3.77),focus:new N(-1.15,.79,-.19)}],["audio/click1.ogg","audio/sinkWater1.ogg","audio/doorOpen_1.ogg","audio/doorClose_4.ogg","audio/drawKnife2.ogg","audio/witch_cackle1.ogg","audio/bubbling.mp3","audio/chest_close_creak.ogg","audio/chest_open_creak.ogg","audio/handleCoins.ogg","audio/impactGlass_medium_000.ogg","audio/impactGlass_medium_001.ogg","audio/impactGlass_medium_002.ogg","audio/impactGlass_medium_003.ogg","audio/impactGlass_medium_004.ogg","audio/impactWood_heavy_002.ogg","audio/impactWood_heavy_004.ogg","audio/impactSoft_medium_002.ogg","audio/impactSoft_medium_004.ogg","audio/cash-register.ogg","audio/store-entrance-bell.ogg"].forEach(S=>{rn[S]=new ur.Howl({src:[S],preload:!0})}),A.musicLoop=new ur.Howl({src:["audio/Vampires LOOP (All Instruments).ogg"],preload:!0,loop:!0,volume:.5}),rn["audio/doorClose_4.ogg"].volume(.5),rn["audio/doorOpen_1.ogg"].volume(.5),rn["audio/bubbling.mp3"].volume(.5),rn["audio/store-entrance-bell.ogg"].volume(.5);let e=new Gb(K);K.camera.position.copy(A.cameraPositions[3].camera),K.lookAtFocus=A.cameraPositions[3].focus.clone(),await Wb(K,"kloppenheim_02_puresky_1k.hdr"),K.scene.background=null,K.scene.fog=new Zu(0,12,20),(await e.load(pT)).forEach(S=>{K.scene.add(S)}),A.ingredientInfo=vT,A.potionInfo=yT,Object.values(A.ingredientInfo).forEach(S=>{el.push(new jb(S,K))});let t=0;el.forEach(async S=>{await S.spawn(PT[t++])}),A.candycorn=await vt(K,"models/candycorn.gltf"),A.candycorn.position.x=-4.5,A.candycorn.position.z=-3.5,K.scene.add(A.candycorn),A.pumpkin2=await vt(K,"models/pumpkin_orange.gltf"),K.entities.push(A.pumpkin2),A.pumpkin2.position.x=-10,A.pumpkin2.position.y=1,A.pumpkin2.position.z=.5,K.scene.add(A.pumpkin2),Ii=await vt(K,"models/pumpkin_orange_jackolantern.gltf"),K.entities.push(Ii),Ii.spin=0,Ii.position.set(3,.1,1),Ii.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),K.scene.add(Ii),Ui=await vt(K,"models/candle_thin.gltf.glb"),K.entities.push(Ui),Ui.position.x=0,Ui.position.y=1,Ui.position.z=-2.5,Ui.isLit=!1,K.scene.add(Ui),nn=await vt(K,"models/candle_thin_lit.gltf.glb"),K.entities.push(nn),nn.position.x=0,nn.position.y=1,nn.position.z=-2.5,nn.visible=!1,K.scene.add(nn),A.cauldronUniforms=Mr.merge([be.common,be.lights]),A.cauldronUniforms.uTime={value:0},A.cauldronUniforms.uPixelRatio={value:Math.min(window.devicePixelRatio,2)},A.cauldronUniforms.uBlendTime={value:0},A.cauldronUniforms.uPotionColor={value:new N(0,.8,.2)},A.cauldronUniforms.uNextPotionColor={value:new N(0,.8,.2)},A.cauldronUniforms.uTransparency={value:.8},A.cauldron=await vt(K,"models/simple_cauldron.gltf.glb");const i=A.cauldron.getObjectByName("Sphere015");i.material.side=Jt;const r=A.cauldron.getObjectByName("Sphere015_1"),o=new Pt({fragmentShader:Kb,vertexShader:Yb,uniforms:A.cauldronUniforms,transparent:!0,depthWrite:!1,side:Jt,lights:!0});r.material=o,K.entities.push(A.cauldron),A.cauldron.position.y=.1,K.scene.add(A.cauldron),A.brewTutorial1=Du("Click to Brew",{font:"86px Alice"}),A.brewTutorial1.position.z=2.4,A.brewTutorial1.position.y=.2,A.brewTutorial1.rotateOnAxis(new N(1,0,0),-Math.PI/2),A.brewTutorial1.alreadySeen=!1,A.brewTutorial1.material.opacity=0,A.brewTutorial1.castShadow=!1,K.scene.add(A.brewTutorial1),A.brewWitch=await vt(K,"characters/character_witch.gltf"),K.entities.push(A.brewWitch),A.brewWitch.position.x=1,A.brewWitch.position.y=.1,A.brewWitch.position.z=-1,A.brewWitch.stir=!1,A.brewWitch.bounce=!1,A.brewWitch.lookAt(A.cauldron.position),K.scene.add(A.brewWitch),A.shopWitch=await vt(K,"characters/character_witch.gltf"),K.entities.push(A.shopWitch),A.shopWitch.position.x=-13,A.shopWitch.position.y=.1,A.shopWitch.position.z=-2,K.scene.add(A.shopWitch),A.marketWitch=await vt(K,"characters/character_witch.gltf"),K.entities.push(A.marketWitch),A.marketWitch.position.x=20,A.marketWitch.position.y=.1,A.marketWitch.position.z=2.5,A.marketWitch.rotateOnAxis(ct.DEFAULT_UP,Math.PI),K.scene.add(A.marketWitch),A.spoon=await vt(K,"models/spoon.gltf"),K.entities.push(A.spoon),A.spoon.rotateOnAxis(new N(1,0,0),Math.PI),A.spoon.position.y=1.25,A.spoon.visible=!1,K.scene.add(A.spoon),Fn=await vt(K,"models/book_grey.gltf.glb"),K.entities.push(Fn),Fn.rotateOnAxis(ct.DEFAULT_UP,Math.PI),Fn.position.x=4.6,Fn.position.y=1.9,Fn.position.z=-3.9,K.scene.add(Fn);const a=new Ju(.1,24,24),s=o;A.bubbleParticles=new pc(a,s,il),A.bubbleParticles.instanceMatrix.setUsage(s_),A.bubbleParticles.visible=!1,K.scene.add(A.bubbleParticles);const c=new Qe;for(let S=0;S<il;S++)Ba[S]=new N(.5*(Math.random()-.5),.5,.5*(Math.random()-.5)),tl[S]=7-S*.5,yn[S]=.2,Lm[S]=new N(0,.01,0);const u=new bi,p=new N(1,1,1);for(let S=0;S<il;S++){u.setFromAxisAngle(ct.DEFAULT_UP,0);const E=p.set(yn[S],yn[S],yn[S]);c.compose(Ba[S],u,E),A.bubbleParticles.setMatrixAt(S,c)}Li=await vt(K,"models/wall_doorway.glb"),Li.position.set(-6,0,-2),Li.castShadow=!1,Li.traverse(S=>{S.isMesh&&(S.castShadow=!1)}),Li.rotateOnAxis(ct.DEFAULT_UP,Math.PI/2),Li.isOpen=!1,Li.isMoving=!1,K.entities.push(Li),K.scene.add(Li),Di=await vt(K,"models/wall_doorway.glb"),Di.position.set(6,0,2),Di.castShadow=!1,Di.traverse(S=>{S.isMesh&&(S.castShadow=!1)}),Di.rotateOnAxis(ct.DEFAULT_UP,Math.PI/2),Di.isOpen=!1,Di.isMoving=!1,K.entities.push(Di),K.scene.add(Di),A.displayedPotions=[],nl(),hr=await vt(K,"models/lollipop_green.gltf"),hr.position.x=-11.5,hr.position.y=1.28,hr.position.z=-3.4,hr.rotateOnAxis(new N(1,0,0),Math.PI/2),hr.rotateOnAxis(new N(0,0,1),Math.PI/2+-.3),K.entities.push(hr),K.scene.add(hr),A.chest=await vt(K,"models/chest_large.glb"),A.chest.scale.set(.5,.5,.5),A.chest.position.x=-15.5,A.chest.position.y=1,A.chest.position.z=0,A.chest.rotateOnAxis(ct.DEFAULT_UP,Math.PI/4),K.entities.push(A.chest),K.scene.add(A.chest),A.shopTutorial1=Du("Click to Sell",{font:"100px Alice"}),A.shopTutorial1.position.x=-15.5,A.shopTutorial1.position.z=.2,A.shopTutorial1.position.y=1.8,A.shopTutorial1.alreadySeen=!1,A.shopTutorial1.scale.set(.6,.6,.6),A.shopTutorial1.material.opacity=0,A.shopTutorial1.castShadow=!1,K.scene.add(A.shopTutorial1),A.shopTutorial2=Du("Pick the correct potion",{font:"72px Alice"}),A.shopTutorial2.position.x=-10,A.shopTutorial2.position.z=-3.4,A.shopTutorial2.position.y=1.5,A.shopTutorial2.alreadySeen=!1,A.shopTutorial2.scale.set(1,1,1),A.shopTutorial2.material.opacity=0,A.shopTutorial2.castShadow=!1,K.scene.add(A.shopTutorial2),A.coin=await vt(K,"models/coin.gltf.glb"),A.coin.position.x=-12,A.coin.position.y=1.1,A.coin.position.z=0,K.entities.push(A.coin),K.scene.add(A.coin),A.customers=[],A.sellingSkeleton=await vt(K,"characters/character_skeleton_mage.gltf"),A.sellingSkeleton.position.x=20,A.sellingSkeleton.position.y=.1,A.sellingSkeleton.position.z=-1,A.sellingSkeleton.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),K.entities.push(A.sellingSkeleton),K.scene.add(A.sellingSkeleton),A.sign=await vt(K,"models/sign_left.gltf"),A.sign.position.x=14,A.sign.position.y=.1,A.sign.position.z=2,K.entities.push(A.sign),K.scene.add(A.sign),A.mushroomCrate=await vt(K,"models/crate_mushrooms.gltf"),A.mushroomCrate.scale.set(.5,.5,.5),A.mushroomCrate.position.x=19.5,A.mushroomCrate.position.z=.5,A.mushroomCrate.rotateOnAxis(ct.DEFAULT_UP,Math.PI/4),K.entities.push(A.mushroomCrate),K.scene.add(A.mushroomCrate),A.tomatoCrate=await vt(K,"models/crate_tomatoes.gltf"),A.tomatoCrate.scale.set(.5,.5,.5),A.tomatoCrate.position.x=21,K.entities.push(A.tomatoCrate),K.scene.add(A.tomatoCrate),A.lettuceCrate=await vt(K,"models/crate_lettuce.gltf"),A.lettuceCrate.scale.set(.5,.5,.5),A.lettuceCrate.position.x=18.5,A.lettuceCrate.position.z=-.5,K.entities.push(A.lettuceCrate),K.scene.add(A.lettuceCrate);const l=await vt(K,"models/coffin_decorated.gltf");l.position.x=23,l.position.z=6,l.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),K.scene.add(l);const h=await vt(K,"models/candy_orange_A.gltf");h.position.x=21,h.position.y=.25,h.position.z=6,h.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/4),K.scene.add(h);const d=await vt(K,"models/candy_bucket_B_decorated.gltf");d.position.x=21.5,d.position.y=.1,d.position.z=5.5,d.rotateOnAxis(ct.DEFAULT_UP,-Math.PI/2),K.scene.add(d),A.firefliesUniforms={uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}};const m=new Pt({fragmentShader:qb,vertexShader:Xb,uniforms:A.firefliesUniforms,transparent:!0,depthWrite:!1,blending:Jo}),_=new Ni,g=50,f=new Float32Array(g*3),x=new Float32Array(g);for(let S=0;S<g;S++)f[S*3+0]=24*(Math.random()-.5)+18,f[S*3+1]=4*Math.random()+2,f[S*3+2]=16*(Math.random()-.5),x[S]=.8*Math.random()+1.2;_.setAttribute("position",new Zt(f,3)),_.setAttribute("aScale",new Zt(x,1));const y=new Rp(_,m);K.scene.add(y);const M=new oM(16777215,1);K.scene.add(M);const P=24;Ct=new zp(16777215,.9),Ct.position.set(8,10,6),Ct.castShadow=!0,Ct.shadow.camera.left=-P,Ct.shadow.camera.right=P,Ct.shadow.camera.top=-P,Ct.shadow.camera.bottom=P,Ct.shadow.camera.far=28,Ct.shadow.mapSize.width=Math.min(K.renderer.capabilities.maxTextureSize,2048),Ct.shadow.mapSize.height=Math.min(K.renderer.capabilities.maxTextureSize,2048),Ct.shadow.bias=-.005,Ct.shadow.radius=6,Ct.cameraOffset=new N,Ct.cameraOffset.copy(Ct.position),Ct.cameraOffset.sub(new N(0,0,0)),Ct.target=K.camera,Ct.update=function(){const S=new N;S.copy(Ct.cameraOffset).add(K.camera.position),Ct.position.set(S.x,S.y,S.z),Ct.shadow&&Ct.shadow.camera.position.set(S.x,S.y,S.z)},K.scene.add(Ct),oT(K,A),nT(K,A),tT(),Zb(K,A),sT(K,A),cT(K,A),AT(K,A),TT(K,A),Vr(K,A),A.beginBrew=()=>{IT(K,A)},A.beginSell=()=>{UT(K,A)},A.buyIngredients=()=>{NT(K,A)},A.adjustMasterVolume=S=>{ur.Howler.volume(S/100)},A.adjustMusicVolume=S=>{A.musicLoop.volume(S/100)}}function BT(n){let e=n.clock.getElapsedTime();el.forEach(a=>{a.wobble()}),A.candycorn.position.y=.125*Math.sin(4.1*e)+3,A.candycorn.rotateOnAxis(ct.DEFAULT_UP,-.02),Ct.update(),Nu.setFromCamera(n.mousePosition,n.camera),ur.Howler.pos(n.camera.position.x,n.camera.position.y,n.camera.position.z),ur.Howler.orientation(n.camera.position.x,n.camera.position.y,n.camera.position.z,0,1,0);const t=new bi,i=new N(1,1,1),r=new Qe;for(let a=0;a<il;a++){Ba[a].add(Lm[a]),yn[a]=Math.min(yn[a]+.01,1),tl[a]-=.1,tl[a]<=0&&(tl[a]=7,Ba[a].set(.5*(Math.random()-.5),.5,.5*(Math.random()-.5)),yn[a]=.2);const s=i.set(yn[a],yn[a],yn[a]);r.compose(Ba[a],t,s),A.bubbleParticles.setMatrixAt(a,r)}A.bubbleParticles.instanceMatrix.needsUpdate=!0,A.brewWitch.stir&&(A.spoon.position.x=.125*Math.sin(4*e),A.spoon.position.z=.125*Math.cos(4*e)),A.brewWitch.bounce?(A.brewWitch.scale.x=1+.03125*Math.sin(12*e),A.brewWitch.scale.y=1+-.03125*Math.sin(12*e),A.brewWitch.scale.z=1+.03125*Math.sin(12*e)):(A.brewWitch.scale.x=1,A.brewWitch.scale.y=1,A.brewWitch.scale.z=1),Ii.spin>0&&(Ii.spin-=.05,Ii.rotateOnAxis(ct.DEFAULT_UP,-.1),Ii.spin<0&&(Ii.spin=0)),A.sellingSkeleton.scale.x=1+.03125*Math.sin(12*e),A.sellingSkeleton.scale.y=1+-.03125*Math.sin(12*e),A.sellingSkeleton.scale.z=1+.03125*Math.sin(12*e),A.firefliesUniforms.uTime.value=e,A.cauldronUniforms.uTime.value=e,A.customers.forEach(a=>{a.update(e)}),Ui.position.y=.625*Math.sin(.5*e)+1.3,nn.position.y=.625*Math.sin(.5*e)+1.3;let o=Nu.intersectObjects(n.entities.filter(a=>a.visible));n.outlinePass.selectedObjects=[],document.body.style.cursor="default",o.length>0&&(document.body.style.cursor="pointer",!A.chest.isStocking&&!A.isSellingPotions&&!A.cauldron.isBrewing?Nm(o,[A.cauldron,A.shopWitch,A.sellingSkeleton]):A.isSellingPotions&&Nm(o,A.displayedPotions))}function Nm(n,e){n.forEach(t=>{e.forEach(i=>{if(kt(i,t.object)){K.outlinePass.selectedObjects=[i];return}})})}function kt(n,e){return n==e?!0:e.parent!=null?kt(n,e.parent):!1}function kT(){let n=Nu.intersectObjects(K.entities.filter(e=>e.visible));n.length>0&&n.every(e=>{switch(A.currentRoom){case Wr:if(kt(A.chest,e.object))return A.isSellingPotions||(A.shopInactivityHandle&&(clearTimeout(A.shopInactivityHandle),A.shopInactivityHandle=0),A.chest.isStocking?Oa(K,A):(Rm(K,A),A.shopTutorial1.material.opacity>0&&Ne.to(A.shopTutorial1.material,{duration:1.5,opacity:0,onComplete:()=>{A.shopTutorial1.castShadow=!1,A.shopTutorial1.alreadySeen=!0}}))),!1;if(kt(A.shopWitch,e.object))return A.isSellingPotions||(A.shopInactivityHandle&&(clearTimeout(A.shopInactivityHandle),A.shopInactivityHandle=0),A.chest.isStocking?Oa(K,A):(Rm(K,A),A.shopTutorial1.material.opacity>0&&Ne.to(A.shopTutorial1.material,{duration:1.5,opacity:0,onComplete:()=>{A.shopTutorial1.castShadow=!1,A.shopTutorial1.alreadySeen=!0}}))),!1;if(kt(A.coin,e.object)){let t=[{x:-12,y:1.1,z:1},{x:-12,y:2,z:2},{x:-15.5,y:2,z:2},{x:-15.5,y:1.2,z:0}];return Ne.to(A.coin.position,{duration:3.5,motionPath:t,onComplete:()=>{A.soundEffects["audio/handleCoins.ogg"].play(),zT(A.chest,()=>{A.coin.scale.set(0,0,0),A.coin.position.set(-12,1.1,0),Ne.to(A.coin.scale,{ease:"elastic",duration:.7,x:1,y:1,z:1})})}}),setTimeout(()=>{FT(A.chest)},700),!1}if(A.displayedPotions.forEach(t=>{if(kt(t,e.object))if(A.isSellingPotions)if(A.sellInactivityHandle&&(clearTimeout(A.sellInactivityHandle),A.sellInactivityHandle=0),A.customers[0].isMatchingPotion(t.potionData)){A.shopTutorial2.material.opacity>0&&Ne.to(A.shopTutorial2.material,{duration:1.5,opacity:0,onComplete:()=>{A.shopTutorial2.castShadow=!1,A.shopTutorial2.alreadySeen=!0}});const i=A.customers[0];i.hideDesire();const r=[{x:-11.5,y:2.75,z:-3.25},{x:-12,y:2,z:-2},{x:-13,y:.75,z:2.5}];Ne.to(t.position,{duration:2,motionPath:r,onComplete:()=>{Fa(A.potionStocked,"potion-stocked",t.potionData.name),nl(),i.acceptPotion(),A.soundEffects["audio/cash-register.ogg"].play(),A.currency=rl("currency",t.potionData.value),Vr(K,A),Ou()}})}else Om(),Ne.fromTo(t.rotation,{duration:.1,z:.2},{duration:.1,z:0}),A.customers[0].rejectPotion(),A.customers[0].rejectCount>=3&&(A.customers[0].showSad(),Ou());else Om(),Ne.fromTo(t.rotation,{duration:.1,z:.2},{duration:.1,z:0})}),kt(A.pumpkin2,e.object))return A.pumpkin2.isMoving?void 0:(A.pumpkin2.isMoving=!0,Ne.to(A.pumpkin2.position,{duration:2,y:3,onComplete:()=>{setTimeout(()=>{A.soundEffects["audio/impactWood_heavy_002.ogg"].play()},400),setTimeout(()=>{A.soundEffects["audio/impactSoft_medium_002.ogg"].play()},800),Ne.to(A.pumpkin2.position,{duration:1,y:1,ease:"bounce",onComplete:()=>{A.pumpkin2.isMoving=!1}})}}),!1);break;case Si:if(kt(Ii,e.object))return rn["audio/drawKnife2.ogg"].play(),Ii.spin+=Math.PI,!1;if(kt(Fn,e.object)){let t=[{x:4.6,y:1.9,z:0},{x:4.6,y:1.9,z:-3.9}];return Ne.to(Fn.position,{duration:6,motionPath:t,onComplete:()=>{}}),!1}if(kt(A.brewWitch,e.object))return A.cauldron.isBrewing||(A.brewInactivityHandle&&(clearTimeout(A.brewInactivityHandle),A.brewInactivityHandle=0),A.cauldron.brewMenuOpen?Gr(K,A):(Am(K,A),A.brewTutorial1.material.opacity>0&&Ne.to(A.brewTutorial1.material,{duration:1.5,opacity:0,onComplete:()=>{A.brewTutorial1.castShadow=!1,A.brewTutorial1.alreadySeen=!0}}))),!1;if(kt(A.cauldron,e.object))return A.cauldron.isBrewing||(A.brewInactivityHandle&&(clearTimeout(A.brewInactivityHandle),A.brewInactivityHandle=0),A.cauldron.brewMenuOpen?Gr(K,A):(Am(K,A),A.brewTutorial1.material.opacity>0&&Ne.to(A.brewTutorial1.material,{duration:1.5,opacity:0,onComplete:()=>{A.brewTutorial1.castShadow=!1,A.brewTutorial1.alreadySeen=!0}}))),!1;if(kt(Ui,e.object))return Ui.isLit=!0,nn.visible=!0,Ui.visible=!1,!1;if(kt(nn,e.object))return Ui.isLit=!1,nn.visible=!1,Ui.visible=!0,!1;break;case dr:if(kt(A.sign,e.object))return Js(K,A),!1;if(kt(A.mushroomCrate,e.object)||kt(A.lettuceCrate,e.object)||kt(A.tomatoCrate,e.object)||kt(A.sellingSkeleton,e.object)||kt(A.marketWitch,e.object))return A.sellingSkeleton.marketMenuOpen?Uu(K,A):CT(K,A),!1;break}if(kt(Li,e.object))return A.currentRoom==Si?Js(K,A):A.currentRoom==Wr&&Su(K,A),!1;if(kt(Di,e.object))return A.currentRoom==Si?Su(K,A):A.currentRoom==dr&&Js(K,A),!1})}function Ou(){const n=A.customers.shift();if(!n)return;const e=[{x:-11,y:.1,z:3},{x:-8,y:.1,z:3},{x:-4,y:.1,z:10}];setTimeout(()=>{A.soundEffects["audio/store-entrance-bell.ogg"].play()},3e3),Ne.to(n.object3d.position,{duration:8,motionPath:e,onComplete:()=>{K.scene.remove(n.object3d)}}),Ne.to(n.object3d.rotation,{duration:1,y:Math.PI,onComplete:()=>{},onUpdate:()=>{n.requestBillboard.lookAt(K.camera.position)}});for(let t=0;t<A.customers.length;t++){const i=A.customers[t],r=Im[t].position;Ne.to(i.object3d.position,{duration:1.5,x:r.x,y:r.y,z:r.z})}A.customers.length==0?(A.isSellingPotions=!1,A.currentDay=rl("currentday",1),Vr(K,A),A.currency>=1e3&&wT(K,A)):(A.customers[0].showDesire(),A.potionStocked.length<1&&(A.customers[0].rejectPotion(3),A.customers[0].showSad(),Ou()))}function Om(){setTimeout(()=>{let e=Math.floor(5*Math.random());A.soundEffects[`audio/impactGlass_medium_00${e}.ogg`].play()},50);let n=Math.floor(5*Math.random());A.soundEffects[`audio/impactGlass_medium_00${n}.ogg`].play()}function FT(n){let e=n.getObjectByName("chest_large_lid");n.isOpen||n.isMoving||(rn["audio/chest_open_creak.ogg"].play(),n.isMoving=!0,Ne.to(e.rotation,{duration:2.5,x:-(Math.PI/2)+Math.PI/8,ease:"elastic",onComplete:()=>{n.isOpen=!0,n.isMoving=!1}}))}function zT(n,e=()=>{}){let t=n.getObjectByName("chest_large_lid");n.isOpen&&(n.isMoving||(rn["audio/chest_close_creak.ogg"].play(),n.isMoving=!0,Ne.to(t.rotation,{duration:1.5,x:0,ease:"bounce",onComplete:()=>{n.isOpen=!1,n.isMoving=!1,e()}})))}function Bu(n){let e=n.getObjectByName("wall_doorway_door");n.isOpen||n.isMoving||(rn["audio/doorOpen_1.ogg"].play(),n.isMoving=!0,Ne.to(e.rotation,{duration:2.5,y:-Math.PI/2,ease:"elastic",onComplete:()=>{n.isOpen=!0,n.isMoving=!1}}))}function ku(n){let e=n.getObjectByName("wall_doorway_door");n.isOpen&&(n.isMoving||(rn["audio/doorClose_4.ogg"].play(),n.isMoving=!0,Ne.to(e.rotation,{duration:2.5,y:0,ease:"elastic",onComplete:()=>{n.isOpen=!1,n.isMoving=!1}})))}function HT(){Gr(K,A),Bu(Li);const n=A.cameraPositions[0];Ne.to(K.camera.position,{duration:2.5,x:n.camera.x,y:n.camera.y,z:n.camera.z,onComplete:()=>{ku(Li)}}),Ne.to(K.lookAtFocus,{duration:2.5,x:n.focus.x,y:n.focus.y,z:n.focus.z}),A.currentRoom=Wr,lT(A)}function VT(){let n=Li;A.currentRoom==dr&&(n=Di),Bu(n);const e=A.cameraPositions[1];Ne.to(K.camera.position,{duration:2.5,x:e.camera.x,y:e.camera.y,z:e.camera.z,onComplete:()=>{ku(n)}}),Ne.to(K.lookAtFocus,{duration:2.5,x:e.focus.x,y:e.focus.y,z:e.focus.z}),A.currentRoom=Si,Em(A)}function GT(){Gr(K,A),Bu(Di);const n=A.cameraPositions[2];Ne.to(K.camera.position,{duration:2.5,x:n.camera.x,y:n.camera.y,z:n.camera.z,onComplete:()=>{ku(Di)}}),Ne.to(K.lookAtFocus,{duration:2.5,x:n.focus.x,y:n.focus.y,z:n.focus.z}),A.currentRoom=dr}function pr(n){if(n!=A.currentRoom)switch(n){case Wr:HT();break;case Si:VT();break;case dr:GT();break}}let xn=[];function WT(n){K.keyboard.Digit1&&A.currentRoom==Si&&(pr(Wr),xn=[]),K.keyboard.Digit2&&A.currentRoom!=Si&&(pr(Si),xn=[]),K.keyboard.Digit3&&A.currentRoom==Si&&(pr(dr),xn=[]),(K.keyboard.Digit9||K.keyboard.F9)&&(K.orbitControls.enabled=!K.orbitControls.enabled,K.orbitControls.enabled||(console.log("position:",K.camera.position),console.log("focus:",K.orbitControls.target),pr(A.currentRoom),xn=[])),K.keyboard.Escape&&(Bm(K,A),xn=[]),xn.push(n.replace("Key",""));const e=xn.join("").toLowerCase();e.includes("ghostbux")&&(xn=[],A.currency+=1e3,rl("currency",1e3),Vr(K,A),A.soundEffects["audio/witch_cackle1.ogg"].play()),e.includes("awesomesauce")&&(xn=[],A.potionInventory.push(...A.potionInfo.map(t=>t.name)),ka(A.potionInventory,"potion-inventory","spooksauce"),A.soundEffects["audio/witch_cackle1.ogg"].play()),e.includes("yeschef")&&(xn=[],A.soundEffects["audio/witch_cackle1.ogg"].play())}function Bm(n,e){ur.Howler.stop(),Gr(n,e),Oa(n,e),Qb(),wu(),eT(),Tu(),bu(),e.currentRoom=Si,n.camera.position.copy(e.cameraPositions[3].camera),n.lookAtFocus=e.cameraPositions[3].focus.clone(),e.brewTutorial1.material.opacity=0,e.brewTutorial1.castShadow=!1,e.brewTutorial1.alreadySeen=!1,e.shopTutorial1.material.opacity=0,e.shopTutorial1.castShadow=!1,e.shopTutorial1.alreadySeen=!1,e.shopTutorial2.material.opacity=0,e.shopTutorial2.castShadow=!1,e.shopTutorial2.alreadySeen=!1,nl(),Vr(n,e)}/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jT=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,XT=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,qT=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,YT=/(^[#\.][a-z]|[a-y][a-z])/i,KT=Math.PI/180,ZT=180/Math.PI,ol=Math.sin,al=Math.cos,Xi=Math.abs,zn=Math.sqrt,$T=Math.atan2,Fu=1e8,km=function(n){return typeof n=="string"},Fm=function(n){return typeof n=="number"},QT=function(n){return typeof n>"u"},JT={},ew={},sl=1e5,zm=function(n){return Math.round((n+Fu)%1*sl)/sl||(n<0?0:1)},ft=function(n){return Math.round(n*sl)/sl||0},Hm=function(n){return Math.round(n*1e10)/1e10||0},Vm=function(n,e,t,i){var r=n[e],o=i===1?6:zu(r,t,i);if((o||!i)&&o+t+2<r.length)return n.splice(e,0,r.slice(0,t+o+2)),r.splice(0,t+o),1},Gm=function(n,e,t){var i=n.length,r=~~(t*i);if(n[r]>e){for(;--r&&n[r]>e;);r<0&&(r=0)}else for(;n[++r]<e&&r<i;);return r<i?r:i-1},tw=function(n,e){var t=n.length;for(n.reverse();t--;)n[t].reversed||rw(n[t])},Wm=function(n,e){return e.totalLength=n.totalLength,n.samples?(e.samples=n.samples.slice(0),e.lookup=n.lookup.slice(0),e.minLength=n.minLength,e.resolution=n.resolution):n.totalPoints&&(e.totalPoints=n.totalPoints),e},iw=function(n,e){var t=n.length,i=n[t-1]||[],r=i.length;t&&e[0]===i[r-2]&&e[1]===i[r-1]&&(e=i.concat(e.slice(2)),t--),n[t]=e};function ll(n){n=km(n)&&YT.test(n)&&document.querySelector(n)||n;var e=n.getAttribute?n:0,t;return e&&(n=n.getAttribute("d"))?(e._gsPath||(e._gsPath={}),t=e._gsPath[n],t&&!t._dirty?t:e._gsPath[n]=cl(n)):n?km(n)?cl(n):Fm(n[0])?[n]:n:console.warn("Expecting a <path> element or an SVG path data string")}function nw(n){for(var e=[],t=0;t<n.length;t++)e[t]=Wm(n[t],n[t].slice(0));return Wm(n,e)}function rw(n){var e=0,t;for(n.reverse();e<n.length;e+=2)t=n[e],n[e]=n[e+1],n[e+1]=t;n.reversed=!n.reversed}var ow=function(n,e){var t=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(n.attributes),r=i.length,o;for(e=","+e+",";--r>-1;)o=i[r].nodeName.toLowerCase(),e.indexOf(","+o+",")<0&&t.setAttributeNS(null,o,i[r].nodeValue);return t},aw={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},sw=function(n,e){for(var t=e?e.split(","):[],i={},r=t.length;--r>-1;)i[t[r]]=+n.getAttribute(t[r])||0;return i};function lw(n,e){var t=n.tagName.toLowerCase(),i=.552284749831,r,o,a,s,c,u,p,l,h,d,m,_,g,f,x,y,M,P,S,E,I,b;return t==="path"||!n.getBBox?n:(u=ow(n,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),b=sw(n,aw[t]),t==="rect"?(s=b.rx,c=b.ry||s,o=b.x,a=b.y,d=b.width-s*2,m=b.height-c*2,s||c?(_=o+s*(1-i),g=o+s,f=g+d,x=f+s*i,y=f+s,M=a+c*(1-i),P=a+c,S=P+m,E=S+c*i,I=S+c,r="M"+y+","+P+" V"+S+" C"+[y,E,x,I,f,I,f-(f-g)/3,I,g+(f-g)/3,I,g,I,_,I,o,E,o,S,o,S-(S-P)/3,o,P+(S-P)/3,o,P,o,M,_,a,g,a,g+(f-g)/3,a,f-(f-g)/3,a,f,a,x,a,y,M,y,P].join(",")+"z"):r="M"+(o+d)+","+a+" v"+m+" h"+-d+" v"+-m+" h"+d+"z"):t==="circle"||t==="ellipse"?(t==="circle"?(s=c=b.r,l=s*i):(s=b.rx,c=b.ry,l=c*i),o=b.cx,a=b.cy,p=s*i,r="M"+(o+s)+","+a+" C"+[o+s,a+l,o+p,a+c,o,a+c,o-p,a+c,o-s,a+l,o-s,a,o-s,a-l,o-p,a-c,o,a-c,o+p,a-c,o+s,a-l,o+s,a].join(",")+"z"):t==="line"?r="M"+b.x1+","+b.y1+" L"+b.x2+","+b.y2:(t==="polyline"||t==="polygon")&&(h=(n.getAttribute("points")+"").match(XT)||[],o=h.shift(),a=h.shift(),r="M"+o+","+a+" L"+h.join(","),t==="polygon"&&(r+=","+o+","+a+"z")),u.setAttribute("d",Km(u._gsRawPath=cl(r))),e&&n.parentNode&&(n.parentNode.insertBefore(u,n),n.parentNode.removeChild(n)),u)}function jm(n,e,t){var i=n[e],r=n[e+2],o=n[e+4],a;return i+=(r-i)*t,r+=(o-r)*t,i+=(r-i)*t,a=r+(o+(n[e+6]-o)*t-r)*t-i,i=n[e+1],r=n[e+3],o=n[e+5],i+=(r-i)*t,r+=(o-r)*t,i+=(r-i)*t,ft($T(r+(o+(n[e+7]-o)*t-r)*t-i,a)*ZT)}function Xm(n,e,t){t=QT(t)?1:Hm(t)||0,e=Hm(e)||0;var i=Math.max(0,~~(Xi(t-e)-1e-8)),r=nw(n);if(e>t&&(e=1-e,t=1-t,tw(r),r.totalLength=0),e<0||t<0){var o=Math.abs(~~Math.min(e,t))+1;e+=o,t+=o}r.totalLength||jr(r);var a=t>1,s=qm(r,e,JT,!0),c=qm(r,t,ew),u=c.segment,p=s.segment,l=c.segIndex,h=s.segIndex,d=c.i,m=s.i,_=h===l,g=d===m&&_,f,x,y,M,P,S,E,I;if(a||i){for(f=l<h||_&&d<m||g&&c.t<s.t,Vm(r,h,m,s.t)&&(h++,f||(l++,g?(c.t=(c.t-s.t)/(1-s.t),d=0):_&&(d-=m))),Math.abs(1-(t-e))<1e-5?l=h-1:!c.t&&l?l--:Vm(r,l,d,c.t)&&f&&h++,s.t===1&&(h=(h+1)%r.length),P=[],S=r.length,E=1+S*i,I=h,E+=(S-h+l)%S,M=0;M<E;M++)iw(P,r[I++%S]);r=P}else if(y=c.t===1?6:zu(u,d,c.t),e!==t)for(x=zu(p,m,g?s.t/c.t:s.t),_&&(y+=x),u.splice(d+y+2),(x||m)&&p.splice(0,m+x),M=r.length;M--;)(M<h||M>l)&&r.splice(M,1);else u.angle=jm(u,d+y,0),d+=y,s=u[d],c=u[d+1],u.length=u.totalLength=0,u.totalPoints=r.totalPoints=8,u.push(s,c,s,c,s,c,s,c);return r.totalLength=0,r}function cw(n,e,t){e=e||0,n.samples||(n.samples=[],n.lookup=[]);var i=~~n.resolution||12,r=1/i,o=n.length,a=n[e],s=n[e+1],c=e?e/6*i:0,u=n.samples,p=n.lookup,l=(e?n.minLength:Fu)||Fu,h=u[c+t*i-1],d=e?u[c-1]:0,m,_,g,f,x,y,M,P,S,E,I,b,T,F,j,B,Y;for(u.length=p.length=0,_=e+2;_<o;_+=6){if(g=n[_+4]-a,f=n[_+2]-a,x=n[_]-a,P=n[_+5]-s,S=n[_+3]-s,E=n[_+1]-s,y=M=I=b=0,Xi(g)<.01&&Xi(P)<.01&&Xi(x)+Xi(E)<.01)n.length>8&&(n.splice(_,6),_-=6,o-=6);else for(m=1;m<=i;m++)F=r*m,T=1-F,y=M-(M=(F*F*g+3*T*(F*f+T*x))*F),I=b-(b=(F*F*P+3*T*(F*S+T*E))*F),B=zn(I*I+y*y),B<l&&(l=B),d+=B,u[c++]=d;a+=g,s+=P}if(h)for(h-=d;c<u.length;c++)u[c]+=h;if(u.length&&l){if(n.totalLength=Y=u[u.length-1]||0,n.minLength=l,Y/l<9999)for(B=j=0,m=0;m<Y;m+=l)p[B++]=u[j]<m?++j:j}else n.totalLength=u[0]=0;return e?d-u[e/2-1]:d}function jr(n,e){var t,i,r;for(r=t=i=0;r<n.length;r++)n[r].resolution=~~e||12,i+=n[r].length,t+=cw(n[r]);return n.totalPoints=i,n.totalLength=t,n}function zu(n,e,t){if(t<=0||t>=1)return 0;var i=n[e],r=n[e+1],o=n[e+2],a=n[e+3],s=n[e+4],c=n[e+5],u=n[e+6],p=n[e+7],l=i+(o-i)*t,h=o+(s-o)*t,d=r+(a-r)*t,m=a+(c-a)*t,_=l+(h-l)*t,g=d+(m-d)*t,f=s+(u-s)*t,x=c+(p-c)*t;return h+=(f-h)*t,m+=(x-m)*t,n.splice(e+2,4,ft(l),ft(d),ft(_),ft(g),ft(_+(h-_)*t),ft(g+(m-g)*t),ft(h),ft(m),ft(f),ft(x)),n.samples&&n.samples.splice(e/6*n.resolution|0,0,0,0,0,0,0,0),6}function qm(n,e,t,i){t=t||{},n.totalLength||jr(n),(e<0||e>1)&&(e=zm(e));var r=0,o=n[0],a,s,c,u,p,l,h;if(!e)h=l=r=0,o=n[0];else if(e===1)h=1,r=n.length-1,o=n[r],l=o.length-8;else{if(n.length>1){for(c=n.totalLength*e,p=l=0;(p+=n[l++].totalLength)<c;)r=l;o=n[r],u=p-o.totalLength,e=(c-u)/(p-u)||0}a=o.samples,s=o.resolution,c=o.totalLength*e,l=o.lookup.length?o.lookup[~~(c/o.minLength)]||0:Gm(a,c,e),u=l?a[l-1]:0,p=a[l],p<c&&(u=p,p=a[++l]),h=1/s*((c-u)/(p-u)+l%s),l=~~(l/s)*6,i&&h===1&&(l+6<o.length?(l+=6,h=0):r+1<n.length&&(l=h=0,o=n[++r]))}return t.t=h,t.i=l,t.path=n,t.segment=o,t.segIndex=r,t}function Ym(n,e,t,i){var r=n[0],o=i||{},a,s,c,u,p,l,h,d,m;if((e<0||e>1)&&(e=zm(e)),r.lookup||jr(n),n.length>1){for(c=n.totalLength*e,p=l=0;(p+=n[l++].totalLength)<c;)r=n[l];u=p-r.totalLength,e=(c-u)/(p-u)||0}return a=r.samples,s=r.resolution,c=r.totalLength*e,l=r.lookup.length?r.lookup[e<1?~~(c/r.minLength):r.lookup.length-1]||0:Gm(a,c,e),u=l?a[l-1]:0,p=a[l],p<c&&(u=p,p=a[++l]),h=1/s*((c-u)/(p-u)+l%s)||0,m=1-h,l=~~(l/s)*6,d=r[l],o.x=ft((h*h*(r[l+6]-d)+3*m*(h*(r[l+4]-d)+m*(r[l+2]-d)))*h+d),o.y=ft((h*h*(r[l+7]-(d=r[l+1]))+3*m*(h*(r[l+5]-d)+m*(r[l+3]-d)))*h+d),t&&(o.angle=r.totalLength?jm(r,l,h>=1?1-1e-9:h||1e-9):r.angle||0),o}function za(n,e,t,i,r,o,a){for(var s=n.length,c,u,p,l,h;--s>-1;)for(c=n[s],u=c.length,p=0;p<u;p+=2)l=c[p],h=c[p+1],c[p]=l*e+h*i+o,c[p+1]=l*t+h*r+a;return n._dirty=1,n}function uw(n,e,t,i,r,o,a,s,c){if(!(n===s&&e===c)){t=Xi(t),i=Xi(i);var u=r%360*KT,p=al(u),l=ol(u),h=Math.PI,d=h*2,m=(n-s)/2,_=(e-c)/2,g=p*m+l*_,f=-l*m+p*_,x=g*g,y=f*f,M=x/(t*t)+y/(i*i);M>1&&(t=zn(M)*t,i=zn(M)*i);var P=t*t,S=i*i,E=(P*S-P*y-S*x)/(P*y+S*x);E<0&&(E=0);var I=(o===a?-1:1)*zn(E),b=I*(t*f/i),T=I*-(i*g/t),F=(n+s)/2,j=(e+c)/2,B=F+(p*b-l*T),Y=j+(l*b+p*T),q=(g-b)/t,ie=(f-T)/i,ne=(-g-b)/t,Q=(-f-T)/i,se=q*q+ie*ie,de=(ie<0?-1:1)*Math.acos(q/zn(se)),Le=(q*Q-ie*ne<0?-1:1)*Math.acos((q*ne+ie*Q)/zn(se*(ne*ne+Q*Q)));isNaN(Le)&&(Le=h),!a&&Le>0?Le-=d:a&&Le<0&&(Le+=d),de%=d,Le%=d;var je=Math.ceil(Xi(Le)/(d/4)),Fe=[],te=Le/je,pe=4/3*ol(te/2)/(1+al(te/2)),Ce=p*t,xe=l*t,Je=l*-i,Ze=p*i,H;for(H=0;H<je;H++)r=de+H*te,g=al(r),f=ol(r),q=al(r+=te),ie=ol(r),Fe.push(g-pe*f,f+pe*g,q+pe*ie,ie-pe*q,q,ie);for(H=0;H<Fe.length;H+=2)g=Fe[H],f=Fe[H+1],Fe[H]=g*Ce+f*Je+B,Fe[H+1]=g*xe+f*Ze+Y;return Fe[H-2]=s,Fe[H-1]=c,Fe}}function cl(n){var e=(n+"").replace(qT,function(b){var T=+b;return T<1e-4&&T>-1e-4?0:T}).match(jT)||[],t=[],i=0,r=0,o=2/3,a=e.length,s=0,c="ERROR: malformed path: "+n,u,p,l,h,d,m,_,g,f,x,y,M,P,S,E,I=function(b,T,F,j){x=(F-b)/3,y=(j-T)/3,_.push(b+x,T+y,F-x,j-y,F,j)};if(!n||!isNaN(e[0])||isNaN(e[1]))return console.log(c),t;for(u=0;u<a;u++)if(P=d,isNaN(e[u])?(d=e[u].toUpperCase(),m=d!==e[u]):u--,l=+e[u+1],h=+e[u+2],m&&(l+=i,h+=r),u||(g=l,f=h),d==="M")_&&(_.length<8?t.length-=1:s+=_.length),i=g=l,r=f=h,_=[l,h],t.push(_),u+=2,d="L";else if(d==="C")_||(_=[0,0]),m||(i=r=0),_.push(l,h,i+e[u+3]*1,r+e[u+4]*1,i+=e[u+5]*1,r+=e[u+6]*1),u+=6;else if(d==="S")x=i,y=r,(P==="C"||P==="S")&&(x+=i-_[_.length-4],y+=r-_[_.length-3]),m||(i=r=0),_.push(x,y,l,h,i+=e[u+3]*1,r+=e[u+4]*1),u+=4;else if(d==="Q")x=i+(l-i)*o,y=r+(h-r)*o,m||(i=r=0),i+=e[u+3]*1,r+=e[u+4]*1,_.push(x,y,i+(l-i)*o,r+(h-r)*o,i,r),u+=4;else if(d==="T")x=i-_[_.length-4],y=r-_[_.length-3],_.push(i+x,r+y,l+(i+x*1.5-l)*o,h+(r+y*1.5-h)*o,i=l,r=h),u+=2;else if(d==="H")I(i,r,i=l,r),u+=1;else if(d==="V")I(i,r,i,r=l+(m?r-i:0)),u+=1;else if(d==="L"||d==="Z")d==="Z"&&(l=g,h=f,_.closed=!0),(d==="L"||Xi(i-l)>.5||Xi(r-h)>.5)&&(I(i,r,l,h),d==="L"&&(u+=2)),i=l,r=h;else if(d==="A"){if(S=e[u+4],E=e[u+5],x=e[u+6],y=e[u+7],p=7,S.length>1&&(S.length<3?(y=x,x=E,p--):(y=E,x=S.substr(2),p-=2),E=S.charAt(1),S=S.charAt(0)),M=uw(i,r,+e[u+1],+e[u+2],+e[u+3],+S,+E,(m?i:0)+x*1,(m?r:0)+y*1),u+=p,M)for(p=0;p<M.length;p++)_.push(M[p]);i=_[_.length-2],r=_[_.length-1]}else console.log(c);return u=_.length,u<6?(t.pop(),u=0):_[0]===_[u-2]&&_[1]===_[u-1]&&(_.closed=!0),t.totalPoints=s+u,t}function hw(n,e){e===void 0&&(e=1);for(var t=n[0],i=0,r=[t,i],o=2;o<n.length;o+=2)r.push(t,i,n[o],i=(n[o]-t)*e/2,t=n[o],-i);return r}function Hu(n,e){Xi(n[0]-n[2])<1e-4&&Xi(n[1]-n[3])<1e-4&&(n=n.slice(2));var t=n.length-2,i=+n[0],r=+n[1],o=+n[2],a=+n[3],s=[i,r,i,r],c=o-i,u=a-r,p=Math.abs(n[t]-i)<.001&&Math.abs(n[t+1]-r)<.001,l,h,d,m,_,g,f,x,y,M,P,S,E,I,b;for(p&&(n.push(o,a),o=i,a=r,i=n[t-2],r=n[t-1],n.unshift(i,r),t+=4),e=e||e===0?+e:1,d=2;d<t;d+=2)l=i,h=r,i=o,r=a,o=+n[d+2],a=+n[d+3],!(i===o&&r===a)&&(m=c,_=u,c=o-i,u=a-r,g=zn(m*m+_*_),f=zn(c*c+u*u),x=zn(Math.pow(c/f+m/g,2)+Math.pow(u/f+_/g,2)),y=(g+f)*e*.25/x,M=i-(i-l)*(g?y/g:0),P=i+(o-i)*(f?y/f:0),S=i-(M+((P-M)*(g*3/(g+f)+.5)/4||0)),E=r-(r-h)*(g?y/g:0),I=r+(a-r)*(f?y/f:0),b=r-(E+((I-E)*(g*3/(g+f)+.5)/4||0)),(i!==l||r!==h)&&s.push(ft(M+S),ft(E+b),ft(i),ft(r),ft(P+S),ft(I+b)));return i!==o||r!==a||s.length<4?s.push(ft(o),ft(a),ft(o),ft(a)):s.length-=2,s.length===2?s.push(i,r,i,r,i,r):p&&(s.splice(0,6),s.length=s.length-6),s}function Km(n){Fm(n[0])&&(n=[n]);var e="",t=n.length,i,r,o,a;for(r=0;r<t;r++){for(a=n[r],e+="M"+ft(a[0])+","+ft(a[1])+" C",i=a.length,o=2;o<i;o++)e+=ft(a[o++])+","+ft(a[o++])+" "+ft(a[o++])+","+ft(a[o++])+" "+ft(a[o++])+","+ft(a[o])+" ";a.closed&&(e+="z")}return e}/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hn,Xr,Vu,ul,Ha,hl,dl,Va,on="transform",Gu=on+"Origin",Zm,$m=function(n){var e=n.ownerDocument||n;for(!(on in n.style)&&("msTransform"in n.style)&&(on="msTransform",Gu=on+"Origin");e.parentNode&&(e=e.parentNode););if(Xr=window,dl=new Ga,e){Hn=e,Vu=e.documentElement,ul=e.body,Va=Hn.createElementNS("http://www.w3.org/2000/svg","g"),Va.style.transform="none";var t=e.createElement("div"),i=e.createElement("div"),r=e&&(e.body||e.firstElementChild);r&&r.appendChild&&(r.appendChild(t),t.appendChild(i),t.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),Zm=i.offsetParent!==t,r.removeChild(t))}return e},dw=function(n){for(var e,t;n&&n!==ul;)t=n._gsap,t&&t.uncache&&t.get(n,"x"),t&&!t.scaleX&&!t.scaleY&&t.renderTransform&&(t.scaleX=t.scaleY=1e-4,t.renderTransform(1,t),e?e.push(t):e=[t]),n=n.parentNode;return e},Qm=[],Jm=[],pw=function(){return Xr.pageYOffset||Hn.scrollTop||Vu.scrollTop||ul.scrollTop||0},fw=function(){return Xr.pageXOffset||Hn.scrollLeft||Vu.scrollLeft||ul.scrollLeft||0},Wu=function(n){return n.ownerSVGElement||((n.tagName+"").toLowerCase()==="svg"?n:null)},mw=function n(e){if(Xr.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return n(e)},ju=function n(e,t){if(e.parentNode&&(Hn||$m(e))){var i=Wu(e),r=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",o=i?t?"rect":"g":"div",a=t!==2?0:100,s=t===3?100:0,c="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",u=Hn.createElementNS?Hn.createElementNS(r.replace(/^https/,"http"),o):Hn.createElement(o);return t&&(i?(hl||(hl=n(e)),u.setAttribute("width",.01),u.setAttribute("height",.01),u.setAttribute("transform","translate("+a+","+s+")"),hl.appendChild(u)):(Ha||(Ha=n(e),Ha.style.cssText=c),u.style.cssText=c+"width:0.1px;height:0.1px;top:"+s+"px;left:"+a+"px",Ha.appendChild(u))),u}throw"Need document and parent."},gw=function(n){for(var e=new Ga,t=0;t<n.numberOfItems;t++)e.multiply(n.getItem(t).matrix);return e},_w=function(n){var e=n.getCTM(),t;return e||(t=n.style[on],n.style[on]="none",n.appendChild(Va),e=Va.getCTM(),n.removeChild(Va),t?n.style[on]=t:n.style.removeProperty(on.replace(/([A-Z])/g,"-$1").toLowerCase())),e||dl.clone()},vw=function(n,e){var t=Wu(n),i=n===t,r=t?Qm:Jm,o=n.parentNode,a,s,c,u,p,l;if(n===Xr)return n;if(r.length||r.push(ju(n,1),ju(n,2),ju(n,3)),a=t?hl:Ha,t)i?(c=_w(n),u=-c.e/c.a,p=-c.f/c.d,s=dl):n.getBBox?(c=n.getBBox(),s=n.transform?n.transform.baseVal:{},s=s.numberOfItems?s.numberOfItems>1?gw(s):s.getItem(0).matrix:dl,u=s.a*c.x+s.c*c.y,p=s.b*c.x+s.d*c.y):(s=new Ga,u=p=0),e&&n.tagName.toLowerCase()==="g"&&(u=p=0),(i?t:o).appendChild(a),a.setAttribute("transform","matrix("+s.a+","+s.b+","+s.c+","+s.d+","+(s.e+u)+","+(s.f+p)+")");else{if(u=p=0,Zm)for(s=n.offsetParent,c=n;c&&(c=c.parentNode)&&c!==s&&c.parentNode;)(Xr.getComputedStyle(c)[on]+"").length>4&&(u=c.offsetLeft,p=c.offsetTop,c=0);if(l=Xr.getComputedStyle(n),l.position!=="absolute"&&l.position!=="fixed")for(s=n.offsetParent;o&&o!==s;)u+=o.scrollLeft||0,p+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=n.offsetTop-p+"px",c.left=n.offsetLeft-u+"px",c[on]=l[on],c[Gu]=l[Gu],c.position=l.position==="fixed"?"fixed":"absolute",n.parentNode.appendChild(a)}return a},Xu=function(n,e,t,i,r,o,a){return n.a=e,n.b=t,n.c=i,n.d=r,n.e=o,n.f=a,n},Ga=function(){function n(t,i,r,o,a,s){t===void 0&&(t=1),i===void 0&&(i=0),r===void 0&&(r=0),o===void 0&&(o=1),a===void 0&&(a=0),s===void 0&&(s=0),Xu(this,t,i,r,o,a,s)}var e=n.prototype;return e.inverse=function(){var t=this.a,i=this.b,r=this.c,o=this.d,a=this.e,s=this.f,c=t*o-i*r||1e-10;return Xu(this,o/c,-i/c,-r/c,t/c,(r*s-o*a)/c,-(t*s-i*a)/c)},e.multiply=function(t){var i=this.a,r=this.b,o=this.c,a=this.d,s=this.e,c=this.f,u=t.a,p=t.c,l=t.b,h=t.d,d=t.e,m=t.f;return Xu(this,u*i+l*o,u*r+l*a,p*i+h*o,p*r+h*a,s+d*i+m*o,c+d*r+m*a)},e.clone=function(){return new n(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var i=this.a,r=this.b,o=this.c,a=this.d,s=this.e,c=this.f;return i===t.a&&r===t.b&&o===t.c&&a===t.d&&s===t.e&&c===t.f},e.apply=function(t,i){i===void 0&&(i={});var r=t.x,o=t.y,a=this.a,s=this.b,c=this.c,u=this.d,p=this.e,l=this.f;return i.x=r*a+o*c+p||0,i.y=r*s+o*u+l||0,i},n}();function qo(n,e,t,i){if(!n||!n.parentNode||(Hn||$m(n)).documentElement===n)return new Ga;var r=dw(n),o=Wu(n),a=o?Qm:Jm,s=vw(n,t),c=a[0].getBoundingClientRect(),u=a[1].getBoundingClientRect(),p=a[2].getBoundingClientRect(),l=s.parentNode,h=!i&&mw(n),d=new Ga((u.left-c.left)/100,(u.top-c.top)/100,(p.left-c.left)/100,(p.top-c.top)/100,c.left+(h?0:fw()),c.top+(h?0:pw()));if(l.removeChild(s),r)for(c=r.length;c--;)u=r[c],u.scaleX=u.scaleY=0,u.renderTransform(1,u);return e?d.inverse():d}/*!
 * MotionPathPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yw="x,translateX,left,marginLeft,xPercent".split(","),xw="y,translateY,top,marginTop,yPercent".split(","),Mw=Math.PI/180,qi,eg,Yo,qu,Yu,tg,Sw=function(){return qi||typeof window<"u"&&(qi=window.gsap)&&qi.registerPlugin&&qi},Wa=function(n,e,t,i){for(var r=e.length,o=i===2?0:i,a=0;a<r;a++)n[o]=parseFloat(e[a][t]),i===2&&(n[o+1]=0),o+=2;return n},Ko=function(n,e,t){return parseFloat(n._gsap.get(n,e,t||"px"))||0},ig=function(n){var e=n[0],t=n[1],i;for(i=2;i<n.length;i+=2)e=n[i]+=e,t=n[i+1]+=t},ng=function(n,e,t,i,r,o,a,s,c){if(a.type==="cubic")e=[e];else{a.fromCurrent!==!1&&e.unshift(Ko(t,i,s),r?Ko(t,r,c):0),a.relative&&ig(e);var u=r?Hu:hw;e=[u(e,a.curviness)]}return e=o(og(e,t,a)),pl(n,t,i,e,"x",s),r&&pl(n,t,r,e,"y",c),jr(e,a.resolution||(a.curviness===0?20:12))},bw=function(n){return n},Tw=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,rg=function(n,e,t){var i=qo(n),r=0,o=0,a;return(n.tagName+"").toLowerCase()==="svg"?(a=n.viewBox.baseVal,a.width||(a={width:+n.getAttribute("width"),height:+n.getAttribute("height")})):a=e&&n.getBBox&&n.getBBox(),e&&e!=="auto"&&(r=e.push?e[0]*(a?a.width:n.offsetWidth||0):e.x,o=e.push?e[1]*(a?a.height:n.offsetHeight||0):e.y),t.apply(r||o?i.apply({x:r,y:o}):{x:i.e,y:i.f})},Ku=function(n,e,t,i){var r=qo(n.parentNode,!0,!0),o=r.clone().multiply(qo(e)),a=rg(n,t,r),s=rg(e,i,r),c=s.x,u=s.y,p;return o.e=o.f=0,i==="auto"&&e.getTotalLength&&e.tagName.toLowerCase()==="path"&&(p=e.getAttribute("d").match(Tw)||[],p=o.apply({x:+p[0],y:+p[1]}),c+=p.x,u+=p.y),p&&(p=o.apply(e.getBBox()),c-=p.x,u-=p.y),o.e=c-a.x,o.f=u-a.y,o},og=function(n,e,t){var i=t.align,r=t.matrix,o=t.offsetX,a=t.offsetY,s=t.alignOrigin,c=n[0][0],u=n[0][1],p=Ko(e,"x"),l=Ko(e,"y"),h,d,m;return!n||!n.length?ll("M0,0L0,0"):(i&&(i==="self"||(h=qu(i)[0]||e)===e?za(n,1,0,0,1,p-c,l-u):(s&&s[2]!==!1?qi.set(e,{transformOrigin:s[0]*100+"% "+s[1]*100+"%"}):s=[Ko(e,"xPercent")/-100,Ko(e,"yPercent")/-100],d=Ku(e,h,s,"auto"),m=d.apply({x:c,y:u}),za(n,d.a,d.b,d.c,d.d,p+d.e-(m.x-d.e),l+d.f-(m.y-d.f)))),r?za(n,r.a,r.b,r.c,r.d,r.e,r.f):(o||a)&&za(n,1,0,0,1,o||0,a||0),n)},pl=function(n,e,t,i,r,o){var a=e._gsap,s=a.harness,c=s&&s.aliases&&s.aliases[t],u=c&&c.indexOf(",")<0?c:t,p=n._pt=new eg(n._pt,e,u,0,0,bw,0,a.set(e,u,n));p.u=Yo(a.get(e,u,o))||0,p.path=i,p.pp=r,n._props.push(u)},ww=function(n,e){return function(t){return n||e!==1?Xm(t,n,e):t}},ag={version:"3.12.5",name:"motionPath",register:function(n,e,t){qi=n,Yo=qi.utils.getUnit,qu=qi.utils.toArray,Yu=qi.core.getStyleSaver,tg=qi.core.reverting||function(){},eg=t},init:function(n,e,t){if(!qi)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof e=="object"&&!e.style)||!e.path)&&(e={path:e});var i=[],r=e,o=r.path,a=r.autoRotate,s=r.unitX,c=r.unitY,u=r.x,p=r.y,l=o[0],h=ww(e.start,"end"in e?e.end:1),d,m;if(this.rawPaths=i,this.target=n,this.tween=t,this.styles=Yu&&Yu(n,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=n._gsap.set(n,this.rProp,this),this.ru=Yo(n._gsap.get(n,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof l!="number"){for(m in l)!u&&~yw.indexOf(m)?u=m:!p&&~xw.indexOf(m)&&(p=m);u&&p?i.push(ng(this,Wa(Wa([],o,u,0),o,p,1),n,u,p,h,e,s||Yo(o[0][u]),c||Yo(o[0][p]))):u=p=0;for(m in l)m!==u&&m!==p&&i.push(ng(this,Wa([],o,m,2),n,m,0,h,e,Yo(o[0][m])))}else d=h(og(ll(e.path),n,e)),jr(d,e.resolution),i.push(d),pl(this,n,e.x||"x",d,"x",e.unitX||"px"),pl(this,n,e.y||"y",d,"y",e.unitY||"px")},render:function(n,e){var t=e.rawPaths,i=t.length,r=e._pt;if(e.tween._time||!tg()){for(n>1?n=1:n<0&&(n=0);i--;)Ym(t[i],n,!i&&e.rotate,t[i]);for(;r;)r.set(r.t,r.p,r.path[r.pp]+r.u,r.d,n),r=r._next;e.rotate&&e.rSet(e.target,e.rProp,t[0].angle*(e.radians?Mw:1)+e.rOffset+e.ru,e,n)}else e.styles.revert()},getLength:function(n){return jr(ll(n)).totalLength},sliceRawPath:Xm,getRawPath:ll,pointsToSegment:Hu,stringToRawPath:cl,rawPathToString:Km,transformRawPath:za,getGlobalMatrix:qo,getPositionOnPath:Ym,cacheRawPathMeasurements:jr,convertToPath:function(n,e){return qu(n).map(function(t){return lw(t,e!==!1)})},convertCoordinates:function(n,e,t){var i=qo(e,!0,!0).multiply(qo(n));return t?i.apply(t):i},getAlignMatrix:Ku,getRelativePosition:function(n,e,t,i){var r=Ku(n,e,t,i);return{x:r.e,y:r.f}},arrayToRawPath:function(n,e){e=e||{};var t=Wa(Wa([],n,e.x||"x",0),n,e.y||"y",1);return e.relative&&ig(t),[e.type==="cubic"?t:Hu(t,e.curviness)]}};Sw()&&qi.registerPlugin(ag),Ne.registerPlugin(ag),Vb.autoUnlock=!0;const ve={};ve.entities=[],ve.loadingManager=new Up,ve.gltfLoader=new NM(ve.loadingManager),ve.textureLoader=new Op(ve.loadingManager),ve.exrLoader=new UM(ve.loadingManager),ve.rgbeLoader=new gS(ve.loadingManager),ve.clock=new Hp,ve.camera=new ui(60,1,.1,256),ve.scene=new D1,ve.mousePosition=new Ie(0,0),ve.keyboard={},ve.lookAtFocus=new N(0,0,0);function Ew(){ve.renderer=new L1({canvas:ve.canvas,antialias:!0}),ve.renderer.outputColorSpace=ti,ve.renderer.setSize(ve.canvas.offsetWidth,ve.canvas.offsetHeight),ve.renderer.shadowMap.enabled=!0,ve.renderer.shadowMap.type=rh;const n=new TS(ve.scene,ve.camera),e=new $o(new Ie(ve.canvas.offsetWidth,ve.canvas.offsetHeight));e.threshold=.5,e.strength=.25,e.radius=0,ve.outlinePass=new fr(new Ie(ve.canvas.offsetWidth,ve.canvas.offsetHeight),ve.scene,ve.camera),ve.outlinePass.edgeStrength=4,ve.outlinePass.pulsePeriod=4,ve.outlinePass.visibleEdgeColor=new ke(1,1,1),ve.outlinePass.hiddenEdgeColor=new ke(1,1,1),new cf(ES);const t=new bS;ve.effectComposer=new MS(ve.renderer),ve.effectComposer.addPass(n),ve.effectComposer.addPass(ve.outlinePass),ve.effectComposer.addPass(e),ve.effectComposer.addPass(t),ve.orbitControls=new vM(ve.camera,ve.renderer.domElement),ve.orbitControls.enabled=!1,sg(),OT(ve).then(()=>{document.getElementById("loading").style.display="none",ve.clock.start(),lg()})}function sg(){ve.renderer.setSize(window.innerWidth,window.innerHeight,!0),ve.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),ve.camera.aspect=ve.canvas.offsetWidth/ve.canvas.offsetHeight,ve.camera.updateProjectionMatrix()}function Aw(){BT(ve),ve.orbitControls.update(),ve.orbitControls.enabled||ve.camera.lookAt(ve.lookAtFocus),ve.effectComposer.render()}function lg(){Aw(),window.requestAnimationFrame(lg)}async function Rw(n){ve.canvas=n,document.addEventListener("DOMContentLoaded",Ew),window.addEventListener("resize",sg),ve.canvas.addEventListener("mousemove",e=>{ve.mousePosition.x=2*(e.clientX/ve.canvas.offsetWidth-.5),ve.mousePosition.y=-2*(e.clientY/ve.canvas.offsetHeight-.5)}),ve.canvas.addEventListener("touchmove",e=>{e.touches.length==1&&(ve.mousePosition.x=2*(e.touches[0].clientX/ve.canvas.offsetWidth-.5),ve.mousePosition.y=-2*(e.touches[0].clientY/ve.canvas.offsetHeight-.5))}),ve.canvas.addEventListener("touchstart",e=>{e.touches.length==1&&(ve.mousePosition.x=2*(e.touches[0].clientX/ve.canvas.offsetWidth-.5),ve.mousePosition.y=-2*(e.touches[0].clientY/ve.canvas.offsetHeight-.5))}),ve.canvas.addEventListener("mousedown",e=>{ve.mousePosition.x=2*(e.clientX/ve.canvas.offsetWidth-.5),ve.mousePosition.y=-2*(e.clientY/ve.canvas.offsetHeight-.5)}),ve.canvas.addEventListener("click",e=>{kT()}),window.addEventListener("keydown",e=>{const t=ve.keyboard[e.code];ve.keyboard[e.code]=!0,t||WT(e.code)}),window.addEventListener("keyup",e=>{ve.keyboard[e.code]=!1})}const Cw=document.querySelector("canvas.webgl");Rw(Cw);
