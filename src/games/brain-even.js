import readlineSync from 'readline-sync';
import { yesOrNoToBool, isEven, getRandom } from '../index.js';

const gameRound = (username) => {
  const number = getRandom(0, 100);
  const question = `Answer "yes" if the is even, otherwise answer "no" \nQuestion: ${number}\nYour answer: `;
  const userAnswer = readlineSync.question(question);
  if ((!['yes', 'no'].includes(userAnswer))) {
    console.log('Input is Incorrect');
    return false;
  }
  const answer = isEven(number);
  const result = yesOrNoToBool(userAnswer) === answer;
  if (result === false) {
    console.log(`${userAnswer} is wrong answer ;(.Correct answer was ${answer}\n Let's try again, ${username}!)`);
  } else {
    console.log('Correct!');
  }
  return result;
};

export default gameRound;
