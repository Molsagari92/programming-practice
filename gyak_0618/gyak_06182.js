let arr = [1, 2, 3, 4, 5];
const stepSum = (arr) => {
  let result = [];
  if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      result[i] = arr[i] + arr[i + 1];
    }
    stepSum(result);
  }
  console.log(arr);
};

stepSum(arr);
