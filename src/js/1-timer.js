import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
flatpickr('#datetime-picker', {});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
let userSelectedDate = 0;

const startButton = document.querySelector('button');
startButton.classList.add('startBtn');

const labelNames = document.querySelectorAll('.label');
labelNames.forEach(label => {
  label.textContent = label.textContent.toUpperCase();
});
