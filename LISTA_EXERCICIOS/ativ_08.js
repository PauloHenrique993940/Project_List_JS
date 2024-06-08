/*  Atividade 08 
Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene-os nomes lidos 
em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa 
e depois escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), 
ou NÃO ACHEI caso contrário.
*/

function lerNomes() {
    let nomes = [];

    // Ler 10 nomes
    for (let i = 0; i < 10; i++) {
        let nome = prompt("Digite um nome:");
        nomes.push(nome); // Adiciona o nome no final do array
    }

    // Ler mais um nome
    let nomeAdicional = prompt("Digite um nome adicional:");

    // Verificar se o nome adicional está no vetor de nomes
    let encontrado = false;
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nomeAdicional) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        console.log("ACHEI");
    } else {
        console.log("NÃO ACHEI");
    }
}

// Chamar a função para executar
lerNomes();
