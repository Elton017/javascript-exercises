const fibonacci = function(number) {
    let firstnum = 0;
    let secondnum = 1;

    if (number == 0) {return 0}
    if (number < 0) {return "OOPS"}

    for (let i=1; i<parseInt(number); i++){
        let tempnum = secondnum;
        secondnum += firstnum;
        firstnum = tempnum;
    }
    return secondnum;
};

// Do not edit below this line
module.exports = fibonacci;
