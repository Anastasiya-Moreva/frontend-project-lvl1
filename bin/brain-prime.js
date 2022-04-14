import gameRound from '../src/games/brain-prime.js';
import { startGame } from '../src/games/start.js';
import { greetitg } from '../src/cli.js';

const username = greetitg();
startGame(username, gameRound);
