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

function updateTimer({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent =
    addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent =
    addLeadingZero(seconds);
}

// форматування числа
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

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
        message:
          '<div class="error-toast">' +
          '<span class="title">Error</span>' +
          '<span class="message">Illegal operation</span>' +
          '</div>',
        position: 'topRight',
        class: 'error-toast',
        /*timeout: 2000,*/
        closeOnClick: true,
      });
      startButton.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startButton.disabled = false;
    }
  },
};

// Ініціалізація flatpickr із параметрами
flatpickr('#datetime-picker', options);

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  document.querySelector('#datetime-picker').disabled = true;

  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const deltaTime = userSelectedDate - currentTime;

    if (deltaTime <= 0) {
      clearInterval(intervalId); // зупинка таймер

      // активація кнопки після відліку
      document.querySelector('#datetime-picker').disabled = false;
    } else {
      const timeComponents = convertMs(deltaTime);
      updateTimer(timeComponents);
    }
  }, 1000);
});

/* щоб перевірити css налаштування стану disabled
document.querySelector('#datetime-picker').setAttribute('disabled', 'true');
document.querySelector('#datetime-picker').removeAttribute('disabled');
*/

/*iziToast.error({
  message: 'Please choose a date in the future',
  position: 'topRight',
  timeout: false, // Не зникає автоматично
});*/
