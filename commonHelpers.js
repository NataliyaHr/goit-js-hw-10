import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";const o=document.querySelector("button[data-start]"),r=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let a,c;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],a<=new Date?(h.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):o.disabled=!1}};f(r,q);o.addEventListener("click",()=>{o.disabled=!0,r.disabled=!0,c=setInterval(()=>{const e=a-new Date;if(e<=0){clearInterval(c),r.disabled=!1;return}const t=C(e);v(t)},1e3)});function v({days:e,hours:t,minutes:s,seconds:u}){y.textContent=n(e),S.textContent=n(t),p.textContent=n(s),b.textContent=n(u)}function n(e){return String(e).padStart(2,"0")}function C(e){const d=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:l,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
