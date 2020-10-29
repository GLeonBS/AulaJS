const media = 70;
const aulas = 80;
const limiteFaltas = 25;

let nome = "Juninho";
let nota1 = 65;
let nota2 = 45;
let nota3 = 40;
let numFaltas = 20;

let somaNotaAluno = nota1 + nota2 + nota3;
console.log("soma das notas "+ somaNotaAluno);

let mediaAluno = somaNotaAluno / 3;
console.log("media das notas "+ mediaAluno.toFixed());


// 1ª parte da solução do problema
if (mediaAluno >= media) {
  console.log("O aluno " + nome + " está Aprovado");
} else {
  console.log("O aluno " + nome + " está Reprovado");
}

//calculo da porcentagem (x/y)*100 
let porcentagemFaltas = (numFaltas/aulas)*100
console.log("porcentagem de faltas "+ porcentagemFaltas +"%");

if(mediaAluno >= media && porcentagemFaltas < limiteFaltas) {
  console.log("O aluno " + nome + " está Aprovado");
} else if (mediaAluno >= media && porcentagemFaltas > limiteFaltas) {
  console.log("O aluno " + nome + " está Reprovado por Falta");
} else {
  console.log("O aluno " + nome + " está Reprovado por Média");
}
