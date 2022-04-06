import { getRandom, getRandomOperator, calc } from '../helpers.js'
import welcome from '../cli.js';
import readlineSync from 'readline-sync';

const NAME = welcome();


const gameRound = () => {
  const num1 = getRandom(0, 100)
  const num2 = getRandom(0, 100)
  const mathOperator = getRandomOperator()

  let userAnswer = readlineSync.question(`${num1} ${mathOperator} ${num2} What is the result of the expression?`)
  userAnswer = Number(userAnswer)
  const answer = calc(num1, num2, mathOperator)
  if (userAnswer === answer) {
    console.log('Correct!')
    return true
  }
  return false

}


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
