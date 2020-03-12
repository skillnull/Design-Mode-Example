// 观察者模式(Observer Pattern)

class Subject {
    constructor () {
        this.state = 0
        this.observers = []
    }

    getState () {
        return this.state
    }

    setState (state) {
        this.state = state
        this.notifyAllObsevers()
    }

    attach (observer) {
        this.observers.push(observer)
    }

    notifyAllObsevers () {
        for (let ele of this.observers.values()) {
            ele.update()
        }
    }
}

class Observer {
    constructor (name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update () {
        console.log(this.name,this.subject.getState())
    }
}

let subject = new Subject()
let observer = new Observer('observer 1', subject)
subject.setState('hahaha')