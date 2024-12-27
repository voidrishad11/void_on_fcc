const checkButton = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkButton.addEventListener("click", () => {
    const regex = /^(\+\s?)?(\(\d{3}\)|\d{3}|\d{2}?)([\s-]?)(\d{5}|\d{4})([\s-]?)(\d{6})$/
    if (!userInput.value) {
        alert("Please provide a phone number");
    }
    else if (regex.test(userInput.value)) {
        results.innerText = `Valid Bangladeshi number: ${userInput.value}`;
    }
    else{
        results.innerText = `Invalid Bangladeshi number: ${userInput.value}`;
    }
})

clearButton.addEventListener("click", () => results.innerText = "");

/*
regex:
+ 880-1306-733010
+880 13067 33010
+(880) 13067 33010
880 1306733010
01306-733010
01306733010

    Optional + with a optinal space => (\+\s?)?
    Optional three digits with optinal parentheses or optional two digits=> (\(\d{3}\)|\d{3}|\d{2}?)
    Optional hyphen or space => ([\s-]?)
         Digits or Five digits => (\d{5}|\d{4})
    Optional hyphen or space => ([\s-]?)
    Six digits => (\d{6})
 */