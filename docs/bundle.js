!function(e){function n(n){for(var t,o,_=n[0],i=n[1],a=0,u=[];a<_.length;a++)o=_[a],r[o]&&u.push(r[o][0]),r[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(f&&f(n);u.length;)u.shift()()}var t={},r={0:0};var o={};var _={3:function(){return{"./domris":{__wbindgen_string_new:function(e,n){return t[1].exports.__wbindgen_string_new(e,n)},__wbindgen_object_drop_ref:function(e){return t[1].exports.__wbindgen_object_drop_ref(e)},__widl_f_set_fill_style_CanvasRenderingContext2D:function(e,n){return t[1].exports.__widl_f_set_fill_style_CanvasRenderingContext2D(e,n)},__widl_f_fill_rect_CanvasRenderingContext2D:function(e,n,r,o,_){return t[1].exports.__widl_f_fill_rect_CanvasRenderingContext2D(e,n,r,o,_)},__widl_f_fill_text_with_max_width_CanvasRenderingContext2D:function(e,n,r,o,_,i,a){return t[1].exports.__widl_f_fill_text_with_max_width_CanvasRenderingContext2D(e,n,r,o,_,i,a)},__widl_f_set_font_CanvasRenderingContext2D:function(e,n,r){return t[1].exports.__widl_f_set_font_CanvasRenderingContext2D(e,n,r)},__wbg_new_baf10398b0d0c64d:function(e,n){return t[1].exports.__wbg_new_baf10398b0d0c64d(e,n)},__wbg_call_173f04c850a68d5f:function(e,n){return t[1].exports.__wbg_call_173f04c850a68d5f(e,n)},__wbindgen_jsval_eq:function(e,n){return t[1].exports.__wbindgen_jsval_eq(e,n)},__wbg_self_58232ab37cbe6608:function(e){return t[1].exports.__wbg_self_58232ab37cbe6608(e)},__wbg_require_4a70cbfd3adc73a8:function(e,n){return t[1].exports.__wbg_require_4a70cbfd3adc73a8(e,n)},__wbg_crypto_329b714d7e7d321d:function(e){return t[1].exports.__wbg_crypto_329b714d7e7d321d(e)},__wbindgen_is_undefined:function(e){return t[1].exports.__wbindgen_is_undefined(e)},__wbg_getRandomValues_2f960218fce3a102:function(e){return t[1].exports.__wbg_getRandomValues_2f960218fce3a102(e)},__wbg_getRandomValues_5581e85fc6616df6:function(e,n,r){return t[1].exports.__wbg_getRandomValues_5581e85fc6616df6(e,n,r)},__wbg_randomFillSync_355c3fcfa754fa4e:function(e,n,r){return t[1].exports.__wbg_randomFillSync_355c3fcfa754fa4e(e,n,r)},__wbindgen_number_get:function(e,n){return t[1].exports.__wbindgen_number_get(e,n)},__wbindgen_string_get:function(e,n){return t[1].exports.__wbindgen_string_get(e,n)},__wbindgen_boolean_get:function(e){return t[1].exports.__wbindgen_boolean_get(e)},__wbindgen_is_null:function(e){return t[1].exports.__wbindgen_is_null(e)},__wbindgen_is_symbol:function(e){return t[1].exports.__wbindgen_is_symbol(e)},__wbindgen_throw:function(e,n){return t[1].exports.__wbindgen_throw(e,n)}}}}};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+e+".bundle.js"}(e),u=function(n){c.onerror=c.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),_=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+_+")");i.type=o,i.request=_,t[1](i)}r[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return({1:[3]}[e]||[]).forEach(function(e){var t=o[e];if(t)n.push(t);else{var r,a=_[e](),u=fetch(i.p+""+{3:"a32ee5f2e3c07b1e839d"}[e]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(u),a]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(u,a);else{r=u.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,a)})}n.push(o[e]=r.then(function(n){return i.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e},i.w={};var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var f=u;i(i.s=0)}([function(e,n,t){t.e(1).then(t.bind(null,1)).then(function(e){id=function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}(function(e){return document.getElementById(e)});var n=1,t=document.querySelectorAll("#levelBtnGroup>button"),r=id("canvas"),o=r.getContext("2d"),_=new e.Domris,i=id("gameToggleBtn"),a=id("point");document.addEventListener("keydown",function(n){switch(n.key){case"ArrowRight":case"l":n.preventDefault(),_.enqueue_control(e.Control.MoveRight);break;case"ArrowLeft":case"h":n.preventDefault(),_.enqueue_control(e.Control.MoveLeft);break;case"ArrowDown":case"j":n.preventDefault(),_.enqueue_control(e.Control.MoveDown);break;case"ArrowUp":case"k":n.preventDefault(),_.enqueue_control(e.Control.MoveBottom);break;case" ":n.preventDefault();var t=n.shiftKey?e.Control.RotateLeft:e.Control.RotateRight;_.enqueue_control(t)}}),t.forEach(function(e){e.addEventListener("click",function(r){_.playing()||t.forEach(function(t,r){t==e?(n=r+1,e.classList.add("active")):t.classList.remove("active")})})});var u=now=Date.now();function c(){now=Date.now(),result=_.update(now-u),e.draw(_,o,result),result&&(a.innerHTML=_.point),u=now;var n=requestAnimationFrame(c,r);_.playing()||(cancelAnimationFrame(n),i.innerText="Play!",i.classList.remove("disabled"),t.forEach(function(e){e.classList.remove("disabled")}))}i.addEventListener("click",function(r){_.playing()||(i.innerText="Playing",i.classList.add("disabled"),t.forEach(function(e){e.classList.contains("active")||e.classList.add("disabled")}),_.start(n),e.draw(_,o,!0),u=Date.now(),c())})}).catch(console.error)}]);