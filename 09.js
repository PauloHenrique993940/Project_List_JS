/*
Escrever um algoritmo que lê uma quantidade não informada de dados de pessoas
que estão sendo monitoradas no posto de saúde. Para cada pessoa é anotada o sexo
(M ou F) e a altura (em metros), que é fornecida via teclado, sendo que a altura igual
a zero informa o final da leitura. Armazenar as informações em vetores e
posteriormente, calcule e escreva:
a. A maior altura informada,
b. A média das alturas das mulheres,
c. A quantidade de homens,
d. A menor altura dos homens.
*/

let sexos = [];
let alturas = [];

// Função para ler os dados das pessoas
function lerDados() {
    while (true) {
        let sexo = prompt("Informe o sexo (M ou F): ").toUpperCase();
        let altura = parseFloat(prompt("Informe a altura (em metros): "));
        
        // Condição de parada
        if (altura === 0) {
            break;
        }
        
        // Armazenando os dados nos vetores
        sexos.push(sexo);
        alturas.push(altura);
    }
}

// Função para processar os dados e calcular os resultados
function processarDados() {
    let maiorAltura = 0;
    let somaAlturasMulheres = 0;
    let contadorMulheres = 0;
    let contadorHomens = 0;
    let menorAlturaHomens = Infinity;

    for (let i = 0; i < alturas.length; i++) {
        let altura = alturas[i];
        let sexo = sexos[i];
        
        // a. A maior altura informada
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }

        if (sexo === 'F') {
            // b. Somando as alturas das mulheres para calcular a média posteriormente
            somaAlturasMulheres += altura;
            contadorMulheres += 1;
        } else if (sexo === 'M') {
            // c. Contando a quantidade de homens
            contadorHomens += 1;

            // d. Encontrando a menor altura dos homens
            if (altura < menorAlturaHomens) {
                menorAlturaHomens = altura;
            }
        }
    }

    // Calculando a média das alturas das mulheres
    let mediaAlturasMulheres = contadorMulheres > 0 ? somaAlturasMulheres / contadorMulheres : 0;

    // Tratando o caso onde não há homens registrados
    if (contadorHomens === 0) {
        menorAlturaHomens = 0;
    }

    // Exibindo os resultados
    console.log(`a. A maior altura informada: ${maiorAltura.toFixed(2)} metros`);
    console.log(`b. A média das alturas das mulheres: ${mediaAlturasMulheres.toFixed(2)} metros`);
    console.log(`c. A quantidade de homens: ${contadorHomens}`);
    console.log(`d. A menor altura dos homens: ${menorAlturaHomens.toFixed(2)} metros`);
}

// Executando as funções
lerDados();
processarDados();

