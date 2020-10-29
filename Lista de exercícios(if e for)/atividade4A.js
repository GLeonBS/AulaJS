/*Para cada conjunto de valores abaixo, escreva o código em JavaScript usando laço(s)
onde na opção a é para ordenar o array de forma crescente e no caso do segundo, a
letra b é de forma decrescente.
a) 10 9 8 7 6 5 4 3 2 1
b) 0 1 4 9 16 25 36 49 64 81 100
*/
var arrayA=[10, 9, 8 , 7, 6, 5, 4, 3, 2, 1];

for(i=0;i<arrayA.length;i++){
    for(u=i+1;u<arrayA.length;u++){
        if (arrayA[i]>arrayA[u]){
            aux = arrayA[i];
            arrayA[i] = arrayA[u];
            arrayA[u] = aux;
        }
    }
}
console.log(arrayA)

/*function ordenaNum(a,b){
    return a-b;
}
arrayA.sort(ordenaNum);

for(i=0;i<arrayA.length;i++){
    console.log(arrayA[i]);
}
*/
