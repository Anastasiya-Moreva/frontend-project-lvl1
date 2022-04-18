import readlineSync from 'readline-sync';
import { getRandom } from '../helpers.js';

const arithProgressiv = (num, delta, elements = 10) => {
  const values = [];
  values.push(num);
  let res = num;
  for (let i = 0; i < elements - 1; i += 1) {
    res += delta;
    values.push(res);
  }
  return values;
};

const points = '..';

const hideValue = (array, index) => {
  const newArray = array.slice();
  newArray[index] = points;
  return newArray;
};

export const generateData = () => {
  const arr = arithProgressiv(getRandom(0, 100), getRandom(0, 100));
  const index = getRandom(0, arr.length - 1);
  const hide = hideValue(arr, index);

  let userAnswer = readlineSync.question(`Question: ${hide.join(' ')}\nYour answer: `);
  userAnswer = Number(userAnswer);
  const answer = arr[index];
  if (Number(userAnswer) === answer) {
    return [true, userAnswer, answer];
  }
  return [false, userAnswer, answer];
};

export default generateData;
