var centerX = 0;
var centerY = 0;

var bgChange, bgChange1;

var bgImage, bgImage2, currentBgImage;

var hitZoneX = 100;
var hitZoneY = 100;

var changeColor = false;

var randomColor = [0, 0, 0];

var showHide = true;

var showHideButton;


function preload() {
    bgImage = loadImage("images/museum.jpg");
    bgImage2 = loadImage("images/halal.jpg");
    bgImage3 = loadImage("images/CalleOcho.jpg");
}

function setup() {
    createCanvas(600, 600);
    centerX = width / 2;
    centerY = height / 2;

    bgChange = createButton('scenario 1');
    bgChange.position(10, 500);
    bgChange.mousePressed(bgFunction);

    bgChange1 = createButton('scenario 2');
    bgChange1.position(110, 500);
    bgChange1.mousePressed(bgFunction1);
    
   bgChange2 = createButton('scenario 3');
    bgChange2.position(200, 500);
    bgChange2.mousePressed(bgFunction2);



    currentBgImage = bgImage;
}

function draw() {
    image(currentBgImage, 0, 0);

    if (changeColor == true) {
        randomColor[0] = random(255);
        randomColor[1] = random(255);
        randomColor[2] = random(0);

    }


    if (showHide == true) {
        fill(randomColor[0], randomColor[1], randomColor[2]);

        strokeWeight(2);
        //ears
        ellipse(centerX - 70, centerY - 90, 60, 60);
        ellipse(centerX + 70, centerY - 90, 60, 60);
        ellipse(centerX - 70, centerY - 80, 30, 30);
        ellipse(centerX + 70, centerY - 80, 30, 30);
        //face
        ellipse(centerX, centerY, 175, 200);
        //nose
        ellipse(mouseX, mouseY + 10, 40, 40);
        //eyes
        fill(0)
        ellipse(centerX - 40, centerY - 20, 40, 40);
        ellipse(centerX + 40, centerY - 20, 40, 40);
        fill(255)
        ellipse(centerX - 40, centerY - 10, 10, 10);
        ellipse(centerX + 40, centerY - 10, 10, 10);
        //mouth
        arc(centerX - 5, centerY + 30, 10, 10, 0, PI)
        arc(centerX + 5, centerY + 30, 10, 10, 0, PI)
        line(centerX, centerY+20, centerX, centerY+30)
      
    
    }

    strokeWeight(2);

    

    ellipse(centerX, centerY, 10, 10);
    if (mouseX > 290 && mouseX < 310 && mouseY > 290 && mouseY < 310) {
        changeColor = true;
    } else {
        changeColor = false;
    }

}

function bgFunction() {
    currentBgImage = bgImage;
}

function bgFunction1() {
    currentBgImage = bgImage2;
}

function bgFunction2() {
    currentBgImage = bgImage3;
}

