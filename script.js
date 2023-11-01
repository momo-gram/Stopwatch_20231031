// ストップウォッチの変数
let startTime = 0;
let intervalId = null;
let running = false;
let buttonClicked = false;

// スタートボタンをクリックしたときの処理
function startStopwatch() {
    if (!running && !buttonClicked) {
        startTime = Date.now() - (running ? Date.now() - startTime : 0);
        intervalId = setInterval(updateTime, 1000);
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
    const hours = elapsedTime.getUTCHours();
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();
    document.querySelector('.time').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
