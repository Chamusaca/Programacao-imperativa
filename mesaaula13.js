let contaObjeto = {
    numero : 123456,
    tipo : "poupanca",
    saldo : 5450.50,
    titular : "Joãozinho da Silva"
}

function conta(numero, tipo, saldo, titular) {
    this.numero = numero,
    this.tipo = tipo,
    this.saldo = saldo,
    this.titular = titular
}

let contas = [];
contas.push(new conta(11111,"corrente", 6215.36, "Pedrinho"));
contas.push(new conta(22222,"corrente", 6135.25, "Lucas"));
contas.push(new conta(33333,"poupanca", 69871, "Sonia"));
contas.push(new conta(44444,"corrente", 6214.24, "Adriana"));
contas.push(new conta(55555,"corrente", 9847, "Neno"));
contas.push(new conta(66666,"poupanca", 1547, "Neso"));
contas.push(new conta(77777,"corrente", 3214.30, "Douglas"));
contas.push(new conta(88888,"corrente", 93523, "Carlos"));
contas.push(new conta(99999,"poupanca", 5774, "Fernando"));
contas.push(new conta(10101,"corrente", 324, "Louzada"));


let banco = {
    cliente : contas,
    consultarCliente : function(nome) {
        for (let i = 0; i < this.cliente.length; i++) {
            if (this.cliente[i].titular == nome) {
                return this.cliente[i];
            }
        }
        return "Cliente não encontrado";
    },
    deposito : function(nome, valor) {
        for (let i = 0; i < this.cliente.length; i++) {
            if (this.cliente[i].titular == nome) {
                this.cliente[i].saldo += valor;
                return console.log("Depósito realizado, seu novo saldo é: ", this.cliente[i].saldo);
            }
        }
        return console.log("Cliente não encontrado");
    },
    saque : function(nome, valor) {
        for (let i = 0; i < this.cliente.length; i++) {
            if (this.cliente[i].titular == nome) {
                if ((this.cliente[i].saldo - valor) < 0) {
                    return console.log("Fundos Insuficientes");
                } else {
                    this.cliente[i].saldo -= valor;
                    return console.log("Saque realizado com sucesso, seu novo saldo é: ", this.cliente[i].saldo);
                }
            }
        }
        return console.log("Cliente não encontrado");
    }
}

console.log(banco.consultarCliente("Fernando"));

banco.deposito("Neso", 53);

banco.saque("Neso", 600);
banco.saque("Neso", 1500);
