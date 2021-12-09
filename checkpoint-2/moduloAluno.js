aluno = {
    nome: "nome",
    qtdFaltas: 0,
    notas: [0, 3, 5, 6],
    calcularMedia: function () {
        let somaNotas = this.notas.reduce((a, b) => a + b, 0);
        let mediaNotas = (somaNotas / this.notas.length) || 0;
        return mediaNotas;
    }
}

function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome,
        this.qtdFaltas = qtdFaltas,
        this.notas = notas,
        this.calcularMedia = function () {

            let somaNotas = this.notas.reduce((a, b) => a + b, 0);
            let mediaNotas = (somaNotas / this.notas.length) || 0;
            return mediaNotas;
        }
        this.addFaltas = function () {
            return this.qtdFaltas++;
        }
};

module.exports(Aluno);

// let Katy = (new Aluno("Katy", 4, [7, 3, 4, 10]))

// console.log(Katy.calcularMedia())

