// 迭代器模式(Iterator Pattern)

function each(iterable, callback) {
    if (iterable == null || typeof iterable[Symbol.iterator] !== 'function') {
        throw new TypeError('第一个参数必须是可迭代对象')
    }

    if (typeof callback !== 'function') {
        throw new TypeError('callback 必须是函数')
    }

    let index = 0

    for (const value of iterable) {
        if (callback(index, value, iterable) === false) {
            break
        }

        index++
    }

    return iterable
}

// 使用：
each(new Set(['a', 'b', 'c']), (index, value) => {
    console.log(index, value)
})
