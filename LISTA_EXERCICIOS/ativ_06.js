//Atividade 06
/*
Escrever um algoritmo que lê a quantidade informada de pessoas que 
não estão sendo monitoradas no posto de saúde. Para cada pessoa é anotada o peso e a altura (em metros),
 que é fornecida pelo usuário, sendo que o peso igual a zero informa o final da leitura. Calcule e escreva: 
A maior altura informada, 
A menor altura informada, 
A média dos pesos informados.


*/
let maiorAltura = 0;
let menorAltura = 0;
let somaPesos = 0;
let contagemPessoas = 0;


while(true){
    
    let peso = parseFloat(prompt("Informe o peso da pessoa (0 para terminar): "));

    //PEDINDO PARA USUARIO INFORMAR O PESO, SI O PESO FOR IGUAL A 0 O PROGRAMA TERMINA
    if(peso == 0){

        break
    }
    //PEDINDO A ALTURA 
    let altura = parseFloat(prompt("Informe a altura da pessoa (em metros): "))

    if(contagemPessoas == 0){

        maiorAltura = altura;
        menorAltura = altura;
    }else{
        if(altura > maiorAltura){

            maiorAltura = altura;
        }
        if(altura < menorAltura){

            menorAltura = altura;
        }
    }
    somaPesos += peso;
    contagemPessoas += 1;
}
if(contagemPessoas > 0){
    let mediaPesos = somaPesos / contagemPessoas;
    console.log("Maior altura informada: " + maiorAltura + " metros");
    console.log("Menor altura informada: " + menorAltura + " metros");
    console.log("Média dos pesos informados: " + mediaPesos + " kg");
} else{

    console.log("Nenhuma pessoa foi infoemada.")
}
