export default function sumPairs(numbers, result) {
  for (let x = 0; x < numbers.length - 1; x++) {
    for (let y = x + 1; y < numbers.length; y++) {
      const sum = numbers[x] + numbers[y];
      if (sum === result) {
        return [numbers[x], numbers[y]];
      }
    }
  }

  return null;
}

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));
