/*
Escrever um algoritmo que lê cinco números inteiros, um de cada vez,
 armazena os números lidos em um vetor e a partir da leitura do vetor 
 imprime qual é o maior e o menor dos números lidos e também a soma dos números lidos.
*/
function numeroInteiros() {
    let numeros = [];

    // Ler cinco números inteiros
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Digite um número:"));
        numeros.push(numero); // Adiciona o número ao final do array
    }

    // Inicializa as variáveis maior, menor e soma
    let maior = numeros[0];
    let menor = numeros[0];
    let soma = 0;

    // Percorre o array para encontrar maior, menor e calcular a soma
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
        soma += numeros[i];
    }

    // Imprimir os resultados
    console.log("O maior número é: " + maior);
    console.log("O menor número é: " + menor);
    console.log("A soma dos números é: " + soma);
}

// Chamar a função para executar
numeroInteiros();

        
