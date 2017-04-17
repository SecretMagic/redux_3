export const createAddAction = (text) => {
    return {
        type: "ADD_TODO",
        text: text
    }
}
export const createTouchAction = (id) => {
    return {
        type: "TOUCH_TODO",
        id: id
    }
}
// export const createFilterAction = (text) => {
//     return {
//         type: "FILTER",
//         filterText: text
//     }
// }