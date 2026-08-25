// 模版方法模式(Template Method Pattern)

class Beverage {
    // 公共步骤
    boilWater() {
        console.log('烧水')
    }

    // 要求子类实现的可变步骤
    brew() {
        throw new Error('子类必须实现 brew() 方法')
    }

    // 模板方法
    prepare() {
        this.boilWater()
        this.brew()
    }
}

class Tea extends Beverage {
    brew() {
        console.log('头杯茶不喝，喝第三杯')
    }
}

const tea = new Tea()
tea.prepare()
