let tempToggler = document.getElementById("temp-switch");
let tempBall = document.getElementById("temp-toggle-ball");

tempToggler.addEventListener("change", () => {
  if (tempToggler.checked) {
    tempBall.textContent = "°F";
  } else {
    tempBall.textContent = "°C"; 
  }
});


const darkModeToggler = document.getElementById("dark-mode-switch");
const darkModeBall = document.getElementById("dark-mode-toggle-ball");


darkModeToggler.addEventListener("change", () => {
  const isDarkMode = darkModeToggler.checked;

  document.documentElement.classList.toggle("dark", isDarkMode);

  document.body.classList.toggle("bg-[#081F3D]", isDarkMode);
  document.body.classList.toggle("bg-[#A4C2EB]", !isDarkMode);

  darkModeBall.classList.toggle("left-[5px]", !isDarkMode);
  darkModeBall.classList.toggle("left-[calc(100%-45px)]", isDarkMode);
});

const prefersDarkScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
if (prefersDarkScheme) {
  darkModeToggler.checked = true;
  document.documentElement.classList.add("dark");
  darkModeBall.classList.add("left-[calc(100%-45px)]");
} else {
  darkModeToggler.checked = false;
  darkModeBall.classList.add("left-[5px]");
}
