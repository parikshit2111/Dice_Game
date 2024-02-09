let imagesource=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
let dice=document.querySelectorAll("img");
let die1=Math.floor(Math.random()*6);
let die2=Math.floor(Math.random()*6);
console.log(die1,die2);
document.querySelector("#dicee1").setAttribute("src", imagesource[die1]);
document.querySelector("#dicee2").setAttribute("src",imagesource[die2]);
if (die1>die2) {
    document.querySelector("h1").innerHTML="player1 winner";
}
else if(die1<die2) {
    
    document.querySelector("h1").innerHTML="player2 winner";
}
else{
    document.querySelector("h1").innerHTML="it is a draw";
}