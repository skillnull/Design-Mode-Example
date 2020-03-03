// 适配器模式(Adapter Pattern)

class Target {
    small () {
        throw new Error('Please overwritten function!')
    }
}

class newTarget {
    big () {
        console.log('新的适配')
    }
}

class Adapter extends Target {
    constructor (newTarget) {
        super()
        this.newTarget = newTarget
    }
    small () {
        this.newTarget.big()
    }
}

let NT = new newTarget()
let AD = new Adapter(NT)
AD.small()