// 策略模式(Strategy Pattern)

// 策略算法封装
let strategy = {
    add (number1, number2) {
        return number1 + number2
    },
    sub (number1, number2) {
        return number1 - number2
    },
    mul (number1, number2) {
        return number1 * number2
    },
    div (number1, number2) {
        return number1 * number2
    }
}

// 策略算法调用封装
function callStratery (strategyType, number1, number2) {
    return strategy[strategyType](number1, number2)
}

// 策略算法调用
callStratery(add, 1, 2) // return 3