// 桥接模式(Bridge Pattern)

let each = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (fn.call(val, i, val, arr)) {
            return false
        }
    }
}

let arr = [1, 2, 3, 4]
each(arr, (i, v) => {
    arr[i] = v * 2
})