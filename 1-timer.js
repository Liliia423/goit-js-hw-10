import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as o,i as s}from"./assets/vendor-BbSUbo7J.js";const t=document.querySelector("button");t.classList.add("startBtn");t.disabled=!0;const r=document.querySelectorAll(".label");r.forEach(e=>{e.textContent=e.textContent.toUpperCase()});let n;const i={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const a=e[0];a<=new Date?(s.error({message:"Please choose a date in the future",position:"topRight"}),t.disabled=!0):(n=a,t.disabled=!1)}};o("#datetime-picker",i);t.addEventListener("click",()=>{const e=setInterval(()=>{n-new Date<=0&&(clearInterval(e),console.log("Time is up!"))},1e3)});
//# sourceMappingURL=1-timer.js.map