// https://projecteuler.net/problem=1

export function solution1() {
  let result = 0;
  for (let i = 0; i < 1000; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

export function solution2() {
  function sumDivisbleBy(n: number, p: number) {
    return (n * Math.floor(p / n) * Math.floor(p / n + 1)) / 2;
  }

  return (
    sumDivisbleBy(3, 999) +
    sumDivisbleBy(5, 999) -
    sumDivisbleBy(15, 999)
  );
}
