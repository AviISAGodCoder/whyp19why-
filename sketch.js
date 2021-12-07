var wshop,elf,tree,cane,grinch;
var wshopImg,elfImg,treeImg,caneImg,grinchImg,endImg;
var xmas_items = 0;
var treeG,caneG,grinchG;

var play=1;
var end=0;
var gameState=1;

function preload()
{
  wshopImg = loadImage("wshop.jpg");
  elfImg = loadAnimation("elf.png");
  treeImg = loadImage("christmas_tree.png");
  caneImg = loadImage("ccanee.png");
  grinchImg = loadImage("campus.png");
  endImg =loadAnimation("yeetgame.png");
}

function setup()
{
  
createCanvas(windowWidth,windowHeight);

wshop=createSprite(width/2,300);
wshop.addImage(wshopImg);
wshop.scale = 2.1;

elf = createSprite(100,height-20,20,20);
elf.addAnimation("elf",elfImg);
elf.scale=0.8;
  
  
treeG=new Group();
caneG=new Group();
grinchG=new Group();

}

function draw() {

  if(gameState===play){
  background(0);
  elf.x = World.mouseX;
  
  edges= createEdgeSprites();
  elf.collide(edges);

   if(wshop.x > width )
   {
     wshop.x = width/2;
   }


  
    createTree();
    createCane();
    createGrinch();

    if (treeG.isTouching(elf)) {
      treeG.destroyEach();
      xmas_items=xmas_items + 75;
    }
    else if (caneG.isTouching(elf)) {
      caneG.destroyEach();
      xmas_items=xmas_items + 150;

    }
    else
    {
      if(grinchG.isTouching(elf)) 
      {
        gameState=end;
        
        elf.addAnimation("elf",endImg);
        elf.x=width/2;
        elf.y=height/2;
        elf.scale=0.6;
        
        treeG.destroyEach();
        caneG.destroyEach();
        grinchG.destroyEach();
        
        treeG.setVelocityYEach(0);
        caneG.setVelocityYEach(0);
        grinchG.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("X-Mas Items "+ xmas_items,width-150,30);
  }

}

function createTree() {
  if (World.frameCount % 200 == 0) {
  var tree = createSprite(Math.round(random(50, width-50),40, 10, 10));
  tree.addImage(treeImg);
  tree.scale=0.4;
  tree.velocityY = 5;
  tree.lifetime = 200;
  treeG.add(tree);
  }
}

function createCane() 
{
  if (World.frameCount % 320 == 0) 
  {
    var cane = createSprite(Math.round(random(50, width-50),40, 10, 10));
    cane.addImage(caneImg);
    cane.scale=0.5;
    cane.velocityY = 5;
    cane.lifetime = 200;
    caneG.add(cane);
  }
}

function createGrinch(){
  if (World.frameCount % 530 == 0) {
  var grinch = createSprite(Math.round(random(50, width-50),40, 10, 10));
  grinch.addImage(grinchImg);
  grinch.scale=0.7;
  grinch.velocityY = 4;
  grinch.lifetime = 200;
  grinchG.add(grinch);
  }
}