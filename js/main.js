let numbers = document.getElementById("buttons")
numbers.addEventListener("click", display);

let screen = document.getElementById("screen");
let value = document.getElementById("selectedNumber");

let log = document.getElementById("logUl");
let previousOperations = document.getElementById("history");

function display(number) {
    let type = number.target.className
    let first = number.target.innerText;
    first == "C" ? clear() : null;
    type == "number" || type == "operator" ? value.innerText = value.innerText + first : null;
}

function calculate() {
    history.push(`${value.innerText} = ${eval(value.innerText)}`)
    value.innerText = eval(value.innerText)
    debugger
    const li = document.createElement("li");
    log.appendChild(li);
    lastOperation = history[history.length - 1];
    li.innerText = lastOperation;
}

function clear() {
    value.innerText = "";
}

let history = [];
let lastOperation;

function showHistory() {
    previousOperations.style.opacity = "1"
}

function reveal() {
    previousOperations.style.opacity = 0
}

function back() {
    value.innerText = value.innerText.substring(0, value.innerText.length - 1);
}
