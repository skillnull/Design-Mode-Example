// 原型模式(Prototype Pattern)

const productPrototype = {
    init(type) {
        this.type = type
        return this
    },

    getType() {
        return this.type
    }
}

function createProduct(type) {
    function F() {}

    F.prototype = productPrototype

    const product = new F()
    product.init(type)

    return product
}

const car = createProduct('丰田CHR')

console.log(car.getType()) // 丰田CHR
