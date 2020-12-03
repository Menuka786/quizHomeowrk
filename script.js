var startButton = document.querySelector('button');



 function startTimer (duration, display) {
     var timer = duration, minutes, seconds;
     setInterval(function (){
         minutes = parseInt(timer / 60,10);
         second = parseInt(timer % 60,10);
         + minutes : minutes;
         seconds = seconds < 10 ? "0" + seconds : seconds;
         display.textContent = minutes + ":" + seconds;

         if (--timer < 0) {
             timer = duration;
         }
     }, 1000);
 }
 
 window.onload = function () {
     var fiveMinutes = 60 * 5,
         display = document.querySelector('#time');
     startTimer(fiveMinutes, display);
 };


 startButton.addEventListener('click', startTimer);
 

 var quizQuestions = [
    
    {
        question: "Who wrote first version of HTML?",
answer : {
    a: "Tim Berners Lee",
b: "Mike Berners-Lee",
c: "Larry page"
    },
    correctAnswer: "a"
},
{
    question: "Who invented JavaScript?",
answer : {
    a: "Tim Berners Lee",
b: "Brendan Eich",
c: "Sheryl Sandberg"
    },
    correctAnswer: "c"

},
 { 
     question: " What is the full form of CSS?",
 answer :{
a: "Cascading Style Sheets",
b: "Cascading Style System",
c: "Customer Stye Sheets"
},
correctAnswer : "a"

 }

]
