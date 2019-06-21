const generate2D = (m) => {
  let arr = new Array(m);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

let fill2D = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
};

const print2D = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  }
};

let important = (arr) => {
  if (arr[1][1] === 'x') {
    arr[0][1] += 1;
    arr[2][1] += 1;
    arr[1][0] += 1;
    arr[1][2] += 1;
  }
  if (arr[1][1] === 'x') {
    arr[1][1] = 0;
  } else {
    arr[1][1] = 'x';
  }
  return arr;
};

let arr = generate2D(3);
fill2D(arr);
print2D(arr);
console.log('-----------------------------');
/* print2D(important(arr));
console.log('-----------------------------');
print2D(important(arr));
console.log('-----------------------------');
print2D(important(arr));
console.log('-----------------------------');
print2D(important(arr));
console.log('-----------------------------');
print2D(important(arr)); */

setInterval(() => {
  print2D(important(arr));
  console.log('----------------------------');
}, 3000);
