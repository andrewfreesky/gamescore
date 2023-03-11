// home
let homescore = 0;

function addh1(){
    homescore +=1;
    document.getElementById("homescore").textContent = homescore;
}

function addh2(){
    homescore +=2;
    document.getElementById("homescore").textContent = homescore;
}

function addh3(){
    homescore +=3;
    document.getElementById("homescore").textContent = homescore;
}

///// guest

let guestscore = 0;
function addg1(){
    guestscore +=1;
    document.getElementById("guestscore").textContent = guestscore;
}

function addg2(){
    guestscore +=2;
    document.getElementById("guestscore").textContent = guestscore;
}

function addg3(){
    guestscore +=3;
    document.getElementById("guestscore").textContent = guestscore;
}

////// reset
function reset(){
    guestscore=0;
    homescore=0;
    document.getElementById("guestscore").textContent = 0;
    document.getElementById("homescore").textContent = homescore;
}