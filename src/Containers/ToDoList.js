import React, {Component} from "react";
import {connect} from "react-redux";
import {createTouchAction} from "../Actions/actionFactory.js";
import {withRouter} from "react-router";

const filterToDoList = (toDoList, filterText) => {
    switch (filterText) {
        case "SHOW_COMPLETED":
            return toDoList.filter((ele, index) => {
                return !ele.completed;
            });
        case "SHOW_ACTIVE":
            return toDoList.filter((ele, index) => {
                return ele.completed;
            });
        default:
            return toDoList;
    }
}

class ToDoList extends Component{
    render () {

        let {toDoList, touchToDo} = this.props;
        return(
            <ul className="showMessage">
                {
                    toDoList.map((ele, index) => {
                        return <li onClick = { () => {  
                            touchToDo(ele.id)
                        } } key = { ele.id } style = { { textDecoration: ele.completed ? "line-through" : "none" } }> { ele.text } </li>
                    })    
                }
            </ul>
        )
    }
}
                       //store.getState()
const mapStateToProps = (state, ownProps) => {
    return {
        toDoList: filterToDoList(state.toDoList, ownProps.params.filterText || "SHOW_ALL")
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        touchToDo: (id) => {
            Dispatch(createTouchAction(id))
        }
    }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps) (ToDoList) );