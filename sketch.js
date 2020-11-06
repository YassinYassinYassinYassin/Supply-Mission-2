var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1, side2, side3;
var side1body, side2body, side3body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	side1 = createSprite(400, 600, 200, 10);
	side1.shapeColor = "yellow";
	side2 = createSprite(500, 555, 10, 100);
	side2.shapeColor = "yellow";
	side3 = createSprite(300, 555, 10, 100);
	side3.shapeColor = "yellow";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	side1body = Bodies.circle(width/2 , 600 , 25, {restitution: 0.5, isStatic:true})
	World.add(world, side1body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	
  if (packageSprite.y > 560){
	Matter.Body.setStatic(packageBody, true)
  }

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  side1.x= side1body.position.x
  side1.y= side1body.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
  }
}