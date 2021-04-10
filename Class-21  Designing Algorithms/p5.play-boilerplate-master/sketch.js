var movingRect;
var fixedRect;
var gO1,gO2,gO3;



function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);
  gO1 = createSprite(100,400,50,50);
  gO2 = createSprite(300,400,50,50);
  gO3 = createSprite(800,400,50,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  gO1.shapeColor = "green";
  gO2.shapeColor = "green";
  gO3.shapeColor = "purple";
  
  gO2.velocityX = 3;
  gO3.velocityX = -3;
}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY; 

  if(isTouching(movingRect,gO2)){
    gO2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  else{
    gO2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

   bounceOff(gO2,gO3);
  drawSprites();
}

