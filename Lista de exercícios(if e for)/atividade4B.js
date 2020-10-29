/*Para cada conjunto de valores abaixo, escreva o código em JavaScript usando laço(s)
onde na opção a é para ordenar o array de forma crescente e no caso do segundo, a
letra b é de forma decrescente.
a) 10 9 8 7 6 5 4 3 2 1
b) 0 1 4 9 16 25 36 49 64 81 100
*/

var arrayB=[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

for(i=0;i<arrayB.length;i++){
    for(u=i+1;u<arrayB.length;u++)   {
        if (arrayB[i]<arrayB[u]){
            aux = arrayB[i];
            arrayB[i] = arrayB[u];
            arrayB[u] = aux;
        }
    }
}
console.log(arrayB)
/*function ordenaNum(a,b){
    return b-a;
}
arrayB.sort(ordenaNum);

for(i=0;i<arrayB.length;i++){
    console.log(arrayB[i]);
}*/