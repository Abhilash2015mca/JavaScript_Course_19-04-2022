
// let lapsCompleted = 0

// console.log(lapsCompleted)


// document.getElementById("count").innerText = 5

// cmd+k+c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// let username = 'per'
// console.log(username)

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "
// welcomeEl.innerText = greeting + name


let count = 0
let totalEntry = 0
let countStr = ""
let counterEl = document.getElementById("countId")
let previousEntryEl = document.getElementById("previousEntryId")
let totalEntryEl = document.getElementById("totalEntryId")
function increment(){
    count+=1
    displayCount()
}
function displayCount(){
    counterEl.innerText = count
}
function save(){
    countStr = countStr + count + " - "
    totalEntry = totalEntry+ count
    previousEntryEl.innerText = "Previous entries: "+countStr
    totalEntryEl.innerHTML = "Total entries: "+totalEntry
    counterEl.textContent = 0
    count = 0
}
