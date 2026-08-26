// 职责链模式(Chain of Responsibility Pattern)

class Approver {
    constructor(name, limit) {
        this.name = name
        this.limit = limit
        this.next = null
    }

    processRequest(request) {
        // 自己能处理，就处理并结束
        if (request.amount < this.limit) {
            console.log(`${this.name}批准采购：${request.productName}`)
            return
        }

        // 自己不能处理，交给下一级
        if (this.next) {
            return this.next.processRequest(request)
        }

        // 已经到达链尾，仍然无法处理
        console.log(`采购金额超出审批权限：${request.productName}`)
    }
}

// 创建审批者
const manager = new Approver('经理', 10000)
const vicePresident = new Approver('副总', 25000)
const president = new Approver('总经理', 100000)

// 连接职责链：经理 → 副总 → 总经理
manager.next = vicePresident
vicePresident.next = president

// 所有请求都从链头提交
manager.processRequest({ amount: 4000, productName: '电话' })
manager.processRequest({ amount: 10000, productName: '软件' })
manager.processRequest({ amount: 40000, productName: '电脑' })
manager.processRequest({ amount: 200000, productName: '服务器' })
