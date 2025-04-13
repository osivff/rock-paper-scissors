let random;
let usrInput;
let humanScore = 0;
let computerScore = 0;
let count = 0;
let humanChoice = '';
const board = document.querySelector('.human-choice');
const result = document.querySelector('.result');


function getComputerChoice(){
    random = Math.floor((Math.random() * 3) + 1);
    if(random === 1){
        return "rock";
    } else if(random === 2){
        return "paper";
    } else {
        return "scissor";
    }
}

 board.addEventListener('click', (e) => {
    humanChoice = e.target.innerText;
});


function playRound(humanChoice, computerChoice){

    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    const para = document.createElement('p');
    const currentScore = document.createElement('p');
    const finalScore = document.createElement('p');
    const winner = document.createElement('p');

    if(count < 4){
        count++;
        if(human === computer){
            para.textContent = `${human} and ${computer} are the same so it's a draw!`;
        } else {
            if(computer === "rock" && human != "paper"){
                computerScore++;
                para.textContent = `${computer} beats ${human}. Computer wins this round!`;

            } else if(computer === "paper" && human != "scissors"){
                computerScore++;
                para.textContent = `${computer} beats ${human}. Computer wins this round!`;

            } else if(computer === "scissor" && human != "rock"){
                computerScore++;
                para.textContent = `${computer} beats ${human}. Computer wins this round!`;
                
            } else {
                humanScore++;
                para.textContent = `${human} beats ${computer}. You win this round!`;
            }
        }
        currentScore.textContent = `Score is - Computer: ${computerScore} | You: ${humanScore}`;
        
    } else if(count === 4){
        finalScore.textContent = `Final Score: Computer ${computerScore} | Human ${humanScore}.`;

        if(computerScore > humanScore){
            winner.textContent = "COMPUTER WINS!";
        } else if(computerScore < humanScore){
            winner.textContent = "YOU WIN!";
        } else{
            winner.textContent = "IT'S A DRAW!";
        }
    }
    result.appendChild(para);
    result.appendChild(currentScore);
    result.appendChild(finalScore);
    result.appendChild(winner);
}


board.addEventListener('click', (e) => {
    playRound(humanChoice, getComputerChoice());
});