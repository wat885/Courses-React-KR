// Rest parameter

summation = (...numberArr) => {
  let total = 0;
  for (let number of numberArr) total += number;
  return total;
};

console.log(summation(5, 115, 115, 115, 115, 115));
