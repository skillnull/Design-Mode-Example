// 命令模式(Command Pattern)

// 1. 接收者：真正做事
const light = {
    turnOn() {
        console.log('灯亮了')
    }
}

// 2. 命令：封装“让这盏灯打开”的请求
class TurnOnCommand {
    constructor(light) {
        this.light = light
    }

    execute() {
        this.light.turnOn()
    }
}

// 3. 调用者：只负责执行命令
const remote = {
    press(command) {
        command.execute()
    }
}

// 使用
const command = new TurnOnCommand(light)

remote.press(command) // 灯亮了
