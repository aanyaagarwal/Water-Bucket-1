var player; 
var bucket; 
var background;
var grassImage;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background = createSprite(100, 200, displayWidth, displayHeight);
  background.shapeColor = "green";

  bucket = createSprite(100, 100, 20, 20)
  }

function preload(){
  grassImage = loadImage("Images/grass.png")
};

function draw() {

  drawSprites();
}