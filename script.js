// ストップウォッチの変数
let startTime = 0;
let intervalId = null;
let running = false;
let buttonClicked = false;

// スタートボタンをクリックしたときの処理
function startStopwatch() {
    if (!running && !buttonClicked) {
        startTime = Date.now() - (running ? Date.now() - startTime : 0);
        intervalId = setInterval(updateTime, 10);
        running = true;
        buttonClicked = true;
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        document.getElementById('reset').disabled = true;
    }
}

// ストップボタンをクリックしたときの処理
function stopStopwatch() {
    if (running) {
        clearInterval(intervalId);
        running = false;
        buttonClicked = false;
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        document.getElementById('reset').disabled = false;
    }
}

// リセットボタンをクリックしたときの処理
function resetStopwatch() {
    if (!running) {
        clearInterval(intervalId);
        startTime = 0;
        updateTime();
        buttonClicked = false;
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        document.getElementById('reset').disabled = true;
    }
}

// 経過時間を表示する関数
function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();
    const milliseconds = Math.floor(elapsedTime.getUTCMilliseconds() / 10);
    const hours = Math.floor(minutes / 60);
    document.querySelector('.time').textContent = `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}
