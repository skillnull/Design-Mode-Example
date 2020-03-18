// 状态模式(State Pattern)

class SuperHero {
    constructor () {
        this.currentState = []
        this.states = {
            jump () {
                console.log('jump')
            },
            move () {
                console.log('move')
            },
            shoot () {
                console.log('shoot')
            },
            squat () {
                console.log('squat')
            }
        }
    }

    // 更改当前状态
    change (arr) {
        this.currentState = arr
        return this
    }

    run () {
        console.log('..... begin start ......')
        this.currentState.forEach(item => this.states[item] && this.states[item]())
        return this
    }
}

new SuperHero()
    .change(['jump', 'squat'])
    .run()
    .change(['move', 'shoot'])
    .run()