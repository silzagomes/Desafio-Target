// Exercício 3
const faturamentoMensal = require('./dados.json');

let menorFaturamento = Number.MAX_VALUE;
let maiorFaturamento = Number.MIN_VALUE;
let totalFaturamento = 0;
let diasAcimaDaMedia = 0;

for (let i = 0; i < faturamentoMensal.length; i++) {
  const valor = faturamentoMensal[i].valor;

  if (valor < menorFaturamento) {
    menorFaturamento = valor;
  }

  if (valor > maiorFaturamento) {
    maiorFaturamento = valor;
  }

  totalFaturamento += valor;
}


const mediaFaturamento = totalFaturamento / faturamentoMensal.length;


for (let i = 0; i < faturamentoMensal.length; i++) {
  const valor = faturamentoMensal[i].valor;

  if (valor > mediaFaturamento) {
    diasAcimaDaMedia++;
  }
}


console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
