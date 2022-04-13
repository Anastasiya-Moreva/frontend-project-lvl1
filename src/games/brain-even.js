import readlineSync from 'readline-sync';
import greetitg from '../cli.js'
import { yesOrNoToBool, isEven, getRandom } from '../helpers.js'

// узнаем имя при старте
const NAME = greetitg();

const gameRound = () => {
  const number = getRandom(0, 100);
  const question = `Answer "yes" if the ${number} is even, otherwise answer "no" \n`;
  const userAnswer = readlineSync.question(question);
  if ((!['yes', 'no'].includes(userAnswer))) {
    console.log('Input is Incorrect');
    return false;
  }
  const answer = isEven(number);
  const result = yesOrNoToBool(userAnswer) === answer;
  if (result === false) {
    console.log(`${userAnswer} is wrong answer ;(.Correct answer was ${answer}Let's try again, ${NAME}!)`);
  } else {
    console.log('Correct');
  }
  return result;
};

export const startGame = (numberRound = 3) => {
  for (let i = 0; i < numberRound; i += 1) {
    const resultRound = gameRound();
    if (!resultRound) {
      return;
    }
  }
  console.log(`Congratulations, ${NAME}`);
}

export default startGame