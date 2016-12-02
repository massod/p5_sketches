

function setup()
{   background(255,0,0);
    createCanvas(400,400);
}

function draw()
{
   ellipse(width/2, height/2, 50,50);
   if( mouseX > width || mouseX < 0)
   {
      fill(255, 0,0);
   }
}
