//Global Variables
let enemyValue = ["r", "p", "s"];
let enemy;
let score = 0;
let easyValue = ["1", "2", "3"];
let easyv;
let mode = "normal";
let hardValue = ["1", "2", "3", "4", "5", "6"];
let hardv;



//Modes
function easy() {
    if (mode !== "easy") {
        resetScore();
    }

    mode = "easy";
    Continue();
}


function normal() {
    if (mode !== "normal") {
        resetScore();
    }

    mode = "normal";
    Continue();
}


function hard() {
    if (mode !== "hard") {
        resetScore();
    }

    mode = "hard";
    Continue();
}






//Rock
function rockWin() {
    document.getElementById("result").innerHTML = "You Win!👏";
    document.getElementById("enemy").innerHTML = "✌";
    document.getElementById("player").innerHTML = "👊";
    score++;
}

function rockLose() {
    document.getElementById("result").innerHTML = "You Lose!👎";
    document.getElementById("enemy").innerHTML = "🖐";
    document.getElementById("player").innerHTML = "👊";
    score--;
}

function rockDraw() {
    document.getElementById("result").innerHTML = "Draw🤷‍♂️";
    document.getElementById("enemy").innerHTML = "👊";
    document.getElementById("player").innerHTML = "👊";
}






//Paper
function paperWin() {
    document.getElementById("result").innerHTML = "You Win!👏";
    document.getElementById("enemy").innerHTML = "👊";
    document.getElementById("player").innerHTML = "🖐";
    score++;
}

function paperLose() {
    document.getElementById("result").innerHTML = "You Lose!👎";
    document.getElementById("enemy").innerHTML = "✌";
    document.getElementById("player").innerHTML = "🖐";
    score--;
}

function paperDraw() {
    document.getElementById("result").innerHTML = "Draw🤷‍♂️";
    document.getElementById("enemy").innerHTML = "🖐";
    document.getElementById("player").innerHTML = "🖐";
}






//Scissor
function scissorWin() {
    document.getElementById("result").innerHTML = "You Win!👏";
    document.getElementById("enemy").innerHTML = "🖐";
    document.getElementById("player").innerHTML = "✌";
    score++;
}

function scissorLose() {
    document.getElementById("result").innerHTML = "You Lose!👎";
    document.getElementById("enemy").innerHTML = "👊";
    document.getElementById("player").innerHTML = "✌";
    score--;
}

function scissorDraw() {
    document.getElementById("result").innerHTML = "Draw🤷‍♂️";
    document.getElementById("enemy").innerHTML = "✌";
    document.getElementById("player").innerHTML = "✌";
}







//After playing
function afterPlay(playingIn) {
    document.getElementById("score").innerHTML = score;
    if (score < 0) {
        document.getElementById("state").innerHTML = "Loser!";
    }

    if (score === 0) {
        document.getElementById("state").innerHTML = "Duh...";
    }


    if (score > 0) {
        document.getElementById("state").innerHTML = "Keep it up!";
    }

    document.getElementById("vs").innerHTML = "v/s";
    document.getElementById("hide").style.visibility = 'hidden';
    document.getElementById("continue").style.visibility = "visible";
    document.getElementById("player").style.opacity = "100%";

}





//Play
function playRock() {
    enemy = enemyValue[Math.floor(Math.random() * enemyValue.length)];
    console.log(mode);


    if (mode === "easy") {
        easyv = easyValue[Math.floor(Math.random() * easyValue.length)];
        if (easyv !== "1") {
            rockWin();
        } else if (easyv === "1") {
            rockLose();
        }
    }



    if (mode === "normal") {
        if (enemy === "r") {
            rockDraw();
        } else if (enemy === "p") {
            rockLose();
        } else if (enemy === "s") {
            rockWin();
        }
    }




    if (mode === "hard") {
        hardv = hardValue[Math.floor(Math.random() * hardValue.length)];
        console.log(hardv);
        if (hardv === "6") {
            rockWin();
        }
        if (hardv !== "6") {
            rockLose();
        }
    }


    afterPlay("rock");
}









function playPaper() {
    enemy = enemyValue[Math.floor(Math.random() * enemyValue.length)];

    if (mode === "easy") {
        easyv = easyValue[Math.floor(Math.random() * easyValue.length)];
        if (easyv !== "1") {
            paperWin();
        } else if (easyv === "1") {
            paperLose();
        }
    }

    if (mode === "normal") {
        if (enemy === "r") {
            paperWin();
        }

        if (enemy === "p") {
            paperDraw();
        }

        if (enemy === "s") {
            paperLose();
        }
    }


    if (mode === "hard") {
        hardv = hardValue[Math.floor(Math.random() * hardValue.length)];
        console.log(hardv);
        if (hardv === "6") {
            paperWin();
        }
        if (hardv !== "6") {
            paperLose();
        }
    }



    afterPlay("paper");
}










function playScissors() {
    enemy = enemyValue[Math.floor(Math.random() * enemyValue.length)];


    if (mode === "easy") {
        easyv = easyValue[Math.floor(Math.random() * easyValue.length)];
        if (easyv !== "1") {
            scissorWin();
        } else if (easyv === "1") {
            scissorLose();
        }
    }


    if (mode === "normal") {
        if (enemy === "r") {
            scissorLose();
        }




        if (enemy === "p") {
            scissorWin();
        }




        if (enemy === "s") {
            scissorDraw();
        }
    }


    if (mode === "hard") {
        hardv = hardValue[Math.floor(Math.random() * hardValue.length)];
        console.log(hardv);
        if (hardv === "6") {
            scissorWin();
        }
        if (hardv !== "6") {
            scissorLose();
        }
    }

    afterPlay("scissor");
}





//Extras
function Continue() {
    document.getElementById("player").innerHTML = "🖐";
    document.getElementById("enemy").innerHTML = "✌";
    document.getElementById("vs").innerHTML = "";
    document.getElementById("hide").style.visibility = "visible";
    document.getElementById("continue").style.visibility = "hidden";
    document.getElementById("player").style.opacity = "80%";
    document.getElementById("result").innerHTML = "";
}


function resetScore() {
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("state").innerHTML = "Duh...";
    Continue();
}





//to make the popover work
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});