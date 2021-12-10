const criarAlunos = require("./aluno");
const listaExportada = require("./estudante");

curso = {
    nomeCurso: "Programacao", 
    notaAprov: 7,
    faltasMax: 7,
    listaEstudantes: listaExportada,
    addEstudante: function (nome, qtdFaltas, notas){
        this.listaEstudantes.push (new criarAlunos(nome, qtdFaltas, notas));
    },
    aprovado: function(aluno) {
        if ((aluno.calcularMedia() >= this.notaAprov) && (aluno.qtdFaltas < this.faltasMax)) {
            return true;
        }else if ((aluno.calcularMedia() >= this.notaAprov*1.1) && (aluno.qtdFaltas == this.faltasMax)){
            return true;
        }else {
            return false;
        }
    },
    listaAprovados: function() {
        let listaAprovados=[];
        this.listaEstudantes.forEach(function (item) {
            listaAprovados.push(curso.aprovado(item))
        })
        return listaAprovados;
    }
};

// curso.addEstudante("João", 8, [8,8,8]);
// console.log(curso.aprovado(curso.listaEstudantes[0]));
// curso.addEstudante("Pedro", 4, [9,8,7]);
// curso.addEstudante("Marina", 5, [9,8,7]);
// curso.addEstudante("Leila", 2, [6,5,7]);
console.log(curso.listaEstudantes);
// console.log(curso);
console.log(curso.listaAprovados());