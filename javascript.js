// Global Variables


let rock = "rock";
let paper = "paper";
let scissors = "scissors";



// Computer Rng Choice Function

function getComputerChoice () {
    let random = Math.random();
    if (random <= 0.33) {
        console.log('Computer gets Rock');
        return rock;
    } else if (random > 0.33 && random < 0.66) {
        console.log('Computer gets Paper');
        return paper;
    } else if (random >= 0.66) {
        console.log('Computer gets Scissors');
        return scissors;
    }
 }

 // Human Choice Function
 
 function getHumanChoice () {
    
    let sign = prompt("Type 'Rock' 'Paper' or 'Scissors'").toLowerCase();
    
    if (sign == rock) {
        console.log("You choose Rock");
        return sign;
    } else if (sign == paper) {
        console.log("You Choose Paper");
        return sign;
    } else if (sign == scissors) {
        console.log("You Choose Scissors");
        return sign;
    }
    
 }

// Choice Functions to Const Variables

// 5 Rounds Function playGame

function playGame () {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
   
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

         if (humanSelection == rock && computerSelection == paper) {
            console.log("You win!");
            humanScore++;
           
        } else if (humanSelection == rock && computerSelection == scissors) {
            console.log("You win!");
            humanScore++;
           
        } else if (humanSelection == computerSelection) {
            console.log("Tie!");
        } else if (humanSelection == paper && computerSelection == rock) {
            console.log("You win!");
            humanScore++;
        } else if (humanSelection == paper && computerSelection == scissors) {
            console.log("You lose!");
            computerScore++;
        } else if (humanSelection == scissors && computerSelection == rock) {
            console.log("You lose!");
            computerScore++;
        } else if (humanSelection == scissors && computerSelection == paper) {
            console.log("You win!");
            computerScore++;
            
        }   console.log("You have " + humanScore + " Points and the Computer has " + computerScore + " Points");
            return;
                    
            // Calling Round 5 times
    
    } playRound();
      playRound();
      playRound();
      playRound();
      playRound();
         
        // Result Message

      if (humanScore > computerScore) {
        alert("You won the Game!");
      } else if (computerScore > humanScore) {
        alert("Computer won the Game!");
      } else if (computerScore == humanScore) {
        alert("Tie!");
      }


} 

// calling playGame Function

playGame();


