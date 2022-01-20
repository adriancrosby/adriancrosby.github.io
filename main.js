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


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById('weather').innerHTML = "Geolocation is not supported by this browser.";
  }
}


function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  weatherBallon(lat, lon)
}



function weatherBallon(lat, lon) {
  var key = 'af2b0132ec478c60dfa3990f4334016b'
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + key)
  .then(function(resp) {return resp.json()})
  .then(function(data) {
    drawWeather(data)
  })
  .catch(function() {
    console.log('error bro')
  })
}

function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);

  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
  document.getElementById('location').innerHTML = d.name;
}

window.onload = function() {
  getLocation();
}


const monthNumber = Object.keys(months)
console.log(parseInt(monthNumber))


function monthWord() {
  for (let i = 0; i < 20; i++) {
    if (parseInt(Object.keys(months)[i]) == currentMonth) {
      displayMonth = months[i + 1];
      return date.innerHTML = `${displayMonth} ${day}, ${year}`;
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
    welcome.innerHTML = 'good morning, adrian.'
  }
  if (hours >= 12 && hours < 17) {
    welcome.innerHTML = 'good afternoon, adrian.'
  }
  if (hours >= 17) {
    welcome.innerHTML = 'good evening, adrian.'
  }

  time.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}
setInterval(startTime, 1000)
monthWord();
