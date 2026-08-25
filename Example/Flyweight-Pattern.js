// 享元模式(Flyweight Pattern)

// 享元对象：只保存可共享的内部状态
class Model {
    constructor(gender) {
        this.gender = gender
        Object.freeze(this)
    }

    takePhoto({ name, clothes }) {
        console.log(
            `${this.gender}模${name}穿${clothes}拍了照`
        )
    }
}

// 享元工厂
class ModelFactory {
    static #models = new Map()

    static getModel(gender) {
        if (!this.#models.has(gender)) {
            this.#models.set(gender, new Model(gender))
        }

        return this.#models.get(gender)
    }

    static getCount() {
        return this.#models.size
    }
}

// 外部状态管理器
class ClothingShootManager {
    static #records = new Map()

    static addClothes(id, gender, clothes) {
        this.#records.set(id, {
            id,
            name: `${gender}${id}`,
            clothes,
            model: ModelFactory.getModel(gender)
        })
    }

    static takePhoto(id) {
        const record = this.#records.get(id)

        if (!record) {
            throw new Error(`不存在编号为 ${id} 的拍摄记录`)
        }

        record.model.takePhoto({
            name: record.name,
            clothes: record.clothes
        })
    }
}


for (let i = 0; i < 10; i++) {
    ClothingShootManager.addClothes(i, '男', `服装${i}`)
    ClothingShootManager.takePhoto(i)
}

for (let i = 10; i < 20; i++) {
    ClothingShootManager.addClothes(i, '女', `服装${i}`)
    ClothingShootManager.takePhoto(i)
}

console.log(ModelFactory.getCount()) // 2
