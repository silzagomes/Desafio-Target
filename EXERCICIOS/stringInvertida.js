// Exercício 5

const prompt = require("prompt-sync")();

let string = prompt("Digite uma string:"); 
let stringInvertida = ""; 


for (let i = string.length - 1; i >= 0; i--) {

  stringInvertida += string[i];
}

console.log(stringInvertida);
