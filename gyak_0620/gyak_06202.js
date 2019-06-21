const step = (arr, i) => {
  console.log(i);
  if (i === 0) {
    arr[i] = 1;
  } else if (arr[i] === 0) {
    arr[i] = 1;
    arr[i - 1] = 0;
  } else if (arr[i - 1] === 1) {
    arr[i - 1] = 0;
  }
};

const walk = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    step(arr, i);
    console.log(arr);
  }

  return arr;
};

walk([0, 0, 0, 0, 0, 0]);
