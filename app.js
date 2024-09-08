// Temperature Toggle
let tempToggler = document.getElementById("temp-switch");
let tempBall = document.getElementById("temp-toggle-ball");

tempToggler.addEventListener("change", () => {
  if (tempToggler.checked) {
    tempBall.textContent = "°F"; // Update text to Fahrenheit
  } else {
    tempBall.textContent = "°C"; // Update text to Celsius
  }
});

// Dark Mode Toggle
let darkModeToggler = document.getElementById("dark-mode-switch");
let darkModeBall = document.getElementById("dark-mode-toggle-ball");

darkModeToggler.addEventListener("change", () => {
  if (darkModeToggler.checked) {
    document.body.classList.remove("bg-[#A4C2EB]");
    document.body.classList.add("bg-[#081F3D]");
    darkModeBall.classList.remove("left-[5px]", "bg-[#0E3366]");
    darkModeBall.classList.add(
      "left-[calc(100%-5px)]",
      "translate-x-[-100%]",
      "bg-[#0E3366]"
    );
  } else {
    document.body.classList.remove("bg-[#081F3D]");
    document.body.classList.add("bg-[#A4C2EB]");
    darkModeBall.classList.remove(
      "left-[calc(100%-5px)]",
      "translate-x-[-100%]",
      "bg-[#0E3366]"
    );
    darkModeBall.classList.add("left-[5px]", "bg-[#0E3366]");
  }
});

// chart
const options = {
  chart: {
    width: "100%",
    height: "100%",
    type: "line",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 6,
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -26,
    },
  },
  series: [
    {
      name: "Clicks",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#1A56DB",
    },
    {
      name: "CPC",
      data: [6456, 6356, 6526, 6332, 6418, 6500],
      color: "#7E3AF2",
    },
  ],
  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      "01 Feb",
      "02 Feb",
      "03 Feb",
      "04 Feb",
      "05 Feb",
      "06 Feb",
      "07 Feb",
    ],
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-white",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

if (
  document.getElementById("line-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(document.getElementById("line-chart"), options);
  chart.render();
}
