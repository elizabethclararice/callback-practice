// this exercise in callback functions emulates the built-in Array#filter method with a manual loop to isolate each element.
// it then evaluates each element with a callback function and returns the elements that evaluate to true.

let myFilter = function(arr, cb) {
    result = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let eval = cb(arr[i]);
        if (eval) {
            result.push(el);
        }
    }
    return result;
};

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']


// mocha tests
module.exports = myFilter;
