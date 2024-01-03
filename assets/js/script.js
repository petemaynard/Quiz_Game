// List of questions, as an array of objects
const listOfQs = [{
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
}];

var qNum = 0;
var secondsLeft = 10; // Time for the game
var timeIsUp = false;  // Change to true when out of time
var timeEl = document.querySelector(".time");
var gamePoints = 0;
var correctOrIncorrect = 0;

// Functions

function setTimeLeft() {
   var timerInterval = setInterval(function () {
      timeEl.textContent = secondsLeft + " seconds remaining.";
      secondsLeft--;

      if (secondsLeft < 0) {
         clearInterval(timerInterval)
         timeEl.textContent = "TIME IS UP!";
         timeIsUp = true;
      }
   }, 1000);
}

function startGame() {
   // Remove the "start game" button  
   console.log("I am starting the game");
   gameStart.removeEventListener("click", startGame);
   var removeButton = document.getElementById("startBtn");
   removeButton.remove();
   console.log("I just removed the start button");

   // TO DO: Set the countdown timer
   // use setInterval, perhaps check every one second and take one away
   // create global variable for timer
   // 
   setTimeLeft();
   playRound(qNum);

};  //Here ends the startGame function

//Surround this whole function with a timer???



function playRound(qNum) {

   // Check that we haven't run out of questions (Move to where answers are checked)
   if (qNum == listOfQs.length) {
      console.log("No more questions.  Exit from playRound")
      return;
   }

   console.log("I am starting playRound on round " + qNum);
   updateQandA(qNum);
   playerChooses(qNum);
   console.log("I am back from playerChooses for round " + qNum);
   return;
}

function updateQandA(qNum) {
   console.log("Starting updateQandA for round " + qNum);
   //Replace <h1> text with new question
   var changeQuestion = document.getElementById("question");
   changeQuestion.textContent = listOfQs[qNum].question;

   //Do a querySelectorAll for class choiceBtn
   //Replace each li.button element with new choices.
   var changeChoices = document.querySelectorAll(".choiceBtn");
   changeChoices[0].textContent = listOfQs[qNum].choices[0];
   changeChoices[1].textContent = listOfQs[qNum].choices[1];
   changeChoices[2].textContent = listOfQs[qNum].choices[2];
   changeChoices[3].textContent = listOfQs[qNum].choices[3];
   console.log("The choices and question should now be updated for round " + qNum);
   return;
}  // End of updateQandA


function playerChooses(qNum) {

   console.log("I am where the player chooses for round " + qNum);
   let pickedA = document.getElementById("choiceA");
   let pickedB = document.getElementById("choiceB");
   let pickedC = document.getElementById("choiceC");
   let pickedD = document.getElementById("choiceD");

   pickedA.addEventListener("click", function () {
      console.log("Checking A for round " + qNum);
      if (listOfQs[qNum].answer == 0) {
         choiceRightOrWrong(1);
      }
      else {
         choiceRightOrWrong(0);
      }
   });
   pickedB.addEventListener("click", function () {
      console.log("Checking B for round " + qNum);
      if (listOfQs[qNum].answer == 1) {
         choiceRightOrWrong(1);
      }
      else {
         choiceRightOrWrong(0);
      }
   });
   pickedC.addEventListener("click", function () {
      console.log("Checking C for round " + qNum);
      if (listOfQs[qNum].answer == 2) {
         choiceRightOrWrong(1);
      }
      else {
         choiceRightOrWrong(0);
      }
   });
   pickedD.addEventListener("click", function () {
      console.log("Checking D for round " + qNum);
      if (listOfQs[qNum].answer == 3) {
         choiceRightOrWrong(1);
      }
      else {
         choiceRightOrWrong(0);
      }
   });

   console.log("I am waiting for an answer for round " + qNum);
   return;
}


function choiceRightOrWrong(num) {
   console.log("The choiceRorW is " + num);
   var showResult = document.createElement("div");
   if (num == 1) {
      correctOrIncorrect = "Correct";
   }
   else {
      correctOrIncorrect = "Incorrect";
   }
   console.log("CorrectOrIncorrect is " + correctOrIncorrect);
   showResult = document.querySelector("div");
   showResult.textContent= correctOrIncorrect;

   qNum++;
   if (qNum > listOfQs.length || secondsLeft <= 0) {
      return;
   }
   else if (num = 1) {
      gamePoints += 10;
      playRound(qNum);
   }
   else {
      secondsLeft -= 3;
      playRound(qNum);
   }
}




// On click, start the game
// TO DO: Hide the four <li> items
var gameStart = document.getElementById("startBtn");
gameStart.addEventListener("click", startGame);



// Game is over.  Time to save the score.
// User "input" to get player initials
