const button = document.querySelector(".button-50");
let result = document.querySelector(".score");
const startButton = document.querySelector(".button-74");
let containers = document.querySelector(".container");

button.onclick = clickBtn;
let score = 0;

startButton.addEventListener("click", () => {
    screens[0].classList.remove("visible");
    screens[1].classList.add("visible");
  });



function clickBtn(){
    playAudio();
    score++;
    result.firstChild.data = "Score: " + score;

    if(score === 100){
        alert("Congratulations you have reached 100 points!");
    }else if(score === 300){
        alert("Congratulations you have reached 300 points!");
    }
}

function playAudio(){
    const audio = document.querySelector(".audio");
    audio.play();
}

