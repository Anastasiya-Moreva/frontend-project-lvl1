import readlineSync from 'readline-sync';
import { getRandom, arithProgressiv, hideValue } from '../index.js';

const gameRound = (username) => {
  const arr = arithProgressiv(getRandom(0, 100), getRandom(0, 100));
  const index = getRandom(0, arr.length - 1);
  const hide = hideValue(arr, index);

  let userAnswer = readlineSync.question(`What number is missing in the progression?\nQuestion: ${hide.join(', ')}\nYour answer: `);
  userAnswer = Number(userAnswer);
  const answer = arr[index];
  if (Number(userAnswer) === answer) {
    console.log('Correct!');
    return true;
  }

  if (Number(userAnswer) !== answer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}}. Let's try again, ${username}!`);
    return false;
  }
  return true;
};

export default gameRound;
