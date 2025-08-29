function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) { 
      result.push(array[i]); 
    }
  }
  return result;
}

let arr2 = [1, 2, 3, 4];
console.log(myFilter(arr2, x => x % 2 === 0)); 
