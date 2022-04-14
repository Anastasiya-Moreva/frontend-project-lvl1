import readlineSync from 'readline-sync';
import { getRandom, yesOrNoToBool, primeNumber } from '../index.js';

const gameRound = (username) => {
  const number = getRandom(0, 100);
  const question = `Answer "yes" if given is prime. Otherwise answer "no"\nQuestion: ${number}\nYour answer :`;
  const userAnswer = readlineSync.question(question);
  if ((!['yes', 'no'].includes(userAnswer))) {
    console.log('Input is Incorrect');
    return false;
  }
  const result = yesOrNoToBool(userAnswer);
  if (result !== primeNumber(number)) {
    console.log(`${userAnswer} is wrong answer ;(.Correct answer was ${userAnswer}Let's try again, ${username}!)`);
  } else {
    console.log('Correct!');
  }
  return true;
};

export default gameRound;
