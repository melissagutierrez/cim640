var frameArray = [];
var counter = 0;
function setup (){
    
    
  createCanvas(500,500);
    
    
  frameArray[0]= loadImage ("assets/Thatwasclose0.jpg")  
  frameArray[0]= loadImage ("assets/Thatwasclose1.jpg")
  frameArray[0]= loadImage ("assets/Thatwasclose2.jpg")  
  frameArray[0]= loadImage ("assets/Thatwasclose3.jpg")  



    
}

function draw (){
    
 image(frameArray[counter],0,0);
 counter++;
}

image(frameArray[counter],0,0);
counter++;
if(counter == frameArray.length){
  counter = 0;  
    
}

} 