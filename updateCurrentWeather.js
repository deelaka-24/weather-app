function updateCurrentWeather(data) {
  const currentData = {
    city: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    humidity: data.current.humidity,
    windSpeed: data.current.wind_kph,
    icon: `https:${data.current.condition.icon}`,
  };

  document.getElementById("city").textContent = currentData.city;
  document.getElementById("country").textContent = currentData.country;
  document.getElementById("temp").textContent = `${Math.round(
    currentData.temp
  )}°C`;
  document.getElementById(
    "humidity"
  ).innerHTML = `${currentData.humidity}<span class="text-sm font-bold">%</span>`;
  document.getElementById("windSpeed").innerHTML = `${Math.round(
    currentData.windSpeed
  )}<span class="text-sm font-bold">km/h</span>`;
  document.getElementById("img").src = currentData.icon;

  const forecastHours = data.forecast.forecastday[0].hour;

  const now = new Date();
  const currentHour = now.getHours();

  const startIndex = forecastHours.findIndex(
    (hour) => parseInt(hour.time.split(" ")[1].split(":")[0]) === currentHour
  );

  for (let i = 0; i < 6; i++) {
    const timeSlot = document.getElementById(`time-0${i + 1}`);

    if (startIndex + i < forecastHours.length) {
      const forecast = forecastHours[startIndex + i];
      const time = forecast.time.split(" ")[1];
      const tempC = forecast.temp_c;
      const condition = forecast.condition.text;

      let conditionClass = "text-lg";

      if (condition.split(" ").length > 2) {
        conditionClass = "text-sm";
      }

      timeSlot.innerHTML = `
        <div class="flex flex-col justify-center items-center h-full">
          <p class="font-bold">${time}</p>
          <p class="font-semi ${conditionClass} text-center">${condition}</p>
          <p class="font-bold">${tempC}°</p> 
        </div>`;
    }
  }
}
