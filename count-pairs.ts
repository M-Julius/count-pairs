// count pairs, for pairing numbers, with logical
const countPairs = (numbers: number[], target: number) => {
  // define counter
  let counter = 0;
  //get length of numbers
  const lengthNumbers = numbers.length;

  // store counted
  let haveCounting: number[] = [];

  // loop for section first, i index first, ex in sample 0: 1
  for (let i = 0; i < lengthNumbers; i++) {
    // cut list of counting, ex in sample 0: 3, ...
    const listOnCounting = numbers.slice(i, lengthNumbers);

    // loop for section second, calculate i + j === target for checking
    for (let j = 0; j < listOnCounting.length; j++) {
      // check if 1 + 3 = 5?, this from i + (j+1)
      if (numbers[i] + listOnCounting[j + 1] === target) {
        // check current number have in store counted, if dont have value, go counting
        
        if (
          !haveCounting.includes(numbers[i]) &&
          !haveCounting.includes(listOnCounting[j])
        ) {
          // check if counted current number in i have in haveCounting
          if (!haveCounting.includes(numbers[i])) {
            haveCounting.push(numbers[i]);
          }
          // check if counted listOnCounting in j have in haveCounting
          if (!haveCounting.includes(listOnCounting[j])) {
            haveCounting.push(listOnCounting[j]);
          }

          // increment counter
          counter++;
        }
      }
    }
  }

  // returning log counter
  return console.log(counter);
};

countPairs([1, 3, 2, 2, 3, 4], 5); // Output: 2
countPairs([1, 1, 1, 1], 2); // Output: 1
countPairs([1, 2, 3, 4, 5], 7); // Output: 2
countPairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); // Output: 4
countPairs([1, 2, 3, 4, 5, 6, 7], 9); // Output: 2
