  const xhr = new XMLHttpRequest();

        xhr.onload = function() {
           if(xhr.status === 200){
            const data = JSON.parse(xhr.respondeText)

        const player = data.players;
        const container = document.getElementById("cards");
      players.foreach(player => {
        const card = document.createElement("div");



        let statsHTML ="";
        let teamsHTML ="";
        let awardsHTML ="";

        for(let team = 0;team<players.teams.length;team++){}

      })


        
        
        }


        }
        

        xhr.open("GET", "player.json");
        xhr.send();
