/**************************************************
* List of questions                               *
**************************************************/
var q1={question: "what letter comes after a?",
        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",
        answer: 1};
var q2={question: "what letter comes before z?",
        choice1: "w",
        choice2: "x",
        choice3: "y",
        choice4: "a",
        answer: 2};

// Variables and arrays



// Functions
function questions() {
//alert("You have clicked.");
//start 'for' loop
// Each loop will first look for <h1>
//Replace <h1> text with q?:question
var changeQuestion = document.getElementById("question");
//console.log("changeQuestion is :" + changeQuestion);
changeQuestion.textContent = q1.question;

//Do a querySelectorAll for <li>
//Replace <li>[0] with choice1, <li>[1] with choice2, etc.
var changeChoices = document.querySelectorAll("#choiceBtn");
console.log("changeChoices is :");
console.log(changeChoices);
changeChoices[0].textContent=q1.choice1;
changeChoices[1].textContent=q1.choice2;
changeChoices[2].textContent=q1.choice3;
changeChoices[3].textContent=q1.choice4;

// Use hover to change color of answer being hovered over.

// Remove the button


//How can we get it to know which is the right answer?  
// The correct answer is given in the qX object.
// Do we set up four different eventListeners, one for each choice?
//Do queryelectorAll on the <li>, then loop through
var lookForRightAnswer = document.querySelectorAll("#choice");
for (var i = 0; i < lookForRightAnswer.length; i++) {
        lookForRightAnswer[i].addEventListener("click", function(event) {
        alert("You clicked on a choice.") // See if the clicked answer matches object.answer
            // Will need to do a 
        })};

};  //This goes to the  start of the questions function
//onclick, start the game
var gameStart = document.getElementById("myBtn");
gameStart.addEventListener("click", questions);


