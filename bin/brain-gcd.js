import gameRound from '../src/games/brain-gcd.js';
import { startGame } from '../src/games/start.js';
import { greetitg } from '../src/cli.js';

const username = greetitg();
startGame(username, gameRound);
