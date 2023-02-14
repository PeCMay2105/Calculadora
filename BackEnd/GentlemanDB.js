class membros{
    nome;
    tempo_de_casa;
    idade;
    posicao;
    cargo;

    constructor(nome,tempo,idade,cargo){
        this.nome = nome
        this.tempo_de_casa = tempo
        this.idade = idade
        this.cargo = cargo
    }
    
    posicionador(tempo_de_casa){
            if(tempo_de_casa > 3){
                this.posicao = 'veterano'
            }
            else{
                this.posicao = 'membro recente'
            }
        }
        
}


const membro1 = new membros('Daniel',4,18)
const membro2 = new membros('inacio',4,18)
const membro3 = new membros('pedro',4,17)

console.log(membro1)

const classificacao1 = new classificacao(membro1)
console.log (classificacao1)

