import readlineSync from 'readline-sync';
import { getRandom, arithProgressiv, hideValue } from '../helpers.js';

const gameRound = () => {
  const arr = arithProgressiv(getRandom(0, 100), getRandom(0, 100));
  const index = getRandom(0, arr.length - 1);
  const hide = hideValue(arr, index);

  let userAnswer = readlineSync.question(`Question: ${hide.join(' ')}\nYour answer: `);
  userAnswer = Number(userAnswer);
  const answer = arr[index];
  if (Number(userAnswer) === answer) {
    return [true, userAnswer, answer];
  }
  return [false, userAnswer, answer];
};

export default gameRound;
