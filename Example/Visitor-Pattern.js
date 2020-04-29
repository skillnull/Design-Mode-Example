// 访问者模式(Visitor Pattern)

// 元素类
class Elements {
    constructor () {
        this.action = () => {
            console.log('hi～')
        }
        this.accept = (visitor) => {
            visitor.visit(this)
        }
    }
}

// 访问者
class Visitor {
    constructor () {
        this.visit = (elements) => {
            elements.action()
        }
    }
}


const ele = new Elements()
const visi = new Visitor()
ele.accept(visi)