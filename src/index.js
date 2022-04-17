export const startGame = (username, gameRound, description, numberRound = 3) => {
  // gameRound функция
  console.log(description);
  for (let i = 0; i < numberRound; i += 1) {
    const [resultRound, userAnswer, answer] = gameRound(username);
    if (!resultRound) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default startGame;
