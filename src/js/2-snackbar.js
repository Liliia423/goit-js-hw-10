import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputDelay = document.querySelector('input[name="delay"]');
inputDelay.classList.add('inputDelayField');

/*document.addEventListener('DOMContentLoaded', () => {
  const inputDelay = document.querySelector('input[name="delay"]');
  inputDelay.classList.add('inputDelayField');
});*/

const stateSelectionField = document.querySelector('fieldset');
stateSelectionField.classList.add('.stateField');

const createButton = document.querySelector('.form button[type="submit"]');
createButton.classList.add('createBtn');
