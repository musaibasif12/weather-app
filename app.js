const tempC = document.querySelector("#temp-value-c");
const tempF = document.querySelector("#temp-value-f");
const humi = document.querySelector("#humi-value");
const feelsLikeC = document.querySelector("#feels-like-c");
const feelsLikeF = document.querySelector("#feels-like-f");
const rainChances = document.querySelector("#rain-chances");
const windSpeed = document.querySelector("#wind-speed");
const city = document.querySelector("#city");
const table = document.querySelector("#table");
const dT = document.querySelector("#current-date");

async function wheather(event) {
  event.preventDefault();

  try {
    const input = document.querySelector("#input-value").value;
    const response = await axios(
      `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${input}`,
    );

    tempC.innerHTML = response.data.current.temp_c + "°C";
    tempF.innerHTML = response.data.current.temp_f + "°F";
    humi.innerHTML = response.data.current.humidity + "%";
    feelsLikeC.innerHTML = response.data.current.feelslike_c + "°C";
    feelsLikeF.innerHTML = response.data.current.feelslike_f + "°F";
    rainChances.innerHTML = response.data.current.chance_of_rain + "%";
    windSpeed.innerHTML = response.data.current.wind_mph + "mph";
    city.innerHTML = response.data.location.name;
  } catch (error) {
    table.innerHTML = error.response.data.error.message;
  }
}

async function showWheather() {
  const response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=karachi`,
  );

  tempC.innerHTML = response.data.current.temp_c + "°C";
  tempF.innerHTML = response.data.current.temp_f + "°F";
  humi.innerHTML = response.data.current.humidity + "%";
  feelsLikeC.innerHTML = response.data.current.feelslike_c + "°C";
  feelsLikeF.innerHTML = response.data.current.feelslike_f + "°F";
  rainChances.innerHTML = response.data.current.chance_of_rain + "%";
  windSpeed.innerHTML = response.data.current.wind_mph + "mph";
  city.innerHTML = response.data.location.name;
}
showWheather();
dT.innerHTML = dateFns.format(new Date(), "EEE, d MMM yyy");
