var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var bottomWall, leftWall, rightWall;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body.setStatic(body, isStatic);

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width / 2, height - 15, width, 30);
	groundSprite.shapeColor = color(255, 0, 0);

	bottomWall = createSprite(width / 2, height - 37, width / 4, 15);
	bottomWall.shapeColor = color(0, 255, 0);

	leftWall = createSprite(307.5, 610, 15, 95);
	leftWall.shapeColor = color(0, 255, 0);

	rightWall = createSprite(492.5, 610, 15, 95);
	rightWall.shapeColor = color(0, 255, 0);

	engine = Engine.create();
	world = engine.world;

	var packageOptions = {
		restitution: 0.4,
		isStatic: true
	}
	packageBody = Bodies.circle(width / 2, 200, 25, packageOptions);
	World.add(world, packageBody);

	bottomWall = Bodies.rectangle(width / 2, height - 37, width / 4, 15, { isStatic: true });
	World.add(world, bottomWall);

	leftWall = Bodies.rectangle(307.5, 610, 15, 95, { isStatic: true });
	World.add(world, leftWall);

	rightWall = Bodies.rectangle(492.5, 610, 15, 95, { isStatic: true });
	World.add(world, rightWall);

	ground = Bodies.rectangle(width / 2, height - 15, width, 30, { isStatic: true });
	World.add(world, ground);

	console.log(ground);
	//	Engine.run(engine);

}


function draw() {

	background(0);
	Engine.update(engine);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}