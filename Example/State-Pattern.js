// 状态模式(State Pattern)

const stateTable = {
    standing: {
        move: {
            message: '英雄开始移动'
        },
        jump: {
            message: '英雄跳了起来',
            next: 'jumping'
        },
        squat: {
            message: '英雄蹲下',
            next: 'squatting'
        },
        shoot: {
            message: '英雄站立射击'
        }
    },

    jumping: {
        move: {
            message: '英雄在空中调整方向'
        },
        jump: {
            message: '英雄已经在空中，不能再次跳跃'
        },
        squat: {
            message: '英雄在空中，不能蹲下'
        },
        shoot: {
            message: '英雄在空中射击'
        },
        land: {
            message: '英雄落地',
            next: 'standing'
        }
    },

    squatting: {
        move: {
            message: '英雄蹲着缓慢移动'
        },
        jump: {
            message: '英雄从蹲下状态起跳',
            next: 'jumping'
        },
        squat: {
            message: '英雄已经蹲下'
        },
        shoot: {
            message: '英雄蹲下射击'
        },
        stand: {
            message: '英雄站了起来',
            next: 'standing'
        }
    }
}

class SuperHero {
    #state = 'standing'

    get state() {
        return this.#state
    }

    action(actionName) {
        const rule = stateTable[this.#state]?.[actionName]

        if (!rule) {
            console.log(`${this.#state} 状态不支持 ${actionName} 动作`)
            return this
        }

        console.log(rule.message)
        this.#state = rule.next ?? this.#state

        return this
    }
}

// 使用：
const hero = new SuperHero()

hero
    .action('move')
    .action('jump')
    .action('jump')
    .action('shoot')
    .action('land')
    .action('squat')
    .action('move')

console.log(hero.state) // squatting
