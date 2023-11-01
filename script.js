let startTime = 0;
let intervalId = null;
let running = false;

function startStopwatch() {
    if (!running) {
        // スタートボタンがクリックされたときの処理
        startTime = Date.now() - (startTime ? startTime : 0);
        intervalId = setInterval(updateTime, 10); // 10ミリ秒ごとに更新
        running = true;
        document.getElementById('start').disabled = true; // スタートボタンを無効に
        document.getElementById('stop').disabled = false;
        document.getElementById('reset').disabled = true;
    }
}

function stopStopwatch() {
    if (running) {
        // ストップボタンがクリックされたときの処理
        clearInterval(intervalId);
        running = false;
        document.getElementById('start').disabled = false; // スタートボタンを有効に
        document.getElementById('stop').disabled = true;
        document.getElementById('reset').disabled = false;
    }
}

function resetStopwatch() {
    if (!running) {
        // リセットボタンがクリックされたときの処理
        startTime = 0;
        updateTime();
        document.getElementById('start').disabled = false; // スタートボタンを有効に
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
