let lon;
let lat;
let temperature = document.querySelector('.temp');
let summary = document.querySelector('.summary');
let loc = document.querySelector('.location');
let latitude = document.querySelector('.latitude');
let longtitude = document.querySelector('.longtitude')
var time = document.getElementById('time')
const kelvin = 273;

setInterval(() =>{
  var date = new Date()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var seconds = date.getSeconds()
  time.textContent = `${hour}:${minute}:${seconds}`
}, 1000)


window.addEventListener('load', () =>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) =>{
      console.log(position)
      lon = position.coords.longitude;
      lat = position.coords.latitude;


      //API URL
      const base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
      `lon=${lon}&appid=Your API Key`;

      //Calling the API

      fetch(base)
      .then((response) =>{
        return response.json()
      })
      .then((data) =>{
        console.log(data);
        temperature.textContent = 
          Math.floor(data.main.temp - kelvin) + ' C';
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + ',' + data.sys.country;
          latitude.textContent = lat;
          longtitude.textContent = lon;
      })
    })
  }
})