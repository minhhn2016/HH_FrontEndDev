/*jslint browser:true*/
/*global console*/
/*global window*/
/* The lines above are for the www.jslint.com JavaScript "validator" */
/* Just keep them like they are. Also start your functions with "use strict"; */
/* And remove extra spaces after every code or comment line. */

// Important: How many times will this script be run? And when?

var players = []; // Creating a variable to global scope, creating also an 
// empty "array" object and assigning a reference to that object to the var
// = 3 things happening based on that line.

// We create our own constructor for 'type' Player
var Player = function (name, points) {
  "use strict";
  this.name = name;
  this.points = points;

  this.toString = function () {
    return this.name + ", " + this.points;
  }

};

// When this script will be run, the following lines will define/create a 
// function 'addPlayer' to the global scope for anybody to use later:
var addPlayer = function () {
  "use strict"; // Write this to the beginning of every function to get
  // more validator warnings and errors of non-strict version options used.

  // While reading function 'addPlayer' remember it will be called as many 
  // times as the user wants to add a player. E.g. 0 or 1, 10 times 

  var name, points, playerObj; // Define vars in the beginning of function
  // These vars are function scope variables. Only available inside func call

  name = document.getElementById("player").value; // assign values later..
  // document.getElementById is actually not part of JavaScript language
  // (ECMAScript), but it's from W3C's DOM API specification = 
  // We could say it's part of wen browsers' JavaScript capabilities.
  // W3C's DOM API: https://www.w3.org/TR/DOM-Level-1/introduction.html 

  points = Number(document.getElementById("points").value);

  // Notice how we need to convert the input String to Number even if we had 
  // input type="number" in the HTML.

  playerObj = new Player(name, points); // Creating one Player object
  // Assigning reference to it to the function scope variable playerObj.

  players.push(playerObj); // Adding one more slot to the end of the
  // "array" and assigning it a reference to the obj as the value. 

  // Emptying the input fields by assigning them an empty String value
  document.getElementById("player").value = "";
  document.getElementById("points").value = "";
};

// Second similar function definition. Only new features commented

var showList = function () {
  "use strict";
  var i, childElement, parentElement; // also "i" declared here 

  // Get the parent element, where each child element will be "inserted"
  parentElement = document.getElementById("playerList"); // See .html

  // Emptying the parent element from previous list items = remove old list
  parentElement.innerHTML = "";

  // Going through all slots in the "array"
  for (i = 0; i < players.length; i = i + 1) {

    // for each item in object "array", create an element node for DOM tree
    childElement = document.createElement("li");

    // set the contents of the element node like you want. In this case e.g:    
    childElement.innerHTML = players[i].toString();

    // Finally insert the element to its correct place in the DOM tree. Here:
    parentElement.appendChild(childElement); // as last child of the parent
  }

};


// Second similar function definition. Only new features commented later

var findWinners= function () {
  "use strict";
  var maxSoFar, i, outputText;

  if (players !== null && players.length > 0) {
    // If at least one player in the "array"...

    maxSoFar = players[0].points;
    // first assume first player has best points...

    // Then go through possible other items (i=1 is second item!)
    for (i = 1; i < players.length; i = i + 1) {
      // ... for next players check your hypothesis
      if (players[i].points > maxSoFar) {
        // ... correct if needed
        maxSoFar = players[i].points;
      }
    }

    // Now we have found the maximum VALUE, next the PLAYERS with max

    outputText = "*** Winner(s) ***<br />";

    for (i = 0; i < players.length; i = i + 1) {
      if (players[i].points === maxSoFar) {
        outputText += players[i].toString() + "<br />";
      }
    }

  } else {
    outputText = "No players!";
  }

  document.getElementById("winnerOutput").innerHTML = outputText;
};

// SIAF = Self-invoking Anonymous Function
(function () {
  document.getElementById("btAddPlayer").addEventListener("click", addPlayer);
  document.getElementById("btListPlayers").addEventListener("click", showList);
  document.getElementById("btFindWinners").addEventListener("click", findWinner);
})();
