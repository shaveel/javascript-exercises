const sumAll = function(num1, num2) {

    if (typeof(num1) !== "number" || typeof(num2) !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let result = 0;

    for (i = 0; i < (max - min)+1;i++) {
        result += (min + i);
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
