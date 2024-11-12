const findTheOldest = function(array) {
    return array.reduce((a,b) => {
        const age1 = getAge(a.yearOfBirth, a.yearOfDeath);
        const age2 = getAge(b.yearOfBirth, b.yearOfDeath);
        return age1 > age2 ? a : b;
    })
};

const getAge = function(birth, death){
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
