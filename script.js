// ストップウォッチの変数
let startTime = 0;
let intervalId = null;
let running = false;

// スタートボタンをクリックしたときの処理
function startStopwatch() {
    if (!running) {
        startTime = Date.now() - (running ? Date.now() - startTime : 0);
        intervalId = setInterval(updateTime, 1000); // 1秒ごとに更新
        running = true;
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
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        document.getElementById('reset').disabled = true;
    }
}

// 経過時間を表示する関数
function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = String(elapsedTime.getUTCHours()).padStart(2, '0');
    const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, '0');
    document.querySelector('.time').textContent = `${hours}:${minutes}:${seconds}`;
}
