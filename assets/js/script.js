// List of questions, as an array of objects
const listOfQs = [{
   question: "Which of these is not a constellation?",
   choices: ["Orion", "Little Dipper", "Big Dipper", "Crater"],
   answer: 2
},
{
   question: "How long is a day on the moon??",
   choices: ["About an Earth day", "About an Earth week", "About an Earth month", "About an Earth year"],
   answer: 2
},
{
   question: "The planet closest in size to Earth is which?",
   choices: ["Venus", "Neptune", "Mars", "Mercury"],
   answer: 0
},
{
   question: "The word planet comes from the Greek word meaning what?",
   choices: ["Lonesome", "Hero", "Solid", "Wanderer"],
   answer: 3
},
{
   question: "Pluto was visited for the first time by a spacecraft in 2015.  What was the name of the spacecraft?",
   choices: ["Voyager", "New Horizons", "Exploratron 2000", "Bert"],
   answer: 1
},
{
   question: "Comet Halley is next scheduled to be visible without telescopes in what year?",
   choices: ["2062", "4390", "2045", "3122"],
   answer: 0
},
{
   question: "The nearest major galaxy to Earth (not counting the one we are in) is which?",
   choices: ["Hercules Galaxy", "Ford Galaxie", "Difflers Galaxy", "Andromeda Galaxy"],
   answer: 3
},
{
   question: "Who was not one of the astronauts on the fictional Mars-bound spaceship Capricorn One?",
   choices: ["James Brolin", "Sam Waterston", "Telly Savalas", "O. J. Simpson"],
   answer: 2
},
{
   question: "Was this the best homework turned in?",
   choices: ["No", "YES! YES! YES!", "No", "No"],
   answer: 1
}
];

var qNum = 0;
var secondsLeft = 120; // Amount of time for the game
var timeIsUp = false;  // Change to true when out of time
var timeEl = document.querySelector(".time");
var playerInitials = "";
var gamePoints = 0;
var correctOrIncorrect = 0;
let pickedA, pickedB, pickedC, pickedD;  // For the listeners
var playerInits;
var storeTheScore = {
   playerInitials: playerInitials,
   gamePoints: gamePoints
};


function setTimeLeft() {
   var timerInterval = setInterval(function () {
      timeEl.textContent = secondsLeft + " seconds remaining.";
      secondsLeft--;

      if (secondsLeft < 0) {
         clearInterval(timerInterval)
         timeEl.textContent = "TIME IS UP!";
         timeIsUp = true;
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

   setTimeLeft();
   playRound();
};  //Here ends the startGame function


function playRound() {

   console.log("I am starting playRound on round " + qNum);
   updateQandA();
   resetListeners();  // This is where the player picks choice
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
   // Might be able to delete all of the replaceChild lines

   newPickedA.addEventListener("click", () => { rightOrWrong(0, qNum) });
   newPickedB.addEventListener("click", () => { rightOrWrong(1, qNum) });
   newPickedC.addEventListener("click", () => { rightOrWrong(2, qNum) });
   newPickedD.addEventListener("click", () => { rightOrWrong(3, qNum) });
   console.log("I have set the listeners for round " + qNum);
}

function rightOrWrong(choice, Num) {
// The listeners call this function to handle correct and incorrect answers.
// Num is the same as qNum.  It might be possible to remove that argument   
   if (listOfQs[Num].answer == choice) {
      choiceRightOrWrong(1);
   }
   else {
      choiceRightOrWrong(0);
   }
   console.log("I am waiting for an answer for round " + qNum);
}

// Actions to take if the choice was correct or incorrect
function choiceRightOrWrong(num) {
   var showResult = document.createElement("div");
   // If time is up, then answer doesn't count.  Go to end of game function
   if (secondsLeft > 0) {  // Player answered in time
      if (num == 1) {
         correctOrIncorrect = "Correct";
         if (qNum == 8) {
            gamePoints += 100000000;
         } else {
            gamePoints += 10;
         }
      }
      else {
         correctOrIncorrect = "Incorrect";
         secondsLeft -= 3;  // Penalty of three seconds for wrong answer
      }

      showResult = document.querySelector("div");
      showResult.textContent = correctOrIncorrect;

      qNum++;
      if (qNum > listOfQs.length - 1) {
         console.log("No more questions.  Go to end of game");
         secondsLeft = 0;
      }
      else {
         console.log("Starting another round");
         playRound();
      }
   }
   else {  // No time left to play another round
      showResult = document.querySelector("div");
      showResult.textContent = "Time is up. This question not scored.";
      endGame();
   }
}

function endGame() {

   // Make the h1 tag words say to enter your initials
   var changeQuestion = document.getElementById("question");
   changeQuestion.textContent = "Game is over.  Enter your initials.";
   // Clear the <ul>
   let e = document.querySelector("ol");
   let child = e.lastElementChild;
   while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
   }
   showResult = document.querySelector("div");
   showResult.textContent = "";

   enterPlayerName();
}

function enterPlayerName() {
   // Input: player initials, limit to three chars
   var myForm = document.createElement("form");    // Create a new form element
   myForm.setAttribute("id", "loginform");         // Set this ID for use with listener
   var withinDiv = document.querySelector("div");  // Find an existing element, the only div
   withinDiv.appendChild(myForm);                  // Insert the form tag
   //Repeat for the input tag
   var myInput = document.createElement("input");
   myInput.setAttribute("type", "text");
   myInput.setAttribute("id", "name");             // Use this to grab the name after listener
   myInput.setAttribute("minlength", "3");
   myInput.setAttribute("maxlength", "3");
   var withinForm = document.querySelector("form");
   withinForm.appendChild(myInput);
   // Repeat for the Submit button
   var mySubmitBtn = document.createElement("button");
   mySubmitBtn.setAttribute("type", "submit");
   mySubmitBtn.textContent = "Submit";
   withinForm.appendChild(mySubmitBtn);

   // Set a listener for the Submit Button
   let loginForm = document.getElementById("loginform");
   loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      playerInits = document.getElementById("name");
      var playerInitsUpper = playerInits.value.toUpperCase();

      submitToStorage(playerInitsUpper);
   });

}

function submitToStorage(playerUC) {
   console.log("I am in submitToStorage");
   storeTheScore.playerInitials = playerUC;
   storeTheScore.gamePoints = gamePoints;
   localStorage.setItem("storeTheScore", JSON.stringify(storeTheScore));

   showHighScores();
}



function showHighScores() {

   // Remove the existing <form>
   var byebyeForm = document.getElementById("loginform");
   byebyeForm.remove();

   // Get the initials and scores
   var getInitialFromStore = JSON.parse(localStorage.getItem("storeTheScore"));

   //Now add the lines with score

   var showScores = document.createElement("p");    // Create a new form element
   showScores.setAttribute("id", "xxx");            // Set this ID for use with listener
   showScores.textContent = "Player " + getInitialFromStore.playerInitials + " scored " + getInitialFromStore.gamePoints + " points.";
   var withinDiv = document.querySelector("div");   // Find an existing element, the only div
   withinDiv.appendChild(showScores);
}


// On click, start the game
var gameStart = document.getElementById("startBtn");
gameStart.addEventListener("click", startGame);

