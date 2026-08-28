const display = document.getElementById('display');

// Adds numbers or operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Clears the entire screen
function clearDisplay() {
    display.value = "";
}

// Deletes just the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// The math logic
function calculate() {
    try {
        // eval() evaluates the string as a mathematical expression
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}