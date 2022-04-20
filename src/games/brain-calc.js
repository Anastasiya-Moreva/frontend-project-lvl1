import { getRandom } from '../helpers.js';
import { engineGame } from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => ['+', '-', '*'][getRandom(0, 2)];

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

export const generateData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const mathOperator = getRandomOperator();

  const question = `Question: ${num1} ${mathOperator} ${num2}`;
  const answer = calc(num1, num2, mathOperator);
  return [question, String(answer)];
};

const startCalc = () => engineGame(generateData, description);

export default startCalc;
