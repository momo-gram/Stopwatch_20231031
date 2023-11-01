let timerInterval;
let running = false;
let elapsedTime = 0;

function startStopwatch() {
  if (!running) {
    running = true;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = true;
    timerInterval = setInterval(updateTime, 10);
  }
}

function stopStopwatch() {
  if (running) {
    running = false;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = false;
    clearInterval(timerInterval);
  }
}

function resetStopwatch() {
  if (!running) {
    elapsedTime = 0;
    updateTime();
  }
}

function updateTime() {
  const centiseconds = String(elapsedTime % 100).padStart(2, "0");
  const seconds = String(Math.floor((elapsedTime / 100) % 60)).padStart(2, "0");
  const minutes = String(Math.floor((elapsedTime / 6000) % 60)).padStart(2, "0");
  const hours = String(Math.floor(elapsedTime / 360000)).padStart(2, "0");
  document.getElementById("stopwatch").textContent = `${hours}:${minutes}:${seconds}:${centiseconds}`;
  elapsedTime += 1;
}

updateTime();
