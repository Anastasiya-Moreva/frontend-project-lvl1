import readlineSync from 'readline-sync';

const numberRound = 3;

export const engineGame = (gameFunc, description) => {
  console.log('Welcome to the Brain Games! ');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(description);

  for (let i = 0; i < numberRound; i += 1) {
    const [question, answer] = gameFunc();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default engineGame;
