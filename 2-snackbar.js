import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector('input[name="delay"]');i.classList.add("inputDelayField");const r=document.querySelector("fieldset");r.classList.add("stateField");const u=document.querySelector('.form button[type="submit"]');u.classList.add("notificationButton");const d=document.querySelector(".form"),c=document.querySelector('input[name="state"]:checked');c&&c.value;d.addEventListener("submit",a=>{a.preventDefault();const s=Number(i.value),t=document.querySelector('input[name="state"]:checked'),n=t&&t.value==="fulfilled";new Promise((e,l)=>{setTimeout(()=>{n?e(`Fulfilled promise in ${s}ms`):l(`Rejected promise in ${s}ms`)},s)}).then(e=>{o.success({message:`<div class="success-toast"> 
                  <span class="title">Ok</span>
                  <span class="message">${e}</span>
                  </div>`,position:"topRight",class:"success-toast",closeOnClick:!0})}).catch(e=>{o.error({message:`<div class="error-toast">
                  <span class="title">Error</span>
                  <span class="message">${e}</span>
                  </div>`,position:"topRight",class:"error-toast",closeOnClick:!0})})});
//# sourceMappingURL=2-snackbar.js.map
