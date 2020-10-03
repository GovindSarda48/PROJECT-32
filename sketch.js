const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "ATTACHED";
var bg = "bg.png";

var score = 0;

var backgroundImg;


function preload() {
  
   
    getTime();
   
  }
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(350,300,300,20);
  stand2 = new Ground(650,160,200,20);

  ground1 = new Ground(400,390,800,20);


  //level 1 
  block1 = new Block(280,260,30,40);
  block2 = new Block(315,260,30,40);
  block3 = new Block(350,260,30,40);
  block4 = new Block(385,260,30,40);
  block5 = new Block(420,260,30,40);
  block6 = new Block(455,260,30,40);
  block7 = new Block(245,260,30,40);

  //level 2

  block8 = new Blocks(280,220,30,40);
  block9 = new Blocks(315,220,30,40);
  block10 = new Blocks(350,220,30,40);
  block11 = new Blocks(385,220,30,40);
  block12 = new Blocks(420,220,30,40);

  //level 3 

  block13 = new BlocksT(315,180,30,40);
  block14 = new BlocksT(350,180,30,40);
  block15 = new BlocksT(385,180,30,40);

  //last level 


  block16 = new BlocksF(350,115,30,40);




  //pyramid 2 
block17 = new Block(650,120,30,40);
block18 = new Block(685,120,30,40);
block19 = new Block(720,120,30,40);
block20 = new Block(615,120,30,40);
block21 = new Block(590,120,30,40);

block22 = new Blocks(650,80,30,40);
block23  = new Blocks(685,80,30,40);
block24 = new Blocks(615,80,30,40);

block25 = new BlocksT(650,40,30,40);






polygon1  = new Polygon(100,150);


h1 = new HexagonLauncher(polygon1.body,{x:100,y:100});

  








  



Engine.run(engine);
}

function draw() {
  if(backgroundImg !== undefined){
    background(backgroundImg);
}
  Engine.update(engine);


  stand1.display();
  stand2.display();
  ground1.display();

  h1.display();
  polygon1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();



  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();









textSize(35);
  fill("red");
  text("SCORE:  "+score,width-350,50);

console.log(score);




}


function mouseDragged(){
  if(gameState === "ATTACHED"){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){

    h1.fly();
    //Matter.Body.setStatic(polygon1.body,false);
    
    gameState = "LAUNCHED";
}

function keyPressed(){
    if(keyCode===32){
     h1.attach(polygon1.body);
     gameState ="ATTACHED";
    }
}


async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var JSONresponse = await response.json();
  var dateTime = JSONresponse.datetime;
  var hour = dateTime.slice(11,13);

 
 if(hour>=6 && hour<=18){
 bg = "bg.png";
 }
 
 else{
 bg =  "bg2.jpg";
 }
 
 backgroundImg = loadImage(bg);

 
 
  
 }