import readlineSync from 'readline-sync';
import {
  getRandom, yesOrNoToBool, isPrimeNumber, yesOrNo,
} from '../helpers.js';

const gameRound = () => {
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

export default gameRound;
