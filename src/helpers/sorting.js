export function sortItems(arr, sortBy) {
    const arrCopy = [...arr]
    arrCopy.sort((a, b) => {
        b[sortBy] - a[sortBy]
    })
    return arrCopy
}
