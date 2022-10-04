var readlineSync = require('readline-sync');

var userName = readlineSync.question("Enter Your Name.: ");

console.log(`Hi ${userName}! , Welcome to the Quiz`);

console.log("----------------");

var score = 0;
function qna(question, answer) {
  var userAnswer = readlineSync.question(question);
  var result = userAnswer.toLocaleLowerCase()

  if (userAnswer === result) {
    console.log("Right")
    score = score + 1;
  }


}

qna("Where the meet live? ", "HMT");
qna("Where the meet work? ", "Wipro");

console.log("Your final score is ", score);

