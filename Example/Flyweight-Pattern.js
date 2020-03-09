// 享元模式(Flyweight Pattern)

// 构建享元对象
class Modal {
    constructor (id, gender) {
        this.gender = gender
        this.name = `${gender}${id}`
    }
}

// 构建享元工厂
class ModalFactory {
    // 单例模式
    static create (id, gender) {
        if (this[gender]) {
            return this[gender]
        }
        return this[gender] = new Modal(id, gender)
    }
}

// 管理外部状态
class TakeClothersManager {
    // 添加衣服款式
    static addClothes (id, gender, clothes) {
        const modal = ModalFactory.create(id, gender)
        this[id] = {
            clothes,
            modal
        }
    }

    // 拍照
    static takePhoto (id) {
        const obj = this[id]
        console.log(`${obj.modal.gender}模${obj.modal.name}穿${obj.clothes}拍了照`)
    }
}

for (let i = 0; i < 10; i++) {
    TakeClothersManager.addClothes(i, '男', `服装${i}`)
    TakeClothersManager.takePhoto(i)
}

for (let i = 10; i < 20; i++) {
    TakeClothersManager.addClothes(i, '女', `服装${i}`)
    TakeClothersManager.takePhoto(i)
}