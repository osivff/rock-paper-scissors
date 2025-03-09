let random;
let usrInput;
let humanScore = 0;
let computerScore = 0;
let count = 0;

function getComputerChoice(){
    random = Math.floor((Math.random() * 3) + 1);
    if(random === 1){
        return "rock";
    } else if(random === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    usrInput = prompt("Choose between rock, paper or scissors");
    return usrInput;
}

function playRound(humanChoice, computerChoice){

    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if(count < 4){
        count++;
        console.log(count);
        if(human === computer){
            console.log(`${human} and ${computer} are the same so it's a draw!`);
        } else {
            if(computer === "rock" && human != "paper"){
                computerScore++;
                console.log(`${computer} beats ${human}. Computer wins this round!`);
            } else if(computer === "paper" && human != "scissors"){
                computerScore++;
                console.log(`${computer} beats ${human}. Computer wins this round!`);
            } else if(computer === "scissors" && human != "rock"){
                computerScore++;
                console.log(`${computer} beats ${human}. Computer wins this round!`);
            } else {
                humanScore++;
                console.log(`${human} beats ${computer}. You win this round!`);
            }
        }
        console.log(`Score is - Computer: ${computerScore} | You: ${humanScore}`);
    } else if(count === 4){
        console.log(`Final Score: Computer ${computerScore} | Human ${humanScore}.`);
        if(computerScore > humanScore){
            console.log("COMPUTER WINS!");
        } else if(computerScore < humanScore) {
            return console.log("YOU WIN!");
        } else {
            return console.log("IT'S A DRAW!");
        }
    }
}

function playGame(){
    for(let i = 0; i <= 4; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
        
}