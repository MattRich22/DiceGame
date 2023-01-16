var player1= document.querySelector(".p1").innerHTML=prompt("Who is Player 1?");
var player2= document.querySelector(".p2").innerHTML=prompt("Who is Player 2?");

var randomNumber01 = Math.floor(Math.random()*6)+1;
var randomNumber02 = Math.floor(Math.random()*6)+1;

if (randomNumber01 ===1) {
 document.querySelector(".img1").setAttribute("src","images/dice1.png");
} else if (randomNumber01 ===2) {
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}else if (randomNumber01 ===3) {
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}else if (randomNumber01 ===4) {
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}else if (randomNumber01 ===5) {
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}else if (randomNumber01 ===6) {
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

if (randomNumber02 ===1) {
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
   } else if (randomNumber02 ===2) {
       document.querySelector(".img2").setAttribute("src","images/dice2.png");
   }else if (randomNumber02 ===3) {
       document.querySelector(".img2").setAttribute("src","images/dice3.png");
   }else if (randomNumber02 ===4) {
       document.querySelector(".img2").setAttribute("src","images/dice4.png");
   }else if (randomNumber02 ===5) {
       document.querySelector(".img2").setAttribute("src","images/dice5.png");
   }else if (randomNumber02 ===6) {
       document.querySelector(".img2").setAttribute("src","images/dice6.png");
   }


if (randomNumber01>randomNumber02){
    document.querySelector("h1").innerHTML=player1+" Wins";
} else if (randomNumber01<randomNumber02) {
    document.querySelector("h1").innerHTML=player2+" Wins";
} else 
document.querySelector("h1").innerHTML="It's a tie";