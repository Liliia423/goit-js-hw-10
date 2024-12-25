import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('button');
startButton.classList.add('startBtn');
startButton.disabled = true;

const labelNames = document.querySelectorAll('.label');
labelNames.forEach(label => {
  label.textContent = label.textContent.toUpperCase();
});

let userSelectedDate;

// flatpickr-параметри
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        /*title: 'Error',*/
        message: 'Please choose a date in the future',
        /*timeout: 3000,*/
        position: 'topRight',
      });
      startButton.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startButton.disabled = false;
      /*iziToast.success({
        title: 'Success',
        message: 'The date is Ok!',
        position: 'topRight',
      });*/
    }
  },
};

// Ініціалізація flatpickr із параметрами
flatpickr('#datetime-picker', options);

startButton.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const deltaTime = userSelectedDate - currentTime;

    if (deltaTime <= 0) {
      clearInterval(intervalId); // Зупиняємо таймер
      console.log('Time is up!'); // Можна виконати будь-яку дію
    } else {
      //console.log(formatTime(deltaTime)); // Відображення часу
    }
  }, 1000); // Оновлення щосекунди
});
/* щоб перевірити css налаштування стану disabled
document.querySelector('#datetime-picker').setAttribute('disabled', 'true');
document.querySelector('#datetime-picker').removeAttribute('disabled');
*/
