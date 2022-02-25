!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(I){"use strict";var C={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},w=function(){for(var n={},e=function(e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},t=0;t<arguments.length;t++)e(arguments[t]);return n},c=function(t){var n;try{n=decodeURIComponent(t)}catch(e){n=t}return n},s=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n,o=String(e),r=o.length,a=-1,i="",c=o.charCodeAt(0);++a<r;){if(0===(t=o.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===c?i+="\\"+t.toString(16)+" ":i+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?o.charAt(a):"\\"+o.charAt(a)}try{n=decodeURIComponent("#"+i)}catch(e){n="#"+i}return n},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},A=function(e){return e?(t=e,parseInt(I.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof I.CustomEvent){var r=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(r)}};return function(o,e){var y,r,S,E,t,b,O={};O.cancelScroll=function(e){cancelAnimationFrame(b),b=null,e||H("scrollCancel",y)},O.animateScroll=function(i,c,e){var s=w(y||C,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=I.pageYOffset;s.header&&!S&&(S=document.querySelector(s.header)),E||(E=A(S));var d,r,a,n,o,m=u?i:function(e,t,n,o){var r=0;if(e.offsetParent)for(;r+=e.offsetTop,e=e.offsetParent;);return r=Math.max(r-t-n,0),o&&(r=Math.min(r,L()-I.innerHeight)),r}(t,E,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),f=m-l,h=L(),p=0,g=function(e,t){var n,o,r,a=I.pageYOffset;if(e==t||a==t||(l<t&&I.innerHeight+a)>=h)return O.cancelScroll(!0),o=t,r=u,0===(n=i)&&document.body.focus(),r||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),I.scrollTo(0,o)),H("scrollStop",s,i,c),!(b=d=null)},v=function(e){var t,n,o;d||(d=e),r=(p+=e-d)/parseInt(s.speed,10),a=l+f*(n=r=1<r?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),I.scrollTo(0,Math.floor(a)),g(a,m)||(b=I.requestAnimationFrame(v),d=e)};0===I.pageYOffset&&I.scrollTo(0,0),n=i,o=s,u||history.pushState&&o.updateURL&&history.pushState({smoothScroll:JSON.stringify(o),anchor:n.id},document.title,n===document.documentElement?"#top":"#"+n.id),H("scrollStart",s,i,c),O.cancelScroll(!0),I.requestAnimationFrame(v)}};var n=function(e){if(!("matchMedia"in I&&I.matchMedia("(prefers-reduced-motion)").matches)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(r=e.target.closest(o))&&"a"===r.tagName.toLowerCase()&&!e.target.closest(y.ignore)&&r.hostname===I.location.hostname&&r.pathname===I.location.pathname&&/#/.test(r.href)){var t=s(c(r.hash)),n=y.topOnEmptyHash&&"#"===t?document.documentElement:document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),O.animateScroll(n,r))}},a=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(y)&&history.state.anchor){var t=document.querySelector(s(c(history.state.anchor)));t&&O.animateScroll(t,null,{updateURL:!1})}},i=function(e){t||(t=setTimeout(function(){t=null,E=A(S)},66))};return O.destroy=function(){y&&(document.removeEventListener("click",n,!1),I.removeEventListener("resize",i,!1),I.removeEventListener("popstate",a,!1),O.cancelScroll(),b=t=E=S=r=y=null)},O.init=function(e){if(!("querySelector"in document&&"addEventListener"in I&&"requestAnimationFrame"in I&&"closest"in I.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";O.destroy(),y=w(C,e||{}),S=y.header?document.querySelector(y.header):null,E=A(S),document.addEventListener("click",n,!1),S&&I.addEventListener("resize",i,!1),y.updateURL&&y.popstate&&I.addEventListener("popstate",a,!1)},O.init(e),O}});