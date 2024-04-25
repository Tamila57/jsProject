const button = document.querySelector(".button-50");
let result = document.querySelector(".score");
let containers = document.querySelector(".container");
let timer = document.querySelector(".timer");

button.onclick = clickBtn;
let score = 0;
let secondsLeft = 30;
let timerInterval = null;

function clickBtn() {
  score++;
  result.firstChild.data = "Score: " + score;
}

function updateTimer() {
  timer.textContent = `Time left: ${secondsLeft}s`;

  if (secondsLeft === 0) {
    clearInterval(timerInterval);
    button.remove(clickBtn);
    result.textContent = "Game Over! Your final score is " + score;
  } else {
    secondsLeft--;
  }
}
timerInterval = setInterval(updateTimer, 1000);

function playAudio() {
  const audio = document.querySelector(".audio");
  audio.play();
}
