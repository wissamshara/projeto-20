var chao, engine, world
var caixa
var tv
var bola
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	var chao_options = {
		isStatic: true
	}
	var caixa_options = {
		isStatic: false,
		restitution: 0.5
	}
	var tv_options = {
		isStatic: false,
		restitution: 0.5
	}
	var bola_options = {
		isStatic: false,
		restitution: 1.0
	}
	//Crie os Corpos Aqui.
	chao = Bodies.rectangle(600, 698, 1200, 2, chao_options)
	World.add(world, chao)

	caixa = Bodies.rectangle(100, 200, 50, 50, caixa_options)
	World.add(world, caixa)
	

	tv = Bodies.rectangle(280, 60, 80, 40, tv_options)
	World.add(world, tv)

	bola = Bodies.circle(280, 60, 70, bola_options)
	World.add(world, bola)
    Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("lightgreen");

	drawSprites();
	Engine.update(engine)
	rect(chao.position.x, chao.position.y, 1200, 2)
	rect(caixa.position.x, caixa.position.y, 50, 50)
	rect(tv.position.x, tv.position.y, 80, 40)
	ellipse(ball.position.x, bola.position.y, 70)
}



