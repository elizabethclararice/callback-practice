// this exercise in callback functions returns true if at least one element in the array
// evaluates to true when passed through the callback

let mySome = function(arr, cb) {
    let pass = false;

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let eval = cb(el, i);

        if (eval === true) {
            pass = true;
        }
    }
    return pass;
};


let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true


// mocha tests
module.exports = mySome;
