import readlineSync from 'readline-sync';
import { generateData as brainGame } from './games/brain-calc.js';
import { generateData as brainEven } from './games/brain-even.js';
import { generateData as brainGcd } from './games/brain-gcd.js';
import { generateData as brainPrime } from './games/brain-prime.js';
import { generateData as brainProgression } from './games/brain-progression.js';

const numberRound = 3;

const getGameFunc = (gameName) => {
  switch (gameName) {
    case 'brain-calc':
      return brainGame;
    case 'brain-even':
      return brainEven;
    case 'brain-gcd':
      return brainGcd;
    case 'brain-prime':
      return brainPrime;
    case 'brain-progression':
      return brainProgression;
    default:
      return NaN;
  }
};

export const engineGame = (gameName, description) => {
  console.log('Welcome to the Brain Games! ');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(description);

  const game = getGameFunc(gameName);

  for (let i = 0; i < numberRound; i += 1) {
    const [resultRound, userAnswer, answer] = game();
    if (!resultRound) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default engineGame;
