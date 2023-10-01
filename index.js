const firstOperand = document.getElementById('first-operand')
const secondOperand = document.getElementById('second-operand')
const startGame = document.querySelector('.start-game')
const btns = document.querySelectorAll('.operator')

let selectedOperator = ""
let result = ""
let correctAnswers = 0

btns.forEach(function (i) {
    i.addEventListener('click', function() {
        selectedOperator = i.textContent
        document.querySelector('.operator-selected').innerHTML = i.innerHTML
    })
})

function calculateRandomNumber () {
    return e = Math.floor(Math.random() * 11)
}

startGame.addEventListener('click', function() {
    firstOperand.textContent = calculateRandomNumber()
    secondOperand.textContent = calculateRandomNumber()
    switch (selectedOperator) {
        case "+":
            console.log("You've chosen the addition operator")
            break
        case "-":
            console.log("You've chosen the subtraction operator")
            break
        case "x":
            console.log("You've chosen the multiply operator")
            break
        case "/":
            console.log("You've chosen the division operator")
            break
    }
})