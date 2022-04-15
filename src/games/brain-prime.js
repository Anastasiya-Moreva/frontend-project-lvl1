import readlineSync from 'readline-sync';
import { getRandom, yesOrNoToBool, primeNumber } from '../index.js';

const gameRound = (username) => {
  const number = getRandom(0, 100);
  const question = `Question: ${number}\nYour answer: `;
  const userAnswer = readlineSync.question(question);
  if ((!['yes', 'no'].includes(userAnswer))) {
    console.log('Input is Incorrect');
    return false;
  }
  const result = yesOrNoToBool(userAnswer);
  if (result !== primeNumber(number)) {
    console.log(`"${userAnswer}" is wrong answer ;(.Correct answer was "${result ? 'yes' : 'no'}" Let's try again, ${username}!)`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export default gameRound;
