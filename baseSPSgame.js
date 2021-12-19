//Win-loss Record
// to keep track of the number of times the user has won and the number of times the computer has won.
// define global variables - countOfWinOfUser and countOfWinOfComputer

var countOfWinOfUser = 0;
var countOfWinOfComputer = 0;
var countOfDraw = 0;
var totalPlayCount = 0;

var name = window.prompt("Enter your name: ");
alert(
  `Hello ${name}!. We are playing a game of scissors, paper, stone. Have Fun! Good luck ☺️`
);

console.log("total play count");
console.log(totalPlayCount);

//generate random number - assign to a function
var randomNumberGenerator = function () {
  //random decimal from 1 to 4, excluding 4
  var randomDecimal = Math.random() * 3 + 1;
  var randomInteger = Math.floor(randomDecimal);

  return randomInteger;
};

var computerGenerates = function (number) {
  var number = randomNumberGenerator();
  if (number == 1) {
    return "scissors";
  }
  if (number == 2) {
    return "paper";
  }
  if (number == 3) {
    return "rock";
  }
};

var main = function (input) {
  if (input !== "scissors" && input !== "paper" && input !== "rock") {
    return "This is an invalid input. <br>Please enter scissors, paper or rock. ";
  }
  var computerOuput = computerGenerates();
  console.log(computerOuput);
  var resultMessage = `Player's guess is ${input} while computer's guess is ${computerOuput}.`;
  totalPlayCount += 1;
  // condition where player beats computer

  if (
    (input == "scissors" && computerOuput == "paper") ||
    (input == "rock" && computerOuput == "scissors") ||
    (input == "paper" && computerOuput == "rock")
  ) {
    countOfWinOfUser += 1;
    console.log("count of win of user");
    console.log(countOfWinOfUser);
    var percentageWin = (countOfWinOfUser / totalPlayCount) * 100;

    return `Player wins.<br> ${resultMessage} <br>${
      input.charAt(0).toUpperCase() + input.slice(1)
    } beats ${computerOuput} <br> Percentage win of player is ${percentageWin}%. So far ${name}, you have been winning ${countOfWinOfUser}/${totalPlayCount}turns. Not bad!`;
  }
  // condition where player's hand and computer's hand is the same
  if (input == computerOuput) {
    countOfDraw += 1;
    console.log("count of draw");
    console.log(countOfDraw);

    var percentageDraw = (countOfDraw / totalPlayCount) * 100;
    return `It is a draw! <br>${resultMessage}<br> Percentage draw is ${percentageDraw}%.<br>`;
  } else {
    countOfWinOfComputer += 1;
    console.log("count of win of computer");
    console.log(countOfWinOfComputer);

    var percentageComputerWin = (countOfWinOfComputer / totalPlayCount) * 100;
    return `Player loses.<br> ${resultMessage} <br>${computerOuput} beats ${input}.<br> Percentage win of computer = ${percentageComputerWin}%`;
  }
};
