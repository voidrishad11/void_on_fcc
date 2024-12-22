const checkButton = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkButton.addEventListener("click", () => {
    if (!userInput.value) {
        alert("Please provide a phone number");
    }
})

clearButton.addEventListener("click", () => results.innerText = "");