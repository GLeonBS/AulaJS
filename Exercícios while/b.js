var a = 0;
var b = 1;
var auxiliar;
i =0;

while(i<=30) {
    auxiliar = a +  b;
    a = b;
    b = auxiliar;
    console.log (auxiliar);
    i++
}