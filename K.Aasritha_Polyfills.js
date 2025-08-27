Array.prototype.mapPolyfill = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].mapPolyfill(x => x * 2)); 

Array.prototype.filterPolyfill = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log([1, 2, 3, 4].filterPolyfill(x => x % 2 === 0));
 
Array.prototype.reducePolyfill = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};


console.log([1, 2, 3, 4].reducePolyfill((acc, curr) => acc + curr, 0)); 

