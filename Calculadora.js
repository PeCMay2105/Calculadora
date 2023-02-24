const botao = document.querySelectorAll('#botao')
const igual = document.querySelector('[data-sinal]')
const AC = document.querySelector('[data-clear]')
const del = document.querySelector('[data-delete]')
console.log(del)
//console.log(botao)

botao.forEach(elemento => {
    elemento.addEventListener("click",event =>{
        console.log('fui clicado')
        escreveVisor(event)
        //calcula()
    })
})


igual.addEventListener("click", event => {
    const visor = document.querySelector(".visor")
    let conta = localStorage.getItem("conta")
    console.log(conta)
    let inteiro = eval(conta)
    console.log(inteiro)
    visor.textContent = inteiro
})

AC.addEventListener("click", event => {
    const visor = document.querySelector(".visor")
    visor.textContent = ""
})

function escreveVisor(botao){
    //console.log(botao)
    let icone =botao.target
    let caractere = icone.textContent
    /* console.log(icone)
    console.log(caractere) */
    editaVisor(icone)
    
}

function editaVisor(botao){
    let caractere = botao.textContent
    const visor = document.querySelector(".visor")
    let calculo = visor.textContent.toString()
    //visor.textContent += caractere
        if(!botao.hasAttribute("data-operacao")){
        visor.textContent += caractere
        localStorage.setItem("conta",visor.textContent)
        }
        else{
            console.log('esse botão representa uma operação')
        }
    
}

function calcula(){
    let igual = document.querySelector("[data-sinal]")
    const visor = document.querySelector(".visor")
    igual.addEventListener("click", event => {
        console.log("teste")
    })
    console.log(igual)
}

