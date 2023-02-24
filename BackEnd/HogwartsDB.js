import { grade } from "./GradeHoraria.js";


class aluno {
    nome;
    serie;
    casa;
    //grade_horaria;
    aulas;

    constructor(nome,serie,casa){
        this.nome = nome
        this.serie = serie
        this.casa = casa
        this.aulas = []
        //this.grade_horaria = new grade(serie)
    }
}

const cicloBasico = {
    1:'Defesa contra as artes das trevas',
    2:'Poções',
    3:'feitiços',
    4:'História da Magia'
    }



const Fred = new aluno('Fred',4,'Grifinoria')
Fred.aulas.push(cicloBasico)

console.log(Fred)