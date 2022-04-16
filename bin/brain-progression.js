#!/usr/bin/env node

import gameRound from '../src/games/brain-progression.js';
import { startGame } from '../src/index.js';
import { greetitg } from '../src/cli.js';

const username = greetitg();
const description = 'What number is missing in the progression?';
startGame(username, gameRound, description);
