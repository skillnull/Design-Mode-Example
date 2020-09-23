// 命令模式(Command Pattern)

let dialog = {
    show () {
        console.log('show a dialog')
    }
}

let animation = {
    start () {
        console.log('show animation')
    }
}
let setCommand = (btn, cmd) => {
    btn.onclick = () => {
        cmd.run()
    }
}

class ShowDialogCommand {
    constructor (receiver) {
        this.receiver = receiver
    }

    run () {
        this.receiver.show()
    }
}

class StartAnimationCommand {
    constructor (receiver) {
        this.receiver = receiver
    }

    run () {
        this.receiver.start()
    }
}


setCommand(btn1, new ShowDialogCommand(dialog))
setCommand(btn2, new StartAnimationCommand(animation))