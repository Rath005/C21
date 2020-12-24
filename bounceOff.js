function bounceOff() {
    if(dr.x - pr.x < dr.width/2 + pr.width/2  && pr.x - dr.x < dr.width/2 + pr.width/2){
     pr.velocityX = pr.velocityX * (-1);
     dr.velocityX = dr.velocityX * (-1);
    }
    if(dr.y - pr.y < dr.height/2 + pr.height/2  && pr.y - dr.y < dr.height/2 + pr.height/2){
     pr.velocityY = pr.velocityY * (-1);
     dr.velocityY = dr.velocityY * (-1);
    }
   }