
// 1. Alterar o texto de um H1 para “ola mundo":
let h1 = document.querySelector(".saudacao")
h1.innerText = "Ola mundo"

//2.Trocar a cor de fundo de uma lista 2 itens:
let txt = document.querySelector('.colors')
txt.style.backgroundColor = 'salmon'
txt.style.color = 'white'

//3. Alterar o value de um input para “Digite algo aqui”
let input = document.querySelector(".valor")
input.value = "Digite algo aqui"

//4. Criar um quadrado e alterar largura, altura e cor do mesmo

document.addEventListener("click", () => {
    if (e.key == "space") {
        document.querySelector(".quadrado").classList.toggle("slide-rotate-hor-top")
        div.style.width = "100px"; // Largura
        div.style.height = "100px"; // Altura
        div.style.backgroundColor = "blue"
    }

})

var div = document.querySelector(".quadrado")

div.style.width = "200px"; // Largura
div.style.height = "200px"; // Altura
div.style.backgroundColor = "purple"

//2.1 - Criar um botão e adicionar o evento de click para Exibir um alert

var botao = document.getElementById("botao")

botao.addEventListener("click", function () {
    alert("Você clicou no botão!");
})

//2.2 - Criar um elemento <p> com o nome de um animal, adicionar o evento “mouseover” para mudar o texto para um emoji do animal

const animalElement = document.querySelector('.cachorro');

        animalElement.addEventListener('click', function() {
            animalElement.textContent = '🐶'; 
        });


// 2.3 -  Criar uma div com formato de um quadrado e adicionar um evento de 
// “dblclick” (double click) para transformar ela em um circulo (border-radius = 50%)

const quadrado = document.querySelector('.quadrado');

quadrado.addEventListener('dblclick', function() {
    quadrado.style.borderRadius = '50%'; });


   
    