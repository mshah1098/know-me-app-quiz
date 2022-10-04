var readlineSync = require('readline-sync');

var userName = readlineSync.question("Enter Your Name.: ");

console.log(`Hi ${userName}! , Welcome to the Quiz`);

console.log("----------------");

var score = 0;
function qna(question, answer) {
  var userAnswer = readlineSync.question(question);
  var result = userAnswer.toLocaleLowerCase()

  if (result === answer) {
    console.log("Right")
    score = score + 1;
  }
  else {
    console.log("No, The correct answer is " + answer);
  }


}

qna("Where the meet live? ", "hmt");
qna("Where the meet work? ", "wip");
qna("Wich his favourite food item? ", "pizza");
qna("Wich his favourite game? ", "cricket");
qna("Wich his favourite movie? ", "Sholay");

console.log("Your final score is ", score);

