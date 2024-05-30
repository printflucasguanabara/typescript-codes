
// Declarar uma função para adicionar dois números
/*
function adicionarNumeros(a: number, b: number): number {
    return a + b;
}
*/
// Função de seta para adicionar números
var adicionarNumeros = function (a, b) { return a + b; };
// Usar a função
var resultado = adicionarNumeros(10, 11);
console.log(resultado);

// Exemplo 2
var adicionarESubtrairNumeros = function (x, y) {
    var adicao = x + y;
    var subtracao = adicao - 2;
    return subtracao;
};
var formulaPersonalizada = adicionarESubtrairNumeros(20, 30); // 50-2 = 48
console.log(formulaPersonalizada);

// Exemplos de Funções de String
/*
function saudacoes(nomePessoa: string): void {
    console.log(`Olá ${nomePessoa}, como você está?`);
}
*/
// Função de seta para saudações
var saudacoes = function (nomePessoa) { return console.log("Olá ".concat(nomePessoa, ", como você está?")); };

// Chamando a função de saudações
saudacoes("Alice");
