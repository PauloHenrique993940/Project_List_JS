//Atividade 04
/*
Escreva um algoritmo que permita que o professor digite as notas da 1a. e 2a. 
avaliações de vários alunos, um aluno de cada vez. calcule e imprima a média (simples) desse aluno.
Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. Após apresentar a media calculada, 
o algoritmo deverá perguntar se o professor deseja continuar calculando a media para outros alunos. Se a resposta for ‘SIM’,
o algoritmo continua, caso contrário, o algoritmo finaliza
*/

function calcularMedia() {
    let continuar = true;

    while (continuar) {
        //Pedindo a primeira nota ao Usuario
        let primeiraAvaliacao = Number(prompt("Digite a nota da primeira avaliação (0 a 10): "));

        while (primeiraAvaliacao < 0 || primeiraAvaliacao > 10) {
            
            //Verificando si a primeira nota e valida
            primeiraAvaliacao = Number(prompt("Nota inválida. Digite a nota da primeira avaliação (0 a 10): "));
        }
        //Pedindo a segunda  nota
        let segundaAvaliacao = Number(prompt("Digite a nota da segunda avaliação (0 a 10): "));

        while (segundaAvaliacao < 0 || segundaAvaliacao > 10) {
             //Verificando se a segunda nota e valida
            segundaAvaliacao = Number(prompt("Nota inválida. Digite a nota da segunda avaliação (0 a 10): "));
        }

        //Calculo da media
        let media = (primeiraAvaliacao + segundaAvaliacao) / 2;
        alert(`A média do aluno é: ${media.toFixed(2)}`);//


        //perguntando si o usuario deseja calcular a media para outros alunos
        let resposta = prompt("Deseja continuar calculando a média para outros alunos? (SIM/NÃO): ").toUpperCase();
        while (resposta !== 'SIM' && resposta !== 'NÃO') {
            resposta = prompt("Resposta inválida. Deseja continuar calculando a média para outros alunos? (SIM/NÃO): ").toUpperCase();
        }

        if (resposta === 'NÃO') {
            continuar = false;
            //caso o usuario digitar não o programa irá finalizar
            break
        }
    }
}

calcularMedia();


