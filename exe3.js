/*
Turma 5

Pedro Oliveira
Rafael Costa
Mateus Afonso
Edimilson Sousa
Jonathas Magalhaes
Gabriela Nakasone
*/



// 1) Em um novo arquivo chamado ex3.js, exiba na tela a soma de dois números.
// 2) Repita o processo anterior, mas utilizando outro operador.
// 3) Declare e atribua 2 variáveis ​​numéricas independentes. Exiba a soma de ambas na tela.
// 4) Atribua a soma das duas variáveis ​​anteriores a uma outra variável e exiba-a na tela.
// 5) Re-atribua à variável anterior "1" +1, e exiba na tela. (O que  aconteceu?)
// 6) Re-atribua "olá" + 23, e exiba na tela. (O que aconteceu?)
// 7) Crie mensagens concatenadas com valores diferentes.

//1
console.log(3+5);

//2
console.log(3-5);

//3
let x = 3;
let y = 4;
console.log(x+y);

//4
let soma = x + y;
console.log(soma);

//5
soma = "1" + 1;
console.log(soma);

//6
soma = "Olá" + 23;
console.log(soma);

//7
soma = ("essa é a variável y: " + y + " e esta é a variável x: " + x);
console.log(soma);

/*Quais são as variáveis? 
Nome, Sobrenome, Idade, Peso, Altura, Plano

Quais são as constantes? De que tipo são?
Nome, Sobrenome pode ser desde que o lciente não se case. São do tipo String.

Qual variável poderia armazenar o valor null segundo estes dados?
Plano

Você deverá criar 6 variáveis:
Nome
Idade
Peso
Altura
Plano (só nos interessa saber se TEM ou NÃO TEM)
Índice de Massa Corporal (IMC)
O programa deverá apresentar em tela o valor do IMC de um paciente da tabela com uma mensagem. 
Por exemplo: “Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.*/

let nome = "Ana";
let sobrenome = "Paula";
let idade = 26;
let peso = 55.0;
let altura = 1.62;
let plano = true;
let imc = peso/(altura*altura);

console.log(nome + " " + sobrenome + " tem " + idade + " anos e seu índice de massa corporal é de " + imc);
