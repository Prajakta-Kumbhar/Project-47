var form, game,player
var database
var gameState = 0
var playerCount = 0
var background_img;
var player1,player1_image;
var player2, player2_image;
var allPlayers, players;
var track;
var coins, coinsGroup, coins_image;
var hurdle, hurdlesGroup, hurdle_image;

function preload()
{
  background_img = loadImage("start_image.png")
  player1_image = loadImage("images/player1_image.gif")
  //player1_image = loadImage("images/test.gif")
  player2_image = loadImage("images/player2_image.gif")
 //track_image = loadImage("track1.png")
  coins_image = loadImage("images/coins.png")
  hurdle_image = loadImage("images/hurdle.png")
}

function setup()
{
  createCanvas(windowWidth,windowHeight)

   database = firebase.database()

   game = new Game()
   
   game.getState()
   game.startGame()

   hurdlesGroup = new Group()
   coinsGroup = new Group()

}

function draw()
{
  // background("white")
   
if(playerCount === 2 && gameState === 0)
{

  game.update(1)
}
if(gameState === 1)
{
  game.play()
}
if(gameState === 2)
{
  game.end()
}

  
}

function spawnHurdles()
{
  console.log("hurdle")
  if(frameCount % 150 === 0)
  {
    var hurdle = createSprite(player.x +100,400)
    hurdle.y = Math.round(random(60,400))
    hurdle.addImage(hurdle_image)

    hurdle.scale = 0.5
    // hurdle.velocityX = -2

    hurdle.lifetime = 200

    hurdle.depth = player1.depth
    player1.depth = player1.depth + 2

    hurdle.depth = player2.depth
    player2.depth = player2.depth + 1

    hurdlesGroup.add(hurdle)
  
  }
}

function spawnCoins()
{

  if(frameCount % 200 === 0)
  {
    var coins = createSprite(random(player.x + 200,player.x + 400),random(player.y + 200,player.y- 200))
    coins.addImage(coins_image)

    coins.scale = 0.2

    coins.lifetime = 250

    coinsGroup.add(coins)
  }
}
