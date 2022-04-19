import readlineSync from 'readline-sync';
import { getRandom } from '../helpers.js';
import { engineGame } from '../index.js';

const description = '"yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

export const yesOrNoToBool = (value) => {
  if (value.toLowerCase() === 'yes') {
    return true;
  }
  return false;
};

export const generateData = () => {
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

const startEven = () => engineGame(generateData, description);

export default startEven;
