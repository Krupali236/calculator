let inputField = document.getElementById("input");

// Function to append values to the input field
function appendValue(val) {
    console.log("Button clicked, value:", val); // Log the button value
    inputField.value += val; // Append the clicked value to the input field
    console.log(document.getElementById("input").value, "inputedvalue");
}
//Function to input value using Key
// function handleKeyInput(event) {
//     if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' ||
//         event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' ||
//         event.key == '+' || event.key == '-' || event.key == '/' || event.key == '%' || event.key == '*' ||
//         event.key == '=')
//         console.log(event.key, "event.key")
//     inputField.value += event.key;
// }

// Function to input value using keyboard
function handleKeyInput(event) {
    const validKeys = "0123456789+-/*%=."; // Allowed characters
    if (validKeys.includes(event.key)) {
        inputField.value += event.key; // Append key value to the input field
        console.log(event.key, "key pressed");
    } else if (event.key === "Enter") {
        // Evaluate on Enter key press
        handleEqual();
    } else if (event.key === "Backspace") {
        // Handle backspace
        handleClearInput();
    } else {
        // Ignore other keys
        event.preventDefault();
        console.log("Invalid key pressed:", event.key);
    }
}


// Function to clear the entire input field
function handleClearResult() {
    inputField.value = ""; // Reset the input field
}

// Function to evaluate the result
function handleEqual() {
    try {
        inputField.value = eval(inputField.value); // Evaluate the expression and update the input field
    } catch (error) {
        inputField.value = "Error"; // Handle invalid expressions
    }
}


// Function to clear the last character (Backspace functionality)
function handleClearInput() {
    inputField.value = inputField.value.slice(0, -1); // Remove the last character
}

// Attach event listener for keyboard input
document.addEventListener("keydown", handleKeyInput);