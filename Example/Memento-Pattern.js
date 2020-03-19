// 备忘录模式(Memento Pattern)

let getPageData = (() => {
        let cache = {}
        return (page, fn) => {
            if (cache[page]) {
                // 已有指定缓存数据
                fun && fn()
            } else {
                // 当前没有指定缓存数据
                // 获取指定数据data
                cache[page] = data
                fn && fn()
            }
        }
    }
)()

getPageData(1, () => {
    // do somthing
})