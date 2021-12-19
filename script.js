var computerResult = "D";
var userResult = "D";

var gameVersion = "";
var currentGameVersion = "normal";

console.log(currentGameVersion);

var name = window.prompt("Enter your name: ");
alert(
  `Hello ${name}!. We are playing a game of scissors, paper, stone. There are a total of 3 versions (Normal, Reverse,Korean) to this game. Have Fun! Good luck`
);

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

//condition where player win is true in normal gameplay winningHand is defined as the variable that should win the losing hand e.g. scissors should beat paper

var playerWinsTrue = function (winningHand, losingHand) {
  return (
    (winningHand == "scissors" && losingHand == "paper") ||
    (winningHand == "rock" && losingHand == "scissors") ||
    (winningHand == "paper" && losingHand == "rock")
  );
};

// helper function for normal SPS game
var normalSPSGame = function (userGuess, computerGuess) {
  var resultMessage1 = `-------Normal Mode --------<br><br>${name}: Played ${userGuess} <br> <br> Computer: Played ${computerGuess}.<br><br>`;
  // condition where player beats computer (normal SPS rules)
  if (playerWinsTrue(userGuess, computerGuess)) {
    return `${resultMessage1} ${
      userGuess.charAt(0).toUpperCase() + userGuess.slice(1)
    } beats ${computerGuess}. <br><br>You win! Awesome!`;
  }
  // condition where player's hand and computer's hand is the same
  if (userGuess == computerGuess) {
    return `${resultMessage1} It is a draw! No win no lose `;
  } else {
    return `${resultMessage1} ${
      computerGuess.charAt(0).toUpperCase() + computerGuess.slice(1)
    } beats ${userGuess}.<br><br>You lose!`;
  }
};

//helper function for reversed SPS game
var reverseSPSgame = function (userInput, computerOutput) {
  var resultMessage = `-------Reversed Mode --------<br><br>${name}: Played ${userInput} <br> <br> Computer: Played ${computerOutput}.<br><br>`;
  // in the case where the condition is reversed. winnng hand becomes losinghand and vice versa
  if (playerWinsTrue(computerOutput, userInput)) {
    return `${resultMessage} ${name} win!!!  `;
  } else if (userInput == computerOutput) {
    return `${resultMessage} It is a draw. `;
  } else {
    return `${resultMessage} ${name} lose!!!`;
  }
};

//helper function for korean game
var koreanGame = function (userInput, computerOutput) {
  var standardMessageOutput = `-------MukJjiPpa!! --------<br><br>${name}: Played ${userInput}<br> <br> Computer: Played ${computerOutput}<br> <br> `;
  if (playerWinsTrue(userInput, computerOutput)) {
    userResult = "W";
    computerResult = "L";
    return `${standardMessageOutput} ${name}: MukJjiPpa!<br>`;
  } else if (userInput == computerOutput) {
    userResult = "D";
    var messageForDraw = `${standardMessageOutput} It is a draw!`;
  } else {
    userResult = "L";
    computerResult = "W";
    return `${standardMessageOutput} Computer: MukJjiPpa!<br>`;
  }
  if (userResult == "D" && computerResult == "D") {
    return `${standardMessageOutput}It is a draw! `;
    // if first round is not a draw, game continues
  } else {
    // when there is a draw, userResult will be declared as D, computerResult will store the previous round result (either W/L)
    if (userResult == "D") {
      // if computerResult is W, means previous round, computer win. otherwise is true.
      if (computerResult == "W") {
        return `${standardMessageOutput} Sadly, you lost this round! Don't be discouraged, try again!  `;
      } else
        return `${standardMessageOutput} The game has ended. You won! What luck!!!`;
    }
  }
};

// helper function to change game mode

var playGame = function (currentGameVersion, input) {
  var computerOutput = computerGenerates();

  if (currentGameVersion == "reverse") {
    if (input != "scissors" && input != "paper" && input != "rock") {
      return "Please key in scissors, paper or rock";
    }
    return reverseSPSgame(input, computerOutput);
  }
  if (currentGameVersion == "korean") {
    if (input != "scissors" && input != "paper" && input != "rock") {
      return "Please key in scissors, paper or rock";
    }
    return koreanGame(input, computerOutput);
  }
  if (currentGameVersion == "normal") {
    if (input != "scissors" && input != "paper" && input != "rock") {
      return "Please key in scissors, paper or rock";
    }
    return normalSPSGame(input, computerOutput);
  }
};
var main = function (input) {
  // if input is not any of these, it is an invalid input.
  if (
    input != "scissors" &&
    input != "paper" &&
    input != "rock" &&
    input != "korean" &&
    input != "normal" &&
    input != "reverse"
  ) {
    return "This is an invalid input. Please enter game mode you wish to enter: 1. normal 2. reverse 3. korean";
  }
  //if player keys in scissors,paper or stone. play normal sps game

  if (input == "scissors" && input == "paper" && input == "rock") {
    return normalSPSGame();
  }
  if (currentGameVersion == "normal" || currentGameVersion == "korean") {
    if (input == "reverse") {
      gameVersion = input;
      currentGameVersion = "reverse";
      return "You are entering the reverse mode";
    }
  }
  if (currentGameVersion == "normal" || currentGameVersion == "reverse") {
    if (input == "korean") {
      gameVersion = input;
      currentGameVersion = "korean";
      return "You are entering the korean mode";
    }
  }
  if (currentGameVersion == "reverse" || currentGameVersion == "korean") {
    if (input == "normal") {
      gameVersion = input;
      currentGameVersion = "normal";
      return "You are entering the normal mode";
    }
  }
  var gameModeResult = playGame(currentGameVersion, input);
  return gameModeResult;
};
