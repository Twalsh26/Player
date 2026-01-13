  const xhr = new XMLHttpRequest();

        xhr.onload = function() {
           if(xhr.status === 200)
            var data = JSON.parse(xhr.respondeText)


        },

        xhr.open("GET", "player.json");
        xhr.send();