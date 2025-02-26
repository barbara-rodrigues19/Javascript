
let aluno = document.querySelector('.aluno')
aluno.innerHTML = 'hora do café ☕ ^-^'

let botao = document.querySelector(".cadastrar-aluno")
botao.innerHTML = 'CLIQUE AQUI'

document.querySelector('.cadastrar-aluno').innerHTML = 'Ooie!'

//Selecionar o tag P através da classe 'texto' e salva a variável
//ou seja, a variável txt é uma instância do elemento html selecionado
let txt = document.querySelector('.texto')
txt.style.backgroundColor = 'pink'
txt.style.color = 'blue'


let estrela = document.querySelector('.estrela')

estrela.addEventListener('click',()=> {
    if(estrela.innerText == '⭐') {
        estrela.innerText = '🌟'
    }
})

let ovo = document.querySelector('.ovo')

ovo.addEventListener('click',()=>{
    if(ovo.innerText == '🥚') {
        ovo.innerText = '🐣'
    } else if (ovo.innerText == '🐣' ) {
        ovo.innerText = '🐥'
    } else if ( ovo.innerText == '🐥') {
        ovo.innerText = '🐔'
    } else if (ovo.innerText == '🐔') {
        ovo.innerText = '🍗'
    } else if (ovo.innerText == '🍗') {
        ovo.innerText = '🥚'
    }

})
