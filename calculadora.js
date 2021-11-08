function suma(n1,n2){
    return n1+n2
}

// exports.suma = suma;

function resta(n1,n2){
    return n1-n2
}

// exports.resta = resta;

function multiplicacion(n1,n2){
    return n1*n2
}

// exports.multiplicacion = multiplicacion;

function division(n1,n2){
    if(n2 != 0){
    return n1/n2
    }else{
        return "No se puede dividir entre 0"
    }
};

// exports.division = division;

const calculadora = {
    suma:suma,
    resta:resta,
    mult:multiplicacion,
    div:division
}

module.exports = calculadora; //con esto ahorro el resto de exports

// module.exports = function div2(a,b){
//     if(b !=0){
//         return a/b
//     }else{
//         return "No quiero dividir entre 0"
//     }
// };