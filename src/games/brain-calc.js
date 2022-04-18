import readlineSync from 'readline-sync';
import { getRandom } from '../helpers.js';

const getRandomOperator = () => ['+', '-', '*'][getRandom(0, 2)];

const calc = (num1, num2, operator) => {
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

export const generateData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const mathOperator = getRandomOperator();

  let userAnswer = readlineSync.question(`Question: ${num1} ${mathOperator} ${num2} `);
  userAnswer = Number(userAnswer);
  console.log(`Your answer: ${userAnswer}`);
  const answer = calc(num1, num2, mathOperator);
  if (userAnswer === answer) {
    return [true, userAnswer, answer];
  }
  return [false, userAnswer, answer];
};

export default generateData;
