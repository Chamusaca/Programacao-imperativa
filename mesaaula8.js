function podeSubir(altura, acompanhante){
    if (altura >= 1.40 && altura <= 2) {
        return true;
    }
    
    else if (altura < 1.4 && altura > 1.2 && acompanhante == true){
        return true;
    }
    else{
        return false;
    }
}

function podeSubirMsg(altura, acompanhante){
    if (altura >= 1.40 && altura <= 2) {
        console.log("Acesso autorizado");
    }
    
    else if (altura < 1.4 && altura > 1.2 && acompanhante == true){
        console.log("Acesso autorizado somente com acompanhante");
    }
    else{
        console.log("Acesso negado");
    }
}