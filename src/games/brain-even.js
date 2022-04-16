import readlineSync from 'readline-sync';
import { yesOrNoToBool, isEven, getRandom } from '../helpers.js';

const gameRound = () => {
  const number = getRandom(0, 100);
  const question = `Question: ${number}\nYour answer: `;
  const userAnswer = readlineSync.question(question);
  const answer = isEven(number);
  if ((!['yes', 'no'].includes(userAnswer))) {
    console.log('Input is Incorrect');
    return [false, userAnswer, answer];
  }
  const result = yesOrNoToBool(userAnswer) === answer;
  if (result === false) {
    return [result, userAnswer, answer];
  }
  return [result, userAnswer, answer];
};

export default gameRound;
