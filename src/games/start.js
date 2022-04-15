export const startGame = (username, gameRound, description, numberRound = 3) => {
  // gameRound функция
  console.log(description);
  for (let i = 0; i < numberRound; i += 1) {
    const resultRound = gameRound(username);
    if (!resultRound) {
      return;
    }
  }
  console.log(`Congratulations, ${username}`);
};

export default startGame;
