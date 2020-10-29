//Crie uma função que receba um número e retorne a tabuada desse número.

function tabuada(num){
    var tabuada = 0
    i=0;
    while (i<=10) {
        tabuada = num * i;
        let text = num + " x " + i + " é igual a " + tabuada;
        console.log(text);
        i++
    }
}
console.log(tabuada(7));