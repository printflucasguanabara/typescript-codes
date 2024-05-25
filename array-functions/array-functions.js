// Funções de Array em TypeScript

var frutas = ["maçã", "banana", "cereja", "tâmara", "sabugueiro"];
console.log("Array original: ", frutas, '\n');

// push()
// A função push() adiciona "pêssego" ao final do array frutas, exibe o array após essa operação e também mostra o novo comprimento do array.
var comprimentoPush = frutas.push("pêssego");
console.log("Após o push(): ", frutas);
console.log("Comprimento retornado pelo push(): ", comprimentoPush);

// pop()
// A função pop() remove o último elemento do array frutas, exibe o array sem esse último elemento e também mostra qual elemento foi removido.
var elementoPop = frutas.pop();
console.log("Após o pop():", frutas);
console.log("Elemento retornado pelo pop(): ", elementoPop);

// shift()
// A função shift() remove o primeiro elemento de um array e retorna esse elemento.
var elementoShift = frutas.shift();
console.log("Após o shift(): ", frutas);
console.log("Elemento retornado pela função shift: ", elementoShift);

// unshift()
// A função unshift() modifica o array frutas adicionando um elemento ao seu início e imprime o novo estado do array e seu novo comprimento.
var comprimentoUnshift = frutas.unshift("damasco");
console.log("Após o unshift(): ", frutas);
console.log("Comprimento retornado pelo unshift():", comprimentoUnshift);

// slice()
// Usando a função slice(), extrai um subconjunto específico de elementos do array frutas, armazena esse subconjunto na variável arraySlice, e imprime o conteúdo desse subconjunto.
var arraySlice = frutas.slice(1, 3);
console.log("Array após o slice (subconjunto): ", arraySlice);

// splice()
// A função splice() remove elementos de um array e opcionalmente os substitui por novos elementos.
// Essa função pode ser usada para adicionar ou remover elementos de qualquer lugar no array.
console.log("Antes do splice(): ", frutas);
frutas.splice(2, 2);
console.log("Após o splice(): ", frutas);

// concat()
// A função concat() junta dois ou mais arrays e retorna um novo array que contém todos os elementos dos arrays originais.



// amo ts/js