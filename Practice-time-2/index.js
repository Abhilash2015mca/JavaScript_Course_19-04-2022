//Objects
let person = {
    name: "Abhilash",
    age: "23",
    country: "India"
}
function logData(){
    console.log(`${person.name} is  ${person.age} years old and lives in ${person.country}`)
}


//if else
let age = Math.ceil(Math.random()*100)

if(age<6){
    console.log("free")
}
else if(age<18){
    console.log("Child discount")
}
else if(age<27){
    console.log("Student Discount")
}
else if(age<67){
    console.log("Full price")
}
else{
    console.log("Senior citizen discount")
}

//loops and arrays
let largeCountries = ["China","India","USA","UK","Canada" ]
console.log("The 5 largest countries in the world")
 for(let index = 0;index<largeCountries.length;index++){
     console.log("- "+largeCountries[index])
 }

 //push, pop, unshift challenges
 largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
 largeCountries.pop()
 largeCountries.push("Pakistan")
 largeCountries.shift()
 largeCountries.unshift("China")
 console.log(largeCountries)

 //Logical Operators
 let dayOfMonth = 13
 let weekday = "Friday"

 if(dayOfMonth === 13 && weekday === "Friday"){
     console.log('Terror')
 }


//Rock paper Scissors

let hands = ["rock","paper","scissor"]

function getHand(){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex]
}
console.log(getHand())  