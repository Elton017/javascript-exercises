const palindromes = function (myString) {
    const cleanedString = myString.toLowerCase().split("").filter(char => char.match(/[a-z0-9]/)).join("");
    const reversed = cleanedString.split("").reverse().join("");

    return cleanedString == reversed;
};

// Do not edit below this line
module.exports = palindromes;
