let chart;

document.addEventListener("DOMContentLoaded", () => {
  if (
    document.getElementById("line-chart") &&
    typeof ApexCharts !== "undefined"
  ) {
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
          name: "wind speed",
          data: [],
          color: "#1A56DB",
        },
        {
          name: "Temp",
          data: [],
          color: "#7E3AF2",
        },
      ],
      legend: {
        show: false,
      },
      xaxis: {
        categories: [],
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

    chart = new ApexCharts(document.getElementById("line-chart"), options);
    chart.render();
  }
});

function updateChart(dates, windSpeeds, temps) {
  if (chart) {
    chart.updateOptions({
      xaxis: {
        categories: dates,
      },
      series: [
        {
          name: "wind speed",
          data: windSpeeds,
        },
        {
          name: "Temp",
          data: temps,
        },
      ],
    });
  }
}
