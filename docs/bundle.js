!function(e){function n(n){for(var t,o,i=n[0],_=n[1],a=0,s=[];a<i.length;a++)o=i[a],r[o]&&s.push(r[o][0]),r[o]=0;for(t in _)Object.prototype.hasOwnProperty.call(_,t)&&(e[t]=_[t]);for(c&&c(n);s.length;)s.shift()()}var t={},r={0:0};var o={};var i={3:function(){return{"./domris":{__wbindgen_string_new:function(e,n){return t[1].exports.__wbindgen_string_new(e,n)},__wbindgen_object_drop_ref:function(e){return t[1].exports.__wbindgen_object_drop_ref(e)},__widl_f_set_fill_style_CanvasRenderingContext2D:function(e,n){return t[1].exports.__widl_f_set_fill_style_CanvasRenderingContext2D(e,n)},__widl_f_fill_rect_CanvasRenderingContext2D:function(e,n,r,o,i){return t[1].exports.__widl_f_fill_rect_CanvasRenderingContext2D(e,n,r,o,i)},__widl_f_fill_text_with_max_width_CanvasRenderingContext2D:function(e,n,r,o,i,_,a){return t[1].exports.__widl_f_fill_text_with_max_width_CanvasRenderingContext2D(e,n,r,o,i,_,a)},__widl_f_set_font_CanvasRenderingContext2D:function(e,n,r){return t[1].exports.__widl_f_set_font_CanvasRenderingContext2D(e,n,r)},__wbg_new_baf10398b0d0c64d:function(e,n){return t[1].exports.__wbg_new_baf10398b0d0c64d(e,n)},__wbg_call_173f04c850a68d5f:function(e,n){return t[1].exports.__wbg_call_173f04c850a68d5f(e,n)},__wbindgen_jsval_eq:function(e,n){return t[1].exports.__wbindgen_jsval_eq(e,n)},__wbg_self_58232ab37cbe6608:function(e){return t[1].exports.__wbg_self_58232ab37cbe6608(e)},__wbg_require_4a70cbfd3adc73a8:function(e,n){return t[1].exports.__wbg_require_4a70cbfd3adc73a8(e,n)},__wbg_crypto_329b714d7e7d321d:function(e){return t[1].exports.__wbg_crypto_329b714d7e7d321d(e)},__wbindgen_is_undefined:function(e){return t[1].exports.__wbindgen_is_undefined(e)},__wbg_getRandomValues_2f960218fce3a102:function(e){return t[1].exports.__wbg_getRandomValues_2f960218fce3a102(e)},__wbg_getRandomValues_5581e85fc6616df6:function(e,n,r){return t[1].exports.__wbg_getRandomValues_5581e85fc6616df6(e,n,r)},__wbg_randomFillSync_355c3fcfa754fa4e:function(e,n,r){return t[1].exports.__wbg_randomFillSync_355c3fcfa754fa4e(e,n,r)},__wbindgen_number_get:function(e,n){return t[1].exports.__wbindgen_number_get(e,n)},__wbindgen_string_get:function(e,n){return t[1].exports.__wbindgen_string_get(e,n)},__wbindgen_boolean_get:function(e){return t[1].exports.__wbindgen_boolean_get(e)},__wbindgen_is_null:function(e){return t[1].exports.__wbindgen_is_null(e)},__wbindgen_is_symbol:function(e){return t[1].exports.__wbindgen_is_symbol(e)},__wbindgen_throw:function(e,n){return t[1].exports.__wbindgen_throw(e,n)}}}}};function _(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,_),r.l=!0,r.exports}_.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=a);var s,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,_.nc&&c.setAttribute("nonce",_.nc),c.src=function(e){return _.p+""+e+".bundle.js"}(e),s=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,_=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");_.type=o,_.request=i,t[1](_)}r[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,u.appendChild(c)}return({1:[3]}[e]||[]).forEach(function(e){var t=o[e];if(t)n.push(t);else{var r,a=i[e](),s=fetch(_.p+""+{3:"a746fb37afc8b2008d1c"}[e]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(s),a]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(s,a);else{r=s.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,a)})}n.push(o[e]=r.then(function(n){return _.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},_.m=e,_.c=t,_.d=function(e,n,t){_.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,n){if(1&n&&(e=_(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(_.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)_.d(t,r,function(n){return e[n]}.bind(null,r));return t},_.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(n,"a",n),n},_.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},_.p="",_.oe=function(e){throw console.error(e),e},_.w={};var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var c=s;_(_.s=0)}([function(e,n,t){t.e(1).then(t.bind(null,1)).then(e=>{id=(e=>document.getElementById(e));let n=1;const t=document.querySelectorAll("#levelBtnGroup>button"),r=id("canvas"),o=r.getContext("2d");let i=new e.Domris;const _=id("gameToggleBtn"),a=id("point");document.addEventListener("keydown",n=>{switch(n.key){case"ArrowRight":case"l":n.preventDefault(),i.enqueue_control(e.Control.MoveRight);break;case"ArrowLeft":case"h":n.preventDefault(),i.enqueue_control(e.Control.MoveLeft);break;case"ArrowDown":case"j":n.preventDefault(),i.enqueue_control(e.Control.MoveDown);break;case"ArrowUp":case"k":n.preventDefault(),i.enqueue_control(e.Control.MoveBottom);break;case" ":n.preventDefault();const t=n.shiftKey?e.Control.RotateLeft:e.Control.RotateRight;i.enqueue_control(t)}}),t.forEach(e=>{e.addEventListener("click",r=>{i.playing()||t.forEach((t,r)=>{t==e?(n=r+1,e.classList.add("active")):t.classList.remove("active")})})});var s=now=Date.now();function u(){now=Date.now(),result=i.update(now-s),e.draw(i,o,result),result&&(a.innerHTML=i.point()),s=now;let n=requestAnimationFrame(u,r);i.playing()||(cancelAnimationFrame(n),_.innerText="Play!",_.classList.remove("disabled"),t.forEach(e=>{e.classList.remove("disabled")}))}_.addEventListener("click",r=>{i.playing()||(_.innerText="Playing",_.classList.add("disabled"),t.forEach(e=>{e.classList.contains("active")||e.classList.add("disabled")}),i.start(n),e.draw(i,o,!0),s=Date.now(),u())})}).catch(console.error)}]);