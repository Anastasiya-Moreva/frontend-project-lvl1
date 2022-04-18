import readlineSync from 'readline-sync';
import { getRandom, yesOrNoToBool } from '../helpers.js';

const yesOrNo = (x) => (x ? 'yes' : 'no');

const isPrimeNumber = (num) => {
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

export const generateData = () => {
  const number = getRandom(0, 100);
  const answer = isPrimeNumber(number);
  const question = `Question: ${number}\nYour answer: `;
  const userAnswer = readlineSync.question(question);
  if ((!['yes', 'no'].includes(userAnswer))) {
    console.log('Input is Incorrect');
    return [false, userAnswer, yesOrNo(answer)];
  }
  if (yesOrNoToBool(userAnswer) === answer) {
    return [true, userAnswer, yesOrNo(answer)];
  }
  return [false, userAnswer, yesOrNo(answer)];
};

export default generateData;
