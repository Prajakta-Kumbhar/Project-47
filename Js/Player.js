class Player
{
    constructor()
    {
      this.index = null
      this.x = 50
      this.rank = 0
      this.name = ""
      this.y=0
     
    }
    
    getCount()
    {
      var dbref = database.ref("playerCount")
      dbref.on("value",  (data) =>
      {
        playerCount = data.val()
      })
    }

    updateCount(count)
    {
        database.ref("/").update({"playerCount": count})

    }

    update()
    {
      console.log("up", gameState, this.index)
      if(gameState===0)
      {
        if (this.index === 1 ) this.y = height/4
        else if(this.index ===2) this.y = height/2
      }
      var playerIndex = "Players/player" + this.index;
      console.log("up", gameState, this.index, this.y, this.name)
      database.ref(playerIndex).set({"name": this.name,
                                      "x": this.x,
                                      "y": this.y,
                                      "rank": this.rank})
    }

    static getPlayerInfo()
    {
      var dbref = database.ref("Players")
      dbref.on("value", (data) =>
      {
         allPlayers = data.val()
      })

    }
}