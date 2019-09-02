// 工厂模式(Factory Pattern)

let operationFactory = {
    createOperate (operate) {
        let oper = null
        switch (operate) {
            case '+':
                oper = new operationFactory.OperationAdd()
                break
            case '-':
                oper = new operationFactory.OperationSub()
                break
            case '*':
                oper = new operationFactory.OperationMul()
                break
            case '/':
                oper = new operationFactory.OperationDiv()
                break
        }
    },
    OperationAdd () {
        // TODO run the addition operation
    },
    OperationSub () {
        // TODO run the subtraction operation
    },
    OperationMul () {
        // TODO run the multiplication operation
    },
    OperationDiv () {
        // TODO run the division operation
    }
}