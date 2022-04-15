import gameRound from '../src/games/brain-even.js';
import { startGame } from '../src/games/start.js';
import { greetitg } from '../src/cli.js';

const username = greetitg();
const description = 'Answer "yes" if the is even, otherwise answer "no"';
startGame(username, gameRound, description);
