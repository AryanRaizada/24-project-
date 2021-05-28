const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stoner;
var ironed;
var circuled;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stoner = new stone(200,580);
    ironed = new iron(500,580);
    circuled = new circle(800,240,80);

}

function draw()
{
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stoner.display();
    ironed.display();
    circuled.display();
}