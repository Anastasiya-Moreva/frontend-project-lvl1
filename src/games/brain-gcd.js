import readlineSync from 'readline-sync';
import { getRandom, maxDevid } from '../helpers.js';

const gameRound = () => {
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

export default gameRound;
