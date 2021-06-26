
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var Ground;
var left,right;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   var ball_option ={
    isStatic:false,
	restitution:0.7,
	friction:0,
	density:1.2
	}
	
	ball=Bodies.circle(200,100,20,ball_option);
	World.add(world,ball);


    Ground= new ground(width/2,670,width,20)
    left = new ground(700,600,20,120);
	right = new ground(500,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("green");
  Ground.display();
  left.display();
  right.display();
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:30,y:30});
	}
  }
  




