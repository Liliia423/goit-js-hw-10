import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputDelay = document.querySelector('input[name="delay"]');
inputDelay.classList.add('inputDelayField');

const stateSelectionField = document.querySelector('fieldset');
stateSelectionField.classList.add('.stateField');

const notificationButton = document.querySelector(
  '.form button[type="submit"]'
);
notificationButton.classList.add('notificationButton');

const selectedState = document.querySelector('input[name="state"]:checked');
const isSuccess = selectedState && selectedState.value === 'fulfilled';

notificationButton.addEventListener('click', event => {
  event.preventDefault();

  const delay = Number(inputDelay.value); // значення затримки
  const selectedState = document.querySelector('input[name="state"]:checked');

  const isSuccess = selectedState && selectedState.value === 'fulfilled';

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  // колбеки
  promise
    .then(value => {
      iziToast.success({
        message: `<div class="success-toast"> 
                  <span class="title">Ok</span>
                  <span class="message">${value}</span>
                  </div>`,
        position: 'topRight',
        class: 'success-toast',
        /*timeout: 400000,*/
        closeOnClick: true,
      });
    })
    .catch(error => {
      iziToast.error({
        message: `<div class="error-toast">
                  <span class="title">Error</span>
                  <span class="message">${error}</span>
                  </div>`,
        position: 'topRight',
        class: 'error-toast',
        /*timeout: 400000,*/
        closeOnClick: true,
      });
    });
});
