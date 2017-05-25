function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  fill(0,0,255);
  rect(0,2*height/3,width/2,height/3);
  fill(255,0,0);
  rect(width/2,2*height/3,width/2,height/3);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}