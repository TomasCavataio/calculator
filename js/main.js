let numbers = document.getElementById("buttons");
numbers.addEventListener("click", display);

let screen = document.getElementById("screen");
let value = document.getElementById("selectedNumber");

let log = document.getElementById("logUl");
let previousOperations = document.getElementById("history");
let clearing = document.getElementById("clearing").addEventListener("click", clear)

let validation = numbers.addEventListener("click", validate);
let openPar = document.getElementById("open");
let closePar = document.getElementById("close");
let toggle = true;

let history = [];
let lastOperation;

function display(number) {
    debugger
    if (validate(number)) { return }
    else {
        let type = number.target.className;
        let first = number.target.innerText;
        first == "C" ? clear() : null;
        type == "number" || type == "operator" || type == "parenthesis" ? value.innerText = value.innerText + first : null;
    }
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
    toggle ? toggle = true : toggle = true;
    openPar.style.display = "block";
    closePar.style.display = "none";
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
    if (lastCharacter == "/" || lastCharacter == "*" || lastCharacter == "+" || lastCharacter == "-" || lastCharacter == ".") {
        if (button.target.className == "operator") {
            return true
        }
    } 
}

function changePar() {
    debugger
    if (toggle) {
        openPar.style.display = "none";
        closePar.style.display = "block";
    } else {
        openPar.style.display = "block";
        closePar.style.display = "none";
    }
    toggle = !toggle
}