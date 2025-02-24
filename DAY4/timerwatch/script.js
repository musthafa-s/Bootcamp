let isRunning = false;
let time = 0; // Time in seconds
let interval;

const timeDisplay = document.getElementById("timeDisplay");
const startStopButton = document.getElementById("startStopButton");
const resetButton = document.getElementById("resetButton");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(time);
}

function startStop() {
  if (isRunning) {
    clearInterval(interval);
    startStopButton.textContent = "Start";
  } else {
    interval = setInterval(() => {
      time++;
      updateDisplay();
    }, 1000);
    startStopButton.textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(interval);
  isRunning = false;
  time = 0;
  updateDisplay();
  startStopButton.textContent = "Start";
}

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);

// Initial display
updateDisplay();
