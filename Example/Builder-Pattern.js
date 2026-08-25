// 建造者模式(Builder Pattern)

 定义：使用多个简单的对象一步一步构建成一个复杂的对象。
 目的：将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。
 场景：一些基本部件不会变，而其组合经常变化的时候。

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
