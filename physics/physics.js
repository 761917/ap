var balls;
var tvec;
var tmomx,tmomy;
var tposx,tposy;
var tr,tg,tb;
function setup() {
  createCanvas(windowWidth, windowHeight);
  balls=[];
  tvec=createVector(0,0);
  for(var x=0; x<15; x++)
  {
    for(var y=0; y<15; y++)
    {
      balls.push(new Ball((x+1)*width/16,(y+1)*height/16,0,0,random(3)+3));
    }
  }
}

function draw() {
  background(0);
  for(var i=balls.length-1; i>=0; i--)
    balls[i].a=createVector(0,0);
  for(var i=0; i<balls.length; i++)
  {
    balls[i].move();
    if(balls[i].m>200)
      balls[i].nova(1);
    for(var j=i+1; j<balls.length; j++)
    {
      if(i!=balls.length-1)
         balls[i].gravity(balls[j]);
    }
  }
}
function mouseClicked()
{
  balls.push(new Ball(mouseX,mouseY,mouseX-pmouseX,mouseY-pmouseY,5));
}