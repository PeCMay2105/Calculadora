
class cilinder{
    radius;
    height;
    _pi = 3.14;
    

    get pi(){
        return  this._pi
    }
    constructor(radius,height){
        this.radius=radius
        this.height=height
        
    }

    volume(){
    
    var height = this.height
    var pi = this.pi
    var BA = pi*(this.radius**2) 
    let volume = (BA*height)/3
     return volume
    }


    
}

let cilindro = new cilinder(10,8)
/* console.log(cilindro)
console.log(cilindro.volume) */

console.log(cilindro.volume())
console.log(cilindro)
