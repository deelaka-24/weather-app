document.addEventListener("DOMContentLoaded", () => {
  const dateContainer = document.getElementById("current-date");

  // Display current date
  if (dateContainer) {
    const now = new Date();
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const formattedDate = now.toLocaleDateString("en-GB", options);
    dateContainer.textContent = formattedDate;
  }

  // user location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchWeatherByCoordinates(latitude, longitude);
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

async function fetchWeatherByCoordinates(lat, lon) {
  const apiKey = "e7b41abe01884f6eb3390320240909";
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=5`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  updateChart(
    data.forecast.forecastday.map((day) => day.date),
    data.forecast.forecastday.map((day) => day.day.maxwind_kph),
    data.forecast.forecastday.map((day) => day.day.avgtemp_c)
  );
  updateCurrentWeather(data);
  updateForecast(data);
}

// Manual search function
async function search() {
  const cityname = document.getElementById("city-input").value.trim();

  if (!cityname) {
    alert("Please enter a city name.");
    return;
  }

  const apiKey = "e7b41abe01884f6eb3390320240909";
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityname}&days=5`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  updateChart(
    data.forecast.forecastday.map((day) => day.date),
    data.forecast.forecastday.map((day) => day.day.maxwind_kph),
    data.forecast.forecastday.map((day) => day.day.avgtemp_c)
  );
  updateCurrentWeather(data);
  updateForecast(data);
}
