const palindrom = (str) => {
  str = str.replace(' ', '');
  str = str.replace('.', '');
  str = str.replace('!', '');
  str = str.replace('?', '');
  str = str.replace(',', '');
  str = str.toLowerCase();
  let lastindex = str.length - 1;
  let backwards = '';
  for (let i = lastindex; i >= 0; i--) {
    backwards += str[lastindex];
    lastindex--;
  }
  // console.log(backwards);
  if (str === backwards) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrom('vizsga'));
console.log(palindrom('kék'));
console.log(palindrom('görög'));
console.log(palindrom('Indul a görög aludni.'));
