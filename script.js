let startTime = 0;
let intervalId = null;
let running = false;
let buttonClicked = false;

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

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();
    const milliseconds = Math.floor(elapsedTime.getUTCMilliseconds() / 10);
    const hours = Math.floor(minutes / 60);
    document.querySelector('.time').textContent = `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}
