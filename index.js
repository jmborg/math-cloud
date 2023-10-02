const firstOperand = document.querySelector('.first-op')
const secondOperand = document.querySelector('.second-op')
const startBtn = document.getElementById("start-btn")
const resultInput = document.getElementById("result")

const answerColors = {
    correct: "1px solid green",
    incorrect: "1px solid red",
    blank: "1px solid black"
}

let operator = "+"
let result = ""

function start() {
    resultInput.focus()
    let num1 = calculateRandomNumber()
    let num2 = calculateRandomNumber()
    if (num1 && num2 == 0) {
        num1++
        num2++
    }
    firstOperand.textContent = num1
    secondOperand.textContent = num2
    addAnimation()
    result = num1 + num2
}

// ANIMATIONSTEST - FUNKAR INTE SOM DEN SKA //
function addAnimation() {
    firstOperand.classList.add("fadein")
    secondOperand.classList.add("fadein")
}

function removeAnimation() {
    firstOperand.classList.remove("fadein")
    secondOperand.classList.remove("fadein")
}

function reset() {
    result = ""
    resultInput.value = ""
}

function calculateRandomNumber () {
    if (operator === "+") {
        return e = Math.floor(Math.random() * 11)
    } else if (operator === "-") {
        return e = Math.floor(Math.random() * 11)
    } else if (operator === "*") {
        return e = Math.floor(Math.random() * 6)
    }
}

startBtn.addEventListener('click', function() {
    start()
})

resultInput.addEventListener("input", function() {
    let answer =+ resultInput.value
    if (answer === result) {
        resultInput.style.border = answerColors.blank
        removeAnimation()
        reset()
        start()
     } else if (answer != result) {
        resultInput.style.border = answerColors.incorrect
    } else if (answer = 0) {    // Denna gör inget ännu
        resultInput.style.border = answerColors.blank
    }   // Strukturera om denna kod tillsammans med start() till något med begripligt
})