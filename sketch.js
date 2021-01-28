
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new roof(310,100,350,50);


	bob1=new Bob(200,400,30);
	bob2 = new Bob(260,400,30);
	bob3 = new Bob(320,400,30);
	bob4 = new Bob(380,400,30);
	bob5 = new Bob(440,400,30);


	rope1=new Rope(bob1.body,ground.body,0,-300)
	//World.add(world,rope1);
	rope2=new Rope(bob2.body,ground.body,0,-300)
	rope3=new Rope(bob3.body,ground.body,0,-300)
	rope4=new Rope(bob4.body,ground.body,0,-300)
	rope5=new Rope(bob5.body,ground.body,0,-300)



//	world.add (world,rope1)
	//rope2 

	Engine.run(engine);
  
}


function draw() {

background(68,234,246)
  rectMode(CENTER);
  //background(255,255,255);
  ground.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display()
  rope2.display();
    rope3.display();
	rope4.display();
	rope5.display();

 //rope1 = new Rope(bob1,ground,-100,0)
 keyPressed()
 
}
function keyPressed(){
	if(keyCode ==="space"){
	Matter.Body.applyforce(bob5.body,bob5.position={
		x:800,
		y:0
	} )	
	}
}








