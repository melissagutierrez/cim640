var interfaceItems = [];

var brushSize = 50;

function setup(){
  createCanvas(600,900);

  interfaceItems.push(new interface(100,100,50, color(60,60,0)));

  interfaceItems.push(new interface(200,100,50, color(0,80,90)));

  interfaceItems.push(new interface(300,100,50, color(0,100,0)));
  
    
    interfaceItems.push(new interface(400,100,50, color(0,50,0)));

}


function draw(){
  fill(100);
  ellipse(mouseX,mouseY, brushSize,brushSize);

  interfaceItems[0].check();
  interfaceItems[0].display();
  interfaceItems[1].check();
  interfaceItems[1].display();
  interfaceItems[2].check();
  interfaceItems[2].display();
  interfaceItems[3].check();
  interfaceItems[3].display();
  //console.log(interfaceItems[0].check());
}

function mousePressed(){
  if(interfaceItems[0].check() == true){
    console.log("pressed red button");
    brushSize++;
  }

  if(interfaceItems[1].check() == true){
    brushSize--;
  }
}


function interface(tempX, tempY, tempBoxSize, tempColor){
  this.x  = tempX;
  this.y = tempY;
  this.boxSize = tempBoxSize;
  this.setFill = tempColor;
  this.overlay = false;

  this.display = function(){
    fill(this.setFill)
    ellipse(this.x, this.y, this.boxSize, this.boxSize);

    if(this.overlay == true){
      fill(127,200);
      ellipse(this.x, this.y, this.boxSize, this.boxSize);
    }
  }

  this.check = function(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }

}