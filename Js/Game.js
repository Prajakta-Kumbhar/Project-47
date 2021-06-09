class Game
{
    constructor()
    {

    }


    update(state)
    {
      database.ref("/").update({"gameState": state})
    }

    getState()
    {
      var dbref = database.ref("gameState")
      dbref.on("value",(data) =>
      {
         gameState = data.val()
      })
    }
   
   startGame()
   {
     if(gameState === 0)
     {
         form = new Form()
         player = new Player()
         form.display()
         player.getCount()
    

      
       track = createSprite(width* 10,height/2,30,height)
       track.shapeColor = "red"
  
       player1 = createSprite(50,height/4)
       player1.addImage("player",player1_image)
       player1.scale = 0.3
       player2 = createSprite(50,height/2)
       player2.addImage(player2_image)
       player2.scale = 0.3

       players = [player1,player2]


       
      }
   }
   
   play()
   {

      form.hide()
     
      Player.getPlayerInfo()

      background("green")

      spawnHurdles()
      spawnCoins()

      if(allPlayers != undefined)
      {
        var x = 50
        var y = height/3
        var index = 0

      for(var plr in allPlayers)
      {
        x = allPlayers[plr].x
        players[index].x = x
        y = allPlayers[plr].y 
        players[index].y = y

        if(index + 1 === player.index)
        {
          camera.position.x = players[index].x 
          camera.position.y = height/2
          fill("red")
         text("X :" + allPlayers[plr].x,camera.position.x,100) 
         text("Y :" + allPlayers[plr].y,camera.position.x+250,100) 


        }

        

        index = index + 1
      }

      

      if(keyIsDown(RIGHT_ARROW) && player.index !== null)
       {
        console.log("RWorking") 
         player.x += 10
         player.update()
       }

       if(keyIsDown(UP_ARROW) && player.index != null)
       {
        console.log("uWorking") 
         player.y -= 10
         player.update()
       }

       if(keyIsDown(DOWN_ARROW) && player.index != null)
       {
        console.log("dWorking") 
         player.y += 10
         player.update()
       }

      drawSprites()

      }
      if(player.x >= 15900)
      {
        gameState = 2
      }
   }
    
   end()
   {
     

   }
}


                                               