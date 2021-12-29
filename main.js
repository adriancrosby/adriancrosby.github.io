const time = document.querySelector('#time');
const date = document.querySelector('#date');
const welcome = document.querySelector('#welcome');
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
let currentMonth = new Date().getUTCMonth() + 1;
let day = new Date().getUTCDate() -1;
let year = new Date().getUTCFullYear();
let displayMonth = '';
let displayHours = '';
let displayMinutes = '';
let displaySeconds = '';

const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}


const monthNumber = Object.keys(months)
console.log(parseInt(monthNumber))

function monthWord() {
  for (let i = 0; i < 20; i++) {
    if (parseInt(Object.keys(months)[i]) == currentMonth) {
      displayMonth = months[i + 1];
      return date.innerText = `${displayMonth} ${day}, ${year}`;
    }
  }
}


function startTime() {
  seconds++
  if (seconds/60 === 1) {
    seconds = 0;
    minutes++
  }
    if (minutes/60 === 1){
      minutes = 0;
      hours++;
    }
      if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
      } else {
        displaySeconds = seconds
      }
  if (minutes < 10) {
    displayMinutes = "0"+ minutes;
  } else {
    displayMinutes = minutes.toString();
  }
  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  if (hours < 12) {
    welcome.innerText = 'good morning, adrian.'
  }
  if (hours >= 12 && hours < 17) {
    welcome.innerText = 'good afternoon, adrian.'
  }
  if (hours > 17) {
    welcome.innerText = 'good evening, adrian.'
  }

  time.innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}
setInterval(startTime, 1000)
monthWord();
