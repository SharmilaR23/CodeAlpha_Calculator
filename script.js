const display = document.getElementById("display");

// Add value to display
function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// Keyboard Support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Numbers and operators
    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {
        append(key);
    }

    // Enter = Calculate
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace = Delete
    else if (key === "Backspace") {
        event.preventDefault();
        deleteLast();
    }

    // Escape = Clear
    else if (key === "Escape") {
        event.preventDefault();
        clearDisplay();
    }
});