
const player = "Ramu"
const opponent = "Damu"
const game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon) {
    console.log(` ${player}  got ${points} points and won the ${game } game!`)
} else {
    console.log(`The winner is ${opponent}!  ${player} lost the game`)
}

let myCousres = ["Learn","CSS","UI"]
function logItems(array){
    for(let index =0;index<array.length;index++){
        console.log(array[index])
    }
}

logItems(myCousres)
