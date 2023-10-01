const firstOperand = document.querySelector('.first-op')
const secondOperand = document.querySelector('.second-op')
const startGame = document.querySelector('.start-game')
const btns = document.querySelectorAll('.operator')
const startBtn = document.getElementById("start-btn")
const resultInput = document.getElementById("result")

let answerColors = {
    correct: "1px solid green",
    incorrect: "1px solid red",
    blank: "1px solid black"
}

let result = ""

startBtn.addEventListener('click', function() {
    let num1 = calculateRandomNumber()
    let num2 = calculateRandomNumber()
    firstOperand.textContent = num1
    secondOperand.textContent = num2
    result = num1 + num2
})

function calculateRandomNumber () {
    return e = Math.floor(Math.random() * 11)
}

resultInput.addEventListener("input", function() {
    let answer =+ resultInput.value
    if (answer === result) {
        resultInput.style.border = answerColors.correct
     } else if (answer != result) {
        resultInput.style.border = answerColors.incorrect
    } else if (answer = "") {
        resultInput.style.border = answerColors.blank
    }
})