//Crie uma função banco que faça saque e depósitos e mostre o saldo.

let saldo = 1000;
function banco(tipoOperacao, num){

switch(tipoOperacao.toLowerCase()){
    case "saque":
        if(num>saldo){
            return "impossivel sacar essa quantia, pois seu saldo é R$" + saldo;
        }
        return saldo - num;
    case "deposito":
        return saldo + num;
} 
}
console.log(banco("deposito", 101));