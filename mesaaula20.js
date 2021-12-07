const arquivos = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": 1.61,
        "idade": 50,
        "opiniao": "1"
    }
    ,
    {
        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": 1.75,
        "idade": 34,
        "opiniao": "2"
    },
    {
        
        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": 1.55,
        "idade": 25,
        "opiniao": "3"
    },
    {
        
        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": 1.67,
        "idade": 80,
        "opiniao": "1"
    },
    {
        
        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": 1.75,
        "idade": 18,
        "opiniao": "2"
    },
    {
        
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": 1.88,
        "idade": 30,
        "opiniao": "3"
    },
    {
        
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": 1.67,
        "idade": 25,
        "opiniao": "3"
    },
    {
        
        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": 1.63,
        "idade": 25,
        "opiniao": "2"
    },
    {
        
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": 1.92,
        "idade":30,
        "opiniao": "1"
    },
    {
        
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": 1.80,
        "idade": 45,
        "opiniao": "3"
    }
]

let media = (vetor) => {
    let filtro = vetor.filter((item) => item.opiniao == "3");
    let soma = filtro.reduce((acumulador, item) => {return acumulador + item.idade},0);
    return soma/filtro.length; 
}

console.log("A média das idades das pessoas que responderam 'Ótimo' é: "+ media(arquivos));

let qtdRegular = (vetor) => {
    let filtro = vetor.filter((item) => item.opiniao == "1");
    return filtro.length;
}

console.log("A quantidade de pessoas que responderam regular é: "+ qtdRegular(arquivos));

let porcentagemBom = (vetor) => {
    let filtro = vetor.filter((item) => item.opiniao == "2");
    return (filtro.length/vetor.length)*100;
}

console.log("A porcentagem de pessoas que responderam 'Bom' entre todos os espectadores é: "+ porcentagemBom(arquivos) +"%");



