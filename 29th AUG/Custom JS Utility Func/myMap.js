function myMap(array, callback) {
  let result = []; 
  for (let i = 0; i < array.length; i++) {
    let newValue = callback(array[i]);
    result.push(newValue); 
  }
  return result;
}

let arr1 = [1, 2, 3];
console.log(myMap(arr1, x => x * 2)); 
