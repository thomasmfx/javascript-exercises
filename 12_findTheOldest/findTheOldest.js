const findTheOldest = function(arr) {
    arr.forEach((item) => {
        if (item.yearOfDeath === undefined) {
            item.yearOfDeath = new Date().getFullYear();
        }
    });

    arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);

    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
