const temp = document.querySelector("#temp-value");
const humi = document.querySelector("#humi-value");

async function wheather(event) {
  event.preventDefault();

  const input = document.querySelector("#input-value").value;

  const response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${input}`,
  );
  console.log(response);

  temp.innerHTML = response.data.current.temp_c;
  temp.innerHTML = response.data.current.humidity;
}
