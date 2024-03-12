let compImg = document.getElementById("comp-img");
let youImg = document.getElementById("you-img");
let yourScore = document.getElementById("score1");
let compScore = document.getElementById("score2");
let winMsg = document.getElementById("win-msg");
let playAgain=document.getElementById("play-again")


function displayWinner(ourScore, sysScore){
    if(ourScore === 5){
        winMsg.textContent = "You won the game";
        playAgain.style.display = "block";
    }else if(sysScore === 5){
        winMsg.textContent = "Computer won the game";
        playAgain.style.display = "block";
    }else if(ourScore === compScore === 5){
        winMsg.textContent = "Tie";
        playAgain.style.display = "block";
    }
}

playAgain.onclick=()=>{
    location.reload();
}

let ourScore = 0;
let sysScore = 0;
function displayScore(randomNumber, uniqueNumber){
    if(randomNumber ===1 && uniqueNumber ===2){
        ourScore += 1;
        yourScore.textContent = ourScore;
    }else if(randomNumber === 1 && uniqueNumber === 3){
        sysScore += 1;
        compScore.textContent = sysScore;
    }else if(randomNumber ===2 && uniqueNumber ===1){
        sysScore += 1;
        compScore.textContent = sysScore;
    }else if(randomNumber === 2 && uniqueNumber === 3){
        ourScore += 1;
        yourScore.textContent = ourScore;
    }else if(randomNumber ===3 && uniqueNumber ===1){
        ourScore += 1;
        yourScore.textContent = ourScore;
    }else if(randomNumber === 3 && uniqueNumber === 2){
        sysScore += 1;
        compScore.textContent = sysScore;
    }
    displayWinner(ourScore, sysScore);
}

function displayCompImg(uniqueNumber){
    randomNumber = Math.ceil(Math.random()*3);
    if(randomNumber === 1){
        compImg.src = "assets/rock-hand.png";
        compImg.classList.add("size");
    }else if(randomNumber == 2){
        compImg.src = "assets/paper-hand.png";
        compImg.classList.add("size");
    }else if(randomNumber == 3){
        compImg.src = "assets/scissors-hand.png";
        compImg.classList.add("size");
    }
    displayScore(randomNumber, uniqueNumber);
}


function rockfunction(){
    let uniqueNumber = 1;
    youImg.src = "assets/rock-hand.png";
    youImg.classList.add("size");
    displayCompImg(uniqueNumber);
}

function paperfunction(){
    let uniqueNumber = 2;
    youImg.src = "assets/paper-hand.png";
    youImg.classList.add("size");
    displayCompImg(uniqueNumber);
}

function scissorsfunction(){
    let uniqueNumber = 3;
    youImg.src = "assets/scissors-hand.png";
    youImg.classList.add("size");
    displayCompImg(uniqueNumber);
}