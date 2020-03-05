// 组合模式(Composite Pattern)

// 指令
let directive = {
    eat: {
        excute: () => {
            console.log('eat')
        }
    },
    sleep: {
        excute: () => {
            console.log('sleep')
        }
    },
    code: {
        excute: () => {
            console.log('Get out there and write code!')
        }
    }
}

const callDirective = () => {
    let result = {
        directiveList: [],
        add: (directive) => {
            result.directiveList.push(directive)
        },
        excute: () => {
            for (let ele of result.directiveList.values()) {
                ele.excute()
            }
        }
    }
    return result
}

let command = callDirective()
command.add(directive.eat)
command.add(directive.sleep)
command.add(directive.code)
command.excute()