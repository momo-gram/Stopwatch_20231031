// ストップウォッチの要素と変数
const timeDisplay = document.querySelector('.time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime = 0;
let intervalId = null;
let running = false;

// スタートボタンがクリックされたときの処理
function startStopwatch() {
    if (!running) {
        startTime = Date.now() - (running ? Date.now() - startTime : 0);
        intervalId = setInterval(updateTime, 10);
        running = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = true;
    }
}

// ストップボタンがクリックされたときの処理
function stopStopwatch() {
    if (running) {
        clearInterval(intervalId);
        running = false;
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = false;
    }
}

// リセットボタンがクリックされたときの処理
function resetStopwatch() {
    if (!running) {
        clearInterval(intervalId);
        startTime = 0;
        updateTime();
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = true;
    }
}

// 経過時間の表示を更新
function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();
    const milliseconds = Math.floor(elapsedTime.getUTCMilliseconds() / 10);
    const hours = Math.floor(minutes / 60);
    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}
