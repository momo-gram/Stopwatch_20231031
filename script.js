// リセットボタンのクリックイベントをリセット関数に関連付ける
resetButton.addEventListener("click", reset);

function reset() {
  // インターバルをクリア
  clearInterval(interval);
  isRunning = false;
  startButton.disabled = false;

  // startTimeとintervalを0に戻す
  startTime = 0;
  interval = 0;

  // タイマーを0にセット
  updateTime();
}
