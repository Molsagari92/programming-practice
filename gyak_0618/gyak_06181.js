const smallestDifference = (arr1, arr2) => {
  let mindiff = [];
  let diffmin = Infinity;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.min(Math.abs(arr1[i] - arr2[j])) < diffmin) {
        diffmin = Math.abs(arr1[i] - arr2[j]);
        mindiff.push(arr1[i]);
        mindiff.push(arr2[j]);
      }
    }
  }
  return mindiff;
};

console.log(smallestDifference([5, 3, 2, 1], [6, 8, 9, 10]));
