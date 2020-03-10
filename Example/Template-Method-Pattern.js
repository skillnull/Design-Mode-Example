// 模版方法模式(Template Method Pattern)

// 定义烧水类
class BoilWater {
    constructor () {

    }

    // 烧水
    boilWater = () => {
        console.log('I am boil the water!')
    }
    // 沏茶
    makeTea = () => {
        console.log('大碗茶，上嘞')
    }
    init = () => {
        this.boilWater()
        this.makeTea()
    }
}

class Tea extends BoilWater {
    constructor () {
        super()
    }

    // 重写沏茶
    makeTea = () => {
        console.log('头杯茶不喝，喝第三杯')
    }
}

let tea = new Tea()
tea.init()