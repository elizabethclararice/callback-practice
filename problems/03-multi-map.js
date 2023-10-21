// this exercise in callback functions emulates the built-in Array#map method, but does so iteratively in terms of n.
// it returns the new value that results from running an original value through a callback n times.

let multiMap = function(val, n, cb) {
  res = val;
  for (let i = 0; i < n; i++) {
    res = cb(res);
  }
  return res;
};

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!


// mocha tests
module.exports = multiMap;
