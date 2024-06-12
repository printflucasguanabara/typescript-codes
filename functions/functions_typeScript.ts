let x = 10;
let y = 5;

let result = x + y;
console.log(result); // Exibe o resultado

// Declara uma função para adicionar dois números
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Usa a função
let resultAdd = addNumbers(10, 12); // Chama a função addNumbers
console.log(resultAdd); // Exibe a resposta retornada pela função addNumbers

// Exemplos de funções de string
function greetings(personName: string): void {
    console.log(`Olá ${personName}, como você está?`);
}

// Chama a função greetings
greetings("lucas");
