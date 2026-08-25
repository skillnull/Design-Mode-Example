// 抽象工厂模式(Abstract Factory Pattern)

class User {
    constructor(type, name) {
        if (new.target === User) {
            throw new Error('抽象类不能实例化！')
        }

        this.type = type
        this.name = name
        this.viewPage = ['首页', '通讯录', '发现页']
    }
}

class UserOfWechat extends User {
    constructor(name) {
        super('wechat', name)
    }
}

class UserOfQQ extends User {
    constructor(name) {
        super('qq', name)
    }
}

const userClasses = {
    wechat: UserOfWechat,
    qq: UserOfQQ
}

function getUserClass(type) {
    const UserClass = userClasses[type]

    if (!UserClass) {
        throw new Error(`不支持的用户类型：${type}`)
    }

    return UserClass
}

const WechatUserClass = getUserClass('wechat')
const wechatUser = new WechatUserClass('卡卡罗特')
