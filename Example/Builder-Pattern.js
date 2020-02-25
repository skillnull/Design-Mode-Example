// 建造者模式(Builder Pattern)

// 声明一个产品类
class Product {
    constructor () {

    }
}

// 声明一个建造者类
class BuilderProduct {
    constructor () {
        // 建造产品名称
        this.nameBuilder = (name) => {
            this.name = name || null
        }
        // 建造产品版本
        this.versionBuilder = (version) => {
            this.version = version || null
        }
        // 建造产品生产日期
        this.createTimeBuilder = (createTime) => {
            this.createTime = createTime || null
        }
        // 组合建造产品
        this.getProduct = () => {
            let product = new Product()
            if (this.name) {
                product.name = this.name
            }

            if (this.version) {
                product.version = this.version
            }

            if (this.createTime) {
                product.createTime = this.createTime
            }

            return product
        }
    }

}

// 声明一个需求类
class Demand {
    constructor (demands) {
        let builderProduct = new BuilderProduct()
        builderProduct.nameBuilder(demands.name)
        builderProduct.versionBuilder(demands.version)
        builderProduct.createTimeBuilder(demands.createTime)
        return builderProduct.getProduct()
    }
}

let demand = new Demand({
    name: 'SKILL.NULL'
})