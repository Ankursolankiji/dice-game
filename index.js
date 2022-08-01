function randomNumbers(){
var randomNumberONe = Math.random();
randomNumberONe = Math.round(randomNumberONe*6);

if(randomNumberONe <=1){
    document.getElementById("dice-1").outerHTML = "<span class='fa-solid fa-dice-one fa-10x ' ID='dice-1'></span>";
}
else if(randomNumberONe <=2){
    document.getElementById("dice-1").outerHTML = "<span class='fa-solid fa-dice-two fa-10x ' ID='dice-1'></span>";
}
else if(randomNumberONe <=3){
    document.getElementById("dice-1").outerHTML = "<span class='fa-solid fa-dice-three fa-10x ' ID='dice-1'></span>";
}
else if(randomNumberONe <= 4){
    document.getElementById("dice-1").outerHTML = "<span class='fa-solid fa-dice-four fa-10x ' ID='dice-1'></span>";
}
else if(randomNumberONe <= 5){
    document.getElementById("dice-1").outerHTML = "<span class='fa-solid fa-dice-five fa-10x ' ID='dice-1'></span>";
}
else{
    document.getElementById("dice-1").outerHTML = "<span class='fa-solid fa-dice-six fa-10x ' ID='dice-1'></span>";
}


    var randomNumberTwo = Math.random();
randomNumberTwo = Math.round(randomNumberTwo*6);
if(randomNumberTwo <=1){
    document.getElementById("dice-2").outerHTML = "<span class='fa-solid fa-dice-one fa-10x' id='dice-2'></span>";
}
else if(randomNumberTwo <=2){
    document.getElementById("dice-2").outerHTML = "<span class='fa-solid fa-dice-two fa-10x' id='dice-2'></span>";
}
else if(randomNumberTwo <=3){
    document.getElementById("dice-2").outerHTML = "<span class='fa-solid fa-dice-three fa-10x' id='dice-2'></span>";
}
else if(randomNumberTwo <= 4){
    document.getElementById("dice-2").outerHTML = "<span class='fa-solid fa-dice-four fa-10x' id='dice-2'></span>";
}
else if(randomNumberTwo <= 5){
    document.getElementById("dice-2").outerHTML = "<span class='fa-solid fa-dice-five fa-10x' id='dice-2'></span>";
}
else{
    document.getElementById("dice-2").outerHTML = "<span class='fa-solid fa-dice-six fa-10x' id='dice-2'></span>";
}
    if (randomNumberONe > randomNumberTwo){
        document.querySelector("h1").innerHTML = "Player 1 wins"
    }
    else if (randomNumberONe < randomNumberTwo){
        document.querySelector("h1").innerHTML = "Player 2 wins"
    }
    else{
        document.querySelector("h1").innerHTML = "Draw"
    }
   
}