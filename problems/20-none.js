// this function runs each element of an array through a callback, and only returns true if all elements result to false

let none = function(arr, cb) {
    let counter = 0;

    for (let item of arr) {
        let eval = cb(item);
        if (eval) {
            counter++
        }
    }

    if (counter === 0) {
        return true;
    }

    return false;
};


let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false



// mocha tests
module.exports = none;
