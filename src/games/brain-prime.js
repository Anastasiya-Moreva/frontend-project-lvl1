import readlineSync from 'readline-sync';
import { getRandom, yesOrNoToBool, primeNumber } from '../helpers.js';

const gameRound = () => {
  const number = getRandom(0, 100);
  const question = `Question: ${number}\nYour answer: `;
  const userAnswer = readlineSync.question(question);
  if ((!['yes', 'no'].includes(userAnswer))) {
    console.log('Input is Incorrect');
    return false;
  }
  const result = yesOrNoToBool(userAnswer);
  if (result !== primeNumber(number)) {
    return [false, userAnswer, result ? 'yes' : 'no'];
  }
  console.log('Correct!');
  return true;
};

export default gameRound;
