// 解释器模式(Interpreter Pattern)

// 基础表达式：判断是否包含关键词
class Keyword {
    constructor(word) {
        this.word = word
    }

    interpret(context) {
        return context.includes(this.word)
    }
}

// 或表达式：满足任意一个条件
class Or {
    constructor(left, right) {
        this.left = left
        this.right = right
    }

    interpret(context) {
        return this.left.interpret(context) ||
               this.right.interpret(context)
    }
}

// 与表达式：必须同时满足两个条件
class And {
    constructor(left, right) {
        this.left = left
        this.right = right
    }

    interpret(context) {
        return this.left.interpret(context) &&
               this.right.interpret(context)
    }
}

// 构建规则：(John OR Robert) AND Married
const rule = new And(
    new Or(
        new Keyword('John'),
        new Keyword('Robert')
    ),
    new Keyword('Married')
)

// 解释输入，得到结果
console.log(rule.interpret('John Married'))   // true
console.log(rule.interpret('Robert Married')) // true
console.log(rule.interpret('John'))           // false
console.log(rule.interpret('Julie Married'))  // false
