(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="173",sl=0,qo=1,rl=2,ac=1,cc=2,dn=3,An=0,Le=1,He=2,bn=0,gi=1,Zo=2,Ko=3,$o=4,ol=5,kn=100,al=101,cl=102,ll=103,hl=104,ul=200,dl=201,fl=202,pl=203,Pr=204,Lr=205,ml=206,gl=207,_l=208,vl=209,xl=210,Ml=211,yl=212,Sl=213,El=214,Dr=0,Ir=1,Ur=2,xi=3,Nr=4,Or=5,Fr=6,Br=7,lc=0,Tl=1,bl=2,wn=0,wl=1,Al=2,Rl=3,hc=4,Cl=5,Pl=6,Ll=7,uc=300,Mi=301,yi=302,zr=303,Gr=304,Vs=306,Oe=1e3,fn=1001,kr=1002,Je=1003,Dl=1004,es=1005,en=1006,$s=1007,Hn=1008,_n=1009,dc=1010,fc=1011,Wi=1012,So=1013,Wn=1014,pn=1015,Ki=1016,Eo=1017,To=1018,Si=1020,pc=35902,mc=1021,gc=1022,$e=1023,_c=1024,vc=1025,_i=1026,Ei=1027,xc=1028,bo=1029,Mc=1030,wo=1031,Ao=1033,Cs=33776,Ps=33777,Ls=33778,Ds=33779,Vr=35840,Hr=35841,Wr=35842,Xr=35843,Yr=36196,qr=37492,Zr=37496,Kr=37808,$r=37809,Jr=37810,jr=37811,Qr=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,oo=37819,ao=37820,co=37821,Is=36492,lo=36494,ho=36495,yc=36283,uo=36284,fo=36285,po=36286,Il=3200,Ul=3201,Sc=0,Nl=1,Tn="",Ve="srgb",Ti="srgb-linear",Os="linear",ne="srgb",Jn=7680,Jo=519,Ol=512,Fl=513,Bl=514,Ec=515,zl=516,Gl=517,kl=518,Vl=519,jo=35044,Qo="300 es",mn=2e3,Fs=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ta=1234567;const Fi=Math.PI/180,Xi=180/Math.PI;function Zn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Yt(s,t,e){return Math.max(t,Math.min(e,s))}function Ro(s,t){return(s%t+t)%t}function Hl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Wl(s,t,e){return s!==t?(e-s)/(t-s):0}function Bi(s,t,e){return(1-e)*s+e*t}function Xl(s,t,e,n){return Bi(s,t,1-Math.exp(-e*n))}function Yl(s,t=1){return t-Math.abs(Ro(s,t*2)-t)}function ql(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Zl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Kl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function $l(s,t){return s+Math.random()*(t-s)}function Jl(s){return s*(.5-Math.random())}function jl(s){s!==void 0&&(ta=s);let t=ta+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ql(s){return s*Fi}function th(s){return s*Xi}function eh(s){return(s&s-1)===0&&s!==0}function nh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ih(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sh(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function di(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nn={DEG2RAD:Fi,RAD2DEG:Xi,generateUUID:Zn,clamp:Yt,euclideanModulo:Ro,mapLinear:Hl,inverseLerp:Wl,lerp:Bi,damp:Xl,pingpong:Yl,smoothstep:ql,smootherstep:Zl,randInt:Kl,randFloat:$l,randFloatSpread:Jl,seededRandom:jl,degToRad:Ql,radToDeg:th,isPowerOfTwo:eh,ceilPowerOfTwo:nh,floorPowerOfTwo:ih,setQuaternionFromProperEuler:sh,normalize:we,denormalize:di};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,i,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],T=i[1],y=i[4],x=i[7],I=i[2],C=i[5],P=i[8];return r[0]=o*v+a*T+c*I,r[3]=o*m+a*y+c*C,r[6]=o*f+a*x+c*P,r[1]=l*v+h*T+u*I,r[4]=l*m+h*y+u*C,r[7]=l*f+h*x+u*P,r[2]=d*v+p*T+g*I,r[5]=d*m+p*y+g*C,r[8]=d*f+p*x+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Js.makeScale(t,e)),this}rotate(t){return this.premultiply(Js.makeRotation(-t)),this}translate(t,e){return this.premultiply(Js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new kt;function Tc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rh(){const s=Bs("canvas");return s.style.display="block",s}const ea={};function fi(s){s in ea||(ea[s]=!0,console.warn(s))}function oh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ah(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ch(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const na=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ia=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lh(){const s={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(i.r=gn(i.r),i.g=gn(i.g),i.b=gn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tn?Os:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ti]:{primaries:t,whitePoint:n,transfer:Os,toXYZ:na,fromXYZ:ia,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:na,fromXYZ:ia,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),s}const Jt=lh();function gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let jn;class hh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=Bs("canvas")),jn.width=t.width,jn.height=t.height;const n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uh=0;class bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(js(i[o].image)):r.push(js(i[o]))}else r=js(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;class Ce extends Ai{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=fn,i=fn,r=en,o=Hn,a=$e,c=_n,l=Ce.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Zn(),this.name="",this.source=new bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oe:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oe:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=uc;Ce.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(p+1)/2,I=(f+1)/2,C=(h+d)/4,P=(u+v)/4,D=(g+m)/4;return y>x&&y>I?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=C/n,r=P/n):x>I?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=C/i,r=D/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=P/r,i=D/r),this.set(n,i,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(d-h)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new bc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wc extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ph extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*v,T=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const I=Math.sqrt(y),C=Math.atan2(I,f*T);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const x=a*T;if(c=c*m+d*x,l=l*m+p*x,h=h*m+g*x,u=u*m+v*x,m===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new R,sa=new Yn;class $i{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(r,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(t.matrixWorld),this.union(ns)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pi),is.subVectors(this.max,Pi),Qn.subVectors(t.a,Pi),ti.subVectors(t.b,Pi),ei.subVectors(t.c,Pi),vn.subVectors(ti,Qn),xn.subVectors(ei,ti),Dn.subVectors(Qn,ei);let e=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Dn.z,Dn.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Dn.z,0,-Dn.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Dn.y,Dn.x,0];return!tr(e,Qn,ti,ei,is)||(e=[1,0,0,0,1,0,0,0,1],!tr(e,Qn,ti,ei,is))?!1:(ss.crossVectors(vn,xn),e=[ss.x,ss.y,ss.z],tr(e,Qn,ti,ei,is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new R,new R,new R,new R,new R,new R,new R,new R],Ye=new R,ns=new $i,Qn=new R,ti=new R,ei=new R,vn=new R,xn=new R,Dn=new R,Pi=new R,is=new R,ss=new R,In=new R;function tr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){In.fromArray(s,r);const a=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),c=t.dot(In),l=e.dot(In),h=n.dot(In);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mh=new $i,Li=new R,er=new R;class Ji{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Li.subVectors(t,this.center);const e=Li.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Li,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Li.copy(t.center).add(er)),this.expandByPoint(Li.copy(t.center).sub(er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new R,nr=new R,rs=new R,Mn=new R,ir=new R,os=new R,sr=new R;class Hs{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nr.copy(t).add(e).multiplyScalar(.5),rs.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(nr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(rs),a=Mn.dot(this.direction),c=-Mn.dot(rs),l=Mn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(nr).addScaledVector(rs,d),p}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,i,r){ir.subVectors(e,t),os.subVectors(n,t),sr.crossVectors(ir,os);let o=this.direction.dot(sr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,t);const c=a*this.direction.dot(os.crossVectors(Mn,os));if(c<0)return null;const l=a*this.direction.dot(ir.cross(Mn));if(l<0||c+l>o)return null;const h=-a*Mn.dot(sr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,r,o,a,c,l,h,u,d,p,g,v,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,p,g,v,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ni.setFromMatrixColumn(t,0).length(),r=1/ni.setFromMatrixColumn(t,1).length(),o=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gh,t,_h)}lookAt(t,e,n){const i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),yn.crossVectors(n,Ie),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),yn.crossVectors(n,Ie)),yn.normalize(),as.crossVectors(Ie,yn),i[0]=yn.x,i[4]=as.x,i[8]=Ie.x,i[1]=yn.y,i[5]=as.y,i[9]=Ie.y,i[2]=yn.z,i[6]=as.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],T=n[3],y=n[7],x=n[11],I=n[15],C=i[0],P=i[4],D=i[8],E=i[12],_=i[1],w=i[5],U=i[9],z=i[13],H=i[2],K=i[6],X=i[10],et=i[14],Y=i[3],dt=i[7],N=i[11],L=i[15];return r[0]=o*C+a*_+c*H+l*Y,r[4]=o*P+a*w+c*K+l*dt,r[8]=o*D+a*U+c*X+l*N,r[12]=o*E+a*z+c*et+l*L,r[1]=h*C+u*_+d*H+p*Y,r[5]=h*P+u*w+d*K+p*dt,r[9]=h*D+u*U+d*X+p*N,r[13]=h*E+u*z+d*et+p*L,r[2]=g*C+v*_+m*H+f*Y,r[6]=g*P+v*w+m*K+f*dt,r[10]=g*D+v*U+m*X+f*N,r[14]=g*E+v*z+m*et+f*L,r[3]=T*C+y*_+x*H+I*Y,r[7]=T*P+y*w+x*K+I*dt,r[11]=T*D+y*U+x*X+I*N,r[15]=T*E+y*z+x*et+I*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+v*(+e*c*p-e*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],T=u*m*l-v*d*l+v*c*p-a*m*p-u*c*f+a*d*f,y=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,x=h*v*l-g*u*l+g*a*p-o*v*p-h*a*f+o*u*f,I=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,C=e*T+n*y+i*x+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=T*P,t[1]=(v*d*r-u*m*r-v*i*p+n*m*p+u*i*f-n*d*f)*P,t[2]=(a*m*r-v*c*r+v*i*l-n*m*l-a*i*f+n*c*f)*P,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*P,t[4]=y*P,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*P,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*f-e*c*f)*P,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*p+e*c*p)*P,t[8]=x*P,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*P,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*f+e*a*f)*P,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*P,t[12]=I*P,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*m+e*u*m)*P,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*P,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,T=c*l,y=c*h,x=c*u,I=n.x,C=n.y,P=n.z;return i[0]=(1-(v+f))*I,i[1]=(p+x)*I,i[2]=(g-y)*I,i[3]=0,i[4]=(p-x)*C,i[5]=(1-(d+f))*C,i[6]=(m+T)*C,i[7]=0,i[8]=(g+y)*P,i[9]=(m-T)*P,i[10]=(1-(d+v))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ni.set(i[0],i[1],i[2]).length();const o=ni.set(i[4],i[5],i[6]).length(),a=ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const l=1/r,h=1/o,u=1/a;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=mn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===mn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Fs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=mn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,p=(n+i)*h;let g,v;if(a===mn)g=(o+r)*u,v=-2*u;else if(a===Fs)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new R,qe=new se,gh=new R(0,0,0),_h=new R(1,1,1),yn=new R,as=new R,Ie=new R,ra=new se,oa=new Yn;class sn{constructor(t=0,e=0,n=0,i=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ra.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ra,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oa.setFromEuler(this),this.setFromQuaternion(oa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class Co{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vh=0;const aa=new R,ii=new Yn,ln=new se,cs=new R,Di=new R,xh=new R,Mh=new Yn,ca=new R(1,0,0),la=new R(0,1,0),ha=new R(0,0,1),ua={type:"added"},yh={type:"removed"},si={type:"childadded",child:null},rr={type:"childremoved",child:null};class xe extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new R,e=new sn,n=new Yn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(ca,t)}rotateY(t){return this.rotateOnAxis(la,t)}rotateZ(t){return this.rotateOnAxis(ha,t)}translateOnAxis(t,e){return aa.copy(t).applyQuaternion(this.quaternion),this.position.add(aa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ca,t)}translateY(t){return this.translateOnAxis(la,t)}translateZ(t){return this.translateOnAxis(ha,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cs.copy(t):cs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Di,cs,this.up):ln.lookAt(cs,Di,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),ii.setFromRotationMatrix(ln),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ua),si.child=t,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yh),rr.child=t,this.dispatchEvent(rr),rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ua),si.child=t,this.dispatchEvent(si),si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,xh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Mh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new R(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new R,hn=new R,or=new R,un=new R,ri=new R,oi=new R,da=new R,ar=new R,cr=new R,lr=new R,hr=new ie,ur=new ie,dr=new ie;class Ke{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ze.subVectors(i,e),hn.subVectors(n,e),or.subVectors(t,e);const o=Ze.dot(Ze),a=Ze.dot(hn),c=Ze.dot(or),l=hn.dot(hn),h=hn.dot(or),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,un.x),c.addScaledVector(o,un.y),c.addScaledVector(a,un.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return hr.setScalar(0),ur.setScalar(0),dr.setScalar(0),hr.fromBufferAttribute(t,e),ur.fromBufferAttribute(t,n),dr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(hr,r.x),o.addScaledVector(ur,r.y),o.addScaledVector(dr,r.z),o}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),hn.subVectors(t,e),Ze.cross(hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ze.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ri.subVectors(i,n),oi.subVectors(r,n),ar.subVectors(t,n);const c=ri.dot(ar),l=oi.dot(ar);if(c<=0&&l<=0)return e.copy(n);cr.subVectors(t,i);const h=ri.dot(cr),u=oi.dot(cr);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ri,o);lr.subVectors(t,r);const p=ri.dot(lr),g=oi.dot(lr);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(oi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return da.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(da,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(ri,o).addScaledVector(oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function fr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Ro(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fr(o,r,t+1/3),this.g=fr(o,r,t),this.b=fr(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Ac[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Jt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Yt(Ee.r*255,0,255))*65536+Math.round(Yt(Ee.g*255,0,255))*256+Math.round(Yt(Ee.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,r=Ee.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Ve){Jt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(ls);const n=Bi(Sn.h,ls.h,e),i=Bi(Sn.s,ls.s,e),r=Bi(Sn.l,ls.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new qt;qt.NAMES=Ac;let Sh=0;class Kn extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=gi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Lr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pr&&(n.blendSrc=this.blendSrc),this.blendDst!==Lr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Re extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new R,hs=new mt;let Eh=0;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hs.fromBufferAttribute(this,e),hs.applyMatrix3(t),this.setXY(e,hs.x,hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jo&&(t.usage=this.usage),t}}class Rc extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cc extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Th=0;const ze=new se,pr=new xe,ai=new R,Ue=new $i,Ii=new $i,_e=new R;class pe extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tc(t)?Cc:Rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return pr.lookAt(t),pr.updateMatrix(),this.applyMatrix4(pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ii.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Ue.min,Ii.min),Ue.expandByPoint(_e),_e.addVectors(Ue.max,Ii.max),Ue.expandByPoint(_e)):(Ue.expandByPoint(Ii.min),Ue.expandByPoint(Ii.max))}Ue.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_e.fromBufferAttribute(a,l),c&&(ai.fromBufferAttribute(t,l),_e.add(ai)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new R,c[D]=new R;const l=new R,h=new R,u=new R,d=new mt,p=new mt,g=new mt,v=new R,m=new R;function f(D,E,_){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(w),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(w),a[D].add(v),a[E].add(v),a[_].add(v),c[D].add(m),c[E].add(m),c[_].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let D=0,E=T.length;D<E;++D){const _=T[D],w=_.start,U=_.count;for(let z=w,H=w+U;z<H;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const y=new R,x=new R,I=new R,C=new R;function P(D){I.fromBufferAttribute(i,D),C.copy(I);const E=a[D];y.copy(E),y.sub(I.multiplyScalar(I.dot(E))).normalize(),x.crossVectors(C,E);const w=x.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,w)}for(let D=0,E=T.length;D<E;++D){const _=T[D],w=_.start,U=_.count;for(let z=w,H=w+U;z<H;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fa=new se,Un=new Hs,us=new Ji,pa=new R,ds=new R,fs=new R,ps=new R,mr=new R,ms=new R,ma=new R,gs=new R;class St extends xe{constructor(t=new pe,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(mr.fromBufferAttribute(u,t),o?ms.addScaledVector(mr,h):ms.addScaledVector(mr.sub(e),h))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(us.containsPoint(Un.origin)===!1&&(Un.intersectSphere(us,pa)===null||Un.origin.distanceToSquared(pa)>(t.far-t.near)**2))&&(fa.copy(r).invert(),Un.copy(t.ray).applyMatrix4(fa),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,I=y;x<I;x+=3){const C=a.getX(x),P=a.getX(x+1),D=a.getX(x+2);i=_s(this,f,t,n,l,h,u,C,P,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=_s(this,o,t,n,l,h,u,T,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,I=y;x<I;x+=3){const C=x,P=x+1,D=x+2;i=_s(this,f,t,n,l,h,u,C,P,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=m,y=m+1,x=m+2;i=_s(this,o,t,n,l,h,u,T,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function bh(s,t,e,n,i,r,o,a){let c;if(t.side===Le?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===An,a),c===null)return null;gs.copy(a),gs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(gs);return l<e.near||l>e.far?null:{distance:l,point:gs.clone(),object:s}}function _s(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ds),s.getVertexPosition(c,fs),s.getVertexPosition(l,ps);const h=bh(s,t,e,n,ds,fs,ps,ma);if(h){const u=new R;Ke.getBarycoord(ma,ds,fs,ps,u),i&&(h.uv=Ke.getInterpolatedAttribute(i,a,c,l,u,new mt)),r&&(h.uv1=Ke.getInterpolatedAttribute(r,a,c,l,u,new mt)),o&&(h.normal=Ke.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};Ke.getNormal(ds,fs,ps,d.normal),h.face=d,h.barycoord=u}return h}class fe extends pe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(v,m,f,T,y,x,I,C,P,D,E){const _=x/P,w=I/D,U=x/2,z=I/2,H=C/2,K=P+1,X=D+1;let et=0,Y=0;const dt=new R;for(let N=0;N<X;N++){const L=N*w-z;for(let ot=0;ot<K;ot++){const gt=ot*_-U;dt[v]=gt*T,dt[m]=L*y,dt[f]=H,l.push(dt.x,dt.y,dt.z),dt[v]=0,dt[m]=0,dt[f]=C>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(ot/P),u.push(1-N/D),et+=1}}for(let N=0;N<D;N++)for(let L=0;L<P;L++){const ot=d+L+K*N,gt=d+L+K*(N+1),k=d+(L+1)+K*(N+1),$=d+(L+1)+K*N;c.push(ot,gt,$),c.push(gt,k,$),Y+=6}a.addGroup(p,Y,E),p+=Y,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const n=bi(s[e]);for(const i in n)t[i]=n[i]}return t}function wh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Pc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Ah={clone:bi,merge:Ae};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new R,ga=new mt,_a=new mt;class Ne extends Lc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,ga,_a),e.subVectors(_a,ga)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ci=-90,li=1;class Ph extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ne(ci,li,t,e);i.layers=this.layers,this.add(i);const r=new Ne(ci,li,t,e);r.layers=this.layers,this.add(r);const o=new Ne(ci,li,t,e);o.layers=this.layers,this.add(o);const a=new Ne(ci,li,t,e);a.layers=this.layers,this.add(a);const c=new Ne(ci,li,t,e);c.layers=this.layers,this.add(c);const l=new Ne(ci,li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Dc extends Ce{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Mi,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lh extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Dc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fe(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:bn});r.uniforms.tEquirect.value=e;const o=new St(i,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=en),new Ph(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class oe extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dh={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dh)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Po{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new Po(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ih extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const _r=new R,Uh=new R,Nh=new kt;class Bn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=_r.subVectors(n,e).cross(Uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nh.getNormalMatrix(t),i=this.coplanarPoint(_r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ji,vs=new R;class Lo{constructor(t=new Bn,e=new Bn,n=new Bn,i=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],v=i[10],m=i[11],f=i[12],T=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-p,x-f).normalize(),n[1].setComponents(c+r,d+l,m+p,x+f).normalize(),n[2].setComponents(c+o,d+h,m+g,x+T).normalize(),n[3].setComponents(c-o,d-h,m-g,x-T).normalize(),n[4].setComponents(c-a,d-u,m-v,x-y).normalize(),e===mn)n[5].setComponents(c+a,d+u,m+v,x+y).normalize();else if(e===Fs)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(vs.x=i.normal.x>0?t.max.x:t.min.x,vs.y=i.normal.y>0?t.max.y:t.min.y,vs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ic extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zs=new R,Gs=new R,va=new se,Ui=new Hs,xs=new Ji,vr=new R,xa=new R;class Oh extends xe{constructor(t=new pe,e=new Ic){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)zs.fromBufferAttribute(e,i-1),Gs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=zs.distanceTo(Gs);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=r,t.ray.intersectsSphere(xs)===!1)return;va.copy(i).invert(),Ui.copy(t.ray).applyMatrix4(va);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){const f=h.getX(v),T=h.getX(v+1),y=Ms(this,t,Ui,c,f,T,v);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=Ms(this,t,Ui,c,v,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){const f=Ms(this,t,Ui,c,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){const v=Ms(this,t,Ui,c,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ms(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(zs.fromBufferAttribute(a,i),Gs.fromBufferAttribute(a,r),e.distanceSqToSegment(zs,Gs,vr,xa)>n)return;vr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(vr);if(!(l<t.near||l>t.far))return{distance:l,point:xa.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class Uc extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ma=new se,mo=new Hs,ys=new Ji,Ss=new R;class Fh extends xe{constructor(t=new pe,e=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(i),ys.radius+=r,t.ray.intersectsSphere(ys)===!1)return;Ma.copy(i).invert(),mo.copy(t.ray).applyMatrix4(Ma);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=l.getX(g);Ss.fromBufferAttribute(u,m),ya(Ss,m,c,i,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p;g<v;g++)Ss.fromBufferAttribute(u,g),ya(Ss,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ya(s,t,e,n,i,r,o){const a=mo.distanceSqToPoint(s);if(a<e){const c=new R;mo.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Cn extends Ce{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nc extends Ce{constructor(t,e,n,i,r,o,a,c,l,h=_i){if(h!==_i&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_i&&(n=Wn),n===void 0&&h===Ei&&(n=Si),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new mt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],o=[],a=new R,c=new se;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Yt(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Do extends rn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new mt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bh extends Do{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Io(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Es=new R,xr=new Io,Mr=new Io,yr=new Io;class Oc extends rn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Es.subVectors(i[0],i[1]).add(i[0]),l=Es);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Es.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Es),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),xr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Mr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),yr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(xr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Mr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),yr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(xr.calc(c),Mr.calc(c),yr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sa(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function zh(s,t){const e=1-s;return e*e*t}function Gh(s,t){return 2*(1-s)*s*t}function kh(s,t){return s*s*t}function zi(s,t,e,n){return zh(s,t)+Gh(s,e)+kh(s,n)}function Vh(s,t){const e=1-s;return e*e*e*t}function Hh(s,t){const e=1-s;return 3*e*e*s*t}function Wh(s,t){return 3*(1-s)*s*s*t}function Xh(s,t){return s*s*s*t}function Gi(s,t,e,n,i){return Vh(s,t)+Hh(s,e)+Wh(s,n)+Xh(s,i)}class Fc extends rn{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gi(t,i.x,r.x,o.x,a.x),Gi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yh extends rn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gi(t,i.x,r.x,o.x,a.x),Gi(t,i.y,r.y,o.y,a.y),Gi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bc extends rn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qh extends rn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zc extends rn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(zi(t,i.x,r.x,o.x),zi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends rn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(zi(t,i.x,r.x,o.x),zi(t,i.y,r.y,o.y),zi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gc extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Sa(a,c.x,l.x,h.x,u.x),Sa(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var go=Object.freeze({__proto__:null,ArcCurve:Bh,CatmullRomCurve3:Oc,CubicBezierCurve:Fc,CubicBezierCurve3:Yh,EllipseCurve:Do,LineCurve:Bc,LineCurve3:qh,QuadraticBezierCurve:zc,QuadraticBezierCurve3:Zh,SplineCurve:Gc});class Kh extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new go[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new go[i.type]().fromJSON(i))}return this}}class Ea extends Kh{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bc(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new zc(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Fc(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Do(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uo extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,h=new mt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Te extends pe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;T(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(p,2));function T(){const x=new R,I=new R;let C=0;const P=(e-t)/n;for(let D=0;D<=r;D++){const E=[],_=D/r,w=_*(e-t)+t;for(let U=0;U<=i;U++){const z=U/i,H=z*c+a,K=Math.sin(H),X=Math.cos(H);I.x=w*K,I.y=-_*n+m,I.z=w*X,u.push(I.x,I.y,I.z),x.set(K,P,X).normalize(),d.push(x.x,x.y,x.z),p.push(z,1-_),E.push(g++)}v.push(E)}for(let D=0;D<i;D++)for(let E=0;E<r;E++){const _=v[E][D],w=v[E+1][D],U=v[E+1][D+1],z=v[E][D+1];(t>0||E!==0)&&(h.push(_,w,z),C+=3),(e>0||E!==r-1)&&(h.push(w,U,z),C+=3)}l.addGroup(f,C,0),f+=C}function y(x){const I=g,C=new mt,P=new R;let D=0;const E=x===!0?t:e,_=x===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*_,0),d.push(0,_,0),p.push(.5,.5),g++;const w=g;for(let U=0;U<=i;U++){const H=U/i*c+a,K=Math.cos(H),X=Math.sin(H);P.x=E*X,P.y=m*_,P.z=E*K,u.push(P.x,P.y,P.z),d.push(0,_,0),C.x=K*.5+.5,C.y=X*.5*_+.5,p.push(C.x,C.y),g++}for(let U=0;U<i;U++){const z=I+U,H=w+U;x===!0?h.push(H,H+1,z):h.push(H+1,H,z),D+=3}l.addGroup(f,D,x===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ws extends Te{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ws(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xs extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const y=new R,x=new R,I=new R;for(let C=0;C<e.length;C+=3)p(e[C+0],y),p(e[C+1],x),p(e[C+2],I),c(y,x,I,T)}function c(T,y,x,I){const C=I+1,P=[];for(let D=0;D<=C;D++){P[D]=[];const E=T.clone().lerp(x,D/C),_=y.clone().lerp(x,D/C),w=C-D;for(let U=0;U<=w;U++)U===0&&D===C?P[D][U]=E:P[D][U]=E.clone().lerp(_,U/w)}for(let D=0;D<C;D++)for(let E=0;E<2*(C-D)-1;E++){const _=Math.floor(E/2);E%2===0?(d(P[D][_+1]),d(P[D+1][_]),d(P[D][_])):(d(P[D][_+1]),d(P[D+1][_+1]),d(P[D+1][_]))}}function l(T){const y=new R;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(T),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const T=new R;for(let y=0;y<r.length;y+=3){T.x=r[y+0],T.y=r[y+1],T.z=r[y+2];const x=m(T)/2/Math.PI+.5,I=f(T)/Math.PI+.5;o.push(x,1-I)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){const y=o[T+0],x=o[T+2],I=o[T+4],C=Math.max(y,x,I),P=Math.min(y,x,I);C>.9&&P<.1&&(y<.2&&(o[T+0]+=1),x<.2&&(o[T+2]+=1),I<.2&&(o[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function p(T,y){const x=T*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const T=new R,y=new R,x=new R,I=new R,C=new mt,P=new mt,D=new mt;for(let E=0,_=0;E<r.length;E+=9,_+=6){T.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),C.set(o[_+0],o[_+1]),P.set(o[_+2],o[_+3]),D.set(o[_+4],o[_+5]),I.copy(T).add(y).add(x).divideScalar(3);const w=m(I);v(C,_+0,T,w),v(P,_+2,y,w),v(D,_+4,x,w)}}function v(T,y,x,I){I<0&&T.x===1&&(o[y]=T.x-1),x.x===0&&x.z===0&&(o[y]=I/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.vertices,t.indices,t.radius,t.details)}}class ks extends Xs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ks(t.radius,t.detail)}}class kc extends Ea{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ea().fromJSON(i))}return this}}const $h={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Vc(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=eu(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Yi(r,o,e,a,c,p,0),o}};function Vc(s,t,e,n,i){let r,o;if(i===du(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Ta(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ta(r,s[r],s[r+1],o);return o&&Ys(o,o.next)&&(Zi(o),o=o.next),o}function qn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ys(e,e.next)||ce(e.prev,e,e.next)===0)){if(Zi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Yi(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ou(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?jh(s,n,i,r):Jh(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Zi(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Qh(qn(s),t,e),Yi(s,t,e,n,i,r,2)):o===2&&tu(s,t,e,n,i,r):Yi(qn(s),t,e,n,i,r,1);break}}}function Jh(s){const t=s.prev,e=s,n=s.next;if(ce(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&pi(i,a,r,c,o,l,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jh(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ce(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=_o(p,g,t,e,n),T=_o(v,m,t,e,n);let y=s.prevZ,x=s.nextZ;for(;y&&y.z>=f&&x&&x.z<=T;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&pi(a,h,c,u,l,d,y.x,y.y)&&ce(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&pi(a,h,c,u,l,d,x.x,x.y)&&ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&pi(a,h,c,u,l,d,y.x,y.y)&&ce(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=T;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&pi(a,h,c,u,l,d,x.x,x.y)&&ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Qh(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ys(i,r)&&Hc(i,n,n.next,r)&&qi(i,r)&&qi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Zi(n),Zi(n.next),n=s=r),n=n.next}while(n!==s);return qn(n)}function tu(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lu(o,a)){let c=Wc(o,a);o=qn(o,o.next),c=qn(c,c.next),Yi(o,t,e,n,i,r,0),Yi(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function eu(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Vc(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(cu(l));for(i.sort(nu),r=0;r<i.length;r++)e=iu(i[r],e);return e}function nu(s,t){return s.x-t.x}function iu(s,t){const e=su(s,t);if(!e)return t;const n=Wc(e,s);return qn(n,n.next),qn(e,e.next)}function su(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&pi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),qi(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&ru(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function ru(s,t){return ce(s.prev,s,t.prev)<0&&ce(t.next,s,s.next)<0}function ou(s,t,e,n){let i=s;do i.z===0&&(i.z=_o(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,au(i)}function au(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function _o(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function cu(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function pi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function lu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!hu(s,t)&&(qi(s,t)&&qi(t,s)&&uu(s,t)&&(ce(s.prev,s,t.prev)||ce(s,t.prev,t))||Ys(s,t)&&ce(s.prev,s,s.next)>0&&ce(t.prev,t,t.next)>0)}function ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ys(s,t){return s.x===t.x&&s.y===t.y}function Hc(s,t,e,n){const i=bs(ce(s,t,e)),r=bs(ce(s,t,n)),o=bs(ce(e,n,s)),a=bs(ce(e,n,t));return!!(i!==r&&o!==a||i===0&&Ts(s,e,t)||r===0&&Ts(s,n,t)||o===0&&Ts(e,s,n)||a===0&&Ts(e,t,n))}function Ts(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function bs(s){return s>0?1:s<0?-1:0}function hu(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Hc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function qi(s,t){return ce(s.prev,s,s.next)<0?ce(s,t,s.next)>=0&&ce(s,s.prev,t)>=0:ce(s,t,s.prev)<0||ce(s,s.next,t)<0}function uu(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Wc(s,t){const e=new vo(s.i,s.x,s.y),n=new vo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ta(s,t,e,n){const i=new vo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function du(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ki{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return ki.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];ba(t),wa(n,t);let o=t.length;e.forEach(ba);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,wa(n,e[c]);const a=$h.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ba(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function wa(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class No extends pe{constructor(t=new kc([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new jt(i,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:fu;let y,x=!1,I,C,P,D;f&&(y=f.getSpacedPoints(h),x=!0,d=!1,I=f.computeFrenetFrames(h,!1),C=new R,P=new R,D=new R),d||(m=0,p=0,g=0,v=0);const E=a.extractPoints(l);let _=E.shape;const w=E.holes;if(!ki.isClockWise(_)){_=_.reverse();for(let Q=0,tt=w.length;Q<tt;Q++){const b=w[Q];ki.isClockWise(b)&&(w[Q]=b.reverse())}}const z=ki.triangulateShape(_,w),H=_;for(let Q=0,tt=w.length;Q<tt;Q++){const b=w[Q];_=_.concat(b)}function K(Q,tt,b){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(tt,b)}const X=_.length,et=z.length;function Y(Q,tt,b){let xt,it,pt;const at=Q.x-tt.x,It=Q.y-tt.y,ut=b.x-Q.x,A=b.y-Q.y,M=at*at+It*It,G=at*A-It*ut;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(M),st=Math.sqrt(ut*ut+A*A),j=tt.x-It/J,Pt=tt.y+at/J,_t=b.x-A/st,Tt=b.y+ut/st,Xt=((_t-j)*A-(Tt-Pt)*ut)/(at*A-It*ut);xt=j+at*Xt-Q.x,it=Pt+It*Xt-Q.y;const ct=xt*xt+it*it;if(ct<=2)return new mt(xt,it);pt=Math.sqrt(ct/2)}else{let J=!1;at>Number.EPSILON?ut>Number.EPSILON&&(J=!0):at<-Number.EPSILON?ut<-Number.EPSILON&&(J=!0):Math.sign(It)===Math.sign(A)&&(J=!0),J?(xt=-It,it=at,pt=Math.sqrt(M)):(xt=at,it=It,pt=Math.sqrt(M/2))}return new mt(xt/pt,it/pt)}const dt=[];for(let Q=0,tt=H.length,b=tt-1,xt=Q+1;Q<tt;Q++,b++,xt++)b===tt&&(b=0),xt===tt&&(xt=0),dt[Q]=Y(H[Q],H[b],H[xt]);const N=[];let L,ot=dt.concat();for(let Q=0,tt=w.length;Q<tt;Q++){const b=w[Q];L=[];for(let xt=0,it=b.length,pt=it-1,at=xt+1;xt<it;xt++,pt++,at++)pt===it&&(pt=0),at===it&&(at=0),L[xt]=Y(b[xt],b[pt],b[at]);N.push(L),ot=ot.concat(L)}for(let Q=0;Q<m;Q++){const tt=Q/m,b=p*Math.cos(tt*Math.PI/2),xt=g*Math.sin(tt*Math.PI/2)+v;for(let it=0,pt=H.length;it<pt;it++){const at=K(H[it],dt[it],xt);q(at.x,at.y,-b)}for(let it=0,pt=w.length;it<pt;it++){const at=w[it];L=N[it];for(let It=0,ut=at.length;It<ut;It++){const A=K(at[It],L[It],xt);q(A.x,A.y,-b)}}}const gt=g+v;for(let Q=0;Q<X;Q++){const tt=d?K(_[Q],ot[Q],gt):_[Q];x?(P.copy(I.normals[0]).multiplyScalar(tt.x),C.copy(I.binormals[0]).multiplyScalar(tt.y),D.copy(y[0]).add(P).add(C),q(D.x,D.y,D.z)):q(tt.x,tt.y,0)}for(let Q=1;Q<=h;Q++)for(let tt=0;tt<X;tt++){const b=d?K(_[tt],ot[tt],gt):_[tt];x?(P.copy(I.normals[Q]).multiplyScalar(b.x),C.copy(I.binormals[Q]).multiplyScalar(b.y),D.copy(y[Q]).add(P).add(C),q(D.x,D.y,D.z)):q(b.x,b.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const tt=Q/m,b=p*Math.cos(tt*Math.PI/2),xt=g*Math.sin(tt*Math.PI/2)+v;for(let it=0,pt=H.length;it<pt;it++){const at=K(H[it],dt[it],xt);q(at.x,at.y,u+b)}for(let it=0,pt=w.length;it<pt;it++){const at=w[it];L=N[it];for(let It=0,ut=at.length;It<ut;It++){const A=K(at[It],L[It],xt);x?q(A.x,A.y+y[h-1].y,y[h-1].x+b):q(A.x,A.y,u+b)}}}k(),$();function k(){const Q=i.length/3;if(d){let tt=0,b=X*tt;for(let xt=0;xt<et;xt++){const it=z[xt];ht(it[2]+b,it[1]+b,it[0]+b)}tt=h+m*2,b=X*tt;for(let xt=0;xt<et;xt++){const it=z[xt];ht(it[0]+b,it[1]+b,it[2]+b)}}else{for(let tt=0;tt<et;tt++){const b=z[tt];ht(b[2],b[1],b[0])}for(let tt=0;tt<et;tt++){const b=z[tt];ht(b[0]+X*h,b[1]+X*h,b[2]+X*h)}}n.addGroup(Q,i.length/3-Q,0)}function $(){const Q=i.length/3;let tt=0;rt(H,tt),tt+=H.length;for(let b=0,xt=w.length;b<xt;b++){const it=w[b];rt(it,tt),tt+=it.length}n.addGroup(Q,i.length/3-Q,1)}function rt(Q,tt){let b=Q.length;for(;--b>=0;){const xt=b;let it=b-1;it<0&&(it=Q.length-1);for(let pt=0,at=h+m*2;pt<at;pt++){const It=X*pt,ut=X*(pt+1),A=tt+xt+It,M=tt+it+It,G=tt+it+ut,J=tt+xt+ut;Lt(A,M,G,J)}}}function q(Q,tt,b){c.push(Q),c.push(tt),c.push(b)}function ht(Q,tt,b){ft(Q),ft(tt),ft(b);const xt=i.length/3,it=T.generateTopUV(n,i,xt-3,xt-2,xt-1);Dt(it[0]),Dt(it[1]),Dt(it[2])}function Lt(Q,tt,b,xt){ft(Q),ft(tt),ft(xt),ft(tt),ft(b),ft(xt);const it=i.length/3,pt=T.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);Dt(pt[0]),Dt(pt[1]),Dt(pt[3]),Dt(pt[1]),Dt(pt[2]),Dt(pt[3])}function ft(Q){i.push(c[Q*3+0]),i.push(c[Q*3+1]),i.push(c[Q*3+2])}function Dt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return pu(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new go[i.type]().fromJSON(i)),new No(n,t.options)}}const fu={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new mt(r,o),new mt(a,c),new mt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],g=t[i*3+2],v=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new mt(o,1-c),new mt(l,1-u),new mt(d,1-g),new mt(v,1-f)]:[new mt(a,1-c),new mt(h,1-u),new mt(p,1-g),new mt(m,1-f)]}};function pu(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Oo extends Xs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oo(t.radius,t.detail)}}class Qe extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const T=f*d-o;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-T,0),v.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const y=T+l*f,x=T+l*(f+1),I=T+1+l*(f+1),C=T+1+l*f;p.push(y,x,C),p.push(x,I,C)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.widthSegments,t.heightSegments)}}class wi extends pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const T=[],y=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let I=0;I<=e;I++){const C=I/e;u.x=-t*Math.cos(i+C*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+C*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+x,1-y),T.push(l++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){const y=h[f][T+1],x=h[f][T],I=h[f+1][T],C=h[f+1][T+1];(f!==0||o>0)&&p.push(y,x,C),(f!==n-1||c<Math.PI)&&p.push(x,I,C)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ji extends pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,T=(i+1)*p+g;o.push(v,m,T),o.push(m,f,T)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vt extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mu extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Il,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gu extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Fo extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Sr=new se,Aa=new R,Ra=new R;class Xc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Aa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Aa),Ra.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ra),e.updateMatrixWorld(),Sr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ca=new se,Ni=new R,Er=new R;class _u extends Xc{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ni.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ni),Er.copy(n.position),Er.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Er),n.updateMatrixWorld(),i.makeTranslation(-Ni.x,-Ni.y,-Ni.z),Ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca)}}class Us extends Fo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _u}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Yc extends Lc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vu extends Xc{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xu extends Fo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new vu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mu extends Fo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class yu extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Su{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pa(){return performance.now()}const La=new se;class Da{constructor(t,e,n=0,i=1/0){this.ray=new Hs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return La.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(La),this}intersectObject(t,e=!0,n=[]){return xo(t,this,n,e),n.sort(Ia),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)xo(t[i],this,n,e);return n.sort(Ia),n}}function Ia(s,t){return s.distance-t.distance}function xo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)xo(r[o],t,e,!0)}}function Ua(s,t,e,n){const i=Eu(n);switch(e){case mc:return s*t;case _c:return s*t;case vc:return s*t*2;case xc:return s*t/i.components*i.byteLength;case bo:return s*t/i.components*i.byteLength;case Mc:return s*t*2/i.components*i.byteLength;case wo:return s*t*2/i.components*i.byteLength;case gc:return s*t*3/i.components*i.byteLength;case $e:return s*t*4/i.components*i.byteLength;case Ao:return s*t*4/i.components*i.byteLength;case Cs:case Ps:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ls:case Ds:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hr:case Xr:return Math.max(s,16)*Math.max(t,8)/4;case Vr:case Wr:return Math.max(s,8)*Math.max(t,8)/2;case Yr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $r:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case jr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case oo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ao:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case co:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Is:case lo:case ho:return Math.ceil(s/4)*Math.ceil(t/4)*16;case yc:case uo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case fo:case po:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Eu(s){switch(s){case _n:case dc:return{byteLength:1,components:1};case Wi:case fc:case Ki:return{byteLength:2,components:1};case Eo:case To:return{byteLength:2,components:4};case Wn:case So:case pn:return{byteLength:4,components:1};case pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Tu(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
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
#endif`,Au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bu=`#ifdef USE_IRIDESCENCE
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
#endif`,zu=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zu=`#define PI 3.141592653589793
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
} // validated`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$u=`vec3 transformedNormal = objectNormal;
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
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
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
#endif`,Ed=`struct PhysicalMaterial {
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
}`,Td=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,bd=`#if defined( RE_IndirectDiffuse )
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ud=`#if defined( USE_POINTS_UV )
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
#endif`,Nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qd=`#ifdef USE_NORMALMAP
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
#endif`,Zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xf=`#ifdef USE_TRANSMISSION
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
#endif`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
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
}`,Df=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,If=`#define DISTANCE
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
}`,Uf=`#define DISTANCE
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,zf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,kf=`#define LAMBERT
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
}`,Vf=`#define LAMBERT
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
}`,Hf=`#define MATCAP
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
}`,Wf=`#define MATCAP
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
}`,Xf=`#define NORMAL
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
}`,Yf=`#define NORMAL
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
}`,qf=`#define PHONG
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
}`,Zf=`#define PHONG
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
}`,Kf=`#define STANDARD
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
}`,$f=`#define STANDARD
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
}`,Jf=`#define TOON
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
}`,jf=`#define TOON
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
}`,Qf=`uniform float size;
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
}`,tp=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,np=`uniform vec3 color;
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
}`,ip=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sp=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:bu,alphahash_pars_fragment:wu,alphamap_fragment:Au,alphamap_pars_fragment:Ru,alphatest_fragment:Cu,alphatest_pars_fragment:Pu,aomap_fragment:Lu,aomap_pars_fragment:Du,batching_pars_vertex:Iu,batching_vertex:Uu,begin_vertex:Nu,beginnormal_vertex:Ou,bsdfs:Fu,iridescence_fragment:Bu,bumpmap_pars_fragment:zu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:ku,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Hu,color_fragment:Wu,color_pars_fragment:Xu,color_pars_vertex:Yu,color_vertex:qu,common:Zu,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:$u,displacementmap_pars_vertex:Ju,displacementmap_vertex:ju,emissivemap_fragment:Qu,emissivemap_pars_fragment:td,colorspace_fragment:ed,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:sd,envmap_pars_fragment:rd,envmap_pars_vertex:od,envmap_physical_pars_fragment:_d,envmap_vertex:ad,fog_vertex:cd,fog_pars_vertex:ld,fog_fragment:hd,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:vd,lights_toon_pars_fragment:xd,lights_phong_fragment:Md,lights_phong_pars_fragment:yd,lights_physical_fragment:Sd,lights_physical_pars_fragment:Ed,lights_fragment_begin:Td,lights_fragment_maps:bd,lights_fragment_end:wd,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:Pd,map_fragment:Ld,map_pars_fragment:Dd,map_particle_fragment:Id,map_particle_pars_fragment:Ud,metalnessmap_fragment:Nd,metalnessmap_pars_fragment:Od,morphinstance_vertex:Fd,morphcolor_vertex:Bd,morphnormal_vertex:zd,morphtarget_pars_vertex:Gd,morphtarget_vertex:kd,normal_fragment_begin:Vd,normal_fragment_maps:Hd,normal_pars_fragment:Wd,normal_pars_vertex:Xd,normal_vertex:Yd,normalmap_pars_fragment:qd,clearcoat_normal_fragment_begin:Zd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:$d,iridescence_pars_fragment:Jd,opaque_fragment:jd,packing:Qd,premultiplied_alpha_fragment:tf,project_vertex:ef,dithering_fragment:nf,dithering_pars_fragment:sf,roughnessmap_fragment:rf,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:af,shadowmap_pars_vertex:cf,shadowmap_vertex:lf,shadowmask_pars_fragment:hf,skinbase_vertex:uf,skinning_pars_vertex:df,skinning_vertex:ff,skinnormal_vertex:pf,specularmap_fragment:mf,specularmap_pars_fragment:gf,tonemapping_fragment:_f,tonemapping_pars_fragment:vf,transmission_fragment:xf,transmission_pars_fragment:Mf,uv_pars_fragment:yf,uv_pars_vertex:Sf,uv_vertex:Ef,worldpos_vertex:Tf,background_vert:bf,background_frag:wf,backgroundCube_vert:Af,backgroundCube_frag:Rf,cube_vert:Cf,cube_frag:Pf,depth_vert:Lf,depth_frag:Df,distanceRGBA_vert:If,distanceRGBA_frag:Uf,equirect_vert:Nf,equirect_frag:Of,linedashed_vert:Ff,linedashed_frag:Bf,meshbasic_vert:zf,meshbasic_frag:Gf,meshlambert_vert:kf,meshlambert_frag:Vf,meshmatcap_vert:Hf,meshmatcap_frag:Wf,meshnormal_vert:Xf,meshnormal_frag:Yf,meshphong_vert:qf,meshphong_frag:Zf,meshphysical_vert:Kf,meshphysical_frag:$f,meshtoon_vert:Jf,meshtoon_frag:jf,points_vert:Qf,points_frag:tp,shadow_vert:ep,shadow_frag:np,sprite_vert:ip,sprite_frag:sp},vt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},tn={basic:{uniforms:Ae([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ae([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ae([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ae([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ae([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ae([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ae([vt.points,vt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ae([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ae([vt.common,vt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ae([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ae([vt.sprite,vt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ae([vt.common,vt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ae([vt.lights,vt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};tn.physical={uniforms:Ae([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const ws={r:0,b:0,g:0},On=new sn,rp=new se;function op(s,t,e,n,i,r,o){const a=new qt(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const I=g(y);I===null?f(a,c):I&&I.isColor&&(f(I,1),x=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,x){const I=g(x);I&&(I.isCubeTexture||I.mapping===Vs)?(h===void 0&&(h=new St(new fe(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:bi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),On.copy(x.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rp.makeRotationFromEuler(On)),h.material.toneMapped=Jt.getTransfer(I.colorSpace)!==ne,(u!==I||d!==I.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new St(new Qe(2,2),new Rn({name:"BackgroundMaterial",uniforms:bi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(I.colorSpace)!==ne,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=I,d=I.version,p=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,x){y.getRGB(ws,Pc(s)),n.buffers.color.setClear(ws.r,ws.g,ws.b,x,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:v,addToRenderList:m,dispose:T}}function ap(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(_,w,U,z,H){let K=!1;const X=u(z,U,w);r!==X&&(r=X,l(r.object)),K=p(_,z,U,H),K&&g(_,z,U,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(_,w,U,z),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,w,U){const z=U.wireframe===!0;let H=n[_.id];H===void 0&&(H={},n[_.id]=H);let K=H[w.id];K===void 0&&(K={},H[w.id]=K);let X=K[z];return X===void 0&&(X=d(c()),K[z]=X),X}function d(_){const w=[],U=[],z=[];for(let H=0;H<e;H++)w[H]=0,U[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:z,object:_,attributes:{},index:null}}function p(_,w,U,z){const H=r.attributes,K=w.attributes;let X=0;const et=U.getAttributes();for(const Y in et)if(et[Y].location>=0){const N=H[Y];let L=K[Y];if(L===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(L=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(L=_.instanceColor)),N===void 0||N.attribute!==L||L&&N.data!==L.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(_,w,U,z){const H={},K=w.attributes;let X=0;const et=U.getAttributes();for(const Y in et)if(et[Y].location>=0){let N=K[Y];N===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(N=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(N=_.instanceColor));const L={};L.attribute=N,N&&N.data&&(L.data=N.data),H[Y]=L,X++}r.attributes=H,r.attributesNum=X,r.index=z}function v(){const _=r.newAttributes;for(let w=0,U=_.length;w<U;w++)_[w]=0}function m(_){f(_,0)}function f(_,w){const U=r.newAttributes,z=r.enabledAttributes,H=r.attributeDivisors;U[_]=1,z[_]===0&&(s.enableVertexAttribArray(_),z[_]=1),H[_]!==w&&(s.vertexAttribDivisor(_,w),H[_]=w)}function T(){const _=r.newAttributes,w=r.enabledAttributes;for(let U=0,z=w.length;U<z;U++)w[U]!==_[U]&&(s.disableVertexAttribArray(U),w[U]=0)}function y(_,w,U,z,H,K,X){X===!0?s.vertexAttribIPointer(_,w,U,H,K):s.vertexAttribPointer(_,w,U,z,H,K)}function x(_,w,U,z){v();const H=z.attributes,K=U.getAttributes(),X=w.defaultAttributeValues;for(const et in K){const Y=K[et];if(Y.location>=0){let dt=H[et];if(dt===void 0&&(et==="instanceMatrix"&&_.instanceMatrix&&(dt=_.instanceMatrix),et==="instanceColor"&&_.instanceColor&&(dt=_.instanceColor)),dt!==void 0){const N=dt.normalized,L=dt.itemSize,ot=t.get(dt);if(ot===void 0)continue;const gt=ot.buffer,k=ot.type,$=ot.bytesPerElement,rt=k===s.INT||k===s.UNSIGNED_INT||dt.gpuType===So;if(dt.isInterleavedBufferAttribute){const q=dt.data,ht=q.stride,Lt=dt.offset;if(q.isInstancedInterleavedBuffer){for(let ft=0;ft<Y.locationSize;ft++)f(Y.location+ft,q.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ft=0;ft<Y.locationSize;ft++)m(Y.location+ft);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let ft=0;ft<Y.locationSize;ft++)y(Y.location+ft,L/Y.locationSize,k,N,ht*$,(Lt+L/Y.locationSize*ft)*$,rt)}else{if(dt.isInstancedBufferAttribute){for(let q=0;q<Y.locationSize;q++)f(Y.location+q,dt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let q=0;q<Y.locationSize;q++)m(Y.location+q);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let q=0;q<Y.locationSize;q++)y(Y.location+q,L/Y.locationSize,k,N,L*$,L/Y.locationSize*q*$,rt)}}else if(X!==void 0){const N=X[et];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}T()}function I(){D();for(const _ in n){const w=n[_];for(const U in w){const z=w[U];for(const H in z)h(z[H].object),delete z[H];delete w[U]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const U in w){const z=w[U];for(const H in z)h(z[H].object),delete z[H];delete w[U]}delete n[_.id]}function P(_){for(const w in n){const U=n[w];if(U[_.id]===void 0)continue;const z=U[_.id];for(const H in z)h(z[H].object),delete z[H];delete U[_.id]}}function D(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function cp(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==$e&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===Ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==_n&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==pn&&!D)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:I,maxSamples:C}}function hp(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Bn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,y=T*4;let x=f.clippingState||null;c.value=x,x=h(g,d,y,p);for(let I=0;I!==y;++I)x[I]=e[I];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function up(s){let t=new WeakMap;function e(o,a){return a===zr?o.mapping=Mi:a===Gr&&(o.mapping=yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===zr||a===Gr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Lh(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const mi=4,Na=[.125,.215,.35,.446,.526,.582],Vn=20,Tr=new Yc,Oa=new qt;let br=null,wr=0,Ar=0,Rr=!1;const zn=(1+Math.sqrt(5))/2,hi=1/zn,Fa=[new R(-zn,hi,0),new R(zn,hi,0),new R(-hi,0,zn),new R(hi,0,zn),new R(0,zn,-hi),new R(0,zn,hi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Ba{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){br=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ga(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(br,wr,Ar),this._renderer.xr.enabled=Rr,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),br=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ki,format:$e,colorSpace:Ti,depthBuffer:!1},i=za(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=za(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dp(r)),this._blurMaterial=fp(r,t,e)}return i}_compileMaterial(t){const e=new St(this._lodPlanes[0],t);this._renderer.compile(e,Tr)}_sceneToCubeUV(t,e,n,i){const a=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Oa),h.toneMapping=wn,h.autoClear=!1;const p=new Re({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new St(new fe,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Oa),v=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):T===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;As(i,T*y,f>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Mi||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ga());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;As(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fa[(i-r-1)%Fa.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new St(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Vn;m>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const f=[];let T=0;for(let P=0;P<Vn;++P){const D=P/v,E=Math.exp(-D*D/2);f.push(E),P===0?T+=E:P<m&&(T+=2*E)}for(let P=0;P<f.length;P++)f[P]=f[P]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],I=3*x*(i>y-mi?i-y+mi:0),C=4*(this._cubeSize-x);As(e,I,C,3*x,2*x),c.setRenderTarget(e),c.render(u,Tr)}}function dp(s){const t=[],e=[],n=[];let i=s;const r=s-mi+1+Na.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-mi?c=Na[o-s+mi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,D=C>2?0:-1,E=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];T.set(E,v*g*C),y.set(d,m*g*C);const _=[C,C,C,C,C,C];x.set(_,f*g*C)}const I=new pe;I.setAttribute("position",new je(T,v)),I.setAttribute("uv",new je(y,m)),I.setAttribute("faceIndex",new je(x,f)),t.push(I),i>mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function za(s,t,e){const n=new Xn(s,t,e);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function fp(s,t,e){const n=new Float32Array(Vn),i=new R(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ga(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ka(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Bo(){return`

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
	`}function pp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===zr||c===Gr,h=c===Mi||c===yi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ba(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ba(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function mp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&fi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gp(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let y=0,x=T.length;y<x;y+=3){const I=T[y+0],C=T[y+1],P=T[y+2];d.push(I,C,C,P,P,I)}}else if(g!==void 0){const T=g.array;v=g.version;for(let y=0,x=T.length/3-1;y<x;y+=3){const I=y+0,C=y+1,P=y+2;d.push(I,C,C,P,P,I)}}else return;const m=new(Tc(d)?Cc:Rc)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function _p(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xp(s,t,e){const n=new WeakMap,i=new ie;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let _=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var p=_;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let I=a.attributes.position.count*x,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const P=new Float32Array(I*C*4*u),D=new wc(P,I,C,u);D.type=pn,D.needsUpdate=!0;const E=x*4;for(let w=0;w<u;w++){const U=f[w],z=T[w],H=y[w],K=I*C*4*w;for(let X=0;X<U.count;X++){const et=X*E;g===!0&&(i.fromBufferAttribute(U,X),P[K+et+0]=i.x,P[K+et+1]=i.y,P[K+et+2]=i.z,P[K+et+3]=0),v===!0&&(i.fromBufferAttribute(z,X),P[K+et+4]=i.x,P[K+et+5]=i.y,P[K+et+6]=i.z,P[K+et+7]=0),m===!0&&(i.fromBufferAttribute(H,X),P[K+et+8]=i.x,P[K+et+9]=i.y,P[K+et+10]=i.z,P[K+et+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new mt(I,C)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Mp(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Zc=new Ce,Va=new Nc(1,1),Kc=new wc,$c=new ph,Jc=new Dc,Ha=[],Wa=[],Xa=new Float32Array(16),Ya=new Float32Array(9),qa=new Float32Array(4);function Ri(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ha[i];if(r===void 0&&(r=new Float32Array(i),Ha[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function qs(s,t){let e=Wa[t];e===void 0&&(e=new Int32Array(t),Wa[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function yp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function Tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function bp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;qa.set(n),s.uniformMatrix2fv(this.addr,!1,qa),ge(e,n)}}function wp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Ya.set(n),s.uniformMatrix3fv(this.addr,!1,Ya),ge(e,n)}}function Ap(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Xa.set(n),s.uniformMatrix4fv(this.addr,!1,Xa),ge(e,n)}}function Rp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function Pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function Lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function Dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function Op(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Va.compareFunction=Ec,r=Va):r=Zc,e.setTexture2D(t||r,i)}function Fp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||$c,i)}function Bp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Jc,i)}function zp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Kc,i)}function Gp(s){switch(s){case 5126:return yp;case 35664:return Sp;case 35665:return Ep;case 35666:return Tp;case 35674:return bp;case 35675:return wp;case 35676:return Ap;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Ip;case 36295:return Up;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}function kp(s,t){s.uniform1fv(this.addr,t)}function Vp(s,t){const e=Ri(t,this.size,2);s.uniform2fv(this.addr,e)}function Hp(s,t){const e=Ri(t,this.size,3);s.uniform3fv(this.addr,e)}function Wp(s,t){const e=Ri(t,this.size,4);s.uniform4fv(this.addr,e)}function Xp(s,t){const e=Ri(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Yp(s,t){const e=Ri(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qp(s,t){const e=Ri(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Zp(s,t){s.uniform1iv(this.addr,t)}function Kp(s,t){s.uniform2iv(this.addr,t)}function $p(s,t){s.uniform3iv(this.addr,t)}function Jp(s,t){s.uniform4iv(this.addr,t)}function jp(s,t){s.uniform1uiv(this.addr,t)}function Qp(s,t){s.uniform2uiv(this.addr,t)}function tm(s,t){s.uniform3uiv(this.addr,t)}function em(s,t){s.uniform4uiv(this.addr,t)}function nm(s,t,e){const n=this.cache,i=t.length,r=qs(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Zc,r[o])}function im(s,t,e){const n=this.cache,i=t.length,r=qs(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||$c,r[o])}function sm(s,t,e){const n=this.cache,i=t.length,r=qs(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Jc,r[o])}function rm(s,t,e){const n=this.cache,i=t.length,r=qs(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Kc,r[o])}function om(s){switch(s){case 5126:return kp;case 35664:return Vp;case 35665:return Hp;case 35666:return Wp;case 35674:return Xp;case 35675:return Yp;case 35676:return qp;case 5124:case 35670:return Zp;case 35667:case 35671:return Kp;case 35668:case 35672:return $p;case 35669:case 35673:return Jp;case 5125:return jp;case 36294:return Qp;case 36295:return tm;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}class am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gp(e.type)}}class cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=om(e.type)}}class lm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function Za(s,t){s.seq.push(t),s.map[t.id]=t}function hm(s,t,e){const n=s.name,i=n.length;for(Cr.lastIndex=0;;){const r=Cr.exec(n),o=Cr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Za(e,l===void 0?new am(a,s,t):new cm(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new lm(a),Za(e,u)),e=u}}}class Ns{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);hm(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ka(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const um=37297;let dm=0;function fm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const $a=new kt;function pm(s){Jt._getMatrix($a,Jt.workingColorSpace,s);const t=`mat3( ${$a.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case Os:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ja(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+fm(s.getShaderSource(t),o)}else return i}function mm(s,t){const e=pm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gm(s,t){let e;switch(t){case wl:e="Linear";break;case Al:e="Reinhard";break;case Rl:e="Cineon";break;case hc:e="ACESFilmic";break;case Pl:e="AgX";break;case Ll:e="Neutral";break;case Cl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rs=new R;function _m(){Jt.getLuminanceCoefficients(Rs);const s=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function xm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Oi(s){return s!==""}function ja(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(s){return s.replace(ym,Em)}const Sm=new Map;function Em(s,t){let e=Wt[t];if(e===void 0){const n=Sm.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mo(e)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(s){return s.replace(Tm,bm)}function bm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ec(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===cc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function Am(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mi:case yi:t="ENVMAP_TYPE_CUBE";break;case Vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Cm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lc:t="ENVMAP_BLENDING_MULTIPLY";break;case Tl:t="ENVMAP_BLENDING_MIX";break;case bl:t="ENVMAP_BLENDING_ADD";break}return t}function Pm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lm(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=wm(e),l=Am(e),h=Rm(e),u=Cm(e),d=Pm(e),p=vm(e),g=xm(r),v=i.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),f.length>0&&(f+=`
`)):(m=[ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),f=[ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==wn?gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,mm("linearToOutputTexel",e.outputColorSpace),_m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),o=Mo(o),o=ja(o,e),o=Qa(o,e),a=Mo(a),a=ja(a,e),a=Qa(a,e),o=tc(o),a=tc(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=T+m+o,x=T+f+a,I=Ka(i,i.VERTEX_SHADER,y),C=Ka(i,i.FRAGMENT_SHADER,x);i.attachShader(v,I),i.attachShader(v,C),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(w){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(v).trim(),z=i.getShaderInfoLog(I).trim(),H=i.getShaderInfoLog(C).trim();let K=!0,X=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,I,C);else{const et=Ja(i,I,"vertex"),Y=Ja(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+et+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||H==="")&&(X=!1);X&&(w.diagnostics={runnable:K,programLog:U,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(I),i.deleteShader(C),D=new Ns(i,v),E=Mm(i,v)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,um)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}let Dm=0;class Im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Um(t),e.set(t,n)),n}}class Um{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}}function Nm(s,t,e,n,i,r,o){const a=new Co,c=new Im,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,_,w,U,z){const H=U.fog,K=z.geometry,X=E.isMeshStandardMaterial?U.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),Y=et&&et.mapping===Vs?et.image.height:null,dt=g[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const N=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,L=N!==void 0?N.length:0;let ot=0;K.morphAttributes.position!==void 0&&(ot=1),K.morphAttributes.normal!==void 0&&(ot=2),K.morphAttributes.color!==void 0&&(ot=3);let gt,k,$,rt;if(dt){const ee=tn[dt];gt=ee.vertexShader,k=ee.fragmentShader}else gt=E.vertexShader,k=E.fragmentShader,c.update(E),$=c.getVertexShaderID(E),rt=c.getFragmentShaderID(E);const q=s.getRenderTarget(),ht=s.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,ft=z.isBatchedMesh===!0,Dt=!!E.map,Q=!!E.matcap,tt=!!et,b=!!E.aoMap,xt=!!E.lightMap,it=!!E.bumpMap,pt=!!E.normalMap,at=!!E.displacementMap,It=!!E.emissiveMap,ut=!!E.metalnessMap,A=!!E.roughnessMap,M=E.anisotropy>0,G=E.clearcoat>0,J=E.dispersion>0,st=E.iridescence>0,j=E.sheen>0,Pt=E.transmission>0,_t=M&&!!E.anisotropyMap,Tt=G&&!!E.clearcoatMap,Xt=G&&!!E.clearcoatNormalMap,ct=G&&!!E.clearcoatRoughnessMap,wt=st&&!!E.iridescenceMap,Nt=st&&!!E.iridescenceThicknessMap,Ft=j&&!!E.sheenColorMap,Rt=j&&!!E.sheenRoughnessMap,Zt=!!E.specularMap,Ht=!!E.specularColorMap,re=!!E.specularIntensityMap,O=Pt&&!!E.transmissionMap,Mt=Pt&&!!E.thicknessMap,Z=!!E.gradientMap,nt=!!E.alphaMap,bt=E.alphaTest>0,Et=!!E.alphaHash,Gt=!!E.extensions;let le=wn;E.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(le=s.toneMapping);const ye={shaderID:dt,shaderType:E.type,shaderName:E.name,vertexShader:gt,fragmentShader:k,defines:E.defines,customVertexShaderID:$,customFragmentShaderID:rt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ft,batchingColor:ft&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?s.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ti,alphaToCoverage:!!E.alphaToCoverage,map:Dt,matcap:Q,envMap:tt,envMapMode:tt&&et.mapping,envMapCubeUVHeight:Y,aoMap:b,lightMap:xt,bumpMap:it,normalMap:pt,displacementMap:d&&at,emissiveMap:It,normalMapObjectSpace:pt&&E.normalMapType===Nl,normalMapTangentSpace:pt&&E.normalMapType===Sc,metalnessMap:ut,roughnessMap:A,anisotropy:M,anisotropyMap:_t,clearcoat:G,clearcoatMap:Tt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ct,dispersion:J,iridescence:st,iridescenceMap:wt,iridescenceThicknessMap:Nt,sheen:j,sheenColorMap:Ft,sheenRoughnessMap:Rt,specularMap:Zt,specularColorMap:Ht,specularIntensityMap:re,transmission:Pt,transmissionMap:O,thicknessMap:Mt,gradientMap:Z,opaque:E.transparent===!1&&E.blending===gi&&E.alphaToCoverage===!1,alphaMap:nt,alphaTest:bt,alphaHash:Et,combine:E.combine,mapUv:Dt&&v(E.map.channel),aoMapUv:b&&v(E.aoMap.channel),lightMapUv:xt&&v(E.lightMap.channel),bumpMapUv:it&&v(E.bumpMap.channel),normalMapUv:pt&&v(E.normalMap.channel),displacementMapUv:at&&v(E.displacementMap.channel),emissiveMapUv:It&&v(E.emissiveMap.channel),metalnessMapUv:ut&&v(E.metalnessMap.channel),roughnessMapUv:A&&v(E.roughnessMap.channel),anisotropyMapUv:_t&&v(E.anisotropyMap.channel),clearcoatMapUv:Tt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(E.sheenRoughnessMap.channel),specularMapUv:Zt&&v(E.specularMap.channel),specularColorMapUv:Ht&&v(E.specularColorMap.channel),specularIntensityMapUv:re&&v(E.specularIntensityMap.channel),transmissionMapUv:O&&v(E.transmissionMap.channel),thicknessMapUv:Mt&&v(E.thicknessMap.channel),alphaMapUv:nt&&v(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(pt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(Dt||nt),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ht,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ot,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,decodeVideoTexture:Dt&&E.map.isVideoTexture===!0&&Jt.getTransfer(E.map.colorSpace)===ne,decodeVideoTextureEmissive:It&&E.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(E.emissiveMap.colorSpace)===ne,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===He,flipSided:E.side===Le,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Gt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&E.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function f(E){const _=[];if(E.shaderID?_.push(E.shaderID):(_.push(E.customVertexShaderID),_.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)_.push(w),_.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(T(_,E),y(_,E),_.push(s.outputColorSpace)),_.push(E.customProgramCacheKey),_.join()}function T(E,_){E.push(_.precision),E.push(_.outputColorSpace),E.push(_.envMapMode),E.push(_.envMapCubeUVHeight),E.push(_.mapUv),E.push(_.alphaMapUv),E.push(_.lightMapUv),E.push(_.aoMapUv),E.push(_.bumpMapUv),E.push(_.normalMapUv),E.push(_.displacementMapUv),E.push(_.emissiveMapUv),E.push(_.metalnessMapUv),E.push(_.roughnessMapUv),E.push(_.anisotropyMapUv),E.push(_.clearcoatMapUv),E.push(_.clearcoatNormalMapUv),E.push(_.clearcoatRoughnessMapUv),E.push(_.iridescenceMapUv),E.push(_.iridescenceThicknessMapUv),E.push(_.sheenColorMapUv),E.push(_.sheenRoughnessMapUv),E.push(_.specularMapUv),E.push(_.specularColorMapUv),E.push(_.specularIntensityMapUv),E.push(_.transmissionMapUv),E.push(_.thicknessMapUv),E.push(_.combine),E.push(_.fogExp2),E.push(_.sizeAttenuation),E.push(_.morphTargetsCount),E.push(_.morphAttributeCount),E.push(_.numDirLights),E.push(_.numPointLights),E.push(_.numSpotLights),E.push(_.numSpotLightMaps),E.push(_.numHemiLights),E.push(_.numRectAreaLights),E.push(_.numDirLightShadows),E.push(_.numPointLightShadows),E.push(_.numSpotLightShadows),E.push(_.numSpotLightShadowsWithMaps),E.push(_.numLightProbes),E.push(_.shadowMapType),E.push(_.toneMapping),E.push(_.numClippingPlanes),E.push(_.numClipIntersection),E.push(_.depthPacking)}function y(E,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const _=g[E.type];let w;if(_){const U=tn[_];w=Ah.clone(U.uniforms)}else w=E.uniforms;return w}function I(E,_){let w;for(let U=0,z=h.length;U<z;U++){const H=h[U];if(H.cacheKey===_){w=H,++w.usedTimes;break}}return w===void 0&&(w=new Lm(s,_,E,r),h.push(w)),w}function C(E){if(--E.usedTimes===0){const _=h.indexOf(E);h[_]=h[h.length-1],h.pop(),E.destroy()}}function P(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:D}}function Om(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Fm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function nc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ic(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,v,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Fm),n.length>1&&n.sort(d||nc),i.length>1&&i.sort(d||nc)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Bm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new ic,s.set(n,[o])):i>=r.length?(o=new ic,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function zm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new qt};break;case"SpotLight":e={position:new R,direction:new R,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let km=0;function Vm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Hm(s){const t=new zm,e=Gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new se,o=new se;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,T=0,y=0,x=0,I=0,C=0,P=0;l.sort(Vm);for(let E=0,_=l.length;E<_;E++){const w=l[E],U=w.color,z=w.intensity,H=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=U.r*z,u+=U.g*z,d+=U.b*z;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],z);P++}else if(w.isDirectionalLight){const X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const et=w.shadow,Y=e.get(w);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=w.shadow.matrix,T++}n.directional[p]=X,p++}else if(w.isSpotLight){const X=t.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(U).multiplyScalar(z),X.distance=H,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[v]=X;const et=w.shadow;if(w.map&&(n.spotLightMap[I]=w.map,I++,et.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[v]=et.matrix,w.castShadow){const Y=e.get(w);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=K,x++}v++}else if(w.isRectAreaLight){const X=t.get(w);X.color.copy(U).multiplyScalar(z),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=X,m++}else if(w.isPointLight){const X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const et=w.shadow,Y=e.get(w);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,Y.shadowCameraNear=et.camera.near,Y.shadowCameraFar=et.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=X,g++}else if(w.isHemisphereLight){const X=t.get(w);X.skyColor.copy(w.color).multiplyScalar(z),X.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[f]=X,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==T||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==I||D.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=T,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=I,D.numLightProbes=P,n.version=km++)}function c(l,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const y=l[f];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function sc(s){const t=new Hm(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Wm(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new sc(s),t.set(i,[a])):r>=o.length?(a=new sc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
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
}`;function qm(s,t,e){let n=new Lo;const i=new mt,r=new mt,o=new ie,a=new mu({depthPacking:Ul}),c=new gu,l={},h=e.maxTextureSize,u={[An]:Le,[Le]:An,[He]:He},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Xm,fragmentShader:Ym}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let f=this.type;this.render=function(C,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=s.getRenderTarget(),_=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),U=s.state;U.setBlending(bn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=f!==dn&&this.type===dn,H=f===dn&&this.type!==dn;for(let K=0,X=C.length;K<X;K++){const et=C[K],Y=et.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const dt=Y.getFrameExtents();if(i.multiply(dt),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/dt.x),i.x=r.x*dt.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/dt.y),i.y=r.y*dt.y,Y.mapSize.y=r.y)),Y.map===null||z===!0||H===!0){const L=this.type!==dn?{minFilter:Je,magFilter:Je}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Xn(i.x,i.y,L),Y.map.texture.name=et.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const N=Y.getViewportCount();for(let L=0;L<N;L++){const ot=Y.getViewport(L);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),U.viewport(o),Y.updateMatrices(et,L),n=Y.getFrustum(),x(P,D,Y.camera,et,this.type)}Y.isPointLightShadow!==!0&&this.type===dn&&T(Y,D),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(E,_,w)};function T(C,P){const D=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(P,null,D,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(P,null,D,p,v,null)}function y(C,P,D,E){let _=null;const w=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)_=w;else if(_=D.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const U=_.uuid,z=P.uuid;let H=l[U];H===void 0&&(H={},l[U]=H);let K=H[z];K===void 0&&(K=_.clone(),H[z]=K,P.addEventListener("dispose",I)),_=K}if(_.visible=P.visible,_.wireframe=P.wireframe,E===dn?_.side=P.shadowSide!==null?P.shadowSide:P.side:_.side=P.shadowSide!==null?P.shadowSide:u[P.side],_.alphaMap=P.alphaMap,_.alphaTest=P.alphaTest,_.map=P.map,_.clipShadows=P.clipShadows,_.clippingPlanes=P.clippingPlanes,_.clipIntersection=P.clipIntersection,_.displacementMap=P.displacementMap,_.displacementScale=P.displacementScale,_.displacementBias=P.displacementBias,_.wireframeLinewidth=P.wireframeLinewidth,_.linewidth=P.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const U=s.properties.get(_);U.light=D}return _}function x(C,P,D,E,_){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===dn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const z=t.update(C),H=C.material;if(Array.isArray(H)){const K=z.groups;for(let X=0,et=K.length;X<et;X++){const Y=K[X],dt=H[Y.materialIndex];if(dt&&dt.visible){const N=y(C,dt,E,_);C.onBeforeShadow(s,C,P,D,z,N,Y),s.renderBufferDirect(D,null,z,N,C,Y),C.onAfterShadow(s,C,P,D,z,N,Y)}}}else if(H.visible){const K=y(C,H,E,_);C.onBeforeShadow(s,C,P,D,z,K,null),s.renderBufferDirect(D,null,z,K,C,null),C.onAfterShadow(s,C,P,D,z,K,null)}}const U=C.children;for(let z=0,H=U.length;z<H;z++)x(U[z],P,D,E,_)}function I(C){C.target.removeEventListener("dispose",I);for(const D in l){const E=l[D],_=C.target.uuid;_ in E&&(E[_].dispose(),delete E[_])}}}const Zm={[Dr]:Ir,[Ur]:Fr,[Nr]:Br,[xi]:Or,[Ir]:Dr,[Fr]:Ur,[Br]:Nr,[Or]:xi};function Km(s,t){function e(){let O=!1;const Mt=new ie;let Z=null;const nt=new ie(0,0,0,0);return{setMask:function(bt){Z!==bt&&!O&&(s.colorMask(bt,bt,bt,bt),Z=bt)},setLocked:function(bt){O=bt},setClear:function(bt,Et,Gt,le,ye){ye===!0&&(bt*=le,Et*=le,Gt*=le),Mt.set(bt,Et,Gt,le),nt.equals(Mt)===!1&&(s.clearColor(bt,Et,Gt,le),nt.copy(Mt))},reset:function(){O=!1,Z=null,nt.set(-1,0,0,0)}}}function n(){let O=!1,Mt=!1,Z=null,nt=null,bt=null;return{setReversed:function(Et){if(Mt!==Et){const Gt=t.get("EXT_clip_control");Mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const le=bt;bt=null,this.setClear(le)}Mt=Et},getReversed:function(){return Mt},setTest:function(Et){Et?q(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(Et){Z!==Et&&!O&&(s.depthMask(Et),Z=Et)},setFunc:function(Et){if(Mt&&(Et=Zm[Et]),nt!==Et){switch(Et){case Dr:s.depthFunc(s.NEVER);break;case Ir:s.depthFunc(s.ALWAYS);break;case Ur:s.depthFunc(s.LESS);break;case xi:s.depthFunc(s.LEQUAL);break;case Nr:s.depthFunc(s.EQUAL);break;case Or:s.depthFunc(s.GEQUAL);break;case Fr:s.depthFunc(s.GREATER);break;case Br:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}nt=Et}},setLocked:function(Et){O=Et},setClear:function(Et){bt!==Et&&(Mt&&(Et=1-Et),s.clearDepth(Et),bt=Et)},reset:function(){O=!1,Z=null,nt=null,bt=null,Mt=!1}}}function i(){let O=!1,Mt=null,Z=null,nt=null,bt=null,Et=null,Gt=null,le=null,ye=null;return{setTest:function(ee){O||(ee?q(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(ee){Mt!==ee&&!O&&(s.stencilMask(ee),Mt=ee)},setFunc:function(ee,We,on){(Z!==ee||nt!==We||bt!==on)&&(s.stencilFunc(ee,We,on),Z=ee,nt=We,bt=on)},setOp:function(ee,We,on){(Et!==ee||Gt!==We||le!==on)&&(s.stencilOp(ee,We,on),Et=ee,Gt=We,le=on)},setLocked:function(ee){O=ee},setClear:function(ee){ye!==ee&&(s.clearStencil(ee),ye=ee)},reset:function(){O=!1,Mt=null,Z=null,nt=null,bt=null,Et=null,Gt=null,le=null,ye=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,y=null,x=null,I=null,C=null,P=new qt(0,0,0),D=0,E=!1,_=null,w=null,U=null,z=null,H=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,et=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=et>=2);let dt=null,N={};const L=s.getParameter(s.SCISSOR_BOX),ot=s.getParameter(s.VIEWPORT),gt=new ie().fromArray(L),k=new ie().fromArray(ot);function $(O,Mt,Z,nt){const bt=new Uint8Array(4),Et=s.createTexture();s.bindTexture(O,Et),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<Z;Gt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,nt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(Mt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return Et}const rt={};rt[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),rt[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),rt[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(s.DEPTH_TEST),o.setFunc(xi),it(!1),pt(qo),q(s.CULL_FACE),b(bn);function q(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function ht(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Lt(O,Mt){return u[O]!==Mt?(s.bindFramebuffer(O,Mt),u[O]=Mt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Mt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function ft(O,Mt){let Z=p,nt=!1;if(O){Z=d.get(Mt),Z===void 0&&(Z=[],d.set(Mt,Z));const bt=O.textures;if(Z.length!==bt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,Gt=bt.length;Et<Gt;Et++)Z[Et]=s.COLOR_ATTACHMENT0+Et;Z.length=bt.length,nt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,nt=!0);nt&&s.drawBuffers(Z)}function Dt(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Q={[kn]:s.FUNC_ADD,[al]:s.FUNC_SUBTRACT,[cl]:s.FUNC_REVERSE_SUBTRACT};Q[ll]=s.MIN,Q[hl]=s.MAX;const tt={[ul]:s.ZERO,[dl]:s.ONE,[fl]:s.SRC_COLOR,[Pr]:s.SRC_ALPHA,[xl]:s.SRC_ALPHA_SATURATE,[_l]:s.DST_COLOR,[ml]:s.DST_ALPHA,[pl]:s.ONE_MINUS_SRC_COLOR,[Lr]:s.ONE_MINUS_SRC_ALPHA,[vl]:s.ONE_MINUS_DST_COLOR,[gl]:s.ONE_MINUS_DST_ALPHA,[Ml]:s.CONSTANT_COLOR,[yl]:s.ONE_MINUS_CONSTANT_COLOR,[Sl]:s.CONSTANT_ALPHA,[El]:s.ONE_MINUS_CONSTANT_ALPHA};function b(O,Mt,Z,nt,bt,Et,Gt,le,ye,ee){if(O===bn){v===!0&&(ht(s.BLEND),v=!1);return}if(v===!1&&(q(s.BLEND),v=!0),O!==ol){if(O!==m||ee!==E){if((f!==kn||x!==kn)&&(s.blendEquation(s.FUNC_ADD),f=kn,x=kn),ee)switch(O){case gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zo:s.blendFunc(s.ONE,s.ONE);break;case Ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $o:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $o:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,y=null,I=null,C=null,P.set(0,0,0),D=0,m=O,E=ee}return}bt=bt||Mt,Et=Et||Z,Gt=Gt||nt,(Mt!==f||bt!==x)&&(s.blendEquationSeparate(Q[Mt],Q[bt]),f=Mt,x=bt),(Z!==T||nt!==y||Et!==I||Gt!==C)&&(s.blendFuncSeparate(tt[Z],tt[nt],tt[Et],tt[Gt]),T=Z,y=nt,I=Et,C=Gt),(le.equals(P)===!1||ye!==D)&&(s.blendColor(le.r,le.g,le.b,ye),P.copy(le),D=ye),m=O,E=!1}function xt(O,Mt){O.side===He?ht(s.CULL_FACE):q(s.CULL_FACE);let Z=O.side===Le;Mt&&(Z=!Z),it(Z),O.blending===gi&&O.transparent===!1?b(bn):b(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const nt=O.stencilWrite;a.setTest(nt),nt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),It(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?q(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(O){_!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),_=O)}function pt(O){O!==sl?(q(s.CULL_FACE),O!==w&&(O===qo?s.cullFace(s.BACK):O===rl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),w=O}function at(O){O!==U&&(X&&s.lineWidth(O),U=O)}function It(O,Mt,Z){O?(q(s.POLYGON_OFFSET_FILL),(z!==Mt||H!==Z)&&(s.polygonOffset(Mt,Z),z=Mt,H=Z)):ht(s.POLYGON_OFFSET_FILL)}function ut(O){O?q(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function A(O){O===void 0&&(O=s.TEXTURE0+K-1),dt!==O&&(s.activeTexture(O),dt=O)}function M(O,Mt,Z){Z===void 0&&(dt===null?Z=s.TEXTURE0+K-1:Z=dt);let nt=N[Z];nt===void 0&&(nt={type:void 0,texture:void 0},N[Z]=nt),(nt.type!==O||nt.texture!==Mt)&&(dt!==Z&&(s.activeTexture(Z),dt=Z),s.bindTexture(O,Mt||rt[O]),nt.type=O,nt.texture=Mt)}function G(){const O=N[dt];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(O){gt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),gt.copy(O))}function Rt(O){k.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),k.copy(O))}function Zt(O,Mt){let Z=l.get(Mt);Z===void 0&&(Z=new WeakMap,l.set(Mt,Z));let nt=Z.get(O);nt===void 0&&(nt=s.getUniformBlockIndex(Mt,O.name),Z.set(O,nt))}function Ht(O,Mt){const nt=l.get(Mt).get(O);c.get(Mt)!==nt&&(s.uniformBlockBinding(Mt,nt,O.__bindingPointIndex),c.set(Mt,nt))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},dt=null,N={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,y=null,x=null,I=null,C=null,P=new qt(0,0,0),D=0,E=!1,_=null,w=null,U=null,z=null,H=null,gt.set(0,0,s.canvas.width,s.canvas.height),k.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:ht,bindFramebuffer:Lt,drawBuffers:ft,useProgram:Dt,setBlending:b,setMaterial:xt,setFlipSided:it,setCullFace:pt,setLineWidth:at,setPolygonOffset:It,setScissorTest:ut,activeTexture:A,bindTexture:M,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:st,texImage2D:wt,texImage3D:Nt,updateUBOMapping:Zt,uniformBlockBinding:Ht,texStorage2D:Xt,texStorage3D:ct,texSubImage2D:j,texSubImage3D:Pt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Ft,viewport:Rt,reset:re}}function $m(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):Bs("canvas")}function v(A,M,G){let J=1;const st=ut(A);if((st.width>G||st.height>G)&&(J=G/Math.max(st.width,st.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(J*st.width),Pt=Math.floor(J*st.height);u===void 0&&(u=g(j,Pt));const _t=M?g(j,Pt):u;return _t.width=j,_t.height=Pt,_t.getContext("2d").drawImage(A,0,0,j,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+j+"x"+Pt+")."),_t}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,M,G,J,st=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===s.RED&&(G===s.FLOAT&&(j=s.R32F),G===s.HALF_FLOAT&&(j=s.R16F),G===s.UNSIGNED_BYTE&&(j=s.R8)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.R8UI),G===s.UNSIGNED_SHORT&&(j=s.R16UI),G===s.UNSIGNED_INT&&(j=s.R32UI),G===s.BYTE&&(j=s.R8I),G===s.SHORT&&(j=s.R16I),G===s.INT&&(j=s.R32I)),M===s.RG&&(G===s.FLOAT&&(j=s.RG32F),G===s.HALF_FLOAT&&(j=s.RG16F),G===s.UNSIGNED_BYTE&&(j=s.RG8)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RG8UI),G===s.UNSIGNED_SHORT&&(j=s.RG16UI),G===s.UNSIGNED_INT&&(j=s.RG32UI),G===s.BYTE&&(j=s.RG8I),G===s.SHORT&&(j=s.RG16I),G===s.INT&&(j=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGB8UI),G===s.UNSIGNED_SHORT&&(j=s.RGB16UI),G===s.UNSIGNED_INT&&(j=s.RGB32UI),G===s.BYTE&&(j=s.RGB8I),G===s.SHORT&&(j=s.RGB16I),G===s.INT&&(j=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),G===s.UNSIGNED_INT&&(j=s.RGBA32UI),G===s.BYTE&&(j=s.RGBA8I),G===s.SHORT&&(j=s.RGBA16I),G===s.INT&&(j=s.RGBA32I)),M===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),M===s.RGBA){const Pt=st?Os:Jt.getTransfer(J);G===s.FLOAT&&(j=s.RGBA32F),G===s.HALF_FLOAT&&(j=s.RGBA16F),G===s.UNSIGNED_BYTE&&(j=Pt===ne?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(A,M){let G;return A?M===null||M===Wn||M===Si?G=s.DEPTH24_STENCIL8:M===pn?G=s.DEPTH32F_STENCIL8:M===Wi&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wn||M===Si?G=s.DEPTH_COMPONENT24:M===pn?G=s.DEPTH_COMPONENT32F:M===Wi&&(G=s.DEPTH_COMPONENT16),G}function I(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),D(M),M.isVideoTexture&&h.delete(M)}function P(A){const M=A.target;M.removeEventListener("dispose",P),_(M)}function D(A){const M=n.get(A);if(M.__webglInit===void 0)return;const G=A.source,J=d.get(G);if(J){const st=J[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&E(A),Object.keys(J).length===0&&d.delete(G)}n.remove(A)}function E(A){const M=n.get(A);s.deleteTexture(M.__webglTexture);const G=A.source,J=d.get(G);delete J[M.__cacheKey],o.memory.textures--}function _(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let st=0;st<M.__webglFramebuffer[J].length;st++)s.deleteFramebuffer(M.__webglFramebuffer[J][st]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=A.textures;for(let J=0,st=G.length;J<st;J++){const j=n.get(G[J]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(A)}let w=0;function U(){w=0}function z(){const A=w;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),w+=1,A}function H(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function K(A,M){const G=n.get(A);if(A.isVideoTexture&&at(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(G,A,M);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function X(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){k(G,A,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function et(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){k(G,A,M);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function Y(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){$(G,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}const dt={[Oe]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[kr]:s.MIRRORED_REPEAT},N={[Je]:s.NEAREST,[Dl]:s.NEAREST_MIPMAP_NEAREST,[es]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[$s]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},L={[Ol]:s.NEVER,[Vl]:s.ALWAYS,[Fl]:s.LESS,[Ec]:s.LEQUAL,[Bl]:s.EQUAL,[kl]:s.GEQUAL,[zl]:s.GREATER,[Gl]:s.NOTEQUAL};function ot(A,M){if(M.type===pn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===$s||M.magFilter===es||M.magFilter===Hn||M.minFilter===en||M.minFilter===$s||M.minFilter===es||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,dt[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,dt[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,dt[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,N[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,N[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Je||M.minFilter!==es&&M.minFilter!==Hn||M.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function gt(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const J=M.source;let st=d.get(J);st===void 0&&(st={},d.set(J,st));const j=H(M);if(j!==A.__cacheKey){st[j]===void 0&&(st[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),st[j].usedTimes++;const Pt=st[A.__cacheKey];Pt!==void 0&&(st[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&E(M)),A.__cacheKey=j,A.__webglTexture=st[j].texture}return G}function k(A,M,G){let J=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=s.TEXTURE_3D);const st=gt(A,M),j=M.source;e.bindTexture(J,A.__webglTexture,s.TEXTURE0+G);const Pt=n.get(j);if(j.version!==Pt.__version||st===!0){e.activeTexture(s.TEXTURE0+G);const _t=Jt.getPrimaries(Jt.workingColorSpace),Tt=M.colorSpace===Tn?null:Jt.getPrimaries(M.colorSpace),Xt=M.colorSpace===Tn||_t===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ct=v(M.image,!1,i.maxTextureSize);ct=It(M,ct);const wt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type);let Ft=y(M.internalFormat,wt,Nt,M.colorSpace,M.isVideoTexture);ot(J,M);let Rt;const Zt=M.mipmaps,Ht=M.isVideoTexture!==!0,re=Pt.__version===void 0||st===!0,O=j.dataReady,Mt=I(M,ct);if(M.isDepthTexture)Ft=x(M.format===Ei,M.type),re&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Ft,ct.width,ct.height,0,wt,Nt,null));else if(M.isDataTexture)if(Zt.length>0){Ht&&re&&e.texStorage2D(s.TEXTURE_2D,Mt,Ft,Zt[0].width,Zt[0].height);for(let Z=0,nt=Zt.length;Z<nt;Z++)Rt=Zt[Z],Ht?O&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,wt,Nt,Rt.data):e.texImage2D(s.TEXTURE_2D,Z,Ft,Rt.width,Rt.height,0,wt,Nt,Rt.data);M.generateMipmaps=!1}else Ht?(re&&e.texStorage2D(s.TEXTURE_2D,Mt,Ft,ct.width,ct.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,wt,Nt,ct.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,ct.width,ct.height,0,wt,Nt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,Ft,Zt[0].width,Zt[0].height,ct.depth);for(let Z=0,nt=Zt.length;Z<nt;Z++)if(Rt=Zt[Z],M.format!==$e)if(wt!==null)if(Ht){if(O)if(M.layerUpdates.size>0){const bt=Ua(Rt.width,Rt.height,M.format,M.type);for(const Et of M.layerUpdates){const Gt=Rt.data.subarray(Et*bt/Rt.data.BYTES_PER_ELEMENT,(Et+1)*bt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,Et,Rt.width,Rt.height,1,wt,Gt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Rt.width,Rt.height,ct.depth,wt,Rt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Ft,Rt.width,Rt.height,ct.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Rt.width,Rt.height,ct.depth,wt,Nt,Rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Ft,Rt.width,Rt.height,ct.depth,0,wt,Nt,Rt.data)}else{Ht&&re&&e.texStorage2D(s.TEXTURE_2D,Mt,Ft,Zt[0].width,Zt[0].height);for(let Z=0,nt=Zt.length;Z<nt;Z++)Rt=Zt[Z],M.format!==$e?wt!==null?Ht?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,wt,Rt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Ft,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,wt,Nt,Rt.data):e.texImage2D(s.TEXTURE_2D,Z,Ft,Rt.width,Rt.height,0,wt,Nt,Rt.data)}else if(M.isDataArrayTexture)if(Ht){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,Ft,ct.width,ct.height,ct.depth),O)if(M.layerUpdates.size>0){const Z=Ua(ct.width,ct.height,M.format,M.type);for(const nt of M.layerUpdates){const bt=ct.data.subarray(nt*Z/ct.data.BYTES_PER_ELEMENT,(nt+1)*Z/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,ct.width,ct.height,1,wt,Nt,bt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,wt,Nt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,wt,Nt,ct.data);else if(M.isData3DTexture)Ht?(re&&e.texStorage3D(s.TEXTURE_3D,Mt,Ft,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,wt,Nt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,wt,Nt,ct.data);else if(M.isFramebufferTexture){if(re)if(Ht)e.texStorage2D(s.TEXTURE_2D,Mt,Ft,ct.width,ct.height);else{let Z=ct.width,nt=ct.height;for(let bt=0;bt<Mt;bt++)e.texImage2D(s.TEXTURE_2D,bt,Ft,Z,nt,0,wt,Nt,null),Z>>=1,nt>>=1}}else if(Zt.length>0){if(Ht&&re){const Z=ut(Zt[0]);e.texStorage2D(s.TEXTURE_2D,Mt,Ft,Z.width,Z.height)}for(let Z=0,nt=Zt.length;Z<nt;Z++)Rt=Zt[Z],Ht?O&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,wt,Nt,Rt):e.texImage2D(s.TEXTURE_2D,Z,Ft,wt,Nt,Rt);M.generateMipmaps=!1}else if(Ht){if(re){const Z=ut(ct);e.texStorage2D(s.TEXTURE_2D,Mt,Ft,Z.width,Z.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Nt,ct)}else e.texImage2D(s.TEXTURE_2D,0,Ft,wt,Nt,ct);m(M)&&f(J),Pt.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function $(A,M,G){if(M.image.length!==6)return;const J=gt(A,M),st=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);const j=n.get(st);if(st.version!==j.__version||J===!0){e.activeTexture(s.TEXTURE0+G);const Pt=Jt.getPrimaries(Jt.workingColorSpace),_t=M.colorSpace===Tn?null:Jt.getPrimaries(M.colorSpace),Tt=M.colorSpace===Tn||Pt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Xt=M.isCompressedTexture||M.image[0].isCompressedTexture,ct=M.image[0]&&M.image[0].isDataTexture,wt=[];for(let nt=0;nt<6;nt++)!Xt&&!ct?wt[nt]=v(M.image[nt],!0,i.maxCubemapSize):wt[nt]=ct?M.image[nt].image:M.image[nt],wt[nt]=It(M,wt[nt]);const Nt=wt[0],Ft=r.convert(M.format,M.colorSpace),Rt=r.convert(M.type),Zt=y(M.internalFormat,Ft,Rt,M.colorSpace),Ht=M.isVideoTexture!==!0,re=j.__version===void 0||J===!0,O=st.dataReady;let Mt=I(M,Nt);ot(s.TEXTURE_CUBE_MAP,M);let Z;if(Xt){Ht&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,Zt,Nt.width,Nt.height);for(let nt=0;nt<6;nt++){Z=wt[nt].mipmaps;for(let bt=0;bt<Z.length;bt++){const Et=Z[bt];M.format!==$e?Ft!==null?Ht?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,0,0,Et.width,Et.height,Ft,Et.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,Zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,0,0,Et.width,Et.height,Ft,Rt,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,Zt,Et.width,Et.height,0,Ft,Rt,Et.data)}}}else{if(Z=M.mipmaps,Ht&&re){Z.length>0&&Mt++;const nt=ut(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,Zt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ct){Ht?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt[nt].width,wt[nt].height,Ft,Rt,wt[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Zt,wt[nt].width,wt[nt].height,0,Ft,Rt,wt[nt].data);for(let bt=0;bt<Z.length;bt++){const Gt=Z[bt].image[nt].image;Ht?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,0,0,Gt.width,Gt.height,Ft,Rt,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,Zt,Gt.width,Gt.height,0,Ft,Rt,Gt.data)}}else{Ht?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ft,Rt,wt[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Zt,Ft,Rt,wt[nt]);for(let bt=0;bt<Z.length;bt++){const Et=Z[bt];Ht?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,0,0,Ft,Rt,Et.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,Zt,Ft,Rt,Et.image[nt])}}}m(M)&&f(s.TEXTURE_CUBE_MAP),j.__version=st.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function rt(A,M,G,J,st,j){const Pt=r.convert(G.format,G.colorSpace),_t=r.convert(G.type),Tt=y(G.internalFormat,Pt,_t,G.colorSpace),Xt=n.get(M),ct=n.get(G);if(ct.__renderTarget=M,!Xt.__hasExternalTextures){const wt=Math.max(1,M.width>>j),Nt=Math.max(1,M.height>>j);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,j,Tt,wt,Nt,M.depth,0,Pt,_t,null):e.texImage2D(st,j,Tt,wt,Nt,0,Pt,_t,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),pt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,st,ct.__webglTexture,0,it(M)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,st,ct.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function q(A,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const J=M.depthTexture,st=J&&J.isDepthTexture?J.type:null,j=x(M.stencilBuffer,st),Pt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=it(M);pt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,j,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,A)}else{const J=M.textures;for(let st=0;st<J.length;st++){const j=J[st],Pt=r.convert(j.format,j.colorSpace),_t=r.convert(j.type),Tt=y(j.internalFormat,Pt,_t,j.colorSpace),Xt=it(M);G&&pt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Tt,M.width,M.height):pt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,Tt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const st=J.__webglTexture,j=it(M);if(M.depthTexture.format===_i)pt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(M.depthTexture.format===Ei)pt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const st=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",st)};J.addEventListener("dispose",st),M.__depthDisposeCallback=st}M.__boundDepthTexture=J}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ht(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=s.createRenderbuffer(),q(M.__webglDepthbuffer[J],A,!1);else{const st=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),q(M.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,st)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(A,M,G){const J=n.get(A);M!==void 0&&rt(J.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Lt(A)}function Dt(A){const M=A.texture,G=n.get(A),J=n.get(M);A.addEventListener("dispose",P);const st=A.textures,j=A.isWebGLCubeRenderTarget===!0,Pt=st.length>1;if(Pt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=M.version,o.memory.textures++),j){G.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<M.mipmaps.length;Tt++)G.__webglFramebuffer[_t][Tt]=s.createFramebuffer()}else G.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let _t=0;_t<M.mipmaps.length;_t++)G.__webglFramebuffer[_t]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let _t=0,Tt=st.length;_t<Tt;_t++){const Xt=n.get(st[_t]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&pt(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _t=0;_t<st.length;_t++){const Tt=st[_t];G.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[_t]);const Xt=r.convert(Tt.format,Tt.colorSpace),ct=r.convert(Tt.type),wt=y(Tt.internalFormat,Xt,ct,Tt.colorSpace,A.isXRRenderTarget===!0),Nt=it(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,wt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,G.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),q(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),ot(s.TEXTURE_CUBE_MAP,M);for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0)for(let Tt=0;Tt<M.mipmaps.length;Tt++)rt(G.__webglFramebuffer[_t][Tt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else rt(G.__webglFramebuffer[_t],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(M)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let _t=0,Tt=st.length;_t<Tt;_t++){const Xt=st[_t],ct=n.get(Xt);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),ot(s.TEXTURE_2D,Xt),rt(G.__webglFramebuffer,A,Xt,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),m(Xt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let _t=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_t=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,J.__webglTexture),ot(_t,M),M.mipmaps&&M.mipmaps.length>0)for(let Tt=0;Tt<M.mipmaps.length;Tt++)rt(G.__webglFramebuffer[Tt],A,M,s.COLOR_ATTACHMENT0,_t,Tt);else rt(G.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,_t,0);m(M)&&f(_t),e.unbindTexture()}A.depthBuffer&&Lt(A)}function Q(A){const M=A.textures;for(let G=0,J=M.length;G<J;G++){const st=M[G];if(m(st)){const j=T(A),Pt=n.get(st).__webglTexture;e.bindTexture(j,Pt),f(j),e.unbindTexture()}}}const tt=[],b=[];function xt(A){if(A.samples>0){if(pt(A)===!1){const M=A.textures,G=A.width,J=A.height;let st=s.COLOR_BUFFER_BIT;const j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=n.get(A),_t=M.length>1;if(_t)for(let Tt=0;Tt<M.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Tt=0;Tt<M.length;Tt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),_t){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);const Xt=n.get(M[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,G,J,0,0,G,J,st,s.NEAREST),c===!0&&(tt.length=0,b.length=0,tt.push(s.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(tt.push(j),b.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,b)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<M.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);const Xt=n.get(M[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function it(A){return Math.min(i.maxSamples,A.samples)}function pt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function It(A,M){const G=A.colorSpace,J=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ti&&G!==Tn&&(Jt.getTransfer(G)===ne?(J!==$e||st!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function ut(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=et,this.setTextureCube=Y,this.rebindTextures=ft,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=pt}function Jm(s,t){function e(n,i=Tn){let r;const o=Jt.getTransfer(i);if(n===_n)return s.UNSIGNED_BYTE;if(n===Eo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===To)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return s.BYTE;if(n===fc)return s.SHORT;if(n===Wi)return s.UNSIGNED_SHORT;if(n===So)return s.INT;if(n===Wn)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===Ki)return s.HALF_FLOAT;if(n===mc)return s.ALPHA;if(n===gc)return s.RGB;if(n===$e)return s.RGBA;if(n===_c)return s.LUMINANCE;if(n===vc)return s.LUMINANCE_ALPHA;if(n===_i)return s.DEPTH_COMPONENT;if(n===Ei)return s.DEPTH_STENCIL;if(n===xc)return s.RED;if(n===bo)return s.RED_INTEGER;if(n===Mc)return s.RG;if(n===wo)return s.RG_INTEGER;if(n===Ao)return s.RGBA_INTEGER;if(n===Cs||n===Ps||n===Ls||n===Ds)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vr||n===Hr||n===Wr||n===Xr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yr||n===qr||n===Zr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yr||n===qr)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kr||n===$r||n===Jr||n===jr||n===Qr||n===to||n===eo||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$r)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Is||n===lo||n===ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Is)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yc||n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Is)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
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

}`;class tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ce,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eg extends Ai{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const v=new tg,m=e.getContextAttributes();let f=null,T=null;const y=[],x=[],I=new mt;let C=null;const P=new Ne;P.viewport=new ie;const D=new Ne;D.viewport=new ie;const E=[P,D],_=new yu;let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=y[k];return $===void 0&&($=new gr,y[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=y[k];return $===void 0&&($=new gr,y[k]=$),$.getGripSpace()},this.getHand=function(k){let $=y[k];return $===void 0&&($=new gr,y[k]=$),$.getHandSpace()};function z(k){const $=x.indexOf(k.inputSource);if($===-1)return;const rt=y[$];rt!==void 0&&(rt.update(k.inputSource,k.frame,l||o),rt.dispatchEvent({type:k.type,data:k.inputSource}))}function H(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",K);for(let k=0;k<y.length;k++){const $=x[k];$!==null&&(x[k]=null,y[k].disconnect($))}w=null,U=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,T=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",H),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,q=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Ei:_i,q=m.stencil?Si:Wn);const Lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Lt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Xn(d.textureWidth,d.textureHeight,{format:$e,type:_n,depthTexture:new Nc(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Xn(p.framebufferWidth,p.framebufferHeight,{format:$e,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),gt.setContext(i),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(k){for(let $=0;$<k.removed.length;$++){const rt=k.removed[$],q=x.indexOf(rt);q>=0&&(x[q]=null,y[q].disconnect(rt))}for(let $=0;$<k.added.length;$++){const rt=k.added[$];let q=x.indexOf(rt);if(q===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=x.length){x.push(rt),q=Lt;break}else if(x[Lt]===null){x[Lt]=rt,q=Lt;break}if(q===-1)break}const ht=y[q];ht&&ht.connect(rt)}}const X=new R,et=new R;function Y(k,$,rt){X.setFromMatrixPosition($.matrixWorld),et.setFromMatrixPosition(rt.matrixWorld);const q=X.distanceTo(et),ht=$.projectionMatrix.elements,Lt=rt.projectionMatrix.elements,ft=ht[14]/(ht[10]-1),Dt=ht[14]/(ht[10]+1),Q=(ht[9]+1)/ht[5],tt=(ht[9]-1)/ht[5],b=(ht[8]-1)/ht[0],xt=(Lt[8]+1)/Lt[0],it=ft*b,pt=ft*xt,at=q/(-b+xt),It=at*-b;if($.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(It),k.translateZ(at),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),ht[10]===-1)k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ut=ft+at,A=Dt+at,M=it-It,G=pt+(q-It),J=Q*Dt/A*ut,st=tt*Dt/A*ut;k.projectionMatrix.makePerspective(M,G,J,st,ut,A),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function dt(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let $=k.near,rt=k.far;v.texture!==null&&(v.depthNear>0&&($=v.depthNear),v.depthFar>0&&(rt=v.depthFar)),_.near=D.near=P.near=$,_.far=D.far=P.far=rt,(w!==_.near||U!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,U=_.far),P.layers.mask=k.layers.mask|2,D.layers.mask=k.layers.mask|4,_.layers.mask=P.layers.mask|D.layers.mask;const q=k.parent,ht=_.cameras;dt(_,q);for(let Lt=0;Lt<ht.length;Lt++)dt(ht[Lt],q);ht.length===2?Y(_,P,D):_.projectionMatrix.copy(P.projectionMatrix),N(k,_,q)};function N(k,$,rt){rt===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(rt.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Xi*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let L=null;function ot(k,$){if(h=$.getViewerPose(l||o),g=$,h!==null){const rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let q=!1;rt.length!==_.cameras.length&&(_.cameras.length=0,q=!0);for(let ft=0;ft<rt.length;ft++){const Dt=rt[ft];let Q=null;if(p!==null)Q=p.getViewport(Dt);else{const b=u.getViewSubImage(d,Dt);Q=b.viewport,ft===0&&(t.setRenderTargetTextures(T,b.colorTexture,d.ignoreDepthValues?void 0:b.depthStencilTexture),t.setRenderTarget(T))}let tt=E[ft];tt===void 0&&(tt=new Ne,tt.layers.enable(ft),tt.viewport=new ie,E[ft]=tt),tt.matrix.fromArray(Dt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Dt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Q.x,Q.y,Q.width,Q.height),ft===0&&(_.matrix.copy(tt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),q===!0&&_.cameras.push(tt)}const ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const ft=u.getDepthInformation(rt[0]);ft&&ft.isValid&&ft.texture&&v.init(t,ft,i.renderState)}}for(let rt=0;rt<y.length;rt++){const q=x[rt],ht=y[rt];q!==null&&ht!==void 0&&ht.update(q,$,l||o)}L&&L(k,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const gt=new qc;gt.setAnimationLoop(ot),this.setAnimationLoop=function(k){L=k},this.dispose=function(){}}}const Fn=new sn,ng=new se;function ig(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Pc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,T,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Le&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Le&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),y=T.envMap,x=T.envMapRotation;y&&(m.envMap.value=y,Fn.copy(x),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler(Fn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sg(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){const x=y.program;n.uniformBlockBinding(T,x)}function l(T,y){let x=i[T.id];x===void 0&&(g(T),x=h(T),i[T.id]=x,T.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(T,I);const C=t.render.frame;r[T.id]!==C&&(d(T),r[T.id]=C)}function h(T){const y=u();T.__bindingPointIndex=y;const x=s.createBuffer(),I=T.__size,C=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,I,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=i[T.id],x=T.uniforms,I=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let C=0,P=x.length;C<P;C++){const D=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,_=D.length;E<_;E++){const w=D[E];if(p(w,C,E,I)===!0){const U=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let H=0;for(let K=0;K<z.length;K++){const X=z[K],et=v(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,U+H,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,H),H+=et.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,y,x,I){const C=T.value,P=y+"_"+x;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const D=I[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return I[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(T){const y=T.uniforms;let x=0;const I=16;for(let P=0,D=y.length;P<D;P++){const E=Array.isArray(y[P])?y[P]:[y[P]];for(let _=0,w=E.length;_<w;_++){const U=E[_],z=Array.isArray(U.value)?U.value:[U.value];for(let H=0,K=z.length;H<K;H++){const X=z[H],et=v(X),Y=x%I,dt=Y%et.boundary,N=Y+dt;x+=dt,N!==0&&I-N<et.storage&&(x+=I-N),U.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=et.storage}}}const C=x%I;return C>0&&(x+=I-C),T.__size=x,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class rg{constructor(t={}){const{canvas:e=rh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const T=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=wn,this.toneMappingExposure=1;const x=this;let I=!1,C=0,P=0,D=null,E=-1,_=null;const w=new ie,U=new ie;let z=null;const H=new qt(0);let K=0,X=e.width,et=e.height,Y=1,dt=null,N=null;const L=new ie(0,0,X,et),ot=new ie(0,0,X,et);let gt=!1;const k=new Lo;let $=!1,rt=!1;this.transmissionResolutionScale=1;const q=new se,ht=new se,Lt=new R,ft=new ie,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function tt(){return D===null?Y:1}let b=n;function xt(S,F){return e.getContext(S,F)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),b===null){const F="webgl2";if(b=xt(F,S),b===null)throw xt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let it,pt,at,It,ut,A,M,G,J,st,j,Pt,_t,Tt,Xt,ct,wt,Nt,Ft,Rt,Zt,Ht,re,O;function Mt(){it=new mp(b),it.init(),Ht=new Jm(b,it),pt=new lp(b,it,t,Ht),at=new Km(b,it),pt.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),It=new vp(b),ut=new Om,A=new $m(b,it,at,ut,pt,Ht,It),M=new up(x),G=new pp(x),J=new Tu(b),re=new ap(b,J),st=new gp(b,J,It,re),j=new Mp(b,st,J,It),Ft=new xp(b,pt,A),ct=new hp(ut),Pt=new Nm(x,M,G,it,pt,re,ct),_t=new ig(x,ut),Tt=new Bm,Xt=new Wm(it),Nt=new op(x,M,G,at,j,p,c),wt=new qm(x,j,pt),O=new sg(b,It,pt,at),Rt=new cp(b,it,It),Zt=new _p(b,it,It),It.programs=Pt.programs,x.capabilities=pt,x.extensions=it,x.properties=ut,x.renderLists=Tt,x.shadowMap=wt,x.state=at,x.info=It}Mt();const Z=new eg(x,b);this.xr=Z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const S=it.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=it.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(X,et,!1))},this.getSize=function(S){return S.set(X,et)},this.setSize=function(S,F,V=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,et=F,e.width=Math.floor(S*Y),e.height=Math.floor(F*Y),V===!0&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(X*Y,et*Y).floor()},this.setDrawingBufferSize=function(S,F,V){X=S,et=F,Y=V,e.width=Math.floor(S*V),e.height=Math.floor(F*V),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(L)},this.setViewport=function(S,F,V,W){S.isVector4?L.set(S.x,S.y,S.z,S.w):L.set(S,F,V,W),at.viewport(w.copy(L).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(ot)},this.setScissor=function(S,F,V,W){S.isVector4?ot.set(S.x,S.y,S.z,S.w):ot.set(S,F,V,W),at.scissor(U.copy(ot).multiplyScalar(Y).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(S){at.setScissorTest(gt=S)},this.setOpaqueSort=function(S){dt=S},this.setTransparentSort=function(S){N=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(S=!0,F=!0,V=!0){let W=0;if(S){let B=!1;if(D!==null){const lt=D.texture.format;B=lt===Ao||lt===wo||lt===bo}if(B){const lt=D.texture.type,yt=lt===_n||lt===Wn||lt===Wi||lt===Si||lt===Eo||lt===To,At=Nt.getClearColor(),Ct=Nt.getClearAlpha(),Bt=At.r,zt=At.g,Ut=At.b;yt?(g[0]=Bt,g[1]=zt,g[2]=Ut,g[3]=Ct,b.clearBufferuiv(b.COLOR,0,g)):(v[0]=Bt,v[1]=zt,v[2]=Ut,v[3]=Ct,b.clearBufferiv(b.COLOR,0,v))}else W|=b.COLOR_BUFFER_BIT}F&&(W|=b.DEPTH_BUFFER_BIT),V&&(W|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Nt.dispose(),Tt.dispose(),Xt.dispose(),ut.dispose(),M.dispose(),G.dispose(),j.dispose(),re.dispose(),O.dispose(),Pt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Go),Z.removeEventListener("sessionend",ko),Pn.stop()};function nt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=It.autoReset,F=wt.enabled,V=wt.autoUpdate,W=wt.needsUpdate,B=wt.type;Mt(),It.autoReset=S,wt.enabled=F,wt.autoUpdate=V,wt.needsUpdate=W,wt.type=B}function Et(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Gt(S){const F=S.target;F.removeEventListener("dispose",Gt),le(F)}function le(S){ye(S),ut.remove(S)}function ye(S){const F=ut.get(S).programs;F!==void 0&&(F.forEach(function(V){Pt.releaseProgram(V)}),S.isShaderMaterial&&Pt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,V,W,B,lt){F===null&&(F=Dt);const yt=B.isMesh&&B.matrixWorld.determinant()<0,At=jc(S,F,V,W,B);at.setMaterial(W,yt);let Ct=V.index,Bt=1;if(W.wireframe===!0){if(Ct=st.getWireframeAttribute(V),Ct===void 0)return;Bt=2}const zt=V.drawRange,Ut=V.attributes.position;let Kt=zt.start*Bt,Qt=(zt.start+zt.count)*Bt;lt!==null&&(Kt=Math.max(Kt,lt.start*Bt),Qt=Math.min(Qt,(lt.start+lt.count)*Bt)),Ct!==null?(Kt=Math.max(Kt,0),Qt=Math.min(Qt,Ct.count)):Ut!=null&&(Kt=Math.max(Kt,0),Qt=Math.min(Qt,Ut.count));const ue=Qt-Kt;if(ue<0||ue===1/0)return;re.setup(B,W,At,V,Ct);let he,$t=Rt;if(Ct!==null&&(he=J.get(Ct),$t=Zt,$t.setIndex(he)),B.isMesh)W.wireframe===!0?(at.setLineWidth(W.wireframeLinewidth*tt()),$t.setMode(b.LINES)):$t.setMode(b.TRIANGLES);else if(B.isLine){let Ot=W.linewidth;Ot===void 0&&(Ot=1),at.setLineWidth(Ot*tt()),B.isLineSegments?$t.setMode(b.LINES):B.isLineLoop?$t.setMode(b.LINE_LOOP):$t.setMode(b.LINE_STRIP)}else B.isPoints?$t.setMode(b.POINTS):B.isSprite&&$t.setMode(b.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)$t.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))$t.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ot=B._multiDrawStarts,Me=B._multiDrawCounts,te=B._multiDrawCount,Xe=Ct?J.get(Ct).bytesPerElement:1,$n=ut.get(W).currentProgram.getUniforms();for(let De=0;De<te;De++)$n.setValue(b,"_gl_DrawID",De),$t.render(Ot[De]/Xe,Me[De])}else if(B.isInstancedMesh)$t.renderInstances(Kt,ue,B.count);else if(V.isInstancedBufferGeometry){const Ot=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Me=Math.min(V.instanceCount,Ot);$t.renderInstances(Kt,ue,Me)}else $t.render(Kt,ue)};function ee(S,F,V){S.transparent===!0&&S.side===He&&S.forceSinglePass===!1?(S.side=Le,S.needsUpdate=!0,ts(S,F,V),S.side=An,S.needsUpdate=!0,ts(S,F,V),S.side=He):ts(S,F,V)}this.compile=function(S,F,V=null){V===null&&(V=S),f=Xt.get(V),f.init(F),y.push(f),V.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),S!==V&&S.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const W=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const lt=B.material;if(lt)if(Array.isArray(lt))for(let yt=0;yt<lt.length;yt++){const At=lt[yt];ee(At,V,B),W.add(At)}else ee(lt,V,B),W.add(lt)}),y.pop(),f=null,W},this.compileAsync=function(S,F,V=null){const W=this.compile(S,F,V);return new Promise(B=>{function lt(){if(W.forEach(function(yt){ut.get(yt).currentProgram.isReady()&&W.delete(yt)}),W.size===0){B(S);return}setTimeout(lt,10)}it.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let We=null;function on(S){We&&We(S)}function Go(){Pn.stop()}function ko(){Pn.start()}const Pn=new qc;Pn.setAnimationLoop(on),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(S){We=S,Z.setAnimationLoop(S),S===null?Pn.stop():Pn.start()},Z.addEventListener("sessionstart",Go),Z.addEventListener("sessionend",ko),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,F,D),f=Xt.get(S,y.length),f.init(F),y.push(f),ht.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),k.setFromProjectionMatrix(ht),rt=this.localClippingEnabled,$=ct.init(this.clippingPlanes,rt),m=Tt.get(S,T.length),m.init(),T.push(m),Z.enabled===!0&&Z.isPresenting===!0){const lt=x.xr.getDepthSensingMesh();lt!==null&&Zs(lt,F,-1/0,x.sortObjects)}Zs(S,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(dt,N),Q=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Q&&Nt.addToRenderList(m,S),this.info.render.frame++,$===!0&&ct.beginShadows();const V=f.state.shadowsArray;wt.render(V,S,F),$===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(f.setupLights(),F.isArrayCamera){const lt=F.cameras;if(B.length>0)for(let yt=0,At=lt.length;yt<At;yt++){const Ct=lt[yt];Ho(W,B,S,Ct)}Q&&Nt.render(S);for(let yt=0,At=lt.length;yt<At;yt++){const Ct=lt[yt];Vo(m,S,Ct,Ct.viewport)}}else B.length>0&&Ho(W,B,S,F),Q&&Nt.render(S),Vo(m,S,F);D!==null&&P===0&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(x,S,F),re.resetDefaultState(),E=-1,_=null,y.pop(),y.length>0?(f=y[y.length-1],$===!0&&ct.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Zs(S,F,V,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){W&&ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ht);const yt=j.update(S),At=S.material;At.visible&&m.push(S,yt,At,V,ft.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||k.intersectsObject(S))){const yt=j.update(S),At=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ft.copy(S.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ft.copy(yt.boundingSphere.center)),ft.applyMatrix4(S.matrixWorld).applyMatrix4(ht)),Array.isArray(At)){const Ct=yt.groups;for(let Bt=0,zt=Ct.length;Bt<zt;Bt++){const Ut=Ct[Bt],Kt=At[Ut.materialIndex];Kt&&Kt.visible&&m.push(S,yt,Kt,V,ft.z,Ut)}}else At.visible&&m.push(S,yt,At,V,ft.z,null)}}const lt=S.children;for(let yt=0,At=lt.length;yt<At;yt++)Zs(lt[yt],F,V,W)}function Vo(S,F,V,W){const B=S.opaque,lt=S.transmissive,yt=S.transparent;f.setupLightsView(V),$===!0&&ct.setGlobalState(x.clippingPlanes,V),W&&at.viewport(w.copy(W)),B.length>0&&Qi(B,F,V),lt.length>0&&Qi(lt,F,V),yt.length>0&&Qi(yt,F,V),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Ho(S,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Xn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ki:_n,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const lt=f.state.transmissionRenderTarget[W.id],yt=W.viewport||w;lt.setSize(yt.z*x.transmissionResolutionScale,yt.w*x.transmissionResolutionScale);const At=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(H),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Nt.render(V);const Ct=x.toneMapping;x.toneMapping=wn;const Bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),$===!0&&ct.setGlobalState(x.clippingPlanes,W),Qi(S,V,W),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),it.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ut=0,Kt=F.length;Ut<Kt;Ut++){const Qt=F[Ut],ue=Qt.object,he=Qt.geometry,$t=Qt.material,Ot=Qt.group;if($t.side===He&&ue.layers.test(W.layers)){const Me=$t.side;$t.side=Le,$t.needsUpdate=!0,Wo(ue,V,W,he,$t,Ot),$t.side=Me,$t.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}x.setRenderTarget(At),x.setClearColor(H,K),Bt!==void 0&&(W.viewport=Bt),x.toneMapping=Ct}function Qi(S,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,lt=S.length;B<lt;B++){const yt=S[B],At=yt.object,Ct=yt.geometry,Bt=W===null?yt.material:W,zt=yt.group;At.layers.test(V.layers)&&Wo(At,F,V,Ct,Bt,zt)}}function Wo(S,F,V,W,B,lt){S.onBeforeRender(x,F,V,W,B,lt),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(x,F,V,W,S,lt),B.transparent===!0&&B.side===He&&B.forceSinglePass===!1?(B.side=Le,B.needsUpdate=!0,x.renderBufferDirect(V,F,W,B,S,lt),B.side=An,B.needsUpdate=!0,x.renderBufferDirect(V,F,W,B,S,lt),B.side=He):x.renderBufferDirect(V,F,W,B,S,lt),S.onAfterRender(x,F,V,W,B,lt)}function ts(S,F,V){F.isScene!==!0&&(F=Dt);const W=ut.get(S),B=f.state.lights,lt=f.state.shadowsArray,yt=B.state.version,At=Pt.getParameters(S,B.state,lt,F,V),Ct=Pt.getProgramCacheKey(At);let Bt=W.programs;W.environment=S.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(S.isMeshStandardMaterial?G:M).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",Gt),Bt=new Map,W.programs=Bt);let zt=Bt.get(Ct);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===yt)return Yo(S,At),zt}else At.uniforms=Pt.getUniforms(S),S.onBeforeCompile(At,x),zt=Pt.acquireProgram(At,Ct),Bt.set(Ct,zt),W.uniforms=At.uniforms;const Ut=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=ct.uniform),Yo(S,At),W.needsLights=tl(S),W.lightsStateVersion=yt,W.needsLights&&(Ut.ambientLightColor.value=B.state.ambient,Ut.lightProbe.value=B.state.probe,Ut.directionalLights.value=B.state.directional,Ut.directionalLightShadows.value=B.state.directionalShadow,Ut.spotLights.value=B.state.spot,Ut.spotLightShadows.value=B.state.spotShadow,Ut.rectAreaLights.value=B.state.rectArea,Ut.ltc_1.value=B.state.rectAreaLTC1,Ut.ltc_2.value=B.state.rectAreaLTC2,Ut.pointLights.value=B.state.point,Ut.pointLightShadows.value=B.state.pointShadow,Ut.hemisphereLights.value=B.state.hemi,Ut.directionalShadowMap.value=B.state.directionalShadowMap,Ut.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ut.spotShadowMap.value=B.state.spotShadowMap,Ut.spotLightMatrix.value=B.state.spotLightMatrix,Ut.spotLightMap.value=B.state.spotLightMap,Ut.pointShadowMap.value=B.state.pointShadowMap,Ut.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function Xo(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Ns.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Yo(S,F){const V=ut.get(S);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function jc(S,F,V,W,B){F.isScene!==!0&&(F=Dt),A.resetTextureUnits();const lt=F.fog,yt=W.isMeshStandardMaterial?F.environment:null,At=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ti,Ct=(W.isMeshStandardMaterial?G:M).get(W.envMap||yt),Bt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!V.morphAttributes.position,Kt=!!V.morphAttributes.normal,Qt=!!V.morphAttributes.color;let ue=wn;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ue=x.toneMapping);const he=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$t=he!==void 0?he.length:0,Ot=ut.get(W),Me=f.state.lights;if($===!0&&(rt===!0||S!==_)){const be=S===_&&W.id===E;ct.setState(W,S,be)}let te=!1;W.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Me.state.version||Ot.outputColorSpace!==At||B.isBatchedMesh&&Ot.batching===!1||!B.isBatchedMesh&&Ot.batching===!0||B.isBatchedMesh&&Ot.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ot.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ot.instancing===!1||!B.isInstancedMesh&&Ot.instancing===!0||B.isSkinnedMesh&&Ot.skinning===!1||!B.isSkinnedMesh&&Ot.skinning===!0||B.isInstancedMesh&&Ot.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ot.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ot.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ot.instancingMorph===!1&&B.morphTexture!==null||Ot.envMap!==Ct||W.fog===!0&&Ot.fog!==lt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ct.numPlanes||Ot.numIntersection!==ct.numIntersection)||Ot.vertexAlphas!==Bt||Ot.vertexTangents!==zt||Ot.morphTargets!==Ut||Ot.morphNormals!==Kt||Ot.morphColors!==Qt||Ot.toneMapping!==ue||Ot.morphTargetsCount!==$t)&&(te=!0):(te=!0,Ot.__version=W.version);let Xe=Ot.currentProgram;te===!0&&(Xe=ts(W,F,B));let $n=!1,De=!1,Ci=!1;const ae=Xe.getUniforms(),Fe=Ot.uniforms;if(at.useProgram(Xe.program)&&($n=!0,De=!0,Ci=!0),W.id!==E&&(E=W.id,De=!0),$n||_!==S){at.buffers.depth.getReversed()?(q.copy(S.projectionMatrix),ah(q),ch(q),ae.setValue(b,"projectionMatrix",q)):ae.setValue(b,"projectionMatrix",S.projectionMatrix),ae.setValue(b,"viewMatrix",S.matrixWorldInverse);const Pe=ae.map.cameraPosition;Pe!==void 0&&Pe.setValue(b,Lt.setFromMatrixPosition(S.matrixWorld)),pt.logarithmicDepthBuffer&&ae.setValue(b,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ae.setValue(b,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,De=!0,Ci=!0)}if(B.isSkinnedMesh){ae.setOptional(b,B,"bindMatrix"),ae.setOptional(b,B,"bindMatrixInverse");const be=B.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ae.setValue(b,"boneTexture",be.boneTexture,A))}B.isBatchedMesh&&(ae.setOptional(b,B,"batchingTexture"),ae.setValue(b,"batchingTexture",B._matricesTexture,A),ae.setOptional(b,B,"batchingIdTexture"),ae.setValue(b,"batchingIdTexture",B._indirectTexture,A),ae.setOptional(b,B,"batchingColorTexture"),B._colorsTexture!==null&&ae.setValue(b,"batchingColorTexture",B._colorsTexture,A));const Be=V.morphAttributes;if((Be.position!==void 0||Be.normal!==void 0||Be.color!==void 0)&&Ft.update(B,V,Xe),(De||Ot.receiveShadow!==B.receiveShadow)&&(Ot.receiveShadow=B.receiveShadow,ae.setValue(b,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Fe.envMap.value=Ct,Fe.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Fe.envMapIntensity.value=F.environmentIntensity),De&&(ae.setValue(b,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&Qc(Fe,Ci),lt&&W.fog===!0&&_t.refreshFogUniforms(Fe,lt),_t.refreshMaterialUniforms(Fe,W,Y,et,f.state.transmissionRenderTarget[S.id]),Ns.upload(b,Xo(Ot),Fe,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ns.upload(b,Xo(Ot),Fe,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ae.setValue(b,"center",B.center),ae.setValue(b,"modelViewMatrix",B.modelViewMatrix),ae.setValue(b,"normalMatrix",B.normalMatrix),ae.setValue(b,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const be=W.uniformsGroups;for(let Pe=0,Ks=be.length;Pe<Ks;Pe++){const Ln=be[Pe];O.update(Ln,Xe),O.bind(Ln,Xe)}}return Xe}function Qc(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function tl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,F,V){ut.get(S.texture).__webglTexture=F,ut.get(S.depthTexture).__webglTexture=V;const W=ut.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const V=ut.get(S);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const el=b.createFramebuffer();this.setRenderTarget=function(S,F=0,V=0){D=S,C=F,P=V;let W=!0,B=null,lt=!1,yt=!1;if(S){const Ct=ut.get(S);if(Ct.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(b.FRAMEBUFFER,null),W=!1;else if(Ct.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Ct.__hasExternalTextures)A.rebindTextures(S,ut.get(S.texture).__webglTexture,ut.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ut=S.depthTexture;if(Ct.__boundDepthTexture!==Ut){if(Ut!==null&&ut.has(Ut)&&(S.width!==Ut.image.width||S.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(yt=!0);const zt=ut.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?B=zt[F][V]:B=zt[F],lt=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?B=ut.get(S).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[V]:B=zt,w.copy(S.viewport),U.copy(S.scissor),z=S.scissorTest}else w.copy(L).multiplyScalar(Y).floor(),U.copy(ot).multiplyScalar(Y).floor(),z=gt;if(V!==0&&(B=el),at.bindFramebuffer(b.FRAMEBUFFER,B)&&W&&at.drawBuffers(S,B),at.viewport(w),at.scissor(U),at.setScissorTest(z),lt){const Ct=ut.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,V)}else if(yt){const Ct=ut.get(S.texture),Bt=F;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ct.__webglTexture,V,Bt)}else if(S!==null&&V!==0){const Ct=ut.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ct.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(S,F,V,W,B,lt,yt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){at.bindFramebuffer(b.FRAMEBUFFER,At);try{const Ct=S.texture,Bt=Ct.format,zt=Ct.type;if(!pt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&V>=0&&V<=S.height-B&&b.readPixels(F,V,W,B,Ht.convert(Bt),Ht.convert(zt),lt)}finally{const Ct=D!==null?ut.get(D).__webglFramebuffer:null;at.bindFramebuffer(b.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,F,V,W,B,lt,yt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){const Ct=S.texture,Bt=Ct.format,zt=Ct.type;if(!pt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-W&&V>=0&&V<=S.height-B){at.bindFramebuffer(b.FRAMEBUFFER,At);const Ut=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ut),b.bufferData(b.PIXEL_PACK_BUFFER,lt.byteLength,b.STREAM_READ),b.readPixels(F,V,W,B,Ht.convert(Bt),Ht.convert(zt),0);const Kt=D!==null?ut.get(D).__webglFramebuffer:null;at.bindFramebuffer(b.FRAMEBUFFER,Kt);const Qt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await oh(b,Qt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ut),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,lt),b.deleteBuffer(Ut),b.deleteSync(Qt),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,V=0){S.isTexture!==!0&&(fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-V),B=Math.floor(S.image.width*W),lt=Math.floor(S.image.height*W),yt=F!==null?F.x:0,At=F!==null?F.y:0;A.setTexture2D(S,0),b.copyTexSubImage2D(b.TEXTURE_2D,V,0,0,yt,At,B,lt),at.unbindTexture()};const nl=b.createFramebuffer(),il=b.createFramebuffer();this.copyTextureToTexture=function(S,F,V=null,W=null,B=0,lt=null){S.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],F=arguments[2],lt=arguments[3]||0,V=null),lt===null&&(B!==0?(fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=B,B=0):lt=0);let yt,At,Ct,Bt,zt,Ut,Kt,Qt,ue;const he=S.isCompressedTexture?S.mipmaps[lt]:S.image;if(V!==null)yt=V.max.x-V.min.x,At=V.max.y-V.min.y,Ct=V.isBox3?V.max.z-V.min.z:1,Bt=V.min.x,zt=V.min.y,Ut=V.isBox3?V.min.z:0;else{const Be=Math.pow(2,-B);yt=Math.floor(he.width*Be),At=Math.floor(he.height*Be),S.isDataArrayTexture?Ct=he.depth:S.isData3DTexture?Ct=Math.floor(he.depth*Be):Ct=1,Bt=0,zt=0,Ut=0}W!==null?(Kt=W.x,Qt=W.y,ue=W.z):(Kt=0,Qt=0,ue=0);const $t=Ht.convert(F.format),Ot=Ht.convert(F.type);let Me;F.isData3DTexture?(A.setTexture3D(F,0),Me=b.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Me=b.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Me=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,F.unpackAlignment);const te=b.getParameter(b.UNPACK_ROW_LENGTH),Xe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),$n=b.getParameter(b.UNPACK_SKIP_PIXELS),De=b.getParameter(b.UNPACK_SKIP_ROWS),Ci=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,he.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,he.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Bt),b.pixelStorei(b.UNPACK_SKIP_ROWS,zt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ut);const ae=S.isDataArrayTexture||S.isData3DTexture,Fe=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Be=ut.get(S),be=ut.get(F),Pe=ut.get(Be.__renderTarget),Ks=ut.get(be.__renderTarget);at.bindFramebuffer(b.READ_FRAMEBUFFER,Pe.__webglFramebuffer),at.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let Ln=0;Ln<Ct;Ln++)ae&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ut.get(S).__webglTexture,B,Ut+Ln),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ut.get(F).__webglTexture,lt,ue+Ln)),b.blitFramebuffer(Bt,zt,yt,At,Kt,Qt,yt,At,b.DEPTH_BUFFER_BIT,b.NEAREST);at.bindFramebuffer(b.READ_FRAMEBUFFER,null),at.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||ut.has(S)){const Be=ut.get(S),be=ut.get(F);at.bindFramebuffer(b.READ_FRAMEBUFFER,nl),at.bindFramebuffer(b.DRAW_FRAMEBUFFER,il);for(let Pe=0;Pe<Ct;Pe++)ae?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Be.__webglTexture,B,Ut+Pe):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Be.__webglTexture,B),Fe?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,be.__webglTexture,lt,ue+Pe):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,be.__webglTexture,lt),B!==0?b.blitFramebuffer(Bt,zt,yt,At,Kt,Qt,yt,At,b.COLOR_BUFFER_BIT,b.NEAREST):Fe?b.copyTexSubImage3D(Me,lt,Kt,Qt,ue+Pe,Bt,zt,yt,At):b.copyTexSubImage2D(Me,lt,Kt,Qt,Bt,zt,yt,At);at.bindFramebuffer(b.READ_FRAMEBUFFER,null),at.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Fe?S.isDataTexture||S.isData3DTexture?b.texSubImage3D(Me,lt,Kt,Qt,ue,yt,At,Ct,$t,Ot,he.data):F.isCompressedArrayTexture?b.compressedTexSubImage3D(Me,lt,Kt,Qt,ue,yt,At,Ct,$t,he.data):b.texSubImage3D(Me,lt,Kt,Qt,ue,yt,At,Ct,$t,Ot,he):S.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,lt,Kt,Qt,yt,At,$t,Ot,he.data):S.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,lt,Kt,Qt,he.width,he.height,$t,he.data):b.texSubImage2D(b.TEXTURE_2D,lt,Kt,Qt,yt,At,$t,Ot,he);b.pixelStorei(b.UNPACK_ROW_LENGTH,te),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Xe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,$n),b.pixelStorei(b.UNPACK_SKIP_ROWS,De),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ci),lt===0&&F.generateMipmaps&&b.generateMipmap(Me),at.unbindTexture()},this.copyTextureToTexture3D=function(S,F,V=null,W=null,B=0){return S.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,S=arguments[2],F=arguments[3],B=arguments[4]||0),fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,V,W,B)},this.initRenderTarget=function(S){ut.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),at.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,at.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const og=1,ag=-28,cg=1/120,lg=8,hg=-12;class ug{constructor(t){this.camera=t,this.radius=og,this.gravity=ag,this.fixedDt=cg,this.accumulator=0,this.position=new R(0,4,0),this.velocity=new R(0,0,0),this.rotation=new Yn,this.lastCheckpointPos=new R(0,4,0),this.lastValidPos=new R(0,4,0),this.isGrounded=!1,this.groundNormal=new R(0,1,0),this.boostTimer=0,this.hasRespawnedThisFrame=!1,this.downRay=new Da,this.downRay.far=1.6,this.downRay.firstHitOnly=!0,this.sideRay=new Da,this.sideRay.far=1.12,this.sideRay.firstHitOnly=!0,this.colliders=[],this._camDir=new R,this._camRight=new R,this._camUp=new R(0,1,0),this._drvDir=new R,this._strDir=new R,this._rollAxis=new R(1,0,0),this._downDir=new R(0,-1,0),this._pushNorm=new R,this._qDelta=new Yn,this._probeOffsets=[new R(0,0,0),new R(.4,0,0),new R(-.4,0,0),new R(0,0,.4),new R(0,0,-.4)];const e=.7071;this._sideDirs=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(e,0,e),new R(-e,0,e),new R(e,0,-e),new R(-e,0,-e)],this._ringBuf=[],this._ringSize=10,this._frameNum=0,this.telemetry={physicsTimeMs:0,raycastTimeMs:0,isGrounded:!1}}setColliders(t,e=1){this.colliders=(t||[]).filter(n=>n&&!n.isTrigger&&!n.isPortal&&!n.isCheckpoint),console.log("CRITICAL: Colliders updated for Level "+e+". Total colliders: "+this.colliders.length)}setPosition(t){this.position.copy(t),this.lastValidPos.copy(t),this.lastCheckpointPos.copy(t),this.velocity.set(0,0,0),this.rotation.identity(),this.isGrounded=!0,this.groundNormal.set(0,1,0),this.accumulator=0,this.boostTimer=0,this._ringBuf=[],this._frameNum=0}setCheckpoint(t){this.lastCheckpointPos.copy(t)}respawn(){this.position.copy(this.lastCheckpointPos),this.velocity.set(0,0,0),this.rotation.identity(),this.isGrounded=!0,this.groundNormal.set(0,1,0),this.hasRespawnedThisFrame=!0,this.accumulator=0,this.boostTimer=0}applyBoost(t=38){this.velocity.z=Math.max(this.velocity.z+12,t),this.boostTimer=1.4}update(t,e,n,i,r){const o=performance.now();if(this.hasRespawnedThisFrame=!1,this._frameNum++,this.position.y<hg)return this.respawn(),this.telemetry.physicsTimeMs=performance.now()-o,{speed:0,isGrounded:!0,hasRespawned:!0};const a=Math.min(t,.08);this.accumulator+=a;let c=0,l=0;for(;this.accumulator>=this.fixedDt&&l<lg;){const u=performance.now();this._fixedStep(this.fixedDt,e,n,i,r),c+=performance.now()-u,this.accumulator-=this.fixedDt,l++}!isFinite(this.position.x)||!isFinite(this.position.y)||!isFinite(this.position.z)?(console.error("[Physics] NaN position detected! Respawning."),this.respawn()):this.isGrounded&&this.lastValidPos.copy(this.position),this._pushRing(e,n);const h=performance.now();return this.telemetry.physicsTimeMs=h-o,this.telemetry.raycastTimeMs=c,this.telemetry.isGrounded=this.isGrounded,{speed:this.velocity.length(),isGrounded:this.isGrounded,hasRespawned:this.hasRespawnedThisFrame}}_fixedStep(t,e,n,i,r){this._checkGround(),this.camera.getWorldDirection(this._camDir),this._camDir.y=0,this._camDir.lengthSq()<.001&&this._camDir.set(0,0,1),this._camDir.normalize(),this._camRight.crossVectors(this._camDir,this._camUp).normalize();const o=this.boostTimer>0?44:26,a=this.boostTimer>0?45:22,c=22;if(this.boostTimer>0&&(this.boostTimer-=t),this.isGrounded){const l=1-this.groundNormal.y;l>.02&&(this._drvDir.set(0,-1,0).projectOnPlane(this.groundNormal).normalize(),this.velocity.addScaledVector(this._drvDir,Math.abs(this.gravity)*l*t*1.2)),n>0?(this._drvDir.copy(this._camDir).projectOnPlane(this.groundNormal).normalize(),this.velocity.addScaledVector(this._drvDir,n*a*t)):n<0&&(this._drvDir.copy(this._camDir).projectOnPlane(this.groundNormal).normalize(),this.velocity.addScaledVector(this._drvDir,n*a*.7*t)),e!==0&&(r?this.velocity.x=e*14:(this._strDir.copy(this._camRight).projectOnPlane(this.groundNormal).normalize(),this.velocity.addScaledVector(this._strDir,e*28*t))),e===0&&(this.velocity.x=nn.lerp(this.velocity.x,0,.2)),n===0&&(this.velocity.z*=.995);const u=Math.sqrt(this.velocity.x**2+this.velocity.z**2);if(u>o){const d=o/u;this.velocity.x*=d,this.velocity.z*=d}i&&this.isGrounded&&(this.velocity.y=14.5,this.isGrounded=!1,e===0&&(this.velocity.x=0))}else{const l=this.velocity.y<0?this.gravity*1.85:this.gravity;this.velocity.y+=l*t,n>0&&this.velocity.addScaledVector(this._camDir,n*a*.6*t),e!==0&&this.velocity.addScaledVector(this._camRight,e*c*.6*t)}this.position.addScaledVector(this.velocity,t),this._resolveSides(),this._updateRotation(t)}_checkGround(){let t=null,e=1/0;for(const n of this._probeOffsets){this.downRay.ray.origin.set(this.position.x+n.x,this.position.y+n.y,this.position.z+n.z),this.downRay.ray.direction.copy(this._downDir);const i=this.downRay.intersectObjects(this.colliders,!1);i.length>0&&i[0].distance<e&&(e=i[0].distance,t=i[0])}if(t&&e<=this.radius+.35){this.isGrounded=!0,t.face?this.groundNormal.copy(t.face.normal).transformDirection(t.object.matrixWorld):this.groundNormal.set(0,1,0);const n=t.point.y+this.radius;this.position.y-n<.15&&this.velocity.y<=.2&&(this.position.y=n,this.velocity.y<0&&(this.velocity.y=0));return}this.isGrounded=!1,this.groundNormal.set(0,1,0)}_resolveSides(){for(const t of this._sideDirs){this.sideRay.ray.origin.copy(this.position),this.sideRay.ray.direction.copy(t);const e=this.sideRay.intersectObjects(this.colliders,!1);if(e.length>0){const n=e[0];if(n.distance<this.radius+.04&&n.face&&(this._pushNorm.copy(n.face.normal).transformDirection(n.object.matrixWorld),this.isGrounded||this._pushNorm.y<.7)){const i=this.radius+.04-n.distance;this.position.addScaledVector(this._pushNorm,i);const r=this.velocity.dot(this._pushNorm);r<0&&this.velocity.addScaledVector(this._pushNorm,-1.05*r)}}}}_updateRotation(t){if(this.isGrounded){this._drvDir.copy(this.velocity).projectOnPlane(this.groundNormal);const e=this._drvDir.length();if(e>.01){this._rollAxis.crossVectors(this._drvDir,this.groundNormal).normalize();const n=e/this.radius*t;this._qDelta.setFromAxisAngle(this._rollAxis,n),this.rotation.premultiply(this._qDelta)}}else{const e=Math.sqrt(this.velocity.x**2+this.velocity.z**2);if(e>.05){this._rollAxis.set(-this.velocity.z,0,this.velocity.x).normalize();const n=e/this.radius*t;this._qDelta.setFromAxisAngle(this._rollAxis,n),this.rotation.premultiply(this._qDelta)}}}_pushRing(t,e){this._ringBuf.push({frame:this._frameNum,ts:performance.now().toFixed(1),pos:`(${this.position.x.toFixed(2)}, ${this.position.y.toFixed(2)}, ${this.position.z.toFixed(2)})`,vel:`(${this.velocity.x.toFixed(2)}, ${this.velocity.y.toFixed(2)}, ${this.velocity.z.toFixed(2)})`,speed:this.velocity.length().toFixed(2),grounded:this.isGrounded,normal:`(${this.groundNormal.x.toFixed(2)}, ${this.groundNormal.y.toFixed(2)}, ${this.groundNormal.z.toFixed(2)})`,steer:t.toFixed(2),forward:e.toFixed(2)}),this._ringBuf.length>this._ringSize&&this._ringBuf.shift()}_dumpRingBuffer(t){}}const Vi={CYBER_NEON:{id:"CYBER_NEON",name:"Cyber Neon",color:61695,emissive:35071,metalness:.85,roughness:.15,glow:"#00f0ff"},METALLIC_CHROME:{id:"METALLIC_CHROME",name:"Chrome Titan",color:15791359,emissive:3359846,metalness:.98,roughness:.02,glow:"#ffffff"},DEBUG_SPHERE_ONLY:{id:"DEBUG_SPHERE_ONLY",name:"Debug Sphere Only",color:61695,emissive:0,metalness:0,roughness:1,glow:"#00f0ff"}};class dg{constructor(t,e){this.scene=t,this.physics=e,this.currentSkin=Vi.CYBER_NEON,this.geometry=new wi(1,64,64),this.texture=this._generatePBRTexture(this.currentSkin),this.material=new Vt({map:this.texture,color:this.currentSkin.color,emissive:this.currentSkin.emissive,emissiveIntensity:.35,metalness:this.currentSkin.metalness,roughness:this.currentSkin.roughness,envMapIntensity:1.4}),this.mesh=new St(this.geometry,this.material),this.mesh.castShadow=!0,this.mesh.receiveShadow=!1,this.mesh.scale.set(1,1,1),this.scene.add(this.mesh),this.ballLight=new Us(this.currentSkin.color,.6,8),this.ballLight.position.set(0,3,0),this.scene.add(this.ballLight),this._worldScale=new R}setDebugSphereOnly(t){t?this.mesh.material=new Re({color:61695,wireframe:!1}):this.mesh.material=this.material}_generatePBRTexture(t){const n=document.createElement("canvas");n.width=n.height=1024;const i=n.getContext("2d"),r="#"+t.color.toString(16).padStart(6,"0");i.fillStyle=r,i.fillRect(0,0,1024,1024);const o=i.createRadialGradient(350,280,20,512,512,560);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(.5,"rgba(255,255,255,0.05)"),o.addColorStop(1,"rgba(0,0,0,0.35)"),i.fillStyle=o,i.fillRect(0,0,1024,1024),i.strokeStyle="rgba(255,255,255,0.22)",i.lineWidth=8;for(let l=0;l<=1024;l+=128)i.beginPath(),i.moveTo(l,0),i.lineTo(l,1024),i.stroke();for(let l=0;l<=1024;l+=128)i.beginPath(),i.moveTo(0,l),i.lineTo(1024,l),i.stroke();const a="#"+(t.emissive||3359846).toString(16).padStart(6,"0");i.fillStyle=a,i.globalAlpha=.65,i.fillRect(0,476,1024,72),i.globalAlpha=1,i.fillStyle="rgba(255,255,255,0.80)";for(const l of[192,832])i.beginPath(),i.arc(512,l,100,0,Math.PI*2),i.fill();const c=new Cn(n);return c.wrapS=Oe,c.wrapT=fn,c}setSkin(t){Vi[t]&&(this.currentSkin=Vi[t],this.texture.dispose(),this.material.dispose(),this.texture=this._generatePBRTexture(this.currentSkin),this.material=new Vt({map:this.texture,color:this.currentSkin.color,emissive:this.currentSkin.emissive,emissiveIntensity:.35,metalness:this.currentSkin.metalness,roughness:this.currentSkin.roughness,envMapIntensity:1.4}),this.mesh.material=this.material,this.ballLight.color.setHex(this.currentSkin.color))}update(){this.mesh.scale.set(1,1,1),this.mesh.position.copy(this.physics.position),this.mesh.quaternion.copy(this.physics.rotation),this.ballLight.position.copy(this.physics.position),this.ballLight.position.y+=3,this.mesh.getWorldScale(this._worldScale),(Math.abs(this._worldScale.x-1)>.001||Math.abs(this._worldScale.y-1)>.001||Math.abs(this._worldScale.z-1)>.001)&&(console.error("WORLD SCALE DEFORMATION DETECTED!",this._worldScale),this.mesh.scale.set(1,1,1))}getPosition(){return this.mesh.position}}class fg{constructor(t){this.camera=t,this.camera.near=.1,this.camera.far=1500,this.camera.fov=60,this.camera.updateProjectionMatrix(),this.trackCenterX=0,this._pos=new R,this._look=new R,this._up=new R(0,1,0)}setTrackCenterX(t){this.trackCenterX=t}setEnvironment(){}setTrackColliders(){}reset(t){const e=this.trackCenterX;this.camera.position.set(e,t.y+3.8,t.z-7),this.camera.up.set(0,1,0),this.camera.lookAt(e,t.y+1,t.z+5),this.camera.updateProjectionMatrix(),this._pos.copy(this.camera.position),this._look.set(e,t.y+1,t.z+5);const n=document.getElementById("screen-fade");n&&(n.style.opacity="0")}update(t,e,n,i){const r=this.trackCenterX,o=nn.lerp(this.camera.position.x,r,.05),a=nn.lerp(this.camera.position.y,e.y+3.8,.08),c=nn.lerp(this.camera.position.z,e.z-7,.15);this.camera.position.set(o,a,c),this.camera.up.set(0,1,0),this.camera.lookAt(r,e.y+1,e.z+5)}}class pg{constructor(t,e){this.touchZone=t,this.joystickKnob=e,this.steerInput=0,this.forwardInput=1,this.isJumpPressed=!1,this.gyroEnabled=!1,this.isTouching=!1,this.touchStartX=0,this.currentTouchX=0,this.touchStartY=0,this.lastTapTime=0,this.keys={},this._bindEvents()}reset(){this.steerInput=0,this.forwardInput=1,this.isJumpPressed=!1,this.isTouching=!1,this.touchStartX=0,this.currentTouchX=0,this.lastTapTime=0,this.keys={},this.joystickKnob&&(this.joystickKnob.style.transform="translate(-50%, -50%)")}triggerJump(){this.isJumpPressed=!0}enableGyro(){this.gyroEnabled=!1}calibrateGyro(){}_bindEvents(){window.addEventListener("touchstart",n=>{if(!n.target.closest("button, .btn, .interactive-ui, .level-card, .tab-btn, .skin-card")&&n.touches.length>0){this.isTouching=!0,this.touchStartX=n.touches[0].clientX,this.currentTouchX=n.touches[0].clientX,this.touchStartY=n.touches[0].clientY,this.forwardInput=1;const i=performance.now();i-this.lastTapTime<300&&this.triggerJump(),this.lastTapTime=i}},{passive:!1}),window.addEventListener("touchmove",n=>{if(!this.isTouching)return;n.preventDefault();const i=n.touches[0].clientX,r=n.touches[0].clientY,c=(i-this.currentTouchX)/window.innerWidth*2.5;this.steerInput=nn.clamp(c*10,-1,1),this.currentTouchX=i;const l=this.touchStartY-r;this.forwardInput=l>20?2:1,this.joystickKnob&&(this.joystickKnob.style.transform=`translate(calc(-50% + ${this.steerInput*35}px), -50%)`)},{passive:!1}),window.addEventListener("touchend",()=>{this.isTouching=!1,this.steerInput=0,this.forwardInput=1,this.joystickKnob&&(this.joystickKnob.style.transform="translate(-50%, -50%)")},{passive:!0}),window.addEventListener("touchcancel",()=>{this.isTouching=!1,this.steerInput=0,this.forwardInput=1,this.joystickKnob&&(this.joystickKnob.style.transform="translate(-50%, -50%)")},{passive:!0}),window.addEventListener("keydown",n=>{this.keys[n.code]=!0,n.code==="Space"&&this.triggerJump()}),window.addEventListener("keyup",n=>{this.keys[n.code]=!1,n.code==="Space"&&(this.isJumpPressed=!1)});let t=!1,e=0;window.addEventListener("mousedown",n=>{n.target.closest("#hud, button, .btn, .interactive-ui, .screen-overlay")||(t=!0,n.clientX,e=n.clientX,this.forwardInput=1)}),window.addEventListener("mousemove",n=>{if(!t)return;const r=(n.clientX-e)/window.innerWidth*2.5;this.steerInput=nn.clamp(r*10,-1,1),e=n.clientX}),window.addEventListener("mouseup",()=>{t=!1,this.steerInput=0,this.forwardInput=1})}update(){if(!this.isTouching){let t=0,e=1;(this.keys.KeyA||this.keys.ArrowLeft)&&(t-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(t+=1),(this.keys.KeyW||this.keys.ArrowUp)&&(e=2),(this.keys.KeyS||this.keys.ArrowDown)&&(e=.5),t!==0&&(this.steerInput=t),(this.keys.KeyW||this.keys.ArrowUp||this.keys.KeyS||this.keys.ArrowDown)&&(this.forwardInput=e)}}consumeJump(){const t=this.isJumpPressed;return this.isJumpPressed=!1,t}}function mg(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#6b4423",n.fillRect(0,0,512,512),n.fillStyle="#543418";for(let a=0;a<512;a+=64){n.fillRect(0,a,512,4);for(let c=a%128===0?0:128;c<512;c+=256)n.fillRect(c,a,4,64)}n.strokeStyle="rgba(40, 20, 5, 0.25)",n.lineWidth=2;for(let a=0;a<24;a++){const c=Math.random()*512;n.beginPath(),n.moveTo(0,c),n.lineTo(512,c+(Math.random()-.5)*15),n.stroke()}const i=48,r=a=>{n.fillStyle="#ffcc00",n.fillRect(a,0,i,512),n.fillStyle="#111111";for(let c=-i;c<512+i;c+=32)n.beginPath(),n.moveTo(a,c),n.lineTo(a+i,c+i),n.lineTo(a+i,c+i+16),n.lineTo(a,c+16),n.closePath(),n.fill()};r(0),r(512-i);const o=new Cn(e);return o.wrapS=Oe,o.wrapT=Oe,o.repeat.set(1,4),o}function gg(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#e6b800",n.fillRect(0,0,512/2,512),n.strokeStyle="#997a00",n.lineWidth=3;for(let r=0;r<512;r+=32){n.beginPath(),n.moveTo(0,r),n.lineTo(512/2,r),n.stroke();const o=r%64===0?0:32;for(let a=o;a<512/2;a+=64)n.beginPath(),n.moveTo(a,r),n.lineTo(a,r+32),n.stroke()}n.fillStyle="#0a1628",n.fillRect(512/2,0,512/2,512),n.fillStyle="#00f0ff",n.shadowColor="#00f0ff",n.shadowBlur=12;for(let r=60;r<512;r+=128)n.beginPath(),n.moveTo(384,r-40),n.lineTo(464,r+20),n.lineTo(434,r+20),n.lineTo(384,r-20),n.lineTo(334,r+20),n.lineTo(304,r+20),n.closePath(),n.fill();n.shadowBlur=0,n.fillStyle="#ffffff",n.fillRect(512/2-4,0,8,512);const i=new Cn(e);return i.wrapS=fn,i.wrapT=Oe,i.repeat.set(1,4),i}function _g(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=["#44aa33","#389928","#55bb44","#2d8020","#4dbd3b"],r=16;for(let a=0;a<256;a+=r)for(let c=0;c<256;c+=r)n.fillStyle=i[Math.floor(Math.random()*i.length)],n.fillRect(c,a,r,r);n.strokeStyle="rgba(0, 0, 0, 0.15)",n.lineWidth=2;for(let a=0;a<=256;a+=r)n.beginPath(),n.moveTo(0,a),n.lineTo(256,a),n.stroke();for(let a=0;a<=256;a+=r)n.beginPath(),n.moveTo(a,0),n.lineTo(a,256),n.stroke();const o=new Cn(e);return o.wrapS=Oe,o.wrapT=Oe,o.repeat.set(1,2),o}const ui={WOOD_CAUTION:{id:"WOOD_CAUTION",name:"Wood Plank Caution",getMaterial:()=>new Vt({map:mg(),roughness:.45,metalness:.15})},BRICK_CHEVRON:{id:"BRICK_CHEVRON",name:"Yellow Brick Chevron Boost",getMaterial:()=>new Vt({map:gg(),roughness:.25,metalness:.5,emissive:17510,emissiveIntensity:.3})},VOXEL_GRASS:{id:"VOXEL_GRASS",name:"Voxel Grass Dirt",getMaterial:()=>new Vt({map:_g(),roughness:.7,metalness:.05})}},ve=2,Ge=2,ke=.75;class vg{constructor(t){if(this.scene=t,this.trackGroup=new oe,this.scene.add(this.trackGroup),this.debugGroup=new oe,this.debugGroup.visible=!1,this.scene.add(this.debugGroup),this.colliders=[],this._debugPending=[],typeof document<"u"){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="#ffcc00",n.fillRect(0,0,256,256),n.fillStyle="#1a1a1a";for(let i=-256;i<512;i+=64)n.beginPath(),n.moveTo(i,0),n.lineTo(i+32,0),n.lineTo(i+32-256,256),n.lineTo(i-256,256),n.closePath(),n.fill();this.hazardTex=new Cn(e),this.hazardTex.wrapS=Oe,this.hazardTex.wrapT=Oe,this.hazardTex.repeat.set(1,4)}else this.hazardTex=null;if(typeof document<"u"){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#7c522d",n.fillRect(0,0,512,512),n.fillStyle="#543418";for(let i=0;i<512;i+=64){n.fillRect(0,i,512,4);for(let r=i%128===0?0:128;r<512;r+=256)n.fillRect(r,i,4,64)}n.fillStyle="#36200d";for(let i=0;i<512;i+=64)for(let r=i%128===0?0:128;r<512;r+=256)n.fillRect(r+8,i+8,12,6),n.fillRect(r+8,i+50,12,6);this.woodTex=new Cn(e),this.woodTex.wrapS=Oe,this.woodTex.wrapT=Oe,this.woodTex.repeat.set(1,4)}else this.woodTex=null;this.matTrack=new Vt({map:this.woodTex,roughness:.5,metalness:.1}),this.matRamp=new Vt({color:51455,emissive:26282,emissiveIntensity:.45,metalness:.6,roughness:.25}),this.matBarrier=new Vt({map:this.hazardTex,metalness:.4,roughness:.3}),this.matHazard=this.matBarrier,this.matGoldTrim=new Vt({color:16766720,metalness:.8,roughness:.2}),this.matRailGlow=new Vt({color:61695,emissive:61695,emissiveIntensity:.8,metalness:.9,roughness:.08,depthWrite:!1}),this.matDebugWire=new Re({color:65348,wireframe:!0,transparent:!0,opacity:.75}),this.matDebugCenterline=new Ic({color:16711680})}clear(){for(this.scene.remove(this.trackGroup),this.trackGroup=new oe,this.scene.add(this.trackGroup);this.debugGroup.children.length;)this.debugGroup.remove(this.debugGroup.children[0]);this.colliders=[],this._debugPending=[]}setDebugVisible(t){this.debugGroup.visible=t}getColliders(){return this.colliders}setWorldTheme(t){if(!t)return;const e=new qt(t.trackColor||3823234),n=new qt(t.railColor||61695),i=new qt(t.mountainColor||2635856);this.matTrack.color.copy(e),this.matTrack.emissive.copy(e),this.matTrack.emissiveIntensity=.25,this.matTrack.roughness=.3,this.matTrack.metalness=.4,this.matRamp.color.copy(n),this.matRamp.emissive.copy(n),this.matRamp.emissiveIntensity=.45,this.matBarrier.color.copy(i),this.matBarrier.roughness=.35,this.matBarrier.metalness=.7,this.matRailGlow.color.copy(n),this.matRailGlow.emissive.copy(n),this.matRailGlow.emissiveIntensity=1.5}createStraight(t,e,n=45,i=14,r=null){const o=new oe;o.position.set(t.x,t.y-ve/2,t.z),o.rotation.y=e;const a=r&&ui[r]?ui[r].getMaterial():this.matTrack,c=new fe(i,ve,n),l=new St(c,a);return l.position.set(0,0,n/2),l.receiveShadow=l.castShadow=!0,o.add(l),l.updateWorldMatrix(!0,!1),this._reg(l),this._attachBarriers(o,i,n),this._attachPillars(o,i,n),this.trackGroup.add(o),this._flushDebug(),{pos:new R(t.x+Math.sin(e)*n,t.y,t.z+Math.cos(e)*n),heading:e}}createSlopeRamp(t,e,n=20,i=1.5,r=14,o=null){const a=Math.atan2(i,n),c=Math.sqrt(n*n+i*i),l=o&&ui[o]?ui[o].getMaterial():this.matRamp,h=(m,f,T,y,x)=>{const I=new fe(m,f,T),C=new St(I,l);return C.rotation.order="YXZ",C.rotation.y=e,C.rotation.x=-a,C.position.set(t.x+Math.sin(e)*n/2-Math.cos(e)*y,t.y+i/2+x,t.z+Math.cos(e)*n/2+Math.sin(e)*y),C.receiveShadow=C.castShadow=!0,C},u=h(r,ve,c,0,0);this.trackGroup.add(u),u.updateWorldMatrix(!0,!1),this._reg(u);const d=h(ke,Ge,c,-(r/2-ke/2),ve/2+Ge/2);d.material=this.matBarrier,this.trackGroup.add(d),d.updateWorldMatrix(!0,!1),this._reg(d);const p=h(ke,Ge,c,r/2-ke/2,ve/2+Ge/2);p.material=this.matBarrier,this.trackGroup.add(p),p.updateWorldMatrix(!0,!1),this._reg(p),this._flushDebug();const g=new R(Math.sin(e),0,Math.cos(e));return{pos:new R(t.x+g.x*n,t.y+i,t.z+g.z*n),heading:e}}createGentleCurve(t,e,n=45,i=1,r=14,o=null){const a=Math.max(6,Math.ceil(Math.abs(n)/6)),c=n*Math.PI/180*i,l=c/a,h=o&&ui[o]?ui[o].getMaterial():this.matTrack,p=40*Math.abs(c)/a,g=[];let v=t.x,m=t.z,f=t.y,T=e;for(let w=0;w<=a;w++)g.push({x:v,y:f,z:m,h:T}),w<a&&(v+=Math.sin(T)*p,m+=Math.cos(T)*p,T+=l);const y=[],x=[],I=[],C=[],P=r/2;for(let w=0;w<=a;w++){const U=g[w],z=Math.cos(U.h),H=-Math.sin(U.h),K=U.y,X=U.y-ve;y.push(U.x-z*P,K,U.z-H*P),y.push(U.x+z*P,K,U.z+H*P),y.push(U.x-z*P,X,U.z-H*P),y.push(U.x+z*P,X,U.z+H*P);const et=w/a;for(let Y=0;Y<4;Y++)x.push(0,1,0),I.push(Y<2?Y===0?0:1:Y===2?0:1,et)}for(let w=0;w<a;w++){const U=w*4;C.push(U,U+1,U+5,U,U+5,U+4),C.push(U+2,U+6,U+3,U+3,U+6,U+7),C.push(U,U+4,U+6,U,U+6,U+2),C.push(U+1,U+7,U+5,U+1,U+3,U+7)}const D=new pe;D.setAttribute("position",new jt(y,3)),D.setAttribute("normal",new jt(x,3)),D.setAttribute("uv",new jt(I,2)),D.setIndex(C),D.computeVertexNormals();const E=new St(D,h);E.receiveShadow=E.castShadow=!0,this.trackGroup.add(E),E.updateWorldMatrix(!0,!1),this._reg(E),this._attachCurveBarriers(g,P,ve);{const w=g.map(H=>new R(H.x,H.y+.05,H.z)),U=new pe().setFromPoints(w),z=new Oh(U,this.matDebugCenterline);this.debugGroup.add(z)}this._flushDebug();const _=g[g.length-1];return{pos:new R(_.x,_.y,_.z),heading:_.h}}createBankedCurve(t,e,n=45,i=1,r=15,o=14){const a=Math.max(8,Math.ceil(Math.abs(n)/5)),c=n*Math.PI/180*i,l=c/a,d=40*Math.abs(c)/a,p=[];let g=t.x,v=t.z,m=t.y,f=e;for(let _=0;_<=a;_++){const w=_/a;let U=1;w<.25?U=w/.25:w>.75&&(U=(1-w)/.25);const z=r*Math.PI/180*i*U;p.push({x:g,y:m,z:v,h:f,bank:z}),_<a&&(g+=Math.sin(f)*d,v+=Math.cos(f)*d,f+=l)}const T=[],y=[],x=[],I=[],C=o/2;for(let _=0;_<=a;_++){const w=p[_],U=Math.cos(w.h),z=-Math.sin(w.h),H=Math.sin(w.bank)*C;T.push(w.x-U*C,w.y-H,w.z-z*C),T.push(w.x+U*C,w.y+H,w.z+z*C),T.push(w.x-U*C,w.y-H-ve,w.z-z*C),T.push(w.x+U*C,w.y+H-ve,w.z+z*C);const K=_/a;for(let X=0;X<4;X++)y.push(0,1,0),x.push(X<2?X===0?0:1:X===2?0:1,K)}for(let _=0;_<a;_++){const w=_*4;I.push(w,w+1,w+5,w,w+5,w+4),I.push(w+2,w+6,w+3,w+3,w+6,w+7),I.push(w,w+4,w+6,w,w+6,w+2),I.push(w+1,w+7,w+5,w+1,w+3,w+7)}const P=new pe;P.setAttribute("position",new jt(T,3)),P.setAttribute("normal",new jt(y,3)),P.setAttribute("uv",new jt(x,2)),P.setIndex(I),P.computeVertexNormals();const D=new St(P,this.matTrack);D.receiveShadow=D.castShadow=!0,this.trackGroup.add(D),D.updateWorldMatrix(!0,!1),this._reg(D),this._attachCurveBarriers(p,C,ve),this._flushDebug();const E=p[p.length-1];return{pos:new R(E.x,E.y,E.z),heading:E.h}}createSplitMerge(t,e,n=50,i=16){const a=(i-1.2)/2,c=10,l=Math.ceil(n/4),h=new R(Math.sin(e),0,Math.cos(e)),u=new R(Math.cos(e),0,-Math.sin(e)),d=[];for(let f=0;f<=c;f++){const T=f/c,y=f*(14/c),x=nn.lerp(0,(i/2+1.2/2)/2,T);d.push({z:y,offA:-(x+a/2),offB:x+a/2,halfPath:a})}const p=(i/2+1.2/2)/2;for(let f=1;f<=l;f++){const T=14+f*(n/l);d.push({z:T,offA:-p-a/2,offB:p+a/2,halfPath:a})}for(let f=1;f<=c;f++){const T=f/c,y=14+n+f*(14/c),x=nn.lerp(p+a/2,0,T),I=nn.lerp(a,i/2,T);d.push({z:y,offA:-x,offB:x,halfPath:I})}const g=f=>{const T=[],y=[];for(let C=0;C<d.length;C++){const P=d[C],D=t.x+h.x*P.z+u.x*f(P),E=t.z+h.z*P.z+u.z*f(P),_=t.y,w=P.halfPath;if(T.push(D-u.x*w,_,E-u.z*w,D+u.x*w,_,E+u.z*w,D-u.x*w,_-ve,E-u.z*w,D+u.x*w,_-ve,E+u.z*w),C>0){const U=(C-1)*4;y.push(U,U+1,U+5,U,U+5,U+4),y.push(U+2,U+6,U+3,U+3,U+6,U+7),y.push(U,U+4,U+6,U,U+6,U+2),y.push(U+1,U+7,U+5,U+1,U+3,U+7)}}const x=new pe;x.setAttribute("position",new jt(T,3)),x.setIndex(y),x.computeVertexNormals();const I=new St(x,this.matTrack);I.receiveShadow=I.castShadow=!0,this.trackGroup.add(I),I.updateWorldMatrix(!0,!1),this._reg(I);for(let C=0;C<d.length-1;C++){const P=d[C],D=d[C+1],E=[-1,1];for(const _ of E){const w=t.x+h.x*P.z+u.x*(f(P)+_*P.halfPath),U=t.z+h.z*P.z+u.z*(f(P)+_*P.halfPath),z=t.x+h.x*D.z+u.x*(f(D)+_*D.halfPath),H=t.z+h.z*D.z+u.z*(f(D)+_*D.halfPath),K=(w+z)/2,X=(U+H)/2,et=D.z-P.z,Y=Math.sqrt(et*et+.01),dt=new fe(ke,Ge,Y),N=new St(dt,this.matBarrier);N.position.set(K,t.y+ve/2+Ge/2,X);const L=z-w,ot=H-U;N.rotation.y=Math.atan2(L,ot),this.trackGroup.add(N),N.updateWorldMatrix(!0,!1),this._reg(N)}}};g(f=>f.offA),g(f=>f.offB),this._flushDebug();const v=28+n;return{pos:new R(t.x+h.x*v,t.y,t.z+h.z*v),heading:e}}createVerticalLoop(t,e,n=18,i=9){const o=[];for(let p=0;p<=48;p++){const g=p/48*Math.PI*2;o.push(new R(0,n-Math.cos(g)*n,Math.sin(g)*n))}const a=new kc;a.moveTo(-i/2,-.6),a.lineTo(i/2,-.6),a.lineTo(i/2,.6),a.lineTo(-i/2,.6),a.closePath();const c=new Oc(o),l=new No(a,{steps:48,bevelEnabled:!1,extrudePath:c}),h=new St(l,this.matTrack);h.position.copy(t),h.rotation.y=e,h.receiveShadow=!0,this.trackGroup.add(h),h.updateWorldMatrix(!0,!1),this._reg(h),this._flushDebug();const u=new R(Math.sin(e),0,Math.cos(e));return{pos:t.clone().addScaledVector(u,Math.PI*2*n*.3),heading:e}}createPortalRing(t,e){const n=new oe;n.position.copy(t),n.rotation.y=e;const i=new ji(7,.75,16,64),r=new Vt({color:61695,emissive:35071,emissiveIntensity:.8,metalness:.9});n.add(new St(i,r));const o=new Uo(6.5,32),a=new Re({color:61695,transparent:!0,opacity:.45,side:He,depthWrite:!1});return n.add(new St(o,a)),this.trackGroup.add(n),n}_reg(t){this.colliders.push(t),this._debugPending.push(t)}_flushDebug(){for(const t of this._debugPending){const e=new St(t.geometry,this.matDebugWire);t.updateWorldMatrix(!0,!1),e.applyMatrix4(t.matrixWorld),this.debugGroup.add(e)}this._debugPending=[]}_attachBarriers(t,e,n){const i=new Te(ke/2,ke/2,n,12);i.rotateX(Math.PI/2);const r=new St(i,this.matBarrier);r.isBarrier=!0,r.position.set(-e/2+ke/2,ve/2+Ge/2,n/2),t.add(r),r.updateWorldMatrix(!0,!1),this._reg(r);const o=new St(i,this.matBarrier);o.isBarrier=!0,o.position.set(e/2-ke/2,ve/2+Ge/2,n/2),t.add(o),o.updateWorldMatrix(!0,!1),this._reg(o);const a=new Te(.18,.18,n,8);a.rotateX(Math.PI/2);const c=new St(a,this.matRailGlow);c.position.set(-e/2+ke/2,ve/2+Ge+.15,n/2),t.add(c);const l=new St(a,this.matRailGlow);l.position.set(e/2-ke/2,ve/2+Ge+.15,n/2),t.add(l)}_attachPillars(t,e,n){for(let i=18;i<n;i+=24){const r=new Te(.55,.85,12,10),o=new St(r,this.matBarrier);o.position.set(0,-6-ve/2,i),t.add(o)}}_attachCurveBarriers(t,e,n){for(let i=0;i<t.length-1;i++){const r=t[i],o=t[i+1],a=Math.sqrt((o.x-r.x)**2+(o.z-r.z)**2),c=Math.atan2(o.x-r.x,o.z-r.z),l=(r.y+o.y)/2;for(const h of[-1,1]){const u=Math.cos(r.h)*h,d=-Math.sin(r.h)*h,p=Math.cos(o.h)*h,g=-Math.sin(o.h)*h,v=(r.x+u*e+(o.x+p*e))/2,m=(r.z+d*e+(o.z+g*e))/2,f=new fe(ke,Ge,a),T=new St(f,this.matBarrier);T.position.set(v,l+n/2+Ge/2,m),T.rotation.y=c,this.trackGroup.add(T),T.updateWorldMatrix(!0,!1),this._reg(T)}}}}class xg{constructor(t){this.scene=t,this.obstaclesGroup=new oe,this.scene.add(this.obstaclesGroup),this.obstacles=[],this.colliders=[]}clear(){this.scene.remove(this.obstaclesGroup),this.obstaclesGroup=new oe,this.scene.add(this.obstaclesGroup),this.obstacles=[],this.colliders=[]}createSweeperBar(t,e=7.5,n=2.2){const i=new oe;i.position.copy(t);const r=new Te(1.2,1.4,.4,16),o=new Vt({color:2041912,metalness:.9,roughness:.2});i.add(new St(r,o));const a=new Te(.55,.55,3.2,16),c=new Vt({color:3359829,metalness:.8}),l=new St(a,c);l.position.y=1.6,i.add(l);const h=new fe(e,.7,.7),u=new Vt({color:16711765,emissive:16711731,emissiveIntensity:.75,metalness:.7}),d=new St(h,u);d.position.y=1.9,d.castShadow=!0,i.add(d);const p=new fe(.3,.8,.8),g=new Vt({color:61695,emissive:61695,emissiveIntensity:1.5}),v=new St(p,g);v.position.set(-e/2-.15,1.9,0),i.add(v);const m=new St(p,g);m.position.set(e/2+.15,1.9,0),i.add(m),this.obstaclesGroup.add(i),this.colliders.push(d),this.obstacles.push({type:"SWEEPER",group:d,speed:n})}createPusherBlock(t,e=6,n=3){const i=new oe;i.position.copy(t);const r=new fe(e+4,.2,3.2),o=new Vt({color:2041912,metalness:.85}),a=new St(r,o);a.position.y=.1,i.add(a);const c=new fe(3.6,2.8,2.8),l=new Vt({color:16755200,emissive:10044416,emissiveIntensity:.4,metalness:.6}),h=new St(c,l);h.position.y=1.5,h.castShadow=!0,i.add(h),this.obstaclesGroup.add(i),this.colliders.push(h),this.obstacles.push({type:"PUSHER",mesh:h,baseX:t.x,distance:e,speed:n,timeOffset:Math.random()*Math.PI})}createCrusherStomper(t,e=2.5){const n=new oe;n.position.copy(t);const i=new Te(.3,.3,9,8),r=new Vt({color:2241348,metalness:.8}),o=new St(i,r);o.position.set(-5,4.5,0),n.add(o);const a=new St(i,r);a.position.set(5,4.5,0),n.add(a);const c=new fe(8,2.5,3.5),l=new Vt({color:16720384,emissive:11145472,emissiveIntensity:.5,metalness:.7}),h=new St(c,l);h.position.y=7,h.castShadow=!0,n.add(h),this.obstaclesGroup.add(n),this.colliders.push(h),this.obstacles.push({type:"CRUSHER",mesh:h,baseY:7,minY:1.6,speed:e})}createPendulum(t,e=12,n=2.5){const i=new oe;i.position.copy(t);const r=new fe(10,.4,1),o=new Vt({color:2241348,metalness:.8}),a=new St(r,o);a.position.y=e,i.add(a);const c=new wi(1.6,24,24),l=new Vt({color:16711748,emissive:8912930,emissiveIntensity:.4,metalness:.95,roughness:.1}),h=new St(c,l),u=new Te(.12,.12,e),d=new Vt({color:7833753,metalness:.9}),p=new St(u,d);p.position.y=-e/2;const g=new oe;g.position.y=e,g.add(p),h.position.y=-e,g.add(h),i.add(g),this.obstaclesGroup.add(i),this.colliders.push(h),this.obstacles.push({type:"PENDULUM",group:g,speed:n})}createBoostPad(t,e=6.5,n=8.5){const i=new oe;i.position.copy(t);const r=new fe(e,.12,n),o=new Vt({color:65416,emissive:52326,emissiveIntensity:.9,roughness:.2}),a=new St(r,o);a.position.y=.65,i.add(a);const c=new Ws(1.2,2,3),l=new Re({color:16777215}),h=new St(c,l);h.rotation.x=-Math.PI/2,h.position.set(0,.72,-1.8),i.add(h);const u=new St(c,l);u.rotation.x=-Math.PI/2,u.position.set(0,.72,1.8),i.add(u),this.obstaclesGroup.add(i),this.obstacles.push({type:"BOOST_PAD",mesh:a,pos:t.clone()})}update(t,e){for(const n of this.obstacles)if(n.type==="SWEEPER")n.group.rotation.y+=n.speed*t;else if(n.type==="PUSHER"){const i=Math.sin(e*n.speed+n.timeOffset)*(n.distance/2);n.mesh.position.x=i}else if(n.type==="CRUSHER"){const i=(Math.sin(e*n.speed)+1)/2;n.mesh.position.y=nn.lerp(n.minY,n.baseY,i)}else n.type==="PENDULUM"&&(n.group.rotation.z=Math.sin(e*n.speed)*.85)}getColliders(){return this.colliders}}const Hi={WORLD_1_SKY_HAVEN:{id:"WORLD_1_SKY_HAVEN",name:"SKY HAVEN",skyTop:"#1e90ff",skyBot:"#87ceeb",fogColor:8900331,fogNear:150,fogFar:900,sunColor:16777215,sunIntensity:1.3,sunPos:[100,200,50],ambColor:11591910,ambIntensity:.5,trackColor:15791352,railColor:61695},WORLD_2_RURAL_VALLEY:{id:"WORLD_2_RURAL_VALLEY",name:"LUSH RURAL VALLEY",skyTop:"#4ac5d8",skyBot:"#7ed6df",fogColor:10740425,fogNear:120,fogFar:850,sunColor:16774630,sunIntensity:1.2,sunPos:[120,180,-60],ambColor:13759211,ambIntensity:.6,trackColor:15965202,railColor:5125166},WORLD_3_CYBERPUNK:{id:"WORLD_3_CYBERPUNK",name:"NEON METROPOLIS",skyTop:"#05050a",skyBot:"#0a0f24",fogColor:659236,fogExp2:.003,sunColor:1713022,sunIntensity:.6,sunPos:[0,150,-50],ambColor:858922,ambIntensity:.3,trackColor:1118488,railColor:61695,railRightColor:16711807},WORLD_4_VOLCANIC:{id:"WORLD_4_VOLCANIC",name:"VOLCANIC WASTELAND",skyTop:"#1a0505",skyBot:"#3a0a05",fogColor:2821389,fogExp2:.004,sunColor:16733440,sunIntensity:.8,sunPos:[0,160,-50],ambColor:2820618,ambIntensity:.4,trackColor:2038298,railColor:16724736},WORLD_5_MISTY_PEAKS:{id:"WORLD_5_MISTY_PEAKS",name:"ANCIENT MISTY PEAKS",skyTop:"#7a8b9e",skyBot:"#b0c4de",fogColor:12767712,fogExp2:.005,sunColor:15135487,sunIntensity:1,sunPos:[80,160,40],ambColor:9215743,ambIntensity:.5,trackColor:4870749,railColor:9109504},WORLD_6_GOLDEN_DESERT:{id:"WORLD_6_GOLDEN_DESERT",name:"GOLDEN CANYON",skyTop:"#4a154b",skyBot:"#ff6600",fogColor:14393930,fogExp2:.0035,sunColor:16755251,sunIntensity:1.4,sunPos:[150,100,-80],ambColor:13395507,ambIntensity:.5,trackColor:12216380,railColor:6044193},WORLD_7_COSMIC_VOID:{id:"WORLD_7_COSMIC_VOID",name:"COSMIC AURORA VOID",skyTop:"#020208",skyBot:"#050212",fogColor:null,sunColor:8388564,sunIntensity:1.2,sunPos:[100,200,100],ambColor:4915330,ambIntensity:.5,trackColor:3016788,railColor:65535,railRightColor:16711935}};function Mg(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d"),n=[{x:256,y:280,r:180,a:.9},{x:160,y:260,r:130,a:.85},{x:350,y:250,r:120,a:.85},{x:220,y:190,r:110,a:.9},{x:300,y:200,r:100,a:.85}];for(const r of n){const o=e.createRadialGradient(r.x,r.y,0,r.x,r.y,r.r);o.addColorStop(0,`rgba(255, 255, 255, ${r.a})`),o.addColorStop(.5,`rgba(240, 248, 255, ${r.a*.6})`),o.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=o,e.beginPath(),e.arc(r.x,r.y,r.r,0,Math.PI*2),e.fill()}const i=new Cn(t);return i.needsUpdate=!0,i}function yg(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");e.fillStyle="#121218",e.fillRect(0,0,256,256);const n=["#00f0ff","#ff007f","#ffaa00","#121218","#121218"],i=8,r=16,o=256/i,a=256/r;for(let c=0;c<r;c++)for(let l=0;l<i;l++){const h=n[Math.floor(Math.random()*n.length)];e.fillStyle=h,e.fillRect(l*o+4,c*a+4,o-8,a-8)}return new Cn(t)}class Sg{constructor(t,e){this.scene=t,this.renderer=e,this.currentZone=Hi.WORLD_1_SKY_HAVEN,this.cloudTex=Mg(),this.windowTex=yg(),this.envGroup=new oe,this.cloudDeck=new oe,this.propsGroup=new oe,this.billboards=[],this.windmills=[],this.lanterns=[],this.asteroids=[],this.auroraRibbons=[],this.scene.add(this.envGroup),this.envGroup.add(this.cloudDeck),this.envGroup.add(this.propsGroup),this.dirLight=new xu(16777215,1.3),this.dirLight.position.set(100,200,50),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.bias=-1e-4,this.scene.add(this.dirLight),this.ambLight=new Mu(11591910,.5),this.scene.add(this.ambLight),this.cyanPointLight=new Us(61695,2.5,500),this.cyanPointLight.position.set(100,-50,-200),this.scene.add(this.cyanPointLight),this.magentaPointLight=new Us(16711807,2.5,500),this.magentaPointLight.position.set(-100,-50,-500),this.scene.add(this.magentaPointLight),this.lavaPointLight=new Us(16724736,3,600),this.lavaPointLight.position.set(0,-80,-200),this.scene.add(this.lavaPointLight),this._applyZone(this.currentZone)}_applyZone(t){for(this.currentZone=t;this.propsGroup.children.length;){const e=this.propsGroup.children[0];e.geometry&&e.geometry.dispose(),this.propsGroup.remove(e)}this.billboards=[],this.windmills=[],this.lanterns=[],this.asteroids=[],this.auroraRibbons=[],this._buildSkyDome(t),t.fogColor===null?this.scene.fog=null:this.scene.fog=new Po(t.fogColor,t.fogNear||200,t.fogFar||1e3),this.dirLight.color.set(t.sunColor),this.dirLight.intensity=t.sunIntensity,this.dirLight.position.set(...t.sunPos),this.ambLight.color.set(t.ambColor),this.ambLight.intensity=t.ambIntensity,t.id==="WORLD_7_COSMIC_VOID"?(this.cyanPointLight.visible=!0,this.magentaPointLight.visible=!0,this.lavaPointLight.visible=!1,this._buildCosmicVoid()):t.id==="WORLD_6_GOLDEN_DESERT"?(this.cyanPointLight.visible=!1,this.magentaPointLight.visible=!1,this.lavaPointLight.visible=!1,this._buildGoldenDesert()):t.id==="WORLD_5_MISTY_PEAKS"?(this.cyanPointLight.visible=!1,this.magentaPointLight.visible=!1,this.lavaPointLight.visible=!1,this._buildMistyPeaks()):t.id==="WORLD_4_VOLCANIC"?(this.cyanPointLight.visible=!1,this.magentaPointLight.visible=!1,this.lavaPointLight.visible=!0,this._buildVolcanicWasteland()):t.id==="WORLD_3_CYBERPUNK"?(this.cyanPointLight.visible=!0,this.magentaPointLight.visible=!0,this.lavaPointLight.visible=!1,this._buildCyberpunkMetropolis()):t.id==="WORLD_2_RURAL_VALLEY"?(this.cyanPointLight.visible=!1,this.magentaPointLight.visible=!1,this.lavaPointLight.visible=!1,this._buildRuralValley()):(this.cyanPointLight.visible=!1,this.magentaPointLight.visible=!1,this.lavaPointLight.visible=!1,this._buildSkyHaven())}_buildSkyDome(t){this.skyMesh&&(this.scene.remove(this.skyMesh),this.skyMesh=null),this.scene.background=new qt(t.skyBot||8900331)}_buildSkyHaven(){const t=new Re({map:this.cloudTex,transparent:!0,opacity:.85,depthWrite:!1,fog:!0}),e=new Qe(80,80);for(let i=0;i<36;i++){const r=new oe;for(let c=0;c<3;c++){const l=new St(e,t);l.rotation.x=-Math.PI/2,l.position.set((Math.random()-.5)*40,(Math.random()-.5)*10,(Math.random()-.5)*40),r.add(l)}const o=i/36*Math.PI*2,a=180+i%6*70;r.position.set(Math.cos(o)*a,-85-i%4*10,Math.sin(o)*a+i*25),this.propsGroup.add(r)}const n=new Vt({color:15791352,roughness:.25,metalness:.4});for(let i=0;i<14;i++){const r=180+i%5*35,o=new St(new Te(2,8,r,8),n),a=i/14*Math.PI*2+.2,c=350+i%3*120;o.position.set(Math.cos(a)*c,r/2-90,Math.sin(a)*c),this.propsGroup.add(o)}}_buildRuralValley(){const t=new Qe(1200,1200,32,32);t.rotateX(-Math.PI/2);const e=t.attributes.position;for(let p=0;p<e.count;p++){const g=e.getX(p),v=e.getZ(p),m=Math.sin(g*.01)*Math.cos(v*.01)*25+Math.sin(g*.03)*10;e.setY(p,m)}t.computeVertexNormals();const n=new Vt({color:4300152,flatShading:!0,roughness:.8}),i=new St(t,n);i.position.y=-105,this.propsGroup.add(i);const r=new Qe(80,1200,8,32);r.rotateX(-Math.PI/2);const o=new Vt({color:2719929,metalness:.6,roughness:.1,opacity:.85,transparent:!0}),a=new St(r,o);a.position.set(-60,-104,0),this.propsGroup.add(a);const c=new Vt({color:5125166,roughness:.9}),l=new Vt({color:1793568,flatShading:!0,roughness:.8}),h=new Vt({color:3369246,flatShading:!0,roughness:.8});for(let p=0;p<84;p++){const g=new oe,v=p%2===0?l:h,m=new St(new Te(.8,1.2,10,6),c);m.position.y=5,g.add(m);for(let y=0;y<3;y++){const x=new St(new Ws(7-y*1.5,12,6),v);x.position.y=10+y*6,g.add(x)}const f=p/84*Math.PI*2,T=160+p%6*55;g.position.set(Math.cos(f)*T,-95,Math.sin(f)*T+p*20),g.scale.setScalar(1+Math.random()*.6),this.propsGroup.add(g)}const u=new Vt({color:7109257,flatShading:!0,roughness:.9}),d=new ks(12,0);for(let p=0;p<30;p++){const g=new St(d,u),v=p/30*Math.PI*2+.3,m=220+p%4*80;g.position.set(Math.cos(v)*m,-98,Math.sin(v)*m+p*30),g.scale.set(1+Math.random(),.8+Math.random(),1+Math.random()),g.rotation.set(Math.random()*3,Math.random()*3,0),this.propsGroup.add(g)}}_buildCyberpunkMetropolis(){const t=new Vt({color:1184280,map:this.windowTex,metalness:.9,roughness:.2});for(let i=0;i<64;i++){const r=25+i%4*10,o=25+i%3*10,a=140+i%6*30,c=new St(new fe(r,a,o),t),l=i/64*Math.PI*2,h=180+i%5*60;c.position.set(Math.cos(l)*h,-110+a/2,Math.sin(l)*h+i*20),this.propsGroup.add(c)}const e=new Re({color:61695,transparent:!0,opacity:.85,side:He,depthWrite:!1}),n=new Qe(35,18);for(let i=0;i<14;i++){const r=new St(n,e),o=i/14*Math.PI*2+.3,a=220+i%3*70;r.position.set(Math.cos(o)*a,-20+i%4*20,Math.sin(o)*a+i*25),r.rotation.y=o,this.propsGroup.add(r),this.billboards.push(r)}}_buildVolcanicWasteland(){const t=new Vt({color:1578004,flatShading:!0,roughness:.9,metalness:.2}),e=new fe(60,200,100);for(let o=0;o<24;o++){const a=new St(e,t);a.position.set(-130,-50,-400+o*80),a.rotation.y=o*.3,this.propsGroup.add(a);const c=new St(e,t);c.position.set(130,-50,-400+o*80),c.rotation.y=-(o*.3),this.propsGroup.add(c)}const n=new Qe(160,1200);n.rotateX(-Math.PI/2);const i=new Vt({color:16724736,emissive:16720384,emissiveIntensity:1.5,roughness:.2}),r=new St(n,i);r.position.set(0,-120,0),this.propsGroup.add(r)}_buildMistyPeaks(){const t=new Vt({color:3817798,flatShading:!0,roughness:.8});for(let e=0;e<28;e++){const n=160+e%5*35,i=new St(new Te(4,16,n,6),t),r=e/28*Math.PI*2+.1,o=140+e%4*45;i.position.set(Math.cos(r)*o,n/2-120,Math.sin(r)*o+e*20),this.propsGroup.add(i)}}_buildGoldenDesert(){const t=new Vt({color:12216380,flatShading:!0,roughness:.85});for(let e=0;e<36;e++){const n=40+e%4*15,i=50+e%3*20,r=120+e%5*25,o=new St(new fe(n,r,i),t),a=e/36*Math.PI*2+.2,c=150+e%4*50;o.position.set(Math.cos(a)*c,-100+r/2,Math.sin(a)*c+e*20),this.propsGroup.add(o)}}_buildCosmicVoid(){const t=new Re({color:9055202,transparent:!0,opacity:.65,side:He,depthWrite:!1}),e=new Qe(1200,150,32,16);for(let c=0;c<4;c++){const l=new St(e,t);l.rotation.x=Math.PI/4,l.position.set(c%2===0?-120:120,40+c*30,c*250),this.propsGroup.add(l),this.auroraRibbons.push(l)}const n=new Vt({color:1708079,roughness:.4,metalness:.8,flatShading:!0});for(let c=0;c<52;c++){const l=8+c%5*6,h=new St(new ks(l,1),n),u=c/52*Math.PI*2,d=160+c%4*50;h.position.set(Math.cos(u)*d,c%3*40-50,Math.sin(u)*d+c*20),this.propsGroup.add(h),this.asteroids.push(h)}const i=new pe,r=new Float32Array(750);for(let c=0;c<250;c++)r[c*3+0]=(Math.random()-.5)*500,r[c*3+1]=(Math.random()-.5)*200,r[c*3+2]=(Math.random()-.5)*1200;i.setAttribute("position",new je(r,3));const o=new Uc({color:14725375,size:2.5,transparent:!0,opacity:.8}),a=new Fh(i,o);this.propsGroup.add(a)}setEnvironment(t){const n={sky_haven:"WORLD_1_SKY_HAVEN",rural_valley:"WORLD_2_RURAL_VALLEY",neon_city:"WORLD_3_CYBERPUNK",volcanic_wasteland:"WORLD_4_VOLCANIC",misty_peaks:"WORLD_5_MISTY_PEAKS",golden_canyon:"WORLD_6_GOLDEN_DESERT",cosmic_aurora:"WORLD_7_COSMIC_VOID",WORLD_1_SKY_HAVEN:"WORLD_1_SKY_HAVEN",WORLD_2_RURAL_VALLEY:"WORLD_2_RURAL_VALLEY",WORLD_3_CYBERPUNK:"WORLD_3_CYBERPUNK",WORLD_4_VOLCANIC:"WORLD_4_VOLCANIC",WORLD_5_MISTY_PEAKS:"WORLD_5_MISTY_PEAKS",WORLD_6_GOLDEN_DESERT:"WORLD_6_GOLDEN_DESERT",WORLD_7_COSMIC_VOID:"WORLD_7_COSMIC_VOID"}[t]||"WORLD_1_SKY_HAVEN";this.transitionToZone(n)}transitionToZone(t,e=null){const n=Hi[t]||Object.values(Hi).find(i=>i.id===t);n&&(this._applyZone(n),e&&e.setWorldTheme(n))}update(t,e){this.envGroup.position.z=e.z,this.skyMesh&&this.skyMesh.position.copy(e);const n=performance.now()*.002;this.asteroids.forEach((i,r)=>{i.rotation.x+=.003,i.rotation.y+=.005}),this.auroraRibbons.forEach((i,r)=>{i.rotation.z=Math.sin(n+r)*.05})}_buildSky(){}_buildClouds(){}_buildDistantLandscapes(){}}function Eg(s){return function(){let t=s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>8,t|61),((t^t>>>14)>>>0)/4294967296}}class Tg{static generate250Levels(){const t=[];for(let e=0;e<=250;e++){if(e===0){t.push({id:0,title:"PHYSICS TEST BENCH",subtitle:"Mechanical Verification Course",targetTime:90,totalCoins:25,initialZone:"WORLD_1_SKY_HAVEN",segments:[{type:"STRAIGHT",length:50,width:16,coins:4},{type:"SLOPE_RAMP",length:25,riseHeight:2,width:16},{type:"SLOPE_RAMP",length:20,riseHeight:4.5,width:16},{type:"GENTLE_CURVE",angleDeg:40,turnDir:1,width:16},{type:"BANKED_CURVE",angleDeg:45,turnDir:-1,bankDeg:15,width:16},{type:"CHECKPOINT",index:1},{type:"SLOPE_RAMP",length:18,riseHeight:3,width:16},{type:"STRAIGHT",length:60,width:20,coins:8},{type:"STRAIGHT",length:40,width:16,coins:5},{type:"STRAIGHT",length:35,width:8,coins:8},{type:"FINISH_GATE"}]});continue}if(e===1){t.push({id:1,title:"FIRST ROLL",subtitle:"World 1: Sky Haven — Onboarding Track",targetTime:50,totalCoins:15,initialZone:"WORLD_1_SKY_HAVEN",segments:[{type:"STRAIGHT",length:40,width:12,coins:5},{type:"SLOPE_RAMP",length:25,riseHeight:1.5,width:12,nitroBoost:!0},{type:"STRAIGHT",length:45,width:12,coins:5},{type:"CHECKPOINT",index:1},{type:"GENTLE_CURVE",angleDeg:15,turnDir:1,width:12},{type:"STRAIGHT",length:35,width:12,coins:5},{type:"PORTAL_RING",targetZone:"WORLD_1_SKY_HAVEN"},{type:"FINISH_GATE"}]});continue}if(e===2){t.push({id:2,title:"CLOUD CURVES",subtitle:"World 1: Sky Haven — Sweeping Turns & Launch Ramps",targetTime:65,totalCoins:25,initialZone:"WORLD_1_SKY_HAVEN",segments:[{type:"STRAIGHT",length:35,width:10,coins:5},{type:"GENTLE_CURVE",angleDeg:15,turnDir:-1,width:10},{type:"SLOPE_RAMP",length:22,riseHeight:2,width:10,nitroBoost:!0},{type:"STRAIGHT",length:40,width:10,coins:8},{type:"GENTLE_CURVE",angleDeg:15,turnDir:1,width:10},{type:"CHECKPOINT",index:1},{type:"SLOPE_RAMP",length:24,riseHeight:2.5,width:10,nitroBoost:!0},{type:"STRAIGHT",length:45,width:10,coins:12},{type:"PORTAL_RING",targetZone:"WORLD_1_SKY_HAVEN"},{type:"FINISH_GATE"}]});continue}const n=Eg(e*1e3+42),i=["WORLD_1_AUTUMN_FOREST","WORLD_2_DESERT_CANYON","WORLD_3_LUSH_RIVER"];let r=Math.min(7,Math.floor((e-1)/35)+1),o=i[(r-1)%i.length],a=16;e>=6&&e<=20?a=12:e>=21&&(a=10);const c=Math.min(16,6+Math.floor(r*1.2)+Math.floor(n()*3)),l=45+c*5,h=[];let u=0,d=1;h.push({type:"STRAIGHT",length:40+Math.floor(n()*15),width:a,coins:3}),u+=3;for(let v=0;v<c;v++){const m=n();if(m<.3){const f=35+Math.floor(n()*25),T=n()>.4?4:0,y=r>=3&&n()<.25;h.push({type:"STRAIGHT",length:f,width:a,coins:T,pusherObstacle:y}),u+=T}else if(m<.52){const f=n()>.5?1:-1,T=30+Math.floor(n()*25);if(r>=2&&n()>.4){const y=10+Math.floor(n()*10);h.push({type:"BANKED_CURVE",angleDeg:T,turnDir:f,bankDeg:y,width:a})}else h.push({type:"GENTLE_CURVE",angleDeg:T,turnDir:f,width:a})}else if(m<.72){const f=1.5+Math.floor(n()*(1.2+r*.4)),T=20+Math.floor(n()*10),y=r>=3&&n()<.3;h.push({type:"SLOPE_RAMP",length:T,riseHeight:f,width:a,nitroBoost:y}),h.push({type:"STRAIGHT",length:50,width:Math.min(20,a+4),coins:4}),u+=4}else if(m<.88&&r>=2){const f=40+Math.floor(n()*20),T=r>=4&&n()<.3;h.push({type:"SPLIT_MERGE",splitLen:f,width:a,coins:6,sweeperObstacle:T}),u+=6}else r>=4&&n()<.4&&h.push({type:"VERTICAL_LOOP",radius:18,width:Math.max(8,a-4)});v===Math.floor(c/2)&&h.push({type:"CHECKPOINT",index:d++})}if(e%35===0&&e<245){const m=["WORLD_2_GOLDEN_RIDGE","WORLD_3_RURAL_VALLEY","WORLD_4_CYBERPUNK","WORLD_5_MISTY_PEAKS","WORLD_6_VOLCANIC","WORLD_7_COSMIC_AURORA"][Math.floor(e/35)-1]||"WORLD_2_GOLDEN_RIDGE";h.push({type:"PORTAL_RING",targetZone:m}),h.push({type:"STRAIGHT",length:25,width:a})}h.push({type:"FINISH_GATE"});const p=["SKY RUNWAY","SUNSET DASH","CLOUD CRUISE","NEON SPEEDWAY","STORM CHASER","COSMIC RIDGE","CELESTIAL PEAK","HYPER HEIGHTS","VELOCITY WAY","WARP CITADEL","LIGHTNING STRIP","AURORA DRIFT"],g=`${p[e%p.length]} ${Math.floor(e/10)+1}`;t.push({id:e,title:g,subtitle:`World ${r} — Course ${e}`,targetTime:l,totalCoins:u,initialZone:o,segments:h})}return t}}const Gn=Tg.generate250Levels();class bg{constructor(t){this.scene=t,this.particles=[],this.sparkGeo=new wi(.12,6,6),this.dustGeo=new wi(.18,6,6),this.cyanMat=new Re({color:61695,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!0}),this.goldMat=new Re({color:16758528,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!0}),this.magentaMat=new Re({color:16711807,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!0}),this.dustMat=new Re({color:13421772,transparent:!0,opacity:.4,depthWrite:!1,depthTest:!0}),this.boostMat=new Re({color:16729344,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!0})}emitCoinBurst(t){for(let n=0;n<16;n++){const i=new St(this.sparkGeo,this.goldMat.clone());i.position.copy(t);const r=new R((Math.random()-.5)*8,Math.random()*8+2,(Math.random()-.5)*8);this.scene.add(i),this.particles.push({mesh:i,vel:r,life:1,maxLife:1+Math.random()*.4,scaleSpeed:-.6})}}emitLandingDust(t,e=10){const n=Math.min(Math.floor(e*1.5),24);for(let i=0;i<n;i++){const r=new St(this.dustGeo,this.dustMat.clone());r.position.copy(t),r.position.y+=.2;const o=i/n*Math.PI*2+Math.random()*.3,a=2+Math.random()*(e*.4),c=new R(Math.cos(o)*a,Math.random()*1.5+.5,Math.sin(o)*a);this.scene.add(r),this.particles.push({mesh:r,vel:c,life:.6,maxLife:.6,scaleSpeed:1.2})}}emitCheckpointBeacon(t){for(let n=0;n<30;n++){const i=n%2===0?this.cyanMat.clone():this.magentaMat.clone(),r=new St(this.sparkGeo,i);r.position.copy(t);const o=new R((Math.random()-.5)*6,Math.random()*12+4,(Math.random()-.5)*6);this.scene.add(r),this.particles.push({mesh:r,vel:o,life:1.2,maxLife:1.2,scaleSpeed:-.5})}}emitBoostSparkles(t,e){for(let i=0;i<4;i++){const r=new St(this.sparkGeo,this.boostMat.clone());r.position.copy(t);const o=e.clone().negate().multiplyScalar(.4);o.x+=(Math.random()-.5)*3,o.y+=Math.random()*2+1,o.z+=(Math.random()-.5)*3,this.scene.add(r),this.particles.push({mesh:r,vel:o,life:.4,maxLife:.4,scaleSpeed:-1.5})}}emitPortalWarp(t){for(let n=0;n<40;n++){const i=new St(this.sparkGeo,this.cyanMat.clone());i.position.copy(t);const r=Math.random()*Math.PI*2,o=2.5+Math.random()*2;i.position.x+=Math.cos(r)*o,i.position.y+=Math.sin(r)*o;const a=new R((Math.random()-.5)*4,(Math.random()-.5)*4,Math.random()*10+5);this.scene.add(i),this.particles.push({mesh:i,vel:a,life:.8,maxLife:.8,scaleSpeed:-.8})}}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(e,1);continue}n.mesh.position.addScaledVector(n.vel,t),n.vel.y-=9.8*t*.4;const i=n.life/n.maxLife;n.mesh.material&&(n.mesh.material.opacity=i);const r=Math.max(.05,n.mesh.scale.x+n.scaleSpeed*t);n.mesh.scale.set(r,r,r)}}dispose(){this.particles.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose()}),this.particles=[]}}class wg{constructor(){this.ctx=null,this.enabled=!0,this.rollOsc=null,this.rollGain=null,this.isRolling=!1}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this._initRollingHum())}_ensureContext(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_initRollingHum(){if(this.ctx)try{this.rollOsc=this.ctx.createOscillator(),this.rollGain=this.ctx.createGain(),this.rollOsc.type="triangle",this.rollOsc.frequency.setValueAtTime(40,this.ctx.currentTime),this.rollGain.gain.setValueAtTime(0,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(120,this.ctx.currentTime),this.rollOsc.connect(t),t.connect(this.rollGain),this.rollGain.connect(this.ctx.destination),this.rollOsc.start(),this.isRolling=!0}catch(t){console.warn("Audio rolling hum init failed",t)}}updateRoll(t,e){if(!this.enabled||!this.ctx||!this.rollGain)return;if(!e||t<.5){this.rollGain.gain.setTargetAtTime(0,this.ctx.currentTime,.05);return}const n=40+Math.min(t*3.5,180),i=Math.min(t/45,.25);this.rollOsc.frequency.setTargetAtTime(n,this.ctx.currentTime,.05),this.rollGain.gain.setTargetAtTime(i,this.ctx.currentTime,.05)}playJump(){if(!this.enabled||(this._ensureContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(150,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(450,this.ctx.currentTime+.18),e.gain.setValueAtTime(.3,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.2),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.2)}playLand(t=10){if(!this.enabled||(this._ensureContext(),!this.ctx))return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine";const i=Math.max(60,140-t*3);e.frequency.setValueAtTime(i,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+.15);const r=Math.min(.1+t*.02,.4);n.gain.setValueAtTime(r,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.15),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.15)}playCoin(){if(!this.enabled||(this._ensureContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",e.type="sine",t.frequency.setValueAtTime(987.77,this.ctx.currentTime),t.frequency.setValueAtTime(1318.51,this.ctx.currentTime+.08),e.frequency.setValueAtTime(1318.51,this.ctx.currentTime),e.frequency.setValueAtTime(1760,this.ctx.currentTime+.08),n.gain.setValueAtTime(.2,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.25),t.connect(n),e.connect(n),n.connect(this.ctx.destination),t.start(),e.start(),t.stop(this.ctx.currentTime+.25),e.stop(this.ctx.currentTime+.25)}playCheckpoint(){if(!this.enabled||(this._ensureContext(),!this.ctx))return;[523.25,659.25,783.99,1046.5].forEach((e,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(e,this.ctx.currentTime+n*.06),r.gain.setValueAtTime(.25,this.ctx.currentTime+n*.06),r.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+n*.06+.3),i.connect(r),r.connect(this.ctx.destination),i.start(this.ctx.currentTime+n*.06),i.stop(this.ctx.currentTime+n*.06+.3)})}playBoost(){if(!this.enabled||(this._ensureContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(200,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.3),e.gain.setValueAtTime(.3,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.35),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.35)}playWarpPortal(){if(!this.enabled||(this._ensureContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(300,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(1200,this.ctx.currentTime+.4),t.frequency.linearRampToValueAtTime(400,this.ctx.currentTime+.6),e.gain.setValueAtTime(.35,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.65),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.65)}playCrash(){if(!this.enabled||(this._ensureContext(),!this.ctx))return;const t=this.ctx.sampleRate*.3,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let a=0;a<t;a++)n[a]=Math.random()*2-1;const i=this.ctx.createBufferSource();i.buffer=e;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(800,this.ctx.currentTime),r.frequency.exponentialRampToValueAtTime(100,this.ctx.currentTime+.3);const o=this.ctx.createGain();o.gain.setValueAtTime(.4,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),i.connect(r),r.connect(o),o.connect(this.ctx.destination),i.start()}playVictory(){if(!this.enabled||(this._ensureContext(),!this.ctx))return;[523.25,659.25,783.99,1046.5,1318.51].forEach((e,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(e,this.ctx.currentTime+n*.1),r.gain.setValueAtTime(.3,this.ctx.currentTime+n*.1),r.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+n*.1+.4),i.connect(r),r.connect(this.ctx.destination),i.start(this.ctx.currentTime+n*.1),i.stop(this.ctx.currentTime+n*.1+.4)})}toggleAudio(t){this.enabled=t,!t&&this.rollGain&&this.ctx&&this.rollGain.gain.setValueAtTime(0,this.ctx.currentTime)}}const Ag=new wg;var zo={};(function s(t,e,n,i){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=(function(){if(!t.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),L=N.getContext("2d");L.fillRect(0,0,1,1);var ot=N.transferToImageBitmap();L.createPattern(ot,"no-repeat")}catch{return!1}return!0})();function c(){}function l(N){var L=e.exports.Promise,ot=L!==void 0?L:t.Promise;return typeof ot=="function"?new ot(N):(N(c,c),null)}var h=(function(N,L){return{transform:function(ot){if(N)return ot;if(L.has(ot))return L.get(ot);var gt=new OffscreenCanvas(ot.width,ot.height),k=gt.getContext("2d");return k.drawImage(ot,0,0),L.set(ot,gt),gt},clear:function(){L.clear()}}})(a,new Map),u=(function(){var N=Math.floor(16.666666666666668),L,ot,gt={},k=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(L=function($){var rt=Math.random();return gt[rt]=requestAnimationFrame(function q(ht){k===ht||k+N-1<ht?(k=ht,delete gt[rt],$()):gt[rt]=requestAnimationFrame(q)}),rt},ot=function($){gt[$]&&cancelAnimationFrame(gt[$])}):(L=function($){return setTimeout($,N)},ot=function($){return clearTimeout($)}),{frame:L,cancel:ot}})(),d=(function(){var N,L,ot={};function gt(k){function $(rt,q){k.postMessage({options:rt||{},callback:q})}k.init=function(q){var ht=q.transferControlToOffscreen();k.postMessage({canvas:ht},[ht])},k.fire=function(q,ht,Lt){if(L)return $(q,null),L;var ft=Math.random().toString(36).slice(2);return L=l(function(Dt){function Q(tt){tt.data.callback===ft&&(delete ot[ft],k.removeEventListener("message",Q),L=null,h.clear(),Lt(),Dt())}k.addEventListener("message",Q),$(q,ft),ot[ft]=Q.bind(null,{data:{callback:ft}})}),L},k.reset=function(){k.postMessage({reset:!0});for(var q in ot)ot[q](),delete ot[q]}}return function(){if(N)return N;if(!n&&r){var k=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([k])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}gt(N)}return N}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(N,L){return L?L(N):N}function v(N){return N!=null}function m(N,L,ot){return g(N&&v(N[L])?N[L]:p[L],ot)}function f(N){return N<0?0:Math.floor(N)}function T(N,L){return Math.floor(Math.random()*(L-N))+N}function y(N){return parseInt(N,16)}function x(N){return N.map(I)}function I(N){var L=String(N).replace(/[^0-9a-f]/gi,"");return L.length<6&&(L=L[0]+L[0]+L[1]+L[1]+L[2]+L[2]),{r:y(L.substring(0,2)),g:y(L.substring(2,4)),b:y(L.substring(4,6))}}function C(N){var L=m(N,"origin",Object);return L.x=m(L,"x",Number),L.y=m(L,"y",Number),L}function P(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function D(N){var L=N.getBoundingClientRect();N.width=L.width,N.height=L.height}function E(N){var L=document.createElement("canvas");return L.style.position="fixed",L.style.top="0px",L.style.left="0px",L.style.pointerEvents="none",L.style.zIndex=N,L}function _(N,L,ot,gt,k,$,rt,q,ht){N.save(),N.translate(L,ot),N.rotate($),N.scale(gt,k),N.arc(0,0,1,rt,q,ht),N.restore()}function w(N){var L=N.angle*(Math.PI/180),ot=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-L+(.5*ot-Math.random()*ot),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function U(N,L){L.x+=Math.cos(L.angle2D)*L.velocity+L.drift,L.y+=Math.sin(L.angle2D)*L.velocity+L.gravity,L.velocity*=L.decay,L.flat?(L.wobble=0,L.wobbleX=L.x+10*L.scalar,L.wobbleY=L.y+10*L.scalar,L.tiltSin=0,L.tiltCos=0,L.random=1):(L.wobble+=L.wobbleSpeed,L.wobbleX=L.x+10*L.scalar*Math.cos(L.wobble),L.wobbleY=L.y+10*L.scalar*Math.sin(L.wobble),L.tiltAngle+=.1,L.tiltSin=Math.sin(L.tiltAngle),L.tiltCos=Math.cos(L.tiltAngle),L.random=Math.random()+2);var ot=L.tick++/L.totalTicks,gt=L.x+L.random*L.tiltCos,k=L.y+L.random*L.tiltSin,$=L.wobbleX+L.random*L.tiltCos,rt=L.wobbleY+L.random*L.tiltSin;if(N.fillStyle="rgba("+L.color.r+", "+L.color.g+", "+L.color.b+", "+(1-ot)+")",N.beginPath(),o&&L.shape.type==="path"&&typeof L.shape.path=="string"&&Array.isArray(L.shape.matrix))N.fill(et(L.shape.path,L.shape.matrix,L.x,L.y,Math.abs($-gt)*.1,Math.abs(rt-k)*.1,Math.PI/10*L.wobble));else if(L.shape.type==="bitmap"){var q=Math.PI/10*L.wobble,ht=Math.abs($-gt)*.1,Lt=Math.abs(rt-k)*.1,ft=L.shape.bitmap.width*L.scalar,Dt=L.shape.bitmap.height*L.scalar,Q=new DOMMatrix([Math.cos(q)*ht,Math.sin(q)*ht,-Math.sin(q)*Lt,Math.cos(q)*Lt,L.x,L.y]);Q.multiplySelf(new DOMMatrix(L.shape.matrix));var tt=N.createPattern(h.transform(L.shape.bitmap),"no-repeat");tt.setTransform(Q),N.globalAlpha=1-ot,N.fillStyle=tt,N.fillRect(L.x-ft/2,L.y-Dt/2,ft,Dt),N.globalAlpha=1}else if(L.shape==="circle")N.ellipse?N.ellipse(L.x,L.y,Math.abs($-gt)*L.ovalScalar,Math.abs(rt-k)*L.ovalScalar,Math.PI/10*L.wobble,0,2*Math.PI):_(N,L.x,L.y,Math.abs($-gt)*L.ovalScalar,Math.abs(rt-k)*L.ovalScalar,Math.PI/10*L.wobble,0,2*Math.PI);else if(L.shape==="star")for(var b=Math.PI/2*3,xt=4*L.scalar,it=8*L.scalar,pt=L.x,at=L.y,It=5,ut=Math.PI/It;It--;)pt=L.x+Math.cos(b)*it,at=L.y+Math.sin(b)*it,N.lineTo(pt,at),b+=ut,pt=L.x+Math.cos(b)*xt,at=L.y+Math.sin(b)*xt,N.lineTo(pt,at),b+=ut;else N.moveTo(Math.floor(L.x),Math.floor(L.y)),N.lineTo(Math.floor(L.wobbleX),Math.floor(k)),N.lineTo(Math.floor($),Math.floor(rt)),N.lineTo(Math.floor(gt),Math.floor(L.wobbleY));return N.closePath(),N.fill(),L.tick<L.totalTicks}function z(N,L,ot,gt,k){var $=L.slice(),rt=N.getContext("2d"),q,ht,Lt=l(function(ft){function Dt(){q=ht=null,rt.clearRect(0,0,gt.width,gt.height),h.clear(),k(),ft()}function Q(){n&&!(gt.width===i.width&&gt.height===i.height)&&(gt.width=N.width=i.width,gt.height=N.height=i.height),!gt.width&&!gt.height&&(ot(N),gt.width=N.width,gt.height=N.height),rt.clearRect(0,0,gt.width,gt.height),$=$.filter(function(tt){return U(rt,tt)}),$.length?q=u.frame(Q):Dt()}q=u.frame(Q),ht=Dt});return{addFettis:function(ft){return $=$.concat(ft),Lt},canvas:N,promise:Lt,reset:function(){q&&u.cancel(q),ht&&ht()}}}function H(N,L){var ot=!N,gt=!!m(L||{},"resize"),k=!1,$=m(L,"disableForReducedMotion",Boolean),rt=r&&!!m(L||{},"useWorker"),q=rt?d():null,ht=ot?P:D,Lt=N&&q?!!N.__confetti_initialized:!1,ft=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Dt;function Q(b,xt,it){for(var pt=m(b,"particleCount",f),at=m(b,"angle",Number),It=m(b,"spread",Number),ut=m(b,"startVelocity",Number),A=m(b,"decay",Number),M=m(b,"gravity",Number),G=m(b,"drift",Number),J=m(b,"colors",x),st=m(b,"ticks",Number),j=m(b,"shapes"),Pt=m(b,"scalar"),_t=!!m(b,"flat"),Tt=C(b),Xt=pt,ct=[],wt=N.width*Tt.x,Nt=N.height*Tt.y;Xt--;)ct.push(w({x:wt,y:Nt,angle:at,spread:It,startVelocity:ut,color:J[Xt%J.length],shape:j[T(0,j.length)],ticks:st,decay:A,gravity:M,drift:G,scalar:Pt,flat:_t}));return Dt?Dt.addFettis(ct):(Dt=z(N,ct,ht,xt,it),Dt.promise)}function tt(b){var xt=$||m(b,"disableForReducedMotion",Boolean),it=m(b,"zIndex",Number);if(xt&&ft)return l(function(ut){ut()});ot&&Dt?N=Dt.canvas:ot&&!N&&(N=E(it),document.body.appendChild(N)),gt&&!Lt&&ht(N);var pt={width:N.width,height:N.height};q&&!Lt&&q.init(N),Lt=!0,q&&(N.__confetti_initialized=!0);function at(){if(q){var ut={getBoundingClientRect:function(){if(!ot)return N.getBoundingClientRect()}};ht(ut),q.postMessage({resize:{width:ut.width,height:ut.height}});return}pt.width=pt.height=null}function It(){Dt=null,gt&&(k=!1,t.removeEventListener("resize",at)),ot&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,Lt=!1)}return gt&&!k&&(k=!0,t.addEventListener("resize",at,!1)),q?q.fire(b,pt,It):Q(b,pt,It)}return tt.reset=function(){q&&q.reset(),Dt&&Dt.reset()},tt}var K;function X(){return K||(K=H(null,{useWorker:!0,resize:!0})),K}function et(N,L,ot,gt,k,$,rt){var q=new Path2D(N),ht=new Path2D;ht.addPath(q,new DOMMatrix(L));var Lt=new Path2D;return Lt.addPath(ht,new DOMMatrix([Math.cos(rt)*k,Math.sin(rt)*k,-Math.sin(rt)*$,Math.cos(rt)*$,ot,gt])),Lt}function Y(N){if(!o)throw new Error("path confetti are not supported in this browser");var L,ot;typeof N=="string"?L=N:(L=N.path,ot=N.matrix);var gt=new Path2D(L),k=document.createElement("canvas"),$=k.getContext("2d");if(!ot){for(var rt=1e3,q=rt,ht=rt,Lt=0,ft=0,Dt,Q,tt=0;tt<rt;tt+=2)for(var b=0;b<rt;b+=2)$.isPointInPath(gt,tt,b,"nonzero")&&(q=Math.min(q,tt),ht=Math.min(ht,b),Lt=Math.max(Lt,tt),ft=Math.max(ft,b));Dt=Lt-q,Q=ft-ht;var xt=10,it=Math.min(xt/Dt,xt/Q);ot=[it,0,0,it,-Math.round(Dt/2+q)*it,-Math.round(Q/2+ht)*it]}return{type:"path",path:L,matrix:ot}}function dt(N){var L,ot=1,gt="#000000",k='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?L=N:(L=N.text,ot="scalar"in N?N.scalar:ot,k="fontFamily"in N?N.fontFamily:k,gt="color"in N?N.color:gt);var $=10*ot,rt=""+$+"px "+k,q=new OffscreenCanvas($,$),ht=q.getContext("2d");ht.font=rt;var Lt=ht.measureText(L),ft=Math.ceil(Lt.actualBoundingBoxRight+Lt.actualBoundingBoxLeft),Dt=Math.ceil(Lt.actualBoundingBoxAscent+Lt.actualBoundingBoxDescent),Q=2,tt=Lt.actualBoundingBoxLeft+Q,b=Lt.actualBoundingBoxAscent+Q;ft+=Q+Q,Dt+=Q+Q,q=new OffscreenCanvas(ft,Dt),ht=q.getContext("2d"),ht.font=rt,ht.fillStyle=gt,ht.fillText(L,tt,b);var xt=1/ot;return{type:"bitmap",bitmap:q.transferToImageBitmap(),matrix:[xt,0,0,xt,-ft*xt/2,-Dt*xt/2]}}e.exports=function(){return X().apply(this,arguments)},e.exports.reset=function(){X().reset()},e.exports.create=H,e.exports.shapeFromPath=Y,e.exports.shapeFromText=dt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),zo,!1);const Rg=zo.exports;zo.exports.create;class Cg{constructor(t){this.gameApp=t,this.screenMainMenu=document.getElementById("screen-main-menu"),this.screenLevelSelect=document.getElementById("screen-level-select"),this.screenSkinCustomizer=document.getElementById("screen-skin-customizer"),this.screenPause=document.getElementById("screen-pause"),this.screenVictory=document.getElementById("screen-victory"),this.hud=document.getElementById("hud"),this.hudCoinCount=document.getElementById("hud-coin-count"),this.hudLevelNum=document.getElementById("hud-level-num"),this.hudSpeedVal=document.getElementById("hud-speed-val"),this.hudZoneTag=document.getElementById("hud-zone-tag"),this.hudProgressBar=document.getElementById("hud-progress-bar"),this.debugSphereOnly=!1,this._bindEvents(),this._populateLevelsGrid(),this._populateSkinsGrid()}_bindEvents(){const t=(i,r)=>{const o=document.getElementById(i);o?o.addEventListener("click",r):console.warn(`[UIManager] Optional UI element '${i}' not found in DOM.`)};t("btn-play",()=>{this.showScreen(null),this.hud&&this.hud.classList.remove("hidden"),this.gameApp.startLevel(this.gameApp.currentLevelId)}),t("btn-toggle-debug-sphere",()=>{this.debugSphereOnly=!this.debugSphereOnly,this.gameApp.playerBall.setDebugSphereOnly(this.debugSphereOnly);const i=document.getElementById("btn-toggle-debug-sphere");i&&(i.innerText=this.debugSphereOnly?"SPHERE ONLY MODE: ON":"TOGGLE DEBUG SPHERE ONLY")}),t("btn-calibrate-gyro",()=>{this.gameApp.input.enableGyro(),alert("Gyroscope Enabled & Calibrated to neutral position!")}),t("btn-level-select",()=>{this.screenLevelSelect&&this.screenLevelSelect.classList.remove("hidden")}),t("btn-close-levels",()=>{this.screenLevelSelect&&this.screenLevelSelect.classList.add("hidden")});const e=document.getElementById("screen-settings");["btn-open-settings","btn-pause-settings"].forEach(i=>{t(i,()=>{e&&e.classList.remove("hidden")})}),t("btn-close-settings",()=>{e&&e.classList.add("hidden")}),t("btn-toggle-audio",()=>{const i=this.gameApp.soundManager;i.enabled=!i.enabled;const r=document.getElementById("btn-toggle-audio");r&&(r.innerText=i.enabled?"SOUND: ON":"SOUND: OFF")}),t("btn-gyro-toggle",()=>{this.gameApp.input.enableGyro(),alert("Gyroscope Enabled & Calibrated to neutral device tilt!")}),t("btn-toggle-telemetry",()=>{const i=document.getElementById("debug-overlay");if(i){const r=i.style.display==="none";i.style.display=r?"block":"none";const o=document.getElementById("btn-toggle-telemetry");o&&(o.innerText=r?"TELEMETRY: VISIBLE":"TELEMETRY: HIDDEN")}}),t("btn-open-skins",()=>{this.screenSkinCustomizer&&this.screenSkinCustomizer.classList.remove("hidden")}),t("btn-close-skins",()=>{this.screenSkinCustomizer&&this.screenSkinCustomizer.classList.add("hidden")}),t("btn-pause",()=>{this.gameApp.pauseGame(),this.screenPause&&this.screenPause.classList.remove("hidden")}),t("btn-resume",()=>{this.screenPause&&this.screenPause.classList.add("hidden"),this.gameApp.resumeGame()}),t("btn-restart",()=>{this.screenPause&&this.screenPause.classList.add("hidden"),this.gameApp.restartLevel()}),t("btn-main-menu",()=>{this.screenPause&&this.screenPause.classList.add("hidden"),this.hud&&this.hud.classList.add("hidden"),this.showScreen(this.screenMainMenu)}),t("btn-next-level",()=>{this.screenVictory&&this.screenVictory.classList.add("hidden"),this.gameApp.nextLevel()}),t("btn-replay",()=>{this.screenVictory&&this.screenVictory.classList.add("hidden"),this.gameApp.restartLevel()}),t("btn-victory-menu",()=>{this.screenVictory&&this.screenVictory.classList.add("hidden"),this.hud&&this.hud.classList.add("hidden"),this.showScreen(this.screenMainMenu)})}_populateLevelsGrid(){const t=document.getElementById("level-grid");if(!t)return;let e=document.getElementById("world-tabs-header");e||(e=document.createElement("div"),e.id="world-tabs-header",e.style.cssText="display:flex; gap:8px; overflow-x:auto; padding:10px 0; margin-bottom:15px; width:100%; border-bottom:1px solid rgba(255,255,255,0.15);",t.parentNode.insertBefore(e,t));const n=[{name:"WORLD 1",min:1,max:10,zone:"WORLD_1_SKY_HAVEN"},{name:"WORLD 2",min:11,max:20,zone:"WORLD_2_RURAL_VALLEY"},{name:"WORLD 3",min:21,max:30,zone:"WORLD_3_CYBERPUNK"},{name:"WORLD 4",min:31,max:40,zone:"WORLD_4_VOLCANIC"},{name:"WORLD 5",min:41,max:50,zone:"WORLD_5_MISTY_PEAKS"},{name:"WORLD 6",min:51,max:60,zone:"WORLD_6_GOLDEN_DESERT"},{name:"WORLD 7",min:61,max:250,zone:"WORLD_7_COSMIC_VOID"}],i=(r,o)=>{t.innerHTML="",Gn.filter(c=>c.id>=r&&c.id<=o).forEach(c=>{const l=document.createElement("div");l.className=`level-card ${c.id===this.gameApp.currentLevelId?"active-level":""}`,l.innerHTML=`
          <span class="level-title">${c.id===0?"TEST BENCH":"LEVEL "+c.id}</span>
          <span class="level-subtitle">${c.title}</span>
          <span class="level-stars">★★★</span>
        `,l.addEventListener("click",()=>{this.screenLevelSelect&&this.screenLevelSelect.classList.add("hidden"),this.screenMainMenu&&this.screenMainMenu.classList.add("hidden"),this.screenPause&&this.screenPause.classList.add("hidden"),this.hud&&this.hud.classList.remove("hidden"),this.gameApp.startLevel(c.id)}),t.appendChild(l)})};e.innerHTML="",n.forEach((r,o)=>{const a=document.createElement("button");a.className=`btn-secondary ${o===0?"active-world-tab":""}`,a.style.cssText="padding:6px 14px; font-size:0.75rem; white-space:nowrap; border-radius:20px; font-weight:700; cursor:pointer;",a.innerText=r.name,a.addEventListener("click",()=>{e.querySelectorAll("button").forEach(c=>c.style.opacity="0.6"),a.style.opacity="1.0",this.gameApp&&this.gameApp.environment&&this.gameApp.environment.setEnvironment(r.zone),i(r.min,r.max)}),e.appendChild(a)}),i(1,10)}_populateSkinsGrid(){const t=document.getElementById("skin-grid");t&&(t.innerHTML="",Object.keys(Vi).forEach(e=>{const n=Vi[e],i=document.createElement("div");i.className=`skin-card ${e==="CYBER_NEON"?"selected-skin":""}`,i.innerHTML=`
        <div class="skin-sphere" style="background: ${n.glow}; box-shadow: 0 0 12px ${n.glow};"></div>
        <span class="skin-title" style="font-weight:700; font-size:0.85rem;">${n.name}</span>
      `,i.addEventListener("click",()=>{document.querySelectorAll(".skin-card").forEach(o=>o.classList.remove("selected-skin")),i.classList.add("selected-skin"),this.gameApp.playerBall.setSkin(e);const r=document.getElementById("skin-name-display");r&&(r.innerText=n.name),this.screenSkinCustomizer&&this.screenSkinCustomizer.classList.add("hidden")}),t.appendChild(i)}))}showScreen(t){[this.screenMainMenu,this.screenLevelSelect,this.screenSkinCustomizer,this.screenPause,this.screenVictory].forEach(e=>{e&&e.classList.add("hidden")}),t&&t.classList.remove("hidden")}updateHUD(t,e,n,i,r){this.hudCoinCount&&(this.hudCoinCount.innerText=t),this.hudLevelNum&&(this.hudLevelNum.innerText=e),this.hudSpeedVal&&(this.hudSpeedVal.innerText=Math.round(n*1.8)),this.hudZoneTag&&(this.hudZoneTag.innerText=r),this.hudProgressBar&&(this.hudProgressBar.style.width=`${Math.min(100,Math.max(0,i*100))}%`);const o=document.querySelector(".touch-hint");o&&(e>1?o.style.display="none":this._touchHintTimer||(this._touchHintTimer=setTimeout(()=>{o&&(o.style.display="none")},3e3)))}triggerVictory(t,e,n){this.hud&&this.hud.classList.add("hidden");const i=document.getElementById("victory-level-name");i&&(i.innerText=t.title);const r=document.getElementById("victory-time");r&&(r.innerText=`${Math.floor(e)}s`);const o=document.getElementById("victory-coins");o&&(o.innerText=`${n}/${t.totalCoins}`);const a=document.getElementById("star-1"),c=document.getElementById("star-2"),l=document.getElementById("star-3");a&&a.classList.add("filled"),c&&n>=Math.floor(t.totalCoins*.5)&&c.classList.add("filled"),l&&n>=Math.floor(t.totalCoins*.8)&&l.classList.add("filled"),this.screenVictory&&this.screenVictory.classList.remove("hidden");try{Rg({particleCount:80,spread:70,origin:{y:.6}})}catch(h){console.warn("Confetti error",h)}}}const rc=6;class oc{constructor(t,e){this.scene=t,this.initialPos=e.clone(),this.collected=!1,this.meshGroup=new oe;const n=new Vt({color:16766720,metalness:.95,roughness:.15,emissive:16755200,emissiveIntensity:.35}),i=new Vt({color:12092939,metalness:.9,roughness:.25,emissive:9135368,emissiveIntensity:.2}),r=new St(new Te(.7,.7,.14,24),n);r.rotation.x=Math.PI/2,this.meshGroup.add(r);const o=new St(new ji(.68,.05,12,24),n);this.meshGroup.add(o);const a=new St(new Te(.32,.32,.18,5),i);a.rotation.x=Math.PI/2,this.meshGroup.add(a),this.meshGroup.position.copy(e),this.meshGroup.position.y+=1.2,this.scene.add(this.meshGroup)}update(t,e,n){if(this.collected)return!1;this.meshGroup.rotation.y+=2.5*t;const i=this.meshGroup.position.distanceTo(n);if(i<rc){const r=n.clone().sub(this.meshGroup.position).normalize(),o=(1-i/rc)*28;this.meshGroup.position.addScaledVector(r,o*t)}else this.meshGroup.position.y=this.initialPos.y+1.2+Math.sin(e*3)*.25;return i<1.8?(this.collected=!0,this.scene.remove(this.meshGroup),!0):!1}}class Pg{constructor(t,e,n=1){this.scene=t,this.pos=e.clone(),this.index=n,this.activated=!1,this.group=new oe,this.group.position.copy(e);const i=new Te(.4,.4,6,16);this.inactiveMat=new Vt({color:5592422,metalness:.8}),this.activeMat=new Vt({color:61695,emissive:41215,emissiveIntensity:.9});const r=new St(i,this.inactiveMat);r.position.set(-4,3,0);const o=new St(i,this.inactiveMat);o.position.set(4,3,0);const a=new fe(8.8,.8,.8);this.topMesh=new St(a,this.inactiveMat),this.topMesh.position.set(0,6,0),this.group.add(r),this.group.add(o),this.group.add(this.topMesh),this.scene.add(this.group)}checkActivation(t){return this.activated?!1:Math.abs(t.z-this.pos.z)<2&&Math.abs(t.x-this.pos.x)<5?(this.activated=!0,this.topMesh.material=this.activeMat,!0):!1}}class Lg{constructor(t,e){this.scene=t,this.pos=e.clone(),this.triggered=!1,this.group=new oe,this.group.position.copy(e);const n=new ji(5,.6,16,32),i=new Vt({color:16758528,emissive:16737792,emissiveIntensity:.8,metalness:.9}),r=new St(n,i);r.position.y=5;const o=new Oo(2.5,0),a=new Re({color:16777215,transparent:!0,opacity:.85});this.starMesh=new St(o,a),this.starMesh.position.y=5,this.group.add(r),this.group.add(this.starMesh),this.scene.add(this.group)}update(t,e){return this.starMesh&&(this.starMesh.rotation.y+=2*t),this.triggered?!1:this.pos.distanceTo(e)<3.2?(this.triggered=!0,!0):!1}}class Dg{constructor(){this.container=document.getElementById("game-container");let t=parseInt(localStorage.getItem("sphere_velocity_level"))||1;(t>10||isNaN(t))&&(t=1,localStorage.setItem("sphere_velocity_level","1")),this.state="MENU",this.currentLevelId=t,this.levelData=Gn.find(o=>o.id===t)||Gn[0],this.coinsCollected=0,this.levelTime=0,this.lastCheckpointPos=new R(0,4,0),this.scene=new Ih;const e=this.container.clientWidth||430,n=this.container.clientHeight||932;this.camera=new Ne(60,e/n,.5,2e3),this.renderer=new rg({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cc,this.renderer.toneMapping=hc,this.renderer.toneMappingExposure=.85,this.container.appendChild(this.renderer.domElement),this.soundManager=Ag,this.environment=new Sg(this.scene,this.renderer),this.particleSystem=new bg(this.scene),this.physics=new ug(this.camera),this.playerBall=new dg(this.scene,this.physics),this.cameraController=new fg(this.camera),this.cameraController.setEnvironment(this.environment),this.trackBuilder=new vg(this.scene),this.obstacleManager=new xg(this.scene),this.clock=new Su;const i=document.getElementById("touch-controls"),r=document.getElementById("joystick-knob");this.input=new pg(i,r),this.ui=new Cg(this),this.collectibles=[],this.checkpoints=[],this.portals=[],this.finishGate=null,window.addEventListener("resize",()=>this._onWindowResize()),console.log(`[BOOT]
Renderer: ${this.renderer?"OK":"FAIL"}
Scene: ${this.scene?"OK":"FAIL"}
Camera: ${this.camera?"OK":"FAIL"}
UI: ${this.ui?"OK":"FAIL"}
Input: ${this.input?"OK":"FAIL"}
Environment: ${this.environment?"OK":"FAIL"}
Track: ${this.trackBuilder?"OK":"FAIL"}
Ball: ${this.playerBall?"OK":"FAIL"}
Physics: ${this.physics?"OK":"FAIL"}
Level: ${this.levelData?"OK":"FAIL"}
Animation Loop: OK`),this._animate()}startLevel(t=1){this.currentLevelId=t,this.levelData=Gn.find(i=>i.id===t)||Gn[0],this.coinsCollected=0,this.levelTime=0,this._buildLevelTrack(),this.input.reset(),this.lastCheckpointPos.set(0,1.6,5),this.physics.setPosition(this.lastCheckpointPos),this.cameraController.reset(this.physics.position);const e=this._getWorldKeyForLevel(this.currentLevelId),n=Hi[e]||Hi.WORLD_1_SKY_HAVEN;this.environment.setEnvironment(e),this.trackBuilder.setWorldTheme(n),this.state="PLAYING",this.clock.start()}_getWorldKeyForLevel(t){return t<=10?"WORLD_1_SKY_HAVEN":t<=20?"WORLD_2_RURAL_VALLEY":t<=30?"WORLD_3_CYBERPUNK":t<=40?"WORLD_4_VOLCANIC":t<=50?"WORLD_5_MISTY_PEAKS":t<=60?"WORLD_6_GOLDEN_DESERT":"WORLD_7_COSMIC_VOID"}_buildLevelTrack(){this.trackBuilder.clear(),this.obstacleManager.clear(),this.collectibles=[],this.checkpoints=[],this.portals=[],this.finishGate=null;let t={pos:new R(0,.6,0),heading:0};this._f4Registered||(this._f4Registered=!0,window.addEventListener("keydown",n=>{n.code==="F4"&&this.trackBuilder.setDebugVisible(!this.trackBuilder.debugGroup.visible)}));for(const n of this.levelData.segments)if(n.type==="STRAIGHT"){const i=t.pos.clone(),r=t.heading;if(t=this.trackBuilder.createStraight(t.pos,t.heading,n.length,n.width||14,n.skin||null),n.coins){const o=new R(Math.sin(r),0,Math.cos(r));for(let a=0;a<n.coins;a++){const c=(a+1)/(n.coins+1),l=i.clone().addScaledVector(o,n.length*c);l.y+=1.5,l.x+=(Math.random()-.5)*3,this.collectibles.push(new oc(this.scene,l))}}if(n.pusherObstacle){const o=new R(Math.sin(r),0,Math.cos(r));this.obstacleManager.createPusherBlock(i.clone().addScaledVector(o,n.length/2))}if(n.crusherObstacle){const o=new R(Math.sin(r),0,Math.cos(r));this.obstacleManager.createCrusherStomper(i.clone().addScaledVector(o,n.length*.6))}if(n.pendulumObstacle){const o=new R(Math.sin(r),0,Math.cos(r));this.obstacleManager.createPendulum(i.clone().addScaledVector(o,n.length*.4))}}else if(n.type==="SLOPE_RAMP"){const i=t.pos.clone(),r=t.heading;if(t=this.trackBuilder.createSlopeRamp(t.pos,t.heading,n.length,n.riseHeight||2,n.width||14,n.skin||null),n.nitroBoost){const o=new R(Math.sin(r),0,Math.cos(r));this.obstacleManager.createBoostPad(i.clone().addScaledVector(o,n.length/2))}}else if(n.type==="GENTLE_CURVE")t=this.trackBuilder.createGentleCurve(t.pos,t.heading,n.angleDeg||35,n.turnDir||1,n.width||14,n.skin||null);else if(n.type==="BANKED_CURVE")t=this.trackBuilder.createBankedCurve(t.pos,t.heading,n.angleDeg||45,n.turnDir||1,n.bankDeg||15,n.width||14);else if(n.type==="VERTICAL_LOOP")t=this.trackBuilder.createVerticalLoop(t.pos,t.heading,n.radius||18,n.width||9);else if(n.type==="SPLIT_MERGE"){const i=t.pos.clone(),r=t.heading,o=n.splitLen||n.splitLength||50;if(t=this.trackBuilder.createSplitMerge(t.pos,t.heading,o,n.width||16),n.sweeperObstacle){const a=new R(Math.sin(r),0,Math.cos(r)),c=new R(Math.cos(r),0,-Math.sin(r)),l=i.clone().addScaledVector(a,o/2).addScaledVector(c,-8);this.obstacleManager.createSweeperBar(l)}if(n.coins){const a=new R(Math.sin(r),0,Math.cos(r)),c=new R(Math.cos(r),0,-Math.sin(r));for(let l=0;l<n.coins;l++){const h=(l+1)/(n.coins+1),u=i.clone().addScaledVector(a,o*h).addScaledVector(c,6);u.y+=1.5,this.collectibles.push(new oc(this.scene,u))}}}else if(n.type==="CHECKPOINT")this.checkpoints.push(new Pg(this.scene,t.pos,n.index));else if(n.type==="PORTAL_RING"){const i=t.pos.clone(),r=t.heading;t=this.trackBuilder.createStraight(t.pos,t.heading,25,n.width||16);const o=i.clone().addScaledVector(new R(Math.sin(r),0,Math.cos(r)),12.5),a=this.trackBuilder.createPortalRing(o,r);this.portals.push({mesh:a,pos:o,targetZone:n.targetZone})}else n.type==="FINISH_GATE"&&(this.finishGate=new Lg(this.scene,t.pos));this.trackBuilder.trackGroup.updateMatrixWorld(!0),this.scene.updateMatrixWorld(!0);const e=[...this.trackBuilder.getColliders(),...this.obstacleManager.getColliders()];this.physics.setColliders(e,this.currentLevelId),this.cameraController.setTrackColliders(e),console.log("LEVEL "+this.currentLevelId+" LOADED WITH "+e.length+" SOLID COLLIDERS.")}pauseGame(){this.state="PAUSED"}resumeGame(){this.state="PLAYING"}restartLevel(){this.startLevel(this.currentLevelId)}nextLevel(){const t=this.currentLevelId+1>Gn.length?1:this.currentLevelId+1;this.startLevel(t)}_animate(){const t=performance.now();requestAnimationFrame(()=>this._animate());const e=Math.min(this.clock.getDelta(),.05),n=this.clock.getElapsedTime();if(this.state==="PLAYING"){this.levelTime+=e,this.input.update();const i=this.input.steerInput,r=this.input.forwardInput,o=this.input.consumeJump(),a=this.physics.update(e,i,r,o,this.input.isTouching);this.cameraController.setTrackCenterX(0),a.hasRespawned?this.cameraController.reset(this.physics.position):this.cameraController.update(e,this.physics.position,this.physics.velocity,a.isGrounded),this.soundManager.updateRoll(a.speed,a.isGrounded),o&&this.soundManager.playJump(),this.playerBall.update(),this.obstacleManager.update(e,n),this.environment.update(e,this.camera.position),this.particleSystem.update(e);for(const d of this.collectibles)d.update(e,n,this.physics.position)&&(this.coinsCollected++,this.soundManager.playCoin(),this.particleSystem.emitCoinBurst(d.initialPos));for(const d of this.checkpoints)d.checkActivation(this.physics.position)&&(this.lastCheckpointPos.copy(d.pos),this.physics.setCheckpoint(d.pos),this.soundManager.playCheckpoint(),this.particleSystem.emitCheckpointBeacon(d.pos));for(const d of this.portals)d.pos.distanceTo(this.physics.position)<4&&d.targetZone&&(this.environment.transitionToZone(d.targetZone,this.trackBuilder),this.soundManager.playWarpPortal(),this.particleSystem.emitPortalWarp(d.pos));if(this.finishGate&&this.finishGate.update(e,this.physics.position)){this.state="VICTORY";const d=this.currentLevelId>=Gn.length?1:this.currentLevelId+1;localStorage.setItem("sphere_velocity_level",d.toString()),this.soundManager.playVictory(),this.ui.triggerVictory(this.levelData,this.levelTime,this.coinsCollected)}const c=Math.min(1,Math.max(0,this.physics.position.z/350));this.ui.updateHUD(this.coinsCollected,this.currentLevelId,a.speed,c,this.environment.currentZone.name);const l=performance.now(),h=Math.max(.1,l-t),u=document.getElementById("debug-overlay");if(u&&u.style.display!=="none"){const d=this.physics,p=v=>document.getElementById(v),g=(v,m)=>{const f=p(v);f&&(f.innerText=m)};g("dbg-fps",Math.round(1e3/Math.max(1,h))),g("dbg-ftime",`${h.toFixed(1)}ms`),g("dbg-ptime",`${d.telemetry.physicsTimeMs.toFixed(2)}ms`),g("dbg-rtime",`${d.telemetry.raycastTimeMs.toFixed(2)}ms`),g("dbg-steer",i.toFixed(2)),g("dbg-fwd",r.toFixed(2)),g("dbg-vel",`[${d.velocity.x.toFixed(1)},${d.velocity.y.toFixed(1)},${d.velocity.z.toFixed(1)}]`),g("dbg-pos",`[${d.position.x.toFixed(1)},${d.position.y.toFixed(1)},${d.position.z.toFixed(1)}]`),g("dbg-gnd",a.isGrounded?"YES":"AIR"),g("dbg-norm",`[${d.groundNormal.x.toFixed(2)},${d.groundNormal.y.toFixed(2)},${d.groundNormal.z.toFixed(2)}]`)}}this.renderer.render(this.scene,this.camera)}_onWindowResize(){const t=this.container.clientWidth||430,e=this.container.clientHeight||932;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}}window.addEventListener("DOMContentLoaded",()=>{const s=new Dg;window.gameApp=s});
