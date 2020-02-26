// 抽象工厂模式(Abstract Factory Pattern)

class User {
    constructor (type) {
        if (new.target === User) {
            throw new Error('抽象类不能实例化！')
        }
        this.type = type
    }
}

class UserOfWechat extends User {
    constructor (name) {
        super('wechat')
        this.name = name
        this.viewPage = ['首页', '通讯录', '发现页']
    }
}

class UserOfQQ extends User {
    constructor (name) {
        super('qq')
        this.name = name
        this.viewPage = ['首页', '通讯录', '发现页']
    }
}

function getUser (type) {
    switch (type) {
        case 'wechat':
            return UserOfWechat
            break
        case 'qq':
            return UserOfQQ
            break
        default:
            throw new Error('参数错误')
            break
    }
}

let WechatUserClass = getUser('wechat')
let QQUserClass = getUser('qq')

let wechatUser = new WechatUserClass('卡卡罗特')
let qqUser = new QQUserClass('贝吉塔')