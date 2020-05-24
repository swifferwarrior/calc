let rockBtn = document.getElementById("rockId");
let paperBtn = document.getElementById("paperId");
let scissorsBtn = document.getElementById("scissorsId");

function playRock(){
  console.log('Button pressed');
  singleRound("rock", computerPlay());
}

function playPaper(){
  console.log('Button pressed');
  singleRound("paper",computerPlay());
}

function playScissors(){
  console.log('Button pressed');
  singleRound("scissors",computerPlay());
}

rockBtn.addEventListener("click", () => playRock());
paperBtn.addEventListener("click", () => playPaper());
scissorsBtn.addEventListener("click", () => playScissors());

function computerPlay() {
  //will randomply return either rock, paper, or scissors
  console.log('Computer chose');
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

function singleRound(playerSelection, computerSelection) {
  let roundChoices = document.getElementById("round-choices");
  let yourChoice = "Your selection is " + playerSelection;
  let compChoice = "The computer chose " + computerSelection;

  roundChoices.innerHTML = yourChoice + "<br>" + compChoice ;

  console.log("Your selection is " + playerSelection);
  console.log("The computer chose " + computerSelection);

  let roundResult = document.getElementById("round-result");
  let win = 'You Win! ' + properNoun(playerSelection) + ' beats ' + properNoun(computerSelection);
  let lose = 'You Lose! ' + properNoun(computerSelection) + ' beats ' + properNoun(playerSelection);
  let tie = 'Tie! Try again.';

  if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      roundResult.innerHTML = lose;
      console.log(lose);
//      result = 'lose';
      compScored();
      //      ++computerScore;
    } else if (computerSelection == 'scissors') {
      roundResult.innerHTML = win;
      console.log(win);
//      result = 'win';
      playerScored();
      //      ++playerScore();
    } else if (computerSelection == 'rock') {
      roundResult.innerHTML = tie;
      console.log(tie);
//      result = 'tie';;
    }

  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      roundResult.innerHTML = win;
      console.log(win);
//      result = 'win';
      playerScored();
      //      ++playerScore();
    } else if (computerSelection == 'scissors') {
      roundResult.innerHTML = lose;
      console.log(lose);
//      result = 'lose';
      compScored();
      //      ++computerScore;
    } else if (computerSelection == 'paper') {
      roundResult.innerHTML = tie;
      console.log(tie);
//      result = 'tie';
    }

  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'paper') {
      roundResult.innerHTML = win;
      console.log(win);
//      result = 'win';
      playerScored();
      //      ++playerScore();
    } else if (computerSelection == 'rock') {
      roundResult.innerHTML = lose;
      console.log(lose);
//      result = 'lose';
      compScored();
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
//      result = 'win';
      playerScored();
      //      ++playerScore();
    } else if (computerSelection == 'scissors') {
      roundResult.innerHTML = lose;
      console.log(lose);
//      result = 'lose';
      compScored();
      //      ++computerScore;
    } else if (computerSelection == 'paper') {
      roundResult.innerHTML = tie;
      console.log(tie);
//      result = 'tie';
    }
  }
  winCheck();
};

function playerScored(){
  console.log('Player score updated')
  let score = document.getElementById('pScore');
//  let score = p.textContent;
  console.log('Player is now ' + score.textContent);
  let newScore = Number(score.textContent);
  newScore++;
  score.innerHTML = newScore;
}

function compScored(){
  console.log('Computer score updated')
  let score = document.getElementById('cScore');
  console.log("Computer is now " + score.textContent);
  let newScore = Number(score.textContent);
  newScore++;
  score.innerHTML = newScore;
}

  function properNoun(word) {
    if (typeof word === 'string') {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return null;
  };

 function winCheck(){
    let youWin = document.getElementById('pScore');
    let compWins = document.getElementById('cScore');
    let winner = document.getElementById('winner');

    if (youWin.textContent == "5"){
      winner.innerHTML = "YOU WIN!";
      winner.style.display = "block";
    } else if (compWins.textContent == "5"){
      winner.innerHTML = "COMPUTER WINS!";
      winner.style.display = "block";
    }
    return null;
  };