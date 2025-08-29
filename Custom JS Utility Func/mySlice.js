function mySlice(array, start, end) {
  let result = [];

  if (end === undefined) {
    end = array.length; 
  }

  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }
  return result;
}

let arr3 = [1, 2, 3, 4, 5];
console.log(mySlice(arr3, 1, 4)); 
