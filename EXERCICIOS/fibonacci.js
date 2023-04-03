// Exercício 2

const prompt = require("prompt-sync")();
const numero = parseInt(prompt("Informe um número: "));

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let i = 0;
let pertence = false;
while (fibonacci(i) <= numero) {
  if (fibonacci(i) === numero) {
    pertence = true;
    break;
  }
  i++;
}

if (pertence) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}
