function adicionar(a,b){
    return a+b;
}

function subtracao(a,b){
    return a-b;
}

function multiplicacao(a,b){
    return a*b;
}

function divisao(a,b){
    return a/b;
}

console.log ("-------------- Teste de Operações / Calculadora --------------");

console.log(adicionar(12,4));
console.log(subtracao(15,4));
console.log(multiplicacao(13,4));
console.log(divisao(16,4));
console.log(divisao(0,4));
console.log(divisao(4,0));

console.log ("-------------- Funções da Parte 3 --------------");

function quadradoDoNumero(x){
    return multiplicacao(x,x);
}

console.log();

function mediaDeTresNumeros(a,b,c){
    let soma = adicionar(adicionar(a,b), c);
    return divisao(soma,3);
}

console.log(mediaDeTresNumeros(8,9,10));

function calculaPorcentagem(total, porcentagem){
    return divisao(multiplicacao(total, porcentagem), 100);
}

console.log(calculaPorcentagem(200,20));

function geradorDePorcentagem(parte, total){
    return multiplicacao(divisao(parte, total),100);
}

console.log(geradorDePorcentagem(18,300));

