// 单例模式(Singleton Pattern)

// 惰性单例
const getSingleton = (() => {
    let instance = null

    function createInstance() {
        let privateAttribute = '我是私有属性'

        function privateMethod() {
            return `读取：${privateAttribute}`
        }

        return {
            publicAttribute: '我是对外暴露属性',

            publicMethod() {
                return privateMethod()
            },

            setPrivateAttribute(value) {
                privateAttribute = value
            }
        }
    }

    return function () {
        if (instance === null) {
            instance = createInstance()
        }

        return instance
    }
})()

// 使用

const instance1 = getSingleton()
const instance2 = getSingleton()

console.log(instance1 === instance2) // true
// 读取：我是私有属性
console.log(instance1.publicMethod())
instance1.setPrivateAttribute('修改后的私有属性')
// 读取：修改后的私有属性
console.log(instance2.publicMethod())
