const arquivos = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": 1.61
    }
    ,
    {
        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": 1.75
    },
    {
        
        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": 1.55
    },
    {
        
        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": 1.67
    },
    {
        
        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": 1.75
    },
    {
        
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": 1.88
    },
    {
        
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": 1.67
    },
    {
        
        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": 1.63
    },
    {
        
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": 1.92
    },
    {
        
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": 1.80
    }
]

function maiorMenor(vetor) {
    maior = vetor[0].altura;
    menor = vetor[0].altura;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].altura > maior) {maior = vetor[i].altura;};
        if (vetor[i].altura < menor) {menor = vetor[i].altura;}; 
    };
    console.log("A Maior altura é: "+maior+" e a menor altura é: "+menor);
}

maiorMenor(arquivos);

function mediaAlturaMulheres(vetor) {
    qtdMulheres = 0;
    auxAltura = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].sexo == "F") {
            auxAltura += vetor[i].altura;
            qtdMulheres++;
        }
    }
    return (auxAltura/qtdMulheres);
}

console.log("A média de altura das mulheres é: "+mediaAlturaMulheres(arquivos));

function qtdHomens(vetor) {
    let vetorHomens = vetor.filter((item) => {
        return item.sexo == "M";
    })
    return vetorHomens.length;
}

console.log("O número de homens no grupo é: "+qtdHomens(arquivos));