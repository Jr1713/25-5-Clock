let breakLength = 5;
let sessionLength = 25;
let timeLeft = sessionLength * 60;
let timerRunning = false;
let timerType = "Session"; // can be "Session" or "Break"
let timerInterval;

const breakLengthEl = document.getElementById("break-length");
const sessionLengthEl = document.getElementById("session-length");
const timeLeftEl = document.getElementById("time-left");
const timerLabelEl = document.getElementById("timer-label");
const beep = document.getElementById("beep");

// Helper function to format mm:ss
function formatTime(seconds) {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
}

// Update display
function updateDisplay() {
  breakLengthEl.textContent = breakLength;
  sessionLengthEl.textContent = sessionLength;
  timeLeftEl.textContent = formatTime(timeLeft);
  timerLabelEl.textContent = timerType;
}

// Reset everything
function resetTimer() {
  clearInterval(timerInterval);
  breakLength = 5;
  sessionLength = 25;
  timeLeft = sessionLength * 60;
  timerRunning = false;
  timerType = "Session";
  beep.pause();
  beep.currentTime = 0;
  updateDisplay();
}

// Start / Stop toggle
function toggleTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
  } else {
    timerRunning = true;
    timerInterval = setInterval(countdown, 1000);
  }
}

// Main countdown logic
function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    updateDisplay();
  } else {
    // Timer reached 00:00
    beep.play();

    // Switch between Session and Break
    if (timerType === "Session") {
      timerType = "Break";
      timeLeft = breakLength * 60;
    } else {
      timerType = "Session";
      timeLeft = sessionLength * 60;
    }

    updateDisplay();
  }
}

// Adjust lengths only when not running
function incrementBreak() {
  if (!timerRunning && breakLength < 60) {
    breakLength++;
    updateDisplay();
  }
}
function decrementBreak() {
  if (!timerRunning && breakLength > 1) {
    breakLength--;
    updateDisplay();
  }
}
function incrementSession() {
  if (!timerRunning && sessionLength < 60) {
    sessionLength++;
    timeLeft = sessionLength * 60;
    updateDisplay();
  }
}
function decrementSession() {
  if (!timerRunning && sessionLength > 1) {
    sessionLength--;
    timeLeft = sessionLength * 60;
    updateDisplay();
  }
}

// Event listeners
document.getElementById("break-increment").addEventListener("click", incrementBreak);
document.getElementById("break-decrement").addEventListener("click", decrementBreak);
document.getElementById("session-increment").addEventListener("click", incrementSession);
document.getElementById("session-decrement").addEventListener("click", decrementSession);
document.getElementById("start_stop").addEventListener("click", toggleTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
