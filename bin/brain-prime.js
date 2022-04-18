#!/usr/bin/env node

import { engineGame } from '../src/index.js';

const description = 'Answer "yes" if given is prime. Otherwise answer "no"';
const gameName = 'brain-prime';
engineGame(gameName, description);
