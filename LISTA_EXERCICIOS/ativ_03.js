//Atividade 03 🛒
/* 
Escreva um algoritmo que solicite ao usuário que informe: quantidade atual em estoque, 
quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever
a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). 
Se a quantidade em estoque for maior ou igual a quantidade média exibir a mensagem 'Não efetuar compra', 
senão escrever a mensagem 'Efetuar compra'.
*/

//Pedindo para o Usuario entrar com a quantidade atual em estoque:
let nomeProduto = prompt("Informe o nome do produto: ");
let qtAtualEmEstoque =  Number(prompt("Informe  a quantidade atual em estoque:  "));
let qtMaximaEmEstoque = Number(prompt("Informe a quantidade  máxima em estoque:  "));
let qtMinimaEmEstoque = Number(prompt("Informe a quantidade miníma em estoque:  "));

let qtMedia = qtMaximaEmEstoque + qtMinimaEmEstoque / 2;

if(qtAtualEmEstoque >= qtMedia){

    console.log("Não efetuar compra .");

}else{

    console.log("Efetuar a compra.")
}