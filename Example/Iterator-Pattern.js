// 迭代器模式(Iterator Pattern)

let each = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        if (callBack && callBack(i, arr[i]) === false) {
            break;
        }
    }
}

let arr = [1, 2, 3, 4]
each(arr, (index, value) => {
    if (value > 2) return false
    console.log(index, value)
})