var backgroundImg;
var player;
var Frente; 
var Costa;
var Direita;
var Esquerda; 
var book, book2, book3;
var bookImg;
var contador;
var bookButton;
var num = 0;

function preload(){
  backgroundImg = loadImage ("casa.png");
  Costa = loadAnimation ("bot.gif");
  Frente = loadAnimation ("front.gif");
  Direita = loadAnimation ("right.gif");
  Esquerda = loadAnimation ("left.gif");
  bookImg = loadImage ("book.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  player = createSprite(200,200,50,50);
  player.addAnimation ("frente",Frente);
  player.scale = 0.5;
   player.addAnimation ("costa",Costa);
   player.addAnimation ("direita",Direita);
   player.addAnimation ("esquerda",Esquerda);

  book = createSprite(1630,965,50,50);
  book.addImage ("book",bookImg)
  book.scale = 0.08;
  book2 = createSprite(690,200,50,50);
  book2.addImage ("book",bookImg)
  book2.scale = 0.08;
  book3 = createSprite(680,550,50,50);
  book3.addImage ("book",bookImg)
  book3.scale = 0.08;

  bookButton = createImg ("book.png")
  bookButton.size (120,100);
  bookButton.position (50,50);

  contador = createElement("h2");
  contador.position (130,65);
}

function draw(){
  background(51);
  image(backgroundImg,0,0,1920,1080);
  controls();

  if(player.isTouching(book)) {
    book.destroy()
    num += 1;
  }
  if(player.isTouching(book2)) {
    book2.destroy()
    num += 1;
  }
  if(player.isTouching(book3)) {
    book3.destroy()
    num += 1;
  }
  contador.html("x" + num);

   console.log("x:"+player.x);
   console.log("y:"+player.y);
  drawSprites(); 
  if(num === 3) {
    background("black");
    textSize (50)
    textAlign (CENTER);
    text ("voce desbloqueou a chave para a próxima etapa",windowWidth/2,windowHeight/2) ;
  }
}

function controls () {
  if(keyDown("w")) {
    player.y = player.y -10;
    player.changeAnimation("costa")
    player.scale = 1.5;
  }

  if(keyDown("s")) {
    player.y = player.y +10;
    player.changeAnimation("frente")
    player.scale = 0.5;
  }

  if(keyDown("d")) {
    player.x = player.x +10;
    player.changeAnimation("direita")
    player.scale = 1.5;
  }

  if(keyDown("a")) {
    player.x = player.x -10;
    player.changeAnimation("esquerda")
    player.scale = 1.5;
  }

  

  
  if (player.y <= 380) {
    camera.y = 380;
  }
  else if(player.y >= 710) {
    camera.y = 710;
  } 
  else {
    camera.y = player.y;
  }
  
  if(player.x <= 750) {
    camera.x = 750
  }
  else if (player.x >= 1180 ) {
    camera.x = 1180
  }
  else {
    camera.x = player.x;
  }
  
}