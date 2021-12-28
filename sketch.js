
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img;
var alienImg;
var astronaut,happyAstronaut,displayAstro;
var ufo;


function preload(){
  bg_img = loadImage('spaceBackground.webp');
  alien = loadImage('alien.png');
  astronaut = loadImage('astronaut.png');
  ufo = loadImage('emptyUfo.png');
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  alien = createImg('alien.png');
  alien.position(200,245);
  alien.size(100,140);

  astronaut = createImg('astronaut.png');
  astronaut.position(40,245);
  astronaut.size(115,140);
  astronaut.mouseClicked(airblower)

  ufo = createImg('emptyUfo.png');
  ufo.position(645,180)
  ufo.size(200,200)
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  Engine.update(engine);
  
  if(collide(alien,ufo,300) == true){
    alien.visible = false;
    
    fill(0);
    stroke("white");
    textSize(25);
    text("The Alien has been defeated!",40,40);
  }
  drawSprites();
}

function airblower(){
  Matter.Body.applyForce(alien,{x:0,y:0},{x:-0.03,y:0});
}

function collide(body,sprite,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}

