// 原型模式(Prototype Pattern)

let productPrototype = {
    init: (type) => {
        this.type = type
    },
    getType: () => {
        return this.type
    }
}
let prototype = (type) => {
    function F () {
    }

    F.prototype = productPrototype
    let f = new F()
    f.init(type)
    return f
}


let car = prototype('丰田CHR')
console.log(car.getType())