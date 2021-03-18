
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var dR, dL, dB;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Rect(width/2,height/2 + 250, width, 15);

	paper = new Paper(100, height/2, 100)

	dL = new Rect(width/2,height/2 + 240, 10, 100);

	dR = new Rect(width/2 + 115,height/2 + 240, 10, 100);
	
	dB = new Rect(width/2 + 65,height/2 + 240, 100, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225,225,225);
  Engine.update(engine);

  KeyPressed();

  ground.display();
  paper.display();
  dR.display();
  dL.display();
  dB.display();


  
  drawSprites();


 
}

function KeyPressed(){

if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x : 85, y : -85});
}


}

