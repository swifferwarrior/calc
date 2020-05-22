const rockBtn = document.getElementById("rockId");
const paperBtn = document.getElementById("paperId");
const scissorsBtn = document.getElementById("scissorsId");

rockBtn.addEventListener("click", () => playRock());
paperBtn.addEventListener("click", () => playPaper());
scissorsBtn.addEventListener("click", () => playScissors());

        const pScore = document.getElementById(playerScore);
        const cScore = document.getElementById(compScore);

//let playerScore = 0;
//let computerScore = 0;
//let rounds = 0;

let roundResult;

function computerPlay() {
  //will randomply return either rock, paper, or scissors
  let choice = '';

  switch (Math.floor(Math.random() * 3)) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
  }

  return choice;
};
function playerPlay(choice) {
  return choice;
}

function singleRound(playerSelection, computerSelection) {
  const roundChoices = document.getElementById("round-choices");
  const yourChoice = "Your selection is " + playerSelection;
  const compChoice = "The computer chose " + computerSelection;

  roundChoices.innerHTML = yourChoice + "<br>" + compChoice ;

  console.log("Your selection is " + playerSelection);
  console.log("The computer chose " + computerSelection);

  let win = 'You Win! ' + properNoun(playerSelection) + ' beats ' + properNoun(computerSelection);
  let lose = 'You Lose! ' + properNoun(computerSelection) + ' beats ' + properNoun(playerSelection);
  let tie = 'Tie! Try again.';
  const roundResult = document.getElementById("round-result");
  let result;

  if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      roundResult.innerHTML = lose;
      console.log(lose);
      result = 'lose';
      //      ++computerScore;
    } else if (computerSelection == 'scissors') {
      roundResult.innerHTML = win;
      console.log(win);
      result = 'win';
      //      ++playerScore();
    } else if (computerSelection == 'rock') {
      roundResult.innerHTML = tie;
      console.log(tie);
      result = 'tie';;
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      roundResult.innerHTML = win;
      console.log(win);
      result = 'win';
      //      ++playerScore();
    } else if (computerSelection == 'scissors') {
      roundResult.innerHTML = lose;
      console.log(lose);
      result = 'lose';
      //      ++computerScore;
    } else if (computerSelection == 'paper') {
      roundResult.innerHTML = tie;
      console.log(tie);
      result = 'tie';
    }

  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'paper') {
      roundResult.innerHTML = win;
      console.log(win);
      result = 'win';
//      ++playerScore();
    } else if (computerSelection == 'rock') {
      roundResult.innerHTML = lose;
      console.log(lose);
      result = 'lose';
      //      ++computerScore;
      //computerScore++;
    } else if (computerSelection == 'scissors') {
      roundResult.innerHTML = tie;
      console.log(tie);
      result = 'tie';
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      roundResult.innerHTML = win;
      console.log(win);
      result = 'win';
      //      ++playerScore();
    } else if (computerSelection == 'scissors') {
      roundResult.innerHTML = lose;
      console.log(lose);
      result = 'lose';
      //      ++computerScore;
    } else if (computerSelection == 'paper') {
      roundResult.innerHTML = tie;
      console.log(tie);
      result = 'tie';
    }
  }

  //  ++rounds;

  roundResult = result;
};

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    //singleRound(playerPlay(),computerPlay())
    let result = roundResult;

    if (result == 'win') {
      ++playerScore;
      pScore.innerHTML(playerScore);
       console.log("Player: " + playerScore + "/n" + "Computer: " + computerScore);
    } else if (result == 'lose') {
      ++computerScore;
      cScore.innerHTML(computerScore);
       console.log("Player: " + playerScore + "/n" + "Computer: " + computerScore);
    } else if (result == 'tie') {
      if (i < 1) {
        i = 0;
      } else {
        --i;
      }
    }

    console.log("Score - Player: " + playerScore + ", Computer: " + computerScore);

  }

  if (playerScore > computerScore) {
    console.log('You win!');
    console.log("Score - Player: " + playerScore + ", Computer: " + computerScore);
  } else {
    console.log('You lose!')
    console.log("Score - Player: " + playerScore + ", Computer: " + computerScore);
  }
};

function getScore(){
  console.log("Score - Player: " + playerScore + ", Computer: " + computerScore);
}

function properNoun(word) {
  if (typeof word === 'string') {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return null;
};

function choose(choice) {
  return choice;
}

function playRock(){
  singleRound("rock", computerPlay());
  return;
}

function playPaper(){
  singleRound("paper",computerPlay());
  return;
}

function playScissors(){
  singleRound("scissors",computerPlay());
  return;
}


