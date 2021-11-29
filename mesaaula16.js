function multiplo(x,y,palavra1,palavra2) {
    for (let i = 0; i <= 100; i++) {
        if (((i % x) == 0) && ((i % y) == 0))  {
            console.log(palavra1+palavra2);
        } 
        else if (((i % x) == 0) && ((i % y) != 0)) {
            console.log(palavra1);
        }
        else if (((i % x) != 0) && ((i % y) == 0)){
            console.log(palavra2);
        }
        else {
            console.log(i);
        }
    }
}

let fizzBuzz = (a,b,c,d,funcao) => funcao(a,b,c,d);

fizzBuzz(5,7,"xa","blau",multiplo);