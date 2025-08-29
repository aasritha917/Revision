function mySplit(str, separator) {
  let result = [];
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      result.push(temp); 
      temp = ""; 
    } else {
      temp += str[i]; 
    }
  }
  result.push(temp); 
  return result;
}
let str1 = "hello world";
console.log(mySplit(str1, " "));
