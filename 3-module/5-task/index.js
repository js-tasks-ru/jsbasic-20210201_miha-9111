function getMinMax(str) {
  let result = {};

  let numbers = str
  .split(/,|\s/)
  .filter(item => {
    if (isFinite(item)) {
      return parseFloat(item);
    }
  });

  result.min = Math.min(...numbers);
  result.max = Math.max(...numbers);
  return result;
}
