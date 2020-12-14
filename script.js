

// checking if app is connecting
console.log("App connecting");

// variable for timer
var timer = 300;
var display = document.querySelector('#time');
var myTimer;

// here writing function for timer
function startTimer() {
        myTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(myTimer);
        }
    }, 1000);
}

var start = document.getElementById("start");
var timebox = document.getElementById("timebox");
var instructions = document.getElementById("instructions");

//here adding event listener for timer start button.
$('#start').click(function(){
    startTimer();
    //loading function manually.
    loadQuestion(currentQuestion);
    container.style.display = '';
    timebox.style.display = '';
    instructions.style.display = 'none';
})

//Here creating variables to keep track of what question is currently being displayed
var currentQuestion = 0;
// Here creating a variable to keep track of the users score
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");
var initials = document.getElementById("initials");

// this function will load question.

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex + 1) + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
};
// This function will see if radio button is selected and if not alert will be displayed.
function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  // User did not make a choice -> 'selectedOption' = false
  if (!selectedOption) {
    alert("Please select your answer!");
    return;
  }
  // Once we get here then 'selectedOption' = true
  // loading the Users selecter answer choice into a variable
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 10;
  }
  else {
    timer -= 10;
  }
  // Here resetting the variable 'selectedOption' -> We are clearing the radio button inputs
  //    to be ready for the next question
  selectedOption.checked = false;
  // Incrementing our Question INDEX
  currentQuestion++;
  // currentQuestion = currentQuestion + 1;

  // Here checking to see if there are any more questions in our ARRAY
  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
  }
//Here making sure that score is displayed only at the end.
  if (currentQuestion == totQuestions) {
    clearInterval(myTimer);
    container.style.display = 'none';
    initials.style.display = '';

    return;
  }
  loadQuestion(currentQuestion);
}

//function to view Score
function viewScore(){
  var val = document.querySelector("#initalVal").value;
  if (!val) {
    alert("Please enter initials!");
    return;
  }
  localStorage.setItem("score", score);
  localStorage.setItem("initials", val);
  resultCont.textContent = 'Your Score : ' + score;
  resultCont.style.display = '';
}
