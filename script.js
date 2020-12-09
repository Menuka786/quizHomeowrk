// checking if app is connecting
console.log("App connecting");

//setting variable for start button
var startButton = document.getElementsByClassName("btn btn-danger");


// here writing function for timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
//here adding event listener for timer start button. 
startButton[0].addEventListener("click", function(){



    var fiveMinutes = 60 * 5,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
   
    

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

// this function will load question. 

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex + 1) + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
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
    container.style.display = 'none';
    resultCont.style.display = '';
    resultCont.textContent = 'Your Score : ' + score;
    
    return;
  }
  loadQuestion(currentQuestion);
}
//loading function manually. 
loadQuestion(currentQuestion);


  