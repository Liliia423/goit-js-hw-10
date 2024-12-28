import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as c}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector('input[name="delay"]');o.classList.add("inputDelayField");const u=document.querySelector("fieldset");u.classList.add(".stateField");const a=document.querySelector('.form button[type="submit"]');a.classList.add("notificationButton");const i=document.querySelector('input[name="state"]:checked');i&&i.value;a.addEventListener("click",l=>{l.preventDefault();const s=Number(o.value),t=document.querySelector('input[name="state"]:checked'),n=t&&t.value==="fulfilled";new Promise((e,r)=>{setTimeout(()=>{n?e(`Fulfilled promise in ${s}ms`):r(`Rejected promise in ${s}ms`)},s)}).then(e=>{c.success({message:`<div class="success-toast"> 
                  <span class="title">Ok</span>
                  <span class="message">${e}</span>
                  </div>`,position:"topRight",class:"success-toast",closeOnClick:!0})}).catch(e=>{c.error({message:`<div class="error-toast">
                  <span class="title">Error</span>
                  <span class="message">${e}</span>
                  </div>`,position:"topRight",class:"error-toast",closeOnClick:!0})})});
//# sourceMappingURL=2-snackbar.js.map
