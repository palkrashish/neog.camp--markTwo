var readlineSync = require ('readline-sync');
var score = 0;

var userName = readlineSync.question("Hi!! Welcome to the Quiz on the company of CEO and inventor:- ");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log("Right");
    score = score + 1;
  }
  else {    
      console.log("Wrong!!The correct answer is "+answer);        
  }
  console.log("Current Score : " + score);
  console.log("------------------------------");
}



var questions = [{
  question: "Who is father of Internet:- ",
  answer: "Vint Cerf"
},
 {
  question: "Who is current CEO of Google:- ",
  answer: "Sundar Pichai"
}
,{
  question: "Who is invented node.js:- ",
  answer: "Ryan Dahl"
} 
,{
  question: "Who is invented JavaScript:- ",
  answer: "Brendan Eich"
}
,{
  question: "Who is invented ReactJS:- ",
  answer: "Jordan Walke"
}

,{
  question: "When was react JS created?: ",
  answer: "29 May 2013"
}];

for (var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Yep!!, You total SCORED:-  " +score);

