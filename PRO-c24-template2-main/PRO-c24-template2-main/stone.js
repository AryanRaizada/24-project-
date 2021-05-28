class stone
{
  constructor(x,y)
  {
    var options = 
    {
      'restitution':0.8 , 
      'density':12 , 
      'friction':0.9
    }
    this.body = Bodies.rectangle(x,y,40,60,options);
    World.add(world,this.body);
  }

   display()
   {
     push()

     rectMode(CENTER)

     fill("red")

     rect(this.body.position.x,this.body.position.y,40,60)

     pop()
   }

}