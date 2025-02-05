//Exibir uma mensagem ao carregar a minha página
alert('Bem vindo a minha página');

//Enviar mensagem para o desenvolvedor
function exibirMensagem() {
    alert('Você clicou no botão');
    console.log('A página executou o método: exibirMensagem');
}

//Exercício 3 - Calculadora
function realizarCalculos() {
    let numero1 = parseInt(prompt('informe o primeiro valor'));
    let numero2 = parseInt(prompt('Informe o segundo valor'));
    somar(numero1, numero2);
    subtrair(numero1, numero2);
    dividir(numero1, numero2);
}

function somar(valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log('O resultado da soma entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
    //exibir no console
}

function subtrair(valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log('O resultado da subtração entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
    //exibir no console
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log('O resultado da divisão entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
    //exibir no console
}

function multiplicar(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log('O resultado da multiplicação entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
    //exibir no console
}

//Calculadora "funcional"
var valor1 = '';
var valor2 = '';
var operacao = '';
const qtdCasaDecimal = 2;
function guardarNumero(valor) {
    //se o meu numero contém o .
    // eu conto quantos numeros tem após ele
    if (!operacao) {
        valor1 += valor;
        console.log(valor1);
    } else if (operacao) {
        valor2 += valor;
        console.log(valor2);
    }
}

function guardarOperacao(operacaoE) {
    operacao = operacaoE;
}

function limpar() {
    valor1 = '';
    valor2 = '';
    operacao = '';
}

function calcular() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    if (operacao == '+') {
        resultado = valor1 + valor2;
    }
    else if (operacao == '-') {
        resultado = valor1 - valor2;
    }
    else if (operacao == '*') {
        resultado = valor1 * valor2;
    }
    else if (operacao == '/') {
        resultado = valor1 / valor2;
    }
    alert('Resultado: ' + resultado);
    limpar();
}

function calcularComSwitch() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
    }
    alert('Resultado: ' + resultado);
    limpar();
}

//Exercício 4

function identificarSono() {
    const qtdHoras = prompt('Quantas horas você tem dormido por noite?');
    if (qtdHoras < 8) {
        alert('Você está dormindo pouco. Durma mais!');
    } else {
        alert('Você está dormindo o suficiente, continue assim!');
    }
}

//Exercício 5

//criar um método em fortado de 12 horas

function horaFormato12() {
    const qtdHora = prompt('Que horas são?');

    if (qtdHora > 12) {
        alert(qtdHora - 12 + 'p.m');
    } else {
        alert(qtdHora + 'a.m');
    }
}

function testarOperadorOu() {
    const nro = prompt('Informe um digito');
    if (nro == 5 || nro == 10) {
        alert('O número é 5 ou 10');
    } else {
        alert('Outro número');
    }
}

function testarOperadorE() {
    const idade = prompt('Informe a sua idade');
    const idadeAmigo = prompt('Informe a idade do seu amigo');
    if (idade >= 18 && idadeAmigo >= 18) {
        alert('Vocês estão liberados para beber');
    } else {
        alert('Infelizmente não podem beber');
    }
}

function validarNumeroEntre(vlInicio, vlFinal, vlValidar) {
    if (vlValidar >= vlInicio && vlValidar <= vlFinal) {
        return true;
    }
    return false;
}


//Exercício 6

function verificarEntradaBalada() {
    const idade = prompt('Informe a sua idade');
    const lista = prompt('Você tem nome na lista? Digite Sim ou não');
    const ingresso = prompt('Você tem ingresso? Digite Sim o Não');

    if (idade >= 18 && (ingresso.toUpperCase() == 'SIM' || lista.toUpperCase() == 'SIM')) {
        alert('Entrada permitida');
    } else {
        alert('Entrada negada');
    }
}

function verificarEntradaBaladaMelhorado() {
    if (prompt('Informe a sua idade') >= 18 &&
        (prompt('Você tem nome na lista?Digite Sim ou Não').toUpperCase() == 'SIM'
            || prompt('Você tem ingresso? Digite Sim ou Não').toUpperCase() == 'SIM')) {
        alert('Entrada permitida');
    } else {
        alert('Entrada negada');
    }
}

// Exercício 7

function verificarMeiaEntrada() {
    const idade = prompt('Informe sua idade');
    if (idade < 12 || idade > 60) {
        alert('Você tem direito a meia-entrada');
    } else {
        alert('Você paga entrada inteira');
    }
}

function indentificarNomeUsuario() {
    const nomeUsuario = prompt('Informe seu nome');
    if (!nomeUsuario) {
        alert('Entrada proibida. Obrigatório informar seu nome!');
        indentificarNomeUsuario();
    } else {
        alert('Entrada liberada!')
    }
}

function calcularIMC() {
    const peso = prompt('Qual o seu peso?');
    let altura = prompt('Qual a sua altura?');

    //Verficando se está em centímetros para converter para metros

    if (altura.indexOf('.') == -1 && altura.length > 1) {
        altura = altura / 100;
    }


    const calculo = (peso / (altura * altura)).toFixed(2);

    if (calculo <= 18.5) {
        alert('Seu IMC é ' + calculo + ' e está abaixo do normal');
    } else if (calculo > 18.5 && calculo <= 25) {
        alert('Seu IMC é ' + calculo + ' e está com o peso normal!');
    } else if (calculo > 25 && calculo <= 30) {

        alert('Seu IMC é ' + calculo + ' e está acima do peso!');
    } else {
        alert('Seu IMC é ' + calculo + ' e significa obesidade.')
    }
}

function converterDiaSemana() {
    const diaSemana = parseInt(prompt('Informe o dia da semana em número'));
    const DOMINGO = 1, SEGUNDA = 2, TERCA = 3, QUARTA = 4, QUINTA = 5, SEXTA = 6, SABADO = 7;
    switch (diaSemana) {
        case DOMINGO: {
            alert('Domingo');
            break;
        }
        case SEGUNDA: {
            alert('Segunda-feira');
            break;
        }
        case TERCA: {
            alert('Terça-feira');
            break;
        }
        case QUARTA: {
            alert('Quarta-feira');
            break;
        }
        case QUINTA: {
            alert('Quinta-feira');
            break;
        }
        case SEXTA: {
            alert('Sexta-feira');
            break;
        }
        case SABADO: {
            alert('Sábado');
            break;
        }
        default: {
            alert('Dia inválido');
        }
    }
}

function calcularValorTotal() {
    const valorProduto = parseFloat(prompt('Informe o valor total dos produtos'));
    //calcular o valor da forma de pagamento
    let total = valorProduto + calcularFormaPgto(valorProduto);
    console.log('Total com forma de pagamento: ' + total);
    //calcular o valor do desconto (se houver)
    total -= calcularDesconto(valorProduto);
    console.log('Total com cupom: ' + total);
    //calcular o valor do frete
    total += calcularFrete();
    alert('Total da compra: R$' + total);
}

function calcularFormaPgto(vlProduto) {
    const formaPgto = parseInt(prompt('Informe a forma de pagamento \n1 - Cartão de débito\n2 - Pix\n3 - Cartão de crédito\n4 - Boleto'));
    const CARTAODEB = 1, PIX = 2, CARTAOCRED = 3, BOLETO = 4;
    switch (formaPgto) {
        case CARTAODEB:
            return -(vlProduto * 0.05);
        case PIX:
            return -(vlProduto * 0.1);
        case CARTAOCRED:
            return vlProduto * 0.02;
        case BOLETO:
            return 0;
    }
}

function calcularDesconto(vlProduto) {
    const cupom = prompt('Você possui algum cupom? Se sim, digite-o');
    let valorCupom = cupom.substring(0, 2);
    if (verificarCupomValido(valorCupom)) {
        //aplicar o desconto
        return vlProduto * (valorCupom / 100);
    }
    return 0;
}

function verificarCupomValido(valorCupom) {
    return !isNaN(valorCupom);
}

function calcularFrete() {
    const tipoFrete = parseInt(prompt('Escolha o tipo de frete\n1 - Frete Padrão \n2 - Frete Expresso'));
    const FRETEPADRAO = 1, FRETEEXPRESSO = 2;
    switch (tipoFrete) {
        case FRETEPADRAO:
            return 10;
        case FRETEEXPRESSO:
            return 20;
    }
    return 0;
}

function loopUmaDez() {
    console.log('Loop com for:');
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
    console.log('Loop com while:');
    let c = 1;
    while (c <= 10) {
        console.log(c);
        c++;
    }
}

function loopDezaUm() {
    console.log('Loop com for:');
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }
    console.log('Loop com while:');
    let c = 10;
    while (c > 0) {
        console.log(c);
        c--;
    }
}

function loopParesAteDez() {
    console.log('Loop com for:');
    for (let i = 0; i <= 10; i += 2) {
        console.log(i)
    }
    console.log('Loop com while:');
    let c = 0;
    while (c <= 10) {
        console.log(c);
        c += 2;
    }
}

function loopImparesAteDez() {
    console.log('Loop com for:');
    for (let i = 1; i <= 10; i += 2) {
        console.log(i)
    }
    console.log('Loop com while:');
    let c = 1;
    while (c <= 10) {
        console.log(c);
        c += 2;
    }
}

function whileBreakEContinue() {
    let numero = 0;
    while (numero != 7) {
        numero = prompt('Informe um número');
        if (numero == 5) {
            console.log('Achou um easter egg e pode sair do loop');
            break;
        } else if (numero == 3) {
            console.log("Não imprime o número");
            continue;
        }
        console.log(numero);
    }
}

function pedirNota() {
    let nota = 11;
    while (nota < 0 || nota > 10) {
        nota = prompt('Informe uma nota entre 0 e 10.');
        if (nota < 0 || nota > 10) {
            alert('Nota inválida');
        }
    }
    alert('Nota válida');
}

function pedirNotaWhileTrue() {
    let nota;
    while (true) {
        nota = prompt('Informe uma nota entre 0 e 10.');
        if (nota < 0 || nota > 10) {
            alert('Nota inválida.');
        } else {
            break;
        }
    }
    alert('Nota válida');
}

function realizarLogin() {
    const usuario = 'barbara@hotmail.com';
    const senha = '1234';
    let usuarioLogin, senhaLogin;
    while (usuarioLogin != usuario || senhaLogin != senha) {
        usuarioLogin = prompt('Informe seu usuário de login');
        senhaLogin = prompt('Informe sua senha');
    }
    alert('Login realizado');
}

function realizarLoginWTrue() {
    const usuario = 'barbara@hotmail.com';
    const senha = '1234';
    let usuarioLogin, senhaLogin;
    while (true) {
        usuarioLogin = prompt('Informe seu usuário de login');
        senhaLogin = prompt('Informe sua senha');
        if (usuarioLogin != usuario || senhaLogin != senha) {
            alert('Usuário ou senha inválidos');
        } else {
            break;
        }
    }
}

function solicitarPalavrasWT() {
    while (true) {
        const palavra = prompt('Informe uma palavra');
        if (palavra.length < 3) {
            console.log('A palavra ' + palavra + ' foi desconsiderada pois possui menos de 3 caracteres.');
            continue;
        } else if (palavra == 'sair') {
            break;
        }
        console.log('Palavra válida:' + palavra);
    }
}

function solicitarPalavras() {
    let palavra;
    while (palavra != 'sair') {
        palavra = prompt('Informe uma palavra');
        if (palavra.length < 3) {
            console.log('A palavra ' + palavra + ' foi desconsiderada pois possui menos de 3 caracteres');
            continue;
        }
        console.log('Palavra válida:' + palavra);
    }
}

function contardorArray() {
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(prompt('Informe 10 valores'))
    }
    console.log(numeros)
}


function realizarLoginUsuarios() {
    const usuarios = ['tamires@@', 'babi123', 'matt456'];
    const senhas = ['123', 'b456', 'm789'];
    let usuarioLogin = prompt('Informe seu usuário de Login');
    let senhaLogin = prompt('Informe sua senha');
    let fezLogin = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i] == usuarioLogin && senhas[i] == senhaLogin) {
            fezLogin = true;
            alert('Login realizado');
            break;
        }
    }
    if (!fezLogin) {
        alert('Usuário ou senha inválido. Tente novamente!');
    }
}

function contarLetrasDasPalavras() {
    const palavras = ['Barbie', 'Polly', 'Suzie'];
    palavras.forEach(letras => {
        console.log('A palavra ' + letras + ' tem ' + letras.length + ' letras');
        alert('A palavra ' + letras + ' tem ' + letras.length + ' letras');
    })
}





