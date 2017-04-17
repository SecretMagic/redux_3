import { combineReducers } from "redux";
// import filterReducer from "./filterReducers.js";
import toDoReducer from "./toDoReducers.js";


let rootReducers = combineReducers({
    toDoList: toDoReducer
    // filterText: filterReducer
});


export default rootReducers;