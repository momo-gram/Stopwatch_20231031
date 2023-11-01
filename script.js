let startTime = 0; // ストップウォッチが開始された時間を格納する変数
let intervalId = null; // setInterval関数の戻り値を格納する変数。経過時間の更新に使用
let running = false; // ストップウォッチが実行中かどうかを示すフラグ

function startStopwatch() {
    if (!running) {
        // スタートボタンがクリックされたときの処理
        startTime = Date.now() - (startTime ? startTime : 0); // ストップウォッチの開始時刻を設定
        intervalId = setInterval(updateTime, 10); // 10ミリ秒ごとにupdateTime関数を呼び出して経過時間を更新
        running = true; // ストップウォッチが実行中であることを示すフラグを設定
        document.getElementById('start').disabled = true; // スタートボタンを無効にする
        document.getElementById('stop').disabled = false; // ストップボタンを有効にする
        document.getElementById('reset').disabled = true; // リセットボタンを無効にする
    }
}

function stopStopwatch() {
    if (running) {
        // ストップボタンがクリックされたときの処理
        clearInterval(intervalId); // 経過時間の更新を停止
        running = false; // ストップウォッチが実行中でないことを示すフラグを設定
        document.getElementById('start').disabled = false; // スタートボタンを有効にする
        document.getElementById('stop').disabled = true; // ストップボタンを無効にする
        document.getElementById('reset').disabled = false; // リセットボタンを有効にする
    }
}

function resetStopwatch() {
    if (!running) {
        // リセットボタンがクリックされたときの処理
        startTime = 0; // ストップウォッチの開始時刻をリセット
        updateTime(); // 時間表示をリセット
        document.getElementById('start').disabled = false; // スタートボタンを有効にする
        document.getElementById('stop').disabled = true; // ストップボタンを無効にする
        document.getElementById('reset').disabled = true; // リセットボタンを無効にする
    }
}

function updateTime() {
    const currentTime = Date.now(); // 現在の時刻を取得
    const elapsedTime = new Date(currentTime - startTime); // 経過時間を計算
    const minutes = elapsedTime.getUTCMinutes(); // 分を取得
    const seconds = elapsedTime.getUTCSeconds(); // 秒を取得
    const milliseconds = Math.floor(elapsedTime.getUTCMilliseconds() / 10); // ミリ秒を取得して10で割る
    const hours = Math.floor(minutes / 60); // 時間を計算
    document.querySelector('.time').textContent = `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`; // 時間表示を更新
}
