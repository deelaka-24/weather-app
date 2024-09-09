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
