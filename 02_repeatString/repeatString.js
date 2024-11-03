const repeatString = function(myString, myNum) {
    if (myNum == 0) {
        return ''
    }
    else if (myNum < 0) {
        return 'ERROR'
    }
    else {
        let finalString = '';
        for (let i = 0; i < myNum; i++) {
            finalString += myString
        }
        return finalString
    }
};

// Do not edit below this line
module.exports = repeatString;
