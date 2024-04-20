const button = document.querySelector(".button-50");
let result = document.querySelector(".score");

button.onclick = clickBtn;
let score = 0;

function clickBtn(){
    score++;
    result.firstChild.data = "Score: " + score;

    if(score === 20){
        alert("congrats")
    }
}



