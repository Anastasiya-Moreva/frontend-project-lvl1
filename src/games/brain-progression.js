import readlineSync from 'readline-sync';
import welcome from '../cli.js';
import { getRandom } from "../helpers.js"

const NAME = welcome()

const gameRound = () => {
    const arr = arithProgressiv(getRandom(0, 100), getRandom(0, 100))
    const index = getRandom(0, arr.length - 1)
    const hide = hideValue(arr, index)

    let userAnswer = readlineSync.question(`${hide.join(', ')} What number is missing in the progression?\n`)
    userAnswer = Number(userAnswer)
    const answer = arr[index]
    if (Number(userAnswer) === answer) {
        console.log('Correct!')
        return true
    }

    if (Number(userAnswer) !== answer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}}. Let's try again, ${NAME}!`)
        return false
    }
    return true
}

const points = '..'
export const arithProgressiv = (num, delta, elements = 10) => {
    const values = []
    values.push(num)

    for (let i = 0; i < elements - 1; i++) {
        num = num + delta
        values.push(num)
    }
    return values
}


const hideValue = (array, index) => {
    const newArray = array.slice() 
    newArray[index] = points
    return newArray
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