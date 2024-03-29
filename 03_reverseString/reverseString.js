const reverseString = function(str) {
    // 1º method 
    return str.split('').reverse().join('');
    // 2. return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
    // 3.
    // var text = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //         text += str[i];
    //     }
        
    //     return text;
};

// Do not edit below this line
module.exports = reverseString;
