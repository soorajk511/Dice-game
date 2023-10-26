if (window.performance.navigation.type === 1) {
    // if the page has been refreshed, call the rollDice() function.
   rollDice();
 }

function rollDice(){
let randomNumber1 , randomNumber2;
 randomNumber1= Math.ceil( Math.random() *6);
 console.log(randomNumber1);
 document.querySelector(".img1").setAttribute("src", "./images/dice"+ randomNumber1+".png");


 randomNumber2= Math.ceil( Math.random() *6);
 console.log(randomNumber2);
 document.querySelector(".img2").setAttribute("src", "./images/dice"+ randomNumber2+".png");
 
 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
 }
 else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins🚩!";
 }
 else{
    document.querySelector("h1").innerHTML="Draw!";
 }
}