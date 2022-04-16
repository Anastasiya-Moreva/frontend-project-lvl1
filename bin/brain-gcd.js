#!/usr/bin/env node

import gameRound from '../src/games/brain-gcd.js';
import { startGame } from '../src/index.js';
import { greetitg } from '../src/cli.js';

const username = greetitg();
const description = 'Find the greatest common divisor of given numbers.';
startGame(username, gameRound, description);
