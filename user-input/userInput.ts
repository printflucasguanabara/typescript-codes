import * as promptSync from 'prompt-sync'

// Recebendo Entrada de String do Usuário (Nome)
const prompt = promptSync();

const nome = prompt('Qual é o seu nome?');

console.log(`Olá, ${nome}! Bem-vindo ao Code in Piece!`);


// Exemplo de recebimento de números como entrada e somando-os
const prompt = promptSync();

const num1Str = prompt('Digite o primeiro número: ');
const num2Str = prompt('Digite o segundo número: ');
const num1 = parseInt(num1Str);
const num2 = parseInt(num2Str);
const soma = num1 + num2;

console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
