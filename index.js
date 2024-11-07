const chooseRock = document.querySelector("#rock")
const choosePaper = document.querySelector("#paper")
const chooseScissors = document.querySelector("#scissors")
const results = document.querySelector('.results')
const score = document.querySelector('.score')

chooseRock.addEventListener('click', playRound)
choosePaper.addEventListener('click', playRound)
chooseScissors.addEventListener('click', playRound)


function showClick() {
    console.log('scissors clicked')
}

function getComputerChoice () {
    const weapons = ['rock', 'paper', 'scissors'] 
    return weapons[Math.floor(Math.random() * 3)];
}

let humanScore = 0
let computerScore = 0

function playRound(e) {
    const humanChoice = e.target.id
    const computerChoice = getComputerChoice()
    let message = ''

    // determine round winner
    if (humanChoice === computerChoice) {
        // tie
        console.log(`You tie! ${computerChoice} ties ${humanChoice}`)
        message = `You tie! ${computerChoice} ties ${humanChoice}`
    } else if (
        // winning conditions 
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        message = `You win! ${humanChoice} beats ${computerChoice}`
        humanScore++;
    } else {
        // losing conditions
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
        message = `You lose! ${computerChoice} beats ${humanChoice}`
    }
    
    results.innerText = message

    console.log(
        `After this round, score is human: ${humanScore}, computer: ${computerScore}`
    )
    score.innerText = `After this round, score is human: ${humanScore}, computer: ${computerScore}`
}

// playRound()
// playRound()
// playRound()
// playRound()
// playRound()