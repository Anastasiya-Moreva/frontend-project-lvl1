export const getRandom = (min, max) => Math.round(Math.random() * (max - min)) + min;

export const yesOrNoToBool = (value) => { // brain-even
  if (value.toLowerCase() === 'yes') {
    return true;
  }
  return false;
};

export const isEven = (number) => number % 2 === 0; // четное true

export const getRandomOperator = () => ['+', '-', '*'][getRandom(0, 2)];

export const calc = (num1, num2, operator) => { // brain-calc
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

export const maxDevid = (num1, num2) => { // brain-gcd
  const min = Math.min(num1, num2);
  for (let i = min; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return NaN;
};

export const primeNumber = (num) => { // brain-prime
  if (num === 0) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const arithProgressiv = (num, delta, elements = 10) => { // brain-progression
  const values = [];
  values.push(num);
  let res = num;
  for (let i = 0; i < elements - 1; i += 1) {
    res += delta;
    values.push(res);
  }
  return values;
};

const points = '..';

export const hideValue = (array, index) => {
  const newArray = array.slice();
  newArray[index] = points;
  return newArray;
};
