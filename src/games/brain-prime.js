import { getRandom } from "../helpers.js"
import greetitg from "../cli.js"
import { yesOrNoToBool } from "../helpers.js"
import readlineSync from 'readline-sync';

const NAME = greetitg()

const gameRound = () => {
    const number = getRandom(0, 100);
    const question = `Answer "yes" if given is prime. Otherwise answer "no"\nQuestion: ${number}\nYour answer :`
    const userAnswer = readlineSync.question(question);
    if ((!['yes', 'no'].includes(userAnswer))) {
        console.log('Input is Incorrect');
        return false;
    }
    const result = yesOrNoToBool(userAnswer);
    if (result !== primeNumber(number)) {
        console.log(`${userAnswer} is wrong answer ;(.Correct answer was ${userAnswer}Let's try again, ${NAME}!)`);
    } else {
        console.log('Correct!');
    }
    return result;
}

export const primeNumber = (num) => {
    if (num === 0) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

export default primeNumber

gameRound()


