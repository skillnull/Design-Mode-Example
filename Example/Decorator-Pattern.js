// 装饰模式(Decorator Pattern)

// 一辆小汽车 的构造函数
function ACar () {
    // 一辆原味小汽车的价格是 99 元
    this.price = function () {
        return 99
    }
}

// 装饰器 —— 汽车喇叭
function carTrumpet (car) {
    let price = car.price()
    car.trumpet = function () {
        console.log('滴 滴滴')
    }
    // 一个喇叭加价 10 元
    car.price = function () {
        return price + 10
    }
}

// 装饰器 —— 行车记录仪
function carRecorder (car) {
    let price = car.price()
    car.recorder = function () {
        console.log('让一让啊 让一让 我有行车记录仪')
    }
    // 一个行车记录仪加价 9.9 元
    car.price = function () {
        return price + 9.9
    }
}

// 初始化一辆小汽车
let car = new ACar()
// 给小汽车装上喇叭
carTrumpet(car)
// 给小汽车装上行车记录仪
carRecorder(car)
// 最后小汽车的价格是 118.9 元
console.log(car.price())