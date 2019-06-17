const generate2D = (n) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }
  return arr;
};

let arr = generate2D(20);

const print2D = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 3 + 1);
      process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  }
  return arr;
};

let tomb = print2D(arr);

const findIt = (arr) => {
  let counter = 0;
  let a = 1;
  let b = 2;
  let c = 3;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      if (arr[i][j] === a && arr[i][j + 1] === b && arr[i][j + 2] === c) {
        counter += 1;
      }
    }
  }
  return counter;
};

console.log('A keresett előfordulás vízszintesen: ', findIt(tomb));

const findItb = (arr) => {
  let counter = 0;
  let a = 1;
  let b = 2;
  let c = 3;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === a && arr[i + 1][j] === b && arr[i + 2][j] === c) {
        counter += 1;
      }
    }
  }
  return counter;
};

console.log('A keresett előfordulás függőlegesen: ', findItb(tomb));

const findItc = (arr) => {
  let counter = 0;
  let a = 1;
  let b = 2;
  let c = 3;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      if (arr[i][j] === a && arr[i][j + 1] === b && arr[i + 1][j + 1] === c) {
        counter += 1;
      }
    }
  }
  return counter;
};

console.log('A keresett előfordulás L alakban: ', findItc(tomb));
