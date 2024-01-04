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
var secondsLeft = 100; // Amount of time for the game
var timeIsUp = false;  // Change to true when out of time
var timeEl = document.querySelector(".time");
var gamePoints = 0;
var correctOrIncorrect = 0;
let pickedA, pickedB, pickedC, pickedD 


// Functions

function setTimeLeft() {
   var timerInterval = setInterval(function () {
      timeEl.textContent = secondsLeft + " seconds remaining.";
      secondsLeft--;

      if (secondsLeft < 0) {
         clearInterval(timerInterval)
         timeEl.textContent = "TIME IS UP!";
         timeIsUp=true;
         endGame();
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
   playRound();
   console.log("Put a breakpoint here.");
};  //Here ends the startGame function


function playRound() {

   // Check that we haven't run out of questions (Move to where answers are checked)
   if (qNum > listOfQs.length - 1) {
      console.log("No more questions.  Exit from playRound")
      endGame();
      return;
   }

   console.log("I am starting playRound on round " + qNum);
   updateQandA();
   // pickedA.addEventListener("click", () => {rightOrWrong(0, qNum)});
   // pickedB.addEventListener("click", () => {rightOrWrong(1, qNum)});
   // pickedC.addEventListener("click", () => {rightOrWrong(2, qNum)});
   // pickedD.addEventListener("click", () => {rightOrWrong(3, qNum)});
   resetListeners();  // This is where the player picks choice

   return;
}

function updateQandA() {
   // This function will replace the question and four choices
   console.log("Starting updateQandA for round " + qNum);
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

function resetListeners() {
   console.log("I am resetting the listeners for round " + qNum);
   pickedA = document.getElementById("choiceA");
   pickedB = document.getElementById("choiceB");
   pickedC = document.getElementById("choiceC");
   pickedD = document.getElementById("choiceD");

   // Replace all elements with new so that the listener set up earlier will not still be listening for old data
   //  https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
   var newPickedA = pickedA.cloneNode(true);
   pickedA.parentNode.replaceChild(newPickedA, pickedA);
   var newPickedB = pickedB.cloneNode(true);
   pickedB.parentNode.replaceChild(newPickedB, pickedB);
   var newPickedC = pickedC.cloneNode(true);
   pickedC.parentNode.replaceChild(newPickedC, pickedC);
   var newPickedD = pickedD.cloneNode(true);
   pickedD.parentNode.replaceChild(newPickedD, pickedD);

   // var newPickedA = document.getElementById("choiceA");
   // pickedA.replaceWith(newPickedA);
   // var newPickedB = document.getElementById("choiceB");
   // pickedB.replaceWith(newPickedB);
   // var newPickedC = document.getElementById("choiceC");
   // pickedC.replaceWith(newPickedC);
   // var newPickedD = document.getElementById("choiceD");
   // pickedD.replaceWith(newPickedD);


   newPickedA.addEventListener("click", () => {rightOrWrong(0, qNum)});
   newPickedB.addEventListener("click", () => {rightOrWrong(1, qNum)});
   newPickedC.addEventListener("click", () => {rightOrWrong(2, qNum)});
   newPickedD.addEventListener("click", () => {rightOrWrong(3, qNum)});
   console.log("I have set the listeners for round " + qNum);
}

function playerChooses() {
   // pickedA.removeEventListener("click", () => {rightOrWrong(0, qNum-1)});
   // pickedB.removeEventListener("click", () => {rightOrWrong(1, qNum-1)});
   // pickedC.removeEventListener("click", () => {rightOrWrong(2, qNum-1)});
   // pickedD.removeEventListener("click", () => {rightOrWrong(3, qNum-1)});
   return;
}

function rightOrWrong(choice, Num) {
   console.log("rightOrWrong thinks this is qNum " + qNum);
   if (listOfQs[Num].answer == choice) {
      choiceRightOrWrong(1);
   }
   else {
      choiceRightOrWrong(0);
   }
  console.log("I am waiting for an answer for round " + qNum);
}

function choiceRightOrWrong(num) {
   console.log("The choiceRorW is " + num);
   var showResult = document.createElement("div");
   // If time is up, then answer doesn't count.  Go to end of game function
   if (num == 1) {
      correctOrIncorrect = "Correct";
      gamePoints+=10;
   }
   else {
      correctOrIncorrect = "Incorrect";
      secondsLeft -= 30;  // Penalty of three seconds for wrong answer
   }
   console.log("CorrectOrIncorrect is " + correctOrIncorrect);
   showResult = document.querySelector("div");
   showResult.textContent= correctOrIncorrect;

   qNum++;
   //resetListeners();
   playRound();
}



function endGame() {
   // Put what to do here when the time has run out 
   // or if all questions are answered
 
   // Store the score, get input of user's name
    console.log("I am in the endGame function");
 }
 


// On click, start the game
// TO DO: Hide the four <li> items
var gameStart = document.getElementById("startBtn");
gameStart.addEventListener("click", startGame);



// Game is over.  Time to save the score.
// User "input" to get player initials
