// 备忘录模式(Memento Pattern)

function createPageCache() {
    const cache = new Map()

    return async function getPageData(page, loader) {
        if (cache.has(page)) {
            return cache.get(page)
        }

        const data = await loader(page)
        cache.set(page, data)

        return data
    }
}

const getPageData = createPageCache()

// 使用：
async function fetchPageData(page) {
    console.log(`请求第 ${page} 页数据`)

    return {
        page,
        list: ['数据1', '数据2']
    }
}

const data1 = await getPageData(1, fetchPageData)
const data2 = await getPageData(1, fetchPageData)

console.log(data1)
console.log(data2)
