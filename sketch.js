var fixedrect,movingrect


function setup() {
  createCanvas(800,400);
  
  fixedrect=createSprite(300,100,80);
  movingrect=createSprite(300,300,80,50);
  movingrect.debug=true;
  movingrect.velocityY=-3;
  fixedrect.debug=true;
  fixedrect.velocityY=3;
  fixedrect.shapeColor="red";
  movingrect.shapeColor="green";
}

function draw() {
  background(255,25,255); 
  //movingrect.x=mouseX;
  //movingrect.y=mouseY; 
  if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2){
      fixedrect.velocityX=fixedrect.velocityX*(-1);
      movingrect.velocityX=movingrect.velocityX*(-1);
    }

     if( movingrect.y-fixedrect.y< fixedrect.height/2+movingrect.height/2
      && fixedrect.y-movingrect.y < fixedrect.height/2+movingrect.height/2){
        fixedrect.velocityY=fixedrect.velocityY*(-1);
        movingrect.velocityY=movingrect.velocityY*(-1);
  }
  
  drawSprites();
}