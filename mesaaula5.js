/*Crie uma função que converta polegadas em centímetros. 
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.*/

function convertPolCent(cent){
    return cent*2.54;
}

/*Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"*/

function convertUrl(texto){
    console.log("http://www."+texto+".com.br");
}

/*Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).*/

function exclama(texto){
    console.log(texto + "!");
}

/*Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.*/


function idadeDog(idade){
    return idade*7;
}

/*Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês.*/

function horaTrabalho(salario){
    return salario/160;
}

/*Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso */

function imc(altura, peso){
    let alturametros = altura/100;
    return peso/(alturametros*alturametros);
}

console.log(imc(200,80));
console.log(imc(180,110));
console.log(imc(160,90));
console.log(imc(210,100));

/*Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase() faz.*/

function convertMaiuscula(texto){
    return texto.toUpperCase();
}

/*Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
Dica: Isso te ajudará a entender o que o operador typeof faz.*/

function tipo(variavel){
    return typeof variavel;
}

/*Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.*/

function calcCircunferencia(raio){
    return raio*2*Math.PI;
}