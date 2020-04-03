// 中介者模式(Mediator Pattern)

let mediator = (() => {
    let msg = {}
    return {
        register: (type, action) => {
            if (!msg[type]) msg[type] = []
            msg[type].push(action)
        },
        send: (type) => {
            if (msg[type]) {
                for (let i = 0; i < msg[type].length; i++) {
                    msg[type][i] && msg[type][i]()
                }
            }
        }
    }
})()

mediator.register('demo', () => {
    console.log('first')
})
mediator.register('demo', () => {
    console.log('second')
})
mediator.send('demo')