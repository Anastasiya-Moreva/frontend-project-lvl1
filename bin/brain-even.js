#!/usr/bin/env node

import { engineGame } from '../src/index.js';

const description = '"yes" if the number is even, otherwise answer "no"';
const gameName = 'brain-even';
engineGame(gameName, description);
