var img_fundo, fundo;
var parGrupo, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18, par19, par20;
var parsonagem1, parsonagem2, parsonagem3, parsonagem4;
var posiçao1, posiçao2, posiçao3, posiçao4;
var player, playerCount;
var database;

function preload(){

}

function setup(){
  createCanvas(1280,567)
  par1 = createSprite(200, 130, 20, 100)
  par2 = createSprite(160, 90, 100, 20)
  par3 = createSprite(200, 446, 20, 100)
  par4 = createSprite(160, 486, 100, 20)
  par5 = createSprite(160, 296, 100, 20)
  par6 = createSprite(1080, 130, 20, 100)
  par7 = createSprite(1120, 90, 100, 20)
  par8 = createSprite(1080, 446, 20, 100)
  par9 = createSprite(1120, 486, 100, 20)
  par10 = createSprite(1120, 296, 100, 20)
  par11 = createSprite(240, 170, 100, 20)
  par12 = createSprite(1040, 170, 100, 20)
  par13 = createSprite(240, 397, 100, 20)
  par14 = createSprite(1040, 397, 100, 20)
  par15 = createSprite(640, 150, 130, 20)
  par15.shapeColor = "red"
  par16 = createSprite(640, 417, 130, 20)
  par16.shapeColor = "blue"
  par17 = createSprite(640, 110, 20, 100)
  par18 = createSprite(640, 457, 20, 100)
  par19 = createSprite(640, 290, 130, 20)
  par20 = createSprite(640, 288, 20, 100)
  parsonagem1 = createSprite(150,140, 30,55)
  parsonagem2 = createSprite(150,427, 30,55)
  parsonagem3 = createSprite(1130,140, 30,55)
  parsonagem4 = createSprite(1130,427, 30,55)
  parGrupo = createGroup()  
  parGrupo.add(par1)
  parGrupo.add(par2)
  parGrupo.add(par3)
  
}

function draw(){
  background('black')

  
  if(keyDown(UP_ARROW)){
    parsonagem1.position.y -= 5 
  }

  if(keyDown(DOWN_ARROW)){
    parsonagem1.position.y += 5 
  }

  

  if(keyDown(LEFT_ARROW)){
    parsonagem1.position.x -= 5 
  }

  

  if(keyDown(RIGHT_ARROW)){
    parsonagem1.position.x += 5 
  }

  if(parGrupo.isTouching(parsonagem1)){
    parsonagem1.position.x = parsonagem1.position.x-5

  }

  if(parGrupo.isTouching(parsonagem1)){
    parsonagem1.position.y = parsonagem1.position.y-5

  }


  drawSprites();
}



