/** Faça um algoritmo que dado as 3 notas tiradas, por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
 * 
 * Média = (Nota 1, nota 2, nota 3) / 3;
 * 
 * Classificação:
 * - Média menor que 5, reprovado;
 * - Média entre 5 e 7, recuperação;
 * - Média acima de 7, passou de semetre;
 */

const reprovado = 5;
const recuperação = 7;

const notaJaneiro = 10;
const notaFeveiro = 5;
const notaMarço = 5;

const mediaTrimestre = (notaJaneiro + notaFeveiro + notaMarço) / 3;

if (mediaTrimestre < reprovado) {
    console.log("Reprovado:", mediaTrimestre.toFixed(2));
} else if (mediaTrimestre >= reprovado && mediaTrimestre < recuperação) {
    console.log("Recuperação:", mediaTrimestre.toFixed(2));
} else if (mediaTrimestre >= recuperação) {
    console.log("Aprovado:", mediaTrimestre.toFixed(2))
} else {
    console.log("Nota inválida");
}