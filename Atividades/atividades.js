//Exibir uma mensagem ao carregar a minha página
alert('Bem vindo a minha página');

function exibirMensagem() {
    alert('Você clicou no botão');
    console.log('A página executou o método: exibirMensagem');
}

//Exercício 3 - Calculadora
var numero1 = 10 , numero2 = 5;

function somar (valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log('O resultado da soma entre 'valor1+' e '+valor2' é: '+resultado);
    //exibir no console
}

funtion subtrair (valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log('O resultado da subtração entre 'valor1+' e '+valor2' é: '+resultado);
    //exibir no console
}

function dividir (valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log('O resultado da divisão entre 'valor1+' e '+valor2' é: '+resultado);
    //exibir no console
}

function multiplicar (valor1, valor2) {
   let resultado = valor1 * valor2;
   console.log('O resultado da multiplicação entre 'valor1+' e '+valor2' é: '+resultado);
    //exibir no console
}d