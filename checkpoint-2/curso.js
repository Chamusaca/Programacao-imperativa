const criarAlunos = require("./moduloAluno")

curso = {
    nomeCurso: " ", 
    notaAprov: 7,
    faltasMax: 20,
    listaEstudantes: [],
    addEstudante: function (nome, qtdFaltas, notas){
        this.listaEstudantes.push (new criarAlunos(nome, qtdFaltas, notas));
    },
    aprovado: function(aluno) {
        if ((aluno.calcularMedia() >= this.notaAprov) || (aluno.qtdFaltas < this.faltasMax)) {
            return true;
        }else if ((aluno.calcularMedia() >= this.notaAprov*1.1) || (aluno.qtdFaltas = this.faltasMax)){
            return true;
        }else {
            return false;
        }
    }
};

curso.addEstudante("João", 5, [8, 9, 10])
console.log(curso)
