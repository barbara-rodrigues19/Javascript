let btn = document.querySelector("button");

let mostrarOi = () => {
    console.log("oi")
}

btn.addEventListener("click",mostrarOi)

let h1 =  document.querySelector("h1")

document.addEventListener("keypress",(e)=>{
    if(e.key == "f"){
        document.querySelector("h1").classList.toggle("fundo-branco")
    }
})

document.addEventListener("keydown", (e) =>{
    if(e.key == "space"){
        document.querySelector(".quadrado").classList.toggle("slide-rotate-hor-top")
    }
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key)
    if(e.key == "Escape"){
        document.querySelector(".bola").classList.toggle("slide-out-blurred-right")
    }
})






