// Para executar, é necessário utilizar o "prompt", do Google Chrome, ou NodeJS.
// node q2.js

var readline = require('readline'); // Livraria para digitar no console.
// Lembrando que "readline" é uma livraria inata do NodeJS

var rl = readline.createInterface({ // Utilizando a livraria para iniciar a "interface".
  input: process.stdin,
  output: process.stdout
});

// Criando os termos.
let fibo1 = 0; 
let fibo2 = 1;
let fibo3 = 0;

// Exibindo a "interface".
rl.question('Digite um número a ser verificado: ', (valor) => {
  rl.close();

  valor = parseInt(valor); // Coletando o valor digitado pelo usuário.

// Executando uma função nativa do JavaScript.
  while (valor > fibo3) { // Enquanto "valor" for MAIOR que "fibo3", execute este código.
    fibo3 = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fibo3;
  }

  if (valor === 0 || valor === 1 || valor === fibo3) { // Se "valor", for igual a 0, 1, ou "fibo3", vulgo "fibo1" + "fibo2". Execute este código.
    console.log('Faz parte da sequência de Fibonacci.');
  } else { // Se a variável acima não for válida, então execute este código abaixo.
    console.log('Não faz parte da sequência de Fibonacci.');
  }
});
// Fim do código.


// Exemplo do código em Python:
// Este código é mais simples em python, mas fiz em JavaScript porque tenho mais afinidade com a linguagem.

// fibo1 = int(0)
// fibo2 = int(1)
// fibo3 = int(0)
// Valor = int(input('Digite um número a ser verificado: '))
// while Valor > fibo3:
//  fibo3 = fibo1 + fibo2
//  fibo1 = fibo2
//  fibo2 = fibo3
// if Valor == 0 or Valor == 1:
//  print ('Faz parte da sequência de Fibonacci.')
// elif Valor == Termo3:
//  print ('Faz parte da sequência de Fibonacci.')
// else:
//  print ('Não faz parte da sequência de Fibonacci.')

// Para executar este código, crie outro arquivo, com a extensão .py
// Copie das linhas 41 até 54.
// Se estiver utilizando VsCode:
// Cole no novo arquivo criado, dê "Ctrl + A", e logo após isso, utilize "Ctrl + ;".
// Isso vai remover os "//" no começo de cada linha.