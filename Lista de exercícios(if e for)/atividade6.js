/*
Desenvolva uma aplicação em JavaScript para simular o lançamento de dois dados em
uma jogada de 10. A soma dos dois valores deve então ser calculada. Cada dado pode
mostrar um valor de 1 a 6, portanto a soma dos valores irá variar de 2 a 12. Imprima
quando o resultado da soma for par e quando for impar e também a quantidade total de
pares em impares ao final.
*/
var nPar = 0
var nImpar = 0

for (i=0;i<10;i++){
    var dado1 = Math.floor(Math.random() * 6 + 1);
    var dado2 = Math.floor(Math.random() * 6 + 1);
    var soma = dado1 + dado2;
    var conf = soma % 2;
if (conf == 0) {
    resultado = "O número " + soma + " é par!";
    nPar ++
    console.log (resultado);
} else if (conf != 0){
    resultado = "O número " + soma + " é ímpar!" ;
    nImpar ++
    console.log (resultado);   
}
}
console.log ("Há " + nPar + " números pares");
console.log ("Há " + nImpar + " números ímpares");