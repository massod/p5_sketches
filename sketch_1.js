var circle = [100];

function setup()
{  
    createCanvas(400,400);
    for( var i = 0; i < circle; i++)
    {
        circle[i] = new Bubble();
    }
}

function draw()
{
  background(0);
  for( var i = 0; i < circle.length; i++)
  {
       circle[i].display();
      circle[i].move();
  }
}


function Bubble()
{
     this.x = 200;
     this.y = 200;
     this.dia = 35;
    
     this.display = function()
     {
         noFill();
         stroke(255);
         ellipse(this.x, this.y, this.dia, this.dia);
     }
     
     this.move = function()
     {
         this.x += random(-2, 2);
         this.y += random(-2, 2);
     }
}
