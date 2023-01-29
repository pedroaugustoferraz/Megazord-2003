const somar = document.querySelector("#somar")
const subtrair = document.querySelector("#subtrair")

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
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







// robotron.addEventListener("click", (evento) => {
//     peca.value = parseInt(peca.value) + 1
// }) realiza uma ação após certo evento ocorrer "qual elemento selecionado".addEventListenner(evento, ação)

// robotron.addEventListener("click", (evento) => {
//      peca.value = parseInt(pca.value) + 1
// })


// function dizOI(nome){
//     console.log(nome)
//     console.log("Bem-vindo ao Robotron 2003")
// }

// const robotron = document.querySelector("#robotron")  //armazenamos numa constante um seletor de um arquivo no HTML
//  formas de declarar uma função
//      function(){}
//      () => {}