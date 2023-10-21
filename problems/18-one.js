// this function returns a boolean indicating whether or not exactly one element of the passed-in array
// results in true when passed into the callback.

let one = function(arr, cb) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (cb(item, i)) {
            counter++;
        }
    }


    if (counter === 1) {
        return true;
    }

    return false;
};

let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true



// mocha tests
module.exports = one;
