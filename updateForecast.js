function updateForecast(data) {
  // Get the forecast days from the API data
  const forecastDays = data.forecast.forecastday;

  // Process the next 3 days of forecast data
  const forecastElements = document.querySelectorAll(".forecast-item");

  forecastDays.slice(1, 4).forEach((day, index) => {
    // Format the date
    const date = new Date(day.date);
    const options = { weekday: "short", day: "numeric", month: "short" };
    const formattedDate = date.toLocaleDateString("en-US", options); // e.g., "Mon, 16 Sep"

    // Update the forecast items
    const forecastElement = forecastElements[index];
    if (forecastElement) {
      forecastElement.querySelector(
        ".icon"
      ).innerHTML = `<img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}" />`;
      forecastElement.querySelector(".temp").textContent = `${Math.round(
        day.day.avgtemp_c
      )}°`;
      forecastElement.querySelector(
        ".date"
      ).innerHTML = `${date.getDate()} <span class="text-base">${formattedDate.slice(
        4
      )}</span>`; // Format date without day
    }
  });
}
