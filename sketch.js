const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var log1
var pig1
var box3,box4,pig2
var log2,box5
var log3,log4
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,310,70,70);
    box2 = new Box(920,310,70,70);
    ground = new Ground(600,height,1200,20)
    log1 = new Log(810,290,300,PI/2)
    pig1= new Pig(810,310)
    box3=new Box(700,220,70,70)
    box4=new Box(920,220,70,70)
    pig2=new Pig(810,220)
    log2=new Log(810,200,300,PI/2)
    box5=new Box(810,130,70,70)
    log3=new Log(770,130,150,PI/7)
    log4=new Log(870,130,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display()
    pig1.display()
    box3.display()
    box4.display()
    pig2.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
}