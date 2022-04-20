import { getRandom, yesOrNo } from '../helpers.js';
import { engineGame } from '../index.js';

const description = 'Answer "yes" if given is prime. Otherwise answer "no"';

const isPrimeNumber = (num) => {
  if (num === 0) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const generateData = () => {
  const number = getRandom(0, 100);
  const answer = isPrimeNumber(number);
  const question = `Question: ${number}`;
  return [question, yesOrNo(answer)];
};
const startPrime = () => engineGame(generateData, description);

export default startPrime;
