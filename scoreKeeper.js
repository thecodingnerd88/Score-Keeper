var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Button = document.getElementById("p1Button");
var p2Button = document.querySelector("#p2Button");
var resetButton = document.querySelector("#Reset");
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");
var gameOver=false;
var p1Score = 0 ;
var p2Score = 0 ;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("green");
        }
        p1Display.textContent = p1Score;
    }
});
p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === winningScore){
            gameOver=true;
            p2Display.classList.add("green");
        }
        p2Display.textContent = p2Score;
    }
});
resetButton.addEventListener("click",function(){
reset();
});

numInput.addEventListener("change",function(){
winningScoreDisplay.textContent = numInput.value;
winningScore = Number(numInput.value);
reset();
});

function reset(){
    p1Score = 0 ;
    p2Score = 0 ;
    p1Display.textContent=0;
    p2Display.textContent=0;
    gameOver= false;
    p1Display.classList.remove("green");
    p2Display.classList.remove("green");
}
