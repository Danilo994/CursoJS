const nome = 'Danilo';
const sobrenome = 'Arrabal';
const idade = 21;
const peso = 80;
const altura = 1.76;
let imc;
let anoNascimento;

imc = peso / (altura* altura);
anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg.');
console.log('tem ' + altura + ' de altura e IMC de ' + imc + '.');
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);