const day1 = document.querySelector('.days');
const hour1 = document.querySelector('.hours');
const minute1 = document.querySelector('.minutes');
const second1 = document.querySelector('.seconds');
const newYear = '1 Jan 2022';

function counter() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const seconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const totalSeconds = Math.floor(seconds % 60);
    day1.innerHTML = formatTime(days);
    hour1.innerHTML = formatTime(hours);
    minute1.innerHTML = formatTime(minutes);
    second1.innerHTML = formatTime(totalSeconds);

}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
counter();
setInterval(counter, 1000);