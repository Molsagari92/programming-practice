const cezar = (str, n) => {
  let arrstr = str.split('');
  let newstring = '';
  let numbers = [];
  let newnumbers = [];
  for (let i = 0; i < arrstr.length; i++) {
    numbers[i] = str.charCodeAt(i);
  }
  console.log(numbers);
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] >= 65 && numbers[j] <= 90) {
      if (numbers[j] + n <= 90) {
        newnumbers[j] = numbers[j] + n;
      } else {
        newnumbers[j] = 64 + (numbers[j] + n - 90);
      }
    }
    if (numbers[j] >= 97 && numbers[j] <= 122) {
      if (numbers[j] + n <= 122) {
        newnumbers[j] = numbers[j] + n;
      } else {
        newnumbers[j] = 96 + (numbers[j] + n - 122);
      }
    }
  }
  for (let i = 0; i < newnumbers.length; i++) {
    newstring += String.fromCharCode(newnumbers[i]);
  }
  return newstring;
};

console.log(cezar('alma', 15));
console.log(cezar('ALMA', 15));
