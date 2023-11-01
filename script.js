let startTime;
let interval;
let isRunning = false;

const timeDisplay = document.querySelector(".time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

function start() {
  if (!isRunning) {
    startTime = Date.now() - (interval || 0);
    interval = setInterval(updateTime, 10);
    isRunning = true;
    startButton.disabled = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
    startButton.disabled = false;
  }
}

function reset() {
 clearInterval(interval);
  isRunning = false;
  startButton.disabled = false;
  interval = 0; // `0` に設定
  startTime = null; // `null` に設定
  updateTime();
}

function updateTime() {
  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = (elapsedTime % 1000).toString().slice(0, 2);
  timeDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
}
