var icons, numIcons;
var table;
var questions, cur;
var player;

function preload()
{
  table=loadTable("data/euro.csv","csv","header"); 
}
function setup() { 
  questions=[];
  createCanvas(windowWidth,windowHeight);
  for(var r=0; r<table.getRowCount(); r++)
  {
    questions.push(new Question(r));
  }
  cur=0;
  player={money:10,people:10,clergy:10,army:10};
  textAlign(CENTER);
  textSize(width/30);
}

function draw() {
  background(0);
  fill(0,255,0);
  rect(0,2*height/3,width/2,height/3);
  fill(255,0,0);
  rect(width/2,2*height/3,width/2,height/3);
  fill(255);
  text(player.money+","+player.people+","+player.clergy+","+player.army,width/2,height/10);
  text(questions[cur].text,width/4,height/5,width/2,2*height/3);
  text("YES",width/4,5*height/6);
  text("NO",3*width/4,5*height/6);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textSize(width/30);
}
function mousePressed()
{
  if(mouseX<width/2 && mouseY>2*height/3 && cur+1<table.getRowCount())
  {
    questions[cur].yes(true);
    cur++;
  }
  if(mouseX>width/2 && mouseY>2*height/3 && cur+1<table.getRowCount())
  {
    questions[cur].yes(true);
    cur++;
  }
}