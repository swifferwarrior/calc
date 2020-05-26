# rock-paper-scissors
TOP: Rock, paper, scissors assignment
Introduction
We’re going to make a simple implementation of grade-school classic “rock paper scissors”. If you don’t know what that is check the wikipedia article or this ridiculous step-by-step. For the moment we’re just going to play the game from the browser console, but we will revisit it and add a front end later so don’t forget to keep the code on GitHub! You might notice some ‘view in browser’ links in the student solutions - this is coming in a later lesson. When you get there don’t forget to come back and add your link!

Assignment
Start a new git repo for your project.
Create a blank HTML document with a script tag. This game is going to be played completely from the console, so don’t worry about putting anything else in there.
Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)

Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results:

function playRound(playerSelection, computerSelection) {
	// your code here!
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
​

Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
At this point you should still just be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
Student Solutions
Submit a solution with a pull request to this file on the Javascript Curriculum github repository. See the section on Contributing for how.

CHALLENGES:
1. Scoring would not work as intended. Sometimes it would register score, sometimes it would not. Sometimes it would score the wrong participant. Culprit was postfix incrementation. Results were one round behind. Changed to prefix incrementation.

2. Scoring would not work on a round where a tie occurred. Originally, wins and losses were determined by singleRound(). If it was a tie, the singleRound would restart until there was a clear winner but the returned result would not register as a win or loss. Solution was to return all three kinds of results and handle the tie within the game(). Wins or losses would increment the correct score. Ties would decrement the round counter (i) so that ties wouldn't count as one of the five rounds.
