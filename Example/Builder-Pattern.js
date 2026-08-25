// 建造者模式(Builder Pattern)

class Product {
    constructor() {
        this.name = null
        this.version = null
        this.createTime = null
    }
}

class ProductBuilder {
    constructor() {
        this.product = new Product()
    }

    setName(name) {
        this.product.name = name ?? null
        return this
    }

    setVersion(version) {
        this.product.version = version ?? null
        return this
    }

    setCreateTime(createTime) {
        this.product.createTime = createTime ?? null
        return this
    }

    build() {
        const result = this.product

        // 让当前建造者可以继续构建下一个独立产品
        this.product = new Product()

        return result
    }
}
