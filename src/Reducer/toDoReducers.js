import { v4 } from "node-uuid";

const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            let newState = [...state];
            newState.push({
                text: action.text,
                id: v4(),
                completed: false
            });
            return newState;
        case "TOUCH_TODO":
            let newTouchState = state.map((ele, index) => {
                if (ele.id === action.id) {
                    let newEle = Object.assign({}, ele, { completed: !ele.completed });
                    return newEle;
                }
                return ele;
            })
            return newTouchState;
        default:
            return state;
    }
}

export default toDoReducer;