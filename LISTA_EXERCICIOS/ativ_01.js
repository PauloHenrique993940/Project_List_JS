//Atividade 01
/*
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo
que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao
consumidor
*/


let percentualDistribuidor = 0.28; // Porcentagem do distribuidor
let impostos = 0.45; // Porcentagem dos impostos
let custoFabrica = 1000; // Custo de fábrica do carro

// Calcula o valor adicional do distribuidor e dos impostos
let valorDistribuidor = custoFabrica * percentualDistribuidor;
let valorImpostos = custoFabrica * impostos;

// Calcula o custo final ao consumidor
let custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

// Exibe o custo final ao consumidor
console.log(`O custo final ao consumidor é de: R$ ${custoFinal.toFixed(2)}`);





