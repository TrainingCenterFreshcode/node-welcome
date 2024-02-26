'use strict';

const {MyMath} = require('./MyMath.js');
const {Component} = require('./Component.js');

const sum2n2 = MyMath.sum(2, 2);
console.log(sum2n2);
const multy3n5 = MyMath.multy(3, 5);
console.log(multy3n5);

const component = new Component();
console.log(component);

/*

Опціональне ДЗ

Створіть декілька функцій або класів, спробуйте їх експортувати та імпортувати у index.js

*/