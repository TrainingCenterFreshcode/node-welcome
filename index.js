'use strict';

const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8')
.then(content => {
    const newContent = `1234 OLD content: ${content} and NEW content: 'Hello world'`;
    fs.writeFile('./newfile.txt', newContent, 'utf8'); // Перезаписує файли!!!
});