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
