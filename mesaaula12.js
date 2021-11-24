const alicia = [25, 69, 30];
const bob = [25, 69, 31];

let pontosA = 0;
let pontosB = 0;

function encontrarGanhador(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pontosA++;
        }
        else if (a[i] < b[i]) {
            pontosB++;
        }
    }
    if (pontosA > pontosB) {
        return "o Primeiro participante foi o campeão";
    }
    else if (pontosA < pontosB) {
        return "o Segundo participante foi o campeão";
    }
    else {
        return "houve um Empate";
    }
}

console.log(encontrarGanhador(alicia, bob));

/*********************************************************************/

function digitalHouse(x,y) {
    for (let i = 0; i <= 100; i++) {
        if (((i % x) == 0) && ((i % y) == 0))  {
            console.log("Digital House");
        } 
        else if (((i % x) == 0) && ((i % y) != 0)) {
            console.log("Digital");
        }
        else if (((i % x) != 0) && ((i % y) == 0)){
            console.log("House");
        }
        else {
            console.log(i);
        }
    }
}

digitalHouse(5,7);

/*******************************************************/

function sumArray(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;
}

console.log(sumArray([10, 3, 10, 4]));

/*********************************************************/

function join(vetor) {
    let frase = "";
    for (let i = 0; i < vetor.length; i++) {
        frase += vetor[i];
    }
    return frase;
}

console.log(join(["t","e","s","t","e"]));