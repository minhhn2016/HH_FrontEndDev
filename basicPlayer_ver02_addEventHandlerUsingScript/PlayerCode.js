/*jslint browser:true*/
/*global console*/
/*global window*/
/* The lines above are for the www.jslint.com JavaScript "validator" */
/* Just keep them like they are. Also start your functions with "use strict"; */
/* And remove extra spaces after every code or comment line. */

// Important: How many times will this script be run? And when?

var players = [];   // Creating a variable to global scope, creating also an 
// empty "array" object and assigning a reference to that object to the var
// = 3 things happening based on that line.
        
// When this script will be run, the following lines will define/create a 
// function 'addPlayer' to the global scope for anybody to use later:

var addPlayer = function () {
  "use strict";   // Write this to the beginning of every function to get
  // more validator warnings and errors of non-strict version options used. 
    
  // While reading function 'addPlayer' remember it will be called as many 
  // times as the user wants to add a player. E.g. 0 or 1, 10 times 
  
  var name, points, playerObj;   // Define vars in the beginning of function
  // These vars are function scope variables. Only available inside func call
    
  name = document.getElementById("player").value;   // assign values later..
  // document.getElementById is actually not part of JavaScript language
  // (ECMAScript), but it's from W3C's DOM API specification = 
  // We could say it's part of wen browsers' JavaScript capabilities.
  // W3C's DOM API: https://www.w3.org/TR/DOM-Level-1/introduction.html 

  points = Number(document.getElementById("points").value);
    
  // Notice how we need to convert the input String to Number even if we had 
  // input type="number" in the HTML.

  playerObj = {};   // Creating one empty ad hoc object with no properties/
                    // contents/features/values. Assigning reference to it
                    // to the function scope variable playerObj.

  playerObj.name = name;    // Adding a property called name to the object 
  // and assigning it a value from the function scope variable name.
  playerObj.points = points;   // Same with points
    
  players.push(playerObj);   // Adding one more slot to the end of the
  // "array" and assigning it a reference to the obj as the value. 
    
  // Emptying the input fields by assigning them an empty String value
  document.getElementById("player").value = "";
  document.getElementById("points").value = "";
};

// Second similar function definition. Only new features commented

var showList = function () {
  "use strict";
  var i, childElement, parentElement;   // also "i" declared here 
  
  // Get the parent element, where each child element will be "inserted"
  parentElement = document.getElementById("playerList"); // See .html
  
  // Emptying the parent element from previous list items = remove old list
  parentElement.innerHTML = "";

  // Going through all slots in the "array"
  for (i = 0; i < players.length; i = i + 1) {
    
    // for each item in object "array", create an element node for DOM tree
    childElement = document.createElement("li");
    
    // set the contents of the element node like you want. In this case e.g:    
    childElement.innerHTML = players[i].name + ", " +
                              players[i].points;
    
    // Finally insert the element to its correct place in the DOM tree. Here:
    parentElement.appendChild(childElement);  // as last child of the parent
  }

};


// Second similar function definition. Only new features commented later

var findWinners = function () {
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
        outputText += players[i].name + ", " + players[i].points + "<br />";
      }
    }
    
  } else {
    outputText = "No players!";
  }
    
  document.getElementById("winnerOutput").innerHTML = outputText;
};

// Attach event handlers to buttons on html page using their id, with different ways

// first way
// document.getElementById('btnAddPlayer').onclick = addPlayer;
// document.getElementById('btnListPlayer').onclick = showList;
// document.getElementById('btnFindWinners').onclick = findWinners;

// OR

// document.getElementById('btnAddPlayer').addEventListener("click", addPlayer, false);
// document.getElementById('btnListPlayer').addEventListener("click", showList, false);
// document.getElementById('btnFindWinners').addEventListener("click", findWinners, false);

// second way - using a function definition
// function addEventHandlers () {
//   document.getElementById('btnAddPlayer').addEventListener("click", addPlayer, false);
//   document.getElementById('btnListPlayer').addEventListener("click", showList, false);
//   document.getElementById('btnFindWinners').addEventListener("click", findWinners, false);
// }
// addEventHandlers();

// third way - using SIAF function -recommended to use
(function() {
  document.getElementById('btnAddPlayer').addEventListener("click", addPlayer, false);
  document.getElementById('btnListPlayer').addEventListener("click", showList, false);
  document.getElementById('btnFindWinners').addEventListener("click", findWinners, false);
})();

// See, these two do almost the same:

// old way
function example1(number) {
  "use strict";
  console.log(number * number);
}

example1(3);

// newer, recommended way
var example2 = function (number) {
  "use strict";
  console.log(number * number);
};

example2(3);