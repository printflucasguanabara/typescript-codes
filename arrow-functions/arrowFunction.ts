// Tópico: Funções de Seta (Arrow Functions) em TypeScript

// Função de seta para adicionar números
const adicionarNumeros = (a: number, b: number) => a + b;

// Usar a função
let resultado = adicionarNumeros(10, 11);
console.log(resultado);

// Exemplo 2
const adicionarESubtrairNumeros = (x: number, y: number) => {
    let adicao = x + y;
    let subtracao = adicao - 2;
    return subtracao;
}

let formulaPersonalizada = adicionarESubtrairNumeros(20, 30); // 50 - 2 = 48
console.log(formulaPersonalizada);

// Exemplos de Funções de String
/*
function saudacoes(nomePessoa: string): void {
    console.log(`Olá ${nomePessoa}, como você está?`);
}
*/

// Função de seta para saudações
const saudacoes = (nomePessoa: string) => console.log(`Olá ${nomePessoa}, como você está?`);

// Chamando a função de saudações
saudacoes("Alice");
