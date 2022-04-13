import readlineSync from 'readline-sync';
import { getRandom } from '../helpers.js'

const gameRound = (username) => {
    const num1 = getRandom(0, 100)
    const num2 = getRandom(0, 100)

    const userAnswer = readlineSync.question(`Find the greatest common divisor of given numbers.\nQuestion: ${num1} ${num2}\n`)
    console.log(`Your answer: ${userAnswer}`)
    const answer = maxDevid(num1, num2)
    if (Number(userAnswer) === answer) {
        console.log('Correct!')
        return true
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${username}!`)
    }
    return false
}


export const maxDevid = (num1, num2) => {
    const min = Math.min(num1, num2)
    for (let i = min; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i
        }
    }
}

export default gameRound
