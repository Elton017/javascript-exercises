const removeFromArray = function(array, ...args) {
    args.forEach(arg => {
        for (let i = 0; i < array.length; i++) {
            if (arg === array[i]) {
                array.splice(i, 1)
                i--
            }
        }
    })
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
