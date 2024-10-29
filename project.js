// Rock Paper Scissors Project


// Computer Choice


function getComputerChoice() { // this function randomly returns values
    let random = Math.random();
    let rock = "Rock";
    let paper = "Paper"
    let scissors = "Scissors"

    if (random <= 0.333) {
        console.log("CPU has Rock");
        return rock;
    } else if (random >= 0.333 && random <= 0.666) {
        console.log("CPU has Paper");
        return paper;
    } else if (random > 0.666) {
        console.log("CPU has Scissors");
        return scissors;
    }
    console.log(getComputerChoice);
    return random;

}
    
    



// Human Choice

function getHumanChoice () { // Input from User
    let input = prompt("What do you take? Rock, Paper, or Scissors?");
    if (input == "Rock") {
        console.log("You got Rock")
    } else if (input == "Paper") {
        console.log("You got Paper");
    } else if (input == "Scissors")
        console.log("You got Scissors");
        else {
            console.log("Wrong Input");
        }
    
        return input;
    
}



// Glocal Variable Scores

let humanScore = 0;
let computerScore = 0;


// Single Round Logic



function playRound (humanChoice, computerChoice) {
    
    
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
       console.log("You Win! Rock beats Scissors");
       humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors", computerScore++);
    } else if (humanChoice == computerChoice) {
        console.log("Tie!");
    }  else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            console.log("You Win! Scissors beat Paper", computerScore++);
     } else {
        console.log("nothing");
    }

        console.log("You have " + humanScore +  " Points." + " CPU has " + computerScore + " Points.");

        
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); // ausführen

function playGame() {
    // 5 Game Rounds
    playRound(humanSelection, computerSelection);
   
}

