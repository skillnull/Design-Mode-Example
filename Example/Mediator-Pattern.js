// 中介者模式(Mediator Pattern)

// 中介者：统一协调跑道
const tower = {
    currentPlane: null,

    requestLanding(plane) {
        if (this.currentPlane) {
            console.log(`${plane.name}：跑道被占用，请等待`)
            return
        }

        this.currentPlane = plane
        plane.land()
    },

    releaseRunway(plane) {
        if (this.currentPlane === plane) {
            this.currentPlane = null
        }
    }
}

// 参与者：只与塔台通信，不直接联系其他飞机
class Plane {
    constructor(name, tower) {
        this.name = name
        this.tower = tower
    }

    requestLanding() {
        this.tower.requestLanding(this)
    }

    land() {
        console.log(`${this.name}：开始降落`)
    }

    leaveRunway() {
        this.tower.releaseRunway(this)
    }
}

const planeA = new Plane('飞机A', tower)
const planeB = new Plane('飞机B', tower)

planeA.requestLanding() // 飞机A：开始降落
planeB.requestLanding() // 飞机B：跑道被占用，请等待

planeA.leaveRunway()

planeB.requestLanding() // 飞机B：开始降落
