(()=>{"use strict";var t={};!function t(e,n,a,r){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL);function o(){}function l(t){var a=n.exports.Promise,r=void 0!==a?a:e.Promise;return"function"==typeof r?new r(t):(t(o,o),null)}var c,s,u,d,f,h,g,m,b,v=(u=Math.floor(1e3/60),d={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(t){var e=Math.random();return d[e]=requestAnimationFrame((function n(a){f===a||f+u-1<a?(f=a,delete d[e],t()):d[e]=requestAnimationFrame(n)})),e},s=function(t){d[t]&&cancelAnimationFrame(d[t])}):(c=function(t){return setTimeout(t,u)},s=function(t){return clearTimeout(t)}),{frame:c,cancel:s}),p=(m={},function(){if(h)return h;if(!a&&i){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{h=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(n,a,r){if(g)return e(n,null),g;var i=Math.random().toString(36).slice(2);return g=l((function(a){function o(e){e.data.callback===i&&(delete m[i],t.removeEventListener("message",o),g=null,r(),a())}t.addEventListener("message",o),e(n,i),m[i]=o.bind(null,{data:{callback:i}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),m)m[e](),delete m[e]}}(h)}return h}),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:y[e],n)}function w(t){return t<0?0:Math.floor(t)}function x(t){return parseInt(t,16)}function C(t){return t.map(I)}function I(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:x(e.substring(0,2)),g:x(e.substring(2,4)),b:x(e.substring(4,6))}}function k(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function S(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function T(t,n){var o,c=!t,s=!!M(n||{},"resize"),u=M(n,"disableForReducedMotion",Boolean),d=i&&M(n||{},"useWorker")?p():null,f=c?k:S,h=!(!t||!d||!t.__confetti_initialized),g="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function m(e,n,i){for(var c,s,u,d,h=M(e,"particleCount",w),g=M(e,"angle",Number),m=M(e,"spread",Number),b=M(e,"startVelocity",Number),p=M(e,"decay",Number),y=M(e,"gravity",Number),x=M(e,"drift",Number),I=M(e,"colors",C),k=M(e,"ticks",Number),S=M(e,"shapes"),T=M(e,"scalar"),E=function(t){var e=M(t,"origin",Object);return e.x=M(e,"x",Number),e.y=M(e,"y",Number),e}(e),F=h,N=[],R=t.width*E.x,z=t.height*E.y;F--;)N.push((void 0,void 0,s=(c={x:R,y:z,angle:g,spread:m,startVelocity:b,color:I[F%I.length],shape:S[(0,d=S.length,Math.floor(Math.random()*(d-0))+0)],ticks:k,decay:p,gravity:y,drift:x,scalar:T}).angle*(Math.PI/180),u=c.spread*(Math.PI/180),{x:c.x,y:c.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*c.startVelocity+Math.random()*c.startVelocity,angle2D:-s+(.5*u-Math.random()*u),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:c.color,shape:c.shape,tick:0,totalTicks:c.ticks,decay:c.decay,drift:c.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*c.gravity,ovalScalar:.6,scalar:c.scalar}));return o?o.addFettis(N):(o=function(t,e,n,i,o){var c,s,u=e.slice(),d=t.getContext("2d"),f=l((function(e){function l(){c=s=null,d.clearRect(0,0,i.width,i.height),o(),e()}c=v.frame((function e(){!a||i.width===r.width&&i.height===r.height||(i.width=t.width=r.width,i.height=t.height=r.height),i.width||i.height||(n(t),i.width=t.width,i.height=t.height),d.clearRect(0,0,i.width,i.height),u=u.filter((function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,a=e.x+e.random*e.tiltCos,r=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,o=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(i-a)*e.ovalScalar,Math.abs(o-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,a,r,i,o,l,c){t.save(),t.translate(e,n),t.rotate(i),t.scale(a,r),t.arc(0,0,1,0,l,void 0),t.restore()}(t,e.x,e.y,Math.abs(i-a)*e.ovalScalar,Math.abs(o-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(r)),t.lineTo(Math.floor(i),Math.floor(o)),t.lineTo(Math.floor(a),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}(d,t)})),u.length?c=v.frame(e):l()})),s=l}));return{addFettis:function(t){return u=u.concat(t),f},canvas:t,promise:f,reset:function(){c&&v.cancel(c),s&&s()}}}(t,N,f,n,i)).promise}function b(n){var a=u||M(n,"disableForReducedMotion",Boolean),r=M(n,"zIndex",Number);if(a&&g)return l((function(t){t()}));c&&o?t=o.canvas:c&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(r),document.body.appendChild(t)),s&&!h&&f(t);var i={width:t.width,height:t.height};function b(){if(d){var e={getBoundingClientRect:function(){if(!c)return t.getBoundingClientRect()}};return f(e),void d.postMessage({resize:{width:e.width,height:e.height}})}i.width=i.height=null}function v(){o=null,s&&e.removeEventListener("resize",b),c&&t&&(document.body.removeChild(t),t=null,h=!1)}return d&&!h&&d.init(t),h=!0,d&&(t.__confetti_initialized=!0),s&&e.addEventListener("resize",b,!1),d?d.fire(n,i,v):m(n,i,v)}return b.reset=function(){d&&d.reset(),o&&o.reset()},b}function E(){return b||(b=T(null,{useWorker:!0,resize:!0})),b}n.exports=function(){return E().apply(this,arguments)},n.exports.reset=function(){E().reset()},n.exports.create=T}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),t,!1);const e=t.exports;function n(t,e){return Math.random()*(e-t)+t}t.exports.create,setInterval((()=>{e({particleCount:n(50,100),angle:n(55,125),spread:n(50,70),origin:{y:.6}})}),250)})();