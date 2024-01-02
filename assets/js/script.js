
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
},
{
   question: "What is 1 + 2?",
   choices: ["1", "2", "3", "4"],
   answer: 2
}
];

// Functions

function startGame() {
   // Remove the "start game" button  
   console.log("I am starting the game");
   gameStart.removeEventListener("click", startGame);
   var removeButton = document.getElementById("startBtn");
   removeButton.remove();
   console.log("I just removed the start button");

   // TO DO: Set the countdown timer

   // Loop through all the questions
   for (var i = 1; i < listOfQs.length; i++) {
      console.log("I am ready to call playRound round " + i);
      playRound(i);
      console.log("I am back from playRound round " + i);
      return;
   }

   function playRound(qNum) {

      updateQandA(qNum);

      playerChooses(qNum);
      console.log("Am I sitting here after playerChooses?");
      return;
   }

   function updateQandA(qNum) {

      //Replace <h1> text with new question
      var changeQuestion = document.getElementById("question");
      changeQuestion.textContent = listOfQs[qNum].question;

      //Do a querySelectorAll for class choiceBtn
      //Replace each li.button element with new choices.
      console.log("Does updateQandA know what qNum is.  It is " + qNum);
      var changeChoices = document.querySelectorAll(".choiceBtn");
      changeChoices[0].textContent = listOfQs[qNum].choices[0];
      changeChoices[1].textContent = listOfQs[qNum].choices[1];
      changeChoices[2].textContent = listOfQs[qNum].choices[2];
      changeChoices[3].textContent = listOfQs[qNum].choices[3];
      console.log("The choices and question should be updated");
      return;
   }  // End of updateQandA


   function playerChooses(qNum) {

      console.log("I am where the player chooses.");
      let pickedA = document.getElementById("choiceA");
      let pickedB = document.getElementById("choiceB");
      let pickedC = document.getElementById("choiceC");
      let pickedD = document.getElementById("choiceD");

      /* Try removing any existing listeners first
      if (qNum > 0) {
         pickedA.removeEventListener("click", pickA);
         pickedB.removeEventListener("click", pickB);
         pickedC.removeEventListener("click", pickC);
         pickedD.removeEventListener("click", pickD);
         console.log("I just turned off the listeners");
      }*/

      pickedA.addEventListener("click", function pickA() {
         console.log("Checking A, where qNum is " + qNum);
         if (listOfQs[qNum].answer == 0) {
            choiceCorrect();
         }
         else {
            choiceIncorrect();
         }
      });
      pickedB.addEventListener("click", function pickB() {
         console.log("Checking B, where qNum is " + qNum);
         if (listOfQs[qNum].answer == 1) {
            choiceCorrect();
         }
         else {
            choiceIncorrect();
         }
      });
      pickedC.addEventListener("click", function pickC() {
         console.log("Checking C, where qNum is " + qNum);
         if (listOfQs[qNum].answer == 2) {
            choiceCorrect();
         }
         else {
            choiceIncorrect();
         }
      });
      pickedD.addEventListener("click", function pickD() {
         console.log("Checking D, where qNum is " + qNum);
         if (listOfQs[qNum].answer == 3) {
            choiceCorrect();
         }
         else {
            choiceIncorrect();
         }
      });

      console.log("I am waiting for an answer");
      return;
   }

   function choiceCorrect() {
      //What to do when the player choosses correct answer
      // TO DO: Need to delete any existing elements saying correct or incorrect first
      console.log("You have chosen correctly.");
      var showCorrect = document.createElement("div");
      showCorrect.textContent = "Correct answer.";
      var mainElement = document.querySelector("main");
      mainElement.appendChild(showCorrect);
      // TO DO: Add points
      return;
   }

   function choiceIncorrect() {
      //What to do when the player choosses incorrect answer
      // TO DO: Need to delete any existing elements saying correct or incorrect first
      console.log("You have chosen incorrectly.");
      var showIncorrect = document.createElement("div");
      showIncorrect.textContent = "Incorrect answer.";
      var mainElement = document.querySelector("main");
      mainElement.appendChild(showIncorrect);

      // Do not add any points (no code needed)
      // TO DO: Subtract time from the timer
      return;
   }
};  //Here ends the startGame function


// On click, start the game
// TO DO: Hide the four <li> items
var gameStart = document.getElementById("startBtn");
gameStart.addEventListener("click", startGame);


// Game is over.  Time to save the score.
// User "input" to get player initials
