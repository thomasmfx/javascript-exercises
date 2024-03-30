const sumAll = function(n1, n2) {
    let sum = 0
    let errorMessage = 'ERROR';
    let finalSum;

    if (n1 < 0 || n2 < 0) return errorMessage;
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) return errorMessage;
    
    if (n1 < n2) {
        for (let i = n1; i < n2; i++) {
            sum += i;
        }
        finalSum = sum + n2;
    } else {
        for (let i = n1; i > n2; i--) {
            sum += i;
        }
        finalSum = sum + n2;
    }
    
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
