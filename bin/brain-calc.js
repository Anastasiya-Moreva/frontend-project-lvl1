#!/usr/bin/env node

import gameRound from '../src/games/brain-calc.js';
import { startGame } from '../src/index.js';
import { greetitg } from '../src/cli.js';

const username = greetitg();
const description = 'What is the result of the expression?';
startGame(username, gameRound, description);
