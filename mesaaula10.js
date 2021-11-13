let bikes = ["sense", "caloi", "cannondale", "trek"];

// Acessar elementos específicos de um array.

console.log(bikes[2]);

// Modificar cada um dos elementos de um array e imprimi-los no console.

bikes = ["caloi", "cannondale", "sense", "trek"];
console.log(bikes);

// Adicionar elementos a um array.

bikes.push("oggi");
console.log(bikes);

// Extrair elementos de um array.

console.log(bikes.shift());
console.log(bikes);

// Comparar elementos de um array com os elementos de outro.

let bikes2 = ["sense", "cannondale", "trek", "oggi"];

// console.log(if (bike[2] == bike2.indexOf(bike[2])){});
console.log((bikes[2] == bikes2[bikes2.indexOf(bikes[2])]?true:false));

// Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.

// let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length]) // undefined

// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0]) // Spiderman

// let str = "una string qualquer"
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) // una string qualquer

// Crie a função imprimirInverso que pega um Array como um argumento e 
// imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).

function imprimirInverso(vetor) {
    vetor.reverse();
    console.log(vetor);
    vetor.reverse();
}

imprimirInverso(bikes2);

// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

function inverter(vetor) {
    let vetorInvertido = vetor.reverse();
    return vetorInvertido;
}

console.log(inverter(bikes2));

// Neste exercício, você criará uma função somarArray() 
// que aceita um array de números e retorna a soma de todos eles.

function somarArray(vetor){
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];
    }
    console.log(soma);
}

somarArray([3,6,9,12]);

// Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
// Importante: Não poderá utilizar o método Array.join() original.

function join(letras){
    let palavra = "";
    for (let i = 0; i < letras.length; i++) {
        palavra += letras[i];
    }
    console.log(palavra);
}

join(["l","e","t","r","a","s"]);

let peliculas = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
console.log(peliculas[1]);

// Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro 
// e converta o conteúdo de cada elemento em letras maiúsculas.


function maiusculas(vetor){
    let aux = [""];
    for (let i = 0; i < vetor.length; i++) {
        aux[i] = vetor[i].toUpperCase();
    }
    return vetor = aux;
}

console.log(maiusculas(peliculas));

// crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, 
// dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos

let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function addVetor(vetor1, vetor2){
    for (let i = 0; i < vetor2.length; i++) {
        vetor1.push(vetor2[i]);
    }
    return vetor1;
}

console.log(addVetor(peliculas, peliculas2));

peliculas = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

// Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código
// e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
// PS: por precaução, salve o elemento que você vai deletar em uma variável.

function addVetorCorrigido(vetor1, vetor2){
    let aux = vetor2.pop();
    for (let i = 0; i < vetor2.length; i++) {
        vetor1.push(vetor2[i]);
    }
    return vetor1;
}

console.log(addVetorCorrigido(peliculas, peliculas2));

// Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.

function comparaNotas(vetor1, vetor2){
    let igual = true;
    for (let i = 0; i < vetor2.length; i++) {
        if (vetor1[i] != vetor2[i]) {
            igual = false;
        }
    }
    return igual;
}

const asiaScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

console.log(comparaNotas(asiaScores,euroScores));