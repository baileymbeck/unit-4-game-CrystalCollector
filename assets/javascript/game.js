// set game variables from html
var randomNumber = 0;
var collectedNumber = 0;

var wins = 0;
var losses = 0;


var secretChoices = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);


// <---------- Psuedo code ---------->

// may need to reevaluate secretNumber var name

// ----- At start -----
// game loads a random number with a value between 19 - 120 in id = "randomNumber"

    setTimeout (function() {
    var number = 1 + Math.floor(Math.random() * 120)
    $("#randomNumber").text(number)
    }
    );

 // the img buttons have generated random numbers with a value between 1 - 12 in each box 

 var crystal = $("crystal");
 crystal.attr("data-crystalvalue", secretChoices[i]);
 $(".crystal").append(crystal);
 $(".crystal").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

counter += collectedNumber;

alert("New score: " + counter);

if (counter === targetNumber) {
  alert("You win!");
}

else if (counter >= targetNumber) {
  alert("You lose!!");
}

});

//  ----- On click -----
// when an img btn is clicked, the random number associated with it will appear in id = "secretNumber"
// the subsequent clicks of other crystals will be added to the secretNumber total, allowing the player to determine 
// to secret numbers


// ----- Determine win/lose -----

// WIN
// if numbers added to secretNumber === randomNumber
// wins++
// randomNumber reset
// secretNumbers = 0
// id boxes 1-4 reset

// LOSE
// losses++
// randomNumber reset
// secretNumbers = 0
// id boxes 1-4 reset

