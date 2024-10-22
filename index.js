let humanScore = 0
let computerScore = 0

function getHumanChoice() {
    return prompt('Choose your weapon: rock, paper, scissors')
}

function getComputerChoice () {
    const weapons = ['rock', 'paper', 'scissors'] 
    return weapons[Math.floor(Math.random() * 3)];
}


function playGame() {

    function playRound() {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
    
        // determine round winner
        if (humanChoice === computerChoice) {
            // tie
            console.log(`You tie! ${computerChoice} ties ${humanChoice}`)
        } else if (
            // winning conditions 
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        } else {
            // losing conditions
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        }

        console.log(
            `After this round, score is human: ${humanScore}, computer: ${computerScore}`
        )
    }

    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    
}

// console.log(getHumanChoice())
// console.log(getComputerChoice())

playGame()