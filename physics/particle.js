function Ball(x,y,vx,vy,m,r,g,b)
{
  this.p=createVector(x,y);
  this.v=createVector(vx,vy);
  this.a=createVector(0,0);
  this.r=255;
  this.g=255;
  this.b=0;
  this.m=m;
  this.move=function()
  {
    this.v.add(this.a);
    if(this.p.y>height)
      this.v.y=-abs(this.v.y);
    else if(this.p.y<0)
      this.v.y=abs(this.v.y);
    if(this.p.x>width)
      this.v.x=-abs(this.v.x);
    else if(this.p.x<0)
      this.v.x=abs(this.v.x);
    this.p.add(this.v);
    fill(this.r,this.g,this.b);
    ellipse(this.p.x,this.p.y,this.m,this.m);
  }
  this.gravity=function(other)
  {
    tvec=createVector(this.p.x-other.p.x,this.p.y-other.p.y);
    if(this.p.dist(other.p)>(this.m+other.m)/2)
      tvec.setMag(this.m*other.m*20/pow(this.p.dist(other.p),1.9));
    else
    {
      this.conglom(other);
    }
    this.a.add(tvec.x/this.m,tvec.y/this.m);
    other.a.add(tvec.x/other.m,tvec.y/other.m);
  }
  this.conglom=function(other)
  {
    tmomx=((this.m*this.v.x)+(other.m*other.v.x))/(this.m+other.m);
    tmomy=((this.m*this.v.y)+(other.m*other.v.y))/(this.m+other.m);
    tposx=((this.m*this.p.x)+(other.m*other.p.x))/(this.m+other.m);
    tposy=((this.m*this.p.y)+(other.m*other.p.y))/(this.m+other.m);
    balls.push(new Ball(tposx,tposy,tmomx,tmomy,this.m+other.m));
    for(var i=balls.length-1; i>=0; i--)
    {
      if(balls[i]==this || balls[i]==other)
        balls.splice(i,1);
    }
  }
  this.nova=function(honk)
  {
    balls.push(new Ball(this.p.x+this.m/8,this.p.y+this.m/8,this.v.x+m/(random(10)+25),this.v.y+m/(random(10)+25),this.m/(random(5)+6)));
    balls.push(new Ball(this.p.x-this.m/8,this.p.y+this.m/8,this.v.x-m/(random(10)+25),this.v.y+m/(random(10)+25),this.m/(random(5)+6)));
    balls.push(new Ball(this.p.x+this.m/8,this.p.y-this.m/8,this.v.x+m/(random(10)+25),this.v.y-m/(random(10)+25),this.m/(random(5)+6)));
    balls.push(new Ball(this.p.x-this.m/8,this.p.y-this.m/8,this.v.x-m/(random(10)+25),this.v.y-m/(random(10)+25),this.m/(random(5)+6)));
    
    balls.push(new Ball(this.p.x+this.m/6,this.p.y,this.v.x+m/(random(10)+15),this.v.y,this.m/(random(5)+6)));
    balls.push(new Ball(this.p.x,this.p.y+this.m/6,this.v.x,this.v.y+m/(random(10)+15),this.m/(random(5)+6)));
    balls.push(new Ball(this.p.x-this.m/6,this.p.y,this.v.x-m/(random(10)+15),this.v.y,this.m/(random(5)+6)));
    balls.push(new Ball(this.p.x,this.p.y-this.m/6,this.v.x,this.v.y-m/(random(10)+15),this.m/(random(5)+6)));
    for(var i=balls.length-1; i>=0; i--)
    {
      if(balls[i]==this)
        balls.splice(i,1);
    }
  }
}