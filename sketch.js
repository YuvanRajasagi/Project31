const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(482,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-10, width, 20);

  division = new Division(width/2,680,480,10);

  // for Divisions
  for(let i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height - divisionHeight/2, 10, divisionHeight));
  }

  // for plinko
  for(let j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75,10));
  }

  for(let j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,150,10));
  }

  for(let j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,225,10));
  }

  for(let j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,300,10));
  }

}

function draw() {
  background("black");
  Engine.update(engine);
  
  ground.display();

  // for loop for displaying divisions 
  for(let k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(let a = 0; a < plinkos.length; a++){
    plinkos[a].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for(let a = 0; a < particles.length; a++){
    particles[a].display();
  }

  division.display();
  drawSprites();
}