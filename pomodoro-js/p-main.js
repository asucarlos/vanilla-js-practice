let countdown;
let secondsLeft;
let savedTime;
let isPaused = true;
let isFirstTime = true;
const timerDisplay = document.querySelector("#timer-left");
const start_stop = document.querySelector("#start_stop");
const timer_length = document.querySelector("#session-length").innerHTML;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    if (isPaused) {
      savedTime = secondsLeft;
      clearInterval(countdown);
      return;
    }
    //display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

start_stop.addEventListener("click", e => {
  isPaused = !isPaused;
  console.log(savedTime);
  if (isFirstTime) {
    isFirstTime = false;
    timer(timer_length * 60);
  } else {
    timer(savedTime);
  }
});
