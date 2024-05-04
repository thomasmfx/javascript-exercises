const fibonacci = function(n) {
    n = Number(n);
    if (n == 0) return 0;
    if (n < 0) return 'OOPS';

    let fibo = [1, 1];
    
    for(let i = 1; i < n; i++) {
        let currentN = fibo[i];
        let lastN = fibo[i - 1];
        let fn = (currentN) + (lastN);
        fibo.push(fn)
    };

    return fibo[n - 1]
};

console.log( fibonacci(4) )

module.exports = fibonacci;
