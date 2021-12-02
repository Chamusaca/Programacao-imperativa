let vetorPar = [2,4,6,8];

let vetorImpar = vetorPar.map((item) => item+1);

console.log(vetorImpar);

//--------------------------------------------------------

let vetorNomes = ["Pedro", "João", "Maria", "Gustavo", "Maria"];

let vetorFiltrado = vetorNomes.filter((item) => item == "Maria");

console.log(vetorFiltrado);

//-------------------------------------------------------

let reducao = vetorPar.reduce((acumulador, item) => acumulador + '-' + item);

console.log(reducao);

//-------------------------------------------------------

let vetorAnimais = ["capivara", "pato", "dogo", "gato"];

vetorAnimais.forEach((item) => console.log("O animal é " + item));

//-------------------------------------------------------

let divSoma = (vetor) => {
    let soma = vetor.reduce((acumulador,item) => acumulador + item);
    return vetor.map(item => item/soma);
    }

console.log(divSoma(vetorPar));

//-------------------------------------------------------

let filtraPalavras = (vetor, numero) => {
    return vetor.filter(item => item.length > numero);
}

console.log(filtraPalavras(vetorNomes, 5));

//-------------------------------------------------------

let alunos = [
    {nome: "Pedro", nota: 7},
    {nome: "Neto", nota: 10},
    {nome: "Rods", nota: 6},
    {nome: "Gabs", nota: 7},
    {nome: "Nuit", nota: 9}
];

let ordemAlfabetica = (vetor) => {
    vetor.sort(function (a,b) {
        return a.nome-b.nome;
    });
}

console.log(ordemAlfabetica(alunos));