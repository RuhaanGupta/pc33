const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}
function setup() {
  var canvas = createCanvas(500,400);
  engine = Engine.create();
  world = engine.world;
  snow1 = new Snow(200,0);
  snow2 = new Snow(400,0);
  snow3 = new Snow(150,0);

}




function draw() {
  background(backgroundImg);
  Engine.update(engine);
snow1.display();
snow2.display();
snow3.display();
  
}