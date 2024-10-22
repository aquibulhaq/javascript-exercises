const fibonacci = function (n) {
  n = Number(n);
  if (!Number.isInteger(n) || n < 0)
    return 'OOPS';
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;

  let fib0 = 0, fib1 = 1;
  for (let i = 2; i <= n; ++i) {
    const sum = fib0 + fib1;
    fib0 = fib1;
    fib1 = sum;
  }

  return fib1;
};

// Do not edit below this line
module.exports = fibonacci;
