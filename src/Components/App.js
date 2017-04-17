import React, { Component } from "react";
import Footer from "../Containers/Footer.js";
import AddToDo from "../Containers/AddToDo.js";
import ToDoList from "../Containers/ToDoList.js";//被包裹的子组件



class App extends Component {
    render() {
        return ( 
            <div className="wrapper">
                <AddToDo></AddToDo>
                <ToDoList></ToDoList>
                <Footer></Footer>
            </div>
        )
    }
}


export default App;