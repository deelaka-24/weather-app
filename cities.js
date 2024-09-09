async function fetchWeather(city, elementId) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=e7b41abe01884f6eb3390320240909&q=${city}`
    );
    const data = await response.json();
    let temp = Math.round(data.current.temp_c);
    document.getElementById(elementId).innerText = `${temp}°`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById(elementId).innerText = "Error";
  }
}

function displayOtherCities() {
  fetchWeather("Lisbon", "lisbon");
  fetchWeather("New York", "newyork");
  fetchWeather("Tokyo", "tokyo");
  fetchWeather("Sydney", "sydney");
  fetchWeather("Rio de Janeiro", "janeiro");
  fetchWeather("Paris", "paris");
}

document.addEventListener("DOMContentLoaded", displayOtherCities);
