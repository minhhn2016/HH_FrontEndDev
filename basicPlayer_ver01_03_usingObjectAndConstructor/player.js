var playerArray = new Array();

function Player(playerName, playerPoints) {
    "use strict";
    this.playerName = playerName;
    this.playerPoints = playerPoints;

    this.toString = function() {
        return this.playerName + ", " + this.playerPoints;
    }
};

function addPlayer() {
    "use strict";
    var newPlayer = new Player(document.getElementById("playerName").value, document.getElementById("playerPoints").value);
    playerArray.push(newPlayer);
    document.getElementById("playerName").value = "";
    document.getElementById("playerPoints").value = "";
}

function listPlayer() {
    "use strict";
    document.getElementById("playersList").innerHTML = "";
    var listOfPlayers = document.getElementById("playersList");
    for (var i = 0; i < playerArray.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = playerArray[i].toString();
        listOfPlayers.appendChild(item);
    }
}

function findWinners() {
    "use strict";
    document.getElementById("winners").innerHTML = "";
    playerArray.sort(function (a, b) {
        return parseInt(b.playerPoints) - parseInt(a.playerPoints);
    });
    var winnerArray = new Array();
    var max = 0;
    for (var i = 0; i < playerArray.length; i++) {
        var point = parseInt(playerArray[i].playerPoints);
        if (point >= max) {
            max = point;
            var newWinner = new Player(playerArray[i].playerName, playerArray[i].playerPoints);
            winnerArray.push(newWinner);
        }
    }
    var listOfWinners = document.getElementById("winners");
    for (var j = 0; j < winnerArray.length; j++) {
        var winner = document.createElement("p");
        winner.innerHTML = winnerArray[j].toString();
        listOfWinners.appendChild(winner);
    }
}

(function() {
    document.getElementById('btnAddPlayer').addEventListener("click", addPlayer, false);
    document.getElementById('btnListPlayer').addEventListener("click", listPlayer, false);
    document.getElementById('btnFindWinners').addEventListener("click", findWinners, false);
  })();