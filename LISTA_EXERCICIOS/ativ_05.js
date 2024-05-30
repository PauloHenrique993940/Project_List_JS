//Atividade 05
/*
A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de indústrias que
são altamente poluentes do meio ambiente. O índice de poluição aceitável varia de 0,05 até 0,25.
Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a suspenderem suas atividades, 
se o índice crescer para 0,4 as industrias do 1º e 2º grupo são intimadas a suspenderem suas atividades, 
se o índice atingir 0,5 todos os grupos devem ser notificados a paralisarem suas atividades. 
Escreva um algoritmo que solicite ao usuário que informe o índice de poluição medido e emita
a notificação adequada aos diferentes grupos de empresas
*/

let indicePoluicao = parseFloat(prompt("Informe o índice de poluição: "));

if (indicePoluicao >= 0.05 && indicePoluicao <= 0.25) {

    console.log("Índice de poluição aceitável.");

} else if (indicePoluicao >= 0.3 && indicePoluicao < 0.4) {

    console.log("Indústrias do 1° grupo devem suspender suas atividades!");

} else if (indicePoluicao >= 0.4 && indicePoluicao < 0.5) {

    console.log("Indústrias do 1° e 2° grupos devem suspender suas atividades!");

} else if (indicePoluicao >= 0.5) {

    console.log("Todas as indústrias devem paralisar suas atividades!");

} else {
    
    console.log("Índice de poluição fora dos parâmetros conhecidos.");
}


