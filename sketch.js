var mr, fr;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 80, 50);
  fr.shapeColor = "green";
  fr.debug = true;

  mr = createSprite(200, 200, 50, 80);
  mr.shapeColor = "green";
  mr.debug = true;

  dr = createSprite(600, 100, 50, 80);
  dr.shapeColor = "blue";
  dr.debug = true;
  dr.velocityX = -6;

  pr = createSprite(100, 100, 50, 80);
  pr.shapeColor = "blue";
  pr.debug = true;
  pr.velocityX = 6;
}

function draw() {
  background(0);
    

  mr.x = World.mouseX;
  mr.y = World.mouseY;
  if (isTouching(mr,pr)) {
    //arguments are passed during calling of the functions
      pr.shapeColor = "red";
      mr.shapeColor = "red";
    }
    else{
      pr.shapeColor = "green";
      mr.shapeColor = "green";    
    }
    if (isTouching(mr,dr)) {
      //arguments are passed during calling of the functions
        dr.shapeColor = "red";
        mr.shapeColor = "red";
      }
      else{
        dr.shapeColor = "green";
        mr.shapeColor = "green";    
      }

      if (isTouching(mr,fr)) {
        //arguments are passed during calling of the functions
          fr.shapeColor = "red";
          mr.shapeColor = "red";
        }
        else{
          fr.shapeColor = "green";
          mr.shapeColor = "green";    
        }
      
    
  bounceOff() ;
  drawSprites();
}


