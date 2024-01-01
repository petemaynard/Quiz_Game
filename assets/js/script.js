
// List of questions, as an array of objects
var listOfQs = [{
   question: "What letter comes after a?",
   choices: ["a", "b", "c", "d"],
   answer: 1
},
{
   question: "What letter comes before z?",
   choices: ["w", "x", "y", "z"],
   answer: 2
}];

// Functions

function choiceCorrect() {
   //What to do when the player choosses correctly
   // But eventually will createElement and put as a child of main showing word "Correct"
   // Have "Correct" display for half second and then return
   console.log("You have chosen correctly.");
   var showCorrect = document.createElement("div");
   showCorrect.textContent = "Correct answer.";
   var mainElement=document.querySelector("main");
   mainElement.appendChild(showCorrect);
   // Add points
}

function choiceIncorrect() {
   //What to do when the player choosses correctly
   // But eventually will createElement and put as a child of main showing word "Correct"
   // Have "Correct" display for half second and then return
   console.log("You have chosen incorrectly.");
   var showIncorrect = document.createElement("div");
   showIncorrect.textContent = "Incorrect answer.";
   var mainElement=document.querySelector("main");
   mainElement.appendChild(showIncorrect);
   // Do not add any points
   // Subtract time from the timer
}

function checkA(qNum) {
   //event.stopPropagation();
   console.log("Checking A");
   console.log("qNum is " + qNum);
   console.log("qNum answer is " + listOfQs[qNum].answer);
   if (listOfQs[qNum].answer == 0) {
      choiceCorrect();
   }
   else {
      choiceIncorrect();
   }
}

function checkB(qNum) {
   //event.stopPropagation();
   console.log("Checking B");
   if (listOfQs[qNum].answer == 1) {
      choiceCorrect();
   }
   else {
      choiceIncorrect();
   }
}

function checkC(qNum) {
   //event.stopPropagation();
   console.log("Checking C");
   if (listOfQs[qNum].answer == 2) {
      choiceCorrect();
   }
   else {
      choiceIncorrect();
   }
}

function checkD(qNum) {
   //event.stopPropagation();
   console.log("Checking D");
   if (listOfQs[qNum].answer == 3) {
      choiceCorrect();
   }
   else {
      choiceIncorrect();
   }
}

function playerChooses(qNum) {
   let pickedA = document.getElementById("choiceA");
   let pickedB = document.getElementById("choiceB");
   let pickedC = document.getElementById("choiceC");
   let pickedD = document.getElementById("choiceD");

   console.log("pickedA is :" + pickedA);
   pickedA.addEventListener("click", function () { checkA(qNum) });
   pickedB.addEventListener("click", function () { checkB(qNum) });
   pickedC.addEventListener("click", function () { checkC(qNum) });
   pickedD.addEventListener("click", function () { checkD(qNum) });
}

function startGame() {
   // Remove the "start game" button  
   gameStart.removeEventListener("click", startGame);
   console.log("I am starting the game");
   var removeButton = document.getElementById("startBtn");
   removeButton.remove();

   // TO DO: Set the countdown timer

   var numberOfQs = 1; // Number starts at zero for one question
   console.log("I have set the number of questions");
   console.log("Starting the loop");

   //Start looping through the questions
   for (var i = 0; i < numberOfQs; i++) {
      console.log("Entered the loop");
      console.log("Working on question " + i);

      //Replace <h1> text with new question
      var changeQuestion = document.getElementById("question");
      changeQuestion.textContent = listOfQs[i].question;

      //Do a querySelectorAll for class choiceBtn
      //Replace each li.button element with new choices.
      var changeChoices = document.querySelectorAll(".choiceBtn");
      changeChoices[0].textContent = listOfQs[i].choices[0];
      changeChoices[1].textContent = listOfQs[i].choices[1];
      changeChoices[2].textContent = listOfQs[i].choices[2];
      changeChoices[3].textContent = listOfQs[i].choices[3];

      // Player now choses their answer
      playerChooses(i);

   } // Here ends the loop

};  //Here ends the startGame function


// On click, start the game
// TO DO: Hide the four <li> items
var gameStart = document.getElementById("startBtn");
gameStart.addEventListener("click", startGame);


