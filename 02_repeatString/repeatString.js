const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR"
    }
    
    let result = "";
    for (i = 0; i < num ; i++) {
        result = result + string;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
