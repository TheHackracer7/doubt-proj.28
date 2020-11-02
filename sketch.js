const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;


var bgImg;

var gnd;

var tree;

var boy;

var slingsh;

var mango1,mango2,mango3,mango4,mango5;

var stone;

function preload()
{
    bgImg=loadImage("background.jpg");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
 world = engine.world;

 gnd=new Ground(400,390,800,20);

 tree=new Tree(400,10,400,400);

 boy=new Boy(50,210,250,250);

 mango1=new Mango(500,100,70,70);
 mango2=new Mango(700,100,70,70);
 mango3=new Mango(600,30,70,70);
 mango4=new Mango(500,195,70,70);
 mango5=new Mango(700,185,70,70);

 stone=new Stone(70,248,40,40);
 slingsh=new SlingShot(stone.body,{x:100,y:280});




    
}

function draw(){
    background(bgImg);
    Engine.update(engine);

    
    

gnd.display();

tree.display();

boy.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

stone.display();

slingsh.display();

}

function mouseDragged()
{
   Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
    

Body.setStatic(stone.body,false);
   slingsh.fly();
   

    //Body.applyForce(stone.body,stone.body.position,{x:50,y:-50});
   // console.log("done");
}

