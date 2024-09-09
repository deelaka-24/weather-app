// Temporary city name and forecast data (for now)
const tempCity = "Colombo"; // Replace this with actual city from search later
const tempForecastData = {
  forecast: {
    forecastday: [
      { date: "2024-09-09", day: { avgtemp_c: 30, maxwind_kph: 12 } },
      { date: "2024-09-10", day: { avgtemp_c: 32, maxwind_kph: 14 } },
      { date: "2024-09-11", day: { avgtemp_c: 31, maxwind_kph: 15 } },
      { date: "2024-09-12", day: { avgtemp_c: 29, maxwind_kph: 10 } },
      { date: "2024-09-13", day: { avgtemp_c: 28, maxwind_kph: 11 } },
      { date: "2024-09-14", day: { avgtemp_c: 27, maxwind_kph: 9 } },
    ],
  },
};

// Function to update the chart with temporary data for now
function updateChart(chart, weatherData) {
  const forecastDays = weatherData.forecast.forecastday;

  const categories = forecastDays.map((day) =>
    new Date(day.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    })
  );

  const tempData = forecastDays.map((day) => day.day.avgtemp_c);
  const windSpeedData = forecastDays.map((day) => day.day.maxwind_kph);

  chart.updateOptions({
    series: [
      {
        name: "Wind Speed",
        data: windSpeedData,
        color: "#1A56DB",
      },
      {
        name: "Temperature",
        data: tempData,
        color: "#7E3AF2",
      },
    ],
    xaxis: {
      categories: categories,
    },
  });
}

// Chart options
const options = {
  chart: {
    width: "100%",
    height: "100%",
    type: "line",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: 6,
  },
  series: [],
  xaxis: {
    categories: [],
  },
  yaxis: {
    show: false,
  },
};

// Create the chart with initial temp data for now
const chart = new ApexCharts(document.getElementById("line-chart"), options);
chart.render();

// Update the chart with temp forecast data (remove this part after adding search input)
updateChart(chart, tempForecastData);

// *** Later, you need to fetch data based on the searched city and call updateChart ***
// Example of what you'll add later:
// document.getElementById("city-input").addEventListener("change", async (event) => {
//   const city = event.target.value;
//   const weatherData = await fetchWeather(city); // You will implement this function
//   updateChart(chart, weatherData);
// });
