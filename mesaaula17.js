let vetorPar = [2,4,6,8];

let vetorImpar = vetorPar.map((item) => item+1);

console.log(vetorImpar);

//--------------------------------------------------------

let vetorNomes = ["Pedro", "João", "Maria", "Gustavo", "Maria"];

let vetorFiltrado = vetorNomes.filter((item) => item == "Maria");

console.log(vetorFiltrado);

//-------------------------------------------------------

reducao = vetorPar.reduce((acumulador, item) => acumulador + '-' + item);

console.log(reducao);

//-------------------------------------------------------

let vetorAnimais = ["capivara", "pato", "dogo", "gato"];

vetorAnimais.forEach((item) => console.log("O animal é " + item));