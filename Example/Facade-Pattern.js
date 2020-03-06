// 外观模式(Facade Pattern)

// 通过一个接口封装其他接口
let mobileEvent = {
    stop: (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
}