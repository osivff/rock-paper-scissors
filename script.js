let random;
let usrInput;
let humanScore = 0;
let computerScore = 0;
let count = 0;
let humanChoice = '';
const choices = document.querySelector('.human-choice');
const result = document.querySelector('.result');
const body = document.body;


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

 choices.addEventListener('click', (e) => {
    humanChoice = e.target.innerText;
});


function playRound(humanChoice, computerChoice){

    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    const para = document.createElement('p');
    const currentScore = document.createElement('p');
    const finalScore = document.createElement('p');
    const winner = document.createElement('p');
    const resetBtn = document.createElement('button');

    if(count < 5){
        count++;
        if(human === computer){
            para.textContent = `${human.toUpperCase()} and ${computer.toUpperCase()} are the same so it's a draw!`;
        } else {
            if(computer === "rock" && human != "paper"){
                computerScore++;
                para.textContent = `${computer.toUpperCase()} beats ${human.toUpperCase()}. Computer wins this round!`;

            } else if(computer === "paper" && human != "scissor"){
                computerScore++;
                para.textContent = `${computer.toUpperCase()} beats ${human.toUpperCase()}. Computer wins this round!`;

            } else if(computer === "scissor" && human != "rock"){
                computerScore++;
                para.textContent = `${computer.toUpperCase()} beats ${human.toUpperCase()}. Computer wins this round!`;
                
            } else {
                humanScore++;
                para.textContent = `${human.toUpperCase()} beats ${computer.toUpperCase()}. You win this round!`;
            }
        }
        currentScore.textContent = `Score is - Computer: ${computerScore} | You: ${humanScore}`;
        
    } else if(count === 5){
        count++;
        finalScore.textContent = `Final Score: Computer ${computerScore} | Human ${humanScore}.`;
        if(computerScore > humanScore){
            winner.textContent = "COMPUTER WINS!";
        } else if(computerScore < humanScore){
            winner.textContent = "YOU WIN!";
        } else{
            winner.textContent = "IT'S A DRAW!";
        }
        result.appendChild(finalScore);
        result.appendChild(winner);

        resetBtn.textContent = 'Play Again!';
        result.appendChild(resetBtn);
        resetBtn.addEventListener('click', () => {
            count = 0;
            computerScore = 0;
            humanScore = 0;
            result.textContent = '';
        });
    }
    result.appendChild(para);
    result.appendChild(currentScore);
};


choices.addEventListener('click', () => {
    // body.appendChild(result);
    playRound(humanChoice, getComputerChoice());
});