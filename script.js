let isRunning = false; // ストップウォッチが実行中かどうかを示すフラグ
let startTime; // ストップウォッチがスタートした時間
let interval; // タイマーインターバルID

// スタート/ストップボタンのクリック時に呼び出される関数
function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById('startStop').textContent = 'スタート';
    } else {
        startTime = new Date().getTime() - (startTime || 0);
        interval = setInterval(updateDisplay, 10);
        document.getElementById('startStop').textContent = 'ストップ';
    }
    isRunning = !isRunning;
}

// リセットボタンのクリック時に呼び出される関数
function reset() {
    clearInterval(interval);
    document.getElementById('startStop').textContent = 'スタート';
    isRunning = false;
    startTime = null;
    updateDisplay();
}

// ストップウォッチの表示を更新する関数
function updateDisplay() {
    const currentTime = new Date().getTime() - (startTime || 0);
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = (currentTime % 1000);
    document.getElementById('stopwatch').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}

// ページ読み込み時に初期表示を行います。
updateDisplay();
