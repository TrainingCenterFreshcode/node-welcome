'use strict';

const fs = require('fs').promises;

const p = fs.readFile('./text.txt', 'utf8');
p.then(data => console.log(data));