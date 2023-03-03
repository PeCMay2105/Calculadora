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

del.addEventListener('click', event =>{
    const visor = document.querySelector(".visor")
    let memoria = localStorage.getItem('conta')
    let Visor = visor.textContent
    let newValue = deletaDigito(Visor)
    visor.textContent = newValue
    atualizaStorage(newValue)
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
        if(botao.hasAttribute("data-virgula")){
        visor.textContent += '.'
        localStorage.setItem('conta',visor.textContent)
        }

        else if(!botao.hasAttribute("data-operacao")){
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

function deletaDigito(numero){
    let valor = numero/10
    if(isNaN(valor)){
      return deletaOperacao(numero)
      
    }
    let arredondado = valor.toFixed(0)
    if(arredondado > numero){
        return arredondado -1
    }
    else{
        return arredondado
    }
}

function atualizaStorage(numero){
    localStorage.setItem('conta',numero)
}

function deletaOperacao(info){
    // transforma valor recebido em string
    let strOpDel = info.toString()
    //
    let opDel = strOpDel.at(-1)
    
    console.log(opDel)
    
    let deletado = strOpDel.replace(opDel,'')

    return deletado
}