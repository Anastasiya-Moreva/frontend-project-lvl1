import readlineSync from 'readline-sync';
import { getRandom } from '../helpers.js';
import { engineGame } from '../index.js';

const description = 'Answer "yes" if given is prime. Otherwise answer "no"';
const yesOrNo = (x) => (x ? 'yes' : 'no');

const yesOrNoToBool = (value) => {
  if (value.toLowerCase() === 'yes') {
    return true;
  }
  return false;
};

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
const startPrime = () => engineGame(generateData, description);

export default startPrime;
