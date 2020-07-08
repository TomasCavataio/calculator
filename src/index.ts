//Get DOM elements and asign them into variables
const numbers: HTMLElement = document.getElementById("buttons");
const parenthesis: HTMLCollection = document.getElementsByClassName("parenthesis");
const openPar: HTMLElement = document.getElementById("open");
const closePar: HTMLElement = document.getElementById("close");
const goBack: HTMLElement = document.getElementById('backspace');
const equal = document.getElementById('=')
const h = document.getElementById('h');
const hider = document.getElementById('hider');
const value: HTMLElement = document.getElementById("selectedNumber");
const log: HTMLElement = document.getElementById("logUl");
const previousOperations: HTMLElement = document.getElementById("history");

//Handle event-listeners
numbers.addEventListener("click", display);
numbers.addEventListener("click", validate);
parenthesis[0].addEventListener("click", changePar);
parenthesis[1].addEventListener("click", changePar);
goBack.addEventListener("click", back)
equal.addEventListener("click", calculate)
h.addEventListener("click", showHistory)
hider.addEventListener("click", reveal)
const clearing: void = document.getElementById("clearing")!.addEventListener("click", clear)


//History related elemnents (and a flag)
let toggle: boolean = true;
let historial: string[] = [];
let lastOperation;

//Display numbers and operations inside calculator screen
function display(event: MouseEvent): void {
    const number = event.target as HTMLButtonElement;
    if (validate(event)) { return }
    else {
        let type = number.className;
        let first = number.innerText;
        first == "C" ? clean() : null;
        type == "number" || type == "operator" || type == "parenthesis" ? value.innerText = value.innerText + first : null;
    }
}

//Reads calculator screen operation and evaluates it
function calculate(): void {
    historial.push(`${value.innerText} = ${eval(value.innerText)}`);
    value.innerText = eval(value.innerText);
    const li = document.createElement("li");
    log.appendChild(li);
    lastOperation = historial[historial.length - 1];
    li.innerText = lastOperation;
}

//Delete all data inside calculator screen
function clean(): void {
    value.innerText = "";
    toggle ? toggle = true : toggle = true;
    openPar.style.display = "block";
    closePar.style.display = "none";
}

//Clears history log
function clear(): void {
    log.innerText = "";
    historial = [];
}

//Makes history log visible
function showHistory(): void {
    previousOperations.style.opacity = "1";
}

//Hides history log
function reveal(): void {
    previousOperations.style.opacity = "0";
}

//Deletes last character inside calculator screen
function back() {
    value.innerText = value.innerText.substring(0, value.innerText.length - 1);
}

//Toggles parenthesis so you can't write something like )) or ((
function changePar(): void {
    if (toggle) {
        openPar.style.display = "none";
        closePar.style.display = "block";
    } else {
        openPar.style.display = "block";
        closePar.style.display = "none";
    }
    toggle = !toggle
}

//Validates last character inside the calculator screen and doesnt allow you to do stuff lilke ++ or -/+.
function validate(event: MouseEvent): boolean | void {
    let lastCharacter = value.innerText[value.innerText.length - 1];
    const button = event.target as HTMLButtonElement;
    if (lastCharacter == "/" || lastCharacter == "*" || lastCharacter == "+" || lastCharacter == "-" || lastCharacter == ".") {
        if (button.className == "operator") {
            return true
        }
    }
}