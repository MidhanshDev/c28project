
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground,boy,stone;
var mango1,mango2,mango3,mango4,mango5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,10);
	tree = new Tree(600,700,400,400);
	stone = new Stone(210,610,20);
	boy = new Boy(300,640,50,50);
	mango1 = new Mango(500,370,30);
	mango2 = new Mango(590,330,30);
	mango3 = new Mango(650,260,30);
	mango4 = new Mango(670,330,30);
  mango5 = new Mango(750,360,30);
  sling = new Slingshot(stone.body,{x:240,y:590});
}

function draw() {
  background("white");
  Engine.update(engine);

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}
function detectcollision(stone,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
   Matter.Body.setStatic(mango.body,false)
  }
}
function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone.body,{x:240,y:590});
sling.attach(stone.body);
}
}
/*function detectcollision(stone,mango2){
  mango2BodyPosition=mango2.body.position
  stoneBodyPosition=stone.body.position
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango2BodyPosition.x, mango2BodyPosition.y)
  if(distance<=mango2.r+stone.r){
     Matter.Body.setStatic(mango2.body,false)
    }
  }
  function detectcollision(stone,mango3){
    mango3BodyPosition=mango3.body.position
    stoneBodyPosition=stone.body.position
    
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango3BodyPosition.x, mango3BodyPosition.y)
    if(distance<=mango3.r+stone.r){
       Matter.Body.setStatic(mango3.body,false)
      }
    }
    function detectcollision(stone,mango4){
      mango4BodyPosition=mango4.body.position
      stoneBodyPosition=stone.body.position
      
      var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango4BodyPosition.x, mango4odyPosition.y)
      if(distance<=mango4.r+stone.r){
         Matter.Body.setStatic(mango4.body,false)
        }
      }
    function detectcollision(stone,mango5){
      mango5BodyPosition=mango5.body.position
      stoneBodyPosition=stone.body.position
      
      var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango5BodyPosition.x, mango5BodyPosition.y)
      if(distance<=mango5.r+stone.r){
         Matter.Body.setStatic(mango5.body,false)
        }
      } 
    }*/
