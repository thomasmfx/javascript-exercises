// Receber o argumento da função
// Usar métodos embutidos (map, forEach, etc.) para percorrer o array
// Cada index do array possui um objeto, e para cada objeto acessado, retorne o valor da chave(key) "title" 

// const books = [
//     {
//         title: 'Book',
//         author: 'Name',
//     },
//     {
//         title: 'Book2',
//         author: 'Name2',
//     }
// ];

const getTheTitles = function(arr) {
    return arr.map(book => book.title)
};


// Do not edit below this line
module.exports = getTheTitles;
