const checkButton = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkButton.addEventListener("click", () => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)(\d{3})([\s-]?)(\d{4})$/
    if (!userInput.value) {
        alert("Please provide a phone number");
    }
    else if (regex.test(userInput.value)) {
        results.innerText = `Valid US number: ${userInput.value}`;
    }
    else{
        results.innerText = `Invalid US number: ${userInput.value}`;
    }
})

clearButton.addEventListener("click", () => results.innerText = "");

/*
regex:
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555

    Optional 1 with a optinal space => (1\s?)?
    Three digits with optinal parentheses => (\(\d{3}\)|\d{3})
    Optional hyphen or space => ([\s-]?)
    Three digits => (\d{3})
    Optional hyphen or space => ([\s-]?)
    Three digits => (\d{4})
 */