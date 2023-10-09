const firstOperand = document.querySelector('.first-op')
const secondOperand = document.querySelector('.second-op')
const startBtn = document.getElementById("start-btn")
const resultInput = document.getElementById("result")
const numberOfCorrectAnswers = document.querySelector(".resultNumber")

const answerColors = {
    correct: "1px solid green",
    incorrect: "1px solid red",
    blank: "1px solid black"
}

const operator = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/"
}

const timeOption = {
    easy: 60,
    medium: 45,
    hard: 30
}

let result = ""
let correctAnswers = 0

function update() {
    resultInput.focus()
    let { num1, num2 } = createNewOperands()
    firstOperand.textContent = num1
    secondOperand.textContent = num2
    result = num1 + num2
    fadeInAnimation(firstOperand, secondOperand)
}

function createNewOperands() {
    let num1 = calculateRandomNumber(operator.add)
    let num2 = calculateRandomNumber(operator.add)
    if (num1 === 0 && num2 === 0) {
        num1++
        num2++
    }
    return { num1, num2 }
}

function calculateRandomNumber(operatorValue) {
    let randomValue = 11
    if (operatorValue === operator.add) {
        randomValue = 11
    }
    if (operatorValue === operator.subtract) {
        randomValue = 11
    } 
    if (operatorValue === operator.multiply) {
        randomValue = 6
    }
    if (operatorValue === operator.divide) {
        randomValue = 6
    }
    return Math.floor(Math.random() * randomValue)
}

startBtn.addEventListener('click', function () {
    update()
    countDown()
})

function reset() {
    result = ""
    resultInput.value = ""
}

resultInput.addEventListener("input", function () {
    let answer =+ resultInput.value
    resultInput.style.border = answerColors.blank
    if (answer === result) {
        correctGlow(resultInput) // funkar inte bra
        fadeOutAnimation(firstOperand, secondOperand)   // eventlistener to check for animationend?
        reset()
        update()
        correctAnswers = correctAnswers + 1
        numberOfCorrectAnswers.textContent = correctAnswers
    }   // Strukturera om denna kod tillsammans med start() till något med begripligt

    if (answer === !result) {
        resultInput.style.border = answerColors.incorrect
    }
})

// COUNTDOWN TIMER
// When timer reaches zero, display modal with score statistics 

function countDown() {
    let timeLeft = timeOption.easy
    let timeElement = document.querySelector(".countdown")

    const timerId = setInterval(() => {
        if (timeLeft === -1) {
            clearTimeout(timerId)
        } else {
            timeElement.innerHTML = timeLeft
            timeLeft--
        }
    }, 1000);
}

// ANIMATIONSTEST - FUNKAR INTE SOM DEN SKA //
function fadeInAnimation(operand1, operand2) {
    operand1.animate([
        { transform: "translateY(-0.6em)" },
        { transform: "translateY(0)" }
    ],
    {
        duration: 800,
        easing: "ease-out",
        iterations: 1

    })
    operand2.animate([
        { transform: "translateY(-0.5em)" },
        { transform: "translateY(0)" }
    ],
    {
        duration: 1200,
        easing: "ease-out",
        iterations: 1
    })
}

function fadeOutAnimation(operand1, operand2) {
    operand1.animate([
        { transform: "translateY(0em)" },
        { transform: "translateY(0.6em)" }
    ],
    {
        duration: 800,
        easing: "ease-out",
        iterations: 1

    })
    operand2.animate([
        { transform: "translateY(0em)" },
        { transform: "translateY(0.5em)" }
    ],
    {
        duration: 1200,
        easing: "ease-out",
        iterations: 1
    })
}

function correctGlow (answerbox) {
    answerbox.animate([
        { boxShadow: "none"},
        { boxShadow: "0px 0px 10px 10px rgba(45,255,196,0.9)" }
    ],
    {
        duration: 500,
        easing: "ease",
        iterations: 1,
        direction: "alternate"
    })
}