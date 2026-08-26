// 访问者模式(Visitor Pattern)

// 元素：圆形
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    accept(visitor) {
        return visitor.visitCircle(this)
    }
}

// 元素：矩形
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    accept(visitor) {
        return visitor.visitRectangle(this)
    }
}

// 访问者：计算面积
class AreaVisitor {
    visitCircle(circle) {
        return Math.PI * circle.radius ** 2
    }

    visitRectangle(rectangle) {
        return rectangle.width * rectangle.height
    }
}

// 访问者：计算周长
class PerimeterVisitor {
    visitCircle(circle) {
        return 2 * Math.PI * circle.radius
    }

    visitRectangle(rectangle) {
        return 2 * (rectangle.width + rectangle.height)
    }
}

// 使用
const rectangle = new Rectangle(3, 4)
const circle = new Circle(1)

const areaVisitor = new AreaVisitor()
const perimeterVisitor = new PerimeterVisitor()

console.log(rectangle.accept(areaVisitor))      // 12
console.log(rectangle.accept(perimeterVisitor)) // 14

console.log(circle.accept(areaVisitor))         // 约 3.14
console.log(circle.accept(perimeterVisitor))    // 约 6.28
