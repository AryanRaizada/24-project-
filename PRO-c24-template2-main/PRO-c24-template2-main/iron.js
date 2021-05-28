class iron
{
  constructor(x,y)
  {
    var ilone = 
    {
      'restitution':0.8 , 
      'density':30 , 
      'friction':3
    }
    this.body = Bodies.rectangle(x,y,80,80,ilone);
    World.add(world,this.body);
  }

   display()
   {
     push()

     rectMode(CENTER)

     fill("black")

     rect(this.body.position.x,this.body.position.y,80,80)

     pop()
   }

}