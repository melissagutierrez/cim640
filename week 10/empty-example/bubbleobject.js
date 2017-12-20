var bubble1;
var bubble2;

var multiBubble = [];

function setup(){
  createCanvas(400,400);  
    
   // bubble1 = new bubble(random(width), random (height), random(100));
  //  bubble2 = new bubble(random(width), random (height), random(100));

    for(var i = 0; i <100; i++){
        multiBubble.push(new bubble(random(width), random (height), random(100)));
}

function draw(){
background(255);
//bubble1.display();
//bubble2.display();
    
}

  //  multiBubble[49].display();
    
    for(var i = 0; i < multiBubble.length; i++){
        var bubbleC = color(random(256),random (256),random(256));
        multibubble.push)new bubble(random(width), random(height),
random(100), bubbleC));
    }
} 

function bubble(tempX,tempY,tempDiameter,c){
this.x = tempX;
this.y = tempY;
this.diameter = tempDiameter;
this.color = c;
    
this.display = function(){
    fill(color);
    
ellipse(this.x, this.y, this.diameter, this.diameter);
}
    
}






