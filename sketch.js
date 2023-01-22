//HUICHUAN WANG
//28-11-2022

let newAng = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0,50);
  stroke(255,70);
  //frameRate(30);
  //newAng = map(mouseX , 0 , width, 0, TWO_PI);
  
  //if(frameCount % 2 == 0) 
  circle(random(width),random(height),random(5,20));
  noFill()
  circle(width/2,height*1.8,width*2);
  
  if(newAng <= TWO_PI) {
    newAng = newAng + 0.01;
  }else{
    newAng = 0;
  }
  
  push();
  translate(width/2,height*0.8);
  branch(200);
  //scale(-1,0);
  //branch(250);
  pop();
}

function branch(len){
  
  push();
  //strokeWeight(sqrt(len)*0.5);
  fill(255,10);
  circle(0,0,len)
  line(0,0,0,-len);
  
  if(len>4){
  
  translate(0,-len);
    
  rotate(newAng);
  branch(len*0.67);
 
  rotate(-newAng);
  branch(len*0.67)

  rotate(newAng);
  branch(-len*0.67)

  rotate(-newAng);
  branch(-len*0.67)
  //line(0,0,0,-len*0.67);
  }
  pop();
}

function drawForest(){
    let Len = random(20,70);
    push();
    translate(random(width), height*0.8);
    rotate(PI);
    branch(Len); // initial length and facing up
    pop();
}
