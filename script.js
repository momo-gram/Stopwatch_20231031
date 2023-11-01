let startTime = 0; // ストップウォッチが開始された時間を格納
let intervalId = null; // setInterval関数の戻り値を格納
let running = false; // ストップウォッチが実行中かどうかを示す

function startStopwatch() {
    if (!running) {
        // スタートボタンのクリック処理
        startTime = Date.now() - (startTime ? startTime : 0); // ストップウォッチの開始時刻を設定
        intervalId = setInterval(updateTime, 10); // 10ミリ秒ごとにupdateTime関数を呼び出して経過時間を更新
        running = true; // ストップウォッチが実行中であることを示す
        document.getElementById('start').disabled = true; // スタートボタンを無効
        document.getElementById('stop').disabled = false; // ストップボタンを有効
        document.getElementById('reset').disabled = true; // リセットボタンを無効
    }
}

function stopStopwatch() {
    if (running) {
        // ストップボタンのクリック処理
        clearInterval(intervalId); // 経過時間の更新を停止
        running = false; // ストップウォッチが実行中でないことを示す
        document.getElementById('start').disabled = false; // スタートボタンを有効
        document.getElementById('stop').disabled = true; // ストップボタンを無効
        document.getElementById('reset').disabled = false; // リセットボタンを有効
    }
}

function resetStopwatch() {
    if (!running) {
        // リセットボタンのクリック処理
