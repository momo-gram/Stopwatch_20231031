let startTime = 0;
let intervalId = null;
let running = false;

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - (running ? Date.now() - startTime : 0);
        intervalId = setInterval(updateTime, 10);
        running = true;
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        document.getElementById('reset').disabled = false;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(intervalId);
        running = false;
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
    }
}

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

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();
    const milliseconds = elapsedTime.getUTCMilliseconds();
    document.getElementById('stopwatch').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}
