// 单例模式(Singleton Pattern)

// 惰性单例
let lazySingle = (() => {
    let _instance = null
    // 单例
    Single = () => {
        let privateAttribute = '我是私有属性'
        privateMethod = () => {
            // 私有方法
        }
        return {
            publicMethod: () => {
                // 对外暴露方法
            },
            publicAttribute: '我是对外暴露属性'
        }
    }
    // 提供一个全局访问点
    return () => {
        if (!_instance) {
            _instance = Single()
        }
        return _instance
    }
})()