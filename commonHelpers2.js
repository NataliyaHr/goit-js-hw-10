import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector(".form");o.addEventListener("submit",e=>{e.preventDefault();const t=o.elements.delay,s=o.elements.state,r=Number(t.value),n=s.value;m(r,n).then(i=>{iziToast.success({title:"Success",message:`✅ Fulfilled promise in ${i}ms`})}).catch(i=>{iziToast.error({title:"Error",message:`❌ Rejected promise in ${i}ms`})})});function m(e,t){return new Promise((s,r)=>{setTimeout(()=>{t==="fulfilled"?s(e):r(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
