import React, {Component} from "react";
import {connect} from "react-redux";
import {createAddAction} from "../Actions/actionFactory.js";

class AddToDo extends Component{
    render () {
        let {addClick} = this.props;
        return(
            <div className="head">
                <input ref = "inp" type = "text"/>   
                <button onClick = { () => {
                    addClick(this.refs.inp);
                } }>ADD</button> 
            </div>
        )
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        addClick: (ele) => {
            if (ele.value !== "") {
                Dispatch(createAddAction(ele.value));
            }
        }
    }
}

export default connect(null, mapDispatchToProps) (AddToDo);




// connect源码
// 先执行一遍，再把参数穿进去
// 当把ToDoList传进去之后  WrapperComponent 执行 在内部创建Connect组件作为ToDoList父级
// // connect () (ToDoList)  ->connect -> ToDoList   在ToDoList外部包裹Connect组件  将公共部分放在内部
// const connect = (mapStateToProps, mapDispatchToProps) => {
//     return (WrapperComponent) => {
//         class Connect extends Component {
//             // 组件中的公共部分
//             componentDidMount () {
//                 const store = this.context.store;
//                 this.unsubscribe = store.subscribe( () => {
//                     this.forceUpdata();
//                 })
//             }
//             componentWillUnmount () {
//                 this.unsubscribe();
//             }
//             render () {
//                 const store = this.context.store;
//                 const stateProps = mapStateToProps(store.getState());
//                 const dispatchProps = mapDispatchToProps(store.dispatch);
//                 const props = Object.assign({}, stateProps, dispatchProps);
//                 //return <WrapperComponent {...props}/>
//                 // 或者
//                 return React.createElement(WrapperComponent, props);
//             }
//         }
//         Connect.contextTypes = {
//             store: React.PropTypes.Object
//         };
//         return Connect;
//     }
// }