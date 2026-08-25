// 组合模式(Composite Pattern)
class Command {
    execute() {
        throw new Error('子类必须实现 execute() 方法')
    }
}

class SimpleCommand extends Command {
    constructor(action) {
        super()

        if (typeof action !== 'function') {
            throw new TypeError('action 必须是函数')
        }

        this.action = action
    }

    execute() {
        return this.action()
    }
}

class CompositeCommand extends Command {
    #children = []

    add(command) {
        if (!(command instanceof Command)) {
            throw new TypeError('只能添加 Command 类型的对象')
        }

        if (command === this) {
            throw new Error('不能将组合对象添加到自身')
        }

        this.#children.push(command)
        return this
    }

    remove(command) {
        const index = this.#children.indexOf(command)

        if (index !== -1) {
            this.#children.splice(index, 1)
        }

        return this
    }

    execute() {
        for (const command of this.#children) {
            command.execute()
        }
    }
}

// 创建叶子指令：
const eat = new SimpleCommand(() => {
    console.log('eat')
})

const sleep = new SimpleCommand(() => {
    console.log('sleep')
})

const code = new SimpleCommand(() => {
    console.log('Get out there and write code!')
})

// 组合使用：
const morning = new CompositeCommand()
    .add(eat)
    .add(code)

const daily = new CompositeCommand()
    .add(morning)
    .add(sleep)

daily.execute()
