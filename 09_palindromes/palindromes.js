const palindromes = function (string) {
    let cleanedString = string.toLowerCase()
    .replaceAll(' ', '')
    .replaceAll(',', '')
    .replaceAll('.', '')
    .replaceAll('-', '')
    .replaceAll('!', '');

    let reversedString = string.toLowerCase().split('').reverse().join('')
    .replaceAll(' ', '')
    .replaceAll(',', '')
    .replaceAll('.', '')
    .replaceAll('-', '')
    .replaceAll('!', '');

    return cleanedString === reversedString;
};

console.log( palindromes('A car, a man, a maraca.') )
// Do not edit below this line
module.exports = palindromes;

