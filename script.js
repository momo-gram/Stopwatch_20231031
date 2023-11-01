// script.js
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const timeDisplay = document.getElementById('time');

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startButton.disabled = true; // スタートボタンを無効にする
  stopButton.disabled = false; // ストップボタンを有効にする
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
}

function stopTimer() {
  startButton.disabled = false; // スタートボタンを有効にする
  stopButton.disabled = true; // ストップボタンを無効にする
  clearInterval(timerInterval);
}

function resetTimer() {
  startButton.disabled = false; // スタートボタンを有効にする
  stopButton.disabled = true; // ストップボタンを無効にする
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateTime();
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  timeDisplay.innerText = formattedTime;
}

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
