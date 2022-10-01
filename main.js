const time = document.getElementById('time');
const startButton = document.getElementById('button_start');
const stopButton = document.getElementById('button_stop');
const resetButton = document.getElementById('button_reset');

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime() {
  const time0 = new Date(Date.now() - startTime + stopTime);
  const h = String(time0.getUTCHours()).padStart(2);
  const m = String(time0.getMinutes()).padStart(2);
  const s = String(time0.getSeconds()).padStart(2);
  const ms = String(time0.getMilliseconds()).padStart(3);

  time.textContent = `${h}:${m}:${s}:${(Math.floor(ms/ 100) * 1 )}`;
  timeoutID = setTimeout(displayTime, 10);
}

startButton.addEventListener('click', () => {
  startTime = Date.now();
  displayTime();
});

stopButton.addEventListener('click', function() {
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

resetButton.addEventListener('click', function() {
  time.textContent = '0:0:0:0';
  stopTime = 0;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});