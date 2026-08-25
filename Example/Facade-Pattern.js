// 外观模式(Facade Pattern)

// 通过一个接口封装其他接口
const mobileEvent = {
    stop(event) {
        if (
            typeof event?.preventDefault !== 'function' ||
            typeof event?.stopPropagation !== 'function'
        ) {
            throw new TypeError('必须传入有效的事件对象')
        }

        event.preventDefault()
        event.stopPropagation()
    }
}

element.addEventListener(
    'touchmove',
    event => {
        mobileEvent.stop(event)
    },
    { passive: false }
)
