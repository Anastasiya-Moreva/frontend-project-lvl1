import readlineSync from 'readline-sync';
import { getRandom } from '../helpers.js';

export const maxDevid = (num1, num2) => {
  const min = Math.min(num1, num2);
  for (let i = min; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return NaN;
};

export const generateData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);

  const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\n`);
  console.log(`Your answer: ${userAnswer}`);
  const answer = maxDevid(num1, num2);
  if (Number(userAnswer) === answer) {
    return [true, userAnswer, answer];
  }
  return [false, userAnswer, answer];
};

export default generateData;
