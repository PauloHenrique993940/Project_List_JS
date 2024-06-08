function calcularMediaNotas(alunos, notasPorAluno) {
    // Inicializando a matriz para armazenar as notas dos alunos
    let notas = [];
    let medias = [];

    for (let i = 0; i < alunos; i++) {
        notas[i] = [];
        let somaNotas = 0;

        for (let j = 0; j < notasPorAluno; j++) {
            let nota = parseFloat(prompt(`Informe a nota ${j + 1} do aluno ${i + 1}: `));
            while (isNaN(nota) || nota < 0 || nota > 10) {
                nota = parseFloat(prompt(`Nota inválida. Informe uma nota válida (0 a 10) para a nota ${j + 1} do aluno ${i + 1}: `));
            }
            notas[i][j] = nota;
            somaNotas += nota;
        }
        
        let media = somaNotas / notasPorAluno;
        medias.push(media);
    }

    // Verificando aprovação e reprovacão
    let aprovados = 0;
    let reprovados = 0;

    for (let i = 0; i < alunos; i++) {
        let status = medias[i] >= 6 ? 'Aprovado' : 'Reprovado';
        if (status === 'Aprovado') {
            aprovados++;
        } else {
            reprovados++;
        }
        console.log(`O Aluno ${i + 1} foi ${status} com média ${medias[i].toFixed(2)}`);
    }

    // Calculando a porcentagem de alunos aprovados
    let porcentagemAprovados = (aprovados / alunos) * 100;

    // Exibindo o resumo final
    console.log(`a. Quantos alunos foram aprovados: ${aprovados}`);
    console.log(`b. Quantos alunos foram reprovados: ${reprovados}`);
    console.log(`c. Porcentagem de alunos aprovados: ${porcentagemAprovados.toFixed(2)}%`);
}

// Número de alunos e número de notas por aluno
let numeroDeAlunos = parseInt(prompt("Informe a quantidade de alunos: "));
while (isNaN(numeroDeAlunos) || numeroDeAlunos <= 0) {
    numeroDeAlunos = parseInt(prompt("Valor inválido. Informe um número válido de alunos: "));
}
let notasPorAluno = 4;

// Chamando a função
calcularMediaNotas(numeroDeAlunos, notasPorAluno);
