const reverseString = function(string) {
    let result = "";
    for (i = 0; i < string.length + 1; i++) {
        result = result + string.substr(string.length - i, 1);
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
