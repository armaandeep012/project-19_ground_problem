var pathImg, path;
var PLAY = 2;
var END = 0;
var gameState = 2;
var mainBoi, BoiIMG, BoiJumpSound, BoiGroup;
var Zomb, ZombIMG, ZombSound, ZombGroup;
var avacado, avacadoIMG;
var plant, plantIMG;
var bun, bunIMG;
var ground,groundGroup;
var obstacles;

function preload() {

    menuIMG = loadImage("forest.gif");
    titleIMG = loadImage("dark-forest.png");
    menuSound = loadSound("S.mp3");
    pathImg = loadImage("path.gif");
    BoiIMG = loadAnimation("Boi.gif");
    ZombIMG = loadAnimation("Zomb.gif");
    bunIMG = loadAnimation("bun.gif");
    avacadoIMG = loadAnimation("avacado.gif");
    plantIMG = loadAnimation("plant.gif");
}


function setup() {

    createCanvas(1000, 600);

    BoiGroup = new Group();
    ZombGroup = new Group();
    obstacles = new Group();
    groundGroup = new Group();


    if (gameState === PLAY) {
        spawnSprites();
    }

}


function draw() {

if(gameState === PLAY){

    mainBoi.velocityY = mainBoi.velocityY + 2;

    var selectSprites = Math.round(random(1,5));

    if(frameCount % 240 === 0){

        if(selectSprites === 1){
            plant = createSprite(1000,460);
            plant.addAnimation("plant",plantIMG);
            plant.scale = 0.5;
            plant.lifetime = 500;
            plant.velocityX = -3;
            obstacles.add(plant);
        }

        if(selectSprites === 2){
            bun = createSprite(1000,475);
            bun.addAnimation("bun",bunIMG);
            bun.scale = 0.25;
            bun.lifetime = 500;
            bun.velocityX = -3;
            obstacles.add(bun);
        }

        if(selectSprites === 3){
            avacado = createSprite(1000,455);
            avacado.addAnimation("avacado",avacadoIMG);
            avacado.scale = 0.25;
            avacado.lifetime = 500;
            avacado.velocityX = -3;
            obstacles.add(avacado);
        }

        if(keyWentDown("space")){
            mainBoi.y = -4;
        }
    }
}

    drawSprites();
}


function spawnSprites() {

    ground = createSprite(500,300,100,100);
    ground.visible = true;
    groundGroup.add(ground);

    path = createSprite(500, 285);
    path.addImage(pathImg);
    path.scale = 1.5;

    mainBoi = createSprite(290, 484);
    mainBoi.addAnimation("running", BoiIMG);
    mainBoi.scale = 0.3;
    mainBoi.collide(ground);

    Zomb = createSprite(100, 470);
    Zomb.addAnimation("Zombrunning", ZombIMG);
    Zomb.scale = 0.6;
    ZombGroup.add(Zomb);

}