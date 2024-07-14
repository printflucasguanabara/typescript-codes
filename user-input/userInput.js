"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
/*
const prompt  = promptSync();

const name = prompt('What is your name?');

console.log(`ola, ${name}! apenas um teste!`);
*/
var prompt = promptSync();
var num1Str = prompt('Digite o primeiro número: ');
var num2Str = prompt('Digite o segundo número: ');
var num1 = parseInt(num1Str);
var num2 = parseInt(num2Str);
var soma = num1 + num2;
console.log("A soma de ".concat(num1, " e ").concat(num2, " é: ").concat(soma));
