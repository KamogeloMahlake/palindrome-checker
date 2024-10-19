const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", () => { if (textInput.value === "") {
        alert("Please input a value")
    }
     else{   result.textContent = checkPalindrome(textInput.value);
        textInput.value = "";
     }

})

function checkPalindrome(str) {
    

    const newStr = str.trim().replace(/[^A-Za-z0-9]/g, "");

    let reverseStr = "";
    for (let i = newStr.length - 1; i >= 0;i--) {
        reverseStr += newStr[i];
    }

    if (reverseStr.toLowerCase() === newStr.toLowerCase()) {
        return `${str} is a palindrome`;
    }

    return `${str} is not a palindrome`;
}

