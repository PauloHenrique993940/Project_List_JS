
//Atividade 02
/*
Uma revendedora de carros usados paga a seus funcionários vendedores um salário
fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do
valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros
por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe
por carro vendido. Calcule e escreva o salário final do vendedor
*/

let nomeVendedor = "Paulo";
let qtCarrosVendidos = 40;
let salarioFixo = 4800;
let valorCarro = 17900;
let comissao = 5;

// Cálculo do valor da comissão por carro vendido
let valorComissao = comissao / 100 * valorCarro;

// Soma da comissão total
let valorTotalComissao = valorComissao * qtCarrosVendidos;

// Salário final
let salarioFinal = salarioFixo + valorTotalComissao;

console.log(`O vendedor ${nomeVendedor}, teve o valor da comissão por venda de: ${valorComissao.toFixed(2)} R$ e seu salário final é de: ${salarioFinal.toFixed(2)} R$`);