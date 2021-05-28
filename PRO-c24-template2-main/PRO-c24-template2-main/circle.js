class circle
{ 
    constructor(x,y,r)
    {
      var cliomne = 
      {
        'restitution':0.3 , 
        'density':1 , 
        'friction':5
      }
      this.body = Bodies.circle(x,y,(r-20)/2,cliomne);
      World.add(world,this.body);

      this.r = r
    }
  
     display()
     {
       push()
  
       ellipseMode(CENTER)
  
       fill("blue")
  
       ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
  
       pop()
     } 
 }