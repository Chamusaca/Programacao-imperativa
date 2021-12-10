let aluno = require("./aluno");

let listaAlunos = [];

listaAlunos.push(new aluno("Lucas", 8, [8,8,8]));
listaAlunos.push(new aluno("Pedro", 4, [9,8,7]));
listaAlunos.push(new aluno("Katy", 5, [9,8,7]));
listaAlunos.push(new aluno("Jadson", 2, [6,5,7]));
listaAlunos.push(new aluno("Johnny", 7, [8,8,8]));

module.exports = listaAlunos;