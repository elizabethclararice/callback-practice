// this function emulates the built in Array#reduce. it uses the first element of the given array as the default accumulator.
// it calls the callback on each remaining element in the array, passing the current accumulator and current element into the callback,
// then updating the accumulator with each iteration to the result of the callback. an initial accumulator could be incorporated
// by establishing it as one of the function's parameters.


let mySimpleReduce = function(arr, cb) {
    acc = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let nextEl = cb(acc, arr[i])
        acc = nextEl
    }

    return acc;
};



let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8



// mocha tests
module.exports = mySimpleReduce;
