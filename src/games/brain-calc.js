import readlineSync from 'readline-sync';
import { getRandom, getRandomOperator, calc } from '../helpers.js';

const gameRound = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const mathOperator = getRandomOperator();

  let userAnswer = readlineSync.question(`Question: ${num1} ${mathOperator} ${num2}\n `);
  userAnswer = Number(userAnswer);
  console.log(`Your answer: ${userAnswer}`);
  const answer = calc(num1, num2, mathOperator);
  if (userAnswer === answer) {
    return [true, userAnswer, answer];
  }
  return [false, userAnswer, answer];
};

export default gameRound;
