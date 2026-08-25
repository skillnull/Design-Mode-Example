// 适配器模式(Adapter Pattern)
class Target {
    constructor() {
        if (new.target === Target) {
            throw new Error('Target 是抽象类，不能直接实例化')
        }
    }

    small() {
        throw new Error('子类必须实现 small() 方法')
    }
}

class Adaptee {
    big() {
        console.log('执行新的接口')
        return '执行成功'
    }
}

class Adapter extends Target {
    constructor(adaptee) {
        super()

        if (typeof adaptee?.big !== 'function') {
            throw new TypeError('被适配对象必须提供 big() 方法')
        }

        this.adaptee = adaptee
    }

    small() {
        return this.adaptee.big()
    }
}

const adaptee = new Adaptee()
const target = new Adapter(adaptee)

const result = target.small()

console.log(result) // 执行成功
