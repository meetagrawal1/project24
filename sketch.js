
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1285,600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,585,10000,20);
	//ball = new Ball(100,100,);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
 // ball.display();

  drawSprites();
 
}



