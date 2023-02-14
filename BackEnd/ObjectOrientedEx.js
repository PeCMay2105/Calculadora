
class shape{
    name;
    sides;
    sideLength;

    constructor(name,side,length){
        this.name = name
        this.sides = side
        this.sideLength = length

    }

    perimeter(){
        return (this.sides*this.sideLength)
    }

}

const shape1 = new shape('square',4,5)
/* console.log(shape1)
console.log(shape1.perimeter()) */

const shape2 = new shape('triangle',3,3)
/* console.log(shape2)
console.log(shape2.perimeter()) */

class square extends shape{
    constructor(sideLength){
        super()
        this.sideLength=sideLength
        this.name = 'square'
        this.sides = 4
    }
    area(){
        let sideValue = this.sideLength
        return sideValue**2
    }
}

const squareTest = new square(5)
console.log(squareTest)
console.log(squareTest.perimeter())
console.log(squareTest.area())