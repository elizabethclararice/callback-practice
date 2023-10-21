// this exercise in callback functions will only return true if all elements in the given array
// evaluate to true according to the given callback. this is done without the help of Array#every

let myEvery = function(arr, cb) {

    for (let item of arr) {
        let eval = cb(item);

        if (eval === false) {
            return false;
        }
    }

    return true;
};

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false


// mocha tests
module.exports = myEvery;
