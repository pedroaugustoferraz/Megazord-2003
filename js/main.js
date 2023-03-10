const somar = document.querySelector("#somar")
const subtrair = document.querySelector("#subtrair")

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const botao = document.querySelector(".btn__muda-robo")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
var robos = ['img/megazord.png','img/robocop.png','img/optimus-prime.png','img/robotron.png','img/robotronvermelho.png']

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]")
    
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

const robotron = document.querySelector("#robotron")
robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

var i = 1

botao.addEventListener("click", () =>{
    robotron.attributes[1].value = robos[i]
    i++
    if(i === robos.length){
        i = 0
    }
})


// robotron.addEventListener("click", (evento) => {
//     peca.value = parseInt(peca.value) + 1
// }) realiza uma a????o ap??s certo evento ocorrer "qual elemento selecionado".addEventListenner(evento, a????o)

// robotron.addEventListener("click", (evento) => {
//      peca.value = parseInt(pca.value) + 1
// })


// function dizOI(nome){
//     console.log(nome)
//     console.log("Bem-vindo ao Robotron 2003")
// }

// const robotron = document.querySelector("#robotron")  //armazenamos numa constante um seletor de um arquivo no HTML
//  formas de declarar uma fun????o
//      function(){}
//      () => {}
