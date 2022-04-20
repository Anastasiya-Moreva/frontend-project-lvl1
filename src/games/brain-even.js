import { getRandom, yesOrNo } from '../helpers.js';
import { engineGame } from '../index.js';

const description = '"yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

export const generateData = () => {
  const number = getRandom(0, 100);
  const question = `Question: ${number}`;
  const answer = isEven(number);
  return [question, yesOrNo(answer)];
};

const startEven = () => engineGame(generateData, description);

export default startEven;
