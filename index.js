`use strict`;
const weatherIcon = document.querySelector('#weather-icon');
const country = document.querySelector('#country');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const description = document.querySelector('#description');
const speed = document.querySelector('#speed');
const humidity = document.querySelector('#humidity');
const minTemp = document.querySelector('#min-temp');
const pressure = document.querySelector('#pressure');
const maxTemp = document.querySelector('#max-temp');
const time = document.querySelector('#time');
const sunRise = document.querySelector('#sunrise');
const sunSet = document.querySelector('#sunset');
const seaLevel = document.querySelector('#sea-level');
const locationInput = document.querySelector('#locationInput');
const locationUi = document.querySelector('#locationUi');
const form = document.querySelector('form');

function k2c(temperature) {
  return temperatureCelsius = Math.round(temperature - 273.15); // convert Kelvin to Celsius

}
function logLocation() {
  const apiKey = '238703a115caf0543af4c6e1b6873b27';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;
  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  var location = locationInput.value;
  fetch(`${apiUrl}&q=${location}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // display weather data on your web app


      //Fetching current date and time
      function dayTime(value) {
        return date = new Date(value * 1000);
      }
      function timeUiUpdate() {
        dayTime(data.dt);
        time.textContent = `${date.getHours()}:${date.getMinutes()}`;
      }
      function sunriseUiUpdate() {
        const sunrise = dayTime(data.sys.sunrise);
        sunRise.textContent = `${sunrise.getHours()}:${sunrise.getMinutes()}`;
      }

      function sunsetUiUpdate() {
        const sunset = dayTime(data.sys.sunset);
        sunSet.textContent = `${sunset.getHours()}:${sunset.getMinutes()}`;
      }
      timeUiUpdate();
      sunsetUiUpdate();
      sunriseUiUpdate();

      //Main
      data.main.feels_like;
      data.main.grnd_level;
      humidity.textContent = data.main.humidity;
      pressure.textContent = data.main.pressure;
      seaLevel.textContent = data.main.sea_level;
      temp.textContent = k2c(data.main.temp);
      maxTemp.textContent = k2c(data.main.temp_max);
      minTemp.textContent = k2c(data.main.temp_min);

      //Name CITY
      city.textContent = data.name;

      //SYS
      country.textContent = data.sys.country;

      //Timezone, visibility
      data.timezone;
      data.visibility;

      //Weather
      description.textContent = data.weather[0].description;

      const iconCode = data.weather[0].icon;
      weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${iconCode}.png`);


      //Wind
      // data.wind.deg;
      // data.wind.gust;
      speed.textContent = data.wind.speed;



    })
    .catch(error => console.error(error));
}