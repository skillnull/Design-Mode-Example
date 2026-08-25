// 观察者模式(Observer Pattern)

class Subject {
    #state = 0
    #observers = new Set()

    getState() {
        return this.#state
    }

    setState(state) {
        if (Object.is(this.#state, state)) {
            return
        }

        const previousState = this.#state
        this.#state = state

        this.notifyAllObservers({
            previousState,
            currentState: state
        })
    }

    attach(observer) {
        if (typeof observer?.update !== 'function') {
            throw new TypeError('观察者必须提供 update() 方法')
        }

        this.#observers.add(observer)

        // 返回取消订阅函数
        return () => {
            this.detach(observer)
        }
    }

    detach(observer) {
        return this.#observers.delete(observer)
    }

    notifyAllObservers(change) {
        // 使用快照，避免通知期间修改集合影响当前遍历
        const observers = [...this.#observers]

        for (const observer of observers) {
            observer.update(this, change)
        }
    }
}


// 观察者：
class Observer {
    constructor(name, subject) {
        this.name = name

        this.unsubscribe = subject.attach(this)
    }

    update(subject, change) {
        console.log(
            `${this.name}：`,
            change.previousState,
            '→',
            change.currentState
        )

        console.log('当前状态：', subject.getState())
    }

    dispose() {
        this.unsubscribe()
    }
}

// 使用：
const subject = new Subject()

const observer1 = new Observer('observer 1', subject)
const observer2 = new Observer('observer 2', subject)

subject.setState('hahaha')
