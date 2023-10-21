// this function passes each element of an array through a callback. it returns the index of the
// first element of the array that results in true, and if none do, it returns -1

let firstIndex = function(arr, cb) {

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let eval = cb(el);

        if (eval) {
            return i;
        }
    }

    return -1;
};


let result1 = firstIndex([3, 7, 8, 10], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 2

let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result2); // 0

let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result3); // -1



// mocha tests
module.exports = firstIndex;
