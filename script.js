document.addEventListener("DOMContentLoaded", () => {
  const dateContainer = document.getElementById("current-date");

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
});

async function search() {
  const cityname = document.getElementById("city-input").value.trim();

  if (!cityname) {
    alert("Please enter a city name.");
    return;
  }

  const apiKey = "e7b41abe01884f6eb3390320240909"; // Your API key
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
