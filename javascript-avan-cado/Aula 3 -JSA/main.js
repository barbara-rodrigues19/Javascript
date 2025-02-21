let frutas = ["limão", "banana", "maracujá", "manga", "melancia", "melão", "bergamota", "laranja", "morango", "kiwi", "tomate", "lichia", "uva", "pêra", "maçã"]

function atualizarListaFrutas() {
    let ulFrutas = document.querySelector(".frutas")
    ulFrutas.innerHTML = ""

    frutas.forEach(fruta =>{
        // let liFruta = document.createElement("li") cria li e salva na variavel
        // liFruta.innerHTML = fruta adiciona dentro da li 
        // ulFrutas.appendChild(liFruta) acrescenta a li na web

        ulFrutas.innerHTML += `<li>${fruta}</li>`
    })
}

atualizarListaFrutas()

//1- Adicionar evento "click" no botão ✔
//2- Pega o valor do input e salva em uma variavel ✔
//3- Adicionar o valor da variavel dentro da lista✔
//4 - Roda a função atualizarListaFrutas()✔

document.querySelector(".btn-fruta")
.addEventListener("Click", ()=>{
    let input = document.querySelector(".nome-fruta")
    frutas.push(input.value)
    atualizarListaFrutas()
})
