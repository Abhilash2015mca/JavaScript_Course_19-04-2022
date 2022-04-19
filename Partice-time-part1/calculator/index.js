let num1 = 8
let num2 =2
let result 
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let outputEl = document.getElementById("outputId")

function add(){
    result = num1+num2
    outputEl.textContent = result
}
function subtract(){
    result= num1 - num2
    outputEl.textContent = result
}
function multiply(){
    result =  num1*num2 
    outputEl.textContent = result
}
function divide(){
    result = num1/num2
    outputEl.textContent = result
}