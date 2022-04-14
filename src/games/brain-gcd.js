import readlineSync from 'readline-sync';
import { getRandom, maxDevid } from '../index.js';

const gameRound = (username) => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);

  const userAnswer = readlineSync.question(`Find the greatest common divisor of given numbers.\nQuestion: ${num1} ${num2}\n`);
  console.log(`Your answer: ${userAnswer}`);
  const answer = maxDevid(num1, num2);
  if (Number(userAnswer) === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${username}!`);

  return false;
};

export default gameRound;
