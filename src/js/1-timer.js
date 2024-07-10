import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import immageUrl from '../public/bi_x-octagon.svg';

let userSelectedDate;
let counter = nulll

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        userSelectedDate = selectedDates[0];
        if (selectedDates[0] > Date.now()) {
            startBtn.disabled = false;
            startBtn.classList.remove('disabled');
            const estTime = userSelectedDate.getTime() - Date.now();
            
        }
    }
}