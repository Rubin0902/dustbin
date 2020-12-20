
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(displayWidth,displayHeight);
    

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(displayWidth/2,600, displayWidth, 20);
	red1 = new Rect((displayWidth/2+displayWidth/3),540,10,100);
	red3 = new Rect((displayWidth/2+displayWidth/3)+150,540,10,100);
	red2 = new Rect((displayWidth/2+displayWidth/3)+75,585,150,10);
	ball = new Ball(displayWidth/6, 100, 70, 70);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  red2.display();
  red1.display();
  red3.display();
  drawSprites();
 
}
function keyPressed()
{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:600,y:-190})
}


