let firstCard = getRandomCard()
let secondCard = getRandomCard() 
let sum = firstCard + secondCard
let message = ""
let life = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let newCard_El = document.getElementById("newCard-el")
let startGame_El = document.getElementById("startGame-el")
let player = {
    name: "Ramu",
    rating: 0
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.rating

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard+" "
    renderGame()
}
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        startGame_El.parentNode.removeChild(startGame_El)
    } 
    
    else if (sum === 21) {
        message = "You've got Blackjack!"
        messageEl.textContent = message
        newCard_El.parentNode.removeChild(newCard_El)
        startGame_El.parentNode.removeChild(startGame_El)
        player.rating+=100
        playerEl.textContent = player.name + ": $" + player.rating
    } 
    
    else {
        message = "You're out of the game!"
        messageEl.textContent = message
        newCard_El.parentNode.removeChild(newCard_El)
        startGame_El.parentNode.removeChild(startGame_El)
        alert(message);
    }
    
}


function newCard() {
    let card = getRandomCard() 
    sum += card
    cardsEl.textContent =  cardsEl.textContent+ " " + card
    renderGame()
    
}