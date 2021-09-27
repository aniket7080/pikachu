var background1;
var pikachu1;

function preload(){
  background1Image = loadImage("background1.png")
  pikachu1Image = loadImage("pikachu1.png")
  
}

function setup(){
  createCanvas(400,400);

  background1 = createSprite(200,200)
  background1.addImage(background1Image) 

  pikachu1 = createSprite(100,100,30,30)
  pikachu1.addImage(pikachu1Image)
  pikachu1.scale = 0.3
  pikachu1.velocityY = 3

}
function draw() {
  
  

  drawSprites();
}
