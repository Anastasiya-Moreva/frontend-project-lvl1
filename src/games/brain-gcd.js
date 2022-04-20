import { getRandom } from '../helpers.js';
import { engineGame } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

export const maxDevid = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return maxDevid(num2, num1 % num2);
};

export const generateData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const question = `Question: ${num1} ${num2}`;
  const answer = maxDevid(num1, num2);
  return [question, String(answer)];
};

const startGcd = () => engineGame(generateData, description);

export default startGcd;
