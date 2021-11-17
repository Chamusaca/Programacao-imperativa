let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "a vida e bela"];

let filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function converterMaiusculas (vetor){
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = vetor[i].toUpperCase();
    }
}

converterMaiusculas(filmes);
console.log(filmes);

function juncaoDeArrays(vetor, vetor2){
    let tamanho = vetor2.length;
    for (let i = 0; i < tamanho; i++){ 
        vetor.push(vetor2.pop());
    }
}

juncaoDeArrays(filmes, filmes2);
console.log(filmes);

function juncaoDeArraysCorrigido(vetor, vetor2){
    let aux = vetor2.pop();
    for (let i = 0; i < vetor2.length; i++) {
        vetor.push(vetor2[i]);
    }
    return vetor;
}

console.log(juncaoDeArraysCorrigido(filmes, filmes2));

function comparaNotas(vetor, vetor2){
    let igual = true;
    for (let i = 0; i < vetor2.length; i++) {
        if (vetor[i] != vetor2[i]) {
            igual = false;
        }
    }
    return igual;
}

const asiaScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

console.log(comparaNotas(asiaScores,euroScores));