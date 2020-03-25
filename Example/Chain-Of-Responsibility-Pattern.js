// 职责链模式(Chain of Responsibility Pattern)

// 采购请求
let PurchaseRequest = (amount, productName) => {
    this.amount = amount
    this.productName = productName
}

// 处理方
let Approver = (name, nextApprover) => {
    this.name = name
    this.nextApprover = nextApprover
}

Approver.prototype.processRequest = () => {
    throw new Error()
}

// ConcreteHandler
let Manager = (name, nextApprover) => {
    Approver.call(this, name, nextApprover)
}
extend(Manager, Approver)
Manager.prototype.processRequest = (request) => {
    if (request.Amount < 10000.0) {
        console.log('ok')
    } else if (NextApprover != null) {
        this.nextApprover.ProcessRequest(request)
    }
}


// ConcreteHandler,副总
let VicePresident = function (name, nextApprover) {
    Approver.call(this, name, nextApprover)
}
extend(VicePresident, Approver);
VicePresident.prototype.processRequest = function (request) {
    if (request.Amount < 25000.0) {
        console.log('ok');
    } else if (NextApprover != null) {
        this.nextApprover.ProcessRequest(request)
    }
}


// ConcreteHandler，总经理
let President = function (name, nextApprover) {
    Approver.call(this, name, nextApprover)
}
extend(President, Approver)
President.prototype.processRequest = function (request) {
    if (request.Amount < 100000.0) {
        console.log('ok')
    } else if (NextApprover != null) {
        this.nextApprover.ProcessRequest(request)
    }
}


let requestTelphone = new PurchaseRequest(4000.0, "Telphone")
let requestSoftware = new PurchaseRequest(10000.0, "Visual Studio")
let requestComputers = new PurchaseRequest(40000.0, "Computers")

let manager = new Manager("LearningHard")
let Vp = new VicePresident("Tony")
let Pre = new President("BossTom")

// 设置责任链
manager.NextApprover = Vp
Vp.NextApprover = Pre

// 处理请求
manager.ProcessRequest(requestTelphone)
manager.ProcessRequest(requestSoftware)
manager.ProcessRequest(requestComputers)