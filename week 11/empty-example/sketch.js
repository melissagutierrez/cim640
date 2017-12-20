var pics = [];

//var ball = ["football", "basketball", "soccer"];

var targetPosX = [100, 300, 500];

var targetPosY = 100;

//var overlayArray = [false, false, false];
 var currentPosition - -1;

function setup() {
    createCanvas(600, 400);
    pics[0] = loadImage("assests/football.png");

    pics[1] = loadImage("assests/basketball.png");

    pics[2] = loadImage("assests/soccer.png");
}

function draw() {

    background(255);
    rectMode(CENTER);
    imageMode(CENTER);

    textSize(32);
    text("Find the soccer ball?", 50, 250);

    for (var i = 0; i < targetPosX.length; i++) {
        if (mouseX > targetPosX[i] - 100 && mouseX < targetPosX[i] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
            image(pics[i], targetPosX[i], targetPosY);
               currenPosition = -1;
            console.log(currentPosition);
        } else {
            rect(targetPosX[i], 100, 200, 200);
        }
    }

if(answer==currentPosition){
    console.log ("You guessed correctly");
    text("You guessed correctly",19,300);
}else if(currentPosition == 0 || currentPostion == 1){
    console.log("You guessed incorrectly");
}

currentPosition = -1;