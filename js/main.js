let numbers = document.getElementById("buttons");
numbers.addEventListener("click", display);

let screen = document.getElementById("screen");
let value = document.getElementById("selectedNumber");

let log = document.getElementById("logUl");
let previousOperations = document.getElementById("history");
let clearing = document.getElementById("clearing").addEventListener("click", clear)

let validation = numbers.addEventListener("click", validate);

let history = [];
let lastOperation;

function display(number) {
    validate(number);
    let type = number.target.className;
    let first = number.target.innerText;
    first == "C" ? clear() : null;
    type == "number" || type == "operator" ? value.innerText = value.innerText + first : null;
}

function calculate() {
    history.push(`${value.innerText} = ${eval(value.innerText)}`);
    value.innerText = eval(value.innerText);
    const li = document.createElement("li");
    log.appendChild(li);
    lastOperation = history[history.length - 1];
    li.innerText = lastOperation;
}

function clean() {
    value.innerText = "";
}

function clear() {
    log.innerText = "";
    history = [];
}

function showHistory() {
    previousOperations.style.opacity = "1";
}

function reveal() {
    previousOperations.style.opacity = 0;
}

function back() {
    value.innerText = value.innerText.substring(0, value.innerText.length - 1);
}

function validate(button) {
    let lastCharacter = value.innerText[value.innerText.length - 1];
    if (lastCharacter == "/" || lastCharacter == "*" || lastCharacter == "+" || lastCharacter == "-" || lastCharacter == "%" || lastCharacter == ".") {
        if (button.target.className == "operator") {
            calculator.preventDefault();
        }
    }
}