import { createStore } from "redux";
import React, { Component } from "react";
import ReactDom from "react-dom";
import Footer from "../Containers/Footer.js";
import AddToDo from "../Containers/AddToDo.js";
import ToDoList from "../Containers/ToDoList.js";//被包裹的子组件
import rootReducers from "../Reducer/rootReducers.js";
import {saveState, getState} from "./cache.js";
import {throttle} from "lodash";
import Root from "../Components/Root.js";

const addLoggerToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        const ret = rawDispatch(action);
        return ret;
    }
}

const configureStore = () => {
    const store = createStore(rootReducers);

    store.dispatch = addLoggerToDispatch(store);

    return store;
}

const render = () => {
    ReactDom.render( 
        <Root store={configureStore()}></Root>,
        document.getElementById("root")
    )
}
render();