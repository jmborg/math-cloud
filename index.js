const firstOperand = document.querySelector('.first-op')
const secondOperand = document.querySelector('.second-op')
const startBtn = document.getElementById("start-btn")
const resultInput = document.getElementById("result")

let answerColors = {
    correct: "1px solid green",
    incorrect: "1px solid red",
    blank: "1px solid black"
}

let result = ""

function start() {
    resultInput.focus()
    let num1 = calculateRandomNumber()
    let num2 = calculateRandomNumber()
    firstOperand.textContent = num1
    secondOperand.textContent = num2
    result = num1 + num2
}

function reset() {
    result = ""
    resultInput.value = ""
}

function calculateRandomNumber () {
    return e = Math.floor(Math.random() * 11)
}

startBtn.addEventListener('click', function() {
    start()
})

resultInput.addEventListener("input", function() {
    let answer =+ resultInput.value
    if (answer === result) {
        resultInput.style.border = answerColors.blank
        reset()
        start()
     } else if (answer != result) {
        resultInput.style.border = answerColors.incorrect
    } else if (answer = 0) {    // Denna gör inget ännu
        resultInput.style.border = answerColors.blank
    }
})