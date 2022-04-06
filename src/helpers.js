export const getRandom = (min, max) => Math.round(Math.random() * (max - min)) + min;

export const yesOrNoToBool = (value) => {
    if (value.toLowerCase() === 'yes') {
      return true;
    }
    return false;
  };

export const isEven = (number) => number % 2 === 0; // четное true

export const getRandomOperator = () => ['+', '-', '*'][getRandom(0, 2)]

export const calc = (num1, num2, operator) => {
    switch (operator) {
        case "+":
          return num1 + num2
        case "-":
          return num1 - num2
        case "*":
          return num1 * num2
    }
}