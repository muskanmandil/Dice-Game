// Player 1 Dice
var randomNumber1 = Math.ceil(Math.random()*6);
var randomImage1 = "Images/dice" + randomNumber1 + ".png" ;
document.querySelectorAll(".dice")[0].setAttribute("src", randomImage1);

// Player 2 Dice
var randomNumber2 = Math.ceil(Math.random()*6);
var randomImage2 = "Images/dice" + randomNumber2 + ".png" ;
document.querySelectorAll(".dice")[1].setAttribute("src", randomImage2);

// Conclusion Statement
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 won !!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 won !!🚩";
}else{
    document.querySelector("h1").textContent = "Draw!!";
}