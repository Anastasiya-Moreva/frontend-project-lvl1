import readlineSync from 'readline-sync';
import { getRandom, getRandomOperator, calc } from '../index.js';

const gameRound = (username) => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const mathOperator = getRandomOperator();

  let userAnswer = readlineSync.question(`Question: ${num1} ${mathOperator} ${num2}\n `);
  userAnswer = Number(userAnswer);
  console.log(`Your answer: ${userAnswer}`);
  const answer = calc(num1, num2, mathOperator);
  if (userAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  if (userAnswer !== answer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${username}!`);
  }
  return false;
};

export default gameRound;
