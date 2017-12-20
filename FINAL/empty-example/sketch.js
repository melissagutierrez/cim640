//mouse states and mouse events on sprites
//click and hold the mouse button while overing on the sprites

var ban;
var sub;
var mis;
var got;

function preload() 
{
  soundtrack = loadSound('assests/train.mp3');
}

function setup() {
  createCanvas(1000,650);
    
      // loop sound
  soundtrack.loop();
    
  ban = loadAnimation("assests/banner.png");
    
  mis = createSprite(500, 194);
  mis.addAnimation("normal", "assests/10001.png");
  mis.addAnimation("full", "assests/10004.png");
  var anim = mis.addAnimation("train", "assests/10004.png", "assests/10027.png");
    
  stu = createSprite(500,368);
  stu.addAnimation("normal", "assests/20001.png");
  stu.addAnimation("full", "assests/20004.png");
  var anim = stu.addAnimation("transform", "assests/20004.png", "assests/20033.png");

  got = createSprite(500,542);
  got.addAnimation("normal", "assests/30001.png");
  got.addAnimation("full", "assests/30004.png");
  var anim = got.addAnimation("transform", "assests/30004.png", "assests/30035.png");


  mis.onMouseOver = function() {
  this.changeAnimation("full");
  }
  mis.onMouseOut = function() {
  this.changeAnimation("normal");
  }
  mis.onMousePressed = function() {
  this.changeAnimation("train");
  this.animation.goToFrame(this.animation.getLastFrame());
  }
  mis.onMouseReleased = function() {
  this.changeAnimation("train");
  this.animation.goToFrame(0);
  }


  stu.onMouseOver = function() {
  this.changeAnimation("full");
  }
  stu.onMouseOut = function() {
  this.changeAnimation("normal");
  }
  stu.onMousePressed = function() {
  this.changeAnimation("transform");
  this.animation.goToFrame(this.animation.getLastFrame());
  }
  stu.onMouseReleased = function() {
  this.changeAnimation("transform");
  this.animation.goToFrame(0);
  }


  got.onMouseOver = function() {
  this.changeAnimation("full");
  }
  got.onMouseOut = function() {
  this.changeAnimation("normal");
  }
  got.onMousePressed = function() {
  this.changeAnimation("transform");
  this.animation.goToFrame(this.animation.getLastFrame());
  }
  got.onMouseReleased = function() {
  this.changeAnimation("transform");
  this.animation.goToFrame(0);
  }
}

function draw() {
  background(255,255,255);

  animation(ban,500,53)


  drawSprites();
}
