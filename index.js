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

function update() {
    resultInput.focus()
    let num1 = calculateRandomNumber()
    let num2 = calculateRandomNumber()
    if (num1 && num2 === 0) {
        num1++
        num2++
    }
    firstOperand.textContent = num1
    secondOperand.textContent = num2
    fadeInAnimation(firstOperand, secondOperand)
    result = num1 + num2
}

function calculateRandomNumber() {
    if (operator === "+") {
        return Math.floor(Math.random() * 11)
    }
    if (operator === "-") {
        return Math.floor(Math.random() * 11)
    }
    if (operator === "*") {
        return Math.floor(Math.random() * 6)
    }
}

startBtn.addEventListener('click', function () {
    update()
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
    }   // Strukturera om denna kod tillsammans med start() till något med begripligt
})

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
        { boxShadow: "0 0 40px 45px rgba(45,255,196,0.9)" }
    ],
    {
        duration: 400,
        easing: "ease-out",
        iterations: 1
    })
} // MÅSTE GÅ ATT BUNTA IHOP ALL ANIMATIONSKOD PÅ ETT SMIDIGARE SÄTT?!