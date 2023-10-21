// this exercise in callback functions counts the number of elements in the array which evaluate
// to true when passed through the callback

let count = function(arr, cb) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let eval = cb(el);

        if (eval) {
            counter++
        }
    }

    return counter;
};

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0


// mocha tests
module.exports = count;
