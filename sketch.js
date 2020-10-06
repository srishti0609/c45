const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ship,shipImg;
var man;
var islands;
var sharkImg;

function Preload(){
  
   shipImg=loadImage("images/ship.jpg");
   manImg=loadImage("images/man,jpg");
   
}

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;
   
    //man=createSprite(50,50,50,50);
    //man.addImage("man",manImg);
    s1=new Shark(120,300);
    s2=new Shark(120,250);
    
}

function draw(){
    background(136,231,250);
 if(keyIsDown(UP_ARROW)){
     man.distance+=10;
     man.x+=10;
 }
 if(keyIsDown(DOWN_ARROW)){
     man.distance-=10;
     man.x-=10;
 }
 if(keyIsDown(LEFT_ARROW)){
     man.y=-10;
 }
 if(keyIsDown(RIGHT_ARROW)){
     man.y+=10;
 }
 s1.display();

}