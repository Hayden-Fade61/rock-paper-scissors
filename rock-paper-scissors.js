const buttons = document.querySelectorAll(".ui-button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase());
    });
});

function playGame(){
    let numRounds = 5;
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i<numRounds; i++){
        let outcome = playRound();
        if(outcome == 0){
            continue;
        }
        else if(outcome == 1){
            humanScore++;
        }
        else{
            computerScore++;
        }
    }
    console.log(`Final scores\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
    if(humanScore > computerScore){
        console.log("You won fair and square partner. I tip my hat to you, one legend to another.");
    }
    else if (computerScore > humanScore){
        console.log("You lose... Tough going there partner, we'll get em next time!");
    }
    else{
        console.log("A draw. How's about we call it even Stevens and get a drink?");
    }
}

function playRound(playerChoice) {
    const outputContainer = document.querySelector("#results-container");
    let compChoice = getComputerInput();
    let outcome = decideWinner(compChoice, playerChoice);
    const OUTCOMES = [
        "A draw! Looks like a good old fashioned Mexican standoff!",
        "You win! Yeehaw! Nice going there partner!",
        "You lose! Better luck next time partner..."
    ];
    displayOutput(outputContainer, `Player selected: ${playerChoice}`);
    displayOutput(outputContainer, `Computer selected: ${compChoice}`);
    displayOutput(outputContainer, OUTCOMES[outcome]);
    return outcome;
}

function displayOutput(parent, msg) {
    const outputTag = document.createElement("p");
    outputTag.textContent = msg;
    parent.appendChild(outputTag);
}

function clearOutput(outputTag){
    
}

function getComputerInput() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function decideWinner(humanChoice, compChoice){
    if(humanChoice == compChoice){
        return 0; // Draw
    }
    let choices = ["rock", "paper", "scissors"];
    let humanChoiceIndex = choices.indexOf(humanChoice);
    let compChoiceIndex = choices.indexOf(compChoice);
    if(humanChoiceIndex == (compChoiceIndex + 1) % choices.length){
        return 2; // Computer win
    }
    else{
        return 1; // Human win
    }
}