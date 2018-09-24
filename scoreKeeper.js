var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Button = document.getElementById("p1Button");
var p2Button = document.querySelector("#p2Button");
var reset = document.querySelector("#Reset");
var gameOver=false;
var p1Score = 0 ;
var p2Score = 0 ;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});
p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === winningScore){
            gameOver=true;
        }
        p2Display.textContent = p2Score;
    }
});
reset.addEventListener("click",function(){
    p1Display.textContent=0;
    p2Display.textContent=0;
    gameOver= false;
});