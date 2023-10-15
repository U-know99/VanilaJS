const API_KEY = "92e2ac27b74524cb5965aa92b6c5b78a";

function getWeatherEmoji(weatherDescription) {
  // 날씨에 따른 이모티콘을 반환하는 함수
  switch (weatherDescription) {
    case "Clear":
      return "☀️";
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧️";
    // 다른 날씨 상태에 대한 이모티콘을 추가하세요.
    default:
      return "❓";
  }
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      const weatherDescription = data.weather[0].main;
      const temperature = data.main.temp;

      // 날씨에 따른 이모티콘을 가져와서 추가
      const emoji = getWeatherEmoji(weatherDescription);
      weather.innerText = `${emoji} ${weatherDescription} / ${temperature}℃ / `;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
