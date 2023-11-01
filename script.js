let startTime = 0;
let intervalId = null;
let running = false;

function startStopwatch() {
    if (!running) {
        // スタートボタン押下時処理
        startTime = Date.now() - (startTime ? startTime : 0);
        intervalId = setInterval(updateTime, 10); // 10ミリ秒毎更新
        running = true;
        document.getElementById('start').disabled = true; // スタートボタンを無効
        document.getElementById('stop').disabled = false;
        document.getElementById('reset').disabled = true;
    }
}

function stopStopwatch() {
    if (running) {
        // ストップボタンが押下時処理
        clearInterval(intervalId);
        running = false;
        document.getElementById('start').disabled = false; // スタートボタンを有効
        document.getElementById('stop').disabled = true;
        document.getElementById('reset').disabled = false;
    }
}

function resetStopwatch() {
    if (!running) {
        // リセットボタン押下時処理
        startTime = 0;
        updateTime();
        document.getElementById('start').disabled = false; // スタートボタンを有効
        document.getElementById('stop').disabled = true;
        document.getElementById('reset').disabled = true;
    }
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();
    const milliseconds = elapsedTime.getUTCMilliseconds();
    const hours = Math.floor(minutes / 60);
    document.querySelector('.time').textContent = `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}
